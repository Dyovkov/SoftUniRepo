function prinNelement(array) {
    let step = Number(array[array.length - 1]);
    let result = 0;
    let printArr = [];
    for (let i = 0; i < array.length - 1; i += step) {
        result = array[i];
        printArr.push(result);      
    }
    console.log(printArr.join(" "));
}
prinNelement(['dsa', 'asd', 'test', 'test', '2'])
