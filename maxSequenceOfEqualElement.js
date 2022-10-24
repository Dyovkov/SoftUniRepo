function maxSequenceOfEqualNumbers(array) {
    let check = array[0];
    let countrer = 1;
    let result = array[0];


    for (let i = 1; i < array.length; i++) {
        if (array[i] == check) {
            countrer++;
            result += " " + array[i];


        }



    }
    console.log(result);
}
maxSequenceOfEqualNumbers([1, 1, 1, 2, 3, 1, 3, 3]);
