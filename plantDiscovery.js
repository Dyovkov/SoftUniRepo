function plantDiscovery(input) {
    let obj = {};
    let number = input.shift();
    let reset = 0;
    for (let i = 0; i < number; i++) {
        let [name, rarity, avgRating] = input.shift().split('<->');
        rarity = Number(rarity);
        avgRating = 0;
        obj[name] = {
            rarity,
            avgRating
        }
    }   ///  [3]
    while (input[0] != "Exhibition") {
        let line = input.shift().split(' ');
        let command = line[0];
        let name = line[1];
        if (obj[name] != undefined) {
            if (command === "Rate:") {
                let loopRating = Number(line[3]);
                let avg = 0;
                if (obj[name].avgRating === 0) {
                    obj[name].avgRating = Number(loopRating.toFixed(2));
                } else {
                    avg = (obj[name].avgRating + loopRating) / 2;
                    obj[name].avgRating = Number(avg.toFixed(2));
                }
            } else if (command === "Update:") {
                obj[name].rarity = Number(line[3]);
            } else if (command === "Reset:") {
                obj[name].avgRating = Number(reset)
            } else {
                console.log('error');
            }
        } else {
            console.log('error');
        }
    }
    console.log(`Plants for the exhibition:`);
    for (const [name, loop] of Object.entries(obj)) {
        let avg1 = loop.avgRating
        console.log(`- ${name}; Rarity: ${loop.rarity}; Rating: ${avg1.toFixed(2)}`);
    }
}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)