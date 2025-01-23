const addToArray = require('../utils/arrays').addToArray;
const removeElement = require('../utils/arrays').removeElement;

test('adds 6 to array', () => {
    const array = [1, 2, 3, 4, 5];
    addToArray(array, 6);
    expect(array.length).toBe(6);
});

test('removes 3 from array', () => {
    const array = [1, 2, 3, 4, 5];
    removeElement(array, 3);
    expect(array.length).toBe(4);
});