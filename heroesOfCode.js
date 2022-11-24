function heroesOfCode(input) {
    const number = input.shift();
    let heroesObject = {};

    for (let i = 0; i < number; i++) {
        let [name, hitP, manaP] = input.shift().split(' ')
        hitP = Number(hitP);
        manaP = Number(manaP);
        heroesObject[name] = {
            hitP,
            manaP
        }
    }
    while (input[0] != "End") {
        let line = input.shift().split(' - ');
        const command = line[0];
        const name = line[1];

        if (command === "CastSpell") {
            let mpNeed = Number(line[2]);
            let spell = line[3];
            if (heroesObject[name] != undefined) {
                if (heroesObject[name].manaP >= mpNeed) {
                    heroesObject[name].manaP -= mpNeed;
                    console.log(`${name} has successfully cast ${spell} and now has ${heroesObject[name].manaP} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spell}!`);
                }
            }
        } else if (command === "TakeDamage") {
            let damage = Number(line[2]);
            let attacker = line[3];
            if (heroesObject[name] != undefined) {
                heroesObject[name].hitP -= damage;
                if (heroesObject[name].hitP > 0) {
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroesObject[name].hitP} HP left!`);
                } else {

                    console.log(`${name} has been killed by ${attacker}!`);
                    delete heroesObject[name];
                }
            }
        } else if (command === "Recharge") {
            let amount = Number(line[2]);
            if (heroesObject[name] != undefined) {
                let amountRecovered = 0;
                if ((heroesObject[name].manaP + amount) > 200) {
                    amountRecovered = 200 - heroesObject[name].manaP;
                    heroesObject[name].manaP = 200;
                } else {
                    amountRecovered = amount;
                    heroesObject[name].manaP += amount;
                }
                console.log(`${name} recharged for ${amountRecovered} MP!`);
            }
        } else if (command === "Heal") {
            let amount = Number(line[2]);
            if ((heroesObject[name].hitP + amount) > 100) {
                amountRecovered = 100 - heroesObject[name].hitP;
                heroesObject[name].hitP = 100;
            } else {
                amountRecovered = amount;
                heroesObject[name].hitP += amount;
            }
            console.log(`${name} healed for ${amountRecovered} HP!`);
        }
    }
    for (const [name,loop] of Object.entries(heroesObject)) {
        console.log(`${name}`);
        console.log(`  HP: ${loop.hitP}`);
        console.log(`  MP: ${loop.manaP}`);
    }
}
heroesOfCode([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']
)