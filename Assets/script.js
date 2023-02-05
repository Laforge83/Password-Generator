// global variable
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var generateBtn = document.getElementById("generate")

function passwordOptions() {
  var passwordLenght = parseInt(prompt("How many characters? min. 8, max. 128"))
  console.log(passwordLenght)
  var userUpper = confirm("Uppercase Characters")
  console.log(userUpper)
  var userLower = confirm("Lowercase Characters")
  console.log(userLower)
  var userSpecial = confirm("Special Characters")
  console.log(userSpecial)
  var userNumbers = confirm("Number Characters")
  console.log(userNumbers)
  var options = {
    passwordLenght, userLower, userUpper, userSpecial, userNumbers
  }
  return options
}
function randomChoice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  console.log(randomIndex, arr[randomIndex])
  return arr[randomIndex];
}

function generatePassword() {
  var pwdOptions = passwordOptions()
  console.log(typeof pwdOptions.passwordLenght
  )
  var userPassword = []
  var concact = []
  var finalPassword = []
  if (pwdOptions.userUpper) {
    userPassword.push(randomChoice(uppercase))
    concact = [...concact, ...uppercase
    ]
  }
  if (pwdOptions.userLower) {
    userPassword.push(randomChoice(lowercase))
    concact = concact.concat(lowercase)
  }
  if (pwdOptions.userSpecial) {
    userPassword.push(randomChoice(special))
    concact = concact.concat(special)
  }
  if (pwdOptions.userNumbers) {
    userPassword.push(randomChoice(numbers))
    concact = concact.concat(numbers)
  }

  console.log(concact)
  console.log(pwdOptions.passwordLenght)

  for (let i = 0; i < pwdOptions.passwordLenght; i++) {
    finalPassword.push(randomChoice(concact))

    console.log(finalPassword)
  }
  for (let i = 0; i < finalPassword.length; i++) {
    userPassword[i] = finalPassword[i]
  }

  return finalPassword.join("")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);