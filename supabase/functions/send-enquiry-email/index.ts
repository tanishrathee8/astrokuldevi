import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character]!,
  );

serve(async (req) => {
  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");
    return jsonResponse(
      { error: "Email service is not configured." },
      500,
    );
  }

  try {
    const payload: unknown = await req.json();

    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      return jsonResponse({ error: "Invalid request body." }, 400);
    }

    const body = payload as Record<string, unknown>;

    const requiredFields = [
      "name",
      "phone",
      "email",
      "dateOfBirth",
      "timeOfBirth",
      "placeOfBirth",
      "question",
      "contactTime",
    ] as const;

    const data: Record<string, string> = {};

    for (const field of requiredFields) {
      const value = body[field];

      if (typeof value !== "string" || !value.trim()) {
        return jsonResponse(
          { error: `Missing or invalid field: ${field}` },
          400,
        );
      }

      data[field] = value.trim();
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return jsonResponse({ error: "Invalid email address." }, 400);
    }

    const safe = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]),
    ) as Record<string, string>;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "AstroKuldevi <onboarding@resend.dev>",
        to: ["astrokuldevi@gmail.com"],
        subject: `New AstroKuldevi Enquiry - ${data.name}`,
        html: `
          <h2>New AstroKuldevi Consultation Request</h2>
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Phone:</strong> ${safe.phone}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <h3>Birth Details</h3>
          <p><strong>Date of Birth:</strong> ${safe.dateOfBirth}</p>
          <p><strong>Time of Birth:</strong> ${safe.timeOfBirth}</p>
          <p><strong>Place of Birth:</strong> ${safe.placeOfBirth}</p>
          <h3>Consultation Details</h3>
          <p><strong>Question:</strong> ${safe.question}</p>
          <p><strong>Preferred Contact Time:</strong> ${safe.contactTime}</p>
          <p>This enquiry was submitted from the AstroKuldevi app.</p>
        `,
      }),
    });

    const responseText = await response.text();
    let result: unknown;

    try {
      result = responseText ? JSON.parse(responseText) : null;
    } catch {
      result = null;
    }

    if (!response.ok) {
      console.error("Resend request failed with status:", response.status);

      return jsonResponse(
        { error: "The email provider could not send the notification." },
        502,
      );
    }

    return jsonResponse({ success: true, result });
  } catch (error) {
    console.error(
      "Email notification failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return jsonResponse({ error: "Unable to process the email request." }, 500);
  }
});