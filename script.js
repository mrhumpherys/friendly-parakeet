// Assignment code here
//arrays and needed variables
let lowercaseBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let uppercaseBank = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let symbolBank = [' ',',','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']
let numberBank = [0,1,2,3,4,5,6,7,8,9]



console.log(uppercaseBank);
console.log(lowercaseBank);
console.log(symbolBank);
console.log(numberBank);

let finalPasswordBank = []
let finalPassword = ""
let superFinalPassword = ""
console.log(finalPasswordBank);

//main function
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
 console.log(isLower);
 console.log(isUpper);
 console.log(isNumber);
 console.log(isSymbol);
//ifs and for loop
  if (isLower == true) {
     finalPasswordBank.push.apply(finalPasswordBank, lowercaseBank);
  }
  if (isUpper == true) {
    finalPasswordBank.push.apply(finalPasswordBank, uppercaseBank);
  }
  if (isNumber == true) {
    finalPasswordBank.push.apply(finalPasswordBank, numberBank);
  }
  if (isSymbol == true) {
    finalPasswordBank.push.apply(finalPasswordBank, symbolBank);
  }
  console.log(finalPasswordBank);
  for (i=0; i < length; i++) {
    var finalPassword = finalPasswordBank[Math.floor(Math.random() * finalPasswordBank.length)]
   console.log(finalPassword);
    
    superFinalPassword = (finalPassword + superFinalPassword);

  
  
  }
   console.log(superFinalPassword);
  return superFinalPassword;
  
};


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
