function train(array) {
    let wagonsPassengers = array // each wagon number of passengers
        .shift()
        .split(' ')
        .map(Number);
    let maxCapacity = Number(array.shift());
    for (let i = 0; i < array.length; i++) {
        let newArr = [];
        newArr = array[i].split(" ");
        let command = newArr[0];
        let newWagon = newArr[1];
        switch (command) {
            case "Add":
                wagonsPassengers.push(newWagon);
                break;
            default:
                command = Number(command);
                for (let i = 0; i < wagonsPassengers.length; i++) {
                    if (wagonsPassengers[i] + command <= maxCapacity) {
                        wagonsPassengers[i] += command;
                        break;
                    }
                }
                break;
        }
    }
    console.log(wagonsPassengers.join(' '));
} train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)