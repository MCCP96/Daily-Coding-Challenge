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

//  Break camelCase         7/4/2021
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
// My solution is on par with them.
