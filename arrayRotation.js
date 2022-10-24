function arrayRotation(array, number) {
    let pervois = 0;
    let index = 0;
    if (number != array.length) {
        while (index < number) {
            pervois = array[0];
            for (let i = 0; i < array.length; i++) {
                if (i < array.length - 1) {
                    array[i] = array[i + 1];
                } else {
                    array[i] = pervois;
                }
            }
            index++;   
        }
        console.log(array.join(" "));
    } else {
        console.log(array.join(" "));
    }
}
arrayRotation([2, 4, 15, 31], 5);