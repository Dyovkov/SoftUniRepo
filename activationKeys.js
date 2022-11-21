function activationKeys(input) {
    let key = input.shift();
    let command = input.shift();
    while (command != "Generate") {
        let line = command.split(">>>");
        let action = line[0];
        let sub = line[1];
        let direction = line[1];
        let start = Number(line[2]);
        let end = Number(line[3]);
        let startIndex = Number(line[1]);
        let ednIindex = Number(line[2]);
        let res = "";
        let res1 = "";
        switch (action) {
            case "Contains":
                if (key.includes(sub)) {
                    console.log(`${key} contains ${sub}`);
                } else {
                    console.log("Substring not found!");
                } break;
            case "Flip":
                res1 = key.slice(start, end);
                if (direction === "Upper") {
                    res = res1.toUpperCase();
                } else {
                    res = res1.toLowerCase();
                }
                key = key.replace(res1, res);
                console.log(key); break;
            case "Slice":
                if (
                    (startIndex && ednIindex) >= 0 &&
                    (startIndex && ednIindex) < key.length
                ) {
                    res = key.slice(0, startIndex) + key.slice(ednIindex);
                    key = res;
                    console.log(key);
                } break;
            default:
                break;
        }
        command = input.shift();
    }
    console.log(`Your activation key is: ${key}`);
}
activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
)