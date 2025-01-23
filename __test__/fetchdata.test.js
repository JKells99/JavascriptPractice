const fetchData = require('../utils/fetchdata');


test('fetch data test', async () => {
    const data = await fetchData();
    expect(data).toBe('Success');

});