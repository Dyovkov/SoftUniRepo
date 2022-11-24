function pirates(input) {
    let obj = {};
    while (input[0] != "Sail") {
        let [town, people, gold] = input.shift().split('||');
        people = Number(people);
        gold = Number(gold);
        if (obj[town] != undefined) {
            obj[town].people += people;
            obj[town].gold += gold
        } else {
            obj[town] = {
                people,
                gold
            }
        }
    }
    input.shift();
    while (input[0] != "End") {
        let line = input.shift().split('=>');
        let command = line[0];
        let town = line[1];
        if (command === "Plunder") {
            let people = Number(line[2]);
            let gold = Number(line[3]);
            if (obj[town] != undefined) {
                obj[town].people -= people;
                obj[town].gold -= gold
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            }
            if (obj[town].people === 0 || obj[town].gold === 0) {
                console.log(`${town} has been wiped off the map!`);
                delete obj[town];
            }
        } else if (command === "Prosper") {
            let gold = Number(line[2]);
            if (obj[town] != undefined) {
                if (gold > 0) {
                    obj[town].gold += gold;
                    let total = obj[town].gold;
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${total} gold.`);
                } else {
                    console.log(`Gold added cannot be a negative number!`);
                }
            }
        }
    }
    let count = Object.keys(obj).length;
    if (count > 0) {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
        for (const [town, loop] of Object.entries(obj)) {
            console.log(`${town} -> Population: ${loop.people} citizens, Gold: ${loop.gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
)