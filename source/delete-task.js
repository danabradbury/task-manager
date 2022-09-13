"use strict";

const handler = async (event) => {
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "deleted",
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