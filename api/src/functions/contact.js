const { app } = require('@azure/functions');
const { EmailClient } = require('@azure/communication-email');

app.http('contact', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    try {
      const { name, email, phone, street, city, province, postal, message } = await request.json();

      if (!name || !email || !street || !city || !province || !postal || !message) {
        return {
          status: 400,
          jsonBody: { error: 'Missing required fields.' }
        };
      }

      const connectionString = process.env.ACS_EMAIL_CONNECTION_STRING;
      const senderAddress = process.env.ACS_EMAIL_SENDER;
      const notifyAddress = process.env.LEAD_NOTIFY_EMAIL;

      if (!connectionString || !senderAddress || !notifyAddress) {
        return {
          status: 500,
          jsonBody: {
            error: 'Missing email environment variables.',
            hasConnectionString: !!connectionString,
            hasSenderAddress: !!senderAddress,
            hasNotifyAddress: !!notifyAddress
          }
        };
      }

      const client = new EmailClient(connectionString);

      const emailMessage = {
        senderAddress,
        content: {
          subject: `New Roofing Lead from ${name}`,
          plainText: `Name: ${name}
Email: ${email}
Phone: ${phone || ''}
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
            <p><strong>Phone:</strong> ${phone || ''}</p>
            <p><strong>Street:</strong> ${street}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Province:</strong> ${province}</p>
            <p><strong>Postal:</strong> ${postal}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          `
        },
        recipients: {
          to: [{ address: notifyAddress }]
        }
      };

      const poller = await client.beginSend(emailMessage);
      const result = await poller.pollUntilDone();

      return {
        status: 200,
        jsonBody: {
          ok: true,
          message: 'Email sent successfully.',
          result
        }
      };
    } catch (err) {
      context.error('Email send failed:', err);

      return {
        status: 500,
        jsonBody: {
          error: 'Failed to send email.',
          message: err?.message || String(err)
        }
      };
    }
  }
});