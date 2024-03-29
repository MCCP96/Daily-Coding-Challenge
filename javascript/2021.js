"use strict";

//     e88'Y88   e88 88e   888 88e   888'Y88 Y8b Y8b Y888P  e Y8b     888 88e   dP"8
//    d888  'Y  d888 888b  888 888b  888 ,'Y  Y8b Y8b Y8P  d8b Y8b    888 888D C8b Y
//   C8888     C8888 8888D 888 8888D 888C8     Y8b Y8b Y  d888b Y8b   888 88"   Y8b
//    Y888  ,d  Y888 888P  888 888P  888 ",d    Y8b Y8b  d888888888b  888 b,   b Y8D
//     "88,d88   "88 88"   888 88"   888,d88     Y8P Y  d8888888b Y8b 888 88b, 8edP

// Multiply     6/16/2021
/* 
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 2)); // 4 */

// Descending Order     6/16/2021
/* 
function descendingOrder(n) {
  return parseInt(String(n).split(``).sort().reverse().join(``));
}
console.log(descendingOrder(34216)); // 64321 */

// Counting Duplicates      6/16/2021
/* 
function duplicateCount(text) {
  try {
    return text
      .toLowerCase()
      .split(``)
      .sort()
      .join(``)
      .match(/(.)\1+/g).length;
  } catch (e) {
    return 0;
  }
}
console.log(duplicateCount(`ababccddz`)); // 4 */

// Complementary DNA        6/16/2021
/* 
function myDNAStrand(dna) {
  let arr = dna.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "A") {
      arr[i] = "T";
    } else if (arr[i] == "T") {
      arr[i] = "A";
    } else if (arr[i] == "C") {
      arr[i] = "G";
    } else {
      arr[i] = "C";
    }
  }
  return arr.join("");
}
console.log(myDNAStrand(`CCTTAGAG`)); // GGAATCTC

function DNAStrand(dna) {
  let pairs = { A: `T`, T: `A`, C: `G`, G: `C` };
  return dna.replace(/./g, (c) => pairs[c]);
}
console.log(DNAStrand(`CCTTAGAG`)); // GGAATCTC */

// Regex validate PIN code      6/16/2021
/* 
// Only accept integer pins of length 4 0r 6
function validatePin(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
console.log(validatePin(1234)); // true
console.log(validatePin(12345)); // false
console.log(validatePin(123456)); // true

// Notes:   / at start and end indicate a Regex
//          ^ indicates the start of the input data
//          (\d{4}|\d{6}) a digit of length 4 or 6
//          $ end of input data

function validateName(name) {
  return /^(\w{3,5})$/.test(name);
}
console.log(validateName(`Peter`)); // true
console.log(validateName(`Bob`)); // true
console.log(validateName(`Bo`)); // false */

// Jaden Casing Strings     6/17/2021
/* 
// Capitalize the first letter of every word

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(` `);
};
console.log(`ay yo deez nutzz`.toJadenCase()); // Ay Yo Deez Nutzz

// Notes: .charAt(0) slices the string into 2, therefore we need to add word.slice(1) back, once the singled-out character is upper cased */

// Square Every Digit       6/18/2021
/* 
// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9 is 81 and 1 is 1.

// Note: The function accepts an integer and returns an integer

function mySquareDigits(num) {
  let digits = String(num).split(``);
  let squared = [];

  let i = 0;
  digits.forEach((element) => {
    squared[i] = element * element;
    i++;
  });

  return Number(squared.join(``));
}
console.log(mySquareDigits(3212)); // 9414

function squareDigits(num) {
  return Number(
    (`` + num)
      .split(``)
      .map(function (val) {
        return val * val;
      })
      .join(``)
  );
}
console.log(squareDigits(3212)); // 9414

// Notes: Learn map
// Map: Function that is called for every element of arr

function timesTwo(num) {
  return Number(
    String(num)
      .split(``)
      .map(function (x) {
        return 2 * x;
      })
      .join(``)
  );
}
console.log(timesTwo(1234)); // 2468

// using arrow function expression
function timesTwo(num) {
  return Number(
    String(num)
      .split(``)
      .map((x) => 2 * x)
      .join(``)
  );
}
console.log(timesTwo(1234)); // 2468 */

// Tribonacci Sequence      6/19/2021
/* 
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array

// 1) Understanding the problem:
// - push the addition of 3 previous arr values to end of arr
// - increment and repeat
// - loop stops at increment "n"

// 2) Breaking up into sub-problems:

function tribonacci(signature, n) {
  for (let i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }
  return n > 0 ? signature.slice(0, n) : [];
}
console.log(tribonacci([1, 1, 1], 10)); // 1, 1, 1, 3, 5, 9, 17, 31, 57, 105

// Notes:   Nailed it! */

// Sum of odd numbers     6/20/2021
/* 
// Given the triangle of consecutive odd numbers:
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

// 1) Understanding the problem:
//    - 1 array of odd numbers
//    - read 1=1number, 2=2numbers,3=3numbers

function myrowSumOddNumbers(n) {
  // idk...
  let arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(i + 1);
    i++;
  }
}
myrowSumOddNumbers(42); // 74088

// Solution
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
console.log(rowSumOddNumbers(42)); // 74088

// Notes: Lack of understanding of the logic
//        1^3 = 1
//        2^3 = 8
//        3^3 = 27
//        ...
//        42^3 = 74088

//        All I really had to do was find the addition, not create an array and stuff
//        Triangle visuallization mislead me... think! */

// A square of squares    6/20/2021
/* 
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// 1) Understanding the problem:
//    - must find if any number x itself gives our solution
//    - will always be smaller than current number (!1 or 2)

var isSquare = function (n) {
  return n >= 0 && Math.sqrt(n) % 1 === 0;
};
console.log(isSquare(-1), isSquare(3), isSquare(4));

// Notes: Learn remainder (%) operator
//        % returns the remainder left over

// Basically as long as the result is a whole number, we know that the number is square. So this wouldnt work if the sqare root of the number returned a remainder above 0. */

// Sum of two lowest positive integers      6/21/2021
/* 
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// 1) Understanding the problem:
//    - find lowest & 2nd lowest ints in array
//    - return addition

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7

// Notes: Learn .sort() operator

// The sort() method sorts the items of an array.
// The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
// By default, the sort() method sorts the values as strings in alphabetical and ascending order.
// This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce an incorrect result when sorting numbers.

// You can fix this by providing a "compare function":
// When comparing 40 and 100, the sort() method calls the compare function(40,100).
// The function calculates 40-100, and returns -60 (a negative value).
// The sort function will sort 40 as a value lower than 100.

// EX:

function sortLetters(words) {
  return words.sort();
}
console.log(sortLetters([`Bananas`, `Oranges`, `Apples`]));

function badSortNumbers(numbers) {
  return numbers.sort();
}
console.log(badSortNumbers([90, 5, 1, 63, 21]));

function sortNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers;
}
console.log(sortNumbers([90, 5, 1, 63, 21]));

// arrow function expression
function sortNums(numbers) {
  return numbers.sort((a, b) => a - b);
}
console.log(sortNums([90, 5, 1, 63, 21]));

// Weird, but understandable . */

// Friend or Foe?     6/22/2021
/* 
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function myFriend(friends) {
  return friends
    .map(function (x) {
      return /^(\w){4}$/.test(x) ? x : x.remove;
    })
    .filter(function (x) {
      return x !== undefined;
    });
}
console.log(myFriend(["Ryan", "Kieran", "Jason", "Yous"]));

function friend(friends) {
  return friends.filter((n) => n.length === 4);
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

// Notes: Learn .filter() operator
//        - The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Although my solution was fine, it's redundant.

function higherThan300(numbers) {
  // return numbers.filter(function (x) {
  //   return x > 300;
  // });

  return numbers.filter((x) => x > 300); // using arrow function expression
}
console.log(higherThan300([20, 11, 301, 60000, 500, 1]));

// Will try to implement arrow function expressions more with simple operators like .map or .filter */

// Remove the minimum     6/22/2021
/* 
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]

console.log(`MY ATTEMPT`);

function myRemoveSmallest(numbers) {
  numbers.every((x) => {
    if (x === Math.min.apply(Math, numbers)) {
      numbers[numbers.indexOf(x)] = undefined;
      return false;
    } else return true;
  });
  return numbers.filter((x) => x !== undefined);
}

console.log(myRemoveSmallest([1, 2, 3, 4, 5]));
console.log(myRemoveSmallest([5, 3, 2, 1, 4]));
console.log(myRemoveSmallest([2, 2, 1, 2, 1]));
console.log(myRemoveSmallest([108, 33, 73]));

console.log(`
SOLUTION`);

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min.apply(Math, numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([108, 33, 73]));

console.log(`
`);

// Notes: Learn .slice() & ...

// .slice() syntax is as follows:
// arr = [...arr.slice(0, indexOf), ...arr.slice(indexOf + 1)]

// ... (Spread syntax) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3, 4, 20];

console.log(sum(numbers));
// expected output: 1,2,3,4,20,undefined

console.log(sum(...numbers));
// expected output: 6

// Think of ... as writing out the array instead of sending an array itself.
 */

// Equal Sides Of An Array      6/23/2021
/* 
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// EX:  {1,2,3,4,3,2,1} returns index 3
//      {20,10,-80,10,10,15,35} returns index 0

// 1) Understanding problem
//    - add all elements on left, add all elements on right, compare the two
//    - return current index if they match

// 2) Sub-problems
//    - nested for (didnt end up doing this...)
//    - if all 3 equate, return index

console.log(`Initial solution`);

function findEvenIndex(arr) {
  for (var i = 0; i < arr.length; i++) {
    let left = 0;
    let right = 0;

    arr.slice(0, i).map((x) => (left += x));
    arr.slice(i + 1).map((x) => (right += x));

    if (left == right) return i;
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([1, 10, 100]));

console.log(``);

// Notes: I like the solution I came up with.
//        Others were using the .reduce() operator, but my code is just as compact as the voted "best practice" one

// Lets explore the voted "cleverest" solution

console.log(`Clever solution`);

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex2 = (a) =>
  a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

console.log(findEvenIndex2([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex2([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex2([1, 10, 100]));

console.log(``);

// .reduce()
// executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// .findIndex()
// returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

console.log(`FindIndex() example`);

const array1 = [5, 12, 8, 130, 44];
console.log(array1.findIndex((x) => x > 13)); // expected output: 3

console.log(``);

// Final
console.log(`Final solution`);

function finalFindEvenIndex(arr) {
  return arr.findIndex((el, i) => {
    // console.log(i);
    let left = arr.slice(0, i).reduce((arr, b) => arr + b, 0);
    let right = arr.slice(i + 1).reduce((arr, b) => arr + b, 0);
    console.log(left, right);
    if (left == right) return i;
  });
}

console.log(`Result 1: ${finalFindEvenIndex([1, 2, 3, 4, 3, 2, 1])}`);
console.log(`Result 2: ${finalFindEvenIndex([20, 10, -80, 10, 10, 15, 35])}`); // BUG
console.log(`Result 3: ${finalFindEvenIndex([1, 10, 100])}`);

console.log(``);

// Cannot seem to get Result 2 working.
// It's like .findIndex doesnt want to admit left==right on first iteration
 */

// Reverse words      6/24/2021
/* 
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(` `)
    .map((x) => x.split(``).reverse().join(``))
    .join(` `);
}
console.log(reverseWords(`This is an example!`));

// Perfect */

// Rot13        6/25/2021
/* 
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

console.log(`My solution:`);

function googledRot13(str) {
  var input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  var index = (x) => input.indexOf(x);
  var translate = (x) => (index(x) > -1 ? output[index(x)] : x);
  return str.split("").map(translate).join("");

  // x = x.charCodeAt(0) + 13;
  // if (x > 90) x = x - 90 + 65;
  // return String.fromCharCode(x);
}
console.log(googledRot13(`test`));

console.log(``);

// Notes: Couldn't manage to get charCodeAt working (charCode table is too scrambled)
//        Had to create an input alphabet and an output alphabet that's offset by 13

// Exploring "cleverest" solution

console.log(`Cleverest solution:`);

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}
console.log(rot13(`test`));

console.log(``);

// Input/Output alphabet is the way to go

console.log(`Revised solution:`);
function revisedRot13(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alphabet13Offset = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return str.replace(/\w/gi, (x) => alphabet13Offset[alphabet.indexOf(x)]);
}
console.log(revisedRot13(`test`));

// Regex gi modifier is used to do a case insensitive search of all occurrences of a regular expression in a string. */

// Take a Ten Minute Walk       6/26/2021
/* 
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).

//  You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// 1) Understanding:
//    - .length() == 10
//    - and return to starting point

// 2) sub-problem:
//    - everytime a direction is entered, the opposite must be present in the array
//    - can only be counted once

console.log(`Initial solution`);

function isValidWalk(walk) {
  let x = 0;
  let y = 0;

  walk.forEach((el) => {
    switch (el) {
      case `n`:
        y++;
        break;
      case `s`:
        y--;
        break;
      case `e`:
        x++;
        break;
      case `w`:
        x--;
        break;
      default:
        return false;
    }
  });

  return walk.length == 10 && y == 0 && x == 0;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w"]) // false
);

// Notes: This solution is solid and very easy to read
//        The "cleverest" option only offers a method to outsource counting
//        Maybe a bit less hefty to look at, but essentially employs the .filter()

// Cleverest solution
console.log(`Cleverest solution`);

function cleverIsValidWalk(walk) {
  function count(val) {
    return walk.filter(function (a) {
      return a == val;
    }).length;
  }
  return (
    walk.length == 10 && count("n") == count("s") && count("w") == count("e")
  );
}
console.log(
  cleverIsValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
); // true
console.log(
  cleverIsValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w"]) // false
);

// Revised solution
console.log(`Revised solution`);

function revisedIsValidWalk(walk) {
  function count(val) {
    return walk.filter((a) => a == val).length;
  }
  return (
    (walk.length == 10) & (count(`n`) == count(`s`)) && count(`w`) == count(`e`)
  );
}
console.log(
  revisedIsValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
);
console.log(
  revisedIsValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w"])
);
 */

// Dubstep        6/27/2021
/* 
// Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

// Input:
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Output:
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

// Examples
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
//   =>  WE ARE THE CHAMPIONS MY FRIEND

// 1) Understanding
//    - Find "WUB"s and replace with spaces

// 2) Pseudo
//    - split by WUB
//    - .map WUBs to ""

// Initial Solution
console.log(`Initial Solution`);

function songDecoder(song) {
  return song
    .split("WUB")
    .filter((x) => x != ``)
    .join(" ");
}
console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));

console.log(``);

// Cleverest Solution
console.log(`Cleverest Solution`);

function cleverestSongDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim();
}

console.log(cleverestSongDecoder("AWUBBWUBC"));
console.log(cleverestSongDecoder("AWUBWUBWUBBWUBWUBWUBC"));

console.log(``);

// Notes: learn .replace()
//        The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

console.log(`Revised Solution`);

function revisedSongDecoder(song) {
  return song.replace(/(WUB)+/g, ` `);
}

console.log(revisedSongDecoder("AWUBBWUBC"));
console.log(revisedSongDecoder("AWUBWUBWUBBWUBWUBWUBC"));

// Regex expression /(WUB)+/g where g:
// The g modifier is used to perform a global match (find all matches rather than stopping after the first match). */

// Sort the odd       6/28/2021
/* 
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

function mySortArray(array){
  let sorted=false;
  while(!sorted){
    sorted=true
    array.forEach(el => {
      if(el%2==1){
        for(var i=array.indexOf(el)+1;i<array.length;i++){
          if(array[i]%2==1 && array[i]<el){
            array[array.indexOf(el)]=array[i]
            array[i]=el
            sorted=false
          }
        }
      }
    });
  }
  return array
}
console.log(mySortArray([7,1]));
console.log(mySortArray([5,8,6,3,4]));
console.log(mySortArray([5,3,2,8,1,4]));

// Cleverest solution

function cleverestSortArray(array){
  const odd = array.filter((x)=>x%2).sort((a,b)=>a-b)
  return array.map((x)=>x%2?odd.shift():x)
}
console.log(cleverestSortArray([7,1]));
console.log(cleverestSortArray([5,8,6,3,4]));
console.log(cleverestSortArray([5,3,2,8,1,4]));

// Notes: There's always a simpler way...
//        Basically create parralel array with all odd numbers, sort it, then .shift them back in 1 by 1

function revisedSortArray(array){
const oddNums = array.filter(x=>x%2).sort((a,b)=>a-b)
return array.map(x=>x%2?oddNums.shift():x)
}
console.log(revisedSortArray([7,1]));
console.log(revisedSortArray([5,8,6,3,4]));
console.log(revisedSortArray([5,3,2,8,1,4]));

// Understood everything going on here, but didnt piece together this solution... */

// Highest Scoring Word       6/29/2021
/* 
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const alphabet = `abcdefghijklmnopqrstuvwxyz`;

  let highest = 0;
  let cur = 0;
  let word = ``;

  x.split(` `).forEach((el) => {
    el.split(``).map((x) => (cur += alphabet.indexOf(x) + 1));
    if (cur > highest) {
      word = el;
      highest = cur;
    }
    cur = 0;
  });

  return word;
}

console.log(high("man i need a taxi up to ubud")); // taxi

// Great solution - same caliber as voted "best practice"

function cleverestHigh(s) {
  let as = s
    .split(` `)
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(` `)[as.indexOf(Math.max(...as))];
}

console.log(cleverestHigh("man i need a taxi up to ubud")); // taxi

// This solution cleverly 👀 uses {.charCodeAt(0) - 96} to avoid having the alphabet array
// It's basically reducing every word to a numerical value, finding the index of max, then returning the matching index in a parralel array.

// Very neat solution, but will not be creating a revised version since I'm satisfied with mine. It feels much more readable.

// Noted the charCodeAt(0)-96 trick, very useful */

// Count characters in your string      6/30/2021
/* 
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(str) {
  let count = {};
  str.split(``).forEach((el) => {
    count[el] ? count[el]++ : (count[el] = 1);
  });
  console.log(typeof count);
  return count;
}
console.log(count("aba"));

// Notes: Was not familiar with the expected output's format... it's an object. Noted.

// Checks if a char already exists in the object
//  - if it does: +1
//  - if not: initialize to 1

function countWord(str) {
  let count = {};
  str.split(` `).map((x) => (count[x] ? count[x]++ : (count[x] = 1)));
  return count;
}
console.log(
  countWord(`Peter Piper picked a peck of pickled peppers
A peck of pickled peppers Peter Piper picked
If Peter Piper picked a peck of pickled peppers
Where’s the peck of pickled peppers Peter Piper picked`)
);

// Gotcha. Very easy once object was understood/implemented. */

// Format a string of names like 'Bart, Lisa & Maggie'.       7/1/2021
/* 
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names) {
  let list = ``;
  names.map((x) => (list += `${x.name} `));
  if (list.length > 1) {
    list = list.trim().split(` `);
    for (let i = 0; i < list.length - 2; i++) {
      list[i] += `,`;
    }
    list[list.length - 2] += ` &`;
    list = list.join(` `);
  }
  return list.trim();
}
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));

// Notes: My solution is functional but sloppy...

function bestPracticeList(names) {
  return names.reduce((prev, cur, i, arr) => {
    if (i == 0) return cur.name;
    else if (i == arr.length - 1) return prev + ` & ` + cur.name;
    else return prev + `, ` + cur.name;
  }, ``);
}
console.log(
  bestPracticeList([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
);

// This is a great use of .reduce() and its parameters
// Essentially checks for first and last name in array and acts accordingly
// If neither, simply put a comma

function reduce(array) {
  return array.reduce((acc, cur, i, arr) => {
    acc += cur;

    console.log(acc);
    console.log(cur);
    console.log(i);
    console.log(arr);

    return acc;
  }, 0);
}
console.log(reduce([20, 30, 40]));

// Notes: Research all parameters for a method*/

// Build a pile of Cubes      7/2/2021
/* 
//Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

function findNb(m) {
  let n = 0;
  for (let i = 1; m > n; i++) {
    n += i ** 3;
    if (m == n) return i;
  }
  return -1;
}
console.log(findNb(1071225));
console.log(findNb(91716553919377));

// Clean and simple

function bestPracticeFindNb(m) {
  let n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
}
console.log(bestPracticeFindNb(1071225));
console.log(bestPracticeFindNb(91716553919377));

// Notes: I do like this best practice solution
//        Clever to work in reverse by substracting n**3 from m

// All together satisfied with my solution, leaving it as is. */

// Integers: Recreation One       7/3/2021
/* 
// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

function listSquared(m, n) {
  let squaredSquare = [];
  for (m; m <= n; m++) {
    let divs = [];
    for (let i = 1; i <= m; i++) {
      (m / i) % 1 == 0 ? divs.push(i) : false;
    }
    let totDivs = divs.map((x) => x ** 2).reduce((a, b) => a + b, 0);
    if (Math.sqrt(totDivs) % 1 == 0) {
      squaredSquare.push([m, totDivs]);
    }
  }
  return squaredSquare;
}
console.log(listSquared(1, 250));
console.log(listSquared(42, 250));
console.log(listSquared(1, 246));

// Notes: This one was more difficult mainly due to comprehension
//        Programming wise, there's no new pieces implemented here nor in the 'best practice' solution

function bestPracticeListSquared(m, n) {
  var matches = [];

  for (var i = m; i <= n; ++i) {
    var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
    var ok = Number.isInteger(Math.sqrt(sum));
    if (ok) {
      matches.push([i, sum]);
    }
  }
  return matches;
}

function getDivisors(n) {
  var divisors = [];
  for (var i = 1; i <= n / 2; ++i) {
    if (n % i) {
      continue;
    }
    divisors.push(i);
  }
  return divisors.concat([n]);
}
console.log(bestPracticeListSquared(1, 250));
console.log(bestPracticeListSquared(42, 250));
console.log(bestPracticeListSquared(1, 246));

// Honestly proud of my solution and believe it's more compact than the 'best practice'
// However, I do see how it's more readable than mine...

// My first 5 kyu kata! */

// Break camelCase         7/4/2021
/* 
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(str) {
  return str.split(/(?=[A-Z])/).join(` `);
}
console.log(solution(`camelCasingTest`));
console.log(solution(`identifier`));
console.log(solution(``));

// Had to learn about REGEX lookaheads
// ?= finds the capital letter and splits accordingly

function bestPracticeSolution(str) {
  return str.replace(/([A-Z])/g, ` $1`);
}
console.log(bestPracticeSolution(`camelCasingTest`));
console.log(bestPracticeSolution(`identifier`));
console.log(bestPracticeSolution(``));

// I like best practice here
// $1 represents the returned REGEX in () which is then given a space before

function regexTest() {
  let str = `John Smith`;
  console.log(str.replace(/(\w+)\s(\w+)/, `$2, $1`));
}
regexTest();

// $n is great to influence the surroundings of the returned REGEXs */

// Who likes it?        7/5/2021
/* 
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

function likes(names) {
  if (names.length == 0) return `no one likes this`;
  else if (names.length == 1) return names + " likes this";
  else if (names.length > 1 && names.length < 4)
    return (
      names.reduce((prev, cur, i, arr) => {
        if (i == 0) return cur;
        else if (i == arr.length - 1) return prev + ` and ` + cur;
        else return prev + `, ` + cur;
      }, ``) + ` like this`
    );
  else {
    let str = ``;
    for (var i = 0; i < 2; i++) {
      if (i == 0) str += names[i] + `, `;
      else str += names[i];
    }
    return str + ` and ${names.length - i} others like this`;
  }
}
console.log(likes([])); // no one likes this
console.log(likes(["Peter"])); // Peter likes this
console.log(likes(["Jacob", "Alex"])); // Jacob and Alex like this
console.log(likes(["Max", "John", "Mark"])); // Max, John and Mark like this
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); //Alex, Jacob and 2 others like this

// In a bit of a rush today and didnt have time to clean it up
// Have to study for physics!

function bestPracticeLikes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return `no ones likes this`;
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} likes this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others likes this`;
      break;
  }
}

console.log(bestPracticeLikes([])); // no one likes this
console.log(bestPracticeLikes(["Peter"])); // Peter likes this
console.log(bestPracticeLikes(["Jacob", "Alex"])); // Jacob and Alex like this
console.log(bestPracticeLikes(["Max", "John", "Mark"])); // Max, John and Mark like this
console.log(bestPracticeLikes(["Alex", "Jacob", "Mark", "Max"])); //Alex, Jacob and 2 others like this

// Honestly thought there'd be a more dynamic way of doing this, but this makes total sense
// Simpler is better... */

//String incrementer        7/6/2021
/* 
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function bestPracticeIncrementString(str) {
  if (isNaN(parseInt(str[str.length - 1]))) return str + `1`;
  return str.replace(/(0*)([0-9]+$)/, (match, p1, p2) => {
    let up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}
console.log(bestPracticeIncrementString(`foo`));
console.log(bestPracticeIncrementString(`foobar23`));
console.log(bestPracticeIncrementString(`foo0042`));
console.log(bestPracticeIncrementString(`foo9`));
console.log(bestPracticeIncrementString(`foo099`));
console.log(bestPracticeIncrementString(`foo000`));

// Ended up looking at the solution

// isNan is a clever way to see if str has no numbers whatsoever (`foo`)
// .replace finds the numbers and splits them into trailing 0s (p1) and the num (p2)
// using .replace's replacerFunction, we're able to:
//    - increment the number (p2)
//    - check if the p2++ lead to a new digit (ex: 9 to 10)
//          - if so: remove a trailing 0 from p1, append p2 to p1 and return
//          - if not: append p2 to p1 and return

// Notes: .replace's replacerFunction has some useful parameters

console.log(``);
`test360number`.replace(/([0-9]+)(\w+)/g, (match, p1, p2, offset, str) => {
  console.log(match);
  console.log(p1);
  console.log(p2);
  console.log(offset); // t:0, e:1, s:2, t:3, 3:4
  console.log(str);
}); */

// Word a10n (abbreviation)       7/7/2021
/* 
// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").

// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

// abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

function abbreviate(str) {
  return str.split(/([-\s!,])/g).reduce((acc, cur, i, arr) => {
    cur.length > 3 ? (cur = cur[0] + (cur.length - 2) + cur.slice(-1)) : cur;
    return (acc += cur);
  }, ``);
}
console.log(abbreviate("internationalization"));
console.log(abbreviate("elephant-rides are really fun!"));
console.log(
  abbreviate("You need, need not want, to complete this code-wars mission")
);

// Managed to do a one-liner
// My solution is solid, however there is cleaner

function bestPracticeAbbreviate(str) {
  return str.replace(/\w{4,}/g, (word) => {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}
console.log(bestPracticeAbbreviate("internationalization"));
console.log(bestPracticeAbbreviate("elephant-rides are really fun!"));
console.log(
  bestPracticeAbbreviate(
    "You need, need not want, to complete this code-wars mission"
  )
);

// Instead of chopping everything into an array and reassembling it with .reduce(), this solution uses the regexp to really target the individual words in the string; .replace takes care of the rest

// Altogether, can't be mad at my solution, but I do like the best practice one */

// Maximum subarray sum         7/8/2021
/* 
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(a) {
  let largest = 0;

  a.reduce((acc, cur, i, arr) => {
    acc += cur;

    if (acc < 0) {
      acc = 0;
      largest = 0;
    } else if (acc > largest) {
      largest = acc;
    }
    return acc;
  }, 0);
  return largest;
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// My solution above passed initial tests, but not all

function googledMaxSequence(a) {
  var size = a.length;
  var lastMax = 0;
  var curMax = 0;

  for (var i = 0; i < size; i++) {
    curMax = curMax + a[i];
    if (lastMax < curMax) lastMax = curMax;
    if (curMax < 0) curMax = 0;
  }

  return lastMax;
}
console.log(googledMaxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Top comment:

//    The description of this test is bad because it was copy+pasted from another place
//    which actually had further instructions to makes things clearer.

//    If someone still want to solve it here some far better explanations:
//    https://www.youtube.com/watch?v=jnoVtCKECmQ&ab_channel=NickWhite

//    Don't feel bad.
//    It's an easy test but the explanation is terrible.

function cleverestMaxSequence(a) {
  var min = 0,
    ans = 0,
    i,
    sum = 0;

  for (i = 0; i < a.length; ++i) {
    sum += a[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}
console.log(cleverestMaxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// This one's tricky. Known as Kadane's algorithm.
// After watching the explanation linked above, I came up with the following:

function myMaxSequence(a) {
  let ans = 0;
  a.reduce((acc, cur) => {
    acc += cur;
    if (ans < acc) ans = acc;
    if (acc < 0) acc = 0;
    return acc;
  }, 0);
  return ans;
}
console.log(myMaxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Makes perfect sense once the logic is understood. */

// Find the odd int       7/9/2021
/* 
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(a) {
  let ans = 0;
  a.forEach((el) => {
    let count = a.filter((x) => x == el);
    count.length % 2 == 1 ? (ans = count[0]) : false;
  });
  return ans;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // 1

// Great answer that holds up against the voted best practice
// Leaving it at that
 */

