// Array of special characters to be included in password
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

// creating array with all arrays

var passwordoptions = [
  specialCharacters,
  numericCharacters,
  lowerCasedCharacters,
  upperCasedCharacters,
];

// Function to prompt user for password options
// Ask how many characters do you want? Between 10 and 64
// Ask what character types do you want? Lowercase, Uppercase, Numeric, Special characers

function getPasswordOptions() {
  var charNum = prompt(
    "What length do you want for your password (min 10, max 64?"
  );
  if (charNum >= 10 && charNum <= 64) {
    console.log(charNum);
  } else {
    prompt("Character needs to be a number between 10 and 64");
  }

  // prompt password options for characters types
  do {
    var includeLowercase = confirm("Click Ok for lowercase");
    if (includeLowercase === true) {
      console.log(includeLowercase);
    }
    var includeUpperCase = confirm("Click Ok for uppercase");
    if (includeUpperCase === true) {
      console.log(includeUpperCase);
    }
    var includeNumber = confirm("Click Ok for numbers");
    if (includeNumber === true) {
      console.log(includeNumber);
    }
    var includeSpecialChar = confirm("Click Ok for special characters");
    if (includeSpecialChar === true) {
      console.log(includeSpecialChar);
    }
    //if none selected, prompt that at least one needs to be selected, otherwise run code again
  } while (
    includeLowercase === false &&
    includeUpperCase === false &&
    includeNumber === false &&
    includeSpecialChar === false
  );
// return values in an object
  return {
    'length': charNum,
    'lowerCase': includeLowercase,
    'upperCase': includeUpperCase,
    'numeric': includeNumber,
    'specialchar': includeSpecialChar,
  };
}

// var chosenOptions = getPasswordOptions();

// let length = chosenOptions.length,
//     lowerCase = names.lowerCase;


// Function for getting a random element from an array
function getRandom(arr) {
  // filter and create new array of chosen array
  // concatenate chosen arrays
  // use for loop and math random to pick items based on chosen number of characters
}

// Function to generate password with user input
function generatePassword() {
  let password = getPasswordOptions();
  console.log(password.length);
  return "This is a secret password. Whee.";
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
