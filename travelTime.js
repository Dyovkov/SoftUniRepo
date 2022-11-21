function travelTime(input) {
    let list = {};
    for (const line of input) {
        let [countryName, townName, travelCost] = line.split(' > ');
        travelCost = Number(travelCost);
        if (!list.hasOwnProperty(countryName)) {
            list[countryName] = {};
        }
        if (!list[countryName].hasOwnProperty(townName)) {
            list[countryName][townName] = travelCost;
        }
        let currentCost = list[countryName][townName];
        if (currentCost > travelCost) {
            list[countryName][townName] = travelCost;
        }
    }
    let sorted = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    for (const line of sorted) {
        let result = '';
        let loopSort = Object.entries(line[1]).sort((a, b) => a[1] - b[1]);
        for (const key of loopSort) {
            result += `${key[0]} -> ${key[1]} `
        }
        console.log(`${line[0]} -> ${result}`);
    }
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10']
)


