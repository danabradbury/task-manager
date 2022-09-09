const putTask = require('../source/put-task');

test('testing puts', () => {
    const resp = putTask.handler({});
    expect(resp).not.toBeNull();
  });