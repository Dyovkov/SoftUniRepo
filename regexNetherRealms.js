function netherRealms(input) {
    let obj = {};
    const split = /[ ]+[,]*[ ]+/gm
    const healthPattern = /[A-Za-z]/gm;
    const multiplyPattern = /[\*]/gm;
    const divisionPattern = /[\/]/gm;
    const damagePattern = /[+|-]?[\d\.?\d+]+/gm;
    let names = input.split(',').map(x => x.trim())

    for (const name of names) {
        let health = 0;
        let damage = 0;
        let chars = name.match(healthPattern);
        if (chars) {
            chars.forEach(element => {
                health += element.charCodeAt(0);
            });
        } else {
            break;
        }
        let numbers = name.match(damagePattern);
        if (numbers) {
            numbers.forEach(element => {
                damage += Number(element)
            });
        }
        let multiply = name.match(multiplyPattern);
        if (multiply) {
            let x = multiply.length;
            damage = damage * (2 ** x);
        }
        let division = name.match(divisionPattern);
        if (division) {
            let x = division.length;
            damage = damage / (2 ** x)
        }
        damage = damage.toFixed(2)
        obj[name] = {
            health,
            damage
        }
    }
    let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, list] of sorted) {
        console.log(`${name} - ${list.health} health, ${list.damage} damage`);
    }
}
netherRealms('M3ph+1st-0**, Azazel')