function blackFlag(array) {
    array = array.map(Number)
    let days = array[0];
    let dailyPlunder = array[1];
    let expectedPlunder = array[2];
    let count = 0;
    let gatherPlunder = 0;


    for (let i = 0; i < days; i++) {
        count++;
        gatherPlunder += dailyPlunder;
        if (count % 3 == 0) {
            gatherPlunder += dailyPlunder / 2;
        }
        if (count % 5 == 0) {
            gatherPlunder = gatherPlunder * 0.7;
        }
    }
    let percentage = gatherPlunder / expectedPlunder * 100;
    gatherPlunder >= expectedPlunder ? console.log(`Ahoy! ${gatherPlunder.toFixed(2)} plunder gained.`) : console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);


} blackFlag((["5",
    "40",
    "100"])
)