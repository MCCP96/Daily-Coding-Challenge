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
/* 
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

// Identical to top voted */

// Rank Transform of an Array         1/10/2022
/* 
// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

// Example 1:
//    Input: arr = [40,10,20,30]
//    Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

// Example 2:
//    Input: arr = [100,100,100]
//    Output: [1,1,1]
// Explanation: Same elements share the same rank.

// Constraints:
//    0 <= arr.length <= 105
//    -109 <= arr[i] <= 109

const topVotedArrayRankTransform = function (arr) {
  [...new Set(arr)]
    .sort((a, b) => a - b)
    .map((cur, i) => {
      Map[cur] = i + 1;
    });
  return [...arr.map((cur) => Map[cur])];
};
console.log(topVotedArrayRankTransform([40, 10, 20, 30])); // [4,1,2,3]
console.log(topVotedArrayRankTransform([100, 100, 100])); // [1,1,1]
console.log(topVotedArrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])); // [5,3,4,2,8,6,7,1,3]

// No time today, first day of class

// Great use of Maps, I seem to overlook them a lot

// "The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value." */

// Remove Palindromic Subsequences          1/11/2022
/* 
// You are given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s.

// Return the minimum number of steps to make the given string empty.

// A string is a subsequence of a given string if it is generated by deleting some characters of a given string without changing its order. Note that a subsequence does not necessarily need to be contiguous.

// A string is called palindrome if is one that reads the same backward as well as forward.

// Example 1:
//    Input: s = "ababa"
//    Output: 1
// Explanation: s is already a palindrome, so its entirety can be removed in a single step.

// Example 2:
//    Input: s = "abb"
//    Output: 2
// Explanation: "abb" -> "bb" -> "".
// Remove palindromic subsequence "a" then "bb".

// Example 3:
//    Input: s = "baabb"
//    Output: 2
// Explanation: "baabb" -> "b" -> "".
// Remove palindromic subsequence "baab" then "b".

// Constraints:
//    1 <= s.length <= 1000
//    s[i] is either 'a' or 'b'.

const removePalindromeSub = function (s) {
  if (!s) return 0;
  for (let i = 0, j = s.length - 1; i < j; i++, j--)
    if (s.charAt(i) !== s.charAt(j)) return 2;
  return 1;
};
console.log(removePalindromeSub("ababa")); // 1
console.log(removePalindromeSub("abb")); // 2
console.log(removePalindromeSub("baabb")); // 2

// Pretty terrible runtime

const topVotedRemovePalindromeSub = (s) =>
  s.length === 0 ? 0 : s.split("").reverse().join("") === s ? 1 : 2;

// Also not the greatest runtime */

// The K Weakest Rows in a Matrix         1/12/2022
/* 
// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

// Example 1:
//    Input: mat =
//    [[1,1,0,0,0],
//     [1,1,1,1,0],
//     [1,0,0,0,0],
//     [1,1,0,0,0],
//     [1,1,1,1,1]],
//    k = 3
// Output: [2,0,3]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 2
// - Row 1: 4
// - Row 2: 1
// - Row 3: 2
// - Row 4: 5
// The rows ordered from weakest to strongest are [2,0,3,1,4].

// Example 2:
//    Input: mat =
//    [[1,0,0,0],
//     [1,1,1,1],
//     [1,0,0,0],
//     [1,0,0,0]],
//    k = 2
// Output: [0,2]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 1
// - Row 1: 4
// - Row 2: 1
// - Row 3: 1
// The rows ordered from weakest to strongest are [0,2,3,1].

// Constraints:
//    m == mat.length
//    n == mat[i].length
//    2 <= n, m <= 100
//    1 <= k <= m
//    matrix[i][j] is either 0 or 1

const kWeakestRows = function (mat, k) {
  let rank = mat.map((row) => row.join(``).match(/[1]/g).length);

  let ans = [];
  for (let i = 0; i < k; i++) {
    let index = rank.indexOf(Math.min(...rank));
    rank[index] = Number.MAX_SAFE_INTEGER;
    ans.push(index);
  }
  return ans;
};
// prettier-ignore
console.log(kWeakestRows(
  [[1,1,0,0,0],
  [1,1,1,1,0],
  [1,0,0,0,0],
  [1,1,0,0,0],
  [1,1,1,1,1]], 3)); // [2,0,3]
// prettier-ignore
console.log(kWeakestRows(
  [[1,0,0,0],
   [1,1,1,1],
   [1,0,0,0],
   [1,0,0,0]], 2)); // [0,2]

//  Returns correct answer, however leetcode returns runtime error

var topVotedKWeakestRows = function (mat, k) {
  return (
    mat
      .map((e, i) => [i, e.reduce((acc, cur) => acc + cur, 0)])
      //turn the array into [index, sum of soilders] form
      .sort((a, b) => (a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]))
      //sort the array: if the number of soilders is equal then sort with the index of the row
      .map((x) => x[0])
      //take of the row index of the sorted result
      .slice(0, k)
  );
  //slice the result according to k number
};

// Nice! */

// Number of Steps to Reduce a Number to Zero         1/13/2022
/* 
// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example 1:
//    Input: num = 14
//    Output: 6
// Explanation:
//    Step 1) 14 is even; divide by 2 and obtain 7.
//    Step 2) 7 is odd; subtract 1 and obtain 6.
//    Step 3) 6 is even; divide by 2 and obtain 3.
//    Step 4) 3 is odd; subtract 1 and obtain 2.
//    Step 5) 2 is even; divide by 2 and obtain 1.
//    Step 6) 1 is odd; subtract 1 and obtain 0.

// Constraints:
//    0 <= num <= 106

const numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    num % 2 ? num-- : (num = Math.abs(num / 2));
    count++;
  }
  return count;
};
console.log(numberOfSteps(14)); // 6
console.log(numberOfSteps(8)); // 4
console.log(numberOfSteps(123)); // 12

// Pretty ok, very basic

const topVotedNumberOfSteps = (num, steps = 0) =>
  num === 0 ? steps : numberOfSteps(num & 1 ? num - 1 : num >> 1, ++steps);

// Clever */

// Check If N and Its Double Exist          1/14/2022
/* 
// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:
//    Input: arr = [10,2,5,3]
//    Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

// Example 2:
//    Input: arr = [7,1,14,11]
//    Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

// Example 3:
//    Input: arr = [3,1,7,11]
//    Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.

// Constraints:
//    2 <= arr.length <= 500
//    -10^3 <= arr[i] <= 10^3

const checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++)
    if (
      arr.filter((x) => x != 0 && (x == arr[i] / 2 || x == arr[i] * 2))
        .length >= 1
    )
      return true;

  return false;
};
console.log(checkIfExist([10, 2, 5, 3])); // true
console.log(checkIfExist([7, 1, 14, 11])); // true
console.log(checkIfExist([3, 1, 7, 11])); // false
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8])); // false

// Zeros causing trouble

var topVotedCheckIfExist = function (A) {
  let set = new Set();

  for (let e of A) {
    if (set.has(e * 2) || set.has(e / 2)) return true;
    set.add(e);
  }

  return false;
};
// Set solution

var topVoted2CheckIfExist = function (A) {
  let map = new Map();

  for (let e of A) {
    if (map.has(e * 2) || map.has(e / 2)) return true;
    map.set(e, true);
  }

  return false;
};
// Map solution

// I'm a fan of the set solution, very simple and straightforward */

// Count Negative Numbers in a Sorted Matrix          1/15/2022
/* 
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Example 1:
//    Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
//    Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Constraints:
//    m == grid.length
//    n == grid[i].length
//    1 <= m, n <= 100
//    -100 <= grid[i][j] <= 100

// Follow up: Could you find an O(n + m) solution?

const countNegatives = (grid) => grid.flat().filter((x) => x < 0).length;

// prettier-ignore
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])); // 8
// prettier-ignore
console.log(countNegatives([[3,2],[1,0]])); // 0

// Clean one-liner
// Same as top voted */

// Sort Integers by The Number of 1 Bits          1/16/2022
/* 
// You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the array after sorting it.

// Example 1:
//    Input: arr = [0,1,2,3,4,5,6,7,8]
//    Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]

// Example 2:
//    Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
//    Output: [1,2,4,8,16,32,64,128,256,512,1024]
// Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

// Constraints:
//    1 <= arr.length <= 500
//    0 <= arr[i] <= 104

const sortByBits = function (arr) {
  arr = arr.sort((a, b) => a - b);
  let pos = new Map();

  arr.map((x) => {
    const count = x.toString(2).replaceAll(0, "").length;
    pos.set(x, count);
  });

  return [...pos.entries()].sort((a, b) => a[1] - b[1]).map((x) => x[0]);
};
console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])); // [0,1,2,4,8,3,5,6,7]
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])); // [1,2,4,8,16,32,64,128,256,512,1024]
console.log(sortByBits([10000, 10000])); // [10000,10000]

// Map unfortunately doesn't take into account identical values (as seen in last test case)
// I need to practice my Maps more

const topVotedSortByBits = function (arr) {
  return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};

const bitCount = (num) => {
  let sum = 0;
  while (num) {
    sum += num & 1;
    num = num >> 1;
  }
  return sum;
};

// Clean

const newSortByBits = (arr) =>
  arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
const newBitCount = (num) => num.toString(2).replaceAll(0, "").length;

// A little mix of both solutions */

// Number of Days Between Two Dates         1/17/2022
/* 
// Write a program to count the number of days between two dates.

// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

// Example 1:
//    Input: date1 = "2019-06-29", date2 = "2019-06-30"
//    Output: 1

// Constraints:
//    The given dates are valid dates between the years 1971 and 2100.

const daysBetweenDates = (date1, date2) =>
  Math.round(
    Math.abs(new Date(date1) - new Date(date2)) / (24 * 60 * 60 * 1000)
  );
console.log(daysBetweenDates("2019-06-29", "2019-06-30")); // 1
console.log(daysBetweenDates("2020-01-15", "2019-12-31")); // 15

// Better runtime than 90%
// Same as top voted */

