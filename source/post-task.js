const AWS = require("aws-sdk");
const commonFunctions = require('./handler-functions');

const putTaskInDynamo = async (body) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
    const pk = Date.now();
    const putParams = {
      TableName: process.env.DYNAMODB_TASK_TABLE,
      Item: {
        primary_key: `${pk}`,
        sort_key: `primary`,
      },
    };

    console.log(JSON.stringify(putParams));
    return dynamoDb.put(putParams).promise();
}
const handler = async (event) => {
  const response = { statusCode: 401 };
  try {
    // validate the request
    const body = JSON.parse(event.body);
    console.log(body);

    // this request is valid, now do something with it.
    await putTaskInDynamo(body);

    // it was a valid request, I did something with it, and everything worked as expected
    response.statusCode = 200;
  } catch (error) {
    commonFunctions.handleError(error, response);;
  }

  return response;
};

module.exports = {
  handler,
  putTaskInDynamo
}
