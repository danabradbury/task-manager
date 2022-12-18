const commonFunctions = require('./handler-functions');
const { putTaskInDynamo } = require('./post-task');

const handler = async (event) => {
  
  let response = commonFunctions.defaultResponse();

  try {
    const taskId = commonFunctions.getIdParam(event);

    if (taskId) {
      // validate the request
      const body = JSON.parse(event.body);
      console.log(body);

      const results = await putTaskInDynamo(taskId, body);

      if (results) {
        // inspect the result from dynamo, if found, build the response with a 200
        response = {
          statusCode: 200
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