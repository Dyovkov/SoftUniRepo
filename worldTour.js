function worldTour(input) {
    let stops = input.shift();
    let command = input.shift();
    while (command != "Travel") {
        let line = command.split(':');
        let loopCommand = line.shift();
        let [index, string] = line;
        let [startIndex, endIndex] = line;
        let [oldString, newString] = line;
        index = Number(index);
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        let res = "";
        switch (loopCommand) {
            case "Add Stop":
                if (index >= 0 && index < stops.length) {
                    res = stops.slice(0, index) + string + stops.slice(index);
                    stops = res;
                }
                console.log(stops); break;
            case "Remove Stop":
                if (startIndex >= 0 && endIndex >= 0 && startIndex < stops.length && endIndex < stops.length) {
                    res = stops.slice(0, startIndex) + stops.slice(endIndex + 1);
                    stops = res;

                }
                console.log(stops); break;
            case "Switch":
                if (stops.includes(oldString)) {
                    let splitted = stops.split(oldString);
                    res = splitted.join(newString);
                    stops = res;
                    console.log(stops);
                } else {
                    console.log(stops);
                } break;
            default:
                break;
        }
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)
