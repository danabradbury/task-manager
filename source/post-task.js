const AWS = require("aws-sdk");

module.exports.handler = async (event) => {
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
    await dynamoDb.put(putParams).promise();
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 201,
  };
};
