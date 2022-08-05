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
/* 
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

// Much better & decent runtime */

// Get Maximum in Generated Array         3/14/2022
/* 
// You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated in the following way:

// nums[0] = 0
// nums[1] = 1
// nums[2 * i] = nums[i] when 2 <= 2 * i <= n
// nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
// Return the maximum integer in the array nums​​​.

// Example 1:
//    Input: n = 7
//    Output: 3
// Explanation: According to the given rules:
//   nums[0] = 0
//   nums[1] = 1
//   nums[(1 * 2) = 2] = nums[1] = 1
//   nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
//   nums[(2 * 2) = 4] = nums[2] = 1
//   nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
//   nums[(3 * 2) = 6] = nums[3] = 2
//   nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
// Hence, nums = [0,1,1,2,1,3,2,3], and the maximum is max(0,1,1,2,1,3,2,3) = 3.

// Example 2:
//    Input: n = 2
//    Output: 1
// Explanation: According to the given rules, nums = [0,1,1]. The maximum is max(0,1,1) = 1.

// Example 3:
//    Input: n = 3
//    Output: 2
// Explanation: According to the given rules, nums = [0,1,1,2]. The maximum is max(0,1,1,2) = 2.

// Constraints:
//    0 <= n <= 100

const getMaximumGenerated = function (n) {
  if (n <= 1) return n;
  const arr = [0, 1];
  for (let i = 2; i <= n; i++)
    arr.push(
      i % 2 === 0 ? arr[i / 2] : arr[(i - 1) / 2] + arr[(i - 1) / 2 + 1]
    );
  return Math.max(...arr);
};
console.log(getMaximumGenerated(7)); // 3
console.log(getMaximumGenerated(2)); // 1
console.log(getMaximumGenerated(3)); // 2

// Not great runtime

const topVotedGetMaximumGenerated = function (n) {
  let memo = [0, 1];
  let max = 1;
  if (n === 0 || n === 1) return memo[n];
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      memo.push(memo[i / 2]);
    } else {
      let v = memo[(i - 1) / 2] + memo[(i + 1) / 2];
      memo.push(v);
      if (v > max) max = v;
    }
  }
  return max;
}; */

// Defuse the Bomb          3/15/2022
/* 
// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

// Example 1:
//    Input: code = [5,7,1,4], k = 3
//    Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

// Example 2:
//    Input: code = [1,2,3,4], k = 0
//    Output: [0,0,0,0]
// Explanation: When k is zero, the numbers are replaced by 0.

// Example 3:
//    Input: code = [2,4,9,3], k = -2
//    Output: [12,5,6,13]
// Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.

// Constraints:
//    n == code.length
//    1 <= n <= 100
//    1 <= code[i] <= 100
//    -(n - 1) <= k <= n - 1

const decrypt = (code, k) =>
  code.map((_, i, arr) => {
    let acc = 0;
    for (let j = 1; j <= k; j++) acc += arr[(i + j) % code.length];
    return acc;
  });

console.log(decrypt([5, 7, 1, 4], 3)); // [12,10,16,13]
console.log(decrypt([1, 2, 3, 4], 0)); // [0,0,0,0]
console.log(decrypt([2, 4, 9, 3], -2)); // [12,5,6,13]

// Doesn't work for negative values of k

var topVotedDecrypt = function (code, k) {
  var res = new Array(code.length).fill(0);
  if (k > 0) {
    for (var i = 0; i < code.length; i++) {
      var count = 0;
      var j = i + 1;
      while (count < k) {
        if (j === code.length) j = 0;
        res[i] += code[j];
        count = count + 1;
        j++;
      }
    }
  }
  if (k < 0) {
    for (var i = 0; i < code.length; i++) {
      var count = 0;
      var j = i - 1;
      while (count > k) {
        if (j === -1) j = code.length - 1;
        res[i] += code[j];
        count = count - 1;
        j--;
      }
    }
  }
  return res;
};

// Basically just made a seperate if statement for negative k values */

// Check If Two String Arrays are Equivalent         3/16/2022
/* 
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:
//    Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
//    Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

// Constraints:
//    1 <= word1.length, word2.length <= 103
//    1 <= word1[i].length, word2[i].length <= 103
//    1 <= sum(word1[i].length), sum(word2[i].length) <= 103
//    word1[i] and word2[i] consist of lowercase letters.

const arrayStringsAreEqual = (word1, word2) =>
  word1.join("") === word2.join("");

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])); // true
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])); // false
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])); // true

// Better runtime than 95% of submissions
// Same as top voted */

// Maximum Repeating Substring          3/17/2022
/* 
// For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

// Given strings sequence and word, return the maximum k-repeating value of word in sequence.

// Example 1:
//    Input: sequence = "ababc", word = "ab"
//    Output: 2
// Explanation: "abab" is a substring in "ababc".

// Example 2:
//    Input: sequence = "ababc", word = "ba"
//    Output: 1
// Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".

// Example 3:
//    Input: sequence = "ababc", word = "ac"
//    Output: 0
// Explanation: "ac" is not a substring in "ababc".

// Constraints:
//    1 <= sequence.length <= 100
//    1 <= word.length <= 100
//    sequence and word contains only lowercase English letters.

const maxRepeating = (sequence, word) => sequence.split(word).length - 1;
console.log(maxRepeating("ababc", "ab")); // 2
console.log(maxRepeating("ababc", "ba")); // 1
console.log(maxRepeating("ababc", "ac")); // 0

// Doesn't work for all test cases

const topVotedMaxRepeating = function (sequence, word) {
  let result = 0;
  while (sequence.includes(word.repeat(result + 1))) {
    result += 1;
  }
  return result;
};

// Top 5% runtime
// Very clean */

// Richest Customer Wealth          3/18/2022
/* 
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:
//    Input: accounts = [[1,2,3],[3,2,1]]
//    Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// Example 2:
//    Input: accounts = [[1,5],[7,3],[3,5]]
//    Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

// Constraints:
//    m == accounts.length
//    n == accounts[i].length
//    1 <= m, n <= 50
//    1 <= accounts[i][j] <= 100

const maximumWealth = function (accounts) {
  let max = 0;
  for (let account of accounts)
    max = Math.max(
      account.reduce((a, c) => (a += c)),
      max
    );
  return max;
};
// prettier-ignore
console.log(maximumWealth([[1,2,3],[3,2,1]])); // 6
// prettier-ignore
console.log(maximumWealth([[1,5],[7,3],[3,5]])); // 10
// prettier-ignore
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])); // 17

// Simple, readable code

var topVotedMaximumWealth = function (accounts) {
  var res = 0;
  for (var i = 0; i < accounts.length; i++) {
    var temp = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      temp += accounts[i][j];
    }
    res = Math.max(res, temp);
  }
  return res;
};

// Same logic */

// Goal Parser Interpretation         3/19/2022
/* 
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:
//    Input: command = "G()(al)"
//    Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Constraints:
//    1 <= command.length <= 100
//    command consists of "G", "()", and/or "(al)" in some order.

const interpret = function (command) {
  command = command.replaceAll("()", "o");
  command = command.replaceAll("(al)", "al");
  return command;
};
console.log(interpret("G()(al)")); // "Goal"
console.log(interpret("G()()()()(al)")); // "Gooooal"
console.log(interpret("(al)G(al)()()G")); // "alGalooG"

// Nothing fancy, top 10% runtime

var topVotedInterpret = function (command) {
  return command.split("()").join("o").split("(al)").join("al");
};
const oneLinerinterpret = (command) =>
  command.replaceAll("()", "o").replaceAll("(al)", "al");

// More elegant, but both have worse runtime */

// Count the Number of Consistent Strings         3/20/2022
/* 
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Example 1:
//    Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
//    Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:
//    Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
//    Output: 7
// Explanation: All strings are consistent.

// Example 3:
//    Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
//    Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

// Constraints:
//    1 <= words.length <= 104
//    1 <= allowed.length <= 26
//    1 <= words[i].length <= 10
//    The characters in allowed are distinct.
//    words[i] and allowed contain only lowercase English letters.

const countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let word of words) {
    for (let char of allowed) word = word.replaceAll(char, "");
    if (word === "") count++;
  }
  return count;
};
// prettier-ignore
console.log(countConsistentStrings("ab",  ["ad","bd","aaab","baa","badab"])); // 2
// prettier-ignore
console.log(countConsistentStrings("abc",  ["a","b","c","ab","ac","bc","abc"])); // 7
// prettier-ignore
console.log(countConsistentStrings("cad",  ["cc","acd","b","ba","bac","bad","ac","d"])); // 4

// Very simple code, terrible runtime

const topVotedCountConsistentStrings = (allowed, words) => {
  let set = new Set(allowed);
  return words.reduce((a, w) => {
    return w.split("").every((l) => set.has(l)) ? ++a : a;
  }, 0);
};

// Nice, much better */

// Count of Matches in Tournament         3/21/2022
/* 
// You are given an integer n, the number of teams in a tournament that has strange rules:

// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.

// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

// Example 1:
//    Input: n = 7
//    Output: 6
// Explanation: Details of the tournament:
// - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 3 + 2 + 1 = 6.

// Example 2:
//    Input: n = 14
//    Output: 13
// Explanation: Details of the tournament:
// - 1st Round: Teams = 14, Matches = 7, and 7 teams advance.
// - 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 7 + 3 + 2 + 1 = 13.

// Constraints:
//    1 <= n <= 200

const numberOfMatches = function (n) {
  let matches = 0;
  while (n > 1) {
    let isEven = n % 2 === 0;
    matches += isEven ? n / 2 : (n - 1) / 2;
    n = isEven ? n / 2 : (n - 1) / 2 + 1;
  }
  return matches;
};
console.log(numberOfMatches(7)); // 6
console.log(numberOfMatches(14)); // 13

// Very readable, decent runtime

const topVotedNumberOfMatches = (n) => n - 1;

// Woooow hahah
// Work smart, not hard */

// Reformat Phone Number          3/22/2022
/* 
// You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

// You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:

// 2 digits: A single block of length 2.
// 3 digits: A single block of length 3.
// 4 digits: Two blocks of length 2 each.

// The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.

// Return the phone number after formatting.

// Example 1:
//    Input: number = "1-23-45 6"
//    Output: "123-456"
// Explanation: The digits are "123456".
// Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
// Step 2: There are 3 digits remaining, so put them in a single block of length 3. The 2nd block is "456".
// Joining the blocks gives "123-456".

// Example 2:
//    Input: number = "123 4-567"
//    Output: "123-45-67"
// Explanation: The digits are "1234567".
// Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
// Step 2: There are 4 digits left, so split them into two blocks of length 2. The blocks are "45" and "67".
// Joining the blocks gives "123-45-67".

// Example 3:
//    Input: number = "123 4-5678"
//    Output: "123-456-78"
// Explanation: The digits are "12345678".
// Step 1: The 1st block is "123".
// Step 2: The 2nd block is "456".
// Step 3: There are 2 digits left, so put them in a single block of length 2. The 3rd block is "78".
// Joining the blocks gives "123-456-78".

// Constraints:
//    2 <= number.length <= 100
//    number consists of digits and the characters '-' and ' '.
//    There are at least two digits in number.

const reformatNumber = function (number) {
  let ans = "";
  numbers = [...number.replaceAll(/[^\d]/g, "")];
  while (numbers.length > 0) {
    switch (numbers.length) {
      case 4:
        ans += numbers.splice(0, 2).join("");
        ans += "-";
        ans += numbers.splice(0, 2).join("");
        return ans;

      case 3:
        ans += numbers.splice(0, 3).join("");
        return ans;

      case 2:
        ans += numbers.splice(0, 2).join("");
        return ans;

      default:
        ans += numbers.splice(0, 3).join("");
        ans += "-";
        break;
    }
  }
};
console.log(reformatNumber("1-23-45 6")); // "123-456"
console.log(reformatNumber("123 4-567")); // "123-45-67"
console.log(reformatNumber("123 4-5678")); // "123-456-78"

// Tried the simplest option I could think of
// Not great runtime

const topVotedReformatNumber = function (number) {
  const recursiveReformatNumber = function (number) {
    if (number.length <= 3) return number;
    if (number.length == 4)
      return number.substring(0, 2) + "-" + number.substring(2, 4);
    else
      return (
        number.substring(0, 3) +
        "-" +
        recursiveReformatNumber(number.substring(3, number.length))
      );
  };
  return recursiveReformatNumber(number.replace(/\D/g, ""));
};

// Definitely an improvement */

// Number of Students Unable to Eat Lunch         3/23/2022
/* 
// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

// If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
// Otherwise, they will leave it and go to the queue's end.
// This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

// You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

// Example 1:
//    Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
//    Output: 0
// Explanation:
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
// - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
// - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
// - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
// - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
// Hence all students are able to eat.

// Constraints:
//    1 <= students.length, sandwiches.length <= 100
//    students.length == sandwiches.length
//    sandwiches[i] is 0 or 1.
//    students[i] is 0 or 1.

const countStudents = function (students, sandwiches) {
  while (sandwiches.length > 0) {
    for (let i = 0; students.length; i++) {
      if (students[0] === sandwiches[0]) {
        students.shift();
        sandwiches.shift();
        break;
      } else students.push(students.shift());
      if (i === students.length - 1) return students.length;
    }
  }
  return 0;
};
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3

// Straightforward code, nothing fancy

var topVotedCountStudents = function (students, sandwiches) {
  while (students.length > 0 && students.indexOf(sandwiches[0]) != -1) {
    if (students[0] == sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else students.push(students.shift());
  }
  return students.length;
};

// Same logic
// '.indexOf' compensates for my 'if(i===students.length-1)' and saves a for loop
// Worse runtime somehow */

// Determine if String Halves Are Alike         3/24/2022
/* 
// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Example 1:
//    Input: s = "book"
//    Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// Example 2:
//    Input: s = "textbook"
//    Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

// Constraints:
//    2 <= s.length <= 1000
//    s.length is even.
//    s consists of uppercase and lowercase letters.

const halvesAreAlike = function (s) {
  const countVowels = (str) =>
    str
      .split("")
      .reduce((a, c) => (/[aeiou]/.test(c.toLowerCase()) ? ++a : a), 0);

  a = s.substring(0, s.length / 2);
  b = s.substring(s.length / 2);

  return countVowels(a) === countVowels(b);
};
console.log(halvesAreAlike("book")); // true
console.log(halvesAreAlike("textbook")); // false

// I like it
// Decent runtime

const vowels = "aeiouAEIOU";
var toVotedHalvesAreAlike = function (S) {
  let mid = S.length / 2,
    ans = 0;
  for (let i = 0, j = mid; i < mid; i++, j++)
    ans += vowels.includes(S.charAt(i)) - vowels.includes(S.charAt(j));
  return ans === 0;
};

// Definitely an improvement on runtime to test both 'a' and 'b' within the same for loop */

// Maximum Units on a Truck         3/25/2022
/* 
// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.

// Example 1:
//    Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
//    Output: 8
// Explanation: There are:
//    - 1 box of the first type that contains 3 units.
//    - 2 boxes of the second type that contain 2 units each.
//    - 3 boxes of the third type that contain 1 unit each.
// You can take all the boxes of the first and second types, and one box of the third type.
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

// Constraints:
//    1 <= boxTypes.length <= 1000
//    1 <= numberOfBoxesi, numberOfUnitsPerBoxi <= 1000
//    1 <= truckSize <= 106

const maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let ans = 0;
  while (truckSize > 0 && boxTypes.length > 0) {
    if (boxTypes[0][0] <= truckSize) {
      ans += boxTypes[0][0] * boxTypes[0][1];
      truckSize -= boxTypes[0][0];
      boxTypes.shift();
    } else {
      ans += truckSize * boxTypes[0][1];
      truckSize = 0;
    }
  }
  return ans;
};
// prettier-ignore
console.log(maximumUnits([[1,3],[2,2],[3,1]], 4)); // 8
// prettier-ignore
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10)); // 91
// prettier-ignore
console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 35));

// Works
// Good memory, not so good runtime

var topVotedMaximumUnits = function (B, T) {
  B.sort((a, b) => b[1] - a[1]);
  let ans = 0;
  for (let i = 0; T && i < B.length; i++) {
    let count = Math.min(B[i][0], T);
    (ans += count * B[i][1]), (T -= count);
  }
  return ans;
};

// Slightly better runtime
// Math.min instead of decrementing truckSize as I did */

// Calculate Money in Leetcode Bank         3/26/2022
/* 
// Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
// Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

// Example 1:
//    Input: n = 4
//    Output: 10
// Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

// Example 2:
//    Input: n = 10
//    Output: 37
// Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.

// Example 3:
//    Input: n = 20
//    Output: 96
// Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.

// Constraints:
//    1 <= n <= 1000

const totalMoney = function (n) {
  let week = 0,
    total = 0;
  while (n > 0) {
    for (let i = 1; i <= 7; i++) {
      (total += i + week), n--;
      if (n == 0) break;
    }
    week++;
  }
  return total;
};

console.log(totalMoney(4)); // 10
console.log(totalMoney(10)); // 37
console.log(totalMoney(20)); // 96

// Nothing fancy
// I'm sure there's a math solution to this

function topVotedTotalMoney(n) {
  const k = Math.floor(n / 7), // k = # full weeks
    x = n % 7; // x = day of week
  return (7 * k * (k + 7)) / 2 + (x * (2 * k + x + 1)) / 2;
  // (sum of k weeks) + (sum of x days)
}

// Slower runtime */

// Decode XORed Array         3/27/2022
/* 
// There is a hidden integer array arr that consists of n non-negative integers.

// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

// Return the original array arr. It can be proved that the answer exists and is unique.

// Example 1:
//    Input: encoded = [1,2,3], first = 1
//    Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

// Constraints:
//    2 <= n <= 104
//    encoded.length == n - 1
//    0 <= encoded[i] <= 105
//    0 <= first <= 105

const decode = function (encoded, first) {
  let ans = [];
  ans.push(first);
  for (let i = 0; i < encoded.length; i++) {
    ans.push(ans[ans.length - 1] ^ encoded[i]);
  }
  return ans;
};
console.log(decode([1, 2, 3], 1)); // [1,0,2,1]
console.log(decode([6, 2, 7, 3], 4)); // [4,2,0,7,4]

// Ok

const topVotedDecode = (encoded, first) => {
  const out = [first];
  encoded.forEach((x, i) => out.push(out[i] ^ x));
  return out;
};

// Same logic, cleaner code */

// Number Of Rectangles That Can Form The Largest Square          3/28/2022
/* 
// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a side length of maxLen.

// Example 1:
//    Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
//    Output: 3
// Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
// The largest possible square is of length 5, and you can get it out of 3 rectangles.

// Constraints:
//    1 <= rectangles.length <= 1000
//    rectangles[i].length == 2
//    1 <= li, wi <= 109
//    li != wi

const countGoodRectangles = function (rectangles) {
  const count = rectangles.map((c) => Math.min(...c));
  const max = Math.max(...count);
  return count.filter((x) => x === max).length;
};
// prettier-ignore
console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]])); // 3
// prettier-ignore
console.log(countGoodRectangles([[2,3],[3,7],[4,3],[3,7]])); // 3

// Top 10% runtime & memory

const topVotedCountGoodRectangles = function (rectangles) {
  let count = 0,
    max = 0;
  for (let rec of rectangles) {
    let len = Math.min(rec[0], rec[1]);
    if (len > max) {
      count = 1;
      max = len;
    } else if (len == max) {
      count++;
    }
  }
  return count;
}; */

// Find the Highest Altitude         3/29/2022
/* 
// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// Example 1:
//    Input: gain = [-5,1,5,0,-7]
//    Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Example 2:
//    Input: gain = [-4,-3,-2,-1,4,3,2]
//    Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

// Constraints:
//    n == gain.length
//    1 <= n <= 100
//    -100 <= gain[i] <= 100

const largestAltitude = function (gain) {
  let max = 0,
    acc = 0;
  for (let i = 0; i < gain.length; i++) {
    acc += gain[i];
    max = Math.max(max, acc);
  }
  return max;
};
console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0

// Top 10% runtime

const topVotedLargestAltitude1 = (gain) => {
  const altitudes = [0];
  for (let i = 0; i < gain.length; i++) {
    altitudes.push(altitudes[i] + gain[i]);
  }
  return Math.max(...altitudes);
};

// Thought about this, but avoided the extra array to save memory/runtime */

// Latest Time by Replacing Hidden Digits         3/30/2022
/* 
// You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).

// The valid times are those inclusively between 00:00 and 23:59.

// Return the latest valid time you can get from time by replacing the hidden digits.

// Example 1:
//    Input: time = "2?:?0"
//    Output: "23:50"
// Explanation: The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.

// Constraints:
//    time is in the format hh:mm.
//    It is guaranteed that you can produce a valid time from the given string.

const maximumTime = function (time) {
  if (time[0] == "?") {
    if (time[1] == "?") time = time.replace("?", "2");
    else time = time[1] < 4 ? time.replace("?", "2") : time.replace("?", "1");
  }
  if (time[1] == "?")
    time = time[0] < 2 ? time.replace("?", "9") : time.replace("?", "3");
  if (time[3] == "?") time = time.replace("?", "5");
  if (time[4] == "?") time = time.replace("?", "9");
  return time;
};
console.log(maximumTime("2?:?0")); // "23:50"
console.log(maximumTime("0?:3?")); // "09:39"
console.log(maximumTime("1?:22")); // "19:22"
console.log(maximumTime("?4:03")); // "14:03"
console.log(maximumTime("??:3?")); // "??:3?"

// Bit basic with the if statements, but straight to the point

var topVotedMaximumTime = function (time) {
  time = time.split("");
  if (time[0] === "?") time[0] = time[1] > 3 ? "1" : "2";
  if (time[1] === "?") time[1] = time[0] > 1 ? "3" : "9";
  if (time[3] === "?") time[3] = "5";
  if (time[4] === "?") time[4] = "9";
  return time.join("");
};

// Same logic, much cleaner */

// Maximum Number of Balls in a Box         3/31/2022
/* 
// You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.

// Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.

// Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.

// Example 1:
//    Input: lowLimit = 1, highLimit = 10
//    Output: 2
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
// Ball Count:  2 1 1 1 1 1 1 1 1 0  0  ...
// Box 1 has the most number of balls with 2 balls.

// Example 2:
//    Input: lowLimit = 5, highLimit = 15
//    Output: 2
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
// Ball Count:  1 1 1 1 2 2 1 1 1 0  0  ...
// Boxes 5 and 6 have the most number of balls with 2 balls in each.

// Example 3:
//    Input: lowLimit = 19, highLimit = 28
//    Output: 2
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 12 ...
// Ball Count:  0 1 1 1 1 1 1 1 1 2  0  0  ...
// Box 10 has the most number of balls with 2 balls.

// Constraints:
//    1 <= lowLimit <= highLimit <= 105

const topVotedCountBalls = (lowLimit, highLimit) => {
  const cnts = new Map();
  for (let i = lowLimit, sum = 0; i <= highLimit; i++, sum = 0) {
    for (let j = i; j; j = Math.trunc(j / 10)) sum += j % 10;
    cnts.set(sum, (cnts.get(sum) || 0) + 1);
  }
  return Math.max(...cnts.values());
};
console.log(countBalls(1, 10)); // 2
console.log(countBalls(5, 15)); // 2
console.log(countBalls(19, 28)); // 2

// Wasn't sure what this problem was asking for
// Decided to study top voted

const oneLinerCountBalls = (lowLimit, highLimit) =>
  Math.max(
    ...new Array(highLimit - lowLimit + 1)
      .fill()
      .reduce(
        (acc, _, idx) =>
          ((sum) => acc.set(sum, (acc.get(sum) || 0) + 1))(
            [...`${lowLimit + idx}`].map(Number).reduce((a, c) => a + c)
          ),
        new Map()
      )
      .values()
  ); */

// Sum of Unique Elements         4/1/2022
/* 
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:
//    Input: nums = [1,2,3,2]
//    Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

// Example 2:
//    Input: nums = [1,1,1,1,1]
//    Output: 0
// Explanation: There are no unique elements, and the sum is 0.

// Example 3:
//    Input: nums = [1,2,3,4,5]
//    Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

// Constraints:
//    1 <= nums.length <= 100
//    1 <= nums[i] <= 100

const sumOfUnique = (nums) =>
  nums
    .filter((x) => nums.indexOf(x) == nums.lastIndexOf(x))
    .reduce((a, c) => (a += c), 0);

console.log(sumOfUnique([1, 2, 3, 2])); // 4
console.log(sumOfUnique([1, 1, 1, 1, 1])); // 0
console.log(sumOfUnique([1, 2, 3, 4, 5])); // 15

// One-liner with great memory, but pretty terrible runtime

const topVotedSumOfUnique = (nums) => {
  let map = {},
    calc = 0;

  nums.forEach((item) => (map[item] = ~~map[item] + 1));
  Object.keys(map)
    .filter((key) => map[key] === 1)
    .map((i) => (calc += +i));

  return calc;
};

// Map was definitely an option */

// Check if Array Is Sorted and Rotated         4/2/2022
/* 
// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

// Example 1:
//    Input: nums = [3,4,5,1,2]
//    Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

// Example 2:
//    Input: nums = [2,1,3,4]
//    Output: false
// Explanation: There is no sorted array once rotated that can make nums.

// Example 3:
//    Input: nums = [1,2,3]
//    Output: true
// Explanation: [1,2,3] is the original sorted array.
// You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.

// Constraints:
//    1 <= nums.length <= 100
//    1 <= nums[i] <= 100

const check = function (nums) {
  const first = nums.splice(0, nums.lastIndexOf(Math.max(...nums)) + 1);
  const second = nums;

  const arraysSorted =
    first.join("") === first.sort((a, b) => a - b).join("") &&
    second.join("") === second.sort((a, b) => a - b).join("");

  return second.length > 0
    ? first[0] >= second.pop() && arraysSorted
    : arraysSorted;
};
console.log(check([3, 4, 5, 1, 2])); // true
console.log(check([2, 1, 3, 4])); // false
console.log(check([1, 2, 3])); // true
console.log(check([6, 7, 7, 5])); // true

// Doesn't work for all test cases

var topVotedCheck = function (nums) {
  let count = 0;
  let len = nums.length - 1;
  for (let i = 0; i < len; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }
  if (count > 1 || (count == 1 && nums[0] < nums[len])) {
    return false;
  }
  return true;
};

// I was definitely overcomplicating it */

