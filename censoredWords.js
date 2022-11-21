function censoredWords(input, word) {
    while (input.includes(word)){
        input = input.replace(word, '*'.repeat(word.length));
}
console.log(input);
}
censoredWords("A small sentence with some words", "small");