// Subtract the Product and Sum of Digits of an Integer         1/1/2022
/* 
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:
//    Input: n = 234
//    Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

// Constraints:
//    1 <= n <= 10^5

const subtractProductAndSum = function (n) {
  const nums = String(n)
    .split(``)
    .map((x) => Number(x));
  return (
    nums.reduce((acc, cur) => (acc *= cur)) -
    nums.reduce((acc, cur) => (acc += cur))
  );
};
console.log(subtractProductAndSum(234)); // 15
console.log(subtractProductAndSum(4421)); // 21
console.log(subtractProductAndSum(114)); // -2

// Great runtime, OK memory
// nums array can surely be built in a more optimal way

var topVotedSubtractProductAndSum = function (n) {
  const digits = Array.from(String(n), Number);
  const sum = digits.reduce((a, b) => a + b);
  const product = digits.reduce((a, b) => a * b);
  return product - sum;
};

// Same idea, cleaner code */

// Element Appearing More Than 25% In Sorted Array          1/2/2022
/* 
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

// Constraints:
//    1 <= arr.length <= 104
//    0 <= arr[i] <= 105

const findSpecialInteger = function (arr) {
  let count = {};
  for (let n of arr) count[n] ? count[n]++ : (count[n] = 1);
  let max = 0;
  for (let n in count) if (count[n] > count[max]) max = n;
  return max;
};
console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])); // 6
console.log(findSpecialInteger([1, 1])); // 1

// Not a fan of my solution

var topVotedFindSpecialInteger = function (arr) {
  const ws = Math.floor(arr.length / 4);
  for (let i = 0; i < arr.length - ws; i++)
    if (arr[i] === arr[i + ws]) return arr[i];
  return -1;
};

// Much better
// Great memory, not great runtime */

// Find Numbers with Even Number of Digits          1/3/2022
/* 
// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:
//    Input: nums = [12,345,2,6,7896]
//    Output: 2
// Explanation:
//    12 contains 2 digits (even number of digits).
//    345 contains 3 digits (odd number of digits).
//    2 contains 1 digit (odd number of digits).
//    6 contains 1 digit (odd number of digits).
//    7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

// Constraints:
//    1 <= nums.length <= 500
//    1 <= nums[i] <= 105

const findNumbers = (nums) =>
  nums.reduce((acc, cur) => {
    if (!(String(cur).length % 2)) acc++;
    return acc;
  }, 0);
console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
console.log(findNumbers([555, 901, 482, 1771])); // 1

// Decent runtime & memory
// Definitely a one-liner possible here */

// Replace Elements with Greatest Element on Right Side         1/4/2022
/* 
// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:
//    Input: arr = [17,18,5,4,6,1]
//    Output: [18,6,6,6,1,-1]
// Explanation:
//    - index 0 --> the greatest element to the right of index 0 is index 1 (18).
//    - index 1 --> the greatest element to the right of index 1 is index 4 (6).
//    - index 2 --> the greatest element to the right of index 2 is index 4 (6).
//    - index 3 --> the greatest element to the right of index 3 is index 4 (6).
//    - index 4 --> the greatest element to the right of index 4 is index 5 (1).
//    - index 5 --> there are no elements to the right of index 5, so we put -1.

// Example 2:
//    Input: arr = [400]
//    Output: [-1]
// Explanation: There are no elements to the right of index 0.

// Constraints:
//    1 <= arr.length <= 104
//    1 <= arr[i] <= 105

const replaceElements = (arr) =>
  arr.map((_, i, arr) =>
    i == arr.length - 1 ? -1 : Math.max(...arr.slice(i + 1))
  );
console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
console.log(replaceElements([400])); // [-1]

// Clean code
// Not the greatest runtime nor memory

const topVotedReplaceElements = (arr) => {
  const result = new Array(arr.length);
  result[arr.length - 1] = -1;

  for (let i = arr.length - 1; i > 0; i -= 1) {
    result[i - 1] = Math.max(arr[i], result[i]);
  }

  return result;
};

// Bit better runtime/memory */

