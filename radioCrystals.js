function radioCrystals(array) {
    let target = array[0];
    for (let i = 1; i < array.length; i++) {
        let chunk = array[i];
        let workThicknes = chunk;
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        console.log(`Processing chunk ${chunk} microns`);
        while (workThicknes / 4 >= target) { //cut
            workThicknes = workThicknes / 4;
            cutCount++;
            workThicknes = Math.floor(workThicknes);
        }
        if (cutCount > 0) {
            console.log(`Cut x${cutCount}`);
            console.log("Transporting and washing");
        }

        while (workThicknes * 0.8 >= target) { // lap
            workThicknes = workThicknes * 0.80;
            lapCount++;
            workThicknes = Math.floor(workThicknes);
        }
        if (lapCount > 0) {
            console.log(`Lap x${lapCount}`);
            console.log("Transporting and washing");
        }
        while (workThicknes - 20 >= target) { // Grind
            workThicknes -= 20;
            grindCount++;
            workThicknes = Math.floor(workThicknes);
        }
        if (grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            console.log("Transporting and washing");
        }
        while (workThicknes > target) { // Etch
            workThicknes -= 2;
            etchCount++;
            workThicknes = Math.floor(workThicknes);
        }
        if (etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            console.log("Transporting and washing");
        }

        if (workThicknes < target) { // X-Ray
            console.log("X-ray x1");
        }
        console.log(`Finished crystal ${target} microns`);
    }
}
radioCrystals([1375, 50000]);