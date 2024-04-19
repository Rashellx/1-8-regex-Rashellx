//Question 1: Rashell
const helloWorldRegex = (str) => {
  return /Hello world/gi.test(str)
};

// console.log(helloWorldRegex("Hello world")); // true
// console.log(helloWorldRegex("Hello world?")); // true
// console.log(helloWorldRegex("Hello world, are you there?")); // true
// console.log(helloWorldRegex("hello world")); // true
// console.log(helloWorldRegex("HELLO WORLD!")); // true
// console.log(helloWorldRegex("HeLlO wOrLd!")); // true
// console.log(helloWorldRegex("Sup world!")) // false
// console.log(helloWorldRegex("Where in the world is Carmen?")); // false
// console.log(helloWorldRegex("Hello")); // false

// Question 2: Fiona
const hasAVowel = (str) => {
  return /[aeiou]/gi.test(str) // we have the function called hasAVowel
};

// console.log(hasAVowel("a")); // true
// console.log(hasAVowel("AHHHHHH!")); // true
// console.log(hasAVowel("HEY")); // true
// console.log(hasAVowel("wow")); // true
// console.log(hasAVowel("")); // false
// console.log(hasAVowel("xzy")); // false
// console.log(hasAVowel("y")); // false

// Question 3: 
const hasCatsOrDogs = (str) => {
  return /cats|dogs/gi.test(str);
};
console.log(hasCatsOrDogs("Gosh, I love having so many cats!")); // true
console.log(hasCatsOrDogs("Wow, I have a lot of dogs!")); // true
console.log(hasCatsOrDogs("Cats rule!")); // true
console.log(hasCatsOrDogs(("I do not care for that dog."))); // false
console.log(hasCatsOrDogs(("Cat? No way."))); // false
console.log(hasCatsOrDogs(("Cat? No, but I have a ton of dogs."))); // true

// Question 4: Abdullah
const hasVowelStart = (str) => {
  return /[aeiou]/giy.test(str)
};

// console.log(hasVowelStart("a")); // true
// console.log(hasVowelStart("A")); // true
// console.log(hasVowelStart("ab")); // true
// console.log(hasVowelStart("Ab")); // true
// console.log(hasVowelStart("ba")); // false
// console.log(hasVowelStart("Ba")); // false
// console.log(hasVowelStart("")); // false
// console.log(hasVowelStart('Hello'))


const hasPunctuationEnd = (str) => { };

const hasNothingOrDigits = (str) => { };

const hasNoFlippers = (str) => { };

const isValidEmail = (str) => { };

const isValidPhoneNumber = (str) => { };

const matchAllNumbers = (str) => { };

const matchAllNumbersAsNumbers = (str) => { };

const matchAllWords = (str) => { };

const replaceAllNumbers = (str) => { };

const fixFileName = (str) => { };

const nameRedacter = (str) => { };

const camelToSnakeCase = (str) => { };

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
