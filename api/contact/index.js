module.exports = async function (context, req) {

  const data = req.body;

  context.log("Contact form submission:", data);

  context.res = {
    status: 200,
    body: { success: true }
  };
};