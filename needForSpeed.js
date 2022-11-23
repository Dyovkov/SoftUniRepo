function needForSpeed(input) {
    const number = input.shift();
    let obj = {};
    for (let i = 0; i < number; i++) {
        let [car, mileage, fuel] = input.shift().split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);
        obj[car] = {
            mileage,
            fuel
        }
    }
    while (input[0] != "Stop") {
        let line = input.shift().split(' : ');
        let command = line[0];
        let car = line[1];
        if (command === "Drive") {
            let fuelDrive = Number(line[3]);
            let distance = Number(line[2]);
            if (obj[car].fuel >= fuelDrive) {
                obj[car].mileage += distance;
                obj[car].fuel -= fuelDrive;
                console.log(`${car} driven for ${distance} kilometers. ${fuelDrive} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }
            if (obj[car].mileage >= 100000) {
                delete obj[car];
                console.log(`Time to sell the ${car}!`);
            }
        } else if (command === "Refuel") {
            let fuelRefill = Number(line[2]);
            let fuelPrint = 0;
            if ((obj[car].fuel + fuelRefill) > 75) {
                fuelPrint = 75 - obj[car].fuel;
                obj[car].fuel = 75;
            } else {
                fuelPrint = fuelRefill;
                obj[car].fuel += fuelRefill;
            }
            console.log(`${car} refueled with ${fuelPrint} liters`);
        } else if (command === "Revert") {
            let kilometers = Number(line[2]);
            obj[car].mileage -= kilometers;
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            if (obj[car].mileage < 10000) {
                obj[car].mileage = 10000;
            }
        }
    }
    for (const [car,loop] of Object.entries(obj)) {

        console.log(`${car} -> Mileage: ${loop.mileage} kms, Fuel in the tank: ${loop.fuel} lt.`);

        
    }

}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
)