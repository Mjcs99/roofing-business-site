module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: {
      ok: true,
      hasConnectionString: !!process.env.ACS_EMAIL_CONNECTION_STRING,
      hasSender: !!process.env.ACS_EMAIL_SENDER,
      hasRecipient: !!process.env.LEAD_NOTIFY_EMAIL,
      sender: process.env.ACS_EMAIL_SENDER || null,
      recipient: process.env.LEAD_NOTIFY_EMAIL || null,
      body: req.body || null
    }
  };
};