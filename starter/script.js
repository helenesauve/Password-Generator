
// Function to prompt user for password options
// Ask how many characters do you want? Between 10 and 64
// Ask what character types do you want? Lowercase, Uppercase, Numeric, Special characers
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];



function getPasswordOptions() {
  var validLength = false;
  var charNum = prompt(
    "What length do you want for your password (min 10, max 64?)"
    );
    if (charNum >= 10 && charNum <= 64) {
      validLength = true;
    }
    if (!validLength) {
      alert("You must select a number between 10 and 64")
      return getPasswordOptions();
    }
    // prompt password options for characters types
    // Array of special characters to be included in password
  var passwordOptions = [];
  var includeLowercase = confirm("Click Ok for lowercase");
  if (includeLowercase === true) {
    //add the lowercase array to password options
    passwordOptions = passwordOptions.concat(lowerCasedCharacters);
  }
  var includeUpperCase = confirm("Click Ok for uppercase");
  if (includeUpperCase === true) {
    passwordOptions = passwordOptions.concat(upperCasedCharacters);
  }
  var includeNumber = confirm("Click Ok for numbers");
  if (includeNumber === true) {
    passwordOptions = passwordOptions.concat(numericCharacters);
  }
  var includeSpecialChar = confirm("Click Ok for special characters");
  if (includeSpecialChar === true) {
    passwordOptions = passwordOptions.concat(specialCharacters);
  }
  //if none selected, prompt that at least one needs to be selected, otherwise run code again
  if (passwordOptions.length === 0) {
    alert("You must select at least one character type")
    return getPasswordOptions()
  }
  // return values in an object
  return {
    passwordLength: charNum,
    passwordBase: passwordOptions
  };
}

// Accessing returned values from array
// var length = Number(chosenOptions.length);
// var choiceLower = chosenOptions.lowerCase;
// var choiceUpper = chosenOptions.upperCase;
// var choiceNumeric = chosenOptions.numeric;
// var choiceSpecial = chosenOptions.specialChar

// Function for getting a random element from an array
function getRandom(arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  var item = arr[randomNumber];
  return item;
}
// filter and create new array of chosen array
// concatenate chosen arrays
// use for loop and math random to pick items based on chosen number of characters

// Function to generate password with user input
function generatePassword() {
  let chosenOptions = getPasswordOptions();
  var finalLength = chosenOptions.passwordLength
  var finalArr = chosenOptions.passwordBase
  var newPassword = ""
  for (var i =0; i < finalLength; i++){
      newPassword+= getRandom(finalArr)
      console.log(newPassword)
  }
  return newPassword
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
