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

// Search and replace
function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }
  return str
    .replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// DNA pairing
function pairElement(str) {
  var pairs = [];
  
  var swap = function(char) {
    switch (char) {
      case "A":
        pairs.push(["A", "T"]);
        break;
      case "T":
        pairs.push(["T", "A"]);
        break;
      case "C":
        pairs.push(["C", "G"]);
        break;
      case "G":
        pairs.push(["G", "C"]);
        break; 
    }
  };
  for (var i = 0; i < str.length; i++) {
    swap(str[i]);
  }
  return pairs;
}
pairElement("GCG");

// Missing letters
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");

// Sorted union
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML entities
function convertHTML(str) {
  function html(char) {
    switch (char) {
      case "&":
        return ("&amp;");
        break;
      case "<":
        return ("&lt;");
        break;
      case ">":
        return ("&gt;");
        break;
      case '"':
        return ("&quot;");
        break;
      case "'":
        return ("&apos;");
        break;
    }
  }
    str = str.replace( /[&<>"']/g, html);
    return str;
}

convertHTML("Dolce & Gabbana");

// Sum all odd fibonacci numbers
function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result;
}

sumFibs(4);

// Sum all primes
function sumPrimes(num) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

sumPrimes(10);

// smallest common multiple
function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });

  var newArray = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArray.push(i);
  }
  var quot = 0;
  var loop = 1;
  var n;

  do {
    quot = newArray[0] * loop * newArray[1];
    for (n = 2; n < newArray.length; n++) {
      if (quot % newArray[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArray.length);
  return quot;
}


smallestCommons([1,5]);

// Drop it
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

// Steamroller
function steamrollArray(arr) {
  let flatten = [].concat(...arr);
  return flatten.some(Array.isArray) ? steamrollArray(flatten) : flatten;
}

steamrollArray([1, [2], [3, [[4]]]]);

// Binary agents
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Everything be true
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

truthCheck
([{"user": "Tinky-Winky", "sex": "male"}, 
{"user": "Dipsy", "sex": "male"}, 
{"user": "Laa-Laa", "sex": "female"}, 
{"user": "Po", "sex": "female"}], 
"sex");

// Arguments optional
function addTogether(a, b) {
  if (typeof a !== "number") {
    return undefined;
  }
  const sum = b =>
    typeof b === "number" ? a + b : undefined;
  return typeof b === "undefined" ? b => sum(b) : sum(b);
}

addTogether(2,3);

//