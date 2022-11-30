const validateRequest = (event) => {
    return event.pathParameters && event.pathParameters.id && !isNaN(event.pathParameters.id);
}

const getIdParam = (event) => {
    return validateRequest(event) ? event.pathParameters.id : null;
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
          message: "ID must be an integer",
        }),
      };
}

const handleNotFound = response => {
    response = {
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
