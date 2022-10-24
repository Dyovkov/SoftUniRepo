function mergeArrays(array1, array2) {
    let array3 = [];
    array3.length = array1.length;
    for (let i = 0; i < array1.length; i++) {
        if (i % 2 === 0) { 
            array1[i] = Number(array1[i]) }
    }
    for (let i = 0; i < array2.length; i++) {
        if (i % 2 === 0) { 
            array2[i] = Number(array2[i]) }
    }
    for (let i = 0; i < array3.length; i++) {
        i % 2 === 0 ? array3[i] = array1[i] + array2[i] : array3[i] = `${array1[i]}${array2[i]}`;
    }
    console.log(array3.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)