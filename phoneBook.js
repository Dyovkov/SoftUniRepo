function phoneBook(array) {

    let list = {};

    for (const line of array) {
        let [key, value] = line.split(' ')
        list[key] = value;
    }

    for (const key in list) {
        console.log(`${key} -> ${list[key]}`);
    }
}phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)