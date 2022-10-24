function characterInRange(char1, char2) {
    let first = char1.charCodeAt(0);
    let second = char2.charCodeAt(0);
    let res = "";
    if (first < second){
        num1 = first;
        num2 = second;
    }else {
        num1 = second;
        num2 = first;
    }
    for (let i = num1+1; i < num2; i++) {
        let symb = String.fromCharCode(i)
        res +=`${symb} `;
       
    }
    console.log(res);
}
characterInRange("C","#")