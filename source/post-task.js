const AWS = require("aws-sdk");
const commonFunctions = require('./handler-functions');
const { uuid } = require('uuidv4');

const putTaskInDynamo = async (id, task) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
    const putParams = {
      TableName: process.env.DYNAMODB_TASK_TABLE,
      Item: {
        id,
        sk: `primary`,
        task
      },
    };

    console.log(JSON.stringify(putParams));
    return dynamoDb.put(putParams).promise();
}
const handler = async (event) => {
  const response = { statusCode: 401 };
  try {
    // validate the request
    const task = JSON.parse(event.body);
    console.log(task);

    //generate a task ID as the PK fo the record
    const taskId = uuid();

    // this request is valid, now do something with it.
    await putTaskInDynamo(taskId, task);

    const responseBody = {
      message : "Task GET succesful",
      status: "success",
      task,
      taskId
    };

    // it was a valid request, I did something with it, and everything worked as expected
    response.statusCode = 200;
    response.body = JSON.stringify(responseBody)

  } catch (error) {
    commonFunctions.handleError(error, response);;
  }

  return response;
};

module.exports = {
  handler,
  putTaskInDynamo
}
