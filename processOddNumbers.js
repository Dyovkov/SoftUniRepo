function processOddNumbers(array) {
   // let num = array.length
    let result = array
        .filter((num, i) => i % 2 == 1)
        .map(x => 2 * x)
        .reverse()
    return result.join(" ")
}
processOddNumbers([10, 15, 20, 25])