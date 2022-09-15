const postTask = require("../source/post-task");

//
const testEvent = {
  requestContext: {
    authorizer: {},
  },
  body: '{ "someAttribute" : "some value" }',
};

test("testing post", async () => {
  const resp = await postTask.handler(testEvent);
  // update to test 200
  expect(resp).not.toBeNull();
});

test("testing post", async () => {
  // modify the testEvent to force a 4xx
  const resp = await postTask.handler(testEvent);
  expect(resp).not.toBeNull();
});

// we are going to test for 500's but we need to talk about mocking first
/* test("testing post", async () => {
  // force the code to return 500
  const resp = await postTask.handler(testEvent);
  expect(resp).not.toBeNull();
}); */