// Minimum Changes To Make Alternating Binary String          4/3/2022
/* 
// You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

// The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

// Return the minimum number of operations needed to make s alternating.

// Example 1:
//    Input: s = "0100"
//    Output: 1
// Explanation: If you change the last character to '1', s will be "0101", which is alternating.

// Example 2:
//    Input: s = "10"
//    Output: 0
// Explanation: s is already alternating.

// Example 3:
//    Input: s = "1111"
//    Output: 2
// Explanation: You need two operations to reach "0101" or "1010".

// Constraints:
//    1 <= s.length <= 104
//    s[i] is either '0' or '1'.

const minOperations = function (s) {
  let count = new Map();
  for (let c of s.split("")) count[c] ? count[c]++ : (count[c] = 1);

  const dif = Math.abs(count[0] - count[1]);
  return dif > 1 ? dif - 1 : isNaN(dif) ? s.length - s.length / 2 : 0;
};
console.log(minOperations("0100")); // 1
console.log(minOperations("10")); // 0
console.log(minOperations("1111")); // 2

// Doesn't work for all test cases

const topVotedMinOperations = function (s) {
  let chars = ["1", "0"];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (chars[i % 2] === s[i]) {
      count++;
    }
  }
  return Math.min(count, s.length - count);
};

// Much better */

// Longest Nice Substring         4/4/2022
/* 
// A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

// Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

// Example 1:
//    Input: s = "YazaAay"
//    Output: "aAa"
// Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
// "aAa" is the longest nice substring.

// Example 2:
//    Input: s = "Bb"
//    Output: "Bb"
// Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.

// Example 3:
//    Input: s = "c"
//    Output: ""
// Explanation: There are no nice substrings.

// Constraints:
//    1 <= s.length <= 100
//    s consists of uppercase and lowercase English letters.

const longestNiceSubstring = function (s) {
  s = s.split("");
  let acc = [];

  for (let i = 0; i < s.length - 1; i++)
    if (s[i].toUpperCase() === s[i + 1].toUpperCase())
      acc.push(s[i], s[i + 1]) && i++;

  if (acc.length <= 1) return "";

  let ans = "";
  for (let i = 0; i < acc.length - 1; i++) {
    if (/[a-z]/.test(acc[i]) && acc[i + 1] == acc[i].toUpperCase())
      ans += acc[i] + acc[i + 1];
    if (/[A-Z]/.test(acc[i]) && acc[i + 1] == acc[i].toLowerCase())
      ans += acc[i] + acc[i + 1];
  }

  return ans;
};
console.log(longestNiceSubstring("YazaAay")); // "aAa"
console.log(longestNiceSubstring("Bb")); // "Bb"
console.log(longestNiceSubstring("c")); // ""

// Couldn't get it working

const mx = Math.max;
const topVotedLongestNiceSubstring = (s) => {
  let n = s.length;
  let res = [];
  let max = 0;
  let se = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sub = s.slice(i, j + 1);
      if (isNice(sub)) {
        se.add(sub);
        max = mx(max, j - i + 1);
      }
    }
  }
  for (const e of se) {
    if (e.length == max) return e;
  }
  return "";
};

const isNice = (s) => {
  let lower = new Set();
  let upper = new Set();
  for (const c of s) {
    isLowerCaseLetter(c) ? lower.add(c) : upper.add(c);
  }
  for (const lo of lower) {
    if (!upper.has(lo.toUpperCase())) return false;
  }
  for (const up of upper) {
    if (!lower.has(up.toLowerCase())) return false;
  }
  return true;
};

const isLowerCaseLetter = (c) => {
  return c.charCodeAt() >= 97 && c.charCodeAt() <= 122;
};

// All top voted results were very long */

// Merge Strings Alternately          4/5/2022
/* 
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:
//    Input: word1 = "abc", word2 = "pqr"
//    Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:
//    Input: word1 = "ab", word2 = "pqrs"
//    Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:
//    Input: word1 = "abcd", word2 = "pq"
//    Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

// Constraints:
//    1 <= word1.length, word2.length <= 100
//    word1 and word2 consist of lowercase English letters.

const mergeAlternately = function (word1, word2) {
  let ans = "";
  for (let i = 0; i < word1.length; i++) {
    if (word2[i]) ans += word1[i] + word2[i];
    else return (ans += word1.substring(i));
  }
  return (ans += word2.substring(word1.length));
};
console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // "apbqcd"

// Top 10% runtime

const topVotedMergeAlternately = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  let result = "";
  for (let i = 0; i < maxLength; i++) {
    result += (a[i] ?? "") + (b[i] ?? "");
  }
  return result;
};

// Smart to using longest word and nullish coalescing operator

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator */

// Count Items Matching a Rule          4/6/2022
/* 
// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example 1:
//    Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
//    Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

// Example 2:
//    Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
//    Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.

// Constraints:
//    1 <= items.length <= 104
//    1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
//    ruleKey is equal to either "type", "color", or "name".
//    All strings consist only of lowercase letters.

const countMatches = (items, ruleKey, ruleValue) =>
  items.reduce((a, c, i, arr) => {
    switch (ruleKey) {
      case "type":
        if (c[0] === ruleValue) a++;
        break;
      case "color":
        if (c[1] === ruleValue) a++;
        break;
      case "name":
        if (c[2] === ruleValue) a++;
        break;
    }
    return a;
  }, 0);

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
); // 1
console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
); // 2

// Bit basic, but works great

const map = {
  type: 0,
  color: 1,
  name: 2,
};

const topVotedCountMatches = (items, key, value) =>
  items.filter((i) => i[map[key]] == value).length;

// Clean */

// Find Nearest Point That Has the Same X or Y Coordinate         4/7/2022
/* 
// You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

// Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

// The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

// Example 1:
//    Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
//    Output: 2
// Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.

// Example 2:
//    Input: x = 3, y = 4, points = [[3,4]]
//    Output: 0
// Explanation: The answer is allowed to be on the same location as your current location.

// Example 3:
//    Input: x = 3, y = 4, points = [[2,3]]
//    Output: -1
// Explanation: There are no valid points.

// Constraints:
//    1 <= points.length <= 104
//    points[i].length == 2
//    1 <= x, y, ai, bi <= 104

const nearestValidPoint = function (x, y, points) {
  if (points.filter((point) => point[0] == x || point[1] == y).length == 0)
    return -1;

  let diff = Number.MAX_SAFE_INTEGER;
  let index;
  points.forEach((point, i) => {
    const [px, py] = point;
    if (px == x && Math.abs(py - y) < diff)
      (diff = Math.abs(py - y)), (index = i);
    if (py == y && Math.abs(px - x) < diff)
      (diff = Math.abs(px - x)), (index = i);

    if (diff === 0) return i;
  });
  return index;
};
// prettier-ignore
console.log(nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]])); // 2
console.log(nearestValidPoint(3, 4, [[3, 4]])); // 0
console.log(nearestValidPoint(3, 4, [[2, 3]])); // -1

// Works

var topVotedNearestValidPoint = function (x, y, points) {
  let min = Infinity;
  let idx = -1;
  points.forEach(([a, b], i) => {
    if (a === x || b === y) {
      const dist = Math.abs(x - a) + Math.abs(y - b);
      if (dist < min) {
        idx = i;
        min = dist;
      }
    }
  });
  return idx;
};

// Same logic, cleaner solution */

// Check if Binary String Has at Most One Segment of Ones         4/8/2022
/* 
// Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.

// Example 1:
//    Input: s = "1001"
//    Output: false
// Explanation: The ones do not form a contiguous segment.

// Constraints:
// 1 <= s.length <= 100
// s[i]​​​​ is either '0' or '1'.
// s[0] is '1'.

const checkOnesSegment = (s) => (s === "1" ? true : /11/.test(s));

console.log(checkOnesSegment("1001")); // false
console.log(checkOnesSegment("110")); // true
console.log(checkOnesSegment("1")); // true

// Ok one-liner

const topVotedCheckOnesSegment = (s) => s.indexOf("01") == -1;

// Clever */

// Check if One String Swap Can Make Strings Equal          4/9/2022
/* 
// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

// Example 1:
//    Input: s1 = "bank", s2 = "kanb"
//    Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".

// Example 2:
//    Input: s1 = "attack", s2 = "defend"
//    Output: false
// Explanation: It is impossible to make them equal with one string swap.

// Example 3:
//    Input: s1 = "kelb", s2 = "kelb"
//    Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.

// Constraints:
//    1 <= s1.length, s2.length <= 100
//    s1.length == s2.length
//    s1 and s2 consist of only lowercase English letters.

const areAlmostEqual = function (s1, s2) {
  let missing = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) missing++;
    if (missing > 2) return false;
  }
  return [...s1].sort().join("") === [...s2].sort().join("");
};
console.log(areAlmostEqual("bank", "kanb")); // true
console.log(areAlmostEqual("attack", "defend")); // false
console.log(areAlmostEqual("kelb", "kelb")); // true
console.log(areAlmostEqual("aa", "ac")); // false

// Nothing fancy

const topVotedAreAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  let res = "";
  for (let i = 0; i < s1.length; i++) if (s1[i] !== s2[i]) res += s1[i] + s2[i];
  return res.length === 4 && res[0] === res[3] && res[1] === res[2];
};

// Better runtime */

// Find Center of Star Graph          4/10/2022
/* 
// There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

// Example 1:
//    Input: edges = [[1,2],[2,3],[4,2]]
//    Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

// Constraints:
//    3 <= n <= 105
//    edges.length == n - 1
//    edges[i].length == 2
//    1 <= ui, vi <= n
//    ui != vi
//    The given edges represent a valid star graph.

const findCenter = function (edges) {
  let max = 0;
  return edges.reduce((a, c, i, arr) => {
    const range = Math.abs(c[0] - c[1]);
    if (range > max) {
      max = range;
      return i;
    }
    return a;
  }, 0);
};
// prettier-ignore
console.log(findCenter([[1, 2],[2, 3],[4, 2]])); // 2
// prettier-ignore
console.log(findCenter([[1, 2],[5, 1],[1, 3],[1, 4]])); // 1

const topVotedFindCenter = (edges) => {
  const [[a, b], [c, d]] = edges;
  return a === c || b === c ? c : d;
};

// Very clean */

// Second Largest Digit in a String         4/11/2022
/* 
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Example 1:
//    Input: s = "dfa12321afd"
//    Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

// Example 2:
//    Input: s = "abc1111"
//    Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit.

// Constraints:
//    1 <= s.length <= 500
//    s consists of only lowercase English letters and/or digits.

const secondHighest = function (s) {
  let nums = String(s.match(/\d+/g)).split("");
  let filtered = nums.filter((x) => x < Math.max(...nums));
  return filtered.length > 0 ? Math.max(...filtered) : -1;
};
console.log(secondHighest("dfa12321afd")); // 2
console.log(secondHighest("abc1111")); // -1
console.log(secondHighest("ck077")); // 0

// Ok

var topVotedSecondHighest = function (s) {
  let intArr = new Set();
  for (let val of s) {
    if (!isNaN(val)) {
      intArr.add(parseInt(val));
    }
  }
  let sorted = Array.from(intArr).sort((a, b) => b - a);
  return sorted.length <= 1 ? -1 : sorted[1];
};

// Top 5% runtimes */

// Maximum Ascending Subarray Sum         4/12/2022
/* 
// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.

// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.

// Example 1:
//    Input: nums = [10,20,30,5,10,50]
//    Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

// Example 2:
//    Input: nums = [10,20,30,40,50]
//    Output: 150
// Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.

// Example 3:
//    Input: nums = [12,17,15,13,10,11,12]
//    Output: 33
// Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.

// Constraints:
//    1 <= nums.length <= 100
//    1 <= nums[i] <= 100

const maxAscendingSum = function (nums) {
  let cur = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];
    max = Math.max(cur, max);
    if (nums[i] >= nums[i + 1]) cur = 0;
  }
  return max;
};
console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])); // 65
console.log(maxAscendingSum([10, 20, 30, 40, 50])); // 150
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])); // 33
console.log(maxAscendingSum([3, 6, 10, 1, 8, 9, 9, 8, 9])); // 19

// Decent runtime

var topVotedMaxAscendingSum = function (nums) {
  let max = nums[0],
    sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    if (curr <= nums[i - 1]) {
      sum = 0;
    }
    sum += curr;
    max = Math.max(max, sum);
  }
  return max;
};

// Same logic, some optimizations */

// Number of Different Integers in a String         4/13/2022
/* 
// You are given a string word that consists of digits and lowercase English letters.

// You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

// Return the number of different integers after performing the replacement operations on word.

// Two integers are considered different if their decimal representations without any leading zeros are different.

// Example 1:
//    Input: word = "a123bc34d8ef34"
//    Output: 3
// Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.

// Example 2:
//    Input: word = "a1b01c001"
//    Output: 1
// Explanation: The three integers "1", "01", and "001" all represent the same integer because
// the leading zeros are ignored when comparing their decimal values.

// Constraints:
//    1 <= word.length <= 1000
//    word consists of digits and lowercase English letters.

const numDifferentIntegers = (word) =>
  new Set(
    word
      .replace(/[a-z]/g, " ")
      .trim()
      .split(/\s+/)
      .filter((x) => x !== "")
      .map((c) => +c)
  ).size;

console.log(numDifferentIntegers("a123bc34d8ef34")); // 3
console.log(numDifferentIntegers("leet1234code234")); // 2
console.log(numDifferentIntegers("a1b01c001")); // 1
console.log(numDifferentIntegers("u")); // 0

// one-liner, but doesn't work for all test cases

const CC0 = "0".charCodeAt(0);
var topVotedNumDifferentIntegers = function (word) {
  const numStrSet = new Set();
  const numStrs = word.split(/[^0-9]+/);

  for (const numStr of numStrs) {
    if (numStr.length > 0) {
      let i = 0;
      while (numStr.charCodeAt(i) === CC0) i++;
      numStrSet.add(numStr.slice(i) || "0");
    }
  }
  return numStrSet.size;
}; */

// Determine Color of a Chessboard Square         4/14/2022
/* 
// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

// https://assets.leetcode.com/uploads/2021/02/19/screenshot-2021-02-20-at-22159-pm.png

// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

// Example 1:
//    Input: coordinates = "a1"
//    Output: false
// Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.

// Example 2:
//    Input: coordinates = "h3"
//    Output: true
// Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.

// Constraints:
//    coordinates.length == 2
//    'a' <= coordinates[0] <= 'h'
//    '1' <= coordinates[1] <= '8'

const squareIsWhite = (coords) =>
  (["a", "b", "c", "d", "e", "f", "g", "h"].indexOf(coords[0]) + 1) % 2 !==
  coords[1] % 2;

console.log(squareIsWhite("a1")); // false
console.log(squareIsWhite("h3")); // true
console.log(squareIsWhite("c7")); // false

// Decent one-liner, great runtime

const topVotedSquareIsWhite = (coordinates) => {
  return coordinates[0].charCodeAt(0) % 2 !== parseInt(coordinates[1]) % 2;
};

// Same logic but uses .charCodeAt instead of hardcodded array */

// Truncate Sentence          4/15/2022
/* 
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

// Example 1:
//    Input: s = "Hello how are you Contestant", k = 4
//    Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

// Example 2:
//    Input: s = "What is the solution to this problem", k = 4
//    Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".

// Constraints:
//    1 <= s.length <= 500
//    k is in the range [1, the number of words in s].
//    s consist of only lowercase and uppercase English letters and spaces.
//    The words in s are separated by a single space.
//    There are no leading or trailing spaces.

const truncateSentence = function (s, k) {
  s = s.split(" ");
  let ans = [];
  for (let i = 0; i < k; i++) ans.push(s[i]);
  return ans.join(" ");
};
console.log(truncateSentence("Hello how are you Contestant", 4)); // "Hello how are you"
console.log(truncateSentence("What is the solution to this problem", 4)); // "What is the solution"
console.log(truncateSentence("chopper is not a tanuki", 5)); // "chopper is not a tanuki"

// Faster than 98% of submissions

const topVotedTruncateSentence = (s, k) => s.split(" ", k).join(" ");

// Today I learned that .split has a second input variable for count */

// Sign of the Product of an Array          4/16/2022
/* 
// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

// Example 1:
//    Input: nums = [-1,-2,-3,-4,3,2,1]
//    Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1

// Example 2:
//    Input: nums = [1,5,0,2,-3]
//    Output: 0
// Explanation: The product of all values in the array is 0, and signFunc(0) = 0

// Example 3:
//    Input: nums = [-1,1,-1,1,-1]
//    Output: -1
// Explanation: The product of all values in the array is -1, and signFunc(-1) = -1

// Constraints:
//    1 <= nums.length <= 1000
//    -100 <= nums[i] <= 100

const arraySign = (nums) => {
  const tot = nums.reduce((a, c) => (a *= c));
  return tot > 0 ? 1 : tot < 0 ? -1 : 0;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); // 1
console.log(arraySign([1, 5, 0, 2, -3])); // 0
console.log(arraySign([-1, 1, -1, 1, -1])); // -1

// Top 10% runtime

var topVotedArraySign = function (nums) {
  let negativeCount = nums.filter((n) => n < 0).length;
  if (nums.includes(0)) return 0;
  return negativeCount % 2 === 0 ? 1 : -1;
};

// Different logic, more of a math approach */

// Minimum Operations to Make the Array Increasing          4//17/2022
/* 
// You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

// For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.

// An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

// Example 1:
//    Input: nums = [1,1,1]
//    Output: 3
// Explanation: You can do the following operations:
// 1) Increment nums[2], so nums becomes [1,1,2].
// 2) Increment nums[1], so nums becomes [1,2,2].
// 3) Increment nums[2], so nums becomes [1,2,3].

// Constraints:
//    1 <= nums.length <= 5000
//    1 <= nums[i] <= 104

const minOperations = function (nums) {
  let acc = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      acc += nums[i - 1] - nums[i] + 1;
      nums[i] = nums[i - 1] + 1;
    }
  }
  return acc;
};
console.log(minOperations([1, 1, 1])); // 3
console.log(minOperations([1, 5, 2, 4, 1])); // 14
console.log(minOperations([8])); // 0

// Top 10% runtimes

var topVotedMinOperations = function (nums) {
  if (nums.length < 2) return 0;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      let change = nums[i - 1] - nums[i] + 1;
      count += change;
      nums[i] += change;
    }
  }
  return count;
};

// Same idea */

// Check if the Sentence Is Pangram         4/18/2022
/* 
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:
//    Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
//    Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

// Constraints:
//    1 <= sentence.length <= 1000
//    sentence consists of lowercase English letters.

const checkIfPangram = function (sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let char of alphabet.split(""))
    if (!sentence.includes(char)) return false;
  return true;
};
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram("leetcode")); // false

// Great memory & runtime

var topVotedCheckIfPangram = function (sentence) {
  return new Set(sentence).size == 26;
};

// Nice */

// Sum of Digits in Base K          4/19/2022
/* 
// Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

// After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

// Example 1:
//    Input: n = 34, k = 6
//    Output: 9
// Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.

// Example 2:
//    Input: n = 10, k = 10
//    Output: 1
// Explanation: n is already in base 10. 1 + 0 = 1.

// Constraints:
//    1 <= n <= 100
//    2 <= k <= 10

const sumBase = (n, k) => [...n.toString(k)].reduce((a, c) => (a += +c), 0);
console.log(sumBase(34, 6)); // 9
console.log(sumBase(10, 10)); // 1

// Decent one-liner

var topVotedSumBase = function (n, k) {
  let a = 0;
  while (n) {
    a += Math.trunc(n % k);
    n = n / k;
  }
  return a;
};

// Top voteds were either my solution or using a while loop like this one */

// Replace All Digits with Characters         4/20/2022
/* 
// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

// Example 1:
//    Input: s = "a1c1e1"
//    Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'

// Example 2:
//    Input: s = "a1b2c3d4e"
//    Output: "abbdcfdhe"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('b',2) = 'd'
// - s[5] -> shift('c',3) = 'f'
// - s[7] -> shift('d',4) = 'h'

// Constraints:
//    1 <= s.length <= 100
//    s consists only of lowercase English letters and digits.
//    shift(s[i-1], s[i]) <= 'z' for all odd indices i.

const replaceDigits = (s) =>
  s
    .split(/(?<=\d)/)
    .reduce(
      (a, c, i, arr) =>
        (a += c[0] + String.fromCharCode(c[0].charCodeAt(0) + +c[1])),
      ""
    );

console.log(replaceDigits("a1c1e1")); // "abcdef"
console.log(replaceDigits("a1b2c3d4e")); // "abbdcfdhe"

// I like the use of Regex here

var topVotedReplaceDigits = function (s) {
  for (let i = 1; i < s.length; i += 2) {
    let value = String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i]));
    s = s.replace(s[i], value);
  }
  return s;
};

// Nice */

// Minimum Distance to the Target Element         4/21/2022
/* 
// Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

// Return abs(i - start).

// It is guaranteed that target exists in nums.

// Example 1:
//    Input: nums = [1,2,3,4,5], target = 5, start = 3
//    Output: 1
// Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.

// Example 2:
//    Input: nums = [1], target = 1, start = 0
//    Output: 0
// Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.

// Example 3:
//    Input: nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
//    Output: 0
// Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.

// Constraints:
//    1 <= nums.length <= 1000
//    1 <= nums[i] <= 104
//    0 <= start < nums.length
//    target is in nums.

const getMinDistance = (nums, target, start) =>
  Math.abs(nums.indexOf(target) - start);

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3)); // 1
console.log(getMinDistance([1], 1, 0)); // 0
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0)); // 0

// Doesn't work for all test cases
// Not quite sure what the prompt is asking for here

var topVotedGetMinDistance = function (nums, target, start) {
  let min = Infinity;
  for (let i = nums.indexOf(target); i < nums.length; i++) {
    if (nums[i] === target) {
      if (Math.abs(i - start) < min) min = Math.abs(i - start);
    }
  }
  return min;
}; */

// Maximum Population Year          4/22/2022
/* 
// You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

// The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

// Return the earliest year with the maximum population.

// Example 1:
//    Input: logs = [[1993,1999],[2000,2010]]
//    Output: 1993
// Explanation: The maximum population is 1, and 1993 is the earliest year with this population.

// Example 2:
//    Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
//    Output: 1960
// Explanation:
// The maximum population is 2, and it had happened in years 1960 and 1970.
// The earlier year between them is 1960.

// Constraints:
//    1 <= logs.length <= 100
//    1950 <= birthi < deathi <= 2050

const topVotedMaximumPopulation = function (logs) {
  const count = new Array(101).fill(0);

  for (const [birth, death] of logs) {
    count[birth - 1950]++;
    count[death - 1950]--;
  }

  let max = 0;

  for (let i = 1; i < 101; i++) {
    count[i] += count[i - 1];

    if (count[i] > count[max]) max = i;
  }

  return 1950 + max;
};
// prettier-ignore
console.log(maximumPopulation([[1993,1999],[2000,2010]])); // 1993
// prettier-ignore
console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]])); // 1960 */

// Sorting the Sentence         4/23/2022
/* 
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

// Example 1:
//    Input: s = "is2 sentence4 This1 a3"
//    Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

// Example 2:
//    Input: s = "Myself2 Me1 I4 and3"
//    Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

// Constraints:
//    2 <= s.length <= 200
//    s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
//    The number of words in s is between 1 and 9.
//    The words in s are separated by a single space.
//    s contains no leading or trailing spaces.

const sortSentence = (s) =>
  s
    .split(" ")
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .reduce((a, c) => (a += c.substring(0, c.length - 1)) + " ", "")
    .trim();

console.log(sortSentence("is2 sentence4 This1 a3")); // "This is a sentence"
console.log(sortSentence("Myself2 Me1 I4 and3")); // "Me Myself and I"

// Better than 90%  of submission runtimes
// The prompt could've been phrased better, but once understood it was straightforward

const topVotedSortSentence = function (s) {
  return s
    .split(" ")
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map((word) => word.slice(0, word.length - 1))
    .join(" ");
};

// Same idea, different code */

// Sum of All Subset XOR Totals         4/24/2022
/* 
// The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

// For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
// Given an array nums, return the sum of all XOR totals for every subset of nums.

// Note: Subsets with the same elements should be counted multiple times.

// An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

// Example 1:
//    Input: nums = [1,3]
//    Output: 6
// Explanation: The 4 subsets of [1,3] are:
// - The empty subset has an XOR total of 0.
// - [1] has an XOR total of 1.
// - [3] has an XOR total of 3.
// - [1,3] has an XOR total of 1 XOR 3 = 2.
// 0 + 1 + 3 + 2 = 6

// Example 2:
//    Input: nums = [5,1,6]
//    Output: 28
// Explanation: The 8 subsets of [5,1,6] are:
// - The empty subset has an XOR total of 0.
// - [5] has an XOR total of 5.
// - [1] has an XOR total of 1.
// - [6] has an XOR total of 6.
// - [5,1] has an XOR total of 5 XOR 1 = 4.
// - [5,6] has an XOR total of 5 XOR 6 = 3.
// - [1,6] has an XOR total of 1 XOR 6 = 7.
// - [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
// 0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

// Example 3:
//    Input: nums = [3,4,5,6,7,8]
//    Output: 480
// Explanation: The sum of all XOR totals for every subset is 480.

// Constraints:
//    1 <= nums.length <= 12
//    1 <= nums[i] <= 20

const topVotedSubsetXORSum = function (nums) {
  let output = [];
  backtrack();
  return output.reduce((a, b) => a + b);

  function backtrack(start = 0, arr = [nums[0]]) {
    output.push([...arr].reduce((a, b) => a ^ b, 0));
    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i]);
      backtrack(i + 1, arr);
      arr.pop();
    }
  }
};
console.log(topVotedSubsetXORSum([1, 3])); // 6
console.log(topVotedSubsetXORSum([5, 1, 6])); // 28
console.log(topVotedSubsetXORSum([3, 4, 5, 6, 7, 8])); // 480

// Couldn't get it working so studied top voted
// Nice solution! */