// How Many Numbers Are Smaller Than the Current Number         1/18/2022
/* 
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:
//    Input: nums = [8,1,2,2,3]
//    Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Constraints:
//    2 <= nums.length <= 500
//    0 <= nums[i] <= 100

const smallerNumbersThanCurrent = (nums) =>
  nums.map((x, _, arr) => arr.reduce((acc, cur) => (cur < x ? ++acc : acc), 0));
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]

// Decent one-liner, good runtime

var topVotedSmallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map((num) => sorted.indexOf(num));
};

// Clever, but much worse runtime */

// Increasing Decreasing String         1/19/2022
/* 
// You are given a string s. Reorder the string using the following algorithm:

// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.

// Example 1:
//    Input: s = "aaaabbbbcccc"
//    Output: "abccbaabccba"
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

// Example 2:
//    Input: s = "rat"
//    Output: "art"
// Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.

// Constraints:
//    1 <= s.length <= 500
//    s consists of only lowercase English letters.

const topVotedSortString = (s) => {
  s = s.split``.sort().join``;
  let result = "";
  while (s.length) {
    result += s.match(/([a-z])(?!\1)/gi).join``;
    s = s.replace(/([a-z])(?!\1)/gi, "");
    result += (s.match(/([a-z])(?!\1)/gi) || []).reverse().join``;
    s = s.replace(/([a-z])(?!\1)/gi, "");
  }
  return result;
};
console.log(topVotedSortString("aaaabbbbcccc")); // "abccbaabccba"
console.log(topVotedSortString("rat")); // "art"

// Messed with it a bit, but couldn't get anything going
// This is along the lines I was going
 */

// Generate a String With Characters That Have Odd Counts         1/20/2022
/* 
// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

// Example 1:
//    Input: n = 4
//    Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

// Example 2:
//    Input: n = 2
//    Output: "xy"
// Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".

// Constraints:
//    1 <= n <= 500

const generateTheString = (n) =>
  !(n % 2)
    ? Array(n - 1)
        .fill("a")
        .join("") + "b"
    : Array(n).fill("a").join("");

console.log(generateTheString(4)); // pppz
console.log(generateTheString(2)); // xy
console.log(generateTheString(7)); // holasss

// Top 15% runtime, pretty simple

const topVotedGenerateTheString = (n) =>
  n % 2 === 0 ? `${"a".repeat(n - 1)}b` : "a".repeat(n);

// This is what I was looking for, I was trying to avoid using Array
// Same logic as mine, but using '.repeat'

// Somehow bottom 5% runtime */

// Lucky Numbers in a Matrix          1/21/2022
/* 
// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

// Example 1:
//    Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
//    Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Example 2:
//    Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
//    Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Example 3:
//    Input: matrix = [[7,8],[1,2]]
//    Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Constraints:
//    m == mat.length
//    n == mat[i].length
//    1 <= n, m <= 50
//    1 <= matrix[i][j] <= 105.
//    All elements in the matrix are distinct.

const luckyNumbers = function (matrix) {
  let ans = [];
  for (let row of matrix) {
    const index = row.indexOf(Math.min(...row));

    let isMax = true;
    for (let i = 0; i < matrix.length; i++)
      if (row[index] < matrix[i][index]) isMax = false;

    if (isMax) ans.push(row[index]);
  }
  return ans;
};
console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
); // [15]
console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
); // [12]
console.log(
  luckyNumbers([
    [7, 8],
    [1, 2],
  ])
); // [7]

// Ok solution, pretty bad runtime due to nested loop

var topVotedLuckyNumbers = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let min = Math.min(...matrix[i]),
      idx = matrix[i].indexOf(min);

    if (matrix.every((arr) => arr[idx] <= min)) return [min];
  }

  return [];
};

// Not familiar with '.every'
// Avoids the nested loop */

// Find the Distance Value Between Two Arrays         1/22/2022
/* 
// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

// Example 1:
//    Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
//    Output: 2
// Explanation:
//    For arr1[0]=4 we have:
//        |4-10|=6 > d=2
//        |4-9|=5 > d=2
//        |4-1|=3 > d=2
//        |4-8|=4 > d=2
//    For arr1[1]=5 we have:
//        |5-10|=5 > d=2
//        |5-9|=4 > d=2
//        |5-1|=4 > d=2
//        |5-8|=3 > d=2
//    For arr1[2]=8 we have:
//        |8-10|=2 <= d=2
//        |8-9|=1 <= d=2
//        |8-1|=7 > d=2
//        |8-8|=0 <= d=2

// Constraints:
//    1 <= arr1.length, arr2.length <= 500
//    -1000 <= arr1[i], arr2[j] <= 1000
//    0 <= d <= 100

const findTheDistanceValue = (arr1, arr2, d) =>
  arr1.reduce((acc, cur, i) => {
    for (let num of arr2) if (Math.abs(cur - num) <= d) return acc;
    return ++acc;
  }, 0);

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)); // 2
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)); // 2
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)); // 1

// I like this solution
// Great memory, ok runtime

var topVotedFindTheDistanceValue = (arr1, arr2, d) =>
  arr1.filter((n1) => arr2.every((n2) => Math.abs(n1 - n2) > d)).length;

// '.every' again, I should try to implement it instead of 'for (let x of y)' */

// Create Target Array in the Given Order         1/23/2022
/* 
// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// Example 1:
//    Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
//    Output: [0,4,1,3,2]
// Explanation:
//    nums       index     target
//    0            0        [0]
//    1            1        [0,1]
//    2            2        [0,1,2]
//    3            2        [0,1,3,2]
//    4            1        [0,4,1,3,2]

// Example 2:
//    Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
//    Output: [0,1,2,3,4]
// Explanation:
//    nums       index     target
//    1            0        [1]
//    2            1        [1,2]
//    3            2        [1,2,3]
//    4            3        [1,2,3,4]
//    0            0        [0,1,2,3,4]

// Constraints:
//    1 <= nums.length, index.length <= 100
//    nums.length == index.length
//    0 <= nums[i] <= 100
//    0 <= index[i] <= i

const createTargetArray = function (nums, index) {
  let ans = [];
  for (let i = 0; i < index.length; i++)
    !isNaN(ans[index[i]])
      ? (ans = [...ans.slice(0, index[i]), nums[i], ...ans.slice(index[i])])
      : ans.push(nums[i]);

  return ans;
};
console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); // [0,4,1,3,2]
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])); // [0,1,2,3,4]
console.log(createTargetArray([1], [0])); // [1]
console.log(createTargetArray([0, 1, 0], [0, 1, 0])); // [0,0,1]

// Pretty terrible runtime/memory, but it works

const topVotedCreateTargetArray = (nums, idx) => {
  let target = [];
  for (const i in nums) target.splice(idx[i], 0, nums[i]);
  return target;
};

// Cleaner version of what I was trying to achieve
// Just now learning that '.splice' has a third element to insert into array */

// Find Lucky Integer in an Array         1/24/2022
/* 
// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

// Example 1:
//    Input: arr = [2,2,3,4]
//    Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

// Example 2:
//    Input: arr = [1,2,2,3,3,3]
//    Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

// Example 3:
//    Input: arr = [2,2,2,3,3]
//    Output: -1
// Explanation: There are no lucky numbers in the array.

// Constraints:
//    1 <= arr.length <= 500
//    1 <= arr[i] <= 500

const findLucky = function (arr) {
  let count = new Map();

  for (let a of arr.sort((a, b) => b - a)) {
    if (count.get(a) == undefined) count.set(a, 0);
    count.set(a, count.get(a) + 1);
  }

  for (let [key, val] of count) if (key == val) return key;

  return -1;
};
console.log(findLucky([2, 2, 3, 4])); // 2
console.log(findLucky([1, 2, 2, 3, 3, 3])); // 3
console.log(findLucky([2, 2, 2, 3, 3])); // -1

// Decent memory, not greatest runtime

var topVotedFindLucky = function (arr) {
  const map = new Map();
  for (x of arr) map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  return Math.max(...arr.filter((e) => map.get(e) === e), -1);
};

// Similar, but better runtime */

// Count Largest Group          1/25/2022
/* 
// You are given an integer n.

// Each number from 1 to n is grouped according to the sum of its digits.

// Return the number of groups that have the largest size.

// Example 1:
//    Input: n = 13
//    Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
// There are 4 groups with largest size.

// Example 2:
//    Input: n = 2
//    Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.

// Constraints:
//    1 <= n <= 104

const countLargestGroup = function (n) {
  let count = new Map();

  for (let i = 1; i < n + 1; i++) {
    //prettier-ignore
    const val = i > 9 ? i.toString(10).split("").reduce((acc, cur) => (acc += +cur), 0): i;
    count.has(val) ? count.set(val, count.get(val) + 1) : count.set(val, 1);
  }

  const largest = Math.max(...count.values());
  return [...count.values()].filter((x) => x == largest).length;
};
console.log(countLargestGroup(13)); // 4
console.log(countLargestGroup(2)); // 2

// Gets the job done, but feels very bulky
// Wish I'd found a better way of calculating 'val'

const topVotedCountLargestGroup = (n) => {
  let map = {},
    max = 1;
  for (let i = 1; i <= n; i++) {
    let sum = [...`${i}`].reduce((a, c) => a + +c, 0);
    map[sum] ? map[sum]++ : (map[sum] = 1);
    max = Math.max(max, map[sum]);
  }
  return Object.values(map).filter((x) => x === max).length;
};

// This is a much better method of calculating 'sum'
// much better runtime */

