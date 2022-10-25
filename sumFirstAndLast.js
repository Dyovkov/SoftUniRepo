function sumFirstAndLast(array) {
    let sum = 0;
    let firstNumber = Number(array.shift());
    let secondNumber = Number(array.pop());
    sum = firstNumber + secondNumber;
    console.log(sum);;    
}
sumFirstAndLast(['20', '30', '40'])