const { app } = require('@azure/functions');

app.http('contact', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    let body = null;

    try {
      body = await request.json();
    } catch {
      body = null;
    }

    return {
      jsonBody: {
        ok: true,
        hasConnectionString: !!process.env.ACS_EMAIL_CONNECTION_STRING,
        hasSender: !!process.env.ACS_EMAIL_SENDER,
        hasRecipient: !!process.env.LEAD_NOTIFY_EMAIL,
        sender: process.env.ACS_EMAIL_SENDER || null,
        recipient: process.env.LEAD_NOTIFY_EMAIL || null,
        body
      }
    };
  }
});