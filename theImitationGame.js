function theImitationGame(array) {
    let word = array.shift();
    let command = array.shift();
    while (command != "Decode") {
        let line = command.split('|')
        let action = line[0];
        let numL = Number(line[1]);
        let index = Number(line[1]);
        let value = line[2];
        let substring = line[1];
        let replacement = line[2];
        let res = "";
        switch (action) {
            case "Move":
                res = word.substring(numL) + word.substring(0, numL)
                word = res; break;
            case "Insert":
                res = word.slice(0, index) + value + word.slice(index);
                word = res; break;
            case "ChangeAll":
                while (word.includes(substring)) {
                    res = word.replace(substring, replacement);
                    word = res;
                } break;
            default:
                break;
        }
        command = array.shift();
    }
    console.log(`The decrypted message is: ${word}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
);
