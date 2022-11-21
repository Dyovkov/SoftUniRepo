function passwordReset(input) {
    let text = input.shift();
    let command = input.shift();

    while (command != "Done") {

        let line = command.split(' ')
        let loopCommand = line.shift();
        let [index, length] = line;
        index = Number(index);
        length = Number(length);
        let [substring, substitute] = line;
        let res = "";
        switch (loopCommand) {
            case "TakeOdd":
                for (let i = 0; i < text.length; i++) {
                    if (i % 2 !== 0) {
                        res += text[i];
                    }
                }
                text = res;
                console.log(text); break;
            case "Cut":
                res = text.slice(0, index) + text.slice(index + length);
                text = res;
                console.log(text); break;
            case "Substitute":
                if (text.includes(substring)) {
                    let splitted = text.split(substring)
                    res = splitted.join(substitute);
                    text = res;
                    console.log(text);
                } else {
                    console.log("Nothing to replace!");
                } break;
            default:
                break;
        }
        command = input.shift();
    }
    console.log(`Your password is: ${text}`);
}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)