function repeatingString(string, number) {
    let result = "";
    for (let i = 0; i < number; i++) {
        result +=string;        
    }
    console.log(result);
}repeatingString("abc", 3)