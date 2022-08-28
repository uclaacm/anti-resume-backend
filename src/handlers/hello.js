exports.serverGreetingHandler = async (event) => {
  const response = {
    statusCode: 200,
    body: "Anti-Resume Lambda up and running!",
  };
  return response;
};
