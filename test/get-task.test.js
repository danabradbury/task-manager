const getTask = require('../source/get-task');

test('testing get', () => {
    const resp = getTask.handler({});
    expect(resp).not.toBeNull();
  });