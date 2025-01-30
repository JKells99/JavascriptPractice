const Datastorage = require('../datastorage/datastorage');

describe('DataStore Test', () => {
    let dataStorage;
    beforeEach(() => {
        dataStorage = new Datastorage();
    });

    test('data should store in array', () => {
        dataStorage.storeData({ id: 1, name: 'Alice', age: 30 });
        expect(dataStorage.data.length).toBe(1);
        expect(dataStorage.data[0].name).toBe('Alice');
    });

    test("should be able to fetch data from an array with multiple", () => {
        dataStorage.storeData({ id: 1, name: 'Alice', age: 30 },{ id: 2, name: 'Bob', age: 25 },{ id: 3, name: 'Charlie', age: 35 });
        const fetchedData = dataStorage.fetchData(1);
        expect(fetchedData.name).toBe('Bob');
    })

    test("should return null if index is out of bound", () => {
        dataStorage.storeData({ id: 1, name: 'Alice', age: 30 },{ id: 2, name: 'Bob', age: 25 },{ id: 3, name: 'Charlie', age: 35 });
        const fetchedData = dataStorage.fetchData(3);
        expect(fetchedData).toBe(null);
    })

});