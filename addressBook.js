function addressBook(array) {
    let list = {};
    for (const line of array) {
        let [name, address] = line.split(':')
        list[name] = address;
    }
    let sorted = Object.keys(list);
    sorted.sort((a,b) => a.localeCompare(b));
   for (const key of sorted) {
    console.log(`${key} -> ${list[key]}`);
    }
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)