// Longer Contiguous Segments of Ones than Zeros          4/25/2022
/* 
// Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

// For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
// Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

// Example 1:
//    Input: s = "1101"
//    Output: true
// Explanation:
// The longest contiguous segment of 1s has length 2: "1101"
// The longest contiguous segment of 0s has length 1: "1101"
// The segment of 1s is longer, so return true.

// Example 2:
//    Input: s = "111000"
//    Output: false
// Explanation:
// The longest contiguous segment of 1s has length 3: "111000"
// The longest contiguous segment of 0s has length 3: "111000"
// The segment of 1s is not longer, so return false.

// Example 3:
//    Input: s = "110100010"
//    Output: false
// Explanation:
// The longest contiguous segment of 1s has length 2: "110100010"
// The longest contiguous segment of 0s has length 3: "110100010"
// The segment of 1s is not longer, so return false.

// Constraints:
//    1 <= s.length <= 100
//    s[i] is either '0' or '1'.

const longest = (arr) => arr.reduce((a, b) => (a.length > b.length ? a : b));
const checkZeroOnes = (s) =>
  longest(s.split("0")).length > longest(s.split("1")).length;

console.log(checkZeroOnes("1101")); // true
console.log(checkZeroOnes("111000")); // false
console.log(checkZeroOnes("110100010")); // false
console.log(checkZeroOnes("011000111")); // false

// Gets the job done

var topVotedCheckZeroOnes = function (s) {
  const longest = [0, 0];
  let cur;
  let curCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (cur === undefined) cur = s[i];
    curCount += 1;
    if (cur !== s[i + 1]) {
      if (curCount > longest[cur]) longest[cur] = curCount;
      curCount = 0;
      cur = s[i + 1];
    }
  }

  return longest[0] < longest[1];
};

// All top voted solutions were much longer
// Slower runtime */

// Substrings of Size Three with Distinct Characters          4/26/2022
/* 
// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

// Example 1:
//    Input: s = "xyzzaz"
//    Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz".
// The only good substring of length 3 is "xyz".

// Example 2:
//    Input: s = "aababcabc"
//    Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".

// Constraints:
//    1 <= s.length <= 100
//    s​​​​​​ consists of lowercase English letters.

const countGoodSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length - 2; i++)
    if (/^(?:([A-Za-z])(?!.*\1))*$/.test(s.slice(i, i + 3))) count++;
  return count;
};
console.log(countGoodSubstrings("xyzzaz")); // 1
console.log(countGoodSubstrings("aababcabc")); // 4

// Googled the Regex
// Clean solution

var topVotedCountGoodSubstrings = function (s) {
  let good = 0;
  for (let index = 0; index < s.length - 2; index++) {
    const subStr = s.slice(index, index + 3);
    const set = new Set(subStr);
    set.size === 3 && (good += 1);
  }
  return good;
};

// Thought about using a Set for this one
// Would've been a good alternative to Regex */

// Check if Word Equals Summation of Two Words          4/27/2022
/* 
// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

// Example 1:
//    Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
//    Output: true
// Explanation:
// The numerical value of firstWord is "acb" -> "021" -> 21.
// The numerical value of secondWord is "cba" -> "210" -> 210.
// The numerical value of targetWord is "cdb" -> "231" -> 231.
// We return true because 21 + 210 == 231.

// Example 2:
//    Input: firstWord = "aaa", secondWord = "a", targetWord = "aab"
//    Output: false
// Explanation:
// The numerical value of firstWord is "aaa" -> "000" -> 0.
// The numerical value of secondWord is "a" -> "0" -> 0.
// The numerical value of targetWord is "aab" -> "001" -> 1.
// We return false because 0 + 0 != 1.

// Example 3:
//    Input: firstWord = "aaa", secondWord = "a", targetWord = "aaaa"
//    Output: true
// Explanation:
// The numerical value of firstWord is "aaa" -> "000" -> 0.
// The numerical value of secondWord is "a" -> "0" -> 0.
// The numerical value of targetWord is "aaaa" -> "0000" -> 0.
// We return true because 0 + 0 == 0.

// Constraints:
//    1 <= firstWord.length, secondWord.length, targetWord.length <= 8
//    firstWord, secondWord, and targetWord consist of lowercase English letters from 'a' to 'j' inclusive.

const summation = (str) =>
  +[...str].reduce((a, c) => (a += c.charCodeAt(0) - 97), "");
const isSumEqual = (firstWord, secondWord, targetWord) =>
  summation(firstWord) + summation(secondWord) === summation(targetWord);

console.log(isSumEqual("acb", "cba", "cdb")); // true
console.log(isSumEqual("aaa", "a", "aab")); // false
console.log(isSumEqual("aaa", "a", "aaaa")); // true

// Not very good runtime, but clean code

var topVotedIsSumEqual = function (firstWord, secondWord, targetWord) {
  let obj = {
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    e: "4",
    f: "5",
    g: "6",
    h: "7",
    i: "8",
    j: "9",
  };
  let first = "",
    second = "",
    target = "";
  for (let char of firstWord) first += obj[char];
  for (let char of secondWord) second += obj[char];
  for (let char of targetWord) target += obj[char];
  return parseInt(first) + parseInt(second) === parseInt(target);
}; */

// Determine Whether Matrix Can Be Obtained By Rotation         4/28/2022
/* 
// Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.

// Example 1:
//    Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
//    Output: true
// Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.
// https://assets.leetcode.com/uploads/2021/05/20/grid3.png

// Example 2:
//    Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
//    Output: false
// Explanation: It is impossible to make mat equal to target by rotating mat.

// Example 3:
//    Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
//    Output: true
// Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.

// Constraints:
//    n == mat.length == target.length
//    n == mat[i].length == target[i].length
//    1 <= n <= 10
//    mat[i][j] and target[i][j] are either 0 or 1.

var topVotedFindRotation = function (mat, target) {
  let width = mat[0].length;
  let height = mat.length;

  let normal = true;
  let rightOneTime = true;
  let rightTwoTimes = true;
  let rightThreeTimes = true;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // don't rotate mat
      if (mat[i][j] !== target[i][j]) {
        normal = false;
      }
      // rotate mat right 1 time
      if (mat[i][j] !== target[j][width - 1 - i]) {
        rightOneTime = false;
      }
      // rotate mat right 2 times
      if (mat[i][j] !== target[height - 1 - i][width - 1 - j]) {
        rightTwoTimes = false;
      }
      // rotate mat right 3 times
      if (mat[i][j] !== target[height - 1 - j][i]) {
        rightThreeTimes = false;
      }
    }
  }
  return normal || rightOneTime || rightTwoTimes || rightThreeTimes;
};
// prettier-ignore
console.log(topVotedFindRotation([[0,1],[1,0]], [[1,0],[0,1]])); // true
// prettier-ignore
console.log(topVotedFindRotation([[0,1],[1,1]], [[1,0],[0,1]])); // false
// prettier-ignore
console.log(topVotedFindRotation([[0,0,0],[0,1,0],[1,1,1]], [[1,1,1],[0,1,0],[0,0,0]])); // true
// prettier-ignore
console.log(topVotedFindRotation([[0,0],[0,1]], [[0,0],[1,0]])); // true

// Couldn't find an elegant solution for this one, studying top voted
// Feels like overkill, but all top voted submissions look like this

// Great runtime & memory */

// Check if All the Integers in a Range Are Covered         4/29/2022
/* 
// You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

// Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.

// An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

// Example 1:
//    Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
//    Output: true
// Explanation: Every integer between 2 and 5 is covered:
// - 2 is covered by the first range.
// - 3 and 4 are covered by the second range.
// - 5 is covered by the third range.

// Example 2:
//    Input: ranges = [[1,10],[10,20]], left = 21, right = 21
//    Output: false
// Explanation: 21 is not covered by any range.

// Constraints:
//    1 <= ranges.length <= 50
//    1 <= starti <= endi <= 50
//    1 <= left <= right <= 50

const isCovered = function (ranges, left, right) {
  for (let i = 0; i < ranges.length; i++) {
    if (
      !(
        (ranges[i][1] >= left && ranges[i][1] <= right) ||
        (ranges[i][0] >= left && ranges[i][0] <= right)
      )
    )
      return false;
  }
  return true;
};
// prettier-ignore
console.log(isCovered([[1,2],[3,4],[5,6]], 2, 5)); // true
// prettier-ignore
console.log(isCovered([[1,10],[10,20]], 21, 21)); // false

// Couldn't get it running

var topVotedIsCovered = function (ranges, left, right) {
  var map = new Map();
  for (let i = left; i <= right; i++) {
    map.set(i, 0);
  }
  for (let range of ranges) {
    for (let i = range[0]; i <= range[1]; i++) {
      map.set(i, 1);
    }
  }
  for (let key of map.keys()) {
    if (map.get(key) === 0) return false;
  }
  return true;
}; */

// Redistribute Characters to Make All Strings Equal          4/30/2022
/* 
// You are given an array of strings words (0-indexed).

// In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

// Return true if you can make every string in words equal using any number of operations, and false otherwise.

// Example 1:
//    Input: words = ["abc","aabc","bc"]
//    Output: true
// Explanation: Move the first 'a' in words[1] to the front of words[2],
// to make words[1] = "abc" and words[2] = "abc".
// All the strings are now equal to "abc", so return true.

// Example 2:
//    Input: words = ["ab","a"]
//    Output: false
// Explanation: It is impossible to make all the strings equal using the operation.

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length <= 100
//    words[i] consists of lowercase English letters.

const makeEqual = function (words) {
  if (words.length == 2 && words[0] !== words[1]) return false;
  words = [...new Set(words)].sort((a, b) => a.length - b.length);

  if (words.length > 3) return false;
  if (
    words[0].length !== words[1].length - 1 ||
    words[2].length !== words[1].length + 1
  )
    return false;

  let missingChar = words[1].slice(0, words[1].indexOf(words[0]));
  if (missingChar.length > 1) return false;

  let extraChar = words[2].slice(0, words[2].indexOf(words[1]));
  return missingChar === extraChar;
};
console.log(makeEqual(["abc", "aabc", "bc"])); // true
console.log(makeEqual(["abc", "abc", "abc", "abc", "aabc", "bc"])); // true
console.log(makeEqual(["ab", "a"])); // false

// Oof, there must be a better way

const topVotedMakeEqual = function (words) {
  let length = words.length;

  let map = {};
  for (let word of words)
    for (let ch of word) {
      map[ch] = (map[ch] || 0) + 1;
    }

  for (let key of Object.keys(map)) {
    if (map[key] % length != 0) return false;
  }

  return true;
};

// Map is definitely the way to go here */

// Largest Odd Number in String         5/1/2022
/* 
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

// Example 1:
//    Input: num = "52"
//    Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

// Example 2:
//    Input: num = "4206"
//    Output: ""
// Explanation: There are no odd numbers in "4206".

// Example 3:
//    Input: num = "35427"
//    Output: "35427"
// Explanation: "35427" is already an odd number.

// Constraints:
//    1 <= num.length <= 105
//    num only consists of digits and does not contain any leading zeros.

const largestOddNumber = (num) => {
  if (num % 2) return num;
  num = num.split(/(?=[0|2|4|6|8])/);
  for (let i = num.length--; i > 0; i--) {
    const x = num.slice(0, i).join("");
    if (x % 2) return x;
  }
  return "";
};

console.log(largestOddNumber("52")); // "5"
console.log(largestOddNumber("4206")); // ""
console.log(largestOddNumber("35427")); // "35427"
console.log(largestOddNumber("10133890")); // "1013389"

// Doesn't work with BigInt

const topVotedLargestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i] % 2) return num.slice(0, i + 1);
  }
  return "";
};

// Same idea but actual working code */

// Remove One Element to Make the Array Strictly Increasing         5/2/2022
/* 
// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

// Example 1:
//    Input: nums = [1,2,10,5,7]
//    Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.

// Example 2:
//    Input: nums = [2,3,1,2]
//    Output: false
// Explanation:
// [3,1,2] is the result of removing the element at index 0.
// [2,1,2] is the result of removing the element at index 1.
// [2,3,2] is the result of removing the element at index 2.
// [2,3,1] is the result of removing the element at index 3.
// No resulting array is strictly increasing, so return false.

// Example 3:
//    Input: nums = [1,1,1]
//    Output: false
// Explanation: The result of removing any element is [1,1].
// [1,1] is not strictly increasing, so return false.

// Constraints:
//    2 <= nums.length <= 1000
//    1 <= nums[i] <= 1000

const canBeIncreasing = function (nums) {
  const l = nums.length;
  for (let i = 0; i < nums.length; ) {
    nums[i + 1] <= nums[i] ? nums.splice(i, 1) : i++;
  }
  return nums.length > l - 2;
};
console.log(canBeIncreasing([1, 2, 10, 5, 7])); // true
console.log(canBeIncreasing([2, 3, 1, 2])); // false
console.log(canBeIncreasing([1, 1, 1])); // false
console.log(canBeIncreasing([105, 924, 32, 968])); // true

// Close, but no time to troubleshoot today!

var topVotedCanBeIncreasing = function (nums) {
  for (let i = 1, used = false, prev = nums[0]; i < nums.length; i++) {
    if (nums[i] > prev) {
      prev = nums[i];
      continue;
    }
    if (used) return false;
    used = true;
    (i === 1 || nums[i] > nums[i - 2]) && (prev = nums[i]);
  }
  return true;
}; */

// Maximum Product Difference Between Two Pairs         5/3/2022
/* 
// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

// Example 1:
//    Input: nums = [5,6,2,7,4]
//    Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.

// Example 2:
//    Input: nums = [4,2,5,9,7,4,8]
//    Output: 64
// Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
// The product difference is (9 * 8) - (2 * 4) = 64.

// Constraints:
//    4 <= nums.length <= 104
//    1 <= nums[i] <= 104

const maxProductDifference = function (nums) {
  nums = nums.sort((a, b) => a - b);
  return nums.pop() * nums.pop() - nums.shift() * nums.shift();
};
console.log(maxProductDifference([5, 6, 2, 7, 4])); // 34
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8])); // 64

// Makes sense
// 2 largest - 2 smallest

// Same as all top voted solutions */

// Build Array from Permutation         5/4/2022
/* 
// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Example 1:
//    Input: nums = [0,2,1,5,3,4]
//    Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]

// Example 2:
//    Input: nums = [5,0,1,2,3,4]
//    Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]

// Constraints:
//    1 <= nums.length <= 1000
//    0 <= nums[i] < nums.length
//    The elements in nums are distinct.

const buildArray = (nums) => nums.map((c, _, arr) => arr[c], []);
console.log(buildArray([0, 2, 1, 5, 3, 4])); // [0,1,2,4,5,3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // [4,5,0,1,2,3]

// Slow runtime compared to other submissions
// Same as top voteds */

// Count Square Sum Triples         5/5/2022
/* 
// A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

// Example 1:
//    Input: n = 5
//    Output: 2
// Explanation: The square triples are (3,4,5) and (4,3,5).

// Example 2:
//    Input: n = 10
//    Output: 4
// Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).

// Constraints:
//    1 <= n <= 250

const countTriples = function (n) {
  let count = 0;
  for (let a = 1; a <= n; a++)
    for (let b = 1; b <= n; b++)
      for (let c = 1; c <= n; c++) if (a * a + b * b === c * c) count++;
  return count;
};
console.log(countTriples(5)); // 2
console.log(countTriples(10)); // 4

// Feels brute force, surely some optimization to be had
// Terrible runtime

// Same as all top voted submissions */

// Concatenation of Array         5/6/2022
/* 
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// Example 1:
//    Input: nums = [1,2,1]
//    Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

// Example 2:
//    Input: nums = [1,3,2,1]
//    Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

// Constraints:
//    n == nums.length
//    1 <= n <= 1000
//    1 <= nums[i] <= 1000

const getConcatenation = (nums) => [...nums, ...nums];
console.log(getConcatenation([1, 2, 1])); // [1,2,1,1,2,1]
console.log(getConcatenation([1, 3, 2, 1])); // [1,3,2,1,1,3,2,1]

// Little too easy
// Same as all top voted solutions

const topVotedGetConcatenation = (nums) => nums.concat(nums);

// An alternative with better runtime */

// Maximum Number of Words You Can Type         5/7/2022
/* 
// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

// Example 1:
//    Input: text = "hello world", brokenLetters = "ad"
//    Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.

// Example 2:
//    Input: text = "leet code", brokenLetters = "lt"
//    Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.

// Example 3:
//    Input: text = "leet code", brokenLetters = "e"
//    Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.

// Constraints:
//    1 <= text.length <= 104
//    0 <= brokenLetters.length <= 26
//    text consists of words separated by a single space without any leading or trailing spaces.
//    Each word only consists of lowercase English letters.
//    brokenLetters consists of distinct lowercase English letters.

const canBeTypedWords = (text, brokenLetters) =>
  text.split(" ").reduce((a, c) => {
    for (let key of brokenLetters.split(""))
      if (c.includes(key)) {
        a--;
        break;
      }
    return a;
  }, text.split(" ").length);

console.log(canBeTypedWords("hello world", "ad")); // 1
console.log(canBeTypedWords("leet code", "lt")); // 1
console.log(canBeTypedWords("leet code", "e")); // 0
console.log(canBeTypedWords("a b c d e", "abcde")); // 0

// I like it

var topVotedCanBeTypedWords = function (text, brokenLetters) {
  const textSplit = text.split(" ");
  const brokenLetterSplit = brokenLetters.split("");

  return textSplit.filter((word) => {
    return brokenLetterSplit.every((broken) => !word.includes(broken));
  }).length;
};

// Filter approach is very valid here too */

// Check if All Characters Have Equal Number of Occurrences         5/8/2022
/* 
// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example 1:
//    Input: s = "abacbc"
//    Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

// Example 2:
//    Input: s = "aaabb"
//    Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

// Constraints:
//    1 <= s.length <= 1000
//    s consists of lowercase English letters.

const areOccurrencesEqual = (s) => {
  const count = new Map();
  s.split("").map((c) =>
    count.has(c) ? count.set(c, count.get(c) + 1) : count.set(c, 1)
  );
  return [...count.values()].every((el, _, arr) => el === arr[0]);
};
console.log(areOccurrencesEqual("abacbc")); // true
console.log(areOccurrencesEqual("aaabb")); // false

// Great runtime, only 3 lines

var topVotedAreOccurrencesEqual = (s) => {
  let count = s.split("").reduce((obj, cur) => {
    obj.hasOwnProperty(cur) ? (obj[cur] += 1) : (obj[cur] = 1);
    return obj;
  }, {});
  return new Set(Object.values(count)).size === 1;
};

// Smart way of creating count here using .reduce
// Using a Set to evaluate if all counts were the same too

// Very nice */

// Sum of Digits of String After Convert          5/9/2022
/* 
// You are given a string s consisting of lowercase English letters, and an integer k.

// First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

// For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

// Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// Transform #2: 17 ➝ 1 + 7 ➝ 8
// Return the resulting integer after performing the operations described above.

// Example 1:
//    Input: s = "iiii", k = 1
//    Output: 36
// Explanation: The operations are as follows:
// - Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
// - Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
// Thus the resulting integer is 36.

// Example 2:
//    Input: s = "leetcode", k = 2
//    Output: 6
// Explanation: The operations are as follows:
// - Convert: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
// - Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
// - Transform #2: 33 ➝ 3 + 3 ➝ 6
// Thus the resulting integer is 6.

// Constraints:
//    1 <= s.length <= 100
//    1 <= k <= 10
//    s consists of lowercase English letters.

const getLucky = (s, k) => {
  let nums = [...s].reduce((a, c) => (a += c.charCodeAt(0) - 96), "");
  for (let i = 0; i < k; i++)
    nums = String([...nums].reduce((a, c) => (a += +c), 0));
  return nums;
};
console.log(getLucky("iiii", 1)); // 36
console.log(getLucky("leetcode", 2)); // 6
console.log(getLucky("zbax", 2)); // 8

// Ok solution

const topVotedGetLucky = (ss, k) => {
  let s = "";
  for (const c of ss) s += c.charCodeAt() - 96;
  while (k--) {
    s = go(s);
  }
  return s - "0";
};

const go = (s) => {
  let sum = 0;
  for (const c of s) {
    sum += c - "0";
  }
  return sum + "";
};

// Much slower runtime */

// Three Divisors         5/10/2022
/* 
// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

// An integer m is a divisor of n if there exists an integer k such that n = k * m.

// Example 1:
//    Input: n = 2
//    Output: false
// Explantion: 2 has only two divisors: 1 and 2.

// Example 2:
//    Input: n = 4
//    Output: true
// Explantion: 4 has three divisors: 1, 2, and 4.

// Constraints:
//    1 <= n <= 104

const isPrime = (num) => {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};
const isThree = (n) => !isPrime(n) && !(n >= 6);

console.log(isThree(2)); // false
console.log(isThree(4)); // true
console.log(isThree(12)); // false

// Doesn't work for all test cases

const topVotedIsThree = (n) => {
  var set = new Set();
  for (var i = 1; i <= Math.sqrt(n) && set.size <= 3; i++) {
    if (n % i === 0) set.add(i).add(n / i);
  }
  return set.size === 3;
};

// Good idea to use a Set */

// Delete Characters to Make Fancy String         5/11/2022
/* 
// A fancy string is a string where no three consecutive characters are equal.

// Given a string s, delete the minimum possible number of characters from s to make it fancy.

// Return the final string after the deletion. It can be shown that the answer will always be unique.

// Example 1:
//    Input: s = "leeetcode"
//    Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode".

// Example 2:
//    Input: s = "aaabaaaa"
//    Output: "aabaa"
// Explanation:
// Remove an 'a' from the first group of 'a's to create "aabaaaa".
// Remove two 'a's from the second group of 'a's to create "aabaa".
// No three consecutive characters are equal, so return "aabaa".

// Example 3:
//    Input: s = "aab"
//    Output: "aab"
// Explanation: No three consecutive characters are equal, so return "aab".

// Constraints:
//    1 <= s.length <= 105
//    s consists only of lowercase English letters.

const makeFancyString = (s) => {
  s = [...s];
  for (let i = 2; i < s.length; i++)
    if (s[i] === s[i - 1] && s[i] === s[i - 2]) {
      s.splice(i, 1);
      i--;
    }
  return s.join("");
};
console.log(makeFancyString("leeetcode")); // "leetcode"
console.log(makeFancyString("aaabaaaa")); // "aabaa"
console.log(makeFancyString("aab")); // "aab"
console.log(makeFancyString("aabaabaabaa")); // "aabaabaabaa"

// Doesn't work for all test cases

var topVotedMakeFancyString = function (s) {
  let string = s.slice(0, 2);
  const length = s.length;
  for (let i = 2; i < length; i++) {
    if (s[i] !== s[i - 1] || s[i] !== s[i - 2]) {
      string += s[i];
    }
  }
  return string;
};

// Nice */

// Check If String Is a Prefix of Array         5/12/2022
/* 
// Given a string s and an array of strings words, determine whether s is a prefix string of words.

// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

// Return true if s is a prefix string of words, or false otherwise.

// Example 1:
//    Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
//    Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.

// Example 2:
//    Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
//    Output: false
// Explanation:
// It is impossible to make s using a prefix of arr.

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length <= 20
//    1 <= s.length <= 1000
//    words[i] and s consist of only lowercase English letters.

const isPrefixString = (s, w) => {
  let concat = "";
  while (s.length > concat.length && w.length > 0) {
    concat += w.shift();
    if (s === concat) return true;
  }
  return false;
};
// prettier-ignore
console.log(isPrefixString("iloveleetcode",  ["i","love","leetcode","apples"])); // true
// prettier-ignore
console.log(isPrefixString("iloveleetcode",  ["apples","i","love","leetcode"])); // false

// Same as top voted */

// Number of Strings That Appear as Substrings in Word          5/13/2022
/* 
// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.

// Example 1:
//    Input: patterns = ["a","abc","bc","d"], word = "abc"
//    Output: 3
// Explanation:
// - "a" appears as a substring in "abc".
// - "abc" appears as a substring in "abc".
// - "bc" appears as a substring in "abc".
// - "d" does not appear as a substring in "abc".
// 3 of the strings in patterns appear as a substring in word.

// Example 2:
//    Input: patterns = ["a","b","c"], word = "aaaaabbbbb"
//    Output: 2
// Explanation:
// - "a" appears as a substring in "aaaaabbbbb".
// - "b" appears as a substring in "aaaaabbbbb".
// - "c" does not appear as a substring in "aaaaabbbbb".
// 2 of the strings in patterns appear as a substring in word.

// Example 3:
//    Input: patterns = ["a","a","a"], word = "ab"
//    Output: 3
// Explanation: Each of the patterns appears as a substring in word "ab".

// Constraints:
//    1 <= patterns.length <= 100
//    1 <= patterns[i].length <= 100
//    1 <= word.length <= 100
//    patterns[i] and word consist of lowercase English letters.

const numOfStrings = (patterns, word) =>
  patterns.reduce((a, c) => (word.includes(c) ? ++a : a), 0);

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc")); // 3
console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb")); // 2
console.log(numOfStrings(["a", "a", "a"], "ab")); // 3

// Clean lil one-liner

var topVotedNumOfStrings = function (patterns, word) {
  let result = 0;
  for (let char of patterns) {
    if (word.includes(char)) {
      result++;
    } else {
      result += 0;
    }
    ("");
  }
  return result;
};

// Same logic */

