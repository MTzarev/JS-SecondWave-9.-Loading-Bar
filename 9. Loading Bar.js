function loadingBar(num) {
    let symbol1 = "%";
    let symbol2 = ".";
    let count = num / 10;
    let symbol2Count = 10 - count;

    if (count >= 1 && count <= 10) {
        if (num < 100) {
            console.log(`${num}% [${symbol1.repeat(count)}${symbol2.repeat(symbol2Count)}]`);
            console.log(`Still loading...`);
        } else {
            console.log(`${num}% Complete!`);
            console.log(`[${symbol1.repeat(count)}]`);
        }
    }
    console.log();
}
loadingBar(100);
