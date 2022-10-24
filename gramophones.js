function gramophone(band, album, song) {
    let fullRotation = 2.5;
    let bandNameLength = band.length;
    let albumNameLength = album.length;
    let songNameLength = song.length;
    let songDuration = (albumNameLength * bandNameLength) * songNameLength / 2;
    let result = Math.ceil(songDuration / fullRotation);
    console.log(`The plate was rotated ${result} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel');