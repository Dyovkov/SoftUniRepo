function houseParty(array) {
    let newArr = [];
    let printArr = []
    for (let i = 0; i < array.length; i++) {
        newArr = array[i].split(' ');
        let name = newArr[0];
        let command = newArr[2];
        switch (command) {
            case "going!":
                let magic1 = 0;
                for (let i = 0; i < printArr.length; i++) {
                    if (name === printArr[i]) {
                        console.log(`${name} is already in the list!`);
                        magic1 = 1
                        break;
                    }
                }
                if (magic1 === 1) {
                    break;
                }
                printArr.push(name);
                break;
            case "not":
                let magic2 = 0;
                for (let i = 0; i < printArr.length; i++) {
                    if (name === printArr[i]) {
                        magic2 = 1;
                        printArr = printArr.filter(x => x != `${name}`);
                        break;
                    }
                }
                if (magic2 == 0) {
                    console.log(`${name} is not in the list!`);
                }
                break;
            default:
                break;
        }
    }
    console.log(printArr.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)