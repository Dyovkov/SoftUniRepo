function arenaTier(input) {
    let list = {};
    let command = input.shift();

    //// add gladiator function
    function addGlad(command) {
        let [gladiator, technique, skill] = command.split(' -> ')
        skill = Number(skill);
        if (!list.hasOwnProperty(gladiator)) {
            list[gladiator] = {};
        }
        if (!list[gladiator].hasOwnProperty(technique)) {
            list[gladiator][technique] = skill;
        }
        let currentSkill = list[gladiator][technique];
        if (skill > currentSkill) {
            list[gladiator][technique] = skill;
        }
        return list;
    }
    ///////////////////////////////////
    //// gladiator fight func
    function duel(command) {
        let [glad1, glad2] = command.split(' vs ');
        if (list.hasOwnProperty(glad1) && list.hasOwnProperty(glad2)) {
            let sumSkill1 = 0;
            let sumSkill2 = 0;
            let fight = false;
            for (const key1 in list[glad1]) {
                for (const key2 in list[glad2]) {
                    if (key1 === key2) {
                        fight = true;
                    }
                }
            }
            for (const sum in list[glad1]) {
                sumSkill1 += list[glad1][sum];
            }
            for (const sum in list[glad2]) {
                sumSkill2 += list[glad2][sum];
            }
            if (fight) {
                if (sumSkill1 > sumSkill2) {
                    delete list[glad2];
                } else {
                    delete list[glad1];
                }
            }
        }
        return list;
    }
    //////////////////////////
    while (command != "Ave Cesar") {
        if (command.includes("->")) {
            addGlad(command);
        }
        if (command.includes("vs")) {
            duel(command);
        }
        command = input.shift();
    }
    for (const key in list) {
        let sum = 0;
        let outsideObj = list[key];
        for (const insideKey in outsideObj) {
            sum += outsideObj[insideKey];
        }
        outsideObj['sum'] = sum;
    }
    //console.log(list);
    Object.entries(list)
    .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
    .forEach(element => {
        console.log(`${element[0]}: ${element[1].sum} skill`);
      //  delete element[1].sum;
     //   Object.entries(element[1])
     //       .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
     //       .forEach(element => {
      //          console.log(` - ${element[0]} <!> ${element[1]}`);
    //        });
    });

}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
)