// Multiplication table         7/10/2021
/* 
// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
  let result = [];
  for (let i = 0; i < size; i++) {
    result[i] = [];
    for (let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  return result;
}
console.log(multiplicationTable(3));

// Nested for loop */

// The Vowel Code         7/11/2021
/* 
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

let vowels = [`a`, `e`, `i`, `o`, `u`];

function encode(str) {
  return str.split(``).reduce((acc, cur) => {
    if (vowels.includes(cur)) cur = vowels.indexOf(cur) + 1;
    return (acc += cur);
  }, ``);
}
console.log(encode("How are you today?")); // H4w 1r2 y45 t4d1y?
console.log(encode("ots4f445ysgb3")); // 4ts4f445ysgb3

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function decode(str) {
  return str.split(``).reduce((acc, cur) => {
    if (cur > 0 && cur < 6) cur = vowels[cur - 1];
    return (acc += cur);
  }, ``);
}
console.log(decode(`h2ll4`));
console.log(decode(`h3 th2r2`));

// Fair solution, very readable.
// Best practice is simpler:

function bestEncode(str) {
  return str.replace(/[aeiou]/g, (x) => {
    return `_aeiou`.indexOf(x);
  });
}
console.log(encode("How are you today?")); // H4w 1r2 y45 t4d1y?
console.log(encode("ots4f445ysgb3")); // 4ts4f445ysgb3

function bestDecode(str) {
  return str.replace(/[1-5]/g, (x) => {
    return `_aeiou`.charAt(x);
  });
}
console.log(decode(`h2ll4`));
console.log(decode(`h3 th2r2`));

// Can't forget about .replace()
// Made for a very clean, very logical and readable one-liner solution */

// Statistics for an Athletic Association         7/12/2021
/* 
// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.

// To compare the results of the teams you are asked for giving three statistics; range, average and median.

// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given above, the string result will be

// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

// of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:
// if a result in seconds is ab.xy... it will be given truncated as ab.
// if the given string is "" you will return ""

function bestPracticeStat(strg) {
  if (strg === "") {
    return strg;
  }
  const teamStats = new teamStatistics(strg);
  return (
    "Range: " +
    teamStats.getRange() +
    " Average: " +
    teamStats.getAverage() +
    " Median: " +
    teamStats.getMedian()
  );
}

class teamStatistics {
  constructor(teamScores) {
    this.teamScoresInArray = teamScores.split(", ");
    this.teamTimesInSeconds = [];

    for (let singlePerson of this.teamScoresInArray) {
      const hoursToSeconds = Number(singlePerson.split("|")[0] * 60 * 60);
      const minutesToSeconds = Number(singlePerson.split("|")[1] * 60);
      const seconds = Number(singlePerson.split("|")[2]);
      this.teamTimesInSeconds.push(hoursToSeconds + minutesToSeconds + seconds);
    }
  }

  getFormatedTime(timeInSeconds) {
    const date = new Date(null);
    date.setSeconds(timeInSeconds);

    // remove space between * / when uncommenting
    return date.toISOString().substr(11, 8).replace(/:\s* /g, "|");
  }

  getAverage() {
    let arraySum = 0;
    let average = 0;
    const arrayLength = this.teamTimesInSeconds.length;

    for (let number of this.teamTimesInSeconds) {
      arraySum += number;
    }

    return this.getFormatedTime(arraySum / arrayLength);
  }

  getMedian() {
    this.teamTimesInSeconds.sort(function (a, b) {
      return a - b;
    });

    var half = Math.floor(this.teamTimesInSeconds.length / 2);

    if (this.teamTimesInSeconds.length % 2) {
      return this.getFormatedTime(this.teamTimesInSeconds[half]);
    } else {
      return this.getFormatedTime(
        (this.teamTimesInSeconds[half - 1] + this.teamTimesInSeconds[half]) /
          2.0
      );
    }
  }

  getRange() {
    const biggest = Math.max.apply(Math, this.teamTimesInSeconds);
    const smallest = Math.min.apply(Math, this.teamTimesInSeconds);
    return this.getFormatedTime(biggest - smallest);
  }
}

console.log(bestPracticeStat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"));

// This was a longer kata. */

// Gap in Primes          /7/13/2021
/* 
// The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

// We will write a function gap with parameters:
// g (integer >= 2) which indicates the gap we are looking for
// m (integer > 2) which gives the start of the search (m inclusive)
// n (integer >= m) which gives the end of the search (n inclusive)
//    n won't go beyond 1100000.

// In the example above gap(2, 3, 50) will return [3, 5] which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `null`

// Examples:
// gap(2, 5, 7) --> [5, 7]
// gap(2, 5, 5) --> null
// gap(4, 130, 200) --> [163, 167]
//   ([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)
// gap(6,100,110) --> null : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.

// Ref
// https://en.wikipedia.org/wiki/Prime_gap

function gap(g, m, n) {
  let lastPrime = 0;
  for (m; m <= n; m++) {
    if (isPrime(m)) {
      if (m - lastPrime == g) return [lastPrime, m];
      else lastPrime = m;
    }
  }
  return null;
}

function isPrime(x) {
  if (x <= 1) return false;
  if (x % 2 == 0 && x > 2) return false;
  const square = Math.sqrt(x);
  for (let i = 3; i <= square; i += 2) {
    if (x % i == 0) return false;
  }
  return true;
}
console.log(gap(2, 5, 7));
console.log(gap(2, 5, 5));
console.log(gap(4, 130, 200));

// Fair solution, very readable.
// Initially, isPrime function would time-out test so I added all the extra tests

function oldIsPrime(x) {
  for (let i = 1; i <= x; i++) {
    if (x % i == 0) return false;
  }
  return true;
}

// This does the job if there's no time-out

function bestPracticeGap(g, m, n) {
  let lastPrime = 0;
  function isPrime(x) {
    for (let i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  }

  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (i - lastPrime == g) return [lastPrime, i];
      else lastPrime = i;
    }
  }
  return null;
}
console.log(bestPracticeGap(2, 5, 7));
console.log(bestPracticeGap(2, 5, 5));
console.log(bestPracticeGap(4, 130, 200));

// Pretty similar, but the isPrime function is optimized
// This has more to do with math and knowledge of prime numbers, but the i*i<=x is basically the implementation of my

const square = Math.sqrt(x);
for (let i = 3; i <= square; i += 2) {}

// just done cleaner...
// Fun kata! */

// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!          7/14/2021
/* 
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.
// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.
// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases:

// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

// sumDigPow(90, 100) == []
// Enjoy it!!

function sumDigPow(a, b) {
  let ans = [];
  for (a; a <= b; a++) {
    String(a)
      .split(``)
      .reduce((acc, cur, i) => {
        acc += Number(cur ** (i + 1));
        if (acc == a) ans.push(acc);
        return acc;
      }, 0);
  }
  return ans;
}
console.log(sumDigPow(88, 135));

// I personally like this solution
// converting to string, splitting, then using .reduce's index parameter allowed for clean power incrementation.

function bestPracticeSumDigPow(a, b) {
  let ans = [];
  while (a <= b) {
    if (
      a
        .toString()
        .split(``)
        .reduce((x, y, i) => x + y ** (i + 1), 0) == a
    )
      ans.push(a);
    a++;
  }
  return ans;
}
console.log(bestPracticeSumDigPow(88, 135));

// Seems I used all the correct steps.
// Nice 👍 */

// Kebabize         7/15/2021
/* 
// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
  return (
    str
      .replace(/\d|-/g, ``)
      .split(/(?=[A-Z])/g)
      .join(`-`)
      // .reduce((acc, cur) => acc + `-` + cur)
      .toLowerCase()
  );
}
console.log(kebabize("camelsHaveThreeHumps"));
console.log(kebabize("camelsHave3Humps"));
console.log(kebabize("-eog"));

// Works great, could probably do with less methods

// Looking at all 'best practice' solutions, 4 methods seems to be the minimum
// My solution is on par with them. */

// Decipher this!         7/16/2021
/* 
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  return str
    .split(` `)
    .map((word) =>
      word.split(/(\d+)/).reduce((acc, cur, i) => {
        if (i == 1) cur = String.fromCharCode(cur);
        if (i == 2) cur = cur.replace(/^(\w)?(.+)(\w)$/, `$3$2$1`);
        return acc + cur;
      }, ``)
    )
    .join(` `);
}
console.log(decipherThis(`72olle 103doo 100ya`));
console.log(decipherThis(`82yade 115te 103o`));

// Feels overly complex, but works

function bestPracticeDecipherThis(str) {
  return str
    .split(` `)
    .map((w) =>
      w
        .replace(/^\d+/, (c) => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, `$1$4$3$2`)
    )
    .join(` `);
}
console.log(bestPracticeDecipherThis(`72olle 103doo 100ya`));
console.log(bestPracticeDecipherThis(`82yade 115te 103o`));

// Ah, much cleaner
// Wasn't too far off, basically could've avoided the .reduce by using an extra .replace

// I have a tendency of using .reduce too often... it's too good, it works everywhere */

// Extract the domain name from a URL         7/17/2021
/* 
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  for (const a of url.split(/\.|\/\//)) {
    if (/http|www/.test(a)) {
      continue;
    } else return a;
  }
}
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("www.xakep.ru"));

// Clean and concise, gets the job done

function bestPracticeDomainName(url) {
  url = url.replace(`https://`, ``);
  url = url.replace(`http://`, ``);
  url = url.replace(`www.`, ``);
  return url.split(`.`)[0];
}
console.log(bestPracticeDomainName("http://github.com/carbonfive/raygun"));
console.log(bestPracticeDomainName("http://www.zombie-bites.com"));
console.log(bestPracticeDomainName("https://www.cnet.com"));
console.log(bestPracticeDomainName("www.xakep.ru"));

// I see the appeal, very easy and readable
// I personally prefer my solution */

// Permutations         7/18/2021
/* 
// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

function bestPracticePermutations(str) {
  return str.length <= 1
    ? [str]
    : Array.from(
        new Set(
          str
            .split("")
            .map((char, i) =>
              bestPracticePermutations(
                str.substr(0, i) + str.substr(i + 1)
              ).map((p) => char + p)
            )
            .reduce((acc, cur) => acc.concat(cur), [])
        )
      );
}
console.log(bestPracticePermutations("a"));
console.log(bestPracticePermutations("ab"));
console.log(bestPracticePermutations("aabb"));

// Struggled at first, ended up looking at solution

// Functionality:
//    - if string is 1 char long, return the only possible permutation.
//    - else return an Array built from a new Set (avoids duplicates)
//        - the Set is constructed by splitting the array
//        - each char in the array is seperated while the remainder is fed back in
//        - the chars fed back in, undergo the same process until they're a single char
//        - the char is attached after each combination
//        - .reduce turns them back into a string

// This was my first 4kyu kata, definitely an increase in difficulty compared to yesterday */

// Calculating with Functions         7/19/2021
/* 
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

const n = (digit) => (op) => op ? op(digit) : digit;

const zero = n(0);
const one = n(1);
const two = n(2);
const three = n(3);
const four = n(4);
const five = n(5);
const six = n(6);
const seven = n(7);
const eight = n(8);
const nine = n(9);

const plus = (r) => (l) => l + r;
const minus = (r) => (l) => l - r;
const times = (r) => (l) => l * r;
const dividedBy = (r) => (l) => l / r;

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3

// Functions inside functions
// Haven't practiced these too much

const str = (word) => (phrase) => phrase ? phrase(word) : word;

const wolf = str(`wolf`);
const dog = str(`dog`);
const frog = str(`frog`);

const and = (lastWord) => (firstWord) => `${firstWord} and ${lastWord}`;
const or = (lastWord) => (firstWord) => `${firstWord} or ${lastWord}`;

console.log(wolf(and(frog)));
console.log(frog(or(dog)));

// Will need to study multi function interactions */

// Mod4 Regex         7/20/2021
/* 
// You are to write a Regular Expression that matches any string with at least one number divisible by 4 (with no remainder). In most languages, you could do this easily by using number % 4 == 0. How would you do it with Regex?

// A number will start with [ and end with ]. They may (or may not) include a plus or minus symbol at the start; this should be taken into account. Leading zeros may be present, and should be ignored (no octals here ;P). There may be other text in the string, outside of the number; this should also be ignored. Also, all numbers will be integers; any floats should be ignored.

// If there are no valid numbers defined as above, there should be no match made by your regex.

// So here are some examples:

// "[+05620]" // 5620 is divisible by 4 (valid)
// "[+05621]" // 5621 is not divisible by 4 (invalid)
// "[-55622]" // -55622 is not divisible by 4 (invalid)
// "[005623]" // 5623 invalid
// "[005624]" // 5624 valid
// "[-05628]" // valid
// "[005632]" // valid
// "[555636]" // valid
// "[+05640]" // valid
// "[005600]" // valid
// "the beginning [0] ... [invalid] numb[3]rs ... the end" // 0 is valid
// "No, [2014] isn't a multiple of 4..."  // 2014 is invalid
// "...may be [+002016] will be." // 2016 is valid

// NOTE: Only Mod4.test(str) will be used, so your expression will just need make a match of some kind.

let Mod4 = /^.\[(\d+)\].$/;
console.log(Mod4.test("[+05620]"));

// I'm lacking Regex knowledge on this one.

const bestPracticeMod4 = new RegExp(
  "\\[" + // Number starts with [
    "(\\+|\\-)?" + // Optionally allow plus or minus sign at start
    "0*" + // Ignore leading zeroes
    "(" + // Either:
    "[048]|" + // - Have only one digit, then it needs to be 0, 4 or 8
    "\\d*(" + // - Have two or more digits, then it needs to be either
    "[02468][048]|" + //   - the second-to-last digit is even, followed by 0, 4 or 8
    "[13579][26]" + //   - the second-to-last digit is odd, followed by 2 or 6
    "))" + // Close either blocks
    "\\]" // Number ends with ]
);
console.log(bestPracticeMod4.test("[+05620]"));

// Makes sense
// I was googling for a Regex remainder operator, but instead needed to use the mathmatical logic behind the remainder

// This is where the logic happens
//    "[048]|" +          // - Have only one digit, then it needs to be 0, 4 or 8
//    "\\d*(" +           // - Have two or more digits, then it needs to be either
//    "[02468][048]|" +   // - the second-to-last digit is even, followed by 0, 4 or 8
//    "[13579][26]" +     // - the second-to-last digit is odd, followed by 2 or 6

// Fun practice! */

// First Variation on Caesar Cipher         7/21/2021
/* 
// The action of a Caesar cipher is to replace each plaintext letter (plaintext letters are from 'a' to 'z' or from 'A' to 'Z') with a different one a fixed number of places up or down the alphabet.

// This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).

// If the shift is initially 1, the first character of the message to be encoded will be shifted by 1, the second character will be shifted by 2, etc...

// Coding: Parameters and return of function "movingShift"
//    s:      a string to be coded
//    shift:  an integer giving the initial shift

// The function "movingShift" first codes the entire string and then returns an array of strings containing the coded string in 5 parts (five parts because, to avoid more risks, the coded message will be given to five runners, one piece for each runner).

// If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.

// For example:

// if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter.

// If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string.

// If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.

// You will also implement a "demovingShift" function with two parameters

// Decoding: parameters and return of function "demovingShift"
//    an array of strings: s (possibly resulting from "movingShift", with 5 strings)
//    an int shift
//    "demovingShift" returns a string.

// Example:
// u = "I should have known that you would have a perfect answer for me!!!"

// movingShift(u, 1) returns :
// v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

// (quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)

// and demovingShift(v, 1) returns u. #Ref:

// Caesar Cipher : http://en.wikipedia.org/wiki/Caesar_cipher

const alphabet = `abcdefghijklmnopqrstuvwxyz`;

function movingShift(s, shift) {
  shift--;
  s = s
    .split("")
    .map((cur) => {
      shift++;
      if (/^((?!(\w)).)*$/.test(cur)) return cur;
      if (/\d/.test(cur)) return cur;

      let pos = alphabet.indexOf(cur.toLowerCase()) + shift;
      if (pos > alphabet.length - 1) pos = pos % alphabet.length;

      return /[A-Z]/.test(cur) ? alphabet[pos].toUpperCase() : alphabet[pos];
    })
    .join(``);

  let strSize = s.length;
  let size = Math.ceil(strSize / 5);
  let lastSize = strSize % size;

  s = s.split("");

  return [
    s.splice(0, size).join(""),
    s.splice(0, size).join(""),
    s.splice(0, size).join(""),
    s.splice(0, size).join(""),
    s.join(""),
  ];
}

function demovingShift(arr, shift) {
  arr = arr.join(``);
  shift--;

  return arr
    .split("")
    .map((cur) => {
      shift++;
      if (/^((?!(\w)).)*$/.test(cur)) return cur;

      let pos = alphabet.indexOf(cur.toLowerCase()) - shift;
      while (pos < 0) {
        pos = alphabet.length + pos;
      }

      return /[A-Z]/.test(cur) ? alphabet[pos].toUpperCase() : alphabet[pos];
    })
    .join(``);
}

const u = "I should have known that you would have a perfect answer for me!!!";
const v = movingShift(u, 1);
console.log(v);
console.log(demovingShift(v, 1));

// Tough one... not a fan of my solution, but do find it readable
// That being said, definetly not optimized

function encode(str, shift) {
  var code, char, sum;
  var sign = Math.sign(shift);
  return str.replace(/[a-z]/gi, (s, i) => {
    code = s.charCodeAt(0);
    char = s.toUpperCase() === s ? 65 : 97;
    sum = code - char + (shift + ((sign * i) % 26) + 26);
    return String.fromCharCode((sum % 26) + char);
  });
}

function bestPracticeMovingShift(str, shift) {
  var pos;
  var code = encode(str, shift);
  var size = Math.ceil(str.length / 5);
  return Array.from({ length: 5 }, (_, i) => {
    pos = size * i;
    return code.slice(pos, size + pos);
  });
}

function bestPracticeDemovingShift(arr, shift) {
  return encode(arr.join(``), -shift);
}

console.log(bestPracticeMovingShift(u, 1));
console.log(bestPracticeDemovingShift(v, 1));

// Smart to create the shared .encode function
// Just now learning about Math.sign and seeing why this is a great use case for it

// I'd learnt about the .charCodeAt trick previously (6/29/2021), but struggled to implement it today. the alphabet string just feels much more readable.

// Lots of optimization here and great use of parameter functions (as seen with .replace) */

// Sum of pairs         7/22/2021
/* 
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

function sumPairs(ints, s) {
  let ans = [];
  let pairEnd = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < pairEnd && i < ints.length; i++) {
    let num = s - ints[i];
    let numIndex = ints.slice(i + 1).indexOf(num);

    if (numIndex != -1) numIndex += i;
    else continue;

    if (numIndex < pairEnd) {
      ans = [ints[i], num];
      pairEnd = numIndex;
    }
  }

  return ans.length == 0 ? undefined : ans;
}
console.log(sumPairs([11, 3, 7, 5], 10));
console.log(sumPairs([4, 3, 2, 3, 4], 6));
console.log(sumPairs([0, 0, -2, 3], 2));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));
console.log(``);

// Got it working with nested loops, but would timeout
// Comments said to get it working with a single loop, but still timed out
// Had to look at solution

function bestPracticeSumPairs(ints, s) {
  var seen = {};
  for (var i = 0; i < ints.length; i++) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true;
    console.log(seen);
  }
}
// console.log(bestPracticeSumPairs([11, 3, 7, 5], 10));
// console.log(bestPracticeSumPairs([4, 3, 2, 3, 4], 6));
// console.log(bestPracticeSumPairs([0, 0, -2, 3], 2));
// console.log(bestPracticeSumPairs([10, 5, 2, 3, 7, 5], 10));
// console.log(bestPracticeSumPairs([1, 2, 3, 4, 1, 0], 2));

// Frustrating when the solution ends up being so simple and optimized

// The seen object works the problem in reverse.
// Basically instead of testing every number to the rest of the array, this solution tests every number to the previous numbers.
// Once seen[s - ints[i]] is true, meaning the number was previously seen in the array, the solution is determined and the array is returned

// Such a different solution than what I had in mind, very clever */

// Sort - one, three, two         7/23/2021
/* 
// Hey You !
// Sort these integers for me, by name

// Input
//    Range is 0-999
//    There may be duplicates
//    The array may be empty

// Example
//    Input: 1, 2, 3, 4
//    Equivalent names: "one", "two", "three", "four"
//    Sorted by name: "four", "one", "three", "two"
//    Output: 4, 1, 3, 2

// Notes
// Don't pack words together:
//    e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
//    e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"

// Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
// e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
// e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"

function sortByName(arr) {
  return arr.sort((a, b) => num2word(a).localeCompare(num2word(b)));
}

function num2word(n) {
  let a = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let b = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  if (n >= 0 && n < 20) return a[n];
  if (n >= 20 && n < 100)
    return b[Math.floor(n / 10) - 2] + (n % 10 ? "-" + a[n % 10] : "");
  if (n >= 100 && n < 1000)
    return (
      a[Math.floor(n / 100)] +
      " hundred" +
      (n % 100 ? " " + num2word(n % 100) : "")
    );
}

console.log(sortByName([8, 8, 9, 9, 10, 10])); // 8, 8, 9, 9, 10, 10
console.log(sortByName([1, 2, 3, 4])); // 4, 1, 3, 2
console.log(sortByName([9, 99, 999])); // 9, 999, 99 */

// Land perimeter         7/24/2021
/* 
// Task:

// Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']
// or

// should return: "Total land perimeter: 24",
// while

// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']

// should return: "Total land perimeter: 18"

function landPerimeter(arr) {
  let n = arr.length - 1,
    m = arr[0].length - 1,
    p = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (arr[i][j] === `X`) {
        p += i === 0 || arr[i - 1][j] === "O";
        p += j === 0 || arr[i][j - 1] === "O";
        p += i === n || arr[i + 1][j] === "O";
        p += j === m || arr[i][j + 1] === "O";
      }
    }
  }

  return "Total land perimeter: " + p;
} */

// Which x for that sum?          7/25/2021
/* 
// Consider the sequence U(n, x) = x + 2x**2 + 3x**3 + .. + nx**n where x is a real number and n a positive integer.

// When n goes to infinity and x has a correct value (ie x is in its domain of convergence D), U(n, x) goes to a finite limit m depending on x.

// Usually given x we try to find m. Here we will try to find x (x real, 0 < x < 1) when m is given (m real, m > 0).

// Let us call solve the function solve(m) which returns x such as U(n, x) goes to m when n goes to infinity.

// Examples:
// solve(2.0) returns 0.5 since U(n, 0.5) goes to 2 when n goes to infinity.

// solve(8.0) returns 0.7034648345913732 since U(n, 0.7034648345913732) goes to 8 when n goes to infinity.

// Note:
// You pass the tests if abs(actual - expected) <= 1e-12

function solve(m) {
  (m) => 1 - ((4 * m + 1) ** 0.5 - 1) / (2 * m);
}
console.log(solve(2.0)); */

// k-Primes         7/26/2021
/* 
// A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity. For example:

// k = 2  -->  4, 6, 9, 10, 14, 15, 21, 22, ...
// k = 3  -->  8, 12, 18, 20, 27, 28, 30, ...
// k = 5  -->  32, 48, 72, 80, 108, 112, ...
// A natural number is thus prime if and only if it is 1-prime.

// Task:
// Complete the function count_Kprimes (or countKprimes, count-K-primes, kPrimes) which is given parameters k, start, end (or nd) and returns an array (or a list or a string depending on the language - see "Solution" and "Sample Tests") of the k-primes between start (inclusive) and end (inclusive).

// Example:
// countKprimes(5, 500, 600) --> [500, 520, 552, 567, 588, 592, 594]
// Notes:

// The first function would have been better named: findKprimes or kPrimes :-)
// In C some helper functions are given (see declarations in 'Solution').
// For Go: nil slice is expected when there are no k-primes between start and end.

function getKPrimes(n) {
  var result = [];
  for (var i = 2; i <= Math.sqrt(n); i += i > 2 ? 2 : 1) {
    while (n % i == 0) {
      result.push(i);
      n = n / i;
    }
  }
  if (n > 1) {
    result.push(n);
  }
  return result;
}

function countKprimes(k, start, nd) {
  var result = [];
  for (var i = Math.max(start, 2); i <= nd; i++) {
    var kPrimes = getKPrimes(i);
    if (kPrimes.length === k) {
      result.push(i);
    }
  }
  return result;
}

function puzzle(s) {
  var p1 = countKprimes(1, 2, s),
    p3 = countKprimes(3, 2, s),
    p7 = countKprimes(7, 2, s),
    result = 0;
  for (var p7i = 0; p7i < p7.length; p7i++) {
    for (var p3i = 0; p3i < p3.length && s > p7[p7i] + p3[p3i]; p3i++) {
      result += p1.indexOf(s - p7[p7i] - p3[p3i]) > -1 ? 1 : 0;
    }
  }
  return result;
} */

// Basic DeNico         7/27/2021
/* 
// Write a function deNico/de_nico() that accepts two parameters:
//    key/$key - string consists of unique letters and digits
//    message/$message - string with encoded message
//    and decodes the message using the key.

// First create a numeric key basing on the provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.

// For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
// Let's decode cseerntiofarmit on using our crazy key.

// 1 2 3 4 5
// ---------
// c s e e r
// n t i o f
// a r m i t
//   o n
// After using the key:

// 2 3 1 5 4
// ---------
// s e c r e
// t i n f o
// r m a t i
// o n

// Notes
// The message is never shorter than the key.
// Don't forget to remove trailing whitespace after decoding the message
// Examples

// deNico("crazy", "cseerntiofarmit on  ") => "secretinformation"
// deNico("abc", "abcd") => "abcd"
// deNico("ba", "2143658709") => "1234567890"
// deNico("key", "eky") => "key"
// Check the test cases for more examples.

// Related Kata - https://www.codewars.com/kata/5968bb83c307f0bb86000015

function deNico(key, m) {
  let codder = key
    .split(``)
    .sort()
    .map((e) => key.indexOf(e));
  return m
    .split(``)
    .map(
      (_, i) =>
        m[
          Math.floor(i / key.length) * key.length +
            codder.indexOf(i % key.length)
        ]
    );
} */

// Reverse Integer            7/28/2021
/* 
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
//    Input: x = 123
//    Output: 321

// Example 2:
//    Input: x = -123
//    Output: -321

// Example 3:
//    Input: x = 120
//    Output: 21

// Example 4:
//    Input: x = 0
//    Output: 0

// Constraints:
//    -231 <= x <= 231 - 1

let reverse = function (x) {
  x = String(x).split(/(\d+)/);
  x[1] = Number(x[1].split(``).reverse().join(``));
  x = Number(x.join(``));
  return x >= 0 - 2 ** 31 && x <= 2 ** 31 - 1 ? x : 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));

// This problem is via LeetCode
// Will try a couple days with it and may swap

// Solutions seem less concise than what codewars users were producing

// Overall solid solution with far less complexity than the recommended answer. */

// Palindrome Number          7/29/2021
/* 
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:
//    Input: x = 121
//    Output: true

// Example 2:
//    Input: x = -121
//    Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
//    Input: x = 10
//    Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
//    Input: x = -101
//    Output: false

// Constraints:
// -2^31 <= x <= 2^31 - 1

// Follow up: Could you solve it without converting the integer to a string?

const isPalindrome = function (x) {
  if (x < 0 && x > 2 ** 31 - 1) return false;

  x = String(x);
  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] != x[x.length - i - 1]) return false;
  }

  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(30));
console.log(isPalindrome(-101));

// Works great!

var bestPracticeIsPalindrome = function (x) {
  if (x < 0) return false;

  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    rev = rev * 10 + (i % 10);
  }
  return rev === x;
};

console.log(bestPracticeIsPalindrome(121));
console.log(bestPracticeIsPalindrome(-121));
console.log(bestPracticeIsPalindrome(10));
console.log(bestPracticeIsPalindrome(30));
console.log(bestPracticeIsPalindrome(-101));

// Basically chops it in half, switches them around then compares to original
// Smart way to avoid using a string */

// Roman to Integer         7/30/2021
/* 
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 4:
//      Input: s = "LVIII"
//      Output: 58
//      Explanation: L = 50, V= 5, III = 3.

// Example 5:
//      Input: s = "MCMXCIV"
//      Output: 1994
//      Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
//      1 <= s.length <= 15
//      s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//      It is guaranteed that s is a valid roman numeral in the range [1, 3999].

let table = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

var romanToInt = function (s) {
  console.log(s);
  return s.split(``).reduce((acc, cur, i, arr) => {
    if (table[`${cur}${arr[i + 1]}`]) {
      cur = `${cur}${arr[i + 1]}`;
      arr.splice(i, 1);
    }
    return (acc += table[cur]);
  }, 0);
};

console.log(romanToInt(`III`)); // 3
console.log(romanToInt(`IV`)); // 4
console.log(romanToInt(`IX`)); // 9
console.log(romanToInt(`LVIII`)); // 58
console.log(romanToInt(`MCMXCIV`)); // 1994

// Great solution, first time really using an object like this

symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var topVotedRomanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};

// Similar workings but without .reduce function
// I'm satisfied with my solution, faster runtime than 80% of submissions! */

