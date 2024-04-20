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
// console.log(hasNothingOrDigits("")); // true
// console.log(hasNothingOrDigits("123")); // true
// console.log(hasNothingOrDigits("abc")); // false
// console.log(hasNothingOrDigits("123abc")); // false
// console.log(hasNothingOrDigits("abc123")); // false

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
// console.log(isValidEmail('a@b.co'))

// Question 9: Abdullah & Madhur
const isValidPhoneNumber = (str) => {
  return /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(str)
};

//Question 10

const matchAllNumbers = (str) => {
  const regex = /\d+/g
  return str.match(regex) || []
};
// console.log(matchAllNumbers("My favorite number is 12.")); // ['12']
// console.log(matchAllNumbers("I have no favorite number.")); // []
// console.log(matchAllNumbers("There were 40 fire drills last year, and luckily 0 fires")); // ['40', '0']
// console.log(matchAllNumbers("I have 1 dog, 2 cats, and 4 bunnies. Oh wait, 8 bunnies.")); // ['1', '2', '4', '8']

//Question 11: Rashell
const matchAllNumbersAsNumbers = (str) => {
  return matchAllNumbers(str).map((x) => Number(x)) || []
};

console.log(matchAllNumbersAsNumbers("My favorite number is 12.")); // ['12']
console.log(matchAllNumbersAsNumbers("I have no favorite number.")); // []
console.log(matchAllNumbersAsNumbers("There were 40 fire drills last year, and luckily 0 fires")); // ['40', '0']
console.log(matchAllNumbersAsNumbers("I have 1 dog, 2 cats, and 4 bunnies. Oh wait, 8 bunnies.")); // ['1', '2', '4', '8']


// Question 12 : Fiona 
const matchAllWords = (str) => {
  return str.match(/[a-zA-Z']+/g) || []
};
console.log(matchAllWords("Hello world!")); // ['Hello', 'world']
console.log(matchAllWords("It looks like...rain today?")); // ['It', 'looks', 'like', 'rain', 'today']
console.log(matchAllWords("")); // []
console.log(matchAllWords("I don't think I'm going, but you can!")); // ["I", "don't", "think", "I'm", "going", "but", "you", "can"]
console.log(matchAllWords("wow_this_screen_name_is_long")); // ['wow', 'this', 'screen', 'name', 'is', 'long']
console.log(matchAllWords("I have 3 dogs, 2 cats, and 10 bunnies.")); // ['I', 'have', 'dogs', 'cats', 'and', 'bunnies']
console.log(matchAllWords("123"));

// Question 13 : Abdullah 
const replaceAllNumbers = (str) => {
  return str.replace(/[\d]+/g, "???")
};
console.log(replaceAllNumbers("My favorite number is 12.")); // 'My favorite number is ???.'
console.log(replaceAllNumbers("I have no favorite number.")); // 'I have no favorite number.'
console.log(replaceAllNumbers("There were 40 fire drills last year, and luckily 0 fires")); // 'There were ??? fire drills last year, and luckily ??? fires'
//  console.log(replaceAllNumbers("My favorite number is 12.")); // 'My favorite number is ???.'
//  console.log(replaceAllNumbers("I have no favorite number.")); // 'I have no favorite number.'
//  console.log(replaceAllNumbers("There were 40 fire drills last year, and luckily 0 fires")); // 'There were ??? fire drills last year, and luckily ??? fires'

// Question 14 : Abdullah
const fixFileName = (str) => {
  return str.replace(/\s+/g, "_")
};

// console.log(fixFileName("hello world")); // 'hello_world'
// console.log(fixFileName("hello   world")); // 'hello_world'
// console.log(fixFileName("first hw-trial spring")); // 'first_hw-trial_spring'
// console.log(fixFileName("")); // ''
// console.log(fixFileName("assignment-12")); // 'assignment-12'

// Question 15 : Abdullah + Madhur 
const nameRedacter = (str) => {
  return str.replace(/[A-Z]{2,}/g, 'REDACTED')
 };
 console.log(nameRedacter("My name is ITZEL.")); // 'My name is REDACTED.'
 console.log(nameRedacter("I have no name.")); // 'I have no name.'
 console.log(nameRedacter("Today is MAYA's first day, ZO will help her out.")); // "Today is REDACTED's first day, REDACTED will help her out."


// Question 16 : Fiona & Madhur
console.log('/n QUESTION 16')
const camelToSnakeCase = (str) => {
return str.replace(/[A-Z]/g, (l) => `_${l.toLowerCase()}`) ;
};

console.log(camelToSnakeCase("helloWorld")); // 'hello_world'
console.log(camelToSnakeCase("helloWorldHowAreYou")); // 'hello_world_how_are_you'
console.log(camelToSnakeCase("hello_world")); // 'hello_world'
console.log(camelToSnakeCase("hello")); // 'hello'
console.log(camelToSnakeCase("")); // []


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