// Minimum Time to Type Word Using Special Typewriter         5/14/2022
/* 
// There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.

// Each second, you may perform one of the following operations:

// Move the pointer one character counterclockwise or clockwise.
// Type the character the pointer is currently on.
// Given a string word, return the minimum number of seconds to type out the characters in word.

// Example 1:
//    Input: word = "abc"
//    Output: 5
// Explanation:
// The characters are printed as follows:
//    - Type the character 'a' in 1 second since the pointer is initially on 'a'.
//    - Move the pointer clockwise to 'b' in 1 second.
//    - Type the character 'b' in 1 second.
//    - Move the pointer clockwise to 'c' in 1 second.
//    - Type the character 'c' in 1 second.

// Example 2:
//    Input: word = "bza"
//    Output: 7
// Explanation:
// The characters are printed as follows:
//    - Move the pointer clockwise to 'b' in 1 second.
//    - Type the character 'b' in 1 second.
//    - Move the pointer counterclockwise to 'z' in 2 seconds.
//    - Type the character 'z' in 1 second.
//    - Move the pointer clockwise to 'a' in 1 second.
//    - Type the character 'a' in 1 second.

// Example 3:
//    Input: word = "zjpc"
//    Output: 34
// Explanation:
// The characters are printed as follows:
//    - Move the pointer counterclockwise to 'z' in 1 second.
//    - Type the character 'z' in 1 second.
//    - Move the pointer clockwise to 'j' in 10 seconds.
//    - Type the character 'j' in 1 second.
//    - Move the pointer clockwise to 'p' in 6 seconds.
//    - Type the character 'p' in 1 second.
//    - Move the pointer counterclockwise to 'c' in 13 seconds.
//    - Type the character 'c' in 1 second.

// Constraints:
//    1 <= word.length <= 100
//    word consists of lowercase English letters.

const minTimeToType = (word) => {
  let [count, cur] = [0, "a"];

  for (let i = 0; i < word.length; i++) {
    const gap = Math.abs(cur.charCodeAt(0) - word[i].charCodeAt(0));
    gap > 13 ? (count += 26 - gap) : (count += gap);
    cur = word[i];
  }

  return (count += word.length);
};
console.log(minTimeToType("abc")); // 5
console.log(minTimeToType("bza")); // 7
console.log(minTimeToType("zjpc")); // 34

// Got close, but had to peak at top voted to get it working

const improvedMinTimeToType = (word, cur = "a") =>
  [...word].reduce((a, c) => {
    const gap = Math.abs(cur.charCodeAt(0) - c.charCodeAt(0));
    cur = c;
    return gap > 13 ? (a += 26 - gap) : (a += gap);
  }, word.length);

console.log(improvedMinTimeToType("abc")); // 5
console.log(improvedMinTimeToType("bza")); // 7
console.log(improvedMinTimeToType("zjpc")); // 34

// Slower runtime, more compressed code */

// Find Greatest Common Divisor of Array          5/15/2022
/* 
// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:
//    Input: nums = [2,5,6,9,10]
//    Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.

// Example 2:
//    Input: nums = [7,5,6,8,3]
//    Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.

// Example 3:
//    Input: nums = [3,3]
//    Output: 3
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 3.
// The greatest common divisor of 3 and 3 is 3.

// Constraints:
//    2 <= nums.length <= 1000
//    1 <= nums[i] <= 1000

const findGCD = (nums) =>
  (Math.max(...nums) / Math.min(...nums)) % 1 === 0 ? Math.min(...nums) : 1;

console.log(findGCD([2, 5, 6, 9, 10])); // 2
console.log(findGCD([7, 5, 6, 8, 3])); // 1
console.log(findGCD([3, 3])); // 3

// For sure not taking into account all 'in between' divisors

const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
const topvotedFindGCD = (a) => {
  let max = Math.max.apply(Math, a);
  let min = Math.min.apply(Math, a);
  return gcd(min, max);
};

// gcd was the function I was missing

// Google angel number 333 🙂 */

// Minimum Difference Between Highest and Lowest of K Scores          5/16/2022
/* 
// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

// Return the minimum possible difference.

// Example 1:
//    Input: nums = [90], k = 1
//    Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.

// Example 2:
//    Input: nums = [9,4,1,7], k = 2
//    Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

// Constraints:
//    1 <= k <= nums.length <= 1000
//    0 <= nums[i] <= 105

const minimumDifference = (nums, k) => {
  if (k === 1 || nums.length === 1) return 0;
  nums = nums.sort((a, b) => a - b);
  return nums.pop() - nums.pop();
};
console.log(minimumDifference([90], 1)); // 0
console.log(minimumDifference([9, 4, 1, 7], 2)); // 2

// Doesn't work for all test cases

var topVotedMinimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);
  let min = nums[0],
    max = nums[k - 1],
    diff = max - min;
  for (let i = k; i < nums.length; i++) {
    diff = Math.min(diff, nums[i] - nums[i - k + 1]);
  }
  return diff;
}; */

// Find the Middle Index in Array         5/17/2022
/* 
// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

// Example 1:
//    Input: nums = [2,3,-1,8,4]
//    Output: 3
// Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
// The sum of the numbers after index 3 is: 4 = 4

// Example 2:
//    Input: nums = [1,-1,4]
//    Output: 2
// Explanation: The sum of the numbers before index 2 is: 1 + -1 = 0
// The sum of the numbers after index 2 is: 0

// Example 3:
//    Input: nums = [2,5]
//    Output: -1
// Explanation: There is no valid middleIndex.

// Constraints:
//    1 <= nums.length <= 100
//    -1000 <= nums[i] <= 1000

const findMiddleIndex = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const l = nums.slice(0, i).reduce((a, c) => (a += c), 0);
    const r = nums.slice(i + 1).reduce((a, c) => (a += c), 0);
    if (l === r) return i;
  }
  return -1;
};
console.log(findMiddleIndex([2, 3, -1, 8, 4])); // 3
console.log(findMiddleIndex([1, -1, 4])); // 2
console.log(findMiddleIndex([2, 5])); // -1

// Not great runtime, but works
// Same as top voted */

// Count Special Quadruplets          5/18/2022
/* 
// Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:

// nums[a] + nums[b] + nums[c] == nums[d], and
// a < b < c < d

// Example 1:
//    Input: nums = [1,2,3,6]
//    Output: 1
// Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.

// Example 2:
//    Input: nums = [3,3,6,4,5]
//    Output: 0
// Explanation: There are no such quadruplets in [3,3,6,4,5].

// Example 3:
//    Input: nums = [1,1,1,3,5]
//    Output: 4
// Explanation: The 4 quadruplets that satisfy the requirement are:
// - (0, 1, 2, 3): 1 + 1 + 1 == 3
// - (0, 1, 3, 4): 1 + 1 + 3 == 5
// - (0, 2, 3, 4): 1 + 1 + 3 == 5
// - (1, 2, 3, 4): 1 + 1 + 3 == 5

// Constraints:
//    4 <= nums.length <= 50
//    1 <= nums[i] <= 100

const countQuadruplets = (nums) => {
  let count = 0;
  for (let a = 0; a < nums.length - 3; a++)
    for (let b = a + 1; b < nums.length - 2; b++)
      for (let c = b + 1; c < nums.length - 1; c++) {
        const sum = nums[a] + nums[b] + nums[c];
        const find = nums.slice(c + 1).filter((num) => num === sum);
        count += find.length;
      }
  return count;
};
console.log(countQuadruplets([1, 2, 3, 6])); // 1
console.log(countQuadruplets([3, 3, 6, 4, 5])); // 0
console.log(countQuadruplets([1, 1, 1, 3, 5])); // 4

// Ended up studying top voted for this one

// Pretty straight forward after all
// Not the greatest runtime */

// Reverse Prefix of Word         5/19/2022
/* 
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:
//    Input: word = "abcdefd", ch = "d"
//    Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

// Example 2:
//    Input: word = "xyxzxe", ch = "z"
//    Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

// Example 3:
//    Input: word = "abcd", ch = "z"
//    Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".

// Constraints:
//    1 <= word.length <= 250
//    word consists of lowercase English letters.
//    ch is a lowercase English letter.

const reversePrefix = (word, ch) => {
  if (!word.includes(ch)) return word;
  word = [...word];
  let firstHalf = word.splice(0, word.indexOf(ch) + 1);
  return [...firstHalf.reverse(), ...word].join("");
};
console.log(reversePrefix("abcdefd", "d")); // "dcbaefd"
console.log(reversePrefix("xyxzxe", "z")); // "zxyxxe"
console.log(reversePrefix("abcd", "z")); // "abcd"

// Terrible runtime, but works

var topVotedReversePrefix = function (word, ch) {
  const index = word.indexOf(ch);
  return (
    word
      .substr(0, index + 1)
      .split("")
      .reverse()
      .join("") + word.substr(index + 1)
  );
}; */

// Count Number of Pairs With Absolute Difference K         5/20/2022
/* 
// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

// Example 1:
//    Input: nums = [1,2,2,1], k = 1
//    Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]

// Example 2:
//    Input: nums = [1,3], k = 3
//    Output: 0
// Explanation: There are no pairs with an absolute difference of 3.

// Example 3:
//    Input: nums = [3,2,1,5,4], k = 2
//    Output: 3
// Explanation: The pairs with an absolute difference of 2 are:
// - [3,2,1,5,4]
// - [3,2,1,5,4]
// - [3,2,1,5,4]

// Constraints:
//    1 <= nums.length <= 200
//    1 <= nums[i] <= 100
//    1 <= k <= 99

const countKDifference = (nums, k) => {
  let count = 0;
  for (let i = 0; i <= nums.length; i++) {
    let arr = nums;
    const val = arr.shift();
    count += arr.reduce((a, c) => (Math.abs(val - c) === k ? ++a : a), 0);
  }
  return count;
};
console.log(countKDifference([1, 2, 2, 1], 1)); // 4
console.log(countKDifference([1, 3], 3)); // 0
console.log(countKDifference([3, 2, 1, 5, 4], 2)); // 3

// Doesn't work for all test cases

const topVotedCountKDifference = function (nums, k) {
  nums = nums.sort((b, a) => b - a);
  let count = 0;

  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (Math.abs(nums[i] - nums[j]) == k) count++;

  return count;
};

// This is the logic I had in mind but I guess j=i+1 is what I was missing */

// Final Value of Variable After Performing Operations          5/21/2022
/* 
// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// Example 1:
//    Input: operations = ["--X","X++","X++"]
//    Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.

// Example 2:
//    Input: operations = ["++X","++X","X++"]
//    Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.

// Example 3:
//    Input: operations = ["X++","++X","--X","X--"]
//    Output: 0
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// X++: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// --X: X is decremented by 1, X = 2 - 1 = 1.
// X--: X is decremented by 1, X = 1 - 1 = 0.

// Constraints:
//    1 <= operations.length <= 100
//    operations[i] will be either "++X", "X++", "--X", or "X--".

const finalValueAfterOperations = (operations) =>
  operations.reduce((a, c) => (c.includes("+") ? ++a : --a), 0);
console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // 1
console.log(finalValueAfterOperations(["++X", "++X", "X++"])); // 3
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"])); // 0

// Easy peasy
// Great runtime

// Same as top voted */

// Maximum Difference Between Increasing Elements         5/22/2022
/* 
// Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

// Return the maximum difference. If no such i and j exists, return -1.

// Example 1:
//    Input: nums = [7,1,5,4]
//    Output: 4
// Explanation:
// The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
// Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.

// Example 2:
//    Input: nums = [9,4,3,2]
//    Output: -1
// Explanation:
// There is no i and j such that i < j and nums[i] < nums[j].

// Example 3:
//    Input: nums = [1,5,2,10]
//    Output: 9
// Explanation:
// The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.

// Constraints:
//    n == nums.length
//    2 <= n <= 1000
//    1 <= nums[i] <= 109

const maximumDifference = (nums, max = 0) => {
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      max = Math.max(max, nums[j] - nums[i]);
  return max ? max:-1
};
console.log(maximumDifference([7, 1, 5, 4])); // 4
console.log(maximumDifference([9, 4, 3, 2])); // -1
console.log(maximumDifference([1, 5, 2, 10])); // 9

// Functional and concise

const topVotedMaximumDifference = (nums) => {
  let res = -1;
  let pointer1 = 0;
  let pointer2 = 1;
  while (pointer2 <= nums.length - 1) {
    if (nums[pointer1] < nums[pointer2]) {
      res =
        nums[pointer2] - nums[pointer1] > res
          ? nums[pointer2] - nums[pointer1]
          : res;
    } else {
      pointer1 = pointer2;
    }
    pointer2++;
  }
  return res;
};

// O(n) solution with much better runtime */

// Convert 1D Array Into 2D Array         5/23/2022
/* 
// You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with m rows and n columns using all the elements from original.

// The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

// Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

// Example 1:
//    Input: original = [1,2,3,4], m = 2, n = 2
//    Output: [[1,2],[3,4]]
// Explanation: The constructed 2D array should contain 2 rows and 2 columns.
// The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
// The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

// Example 2:
//    Input: original = [1,2,3], m = 1, n = 3
//    Output: [[1,2,3]]
// Explanation: The constructed 2D array should contain 1 row and 3 columns.
// Put all three elements in original into the first row of the constructed 2D array.

// Example 3:
//    Input: original = [1,2], m = 1, n = 1
//    Output: []
// Explanation: There are 2 elements in original.
// It is impossible to fit 2 elements in a 1x1 2D array, so return an empty 2D array.

// Constraints:
//    1 <= original.length <= 5 * 104
//    1 <= original[i] <= 105
//    1 <= m, n <= 4 * 104

const construct2DArray = (original, m, n) => {
  if (m * n !== original.length) return [];
  return Array(m)
    .fill(0)
    .map(() => original.splice(0, n));
};
console.log(construct2DArray([1, 2, 3, 4], 2, 2)); // [[1,2],[3,4]]
console.log(construct2DArray([1, 2, 3], 1, 3)); // [[1,2,3]]
console.log(construct2DArray([1, 2], 1, 1)); // []
console.log(construct2DArray([3], 1, 2)); // []

// Ok runtime, but works

var topVotedConstruct2DArray = (original, m, n) => {
  if (original.length !== m * n) return [];
  let result = [];
  let arr = [];
  for (let i = 0; i < original.length; i++) {
    arr.push(original[i]);
    if (arr.length === n) {
      result.push(arr);
      arr = [];
    }
  }
  return result;
}; */

// Minimum Moves to Convert String          5/24/2022
/* 
// You are given a string s consisting of n characters which are either 'X' or 'O'.

// A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.

// Return the minimum number of moves required so that all the characters of s are converted to 'O'.

// Example 1:
//    Input: s = "XXX"
//    Output: 1
// Explanation: XXX -> OOO
// We select all the 3 characters and convert them in one move.

// Example 2:
//    Input: s = "XXOX"
//    Output: 2
// Explanation: XXOX -> OOOX -> OOOO
// We select the first 3 characters in the first move, and convert them to 'O'.
// Then we select the last 3 characters and convert them so that the final string contains all 'O's.

// Example 3:
//    Input: s = "OOOO"
//    Output: 0
// Explanation: There are no 'X's in s to convert.

// Constraints:
//    3 <= s.length <= 1000
//    s[i] is either 'X' or 'O'.

const minimumMoves = (s) =>
  s.match(/.{1,3}/g).reduce((a, c) => (c.includes("X") ? ++a : a), 0);

console.log(minimumMoves("XXX")); // 1
console.log(minimumMoves("XXOX")); // 2
console.log(minimumMoves("OOOO")); // 0
console.log(minimumMoves("OXOX")); // 1

// Close but I'm not taking into account optimal grouping of 3 chars
// Doesn't work for all test cases

const topVotedMinimumMoves = (s) => s.match(/X.{0,2}/g)?.length ?? 0;

// Oh wow, very nice
// Amazing runtime & memory

// His regex optimally groups Xs
// Great use of optional chaining and nullish coalescing operators */

// Two Out of Three         5/25/2022
/* 
// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

// Example 1:
//    Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
//    Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.

// Example 2:
//    Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
//    Output: [2,3,1]
// Explanation: The values that are present in at least two arrays are:
// - 2, in nums2 and nums3.
// - 3, in nums1 and nums2.
// - 1, in nums1 and nums3.

// Example 3:
//    Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
//    Output: []
// Explanation: No value is present in at least two arrays.

// Constraints:
//    1 <= nums1.length, nums2.length, nums3.length <= 100
//    1 <= nums1[i], nums2[j], nums3[k] <= 100

const twoOutOfThree = (nums1, nums2, nums3) => [
  ...new Set(
    [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)].filter(
      (x, _, arr) => arr.indexOf(x) !== arr.lastIndexOf(x)
    )
  ),
];

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])); // [3,2]
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2])); // [2,3,1]
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5])); // []

// Gets the job done

var topVotedTwoOutOfThree = function (nums1, nums2, nums3) {
  let newArr = [];
  newArr.push(
    ...nums1.filter((num) => nums2.includes(num) || nums3.includes(num))
  );
  newArr.push(
    ...nums2.filter((num) => nums1.includes(num) || nums3.includes(num))
  );
  return Array.from(new Set(newArr));
};

// Much simpler logic here */

// Minimum Number of Moves to Seat Everyone         5/26/2022
/* 
// There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

// You may perform the following move any number of times:

// Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
// Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

// Note that there may be multiple seats or students in the same position at the beginning.

// Example 1:
//    Input: seats = [3,1,5], students = [2,7,4]
//    Output: 4
// Explanation: The students are moved as follows:
// - The first student is moved from from position 2 to position 1 using 1 move.
// - The second student is moved from from position 7 to position 5 using 2 moves.
// - The third student is moved from from position 4 to position 3 using 1 move.
// In total, 1 + 2 + 1 = 4 moves were used.

// Example 2:
//    Input: seats = [4,1,5,9], students = [1,3,2,6]
//    Output: 7
// Explanation: The students are moved as follows:
// - The first student is not moved.
// - The second student is moved from from position 3 to position 4 using 1 move.
// - The third student is moved from from position 2 to position 5 using 3 moves.
// - The fourth student is moved from from position 6 to position 9 using 3 moves.
// In total, 0 + 1 + 3 + 3 = 7 moves were used.

// Example 3:
//    Input: seats = [2,2,6,6], students = [1,3,2,6]
//    Output: 4
// Explanation: Note that there are two seats at position 2 and two seats at position 6.
// The students are moved as follows:
// - The first student is moved from from position 1 to position 2 using 1 move.
// - The second student is moved from from position 3 to position 6 using 3 moves.
// - The third student is not moved.
// - The fourth student is not moved.
// In total, 1 + 3 + 0 + 0 = 4 moves were used.

// Constraints:
//    n == seats.length == students.length
//    1 <= n <= 100
//    1 <= seats[i], students[j] <= 100

const minMovesToSeat = (seats, students) => {
  seats.sort((a, b) => a - b);
  return students
    .sort((a, b) => a - b)
    .reduce((a, c) => (a += Math.abs(c - seats.shift())), 0);
};
console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])); // 4
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])); // 7
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])); // 4

// Same as top voted */

// Check if Numbers Are Ascending in a Sentence         5/27/2022
/* 
// A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.

// For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).

// Return true if so, or false otherwise.

// Example 1:
//    Input: s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
//    Output: true
// Explanation: The numbers in s are: 1, 3, 4, 6, 12.
// They are strictly increasing from left to right: 1 < 3 < 4 < 6 < 12.

// Example 2:
//    Input: s = "hello world 5 x 5"
//    Output: false
// Explanation: The numbers in s are: 5, 5. They are not strictly increasing.

// Example 3:
//    Input: s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
//    Output: false
// Explanation: The numbers in s are: 7, 51, 50, 60. They are not strictly increasing.

// Constraints:
//    3 <= s.length <= 200
//    s consists of lowercase English letters, spaces, and digits from 0 to 9, inclusive.
//    The number of tokens in s is between 2 and 100, inclusive.
//    The tokens in s are separated by a single space.
//    There are at least two numbers in s.
//    Each number in s is a positive number less than 100, with no leading zeros.
//    s contains no leading or trailing spaces.

const areNumbersAscending = (s) => {
  s = s.match(/(\d+)/g);
  for (let i = 1; i < s.length; i++) if (+s[i] <= +s[i - 1]) return false;
  return true;
};

// prettier-ignore
console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")); // true
console.log(areNumbersAscending("hello world 5 x 5")); // false
// prettier-ignore
console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s")); // false

// Pretty good runtime

const topVotedAreNumbersAscending = (s) => {
  let items = s.split(" ");
  let prev = Number.MIN_VALUE;
  for (let str of items) {
    let val = parseInt(str); // returns NaN if not valid number
    if (!val) continue; // if NaN, go to next element
    if (prev >= val) return false; // not ascending, return false
    prev = val; // update placeholder
  }
  return true;
};

// I prefer the simplicity of mine, but this has better runtime */

// Number of Valid Words in a Sentence          5/28/2022
/* 
// A sentence consists of lowercase letters ('a' to 'z'), digits ('0' to '9'), hyphens ('-'), punctuation marks ('!', '.', and ','), and spaces (' ') only. Each sentence can be broken down into one or more tokens separated by one or more spaces ' '.

// A token is a valid word if all three of the following are true:

// It only contains lowercase letters, hyphens, and/or punctuation (no digits).
// There is at most one hyphen '-'. If present, it must be surrounded by lowercase characters ("a-b" is valid, but "-ab" and "ab-" are not valid).
// There is at most one punctuation mark. If present, it must be at the end of the token ("ab,", "cd!", and "." are valid, but "a!b" and "c.," are not valid).
// Examples of valid words include "a-b.", "afad", "ba-c", "a!", and "!".

// Given a string sentence, return the number of valid words in sentence.

// Example 1:
//    Input: sentence = "cat and  dog"
//    Output: 3
// Explanation: The valid words in the sentence are "cat", "and", and "dog".

// Example 2:
//    Input: sentence = "!this  1-s b8d!"
//    Output: 0
// Explanation: There are no valid words in the sentence.
// "!this" is invalid because it starts with a punctuation mark.
// "1-s" and "b8d" are invalid because they contain digits.

// Example 3:
//    Input: sentence = "alice and  bob are playing stone-game10"
//    Output: 5
// Explanation: The valid words in the sentence are "alice", "and", "bob", "are", and "playing".
// "stone-game10" is invalid because it contains digits.

// Constraints:
//    1 <= sentence.length <= 1000
//    sentence only contains lowercase English letters, digits, ' ', '-', '!', '.', and ','.
//    There will be at least 1 token.

const countValidWords = (sentence) =>
  sentence
    .split(" ")
    .reduce(
      (a, c) =>
        /\d/.test(c) ||
        c.indexOf("-") !== c.lastIndexOf("-") ||
        (/-/.test(c) && c.indexOf("-") !== 0) ||
        (/-/.test(c) && c.indexOf("-") !== c.length - 1) ||
        !/[a-z]/.test(c) ||
        c.split(/(?=[\.|!|,])/).length > 1 ||
        (/[\.|!|,]/.test(c) && !/[\.|!|,]/.test(c[c.length - 1]))
          ? a
          : ++a,
      0
    );
console.log(countValidWords("cat and  dog")); // 3
console.log(countValidWords("!this  1-s b8d!")); // 0
console.log(countValidWords("alice and  bob are playing stone-game10")); // 5

// Today was a Regex exercise...
// Doesn't work for all test cases

const topVotedCountValidWords = (sentence) =>
  sentence
    .split(/\s+/)
    .filter(
      (word) =>
        word.match(/^[a-z]+(-[a-z]+)?[\.!,]?$/) || word.match(/^[\.!,]$/)
    ).length;

// All top voted solutions used massive amounts of Regex
// This was the slimmest */

// Kth Distinct String in an Array          5/29/2022
/* 
// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

// Example 1:
//    Input: arr = ["d","b","c","b","c","a"], k = 2
//    Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned.

// Example 2:
//    Input: arr = ["aaa","aa","a"], k = 1
//    Output: "aaa"
// Explanation:
// All strings in arr are distinct, so the 1st string "aaa" is returned.

// Example 3:
//    Input: arr = ["a","b","a"], k = 3
//    Output: ""
// Explanation:
// The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".

// Constraints:
//    1 <= k <= arr.length <= 1000
//    1 <= arr[i].length <= 5
//    arr[i] consists of lowercase English letters.

const kthDistinct = (arr, k) => {
  const notDistinct = new Set(
    arr.filter((x, _, arr) => arr.indexOf(x) !== arr.lastIndexOf(x))
  );
  return arr.filter((x) => !notDistinct.has(x))[k - 1] ?? "";
};
console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)); // "a"
console.log(kthDistinct(["aaa", "aa", "a"], 1)); // "aaa"
console.log(kthDistinct(["a", "b", "a"], 3)); // ""

// Pretty terrible runtime, but concise

const topVotedKthDistinct = function (arr, k) {
  const map = {};
  const distinctArr = [];

  arr.forEach((letter) => (map[letter] = map[letter] + 1 || 1));

  for (let [key, val] of Object.entries(map))
    if (val == 1) distinctArr.push(key);

  return distinctArr[k - 1] || "";
};

// Map is a good way to go about this */

// Smallest Index With Equal Value          5/30/2022
/* 
// Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.

// x mod y denotes the remainder when x is divided by y.

// Example 1:
//    Input: nums = [0,1,2]
//    Output: 0
// Explanation:
// i=0: 0 mod 10 = 0 == nums[0].
// i=1: 1 mod 10 = 1 == nums[1].
// i=2: 2 mod 10 = 2 == nums[2].
// All indices have i mod 10 == nums[i], so we return the smallest index 0.

// Example 2:
//    Input: nums = [4,3,2,1]
//    Output: 2
// Explanation:
// i=0: 0 mod 10 = 0 != nums[0].
// i=1: 1 mod 10 = 1 != nums[1].
// i=2: 2 mod 10 = 2 == nums[2].
// i=3: 3 mod 10 = 3 != nums[3].
// 2 is the only index which has i mod 10 == nums[i].

// Example 3:
//    Input: nums = [1,2,3,4,5,6,7,8,9,0]
//    Output: -1
// Explanation: No index satisfies i mod 10 == nums[i].

// Constraints:
//    1 <= nums.length <= 100
//    0 <= nums[i] <= 9

const smallestEqual = (nums) => {
  const smallest = nums.reduce(
    (a, c, i, arr) => Math.min(i % 10 == nums[i] ? c : a, a),
    Number.MAX_SAFE_INTEGER
  );
  return smallest === Number.MAX_SAFE_INTEGER ? -1 : smallest;
};

console.log(smallestEqual([0, 1, 2])); // 0
console.log(smallestEqual([4, 3, 2, 1])); // 2
console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // -1

// Doesn't work for all test cases

var topVotedSmallestEqual = (nums) => nums.findIndex((n, i) => i % 10 === n);

// Very clean, I've kind of ignored .findIndex up to now
// "A function to execute on each value in the array until the function returns true" */

