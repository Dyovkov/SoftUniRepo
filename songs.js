function songs(array) {
    class Song {
        constructor(type, name, time){
            this.type = type
            this.name = name
            this.time = time
        }
    }
    let songs = [];
    let songNumber = array.shift();
    let typeSong = array.pop();

    for (let i = 0; i < array.length; i++) {
        let [type, name, time] = array[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if ( typeSong === "all"){
        songs.forEach((x) => console.log(x.name) );
    } else {
        let filtered = songs.filter((x) => x.type === typeSong );
        filtered.forEach((x) => console.log(x.name));
    }
} songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    
);