// Longest Common Prefix          7/31/2021
/* 
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
//    Input: strs = ["flower","flow","flight"]
//    Output: "fl"

// Example 2:
//    Input: strs = ["dog","racecar","car"]
//    Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
//    1 <= strs.length <= 200
//    0 <= strs[i].length <= 200
//    strs[i] consists of only lower-case English letters.

const longestCommonPrefix = function (strs) {
  let ans = "";
  for (let i = 1; i <= strs[0].length; i++) {
    const prefix = strs[0].slice(0, i);
    let doAllMatch = true;
    strs.slice(1).forEach((word) => {
      if (!word.startsWith(prefix)) doAllMatch = false;
    });
    if (doAllMatch) ans = prefix;
  }
  return ans;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// Probably not the simplest solution out there. Not the best runtime either.

const topVotedLongestCommonPrefix = function (strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};
console.log(topVotedLongestCommonPrefix(["flower", "flow", "flight"]));
console.log(topVotedLongestCommonPrefix(["dog", "racecar", "car"]));

// Very concise
// The whole solution comes from the while loop
//    Compares the first two words
//    loops over them until they no longer share common prefix
//    Passes on longest common prefix
//    does the same with next word
//    repeat */

// Valid Parentheses          8/1/2021
/* 
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
//    Input: s = "()"
//    Output: true

// Example 2:
//    Input: s = "()[]{}"
//    Output: true

// Example 3:
//    Input: s = "(]"
//    Output: false

// Example 4:
//    Input: s = "([)]"
//    Output: false

// Example 5:
//    Input: s = "{[]}"
//    Output: true

// Constraints:
//    1 <= s.length <= 104
//    s consists of parentheses only '()[]{}'.

const topVotedIsValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case `(`:
        stack.push(`)`);
        break;
      case `[`:
        stack.push(`]`);
        break;
      case `{`:
        stack.push(`}`);
        break;

      default:
        if (c !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};
console.log(isValid(`()`));
console.log(isValid(`()[]{}`));
console.log(isValid(`(]`));
console.log(isValid(`([)]`));
console.log(isValid(`{[]}`));

// Had to use solution for this one

// Solution is adding to an array, then ensuring the correct closing bracket is being used
// The default in the switch statement cleverly removes the closing bracket while testing it

// If the array is empty, all opened brackets have been closed */

// Merge Two Sorted Lists         8/2/2021
/* 
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:
//    Input: l1 = [1,2,4], l2 = [1,3,4]
//    Output: [1,1,2,3,4,4]

// Example 2:
//    Input: l1 = [], l2 = []
//    Output: []

// Example 3:
//    Input: l1 = [], l2 = [0]
//    Output: [0]

// Constraints:
//    The number of nodes in both lists is in the range [0, 50].
//    -100 <= Node.val <= 100
//    Both l1 and l2 are sorted in non-decreasing order.

const mergeTwoLists = function (l1, l2) {
  let ans = [];
  for (let i = 0; i <= 50; i++) {
    if (!isFinite(l1[i]) && !isFinite(l2[i])) break;
    l1[i] <= l2[i] ? ans.push(l1[i], l2[i]) : ans.push(l2[i], l1[i]);
  }
  return ans.filter((x) => x != undefined);
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));

// Encountering some return type error
// Current code answers the question, will be looking at top voted solution

var topVotedMergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;
  if (l1.val < l2.val) {
    l1.next = topVotedMergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = topVotedMergeTwoLists(l1, l2.next);
    return l2;
  }
};
console.log(topVotedMergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(topVotedMergeTwoLists([], []));
console.log(topVotedMergeTwoLists([], [0]));

// Function feeds into itself, pretty clever and clean
// Seems l1 and l2 are in fact objects and I had to return an object. */

// Remove Duplicates from Sorted Array          8/3/2021
/* 
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
//    Input: nums = [1,1,2]
//    Output: 2, nums = [1,2,_]

// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
//    Input: nums = [0,0,1,1,1,2,2,3,3,4]
//    Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.

// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:
//    0 <= nums.length <= 3 * 104
//    -100 <= nums[i] <= 100
//    nums is sorted in non-decreasing order.

const removeDuplicates = function (nums) {
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Works great! */

// Remove Element         8/4/2021
/* 
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
//    Input: nums = [3,2,2,3], val = 3
//    Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
//    Input: nums = [0,1,2,2,3,0,4,2], val = 2
//    Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:
//    0 <= nums.length <= 100
//    0 <= nums[i] <= 50
//    0 <= val <= 100

const removeElement = function (nums, val) {
  while (nums.indexOf(val, 0) >= 0) nums.splice(nums.indexOf(val, 0), 1);
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// Pretty straight-forward
// While .indexOf still returns an index (not -1), splice said value */

// Implement strStr()         8/5/2021
/* 
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
//    Input: haystack = "hello", needle = "ll"
//    Output: 2

// Example 2:
//    Input: haystack = "aaaaa", needle = "bba"
//    Output: -1

// Example 3:
//    Input: haystack = "", needle = ""
//    Output: 0

// Constraints:
//    0 <= haystack.length, needle.length <= 5 * 104
//    haystack and needle consist of only lower-case English characters.

const strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("", ""));

// Simple and easy, faster than 95% of submissions

// Reading discussion, people were attempting to solve without using built-in methods
// Their 3-layer deep nested for loops proved to have slower runtime and higher memory usage */

// Search Insert Position         8/6/2021
/* 
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
//    1 <= nums.length <= 104
//    -104 <= nums[i] <= 104
//    nums contains distinct values sorted in ascending order.
//    -104 <= target <= 104

const searchInsert = function (nums, target) {
  if (nums[nums.length - 1] < target) return nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;
    if (nums[i] > target) return i;
  }
};
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1], 0)); // 0

// Given the runtime complexity limitation, using a loop was the best solution
// .indexOf could've easily been used, but given we had to return the integer's 'supposed' position, the loop is best

// Better runtime than 75%, top 30% lowest memory usage */

// Maximum Subarray         8/7/2021
/* 
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:
//    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//    Output: 6
//    Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
//    Input: nums = [1]
//    Output: 1

// Example 3:
//    Input: nums = [5,4,-1,7,8]
//    Output: 23

// Constraints:
//    1 <= nums.length <= 3 * 104
//    -105 <= nums[i] <= 105

const maxSubArray = function (nums) {
  let ans = 0;
  nums.reduce((acc, cur) => {
    acc += cur;
    if (ans < acc) ans = acc;
    if (acc < 0) acc = 0;
    return acc;
  }, 0);
  return ans;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

// I remembered this one from a previous challenge (7/8/2021). Kadane's algorithm.
// Seems negative values break my previous solution

const topVotedMaxSubArray = function (nums) {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};
console.log(topVotedMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(topVotedMaxSubArray([1]));
console.log(topVotedMaxSubArray([-1]));
console.log(topVotedMaxSubArray([5, 4, -1, 7, 8]));

// Seems that for the length of the array:
//    - prev picks the maximum between previous values and the current value
//    - max then compares which is biggest between the current leader and prev
//    - return max

// I like this solution */

// Length of Last Word          8/8/2021
/* 
// Given a string s consists of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Constraints:
//    1 <= s.length <= 104
//    s consists of only English letters and spaces ' '.
//    There will be at most one word in s.

const lengthOfLastWord = function (s) {
  return s.trim().split(` `).pop().length;
};
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6

// Easy one-liner
// Faster runtime than 90% of submitted results, top 30% lowest memory usage

// Top voted is identical to my solution */

// Plus One         8/9/2021
/* 
// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Constraints:
//    1 <= digits.length <= 100
//    0 <= digits[i] <= 9

const plusOne = function (digits) {
  let increment = false;
  digits = digits
    .reverse()
    .map((cur, i) => {
      if (increment) {
        increment = false;
        cur++;
      }
      if (i == 0) cur++;
      if (cur > 9) {
        increment = true;
        cur = 0;
      }
      return cur;
    })
    .reverse();
  if (increment) digits.unshift(1);
  return digits;
};
console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([0])); // [1]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([1, 9, 9])); // [2,0,0]

// Not my best code I'll admit
// Beats 50% of submissions somehow

const topVotedPlusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};
console.log(topVotedPlusOne([1, 2, 3])); // [1,2,4]
console.log(topVotedPlusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(topVotedPlusOne([0])); // [1]
console.log(topVotedPlusOne([9])); // [1,0]
console.log(topVotedPlusOne([1, 9, 9])); // [2,0,0]

// This makes much more sense
// I was stuck trying to use .map and .reverse when a decrementing for loop was much more obvious
// Simpler is better. */

// Add Binary         8/10/2021
/* 
// Given two binary strings a and b, return their sum as a binary string.

// Constraints:
//    1 <= a.length, b.length <= 104
//    a and b consist only of '0' or '1' characters.
//    Each string does not contain leading zeros except for the zero itself.

const topVotedAddBinary = function (a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
};
console.log(topVotedAddBinary(`11`, `1`)); // 100
console.log(topVotedAddBinary(`1010`, `1011`)); // 10101

// "The idea is to use inputs, a and b to build two binary literals. Calculating the sum is done by calling the BigInt function on our binary literals, adding them together and returning the sum with a call to the toString method with 2 as the argument, since we are working with binary numbers."

// Newer versions of JavaScript -- specifically ECMAScript 6 -- have added support for binary (prefix 0b), octal (prefix 0o) and hexadecimal (prefix: 0x) numeric literals:

// var bin = 0b1111;    // bin will be set to 15
// var oct = 0o17;      // oct will be set to 15
// var hex = 0xF;       // hex will be set to 15

// Ended up using the top voted solution
// This is a feature I'd never heard about: binary, octal and hex support

const hexOctBinAdditionTest = function (a, b, c) {
  const aHex = `0x${a}`;
  const bOct = `0o${b}`;
  const cBin = `0b${c}`;
  const sum = BigInt(aHex) + BigInt(bOct) + BigInt(cBin);
  return sum.toString(10);
};
//                                HEX  OCTAL  BINARY
console.log(hexOctBinAdditionTest(`F`, `17`, `1111`)); // F=15, 17=15, 1111=15 = 45
console.log(hexOctBinAdditionTest(`A`, `33`, `11`)); // A=10, 33=27, 11=3 = 40

// BigInt can recognize the different numeric literals and work accordingly
// .toString can then convert to any number base requested (2, 8, 10, or anything else)

// This is new to me, very cool! */

// Sqrt(x)          8/11/2021
/* 
// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

// Example:
//    Input: x = 8
//    Output: 2
//  Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

const mySqrt = function (x) {
  let ans = 1;
  while (ans * ans <= x) ans++;
  return --ans;
};
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2

// No need for decimal points or rounding make this solution a lot simpler
// Basically loop over and over until x has been passed, then decrement once */

// Climbing Stairs          8/12/2021
/* 
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
//    Input: n = 2
//    Output: 2
//  Explanation: There are two ways to climb to the top.
//  1. 1 step + 1 step
//  2. 2 steps

// Example 2:
//    Input: n = 3
//    Output: 3
//  Explanation: There are three ways to climb to the top.
//  1. 1 step + 1 step + 1 step
//  2. 1 step + 2 steps
//  3. 2 steps + 1 step

// Constraints:
//   1 <= n <= 45

const topVotedClimbStairs = function (n) {
  // First two pointers store the first two numbers of the Fibonacci sequence
  let prev = 0;
  let cur = 1;
  // Our third pointer is used to store one side while we update the above two pointers.
  let temp;

  // We use a for loop to iterate from 1 up to our number n with our constraints  being: 1 <= n <= 45
  for (let i = 1; i <= n; i++) {
    // We store one side in our third pointer
    temp = prev;
    // We then update that side to be equal to the other pointer
    // This is because the next number is equal to the sum of the previous two numbers.
    prev = cur;
    // Next we add temp which now holds our lower number to cur which holds our upper number to get our next number.
    cur += temp;
  }
  // Outside of our loop we return cur which stored our cumulative total while we iterated.
  return cur;
};
console.log(topVotedClimbStairs(2)); // 2
console.log(topVotedClimbStairs(3)); // 3

// Known as Fibonacci solution, ended up looking at solution
// Number grows exponentially:
//    1 + 1 = 2
//    1 + 2 = 3
//    2 + 3 = 5
//    3 + 5 = 8
//    5 + 8 = 13
//    ...

// Not the most obvious thing to me, but obviously Fibonacci sequence was designed to tackle this. */

// Remove Duplicates from Sorted List         8/13/2021
/* 
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
//    Input: head = [1,1,2]
//    Output: [1,2]

// Example 2:
//    Input: head = [1,1,2,3,3]
//    Output: [1,2,3]

// Constraints:
//    The number of nodes in the list is in the range [0, 300].
//    -100 <= Node.val <= 100
//    The list is guaranteed to be sorted in ascending order.

const deleteDuplicates = function (head) {
  return [...new Set(head)];
};
console.log(deleteDuplicates([1, 1, 2]));
console.log(deleteDuplicates([1, 1, 2, 3, 3]));

const secondDeleteDuplicates = function (head) {
  return head.filter((cur, i, arr) => cur !== arr[i - 1]);
};
console.log(secondDeleteDuplicates([1, 1, 2]));
console.log(secondDeleteDuplicates([1, 1, 2, 3, 3]));

const thirdDeleteDuplicates = function (head) {
  let i = 1;
  while (i <= head.length) {
    if (head[i] == head[i - 1]) {
      head.splice(i, 1);
    } else i++;
  }
  return head;
};
console.log(thirdDeleteDuplicates([1, 1, 2]));
console.log(thirdDeleteDuplicates([1, 1, 2, 3, 3]));

// Doesnt seem to want to accept any of my solution even though the browser clearly shows the correct output was returned

var topVotedDeleteDuplicates = function (head) {
  var current = head;
  while (current) {
    if (current.next !== null && current.val == current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
console.log(topVotedDeleteDuplicates([1, 1, 2]));
console.log(topVotedDeleteDuplicates([1, 1, 2, 3, 3]));

// LeetCode accepts it, but browser shows error...
// Must be the verification process that's denying my results

// I prefer the first solution provided. Very clear, very simple. */

// Merge Sorted Array         8/14/2021
/* 
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
//    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//    Output: [1,2,2,3,5,6]
//  Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//  The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
//    Input: nums1 = [1], m = 1, nums2 = [], n = 0
//    Output: [1]
//  Explanation: The arrays we are merging are [1] and [].
//  The result of the merge is [1].

// Example 3:
//    Input: nums1 = [0], m = 0, nums2 = [1], n = 1
//    Output: [1]
//  Explanation: The arrays we are merging are [] and [1].
//  The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Constraints:
//    nums1.length == m + n
//    nums2.length == n
//    0 <= m, n <= 200
//    1 <= m + n <= 200
//    -109 <= nums1[i], nums2[j] <= 109

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

const merge = function (nums1, m, nums2, n) {
  return [...nums1.splice(0, m), ...nums2.splice(0, n)].sort((a, b) => a - b);
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]

// LeetCode doesn't seem to encourage one-liners
// Yesterday I ran into the same issue where this solution works in the browser yet not on the website

const topVotedMerge = function (nums1, m, nums2, n) {
  let insertPos = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};
console.log(topVotedMerge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(topVotedMerge([1], 1, [], 0)); // [1]
console.log(topVotedMerge([0], 0, [1], 1)); // [1]

// A return statement wasn't needed in order to succeed
// I'm guessing LeetCode is evaluating the looping process more than the output

// This solution has a slower runtime than 50% and higher memory usage than 95%
// I prefer my answer... */

// Binary Tree Inorder Traversal          8/15/2021
/* 
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Constraints:
//    The number of nodes in the tree is in the range [0, 100].
//    -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

const inOrderTraversal = function (root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
};
console.log(inOrderTraversal([1, null, 2, 3])); // [1,3,2]
console.log(inOrderTraversal([])); // []
console.log(inOrderTraversal([1])); // [1]
console.log(inOrderTraversal([1, 2])); // [2,1]
console.log(inOrderTraversal([1, null, 2])); // [1,2] */

// Same Tree          8/16/2021
/* 
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Constraints:
//    The number of nodes in both trees is in the range [0, 100].
//    -104 <= Node.val <= 104

const isSameTree = function (p, q) {
  if (p.length != q.length) return false;
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) return false;
  }
  return true;
};
console.log(isSameTree([1, 2, 3], [1, 2, 3])); // true
console.log(isSameTree([1, 2], [1, null, 2])); // false
console.log(isSameTree([1, 2, 1], [1, 1, 2])); // false

// LeetCode claims isSameTree([1, 2], [1, null, 2]) gives a 'true' output, while the browser returns 'false'

function topVotedIsSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return (
    topVotedIsSameTree(p.left, q.left) && topVotedIsSameTree(p.right, q.right)
  );
}
console.log(topVotedIsSameTree([1, 2, 3], [1, 2, 3])); // true
console.log(topVotedIsSameTree([1, 2], [1, null, 2])); // false
console.log(topVotedIsSameTree([1, 2, 1], [1, 1, 2])); // false

// I need to study binary tree questions... */

// Symmetric Tree         8/17/2021
/* 
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Constraints:
//    The number of nodes in the tree is in the range [1, 1000].
//    -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

const topVotedIsSymmetric = function (root) {
  if (root == null) return true;
  return symmetryChecker(root.left, root.right);
};

function symmetryChecker(left, right) {
  if (left == null && right == null) return true;
  if (left == null || right == null) return false;
  if (left.val !== right.val) return false;

  return (
    symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left)
  );
}
console.log(topVotedIsSymmetric([1, 2, 2, 3, 4, 4, 3])); // true
console.log(topVotedIsSymmetric([1, 2, 2, null, 3, null, 3])); // false

// Another binary tree question that works in LeetCode, but not browser
// Will be skipping next one. */

// Pascal's Triangle          8/18/2021
/* 
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Constraints:
//    1 <= numRows <= 30

const generate = function (numRows) {
  let ans = [];
  for (let i = 0; i < numRows; i++) {
    ans[i] = [];
    ans[i][0] = 1;
    for (let j = 1; j < i; j++) {
      ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
    ans[i][i] = 1;
  }
  return ans;
};
console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]

// Doesn't feel very dynamic, but works. */

// Pascal's Triangle II         8/19/2021
/* 
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Constraints:
//    0 <= rowIndex <= 33

const getRow = function (rowIndex) {
  let ans = [];
  for (let i = 0; i <= rowIndex; i++) {
    ans[i] = [];
    ans[i][0] = 1;
    for (let j = 1; j < i; j++) {
      ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
    ans[i][i] = 1;
  }
  return ans[rowIndex];
};
console.log(getRow(3)); // [1,3,3,1]
console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1,1]

// Same solution as yesterday, but only return a single row */

// Best Time to Buy and Sell Stock          8/20/2021
/* 
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
//    Input: prices = [7,1,5,3,6,4]
//    Output: 5
//  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
//    Input: prices = [7,6,4,3,1]
//    Output: 0
//  Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
//    1 <= prices.length <= 105W
//    0 <= prices[i] <= 104

const maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length - i; j++) {
      if (prices[j + i] - prices[i] > profit)
        profit = prices[j + i] - prices[i];
    }
  }
  return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 1, 4])); // 3

// Works, but times out

const topVotedMaxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
console.log(topVotedMaxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(topVotedMaxProfit([7, 6, 4, 3, 1])); // 0
console.log(topVotedMaxProfit([2, 1, 4])); // 3

// Only has to loop once, drastically reducing runtime */

// Valid Palindrome         8/21/2021
/* 
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example 1:
//    Input: s = "A man, a plan, a canal: Panama"
//    Output: true
//  Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
//    Input: s = "race a car"
//    Output: false
//  Explanation: "raceacar" is not a palindrome.

// Constraints:
//    1 <= s.length <= 2 * 105
//    s consists only of printable ASCII characters.

const isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, ``);
  return s === s.split(``).reverse().join(``) ? true : false;
};
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("0P")); // false
console.log(isPalindrome("ab_a")); // true

const topVotedIsPalindrome = function (s) {
  var strippedString = s.replace(/\W/g, "");
  var reversedString = strippedString.split("").reverse().join("");

  return strippedString.toLowerCase() == reversedString.toLowerCase();
};
console.log(topVotedIsPalindrome("A man, a plan, a canal: Panama")); // true
console.log(topVotedIsPalindrome("race a car")); // false
console.log(topVotedIsPalindrome("0P")); // false
console.log(topVotedIsPalindrome("ab_a")); // true

// Solution's REGEX didnt work with underscores
// Was on the right track, but REGEX needed some tweaking */

// Single Number          8/22/2021
/* 
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Constraints:
//    1 <= nums.length <= 3 * 104
//    -3 * 104 <= nums[i] <= 3 * 104
//    Each element in the array appears twice except for one element which appears only once.

const singleNumber = function (nums) {
  const SeenOnce = {};
  nums.forEach((num) => {
    if (!SeenOnce[num]) SeenOnce[num] = true;
    else SeenOnce[num] = false;
  });
  let ans;
  Object.keys(SeenOnce).forEach((num) => {
    if (SeenOnce[num]) ans = num;
  });
  return Number(ans);
};
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1

// Not the cleanest, wish I'd found a way to avoid using 'ans', but solution worked

const topVotedSingleNumber = function (nums) {
  return nums.reduce((acc, cur) => {
    // console.log(`${acc} ^ ${cur} = ${acc ^ cur}`);
    return acc ^ cur;
  });
};
console.log(topVotedSingleNumber([2, 2, 1])); // 1
console.log(topVotedSingleNumber([4, 1, 2, 1, 2])); // 4
console.log(topVotedSingleNumber([1])); // 1

// Clever solution that takes a more mathematical approach. */

// Majority Element         8/23/2021
/* 
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Constraints:
//    n == nums.length
//    1 <= n <= 5 * 104
//    -231 <= nums[i] <= 231 - 1

// Follow-up: Could you solve the problem in linear time and in O(1) space?
// Accepted

const majorityElement = function (nums) {
  let Count = {};
  nums.forEach((num) => (Count[num] ? Count[num]++ : (Count[num] = 1)));
  return +Object.keys(Count).reduce((acc, cur) =>
    Count[cur] > Count[acc] ? cur : acc
  );
};
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([3, 3, 4])); // 3

// Faster runtime than 95%, less memory usage than 82%
// Clean and readable solution */

// Excel Sheet Column Number          8/24/2021
/* 
// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

// For example:
//    A -> 1
//    B -> 2
//    C -> 3
//    ...
//    Z -> 26
//    AA -> 27
//    AB -> 28
//    ...

// Constraints:
//    1 <= columnTitle.length <= 7
//    columnTitle consists only of uppercase English letters.
//    columnTitle is in the range ["A", "FXSHRXW"].

const topVotedTitleToNumber = function (s) {
  const charCodeBase = `A`.charCodeAt(0) - 1;
  const n = s.length;
  let ans = 0;

  // Think of it as base 26. For example,
  // Column number of "AB" = 1 * 26^1 + 2 * 26^0

  for (let i = 0; i < n; i++) {
    ans += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n - i - 1);
  }
  return ans;
};
console.log(topVotedTitleToNumber(`A`)); // 1
console.log(topVotedTitleToNumber(`AB`)); // 28
console.log(topVotedTitleToNumber(`ZY`)); // 701
console.log(topVotedTitleToNumber(`FXSHRXW`)); // 2147483647

// Ended up studying top voted solution
// Got very close, but could not figure out Math.pow(26, n - i - 1)

const titleToNumber = function (s) {
  const alphabet = `_ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

  return s
    .split(``)
    .reduce(
      (acc, cur, i) =>
        (acc += alphabet.indexOf(cur) * Math.pow(26, s.length - i - 1)),
      0
    );
};
console.log(titleToNumber(`A`)); // 1
console.log(titleToNumber(`AB`)); // 28
console.log(titleToNumber(`ZY`)); // 701
console.log(titleToNumber(`FXSHRXW`)); // 2147483647

// I've encountered the `charCodeAt` replacement for alphabet before, but personally prefer the hardcoded's readability

// Submitted both solutions and they return the exact same runtime and memory usage
// Faster than 85%, less memory usage than 91% */

// Factorial Trailing Zeroes          8/25/2021
/* 
// Given an integer n, return the number of trailing zeroes in n!.

// Follow up: Could you write a solution that works in logarithmic time complexity?

// Example 1:
//    Input: n = 3
//    Output: 0
//    Explanation: 3! = 6, no trailing zero.

// Example 2:
//    Input: n = 5
//    Output: 1
//    Explanation: 5! = 120, one trailing zero.

// Example 3:
//    Input: n = 0
//    Output: 0

// Constraints:
//    0 <= n <= 104

const trailingZeroes = function (n) {
  if (n == 0) return 0;

  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }

  return String(ans).length - String(ans).replace(/[0]+$/g, ``).length;
};
console.log(trailingZeroes(3)); // 0
console.log(trailingZeroes(5)); // 1
console.log(trailingZeroes(0)); // 0
console.log(trailingZeroes(20)); // 4
console.log(trailingZeroes(30)); // 7

// Not the nicest solution. Not a fan of String casting in this situation
// Also breaks when scientific notation is applied (n=30)

// Surely there's a clever alternative

const topVotedTrailingZeros = function (n) {
  let numZeroes = 0;
  for (let i = 5; i <= n; i *= 5) {
    numZeroes += Math.floor(n / i);
  }
  return numZeroes;
};
console.log(topVotedTrailingZeros(3)); // 0
console.log(topVotedTrailingZeros(5)); // 1
console.log(topVotedTrailingZeros(0)); // 0
console.log(topVotedTrailingZeros(20)); // 4
console.log(topVotedTrailingZeros(30)); // 7

// Mathematical solution:
// https://leetcode.com/problems/factorial-trailing-zeroes/discuss/355808/JavaScript-solution-with-explanation

// Basically, whenever there's a multiple of 5 (2*5), a trailing 0 is generated
// This loop tests  n's factorial is being calculated, not at the end */

// First Unique Character in a String         8/26/2021
/* 
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Constraints:
//    1 <= s.length <= 105
//    s consists of only lowercase English letters.

const firstUniqChar = function (s) {
  const rest = s.split(``);
  let past = [];
  for (let i = 0; i < s.length; i++) {
    past.push(rest.shift());
    if (!rest.includes(s[i]) && !past.slice(0, i).includes(s[i])) return i;
  }
  return -1;
};
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1

// Not my best code and definitely not my best runtime and memory usage...

const topVotedFirstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++)
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  return -1;
};
console.log(topVotedFirstUniqChar("leetcode")); // 0
console.log(topVotedFirstUniqChar("loveleetcode")); // 2
console.log(topVotedFirstUniqChar("aabb")); // -1

// First time seeing .lastIndexOf
// Makes total sense. If the first and lastIndex of a char are different, it appears more than once in the string */

// Find the Difference          8/27/2021
/* 
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

// Example 1:
//    Input: s = "abcd", t = "abcde"
//    Output: "e"
//    Explanation: 'e' is the letter that was added.

// Example 2:
//    Input: s = "", t = "y"
//    Output: "y"

// Example 3:
//    Input: s = "a", t = "aa"
//    Output: "a"

// Example 4:
//    Input: s = "ae", t = "aea"
//    Output: "a"

// Constraints:
//    0 <= s.length <= 1000
//    t.length == s.length + 1
//    s and t consist of lower-case English letters

const topVotedFindTheDifference = function (s, t) {
  const sum1 = s.split(``).reduce((acc, cur) => {
    // console.log(cur.charCodeAt(0));
    // console.log(acc + cur.charCodeAt(0));
    // console.log(``);

    return acc + cur.charCodeAt(0);
  }, 0);

  const sum2 = t.split(``).reduce((acc, cur) => acc + cur.charCodeAt(0), 0);

  // console.log(sum2 - sum1);
  return String.fromCharCode(sum2 - sum1);
};
console.log(topVotedFindTheDifference("abcd", "abcde")); // e
console.log(topVotedFindTheDifference("", "y")); // y
console.log(topVotedFindTheDifference("a", "aa")); // a
console.log(topVotedFindTheDifference("ae", "aea")); // a

// Very clever usage of .charCodeAt */

// Is Subsequence         8/28/2021
/* 
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Constraints:
//    0 <= s.length <= 100
//    0 <= t.length <= 104
//    s and t consist only of lowercase English letters.

const isSubsequence = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    if (s[0] === t[i]) s = s.substring(1);
  }
  return s ? false : true;
};
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false

// Simple and readable
// Top voted is very similar */

// Longest Palindrome          8/29/2021
/* 
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
//    Input: s = "abccccdd"
//    Output: 7
//  Explanation:
//    One longest palindrome that can be built is "dccaccd", whose length is 7.

// Constraints:
//    1 <= s.length <= 2000
//    s consists of lowercase and/or uppercase English letters only.

const topVotedLongestPalindrome = function (s) {
  let ans = 0;
  let keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) ans += 2;
  }

  return s.length > ans ? ans + 1 : ans;
};
console.log(topVotedLongestPalindrome("abccccdd")); // 7
console.log(topVotedLongestPalindrome("a")); // 1
console.log(topVotedLongestPalindrome("bb")); // 2 */

// Fizz Buzz          8/30/2021
/* 
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.

// Constraints:
//    1 <= n <= 104

const fizzBuzz = function (n) {
  let ans = [];
  for (let i = 1; i <= n; i++) ans.push(i);

  return ans.map((num) => {
    let fix = ``;
    if (num % 3 === 0) fix += `Fizz`;
    if (num % 5 === 0) fix += `Buzz`;
    return fix.length > 0 ? fix : String(num);
  });
};
console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Very OK solution, nothing crazy about it

const topVotedFizzBuzz = function (n) {
  return new Array(n)
    .fill(0)
    .map((a, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i);
};
console.log(topVotedFizzBuzz(3)); // ["1","2","Fizz"]
console.log(topVotedFizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(topVotedFizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Pretty much exactly what I did but as a one-liner
// Clever to use new Array(n).fill(0) and go from there */

// Third Maximum Number         8/31/2021
/* 
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Constraints:
//    1 <= nums.length <= 104
//    -231 <= nums[i] <= 231 - 1

const thirdMax = function (nums) {
  let arr = nums;
  for (let i = 0; i < 2; i++) {
    arr = arr.filter((num) => num < Math.max(...arr));
  }
  return arr.length > 0 ? Math.max(...arr) : Math.max(...nums);
};
console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
console.log(thirdMax([2, 2, 3, 1])); // 1
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).

// Great memory usage, not the best runtime.

const topVotedThirdMax = function (nums) {
  if (nums.length < 3) return Math.max(...nums);
  let u = new Set(nums);
  if (u.size < 3) return Math.max(...u);

  for (let i = 0; i < 2; i++) {
    u.delete(Math.max(...u));
  }
  return Math.max(...u);
};
console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1

// I personally love this solution
// The use of guard clauses to check arr/Set lengths promise a faster runtime

// Apart from that, very similar to my solution */

// Add Strings          9/1/2021
/* 
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Constraints:
//    1 <= num1.length, num2.length <= 104
//    num1 and num2 consist of only digits.
//    num1 and num2 don't have any leading zeros except for the zero itself.

const topVotedAddStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = "";

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const digit1 = i < 0 ? 0 : num1.charAt(i) - "0";
    const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";
    const digitSum = digit1 + digit2 + carry;
    sum = `${digitSum % 10}${sum}`;
    carry = Math.floor(digitSum / 10);
  }

  return sum;
};
console.log(topVotedAddStrings("11", "123")); // 134
console.log(topVotedAddStrings("456", "77")); // 533
console.log(topVotedAddStrings("0", "0")); // 0

// Basically a very bare-bones addition
// Even the carry has to be taken into account */

// Number of Segments in a String         9/2/2021
/* 
// You are given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

// Constraints:
//    0 <= s.length <= 300
//    s consists of lower-case and upper-case English letters, digits or one of the following characters "!@#$%^&*()_+-=',.:".
//    The only space character in s is ' '.

const countSegments = function (s) {
  s = s.split(/\s+/g).filter((word) => word !== "");
  return s.length > 0 ? s.length : 0;
};
console.log(countSegments("Hello, my name is John")); // 5
console.log(countSegments("Hello")); // 1
console.log(countSegments("love live! mu'sic forever")); // 4
console.log(countSegments("")); // 0
console.log(countSegments("        ")); // 0

// "          " got me on first submission
// filtering out all empty strings did the trick

// Decent runtime & memory usage

const topVotedCountSegments = function (s) {
  return s.split(" ").filter(Boolean).length;
};
console.log(topVotedCountSegments("Hello, my name is John")); // 5
console.log(topVotedCountSegments("Hello")); // 1
console.log(topVotedCountSegments("love live! mu'sic forever")); // 4
console.log(topVotedCountSegments("")); // 0
console.log(topVotedCountSegments("        ")); // 0

// First time seeing .filter(Boolean)

// "The filter(Boolean) step does the following:
//    - Passes each item in the array to the Boolean() object
//    - The Boolean() object coerces each item to true or false depending on whether it's truthy or falsy
//    - If the item is truthy, we keep it"

// Clean trick to keep in mind! */

// Arranging Coins          9/3/2021
/* 
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// Example 1:
//    Input: n = 5
//    Output: 2
//  Explanation: Because the 3rd row is incomplete, we return 2.
//    *
//    **
//    **_

// Example 2:
//    Input: n = 8
//    Output: 3
//  Explanation: Because the 4th row is incomplete, we return 3.

// Constraints:
//    1 <= n <= 231 - 1

const arrangeCoins = function (n) {
  let rows = 0;
  while (n > 0) {
    rows++;
    n -= rows;
  }
  return n === 0 ? rows : --rows;
};
console.log(arrangeCoins(1)); // 1
console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3

// Simple and logical
// Better runtime & less memory usage than most

// Top voted is identical to my solution */

// Find All Numbers Disappeared in an Array         9/4/2021
/* 
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Constraints:
//    n == nums.length
//    1 <= n <= 105
//    1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

const findDisappearedNumbers = function (nums) {
  let numsUnique = new Set(nums);
  let ans = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!numsUnique.has(i)) ans.push(i);
  }
  return ans;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]
console.log(findDisappearedNumbers([1, 1])); // [2]

// Very OK code, nothing special
// Great situation to use Sets
 */

// Minimum Moves to Equal Array Elements          9/5/2021
/* 
// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment n - 1 elements of the array by 1.

// Example 1:
//    Input: nums = [1,2,3]
//    Output: 3
//  Explanation: Only three moves are needed (remember each move increments two elements):
//  [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

// Example 2:
//    Input: nums = [1,1,1]
//    Output: 0

// Constraints:
//    n == nums.length
//    1 <= nums.length <= 105
//    -109 <= nums[i] <= 109
//    The answer is guaranteed to fit in a 32-bit integer.

const topVotedMinMoves = function (nums) {
  if (nums == null || nums.length <= 1) return 0;
  let min = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    min = Math.min(min, nums[i]);
  }
  return sum - min * nums.length;
};
console.log(topVotedMinMoves([1, 2, 3])); // 3
console.log(topVotedMinMoves([1, 1, 1])); // 0

// Couldn't figure out the logic on this one
// Top voted describes as follows:

// "Thinking:
//    This problem can be reversed to think.
//    Add 1 to n-1 elements according to the intention of the question.
//    In fact, we can think of it as subtracting 1 from the remainder.
//      Add：[1,2,3] => [2,3,3] => [3,4,3] => [4,4,4]
//      Subtracted：[1,2,3] =>  [1,2,2] => [1,1,2] => [1,1,1]
//    ↑ Find the smallest element first, and find the sum of the differences between all elements and the smallest element,
//    which is the minimum  moves." */

// Assign Cookies         9/6/2021
/* 
// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

// Example 1:
//    Input: g = [1,2,3], s = [1,1]
//    Output: 1
//    Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
//    And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
//    You need to output 1.

// Example 2:
//    Input: g = [1,2], s = [1,2,3]
//    Output: 2
//    Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
//    You have 3 cookies and their sizes are big enough to gratify all of the children,
//    You need to output 2.

// Constraints:
//    1 <= g.length <= 3 * 104
//    0 <= s.length <= 3 * 104
//    1 <= g[i], s[j] <= 231 - 1

const findContentChildren = function (g, s) {
  const numChildren = g.length;
  for (let i = g.length; i > 0; i--) {
    if (
      s.reduce((acc, cur) => (acc += cur)) >=
      g.reduce((acc, cur) => (acc += cur))
    )
      return Math.max(...g);
    else {
      g = g.filter((x) => x != Math.max(...g));
    }
  }
  return 0;
};
console.log(findContentChildren([1, 2, 3], [1, 1])); // 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // 2

// [1,2,3], [3] didnt work with my solution

const topVotedFindContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let j = 0,
    res = 0;
  for (let num of s) {
    if (num >= g[j]) res++, j++;
  }
  return res;
};

// Sorts both arrays then finds the lowest possible answer

// Not a big fan of this question... */

// Repeated Substring Pattern         9/7/2021
/* 
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:
//    Input: s = "abab"
//    Output: true
//  Explanation: It is the substring "ab" twice.

// Example 2:
//    Input: s = "aba"
//    Output: false

// Example 3:
//    Input: s = "abcabcabcabc"
//    Output: true
//  Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

// Constraints:
//    1 <= s.length <= 104
//    s consists of lowercase English letters.

const repeatedSubstringPattern = function (s) {
  for (let i = 1; i <= s.length / 2; i++) {
    const cur = s.slice(0, i);
    if (s.match(new RegExp(cur, "g")).length == s.length / i) return true;
  }
  return false;
};
console.log(repeatedSubstringPattern("abab")); // true
console.log(repeatedSubstringPattern("aba")); // false
console.log(repeatedSubstringPattern("abcabcabcabc")); // true

// Not the fastest, but works.

const topVotedRepeatedSubstringPattern = function (s) {
  return s.repeat(2).slice(1, -1).includes(s);
};
console.log(topVotedRepeatedSubstringPattern("abab")); // true
console.log(topVotedRepeatedSubstringPattern("aba")); // false
console.log(topVotedRepeatedSubstringPattern("abcabcabcabc")); // true

// Damn that's clever
// First time seeing .repeat used in this way */

// Hamming Distance         9/8/2021
/* 
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

// Example 1:
//    Input: x = 1, y = 4
//    Output: 2
//  Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

// Example 2:
//    Input: x = 3, y = 1
//    Output: 1
//  Explanation:
// 3   (0 0 1 1)
// 1   (0 0 0 1)
//          ↑

// Constraints:
//    0 <= x, y <= 231 - 1

const hammingDistance = function (x, y) {
  const xBin = x.toString(2);
  const yBin = y.toString(2);
  return x > y ? xBin.length - yBin.length : yBin.length - xBin.length;
};
console.log(hammingDistance(1, 4)); // 2
console.log(hammingDistance(3, 1)); // 1
console.log(hammingDistance(93, 73)); // 2

// 93, 73 doesn't work in my solution

const topVotedHammingDistance = function (x, y) {
  return (x ^ y).toString(2).replace(/0/g, "").length;
};
console.log(topVotedHammingDistance(1, 4)); // 2
console.log(topVotedHammingDistance(3, 1)); // 1
console.log(topVotedHammingDistance(93, 73)); // 2

// "(x^y):
// Does XOR between the two numbers to turn all the differing bits into 1's and the same bits into 0's"

// Smart. */

// Island Perimeter         9/9/2021
/* 
// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells)

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example 1:
//    Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
//    Output: 16
//  Explanation: The perimeter is the 16 yellow stripes as seen https://assets.leetcode.com/uploads/2018/10/12/island.png

// Example 2:
//    Input: grid = [[1]]
//    Output: 4

// Example 3:
//    Input: grid = [[1,0]]
//    Output: 4

// Constraints:
//    row == grid.length
//    col == grid[i].length
//    1 <= row, col <= 100
//    grid[i][j] is 0 or 1.

const topVotedIslandPerimeter = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  var perimeter = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!grid[row][col]) continue;

      perimeter += 4;
      // abstract the number of adjacent islands
      if (row > 0 && grid[row - 1][col]) perimeter--;
      if (row > 0 && grid[row][col - 1]) perimeter--;
      if (row < rows - 1 && grid[row + 1][col]) perimeter--;
      if (col < cols - 1 && grid[row][col + 1]) perimeter--;
    }
  }

  return perimeter;
};
console.log(
  topVotedIslandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
); // 16
console.log(topVotedIslandPerimeter([[1]])); // 4
console.log(topVotedIslandPerimeter([[1, 0]])); // 4

// Couldn't figure it out, so opted to save time and study the solution instead

// I expected some clever solution, but really it's very bare bones
// If the current box contains a 1, perimeter + 4
// Then checks surrounding boxes and substracts accordingly

const islandPerimeter = function (grid) {
  let numRows = grid.length; // num of rows
  let numCols = grid[0].length; // num of cols

  let perimeter = 0;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (!grid[i][j]) continue;
      perimeter += 4;

      if (i > 0 && grid[i - 1][j]) perimeter--; // above
      if (j > 0 && grid[i][j - 1]) perimeter--; // left
      if (j < numCols - 1 && grid[i][j + 1]) perimeter--; // right
      if (i < numRows - 1 && grid[i + 1][j]) perimeter--; // below
    }
  }

  return perimeter;
};
console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
); // 16
console.log(islandPerimeter([[1]])); // 4
console.log(islandPerimeter([[1, 0]])); // 4

// OK, makes sense */

// Number Complement          9/10/2021
/* 
// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

// Example 1:
//    Input: num = 5
//    Output: 2
//  Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// Example 2:
//    Input: num = 1
//    Output: 0
//  Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

// Constraints:
//    1 <= num < 231

const findComplement = function (num) {
  return +BigInt(
    `0b${num
      .toString(2)
      .split("")
      .reduce((acc, cur) => (cur == 1 ? (acc += 0) : (acc += 1)), "")}`
  ).toString(10);
};
console.log(findComplement(5)); // 2
console.log(findComplement(1)); // 0

// Got a one-liner
// Ok runtime, great memory usage

// "Add Binary 8/10/2021" challenge has been my go-to for converting binary

const topVotedFindComplement = function (num) {
  let d = 2;
  while (d <= num) {
    d *= 2;
  }
  return d - num - 1;
};
console.log(topVotedFindComplement(5)); // 2
console.log(topVotedFindComplement(1)); // 0

// "Let's look to rundom binary number, for example: 10011.
// Reverse of this number = 01100.
// Look, it's equal: 100000 - 10011 - 1.
// Idea: find the minimum nearest number greater than num (power of 2)"

// Clever trick */

// License Key Formatting         9/11/2021
/* 
// You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

// We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

// Return the reformatted license key.

// Example 1:
//    Input: s = "5F3Z-2e-9-w", k = 4
//    Output: "5F3Z-2E9W"
//  Explanation: The string s has been split into two parts, each part has 4 characters.
// Note that the two extra dashes are not needed and can be removed.

// Example 2:
//    Input: s = "2-5g-3-J", k = 2
//    Output: "2-5G-3J"
//  Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.

// Constraints:
//    1 <= s.length <= 105
//    s consists of English letters, digits, and dashes '-'.
//    1 <= k <=10^4

const licenseKeyFormatting = function (s, k) {
  s = s.toUpperCase().replaceAll(`-`, ``);
  let ans = s.length % k > 0 ? s.slice(0, s.length % k) + `-` : ``;
  let count = 0;
  for (let i = s.length % k; i < s.length; i++) {
    if (count === k) {
      count = 0;
      ans += `-`;
    }
    ans += s.substring(i, i + 1);
    count++;
  }
  return ans;
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); // 5F3Z-2E9W
console.log(licenseKeyFormatting("335F3Z-2e-9-w", 4)); // 33-5F3Z-2E9W
console.log(licenseKeyFormatting("2-5g-3-J", 2)); // 2-5G-3J

// Not my proudest solution, too bulky

const topVotedLicenseKeyFormatting = function (s, k) {
  const newStr = s.replaceAll(`-`, ``).toUpperCase();
  let arr = newStr.split(``);

  for (let i = arr.length - 1 - k; i >= 0; i -= k) {
    arr[i] = arr[i] + `-`;
  }

  return arr.join(``);
};
console.log(topVotedLicenseKeyFormatting("5F3Z-2e-9-w", 4)); // 5F3Z-2E9W
console.log(topVotedLicenseKeyFormatting("335F3Z-2e-9-w", 4)); // 33-5F3Z-2E9W
console.log(topVotedLicenseKeyFormatting("2-5g-3-J", 2)); // 2-5G-3J
console.log(topVotedLicenseKeyFormatting("2", 2)); // 2

// I was stuck trying to do it with strings when I should've just converted to array

const myLicenseKeyFormatting = function (s, k) {
  const newStr = s.replaceAll(`-`, ``).toUpperCase();
  let arr = newStr.split(``);

  let count = arr.length % k;
  return arr.reduce((acc, cur) => {
    if (count === k) {
      acc += `-`;
      count = 0;
    }
    count++;
    return (acc += cur);
  }, ``);
};
console.log(``);
console.log(myLicenseKeyFormatting("5F3Z-2e-9-w", 4)); // 5F3Z-2E9W
console.log(myLicenseKeyFormatting("335F3Z-2e-9-w", 4)); // 33-5F3Z-2E9W
console.log(myLicenseKeyFormatting("2-5g-3-J", 2)); // 2-5G-3J
console.log(myLicenseKeyFormatting("2", 2)); // 2 */

// Max Consecutive Ones         9/12/2021
/* 
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Constraints:
//    1 <= nums.length <= 105
//    nums[i] is either 0 or 1.

const findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let cur = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i]) cur++;
    else {
      if (cur > max) max = cur;
      cur = 0;
    }
  }
  return max;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2

// Nothing fancy */

// Construct the Rectangle          9/13/2021
/* 
// A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

// The area of the rectangular web page you designed must equal to the given target area.
// The width W should not be larger than the length L, which means L >= W.
// The difference between length L and width W should be as small as possible.
// Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.

// Example 1:
//    Input: area = 4
//    Output: [2,2]
//  Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
// But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.

// Example 2:
//    Input: area = 37
//    Output: [37,1]

// Example 3:
//    Input: area = 122122
//    Output: [427,286]

// Constraints:
//    1 <= area <= 107

const topVotedConstructRectangle = function (area) {
  let w = parseInt(Math.sqrt(area));
  while (!Number.isInteger(area / w)) w--;
  return [area / w, w];
};
console.log(topVotedConstructRectangle(4)); // [2,2]
console.log(topVotedConstructRectangle(37)); // [37,1]
console.log(topVotedConstructRectangle(122122)); // [427,286]

// Opted to study top voted

// Basically, this code cuts down the middle then works down from there
// The first integer found breaks the loop and gives us our answer */

// Teemo Attacking          9/14/2021
/* 
// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

// Return the total number of seconds that Ashe is poisoned.

// Example 1:
//    Input: timeSeries = [1,4], duration = 2
//    Output: 4
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
// Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.

// Example 2:
//    Input: timeSeries = [1,2], duration = 2
//    Output: 3
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
// Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.

// Constraints:
//    1 <= timeSeries.length <= 104
//    0 <= timeSeries[i], duration <= 107
//    timeSeries is sorted in non-decreasing order.

const findPoisonedDuration = function (t, d) {
  return t.reverse().reduce((acc, cur, i, arr) => {
    acc += d;
    if (cur <= arr[i + 1] + d) acc -= arr[i + 1] + d - cur;
    return acc;
  }, 0);
};
console.log(findPoisonedDuration([1, 4], 2)); // 4
console.log(findPoisonedDuration([1, 2], 2)); // 3
console.log(findPoisonedDuration([1, 2, 5, 10], 2)); // 7

// Faster runtime than 75%

const findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) return 0;
  let res = duration;
  for (let i = 1; i < timeSeries.length; i++) {
    res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
  }
  return res;
};

// Good to have a guard clause for empty timeSeries array */

// Next Greater Element I         9/15/2021
/* 
// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:
//    Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
//    Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:
//    Input: nums1 = [2,4], nums2 = [1,2,3,4]
//    Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// Constraints:
//    1 <= nums1.length <= nums2.length <= 1000
//    0 <= nums1[i], nums2[i] <= 104
//    All integers in nums1 and nums2 are unique.
//    All the integers of nums1 also appear in nums2.

// Follow up: Could you find an O(nums1.length + nums2.length) solution?

const nextGreaterElement = function (nums1, nums2) {
  return nums1.map((cur, i) => {
    const j = nums2.indexOf(Math.min(...nums2.filter((x) => x > cur)));
    return j > i ? j : -1;
  });
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]

// As close as I could get
// 2nd test case doesnt work

const topVotedNextGreaterElement = function (findNums, nums) {
  return findNums.map((n) => {
    let found = nums.indexOf(n);

    if (found !== -1) {
      // find the next greater element's index
      while (nums[++found] < n);
      // -1 if not found
      if (found >= nums.length) found = -1;
      else found = nums[found];
    }

    return found;
  });
};
console.log(topVotedNextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(topVotedNextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1] */

// Keyboard Row         9/16/2021
/* 
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Constraints:
//    1 <= words.length <= 20
//    1 <= words[i].length <= 100
//    words[i] consists of English letters (both lowercase and uppercase).

const findWords = function (words) {
  const rows = ["qwertyuiopQWERTYUIOP", "asdfghjklASDFGHJKL", "zxcvbnmZXCVBNM"];
  let ans = [];
  words.forEach((word) => {
    for (let i = 0; i < rows.length; i++) {
      if (!rows[i].includes(word.substring(0, 1))) continue;
      for (let j = 1; j <= word.length; j++) {
        if (!rows[i].includes(word.substring(j - 1, j))) break;
        if (j == word.length) ans.push(word);
      }
      break;
    }
  });
  return ans;
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska","Dad"]
console.log(findWords(["omk"])); // []
console.log(findWords(["adsdf", "sfd"])); // ["adsdf","sfd"]
console.log(findWords(["a", "b"])); // ["a","s"]
console.log(findWords(["abdfs", "cccd", "a", "qwwewm"])); // ["a"]

// Not my cleanest, but lower memory usage than most

const topVotedFindWords = function (words) {
  return words.filter((w) => {
    // remove word from array if it fails matching all three rows
    if (
      !/^[qwertyuiop]*$/i.test(w) &&
      !/^[asdfghjkl]*$/i.test(w) &&
      !/^[zxcvbnm]*$/i.test(w)
    )
      return false;

    return true;
  });
};
console.log(topVotedFindWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska","Dad"]
console.log(topVotedFindWords(["omk"])); // []
console.log(topVotedFindWords(["adsdf", "sfd"])); // ["adsdf","sfd"]
console.log(topVotedFindWords(["a", "b"])); // ["a","s"]
console.log(topVotedFindWords(["abdfs", "cccd", "a", "qwwewm"])); // ["a"]

// Of course I should've used filter!
// VERY nice solution */

// Base 7         9/17/2021
/* 
// Given an integer num, return a string of its base 7 representation.

// Constraints:
//    -107 <= num <= 107

const convertToBase7 = function (num) {
  return num.toString(7);
};
console.log(convertToBase7(100)); // 202
console.log(convertToBase7(-7)); // -10

// That was probably the easiest one to date
// Identical to top voted */

// Relative Ranks         9/18/2021
/* 
// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Example 1:
//    Input: score = [5,4,3,2,1]
//    Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// Example 2:
//    Input: score = [10,3,8,9,4]
//    Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

// Constraints:
//    n == score.length
//    1 <= n <= 104
//    0 <= score[i] <= 106
//     All the values in score are unique.

const findRelativeRanks = function (score) {
  for (let i = 0; i < 3; i++) {
    let curMax = score.indexOf(Math.max(...score.filter((x) => /\d/.test(x))));

    if (i == 0) score[curMax] = "Gold Medal";
    if (i == 1) score[curMax] = "Silver Medal";
    if (i == 2) score[curMax] = "Bronze Medal";
  }

  score
    .filter((x) => /\d/.test(x))
    .sort((a, b) => b - a)
    .forEach((num, i) => {
      score[score.indexOf(num)] = `${i + 4}`;
    });

  return score;
};
console.log(findRelativeRanks([5, 4, 3, 2, 1])); // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10, 3, 8, 9, 4])); // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

// Definitely could've solved this using 1 For loop

const topVotedFindRelativeRanks = function (nums) {
  let ranks = nums.slice(0).sort((a, b) => b - a);

  return nums.map((num, i) => {
    if (num === ranks[0]) return "Gold Medal";
    else if (num === ranks[1]) return "Silver Medal";
    else if (num === ranks[2]) return "Bronze Medal";
    else return (ranks.indexOf(num) + 1).toString();
  });
};
console.log(topVotedFindRelativeRanks([5, 4, 3, 2, 1])); // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(topVotedFindRelativeRanks([10, 3, 8, 9, 4])); // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

// This makes so much more sense... */

// Perfect Number         9/19/2021
/* 
// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

// Example 1:
//    Input: num = 28
//    Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.

// Constraints:
//    1 <= num <= 108

const checkPerfectNumber = function (num) {
  let divisors = 0;
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) divisors += i;
  }
  return divisors === num;
};
console.log(checkPerfectNumber(28)); // true
console.log(checkPerfectNumber(6)); // true
console.log(checkPerfectNumber(496)); // true
console.log(checkPerfectNumber(8128)); // true
console.log(checkPerfectNumber(2)); // false

// Great memory usage, not best runtime

const topVotedCheckPerfectNumber = function (num) {
  if (num <= 1) {
    return false;
  }
  let divisorsSum = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      divisorsSum += i + num / i;
    }
  }

  return divisorsSum === 2 * num ? true : false;
};
console.log(checkPerfectNumber(28)); // true
console.log(checkPerfectNumber(6)); // true
console.log(checkPerfectNumber(496)); // true
console.log(checkPerfectNumber(8128)); // true
console.log(checkPerfectNumber(2)); // false

// Great use of guard clause
// Better to use Math.floor(Math.sqrt(num)) to start the loop than my num/2

// All minor adjustments for better runtime */

// Fibonacci Number           9/20/2021
/* 
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
//    Input: n = 2
//    Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
//    Input: n = 3
//    Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
//    Input: n = 4
//    Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Constraints:
//    0 <= n <= 30

const topVotedFib = function (n) {
  let sqrt5 = Math.sqrt(5);
  return (
    (Math.pow(1 + sqrt5, n) - Math.pow(1 - sqrt5, n)) / Math.pow(2, n) / sqrt5
  );
};
console.log(topVotedFib(2));
console.log(topVotedFib(3));
console.log(topVotedFib(4));

// Binet's formula for the n'th Fibonacci number:
// https://wikimedia.org/api/rest_v1/media/math/render/svg/57459135cb5773799fab490a49311b3725df94fd

// This formula can compute the solution in O(1) time as well as O(1) space. */

// Detect Capital         9/21/2021
/* 
// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:
//    Input: word = "USA"
//    Output: true

// Example 2:
//    Input: word = "FlaG"
//    Output: false

// Constraints:
//    1 <= word.length <= 100
//    word consists of lowercase and uppercase English letters.

const detectCapitalUse = function (word) {
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word) ? true : false;
};
console.log(detectCapitalUse("USA")); // true
console.log(detectCapitalUse("FlaG")); // false
console.log(detectCapitalUse("leetcode")); // true
console.log(detectCapitalUse("Google")); // true

// Simple and better than most
// Same as top voted */

// Longest Uncommon Subsequence I         9/22/2021
/* 
// Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If the longest uncommon subsequence does not exist, return -1.

// An uncommon subsequence between two strings is a string that is a subsequence of one but not the other.

// A subsequence of a string s is a string that can be obtained after deleting any number of characters from s.

// For example, "abc" is a subsequence of "aebdc" because you can delete the underlined characters in "aebdc" to get "abc". Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).

// Example 1:
//    Input: a = "aba", b = "cdc"
//    Output: 3
// Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
// Note that "cdc" is also a longest uncommon subsequence.

// Example 2:
//    Input: a = "aaa", b = "bbb"
//    Output: 3
// Explanation: The longest uncommon subsequences are "aaa" and "bbb".

// Example 3:
//    Input: a = "aaa", b = "aaa"
//    Output: -1
// Explanation: Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a.

// Constraints:
//    1 <= a.length, b.length <= 100
//    a and b consist of lower-case English letters.

const topVotedFindLUSlength = function (a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
};
console.log(topVotedFindLUSlength("aba", "cdc")); // 3
console.log(topVotedFindLUSlength("aaa", "bbb")); // 3
console.log(topVotedFindLUSlength("aaa", "aaa")); // -1

// Took top voted and turned into one-liner

// I see. As soon as they're not directly equal to one another, the longest input is immediately the longest uncommon substring */

// Reverse String II          9/23/2021
/* 
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

// Constraints:
//    1 <= s.length <= 104
//    s consists of only lowercase English letters.
//    1 <= k <= 104

const reverseStr = function (s, k) {
  let ans = "";
  let count = k;
  for (let i = 0; i < s.length; i++, count++) {
    if (count == k) {
      ans += [...s.substring(i, i + k)].reverse().join(``);
      i += k;
      count = 0;
    }
    ans += s.substring(i, i + 1);
  }
  return ans;
};
console.log(reverseStr("abcdefg", 2)); // "bacdfeg"
console.log(reverseStr("abcd", 2)); // "bacd"

// Not terrible, faster than most

const topVotedReverseStr = function (s, k) {
  if (k > s.length) return s.split("").reverse().join("");

  const split = s.split("");

  // reverse the segment and put it back
  for (let i = 0; i < s.length; i += 2 * k) {
    const reverse = split.splice(i, k).reverse();
    split.splice(i, 0, ...reverse);
  }

  return split.join("");
};
console.log(topVotedReverseStr("abcdefg", 2)); // "bacdfeg"
console.log(topVotedReverseStr("abcd", 2)); // "bacd"

// Clever for loop increments to skip middle portions where letters dont need to be reversed
// The use of arrays allows him to avoid variables like ans & count

// Great use of the guard clause... I always forget those

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Day 100!
// Thought I'd share some thoughts on my Daily Coding Challenges:

// Over the past few months, these challenges along with Jonas Schmedtmann's Udemy courses have drastically improved my coding ability. Looking back at even my first challenges on Codewars, I remember having to google the simplest things that now seem so obvious. Common methods like .map & .reduce were so foreign and arrow notation didn't make sense.

// Even though I'm doing easy challenges nowadays and limiting myself to 30 mins so I don't spend all day on this, It's more about taking the time daily. The effort really keeps the ball rolling, and whether I solve the challenge or study a top voted one, I take something away from every challenge.

// Thoughts going forward:
// I haven't missed a singular day in the past 100! This is insane to me and although I'll do my best to keep the streak going, there may come a day where I miss a git push. I'm going camping in roughly a week, we'll see if they have data out there... lol

// Here's to 100 more days 🍻 */

// Student Attendance Record I          9/24/2021
/* 
// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

// Constraints:
//    1 <= s.length <= 1000
//    s[i] is either 'A', 'L', or 'P'

const checkRecord = function (s) {
  let attendance = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== `L`) attendance[`L`] = 0;
    attendance[s[i]] ? attendance[s[i]]++ : (attendance[s[i]] = 1);
    if (attendance[`A`] > 1 || attendance[`L`] == 3) return false;
  }
  return true;
};
console.log(checkRecord("PPALLP")); // true
console.log(checkRecord("PPALLL")); // false
console.log(checkRecord("AA")); // false

// Better runtime & memory usage than 80%

const topVotedCheckRecord = function (s) {
  return !/^.*(A.*A|L{3,}).*$/.test(s);
};
console.log(topVotedCheckRecord("PPALLP")); // true
console.log(topVotedCheckRecord("PPALLL")); // false
console.log(topVotedCheckRecord("AA")); // false

// Definitely a good problem for Regex */

// Reverse Words in a String III          9/25/2021
/* 
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
//    Input: s = "Let's take LeetCode contest"
//    Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
//    Input: s = "God Ding"
//    Output: "doG gniD"

// Constraints:
//    1 <= s.length <= 5 * 104
//    s contains printable ASCII characters.
//    s does not contain any leading or trailing spaces.
//    There is at least one word in s.
//    All the words in s are separated by a single space.

const reverseWords = function (s) {
  return s
    .split(` `)
    .reduce((acc, word) => (acc += `${[...word].reverse().join(``)} `), ``)
    .trim();
};
console.log(reverseWords(`Let's take LeetCode contest`)); // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords(`God Ding`)); // "doG gniD"

// Pretty ok
// Better runtime/memory usage than 60%

// Similar to top voted except they use .map */

// Array Partition I          9/26/2021
/* 
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Example 1:
//    Input: nums = [1,4,3,2]
//    Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
//    1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
//    2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
//    3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// Example 2:
//    Input: nums = [6,2,6,5,1,2]
//    Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

// Constraints:
//    1 <= n <= 104
//    nums.length == 2 * n
//    -104 <= nums[i] <= 104

const arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = [];
  while (nums.length > 0) {
    ans.push([
      ...nums.splice(nums.length - 1, nums.length),
      ...nums.splice(nums.length - 1, nums.length),
    ]);
  }
  return ans.reduce((acc, cur) => (acc += Math.min(cur[0], cur[1])), 0);
};
console.log(arrayPairSum([1, 4, 3, 2])); // 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // 9

// Not the greatest runtime, but gets the job done

const topVotedArrayPairSum = function (nums) {
  // sort and sum up the minimum of the pairs
  return nums
    .sort((a, b) => a - b)
    .reduce((sum, cur, i) => (i % 2 === 0 ? (sum += cur) : sum), 0);
};
console.log(topVotedArrayPairSum([1, 4, 3, 2])); // 4
console.log(topVotedArrayPairSum([6, 2, 6, 5, 1, 2])); // 9

// Ah, similar to what I did, but all under a single .reduce
// Very clean */

// Distribute Candies         9/27/2021
/* 
// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Example 1:
//    Input: candyType = [1,1,2,2,3,3]
//    Output: 3
// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

// Example 2:
//    Input: candyType = [1,1,2,3]
//    Output: 2
// Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.

// Example 3:
//    Input: candyType = [6,6,6,6]
//    Output: 1
// Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

// Constraints:
//    n == candyType.length
//    2 <= n <= 104
//    n is even.
//    -105 <= candyType[i] <= 105

const distributeCandies = function (candyType) {
  let types = new Set(candyType);
  return types.size < candyType.length / 2 ? types.size : candyType.length / 2;
};
console.log(distributeCandies([1, 1, 2, 2, 3, 3])); // 3
console.log(distributeCandies([1, 1, 2, 3])); // 2
console.log(distributeCandies([6, 6, 6, 6])); //1

// Better runtime than 99.75% and less memory usage than 90%

const topVotedDistributeCandies = function (candies) {
  return Math.min(new Set(candies).size, candies.length / 2);
};
console.log(topVotedDistributeCandies([1, 1, 2, 2, 3, 3])); // 3
console.log(topVotedDistributeCandies([1, 1, 2, 3])); // 2
console.log(topVotedDistributeCandies([6, 6, 6, 6])); //1

// Top voted fit the same logic in a one-liner */

// Longest Harmonious Subsequence         9/28/2021
/* 
// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
//    Input: nums = [1,3,2,2,5,2,3,7]
//    Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

// Constraints:
//    1 <= nums.length <= 2 * 104
//    -109 <= nums[i] <= 109

const topVotedFindLHS = function (nums) {
  let map = {},
    res = 0;
  for (let n of nums) map[n] = ~~map[n] + 1; // map[n] ? map[n]++ : (map[n] = 1);
  for (let n in map) if (map[+n + 1]) res = Math.max(res, map[n] + map[+n + 1]);
  return res;
};
console.log(topVotedFindLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(topVotedFindLHS([1, 2, 3, 4])); // 2
console.log(topVotedFindLHS([1, 1, 1, 1])); // 0

// First time seeing ~~ operator, serves to fill object by counting ints in this scenario
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT

// Personally prefer the more readable "map[n] ? map[n]++ : (map[n] = 1);" but online suggests better runtime.

// The 2nd for loop checks if there's an object element that's +1
// If so, add them together and compare to the current leader (res), returning largest num */

// Range Addition II          9/29/2021
/* 
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix after performing all the operations.

// Example 1: https://assets.leetcode.com/uploads/2020/10/02/ex1.jpg
//    Input: m = 3, n = 3, ops = [[2,2],[3,3]]
//    Output: 4
// Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.

// Example 2:
//    Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
//    Output: 4

// Example 3:
//    Input: m = 3, n = 3, ops = []
//    Output: 9

// Constraints:
//    1 <= m, n <= 4 * 104
//    0 <= ops.length <= 104
//    ops[i].length == 2
//    1 <= ai <= m
//    1 <= bi <= n

const maxCount = function (m, n, ops) {
  if (ops.length < 1) return m * n;
  let map = {};
  for (let add of ops) {
    for (let i = 1; i <= m; i++) {
      if (i > add[0]) continue;
      for (let j = 1; j <= n; j++) {
        if (j > add[1]) continue;
        map[`${i}${j}`] = ~~map[`${i}${j}`] + 1;
      }
    }
  }
  return Object.values(map).filter((x) => x == Math.max(...Object.values(map)))
    .length;
};
// prettier-ignore
console.log(maxCount(3, 3, [[2, 2],[3, 3]])); // 4
// prettier-ignore
console.log(maxCount(3, 3, [[2, 2],[3, 3],[3, 3],[3, 3],[2, 2],[3, 3],[3, 3],[3, 3],[2, 2],[3, 3],[3, 3],[3, 3],])); // 4
console.log(maxCount(3, 3, [])); // 9

// Works but couldn't meet runtime expectations
// Probably requires single loop

const topVotedMaxCount = function (m, n, ops) {
  let minRow = m;
  let minCol = n;

  // find overlap operator
  for (const op of ops) {
    minRow = Math.min(minRow, op[0]);
    minCol = Math.min(minCol, op[1]);
  }

  return minRow * minCol;
};
// prettier-ignore
console.log(topVotedMaxCount(3, 3, [[2, 2],[3, 3]])); // 4
// prettier-ignore
console.log(topVotedMaxCount(3, 3, [[2, 2],[3, 3],[3, 3],[3, 3],[2, 2],[3, 3],[3, 3],[3, 3],[2, 2],[3, 3],[3, 3],[3, 3],])); // 4
console.log(topVotedMaxCount(3, 3, [])); // 9

// I struggled to understand this solution at first, but seems I didn't fully grasp the prompt

// The fact that the row and col of ops must originate from the top-left corner of the grid means the largest possible solution will always be the smallest row & col provided

// For example, I was expecting ops to increment the center of the grid, which is impossible */

// Minimum Index Sum of Two Lists         9/30/2021
/* 
// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

// Example 1:
//    Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
//    Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// Example 2:
//    Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
//    Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

// Constraints:
//    1 <= list1.length, list2.length <= 1000
//    1 <= list1[i].length, list2[i].length <= 30
//    list1[i] and list2[i] consist of spaces ' ' and English letters.
//    All the stings of list1 are unique.
//    All the stings of list2 are unique.

const findRestaurant = function (list1, list2) {
  const l1 = new Set(list1);

  let shared = {};
  for (let resto of list2) {
    if (l1.has(resto))
      shared[resto] = list1.indexOf(resto) + list2.indexOf(resto);
  }
  if (Object.keys(shared).length == 1) return Object.keys(shared);

  let curLeader = 1001;
  let ans = [];

  for (let resto in shared) {
    if (shared[resto] == curLeader) {
      ans.push(resto);
      continue;
    }
    if (shared[resto] < curLeader) {
      curLeader = shared[resto];
      ans = [];
      ans.push(resto);
    }
  }
  return ans;
};
console.log(findRestaurant(["KFC"], ["KFC"])); // ["KFC"]
// prettier-ignore
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],
["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])); // ["Shogun"]
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
); // ["Shogun"]
// prettier-ignore
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], 
["KFC","Burger King","Tapioca Express","Shogun"])); // ["KFC","Burger King","Tapioca Express","Shogun"]

// As far as I could get. Doesn't work

function topVotedFindRestaurant(list1, list2) {
  const map = new Map();
  let ret = [];
  let min = Infinity;
  for (let i = 0; i < list1.length; ++i) {
    map.set(list1[i], i);
  }
  for (let i = 0; i < list2.length; ++i) {
    if (map.has(list2[i])) {
      let index1 = map.get(list2[i]);
      let index2 = i;
      ret.push({ val: list2[i], index: index1 + index2 });
      min = Math.min(min, index1 + index2);
    }
  }
  // Basically ret should be map as well instead of array
  // so we don't have to filter it (it will be faster).
  return ret.filter((item) => item.index === min).map((item) => item.val);
} */

// Can Place Flowers            10/1/2021
/* 
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Example 1:
//    Input: flowerbed = [1,0,0,0,1], n = 1
//    Output: true

// Example 2:
//    Input: flowerbed = [1,0,0,0,1], n = 2
//    Output: false

// Constraints:
//    1 <= flowerbed.length <= 2 * 104
//    flowerbed[i] is 0 or 1.
//    There are no two adjacent flowers in flowerbed.
//    0 <= n <= flowerbed.length

const topVotedCanPlaceFlowers = function (flowerbed, n) {
  let current = 0;
  const size = flowerbed.length;
  for (var i = 0; i <= size; i++) {
    if (i < size && flowerbed[i] == 0) {
      current++;
      if (i == 0) current++;
      if (i == size - 1) current++;
    } else {
      n -= Math.trunc((current - 1) / 2);
      if (n <= 0) return true;
      current = 0;
    }
  }
  return false;
};
console.log(topVotedCanPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(topVotedCanPlaceFlowers([1, 0, 0, 0, 1], 2)); // false */

// Maximum Product of Three Numbers         10/3/2021
/* 
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Constraints:
//    3 <= nums.length <= 104
//    -1000 <= nums[i] <= 1000

const topVotedMaximumProduct = function (nums) {
  let sorted = nums.sort((a, b) => a - b),
    len = nums.length;
  let res1 = sorted[0] * sorted[1] * sorted[len - 1],
    res2 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  return Math.max(res1, res2);
};
console.log(topVotedMaximumProduct([1, 2, 3])); // 6
console.log(topVotedMaximumProduct([1, 2, 3, 4])); // 24
console.log(topVotedMaximumProduct([-1, -2, -3])); // -6

// Clean solution
// Sorts, multiplies maxes and negatives, then compares both and returns largest

// Unfortunately had to miss yesterday's coding challenge
// As predicted on Day 100, I went camping and had no signal whatsoever lol

// Oh well, the point of these challenges is to code actively, the streak is just a byproduct. Let's start another! */

// Maximum Average Subarray I         10/4/2021
/* 
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:
//    Input: nums = [1,12,-5,-6,50,3], k = 4
//    Output: 12.75000
//    Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Constraints:
//    n == nums.length
//    1 <= k <= n <= 105
//    -104 <= nums[i] <= 104

const topVotedFindMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    max = Math.max(max, sum);
  }

  return max / k;
};
console.log(topVotedFindMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(topVotedFindMaxAverage([5], 1)); // 5.0

// Unfortunately don't have much time today so will be studying solution

// Basically adds up the first k elements, removes first/adds next, and compares
// If the new sequence is larger, a new max is set
// Once the loop is complete, return max/k */

// Set Mismatch         10/5/2021
/* 
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Constraints:
//    2 <= nums.length <= 104
//    1 <= nums[i] <= 104

const topVotedFindErrorNums = function (nums) {
  let len = nums.length;
  // Formula to calculate sum of Airthmetic series
  let sum = (len * (len + 1)) / 2;
  // Now, just doing the other calculations required
  let s = 0,
    act = 0;
  let obj = {};
  for (let i of nums) {
    if (obj[i]) {
      act = i;
    } else {
      obj[i] = true;
      s += i;
    }
  }
  return [act, sum - s];
};
console.log(topVotedFindErrorNums([1, 2, 2, 4])); // [2,3]
console.log(topVotedFindErrorNums([1, 1])); // [1,2]
console.log(topVotedFindErrorNums([2, 2, 3])); // [2,1] */

// Robot Return to Origin         10/6/2021
/* 
// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

// Example 1:
//    Input: moves = "UD"
//    Output: true
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

// Constraints:
//    1 <= moves.length <= 2 * 104
//    moves only contains the characters 'U', 'D', 'L' and 'R'.

const judgeCircle = function (moves) {
  let h = 0,
    v = 0;
  for (let d of moves) {
    if (d == `R`) h++;
    if (d == `L`) h--;
    if (d == `U`) v++;
    if (d == `D`) v--;
  }
  return h == 0 && v == 0;
};
console.log(judgeCircle("UD")); // true
console.log(judgeCircle("LL")); // false
console.log(judgeCircle("RRDD")); // false
console.log(judgeCircle("LDRRLRUULR")); // false

// Easy read, very simple
// Same as top voted */

// Longest Continuous Increasing Subsequence          10/7/2021
/* 
// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

// Example 1:
//    Input: nums = [1,3,5,4,7]
//    Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.

// Example 2:
//    Input: nums = [2,2,2,2,2]
//    Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.

// Constraints:
//    1 <= nums.length <= 104
//    -109 <= nums[i] <= 109

const findLengthOfLCIS = function (nums) {
  if (nums.length == 1) return 1;

  let max = 0;
  return nums.reduce((acc, cur, i, arr) => {
    cur > arr[i - 1] ? max++ : (max = 1);
    return max > acc ? max : acc;
  }, 0);
};
console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); // 1

// Pretty ok, faster & better memory usage than 90%

// Top voted aren't as clean
// Keeping mine */

// Valid Palindrome II          10/8/2021
/*
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:
//    Input: s = "aba"
//    Output: true

// Example 2:
//    Input: s = "abca"
//    Output: true
// Explanation: You could delete the character 'c'.

// Example 3:
//    Input: s = "abc"
//    Output: false

// Constraints:
//    1 <= s.length <= 105
//    s consists of lowercase English letters.

const isPalindrome = (s, start, end) => {
  let l = start;
  let r = end;

  while (l < r) {
    if (s[l] !== s[r]) return [false, l, r];
    l++;
    r--;
  }

  return [true, l, r];
};

const validPalindrome = (s) => {
  let [result, start, end] = isPalindrome(s, 0, s.length - 1);

  if (!result) {
    const [lResult] = isPalindrome(s, start + 1, end);
    const [rResult] = isPalindrome(s, start, end - 1);
    result = lResult || rResult;
  }

  return result;
};
console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("abc")); // false */

// Baseball Game          10/9/2021
/* 
// You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

// At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record.

// Example 1:
//    Input: ops = ["5","2","C","D","+"]
//    Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

// Example 3:
//    Input: ops = ["1"]
//    Output: 1

// Constraints:
//    1 <= ops.length <= 1000
//    ops[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 104, 3 * 104].
//    For operation "+", there will always be at least two previous scores on the record.
//    For operations "C" and "D", there will always be at least one previous score on the record.

const calPoints = function (ops) {
  let record = [];
  for (let op of ops) {
    switch (op) {
      case `C`:
        record.pop();
        break;
      case `D`:
        record.push(2 * record[record.length - 1]);
        break;
      case `+`:
        record.push(record[record.length - 1] + record[record.length - 2]);
        break;
      default:
        record.push(+op);
    }
  }
  return record.reduce((acc, cur) => (acc += cur));
};
console.log(calPoints(["5", "2", "C", "D", "+"])); // 30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
console.log(calPoints(["1"])); // 1

// Decent runtime, not great memory usage. Very readable.

const topVotedCalPoints = function (ops) {
  let arr = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "+") {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    } else if (ops[i] === "D") {
      arr.push(arr[arr.length - 1] * 2);
    } else if (ops[i] === "C") {
      arr.pop();
    } else {
      arr.push(parseInt(ops[i]));
    }
  }
  return arr.reduce((acc, current) => acc + current);
};
console.log(topVotedCalPoints(["5", "2", "C", "D", "+"])); // 30
console.log(topVotedCalPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
console.log(topVotedCalPoints(["1"])); // 1

// Identical but uses if/else statements */

// Degree of an Array         10/10/2021
/* 
// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:
// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

// Example 2:
// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation:
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

// Constraints:
// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

const topVotedFindShortestSubArray = function (nums) {
  let freqs = {};
  let degree = 0;
  nums.forEach((n) => {
    freqs[n] = (freqs[n] ?? 0) + 1;
    degree = freqs[n] > degree ? freqs[n] : degree;
  });
  let mostCommon = Object.keys(freqs).filter((n) => freqs[n] == degree);
  let sublengths = mostCommon.map(
    (n) => nums.lastIndexOf(parseInt(n)) - nums.indexOf(parseInt(n)) + 1
  );
  return Math.min(...sublengths);
};
console.log(topVotedFindShortestSubArray([1, 2, 2, 3, 1])); // 2
console.log(topVotedFindShortestSubArray([1, 2, 2, 3, 1, 4, 2])); // 6

// No time today
// Clean solution! */

// To Lower Case          10/11/2021
/* 
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Constraints:
//    1 <= s.length <= 100
//    s consists of printable ASCII characters.

const toLowerCase = function (s) {
  return s.toLowerCase();
};
console.log(toLowerCase(`Hello`));
console.log(toLowerCase(`here`));
console.log(toLowerCase(`LOVELY`));

// As easy as they get */

// 1-bit and 2-bit Characters         10/12/2021
/* 
// We have two special characters:

// The first character can be represented by one bit 0.
// The second character can be represented by two bits (10 or 11).
// Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

// Example 1:
//    Input: bits = [1,0,0]
//    Output: true
// Explanation: The only way to decode it is two-bit character and one-bit character.
// So the last character is one-bit character.

// Example 2:
//    Input: bits = [1,1,1,0]
//    Output: false
// Explanation: The only way to decode it is two-bit character and two-bit character.
// So the last character is not one-bit character.

// Constraints:
//    1 <= bits.length <= 1000
//    bits[i] is either 0 or 1.

const isOneBitCharacter = function (bits) {
  return bits
    .slice(0, bits.length - 1)
    .reduce((acc, cur) => (acc ? !cur : true), true);
};
console.log(isOneBitCharacter([1, 0, 0])); // true
console.log(isOneBitCharacter([1, 1, 1, 0])); // false

// Identical to top voted */

// Find Pivot Index         10/13/2021
/* 
// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:
//    Input: nums = [1,7,3,6,5,6]
//    Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
//    Input: nums = [1,2,3]
//    Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:
//    Input: nums = [2,1,-1]
//    Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:
//    1 <= nums.length <= 104
//    -1000 <= nums[i] <= 1000

const pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.slice(0, i).reduce((acc, cur) => (acc += cur), 0) ==
      nums.slice(i + 1).reduce((acc, cur) => (acc += cur), 0)
    )
      return i;
  }
  return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0

// Very slow, but super easy solution

const topVotedPivotIndex = function (nums) {
  let sum = 0;
  let sumMap = new Map();
  let result = -1;
  const length = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    sumMap.set(i, sum);
  }

  if (nums[0] === sumMap.get(nums.length - 1)) {
    return 0;
  }

  for (let i = 1; i < nums.length - 1; i++) {
    if (sumMap.get(i - 1) === sumMap.get(length) - sumMap.get(i)) {
      result = i;
      break;
    }
  }

  if (sumMap.get(length - 1) === 0 && result === -1) {
    return length;
  }

  return result;
};
console.log(topVotedPivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(topVotedPivotIndex([1, 2, 3])); // -1
console.log(topVotedPivotIndex([2, 1, -1])); // 0 */

// Self Dividing Numbers          10/14/2021
/* 
// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

// Example 1:
//    Input: left = 1, right = 22
//    Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

// Example 2:
//    Input: left = 47, right = 85
//    Output: [48,55,66,77]

// Constraints:
//    1 <= left <= right <= 104

const selfDividingNumbers = function (l, r) {
  let ans = [];
  for (l; l <= r; l++) {
    if (l < 10) {
      ans.push(l);
      continue;
    }

    let isSelfDividing = true;
    for (let digit of `${l}`.split(``)) {
      if (l % digit !== 0) {
        isSelfDividing = false;
        break;
      }
    }
    if (isSelfDividing) ans.push(l);
  }

  return ans;
};
console.log(selfDividingNumbers(1, 22)); // [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85)); // [48,55,66,77]

// Not great runtime, pretty good memory usage
// Very easy read

var sdn = (num) => {
  let n = "" + num;
  return n.split("").every((item) => num % parseInt(item) === 0);
};

var topVotedSelfDividingNumbers = function (left, right) {
  let result = [];
  for (let i = left; i < right + 1; i++) {
    if (sdn(i)) {
      result.push(i);
    }
  }

  return result;
};

// The logic is pretty much identical

// First time seeing .every:
// "The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value."

// Perfect use case for this method */

// Flood Fill         10/15/2021
/* 
// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

// Return the modified image after performing the flood fill.

// Example 1:
//    Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
//    Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Example 2:
//    Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
//    Output: [[2,2,2],[2,2,2]]

// Constraints:
//    m == image.length
//    n == image[i].length
//    1 <= m, n <= 50
//    0 <= image[i][j], newColor < 216
//    0 <= sr < m
//    0 <= sc < n

const topVotedFloodFill = function (image, sr, sc, newColor) {
  const dfs = (x, y, base) => {
    if (
      x < 0 ||
      y < 0 ||
      x >= image.length ||
      y >= image[0].length ||
      image[x][y] != base ||
      image[x][y] === newColor
    )
      return; // boundary conditions
    image[x][y] = newColor;
    dfs(x - 1, y, base);
    dfs(x, y - 1, base);
    dfs(x + 1, y, base);
    dfs(x, y + 1, base);
  };

  dfs(sr, sc, image[sr][sc]);

  return image;
};
// prettier-ignore
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1,  1,  2)); // [[2,2,2],[2,2,0],[2,0,1]]
// prettier-ignore
console.log(floodFill([[0,0,0],[0,0,0]],  0,  0,  2)); // [[2,2,2],[2,2,2]]

// dfs function seems to test all surrounding squares and adjust accordingly
// Not the fastest, but very good memory usage */

// Find Smallest Letter Greater Than Target         10/16/2021
/* 
// Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

// Note that the letters wrap around.

// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

// Constraints:
//    2 <= letters.length <= 104
//    letters[i] is a lowercase English letter.
//    letters is sorted in non-decreasing order.
//    letters contains at least two different characters.
//    target is a lowercase English letter.

const nextGreatestLetter = function (letters, target) {
  for (let l of letters) {
    if (l.charCodeAt(0) > target.charCodeAt(0)) return l;
  }
  return letters[0];
};
console.log(nextGreatestLetter(["c", "f", "j"], "a")); // c
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // f
console.log(nextGreatestLetter(["c", "f", "j"], "d")); // f
console.log(nextGreatestLetter(["c", "f", "j"], "g")); // j
console.log(nextGreatestLetter(["c", "f", "j"], "j")); // c

// Decent runtime, memory usage better than 95%

const topVotedNextGreatestLetter = function (letters, target) {
  return (
    letters.filter((x) => x.charCodeAt(0) > target.charCodeAt(0))[0] ||
    letters[0]
  );
};

// Same thing as a one-liner essentially */

// Min Cost Climbing Stairs         10/17/2021
/* 
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

// Example 1:
//    Input: cost = [10,15,20]
//    Output: 15
// Explanation: Cheapest is: start on cost[1], pay that cost, and go to the top.

// Example 2:
//    Input: cost = [1,100,1,1,1,100,1,1,100,1]
//    Output: 6
// Explanation: Cheapest is: start on cost[0], and only step on 1s, skipping cost[3].

// Constraints:
//    2 <= cost.length <= 1000
//    0 <= cost[i] <= 999

const topVotedMinCostClimbingStairs = (cost) => {
  for (let i = 2; i < cost.length; i++)
    cost[i] = Math.min(cost[i - 1] + cost[i], cost[i - 2] + cost[i]);
  return Math.min(cost.pop(), cost.pop());
};
console.log(topVotedMinCostClimbingStairs([10, 15, 20])); // 15
console.log(
  topVotedMinCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
); // 6 */

// Largest Number At Least Twice of Others          10/18/2021
/* 
// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

// Example 1:
//    Input: nums = [3,6,1,0]
//    Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.

// Example 2:
//    Input: nums = [1,2,3,4]
//    Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1

// Example 3:
//    Input: nums = [1]
//    Output: 0
// Explanation: 1 is trivially at least twice the value as any other number because there are no other numbers.

// Constraints:
//    1 <= nums.length <= 50
//    0 <= nums[i] <= 100
//    The largest element in nums is unique.

const dominantIndex = function (nums) {
  const filtered = nums.filter((x) => x > Math.max(...nums) / 2);
  return filtered.length > 1 ? -1 : nums.indexOf(filtered[0]);
};
console.log(dominantIndex([3, 6, 1, 0])); // 1
console.log(dominantIndex([1, 2, 3, 4])); // -1
console.log(dominantIndex([1])); // 0

// Great memory, not great runtime
// Simple solution

const topVotedDominantIndex = (nums) => {
  let max = Math.max(...nums);
  let indexMax = nums.indexOf(max);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > max && nums[i] !== max) {
      return -1;
    }
  }
  return indexMax;
}; */

// Shortest Completing Word         10/19/2021
/* 
// Given a string licensePlate and an array of strings words, find the shortest completing word in words.

// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

// Example 1:
//    Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
//    Output: "steps"
// Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
// "step" contains 't' and 'p', but only contains 1 's'.
// "steps" contains 't', 'p', and both 's' characters.
// "stripe" is missing an 's'.
// "stepple" is missing an 's'.
// Since "steps" is the only word containing all the letters, that is the answer.

// Example 2:
//    Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
//    Output: "pest"
// Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.

// Example 3:
//    Input: licensePlate = "Ah71752", words = ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]
//    Output: "husband"

// Example 4:
//    Input: licensePlate = "OgEu755", words = ["enough","these","play","wide","wonder","box","arrive","money","tax","thus"]
//    Output: "enough"

// Example 5:
//    Input: licensePlate = "iMSlpe4", words = ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]
//    Output: "simple"

// Constraints:
//    1 <= licensePlate.length <= 7
//    licensePlate contains digits, letters (uppercase or lowercase), or space ' '.
//    1 <= words.length <= 1000
//    1 <= words[i].length <= 15
//    words[i] consists of lower case English letters.

const shortestCompletingWord = function (licensePlate, words) {
  let letters = licensePlate
    .toLowerCase()
    .split(``)
    .filter((char) => /[a-z]/.test(char));

  let ans = `                `; // 16 chars due to constraints
  for (let word of words) {
    let l = letters.slice();
    for (let char of word.split(``)) {
      let index = l.indexOf(char);
      if (index != -1) l[index] = 1;
    }
    if (l.every((x) => x == 1) && word.length < ans.length) ans = word;
  }
  return ans;
};
// prettier-ignore
console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])); // steps
// prettier-ignore
console.log(shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])); // pest
// prettier-ignore
console.log(shortestCompletingWord("Ah71752", ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"])); // husband
// prettier-ignore
console.log(shortestCompletingWord("OgEu755", ["enough","these","play","wide","wonder","box","arrive","money","tax","thus"])); // enough
// prettier-ignore
console.log(shortestCompletingWord("iMSlpe4", ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"])); // simple

// Somehow didn't exceed runtime limit
// Not a fan of my solution but better than half for runtime & memory it seems

var topVotedShortestCompletingWord = function (licensePlate, words) {
  let filtered = licensePlate.replace(/[^a-z]/gi, "");
  let res = "";
  for (let word of words) {
    let toReplace = filtered.slice();
    for (let char of word) {
      var regex = new RegExp(`[${char}]`, "i");
      toReplace = toReplace.replace(regex, "");
    }
    if (toReplace === "") {
      if (res === "") res = word;
      else if (res.length > word.length) res = word;
    }
  }
  return res;
};

// Seems top voted is also a cluster
// I do like how they got their filtered license plate */

