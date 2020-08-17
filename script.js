// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let lowerCase = ["a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCase = ["A", "B" ,"C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialChar = ["!", "#", "$", "%", "&", "*", "+", "-", ":", ";", "<", ">", "=", "?", "@", "^", "_", "~"]

function criteria() {
  var passwordLegnth = prompt("How long should your password be? (Any length between 8 and 128 characters is valid")
  if (passwordLegnth >= 8 && passwordLegnth <= 128){

  } else {
    alert("Please try again and enter a number between 8 and 128")
  }
}