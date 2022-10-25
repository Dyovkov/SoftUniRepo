function bombNumbers(array1, array2) {
    let bomb = array2[0];
    let power = array2[1];
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == bomb) {
            let startIndex = Math.max(0,i - power);
            let finishIndex = 2 * power + 1;
            array1.splice(startIndex, finishIndex);
            //i = 0;
        }
        
    }
    for (const num of array1) {
        sum += num;
    }
    console.log(sum);
    console.log((array1));
}
bombNumbers([7, 2, 3, 1, 2, 3],
    [7, 1]
    )