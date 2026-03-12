const { EmailClient } = require("@azure/communication-email");

module.exports = async function (context, req) {
  try {
    context.log("contact function hit");

    const {
      name,
      email,
      phone,
      street,
      city,
      province,
      postal,
      message
    } = req.body || {};

    context.log("request body", {
      name,
      email,
      phone,
      street,
      city,
      province,
      postal,
      hasMessage: !!message
    });

    context.log("env check", {
      hasConnectionString: !!process.env.ACS_EMAIL_CONNECTION_STRING,
      hasSender: !!process.env.ACS_EMAIL_SENDER,
      hasRecipient: !!process.env.LEAD_NOTIFY_EMAIL
    });

    if (!name || !email || !street || !city || !province || !postal || !message) {
      context.res = {
        status: 400,
        body: { error: "Missing required fields." }
      };
      return;
    }

    const client = new EmailClient(process.env.ACS_EMAIL_CONNECTION_STRING);

    const emailMessage = {
      senderAddress: process.env.ACS_EMAIL_SENDER,
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
${message}`
      },
      recipients: {
        to: [{ address: process.env.LEAD_NOTIFY_EMAIL }]
      }
    };

    context.log("starting email send");
    const poller = await client.beginSend(emailMessage);
    const result = await poller.pollUntilDone();
    context.log("email send result", result);

    context.res = {
      status: 200,
      body: { ok: true, result }
    };
  } catch (err) {
    context.log.error("Email send failed:", err);

    context.res = {
      status: 500,
      body: {
        error: "Failed to send email.",
        message: err?.message || String(err),
        stack: err?.stack || null
      }
    };
  }
};