function magicSum(array, number) {
    let num1 = 0;
    let num2 = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        num1 = Number(array[i]);
        for (let j = i + 1; j < array.length; j++) {
            num2 = Number(array[j]);
            sum = num1 + num2;
            if (sum == number) {
                console.log(`${num1} ${num2}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8],27)