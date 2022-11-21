function towns(array) {
    for (let i = 0; i < array.length; i++) {
        let [name, lati, long] = array[i].split(' | ');
        lati = Number(lati).toFixed(2);
        long = Number(long).toFixed(2);
        let obj = {
            town: name,
            latitude: lati,
            longitude: long,
        }
        console.log(obj);
    }
}towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)