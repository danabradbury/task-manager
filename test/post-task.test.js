const postTask = require("../source/post-task");

const testEvent = {
  requestContext: {
    authorizer: {},
  },
  body: '{ "someAttribute" : "some value" }',
};

test("testing post", async () => {
  const resp = await postTask.handler(testEvent);
  expect(resp).not.toBeNull();
});
