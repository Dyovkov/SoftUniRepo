function arrayManipulatios(array) {
    let arr = array
        .shift()
        .split(' ')
        .map(Number);
    for (let i = 0; i < array.length; i++) {
        let [command, firstNum, secondNum] = array[i].split(' ')
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case "Add":
                arr.push(firstNum); break;
            case "Remove":
                arr = arr.filter((x) => x !== firstNum); break;
            case "RemoveAt":
                arr.splice(firstNum,1); break;
            case "Insert":
                arr.splice(secondNum, 0, firstNum); break;
            default:
                break;
        }
    }
    console.log(arr.join(' '));

} arrayManipulatios(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)