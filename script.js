// Assignment code here

function generatePassword() {
  
  var passwordlegnth = prompt("How many characters would you like your password to have?");
  alert(passwordlegnth);
  return "The best password";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
