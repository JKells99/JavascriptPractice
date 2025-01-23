// Jest test for sum.js
const {subtract,add} = require("../utils/sum");


test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subs 3-2 to equal 1', () => {
    expect(subtract(3, 2)).toBe(1);
});