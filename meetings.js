function meetings(array){

    let list = {};
    for (const line of array) {
        let [weekday, name] = line.split(' ');
        if (list.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            console.log(`Scheduled for ${weekday}`);
            list[weekday] = name;
        }
    }
    for (const key in list) {
      console.log(`${key} -> ${list[key]}`);
    }
}meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)