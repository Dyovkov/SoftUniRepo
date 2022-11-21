function movies(array) {
    let list = [];

    for (const line of array) {
        console.log(line);
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1]
            list.push({ name: name });
            console.table(list);
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let find = list.find((x) => x.name === name);
            if (find) {
                find.director = director;
            }
            console.log(find);
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let find1 = list.find((x) => x.name === name);
          
            if (find1) {
                find1.date = date;
            }
            console.log(find1);                              
        }
    }
    list.forEach((find) => {
        if (find.name && find.date && find.director) {
        console.log(JSON.stringify(find));
        }
    })
}



movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)