function firstAndLastKNumbers(array) {
    let k = array[0];
    let firstK = array.slice(1, k + 1);
    let lastK = array.slice(array.length - k, array.length)
    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
} firstAndLastKNumbers([2,
    7, 8, 9]
)