function palindromeIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        let loop1 = String(array[i]);
        let straight = "";
        let revers = "";
        for (let j = 0; j < loop1.length; j++) {
            straight += `${loop1[j]}`;
        }
        for (let k = loop1.length - 1; k >= 0; k--) {
            revers += `${loop1[k]}`;
        }
        straight == revers ? console.log("true"): console.log("false");

        //console.log(array[i]);

    }
}
palindromeIntegers([123, 323, 421, 121])