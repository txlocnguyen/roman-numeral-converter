function convertToRoman(num) {
    if (!Number.isInteger(num) || num < 1) {
        return undefined;
    }
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let result = "";
    Object.keys(roman).map(i => {
        let mult = Math.floor(num / roman[i]);
        num -= mult * roman[i];
        result += i.repeat(mult)
    })
    return result;
}
console.log(convertToRoman(2.5))