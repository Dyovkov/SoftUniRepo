function wordOccurrences(array) {
    let map = new Map();

    for (const line of array) {
        let count = 1;
        if (map.has(line)) {
            count += map.get(line);
        }
        map.set(line, count);
    }

let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
for (const key of sorted) {
    console.log(`${key[0]} -> ${key[1]} times`)
}
} wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])