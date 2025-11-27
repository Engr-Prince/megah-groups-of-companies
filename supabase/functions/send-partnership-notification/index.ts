import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "npm:zod@3.23.8";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const partnershipSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  organization: z.string().max(200, "Organization name too long").optional().nullable(),
  supportType: z.string().min(1, "Support type is required").max(100, "Support type too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message too long"),
});

type PartnershipNotification = z.infer<typeof partnershipSchema>;

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
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse and validate input
    const rawData = await req.json();
    const parseResult = partnershipSchema.safeParse(rawData);
    
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
    
    const partnershipData: PartnershipNotification = parseResult.data;
    console.log("Processing partnership inquiry for:", partnershipData.email);

    // Rate limiting: Check recent submissions from this email
    const oneMinuteAgo = new Date(Date.now() - 60000).toISOString();
    const { count: recentCount } = await supabaseAdmin
      .from("partnership_inquiries")
      .select("*", { count: "exact", head: true })
      .eq("email", partnershipData.email)
      .gte("created_at", oneMinuteAgo);

    if (recentCount && recentCount >= 3) {
      console.warn(`Rate limit exceeded for email: ${partnershipData.email}`);
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
    const { data: dbData, error: dbError } = await supabaseAdmin
      .from('partnership_inquiries')
      .insert([{
        name: partnershipData.name,
        email: partnershipData.email,
        organization: partnershipData.organization || null,
        support_type: partnershipData.supportType,
        message: partnershipData.message,
        status: 'new'
      }])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to save inquiry: ${dbError.message}`);
    }

    console.log("Inquiry saved to database:", dbData.id);

    // Escape user input for safe HTML rendering in emails
    const safeName = escapeHtml(partnershipData.name);
    const safeEmail = escapeHtml(partnershipData.email);
    const safeOrganization = partnershipData.organization ? escapeHtml(partnershipData.organization) : null;
    const safeSupportType = escapeHtml(partnershipData.supportType);
    const safeMessage = escapeHtml(partnershipData.message);

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "MEGAH Partnerships <onboarding@resend.dev>",
      to: ["megahprince82@gmail.com"],
      subject: `New Partnership Inquiry from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 3px solid #4CAF50; padding-bottom: 10px;">
            New Partnership Inquiry
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4CAF50; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            ${safeOrganization ? `<p><strong>Organization:</strong> ${safeOrganization}</p>` : ""}
            <p><strong>Support Type:</strong> ${safeSupportType}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4CAF50; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
          </div>
          
          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              📅 Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Douala' })}
            </p>
          </div>
        </div>
      `,
    });

    console.log("Admin notification email sent successfully:", adminEmailResponse);

    // Send auto-reply confirmation email to submitter
    const autoReplyResponse = await resend.emails.send({
      from: "MEGAH <onboarding@resend.dev>",
      to: [partnershipData.email],
      subject: "Thank you for contacting MEGAH!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #4CAF50;">Thank you for reaching out to MEGAH!</h1>
          <p>Dear ${safeName},</p>
          <p>We've received your partnership inquiry and our team will review it shortly.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #4CAF50; margin-top: 0;">Here's what you submitted:</h2>
            <ul style="line-height: 1.8;">
              <li><strong>Support Type:</strong> ${safeSupportType}</li>
              ${safeOrganization ? `<li><strong>Organization:</strong> ${safeOrganization}</li>` : ""}
            </ul>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4CAF50; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">What happens next:</h2>
            <ul style="line-height: 1.8;">
              <li>✓ Our team will review your inquiry within 24-48 hours</li>
              <li>✓ We'll reach out to discuss partnership opportunities</li>
              <li>✓ You'll receive updates via email</li>
            </ul>
          </div>
          
          <p>If you have any immediate questions, feel free to reach out to us directly.</p>
          
          <p>Best regards,<br><strong>The MEGAH Team</strong></p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;"><em>This is an automated confirmation email. Please do not reply directly to this message.</em></p>
        </div>
      `,
    });

    console.log("Auto-reply email sent successfully:", autoReplyResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      adminEmail: adminEmailResponse,
      autoReply: autoReplyResponse
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-partnership-notification function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: "Failed to process partnership inquiry" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
