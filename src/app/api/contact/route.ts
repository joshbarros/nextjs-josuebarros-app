import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Email recipient - set in environment variable
const TO_EMAIL = process.env.CONTACT_EMAIL || "hello@josuebarros.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "contact@josuebarros.com";

interface ContactFormData {
  idea: string;
  timeline: string;
  budget: string;
  funding: string;
  email: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { idea, timeline, budget, funding, email } = body;

    // Validate required fields
    if (!idea || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Format timeline for readability
    const timelineMap: Record<string, string> = {
      asap: "ASAP (1-2 weeks)",
      "1-2months": "1-2 months",
      "3+months": "3+ months",
      flexible: "Flexible",
    };

    // Format funding for readability
    const fundingMap: Record<string, string> = {
      raised: "Yes, raised funding",
      revenue: "Yes, revenue-funded",
      bootstrap: "Bootstrapping",
      other: "Other",
    };

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: `Josué Barros Website <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Project Inquiry: ${budget} budget`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Project Inquiry</h1>

          <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #1e293b; margin-top: 0;">Contact Information</h2>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>

          <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #1e293b; margin-top: 0;">Project Details</h2>
            <p><strong>Timeline:</strong> ${timelineMap[timeline] || timeline}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Funding:</strong> ${fundingMap[funding] || funding}</p>
          </div>

          <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #1e293b; margin-top: 0;">Project Idea</h2>
            <p style="white-space: pre-wrap;">${idea}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">

          <p style="color: #64748b; font-size: 14px;">
            This message was sent from the contact form at josuebarros.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
