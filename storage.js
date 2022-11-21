function storage(array) {
    let list = {};

    for (const line of array) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);
        if (list.hasOwnProperty(item)) {
            let currentQ = list[item];
            quantity += currentQ;
            list[item] = quantity;
        } else {
            list[item] = quantity;
        }
    }
    for (const key in list) {
        console.log(`${key} -> ${list[key]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)