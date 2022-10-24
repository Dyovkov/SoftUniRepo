function maxNumber(array) {
    let result = "";
    for (let i = 0; i < array.length - 1; i++) {
        let bigger = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                continue;
            } else {
                bigger = false;
                break;
            }
        }
        if (bigger){
            result += `${array[i]} `;
        }
    }
    result += `${array[array.length - 1]}`;
    console.log(result);
}
maxNumber([14, 24, 3, 19, 15, 17])