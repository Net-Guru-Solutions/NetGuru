import { NextResponse } from "next/server";
import ContactFormEmail from "@/emails/contactForm";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      first_name,
      last_name,
      email,
      company_name,
      company_size,
      help,
      info,
    } = await request.json();

    await resend.emails.send({
      from: "noreply@netgurusolutions.co.uk",
      to: email,
      bcc: ["info@netgurusolutions.co.uk", "itspinky95@hotmail.com"],
      subject: "Contact Form Submission",
      html: ContactFormEmail({
        first_name,
        last_name,
        email,
        company_name,
        company_size,
        help,
        info,
      }) as any,
    });

    return NextResponse.json({ message: "Email has been sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Email has not been sent" });
  }
}
