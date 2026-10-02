import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  try {
const {
  name,
  phone,
  email,
  dateOfBirth,
  timeOfBirth,
  placeOfBirth,
  question,
  contactTime,
} = await req.json();
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "AstroKuldevi <onboarding@resend.dev>",
to: ["astrokuldevi@gmail.com"],
        subject: `New AstroKuldevi Enquiry - ${name}`,
    html: `
  <h2>New AstroKuldevi Consultation Request</h2>

  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>Email:</strong> ${email}</p>

  <h3>Birth Details</h3>
  <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
  <p><strong>Time of Birth:</strong> ${timeOfBirth}</p>
  <p><strong>Place of Birth:</strong> ${placeOfBirth}</p>

  <h3>Consultation Details</h3>
  <p><strong>Question:</strong> ${question}</p>
  <p><strong>Preferred Contact Time:</strong> ${contactTime}</p>

  <p>This enquiry was submitted from the AstroKuldevi app.</p>
`,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify(result), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
});