function companyUsers(input) {
    let list = {};
    for (const line of input) {
        let [companyName, personId] = line.split(' -> ');

        if (list.hasOwnProperty(companyName)) {
            list[companyName][personId] = "--";
        } else {
            list[companyName] = {
                [personId]: "--"
            };
        }
    }
    let sorted = Object.entries(list).sort((a,b) => a[0].localeCompare(b[0]));
    sorted.forEach(element => {
        console.log(element[0]);
        for (const key in element[1]) {
            console.log(`${element[1][key]} ${key}`)
        }
    })
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);