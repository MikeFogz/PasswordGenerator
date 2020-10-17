// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var char = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//can I list all caps and then use toLowerCase to pull a lower case version?
var specChar = ["!","#", "$", "%", "&", "(", ")", "*". "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "{", "|", "}", "~"]
var emoji = ["😀", "🤯", "🧐", "😎"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

let lowerCase = confirm("Do you want lowercase?"){
  if (lowerCase) {
    
  } else {
    
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
