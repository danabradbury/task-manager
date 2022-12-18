const AWS = require("aws-sdk");
const commonFunctions = require('./handler-functions');

const getTaskFromDynamo = async id => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
  const params = {
    TableName: process.env.DYNAMODB_TASK_TABLE,
    Key: {
      id,
      sk: `primary`,
    },
  };
  return dynamoDb.get(params).promise();
}

const handler = async (event) => {
  let response = commonFunctions.defaultResponse();
  console.log(event);
  try {
    const taskId = commonFunctions.getIdParam(event);

    if (taskId) {
      const results = await getTaskFromDynamo(taskId);

      if (results.Item) {
        // inspect the result from dynamo, if found, build the response with a 200
        const body = {
          message : "Task GET succesful",
          status: "success",
          task: results.Item.task
        };

        response = {
          statusCode: 200,
          body: JSON.stringify(body)
        };

      } else {
        response = commonFunctions.handleNotFound(response);
      }
    } else {
      commonFunctions.handleBadRequest(response);
    }
  } catch (error) {
    commonFunctions.handleError(error, response);
  }
  // return
  return response;
};

module.exports = {
  handler,
};
