function requiredReading(bookpages, hourPages, numDays ) {
    let timeToRead = (bookpages / hourPages);
    let numHours = timeToRead / numDays;
    console.log(numHours);
}
requiredReading(212,
    20 ,
    2 
    )