// Minimum Subsequence in Non-Increasing Order          1/26/2022
/* 
// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence.

// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.

// Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

// Example 1:
//    Input: nums = [4,3,10,9,8]
//    Output: [10,9]
// Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements.

// Example 2:
//    Input: nums = [4,4,7,6,7]
//    Output: [7,7,6]
// Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to returned in non-decreasing order.

// Constraints:
//    1 <= nums.length <= 500
//    1 <= nums[i] <= 100

const minSubsequence = function (nums) {
  nums = nums.sort((a, b) => a - b);

  let ans = [];
  // prettier-ignore
  while (nums.reduce((a, c) => (a += c), 0) >= ans.reduce((a, c) => (a += c), 0))
    ans.push(nums.pop());

  return ans;
};
console.log(minSubsequence([4, 3, 10, 9, 8])); // [10,9]
console.log(minSubsequence([4, 4, 7, 6, 7])); // [7,7,6]
console.log(minSubsequence([6])); // [6]

// Top 1% memory, not so good runtime
// Cleaner than top voted */

// String Matching in an Array          1/27/2022
/* 
// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Example 1:
//    Input: words = ["mass","as","hero","superhero"]
//    Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:
//    Input: words = ["leetcode","et","code"]
//    Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length <= 30
//    words[i] contains only lowercase English letters.
//    It's guaranteed that words[i] will be unique.

const stringMatching = (words) =>
  words
    .map((cur, _, arr) => {
      for (let w of arr) if (w.includes(cur) && w != cur) return cur;
    })
    .filter((n) => n);

console.log(stringMatching(["mass", "as", "hero", "superhero"])); // ["as","hero"]
console.log(stringMatching(["leetcode", "et", "code"])); // ["et","code"]
console.log(stringMatching(["blue", "green", "bu"])); // []

// Ok runtime, terrible memory

const topVotedStringMatching = (words) =>
  words.filter((n) => words.some((h) => h !== n && h.includes(n)));

// Very nice!
// Same logic as mine but managed to avoid .map & the for loop */

// Minimum Value to Get Positive Step by Step Sum         1/28/2022
/* 
// Given an array of integers nums, you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

// Example 1:
//    Input: nums = [-3,2,-3,4,2]
//    Output: 5
// Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
// step by step sum
// startValue = 4 | startValue = 5 | nums
//   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
//   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
//   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
//   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
//   (4 +2 ) = 6  | (5 +2 ) = 7    |   2

// Example 2:
//    Input: nums = [1,2]
//    Output: 1
// Explanation: Minimum start value should be positive.

// Constraints:
//    1 <= nums.length <= 100
//    -100 <= nums[i] <= 100

const minStartValue = function (nums) {
  let startValue = 0;

  while (true) {
    startValue++;
    let acc = startValue + nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (acc < 1) break;
      acc += nums[i];
    }

    if (acc < 1) continue;
    return startValue;
  }
};
console.log(minStartValue([-3, 2, -3, 4, 2])); // 5
console.log(minStartValue([1, 2])); // 1
console.log(minStartValue([1, -2, -3])); // 5

// Ok runtime

var topVotedMinStartValue = function (nums) {
  var min = 1;
  var sum = 0;

  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    min = Math.min(min, sum);
  }

  if (min == 1) return min;

  // add 1 to negative of min value obtained to keep the sum always positive
  return -1 * min + 1;
};

// Ahh, didn't think of this
// Basically finds how much is missing by tracking min
// If by the end of looping it's less than 1, that's how much is missing to make this work

// I prefer this code but somehow it has worse runtime/memory than mine...

oneLinerMinStartValue = (A) =>
  -A.reduce(([s, m], n) => [s + n, Math.min(m, n + s)], [0, 0])[1] + 1;

// 👀 */

// Reformat The String          1/29/2022
/* 
// You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to reformat the string.

// Example 1:
//    Input: s = "a0b1c2"
//    Output: "0a1b2c"
// Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

// Example 2:
//    Input: s = "leetcode"
//    Output: ""
// Explanation: "leetcode" has only characters so we cannot separate them by digits.

// Example 3:
//    Input: s = "1229857369"
//    Output: ""
// Explanation: "1229857369" has only digits so we cannot separate them by characters.

// Constraints:
//    1 <= s.length <= 500
//    s consists of only lowercase English letters and/or digits.

const reformat = function (s) {
  let a = [],
    b = [];

  for (let c of s) /\d/.test(c) ? b.push(c) : a.push(c);

  if (a.length < b.length) [a, b] = [b, a];

  return a.length - b.length <= 1
    ? a.map((x, i) => x + (b[i] ? b[i] : "")).join("")
    : "";
};
console.log(reformat("a0b1c2")); // "0a1b2c"
console.log(reformat("leetcode")); // ""
console.log(reformat("1229857369")); // ""
console.log(reformat("ab123")); // "1a2b3"

// Heavily inspired by top voted

var topVotedReformat = function (s) {
  let a = [...s.matchAll(/[a-z]/g)],
    b = [...s.matchAll(/\d/g)];

  if (a.length < b.length) [a, b] = [b, a];

  return a.length - b.length <= 1
    ? a.map((val, i) => (b[i] ? val + b[i] : val)).join("")
    : "";
};

// I like the use of regex to get a and b right off the bat */

// Maximum Score After Splitting a String         1/30/2022
/* 
// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

// Example 1:
//    Input: s = "011101"
//    Output: 5
// Explanation:
//    All possible ways of splitting s into two non-empty substrings are:
//    left = "0" and right = "11101", score = 1 + 4 = 5
//    left = "01" and right = "1101", score = 1 + 3 = 4
//    left = "011" and right = "101", score = 1 + 2 = 3
//    left = "0111" and right = "01", score = 1 + 1 = 2
//    left = "01110" and right = "1", score = 2 + 1 = 3

// Example 2:
//    Input: s = "00111"
//    Output: 5
// Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

// Constraints:
//    2 <= s.length <= 500
//    The string s consists of characters '0' and '1' only.

const maxScore = function (s) {
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    max = Math.max(
      max,
      s.substring(0, i).replaceAll(1, "").length +
        s.substring(i).replaceAll(0, "").length
    );
  }
  return max;
};
console.log(maxScore("011101")); // 5
console.log(maxScore("00111")); // 5
console.log(maxScore("1111")); // 3
console.log(maxScore("00")); // 1

// Ok, not a fan of my substring.replaceAll approach

var topVotedMaxScore = function (s) {
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    const left = s.slice(0, i).split("0").length - 1;
    const right = s.slice(i).split("1").length - 1;
    let currentSum = left + right;
    max = Math.max(max, currentSum);
  }
  return max;
};

// Most top voted solutions look like this
// Very similar */

// Kids With the Greatest Number of Candies         1/31/2022
/* 
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// Example 1:
//    Input: candies = [2,3,5,1,3], extraCandies = 3
//    Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
//    - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
//    - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
//    - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
//    - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
//    - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

// Example 2:
//    Input: candies = [4,2,1,1,2], extraCandies = 1
//    Output: [true,false,false,false,false]
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.

// Constraints:
//    n == candies.length
//    2 <= n <= 100
//    1 <= candies[i] <= 100
//    1 <= extraCandies <= 50

const kidsWithCandies = (candies, extra) => {
  let max = Math.max(...candies);
  return candies.map((cur) => cur + extra >= max);
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], 10)); // [true,false,true]

// Very good runtime
// Same as top voted */

// Destination City         2/1/2022
/* 
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Example 1:
//    Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
//    Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

// Example 2:
//    Input: paths = [["B","C"],["D","B"],["C","A"]]
//    Output: "A"
// Explanation: All possible trips are:
//    "D" -> "B" -> "C" -> "A".
//    "B" -> "C" -> "A".
//    "C" -> "A".
//    "A".
//    Clearly the destination city is "A".

// Example 3:
// Input: paths = [["A","Z"]]
// Output: "Z"

// Constraints:
//    1 <= paths.length <= 100
//    paths[i].length == 2
//    1 <= cityAi.length, cityBi.length <= 10
//    cityAi != cityBi
//    All strings consist of lowercase and uppercase English letters and the space character.

const topVotedDestCity = (paths) => {
  let map = new Map(paths);
  for (const path of paths) if (!map.has(path[1])) return path[1];
};
// prettier-ignore
console.log(topVotedDestCity([["B", "C"],["D", "B"],["C", "A"]])); // "A"
// prettier-ignore
console.log(topVotedDestCity([["London", "New York"],["New York", "Lima"],["Lima", "Sao Paulo"]])); // "Sao Paulo"
console.log(topVotedDestCity([["A", "Z"]])); // "Z"
// prettier-ignore
console.log(topVotedDestCity([["pYyNGfBYbm", "wxAscRuzOl"],["kzwEQHfwce", "pYyNGfBYbm"]])); // "wxAscRuzOl"

// Couldn't manage a solution here
// Very clean top voted */

