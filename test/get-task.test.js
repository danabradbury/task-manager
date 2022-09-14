const getTask = require("../source/get-task");

const testEvent = {
  requestContext: {
    authorizer: {},
  },
  body: '{ "someAttribute" : "some value" }',
};

test("testing get", async () => {
  const resp = await getTask.handler(testEvent);
  expect(resp).not.toBeNull();
});
