const greeting = require('../greeting');

test('greeting test', () => {

  let greetingoutput= greeting('Alice');
    expect(greetingoutput).toBe('Hello Alice');
});