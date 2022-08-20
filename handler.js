'use strict'
const AWS = require('aws-sdk')

module.exports.taskManager = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString())
  const dynamoDb = new AWS.DynamoDB.DocumentClient()
  const putParams = {
    TableName: process.env.DYNAMODB_TASK_MANAGER,
    Item: {
      primary_key: body.name,
      email: body.email
    }
  }
  await dynamoDb.put(putParams).promise()

  return {
    statusCode: 201
  }
}
