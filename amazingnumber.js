function amazingNumber(number) {
    let sum = 0;
    number = number.toString();
    for (let i = 0; i < number.length; i++) {
        let loopIn = Number(number[i]);
        sum += loopIn; 
    }
    let result = sum.toString().includes('9');
    console.log( result ? 
        `${number} Amazing? True`:
        `${number} Amazing? False` );
}
amazingNumber(999);