// Build an Array With Stack Operations         2/2/2022
/* 
// You are given an array target and an integer n.
// In each iteration, you will read a number from list = [1, 2, 3, ..., n].
// Build the target array using the following operations:

// "Push": Reads a new element from the beginning list, and pushes it in the array.
// "Pop": Deletes the last element of the array.
// If the target array is already built, stop reading more elements.
// Return a list of the operations needed to build target. The test cases are generated so that the answer is unique.

// Example 1:
//    Input: target = [1,3], n = 3
//    Output: ["Push","Push","Pop","Push"]
// Explanation:
//    Read number 1 and automatically push in the array -> [1]
//    Read number 2 and automatically push in the array then Pop it -> [1]
//    Read number 3 and automatically push in the array -> [1,3]

// Example 3:
//    Input: target = [1,2], n = 4
//    Output: ["Push","Push"]
// Explanation: You only need to read the first 2 numbers and stop.

// Constraints:
//    1 <= target.length <= 100
//    1 <= n <= 100
//    1 <= target[i] <= n
//    target is strictly increasing.

const buildArray = (target, n) => {
  let ans = [];
  for (let i = 0, n = 1; i < target.length; i++, n++) {
    ans.push("Push");
    if (target[i] != n) {
      ans.push("Pop");
      i--;
    }
  }
  return ans;
};
console.log(buildArray([1, 3], 3)); // ["Push","Push","Pop","Push"]
console.log(buildArray([1, 2, 3], 3)); // ["Push","Push","Push"]
console.log(buildArray([1, 2], 4)); // ["Push","Push"]

// Ok runtime, terrible memory
// Same as top voted */

// Consecutive Characters         2/3/2022
/* 
// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

// Example 1:
//    Input: s = "leetcode"
//    Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

// Example 2:
//    Input: s = "abbcccddddeeeeedcba"
//    Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

// Constraints:
//    1 <= s.length <= 500
//    s consists of only lowercase English letters.

const maxPower = function (s) {
  let max = 0;
  return s
    .split("")
    .reduce(
      (a, c, i, arr) => Math.max(a, c == arr[i - 1] ? ++max : (max = 1)),
      0
    );
};
console.log(maxPower("leetcode")); // 2
console.log(maxPower("abbcccddddeeeeedcba")); // 5

// Not greatest runtime

var topVotedMaxPower = function (s) {
  let maxStr = 1;
  let accum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) maxStr += 1;
    else maxStr = 1;
    if (maxStr > accum) accum = maxStr;
  }
  return accum;
}; */

// Number of Students Doing Homework at a Given Time          2/4/2022
/* 
// Given two integer arrays startTime and endTime and given an integer queryTime.

// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

// Example 1:
//    Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
//    Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

// Example 2:
//    Input: startTime = [4], endTime = [4], queryTime = 4
//    Output: 1
// Explanation: The only student was doing their homework at the queryTime.

// Constraints:
//    startTime.length == endTime.length
//    1 <= startTime.length <= 100
//    1 <= startTime[i] <= endTime[i] <= 1000
//    1 <= queryTime <= 1000

const busyStudent = (s, e, q) =>
  e.reduce((a, c, i) => (c >= q && c - s[i] <= q ? a + 1 : a), 0);

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4)); // 1
console.log(busyStudent([4], [4], 4)); // 1
console.log(busyStudent([17], [86], 39)); // 1

// Not sure why it's not working

const topVotedBusyStudent = (s, e, q) =>
  s.reduce((a, c, i) => (q >= c && q <= e[i] ? a + 1 : a), 0);

// Top 1% runtime */

// Check If a Word Occurs As a Prefix of Any Word in a Sentence         2/5/2022
/* 
// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

// A prefix of a string s is any leading contiguous substring of s.

// Example 1:
//    Input: sentence = "i love eating burger", searchWord = "burg"
//    Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

// Example 2:
//    Input: sentence = "this problem is an easy problem", searchWord = "pro"
//    Output: 2
// Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

// Example 3:
//    Input: sentence = "i am tired", searchWord = "you"
//    Output: -1
// Explanation: "you" is not a prefix of any word in the sentence.

// Constraints:
//    1 <= sentence.length <= 100
//    1 <= searchWord.length <= 10
//    sentence consists of lowercase English letters and spaces.
//    searchWord consists of lowercase English letters.

const isPrefixOfWord = function (s, w) {
  s = s.split(" ");
  for (let i = 0; i < s.length; i++)
    if (s[i].split(w).length > 1 && s[i].split(w)[0] == "") return i + 1;
  return -1;
};
console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // 2
console.log(isPrefixOfWord("i am tired", "you")); // -1
console.log(isPrefixOfWord("hellohello hellohellohello", "ell")); // -1

// Top 2% runtime

const topVotedIsPrefixOfWord = (sentence, searchWord) => {
  sentence += " ";
  for (let i = 0, j = 1, word = ""; i < sentence.length; ++i) {
    if (sentence[i] !== " ") {
      word += sentence[i];
      continue;
    }
    if (word.startsWith(searchWord)) return j;
    ++j;
    word = "";
  }
  return -1;
}; */

// Make Two Arrays Equal by Reversing Sub-arrays          2/6/2022
/* 
// You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

// Return true if you can make arr equal to target or false otherwise.

// Example 1:
//    Input: target = [1,2,3,4], arr = [2,4,1,3]
//    Output: true
// Explanation: You can follow the next steps to convert arr to target:
//    1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
//    2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
//    3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
//    There are multiple ways to convert arr to target, this is not the only way to do so.

// Example 2:
//    Input: target = [7], arr = [7]
//    Output: true
// Explanation: arr is equal to target without any reverses.

// Example 3:
//    Input: target = [3,7,9], arr = [3,7,11]
//    Output: false
// Explanation: arr does not have value 9 and it can never be converted to target.

// Constraints:
//    target.length == arr.length
//    1 <= target.length <= 1000
//    1 <= target[i] <= 1000
//    1 <= arr[i] <= 1000

const canBeEqual = (target, arr) =>
  target.sort().join("") == arr.sort().join("");

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])); // true
console.log(canBeEqual([7], [7])); // true
console.log(canBeEqual([3, 7, 9], [3, 7, 11])); // false

// Super easy way to compare them
// Same as top voted */

// Maximum Product of Two Elements in an Array          2/7/2022
/* 
// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Example 1:
//    Input: nums = [3,4,5,2]
//    Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

// Example 2:
//    Input: nums = [1,5,4,5]
//    Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Constraints:
//    2 <= nums.length <= 500
//    1 <= nums[i] <= 10^3

const maxProduct = (nums) =>
  nums
    .sort((a, b) => a - b)
    .slice(nums.length - 2)
    .reduce((a, c) => a * (c - 1), 1);

console.log(maxProduct([3, 4, 5, 2])); // 12
console.log(maxProduct([1, 5, 4, 5])); // 16
console.log(maxProduct([3, 7])); // 12
console.log(maxProduct([10, 2, 5, 2])); // 36

// Decent one-liner

const topVotedMaxProduct = (nums) =>
  nums
    .sort((a, b) => a - b)
    .splice(-2)
    .reduce((i, j) => (i - 1) * (j - 1));

// Same idea
// Some minor changes but the logic is cleaner here */

// Shuffle the Array          2/8/2022
/* 
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:
// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// Example 3:
// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

// Constraints:
// 1 <= n <= 500
// nums.length == 2n
// 1 <= nums[i] <= 10^3

const shuffle = function (nums, n) {
  const half = Math.ceil(nums.length / 2);
  let x = nums.slice(0, half);
  let y = nums.slice(-half);

  let ans = [];
  for (let i = 0; i < n; i++) ans.push(x.shift()) && ans.push(y.shift());
  return ans;
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7]
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)); // [1,4,2,3,3,2,4,1]
console.log(shuffle([1, 1, 2, 2], 2)); // [1,2,1,2]

// Ok, nothing crazy here

const topVotedShuffle = function (nums, n) {
  let i = n - 1;
  for (let j = nums.length - 1; j >= n; j--) {
    nums[j] <<= 10;
    nums[j] |= nums[i];
    i--;
  }

  i = 0;
  for (let j = n; j < nums.length; j++) {
    const num1 = nums[j] & 1023;
    const num2 = nums[j] >> 10;
    nums[i] = num1;
    nums[i + 1] = num2;
    i += 2;
  }

  return nums;
};

// In-Place O(n) Time O(1) Space
// Top 10% runtime */

// Final Prices With a Special Discount in a Shop         2/9/2022
/* 
// Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

// Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

// Example 1:
//    Input: prices = [8,4,6,2,3]
//    Output: [4,2,4,2,3]
// Explanation:
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.

// Example 2:
//    Input: prices = [1,2,3,4,5]
//    Output: [1,2,3,4,5]
// Explanation: In this case, for all items, you will not receive any discount at all.

// Constraints:
//    1 <= prices.length <= 500
//    1 <= prices[i] <= 10^3

const finalPrices = (prices) =>
  prices.map((c, i, arr) => {
    const p = arr.slice(i + 1);
    for (let i = 0; i < p.length; i++) if (p[i] <= c) return c - p[i];
    return c;
  }, 0);
console.log(finalPrices([8, 4, 6, 2, 3])); // [4,2,4,2,3]
console.log(finalPrices([1, 2, 3, 4, 5])); // [1,2,3,4,5]
console.log(finalPrices([10, 1, 1, 6])); // [9,0,1,6]

// Ok runtime
// Fairly concise

var topVotedFinalPrices = function (prices) {
  let adjPrices = [];
  while (prices.length) {
    let currentPrice = prices[0];
    prices.shift();
    let lowerPrice = prices.find((a) => a <= currentPrice);
    adjPrices.push(lowerPrice ? currentPrice - lowerPrice : currentPrice);
  }
  return adjPrices;
};

// Slower runtime, however avoids the use of 'p' array */

// Running Sum of 1d Array          2/10/2022
/* 
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:
//    Input: nums = [1,2,3,4]
//    Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
//    Input: nums = [1,1,1,1,1]
//    Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Constraints:
//    1 <= nums.length <= 1000
//    -10^6 <= nums[i] <= 10^6

const runningSum = (nums) =>
  nums.map((c, i, arr) => {
    i == 0 ? c : (c += arr.slice(0, i).reduce((a, c) => (a += c)));
    return c;
  });

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]

// Did a one-liner of this, but this format had better runtime

const accRunningSum = (nums) => {
  let acc = nums[0];
  return nums.map((c, i) => {
    if (i == 0) return c;
    c += acc;
    acc = c;
    return c;
  });
};

// Was curious if the 'acc' var would improve runtime by avoiding '.reduce'
// No change however

const topVotedRunningSum = (nums) => {
  nums.reduce((a, c, i, arr) => (arr[i] += a));
  return nums;
};

// Didn't think of this
// I automatically defaulted to '.map' due to output being an array */

