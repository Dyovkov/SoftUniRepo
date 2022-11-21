function cardGame(input) {

    function solve(input) {
        let sum = 0;
        let array = [... new Set(input)];

        for (let i = 0; i < array.length; i++) {
            let card = array[i];
            let mul1 = 0;
            let mul2 = 0;
            switch (card[0]) {
                case '1': mul1 = 10; break;
                case '2': mul1 = 2; break;
                case '3': mul1 = 3; break;
                case '4': mul1 = 4; break;
                case '5': mul1 = 5; break;
                case '6': mul1 = 6; break;
                case '7': mul1 = 7; break;
                case '8': mul1 = 8; break;
                case '9': mul1 = 9; break;
                case 'J': mul1 = 11; break;
                case 'Q': mul1 = 12; break;
                case 'K': mul1 = 13; break;
                case 'A': mul1 = 14; break;
                default:
                    break;
            }
            switch (card[1]) {
                case 'S': mul2 = 4; break;
                case 'H': mul2 = 3; break;
                case 'D': mul2 = 2; break;
                case 'C': mul2 = 1; break;
                default:
                    break;
            }
            switch (card[2]) {
                case 'S': mul2 = 4; break;
                case 'H': mul2 = 3; break;
                case 'D': mul2 = 2; break;
                case 'C': mul2 = 1; break;
                default:
                    break;
            }

            sum += mul1 * mul2;
        }
        return sum;
    }

    let list = {};

    for (const line of input) {
        let [name, cardList] = line.split(': ');
        let card = cardList.split(', ')
        if (!list.hasOwnProperty(name)) {
            list[name] = card;
        } else {
            let loop = list[name];
            let concat = loop.concat(card)
            list[name] = concat;
        }
    }

    //.console.table(list)
    for (const key in list) {
        console.log(`${key}: ${solve(list[key])}`);
    }
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]

)