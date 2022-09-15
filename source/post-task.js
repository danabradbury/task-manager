const AWS = require("aws-sdk");

module.exports.handler = async (event) => {
  const response = { statusCode: 401 };

  // validate the request
  const body = JSON.parse(event.body);

  console.log(body);
  const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
  const now = new Date();
  console.log(now.toISOString());
  const pk = `dummy hard coded PK ${now.toISOString()}`;
  const putParams = {
    TableName: process.env.DYNAMODB_TASK_TABLE,
    Item: {
      primary_key: pk,
      sort_key: `dummy hard coded SK`,
    },
  };

  console.log(JSON.stringify(putParams));
  try {
    // this request is valid, now do something with it.
    throw new Error("bad shit");
    await dynamoDb.put(putParams).promise();

    // it was a valid request, I did something with it, and everything worked as expected
    response.statusCode = 200;
  } catch (error) {
    response.statusCode = 500;
    response.body = JSON.stringify(error);
    console.error(error);
  }

  return response;
};