// Count Vowel Substrings of a String         5/31/2022
/* 
// A substring is a contiguous (non-empty) sequence of characters within a string.

// A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.

// Given a string word, return the number of vowel substrings in word.

// Example 1:
//    Input: word = "aeiouu"
//    Output: 2
// Explanation: The vowel substrings of word are as follows (underlined):
// - "aeiouu"
// - "aeiouu"

// Example 2:
//    Input: word = "unicornarihan"
//    Output: 0
// Explanation: Not all 5 vowels are present, so there are no vowel substrings.

// Example 3:
//    Input: word = "cuaieuouac"
//    Output: 7
// Explanation: The vowel substrings of word are as follows (underlined):
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"

// Constraints:
//    1 <= word.length <= 100
//    word consists of lowercase English letters only.

const isVowel = (c) =>
  c === "a" || c === "e" || c === "i" || c === "o" || c === "u";

const topVotedCountVowelSubstrings = function (word) {
  let vowelMap = new Map();
  let total = 0;
  let totalLen = word.length - 1;
  for (let i = 0; i <= totalLen; i++) {
    vowelMap.clear();
    for (let j = i; j <= totalLen && isVowel(word[j]); j++) {
      vowelMap.set(word[j], (vowelMap.get(word[j]) ?? 0) + 1);
      if (vowelMap.size == 5) total++;
    }
  }
  return total;
};
console.log(countVowelSubstrings("aeiouu")); // 2
console.log(countVowelSubstrings("unicornarihan")); // 0
console.log(countVowelSubstrings("cuaieuouac")); // 7

// No time today
// Map seems like the right move here */

// Check Whether Two Strings are Almost Equivalent          6/1/2022
/* 
// Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.

// Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise.

// The frequency of a letter x is the number of times it occurs in the string.

// Example 1:
//    Input: word1 = "aaaa", word2 = "bccb"
//    Output: false
// Explanation: There are 4 'a's in "aaaa" but 0 'a's in "bccb".
// The difference is 4, which is more than the allowed 3.

// Example 2:
//    Input: word1 = "abcdeef", word2 = "abaaacc"
//    Output: true
// Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
// - 'a' appears 1 time in word1 and 4 times in word2. The difference is 3.
// - 'b' appears 1 time in word1 and 1 time in word2. The difference is 0.
// - 'c' appears 1 time in word1 and 2 times in word2. The difference is 1.
// - 'd' appears 1 time in word1 and 0 times in word2. The difference is 1.
// - 'e' appears 2 times in word1 and 0 times in word2. The difference is 2.
// - 'f' appears 1 time in word1 and 0 times in word2. The difference is 1.

// Example 3:
//    Input: word1 = "cccddabba", word2 = "babababab"
//    Output: true
// Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
// - 'a' appears 2 times in word1 and 4 times in word2. The difference is 2.
// - 'b' appears 2 times in word1 and 5 times in word2. The difference is 3.
// - 'c' appears 3 times in word1 and 0 times in word2. The difference is 3.
// - 'd' appears 2 times in word1 and 0 times in word2. The difference is 2.

// Constraints:
//    n == word1.length == word2.length
//    1 <= n <= 100
//    word1 and word2 consist only of lowercase English letters.

const count = (arr) =>
  [...arr].reduce((a, c) => {
    a[c] ? ++a[c] : (a[c] = 1);
    return a;
  }, {});

const checkAlmostEquivalent = function (word1, word2) {
  let [count1, count2] = [count(word1), count(word2)];

  for (let char in count1) {
    if (Math.abs(count1[char] - (isNaN(count2[char]) ? 0 : count2[char])) > 3)
      return false;
  }
  for (let char in count2) {
    if (Math.abs(count2[char] - (isNaN(count1[char]) ? 0 : count1[char])) > 3)
      return false;
  }

  return true;
};
console.log(checkAlmostEquivalent("aaaa", "bccb")); // false
console.log(checkAlmostEquivalent("abcdeef", "abaaacc")); // true
console.log(checkAlmostEquivalent("cccddabba", "babababab")); // true

// Better than 90% of runtimes
// Bit redundant with the second for loop, but makes for an easy solution

var topVotedCheckAlmostEquivalent = function (word1, word2) {
  const hm = new Map();
  const addToHm = (ch, add) => {
    if (hm.has(ch)) hm.set(ch, hm.get(ch) + (add ? +1 : -1));
    else hm.set(ch, add ? +1 : -1);
  };

  for (let i = 0; i < word1.length; i++) {
    addToHm(word1[i], true);
    addToHm(word2[i], false);
  }

  for (const val of hm.values()) if (Math.abs(val) > 3) return false;

  return true;
};

// Same logic but using actual Map() */

// Time Needed to Buy Tickets         6/2/2022
/* 
// There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.

// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].

// Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.

// Return the time taken for the person at position k (0-indexed) to finish buying tickets.

// Example 1:
//    Input: tickets = [2,3,2], k = 2
//    Output: 6
// Explanation:
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.

// Example 2:
//    Input: tickets = [5,1,1,1], k = 0
//    Output: 8
// Explanation:
// - In the first pass, everyone in the line buys a ticket and the line becomes [4, 0, 0, 0].
// - In the next 4 passes, only the person in position 0 is buying tickets.
// The person at position 0 has successfully bought 5 tickets and it took 4 + 1 + 1 + 1 + 1 = 8 seconds.

// Constraints:
//    n == tickets.length
//    1 <= n <= 100
//    1 <= tickets[i] <= 100
//    0 <= k < n

const timeRequiredToBuy = function (tickets, k) {
  let time = 0;
  while (tickets[k] > 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] < 1) continue;
      tickets[i]-- && time++;
      if (i === k && tickets[k] < 1) break;
    }
  }
  return time;
};
console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // 8

// Ok runtime

var topVotedTimeRequiredToBuy = function (tickets, k) {
  let ans = 0;
  let i = 0;
  while (tickets[k] !== 0) {
    if (i === tickets.length) i = 0;

    if (tickets[i] != 0) {
      tickets[i] -= 1;
      ans++;
    }

    i++;
  }
  return ans;
};

// Very similar */

// Two Furthest Houses With Different Colors          6/3/2022
/* 
// There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

// Return the maximum distance between two houses with different colors.

// The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

// Example 1:
//    Input: colors = [1,1,1,6,1,1,1]
//    Output: 3
// Explanation: In the above image, color 1 is blue, and color 6 is red.
// The furthest two houses with different colors are house 0 and house 3.
// House 0 has color 1, and house 3 has color 6. The distance between them is abs(0 - 3) = 3.
// Note that houses 3 and 6 can also produce the optimal answer.

// Example 2:
//    Input: colors = [1,8,3,8,3]
//    Output: 4
// Explanation: In the above image, color 1 is blue, color 8 is yellow, and color 3 is green.
// The furthest two houses with different colors are house 0 and house 4.
// House 0 has color 1, and house 4 has color 3. The distance between them is abs(0 - 4) = 4.

// Example 3:
//    Input: colors = [0,1]
//    Output: 1
// Explanation: The furthest two houses with different colors are house 0 and house 1.
// House 0 has color 0, and house 1 has color 1. The distance between them is abs(0 - 1) = 1.

// Constraints:
//    n == colors.length
//    2 <= n <= 100
//    0 <= colors[i] <= 100
//    Test data are generated such that at least two houses have different colors.

const maxDistance = (colors) => {
  let max = 0;
  for (let i = 0; i < colors.length; i++) {
    const cur = colors.shift();
    max = Math.max(
      max,
      colors.reduce((a, c, i) => {
        let diff = 0;
        if (cur !== c) diff = i + 1;
        return Math.max(a, diff);
      }, 0)
    );
  }
  return max;
};
console.log(maxDistance([1, 1, 1, 6, 1, 1, 1])); // 3
console.log(maxDistance([1, 8, 3, 8, 3])); // 4
console.log(maxDistance([0, 1])); // 1

// I'm surprised this worked first try

const topVotedMaxDistance = function (colors) {
  let n = colors.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (colors[i] !== colors[0]) {
      max = Math.max(max, i);
    }
    if (colors[i] !== colors[n - 1]) {
      max = Math.max(max, n - 1 - i);
    }
  }
  return max;
}; */

// Count Common Words With One Occurrence         6/4/2022
/* 
// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

// Example 1:
//    Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
//    Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.

// Example 2:
//    Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
//    Output: 0
// Explanation: There are no strings that appear in each of the two arrays.

// Example 3:
//    Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
//    Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".

// Constraints:
//    1 <= words1.length, words2.length <= 1000
//    1 <= words1[i].length, words2[j].length <= 30
//    words1[i] and words2[j] consists only of lowercase English letters.

const countWords = (words1, words2) => {
  const unique = (words) =>
    words.filter((x, _, arr) => arr.indexOf(x) === arr.lastIndexOf(x));
  unique2 = unique(words2);
  return unique(words1).reduce((a, c) => (unique2.includes(c) ? ++a : a), 0);
};
// prettier-ignore
console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"])); // 2
console.log(countWords(["b", "bb", "bbb"], ["a", "aa", "aaa"])); // 0
console.log(countWords(["a", "ab"], ["a", "a", "a", "ab"])); // 1

// Ok submission

var topVotedCountWords = function (words1, words2) {
  const map1 = new Map();
  const map2 = new Map();
  let count = 0;

  for (const word of words1) {
    map1.set(word, map1.get(word) + 1 || 1);
  }
  for (const word of words2) {
    map2.set(word, map2.get(word) + 1 || 1);
  }
  for (const word of words1) {
    if (map1.get(word) === 1 && map2.get(word) === 1) count++;
  }

  return count;
};

// All top voted submissions were hashmaps */

// Find Target Indices After Sorting Array          6/5/2022
/* 
// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

// Example 1:
//		 Input: nums = [1,2,5,2,3], target = 2
//		 Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.

// Example 2:
//		 Input: nums = [1,2,5,2,3], target = 3
//		 Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.

// Example 3:
//		 Input: nums = [1,2,5,2,3], target = 5
//		 Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 5 is 4.

// Constraints:
//    1 <= nums.length <= 100
//    1 <= nums[i], target <= 100

const targetIndices = (nums, target) =>
  nums
    .sort((a, b) => a - b)
    .reduce((a, c, i) => (c === target ? [...a, i] : [...a]), []);

console.log(targetIndices([1, 2, 5, 2, 3], 2)); // [1,2]
console.log(targetIndices([1, 2, 5, 2, 3], 3)); // [3]
console.log(targetIndices([1, 2, 5, 2, 3], 5)); // [4]

// All top voted submissions are much longer

function binarySearch(lists, sorted, low, high, target) {
  if (low > high) return;

  const mid = low + Math.floor((high - low) / 2);

  if (sorted[mid] === target) {
    lists.push(mid);
  }

  binarySearch(lists, sorted, low, mid - 1, target);
  binarySearch(lists, sorted, mid + 1, high, target);
}

var topVotedTargetIndices = function (nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  if (!nums.includes(target)) return [];

  binarySearch(result, nums, 0, nums.length - 1, target);
  return result.sort((a, b) => a - b);
}; */

// Finding 3-Digit Even Numbers          6/6/2022
/* 
// You are given an integer array digits, where each element is a digit. The array may contain duplicates.

// You need to find all the unique integers that follow the given requirements:	The integer consists of the concatenation of three elements from digits in any arbitrary order.	The integer does not have leading zeros.	The integer is even.

// For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

// Return a sorted array of the unique integers.

// Example 1:
//		 Input: digits = [2,1,3,0]
//		 Output: [102,120,130,132,210,230,302,310,312,320]
// Explanation: All the possible integers that follow the requirements are in the output array.
// Notice that there are no odd integers or integers with leading zeros.

// Example 2:
//		 Input: digits = [2,2,8,8,2]
//		 Output: [222,228,282,288,822,828,882]
// Explanation: The same digit can be used as many times as it appears in digits.
// In this example, the digit 8 is used twice each time in 288, 828, and 882.

// Example 3:
//		 Input: digits = [3,7,5]
//		 Output: []
// Explanation: No even integers can be formed using the given digits.

// Constraints:
//    3 <= digits.length <= 100
//    0 <= digits[i] <= 9

var topVotedFindEvenNumbers = function (digits) {
  const di = digits,
    n = di.length;

  let ans = [];
  for (let i = 0; i < n; i++)
    if (di[i] !== 0)
      for (let j = 0; j < n; j++)
        if (i !== j)
          for (let k = 0; k < n; k++)
            if (i !== k && j !== k && di[k] % 2 === 0) {
              ans.push(di[i] * 100 + di[j] * 10 + di[k]);
            }
  return [...new Set(ans.sort())];
};
console.log(findEvenNumbers([2, 1, 3, 0])); // [102,120,130,132,210,230,302,310,312,320]
console.log(findEvenNumbers([2, 2, 8, 8, 2])); // [222,228,282,288,822,828,882]
console.log(findEvenNumbers([3, 7, 5])); // []

// Didn't know how to go about it, so decided to study top voted
// Seems all top voted submissions just brute force it like this */

// Find Subsequence of Length K With the Largest Sum          6/7/2022
/* 
// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

// Return any such subsequence as an integer array of length k.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
//		 Input: nums = [2,1,3,3], k = 2
//		 Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.

// Example 2:
//		 Input: nums = [-1,-2,3,4], k = 3
//		 Output: [-1,3,4]
// Explanation:
// The subsequence has the largest sum of -1 + 3 + 4 = 6.

// Example 3:
//		 Input: nums = [3,4,3,3], k = 2
//		 Output: [3,4]
// Explanation:
// The subsequence has the largest sum of 3 + 4 = 7.
// Another possible subsequence is [4, 3].

// Constraints:
//    1 <= nums.length <= 1000
//    -10<sup>5</sup><= nums[i] <= 10<sup>5</sup>
//    1 <= k <= nums.length

const maxSubsequence = (nums, k) => {
  let ans = [...nums].sort((a, b) => b - a).slice(0, k);
  return nums.filter((x) => {
    if (ans.includes(x)) {
      ans = ans.slice(0, ans.indexOf(x)) + ans.slice(ans.indexOf(x) + 1);
      return x;
    }
  });
};
console.log(maxSubsequence([2, 1, 3, 3], 2)); // [3,3]
console.log(maxSubsequence([-1, -2, 3, 4], 3)); // [-1,3,4]
console.log(maxSubsequence([3, 4, 3, 3], 2)); // [3,4]

// Had a cleaner solution, but array has to be in order as provided

var topVotedMaxSubsequence = function (nums, k) {
  return nums
    .map((v, i) => [v, i])
    .sort((a, b) => a[0] - b[0])
    .slice(-k)
    .sort((a, b) => a[1] - b[1])
    .map((x) => x[0]);
};

// Smart use of .map */

// Rings and Rods          6/8/2022
/* 
// There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

// You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:	The first character of the i<sup>th</sup> pair denotes the i<sup>th</sup> ring's color ('R', 'G', 'B').	The second character of the i<sup>th</sup> pair denotes the rod that the i<sup>th</sup> ring is placed on ('0' to '9').

// For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

// Return the number of rods that have all three colors of rings on them.

// Example 1:
// <img alt="" src="https://assets.leetcode.com/uploads/2021/11/23/ex1final.png" style="width: 258px; height: 130px;">
//		 Input: rings = "B0B6G0R6R0R6G9"
//		 Output: 1
// Explanation:
// - The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
// - The rod labeled 6 holds 3 rings, but it only has red and blue.
// - The rod labeled 9 holds only a green ring.
// Thus, the number of rods with all three colors is 1.

// Example 2:
// <img alt="" src="https://assets.leetcode.com/uploads/2021/11/23/ex2final.png" style="width: 266px; height: 130px;">
//		 Input: rings = "B0R0G0R9R0B0G0"
//		 Output: 1
// Explanation:
// - The rod labeled 0 holds 6 rings with all colors: red, green, and blue.
// - The rod labeled 9 holds only a red ring.
// Thus, the number of rods with all three colors is 1.

// Example 3:
//		 Input: rings = "G4"
//		 Output: 0
// Explanation:
// Only one ring is given. Thus, no rods have all three colors.

// Constraints:
//    rings.length == 2 * n
//    1 <= n <= 100
//    rings[i] where i is even is either 'R', 'G', or 'B' (0-indexed).
//    rings[i] where i is odd is a digit from '0' to '9' (0-indexed).

const countPoints = (rings) =>
  rings
    .split(/(?<=\d)/)
    .reduce((a, c) => {
      let cur = new Set(a[c[1]]);
      cur.add(c[0]);
      a[c[1]] = cur;
      return a;
    }, Array(10).fill(new Set()))
    .filter((x) => x.size === 3).length;

console.log(countPoints("B0B6G0R6R0R6G9")); // 1
console.log(countPoints("B0R0G0R9R0B0G0")); // 1
console.log(countPoints("G4")); // 0

// Pretty good runtime

var topVotedCountPoints = function (rings) {
  let rods = Array(10).fill("");
  for (let i = 0; i < rings.length; i += 2) {
    if (!rods[rings[i + 1]].includes(rings[i])) rods[rings[i + 1]] += rings[i];
  }
  return rods.filter((rod) => rod.length > 2).length;
};

// Same idea, much cleaner */

// Find First Palindromic String in the Array          6/9/2022
/* 
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Example 1:
//		 Input: words = ["abc","car","ada","racecar","cool"]
//		 Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

// Example 2:
//		 Input: words = ["notapalindrome","racecar"]
//		 Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".

// Example 3:
//		 Input: words = ["def","ghi"]
//		 Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length <= 100
//    words[i] consists only of lowercase English letters.

const firstPalindrome = (words) =>
  words[words.findIndex((x) => x === [...x].reverse().join(""))] ?? "";

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // "ada"
console.log(firstPalindrome(["notapalindrome", "racecar"])); // "racecar"
console.log(firstPalindrome(["def", "ghi"])); // ""

// One line, not amazing runtime
// Same logic as top voted */

// Maximum Number of Words Found in Sentences          6/10/2022
/* 
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

// Example 1:
//		 Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
//		 Output: 6
// Explanation:
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

// Example 2:
//		 Input: sentences = ["please wait", "continue to fight", "continue to win"]
//		 Output: 3
// Explanation: It is possible that multiple sentences contain the same number of words.
// In this example, the second and third sentences (underlined) have the same number of words.

// Constraints:
//    1 <= sentences.length <= 100
//    1 <= sentences[i].length <= 100
//    sentences[i] consists only of lowercase English letters and ' ' only.
//    sentences[i] does not have leading or trailing spaces.
//    All the words in sentences[i] are separated by a single space.

const mostWordsFound = (sentences) =>
  sentences.reduce((a, c) => Math.max(a, c.split(" ").length), 0);

// prettier-ignore
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])) // 6
// prettier-ignore
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"])) // 3

// Better runtime than 100% of submissions

const topVotedMostWordsFound = function (sentences) {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < sentences.length; i++) {
    temp = sentences[i].split(" ").length;
    if (temp > max) max = temp;
  }
  return max;
};

// Same idea */

// A Number After a Double Reversal          6/11/2022
/* 
// Reversing an integer means to reverse all its digits.	For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.

// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

// Example 1:
//		 Input: num = 526
//		 Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.

// Example 2:
//		 Input: num = 1800
//		 Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.

// Example 3:
//		 Input: num = 0
//		 Output: true
// Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.

// Constraints:
//    0 <= num <= 10<sup>6</sup>

const isSameAfterReversals = (num) =>
  +[...`${+[...`${num}`].reverse().join("")}`].reverse().join("") === num;

console.log(isSameAfterReversals(526)); // true
console.log(isSameAfterReversals(1800)); // false
console.log(isSameAfterReversals(0)); // true

// Terrible runtime

var topVotedIsSameAfterReversals = function (num) {
  if (num == 0) return true;
  if (num % 10 == 0) return false;
  return true;
};

// Much better */

// Check if All A's Appears Before All B's          6/12/2022
/* 
// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

// Example 1:
//		 Input: s = "aaabbb"
//		 Output: true
// Explanation:
// The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
// Hence, every 'a' appears before every 'b' and we return true.

// Example 2:
//		 Input: s = "abab"
//		 Output: false
// Explanation:
// There is an 'a' at index 2 and a 'b' at index 1.
// Hence, not every 'a' appears before every 'b' and we return false.

// Example 3:
//		 Input: s = "bbb"
//		 Output: true
// Explanation:
// There are no 'a's, hence, every 'a' appears before every 'b' and we return true.

// Constraints:
//    1 <= s.length <= 100
//    s[i] is either 'a' or 'b'.

const checkString = (s) => s.split("a").filter((x) => x !== "").length < 2;

console.log(checkString("a")); // true
console.log(checkString("aaabbb")); // true
console.log(checkString("abab")); // false
console.log(checkString("bbb")); // true

// Doesn't work for all test cases

var topVotedCheckString = function (s) {
  let violation = "ba";
  return s.indexOf(violation, 0) == -1;
};

// Very nice */

// Capitalize the Title          6/13/2022
/* 
// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:	If the length of the word is 1 or 2 letters, change all letters to lowercase.	Otherwise, change the first letter to uppercase and the remaining letters to lowercase.

// Return the capitalized title.

// Example 1:
//		 Input: title = "capiTalIze tHe titLe"
//		 Output: "Capitalize The Title"
// Explanation:
// Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.

// Example 2:
//		 Input: title = "First leTTeR of EACH Word"
//		 Output: "First Letter of Each Word"
// Explanation:
// The word "of" has length 2, so it is all lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

// Example 3:
//		 Input: title = "i lOve leetcode"
//		 Output: "i Love Leetcode"
// Explanation:
// The word "i" has length 1, so it is lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

// Constraints:
//    1 <= title.length <= 100
//    title consists of words separated by a single space without any leading or trailing spaces.
//    Each word consists of uppercase and lowercase English letters and is non-empty.

const capitalizeTitle = (title) =>
  title
    .toLowerCase()
    .split(" ")
    .map((c) => (c.length > 2 ? c[0].toUpperCase() + c.slice(1) : c))
    .join(" ");

console.log(capitalizeTitle("capiTalIze tHe titLe")); // "Capitalize The Title"
console.log(capitalizeTitle("First leTTeR of EACH Word")); // "First Letter of Each Word"
console.log(capitalizeTitle("i lOve leetcode")); // "i Love Leetcode"

// Ok

const topVotedCapitalizeTitle = function (title) {
  const words = title.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++)
    if (words[i].length > 2)
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  return words.join(" ");
};

// Same logic, different method */

// Check if Every Row and Column Contains All Numbers          6/14/2022
/* 
// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

// Example 1:
// <img alt="" src="https://assets.leetcode.com/uploads/2021/12/21/example1drawio.png" style="width: 250px; height: 251px;">
//		 Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
//		 Output: true
// Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
// Hence, we return true.

// Example 2:
// <img alt="" src="https://assets.leetcode.com/uploads/2021/12/21/example2drawio.png" style="width: 250px; height: 251px;">
//		 Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
//		 Output: false
// Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
// Hence, we return false.

// Constraints:
//    n == matrix.length == matrix[i].length
//    1 <= n <= 100
//    1 <= matrix[i][j] <= n

const checkValid = (matrix) => {
  for (let i = 0; i < matrix.length; i++)
    for (let j = 1; j <= matrix.length; j++)
      if (!matrix[i].includes(j)) return false;
  return true;
};
// prettier-ignore
console.log(checkValid([[1,2,3],[3,1,2],[2,3,1]])) // true
// prettier-ignore
console.log(checkValid([[1,1,1],[1,2,3],[1,2,3]])) // false

// Doesn't work for all test cases

const topVotedCheckValid = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const cols = new Set(),
      rows = new Set(matrix[i]);

    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > matrix.length) return false;
      cols.add(matrix[j][i]);
    }

    if (cols.size < matrix.length || rows.size < matrix.length) return false;
  }
  return true;
};

// I wasn't taking columns into account
// My bad, didn't fully read the prompt */

// Divide a String Into Groups of Size k          6/15/2022
/* 
// A string s can be partitioned into groups of size k using the following procedure:	The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each character can be a part of exactly one group.	For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.

// Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.

// Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure.

// Example 1:
//		 Input: s = "abcdefghi", k = 3, fill = "x"
//		 Output: ["abc","def","ghi"]
// Explanation:
// The first 3 characters "abc" form the first group.
// The next 3 characters "def" form the second group.
// The last 3 characters "ghi" form the third group.
// Since all groups can be completely filled by characters from the string, we do not need to use fill.
// Thus, the groups formed are "abc", "def", and "ghi".

// Example 2:
//		 Input: s = "abcdefghij", k = 3, fill = "x"
//		 Output: ["abc","def","ghi","jxx"]
// Explanation:
// Similar to the previous example, we are forming the first three groups "abc", "def", and "ghi".
// For the last group, we can only use the character 'j' from the string. To complete this group, we add 'x' twice.
// Thus, the 4 groups formed are "abc", "def", "ghi", and "jxx".

// Constraints:
//    1 <= s.length <= 100
//    s consists of lowercase English letters only.
//    1 <= k <= 100
//    fill is a lowercase English letter.

const divideString = (s, k, fill) => {
  let ans = s.match(new RegExp(`.{1,${k}}`, "g"));
  if (ans[ans.length - 1].length !== k) {
    let filler = fill.repeat(k - ans[ans.length - 1].length);
    ans[ans.length - 1] += filler;
  }
  return ans;
};
console.log(divideString("abcdefghi", 3, "x")); // ["abc","def","ghi"]
console.log(divideString("abcdefghij", 3, "x")); // ["abc","def","ghi","jxx"]

// I like the use of Regex here

const topVotedDivideString = function (s, k, fill) {
  var ans = [];
  for (let i = 0; i < s.length; i += k) {
    ans.push(s.substring(i, i + k));
  }
  let str = ans[ans.length - 1];
  if (str.length == k) {
    return ans;
  }
  for (let i = str.length; i < k; i++) {
    ans[ans.length - 1] += fill;
  }
  return ans;
};

// Same idea, different method */

