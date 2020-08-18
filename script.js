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


const lowerCase = ["a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B" ,"C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChar = ["!", "#", "$", "%", "&", "*", "+", "-", ":", ";", "<", ">", "=", "?", "@", "^", "_", "~"];
let final = [];
let password = "";

/*Builds array of characters ot select from, 
selects them with randomized indeces, 
puts them into a string,
sends string to writePassword()*/
function generatePassword() {
  let passwordLegnth = prompt("How long should your password be? (Any length between 8 and 128 characters is valid");
  if (passwordLegnth >= 8 && passwordLegnth <= 128){
    if (confirm("Do you want to include lowercase letters? Click OK for YES and Cancel for NO")) {
      final = final.concat(lowerCase);
    } if (confirm("Do you want to include UPPERCASE letters? Click OK for YES and Cancel for NO")) {
      final = final.concat(upperCase);
    } if (confirm("Do you want to include numbers? Click OK for YES and Cancel for NO")) {
      final = final.concat(numbers);
    } if (confirm("Do you want to include special characters? Click OK for YES and Cancel for NO")) {
      final = final.concat(specialChar);
    } 
    for (i = 0; i < passwordLegnth; i++) {
      password = password + final[Math.floor(Math.random() * final.length)]
    } return password;
  } else {
    alert("Please try again and enter a number between 8 and 128");
  }
}

