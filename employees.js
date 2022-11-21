function employees(array) {
    class Employee {
        constructor(name, number){
            this.name = name
            this.number = number
        }
    }
    let list = [];
    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        let number = Number(array[i].length);
        let obj = new Employee(name, number);
        list.push(obj);
    }
    list.forEach((x) => console.log(`Name: ${x.name} -- Personal Number: ${x.number}`));
}employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )