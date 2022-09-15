"use strict";

const handler = async (event) => {
  // go tot he database and get some shit

  // format the shit
  throw new Error("bad shit");

  // build the response object
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Get got!",
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
