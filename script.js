// Assignment code here
//object with random functions
var randomFunctions = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
}


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
var generatePassword = function() {
  //determine lenght
  var length = +window.prompt("Choose a password length anywhere betweeen 8 and 128");
  if (length < 8 || length > 128) {
    alert("You choose an incorrect value. Try again");
    return generatePassword();
  }
  //determine password contents
  var isLower = window.confirm("Would you like lowercase letters in your password?");

  var isUpper = window.confirm("Would you like uppercase letters in your password?");

  var isNumber = window.confirm("Would you like numbers in your password?");

  var isSymbol = window.confirm("Would you like symbols in your password?");

//function with loop and ability to choose password makeup


  console.log(isNumber);
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
