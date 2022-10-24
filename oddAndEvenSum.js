function oddAndEvenSum(number) {
    let num = String(number);
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < num.length; i++) {
        let loopIn = Number(num[i]);
        loopIn % 2 == 0 ? evenSum += loopIn : oddSum += loopIn;
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234)