function thePianist(input) {
    let object = {};
    const numPieces = input.shift();
    for (let i = 0; i < numPieces; i++) {
        let [piece, composer, key] = input.shift().split('|')
        object[piece] = {
            composer,
            key
        }
    }
    while (input[0] != "Stop") {
        let line = input.shift().split('|');
        let command = line[0];
        let piece = line[1];
        if (command === "Add") {
            if (object[piece] != undefined) {
                console.log(`${piece} is already in the collection!`);
            } else {
                object[piece] = {
                    composer: line[2],
                    key: line[3]
                }
                console.log(`${piece} by ${line[2]} in ${line[3]} added to the collection!`)
            }
        } else if (command === "Remove") {
            if (object[piece] != undefined) {
                delete object[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (command === "ChangeKey") {
            if (object[piece] != undefined){
                object[piece].key = line[2];
                console.log(`Changed the key of ${piece} to ${line[2]}}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    for (const [name, piece] of Object.entries(object)) {
        console.log(`${name} -> Composer: ${piece.composer} -> Key: ${piece.key}`);
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)
