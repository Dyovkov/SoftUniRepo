function printDna(number) {
    let nucles = "ATCGTTAGGG";
    let index = 0;
    let chainCount = 0;
    for (let i = 0; i < number; i++) {
        if ( index == 10){
            index = 0;
        }
        let symbol1 = nucles[index];
        index++;
        let symbol2 = nucles[index];
        index++;
        if (chainCount == 4) {
            chainCount = 0;
        }
        if (chainCount == 0) {
            console.log(`**${symbol1}${symbol2}**`);
        } else if (chainCount == 1 || chainCount == 3) {
            console.log(`*${symbol1}--${symbol2}*`);
        } else if (chainCount == 2) {
            console.log(`${symbol1}----${symbol2}`);
        }
        chainCount++;
    }
}
printDna(10)