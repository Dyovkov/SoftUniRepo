function condenseArrayToNumber(array) {
    let condensed = [];
    condensed.length = array.length - 1;
    if (array.length > 1) {
        while (condensed.length >= 1) {
            for (let i = 0; i < array.length - 1; i++) {
                condensed[i] = array[i] + array[i + 1];
            }
            array = condensed;
            condensed = [];
            condensed.length = array.length - 1;
        }
        console.log(Number(array));
    } else {
        console.log(Number(array));
    }
}
condenseArrayToNumber([2,10,3]);