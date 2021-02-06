// Sum all numbers in a range
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

// Diff two arrays
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Seek and destroy
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
function whatIsInAName(collection, source) {
  var arr = Object.keys(source);
  return collection.filter(function(obj) {
    return arr
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Spinal tap case
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();  
}

spinalCase('This Is Spinal Tap');

// Pig Latin
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/))
  return str + "way";
  
  const constants = str.match(/^[^aeiou]+/)[0];
  return str.substring(constants.length) + constants + "ay";
  //pseudo code
  /*when you find a vowel stop
  add "way" to end of word
  if you find a consonant store that letter until you find a vowel
  add those consonants to the end of word + "ay"*/
}

translatePigLatin("consonant");

// 