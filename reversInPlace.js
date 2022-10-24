function reverseInPlace(array) {
    let oldValue = "";
    
    for (let i = 0; i < array.length / 2; i++) {
        oldValue = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = oldValue;
    }
    console.log(array.join(" "));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);