// Prime Number of Set Bits in Binary Representation          10/20/2021
/* 
// Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation.

// Recall that the number of set bits an integer has is the number of 1's present when written in binary.

// For example, 21 written in binary is 10101, which has 3 set bits.

// Example 1:
//    Input: left = 6, right = 10
//    Output: 4
//  Explanation:
// 6  -> 110 (2 set bits, 2 is prime)
// 7  -> 111 (3 set bits, 3 is prime)
// 8  -> 1000 (1 set bit, 1 is not prime)
// 9  -> 1001 (2 set bits, 2 is prime)
// 10 -> 1010 (2 set bits, 2 is prime)
// 4 numbers have a prime number of set bits.

// Example 2:
//    Input: left = 10, right = 15
//    Output: 5
// Explanation:
// 10 -> 1010 (2 set bits, 2 is prime)
// 11 -> 1011 (3 set bits, 3 is prime)
// 12 -> 1100 (2 set bits, 2 is prime)
// 13 -> 1101 (3 set bits, 3 is prime)
// 14 -> 1110 (3 set bits, 3 is prime)
// 15 -> 1111 (4 set bits, 4 is not prime)
// 5 numbers have a prime number of set bits.

// Constraints:
//    1 <= left <= right <= 106
//    0 <= right - left <= 104

const countPrimeSetBits = function (l, r) {
  function isPrime(x) {
    for (let i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
    return x == 1 ? false : true;
  }

  let ans = 0;
  for (l; l <= r; l++) {
    if (isPrime(l.toString(2).replaceAll(`0`, ``).length)) ans++;
  }
  return ans;
};
console.log(countPrimeSetBits(6, 10)); // 4
console.log(countPrimeSetBits(10, 15)); // 5

// Gets the job done

var topVotedCountPrimeSetBits = function (L, R) {
  let set = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let countPrime = 0;

  for (let i = L; i <= R; i++) {
    if (set.has(i.toString(2).replace(/0/g, "").length)) countPrime++;
  }

  return countPrime;
};

// This solution breaks past 19 */

// Toeplitz Matrix          10/21/2021
/* 
// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

// Example 1:
//    Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
//    Output: true
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.

// Example 2:
//    Input: matrix = [[1,2],[2,2]]
//    Output: false
// Explanation:
// The diagonal "[1, 2]" has different elements.

// Constraints:
//    m == matrix.length
//    n == matrix[i].length
//    1 <= m, n <= 20
//    0 <= matrix[i][j] <= 99

const topVotedIsToeplitzMatrix = (matrix) => {
  for (let i = 0, len = matrix.length - 1; i < len; i++) {
    const thisRow = matrix[i].slice(0, -1);
    const nextRow = matrix[i + 1].slice(1);
    const isEqual = thisRow.every((v, j) => v === nextRow[j]);
    if (!isEqual) return false;
  }
  return true;
};
console.log(
  topVotedIsToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
); // true
console.log(
  topVotedIsToeplitzMatrix([
    [1, 2],
    [2, 2],
  ])
); // false

// Cleverly compares slice to slice for each row
// Not individual elements at a time */

// Jewels and Stones          10/22/2021
/* 
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
//    Input: jewels = "aA", stones = "aAAbbbb"
//    Output: 3

// Example 2:
//    Input: jewels = "z", stones = "ZZ"
//    Output: 0

// Constraints:
//    1 <= jewels.length, stones.length <= 50
//    jewels and stones consist of only English letters.
//    All the characters of jewels are unique.

const numJewelsInStones = function (jewels, stones) {
  jewels = new Set(jewels.split(``));
  return stones.split(``).reduce((acc, cur) => {
    if (jewels.has(cur)) acc++;
    return acc;
  }, 0);
};
console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0

// Easy solution

const topVotedNumJewelsInStones = function (jewels, stones) {
  var sum = 0;
  for (let i = 0; i < jewels.length; i++) {
    sum += stones.split(jewels.charAt(i)).length - 1;
  }
  return sum;
}; */

// Rotate String            10/23/2021
/* 
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:
//    Input: s = "abcde", goal = "cdeab"
//    Output: true

// Example 2:
//    Input: s = "abcde", goal = "abced"
//    Output: false

// Constraints:
//    1 <= s.length, goal.length <= 100
//    s and goal consist of lowercase English letters.

const rotateString = function (s, goal) {
  return s.length == goal.length && `${s}${s}`.includes(goal) ? true : false;
};
console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false

// Turned top voted into a one-liner */

// Unique Morse Code Words          10/24/2024
/* 
// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.

// Return the number of different transformations among all words we have.

// Example 1:
//    Input: words = ["gin","zen","gig","msg"]
//    Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".

// Example 2:
//    Input: words = ["a"]
//    Output: 1

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length <= 12
//    words[i] consists of lowercase English letters.

const uniqueMorseRepresentations = function (words) {
  // prettier-ignore
  const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

  let inMorse = new Set();
  for (let word of words) {
    inMorse.add(
      word
        .split(``)
        .reduce((acc, cur) => (acc += morseCode[cur.charCodeAt(0) - 97]), ``)
    );
  }
  return inMorse.size;
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // 2
console.log(uniqueMorseRepresentations(["a"])); // 1

// Less memory usage than 98%, not greatest runtime

// Similar to top voted except I save memory by using .charCodeAt
// Solid solution */

// Number of Lines To Write String          10/25/2021
/* 
// You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.

// You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.

// Return an array result of length 2 where:

// result[0] is the total number of lines.
// result[1] is the width of the last line in pixels.

// Example 1:
//    Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
//    Output: [3,60]
// Explanation: You can write s as follows:
// abcdefghij  // 100 pixels wide
// klmnopqrst  // 100 pixels wide
// uvwxyz      // 60 pixels wide
// There are a total of 3 lines, and the last line is 60 pixels wide.

// Example 2:
//    Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
//    Output: [2,4]
// Explanation: You can write s as follows:
// bbbcccdddaa  // 98 pixels wide
// a            // 4 pixels wide
// There are a total of 2 lines, and the last line is 4 pixels wide.

// Constraints:
//    widths.length == 26
//    2 <= widths[i] <= 10
//    1 <= s.length <= 1000
//    s contains only lowercase English letters.

const numberOfLines = function (widths, s) {
  let ans = [1, 0];
  s = s.split(``);

  let curWidth = 0;
  for (let i = 0; i < s.length; i++) {
    const charPixels = widths[s[i].charCodeAt(0) - 97];
    if (curWidth + charPixels > 100) {
      ans[0]++;
      curWidth = charPixels;
    } else curWidth += charPixels;
  }
  ans[1] = curWidth;

  return ans;
};
// prettier-ignore
console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz")); // [3,60]
// prettier-ignore
console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa")); // [2,4]

// Second problem using .charCodAt in a row
// Decent solution, better memory than most & average runtime

const topVotedNumberOfLines = (widths, s) =>
  [...s]
    .map((c) => widths[c.charCodeAt(0) - 97])
    .reduce(
      (acc, curr) => [
        acc[0] + (100 < acc[1] + curr ? 1 : 0),
        100 < acc[1] + curr ? curr : acc[1] + curr,
      ],
      [s.length ? 1 : 0, 0]
    );

// Sheeeeesh, very clean
// Same process but optimized to the absolute max */

// Largest Triangle Area          10/26/2021
/* 
// Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

// Example 1:
//    Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
//    Output: 2.00000
// Explanation: The five points are shown in the above figure. The red triangle is the largest. https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/04/1027.png

// Example 2:
//    Input: points = [[1,0],[0,0],[0,1]]
//    Output: 0.50000

// Constraints:
//    3 <= points.length <= 50
//    -50 <= xi, yi <= 50
//    All the given points are unique.

const topVotedLargestTriangleArea = function (points) {
  const n = points.length;
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const area = calcArea(points[i], points[j], points[k]);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};

function calcArea(coordA, coordB, coordC) {
  const [xCoordA, yCoordA] = coordA;
  const [xCoordB, yCoordB] = coordB;
  const [xCoordC, yCoordC] = coordC;

  const sideA = xCoordA * (yCoordB - yCoordC);
  const sideB = xCoordB * (yCoordC - yCoordA);
  const sideC = xCoordC * (yCoordA - yCoordB);

  return Math.abs((sideA + sideB + sideC) / 2);
}
// prettier-ignore
console.log(topVotedLargestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]])); // 2
// prettier-ignore
console.log(topVotedLargestTriangleArea([[1,0],[0,0],[0,1]])); // 0.5

// Wasn't sure how to go about it
// Seems he just loops through all possibilities using Math.max to get the largest */

// Most Common Word         10/27/2021
/* 
// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Example 1:
//    Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
//    Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.

// Example 2:
//    Input: paragraph = "a.", banned = []
//    Output: "a"

// Constraints:
//    1 <= paragraph.length <= 1000
//    paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
//    0 <= banned.length <= 100
//    1 <= banned[i].length <= 10
//    banned[i] consists of only lowercase English letters.

const mostCommonWord = function (paragraph, banned) {
  let count = {};
  for (let word of paragraph
    .toLowerCase()
    .replace(/[^a-z ]/g, ``)
    .split(/\s/)) {
    !count[word] ? (count[word] = 1) : count[word]++;
  }

  let ans;
  for (let word in count) {
    if (!count[ans]) count[ans] = 0;
    if (count[word] > count[ans] && !banned.includes(word)) ans = word;
  }

  return ans;
};
// prettier-ignore
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",  ["hit"])); // ball
console.log(mostCommonWord("a.", [])); // a

const topVotedMostCommonWord = function (paragraph, banned) {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().split(/\W+/);

  const map = {};
  let frequentWord;
  let maxCount = 0;

  for (const word of words) {
    if (word && !bannedSet.has(word)) {
      map[word] = (map[word] || 0) + 1;
      if (map[word] > maxCount) {
        maxCount = map[word];
        frequentWord = word;
      }
    }
  }

  return frequentWord;
};

// Same logic, but his actually passes all test cases */

// Shortest Distance to a Character         10/28/2021
/* 
// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// Example 1:
//    Input: s = "loveleetcode", c = "e"
//    Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
// The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

// Example 2:
//    Input: s = "aaab", c = "b"
//    Output: [3,2,1,0]

// Constraints:
//    1 <= s.length <= 104
//    s[i] and c are lowercase English letters.
//    It is guaranteed that c occurs at least once in s.

const topVotedShortestToChar = function (s, c) {
  const ans = Array(s.length).fill(Infinity);
  let l = Infinity,
    r = Infinity;

  for (let f = 0; f < s.length; f++) {
    const b = s.length - 1 - f;

    l = s[f] === c ? 0 : l + 1;
    r = s[b] === c ? 0 : r + 1;

    ans[f] = Math.min(ans[f], l);
    ans[b] = Math.min(ans[b], r);
  }
  return ans;
};
console.log(topVotedShortestToChar("loveleetcode", "e")); // [3,2,1,0,1,0,0,1,2,2,1,0]
console.log(topVotedShortestToChar("aaab", "b")); // [3,2,1,0]

// Ended up studying top voted

// Iterates over the string from both left and right at same time
// Adding the smallest distance to the ans array */

// Goat Latin         10/29/2021
/* 
// You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

// If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
// For example, the word "apple" becomes "applema".
// If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
// Return the final sentence representing the conversion from sentence to Goat Latin.

// Example 1:
//    Input: sentence = "I speak Goat Latin"
//    Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

// Example 2:
//    Input: sentence = "The quick brown fox jumped over the lazy dog"
//    Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

// Constraints:
//    1 <= sentence.length <= 150
//    sentence consists of English letters and spaces.
//    sentence has no leading or trailing spaces.
//    All the words in sentence are separated by a single space.

const toGoatLatin = function (sentence) {
  let words = sentence.split(" "),
    append = "a",
    vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i].charAt(0).toLowerCase())) {
      words[i] = words[i] + "ma" + append;
    } else {
      words[i] = words[i].substring(1) + words[i].charAt(0) + "ma" + append;
    }
    append += "a";
  }
  return words.join(" ");
};
console.log(toGoatLatin("I speak Goat Latin")); // "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog")); // "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa" */

// Positions of Large Groups          10/30/2021
/* 
// In a string s of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

// A group is considered large if it has 3 or more characters.

// Return the intervals of every large group sorted in increasing order by start index.

// Example 1:
//    Input: s = "abbxxxxzzy"
//    Output: [[3,6]]
// Explanation: "xxxx" is the only large group with start index 3 and end index 6.

// Example 2:
//    Input: s = "abc"
//    Output: []
// Explanation: We have groups "a", "b", and "c", none of which are large groups.

// Example 3:
//    Input: s = "abcdddeeeeaabbbcd"
//    Output: [[3,5],[6,9],[12,14]]
// Explanation: The large groups are "ddd", "eeee", and "bbb".

// Example 4:
//    Input: s = "aba"
//    Output: []

// Constraints:
//    1 <= s.length <= 1000
//    s contains lower-case English letters only.

const largeGroupPositions = function (s) {
  let count = 0,
    ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      if (i - count + 1 >= 3) ans.push([count, i]);
      count = i + 1;
    }
  }
  return ans;
};
console.log(largeGroupPositions("abbxxxxzzy")); // [[3,6]]
console.log(largeGroupPositions("abc")); // []
console.log(largeGroupPositions("abcdddeeeeaabbbcd")); // [[3,5],[6,9],[12,14]]
console.log(largeGroupPositions("aba")); // []

// Quickly studied some top voteds to get my strategy straight
// This runtime was better than 100% of submissions! */

// Flipping an Image          10/31/2021
/* 
// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

// Example 1:
//    Input: image = [[1,1,0],[1,0,1],[0,0,0]]
//    Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Example 2:
//    Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
//    Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

// Constraints:
//    n == image.length
//    n == image[i].length
//    1 <= n <= 20
//    images[i][j] is either 0 or 1.

const flipAndInvertImage = function (image) {
  return image.reduce((acc, cur) => {
    let ans = [];
    for (let val of cur.reverse()) val ? ans.push(0) : ans.push(1);
    return [...acc, ans];
  }, []);
};
// prettier-ignore
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); // [[1,0,0],[0,1,0],[1,1,1]]
// prettier-ignore
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])) // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

// Faster than 70%, better memory than 90%
// Seems that .reduce should be used to boil down an array to a singular value rather than building a new array, but I like the immediate return it provides here

const topVotedFlipAndInvertImage = function (image) {
  return image.map((im, i) => im.reverse().map((rev) => (rev ? 0 : 1)));
};

// This is what I was shooting for
// Very nice! */

// Rectangle Overlap          11/1/2021
/* 
// An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

// Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

// Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

// Example 1:
//    Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
//    Output: true

// Example 2:
//    Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
//    Output: false

// Example 3:
//    Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
//    Output: false

// Constraints:
//    rect1.length == 4
//    rect2.length == 4
//    -109 <= rec1[i], rec2[i] <= 109
//    rec1 and rec2 represent a valid rectangle with a non-zero area.

const isRectangleOverlap = function (r1, r2) {
  return r2[0] >= r1[2] || r2[1] >= r1[3] || r2[2] <= r1[0] || r2[3] <= r1[1]
    ? false
    : true;
};
console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])); // true
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1])); // false
console.log(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3])); // false

// Hmm, surprised this actually did the trick
// Better runtime than 80% and very low memory usage

// All other user posted solutions seem to be less clean equivalents of what I have here */

// Backspace String Compare         11/2/2021
/* 
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
//    Input: s = "ab#c", t = "ad#c"
//    Output: true
// Explanation: Both s and t become "ac".

// Example 2:
//    Input: s = "ab##", t = "c#d#"
//    Output: true
// Explanation: Both s and t become "".

// Example 3:
//    Input: s = "a##c", t = "#a#c"
//    Output: true
// Explanation: Both s and t become "c".

// Example 4:
//    Input: s = "a#c", t = "b"
//    Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:
//    1 <= s.length, t.length <= 200
//    s and t only contain lowercase letters and '#' characters.

const backspaceCompare = function (s, t) {
  const backspaces = (str) =>
    str
      .split(`#`)
      .reduce((acc, cur) => acc.substring(0, acc.length - 1) + cur, ``);

  return backspaces(s) === backspaces(t);
};
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a##c", "#a#c")); // true
console.log(backspaceCompare("a#c", "b")); // false

// Better runtime than 97%, better memory than 70%
// Pretty happy with this solution

// Top voteds are all very large For loops
// Much prefer the readability here */

// Peak Index in a Mountain Array         11/3/2021
/* 
// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// Example 1:
// Input: arr = [0,1,0]
// Output: 1

// Example 5:
// Input: arr = [24,69,100,99,79,78,67,36,26,19]
// Output: 2

// Constraints:
// 3 <= arr.length <= 104
// 0 <= arr[i] <= 106
// arr is guaranteed to be a mountain array.

const peakIndexInMountainArray = function (arr) {
  return arr.reduce((ans, cur, i, arr) => (cur > arr[ans] ? i : ans), 0);
};
console.log(peakIndexInMountainArray([0, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 2, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 10, 5, 2])); // 1
console.log(peakIndexInMountainArray([3, 4, 5, 1])); // 2
console.log(
  peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])
); // 2

// Better runtime than 83%, better memory than 94%
// Very simple & efficient

const topVotedPeakIndexInMountainArray = function (arr) {
  return arr.indexOf(Math.max(...arr));
};

// This is even simpler haha
// Runtime better than 94%, but 78% better memory

// I prefer his solution over mine tho */

// Buddy Strings            11/4/2021
/* 
// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:
//    Input: s = "ab", goal = "ba"
//    Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

// Example 2:
//    Input: s = "ab", goal = "ab"
//    Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

// Example 3:
//    Input: s = "aa", goal = "aa"
//    Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

// Example 4:
//    Input: s = "aaaaaaabc", goal = "aaaaaaacb"
//    Output: true

// Constraints:
//    1 <= s.length, goal.length <= 2 * 104
//    s and goal consist of lowercase letters.

const topVotedBuddyStrings = function (A, B) {
  if (A.length != B.length) return false;
  const diff = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] != B[i]) diff.push(i);
    if (diff.length > 2) return false;
  }

  if (!diff.length) return A.length != [...new Set(A)].length;
  const [i, j] = diff;
  return A[i] == B[j] && B[i] == A[j];
};
console.log(topVotedBuddyStrings("ab", "ba")); // true
console.log(topVotedBuddyStrings("ab", "ab")); // false
console.log(topVotedBuddyStrings("aa", "aa")); // true
console.log(topVotedBuddyStrings("aaaaaaabc", "aaaaaaacb")); // true

// Starts with guard clauses for string not being same length or having 2 different elements
// Then confirms the differences between the strings work */

// Lemonade Change          11/5/2021
/* 
// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with correct change, or false otherwise.

// Example 1:
//    Input: bills = [5,5,5,10,20]
//    Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// Example 2:
//    Input: bills = [5,5,10,10,20]
//    Output: false
// Explanation:
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can not give change of $15 back because we only have two $10 bills.
// Since not every customer received correct change, the answer is false.

// Example 3:
//    Input: bills = [5,5,10]
//    Output: true

// Example 4:
//    Input: bills = [10,10]
//    Output: false

// Constraints:
//    1 <= bills.length <= 105
//    bills[i] is either 5, 10, or 20.

const lemonadeChange = function (bills) {
  if (bills[0] > 5) return false;

  let count = [];
  return bills.reduce((acc, cur, _, arr) => {
    if (cur == 5) {
      count.push(5);
      return true;
    }
    if (cur == 10 && count.includes(5)) {
      count.splice(count.indexOf(5), 1);
      count.push(10);
      return true;
    }
    if ((cur == 20 && count.includes(5)) || count.includes(10)) {
      if (count.includes(10) && count.includes(5)) {
        count.splice(count.indexOf(10), 1);
        count.splice(count.indexOf(5), 1);
        return true;
      } else {
        if (count.filter((x) => x == 5).length < 3) {
          arr.splice(1);
          return false;
        }
        count.splice(count.indexOf(5), 1);
        count.splice(count.indexOf(5), 1);
        count.splice(count.indexOf(5), 1);
        return true;
      }
    }

    arr.splice(1);
    return false;
  }, false);
};
console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
console.log(lemonadeChange([5, 5, 10, 10, 20])); // false
console.log(lemonadeChange([5, 5, 10])); // true
console.log(lemonadeChange([10, 10])); // false
console.log(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5])); // false

// Wow this has to be some of the worst code I've written in a while...
// terrible runtime, but better memory than 93% of submissions somehow

// Not a fan of the multiple if statements, the early .reduce exits using arr.splice(1), nor the repeating code

// Let's see what others did

const topVotedLemonadeChange = function (bills) {
  let fives = 0;
  let tens = 0;

  for (const bill of bills) {
    if (bill === 5) fives++;
    else if (bill === 10) {
      tens++;
      fives--;
    } else {
      if (tens > 0) {
        tens--;
        fives--;
      } else fives -= 3;
    }
    if (fives < 0 || tens < 0) return false;
  }
  return true;
};

// Much smarter to create 'fives' and 'tens' variables to ++/-- instead of reading an array
// Wow, this seems so obvious now

// For some reason I had the .reduce in mind when a for loop would've really simplified things

// I'm off to study chem, maybe this midterm is taking over my mental RAM... lol */

// Uncommon Words from Two Sentences          11/6/2021
/* 
// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Example 1:
//    Input: s1 = "this apple is sweet", s2 = "this apple is sour"
//    Output: ["sweet","sour"]

// Example 2:
//    Input: s1 = "apple apple", s2 = "banana"
//    Output: ["banana"]

// Constraints:
//    1 <= s1.length, s2.length <= 200
//    s1 and s2 consist of lowercase English letters and spaces.
//    s1 and s2 do not have leading or trailing spaces.
//    All the words in s1 and s2 are separated by a single space.

const uncommonFromSentences = function (s1, s2) {
  let s1s2 = [...s1.split(` `), ...s2.split(` `)];
  let ans = [];

  for (let word of s1s2) {
    if (s1s2.indexOf(word) == s1s2.lastIndexOf(word)) ans.push(word);
  }
  return ans;
};
console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")); // ["sweet","sour"]
console.log(uncommonFromSentences("apple apple", "banana")); // ["banana"]
console.log(uncommonFromSentences("abcd def abcd xyz", "ijk def ijk")); // ["xyz"]

// Decent

const topVotedUncommonFromSentences = (a, b) =>
  `${a} ${b}`
    .split(" ")
    .filter((word, _, arr) => arr.indexOf(word) === arr.lastIndexOf(word));

// Same idea but with plenty of optimization
// Very clean

// Tested them both and mine returned much better runtime somehow */

// Fair Candy Swap          11/7/2021
/* 
// Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.

// Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.

// Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.

// Example 1:
//    Input: aliceSizes = [1,1], bobSizes = [2,2]
//    Output: [1,2]

// Example 2:
//    Input: aliceSizes = [1,2], bobSizes = [2,3]
//    Output: [1,2]

// Example 3:
//    Input: aliceSizes = [2], bobSizes = [1,3]
//    Output: [2,3]

// Example 4:
//    Input: aliceSizes = [1,2,5], bobSizes = [2,4]
//    Output: [5,4]

// Constraints:
//    1 <= aliceSizes.length, bobSizes.length <= 104
//    1 <= aliceSizes[i], bobSizes[j] <= 105
//    Alice and Bob have a different total number of candies.
//    There will be at least one valid answer for the given input.

const fairCandySwap = function (a, b) {
  const count = (x) => x.reduce((acc, cur) => (acc += cur));

  let dif = (count(a) - count(b)) / 2;

  for (let size of b) {
    if (a.includes(size + dif)) return [size + dif, size];
  }
};
console.log(fairCandySwap([1, 1], [2, 2])); // [1,2]
console.log(fairCandySwap([1, 2], [2, 3])); // [1,2]
console.log(fairCandySwap([2], [1, 3])); // [2,3]
console.log(fairCandySwap([1, 2, 5], [2, 4])); // [5,4]

// OK

const topVotedFairCandySwap = function (A, B) {
  const sumA = A.reduce((acc, cur) => acc + cur);
  const sumB = B.reduce((acc, cur) => acc + cur);
  const diff = (sumA - sumB) >> 1;
  const setA = new Set(A);
  for (const candy of B) {
    if (setA.has(candy + diff)) return [candy + diff, candy];
  }
};

// Top voted has same idea
// I believe using the Set's '.has' improves runtime over Array's '.includes'
// Not familiar with '>>' used to obtain 'diff'

// 'Right shift (>>)'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift

// Weird, I prefer my count(a) - count(b)) / 2 */

// Surface Area of 3D Shapes          11/8/2021
/* 
// You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each value v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j).

// After placing these cubes, you have decided to glue any directly adjacent cubes to each other, forming several irregular 3D shapes.

// Return the total surface area of the resulting shapes.

// Note: The bottom face of each shape counts toward its surface area.

// Example 1:
//    Input: grid = [[2]]
//    Output: 10
// https://assets.leetcode.com/uploads/2021/01/08/tmp-grid1.jpg

// Example 2:
//    Input: grid = [[1,2],[3,4]]
//    Output: 34
// https://assets.leetcode.com/uploads/2021/01/08/tmp-grid2.jpg

// Example 3:
//    Input: grid = [[1,0],[0,2]]
//    Output: 16
// https://assets.leetcode.com/uploads/2021/01/08/tmp-grid3.jpg

// Example 4:
//    Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
//    Output: 32
// https://assets.leetcode.com/uploads/2021/01/08/tmp-grid4.jpg

// Example 5:
//    Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
//    Output: 46
// https://assets.leetcode.com/uploads/2021/01/08/tmp-grid5.jpg

// Constraints:
//    n == grid.length
//    n == grid[i].length
//    1 <= n <= 50
//    0 <= grid[i][j] <= 50

const topVotedSurfaceArea = function (grid) {
  const height = grid.length;
  const width = grid[0].length;
  let sum = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] > 0) sum += grid[i][j] * 4 + 2;
      if (i > 0) sum -= 2 * Math.min(grid[i - 1][j], grid[i][j]);
      if (j > 0) sum -= 2 * Math.min(grid[i][j - 1], grid[i][j]);
    }
  }
  return sum;
};
console.log(topVotedSurfaceArea([[2]])); // 10
// prettier-ignore
console.log(topVotedSurfaceArea([[1,2],[3,4]])); // 34
// prettier-ignore
console.log(topVotedSurfaceArea([[1,0],[0,2]])); // 16
// prettier-ignore
console.log(topVotedSurfaceArea([[1,1,1],[1,0,1],[1,1,1]])); // 32
// prettier-ignore
console.log(topVotedSurfaceArea([[2,2,2],[2,1,2],[2,2,2]])); // 46

// Didn't know how to go about this so decided to study top voted

// Seems they go through the coordinates one-by-one, adding 6 per increment
// 6 would be the max, therefore they check for adjacent blocks and decrement accordingly */

// Monotonic Array          11/9/2021
/* 
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Constraints:
// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105

const isMonotonic = function (nums) {
  if (nums.length == 1) return true;

  let isIncreasing = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      isIncreasing = false;
      break;
    }
  }
  if (isIncreasing) return true;

  let isDecreasing = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      isDecreasing = false;
      break;
    }
  }
  return isDecreasing;
};
console.log(isMonotonic([1, 2, 2, 3])); // true
console.log(isMonotonic([6, 5, 4, 4])); // true
console.log(isMonotonic([1, 3, 2])); // false
console.log(isMonotonic([1, 2, 4, 5])); // true
console.log(isMonotonic([1, 1, 1])); // true

// Tried to stick to simple for loops for this one
// Faster runtime than 98%

const topVotedIsMonotonic = function (A) {
  return (
    A.every((v, i) => i === 0 || v <= A[i - 1]) ||
    A.every((v, i) => i === 0 || v >= A[i - 1])
  );
};

// Much cleaner, but only better than 73% runtimes
// I prefer his solution, but it's interesting to see the comparisons in runtime even though mine is so much bulkier

// It's probably due to my breaks and the fact that I return half-way if increasing is true */

