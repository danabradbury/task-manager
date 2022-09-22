"use strict";

const handler = async (event) => {
  

  try {
// get the id from the request
    //we need to get userID from the get request. we changed serverless yaml to accept an ID as a string, just not sure the proper code to retrieve that. just filled w bull shit below for now
    var userId = getTask.handler{id};

    // validate the id is there and is a valid number

    if(isNaN(userId)){
	    const response = {
        statusCode: 400,
        body: JSON.stringify(
          {
            message: "ID invalid, not a number"
          }
      }
   }else{
    // if the id is valid, go tot he database and get some shit
    const results = await dynamoDb.get(putParams).promise();
    // inspect the result from dynamo, if found, build the response with a 200
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
   }
    

    
        // if missing or not a number, set a 400 status and return

    
      

        // if the results from the db are empty, set a 404 not found and return the empty response
  
    
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
