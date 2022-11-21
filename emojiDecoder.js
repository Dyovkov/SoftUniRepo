function emojiDecoder(input) {
    const text = input.shift();
    const digitPatern = /\d/gm;
    const patern = /([:]{2}|[*]{2})([A-Z][a-z]{2,})\1/gm
    let coolTresold = 1;
    let digitMatch = text.match(digitPatern);
    for (const ch of digitMatch) {
        let loopNum = Number(ch);
        coolTresold *= loopNum;
    }
    console.log(`Cool threshold: ${coolTresold}`);
    let wordMatches = text.match(patern);
    console.log(`${wordMatches.length} emojis found in the text. The cool ones are:`);
    for (const cool of wordMatches) {
        let coolNum = 0;
        for (let i = 0; i < cool.length; i++) {
            let acsiNum = cool[i].charCodeAt();
            if (acsiNum >= 65 && acsiNum <= 122) {
                coolNum += acsiNum;
            }
        }
        if (coolNum > coolTresold){
            console.log(cool);
        }
    }
}
emojiDecoder((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]));