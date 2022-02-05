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
        result += i.repeat(mult);
    })
    return result;
}

function printAnswer(yourNum, answer) {
    let result = document.getElementById("result");
    if (answer === undefined) {
        result.innerText = `${yourNum} is not in the correct format. Please input a positive integer and try again`;
        result.style.color = 'red';
    } else {
        result.innerHTML = `${yourNum} in Roman Numerals is <span style="color: darkblue;">${answer}</span>`;
        result.style.color = 'green';
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    let input = document.getElementById("input");
    let submit = document.getElementById("submit");

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        if (input.value === "") {
            alert("You did not enter any number or your number is not in the correct format. Please try again.")
        } else {
            printAnswer(input.value, convertToRoman(parseFloat(input.value)));
            input.value = "";
        }
    })
})