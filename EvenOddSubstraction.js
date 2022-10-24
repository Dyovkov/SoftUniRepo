function evenOddSubstraction(array) {
    let evenSum = 0;
    let oddSum = 0;
    for (let num of array) {
        num % 2 === 0 ? evenSum += num : oddSum += num;
    }
    console.log(evenSum - oddSum);
}
evenOddSubstraction([3,5,7,9])