const putTask = require("../source/put-task");

const testEvent = {
  requestContext: {
    authorizer: {},
  },
  body: '{ "someAttribute" : "some value" }',
};

test("testing puts", async () => {
  const resp = await putTask.handler(testEvent);
  expect(resp).not.toBeNull();
});
