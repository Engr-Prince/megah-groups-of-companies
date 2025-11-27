import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  timeline?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactRequest = await req.json();
    console.log("Received contact inquiry:", { email: contactData.email, name: `${contactData.firstName} ${contactData.lastName}` });

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Save to database
    const { data: inquiry, error: dbError } = await supabase
      .from("contact_inquiries")
      .insert({
        first_name: contactData.firstName,
        last_name: contactData.lastName,
        email: contactData.email,
        phone: contactData.phone,
        company: contactData.company,
        service: contactData.service,
        budget: contactData.budget,
        message: contactData.message,
        timeline: contactData.timeline,
        status: "new"
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to save inquiry: ${dbError.message}`);
    }

    console.log("Inquiry saved to database:", inquiry.id);

    // Send notification email to admin
    const adminEmailHtml = `
      <h2>New Contact Inquiry from MEGAH Website</h2>
      <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
      ${contactData.company ? `<p><strong>Company:</strong> ${contactData.company}</p>` : ''}
      ${contactData.service ? `<p><strong>Service Interest:</strong> ${contactData.service}</p>` : ''}
      ${contactData.budget ? `<p><strong>Budget:</strong> ${contactData.budget}</p>` : ''}
      ${contactData.timeline ? `<p><strong>Timeline:</strong> ${contactData.timeline}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `;

    const { error: adminEmailError } = await resend.emails.send({
      from: "MEGAH Contact <onboarding@resend.dev>",
      to: ["megahprince82@gmail.com"],
      subject: `New Contact Inquiry from ${contactData.firstName} ${contactData.lastName}`,
      html: adminEmailHtml,
    });

    if (adminEmailError) {
      console.error("Failed to send admin notification:", adminEmailError);
      // Don't throw error - inquiry is saved, email is secondary
    } else {
      console.log("Admin notification sent successfully");
    }

    // Send confirmation email to user
    const userEmailHtml = `
      <h2>Thank you for contacting MEGAH!</h2>
      <p>Dear ${contactData.firstName},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p><strong>Your message:</strong></p>
      <p>${contactData.message}</p>
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
      // Don't throw error - inquiry is saved, email is secondary
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
        error: error.message || "Failed to process contact inquiry" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
