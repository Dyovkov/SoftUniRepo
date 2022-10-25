function manOWar(array) {
    let pirateStatus = array
        .shift()
        .split('>')
        .map(Number)
    let warshipStatus = array
        .shift()
        .split('>')
        .map(Number)
    let maxHealth = Number(array
        .shift())
    let magic = 0;
    let magic1 = 0;
    function fire(index, damage) {
        if (index >= 0 && index < warshipStatus.length) {
            warshipStatus[index] -= damage;
            if (warshipStatus[index] <= 0) {
                console.log("You won! The enemy ship has sunken.");
                magic = 1;
            }
        }
    }
    function defend(startIndex, endIndex, damage) {
        if (startIndex >= 0 && endIndex >= 0 && startIndex < pirateStatus.length && endIndex < pirateStatus.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateStatus[i] -= damage;
                if (pirateStatus[i] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    magic1 = 1;
                    break;
                }
            }
        }
    }
    function repair(index, health) {
        if (index >= 0 && index < pirateStatus.length) {
            pirateStatus[index] += health;
            if (pirateStatus[index] > maxHealth) {
                pirateStatus[index] = maxHealth;
            }
        }
    }
    function status() {
        let count = 0;
        for (let i = 0; i < pirateStatus.length; i++) {
            if (pirateStatus[i] < (maxHealth * 0.2)) {
                count++;
            }
        }
        console.log(`${count} sections need repair.`);
    }
    let tempArr = array.shift()
        .split(' ')
    while (tempArr != "Retire") {
        let command = tempArr[0];
        let index = Number(tempArr[1]);
        let damage = Number(tempArr[2]);
        let startIndex = Number(tempArr[1]);
        let endIndex = Number(tempArr[2]);
        let damageDefend = Number(tempArr[3]);
        let health = Number(tempArr[2]);
        if (command == "Fire") {
            fire(index, damage);
            if (magic == 1) {
                break
            }
        }
        if (command == "Defend") {
            defend(startIndex, endIndex, damageDefend);
            if (magic1 == 1) {
                break;
            }
        }
        if (command == "Repair") {
            repair(index, health);
        }
        if (command == "Status") {
            status();
        }
        tempArr = array.shift()
            .split(' ');
    }
    if (tempArr == "Retire") {
        let sumPirate = 0;
        let sumWar = 0;
        for (const num of pirateStatus) {
            sumPirate += num;
        }
        for (const num of warshipStatus) {
            sumWar += num;
        }
        console.log(`Pirate ship status: ${sumPirate}`);
        console.log(`Warship status: ${sumWar}`);
    }
}
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])



