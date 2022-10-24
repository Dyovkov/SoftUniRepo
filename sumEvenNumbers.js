function sumEvenNumbers(array) {
    let numArray = []
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        numArray[i] = Number(array[i]);
        if (numArray[i] % 2 == 0 ){
            sum += numArray[i];
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6']);