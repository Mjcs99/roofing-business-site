const { EmailClient } = require("@azure/communication-email");

module.exports = async function (context, req) {
  try {
    const { name, email, phone, street, city, province, postal, message } = req.body || {};

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
${message}`,
        html: `
          <h2>New Roofing Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || ""}</p>
          <p><strong>Street:</strong> ${street}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Province:</strong> ${province}</p>
          <p><strong>Postal:</strong> ${postal}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `
      },
      recipients: {
        to: [{ address: process.env.LEAD_NOTIFY_EMAIL }]
      }
    };

    const poller = await client.beginSend(emailMessage);
    await poller.pollUntilDone();

    context.res = {
      status: 200,
      body: { ok: true }
    };
  } catch (err) {
    context.log.error("Email send failed:", err);
    context.res = {
      status: 500,
      body: { error: "Failed to send email." }
    };
  }
};