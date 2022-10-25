function sorting(array) {
    let sortedArr = array.sort((a, b) => a - b)
    let result = [];
    for (let i = 0; i < sortedArr.length; i++) {
        let firstEl = sortedArr.pop();
        let secondEl = sortedArr.shift();
        result.push(firstEl);
        result.push(secondEl);
    }
    result.push(sortedArr.pop());
    result.push(sortedArr.shift());
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])