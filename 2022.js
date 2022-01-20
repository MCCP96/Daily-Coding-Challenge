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

// Somehow bottom 5% runtime
