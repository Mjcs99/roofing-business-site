const { app } = require("@azure/functions");
const { EmailClient } = require("@azure/communication-email");

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      const body = await request.json();

      const {
        name,
        email,
        phone,
        street,
        city,
        province,
        postal,
        message,
        ["cf-turnstile-response"]: turnstileToken,
      } = body;

      if (!name || !email || !street || !city || !province || !postal || !message) {
        return {
          status: 400,
          jsonBody: { error: "Missing required fields." },
        };
      }

      if (!turnstileToken) {
        return {
          status: 400,
          jsonBody: { error: "Captcha token missing." },
        };
      }

      const verifyResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
          }),
        }
      );

      const verifyData = await verifyResponse.json();

      if (!verifyData.success) {
        return {
          status: 400,
          jsonBody: {
            error: "Captcha verification failed.",
            details: verifyData["error-codes"] || [],
          },
        };
      }

      const connectionString = process.env.ACS_EMAIL_CONNECTION_STRING;
      const senderAddress = process.env.ACS_EMAIL_SENDER;
      const notifyAddress = process.env.LEAD_NOTIFY_EMAIL;

      const client = new EmailClient(connectionString);

      const emailMessage = {
        senderAddress,
        content: {
          subject: `New Roofing Lead from ${name}`,
          plainText: `Name: ${name}
Email: ${email}
Phone: ${phone || ""}
Street: ${street}
City: ${city}
Province: ${province}
Postal: ${postal}

Message:
${message}`,
        },
        recipients: {
          to: [{ address: notifyAddress }],
        },
      };

      const poller = await client.beginSend(emailMessage);
      await poller.pollUntilDone();

      return {
        status: 200,
        jsonBody: { ok: true },
      };
    } catch (err) {
      context.error(err);
      return {
        status: 500,
        jsonBody: {
          error: "Failed to send message.",
          message: err?.message || String(err),
        },
      };
    }
  },
});