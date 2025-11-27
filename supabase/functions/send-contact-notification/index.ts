import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "npm:resend@2.0.0";
import { z } from "npm:zod@3.23.8";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const contactSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters").max(50, "First name too long"),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters").max(50, "Last name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().max(20, "Phone number too long").optional().nullable(),
  company: z.string().max(100, "Company name too long").optional().nullable(),
  service: z.string().max(100, "Service name too long").optional().nullable(),
  budget: z.string().max(50, "Budget value too long").optional().nullable(),
  timeline: z.string().max(50, "Timeline value too long").optional().nullable(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message too long"),
});

type ContactRequest = z.infer<typeof contactSchema>;

// HTML escape function to prevent XSS in emails
const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, char => map[char]);
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse and validate input
    const rawData = await req.json();
    const parseResult = contactSchema.safeParse(rawData);
    
    if (!parseResult.success) {
      console.error("Validation error:", parseResult.error.flatten());
      return new Response(
        JSON.stringify({ 
          success: false,
          error: "Invalid input", 
          details: parseResult.error.flatten().fieldErrors 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    const contactData: ContactRequest = parseResult.data;
    console.log("Received contact inquiry:", { email: contactData.email, name: `${contactData.firstName} ${contactData.lastName}` });

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Rate limiting: Check recent submissions from this email
    const oneMinuteAgo = new Date(Date.now() - 60000).toISOString();
    const { count: recentCount } = await supabase
      .from("contact_inquiries")
      .select("*", { count: "exact", head: true })
      .eq("email", contactData.email)
      .gte("created_at", oneMinuteAgo);

    if (recentCount && recentCount >= 3) {
      console.warn(`Rate limit exceeded for email: ${contactData.email}`);
      return new Response(
        JSON.stringify({ 
          success: false,
          error: "Too many requests. Please try again later." 
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Save to database
    const { data: inquiry, error: dbError } = await supabase
      .from("contact_inquiries")
      .insert({
        first_name: contactData.firstName,
        last_name: contactData.lastName,
        email: contactData.email,
        phone: contactData.phone || null,
        company: contactData.company || null,
        service: contactData.service || null,
        budget: contactData.budget || null,
        message: contactData.message,
        timeline: contactData.timeline || null,
        status: "new"
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to save inquiry: ${dbError.message}`);
    }

    console.log("Inquiry saved to database:", inquiry.id);

    // Escape user input for safe HTML rendering in emails
    const safeFirstName = escapeHtml(contactData.firstName);
    const safeLastName = escapeHtml(contactData.lastName);
    const safeEmail = escapeHtml(contactData.email);
    const safePhone = contactData.phone ? escapeHtml(contactData.phone) : null;
    const safeCompany = contactData.company ? escapeHtml(contactData.company) : null;
    const safeService = contactData.service ? escapeHtml(contactData.service) : null;
    const safeBudget = contactData.budget ? escapeHtml(contactData.budget) : null;
    const safeTimeline = contactData.timeline ? escapeHtml(contactData.timeline) : null;
    const safeMessage = escapeHtml(contactData.message);

    // Send notification email to admin
    const adminEmailHtml = `
      <h2>New Contact Inquiry from MEGAH Website</h2>
      <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
      ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ''}
      ${safeService ? `<p><strong>Service Interest:</strong> ${safeService}</p>` : ''}
      ${safeBudget ? `<p><strong>Budget:</strong> ${safeBudget}</p>` : ''}
      ${safeTimeline ? `<p><strong>Timeline:</strong> ${safeTimeline}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `;

    const { error: adminEmailError } = await resend.emails.send({
      from: "MEGAH Contact <onboarding@resend.dev>",
      to: ["megahprince82@gmail.com"],
      subject: `New Contact Inquiry from ${safeFirstName} ${safeLastName}`,
      html: adminEmailHtml,
    });

    if (adminEmailError) {
      console.error("Failed to send admin notification:", adminEmailError);
    } else {
      console.log("Admin notification sent successfully");
    }

    // Send confirmation email to user
    const userEmailHtml = `
      <h2>Thank you for contacting MEGAH!</h2>
      <p>Dear ${safeFirstName},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p><strong>Your message:</strong></p>
      <p>${safeMessage}</p>
      <br>
      <p>Best regards,</p>
      <p><strong>The MEGAH Team</strong></p>
    `;

    const { error: userEmailError } = await resend.emails.send({
      from: "MEGAH <onboarding@resend.dev>",
      to: [contactData.email],
      subject: "We received your message - MEGAH",
      html: userEmailHtml,
    });

    if (userEmailError) {
      console.error("Failed to send user confirmation:", userEmailError);
    } else {
      console.log("User confirmation sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact inquiry received successfully",
        id: inquiry.id 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to process contact inquiry" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
