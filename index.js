const passwordInput = document.querySelector(".password-box input"),
  copyIcon = document.querySelector(".password-box .copy-icon"),
  rangeInput = document.querySelector(".range-box input"),
  sliderNumber = document.querySelector(".range-box .slider-number"),
  generateButton = document.querySelector(".generate-button");

let allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

const generatePassword = () => {
  generateButton.innerText = "Copy Password"

  let newPassword = "";

  for (let i = 0; i < rangeInput.value; i++) {
    let randomNumbers = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomNumbers];
  }
  passwordInput.value = newPassword;
};

rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
});

generatePassword();
generateButton.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  generateButton.innerText = "Copied"
});


