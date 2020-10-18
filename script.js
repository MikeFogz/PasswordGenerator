// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specChars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "{",
  "|",
  "}",
  "~",
];
var emoji = ["😀", "🤯", "🧐", "😎"];

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = parseInt(prompt("How many characters should the password be?"));
  var password = [];
  var pw = "";
  //Checking length before confirming criteria.
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Try again. Password must be between 8-128 characters.");
  } else {
    var lowerTrue = confirm("Do you want lower case letters?");
    var upperTrue = confirm("Do you want Upper Case letters?");
    var numsTrue = confirm("Do you want numbers?");
    var sCharsTrue = confirm("Do you want Special Characters?");
    var emojiTrue = confirm("Do you want emojis?");
    //pushing criteria to empty array the password will pull from
    if (lowerTrue) password.push(lowerChars);
    if (upperTrue) password.push(upperChars);
    if (numsTrue) password.push(num);
    if (sCharsTrue) password.push(specChars);
    if (emojiTrue) password.push(emoji);
    // looking at password length and adding to it as long as pw is less than length entered.
    while (pw.length < length) {
      for (let i = 0; i < password.length; i++) {
        if (pw.length < length) {
          let rand = Math.floor(Math.random() * password[i].length);
          pw += password[i][rand];
        }
      }
    }
    console.log(pw, `password length: ${pw.length}`);
    // Pushing password to page to display
    passwordText.textContent = pw;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
