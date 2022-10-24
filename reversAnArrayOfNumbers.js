function reversAnArrayOfNumbers(num, array) {
    let newArray = [];
    for (let i = 0; i < num; i++) {
       newArray[i] = array[i];
    }
    let = reversArr = ""
    for (let i = newArray.length - 1; i >= 0; i--) {
       reversArr += `${newArray[i]} `;
    }
    console.log(reversArr);
} reversAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);