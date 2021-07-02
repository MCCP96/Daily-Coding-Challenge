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

console.log(`Hello GitHub!`);
console.log(`Push Test`);
