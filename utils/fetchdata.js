function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Success');
        }, 1000);
    })
}
module.exports = fetchData;