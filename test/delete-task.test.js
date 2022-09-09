const deleteTask = require('../source/delete-task');

test('testing delete', () => {
    const resp = deleteTask.handler({});
    expect(resp).not.toBeNull();
  });