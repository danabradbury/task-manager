const AWS = require("aws-sdk");

const handler = async (event) => {
  let response = {
    statusCode: 401,
    body: JSON.stringify({
      message: "Not Authorized",
    }),
  };

  try {
    //path for get task currently is /task/{id}, so we pull the request id from req.path[1]
    let taskId;
    if (
      event.pathParameters &&
      event.pathParameters.id &&
      !isNaN(event.pathParameters.id)
    ) {
      taskId = event.pathParameters.id;
    }

    if (!taskId) {
      //if taskId isNaN we return a 400 status to signal input error on user side
      response = {
        statusCode: 400,
        body: JSON.stringify({
          message: "ID invalid, not a number",
        }),
      };
    } else {
      // if the id is valid, go to the database and get some shit. this result object needs work as well
      const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
      const params = {
        TableName: process.env.DYNAMODB_TASK_TABLE,
        Key: {
          primary_key: taskId,
          sort_key: `primary`,
        },
      };
      const results = await dynamoDb.get(params).promise();

      if (results) {
        // inspect the result from dynamo, if found, build the response with a 200
        response = {
          statusCode: 200,
          body: JSON.stringify({
            message: "Get got!",
            results,
          }),
        };
      } else {
        //if no results from dynamo, return 404 not found
        response = {
          statusCode: 404,
          body: JSON.stringify({
            message: "ID was not found in our records",
          }),
        };
      }
    }
  } catch (error) {
    response.statusCode = 500;
    const body = {
      message: "we made a mistake, come back later",
      details: error.message,
    };
    response.body = JSON.stringify(body);
  }
  // return
  return response;
};

module.exports = {
  handler,
};
