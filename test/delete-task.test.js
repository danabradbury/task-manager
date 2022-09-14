const deleteTask = require("../source/delete-task");

const testEvent = {
  requestContext: {
    authorizer: {},
  },
  body: '{ "someAttribute" : "some value" }',
};

test("testing delete", async () => {
  const resp = await deleteTask.handler(testEvent);
  expect(resp).not.toBeNull();
});
