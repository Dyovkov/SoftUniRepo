function storeProvision(array1, array2) {
    class Store {
        constructor(name, quantity) {
            this.name = name
            this.quantity = quantity
        }

    };
    let list = [];
    for (let i = 1; i <= array1.length; i += 2) {
        array1[i] = Number(array1[i]);
    }
    for (let i = 0; i < array2.length; i += 2) {
        if (array1.includes(array2[i])) {
            let index = array1.indexOf(array2[i]);
            array1[index + 1] += Number(array2[i+1]);
       } else {
        array1.push(array2[i]);
        array1.push(Number(array2[i+1]));
       }
    }
    for (let i = 0; i < array1.length; i+=2) {
        let name = array1[i];
        let quantity = array1[i+1];

        let obj = new Store(name,quantity);
        list.push(obj);
        
    }
    list.forEach((x) => console.log(`${x.name} -> ${x.quantity}`));



   
} storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);