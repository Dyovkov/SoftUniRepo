function shopingList(array) {
    let groceries = array
        .shift()
        .split('!')
    let index = 0;
    let command = array[index];
    while (command != "Go Shopping!"){
        let loopArr = array[index].split(' ');
        let loopCommand = loopArr[0];
        let item = loopArr[1];
        let oldItem = loopArr[1];
        let newItem = loopArr[2];

        if (loopCommand == "Urgent" && !groceries.includes(item)){
            groceries.unshift(item);
        }
        if (loopCommand == "Unnecessary" && groceries.includes(item)){
            groceries = groceries.filter(x => x != item);
        }
        if (loopCommand == "Correct" && groceries.includes(oldItem) ){
            let i = groceries.indexOf(oldItem);
            groceries.splice(i,1,newItem);
        }
        if (loopCommand == "Rearrange" && groceries.includes(item)){
            let i = groceries.indexOf(item);
            let takeItem = groceries[i];
            groceries.splice(i,1);
            groceries.push(takeItem);
        }
        index++;
        command = array[index];
    }
    console.log(groceries.join(', '));
}
shopingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
)