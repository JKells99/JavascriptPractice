const array = [1, 2, 3, 4, 5];


function addToArray(array, element) {
    return array.push(element);
}

function removeElement(array, element) {
    return array.splice(array.indexOf(element), 1);
}

addToArray(array, 6);
console.log(array.length)

module.exports = { addToArray, removeElement };