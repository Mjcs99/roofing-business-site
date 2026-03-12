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
      status: 200,
      jsonBody: {
        ok: true,
        route: 'contact',
        body
      }
    };
  }
});