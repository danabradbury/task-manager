const validateRequest = (event) => {

    return (event.pathParameters && event.pathParameters.id) ? true : false;
}

const getIdParam = (event) => {
    const validRequest = validateRequest(event);
    console.log('valid request, get the id from the path');
    return validRequest ? event.pathParameters.id : null;
}

const defaultResponse = () => {
return {
    statusCode: 401,
    body: JSON.stringify({
      message: "Not Authorized",
    }),
  };
}

const handleBadRequest = response => {
    response = {
        statusCode: 400,
        body: JSON.stringify({
          message: "ID must be an UUID",
        }),
      };
}

const handleNotFound = response => {
    return {
        statusCode: 404,
        body: JSON.stringify({
          message: "ID was not found in our records",
        }),
      };
}

const handleError = (error, response) => {
    response.statusCode = 500;
    const body = {
      message: "we made a mistake, come back later",
      details: error.message,
    };
    response.body = JSON.stringify(body);
}

module.exports = {
    defaultResponse,
    getIdParam,
    handleBadRequest,
    handleError,
    handleNotFound
}