// XOR Operation in an Array          2/11/2022
/* 
// You are given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

// Return the bitwise XOR of all elements of nums.

// Example 1:
//    Input: n = 5, start = 0
//    Output: 8
// Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^" corresponds to bitwise XOR operator.

// Example 2:
//    Input: n = 4, start = 3
//    Output: 8
// Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

// Constraints:
//    1 <= n <= 1000
//    0 <= start <= 1000
//    n == nums.length

const xorOperation = (n, start) => {
  let acc = start;
  return Array(n)
    .fill(start)
    .map((c, i) => (i == 0 ? c : (acc += 2)))
    .reduce((a, c) => a ^ c);
};
console.log(xorOperation(5, 0)); // 8
console.log(xorOperation(4, 3)); // 8

// Im sure I can avoid using .map & .reduce, but the runtime is decent

var topVotedXorOperation = function (n, start) {
  let xor = 0;
  for (let i = 0; i < n; i++) xor ^= start + 2 * i;
  return xor;
};

// Very nice, amazing Runtime! */

// Check If All 1's Are at Least Length K Places Away         2/12/2022
/* 
// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

// Example 1:
//    Input: nums = [1,0,0,0,1,0,0,1], k = 2
//    Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.

// Example 2:
//    Input: nums = [1,0,0,1,0,1], k = 2
//    Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.

// Constraints:
//    1 <= nums.length <= 105
//    0 <= k <= nums.length
//    nums[i] is 0 or 1

const kLengthApart = (nums, k) => {
  let count = k;
  for (const n of nums) {
    if (n === 0) {
      count++;
      continue;
    }
    if (count < k) return false;
    count = 0;
  }
  return true;
};
console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)); // true
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2)); // false

// Ok runtime
// Identical to top voted */

// Average Salary Excluding the Minimum and Maximum Salary          2/13/2022
/* 
// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

// Example 1:
//    Input: salary = [4000,3000,1000,2000]
//    Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

// Example 2:
//    Input: salary = [1000,2000,3000]
//    Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

// Constraints:
//    3 <= salary.length <= 100
//    1000 <= salary[i] <= 106
//    All the integers of salary are unique.

const average = function (salary) {
  let arr = salary.sort((a, b) => a - b).slice(1, -1);
  return arr.reduce((a, c) => a + c) / arr.length;
};
console.log(average([4000, 3000, 1000, 2000])); // 2500.00000
console.log(average([1000, 2000, 3000])); // 2000.00000
console.log(
  average([
    25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000,
    40000,
  ])
); // 41700.00000

// Readable code, nothing fancy

const topVotedAverage = function (salary) {
  salary.sort((a, b) => a - b);

  salary.shift();
  salary.pop();

  return salary.reduce((a, b) => a + b) / salary.length;
};

// At first glance I'd assume this is much slower, but it has very good runtime */

// Path Crossing          2/14/2022
/* 
// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

// Example 1:
//    Input: path = "NES"
//    Output: false
// Explanation: Notice that the path doesn't cross any point more than once.

// Example 2:
//    Input: path = "NESWW"
//    Output: true
// Explanation: Notice that the path visits the origin twice.

// Constraints:
//    1 <= path.length <= 104
//    path[i] is either 'N', 'S', 'E', or 'W'.

var topVotedIsPathCrossing = function (path) {
  const direction = { N: 1, S: -1, E: 1, W: -1 };
  const pos = { x: 0, y: 0 };
  const location = new Set(["0,0"]);

  for (const move of path) {
    const direct = move === "N" || move === "S" ? "y" : "x";
    pos[direct] += direction[move];

    const nowPos = `${pos["x"]},${pos["y"]}`;
    if (location.has(nowPos)) return true;
    location.add(nowPos);
  }
  return false;
};
console.log(topVotedIsPathCrossing("NES")); // false
console.log(topVotedIsPathCrossing("NESWW")); // true

// No time today, decided to study top voted
// Pretty creative solution, great runtime */

// Can Make Arithmetic Progression From Sequence          2/15/2022
/* 
// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

// Example 1:
//    Input: arr = [3,5,1]
//    Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

// Example 2:
//    Input: arr = [1,2,4]
//    Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

// Constraints:
//    2 <= arr.length <= 1000
//    -106 <= arr[i] <= 106

const canMakeArithmeticProgression = function (arr) {
  arr = arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }
  return true;
};
console.log(canMakeArithmeticProgression([3, 5, 1])); // true
console.log(canMakeArithmeticProgression([1, 2, 4])); // false

// Straightforward solution

const topVotedCanMakeArithmeticProgression = (arr) => {
  arr.sort((a, b) => a - b);
  for (let diff = arr[1] - arr[0], i = 2; i < arr.length; ++i) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }
  return true;
};

// Same as mine, but she includes 'diff' in for loop definition
// Clean */

// Reformat Date          2/16/2022
/* 
// Given a date string in the form Day Month Year, where:

// Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
// Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
// Year is in the range [1900, 2100].
// Convert the date string to the format YYYY-MM-DD, where:

// YYYY denotes the 4 digit year.
// MM denotes the 2 digit month.
// DD denotes the 2 digit day.

// Constraints:
//    The given dates are guaranteed to be valid, so no error handling is necessary.

const reformatDate = function (date) {
  let d = new Date(date.split(/th|nd|st|rd/));
  const oneDigit = (num) => (num < 10 ? `0${num}` : num);

  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  return `${year}-${oneDigit(month)}-${oneDigit(day)}`;
};
console.log(reformatDate("20th Oct 2052")); // "2052-10-20"
console.log(reformatDate("6th Jun 1933")); // "1933-06-06"
console.log(reformatDate("26th May 1960")); // "1960-05-26"
console.log(reformatDate("22nd Apr 2023")); // "2023-04-22"

// Terrible runtime

function topVotedReformatDate(date) {
  return new Date(Date.parse(date.replace(/.. /, "")))
    .toISOString()
    .slice(0, 10);
}

// Very nice, this is what I had in mind but didn't know how to execute */

// Number of Good Pairs         2/17/2022
/* 
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:
//    Input: nums = [1,2,3,1,1,3]
//    Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
//    Input: nums = [1,1,1,1]
//    Output: 6
// Explanation: Each pair in the array are good.

// Constraints:
//    1 <= nums.length <= 100
//    1 <= nums[i] <= 100

const numIdenticalPairs = function (nums) {
  nums = nums
    .sort((a, b) => a - b)
    .join("")
    .match(/(\d)\1+/g);
  if (!nums) return 0;

  let ans = 0;
  for (const num of nums) {
    ans += (num.split("").length * (num.split("").length - 1)) / 2; // n(n-1)/2
  }
  return ans;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0

// Took me a while to get the 'n(n-1)/2' logic figured out
// Doesn't work for all test cases

var topVotedNumIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};

// I think I was overcomplicating it a bit
// Very nice solution

function cleverNumIdenticalPairs(nums) {
  const map = nums.reduce(
    (m, n, i) => m.set(n, (m.get(n) || 0) + 1),
    new Map()
  );
  return [...map.values()].reduce((num, n) => num + (n * (n - 1)) / 2, 0);
}

// This logic was more what I was shooting for */

// Water Bottles          2/18/2022
/* 
// There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

// The operation of drinking a full water bottle turns it into an empty bottle.

// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

// Example 1:
//    Input: numBottles = 9, numExchange = 3
//    Output: 13
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.

// Example 2:
//    Input: numBottles = 15, numExchange = 4
//    Output: 19
// Explanation: You can exchange 4 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 15 + 3 + 1 = 19.

// Constraints:
//    1 <= numBottles <= 100
//    2 <= numExchange <= 100

var topVotedNumWaterBottles = function (numBottles, numExchange) {
  let drink = numBottles;

  while (numBottles >= numExchange) {
    const fullWater = ~~(numBottles / numExchange);

    drink += fullWater;
    numBottles = fullWater + (numBottles % numExchange);
  }
  return drink;
};
console.log(topVotedNumWaterBottles(9, 3)); // 13
console.log(topVotedNumWaterBottles(15, 4)); // 19
console.log(topVotedNumWaterBottles(5, 5)); // 6
console.log(topVotedNumWaterBottles(2, 3)); // 2

// Couldn't seem to get it going so decided to study top voted

const oneLinerNumWaterBottles = (f, m, e = 0, i = 0) =>
  f + e >= m
    ? oneLinerNumWaterBottles(~~((f + e) / m), m, (f + e) % m, i + f)
    : i + f;

// 👀 */

// Count Odd Numbers in an Interval Range         2/19/2022
/* 
// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Example 1:
//    Input: low = 3, high = 7
//    Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

// Example 2:
//    Input: low = 8, high = 10
//    Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].

// Constraints:
//    0 <= low <= high <= 10^9

const countOdds = (low, high) => {
  for (var count = 0; low <= high; low++) if (low % 2) count++;
  return count;
};
console.log(countOdds(3, 7)); // 3
console.log(countOdds(8, 10)); // 1

// Nothing fancy

function topVotedCountOdds(low, high) {
  let res;
  if (low % 2 === 0 && high % 2 === 0) res = Math.floor((high - low) / 2);
  else res = Math.floor((high - low) / 2) + 1;
  return res;
}

// Much better runtime, very nice */

