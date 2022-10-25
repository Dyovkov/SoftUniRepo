function searchForANmber(array1, array2) {
    let numOfElTake = array2[0];
    let numOfElDelete = array2[1];
    let number = array2[2];
    let count = 0;
    let result = array1
        .slice(0, numOfElTake)
        .slice(numOfElDelete);
    for (const num of result) {
        if (num == number) {
            count++;
        }
    }
    console.log(`Number ${number} occurs ${count} times.`);
}
searchForANmber([7, 1, 5, 8, 5, 7],
    [3, 1, 5]
    )