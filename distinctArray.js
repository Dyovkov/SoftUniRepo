function distinctArray(array) {
    let newArr = [...new Set(array)]
    console.log(newArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])