// Minimum Cost of Buying Candies With Discount          6/16/2022
/* 
// A shop is selling candies at a discount. For every two candies sold, the shop gives a third candy for free.

// The customer can choose any candy to take away for free as long as the cost of the chosen candy is less than or equal to the minimum cost of the two candies bought.	For example, if there are 4 candies with costs 1, 2, 3, and 4, and the customer buys candies with costs 2 and 3, theycan take the candy with cost 1 for free, but not the candy with cost 4.

// Given a 0-indexed integer array cost, where cost[i] denotes the cost of the i^th candy, return the minimum cost of buying all the candies.

// Example 1:
//		 Input: cost = [1,2,3]
//		 Output: 5
// Explanation: We buy the candies with costs 2 and 3, and take the candy with cost 1 for free.
// The total cost of buying all candies is 2 + 3 = 5. This is the only way we can buy the candies.
// Note that we cannot buy candies with costs 1 and 3, and then take the candy with cost 2 for free.
// The cost of the free candy has to be less than or equal to the minimum cost of the purchased candies.

// Example 2:
//		 Input: cost = [6,5,7,9,2,2]
//		 Output: 23
// Explanation: The way in which we can get the minimum cost is described below:
// - Buy candies with costs 9 and 7
// - Take the candy with cost 6 for free
// - We buy candies with costs 5 and 2
// - Take the last remaining candy with cost 2 for free
// Hence, the minimum cost to buy all candies is 9 + 7 + 5 + 2 = 23.

// Example 3:
//		 Input: cost = [5,5]
//		 Output: 10
// Explanation: Since there are only 2 candies, we buy both of them. There is not a third candy we can take for free.
// Hence, the minimum cost to buy all candies is 5 + 5 = 10.

// Constraints:
//    1 <= cost.length <= 100
//    1 <= cost[i] <= 100

const minimumCost = (cost) =>
  cost
    .sort((a, b) => b - a)
    .reduce((a, c, i) => ((i + 1) % 3 !== 0 ? (a += c) : a));

console.log(minimumCost([1, 2, 3])); // 5
console.log(minimumCost([6, 5, 7, 9, 2, 2])); // 23
console.log(minimumCost([5, 5])); // 10

// Ok, one line

const topVotedMinimumCost = function (cost) {
  if (cost.length < 3) {
    return cost.reduce((prev, cur) => prev + cur);
  }

  cost.sort((a, b) => b - a);
  let count = 0;
  let sum = 0;

  for (const num of cost) {
    if (count === 2) {
      count = 0;
      continue;
    }
    sum += num;
    count++;
  }

  return sum;
};

// Much better runtime

// DAY 365
// Today marks one year of daily coding challenges.

// Lots has changed this past year. I quit my job to go back to school, had prerequisites lacking to be admitted and had to spend a year getting those up to par. Finally, I was accepted to the Software Engineering program just a couple weeks ago.

// One year is notable, but I'm just at the beginning of all this. I've got 3-4 years of university ahead of me and plan on keeping up this habit.

// I have felt my coding improve and look forward to seeing where I'm at by day 730.

// See you then. */

// Count Elements With Strictly Smaller and Greater Elements           6/17/2022
/* 
// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

// Example 1:
//		 Input: nums = [11,7,2,15]
//		 Output: 2
// Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
// Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
// In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.

// Example 2:
//		 Input: nums = [-3,3,3,90]
//		 Output: 2
// Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
// Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.

// Constraints:
//    1 <= nums.length <= 100
//    -10^5 <= nums[i] <= 10^5

const countElements = (nums) =>
  nums
    .sort((a, b) => a - b)
    .filter((x, _, arr) => x > arr[0] && x < arr[arr.length - 1]).length;

console.log(countElements([11, 7, 2, 15])); // 2
console.log(countElements([-3, 3, 3, 90])); // 2

// Works

const topVotedCountElements = function (nums) {
  let map = {},
    total = 0;

  for (let i of nums) map[i] ? map[i]++ : (map[i] = 1);

  let newNums = [...new Set(nums)];

  if (newNums.length < 3) return 0;

  newNums
    .sort((a, b) => a - b)
    .slice(1, newNums.length - 1)
    .forEach((num) => (total += map[num]));

  return total;
};

// Much longer, much better runtime */

// Keep Multiplying Found Values by Two          6/18/2022
/* 
// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

// You then do the following steps:	If original is found in nums, multiply it by two (i.e., set original = 2 * original).	Otherwise, stop the process.	Repeat this process with the new number as long as you keep finding the number.

// Return the final value of original.

// Example 1:
//		 Input: nums = [5,3,6,1,12], original = 3
//		 Output: 24
// Explanation:
// - 3 is found in nums. 3 is multiplied by 2 to obtain 6.
// - 6 is found in nums. 6 is multiplied by 2 to obtain 12.
// - 12 is found in nums. 12 is multiplied by 2 to obtain 24.
// - 24 is not found in nums. Thus, 24 is returned.

// Example 2:
//		 Input: nums = [2,7,9], original = 4
//		 Output: 4
// Explanation:
// - 4 is not found in nums. Thus, 4 is returned.

// Constraints:
//    1 <= nums.length <= 1000
//    1 <= nums[i], original <= 1000

const findFinalValue = (nums, original) =>
  nums.find((x) => x === original)
    ? findFinalValue(nums, original * 2)
    : original;

console.log(findFinalValue([5, 3, 6, 1, 12], 3)); // 24
console.log(findFinalValue([2, 7, 9], 4)); // 4

// Better runtime than 100% of submissions

const topVotedFindFinalValue = (a, x) => {
  let se = new Set(a);
  while (se.has(x)) x *= 2;
  return x;
};

// Initially thought of doing a while loop, but I prefer my solution */

// Minimum Sum of Four Digit Number After Splitting Digits          6/19/2022
/* 
// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.	For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].

// Return the minimum possible sum of new1 and new2.

// Example 1:
//		 Input: num = 2932
//		 Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

// Example 2:
//		 Input: num = 4009
//		 Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.

// Constraints:
//    1000 <= num <= 9999

const minimumSum = (num, num1 = [], num2 = []) => {
  let nums = [...`${num}`.replaceAll(0, "")].sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++)
    num1.push(nums.shift()) && num2.push(nums.shift());

  return +num1.join("") + +num2.join("");
};
console.log(minimumSum(2932)); // 52
console.log(minimumSum(4009)); // 13

// Doesn't work for all test cases

const topVotedMinimumSum = function (num) {
  let numbers = [];
  for (let i = 0; i < 4; i++) {
    numbers.push(~~num % 10);
    num /= 10;
  }
  const sorted = numbers.sort((a, b) => b - a);
  return sorted[0] + sorted[1] + 10 * (sorted[2] + sorted[3]);
};

// Huh, nice solution, never would've thought of this

// "That ~~ is a double NOT bitwise operator.
// It is used as a faster substitute for Math.floor() for positive numbers" */

// Sort Even and Odd Indices Independently          6/20/2022
/* 
// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:	Sort the values at odd indices of nums in non-increasing order.			For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.			Sort the values at even indices of nums in non-decreasing order.			For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.

// Return the array formed after rearranging the values of nums.

// Example 1:
//		 Input: nums = [4,1,2,3]
//		 Output: [2,3,4,1]
// Explanation:
// First, we sort the values present at odd indices (1 and 3) in non-increasing order.
// So, nums changes from [4,1,2,3] to [4,3,2,1].
// Next, we sort the values present at even indices (0 and 2) in non-decreasing order.
// So, nums changes from [4,1,2,3] to [2,3,4,1].
// Thus, the array formed after rearranging the values is [2,3,4,1].

// Example 2:
//		 Input: nums = [2,1]
//		 Output: [2,1]
// Explanation:
// Since there is exactly one odd index and one even index, no rearrangement of values takes place.
// The resultant array formed is [2,1], which is the same as the initial array.

// Constraints:
//    1 <= nums.length <= 100
//    1 <= nums[i] <= 100

const sortEvenOdd = (nums) => {
  nums.sort((a, b) => a - b);
  let [odd, even] = [[], []];

  while (nums.length >= 1)
    nums[0] % 2 ? odd.push(nums.shift()) : even.push(nums.shift());
  odd.sort((a, b) => b - a);

  let ans = [];
  const count = even.length + odd.length;
  for (let i = 0; i < count; i++)
    i % 2 ? ans.push(odd.shift()) : ans.push(even.shift());

  return ans;
};
console.log(sortEvenOdd([4, 1, 2, 3])); // [2,3,4,1]
console.log(sortEvenOdd([2, 1])); // [2,1]

// Doesn't work for all test cases

const topVotedSortEvenOdd = function (nums) {
  let odd = nums.filter((num, i, arr) => i % 2 != 0).sort((a, b) => b - a);
  let even = nums.filter((num, i, arr) => i % 2 == 0).sort((a, b) => a - b);
  let x = 0,
    y = 0;

  nums.forEach((num, i, nums) => {
    nums[i] = i % 2 == 0 ? even[x++] : odd[y++];
  });
  return nums;
}; */

// Count Operations to Obtain Zero          6/21/2022
/* 
// You are given two non-negative integers num1 and num2.

// In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.	For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.

// Return the number of operations required to make either num1 = 0 or num2 = 0.

// Example 1:
//		 Input: num1 = 2, num2 = 3
//		 Output: 3
// Explanation:
// - Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
// - Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
// - Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
// Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
// So the total number of operations required is 3.

// Example 2:
//		 Input: num1 = 10, num2 = 10
//		 Output: 1
// Explanation:
// - Operation 1: num1 = 10, num2 = 10. Since num1 == num2, we subtract num2 from num1 and get num1 = 10 - 10 = 0.
// Now num1 = 0 and num2 = 10. Since num1 == 0, we are done.
// So the total number of operations required is 1.

// Constraints:
//    0 <= num1, num2 <= 10^5

const countOperations = (num1, num2, count = 0) =>
  num1 === 0 || num2 === 0
    ? count
    : num2 >= num1
    ? countOperations(num1, num2 - num1, ++count)
    : countOperations(num1 - num2, num2, ++count);

console.log(countOperations(2, 3)); // 3
console.log(countOperations(10, 10)); // 1

// Clean

const topVotedCountOperations = function (num1, num2) {
  if (num2 === 0) return 0;
  if (num1 < num2) countOperations(num2, num1);
  return Math.trunc(num1 / num2) + countOperations(num2, num1 % num2);
}; */

// Count Equal and Divisible Pairs in an Array          6/22/2022
/* 
// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

// Example 1:
//		 Input: nums = [3,1,2,2,2,1,3], k = 2
//		 Output: 4
// Explanation:
// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

// Example 2:
//		 Input: nums = [1,2,3,4], k = 1
//		 Output: 0
// Explanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.

// Constraints:
//    1 <= nums.length <= 100
//    1 <= nums[i], k <= 100

const topVotedCountPairs = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] == nums[j] && (i * j) % k == 0) count++;
  return count;
};

console.log(topVotedCountPairs([3, 1, 2, 2, 2, 1, 3], 2)); // 4
console.log(topVotedCountPairs([1, 2, 3, 4], 1)); // 0

// I was trying to go the findIndex route but couldn't get it working
// Ended up studying top voted

// Nested for loop definitely saves a lot of trouble
// Keep it simple */

// Count Integers With Even Digit Sum          6/23/2022
/* 
// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

// Example 1:
//		 Input: num = 4
//		 Output: 2
// Explanation:
// The only integers less than or equal to 4 whose digit sums are even are 2 and 4.

// Example 2:
//		 Input: num = 30
//		 Output: 14
// Explanation:
// The 14 integers less than or equal to 30 whose digit sums are even are
// 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.

// Constraints:
//    1 <= num <= 1000

const countEven = (num) => {
  let count = 0;
  for (let i = 1; i < num + 1; i++)
    if (!([...`${i}`].reduce((a, c) => (a += +c), 0) % 2)) count++;
  return count;
};
console.log(countEven(4)); // 2
console.log(countEven(30)); // 14

// Ok solution, there's probably a more efficient math approach to this

const topVotedCountEven = (n) =>
  (n - (((n / 10) & 1) ^ ((n / 100) & 1) ^ (n / 1000))) >> 1;

// There it is */

// Counting Words With a Given Prefix          6/24/2022
/* 
// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

// Example 1:
//		 Input: words = ["pay","attention","practice","attend"], pref = "at"
//		 Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

// Example 2:
//		 Input: words = ["leetcode","win","loops","success"], pref = "code"
//		 Output: 0
// Explanation: There are no strings that contain "code" as a prefix.

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length, pref.length <= 100
//    words[i] and pref consist of lowercase English letters.

const prefixCount = (words, pref) =>
  words.reduce((a, c) => (c.startsWith(pref) ? ++a : a), 0);

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at")); // 2
console.log(prefixCount(["leetcode", "win", "loops", "success"], "code")); // 0

// Simple as

const topVotedPrefixCount = (words, pref) =>
  words.filter((word) => word.startsWith(pref)).length;

// Also nice */

// Most Frequent Number Following Key In an Array          6/25/2022
/* 
// You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.

// For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:
//    0 <= i <= nums.length - 2
//    nums[i] == key
//    nums[i + 1] == target

// Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.

// Example 1:
//		 Input: nums = [1,100,200,1,100], key = 1
//		 Output: 100
// Explanation: For target = 100, there are 2 occurrences at indices 1 and 4 which follow an occurrence of key.
// No other integers follow an occurrence of key, so we return 100.

// Example 2:
//		 Input: nums = [2,2,2,2,3], key = 2
//		 Output: 2
// Explanation: For target = 2, there are 3 occurrences at indices 1, 2, and 3 which follow an occurrence of key.
// For target = 3, there is only one occurrence at index 4 which follows an occurrence of key.
// target = 2 has the maximum number of occurrences following an occurrence of key, so we return 2.

// Constraints:
//    2 <= nums.length <= 1000
//    1 <= nums[i] <= 1000
//    The test cases will be generated such that the answer is unique.

const mostFrequent = (nums, key) => {
  let count = new Map();
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === key)
      count.has(nums[i + 1])
        ? count.set(nums[i + 1], count.get(nums[i + 1]) + 1)
        : count.set(nums[i + 1], 1);

  let max = 0;
  return [...count.entries()].reduce((a, c) => {
    if (c[1] > max) {
      max = c[1];
      return c[0];
    } else return a;
  }, 0);
};

console.log(mostFrequent([1, 100, 200, 1, 100], 1)); // 100
console.log(mostFrequent([2, 2, 2, 2, 3], 2)); // 2

// Bit bulky, but works

const topVotedMostFrequent = (nums, key) => {
  const freq = {};
  let ret = 0;
  for (let i = 0, max = 0; i < nums.length - 1; ++i) {
    if (nums[i] !== key) continue;
    const target = nums[i + 1];
    freq[target] = (freq[target] || 0) + 1;
    if (freq[target] > max) {
      max = freq[target];
      ret = target;
    }
  }
  return ret;
};

// Same idea, better execution */

// Cells in a Range on an Excel Sheet          6/26/2022
/* 
// A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:	<col> denotes the column number c of the cell. It is represented by alphabetical letters. For example, the 1^st column is denoted by 'A', the 2^nd by 'B', the 3^rd by 'C', and so on. <row> is the row number r of the cell. The r^th row is represented by the integer r.

// You are given a string sinthe format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.

// Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented asstrings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.

// Example 1:
//   https://assets.leetcode.com/uploads/2022/02/08/ex1drawio.png
//		 Input: s = "K1:L2"
//		 Output: ["K1","K2","L1","L2"]
// Explanation:
// The above diagram shows the cells which should be present in the list.
// The red arrows denote the order in which the cells should be presented.

// Example 2:
//   https://assets.leetcode.com/uploads/2022/02/09/exam2drawio.png
//		 Input: s = "A1:F1"
//		 Output: ["A1","B1","C1","D1","E1","F1"]
// Explanation:
// The above diagram shows the cells which should be present in the list.
// The red arrow denotes the order in which the cells should be presented.

// Constraints:
//    s.length == 5
//    'A' <= s[0] <= s[3] <= 'Z'
//    '1' <= s[1] <= s[4] <= '9'
//    s consists of uppercase English letters, digits and ':'.

const topVotedCellsInRange = (s) => {
  const [fromLetter, fromNum, , toLetter, toNum] = s;
  const ret = [];
  for (
    let l1 = fromLetter.charCodeAt(0), l2 = toLetter.charCodeAt(0);
    l1 <= l2;
    ++l1
  ) {
    for (let n1 = +fromNum, n2 = +toNum; n1 <= n2; ++n1)
      ret.push(String.fromCharCode(l1) + n1);
  }
  return ret;
};

console.log(cellsInRange("K1:L2")); // ["K1","K2","L1","L2"]
console.log(cellsInRange("A1:F1")); // ["A1","B1","C1","D1","E1","F1"]

// Couldn't get it working, studying top voted
// Was definitely going for the .charCodeAt approach */

// Find All K-Distant Indices in an Array          6/27/2022
/* 
// You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.

// Return a list of all k-distant indices sorted in increasing order.

// Example 1:
//		 Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1
//		 Output: [1,2,3,4,5,6]
// Explanation: Here, nums[2] == key and nums[5] == key.
// - For index 0, |0 - 2| > k and |0 - 5| > k, so there is no j where |0 - j| <= k and nums[j] == key. Thus, 0 is not a k-distant index.
// - For index 1, |1 - 2| <= k and nums[2] == key, so 1 is a k-distant index.
// - For index 2, |2 - 2| <= k and nums[2] == key, so 2 is a k-distant index.
// - For index 3, |3 - 2| <= k and nums[2] == key, so 3 is a k-distant index.
// - For index 4, |4 - 5| <= k and nums[5] == key, so 4 is a k-distant index.
// - For index 5, |5 - 5| <= k and nums[5] == key, so 5 is a k-distant index.
// - For index 6, |6 - 5| <= k and nums[5] == key, so 6 is a k-distant index.
// Thus, we return [1,2,3,4,5,6] which is sorted in increasing order.

// Example 2:
//		 Input: nums = [2,2,2,2,2], key = 2, k = 2
//		 Output: [0,1,2,3,4]
// Explanation: For all indices i in nums, there exists some index j such that |i - j| <= k and nums[j] == key, so every index is a k-distant index.
// Hence, we return [0,1,2,3,4].

// Constraints:
//    1 <= nums.length <= 1000
//    1 <= nums[i] <= 1000
//    key is an integer from the array nums.
//    1 <= k <= nums.length

const topVotedFindKDistantIndices = (nums, key, k) => {
  const result = new Set();

  for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums.length; j++)
      if (nums[j] === key && Math.abs(i - j) <= k) result.add(i);

  return Array.from(result);
};
console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)); // [1,2,3,4,5,6]
console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2)); // [0,1,2,3,4] */

// Divide Array Into Equal Pairs          6/28/2022
/* 
// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:
//    Each element belongs to exactly one pair.
//    The elements present in a pair are equal.

// Return true if nums can be divided into n pairs, otherwise return false.

// Example 1:
//		 Input: nums = [3,2,3,2,2,2]
//		 Output: true
// Explanation:
// There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
// If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

// Example 2:
//		 Input: nums = [1,2,3,4]
//		 Output: false
// Explanation:
// There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.

// Constraints:
//    nums.length == 2 * n
//    1 <= n <= 500
//    1 <= nums[i] <= 500

const divideArray = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2)
    if (nums[i] !== nums[i + 1]) return false;
  return true;
};
console.log(divideArray([3, 2, 3, 2, 2, 2])); // true
console.log(divideArray([1, 2, 3, 4])); // false

// Straight to the point

const topVotedDivideArray = function (nums) {
  const numMap = new Map();
  for (const num of nums)
    numMap.has(num) ? numMap.delete(num) : numMap.set(num, true);
  return numMap.size === 0;
};

// Thought about going the Map route */

// Count Hills and Valleys in an Array          6/29/2022
/* 
// You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

// Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

// Return the number of hills and valleys in nums.

// Example 1:
//		 Input: nums = [2,4,1,1,6,5]
//		 Output: 3
// Explanation:
// At index 0: There is no non-equal neighbor of 2 on the left, so index 0 is neither a hill nor a valley.
// At index 1: The closest non-equal neighbors of 4 are 2 and 1. Since 4 > 2 and 4 > 1, index 1 is a hill.
// At index 2: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 2 is a valley.
// At index 3: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 3 is a valley, but note that it is part of the same valley as index 2.
// At index 4: The closest non-equal neighbors of 6 are 1 and 5. Since 6 > 1 and 6 > 5, index 4 is a hill.
// At index 5: There is no non-equal neighbor of 5 on the right, so index 5 is neither a hill nor a valley.
// There are 3 hills and valleys so we return 3.

// Example 2:
//		 Input: nums = [6,6,5,5,4,1]
//		 Output: 0
// Explanation:
// At index 0: There is no non-equal neighbor of 6 on the left, so index 0 is neither a hill nor a valley.
// At index 1: There is no non-equal neighbor of 6 on the left, so index 1 is neither a hill nor a valley.
// At index 2: The closest non-equal neighbors of 5 are 6 and 4. Since 5 < 6 and 5 > 4, index 2 is neither a hill nor a valley.
// At index 3: The closest non-equal neighbors of 5 are 6 and 4. Since 5 < 6 and 5 > 4, index 3 is neither a hill nor a valley.
// At index 4: The closest non-equal neighbors of 4 are 5 and 1. Since 4 < 5 and 4 > 1, index 4 is neither a hill nor a valley.
// At index 5: There is no non-equal neighbor of 1 on the right, so index 5 is neither a hill nor a valley.
// There are 0 hills and valleys so we return 0.

// Constraints:
//    3 <= nums.length <= 100
//    1 <= nums[i] <= 100

const countHillValley = (nums) => {
  let count = 0;
  nums = [...new Set(nums)];

  for (let i = 1; i < nums.length - 1; i++)
    if (
      (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) ||
      (nums[i] < nums[i - 1] && nums[i] < nums[i + 1])
    )
      count++;

  return count;
};
console.log(countHillValley([2, 4, 1, 1, 6, 5])); // 3
console.log(countHillValley([6, 6, 5, 5, 4, 1])); // 0

// Doesn't work for all test cases

const topVotedCountHillValley = function (nums) {
  let answer = 0;
  nums = nums.filter((a, i, b) => a !== b[i + 1]); // Remove Flatlands

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] > nums[i] && nums[i] < nums[i + 1]) answer++; // Valley
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) answer++; // Hill
  }

  return answer;
};

// I see my mistake
// Set will remove all duplicates while filter only removes flatlands */

// Find the Difference of Two Arrays          6/30/2022
/* 
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
//    answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
//    answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

// Note that the integers in the lists may be returned in any order.

// Example 1:
//		 Input: nums1 = [1,2,3], nums2 = [2,4,6]
//		 Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

// Example 2:
//		 Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
//		 Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

// Constraints:
//    1 <= nums1.length, nums2.length <= 1000
//    -1000 <= nums1[i], nums2[i] <= 1000

const findDifference = (nums1, nums2) => [
  [...new Set(nums1)].filter((x) => !nums2.includes(x)),
  [...new Set(nums2)].filter((x) => !nums1.includes(x)),
];

console.log(findDifference([1, 2, 3], [2, 4, 6])); // [[1,3],[4,6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // [[3],[]]

// Keeping it simple

const topVotedFindDifference = (nums1, nums2) => {
  let ans1 = new Set(nums1);
  nums2.forEach((v) => ans1.delete(v));
  let ans2 = new Set(nums2);
  nums1.forEach((v) => ans2.delete(v));
  return [[...ans1], [...ans2]];
};

// Also a valid approach */

// Minimum Bit Flips to Convert Number          7/1/2022
/* 
// A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.

// For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.

// Given two integers start and goal, return the minimum number of bit flips to convert start to goal.

// Example 1:
//		 Input: start = 10, goal = 7
//		 Output: 3
// Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
// - Flip the first bit from the right: 1010 -> 1011.
// - Flip the third bit from the right: 1011 -> 1111.
// - Flip the fourth bit from the right: 1111 -> 0111.
// It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.

// Example 2:
//		 Input: start = 3, goal = 4
//		 Output: 3
// Explanation: The binary representation of 3 and 4 are 011 and 100 respectively. We can convert 3 to 4 in 3 steps:
// - Flip the first bit from the right: 011 -> 010.
// - Flip the second bit from the right: 010 -> 000.
// - Flip the third bit from the right: 000 -> 100.
// It can be shown we cannot convert 3 to 4 in less than 3 steps. Hence, we return 3.

// Constraints:
//    0 <= start, goal <= 10^9

const topVotedMinBitFlips = (start, goal) =>
  (start ^ goal).toString(2).split("0").join("").length;

console.log(topVotedMinBitFlips(10, 7)); // 3
console.log(topVotedMinBitFlips(3, 4)); // 3

// Very nice */

// Minimum Number of Operations to Convert Time          7/2/2022
/* 
// You are given two strings current and correct representing two 24-hour times.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

// Return the minimum number of operations needed to convert current to correct.

// Example 1:
//		 Input: current = "02:30", correct = "04:35"
//		 Output: 3
// Explanation:
// We can convert current to correct in 3 operations as follows:
// - Add 60 minutes to current. current becomes "03:30".
// - Add 60 minutes to current. current becomes "04:30".
// - Add 5 minutes to current. current becomes "04:35".
// It can be proven that it is not possible to convert current to correct in fewer than 3 operations.

// Example 2:
//		 Input: current = "11:00", correct = "11:01"
//		 Output: 1
// Explanation: We only have to add one minute to current, so the minimum number of operations needed is 1.

// Constraints:
//    current and correct are in the format "HH:MM"
//    current <= correct

const convertTime = (current, correct) => {
  const [curH, curM] = current.split(":").map((val) => +val);
  const [corH, corM] = correct.split(":").map((val) => +val);

  let tot = corH - curH;
  let diff = corM - curM;

  if (corM < curM) {
    tot -= 1;
    diff += 60;
  }

  if (diff >= 15) {
    tot += Math.floor(diff / 15);
    diff = diff % 15;
  }

  if (diff >= 5) {
    tot += Math.floor(diff / 5);
    diff = diff % 5;
  }

  if (diff > 0) {
    tot += diff;
  }

  return tot;
};
console.log(convertTime("02:30", "04:35")); // 3
console.log(convertTime("11:00", "11:01")); // 1

// First thing that came to mind

const op = (s) => {
  let a = s.split(":").map(Number);
  return a;
};

const topVotedConvertTime = (s, t) => {
  let [hs, ms] = op(s),
    [ht, mt] = op(t);
  let diff = Math.abs(hs * 60 + ms - (ht * 60 + mt));
  let res = 0;
  res += parseInt(diff / 60);
  diff %= 60;
  res += parseInt(diff / 15);
  diff %= 15;
  res += parseInt(diff / 5);
  diff %= 5;
  return res + diff; // finally diff will be in range [0, 4], use all 1
};

// Pretty tricky */

// Largest Number After Digit Swaps by Parity          7/3/2022
/* 
// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

// Return the largest possible value of num after any number of swaps.

// Example 1:
//		 Input: num = 1234
//		 Output: 3412
// Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
// Swap the digit 2 with the digit 4, this results in the number 3412.
// Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
// Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.

// Example 2:
//		 Input: num = 65875
//		 Output: 87655
// Explanation: Swap the digit 8 with the digit 6, this results in the number 85675.
// Swap the first digit 5 with the digit 7, this results in the number 87655.
// Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.

// Constraints:
//    1 <= num <= 10^9

const largestInteger = (num) => {
  const even = [...`${num}`].filter((x) => x % 2 === 0).sort((a, b) => b - a);
  const odd = [...`${num}`].filter((x) => x % 2 !== 0).sort((a, b) => b - a);
  return +[...`${num}`].reduce(
    (a, c) => (c % 2 === 0 ? (a += even.shift()) : (a += odd.shift())),
    0
  );
};
console.log(largestInteger(1234)); // 3412
console.log(largestInteger(65875)); // 87655

// Terrible runtime, but works

var topVotedLargestInteger = function (num) {
  const odd = [];
  const even = [];
  const nums = String(num).split("");

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) even.push(parseInt(nums[i]));
    else odd.push(parseInt(nums[i]));
  }

  odd.sort((a, b) => a - b);
  even.sort((a, b) => a - b);

  const largestNum = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) largestNum.push(even.pop());
    else largestNum.push(odd.pop());
  }

  return largestNum.join("");
}; */

// Add Two Integers          7/4/2022
/* 
// Given two integers num1 and num2, return the sum of the two integers.

// Example 1:
//		 Input: num1 = 12, num2 = 5
//		 Output: 17
// Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.

// Example 2:
//		 Input: num1 = -10, num2 = 4
//		 Output: -6
// Explanation: num1 + num2 = -6, so -6 is returned.

// Constraints:
//    -100 <= num1, num2 <= 100

const sum = (num1, num2) => num1 + num2;
console.log(sum(12, 5)); // 17
console.log(sum(-10, 4)); // -6

// That's definitely the easiest one I've had so far
// Same as top voted */

// Find Closest Number to Zero          7/5/2022
/* 
// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

// Example 1:
//		 Input: nums = [-4,-2,1,4,8]
//		 Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.

// Example 2:
//		 Input: nums = [2,-1,1]
//		 Output: 1
// Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.

// Constraints:
//    1 <= n <= 1000
//    -10^5 <= nums[i] <= 10^5

const findClosestNumber = (nums) =>
  nums.reduce(
    (a, c) =>
      Math.abs(c) < Math.abs(a)
        ? c
        : Math.abs(c) === Math.abs(a)
        ? Math.max(c, a)
        : a,
    Number.MAX_SAFE_INTEGER
  );

console.log(findClosestNumber([-4, -2, 1, 4, 8])); // 1
console.log(findClosestNumber([2, -1, 1])); // 1

// Ok runtime, Great memory

var topVotedFindClosestNumber = function (nums) {
  let closest = Infinity;

  for (let num of nums) {
    if (Math.abs(num) < Math.abs(closest)) {
      closest = num;
    } else if (Math.abs(num) === Math.abs(closest)) {
      closest = Math.max(num, closest);
    }
  }

  return closest;
};

// More readable for sure */

// Calculate Digit Sum of a String          7/6/2022
/* 
// You are given a string s consisting of digits and an integer k.

// A round can be completed if the length of s is greater than k. In one round, do the following:

//    1. Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.

//    2. Replace each group of s with a string representing the sum of all its digits. For example, "346" is replaced with "13" because 3 + 4 + 6 = 13.

//    3. Merge consecutive groups together to form a new string. If the length of the string is greater than k, repeat from step 1.

// Return s after all rounds have been completed.

// Example 1:
//		 Input: s = "11111222223", k = 3
//		 Output: "135"
// Explanation:
// - For the first round, we divide s into groups of size 3: "111", "112", "222", and "23".
//   ​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5.
//  So, s becomes "3" + "4" + "6" + "5" = "3465" after the first round.
// - For the second round, we divide s into "346" and "5".
//  Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5.
//  So, s becomes "13" + "5" = "135" after second round.
// Now, s.length <= k, so we return "135" as the answer.

// Example 2:
//		 Input: s = "00000000", k = 3
//		 Output: "000"
// Explanation:
// We divide s into "000", "000", and "00".
// Then we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0.
// s becomes "0" + "0" + "0" = "000", whose length is equal to k, so we return "000".

// Constraints:
//    1 <= s.length <= 100
//    2 <= k <= 100
//    s consists of digits only.

const digitSum = (s, k) => {
  if (s.length <= k) return s;
  const ans = s
    .match(new RegExp(`.{1,${k}}`, "g"))
    .reduce((a, c) => (a += c.split("").reduce((a, c) => (a += +c), 0)), "");
  return ans.length > k ? digitSum(ans, k) : ans;
};
console.log(digitSum("11111222223", 3)); // "135"
console.log(digitSum("00000000", 3)); // "000"
console.log(digitSum("233", 3)); // "233"

// Happy I got to reuse the RegExp I learnt last month

var topVotedDigitSum = function (s, k) {
  while (s.length > k) {
    let newString = "";
    for (let i = 0; i < s.length; i += k)
      newString += s
        .substring(i, i + k)
        .split("")
        .reduce((acc, val) => acc + +val, 0);

    s = newString;
  }
  return s;
}; */

// Intersection of Multiple Arrays          7/7/2022
/* 
// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

// Example 1:
//		 Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
//		 Output: [3,4]
// Explanation:
// The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

// Example 2:
//		 Input: nums = [[1,2,3],[4,5,6]]
//		 Output: []
// Explanation:
// There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].

// Constraints:
//    1 <= nums.length <= 1000
//    1 <= sum(nums[i].length) <= 1000
//    1 <= nums[i][j] <= 1000
//    All the values of nums[i] are unique.

const intersection = (nums) => {
  const count = nums.flat().reduce((a, c) => {
    a[c] ? ++a[c] : (a[c] = 1);
    return a;
  }, {});

  return [
    ...Object.entries(count).reduce(
      (a, c) => (c[1] === nums.length ? a.add(+c[0]) : a),
      new Set()
    ),
  ].sort((a, b) => a - b);
};
// prettier-ignore
console.log(intersection([[3, 1, 2, 4, 5],[1, 2, 3, 4],[3, 4, 5, 6],])); // [3,4]
// prettier-ignore
console.log(intersection([[1, 2, 3],[4, 5, 6],])); // []

// Works

const topVotedIntersection = (nums) => {
  if (nums.length === 1) return nums[0].sort((a, b) => a - b);

  let initSet = new Set(nums[0]);

  for (let i = 1; i < nums.length; i++)
    initSet = new Set([...nums[i]].filter((x) => initSet.has(x)));

  return Array.from(initSet).sort((a, b) => a - b);
};

// Good guard clause
// Much simpler logic here, very nice */

// Count Prefixes of a Given String          7/8/2022
/* 
// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

// Return the number of strings in words that are a prefix of s.

// A prefix of a string is a substring that occurs at the beginning of the string. A <b>substring</b> is a contiguous sequence of characters within a string.

// Example 1:
//		 Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
//		 Output: 3
// Explanation:
// The strings in words which are a prefix of s = "abc" are:
// "a", "ab", and "abc".
// Thus the number of strings in words which are a prefix of s is 3.

// Example 2:
//		 Input: words = ["a","a"], s = "aa"
//		 Output: 2
// Explanation:
// Both of the strings are a prefix of s.
// Note that the same string can occur multiple times in words, and it should be counted each time.

// Constraints:
//    1 <= words.length <= 1000
//    1 <= words[i].length, s.length <= 10
//    words[i] and s consist of lowercase English letters only.

const countPrefixes = (words, s) =>
  words.reduce((a, c) => (s.startsWith(c) ? ++a : a), 0);

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc")); // 3
console.log(countPrefixes(["a", "a"], "aa")); // 2

// Clean one line

const topVotedCountPrefixes = function (words, s) {
  let cont = 0;
  for (i = 0; i < words.length; i++)
    for (j = 1; j <= s.length; j++)
      if (words[i] == s.slice(0, j)) {
        cont++;
      }
  return cont;
};

// Worse runtime/memory */

// Remove Digit From Number to Maximize Result          7/9/2022
/* 
// You are given a string number representing a positive integer and a character digit.

// Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

// Example 1:
//		 Input: number = "123", digit = "3"
//		 Output: "12"
// Explanation: There is only one '3' in "123". After removing '3', the result is "12".

// Example 2:
//		 Input: number = "1231", digit = "1"
//		 Output: "231"
// Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
// Since 231 > 123, we return "231".

// Example 3:
//		 Input: number = "551", digit = "5"
//		 Output: "51"
// Explanation: We can remove either the first or second '5' from "551".
// Both result in the string "51".

// Constraints:
//    2 <= number.length <= 100
//    number consists of digits from '1' to '9'.
//    digit is a digit from '1' to '9'.
//    digit occurs at least once in number.

const removeDigit = (number, digit) => {
  if (number.indexOf(digit) === number.lastIndexOf(digit))
    return +number.replace(digit, "");

  let ans = [];
  for (let i = 0; i < number.split(digit).length - 1; i++) {
    ans.push(
      number
        .split(digit)
        .reduce((a, c, j) => +(i === j ? a : c === "" ? a + digit : a + c), 0)
    );
  }

  return Math.max(...ans);
};
console.log(removeDigit("123", "3")); // "12"
console.log(removeDigit("1231", "1")); // "231"
console.log(removeDigit("551", "5")); // "51"

// Doesn't work, got stuck on finding matching indexes
// Really not my best code

const topVotedRemoveDigit = function (number, digit) {
  let str = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] == digit) {
      let temp = number.substring(0, i) + number.substring(i + 1);
      str.push(temp);
    }
  }
  str.sort();
  return str[str.length - 1];
};

// Much better, simpler logic */

// Largest 3-Same-Digit Number in String          7/10/2022
/* 
// You are given a string num representing a large integer. An integer is good if it meets the following conditions:
//    It is a substring of num with length 3.
//    It consists of only one unique digit.

// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:
//    A substring is a contiguous sequence of characters within a string.
//    There may be leading zeroes in num or a good integer.

// Example 1:
//		 Input: num = "6777133339"
//		 Output: "777"
// Explanation: There are two distinct good integers: "777" and "333".
// "777" is the largest, so we return "777".

// Example 2:
//		 Input: num = "2300019"
//		 Output: "000"
// Explanation: "000" is the only good integer.

// Example 3:
//		 Input: num = "42352338"
//		 Output: ""
// Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.

// Constraints:
//    3 <= num.length <= 1000
//    num only consists of digits.

const largestGoodInteger = (num) => {
  let ans = [];
  for (let i = 0; i < num.length - 2; i++)
    if (num[i] === num[i + 1] && num[i] === num[i + 2])
      ans.push(num.slice(i, i + 3));
  return ans.length >= 1
    ? Math.max(...ans) == 0
      ? "000"
      : `${Math.max(...ans)}`
    : "";
};
console.log(largestGoodInteger("6777133339")); // "777"
console.log(largestGoodInteger("2300019")); // "000"
console.log(largestGoodInteger("42352338")); // ""

// Works, tried to get Regex working but couldn't
// The return statement is a bit bulkier than I'd like

var topVotedLargestGoodInteger = function (num) {
  let max = "";
  for (let i = 2; i < num.length; i++)
    if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
      const subString = num[i].repeat(3);
      if (subString > max) max = subString;
    }
  return max;
};

// Nice */

// Find the K-Beauty of a Number          7/11/2022
/* 
// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:
//    It has a length of k.
//    It is a divisor of num.

// Given integers num and k, return the k-beauty of num.

// Note:
//    Leading zeros are allowed.
//    0 is not a divisor of any value.

// A substring is a contiguous sequence of characters in a string.

// Example 1:
//		 Input: num = 240, k = 2
//		 Output: 2
// Explanation: The following are the substrings of num of length k:
// - "24" from "240": 24 is a divisor of 240.
// - "40" from "240": 40 is a divisor of 240.
// Therefore, the k-beauty is 2.

// Example 2:
//		 Input: num = 430043, k = 2
//		 Output: 2
// Explanation: The following are the substrings of num of length k:
// - "43" from "430043": 43 is a divisor of 430043.
// - "30" from "430043": 30 is not a divisor of 430043.
// - "00" from "430043": 0 is not a divisor of 430043.
// - "04" from "430043": 4 is not a divisor of 430043.
// - "43" from "430043": 43 is a divisor of 430043.
// Therefore, the k-beauty is 2.

// Constraints:
//    1 <= num <= 10^9
//    1 <= k <= num.length (taking num as a string)

const divisorSubstrings = (num, k) => {
  let [str, count] = [`${num}`, 0];
  for (let i = 0; i <= str.length - k; i++)
    if (str % +str.slice(i, i + k) === 0) count++;
  return count;
};
console.log(divisorSubstrings(240, 2)); // 2
console.log(divisorSubstrings(430043, 2)); // 2

// OK
// Same as top voted */

// Find Resultant Array After Removing Anagrams          7/12/2022
/* 
// You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

// In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

// Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".

// Example 1:
//		 Input: words = ["abba","baba","bbaa","cd","cd"]
//		 Output: ["abba","cd"]
// Explanation:
// One of the ways we can obtain the resultant array is by using the following operations:
// - Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
//   Now words = ["abba","baba","cd","cd"].
// - Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
//   Now words = ["abba","cd","cd"].
// - Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
//   Now words = ["abba","cd"].
// We can no longer perform any operations, so ["abba","cd"] is the final answer.

// Example 2:
//		 Input: words = ["a","b","c","d","e"]
//		 Output: ["a","b","c","d","e"]
// Explanation:
// No two adjacent strings in words are anagrams of each other, so no operations are performed.

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length <= 10
//    words[i] consists of lowercase English letters.

const removeAnagrams = (words) => {
  for (let i = 1; i < words.length; i++)
    if ([...words[i]].sort().join("") === [...words[i - 1]].sort().join(""))
      return removeAnagrams([...words.slice(0, i), ...words.slice(i + 1)]);
  return words;
};
console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"])); // ["abba","cd"]
console.log(removeAnagrams(["a", "b", "c", "d", "e"])); // ["a","b","c","d","e"]

// Pretty happy with this

var topVotedRemoveAnagrams = function (words) {
  let n = words.length;

  for (let i = 0; i < n - 1; i++) {
    if (isAnagram(words[i], words[i + 1])) {
      words.splice(i + 1, 1);
      i--;
      n--;
    }
  }
  return words;
};

function isAnagram(a, b) {
  let freqArr = new Array(26).fill(0);
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; i++) {
    let idx1 = a[i].charCodeAt(0) - "a".charCodeAt(0);
    freqArr[idx1]++;
    let idx2 = b[i].charCodeAt(0) - "a".charCodeAt(0);
    freqArr[idx2]--;
  }

  for (let i = 0; i < 26; i++) {
    if (freqArr[i] > 0) {
      return false;
    }
  }
  return true;
}

// Much bulkier */

// Percentage of Letter in String          7/13/2022
/* 
// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

// Example 1:
//		 Input: s = "foobar", letter = "o"
//		 Output: 33
// Explanation:
// The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.

// Example 2:
//		 Input: s = "jjjj", letter = "k"
//		 Output: 0
// Explanation:
// The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.

// Constraints:
//    1 <= s.length <= 100
//    s consists of lowercase English letters.
//    letter is a lowercase English letter.

const percentageLetter = (s, letter) =>
  ~~(
    (s.replaceAll(new RegExp(`[^${letter}]`, "g"), "").length / s.length) *
    100
  );

console.log(percentageLetter("foobar", "o")); // 33
console.log(percentageLetter("jjjj", "k")); // 0

// Decent one-liner

const topVotedPercentageLetter = (s, letter) =>
  Math.floor(((s.length - s.replaceAll(letter, "").length) * 100) / s.length);

// Also Nice */

// Check if Number Has Equal Digit Count and Digit Value          7/14/2022
/* 
// You are given a 0-indexed string num of length n consisting of digits.

// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

// Example 1:
//		 Input: num = "1210"
//		 Output: true
// Explanation:
// num[0] = '1'. The digit 0 occurs once in num.
// num[1] = '2'. The digit 1 occurs twice in num.
// num[2] = '1'. The digit 2 occurs once in num.
// num[3] = '0'. The digit 3 occurs zero times in num.
// The condition holds true for every index in "1210", so return true.

// Example 2:
//		 Input: num = "030"
//		 Output: false
// Explanation:
// num[0] = '0'. The digit 0 should occur zero times, but actually occurs twice in num.
// num[1] = '3'. The digit 1 should occur three times, but actually occurs zero times in num.
// num[2] = '0'. The digit 2 occurs zero times in num.
// The indices 0 and 1 both violate the condition, so return false.

// Constraints:
//    n == num.length
//    1 <= n <= 10
//    num consists of digits.

const digitCount = (num) => {
  const count = [...num].reduce((a, c) => {
    a[c] ? a[c]++ : (a[c] = 1);
    return a;
  }, {});
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 0 && isNaN(count[i])) continue;
    if (num[i] != count[i]) return false;
  }
  return true;
};
console.log(digitCount("1210")); // true
console.log(digitCount("030")); // false

// OK

const counter = (a_or_s) => {
  let m = new Map();
  for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1);
  return m;
};

const topVotedDigitCount = (a) => {
  let m = counter(a),
    n = a.length;
  for (let i = 0; i < n; i++) {
    let cnt = m.get(i + "") || 0;
    if (a[i] != cnt) return false;
  }
  return true;
};

// Same idea
// I like the use of 'cnt' here, replaces my first if statement */

// Rearrange Characters to Make Target String          7/15/2022
/* 
// You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

// Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

// Example 1:
//		 Input: s = "ilovecodingonleetcode", target = "code"
//		 Output: 2
// Explanation:
// For the first copy of "code", take the letters at indices 4, 5, 6, and 7.
// For the second copy of "code", take the letters at indices 17, 18, 19, and 20.
// The strings that are formed are "ecod" and "code" which can both be rearranged into "code".
// We can make at most two copies of "code", so we return 2.

// Example 2:
//		 Input: s = "abcba", target = "abc"
//		 Output: 1
// Explanation:
// We can make one copy of "abc" by taking the letters at indices 0, 1, and 2.
// We can make at most one copy of "abc", so we return 1.
// Note that while there is an extra 'a' and 'b' at indices 3 and 4, we cannot reuse the letter 'c' at index 2, so we cannot make a second copy of "abc".

// Example 3:
//		 Input: s = "abbaccaddaeea", target = "aaaaa"
//		 Output: 1
// Explanation:
// We can make one copy of "aaaaa" by taking the letters at indices 0, 3, 6, 9, and 12.
// We can make at most one copy of "aaaaa", so we return 1.

// Constraints:
//    1 <= s.length <= 100
//    1 <= target.length <= 10
//    s and target consist of lowercase English letters.

const rearrangeCharacters = (s, target) => {
  const count = [...s].reduce((a, c) => {
    if (!target.includes(c)) return a;
    a[c] ? a[c]++ : (a[c] = 1);
    return a;
  }, {});
  let ans = 0;
  while (true) {
    for (let i = 0; i < target.length; i++) {
      if (count[target[i]]) count[target[i]]--;
      else return ans;
    }
    ans++;
  }
};
console.log(rearrangeCharacters("ilovecodingonleetcode", "code")); // 2
console.log(rearrangeCharacters("abcba", "abc")); // 1
console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa")); // 1

// while(true) is terrible but I couldn't think of an alternative

const topVotedRearrangeCharacters = function (s, target) {
  let min = s.length;
  for (let l of target) {
    let re = new RegExp(l, "g");
    min = Math.min(
      min,
      Math.trunc((s.match(re)?.length || 0) / target.match(re).length)
    );
  }
  return min;
};

// Very good use of Regex here
// I much prefer this solution */

// Min Max Game          7/16/2022
/* 
// You are given a 0-indexed integer array nums whose length is a power of 2.

// Apply the following algorithm on nums:
//    Let n be the length of nums. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n / 2.
//    For every even index i where 0 <= i < n / 2, assign the value of newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
//    For every odd index i where 0 <= i < n / 2, assign the value of newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
//    Replace the array nums with newNums.
//    Repeat the entire process starting from step 1.

// Return the last number that remains in nums after applying the algorithm.

// Example 1:
//   https://assets.leetcode.com/uploads/2022/04/13/example1drawio-1.png
//		 Input: nums = [1,3,5,2,4,8,2,2]
//		 Output: 1
// Explanation: The following arrays are the results of applying the algorithm repeatedly.
// First: nums = [1,5,4,2]
// Second: nums = [1,4]
// Third: nums = [1]
// 1 is the last remaining number, so we return 1.

// Example 2:
//		 Input: nums = [3]
//		 Output: 3
// Explanation: 3 is already the last remaining number, so we return 3.

// Constraints:
//    1 <= nums.length <= 1024
//    1 <= nums[i] <= 10^9
//    nums.length is a power of 2.

const topVotedMinMaxGame = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.min(nums[0], nums[1]);

  const newNums = [];
  for (let i = 0; i < nums.length; i += 4) {
    newNums.push(Math.min(nums[i], nums[i + 1]));
    newNums.push(Math.max(nums[i + 2], nums[i + 3]));
  }

  return topVotedMinMaxGame(newNums);
};
console.log(topVotedMinMaxGame([1, 3, 5, 2, 4, 8, 2, 2])); // 1
console.log(topVotedMinMaxGame([3])); // 3

// No time today */

// Strong Password Checker II          7/17/2022
/* 
// A password is said to be strong if it satisfies all the following criteria:
//    It has at least 8 characters.
//    It contains at least one lowercase letter.
//    It contains at least one uppercase letter.
//    It contains at least one digit.
//    It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&amp;*()-+".
//    It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).

// Given a string password, return true if it is a strong password. Otherwise, return false.

// Example 1:
//		 Input: password = "IloveLe3tcode!"
//		 Output: true
// Explanation: The password meets all the requirements. Therefore, we return true.

// Example 2:
//		 Input: password = "Me+You--IsMyDream"
//		 Output: false
// Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.

// Example 3:
//		 Input: password = "1aB!"
//		 Output: false
// Explanation: The password does not meet the length requirement. Therefore, we return false.

// Constraints:
//    1 <= password.length <= 100
//    password consists of letters, digits, and special characters: "!@#$%^&amp;*()-+".

const strongPasswordCheckerII = (password) =>
  password.length >= 8 &&
  password.toUpperCase() !== password &&
  password.toLowerCase() !== password &&
  /d/.test(password) &&
  /!|@|#|\$|%|^|&|\*|(|)|-|\+/.test(password) &&
  [...password].reduce((a, c, i, arr) => {
    if (a === false) return false;
    return c !== arr[i - 1];
  });

console.log(strongPasswordCheckerII("IloveLe3tcode!")); // true
console.log(strongPasswordCheckerII("Me+You--IsMyDream")); // false
console.log(strongPasswordCheckerII("1aB!")); // false

// Doesn't work for all test cases

const ord = (c) => c.charCodeAt();
const isLowerCase = (c) => {
  let x = ord(c);
  return x >= 97 && x <= 122;
};
const isUpperCase = (c) => {
  let x = ord(c);
  return x >= 65 && x <= 90;
};
const isDigit = (c) => "0123456789".indexOf(c) != -1;
const isSpecial = (c) => "!@#$%^&*()-+".indexOf(c) != -1;

const topVotedStrongPasswordCheckerII = (s) => {
  let n = s.length,
    hasLower = false,
    hasUpper = false,
    hasDigit = false,
    hasSpecial = false,
    adjSame = false;
  if (n < 8) return false;
  for (let i = 0; i < n; i++) {
    if (isLowerCase(s[i])) hasLower = true;
    if (isUpperCase(s[i])) hasUpper = true;
    if (isDigit(s[i])) hasDigit = true;
    if (isSpecial(s[i])) hasSpecial = true;
    if (i + 1 < n && s[i] == s[i + 1]) adjSame = true;
  }
  return hasLower && hasUpper && hasDigit && hasSpecial && !adjSame;
};

// Works, pretty bulky */

// Calculate Amount Paid in Taxes          7/18/2022
/* 
// You are given a 0-indexed 2D integer array brackets where brackets[i] = [upperi, percenti] means that the i^th tax bracket has an upper bound of upperi and is taxed at a rate of percenti. The brackets are sorted by upper bound (i.e. upperi-1 < upperi for 0 < i < brackets.length).

// Tax is calculated as follows:
//    The first upper0 dollars earned are taxed at a rate of percent0.
//    The next upper1 - upper0 dollars earned are taxed at a rate of percent1.
//    The next upper2 - upper1 dollars earned are taxed at a rate of percent2.
//    And so on.

// You are given an integer income representing the amount of money you earned. Return the amount of money that you have to pay in taxes. Answers within 10^-5 of the actual answer will be accepted.

// Example 1:
//		 Input: brackets = [[3,50],[7,10],[12,25]], income = 10
//		 Output: 2.65000
// Explanation:
// Based on your income, you have 3 dollars in the 1^st tax bracket, 4 dollars in the 2^nd tax bracket, and 3 dollars in the 3^rd tax bracket.
// The tax rate for the three tax brackets is 50%, 10%, and 25%, respectively.
// In total, you pay $3 * 50% + $4 * 10% + $3 * 25% = $2.65 in taxes.

// Example 2:
//		 Input: brackets = [[1,0],[4,25],[5,50]], income = 2
//		 Output: 0.25000
// Explanation:
// Based on your income, you have 1 dollar in the 1^st tax bracket and 1 dollar in the 2^nd tax bracket.
// The tax rate for the two tax brackets is 0% and 25%, respectively.
// In total, you pay $1 * 0% + $1 * 25% = $0.25 in taxes.

// Example 3:
//		 Input: brackets = [[2,50]], income = 0
//		 Output: 0.00000
// Explanation:
// You have no income to tax, so you have to pay a total of $0 in taxes.

// Constraints:
//    1 <= brackets.length <= 100
//    1 <= upperi <= 1000
//    0 <= percenti <= 100
//    0 <= income <= 1000
//    upperi is sorted in ascending order.
//    All the values of upperi are unique.
//    The upper bound of the last tax bracket is greater than or equal to income.

const calculateTax = (brackets, income, acc = 0) => {
  let [amt, perc] = brackets.shift();
  if (amt > income) amt = income;
  if (brackets.length > 0) brackets[0][0] -= amt;
  acc += (amt * perc) / 100;
  income -= amt;
  return income > 0 ? calculateTax(brackets, income, acc) : acc;
};
// prettier-ignore
console.log(calculateTax([[3,50],[7,10],[12,25]],10)) // 2.65000
// prettier-ignore
console.log(calculateTax([[1,0],[4,25],[5,50]],2)) // 0.25000
console.log(calculateTax([[2, 50]], 0)); // 0.00000

// Doesn't work for all test cases
// Seems there's a tiny rounding error somewhere

const topVotedCalculateTax = (brackets, income) => {
  let paid = 0;
  let prev = 0;

  for (const [amt, percent] of brackets) {
    const current = Math.min(income, amt - prev);
    const tax = current * (percent / 100);

    income -= current;
    paid += tax;
    prev = amt;

    if (income <= 0) return paid;
  }
};

// Much cleaner and logical */

