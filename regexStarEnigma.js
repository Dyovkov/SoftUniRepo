function starEnigma(input) {
    let num = Number(input.shift());
    let patern = /[starSTAR]/gm;
    let stars = [];
    for (let i = 0; i < num; i++) {
        let count = 0;
        let concat = '';
        while ((res = patern.exec(input[i])) !== null) {
            count++
        }
        for (let j = 0; j < input[i].length; j++) {
            let char = input[i][j];
            let asciiNum = char.charCodeAt(0);
            asciiNum -= count;
            let string = String.fromCharCode(asciiNum)
            concat += `${string}`
        }
        stars.push(concat);
    }
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let msg of stars) {
        let ifMatch = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>[\d]+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>[\d]+)/g.exec(msg);
        if (ifMatch !== null) {
            if (ifMatch.groups.attackType === 'D') {
                destroyedPlanets.push(ifMatch.groups.name);
            } else {
                attackedPlanets.push(ifMatch.groups.name)
            }
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    for (let planet of attackedPlanets) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.sort((a,b) => a.localeCompare(b));
    for (let planet of destroyedPlanets) {
        console.log(`-> ${planet}`);
    }
}
starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])