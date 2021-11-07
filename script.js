// Assignment code here
//Establishing variables
var generateBtn = document.querySelector("#generate");
var passwordLength;
var uppercaseopt;
var lowercaseopt;
var numbersopt;
var specialcharopt;
var choices;
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", ":", ";", "{", "}"]
//Now the prompt for the user to make their password
function passwordopt() {
  
  let passwordLength = parseInt(prompt("How many characters would you like your password to have?"), 10)
  //Let's not have our user make a password less than 8 characters, because why would you only need a 5 character long password?
  if (passwordLength < 8) {
    alert("I wouldn't make such a short password if I were you. In fact, I'm just not letting you do it at all.")
    return
  }
  //I've almost misspelt "length" so many times. It's a miracle this works at all.
  //You know what, why such a long password either? At that point I'd want to see what you're hiding.
  if (passwordLength > 128){
    alert("Come on, you don't need a password that long. I doubt you could remember such a password in the first place.")
    return
  }
  //Assuming our user gets past these two prompts, now they can actually select the password parameters.
  uppercaseopt = confirm("You DO want uppercase letters in your password, right?")
  lowercaseopt = confirm("You probably want lowercase letters in your password too, But hey, it's your choice.")
  numbersopt = confirm("Most sites require numbers in your passwords. This one probably isn't even up to you. But if it is, you can go ahead and choose if you want numbers.")
  specialcharopt = confirm("Lastly, special characters. All your weird stuff. You want them?")
  //If for some weird reason the user doesn't choose any character option, we have to tell them how wrong they are.
  if (
    uppercaseopt === false &&
    lowercaseopt === false &&
    numbersopt === false &&
    specialcharopt === false) {
      alert("You need to select at least one option to continue. I'm surprised you got to this textbox in the first place.")
      return
    }  
    //Now we tell the user the options they selected and randomize!
    choiceconfirm = {
      length: passwordLength,
      lowercaseopt: lowercaseopt,
      uppercaseopt: uppercaseopt,
      numbersopt: numbersopt,
      specialcharopt: specialcharopt,
    }
    return choiceconfirm
}
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElements = arr[randomIndex]

  return randomElements
}
function generatePassword() {
  var options = passwordopt()
  var result = []
  var possibleCharacters = []
  var setCharacters = []
  // Did they select an option or hit cancel?
  if (options.specialcharopt) {
    possibleCharacters = possibleCharacters.concat(special)
    setCharacters.push(getRandom(special))
  }

  if (options.numbersopt) {
    possibleCharacters = possibleCharacters.concat(numbers)
    setCharacters.push(getRandom(numbers))
  }

  if (options.lowercaseopt) {
    possibleCharacters = possibleCharacters.concat(lowercase)
    setCharacters.push(getRandom(lowercase))
  }

  if (options.uppercaseopt) {
    possibleCharacters = possibleCharacters.concat(uppercase)
    setCharacters.push(getRandom(uppercase))
  }

  // Now we can randomize their options
  for (var i = 0; i < options.length; i++) {
    var random =getRandom(setCharacters)
    result.push(random)
  }
// This loop finally generates the password!
  for (var i = 0; i < setCharacters.length; ++i) {
    result[i] = setCharacters[i]
  }
  return result.join("")
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