// Greatest English Letter in Upper and Lower Case          7/19/2022
/* 
// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.

// Example 1:
//		 Input: s = "lEeTcOdE"
//		 Output: "E"
// Explanation:
// The letter 'E' is the only letter to appear in both lower and upper case.

// Example 2:
//		 Input: s = "arRAzFif"
//		 Output: "R"
// Explanation:
// The letter 'R' is the greatest letter to appear in both lower and upper case.
// Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.

// Example 3:
//		 Input: s = "AbCdEfGhIjK"
//		 Output: ""
// Explanation:
// There is no letter that appears in both lower and upper case.

// Constraints:
//    1 <= s.length <= 1000
//    s consists of lowercase and uppercase English letters.

const greatestLetter = (s) => {
  try {
    return Object.entries(
      [...s].reduce((a, c) => {
        a[c] ? a[c]++ : (a[c] = 1);
        return a;
      }, {})
    )
      .filter(
        (c) =>
          s.includes(c[0].toUpperCase()) &&
          s.includes(c[0].toLowerCase()) &&
          c[0] === c[0].toUpperCase()
      )
      .reduce((a, c) => (c[0].charCodeAt() > a[0].charCodeAt() ? c : a))[0];
  } catch (err) {
    return "";
  }
};

console.log(greatestLetter("lEeTcOdE")); // "E"
console.log(greatestLetter("arRAzFif")); // "R"
console.log(greatestLetter("AbCdEfGhIjK")); // ""

// The most disgusting "One-liner" I've written in a while

var topVotedGreatestLetter = function (s) {
  let uc = { ...Array(26).fill(0) },
    lc = { ...Array(26).fill(0) };
  for (let ch of s)
    if (isUpper(ch)) ++uc[asciiDif(ch, "A")];
    else ++lc[asciiDif(ch, "a")];
  for (let i = 25; i >= 0; --i) {
    if (uc[i] && lc[i]) return String.fromCharCode("A".charCodeAt(0) + i);
  }
  return "";
};
const isUpper = (char) => char.toUpperCase() === char;
const asciiDif = (a, b) => a.charCodeAt(0) - b.charCodeAt(0);

// This is the second time seeing this "{ ...Array(26).fill(0) }" method of counting letters
// I'm not a fan, but I can see how that makes the for loop with the return statement very easy */

// Count Asterisks          7/20/2022
/* 
// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1^st and 2^nd '|' make a pair, the 3^rd and 4^th '|' make a pair, and so forth.

// Return the number of '*' in s, excluding the '*' between each pair of '|'.

// Note that each '|' will belong to exactly one pair.

// Example 1:
//		 Input: s = "l|*e*et|c**o|*de|"
//		 Output: 2
// Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
// The characters between the first and second '|' are excluded from the answer.
// Also, the characters between the third and fourth '|' are excluded from the answer.
// There are 2 asterisks considered. Therefore, we return 2.

// Example 2:
//		 Input: s = "iamprogrammer"
//		 Output: 0
// Explanation: In this example, there are no asterisks in s. Therefore, we return 0.

// Example 3:
//		 Input: s = "yo|uar|e**|b|e***au|tifu|l"
//		 Output: 5
// Explanation: The considered characters are underlined: "yo|uar|e**|b|e***au|tifu|l". There are 5 asterisks considered. Therefore, we return 5.

// Constraints:
//    1 <= s.length <= 1000
//    s consists of lowercase English letters, vertical bars '|', and asterisks '*'.
//    s contains an even number of vertical bars '|'.

const countAsterisks = (s) =>
  [
    ...s
      .split("|")
      .filter((x, i) => i % 2 === 0)
      .join(""),
  ].filter((x) => x === "*").length;

console.log(countAsterisks("l|*e*et|c**o|*de|")); // 2
console.log(countAsterisks("iamprogrammer")); // 0
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l")); // 5

// Also thought about using .replace and Regex instead of second filter

var topVotedCountAsterisks = function (s) {
  let green = true,
    count = 0;
  for (let i = 0; i < s.length; i++) {
    if (green && s[i] == "*") count++;
    if (s[i] == "|") green = !green;
  }
  return count;
};

// "| is like a STATE-SWITCHER (Traffic light), everytime we meet it, we have to change the state."
// I like this approach */

// Check if Matrix Is X-Matrix          7/21/2022
/* 
// A square matrix is said to be an X-Matrix if both of the following conditions hold:
//    All the elements in the diagonals of the matrix are non-zero.
//    All other elements are 0.

// Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.

// Example 1:
//   https://assets.leetcode.com/uploads/2022/05/03/ex1.jpg
//		 Input: grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]
//		 Output: true
// Explanation: Refer to the diagram above.
// An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
// Thus, grid is an X-Matrix.

// Example 2:
//   https://assets.leetcode.com/uploads/2022/05/03/ex2.jpg
//		 Input: grid = [[5,7,0],[0,3,1],[0,5,0]]
//		 Output: false
// Explanation: Refer to the diagram above.
// An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
// Thus, grid is not an X-Matrix.

// Constraints:
//    n == grid.length == grid[i].length
//    3 <= n <= 100
//    0 <= grid[i][j] <= 10^5

function topVotedCheckXMatrix(grid) {
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j && grid[i][j] === 0) return false;
      if (i === n - j - 1 && grid[i][j] === 0) return false;
      if (i !== j && i !== n - j - 1 && grid[i][j] !== 0) return false;
    }
  }
  return true;
}
// prettier-ignore
console.log(topVotedCheckXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]])) // true
// prettier-ignore
console.log(topVotedCheckXMatrix([[5,7,0],[0,3,1],[0,5,0]])) // false */

// Decode the Message          7/22/2022
/* 
// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:
//    Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
//    Align the substitution table with the regular English alphabet.
//    Each letter in message is then substituted using the table.
//    Spaces ' ' are transformed to themselves.

//    For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

// Return the decoded message.

// Example 1:
//   https://assets.leetcode.com/uploads/2022/05/08/ex1new4.jpg
//		 Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
//		 Output: "this is a secret"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".

// Example 2:
//   https://assets.leetcode.com/uploads/2022/05/08/ex2new.jpg
//		 Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
//		 Output: "the five boxing wizards jump quickly"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".

// Constraints:
//    26 <= key.length <= 2000
//    key consists of lowercase English letters and ' '.
//    key contains every letter in the English alphabet ('a' to 'z') at least once.
//    1 <= message.length <= 2000
//    message consists of lowercase English letters and ' '.

const decodeMessage = (key, message) => {
  const table = [...key].reduce(
    (a, c) => (a.includes(c) || c === " " ? a : [...a, c]),
    []
  );
  return [...message].reduce(
    (a, c) =>
      c === " "
        ? (a += " ")
        : (a += String.fromCharCode(table.findIndex((x) => x === c) + 97)),
    ""
  );
};
console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
); // "this is a secret"
console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
); // "the five boxing wizards jump quickly"

// I like these types of problems

const topVotedDecodeMessage = function (key, message) {
  let result = "";
  key = Array.from(new Set(key.split(" ").join("")));
  const hash = new Map();
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alpha.length; i++) hash.set(key[i], alpha[i]);
  for (let chr of message) result += hash.get(chr) || " ";

  return result;
};

// Using Set to create the key is very clean

// Day 4️⃣0️⃣0️⃣ 🎉 */

// Minimum Amount of Time to Fill Cups          7/23/2022
/* 
// You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up 2 cups with different types of water, or 1 cup of any type of water.

// You are given a 0-indexed integer array amount of length 3 where amount[0], amount[1], and amount[2] denote the number of cold, warm, and hot water cups you need to fill respectively. Return the minimum number of seconds needed to fill up all the cups.

// Example 1:
//		 Input: amount = [1,4,2]
//		 Output: 4
// Explanation: One way to fill up the cups is:
// Second 1: Fill up a cold cup and a warm cup.
// Second 2: Fill up a warm cup and a hot cup.
// Second 3: Fill up a warm cup and a hot cup.
// Second 4: Fill up a warm cup.
// It can be proven that 4 is the minimum number of seconds needed.

// Example 2:
//		 Input: amount = [5,4,4]
//		 Output: 7
// Explanation: One way to fill up the cups is:
// Second 1: Fill up a cold cup, and a hot cup.
// Second 2: Fill up a cold cup, and a warm cup.
// Second 3: Fill up a cold cup, and a warm cup.
// Second 4: Fill up a warm cup, and a hot cup.
// Second 5: Fill up a cold cup, and a hot cup.
// Second 6: Fill up a cold cup, and a warm cup.
// Second 7: Fill up a hot cup.

// Example 3:
//		 Input: amount = [5,0,0]
//		 Output: 5
// Explanation: Every second, we fill up a cold cup.

// Constraints:
//    amount.length == 3
//    0 <= amount[i] <= 100

const topVotedFillCups = function (amount) {
  let result = 0;
  amount.sort((a, b) => a - b);
  while (amount[1] && amount[2]) {
    result++;
    amount[1]--;
    amount[2]--;
    amount.sort((a, b) => a - b);
  }
  result += amount[2];
  return result;
};
console.log(fillCups([1, 4, 2])); // 4
console.log(fillCups([5, 4, 4])); // 7
console.log(fillCups([5, 0, 0])); // 5

// No time today */

// Maximum Number of Pairs in Array          7/24/2022
/* 
// You are given a 0-indexed integer array nums. In one operation, you may do the following:
//    Choose two integers in nums that are equal.
//    Remove both integers from nums, forming a pair.

// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

// Example 1:
//		 Input: nums = [1,3,2,1,3,2,2]
//		 Output: [3,1]
// Explanation:
// Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.

// Example 2:
//		 Input: nums = [1,1]
//		 Output: [1,0]
// Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
// No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.

// Example 3:
//		 Input: nums = [0]
//		 Output: [0,1]
// Explanation: No pairs can be formed, and there is 1 number leftover in nums.

// Constraints:
//    1 <= nums.length <= 100
//    0 <= nums[i] <= 100

const numberOfPairs = (nums, acc = 0) => {
  for (let x of nums) {
    let [i1, i2] = [nums.indexOf(x), nums.lastIndexOf(x)];
    if (i1 !== i2) {
      nums = [...nums.slice(0, i1), ...nums.slice(i1 + 1)];
      nums = [...nums.slice(0, i2 - 1), ...nums.slice(i2)];
      acc++;
      return numberOfPairs(nums, acc);
    }
  }
  return [acc, nums.length];
};
console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2])); // [3,1]
console.log(numberOfPairs([1, 1])); // [1,0]
console.log(numberOfPairs([0])); // [0,1]

// Better than 100% runtimes and memory

const topVotedNumberOfPairs = function (nums) {
  let countPairs = [];
  let countNoPairs = [];
  nums = nums.sort((a, b) => a - b);

  while (nums.length > 0) {
    if (nums[0] === nums[1]) {
      countPairs.push(nums.shift());
      countPairs.push(nums.shift());
    } else {
      countNoPairs.push(nums.shift());
    }
  }

  return [countPairs.length / 2, countNoPairs.length];
};

// Makes sense */

// Best Poker Hand          7/25/2022
/* 
// You are given an integer array ranks and a character array suits. You have 5 cards where the i^th card has a rank of ranks[i] and a suit of suits[i].

// The following are the types of poker hands you can make from best to worst:
//    "Flush": Five cards of the same suit.
//    "Three of a Kind": Three cards of the same rank.
//    "Pair": Two cards of the same rank.
//    "High Card": Any single card.

// Return a string representing the best type of poker hand you can make with the given cards.

// Note that the return values are case-sensitive.

// Example 1:
//		 Input: ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]
//		 Output: "Flush"
// Explanation: The hand with all the cards consists of 5 cards with the same suit, so we have a "Flush".

// Example 2:
//		 Input: ranks = [4,4,2,4,4], suits = ["d","a","a","b","c"]
//		 Output: "Three of a Kind"
// Explanation: The hand with the first, second, and fourth card consists of 3 cards with the same rank, so we have a "Three of a Kind".
// Note that we could also make a "Pair" hand but "Three of a Kind" is a better hand.
// Also note that other cards could be used to make the "Three of a Kind" hand.

// Example 3:
//		 Input: ranks = [10,10,2,12,9], suits = ["a","b","c","a","d"]
//		 Output: "Pair"
// Explanation: The hand with the first and second card consists of 2 cards with the same rank, so we have a "Pair".
// Note that we cannot make a "Flush" or a "Three of a Kind".

// Constraints:
//    ranks.length == suits.length == 5
//    1 <= ranks[i] <= 13
//    'a' <= suits[i] <= 'd'
//    No two cards have the same rank and suit.

const bestHand = (ranks, suits) => {
  if (suits.every((x) => x === suits[0])) return "Flush";
  const count = Math.max(
    ...Object.values(
      ranks.reduce((a, c) => {
        a[c] ? a[c]++ : (a[c] = 1);
        return a;
      }, {})
    )
  );
  return count >= 3 ? "Three of a Kind" : count >= 2 ? "Pair" : "High Card";
};
console.log(bestHand([13, 2, 3, 1, 9], ["a", "a", "a", "a", "a"])); // "Flush"
console.log(bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"])); // "Three of a Kind"
console.log(bestHand([10, 10, 2, 12, 9], ["a", "b", "c", "a", "d"])); // "Pair"

// Faster than 100% runtime & memory

const topVotedBestHand = function (ranks, suits) {
  if (new Set(suits).size === 1) return "Flush";
  const counts = ranks.reduce(
    (acc, cur) => (acc[cur]++, acc),
    new Uint8Array(14)
  );
  const max = Math.max(...counts);
  return max > 2 ? "Three of a Kind" : max > 1 ? "Pair" : "High Card";
};

// Basically same logic */

// First Letter to Appear Twice          7/26/2022
/* 
// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:
//    A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
//    s will contain at least one letter that appears twice.

// Example 1:
//		 Input: s = "abccbaacz"
//		 Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

// Example 2:
//		 Input: s = "abcdd"
//		 Output: "d"
// Explanation:
// The only letter that appears twice is 'd' so we return 'd'.

// Constraints:
//    2 <= s.length <= 100
//    s consists of lowercase English letters.
//    s has at least one repeated letter.

const repeatedCharacter = (s) => {
  let count = {};
  for (const c of [...s]) {
    if (count[c]) return c;
    count[c] = 1;
  }
};
console.log(repeatedCharacter("abccbaacz")); // "c"
console.log(repeatedCharacter("abcdd")); // "d"

// Better than 100% runtime & memory
// That's 3 in a row, I think I'm getting deep into the problems and not many people have attempted these

var topVotedRepeatedCharacter = function (s) {
  const m = {};
  for (let i of s) {
    if (i in m) m[i]++;
    else m[i] = 1;
    if (m[i] == 2) return i;
  }
};

// Same idea */

// Add Two Numbers          7/27/2022
/* 
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
//   https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg
//		 Input: l1 = [2,4,3], l2 = [5,6,4]
//		 Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
//		 Input: l1 = [0], l2 = [0]
//		 Output: [0]

// Example 3:
//		 Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//		 Output: [8,9,9,9,0,0,0,1]

// Constraints:
//    The number of nodes in each linked list is in the range [1, 100].
//    0 <= Node.val <= 9
//    It is guaranteed that the list represents a number that does not have leading zeros.

const addTwoNumbers = (l1, l2) =>
  [...`${+l1.reverse().join("") + +l2.reverse().join("")}`].reverse();

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7,0,8]
console.log(addTwoNumbers([0], [0])); // [0]
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])); // [8,9,9,9,0,0,0,1]

// Works but Leetcode is returning a runtime error

const topVotedAddTwoNumbers = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return List.next;
};

// First time seeing ListNode */

// Reverse Bits          7/28/2022
/* 
// Reverse bits of a given 32 bits unsigned integer.

// Constraints:	The input must be a binary string of length 32

// Note:
// 	Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.

// 	In Java, the compiler represents the signed integers using https://en.wikipedia.org/wiki/Two%27s_complement 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

// Example 1:
//		 Input: n = 00000010100101000001111010011100
//		 Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

// Example 2:
//		 Input: n = 11111111111111111111111111111101
//		 Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

// Constraints:
//    The input must be a binary string of length 32

const topVotedReverseBits = (n) =>
  Number.parseInt(
    n.toString(2).split("").reverse().join("").padEnd(32, "0"),
    2
  );

console.log(topVotedReverseBits(00000010100101000001111010011100)); // 964176192
console.log(topVotedReverseBits(11111111111111111111111111111101)); // 3221225471

// Couldn't get it working
// The test cases here don't seem to work, but leetcode sees this as a valid solution */

// Number of 1 Bits          7/29/2022
/* 
// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the http://en.wikipedia.org/wiki/Hamming_weight Hamming weight).

// Note:
// 	  Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// 	  In Java, the compiler represents the signed integers using https://en.wikipedia.org/wiki/Two%27s_complement2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

// Example 1:
//		 Input: n = 00000000000000000000000000001011
//		 Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// Example 2:
//		 Input: n = 00000000000000000000000010000000
//		 Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

// Example 3:
//		 Input: n = 11111111111111111111111111111101
//		 Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

// Constraints:
//    The input must be a binary string of length 32.

const hammingWeight = (n) => n.toString(2).replaceAll("0", "").length;

console.log(hammingWeight(00000000000000000000000000001011)); // 3
console.log(hammingWeight(00000000000000000000000010000000)); // 1
console.log(hammingWeight(11111111111111111111111111111101)); // 31

// Works
// Like yesterday, test cases don't seem to work, but leetcode sees it as valid

var topVotedHammingWeight = function (n) {
  let num_of_1s = 0;
  for (let i = 0; i < 32; i++) {
    num_of_1s += n & 1;
    n >>= 1;
  }
  return num_of_1s;
};

// Nice */

// Happy Number          7/30/2022
/* 
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:
//    Starting with any positive integer, replace the number by the sum of the squares of its digits.
//    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//    Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

// Example 1:
//		 Input: n = 19
//		 Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Example 2:
//		 Input: n = 2
//		 Output: false

// Constraints:
//    1 <= n <= 2^31 - 1

const isHappy = (n, acc = []) => {
  let ans = [...`${n}`].reduce((a, c) => (a += c * c), 0);
  if (ans === 1) return true;
  else {
    if (acc.includes(ans)) return false;
    acc.push(ans);
    return isHappy(ans, acc);
  }
};
console.log(isHappy(19)); // true
console.log(isHappy(2)); // false

// Works

var topVotedIsHappy = function (n) {
  var seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumOfSquares(n);
  }
  return n === 1 ? true : false;
};

function sumOfSquares(numString) {
  return numString
    .toString()
    .split("")
    .reduce(function (sum, num) {
      return sum + Math.pow(num, 2);
    }, 0);
}

// Same idea */

// Remove Linked List Elements          7/31/2022
/* 
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:
//   https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg
//		 Input: head = [1,2,6,3,4,5,6], val = 6
//		 Output: [1,2,3,4,5]

// Example 2:
//		 Input: head = [], val = 1
//		 Output: []

// Example 3:
//		 Input: head = [7,7,7,7], val = 7
//		 Output: []

// Constraints:
//    The number of nodes in the list is in the range [0, 10^4].
//    1 <= Node.val <= 50
//    0 <= val <= 50

const removeElements = (head, val) => head.filter((x) => x !== val);

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6)); // [1,2,3,4,5]
console.log(removeElements([], 1)); // []
console.log(removeElements([7, 7, 7, 7], 7)); // []

// Leetcode is looking for something else

var topVotedRemoveElements = function (head, val) {
  if (!head) return head;

  while (head) {
    if (head.val === val) head = head.next;
    else break;
  }

  let curr = head;
  while (curr && curr.next) {
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }

  return head;
};

//  Definition for singly-linked list.
//  function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
//  }

// I should learn to read these ↑ */

// Isomorphic Strings          8/1/2022
/* 
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
//		 Input: s = "egg", t = "add"
//		 Output: true

// Example 2:
//		 Input: s = "foo", t = "bar"
//		 Output: false

// Example 3:
//		 Input: s = "paper", t = "title"
//		 Output: true

// Constraints:
//    1 <= s.length <= 5 * 10^4
//    t.length == s.length
//    s and t consist of any valid ascii character.

const isIsomorphic = (s, t) => {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] && map[s[i]] !== t[i]) return false;
    if (Object.values(map).includes(t[i]) && !map[s[i]]) return false;
    map[s[i]] = t[i];
  }
  return true;
};
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false

// Bit bulky, but gets the job done

var topVotedIsIsomorphic = function (s, t) {
  var obj = {};
  for (var i = 0; i < s.length; i++) {
    if (!obj["s" + s[i]]) obj["s" + s[i]] = t[i];
    if (!obj["t" + t[i]]) obj["t" + t[i]] = s[i];
    if (t[i] != obj["s" + s[i]] || s[i] != obj["t" + t[i]]) return false;
  }
  return true;
};

// Similar logic */

// Contains Duplicate          8/2/2022
/* 
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
//		 Input: nums = [1,2,3,1]
//		 Output: true

// Example 2:
//		 Input: nums = [1,2,3,4]
//		 Output: false

// Example 3:
//		 Input: nums = [1,1,1,3,3,4,3,2,4,2]
//		 Output: true

// Constraints:
//    1 <= nums.length <= 10^5
//    -10^9 <= nums[i] <= 10^9

const containsDuplicate = (nums) => new Set(nums).size !== nums.length;

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

// Same as top voted

var otherContainsDuplicate = (nums) =>
  nums.sort().some((a, i) => a === nums[i - 1]); */

// Contains Duplicate II          8/3/2022
/* 
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
//		 Input: nums = [1,2,3,1], k = 3
//		 Output: true

// Example 2:
//		 Input: nums = [1,0,1,1], k = 1
//		 Output: true

// Example 3:
//		 Input: nums = [1,2,3,1,2,3], k = 2
//		 Output: false

// Constraints:
//    1 <= nums.length <= 10^5
//    -10^9 <= nums[i] <= 10^9
//    0 <= k <= 10^5

const containsNearbyDuplicate = (nums, k) => {
  for (let i = 0; i < nums.length; i++) {
    const j = nums.slice(i + 1).findIndex((x) => x === nums[i]);
    if (j !== -1 && j + 1 <= k) return true;
  }
  return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false

// Exceeds Leetcode's time limit

var topVotedContainsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) return true;
    map.set(nums[i], i);
  }
  return false;
};

// Very good runtime */

// Summary Ranges          8/4/2022
/* 
// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:
//    "a->b" if a != b
//    "a" if a == b

// Example 1:
//		 Input: nums = [0,1,2,4,5,7]
//		 Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// Example 2:
//		 Input: nums = [0,2,3,4,6,8,9]
//		 Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

// Constraints:
//    0 <= nums.length <= 20
//    -2^31 <= nums[i] <= 2^31 - 1
//    All the values of nums are unique.
//    nums is sorted in ascending order.

const summaryRanges = (nums) => {
  if (nums.length < 1) return [];
  let prev = nums.shift();
  let count = prev;
  return nums
    .reduce(
      (a, c, i, arr) => {
        if (c - 1 !== count) {
          if (a[a.length - 1] !== count) a.push(`${a.pop()}->${count}`);
          a.push(c);
          count = c;
        } else if (i === arr.length - 1 && c - 1 === count) {
          a.push(`${a.pop()}->${c}`);
        } else count++;
        return a;
      },
      [prev]
    )
    .map((x) => `${x}`);
};
console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]
console.log(summaryRanges([])); // []

// Quite a cluster, but works

var topVotedSummaryRanges = function (nums) {
  var t = 0;
  var ans = [];
  nums.push("#");
  for (var i = 1; i < nums.length; i++)
    if (nums[i] - nums[t] !== i - t) {
      if (i - t > 1) ans.push(nums[t] + "->" + nums[i - 1]);
      else ans.push(nums[t].toString());
      t = i;
    }
  return ans;
};

// Much cleaner */

// Power of Two          8/5/2022

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2^x.

// Example 1:
//		 Input: n = 1
//		 Output: true
// Explanation: 2^0 = 1

// Example 2:
//		 Input: n = 16
//		 Output: true
// Explanation: 2^4 = 16

// Example 3:
//		 Input: n = 3
//		 Output: false

// Constraints:
//    -2^31 <= n <= 2^31 - 1

const isPowerOfTwo = (n) => {
  for (let i = 0; i <= n / 2; i++) if (Math.pow(2, i) === n) return true;
  return false;
};
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(4)); // true

// Exceeds Leetcode time limit

const topVotedIsPowerOfTwo = (n) => (n > 0 ? !(n & (n - 1)) : false);

// Smart binary trick
// https://leetcode.com/problems/power-of-two/discuss/369024/100-fastest-0ms-one-line-solution-with-explanation-binary-trick
