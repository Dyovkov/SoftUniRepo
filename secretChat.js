function secretChat(input) {
    let concealed = input.shift();
    let command = input.shift();
    while (command != "Reveal") {
        let line = command.split(':|:')
        let loopCommand = line[0];
        let index = Number(line[1]);
        let sub = line[1];
        let replace = line[2];
        let res = "";
        switch (loopCommand) {
            case "ChangeAll":
                while (concealed.includes(sub)) {
                    res = concealed.replace(sub, replace);
                    concealed = res;
                }
                console.log(concealed); break;
            case "Reverse":
                if (concealed.includes(sub)) {
                    let length = sub.length;
                    let num = concealed.indexOf(sub);
                    let reverse = concealed.slice(num, num + length).split("").reverse().join("")
                    res = concealed.slice(0, num) + concealed.slice(num + length) + reverse;
                    concealed = res;
                    console.log(concealed);
                } else {
                    console.log("error");
                } break;
            case "InsertSpace":
                res = concealed.slice(0,index) + " " + concealed.slice(index);
                concealed = res;
                console.log(concealed); break;
            default:
                break;
        }
        command = input.shift();
    }
    console.log(`You have a new text message: ${concealed}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]  
)