// Shuffle String         2/20/2022
/* 
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Example 1:
//    Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
//    Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// Example 2:
//    Input: s = "abc", indices = [0,1,2]
//    Output: "abc"
// Explanation: After shuffling, each character remains in its position.

// Constraints:
//    s.length == indices.length == n
//    1 <= n <= 100
//    s consists of only lowercase English letters.
//    0 <= indices[i] < n
//    All values of indices are unique.

const restoreString = (s, indices) =>
  Array(s.length)
    .fill("")
    .map((_, i) => s[indices.indexOf(i)])
    .join("");

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); // "leetcode"
console.log(restoreString("abc", [0, 1, 2])); // "abc"

// Better runtime than 90%
// Same as top voted */

// Count Good Triplets          2/21/2022
/* 
// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

// Example 1:
//    Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
//    Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

// Example 2:
//    Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
//    Output: 0
// Explanation: No triplet satisfies all conditions.

// Constraints:
//    3 <= arr.length <= 100
//    0 <= arr[i] <= 1000
//    0 <= a, b, c <= 1000

const countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) <= a) {
        for (let k = j + 1; k < arr.length; k++) {
          if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c)
            count++;
        }
      }
    }
  }
  return count;
};
console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)); // 4
console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)); // 0

// Better than 100% of runtimes!

// Not a fan of solution but seems to be the standard
// Same as top voted */

// Kth Missing Positive Number          2/22/2022
/* 
// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Find the kth positive integer that is missing from this array.

// Example 1:
//    Input: arr = [2,3,4,7,11], k = 5
//    Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

// Example 2:
//    Input: arr = [1,2,3,4], k = 2
//    Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

// Constraints:
//    1 <= arr.length <= 1000
//    1 <= arr[i] <= 1000
//    1 <= k <= 1000
//    arr[i] < arr[j] for 1 <= i < j <= arr.length

const findKthPositive = function (arr, k) {
  let missing = Array(arr[arr.length - 1])
    .fill(0)
    .map((_, i) => i + 1)
    .filter((x) => !arr.includes(x));
  return missing[k - 1] || arr[arr.length - 1] + (k - missing.length);
};
console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // 9
console.log(findKthPositive([1, 2, 3, 4], 2)); // 6
console.log(findKthPositive([2], 1)); // 1

// Very good runtime
// Im sure there's a for loop you can early break from to improve runtime

var topVotedFindKthPositive = function (arr, k) {
  let prev = 0;

  for (let i = 0; i < arr.length; i++) {
    const diff = arr[i] - prev - 1;
    if (k > diff) k -= diff;
    else return prev + k;
    prev = arr[i];
  }
  return prev + k;
};

// There it is */

// Make The String Great          2/23/2022
/* 
// Given a string s of lower and upper case English letters.

// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

// Notice that an empty string is also good.

// Example 1:
//    Input: s = "leEeetcode"
//    Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

// Example 2:
//    Input: s = "abBAcC"
//    Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""

// Constraints:
//    1 <= s.length <= 100
//    s contains only lower and upper case English letters.

const makeGood = function (s) {
  for (let i = 0; i < s.length - 1; i++)
    if (
      (s[i + 1] == s[i].toUpperCase() || s[i] == s[i + 1].toUpperCase()) &&
      s[i] !== s[i + 1]
    )
      return makeGood(s.substring(0, i) + s.substring(i + 2));
  return s;
};
console.log(makeGood("leEeetcode")); // "leetcode"
console.log(makeGood("abBAcC")); // ""
console.log(makeGood("s")); // "s"
console.log(makeGood("kkdsFuqUfSDKK")); // "kkdsFuqUfSDKK"

// Decent runtime

var topVotedMakeGood = function (s) {
  return [...s].reduce((acc, curr, index, arr) => {
    for (let j = 0; j < acc.length - 1; j++) {
      const check = Math.abs(acc.charCodeAt(j) - acc.charCodeAt(j + 1)) === 32;

      if (check) {
        acc = acc.substring(0, j) + acc.substring(j + 2);
        break;
      } else j === acc.length - 2 && arr.splice(index);
    }
    return acc;
  }, s);
};

// Bit better runtime, but less readable in my opinion */

// Three Consecutive Odds         2/24/2022
/* 
// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

// Example 1:
//    Input: arr = [2,6,4,1]
//    Output: false
// Explanation: There are no three consecutive odds.

// Example 2:
//    Input: arr = [1,2,34,3,4,5,7,23,12]
//    Output: true
// Explanation: [5,7,23] are three consecutive odds.

// Constraints:
//    1 <= arr.length <= 1000
//    1 <= arr[i] <= 1000

const threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 && arr[i + 1] % 2 && arr[i + 2] % 2) return true;
    if (!(arr[i + 1] % 2)) i++;
    if (!(arr[i + 2] % 2)) i++;
  }
  return false;
};
console.log(threeConsecutiveOdds([2, 6, 4, 1])); // false
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])); // true
console.log(threeConsecutiveOdds([1, 3, 2])); // false
console.log(threeConsecutiveOdds([1, 1, 1])); // true

// Very good runtime, I'm sure the additional if statements helped a little

var topVotedThreeConsecutiveOdds = (arr) =>
  /\d*[13579](,\d*[13579]){2}/.test(arr);

// I knew regex would work here, but didn't want to go on a googling treasure hunt to make it
// Very nice solution! */

// Thousand Separator         2/25/2022
/* 
// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

// Constraints:
//    0 <= n <= 231 - 1

const thousandSeparator = function (n) {
  n = n.toString();
  let arr = [];
  for (let i = n.length - 1; i >= 0; i--) {
    if ((n.length - i) % 3 == 0 && i != 0) arr.push(n[i], ".");
    else arr.push(n[i]);
  }
  return arr.reverse().join("");
};
console.log(thousandSeparator(987)); // "987"
console.log(thousandSeparator(1234)); // "1.234"
console.log(thousandSeparator(123456789)); // "123.456.789"

// Struggled and ended patching bugs with a posted solution

const topVotedThousandSeparator = (n) => n.toLocaleString("de-DE");

// Hah, nice hack */

// Most Visited Sector in a Circular Track          2/26/2022
/* 
// Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]

// Return an array of the most visited sectors sorted in ascending order.

// Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).

// Example 1:
//    Input: n = 4, rounds = [1,3,1,2]
//    Output: [1,2]
// Explanation: The marathon starts at sector 1. The order of the visited sectors is as follows:
// 1 --> 2 --> 3 (end of round 1) --> 4 --> 1 (end of round 2) --> 2 (end of round 3 and the marathon)
// We can see that both sectors 1 and 2 are visited twice and they are the most visited sectors. Sectors 3 and 4 are visited only once.

// Constraints:
//    2 <= n <= 100
//    1 <= m <= 100
//    rounds.length == m + 1
//    1 <= rounds[i] <= n
//    rounds[i] != rounds[i + 1] for 0 <= i < m

const topVotedMostVisited = function (n, rounds) {
  const start = rounds[0],
    end = rounds[rounds.length - 1];
  const count = [];

  if (start <= end) {
    for (let i = start; i <= end; i++) count.push(i);
  } else {
    for (let i = 1; i <= end; i++) count.push(i);
    for (let i = start; i <= n; i++) count.push(i);
  }
  return count;
};
console.log(topVotedMostVisited(4, [1, 3, 1, 2])); // [1,2]
console.log(topVotedMostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2])); // [2]
console.log(topVotedMostVisited(7, [1, 3, 5, 7])); // [1,2,3,4,5,6,7]

// No time today
// Nice solution, better than 100% of runtimes */

// Detect Pattern of Length M Repeated K or More Times          2/27/2022
/* 
// Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.

// A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.

// Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.

// Example 1:
//    Input: arr = [1,2,4,4,4,4], m = 1, k = 3
//    Output: true
// Explanation: The pattern (4) of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.

// Example 2:
//    Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
//    Output: true
// Explanation: The pattern (1,2) of length 2 is repeated 2 consecutive times. Another valid pattern (2,1) is also repeated 2 times.

// Example 3:
//    Input: arr = [1,2,1,2,1,3], m = 2, k = 3
//    Output: false
// Explanation: The pattern (1,2) is of length 2 but is repeated only 2 times. There is no pattern of length 2 that is repeated 3 or more times.

// Constraints:
//    2 <= arr.length <= 100
//    1 <= arr[i] <= 100
//    1 <= m <= 100
//    2 <= k <= 100

var topVotedContainsPattern = function (arr, m, k) {
  for (let i = m, cnt = 0; i < arr.length; i++) {
    if (arr[i] != arr[i - m]) cnt = 0;
    else if (++cnt == m * (k - 1)) return true;
  }
  return false;
};
console.log(topVotedContainsPattern([1, 2, 4, 4, 4, 4], 1, 3)); // true
console.log(topVotedContainsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2)); // true
console.log(topVotedContainsPattern([1, 2, 1, 2, 1, 3], 2, 3)); // false

// Struggled with regex for a while, ended up studying top voted
// '(++cnt == m * (k - 1))' is confusing, but clever

// Better than 100% runtimes */

// Matrix Diagonal Sum          2/28/2022
/* 
// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Example 1:
//    Input: mat = [[1,2,3],
//                  [4,5,6],
//                  [7,8,9]]
//    Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.

// Example 2:
//    Input: mat = [[1,1,1,1],
//                  [1,1,1,1],
//                  [1,1,1,1],
//                  [1,1,1,1]]
//    Output: 8

// Constraints:
//    n == mat.length == mat[i].length
//    1 <= n <= 100
//    1 <= mat[i][j] <= 100

const diagonalSum = function (mat) {
  let ans = 0;
  const n = mat[0].length - 1;

  for (let row = 0, i = 0, j = n; row <= n; row++, i++, j--) {
    if (i === j) ans += mat[row][i];
    else ans += mat[row][i] + mat[row][j];
  }
  return ans;
};
// prettier-ignore
console.log(diagonalSum([[1,2,3], [4,5,6], [7,8,9]])); // 25
// prettier-ignore
console.log(diagonalSum([[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]])); // 8
// prettier-ignore
console.log(diagonalSum([[5]])); // 5

// Average runtime, pretty cluttered for loop, but the logic feels clear

const topVotedDiagonalSum = (mat) => {
  let sum = 0;
  let j = mat[0].length - 1;

  for (let i = 0; i < mat.length; i++, j--) {
    if (i !== j) sum += mat[i][j];
    sum += mat[i][i];
  }
  return sum;
};

// Same logic but cleaner */

