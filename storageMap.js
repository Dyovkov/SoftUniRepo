function storageMap(array) {
    let map = new Map();

    for (const line of array) {
        let tokens = line.split(' ');
        let item = tokens[0];
        let quantitty = Number(tokens[1]);
        if (!map.has(item)){
            map.set(item, quantitty);
        } else {
            let currQuantitty = map.get(item);
            let newQuantity = currQuantitty += quantitty;
            map.set(item, newQuantity);
        }
    }
    for (const key of map) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
    
}
storageMap(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)