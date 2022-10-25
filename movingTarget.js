function movingTarget(array) {
    let sequenceOfTargets = array
        .shift()
        .split(' ')
        .map(Number);
    let i = 0;
    let command = array[i];
    while (command != "End") {
        let loopArr = array[i].split(' ');
        let loopCommand = loopArr[0];
        let index = Number(loopArr[1]);
        let power = Number(loopArr[2]);
        let value = Number(loopArr[2]);
        let radius = Number(loopArr[2]);

        if (loopCommand == "Shoot" && sequenceOfTargets.length > index) {
            sequenceOfTargets[index] -= power;
            if (sequenceOfTargets[index] <= 0) {
                sequenceOfTargets.splice(index, 1);
            }
        }
        if (loopCommand == "Add") {
            if (sequenceOfTargets.length > index && index >= 0) {
                sequenceOfTargets.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }
        }
        if (loopCommand == "Strike") {
            if (index >= radius) {
                if ((index + radius) < sequenceOfTargets.length) {
                    let start = index - radius;
                    let count = (2 * radius) + 1;
                    sequenceOfTargets.splice(start, count);
                } else {
                    console.log('Strike missed!');
                }
            }
            else {
                console.log('Strike missed!');
            }
        }
        i++;
        command = array[i];
    }
    console.log(sequenceOfTargets.join('|'));
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
