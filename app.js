const passwordDisplay = document.querySelector("#new-password");
const numberOfCharacters = document.querySelector("#number-of-characters");
const lowerCaseCheckBox = document.querySelector("#lowercase");
const upperCaseCheckBox = document.querySelector("#uppercase");
const numberCheckBox = document.querySelector("#numbers");
const symbolCheckBox = document.querySelector("#special-characters");
const generateButton = document.querySelector("button");

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*";

generateButton.addEventListener("click", () => {

    let newPassword = "";
    const n = parseInt(numberOfCharacters.value);

    if (n <= 0) {
        alert("Enter Valid Number of Characters!");
        passwordDisplay.value = "";
        numberOfCharacters.value = "";
        lowerCaseCheckBox.checked = false;
        upperCaseCheckBox.checked = false;
        numberCheckBox.checked = false;
        symbolCheckBox.checked = false;
    }
    else {
        let characters = "";

        if (lowerCaseCheckBox.checked == true)
            characters = characters + lowerCaseLetters;

        if (upperCaseCheckBox.checked == true)
            characters = characters + upperCaseLetters;

        if (numberCheckBox.checked == true)
            characters = characters + numbers;

        if (symbolCheckBox.checked == true)
            characters = characters + symbols;

        const m = characters.length;

        for (let i = 0; i < n; ++i)
            newPassword = newPassword + characters[Math.floor(Math.random() * m)];
    }

    passwordDisplay.value = newPassword;
});


const resetButton = document.querySelectorAll("button")[1];

resetButton.addEventListener("click", () => {
    passwordDisplay.value = "";
    numberOfCharacters.value = "";
    lowerCaseCheckBox.checked = false;
    upperCaseCheckBox.checked = false;
    numberCheckBox.checked = false;
    symbolCheckBox.checked = false;
});