// Sort Array By Parity         11/10/2021
/* 
//  Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Example 1:
//    Input: nums = [3,1,2,4]
//    Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Constraints:
//    1 <= nums.length <= 5000
//    0 <= nums[i] <= 5000

const sortArrayByParity = function (nums) {
  if (nums.length == 1) return nums;

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 == 0 ? ans.unshift(nums[i]) : ans.push(nums[i]);
  }
  return ans;
};
console.log(sortArrayByParity([3, 1, 2, 4])); // [2,4,3,1]
console.log(sortArrayByParity([0])); // [0]

// Works, 50% runtime 50% memory, easy logic

const topVotedSortArrayByParity = function (A) {
  return [...A.filter((v) => v % 2 === 0), ...A.filter((v) => v % 2 !== 0)];
};

// Thought about this, but imagined it would have bad runtime given double .filter use
// Better runtime than 74%, great memory */

// Smallest Range I         11/11/2021
/* 
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
//    Input: nums = [1], k = 0
//    Output: 0
// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

// Example 2:
//    Input: nums = [0,10], k = 2
//    Output: 6
// Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.

// Example 3:
//    Input: nums = [1,3,6], k = 3
//    Output: 0
// Explanation: Change nums to be [4, 4, 4]. The score is max(nums) - min(nums) = 4 - 4 = 0.

// Constraints:
//    1 <= nums.length <= 104
//    0 <= nums[i] <= 104
//    0 <= k <= 104

const smallestRangeI = function (nums, k) {
  let range = Math.max(...nums) - Math.min(...nums);
  return range > 2 * k ? range - 2 * k : 0;
};
console.log(smallestRangeI([1], 0)); // 0
console.log(smallestRangeI([0, 10], 2)); // 6
console.log(smallestRangeI([1, 3, 6], 3)); // 0

// Struggled with prompt at first, but ended up being pretty simple
// Better runtime than 90%

// Top voteds are all similar variations of this same logic */

// X of a Kind in a Deck of Cards         11/12/2021
/* 
// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

// Each group has exactly X cards.
// All the cards in each group have the same integer.

// Example 1:
//    Input: deck = [1,2,3,4,4,3,2,1]
//    Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

// Example 2:
//    Input: deck = [1,1,1,2,2,2,3,3]
//    Output: false
// Explanation: No possible partition.

// Example 3:
//    Input: deck = [1]
//    Output: false
// Explanation: No possible partition.

// Example 4:
//    Input: deck = [1,1]
//    Output: true
// Explanation: Possible partition [1,1].

// Example 5:
//    Input: deck = [1,1,2,2,2,2]
//    Output: true
// Explanation: Possible partition [1,1],[2,2],[2,2].

// Constraints:
//    1 <= deck.length <= 104
//    0 <= deck[i] < 104

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const topVotedHasGroupsSizeX = (deck) => {
  const cnt = {};
  for (const c of deck) {
    if (!cnt[c]) cnt[c] = 0;
    cnt[c]++;
  }
  const vals = Object.values(cnt);
  return vals.reduce(gcd) > 1;
};
console.log(topVotedHasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])); // true
console.log(topVotedHasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])); // false
console.log(topVotedHasGroupsSizeX([1])); // false
console.log(topVotedHasGroupsSizeX([1, 1])); // true
console.log(topVotedHasGroupsSizeX([1, 1, 2, 2, 2, 2])); // true
console.log(topVotedHasGroupsSizeX([0, 0, 0, 1, 1, 1, 2, 2, 2])); // true

// My solution wasn't passing all tests

// gcd function is very clever! */

// Reverse Only Letters         11/13/2021
/* 
// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Constraints:
//    1 <= s.length <= 100
//    s consists of characters with ASCII values in the range [33, 122].
//    s does not contain '\"' or '\\'.

const reverseOnlyLetters = function (s) {
  let w = s.match(/[a-zA-Z]/g);
  return s
    .split(``)
    .map((cur) => (cur.match(/[a-zA-Z]/) ? w.pop() : cur))
    .join(``);
};
console.log(reverseOnlyLetters("ab-cd")); // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // "Qedo1ct-eeLg=ntse-T!"

// Got soooo close to solving it with Regex, but ended up referring to top voted
// Great solution, optimized above top voted

// 90% runtime & memory */

// Sort Array By Parity II          11/14/2021
/* 
// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

// Example 1:
//    Input: nums = [4,2,5,7]
//    Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// Constraints:
//    2 <= nums.length <= 2 * 104
//    nums.length is even.
//    Half of the integers in nums are even.
//    0 <= nums[i] <= 1000

const sortArrayByParityII = function (nums) {
  let odd = nums.filter((x) => x % 2);
  let even = nums.filter((x) => !(x % 2));

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    i % 2 ? ans.push(odd.pop()) : ans.push(even.pop());
  }
  return ans;
};
console.log(sortArrayByParityII([4, 2, 5, 7])); // [4,5,2,7]
console.log(sortArrayByParityII([2, 3])); // [2,3]

// Nothing crazy, I'm sure there's much more optimal

var topVotedSortArrayByParityII = function (nums) {
  const [odds, evens] = [
    nums.filter((n) => n % 2 === 1),
    nums.filter((n) => n % 2 === 0),
  ];

  let res = [];
  for (let i = 0; i < nums.length / 2; i++) {
    res.push(evens[i], odds[i]);
  }
  return res;
};
console.log(topVotedSortArrayByParityII([4, 2, 5, 7])); // [4,5,2,7]
console.log(topVotedSortArrayByParityII([2, 3])); // [2,3]

// Mixed 2 solutions to get this one
// Seems this is the most common logic so I wasn't far off at all */

// Long Pressed Name          11/15/2021
/* 
// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

// Example 1:
//    Input: name = "alex", typed = "aaleex"
//    Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.

// Example 2:
//    Input: name = "saeed", typed = "ssaaedd"
//    Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.

// Constraints:
//    1 <= name.length <= 1000
//    1 <= typed.length <= 1000
//    name and typed contain only lowercase English letters.

const topVotedIsLongPressedName = function (name, typed) {
  for (var i = 0, j = 0; i < typed.length && j <= name.length; i++) {
    if (typed[i] == name[j]) j++;
    else if (typed[i] != name[j - 1]) return false;
  }
  return i == typed.length && j == name.length;
};
console.log(topVotedIsLongPressedName("alex", "aaleex")); // true
console.log(topVotedIsLongPressedName("saeed", "ssaaedd")); // false
console.log(topVotedIsLongPressedName("leelee", "lleeelee")); // true
console.log(topVotedIsLongPressedName("laiden", "laiden")); // true

// Very clean */

// Unique Email Addresses         11/16/2021
/* 
// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each email[i], return the number of different addresses that actually receive mails.

// Example 1:
//    Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
//    Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

// Example 2:
//    Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
//    Output: 3

// Constraints:
//    1 <= emails.length <= 100
//    1 <= emails[i].length <= 100
//    email[i] consist of lowercase English letters, '+', '.' and '@'.
//    Each emails[i] contains exactly one '@' character.
//    All local and domain names are non-empty.
//    Local names do not start with a '+' character.

const numUniqueEmails = function (emails) {
  let ans = new Set();
  for (let email of emails) {
    email = email.split(`@`);
    ans.add(`${email[0].split(`+`)[0].replaceAll(`.`, ``)}@${email[1]}`);
  }
  return ans.size;
};
// prettier-ignore
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])); // 2
// prettier-ignore
console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])); // 3
// prettier-ignore
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"])); // 2

// Decent scores, faster than most

var topVotedNumUniqueEmails = function (emails) {
  return new Set(
    emails.map((email) => {
      const [local, domain] = email.split("@");
      return local.split("+").shift().split(".").join("") + "@" + domain;
    })
  ).size;
};

// This is what I was shooting for when writing my code
// Small optimizations everywhere leads to slightly faster code */

// Number of Recent Calls         11/17/2021
/* 
// You have a RecentCounter class which counts the number of recent requests within a certain time frame.

// Implement the RecentCounter class:

// RecentCounter() Initializes the counter with zero recent requests.
// int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
// It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

// Example 1:
//    Input
//      ["RecentCounter", "ping", "ping", "ping", "ping"]
//      [[], [1], [100], [3001], [3002]]
//    Output
//      [null, 1, 2, 3, 3]

// Explanation
// RecentCounter recentCounter = new RecentCounter();
// recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
// recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
// recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
// recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

// Constraints:
//    1 <= t <= 109
//    Each test case will call ping with strictly increasing values of t.
//    At most 104 calls will be made to ping.

var RecentCounter = function () {
  this.oldCalls = [];
};

RecentCounter.prototype.ping = function (t) {
  this.oldCalls.push(t);
  while (this.oldCalls[0] < t - 3000) this.oldCalls.shift();
  return this.oldCalls.length;
};

var obj = new RecentCounter();
console.log(obj.ping([])); // null
console.log(obj.ping([1])); // 1
console.log(obj.ping([100])); // 2
console.log(obj.ping([3001])); // 3
console.log(obj.ping([3002])); // 3

// This is the top voted solution
// Not too sure how to deal with these yet */

// Reorder Data in Log Files          11/18/2021
/* 
// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

// Example 1:
//    Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
//    Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// Explanation:
// The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
// The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".

// Example 2:
//    Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
//    Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

// Constraints:
//    1 <= logs.length <= 100
//    3 <= logs[i].length <= 100
//    All the tokens of logs[i] are separated by a single space.
//    logs[i] is guaranteed to have an identifier and at least one word after the identifier.

const topVotedReorderLogFiles = function (logs) {
  return logs
    .filter((log) => /[a-z]$/.test(log))
    .sort((a, b) =>
      ((aId, aWords, _, bId, bWords) =>
        aWords.localeCompare(bWords) || aId.localeCompare(bId))(
        ...a.split(/\s(.+)/),
        ...b.split(/\s(.+)/)
      )
    )
    .concat(logs.filter((log) => /\d$/.test(log)));
};
// prettier-ignore
console.log(topVotedReorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])); // ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// prettier-ignore
console.log(topVotedReorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"])); // ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

// No time today
// Very nice use of ".sort((a, b) => ((aId, aWords, _, bId, bWords) => { }" */

// Valid Mountain Array         11/19/2021
/* 
// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:
//    arr.length >= 3
//    There exists some i with 0 < i < arr.length - 1 such that:
//    arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//    arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:
//    Input: arr = [2,1]
//    Output: false

// Example 2:
//    Input: arr = [3,5,5]
//    Output: false

// Example 3:
//    Input: arr = [0,3,2,1]
//    Output: true

// Constraints:
//    1 <= arr.length <= 104
//    0 <= arr[i] <= 104

const validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let peakIndex = arr.indexOf(Math.max(...arr));
  if (
    peakIndex == 0 ||
    peakIndex == arr.length - 1 ||
    arr.lastIndexOf(Math.max(...arr)) != peakIndex
  )
    return false;

  for (let i = 0; i < arr.length; i++) {
    if (i < peakIndex && arr[i] <= arr[i - 1]) return false;
    if (i > peakIndex && arr[i] <= arr[i + 1]) return false;
  }
  return true;
};
console.log(validMountainArray([2, 1])); // false
console.log(validMountainArray([3, 5, 5])); // false
console.log(validMountainArray([0, 3, 2, 1])); // true
console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // false
console.log(validMountainArray([0, 1, 2, 4, 2, 1])); // true
console.log(validMountainArray([1, 1, 1, 1, 1, 1, 1, 2, 1])); // false

// Took me more refused submissions than I'd wanted, but eventually got there
// Faster than 75% of submissions and less memory than 99%!

const topVotedValidMountainArray = function (A) {
  const n = A.length;
  if (n < 3) return false;
  let i = 1;
  let rise = false;
  let drop = false;
  while (A[i - 1] < A[i]) {
    i++;
    rise = true;
  }
  if (A[i - 1] === A[i]) return false;
  while (A[i - 1] > A[i]) {
    i++;
    drop = true;
  }
  return i === n && rise && drop;
};

// Much cleaner than mine, but much worst performance (33% runtime/20% memory)
// I think most of my performance comes from the list of guard clauses I made */

// DI String Match          11/20/2021
/* 
// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

// Example 1:
//    Input: s = "IDID"
//    Output: [0,4,1,3,2]

// Example 2:
//    Input: s = "III"
//    Output: [0,1,2,3]

// Example 3:
//    Input: s = "DDI"
//    Output: [3,2,0,1]

// Constraints:
//    1 <= s.length <= 105
//    s[i] is either 'I' or 'D'.

const topVotedDiStringMatch = (S) => {
  let num = [];
  let inc = 0;
  let dec = S.length;
  let i = 0;
  while (num.length !== S.length + 1) {
    num[i] = S[i] === "D" ? dec-- : inc++;
    i++;
  }
  return num;
};
console.log(topVotedDiStringMatch(`IDID`)); // [0,4,1,3,2]
console.log(topVotedDiStringMatch(`III`)); // [0,1,2,3]
console.log(topVotedDiStringMatch(`DDI`)); // [3,2,0,1]

// Couldn't quite grasp the prompt on this one, decided to study solution

// The solution seems very straight forward
// 'I's start from 0 and increment, while 'D's start from the input's length and decrement

const diStringMatch = function (s) {
  let inc = 0,
    dec = s.length;
  return [...s.split(``).map((_, i) => (s[i] === "I" ? inc++ : dec--)), inc];
};
console.log(diStringMatch(`IDID`)); // [0,4,1,3,2]
console.log(diStringMatch(`III`)); // [0,1,2,3]
console.log(diStringMatch(`DDI`)); // [3,2,0,1]

// Came up with this
// Same runtime, but much better memory */

// Delete Columns to Make Sorted          11/21/2021
/* 
// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:

// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

// Example 1:
//    Input: strs = ["cba","daf","ghi"]
//    Output: 1
// Explanation: The grid looks as follows:
//   cba
//   daf
//   ghi
// Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.

// Example 2:
//    Input: strs = ["a","b"]
//    Output: 0
// Explanation: The grid looks as follows:
//   a
//   b
// Column 0 is the only column and is sorted, so you will not delete any columns.

// Example 3:
//    Input: strs = ["zyx","wvu","tsr"]
//    Output: 3
// Explanation: The grid looks as follows:
//   zyx
//   wvu
//   tsr
// All 3 columns are not sorted, so you will delete all 3.

// Constraints:
//    n == strs.length
//    1 <= n <= 100
//    1 <= strs[i].length <= 1000
//    strs[i] consists of lowercase English letters.

const minDeletionSize = function (strs) {
  let ans = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] < strs[j - 1][i]) {
        ans++;
        break;
      }
    }
  }
  return ans;
};
console.log(minDeletionSize(["cba", "daf", "ghi"])); // 1
console.log(minDeletionSize(["a", "b"])); // 0
console.log(minDeletionSize(["zyx", "wvu", "tsr"])); // 3

// Matched top voted */

// Verifying an Alien Dictionary          11/22/2021
/* 
// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

// Example 1:
//    Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
//    Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

// Example 2:
//    Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
//    Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

// Example 3:
//    Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
//    Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length <= 20
//    order.length == 26
//    All characters in words[i] and order are English lowercase letters.

const isAlienSorted = function (words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let charA = words[i].substring(j, j + 1),
        charB = words[i + 1].substring(j, j + 1);
      if (order.indexOf(charA) < order.indexOf(charB)) break;
      if (order.indexOf(charA) > order.indexOf(charB) || charB.length < 1)
        return false;
    }
  }
  return true;
};
console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // true
// prettier-ignore
console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")); // false
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")); // false
console.log(isAlienSorted(["aa", "a"], "abqwertyuioplkjhgfdszxcvnm")); // false

// Great memory, not so great runtime

var topVotedIsAlienSorted = function (words, order) {
  return (
    [...words]
      .sort((a, b) => {
        for (let i = 0; i < a.length; i++) {
          if (a[i] === b[i]) continue;
          if (order.indexOf(a[i]) > order.indexOf(b[i])) return 1;
          if (order.indexOf(a[i]) < order.indexOf(b[i])) return -1;
        }
        return a.length - b.length;
      })
      .join("") === words.join("")
  );
};

// Knew the .sort could do it, but wasn't sure how */

// N-Repeated Element in Size 2N Array          11/23/2021
/* 
// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

// Constraints:
//    2 <= n <= 5000
//    nums.length == 2 * n
//    0 <= nums[i] <= 104
//    nums contains n + 1 unique elements and one of them is repeated exactly n times.a

const repeatedNTimes = function (nums) {
  for (let num of nums) {
    if (nums.indexOf(num) != nums.lastIndexOf(num)) return num;
  }
};
console.log(repeatedNTimes([1, 2, 3, 3])); // 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); // 2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); // 5

// Given that all other elements are unique, if there is more than one occurance of a num, it is our desired output

var topVotedRepeatedNTimes = function (nums) {
  return nums.find((a) => nums.filter((n) => n === a).length > 1);
};
console.log(topVotedRepeatedNTimes([1, 2, 3, 3])); // 3
console.log(topVotedRepeatedNTimes([2, 1, 2, 5, 3, 2])); // 2
console.log(topVotedRepeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); // 5

// I'm a fan of the one-liner, but worst performance than mine */

// Largest Perimeter Triangle         11/24/2021
/* 
// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

// Constraints:
//    3 <= nums.length <= 104
//    1 <= nums[i] <= 106

const topVotedLargestPerimeter = function (A) {
  A.sort((a, b) => b - a);
  const N = A.length - 2;
  for (let i = 0; i < N; i++) {
    console.log(A[i], `<`, A[i + 1], `+`, A[i + 2]);
    if (A[i] < A[i + 1] + A[i + 2]) return A[i] + A[i + 1] + A[i + 2];
  }
  return 0;
};
console.log(topVotedLargestPerimeter([2, 1, 2])); // 5
console.log(topVotedLargestPerimeter([1, 2, 1])); // 0
console.log(topVotedLargestPerimeter([3, 2, 3, 4])); // 10
console.log(topVotedLargestPerimeter([3, 6, 2, 3])); // 8

// Added the console.log line to help visualize a little
// Makes sense

// Terrible runtime, decent memory */

// Squares of a Sorted Array          11/25/2021
/* 
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
//    Input: nums = [-4,-1,0,3,10]
//    Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
//    Input: nums = [-7,-3,2,3,11]
//    Output: [4,9,9,49,121]

// Constraints:
//    1 <= nums.length <= 104
//    -104 <= nums[i] <= 104
//    nums is sorted in non-decreasing order.

const sortedSquares = (nums) =>
  nums.map((cur) => Math.pow(cur, 2)).sort((a, b) => a - b);
console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]

// Clean one-liner

// Tested with both cur*cur and Math.pow(cur,2)
// Math.pow gave better runtime but poorer memory */

// Add to Array-Form of Integer         11/26/2021
/* 
// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Example 1:
//    Input: num = [1,2,0,0], k = 34
//    Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

// Example 4:
//    Input: num = [9,9,9,9,9,9,9,9,9,9], k = 1
//    Output: [1,0,0,0,0,0,0,0,0,0,0]
// Explanation: 9999999999 + 1 = 10000000000

// Constraints:
//    1 <= num.length <= 104
//    0 <= num[i] <= 9
//    num does not contain any leading zeros except for the zero itself.
//    1 <= k <= 104

const addToArrayForm = (num, k) => [...(BigInt(num.join(``)) + BigInt(k) + ``)];
console.log(addToArrayForm([1, 2, 0, 0], 34)); // [1,2,3,4]
console.log(addToArrayForm([2, 7, 4], 181)); // [4,5,5]
console.log(addToArrayForm([2, 1, 5], 806)); // [1,0,2,1]
console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1)); // [1,0,0,0,0,0,0,0,0,0,0]
// prettier-ignore
console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],516)); // [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]

// Pretty terrible runtime, but gets the job done simply
// Also noticed the array is chars and not ints. Still passes tho.

// Tested arrow and normal function notation, arrow notation has worse runtime.

const topVotedAddToArrayForm = function (A, K) {
  let flag = A.length - 1;
  while (K) {
    if (flag < 0) {
      A.unshift(K % 10);
    } else {
      K += A[flag];
      A[flag--] = K % 10;
    }
    K = Math.floor(K / 10);
  }
  return A;
};
// prettier-ignore
console.log(topVotedAddToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],516)); // [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]

// MUCH much better runtime
// This solution felt tedious, but really does it in terms of performance */

// Find the Town Judge          11/27/2021
/* 
// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Constraints:
//    1 <= n <= 1000
//    0 <= trust.length <= 104
//    trust[i].length == 2
//    All the pairs of trust are unique.
//    ai != bi
//    1 <= ai, bi <= n

const topVotedFindJudge = function (n, trust) {
  let count = Array(n).fill(0);

  for (let [p, trustedP] of trust) {
    count[trustedP - 1]++;
    count[p - 1]--;
  }

  return count.includes(n - 1) ? count.indexOf(n - 1) + 1 : -1;
};
console.log(topVotedFindJudge(2, [[1, 2]])); // 2
// prettier-ignore
console.log(topVotedFindJudge(3, [[1,3],[2,3]])); // 3
// prettier-ignore
console.log(topVotedFindJudge(3, [[1,3],[2,3],[3,1]])); // -1
// prettier-ignore
console.log(topVotedFindJudge(3, [[1,2],[2,3]])); // -1
// prettier-ignore
console.log(topVotedFindJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]])); // 3

// Messed around with 'Array(n).fill(0)' but couldn't get it working, seems I was on the right track

// Top voted was a bit messy, but cleaned it up and got what's above
// Great runtime & memory */

// Available Captures for Rook          11/28/2021
/* 
// On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.

// When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is attacking.

// Return the number of available captures for the white rook.

// Example 1:
// Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// https://assets.leetcode.com/uploads/2019/02/20/1253_example_1_improved.PNG
//    Output: 3
// Explanation: In this example, the rook is attacking all the pawns.

// Example 2:
// Input: board = [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// https://assets.leetcode.com/uploads/2019/02/19/1253_example_2_improved.PNG
//    Output: 0
// Explanation: The bishops are blocking the rook from attacking any of the pawns.

// Example 3:
// Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
// https://assets.leetcode.com/uploads/2019/02/20/1253_example_3_improved.PNG
//    Output: 3
// Explanation: The rook is attacking the pawns at positions b5, d6, and f5.

// Constraints:
//    board.length == 8
//    board[i].length == 8
//    board[i][j] is either 'R', '.', 'B', or 'p'
//    There is exactly one cell with board[i][j] == 'R'

const topVotedNumRookCaptures = function (b) {
  let p = [];
  let R = [];
  let B = [];
  let res = 0;
  for (let q = 0; q < 8; q++) {
    for (let w = 0; w < 8; w++) {
      if (b[q][w] == "p") p.push([q, w]);
      if (b[q][w] == "R") R.push(q, w);
      if (b[q][w] == "B") B.push([q, w]);
    }
  }

  //go up
  if (
    p.some(
      (x) =>
        x[1] == R[1] &&
        x[0] < R[0] &&
        !B.some((y) => y[1] == R[1] && y[0] < R[0] && y[0] > x[0])
    )
  )
    res++;
  //go down
  if (
    p.some(
      (x) =>
        x[1] == R[1] &&
        x[0] > R[0] &&
        !B.some((y) => y[1] == R[1] && y[0] > R[0] && y[0] < x[0])
    )
  )
    res++;
  //go left
  if (
    p.some(
      (x) =>
        x[0] == R[0] &&
        x[1] < R[1] &&
        !B.some((y) => y[0] == R[0] && y[1] < R[1] && y[1] > x[1])
    )
  )
    res++;
  //go right
  if (
    p.some(
      (x) =>
        x[0] == R[0] &&
        x[1] > R[1] &&
        !B.some((y) => y[0] == R[0] && y[1] > R[1] && y[1] < x[1])
    )
  )
    res++;

  return res;
};
console.log(
  topVotedNumRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
); // 3
console.log(
  topVotedNumRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "B", "R", "B", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
); // 0
console.log(
  topVotedNumRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    ["p", "p", ".", "R", ".", "p", "B", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
); // 3

// Had something going along these lines, but couldn't get the 'if's quite right
// Makes sense, just very tedious */

// Find Common Characters         11/29/2021
/* 
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length <= 100
//    words[i] consists of lowercase English letters.

const commonChars = function (words) {
  let ans = [];
  for (let c of words[0].split(``)) {
    let existsInAll = true;
    for (let i = 1; i < words.length; i++) {
      if (!words[i].includes(c)) {
        existsInAll = false;
        break;
      }
      words[i] =
        words[i].slice(0, words[i].indexOf(c)) +
        words[i].slice(words[i].indexOf(c) + 1);
    }
    if (existsInAll) ans.push(c);
  }
  return ans;
};
console.log(commonChars(["bella", "label", "roller"])); // ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // ["c","o"]

// Not a fan of it, but no time today
// Still pretty decent runtime & memory

var topVotedCommonChars = function (A) {
  let res = [...A[0]];
  for (let i = 1; i < A.length; i++) {
    res = res.filter((c) => {
      const l = A[i].length;
      A[i] = A[i].replace(c, "");
      return l > A[i].length;
    });
  }
  return res;
};

// This one has much better runtime */

// Maximize Sum Of Array After K Negations          11/30/2021
/* 
// Given an integer array nums and an integer k, modify the array in the following way:

// choose an index i and replace nums[i] with -nums[i].
// You should apply this process exactly k times. You may choose the same index i multiple times.

// Return the largest possible sum of the array after modifying it in this way.

// Example 2:
//    Input: nums = [3,-1,0,2], k = 3
//    Output: 6
// Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].

// Constraints:
//    1 <= nums.length <= 104
//    -100 <= nums[i] <= 100
//    1 <= k <= 104

const largestSumAfterKNegations = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let ans = 0;
  for (k; k > 0; k--)
    nums[0] < 0 && k < nums.filter((x) => x < 0).length
      ? (ans += -nums.shift())
      : (nums[0] = -nums[0]);
  return (ans += nums.reduce((acc, cur) => (acc += cur)));
};
console.log(largestSumAfterKNegations([4, 2, 3], 1)); // 5
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3)); // 6
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)); // 13
console.log(largestSumAfterKNegations([1, 3, 2, 6, 7, 9], 3)); // 26

// Doesn't work for all test cases

var topVotedLargestSumAfterKNegations = function (A, K) {
  while (K > 0) {
    let v = Math.min(...A);
    let i = A.indexOf(v);
    A[i] = -A[i];
    K--;
  }

  return A.reduce((a, c) => a + c, 0);
};
console.log(topVotedLargestSumAfterKNegations([2, -3, -1, 5, -4], 2)); // 13
console.log(topVotedLargestSumAfterKNegations([1, 3, 2, 6, 7, 9], 3)); // 26

// Still pretty bad runtime */

// Complement of Base 10 Integer          12/1/2021
/* 
// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer n, return its complement.

// Example 1:
//    Input: n = 5
//    Output: 2
// Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

// Constraints:
//    0 <= n < 109

const bitwiseComplement = (n) =>
  parseInt(
    n
      .toString(2)
      .split(``)
      .reduce((acc, x) => `${acc}${x == 1 ? 0 : 1}`, ``),
    2
  );
console.log(bitwiseComplement(5)); // 2
console.log(bitwiseComplement(7)); // 0
console.log(bitwiseComplement(10)); // 5

// Decent solution

var topVotedBitwiseComplement = function (N) {
  return parseInt(
    N.toString(2).replace(/[0-1]/g, (v) => (v === "1" ? 0 : 1)),
    2
  );
};

// A bit better runtime, but I am a fan of using regex */

// Partition Array Into Three Parts With Equal Sum          12/2/2021
/* 
// Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

// Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

// Example 1:
//    Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
//    Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

// Example 2:
//    Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
//    Output: false

// Example 3:
//    Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
//    Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

// Constraints:
//    3 <= arr.length <= 5 * 104
//    -104 <= arr[i] <= 104

const canThreePartsEqualSum = function (arr) {
  let first = 0;
  for (let i = 0; i < arr.length; i++) {
    first += arr[i];
    let second = 0;
    for (let j = i + 1; j < arr.length; j++) {
      second += arr[j];
      if (
        first == second &&
        second == arr.slice(j + 1).reduce((acc, cur) => (acc += cur))
      )
        return true;
    }
  }
  return false;
};
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])); // true
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])); // false
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])); // true

// Works but encounter runtime error on LeetCode; Too slow.

var topVotedCanThreePartsEqualSum = function (A) {
  let sum = A.reduce((acc, cur) => acc + cur) / 3;
  let s = 0,
    count = 0;
  for (let num of A) {
    s += num;
    if (s === sum) {
      count++;
      s = 0;
    }
  }
  return count >= 3;
};

// Clever math solution
// Finds average and works from there */

// Remove Outermost Parentheses         12/3/2021
/* 
// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

// Example 1:
//    Input: s = "(()())(())"
//    Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// Constraints:
//    1 <= s.length <= 105
//    s[i] is either '(' or ')'.
//    s is a valid parentheses string.

const topVotedRemoveOuterParentheses = function (S) {
  let parenthesCount = 0;
  let result = "";

  for (const letter of S) {
    if (letter === "(") {
      if (parenthesCount) {
        result += letter;
      }
      parenthesCount++;
    } else {
      parenthesCount--;
      if (parenthesCount) {
        result += letter;
      }
    }
  }

  return result;
};
console.log(removeOuterParentheses("(()())(())")); // "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")); // "()()()()(())"
console.log(removeOuterParentheses("()()")); // ""

// Better than 95% runtime */