// Replace All ?'s to Avoid Consecutive Repeating Characters          3/1/2022
/* 
// Given a string s containing only lowercase English letters and the '?' character, convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

// It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

// Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

// Example 1:
//    Input: s = "?zs"
//    Output: "azs"
// Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".

// Example 2:
//    Input: s = "ubv?w"
//    Output: "ubvaw"
// Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".

// Constraints:
//    1 <= s.length <= 100
//    s consist of lowercase English letters and '?'.

const modifyString = function (s) {
  const index = s.indexOf("?");
  const incChar = (i) =>
    s.substring(0, index) + String.fromCharCode(i) + s.substring(index + 1);

  let i = 97; // a = 97 to z = 122
  s = incChar(i);
  while (/(?!\?)(.)\1/.test(s)) s = incChar(++i);
  if (s.indexOf("?") !== -1) return modifyString(s);

  return s;
};
console.log(modifyString("?zs")); // "azs"
console.log(modifyString("ubv?w")); // "ubvaw"
console.log(modifyString("j?qg??b")); // "jaqgacb"

// Doesn't work for singular chars

const convertChar = (arr, i) => {
  if (arr[i] !== "?") return arr[i];
  if (arr[i - 1] !== "a" && arr[i + 1] !== "a") return "a";
  if (arr[i - 1] !== "b" && arr[i + 1] !== "b") return "b";
  return "c";
};

const topVotedModifyString = function (s) {
  const arr = s.split("");
  for (let i = 0; i < s.length; i++) arr[i] = convertChar(arr, i);
  return arr.join("");
};

// Keep it simple.
// This top voted was titled as easy as 'abc' lol, love the logic */

// Special Positions in a Binary Matrix         3/2/2022
/* 
// Given an m x n binary matrix mat, return the number of special positions in mat.

// A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

// Example 1:
//    Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
//    Output: 1
// Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

// Example 2:
//    Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
//    Output: 3
// Explanation: (0, 0), (1, 1) and (2, 2) are special positions.

// Constraints:
//    m == mat.length
//    n == mat[i].length
//    1 <= m, n <= 100
//    mat[i][j] is either 0 or 1.

const numSpecial = function (mat) {
  let count = 0;
  for (let row = 0; row < mat.length; row++) {
    const index = mat[row].indexOf(1);
    if (index === mat[row].lastIndexOf(1)) {
      let num = 0;
      for (let i = 0; i < mat.length; i++) {
        if (mat[i][index] === 1) num++;
        if (num > 1) break;
      }
      if (num === 1) count++;
    }
  }
  return count;
};
// prettier-ignore
console.log(numSpecial([[1,0,0],[0,0,1],[1,0,0]])); // 1
// prettier-ignore
console.log(numSpecial([[1,0,0],[0,1,0],[0,0,1]])); // 3

// Great runtime, feels like a very standard solution

// All top voted answers are much much larger, sticking with mine */

// Sum of All Odd Length Subarrays          3/3/2022
/* 
// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

// Example 1:
//    Input: arr = [1,4,2,5,3]
//    Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// Example 2:
//    Input: arr = [1,2]
//    Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

// Constraints:
//    1 <= arr.length <= 100
//    1 <= arr[i] <= 1000

var topVotedSumOddLengthSubarrays = function (arr) {
  let sum = 0,
    N = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let total = i * (N - i) + (N - i);
    sum += Math.ceil(total / 2) * arr[i];
  }
  return sum;
};
console.log(topVotedSumOddLengthSubarrays([1, 4, 2, 5, 3])); // 58
console.log(topVotedSumOddLengthSubarrays([1, 2])); // 3
console.log(topVotedSumOddLengthSubarrays([10, 11, 12])); // 66

// Struggled with .reduce for a while
// Ended up studying top voted

// Knew there was a trick to it, but couldn't figure it out:
//    let total = i * (N - i) + (N - i);
//    sum += Math.ceil(total / 2) * arr[i];
// Very nice */

// Rearrange Spaces Between Words         3/4/2022
/* 
// You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

// Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

// Return the string after rearranging the spaces.

// Example 1:
//    Input: text = "  this   is  a sentence "
//    Output: "this   is   a   sentence"
// Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.

// Example 2:
//    Input: text = " practice   makes   perfect"
//    Output: "practice   makes   perfect "
// Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.

// Constraints:
//    1 <= text.length <= 100
//    text consists of lowercase English letters and ' '.
//    text contains at least one word.

const reorderSpaces = function (text) {
  const words = text.trim().split(/\s+/);
  const numSpaces = text.split(/\w+/).join("").length;

  if (words.length <= 1) return [...words] + " ".repeat(numSpaces);
  return (
    words.join(" ".repeat(Math.floor(numSpaces / (words.length - 1)))) +
    " ".repeat(numSpaces % (words.length - 1))
  );
};
console.log(reorderSpaces("  this   is  a sentence ")); // "this   is   a   sentence"
console.log(reorderSpaces(" practice   makes   perfect")); // "practice   makes   perfect "
console.log(reorderSpaces("  hello"));

// Decent runtime, not my best code

const topVotedReorderSpaces = function (text) {
  let arr = text.split(" ");
  let totalSpace = arr.length - 1;
  arr = arr.filter((w) => w !== "");

  let spaceBetween =
    arr.length > 1 ? Math.floor(totalSpace / (arr.length - 1)) : 0;
  let spaceLeftOver =
    arr.length > 1 ? totalSpace % (arr.length - 1) : totalSpace;

  return arr.join(" ".repeat(spaceBetween)) + " ".repeat(spaceLeftOver);
};

// Same logic */

// Crawler Log Folder         3/5/2022
/* 
// The Leetcode file system keeps a log each time some user performs a change folder operation.

// The operations are described below:

// "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
// "./" : Remain in the same folder.
// "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
// You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

// The file system starts in the main folder, then the operations in logs are performed.

// Return the minimum number of operations needed to go back to the main folder after the change folder operations.

// Example 1:
//    Input: logs = ["d1/","d2/","../","d21/","./"]
//    Output: 2
// Explanation: Use this change folder operation "../" 2 times and go back to the main folder.

// Example 2:
// Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
// Output: 3

// Example 3:
// Input: logs = ["d1/","../","../","../"]
// Output: 0

// Constraints:
//    1 <= logs.length <= 103
//    2 <= logs[i].length <= 10
//    logs[i] contains lowercase English letters, digits, '.', and '/'.
//    logs[i] follows the format described in the statement.
//    Folder names consist of lowercase English letters and digits.

const minOperations = (logs) =>
  logs.reduce((a, c) => {
    if (/^(?!(\.))/.test(c)) return ++a;
    return c.length == 2 ? a : a > 0 ? --a : a;
  }, 0);

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"])); // 2
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])); // 3
console.log(minOperations(["d1/", "../", "../", "../"])); // 0
console.log(minOperations(["./", "ho3/", "tl8/"])); // 2
console.log(minOperations(["1/"])); // 1

// Not great runtime
// Feels clunky

var topVotedMinOperations = function (logs) {
  let count = 0;
  for (let log of logs) {
    count += log == "../" ? (count <= 0 ? 0 : -1) : log == "./" ? 0 : 1;
  }
  return count;
};

// Same logic but as for loop
// I could've saved some effort and avoided the Regex by doing child folders last

const oneLinerMinOperations = (logs) =>
  logs.reduce(
    (a, c) => (c == "./" ? a : c == "../" ? (a > 0 ? --a : a) : ++a),
    0
  );

// Made a one-liner out of both our solutions */

// Design Parking System          3/6/2022
/* 
// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.

// Example 1:
// Input
//    ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
//    [[1, 1, 0], [1], [2], [3], [1]]
// Output
//    [null, true, true, false, false]
// Explanation
// ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
// parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
// parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
// parkingSystem.addCar(3); // return false because there is no available slot for a small car
// parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.

// Constraints:
//    0 <= big, medium, small <= 1000
//    carType is 1, 2, or 3
//    At most 1000 calls will be made to addCar

const ParkingSystem = function (big, medium, small) {
  this.count = [big, medium, small];
};
ParkingSystem.prototype.addCar = function (carType) {
  return this.count[carType - 1]-- > 0;
};

const ex1 = new ParkingSystem(1, 1, 0);
console.log(ex1.addCar(1), ex1.addCar(2), ex1.addCar(3), ex1.addCar(1)); // [true, true, false, false]

// Definitely used top voted for this one
// Still unfamiliar with this format of question
// The logic makes sense, but they always catch me off guard */

