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

// Question 3: Rashell
const hasCatsOrDogs = (str) => {
  return /cats|dogs/gi.test(str);
};
// console.log(hasCatsOrDogs("Gosh, I love having so many cats!")); // true
// console.log(hasCatsOrDogs("Wow, I have a lot of dogs!")); // true
// console.log(hasCatsOrDogs("Cats rule!")); // true
// console.log(hasCatsOrDogs(("I do not care for that dog."))); // false
// console.log(hasCatsOrDogs(("Cat? No way."))); // false
// console.log(hasCatsOrDogs(("Cat? No, but I have a ton of dogs."))); // true

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

//Question 5: Rashell
const hasPunctuationEnd = (str) => {
  return /[.]$|[?]$|[!]$/gi.test(str);
};
// console.log(hasPunctuationEnd("a.")); // true
// console.log(hasPunctuationEnd("a!")); // true
// console.log(hasPunctuationEnd("a?")); // true
// console.log(hasPunctuationEnd("a")); // false
// console.log(hasPunctuationEnd("a!a")); // false
// console.log(hasPunctuationEnd("a?b")); // false
// console.log(hasPunctuationEnd("")); // false

const hasNothingOrDigits = (str) => { };

const hasNoFlippers = (str) => { };

//Question 8: Rashell 
const isValidEmail = (str) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str)
};
// console.log(isValidEmail('a@b.co'))

const isValidPhoneNumber = (str) => { };

//Question 10

const matchAllNumbers = (str) => {
  const regex = /\d+/g
  return str.match(regex) || []
};
console.log(matchAllNumbers("My favorite number is 12.")); // ['12']
console.log(matchAllNumbers("I have no favorite number.")); // []
console.log(matchAllNumbers("There were 40 fire drills last year, and luckily 0 fires")); // ['40', '0']
console.log(matchAllNumbers("I have 1 dog, 2 cats, and 4 bunnies. Oh wait, 8 bunnies.")); // ['1', '2', '4', '8']

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
