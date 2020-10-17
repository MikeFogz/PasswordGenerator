// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerChars = ["a", "b", "c"];
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
//can I list all caps and then use toLowerCase to pull a lower case version?
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

  passwordText.value = password;

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Try again. Password must be between 8-128 characters.");
  } else {
    var lowerTrue = confirm("Do you want lower case letters?");
    var upperTrue = confirm("Do you want Upper Case letters?");
    var numsTrue = confirm("Do you want numbers?");
    var sCharsTrue = confirm("Do you want Special Characters?");
    var emojiTrue = confrim("Do you want emojis?");

    if (lowerTrue) if (upperTrue) password.push(upperChars);
    if (numsTrue) password.push(num);
    if (sCharsTrue) password.push(specChars);
    if (emojiTrue) password.push(emoji);
    //I'm not 100% sure generatePassword() is acting as an array.
    //I need to push these if  statements to an array to generate the password

    var pw = "";
    // looking at password length and adding to it as long as pw is less than length entered.
    while (pw.length < length) {
      for (let i = 0; i < password.length; i++) {
        if (pw.length < length) {
          let rand = Math.floor(Math.random() * password[i].length);
          pw += password[i][rand];
        }
      }
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
