// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var upperChars = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//can I list all caps and then use toLowerCase to pull a lower case version?
var specChars = ["!","#", "$", "%", "&", "(", ")", "*". "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "{", "|", "}", "~"]
var emoji = ["😀", "🤯", "🧐", "😎"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = parseInt(prompt( "How many characters should the passowrd be?"))

  passwordText.value = password;

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Not accepted. Must be between 8-128 characters.")
  } else{
    var lowerTrue = confirm("Do you want lower case letters?");
    var upperTrue = confirm("Do you want Upper Case letters?");
    var numsTrue = confirm("Do you want numbers?");
    var sCharsTrue = confirm("Do you want Special Characters?");
    var emojiTrue = confrim("Do you want emojis?");

    if (lowerTrue)
    if (upperTrue)

  }
}


// let lowerCase = confirm("Do you want lowercase?"){
//   if (lowerCase) {
//   } else {
    
//   }
// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
