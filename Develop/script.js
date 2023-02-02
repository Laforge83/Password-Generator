// global variable
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special =  ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var generateBtn = document.getElementById("generate") 

function passwordOptions() {
  var passwordLenght=prompt("How many characters, min. 8, max. 128")
  console.log(passwordLenght)
  var userUpper=confirm("Uppercase Characters")
  console.log(userUpper)
  var userLower=confirm("Lowercase Characters")
  console.log(userLower)
  var userSpecial=confirm("Special Characters")
  console.log(userSpecial)
  var userNumbers=confirm("Number Characters")
  console.log(userNumbers)
  var options={
    passwordLenght,userLower,userUpper,userSpecial,userNumbers
  }
return options
}

function randomChoice(array){
var randomIndex=Math.floor(Math.random()*array.lenght)
return array[randomIndex]
}

function generatePassword() {
  var pwdOptions=passwordOptions()
  console.log(pwdOptions)
  var userPassword = []
  var concact=[]
  if (pwdOptions.userUpper) {
    userPassword.push(randomChoice (uppercase))
    concact=concact.concat(uppercase)
  }
  if (pwdOptions.userLower) {
    userPassword.push(randomChoice (lowercase))
    concact=concact.concat(lowercase)
  }
    if (pwdOptions.userSpecial) {
    userPassword.push(randomChoice (special))
    concact=concact.concat(special)
  }
  if (pwdOptions.userNumbers) {
    userPassword.push(randomChoice (numbers))
    concact=concact.concat(numbers)
  }
}
generatePassword()

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// pseudocode we need a series of prompt

