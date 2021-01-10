// Assignment code here
var generatePassword = function() {
  //lower
  function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
//upper
  function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
//number
function randomNumber() {
return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//symbol
function randomSymbol() {
var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
return symbols[Math.floor(Math.random() * symbols.length)];
}

  
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
