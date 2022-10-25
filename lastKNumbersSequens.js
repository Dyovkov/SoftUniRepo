function lastKNUmbersSequens(n, k) {
    let result = [];
    result.length = n;
    result[0] = 1;
    for (let i = 1; i < result.length; i++) {
        let start = Math.max(0, i - k);
        let end = i - 1;
        let sum = 0;
        for (let j = start; j <= end; j++) {
            sum += result[j]
        }
        result[i] = sum;
    }
    console.log(result.join(" "));
} lastKNUmbersSequens(6, 3);