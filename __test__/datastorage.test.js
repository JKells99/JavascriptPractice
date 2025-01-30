const Datastorage = require('../datastorage/datastorage');


describe('DataStore Test', () => {

    let dataStorage;

    beforeEach(() => {
        dataStorage = new Datastorage();
    });
    let users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Beck' },
        { id: 3, name: 'Chris' }
    ];

    test('data should store in array', () => {
        dataStorage = new Datastorage();
        dataStorage.storeData({ id: 1, name: 'Alice', age: 30 });
        expect(dataStorage.data.length).toBe(1);
        expect(dataStorage.data[0].name).toBe('Alice');
    });

    test("should return null if index is out of bound", () => {
        dataStorage = new Datastorage();
        dataStorage.storeData({ id: 1, name: 'Alice', age: 30 },{ id: 2, name: 'Bob', age: 25 },{ id: 3, name: 'Charlie', age: 35 });
        const fetchedData = dataStorage.fetchData(3);
        expect(fetchedData).toBe(null);
    })

    test('should fetch data from the array', () => {
        dataStorage.storeData('testData1');
        dataStorage.storeData('testData2');
        const fetchedData = dataStorage.fetchData(1);
        expect(fetchedData).toBe('testData2');
    });


});