// Special Array With X Elements Greater Than or Equal X          3/7/2022
/* 
// You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

// Notice that x does not have to be an element in nums.

// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

// Example 1:
//    Input: nums = [3,5]
//    Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

// Example 2:
//    Input: nums = [0,0]
//    Output: -1
// Explanation: No numbers fit the criteria for x.
// If x = 0, there should be 0 numbers >= x, but there are 2.
// If x = 1, there should be 1 number >= x, but there are 0.
// If x = 2, there should be 2 numbers >= x, but there are 0.
// x cannot be greater since there are only 2 numbers in nums.

// Example 3:
//    Input: nums = [0,4,3,0,4]
//    Output: 3
// Explanation: There are 3 values that are greater than or equal to 3.

// Constraints:
//    1 <= nums.length <= 100
//    0 <= nums[i] <= 1000

const specialArray = function (nums) {
  for (let i = 0; i <= nums.length; i++)
    if (nums.filter((x) => x >= i).length === i) return i;
  return -1;
};
console.log(specialArray([3, 5])); // 2
console.log(specialArray([0, 0])); // -1
console.log(specialArray([0, 4, 3, 0, 4])); // 3
console.log(specialArray([3, 6, 7, 7, 0])); // -1

// Not the greatest runtime

const topVotedSpecialArray = (nums) => {
  for (let i = 0; i <= nums.length; ++i) {
    let c = 0;
    for (const num of nums) num >= i && ++c;
    if (c === i) return i;
  }
  return -1;
};

// Much better runtime
// Same logic, but uses for loop rather than .filter */

// Maximum Nesting Depth of the Parentheses         3/8/2022
/* 
// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.

// Example 1:
//    Input: s = "(1+(2*3)+((8)/4))+1"
//    Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

// Constraints:
//    1 <= s.length <= 100
//    s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
//    It is guaranteed that parentheses expression s is a VPS.

const maxDepth = function (s) {
  let max = 0,
    count = 0;
  for (let c of s) {
    if (c === "(") {
      count++;
      max = Math.max(count, max);
    }
    if (c === ")") count--;
  }
  return max;
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("(1)+((2))+(((3)))")); // 3

// Great runtime, very straightforward code

const topVotedMaxDepth = (s) => {
  let str = s.match(/[()]/g, "");
  let balance = 0;

  if (!str) return 0;

  return str.reduce((depth, c) => {
    c === "(" ? balance++ : balance--;
    return Math.max(balance, depth);
  }, 0);
};

// Most top voted submissions were identical to mine
// I was initially trying to improve runtime using regex, like this one */

// Mean of Array After Removing Some Elements         3/9/2022
/* 
// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

// Answers within 10-5 of the actual answer will be considered accepted.

// Example 1:
//    Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
//    Output: 2.00000
// Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.

// Constraints:
//    20 <= arr.length <= 1000
//    arr.length is a multiple of 20.
//    0 <= arr[i] <= 105

const trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i <= arr.length * 0.05; i++) arr.pop() && arr.shift();
  return arr.reduce((a, c) => (a += c)) / arr.length;
};
console.log(
  trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
); // 2.00000
console.log(
  trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0])
); // 4.00000
console.log(
  trimMean([
    6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4,
    3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
  ])
); // 4.77778

// Doesn't pass all test cases

var topVotedTrimMean = function (arr) {
  let n = arr.length,
    k = 0.05 * n;
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = k; i < n - k; i++) {
    sum += arr[i];
  }
  return sum / (n - 2 * k);
};

// Not amazing runtime, but very readable */

// Largest Substring Between Two Equal Characters         3/10/2022
/* 
// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

// Example 1:
//    Input: s = "aa"
//    Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.

// Example 2:
//    Input: s = "abca"
//    Output: 2
// Explanation: The optimal substring here is "bc".

// Example 3:
//    Input: s = "cbzxy"
//    Output: -1
// Explanation: There are no characters that appear twice in s.

// Constraints:
//    1 <= s.length <= 300
//    s contains only lowercase English letters.

const topVotedMaxLengthBetweenEqualCharacters = function (s) {
  const map = new Map();
  let max = -1;
  for (let i = 0; i < s.length; i++) {
    map.has(s[i])
      ? (max = Math.max(max, i - (map.get(s[i]) + 1)))
      : map.set(s[i], i);
  }
  return max;
};
console.log(topVotedMaxLengthBetweenEqualCharacters("aa")); // 0
console.log(topVotedMaxLengthBetweenEqualCharacters("abca")); // 2
console.log(topVotedMaxLengthBetweenEqualCharacters("cbzxy")); // -1

// No time today!
// Great use of Map here */

// Slowest Key          3/11/2022
/* 
//  A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.

// You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.

// The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].

// Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.

// Return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses.

// Example 1:
//    Input: releaseTimes = [9,29,49,50], keysPressed = "cbcd"
//    Output: "c"
// Explanation: The keypresses were as follows:
// Keypress for 'c' had a duration of 9 (pressed at time 0 and released at time 9).
// Keypress for 'b' had a duration of 29 - 9 = 20 (pressed at time 9 right after the release of the previous character and released at time 29).
// Keypress for 'c' had a duration of 49 - 29 = 20 (pressed at time 29 right after the release of the previous character and released at time 49).
// Keypress for 'd' had a duration of 50 - 49 = 1 (pressed at time 49 right after the release of the previous character and released at time 50).
// The longest of these was the keypress for 'b' and the second keypress for 'c', both with duration 20.
// 'c' is lexicographically larger than 'b', so the answer is 'c'.

// Example 2:
//    Input: releaseTimes = [12,23,36,46,62], keysPressed = "spuda"
//    Output: "a"
// Explanation: The keypresses were as follows:
// Keypress for 's' had a duration of 12.
// Keypress for 'p' had a duration of 23 - 12 = 11.
// Keypress for 'u' had a duration of 36 - 23 = 13.
// Keypress for 'd' had a duration of 46 - 36 = 10.
// Keypress for 'a' had a duration of 62 - 46 = 16.
// The longest of these was the keypress for 'a' with duration 16.

// Constraints:
//    releaseTimes.length == n
//    keysPressed.length == n
//    2 <= n <= 1000
//    1 <= releaseTimes[i] <= 109
//    releaseTimes[i] < releaseTimes[i+1]
//    keysPressed contains only lowercase English letters.

const slowestKey = function (releaseTimes, keysPressed) {
  let map = new Map();
  keysPressed
    .split("")
    .forEach((key, i) =>
      i === 0
        ? map.set(releaseTimes[i], key)
        : map.set(releaseTimes[i] - releaseTimes[i - 1], key)
    );
  return map.get(Math.max(...map.keys()));
};
console.log(slowestKey([9, 29, 49, 50], "cbcd")); // "c"
console.log(slowestKey([12, 23, 36, 46, 62], "spuda")); // "a"

// Doesn't work for all test cases

const topVotedSlowestKey = function (releaseTimes, keysPressed) {
  let maxDuration = releaseTimes[0],
    char = keysPressed[0];
  for (let i = 1; i < releaseTimes.length; i++) {
    if (
      releaseTimes[i] - releaseTimes[i - 1] == maxDuration &&
      keysPressed[i] > char
    )
      char = keysPressed[i];
    else if (releaseTimes[i] - releaseTimes[i - 1] > maxDuration) {
      char = keysPressed[i];
      maxDuration = releaseTimes[i] - releaseTimes[i - 1];
    }
  }
  return char;
};

// Decent runtime, very logical code */

// Sort Array by Increasing Frequency         3/12/2022
/* 
// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

// Example 1:
//    Input: nums = [1,1,2,2,2,3]
//    Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

// Example 2:
//    Input: nums = [2,3,1,3,2]
//    Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

// Constraints:
//    1 <= nums.length <= 100
//    -100 <= nums[i] <= 100

const frequencySort = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++)
    map.has(nums[i])
      ? map.set(nums[i], map.get(nums[i]) + 1)
      : map.set(nums[i], 1);

  map = new Map(
    [...map.entries()].sort((a, b) =>
      a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]
    )
  );

  let ans = [];
  for (let [num, count] of map) ans.push(...Array(count).fill(num));
  return ans;
};
console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])); // [1,3,3,2,2]
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); // [5,-1,4,4,-6,-6,1,1,1]

// The sloppiest code ever, idk what I was thinking here 😬
// Pretty OK runtime somehow

const topVotedFrequencySort = function (nums) {
  const map = new Map();
  for (let n of nums) {
    map.set(n, map.get(n) + 1 || 1);
  }
  return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
};

// Same idea, MUCH better code
// Same runtime as my submission lol */

// Check Array Formation Through Concatenation          3/13/2022

// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

// Example 1:
//    Input: arr = [15,88], pieces = [[88],[15]]
//    Output: true
// Explanation: Concatenate [15] then [88]

// Example 2:
//    Input: arr = [49,18,16], pieces = [[16,18,49]]
//    Output: false
// Explanation: Even though the numbers match, we cannot reorder pieces[0].

// Example 3:
//    Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
//    Output: true
// Explanation: Concatenate [91] then [4,64] then [78]

// Constraints:
//    1 <= pieces.length <= arr.length <= 100
//    sum(pieces[i].length) == arr.length
//    1 <= pieces[i].length <= arr.length
//    1 <= arr[i], pieces[i][j] <= 100
//    The integers in arr are distinct.
//    The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).

const canFormArray = function (arr, pieces) {
  const cantReorder = pieces.filter((x) => x.length > 1);
  if (cantReorder.length === 0) return true;

  for (let i = 0; i < cantReorder.length; i++)
    if (
      !(
        `${arr.filter((x) => cantReorder[i].includes(x))}` ===
        `${cantReorder[i]}`
      )
    )
      return false;

  return true;
};
console.log(canFormArray([15, 88], [[88], [15]])); // true
console.log(canFormArray([49, 18, 16], [[16, 18, 49]])); // false
console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]])); // true

// Doesn't pass all test cases

const topVotedCanFormArray = function (arr, pieces) {
  let total = "";
  arr = arr.join("");
  for (let i = 0; i < pieces.length; i++) {
    pieces[i] = pieces[i].join("");
    total += pieces[i];
    if (arr.indexOf(pieces[i]) == -1) return false;
  }
  return total.length == arr.length;
};

// Much better & decent runtime
