class Datastorage{
    constructor(){
        this.data = [];
    }

    storeData(obj){
        this.data.push(obj);
    }

    fetchData(index){
        if(index <0 || index >= this.data.length){
            return null;
        }
        return this.data[index];
    }

}

const sampleData = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
];


const datastorage = new Datastorage();

sampleData.forEach(obj => {
    datastorage.storeData(obj);

});

const fetchedUser = datastorage.fetchData(1)


module.exports = Datastorage;