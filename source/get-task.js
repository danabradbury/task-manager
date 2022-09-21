"use strict";

const handler = async (event) => {
  

  try {
    // get the id from the request

    // validate the id is there and is a valid number
        // if missing or non a number, set a 400 status and return

    // if the id is valid, go tot he database and get some shit
    const results = await dynamoDb.get(putParams).promise();
      // inspect the result from dynamo, if found, build the response with a 200

        // if the results from the db are empty, set a 404 not found and return the empty response
  
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
    // it was a valid request, I did something with it, and everything worked as expected
    response.statusCode = 200;
  } catch (error) {
    response.statusCode = 500;
    response.body = JSON.stringify(error);
    console.error(error);
  }

  // return
  return response;
};

module.exports = {
  handler,
};
