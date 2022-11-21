function makeaDictionary(array) {
    let list = [];
    for (const line of array) {
        let loop = JSON.parse(line);
        let key = Object.keys(loop)[0];
        let value = Object.values(loop)[0];
        let obj = {
            term: key,
            definition: value,
        }
        list.push(obj);
    }
    list.sort((a, b) => a.term.localeCompare(b.term));
    list.forEach((x) => console.log(`Term: ${x.term} => Definition: ${x.definition}`));

} makeaDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)