// Divisor Game         12/4/2021
/* 
// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

// Choosing any x with 0 < x < n and n % x == 0.
// Replacing the number n on the chalkboard with n - x.
// Also, if a player cannot make a move, they lose the game.

// Return true if and only if Alice wins the game, assuming both players play optimally.

// Example 1:
//    Input: n = 2
//    Output: true
// Explanation: Alice chooses 1, and Bob has no more moves.

// Example 2:
//    Input: n = 3
//    Output: false
// Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

// Constraints:
//    1 <= n <= 1000

const divisorGame = (n) => n % 2 == 0;
console.log(divisorGame(2)); // true
console.log(divisorGame(3)); // false

// The description tries to complicate it, but this is all there is to it
// Better runtime than 90% */

// Valid Boomerang          12/5/2021
/* 
// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

// A boomerang is a set of three points that are all distinct and not in a straight line.

// Constraints:
//    points.length == 3
//    points[i].length == 2
//    0 <= xi, yi <= 100

var topVotedIsBoomerang = ([[ax, ay], [bx, by], [cx, cy]]) =>
  (by - ay) * (cx - bx) !== (cy - by) * (bx - ax);
// prettier-ignore
console.log(topVotedIsBoomerang([[1,1],[2,3],[3,2]]) ); // true
// prettier-ignore
console.log(topVotedIsBoomerang([[1,1],[2,2],[3,3]])); // false */

// Last Stone Weight          12/6/2021
/* 
//  You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the smallest possible weight of the left stone. If there are no stones left, return 0.

// Example 1:
//    Input: stones = [2,7,4,1,8,1]
//    Output: 1
// Explanation:
//    We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
//    we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
//    we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
//    we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// Constraints:
//    1 <= stones.length <= 30
//    1 <= stones[i] <= 1000

const lastStoneWeight = function (s) {
  if (1 === s.length) return s[0];
  return lastStoneWeight(s.sort((a, b) => a - b).concat(s.pop() - s.pop()));
};
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
console.log(lastStoneWeight([1])); // 1

// Inspired by top voted
// Clever to call back function to sort after every substraction */

// Remove All Adjacent Duplicates In String         12/7/2021
/* 
// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

// Example 1:
//    Input: s = "abbaca"
//    Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

// Constraints:
//    1 <= s.length <= 105
//    s consists of lowercase English letters.

const removeDuplicates = function (s) {
  while (/(.)\1/gi.test(s)) s = s.replace(/(.)\1/gi, ``);
  return s;
};
console.log(removeDuplicates("abbaca")); // ca
console.log(removeDuplicates("azxxzy")); // ay

// Exceed runtime limit
// Saw other top voted solutions similar to this, but they didn't seem to work either

var topVotedRemoveDuplicates = function (S) {
  let res = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== res[res.length - 1]) {
      res.push(S[i]);
    } else {
      res.pop();
    }
  }
  return res.join("");
};

// Pretty terrible runtime and memory...
// I prefer my solution, but it unfortunately doesn't work with leetcode */

// Height Checker         12/8/2021
/* 
// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:
//    Input: heights = [1,1,4,2,1,3]
//    Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// Example 2:
//    Input: heights = [5,1,2,3,4]
//    Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

// Example 3:
//    Input: heights = [1,2,3,4,5]
//    Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

// Constraints:
//    1 <= heights.length <= 100
//    1 <= heights[i] <= 100

const topVotedHeightChecker = (heights) => {
  const sorted = [...heights].sort((a, b) => a - b);
  return heights.reduce(
    (total, _, index) => (sorted[index] !== heights[index] ? total + 1 : total),
    0
  );
};
console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
console.log(heightChecker([5, 1, 2, 3, 4])); // 5
console.log(heightChecker([1, 2, 3, 4, 5])); // 0

// Terrible runtime

// No time today, finals season! */

// Greatest Common Divisor of Strings         12/9/2021
/* 
// For two strings s and t, we say "t divides s" if and only if s = t + ... + t  (t concatenated with itself 1 or more times)

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:
//    Input: str1 = "ABCABC", str2 = "ABC"
//    Output: "ABC"

// Example 2:
//    Input: str1 = "ABABAB", str2 = "ABAB"
//    Output: "AB"

// Example 3:
//    Input: str1 = "LEET", str2 = "CODE"
//    Output: ""

// Example 4:
//    Input: str1 = "ABCDEF", str2 = "ABC"
//    Output: ""

// Constraints:
//    1 <= str1.length <= 1000
//    1 <= str2.length <= 1000
//    str1 and str2 consist of English uppercase letters.

const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length));
};
console.log(gcdOfStrings("ABCABC", "ABC")); // "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // "AB"
console.log(gcdOfStrings("LEET", "CODE")); // ""
console.log(gcdOfStrings("ABCDEF", "ABC")); // "" */

// Occurrences After Bigram         12/10/2021
/* 
// Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

// Return an array of all the words third for each occurrence of "first second third".

// Example 1:
//    Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
//    Output: ["girl","student"]

// Example 2:
//    Input: text = "we will we will rock you", first = "we", second = "will"
//    Output: ["we","rock"]

// Constraints:
//    1 <= text.length <= 1000
//    text consists of lowercase English letters and spaces.
//    All the words in text a separated by a single space.
//    1 <= first.length, second.length <= 10
//    first and second consist of lowercase English letters.

const findOcurrences = (text, first, second) =>
  text
    .split(" ")
    .filter((_, i, arr) => arr[i - 2] === first && arr[i - 1] === second);

console.log(
  findOcurrences("alice is a good girl she is a good student", "a", "good")
); // ["girl","student"]
console.log(findOcurrences("we will we will rock you", "we", "will")); // ["we","rock"]

// Better runtime than 85%, decent memory
// Same as top voted */

// Duplicate Zeros          12/11/2021
/* 
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Constraints:
//    1 <= arr.length <= 104
//    0 <= arr[i] <= 9

const duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])); // [1,0,0,2,3,0,0,4]
console.log(duplicateZeros([1, 2, 3])); // [1,2,3]

// Ok runtime, great memory
// Same as top voted */

// Distribute Candies to People           12/12/2021
/* 
// We distribute some number of candies, to a row of n = num_people people in the following way:

// We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

// Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

// This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

// Return an array (of length num_people and sum candies) that represents the final distribution of candies.

// Example 1:
//    Input: candies = 7, num_people = 4
//    Output: [1,2,3,1]
// Explanation:
// On the first turn, ans[0] += 1, and the array is [1,0,0,0].
// On the second turn, ans[1] += 2, and the array is [1,2,0,0].
// On the third turn, ans[2] += 3, and the array is [1,2,3,0].
// On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].

// Example 2:
//    Input: candies = 10, num_people = 3
//    Output: [5,2,3]

// Constraints:
//    1 <= candies <= 10^9
//    1 <= num_people <= 1000

const distributeCandies = (candies, num_people) => {
  let ans = Array(num_people).fill(0);

  let i = 0,
    prev = 0;
  while (candies > 0) {
    if (i > ans.length - 1) i = 0;

    if (candies - (prev + 1) > 0) {
      ans[i] = prev + 1;
      prev = ans[i];
    } else {
      ans[i] += candies;
      break;
    }
    candies -= prev;
    i++;
  }
  return ans;
};
console.log(distributeCandies(7, 4)); // [1,2,3,1]
console.log(distributeCandies(10, 3)); // [5,2,3]

// Doesn't work for all test cases

const topVotedDistributeCandies = (candies, numOfPeople) => {
  const res = new Array(numOfPeople).fill(0);
  let count = 0;
  while (candies > 0) {
    const idx = count++ % numOfPeople;
    const temp = Math.min(count, candies);
    res[idx] += temp;
    candies -= temp;
  }
  return res;
};
console.log(topVotedDistributeCandies(7, 4)); // [1,2,3,1]
console.log(topVotedDistributeCandies(10, 3)); // [5,2,3]

// Clean math solution, very good logic */

// Defanging an IP Address          12/13/2021
/* 
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:
//    Input: address = "1.1.1.1"
//    Output: "1[.]1[.]1[.]1"

// Constraints:
//    The given address is a valid IPv4 address.

const defangIPaddr = (a) => a.replaceAll(`.`, `[.]`);
console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"

// Easiest one in a while
// Better than 90% runtime */

// Relative Sort Array          12/14/2021
/* 
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// Constraints:
//    1 <= arr1.length, arr2.length <= 1000
//    0 <= arr1[i], arr2[i] <= 1000
//    All the elements of arr2 are distinct.
//    Each arr2[i] is in arr1.

const relativeSortArray = function (arr1, arr2) {
  let ans = [];
  for (let a of arr2) ans.push(...arr1.filter((b) => b == a));
  return [
    ...ans,
    ...arr1.filter((x) => !arr2.includes(x)).sort((a, b) => a - b),
  ];
};
console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
); // [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])); // [22,28,8,6,17,44]

// Not great runtime, Ok memory

var topVotedRelativeSortArray = function (arr1, arr2) {
  const lookup = new Map();
  const N = arr2.length;
  arr2.forEach((a, i) => {
    lookup.set(a, i);
  });
  return arr1.sort((a, b) => {
    a = lookup.has(a) ? lookup.get(a) : N + a;
    b = lookup.has(b) ? lookup.get(b) : N + b;
    return a - b;
  });
};

// Hm, clever use of Map() and N
// Worst runtime than my solution, but much better memory */

// Number of Equivalent Domino Pairs          12/15/2021
/* 
// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

// Constraints:
//    1 <= dominoes.length <= 4 * 104
//    dominoes[i].length == 2
//    1 <= dominoes[i][j] <= 9

const topVotedNumEquivDominoPairs = (dominoes) => {
  const seen = new Map();
  let count = 0;

  dominoes.forEach((domino) => {
    domino.sort((a, b) => a - b);
    const str = domino.join("");
    if (seen.get(str)) {
      count += seen.get(str);
      seen.set(str, seen.get(str) + 1);
    } else seen.set(str, 1);
  });
  return count;
};
// prettier-ignore
console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])); // 1
// prettier-ignore
console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]])); // 3 */

// N-th Tribonacci Number         12/16/2021
/* 
// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

// Example 1:
//    Input: n = 4
//    Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// Constraints:
//    0 <= n <= 37
//    The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

const tribonacci = (n) => {
  let arr = [0, 1, 1];
  if (n < 3) return arr[n];
  for (let i = 3; i <= n; i++) arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
  return arr[n];
};
console.log(tribonacci(4)); // 4
console.log(tribonacci(25)); // 1389537 */

// Day of the Year          12/17/2021
/* 
// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

// Example 1:
//    Input: date = "2019-01-09"
//    Output: 9
// Explanation: Given date is the 9th day of the year in 2019.

// Constraints:
//    date.length == 10
//    date[4] == date[7] == '-', and all other date[i]'s are digits
//    date represents a calendar date between Jan 1st, 1900 and Dec 31, 2019.

const dayOfYear = (date) =>
  (new Date(date) - new Date(date.slice(0, 4))) / 1000 / 60 / 60 / 24 + 1;
console.log(dayOfYear("2019-01-09")); // 9
console.log(dayOfYear("2019-02-10")); // 41
console.log(dayOfYear("2003-03-01")); // 60
console.log(dayOfYear("2004-03-01")); // 61

// 100% memory, not greatest runtime
// Date element works great here */

// Find Words That Can Be Formed by Characters          12/18/2021
/* 
// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:
//    Input: words = ["cat","bt","hat","tree"], chars = "atach"
//    Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

// Example 2:
//    Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
//    Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

// Constraints:
//    1 <= words.length <= 1000
//    1 <= words[i].length, chars.length <= 100
//    words[i] and chars consist of lowercase English letters

const topVotedCountCharacters = (words, chars) =>
  words.reduce((acc, cur, i) => {
    for (const c of chars) cur = cur.replace(c, "");
    return acc + (0 === cur.length ? words[i].length : 0);
  }, 0);
console.log(topVotedCountCharacters(["cat", "bt", "hat", "tree"], "atach")); // 6
console.log(
  topVotedCountCharacters(["hello", "world", "leetcode"], "welldonehoneyr")
); // 10

// Wasn't sure whether other chars were allowed or not
// Ended up looking at top voted

// Seems like other chars are not allowed
// Clean solution */

// Prime Arrangements           12/19/2021
/* 
// Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)

// (Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)

// Since the answer may be large, return the answer modulo 10^9 + 7.

// Example 1:
//    Input: n = 5
//    Output: 12
// Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.

// Example 2:
//    Input: n = 100
//    Output: 682289015

// Constraints:
//    1 <= n <= 100

const topVotedNumPrimeArrangements = function (n) {
  var isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    let i = 2;
    while (i <= Math.sqrt(n)) {
      if (n % i == 0) return false;
      i++;
    }
    return true;
  };

  const mod = 10 ** 9 + 7;
  let primes = 0,
    nonPrimes = 0;
  let res = 1;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) res *= ++primes;
    else res *= ++nonPrimes;
    res = res % mod;
  }
  return res;
};
console.log(topVotedNumPrimeArrangements(5)); // 12
console.log(topVotedNumPrimeArrangements(100)); // 682289015

// No time today!
// Final tomorrow */

// Distance Between Bus Stops         12/20/2021
/* 
// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

// The bus goes along both directions i.e. clockwise and counterclockwise.

// Return the shortest distance between the given start and destination stops.

// Example 1:
//    Input: distance = [1,2,3,4], start = 0, destination = 1
//    Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

// Example 2:
//    Input: distance = [1,2,3,4], start = 0, destination = 3
//    Output: 4
// Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.

// Constraints:
//    1 <= n <= 10^4
//    distance.length == n
//    0 <= start, destination < n
//    0 <= distance[i] <= 10^4

const distanceBetweenBusStops = function (dist, s, d) {
  const count = (arr) => arr.reduce((acc, cur) => (acc += cur));
  return Math.min(
    count(dist.slice(s, d)),
    count([...dist.slice(0, s), ...dist.slice(d)])
  );
};
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)); // 1
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)); // 3
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3)); // 4

// Doesn't pass all tests

var topVotedDistanceBetweenBusStops = function (distance, start, destination) {
  if (start > destination) [start, destination] = [destination, start];
  const total = distance.reduce((acc, cur) => acc + cur);
  const route = distance
    .slice(start, destination)
    .reduce((acc, cur) => acc + cur);
  return Math.min(route, total - route);
};

// Smart, does the normal incremental then substracts that from total for the other direction
// Returns shortest of the two */

// Day of the Week          12/21/2021
/* 
// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

// Example 1:
//    Input: day = 31, month = 8, year = 2019
//    Output: "Saturday"

// Constraints:
// The given dates are valid dates between the years 1971 and 2100.

const dayOfTheWeek = (d, m, y) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[new Date(y, m - 1, d).getDay()];
};
console.log(dayOfTheWeek(31, 8, 2019)); // Saturday
console.log(dayOfTheWeek(18, 7, 1999)); // Sunday
console.log(dayOfTheWeek(15, 8, 1993)); // Sunday

// Decent runtime
// Same as all top voted submissions */

// Maximum Number of Balloons         12/22/2021
/* 
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Constraints:
//    1 <= text.length <= 104
//    text consists of lower case English letters only.

const maxNumberOfBalloons = (text) => {
  let count = {};
  for (let c of text) count[c] ? count[c]++ : (count[c] = 1);

  let min = Number.MAX_SAFE_INTEGER;
  for (let c of `balon`) {
    if (c == "l" || c == "o") {
      min = Math.min(min, Math.floor(count[c] / 2));
      continue;
    }
    min = Math.min(min, count[c]);
  }

  return min ? min : 0;
};
console.log(maxNumberOfBalloons("nlaebolko")); // 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // 2
console.log(maxNumberOfBalloons("leetcode")); // 0
console.log(maxNumberOfBalloons("ballon")); // 0

// OK runtime and memory

const topVotedMaxNumberOfBalloons = (text) => {
  let obj = {},
    balloonCount = 0;
  for (let el of text) {
    obj[el] = (obj[el] || 0) + 1;
  }
  while (
    obj["a"] > 0 &&
    obj["b"] > 0 &&
    obj["l"] > 1 &&
    obj["n"] > 0 &&
    obj["o"] > 1
  ) {
    balloonCount++;
    obj["a"]--;
    obj["b"]--;
    obj["l"] -= 2;
    obj["n"]--;
    obj["o"] -= 2;
  }
  return balloonCount;
};
console.log(topVotedMaxNumberOfBalloons("nlaebolko")); // 1
console.log(topVotedMaxNumberOfBalloons("loonbalxballpoon")); // 2
console.log(topVotedMaxNumberOfBalloons("leetcode")); // 0
console.log(topVotedMaxNumberOfBalloons("ballon")); // 0

// Same idea, different execution
// Much better runtime */

// Minimum Absolute Difference          12/23/2021
/* 
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Example 1:
//    Input: arr = [4,2,1,3]
//    Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// Example 2:
//    Input: arr = [1,3,6,10,15]
//    Output: [[1,3]]

// Constraints:
//    2 <= arr.length <= 10^5
//    -10^6 <= arr[i] <= 10^6

const minimumAbsDifference = function (arr) {
  arr = arr.sort((a, b) => a - b);

  let smallestDif = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++)
    smallestDif = Math.min(smallestDif, Math.abs(arr[i - 1] - arr[i]));

  let ans = [];
  for (let i = 1; i < arr.length; i++)
    if (Math.abs(arr[i - 1] - arr[i]) == smallestDif)
      ans.push([arr[i - 1], arr[i]]);

  return ans;
};
console.log(minimumAbsDifference([4, 2, 1, 3])); // [[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1, 3, 6, 10, 15])); // [[1,3]]
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); // [[-14,-10],[19,23],[23,27]]

// Faster than 90% of submissions and better memory usage than 97%
// Same as top voted, but faster */

// Unique Number of Occurrences         12/24/2021
/* 
//  Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

// Example 1:
//    Input: arr = [1,2,2,1,1,3]
//    Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Constraints:
//    1 <= arr.length <= 1000
//    -1000 <= arr[i] <= 1000

const uniqueOccurrences = function (arr) {
  let count = {};
  for (let x of arr) count[x] = (count[x] || 0) + 1;

  return [...Object.values(count)].length == new Set(Object.values(count)).size;
};
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true

// Not greatest runtime

const topVotedUniqueOccurrences = function (arr) {
  let myMap = new Map();

  for (let num of arr) {
    if (myMap.has(num)) {
      myMap.set(num, myMap.get(num) + 1);
    } else {
      myMap.set(num, 1);
    }
  }

  let mySet = new Set();
  for (const val of myMap.values()) {
    if (mySet.has(val)) return false;
    mySet.add(val);
  }
  return true;
};

// Same idea, better runtime, longer code */

// Minimum Cost to Move Chips to The Same Position          12/25/2021
/* 
// We have n chips, where the position of the ith chip is position[i].

// We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

// position[i] + 2 or position[i] - 2 with cost = 0.
// position[i] + 1 or position[i] - 1 with cost = 1.
// Return the minimum cost needed to move all the chips to the same position.

// Example 1:
//    Input: position = [1,2,3]
//    Output: 1
// Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
// Second step: Move the chip at position 2 to position 1 with cost = 1.
// Total cost is 1.

// Example 2:
//    Input: position = [2,2,2,3,3]
//    Output: 2
// Explanation: We can move the two chips at position  3 to position 2. Each move has cost = 1. The total cost = 2.

// Example 3:
//    Input: position = [1,1000000000]
//    Output: 1

// Constraints:
//    1 <= position.length <= 100
//    1 <= position[i] <= 10^9

const topVotedMinCostToMoveChips = function (chips) {
  let odd = 0,
    even = 0;
  chips.map((x) => (x % 2 ? (odd += 1) : (even += 1)));
  return Math.min(odd, even);
};
console.log(topVotedMinCostToMoveChips([1, 2, 3])); // 1
console.log(topVotedMinCostToMoveChips([2, 2, 2, 3, 3])); // 2
console.log(topVotedMinCostToMoveChips([1, 1000000000])); // 1

// Taking a break today, but very clever solution

// Merry Christmas 🎄🎅

// Omnicron variant is splintering half the families I know this year
// I'm thankful for the little christmas we're having and understand that not everyone can be so lucky */

// Split a String in Balanced Strings         12/26/2021
/* 
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

// Example 1:
//    Input: s = "RLRRLLRLRL"
//    Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:
//    Input: s = "RLLLLRRRLR"
//    Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

// Example 3:
//    Input: s = "LLLLRRRR"
//    Output: 1
// Explanation: s can be split into "LLLLRRRR".

// Constraints:
//    1 <= s.length <= 1000
//    s[i] is either 'L' or 'R'.
//    s is a balanced string.

const balancedStringSplit = function (s) {
  let count = 1,
    results = 0;
  for (let i = 1; i < s.length; i++) {
    s[i] == s[0] ? count++ : count--;
    if (count == 0) results++;
  }
  return results;
};
console.log(balancedStringSplit("RLRRLLRLRL")); // 4
console.log(balancedStringSplit("RLLLLRRRLR")); // 3
console.log(balancedStringSplit("LLLLRRRR")); // 1 */

// Check If It Is a Straight Line         12/27/2021
/* 
// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Constraints:
//    2 <= coordinates.length <= 1000
//    coordinates[i].length == 2
//    -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
//    coordinates contains no duplicate point.

const topVotedCheckStraightLine = (coords) => {
  const n = coords.length;

  for (let i = 0; i < n - 2; i++) {
    const area = Math.abs(
      0.5 *
        (coords[i][0] * coords[i + 1][1] +
          coords[i + 1][0] * coords[i + 2][1] +
          coords[i + 2][0] * coords[i][1] -
          (coords[i][1] * coords[i + 1][0] +
            coords[i + 1][1] * coords[i + 2][0] +
            coords[i + 2][1] * coords[i][0]))
    );

    if (area > 0) return false;
  }

  return true;
};
// prettier-ignore
console.log(topVotedCheckStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])); // true
// prettier-ignore
console.log(topVotedCheckStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])); // false

// Clever solution
// Smart use of area */

// Cells with Odd Values in a Matrix          12/28/2021
/* 
// There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

// For each location indices[i], do both of the following:

// Increment all the cells on row ri.
// Increment all the cells on column ci.
// Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

// Example 1:
//    Input: m = 2, n = 3, indices = [[0,1],[1,1]]
//    Output: 6
// Explanation: Initial matrix = [[0,0,0],[0,0,0]].
// After applying first increment it becomes [[1,2,1],[0,1,0]].
// The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.

// Example 2:
//    Input: m = 2, n = 2, indices = [[1,1],[0,0]]
//    Output: 0
// Explanation: Final matrix = [[2,2],[2,2]]. There are no odd numbers in the final matrix.

// Constraints:
//    1 <= m, n <= 50
//    1 <= indices.length <= 100
//    0 <= ri < m
//    0 <= ci < n

const oddCells = (m, n, indices) => {
  let ans = new Array(m).fill(new Array(n).fill(0));

  for (const [r, c] of indices) {
    ans[r] = ans[r].map((x) => x + 1);
    for (let i = 0; i < m; i++) ans[i][c]++;
  }

  return ans.reduce((acc, cur) => (acc += cur.filter((x) => x % 2).length), 0);
};
// prettier-ignore
console.log(oddCells(2,  3,  [[0,1],[1,1]])); // 6
// prettier-ignore
console.log(oddCells(2,  2,  [[1,1],[0,0]])); // 0

// Pretty clean, doesn't pass all test cases

const topVotedOddCells = (row, column, indices) => {
  const rowCount = new Uint8Array(row);
  const columnCount = new Uint8Array(column);
  let oddRow = 0;
  let oddColumn = 0;

  for (let i = 0; i < indices.length; ++i) {
    (++rowCount[indices[i][0]] & 1) === 1 ? ++oddRow : --oddRow;
    (++columnCount[indices[i][1]] & 1) === 1 ? ++oddColumn : --oddColumn;
  }

  return oddRow * column + oddColumn * row - 2 * oddRow * oddColumn;
};

// Clever math solution */

// Shift 2D Grid          12/29/2021
/* 
// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

// Example 1:
//    Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
//    Output: [[9,1,2],[3,4,5],[6,7,8]]

// Constraints:
//    m == grid.length
//    n == grid[i].length
//    1 <= m <= 50
//    1 <= n <= 50
//    -1000 <= grid[i][j] <= 1000
//    0 <= k <= 100

const shiftGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  while (k >= m * n) k -= m * n;

  if (k > 0) {
    let nums = grid.flat();
    for (let i = 0; i < k; i++) nums = [nums.pop(), ...nums];
    for (let j = 0; j < m; j++) grid[j] = nums.splice(0, n);
  }

  return grid;
};
// prettier-ignore
console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1)); // [[9,1,2],[3,4,5],[6,7,8]]
// prettier-ignore
console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4)); // [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
// prettier-ignore
console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 9)); // [[1,2,3],[4,5,6],[7,8,9]]

// Terrible runtime as expected due to double for loop, but easy logic

var topVotedShiftGrid = function (grid, k) {
  var arr = grid.flat(),
    n = grid[0].length,
    res = [];

  while (k--) arr.unshift(arr.pop());
  while (arr.length) res.push(arr.splice(0, n));

  return res;
};

// So much cleaner... I love it */

// Minimum Time Visiting All Points         12/30/2021
/* 
// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:

// In 1 second, you can either:
// move vertically by one unit,
// move horizontally by one unit, or
// move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.

// Example 1:
//    Input: points = [[1,1],[3,4],[-1,0]]
//    Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
// Time from [1,1] to [3,4] = 3 seconds
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

// Constraints:
//    points.length == n
//    1 <= n <= 100
//    points[i].length == 2
//    -1000 <= points[i][0], points[i][1] <= 1000

const topVotedMinTimeToVisitAllPoints = (points) => {
  let times = 0;
  for (let i = 1; i < points.length; ++i) {
    const p0 = points[i - 1];
    const p1 = points[i];
    times += Math.max(Math.abs(p1[0] - p0[0]), Math.abs(p1[1] - p0[1]));
  }
  return times;
};
// prettier-ignore
console.log(topVotedMinTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])); // 7
// prettier-ignore
console.log(topVotedMinTimeToVisitAllPoints([[3,2],[-2,2]])); // 5 */

// Find Winner on a Tic Tac Toe Game          12/31/2021
/* 
// Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

// Players take turns placing characters into empty squares ' '.
// The first player A always places 'X' characters, while the second player B always places 'O' characters.
// 'X' and 'O' characters are always placed into empty squares, never on filled ones.
// The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".

// You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

// Example 1:
//    Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
//    Output: "A"
// Explanation: A wins, they always play first.

// Example 2:
//    Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
//    Output: "B"
// Explanation: B wins.

// Example 3:
//    Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
//    Output: "Draw"
// Explanation: The game ends in a draw since there are no moves to make.

// Constraints:
//    1 <= moves.length <= 9
//    moves[i].length == 2
//    0 <= rowi, coli <= 2
//    There are no repeated elements on moves.
//    moves follow the rules of tic tac toe.

const tictactoe = function (moves) {
  let f = [
    [` `, ` `, ` `],
    [` `, ` `, ` `],
    [` `, ` `, ` `],
  ];
  let curPlayer = `A`;
  for (let [row, col] of moves) {
    f[row][col] = curPlayer;
    curPlayer = curPlayer == `A` ? `B` : `A`;
  }

  if (
    (f[0][0] === f[1][1] && f[1][1] === f[2][2] && f[1][1] !== " ") ||
    (f[2][0] === f[1][1] && f[1][1] === f[0][2] && f[1][1] !== " ")
  )
    return f[1][1];

  if (f[0][0] === f[0][1] && f[0][1] === f[0][2] && f[0][0] !== " ")
    return f[0][0];
  if (f[1][0] === f[1][1] && f[1][1] === f[1][2] && f[1][0] !== " ")
    return f[1][0];
  if (f[2][0] === f[2][1] && f[2][1] === f[2][2] && f[2][0] !== " ")
    return f[2][0];

  if (f[0][0] === f[1][0] && f[1][0] === f[2][0] && f[0][0] !== " ")
    return f[0][0];
  if (f[0][1] === f[1][1] && f[1][1] === f[2][1] && f[0][1] !== " ")
    return f[0][1];
  if (f[0][2] === f[1][2] && f[1][2] === f[2][2] && f[0][2] !== " ")
    return f[0][2];

  return f.find((item) => item.includes(" ")) ? "Pending" : "Draw";
};
// prettier-ignore
console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])); // A
// prettier-ignore
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]])); // B
// prettier-ignore
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])); // Draw

// Terrible runtime but amazing memory

// Got the first half here, but didn't want to grind out all the possible win cases
// Ended up copying them from another submission

const topVotedTictactoe = (moves) => {
  const cases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const grid = new Uint8Array(9);
  for (let i = 0; i < moves.length; ++i) {
    grid[moves[i][0] * 3 + moves[i][1]] = (i % 2) + 1;
  }
  for (let i = 0; i < cases.length; ++i) {
    const role = grid[cases[i][0]];
    if (
      role !== 0 &&
      grid[cases[i][1]] === role &&
      grid[cases[i][2]] === role
    ) {
      return role === 1 ? "A" : "B";
    }
  }
  return moves.length === 9 ? "Draw" : "Pending";
};

// This seems to be the standard accepted solution, but it has equally terrible runtime */
