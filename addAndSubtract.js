function addAndSubtract(num1, num2, num3) {
    let sum = (a, b) => num1 + num2;
    let subtract = (a, b) => sum(num1, num2) - num3;
    console.log(subtract());
} addAndSubtract(23,
    6,
    10
)