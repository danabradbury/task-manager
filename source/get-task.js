"use strict";

const handler = async (event) => {

    function checkRequestId(userId) {
        const requestId = req.path[1];
        //path for get task currently is /task/{id}, so we pull the request id from req.path[1]
        try {
            if (isNaN(userId)) {
                //if userId isNaN we return a 400 status to signal input error on user side
                const response = {
                    statusCode: 400,
                    body: JSON.stringify(
                        {
                            message: "ID invalid, not a number"
                        }
                    )
                }
            } else if (!isNaN(userId) && userId != req.path[1]) {
              //if user Id isNaN and != req.path[1] we return a 404 because it is not in our records 
              const response = {
                    statusCode: 404,
                    body: JSON.stringify({
                        message: "ID was not found in our records"
                    })
                }
            } else {
                // if the id is valid, go tot he database and get some shit. this result object needs work as well
                const results = await dynamoDb.getItem(getParams).promise();
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
        }
        catch (error) {
            response.statusCode = 500;
            response.body = JSON.stringify(error);
            console.error(error);
        }
    }
    // return
    return response;
};

module.exports = {
    handler,
};
