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

// // Question 4: Abdullah
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

// Question 6: Fiona
console.log('\n Question 6 Returns')
const hasNothingOrDigits = (str) => {
  return /^[0-9]*$/gi.test(str)
}
console.log(hasNothingOrDigits("")); // true
console.log(hasNothingOrDigits("123")); // true
console.log(hasNothingOrDigits("abc")); // false
console.log(hasNothingOrDigits("123abc")); // false
console.log(hasNothingOrDigits("abc123")); // false

//Question 7 : Abdullah & Fiona
const hasNoFlippers = (str) => { 
  // const flippers = ['B, C, c, D, E, H, I, K, O, o, X, x, l']
  return /[^B, C, c, D, E, H, I, K, O, o, X, x, l]*$/y.test(str)
};
// console.log(hasNoFlippers("Z")); // true
// console.log(hasNoFlippers("Zabdabbq")); // true
// console.log(hasNoFlippers("")); // true
// console.log(hasNoFlippers("abd")); // true
// console.log(hasNoFlippers("B")); // false
// console.log(hasNoFlippers("BC")); // false
// console.log(hasNoFlippers("oao")); // false
// console.log(hasNoFlippers("abdefo")); // false

//Question 8: Rashell 
const isValidEmail = (str) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str)
};
console.log(isValidEmail('a@b.co'))

// Question 9: Abdullah & Madhur
const isValidPhoneNumber = (str) => {
  return /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(str)
};

const matchAllNumbers = (str) => { };

const matchAllNumbersAsNumbers = (str) => { 

};

const matchAllWords = (str) => { };

// Question 13 : Abdullah 
const replaceAllNumbers = (str) => {
  return str.replace(/[\d]+/g, "???")
 };
 console.log(replaceAllNumbers("My favorite number is 12.")); // 'My favorite number is ???.'
 console.log(replaceAllNumbers("I have no favorite number.")); // 'I have no favorite number.'
 console.log(replaceAllNumbers("There were 40 fire drills last year, and luckily 0 fires")); // 'There were ??? fire drills last year, and luckily ??? fires'

 const fixFileName = (str) => {
  return str.replace(/\s+/g, "_")
 };
console.log(fixFileName("hello world")); // 'hello_world'
console.log(fixFileName("hello   world")); // 'hello_world'
console.log(fixFileName("first hw-trial spring")); // 'first_hw-trial_spring'
console.log(fixFileName("")); // ''
console.log(fixFileName("assignment-12")); // 'assignment-12'

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
