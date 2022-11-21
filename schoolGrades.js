function schoolGrade(array) {
    let list = new Map()
    function avg(input) {  // averagegrade calculation
        let avg = 0;
        let sum = 0;
       for (const key of input) {
            sum += Number(key);
       }
       avg = sum / input.length;
       return avg
    }
    for (const line of array) {
        let tokens = line.split(' ');
        let student = tokens.shift()
        let grades = tokens.map(Number);
        if (!list.has(student)){
        list.set(student, [])
        }
        for (const grade of grades) {
           list.get(student).push(grade);
        }
    }
    let entries = Array.from(list.entries());
    entries.sort((a,b) => a[0].localeCompare(b[0]));
    for (const key of entries) {
        console.log(`${key[0]}: ${avg(key[1]).toFixed(2)} `);
    }
}
schoolGrade(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)

