"use strict";

const handler = async (event) => {
  // go tot he database and get some shit

  // format the shit

  // build the response object
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
      },
      null,
      2
    ),
  };

  // return
  return response;
};

module.exports = {
  handler,
};
