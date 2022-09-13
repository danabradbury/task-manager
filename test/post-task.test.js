const postTask = require('../source/post-task');

test('testing post', () => {
    const resp = postTask.handler({});
    expect(resp).not.toBeNull();
  });