// Find N Unique Integers Sum up to Zero          1/5/2022
/* 
//  Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:
//    Input: n = 5
//    Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Constraints:
//    1 <= n <= 1000

var topVotedSumZero = function (n) {
  var num = Math.floor(n / 2);
  var res = [];

  for (var i = 1; i <= num; i++) res.push(i, -i);

  if (n % 2 !== 0) res.push(0);

  return res;
};
console.log(topVotedSumZero(5)); // [-5,-1,1,2,3]
console.log(topVotedSumZero(3)); // [-1,0,1]
console.log(topVotedSumZero(1)); // [0]

// Tried for a bit, but no time today

// Very clean & straightforward solution */

// Decrypt String from Alphabet to Integer Mapping          1/6/2022
/* 
// You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// The test cases are generated so that a unique mapping will always exist.

// Example 1:
//    Input: s = "10#11#12"
//    Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

// Constraints:
//    1 <= s.length <= 1000
//    s consists of digits and the '#' letter.
//    s will be a valid string such that mapping is always possible.

const topVotedFreqAlphabets = (s) =>
  s
    .match(/\d{2}(?=#)|\d/g)
    .map((num) => String.fromCharCode(96 + +num))
    .join("");

console.log(topVotedFreqAlphabets("10#11#12")); // jkab
console.log(topVotedFreqAlphabets("1326#")); // acz

// Perfect Regex use case */

// Decompress Run-Length Encoded List         1/7/2022
/* 
// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

// Example 1:
//    Input: nums = [1,2,3,4]
//    Output: [2,4,4,4]
// Explanation:
// The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

// Constraints:
//    2 <= nums.length <= 100
//    nums.length % 2 == 0
//    1 <= nums[i] <= 100

const decompressRLElist = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i += 2)
    ans.push(Array(nums[i]).fill(nums[i + 1]));
  return ans.flat();
};
console.log(decompressRLElist([1, 2, 3, 4])); // [2,4,4,4]
console.log(decompressRLElist([1, 1, 2, 3])); // [1,3,3]

// Top 1% memory, not so great runtime
// Clean, simple code

var topVotedDecompressRLElist = (nums) =>
  nums.reduce(
    (acc, cur, i, arr) =>
      i % 2 ? [...acc, ...Array(arr[i - 1]).fill(cur)] : acc,
    []
  );

// Was thinking of how to do this using .reduce, but i+=2 seemed simpler
// Much worst runtime & memory */

// Convert Integer to the Sum of Two No-Zero Integers         1/8/2022
/* 
// No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

// Given an integer n, return a list of two integers [A, B] where:

// A and B are No-Zero integers.
// A + B = n
// The test cases are generated so that there is at least one valid solution. If there are many valid solutions you can return any of them.

// Example 1:
//    Input: n = 2
//    Output: [1,1]
// Explanation: A = 1, B = 1. A + B = n and both A and B do not contain any 0 in their decimal representation.

// Constraints:
//    2 <= n <= 104

const getNoZeroIntegers = (n) => [1, n - 1];
console.log(getNoZeroIntegers(2)); // [1,1]
console.log(getNoZeroIntegers(11)); // [1,10]
console.log(getNoZeroIntegers(10000)); // [1,9999]

// Not sure why this isn't working

var topVotedGetNoZeroIntegers = function (n) {
  for (let i = 0; i < n; i++) {
    if (!i.toString().includes("0") && !(n - i).toString().includes("0")) 
      return [i, n - i];
  return [];
};

// 'does not contain any 0 in its decimal representation', I see. */

// Maximum 69 Number          1/9/2022

// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Example 1:
//    Input: num = 9669
//    Output: 9969
// Explanation:
//    Changing the first digit results in 6669.
//    Changing the second digit results in 9969.
//    Changing the third digit results in 9699.
//    Changing the fourth digit results in 9666.
// The maximum number is 9969.

// Constraints:
//    1 <= num <= 104
//    num consists of only 6 and 9 digits.

const maximum69Number = (n) => n.toString(10).replace(6, 9);
console.log(maximum69Number(9669)); // 9969
console.log(maximum69Number(9996)); // 9999
console.log(maximum69Number(9999)); // 9999

// Perfect
// Better runtime than 99.5%, top 50% memory

// Identical to top voted
