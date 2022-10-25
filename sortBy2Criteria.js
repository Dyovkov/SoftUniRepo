function sortBy2Criteria(array) {

    let mapArr = array.sort((a,b) => a.localeCompare(b));
    mapArr = array.sort((a,b) => a.length - b.length); 

    console.log(mapArr.join('\n'));
    
}sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])