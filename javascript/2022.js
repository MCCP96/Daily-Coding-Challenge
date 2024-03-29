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
/* 
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
// https://leetcode.com/problems/power-of-two/discuss/369024/100-fastest-0ms-one-line-solution-with-explanation-binary-trick */

// Valid Anagram          8/6/2022
/* 
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Constraints:
//    1 <= s.length, t.length <= 5 * 10^4
//    s and t consist of lowercase English letters.

// Example 1:
//		 Input: s = "anagram", t = "nagaram"
//		 Output: true

// Example 2:
//		 Input: s = "rat", t = "car"
//		 Output: false

// Constraints:
//    1 <= s.length, t.length <= 5 * 10^4
//    s and t consist of lowercase English letters.

const isAnagram = (s, t) => [...s].sort().join("") === [...t].sort().join("");

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

// Nice
// Same as top voted */

// Add Digits          8/7/2022
/* 
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Constraints:	0 <= num <= 2^31 - 1

// Example 1:
//		 Input: num = 38
//		 Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// Example 2:
//		 Input: num = 0
//		 Output: 0

// Constraints:
//    0 <= num <= 2^31 - 1

const addDigits = (num) =>
  num < 10 ? num : addDigits(+[...`${num}`].reduce((a, c) => a + +c, 0));

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0

// One line
// Decent runtime/memory

var topVotedAddDigits = function (num) {
  if (isNaN(num) || num === 0) return 0;
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
};

// Huh, nice! */

// Ugly Number          8/8/2022
/* 
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

// Example 1:
//		 Input: n = 6
//		 Output: true
// Explanation: 6 = 2 × 3

// Example 2:
//		 Input: n = 1
//		 Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

// Example 3:
//		 Input: n = 14
//		 Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

// Constraints:
//    -2^31 <= n <= 2^31 - 1

const isUgly = (n) => {
  if (n <= 0) return false;
  return n % 2 === 1 || n % 3 === 1 || n % 5 === 1;
};
console.log(isUgly(6)); // true
console.log(isUgly(1)); // true
console.log(isUgly(14)); // false

// Don't really get the prompt

var topVotedIsUgly = function (num) {
  if (num <= 0) return false;
  while (parseInt(num / 2) === num / 2) num /= 2;
  while (parseInt(num / 3) === num / 3) num /= 3;
  while (parseInt(num / 5) === num / 5) num /= 5;
  return num === 1;
}; */

// Missing Number          8/9/2022
/* 
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
//		 Input: nums = [3,0,1]
//		 Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
//		 Input: nums = [0,1]
//		 Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
//		 Input: nums = [9,6,4,2,3,5,7,0,1]
//		 Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:
//    n == nums.length
//    1 <= n <= 10^4
//    0 <= nums[i] <= n
//    All the numbers of nums are unique.

const missingNumber = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) return i;
  }
};
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

// Found a one-liner, but it had terrible runtime
// This is much better

var topVotedMissingNumber = function (nums) {
  const res = new Array(nums.length + 1).fill(-1);
  for (const num of nums) {
    res[num] = num;
  }
  return res.indexOf(-1);
};

// That's one way of going about it */

// First Bad Version          8/10/2022
/* 
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example 1:
//		 Input: n = 5, bad = 4
//		 Output: 4
// Explanation:
//    call isBadVersion(3) -> false
//    call isBadVersion(5)-> true
//    call isBadVersion(4)-> true
//    Then 4 is the first bad version.

// Example 2:
//		 Input: n = 1, bad = 1
//		 Output: 1

// Constraints:
//    1 <= bad <= n <= 2^31 - 1

const topVotedSolution = (isBadVersion) => (n) => {
  let min = null;
  let start = 1;
  let end = n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (isBadVersion(mid)) {
      min = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return min;
};
console.log(topVotedSolution(5, 4)); // 4
console.log(topVotedSolution(1, 1)); // 1

// I get the logic here but I'm never quite sure how to test these */

// Move Zeroes          8/11/2022
/* 
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
//		 Input: nums = [0,1,0,3,12]
//		 Output: [1,3,12,0,0]

// Example 2:
//		 Input: nums = [0]
//		 Output: [0]

// Constraints:
//    1 <= nums.length <= 10^4
//    -2^31 <= nums[i] <= 2^31 - 1

const moveZeroes = (nums) =>
  [
    nums.filter((x) => x !== 0),
    Array(nums.filter((x) => x === 0).length).fill(0),
  ].flat();

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]

// Couldn't get it working without making a copy of the array

const topVotedMoveZeroes = (nums) => {
  var pos = 0;
  for (var i = 0; i < nums.length; i++)
    if (nums[i] !== 0) {
      nums[pos++] = nums[i];
    }

  for (i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// Very clean */

// Word Pattern          8/12/2022
/* 
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
//		 Input: pattern = "abba", s = "dog cat cat dog"
//		 Output: true

// Example 2:
//		 Input: pattern = "abba", s = "dog cat cat fish"
//		 Output: false

// Example 3:
//		 Input: pattern = "aaaa", s = "dog cat cat dog"
//		 Output: false

// Constraints:
//    1 <= pattern.length <= 300
//    pattern contains only lower-case English letters.
//    1 <= s.length <= 3000
//    s contains only lowercase English letters and spaces ' '.
//    s does not contain any leading or trailing spaces.
//    All the words in s are separated by a single space.

const wordPattern = (pattern, s, map = {}) => {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (map[pattern[i]] && map[pattern[i]] !== words[i]) return false;
    if (!map[pattern[i]]) {
      if (Object.values(map).includes(words[i])) return false;
      else map[pattern[i]] = words[i];
    }
  }
  return true;
};
console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); // false
console.log(wordPattern("abba", "dog dog dog dog")); // false
console.log(wordPattern("aaa", "aa aa aa aa")); // false

// Bit bulky but pretty readable I find

const topVotedWordPattern = function (pattern, str) {
  const words = str.split(/\s+/);
  const map = new Map();

  if (words.length !== pattern.length) return false;
  if (new Set(words).size !== new Set(pattern).size) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) return false;
    map.set(pattern[i], words[i]);
  }
  return true;
};

// Same idea, cleaner code */

// Nim Game          8/13/2022
/* 
// You are playing the following Nim Game with your friend:
//    Initially, there is a heap of stones on the table.
//    You and your friend will alternate taking turns, and you go first.
//    On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
//    The one who removes the last stone is the winner.

// Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

// Example 1:
//		 Input: n = 4
//		 Output: false
// Explanation: These are the possible outcomes:
// 1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
// 2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
// 3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
// In all outcomes, your friend wins.

// Example 2:
//		 Input: n = 1
//		 Output: true

// Example 3:
//		 Input: n = 2
//		 Output: true

// Constraints:
//    1 <= n <= 2^31 - 1

const canWinNim = (n) => n % 4 !== 0;

console.log(canWinNim(4)); // false
console.log(canWinNim(1)); // true
console.log(canWinNim(2)); // true

// Multiples of 4 are the only count that promise a loss
// Same as top voted */

// Power of Three          8/14/2022
/* 
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3^x.

// Example 1:
//		 Input: n = 27
//		 Output: true

// Example 2:
//		 Input: n = 0
//		 Output: false

// Example 3:
//		 Input: n = 9
//		 Output: true

// Constraints:
//    -2^31 <= n <= 2^31 - 1

const isPowerOfThree = (n) => {
  for (let i = 0; i <= ~~Math.sqrt(n); i++)
    if (Math.pow(3, i) === n) return true;
  return false;
};
console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false
console.log(isPowerOfThree(1)); // true
console.log(isPowerOfThree(3)); // true

// Great memory, terrible runtime

var topVotedIsPowerOfThree = function (n) {
  let a = Math.log(n) / Math.log(3);
  return Math.abs(a - Math.round(a)) < 1e-10;
};

// Of course log would be the right approach here
// Very nice */

// Counting Bits          8/15/2022
/* 
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Constraints:	0 <= n <= 10^5

// Example 1:
//		 Input: n = 2
//		 Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// Example 2:
//		 Input: n = 5
//		 Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Constraints:
//    0 <= n <= 10^5

const countBits = (n) =>
  Array(n + 1)
    .fill(0)
    .map((_, i) => i.toString(2).replaceAll(0, "").length);

console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]

// Not great runtime, but pretty straightforward

const topVotedCountBits = (n) => {
  let result = Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    result[i] = 1 + result[i - offset];
  }

  return result;
}; */

// Power of Four          8/16/2022
/* 
// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4^x.

// Example 1:
//		 Input: n = 16
//		 Output: true

// Example 2:
//		 Input: n = 5
//		 Output: false

// Example 3:
//		 Input: n = 1
//		 Output: true

// Constraints:
//    -2^31 <= n <= 2^31 - 1

const isPowerOfFour = (n) => {
  let a = Math.log(n) / Math.log(4);
  return Math.abs(a - Math.round(a)) < 1e-10;
};

console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(1)); // true

// Same as power of three from 2 days ago

const topVotedIsPowerOfFour = (n) => n > 0 && Math.log2(n) % 2 === 0;

// Nice one liner */

// Reverse String          8/17/2022
/* 
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place (https://en.wikipedia.org/wiki/In-place_algorithm) with O(1) extra memory.

// Example 1:
//		 Input: s = ["h","e","l","l","o"]
//		 Output: ["o","l","l","e","h"]

// Example 2:
//		 Input: s = ["H","a","n","n","a","h"]
//		 Output: ["h","a","n","n","a","H"]

// Constraints:
//    1 <= s.length <= 10^5
//    s[i] is a (https://en.wikipedia.org/wiki/ASCII#Printable_characters) printable ascii character.

const reverseString = (s) => {
  for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--)
    [s[i], s[j]] = [s[j], s[i]];
};
console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // ["h","a","n","n","a","H"]

// Works

const topVotedReverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};

// Similar use of destructuring */

// Reverse Vowels of a String          8/18/2022
/* 
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example 1:
//		 Input: s = "hello"
//		 Output: "holle"

// Example 2:
//		 Input: s = "leetcode"
//		 Output: "leotcede"

// Constraints:
//    1 <= s.length <= 3 * 10^5
//    s consist of printable ASCII characters.

const reverseVowels = (s) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const sorted = [...s].filter((c) => vowels.includes(c));
  return [...s].reduce(
    (a, c) => a + (vowels.includes(c) ? sorted.pop() : c),
    ""
  );
};
console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"

// Concise and pretty good runtime

const topVotedReverseVowels = function (s) {
  const vowels = s.split("").filter((a) => /[aeiou]/i.test(a));
  return s
    .split(/[aeiou]/i)
    .reduce((res, a) => res + a + (vowels.pop() || ""), "");
};

// Clean use of Regex and splitting by vowels */

// Binary Watch          8/19/2022
/* 
// A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to representthe minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

// For example, the below binary watch reads "4:51".
// https://assets.leetcode.com/uploads/2021/04/08/binarywatch.jpg

// Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.

// The hour must not contain a leading zero.
//    For example, "01:00" is not valid. It should be "1:00".

// The minute must be consist of two digits and may contain a leading zero.
//    For example, "10:2" is not valid. It should be "10:02".

// Example 1:
//		 Input: turnedOn = 1
//		 Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

// Example 2:
//		 Input: turnedOn = 9
//		 Output: []

// Constraints:
//    0 <= turnedOn <= 10

const topVotedReadBinaryWatch = function (num) {
  const times = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const hOnes = h ? h.toString(2).match(/1/g).length : 0;
      const mOnes = m ? m.toString(2).match(/1/g).length : 0;
      console.log(hOnes, mOnes);
      if (hOnes + mOnes === num) {
        times.push(`${h}:${m < 10 ? `0${m}` : m}`);
      }
    }
  }
  return times;
};
console.log(topVotedReadBinaryWatch(1)); // ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
console.log(topVotedReadBinaryWatch(9)); // []

// I didn't know how to tackle this one
// This is a logical approach */

// Intersection of Two Arrays          8/20/2022
/* 
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Example 1:
//		 Input: nums1 = [1,2,2,1], nums2 = [2,2]
//		 Output: [2]

// Example 2:
//		 Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//		 Output: [9,4]
// Explanation: [4,9] is also accepted.

// Constraints:
//    1 <= nums1.length, nums2.length <= 1000
//    0 <= nums1[i], nums2[i] <= 1000

const intersection = (nums1, nums2) =>
  nums1.reduce(
    (a, c) => (nums2.includes(c) && !a.includes(c) ? [...a, c] : a),
    []
  );

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9,4]

// One line, good runtime

const topVotedIntersect = (nums1, nums2) => {
  let setNum1 = new Set(nums1);
  return [...new Set(nums2.filter((num) => setNum1.has(num)))];
};

// Clean */

// Intersection of Two Arrays II          8/21/2022
/* 
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
//		 Input: nums1 = [1,2,2,1], nums2 = [2,2]
//		 Output: [2,2]

// Example 2:
//		 Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//		 Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:
//    1 <= nums1.length, nums2.length <= 1000
//    0 <= nums1[i], nums2[i] <= 1000

const intersect = (nums1, nums2) =>
  nums1.reduce((a, c) => {
    if (nums2.includes(c)) {
      a = [...a, c];
      nums2.splice(nums2.indexOf(c), 1);
    }
    return a;
  }, []);

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]

// I like that this plays off yesterday's prompt

const topVotedIntersect = function (nums1, nums2) {
  const map = new Map();
  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  const result = [];
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      result.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return result;
};

// Wouldn't be my approach, but works
// Worse runtime */

// Valid Perfect Square          8/22/2022
/* 
// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

// Example 1:
//		 Input: num = 16
//		 Output: true

// Example 2:
//		 Input: num = 14
//		 Output: false

// Constraints:
//    1 <= num <= 2^31 - 1

const isPerfectSquare = (num) => {
  for (let i = 1; i <= num; i++) if (i * i === num) return true;
  return false;
};
console.log(isPerfectSquare(1)); // true
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false

// Pretty basic solution
// Definitely not the best runtime

const topVotedIsPerfectSquare = function (num) {
  return num ** 0.5 == parseInt(num ** 0.5);
};

// Much better */

// Guess Number Higher or Lower          8/23/2022
/* 
// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:
//    -1: Your guess is higher than the number I picked (i.e. num > pick).
//    1: Your guess is lower than the number I picked (i.e. num < pick).
//    0: your guess is equal to the number I picked (i.e. num == pick).

// Return the number that I picked.

// Example 1:
//		 Input: n = 10, pick = 6
//		 Output: 6

// Example 2:
//		 Input: n = 1, pick = 1
//		 Output: 1

// Example 3:
//		 Input: n = 2, pick = 1
//		 Output: 1

// Constraints:
//    1 <= n <= 2^31 - 1
//    1 <= pick <= n

const pick = 6;
const guess = (n) => (n > pick ? -1 : n < pick ? 1 : 0);

const guessNumber = (n) => {
  const pos = guess(n);
  if (pos === 0) return n;
  return guessNumber(pos === -1 ? --n : ++n);
};
console.log(guessNumber(10, 6)); // 6
console.log(guessNumber(1, 1)); // 1
console.log(guessNumber(2, 1)); // 1

// Exceeds maximum call stack, but works locally
// Definitely could decrement/increment more than 1 at a time to solve this

const topVotedGuessNumber = function (n) {
  let l = 0,
    r = n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let res = guess(mid);
    if (res == 0) return mid;
    else if (res == 1) l = mid + 1;
    else r = mid - 1;
  }
  return l;
};

// Works
// Not great runtime */

// Ransom Note          8/24/2022
/* 
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
//		 Input: ransomNote = "a", magazine = "b"
//		 Output: false

// Example 2:
//		 Input: ransomNote = "aa", magazine = "ab"
//		 Output: false

// Example 3:
//		 Input: ransomNote = "aa", magazine = "aab"
//		 Output: true

// Constraints:
//    1 <= ransomNote.length, magazine.length <= 10^5
//    ransomNote and magazine consist of lowercase English letters.

const canConstruct = (ransomNote, magazine) => {
  for (let c of ransomNote)
    if (!magazine.includes(c)) return false;
    else {
      const i = magazine.indexOf(c);
      magazine = magazine.substring(0, i) + magazine.substring(i + 1);
    }
  return true;
};
console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true

// Pretty concise

const topVotedCanConstruct = function (ransomNote, magazine) {
  const map = {};
  for (let letter of magazine) {
    if (!map[letter]) {
      map[letter] = 0;
    }
    map[letter]++;
  }

  for (let letter of ransomNote) {
    if (!map[letter]) {
      return false;
    }
    map[letter]--;
  }
  return true;
}; */

// Convert a Number to Hexadecimal          8/25/2022
/* 
// Given an integer num, return a string representing its hexadecimal representation. For negative integers, https://en.wikipedia.org/wiki/Two%27s_complement two’s complement method is used.

// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

// Note: You are not allowed to use any built-in library method to directly solve this problem.

// Example 1:
//		 Input: num = 26
//		 Output: "1a"

// Example 2:
//		 Input: num = -1
//		 Output: "ffffffff"

// Constraints:
//    -2^31 <= num <= 2^31 - 1

const toHex = (num) =>
  num >= 0 ? num.toString(16) : (num += Math.pow(2, 32)).toString(16);

console.log(toHex(26)); // "1a"
console.log(toHex(-1)); // "ffffffff"

// Stole 'num += Math.pow(2, 32)' from top voted submission

const topVotedToHex = function (num) {
  // prettier-ignore
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  if (num == 0) return "0";

  if (num < 0) {
    num += Math.pow(2, 32);
  }
  var res = "";

  while (num > 0) {
    var digit = num % 16;
    res = arr[digit] + res;
    num = Math.floor(num / 16);
  }
  return res;
};

// I rather '.toString(16)' over having an array */

// Maximum Average Subarray I          8/26/2022
/* 
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10^-5 will be accepted.

// Example 1:
//		 Input: nums = [1,12,-5,-6,50,3], k = 4
//		 Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:
//		 Input: nums = [5], k = 1
//		 Output: 5.00000

// Constraints:
//    n == nums.length
//    1 <= k <= n <= 10^5
//    -10^4 <= nums[i] <= 10^4

const findMaxAverage = (nums, k) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= nums.length - k; i++) {
    let cur = 0;
    for (let j = i; j < i + k; j++) cur += nums[j];
    max = Math.max(max, cur / k);
  }
  return max;
};
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000
console.log(findMaxAverage([5], 1)); // 5.00000

// Great memory, terrible runtime

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
}; */

// Min Cost Climbing Stairs          8/27/2022
/* 
// You are given an integer array cost where cost[i] is the cost of i^th step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

// Example 1:
//		 Input: cost = [10,15,20]
//		 Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:
//		 Input: cost = [1,100,1,1,1,100,1,1,100,1]
//		 Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

// Constraints:
//    2 <= cost.length <= 1000
//    0 <= cost[i] <= 999

const topVotedMinCostClimbingStairs = (cost) => {
  for (let i = cost.length - 3; ~i; i--)
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  return Math.min(cost[0], cost[1]);
};
console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6

// No time today */

// Valid Boomerang          8/28/2022
/* 
// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

// A boomerang is a set of three points that are all distinct and not in a straight line.

// Example 1:
//		 Input: points = [[1,1],[2,3],[3,2]]
//		 Output: true

// Example 2:
//		 Input: points = [[1,1],[2,2],[3,3]]
//		 Output: false

// Constraints:
//    points.length == 3
//    points[i].length == 2
//    0 <= xi, yi <= 100

const isBoomerang = (points) => {
  if (
    points[1][1] - points[0][1] / (points[1][0] - points[0][0]) ===
    points[2][1] - points[1][1] / (points[2][0] - points[1][0])
  )
    return false;
  if (
    points[0].join("") === points[1].join("") ||
    points[0].join("") === points[2].join("") ||
    points[1].join("") === points[2].join("")
  )
    return false;
  return true;
};
// prettier-ignore
console.log(isBoomerang([[1, 1],[2, 3],[3, 2]])); // true
// prettier-ignore
console.log(isBoomerang([[1, 1],[2, 2],[3, 3]])); // false

// Doesn't work for all test cases

const isBoomerang = function ([[ax, ay], [bx, by], [cx, cy]]) {
  return (by - ay) * (cx - bx) !== (cy - by) * (bx - ax);
};

// Very clean */

// Make Array Zero by Subtracting Equal Amounts          8/29/2022
/* 
// You are given a non-negative integer array nums. In one operation, you must:	Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.	Subtract x from every positive element in nums.

// Return the minimum number of operations to make every element in nums equal to 0.

// Example 1:
//		 Input: nums = [1,5,0,3,5]
//		 Output: 3
// Explanation:
// In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
// In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
// In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].

// Example 2:
//		 Input: nums = [0]
//		 Output: 0
// Explanation: Each element in nums is already 0 so no operations are needed.

// Constraints:
//    1 <= nums.length <= 100
//    0 <= nums[i] <= 100

const minimumOperations = (nums, count = 0) => {
  cur = nums.filter((x) => x !== 0);
  if (cur.length === 0) return count;
  const min = Math.min(...cur);
  return minimumOperations(
    cur.map((cur) => cur - min),
    ++count
  );
};
console.log(minimumOperations([1, 5, 0, 3, 5])); // 3
console.log(minimumOperations([0])); // 0

// Feels like a logical solution
// Decent runtime

const topVotedMinimumOperations = (nums) =>
  new Set(nums.filter((x) => x !== 0)).size;

// Hah, didn't think of that, makes total sense */

// Merge Similar Items          8/30/2022
/* 
// You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:
//    items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the i^th item.
//    The value of each item in items is unique.

// Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.

// Note: ret should be returned in ascending order by value.

// Example 1:
//		 Input: items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]]
//		 Output: [[1,6],[3,9],[4,5]]
// Explanation:
// The item with value = 1 occurs in items1 with weight = 1 and in items2 with weight = 5, total weight = 1 + 5 = 6.
// The item with value = 3 occurs in items1 with weight = 8 and in items2 with weight = 1, total weight = 8 + 1 = 9.
// The item with value = 4 occurs in items1 with weight = 5, total weight = 5.
// Therefore, we return [[1,6],[3,9],[4,5]].

// Example 2:
//		 Input: items1 = [[1,1],[3,2],[2,3]], items2 = [[2,1],[3,2],[1,3]]
//		 Output: [[1,4],[2,4],[3,4]]
// Explanation:
// The item with value = 1 occurs in items1 with weight = 1 and in items2 with weight = 3, total weight = 1 + 3 = 4.
// The item with value = 2 occurs in items1 with weight = 3 and in items2 with weight = 1, total weight = 3 + 1 = 4.
// The item with value = 3 occurs in items1 with weight = 2 and in items2 with weight = 2, total weight = 2 + 2 = 4.
// Therefore, we return [[1,4],[2,4],[3,4]].

// Example 3:
//		 Input: items1 = [[1,3],[2,2]], items2 = [[7,1],[2,2],[1,4]]
//		 Output: [[1,7],[2,4],[7,1]]
// Explanation:
// The item with value = 1 occurs in items1 with weight = 3 and in items2 with weight = 4, total weight = 3 + 4 = 7.
// The item with value = 2 occurs in items1 with weight = 2 and in items2 with weight = 2, total weight = 2 + 2 = 4.
// The item with value = 7 occurs in items2 with weight = 1, total weight = 1.
// Therefore, we return [[1,7],[2,4],[7,1]].

// Constraints:
//    1 <= items1.length, items2.length <= 1000
//    items1[i].length == items2[i].length == 2
//    1 <= valuei, weighti <= 1000
//    Each valuei in items1 is unique.
//    Each valuei in items2 is unique.

const mergeSimilarItems = (items1, items2) => {
  let acc = {};
  for (let arr of [...items1, ...items2]) {
    acc[arr[0]] ? (acc[arr[0]] += arr[1]) : (acc[arr[0]] = arr[1]);
  }
  return Object.entries(acc);
};
// prettier-ignore
console.log(mergeSimilarItems([[1,1],[4,5],[3,8]],[[3,1],[1,5]])) // [[1,6],[3,9],[4,5]]
// prettier-ignore
console.log(mergeSimilarItems([[1,1],[3,2],[2,3]],[[2,1],[3,2],[1,3]])) // [[1,4],[2,4],[3,4]]
// prettier-ignore
console.log(mergeSimilarItems([[1,3],[2,2]],[[7,1],[2,2],[1,4]])) // [[1,7],[2,4],[7,1]]

// Better than 90% of runtimes

const oneLineMergeSimilarItems = (items1, items2) =>
  Object.entries(
    [...items1, ...items2].reduce((a, c) => {
      a[c[0]] ? (a[c[0]] += c[1]) : (a[c[0]] = c[1]);
      return a;
    }, {})
  );
// prettier-ignore
console.log(oneLineMergeSimilarItems([[1,1],[4,5],[3,8]],[[3,1],[1,5]])) // [[1,6],[3,9],[4,5]]
// prettier-ignore
console.log(oneLineMergeSimilarItems([[1,1],[3,2],[2,3]],[[2,1],[3,2],[1,3]])) // [[1,4],[2,4],[3,4]]
// prettier-ignore
console.log(oneLineMergeSimilarItems([[1,3],[2,2]],[[7,1],[2,2],[1,4]])) // [[1,7],[2,4],[7,1]]

// Top voteds were all very bulky so decided to make a one liner */

// Number of Arithmetic Triplets          8/31/2022
/* 
// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
//    i < j < k,
//    nums[j] - nums[i] == diff, and
//    nums[k] - nums[j] == diff.

// Return the number of unique arithmetic triplets.

// Example 1:
//		 Input: nums = [0,1,4,6,7,10], diff = 3
//		 Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.

// Example 2:
//		 Input: nums = [4,5,6,7,8,9], diff = 2
//		 Output: 2
// Explanation:
// (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
// (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.

// Constraints:
//    3 <= nums.length <= 200
//    0 <= nums[i] <= 200
//    1 <= diff <= 50
//    nums is strictly increasing.

const arithmeticTriplets = (nums, diff) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (nums[j] - nums[i] === diff)
        for (let k = j + 1; k < nums.length; k++)
          if (nums[k] - nums[j] === diff) count++;
  return count;
};
console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)); // 2

// Good memory, ok runtime

const topVotedArithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (let num of nums) {
    if (nums.includes(num + diff) && nums.includes(num + diff * 2)) {
      count++;
    }
  }
  return count;
};

// Hah, nice */

// Largest Local Values in a Matrix          9/1/2022
/* 
// You are given an n x n integer matrix grid.

// Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:	maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.

// In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

// Return the generated matrix.

// Example 1:
//   https://assets.leetcode.com/uploads/2022/06/21/ex1.png
//		 Output: [[9,9],[8,6]]
// Explanation: The diagram above shows the original matrix and the generated matrix.
// Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.

// Example 2:
//   https://assets.leetcode.com/uploads/2022/07/02/ex2new2.png
//		 Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
//		 Output: [[2,2,2],[2,2,2],[2,2,2]]
// Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.

// Constraints:
//    n == grid.length == grid[i].length
//    3 <= n <= 100
//    1 <= grid[i][j] <= 100

const largestLocal = (grid) => {
  let ans = [];
  for (let i = 1; i < grid.length - 1; i++) {
    let row = [];
    for (let j = 1; j < grid.length - 1; j++) {
      row.push(
        Math.max(
          grid[i - 1][j - 1],
          grid[i - 1][j],
          grid[i - 1][j + 1],
          grid[i][j - 1],
          grid[i][j],
          grid[i][j + 1],
          grid[i + 1][j - 1],
          grid[i + 1][j],
          grid[i + 1][j + 1]
        )
      );
    }
    ans.push(row);
  }
  return ans;
};
// prettier-ignore
console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]])) // [[9,9],[8,6]]
// prettier-ignore
console.log(largestLocal([[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]])) // [[2,2,2],[2,2,2],[2,2,2]]

// pretty bulky Math.max, but works
// 90% runtime

const topVotedLargestLocal = function (grid, count = 2) {
  let n = grid.length;
  let arr = [];
  for (let i = 0; i < n - 1; i++) arr[i] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i][j] = Math.max(
        grid[i][j],
        Math.max(grid[i][j + 1], Math.max(grid[i + 1][j], grid[i + 1][j + 1]))
      );
    }
  }
  return --count == 0 ? arr : largestLocal(arr, count);
};

// Most top voteds were identical to mine except this one */

// Minimum Recolors to Get K Consecutive Black Blocks          9/2/2022
/* 
// You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the i^th block. The characters 'W' and 'B' denote the colors white and black, respectively.

// You are also given an integer k, which is the desired number of consecutive black blocks.

// In one operation, you can recolor a white block such that it becomes a black block.

// Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

// Example 1:
//		 Input: blocks = "WBBWWBBWBW", k = 7
//		 Output: 3
// Explanation:
// One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
// so that blocks = "BBBBBBBWBW".
// It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
// Therefore, we return 3.

// Example 2:
//		 Input: blocks = "WBWBBBW", k = 2
//		 Output: 0
// Explanation:
// No changes need to be made, since 2 consecutive black blocks already exist.
// Therefore, we return 0.

// Constraints:
//    n == blocks.length
//    1 <= n <= 100
//    blocks[i] is either 'W' or 'B'.
//    1 <= k <= n

const minimumRecolors = (blocks, k, count = 0) =>
  blocks.includes("B".repeat(k))
    ? count
    : minimumRecolors(blocks.replace("W", "B"), k, ++count);

console.log(minimumRecolors("WBBWWBBWBW", 7)); // 3
console.log(minimumRecolors("WBWBBBW", 2)); // 0

// Does not recolor optimally

const topVotedMinimumRecolors = function (blocks, k) {
  let min_count = Number.MAX_VALUE;
  for (let i = 0; i < blocks.length; i++) {
    let black_count = 0,
      count = 0;
    for (let j = i; j < blocks.length; j++) {
      if (blocks.charAt(j) == "B") black_count++;
      else {
        black_count++;
        count++;
      }
      if (black_count == k) {
        min_count = Math.min(min_count, count);
        break;
      }
    }
  }
  return min_count;
};

// min_count optimizes recolors but impacts runtime */

// Minimum Hours of Training to Win a Competition          9/3/2022
/* 
// You are entering a competition, and are given two positive integers initialEnergy and initialExperience denoting your initial energy and initial experience respectively.

// You are also given two 0-indexed integer arrays energy and experience, both of length n.

// You will face n opponents in order. The energy and experience of the i^th opponent is denoted by energy[i] and experience[i] respectively. When you face an opponent, you need to have both strictly greater experience and energy to defeat them and move to the next opponent if available.

// Defeating the i^th opponent increases your experience by experience[i], but decreases your energy by energy[i].

// Before starting the competition, you can train for some number of hours. After each hour of training, you can either choose to increase your initial experience by one, or increase your initial energy by one.

// Return the minimum number of training hours required to defeat all n opponents.

// Example 1:
//		 Input: initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1]
//		 Output: 8
// Explanation: You can increase your energy to 11 after 6 hours of training, and your experience to 5 after 2 hours of training.
// You face the opponents in the following order:
// - You have more energy and experience than the 0^th opponent so you win.
//   Your energy becomes 11 - 1 = 10, and your experience becomes 5 + 2 = 7.
// - You have more energy and experience than the 1^st opponent so you win.
//   Your energy becomes 10 - 4 = 6, and your experience becomes 7 + 6 = 13.
// - You have more energy and experience than the 2^nd opponent so you win.
//   Your energy becomes 6 - 3 = 3, and your experience becomes 13 + 3 = 16.
// - You have more energy and experience than the 3^rd opponent so you win.
//   Your energy becomes 3 - 2 = 1, and your experience becomes 16 + 1 = 17.
// You did a total of 6 + 2 = 8 hours of training before the competition, so we return 8.
// It can be proven that no smaller answer exists.

// Example 2:
//		 Input: initialEnergy = 2, initialExperience = 4, energy = [1], experience = [3]
//		 Output: 0
// Explanation: You do not need any additional energy or experience to win the competition, so we return 0.

// Constraints:
//    n == energy.length == experience.length
//    1 <= n <= 100
//    1 <= initialEnergy, initialExperience, energy[i], experience[i] <= 100

const minNumberOfHours = (iniEnergy, iniExp, energy, exp, hours = 0) => {
  const oppEnergy = energy.reduce((a, c) => (a += c));
  if (oppEnergy < iniEnergy) return hours;
  hours += oppEnergy - iniEnergy + 1;
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] >= iniExp) hours += exp[i] - iniExp + 1;

    iniExp += exp[i];
  }
  return hours;
};
console.log(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 2])); // 8
console.log(minNumberOfHours(2, 4, [1], [3])); // 0
console.log(minNumberOfHours(5, 3, [1, 4], [2, 5])); // 2
console.log(minNumberOfHours(1, 1, [1, 1, 1, 1], [1, 1, 1, 50])); // 51

// Bit of a bulky prompt
// Doesn't work for all test cases

// prettier-ignore
const topVotedMinNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
  let count = 0
  for (let i=0; i<energy.length; i++) {
      if (energy[i]>=initialEnergy) {
          count+=energy[i]-initialEnergy+1
          initialEnergy = 1
      } else {
          initialEnergy -= energy[i]
      } 
      if (experience[i]<initialExperience) {
          initialExperience += experience[i]
      } else {
          count+=experience[i]-initialExperience+1
          initialExperience += experience[i]+experience[i]-initialExperience+1       
      }
  }
  return count
};

// Not a fan of this question */

// Longest Subsequence With Limited Sum          9/4/2022
/* 
// You are given an integer array nums of length n, and an integer array queries of length m.

// Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
//		 Input: nums = [4,5,2,1], queries = [3,10,21]
//		 Output: [2,3,4]
// Explanation: We answer the queries as follows:
// - The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
// - The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
// - The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

// Example 2:
//		 Input: nums = [2,3,4,5], queries = [1]
//		 Output: [0]
// Explanation: The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.

// Constraints:
//    n == nums.length
//    m == queries.length
//    1 <= n, m <= 1000
//    1 <= nums[i], queries[i] <= 10^6

const topVotedAnswerQueries = (nums, queries) => {
  nums.sort((a, b) => a - b);
  let arr = [];
  for (let query of queries) {
    let count = 0,
      sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] <= query) {
        sum += nums[i];
        count++;
      }
    }
    arr.push(count);
  }
  return arr;
};
console.log(answerQueries([4, 5, 2, 1], [3, 10, 21])); // [2,3,4]
console.log(answerQueries([2, 3, 4, 5], [1])); // [0]

// No time today */

// Find Subarrays With Equal Sum          9/5/2022
/* 
// Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.

// Return true if these subarrays exist, and false otherwise.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
//		 Input: nums = [4,2,4]
//		 Output: true
// Explanation: The subarrays with elements [4,2] and [2,4] have the same sum of 6.

// Example 2:
//		 Input: nums = [1,2,3,4,5]
//		 Output: false
// Explanation: No two subarrays of size 2 have the same sum.

// Example 3:
//		 Input: nums = [0,0,0]
//		 Output: true
// Explanation: The subarrays [nums[0],nums[1]] and [nums[1],nums[2]] have the same sum of 0.
// Note that even though the subarrays have the same content, the two subarrays are considered different because they are in different positions in the original array.

// Constraints:
//    2 <= nums.length <= 1000
//    -10^9 <= nums[i] <= 10^9

const findSubarrays = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    const cur = nums[i] + nums[i + 1];
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[j] + nums[j + 1] === cur) return true;
    }
  }
  return false;
};
console.log(findSubarrays([4, 2, 4])); // true
console.log(findSubarrays([1, 2, 3, 4, 5])); // false
console.log(findSubarrays([0, 0, 0])); // true
console.log(findSubarrays([0, 0])); // false
console.log(findSubarrays([1, 2, 3, 1, 0, 2])); // false

// used for loop to return true asap

const topVotedFindSubarrays = function (nums) {
  const sums = new Set();
  for (let i = 0; i < nums.length; i++) {
    let tot = nums[i] + nums[i + 1];
    if (sums.has(tot)) return true;
    sums.add(tot);
  }
  return false;
};

// Nice */

// Check Distances Between Same Letters          9/6/2022
/* 
// You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. You are also given a 0-indexed integer array distance of length 26.

// Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).

// In a well-spaced string, the number of letters between the two occurrences of the i^th letter is distance[i]. If the i^th letter does not appear in s, then distance[i] can be ignored.

// Return true if s is a well-spaced string, otherwise return false.

// Example 1:
//		 Input: s = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//		 Output: true
// Explanation:
// - 'a' appears at indices 0 and 2 so it satisfies distance[0] = 1.
// - 'b' appears at indices 1 and 5 so it satisfies distance[1] = 3.
// - 'c' appears at indices 3 and 4 so it satisfies distance[2] = 0.
// Note that distance[3] = 5, but since 'd' does not appear in s, it can be ignored.
// Return true because s is a well-spaced string.

// Example 2:
//		 Input: s = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//		 Output: false
// Explanation:
// - 'a' appears at indices 0 and 1 so there are zero letters between them.
// Because distance[0] = 1, s is not a well-spaced string.

// Constraints:
//    2 <= s.length <= 52
//    s consists only of lowercase English letters.
//    Each letter appears in s exactly twice.
//    distance.length == 26
//    0 <= distance[i] <= 50

const checkDistances = (s, distance) => {
  for (let c of new Set(s))
    if (s.lastIndexOf(c) - s.indexOf(c) - 1 !== distance[c.charCodeAt(0) - 97])
      return false;
  return true;
};
// prettier-ignore
console.log(checkDistances("abaccb",[1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])) // true
// prettier-ignore
console.log(checkDistances("aa",[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])) // false

// pretty concise

const topVotedCheckDistances = function (s, distance) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      const diff = i - map[s[i]] - 1;
      const charCode = s[i].charCodeAt() - 97;
      if (distance[charCode] !== diff) {
        return false;
      }
    } else {
      map[s[i]] = i;
    }
  }
  return true;
};

// Bit bulkier, but works */

// Longest Substring Without Repeating Characters          9/7/2022
/* 
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
//		 Input: s = "abcabcbb"
//		 Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
//		 Input: s = "bbbbb"
//		 Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
//		 Input: s = "pwwkew"
//		 Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
//    0 <= s.length <= 5 * 10^4
//    s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = (s) => {
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    let cur = [];
    for (let j = i; j < s.length; j++) {
      if (cur.includes(s[j])) break;
      cur.push(s[j]);
    }
    if (cur.length > ans.length) ans = cur;
  }
  return ans.length;
};
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3

// Terrible runtime

const topVotedLengthOfLongestSubstring = (s) => {
  const map = {};
  var left = 0;

  return s.split("").reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
};

// Very nice! */

// Longest Palindromic Substring          9/8/2022
/* 
// Given a string s, return the longest palindromic substring in s.

// Example 1:
//		 Input: s = "babad"
//		 Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
//		 Input: s = "cbbd"
//		 Output: "bb"

// Constraints:
//    1 <= s.length <= 1000
//    s consist of only digits and English letters.

const longestPalindrome = (s) => {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let cur = s.slice(i, j);
      if (cur === [...cur].reverse().join("") && cur.length > ans.length)
        ans = cur;
    }
  }
  return ans;
};
console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"

// Exceeds Leetcode's runtime limit
// I'd have to avoid the nested for loop or find a better way of testing for palindromes

const topVotedLongestPalindrome = (s) => {
  let ll = 0,
    rr = 0;

  for (let i = 0; i < s.length; i++)
    for (let j of [i, i + 1])
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
        [ll, rr] = r - l + 1 > rr - ll + 1 ? [l, r] : [ll, rr];

  return s.substring(ll, rr + 1);
};

// Not very readable but works */

// Zigzag Conversion          9/9/2022
/* 
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:string convert(string s, int numRows);

// Example 1:
//		 Input: s = "PAYPALISHIRING", numRows = 3
//		 Output: "PAHNAPLSIIGYIR"

// Example 2:
//		 Input: s = "PAYPALISHIRING", numRows = 4
//		 Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
//		 Input: s = "A", numRows = 1
//		 Output: "A"

// Constraints:
//    1 <= s.length <= 1000
//    s consists of English letters (lower-case and upper-case), ',' and '.'.
//    1 <= numRows <= 1000

const convert = (s, numRows) => {
  let rows = [];
  for (let i = 0; i < s.length; i += numRows + ~~(numRows / 2)) {
    let zig = [...s.slice(i, i + numRows)];
    let zag = [...s.slice(i + numRows, i + numRows + ~~(numRows / 2))];
    console.log(zig, zag);
    // for (let j = 0; j < numRows; j++) {
    //   rows[j] = rows[j] ? [...rows[j], zig.shift()] : zig.shift();
    //   console.log(rows[j]);
    //   if (j > 0 || j < numRows - 1) rows[j] = [...rows[j], zag.pop()];
    // }
  }
  return "?";
};
console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"

// Felt like I was on to something, but couldn't get the last part working

const topVotedConvert = (s, numRows) => {
  // return original string if can't zigzag
  if (numRows === 1 || s.length < numRows) return s;

  let rows = [];
  let converted = "";
  let reverse = false;
  let count = 0;

  // prepare rows
  for (let i = 0; i < numRows; i++) rows[i] = [];

  // reverse the push flow when reaching turning points
  for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if (count === numRows - 1 || count === 0) reverse = !reverse;
  }

  // put together converted string
  return rows.reduce((converted, cur) => converted + cur.join(""), "");
};

// Hmm, great use of reverse boolean here */

// String to Integer (atoi)          9/10/2022
/* 
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.

// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.

// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.

// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).

// If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.

// Return the integer as the final result.

// Note:	Only the space character ' ' is considered a whitespace character.	Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// Example 1:
//		 Input: s = "42"
//		 Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// The parsed integer is 42.
// Since 42 is in the range [-2^31, 2^31 - 1], the final result is 42.

// Example 2:
//		 Input: s = "   -42"
//		 Output: -42
// Explanation:
// Step 1: "   -42" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -42" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -42" ("42" is read in)
//                ^
// The parsed integer is -42.
// Since -42 is in the range [-2^31, 2^31 - 1], the final result is -42.

// Example 3:
//		 Input: s = "4193 with words"
//		 Output: 4193
// Explanation:
// Step 1: "4193 with words" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
//              ^
// The parsed integer is 4193.
// Since 4193 is in the range [-2^31, 2^31 - 1], the final result is 4193.

// Constraints:
//    0 <= s.length <= 200
//    s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

const topVotedMyAtoi = (str) =>
  Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);

console.log(topVotedMyAtoi("42")); // 42
console.log(topVotedMyAtoi("   -42")); // -42
console.log(topVotedMyAtoi("4193 with words")); // 4193

// No time today
// First time seeing parseInt, very useful for this case */

// Container With Most Water          9/11/2022
/* 
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the i^th line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
//   https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
//		 Input: height = [1,8,6,2,5,4,8,3,7]
//		 Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
//		 Input: height = [1,1]
//		 Output: 1

// Constraints:
//    n == height.length
//    2 <= n <= 10^5
//    0 <= height[i] <= 10^4

const maxArea = (height) => {
  let max = 0;
  for (let i = 0; i < height.length; i++)
    for (let j = i + 1; j < height.length; j++)
      max = Math.max(Math.min(height[i], height[j]) * (j - i), max);
  return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1

// Exceeds Leetcode's max runtime
// Medium difficulty questions require a more optimal soluion than nested for loops

const topVotedMaxArea = (H) => {
  let ans = 0,
    i = 0,
    j = H.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i));
    H[i] <= H[j] ? i++ : j--;
  }
  return ans;
};

// Smart to work in from left and right */

// Integer to Roman          9/12/2022
/* 
// Roman numerals are represented by seven different symbols:I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example,2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given an integer, convert it to a roman numeral.

// Example 1:
//		 Input: num = 3
//		 Output: "III"
// Explanation: 3 is represented as 3 ones.

// Example 2:
//		 Input: num = 58
//		 Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Example 3:
//		 Input: num = 1994
//		 Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
//    1 <= num <= 3999

const intToRoman = (num, ans = "") => {
  if (num > 0) {
    if (num >= 1000) return intToRoman(num - 1000, `${ans}M`);
    else if (num >= 900) return intToRoman(num - 900, `${ans}CM`);
    else if (num >= 500) return intToRoman(num - 500, `${ans}D`);
    else if (num >= 400) return intToRoman(num - 400, `${ans}CD`);
    else if (num >= 100) return intToRoman(num - 100, `${ans}C`);
    else if (num >= 90) return intToRoman(num - 90, `${ans}XC`);
    else if (num >= 50) return intToRoman(num - 50, `${ans}L`);
    else if (num >= 40) return intToRoman(num - 40, `${ans}XL`);
    else if (num >= 10) return intToRoman(num - 10, `${ans}X`);
    else if (num >= 9) return intToRoman(num - 9, `${ans}IX`);
    else if (num >= 5) return intToRoman(num - 5, `${ans}V`);
    else if (num >= 4) return intToRoman(num - 4, `${ans}IV`);
    else if (num >= 1) return intToRoman(--num, `${ans}I`);
  }
  return ans;
};
console.log(intToRoman(3)); // "III"
console.log(intToRoman(58)); // "LVIII"
console.log(intToRoman(1994)); // "MCMXCIV"
console.log(intToRoman(1000)); // "M"

// Disgusting block of if/elses and return statement
// Better than 100% of submissions runtimes

const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// prettier-ignore
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
const topVotedIntToRoman = (N) => {
  let ans = "";
  for (let i = 0; N; i++) while (N >= val[i]) (ans += rom[i]), (N -= val[i]);
  return ans;
};

// Much more concise */

// 3Sum          9/13/2022
/* 
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
//		 Input: nums = [-1,0,1,2,-1,-4]
//		 Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
//		 Input: nums = [0,1,1]
//		 Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
//		 Input: nums = [0,0,0]
//		 Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
//    3 <= nums.length <= 3000
//    -10^5 <= nums[i] <= 10^5

const threeSum = (nums) => {
  let [acc, ans] = [{}, []];
  if (nums.length < 3) return ans;

  for (let i = 0; i < nums.length - 2; i++)
    for (let j = i + 1; j < nums.length - 1; j++)
      if (
        nums.slice(j + 1).includes(-(nums[i] + nums[j])) &&
        !acc[
          [nums[i], nums[j], -(nums[i] + nums[j])]
            .sort((a, b) => a - b)
            .join("")
        ]
      ) {
        ans.push([nums[i], nums[j], -(nums[i] + nums[j])]);
        acc[ans[ans.length - 1].sort((a, b) => a - b).join("")] = true;
      }

  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]

// Exceeds runtime limit
// Pretty nasty if statement here

const topVotedThreeSum = (nums) => {
  const results = [];

  if (nums.length < 3) return results;
  nums = nums.sort((a, b) => a - b);
  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < target) j++;
      else k--;
    }
  }

  return results;
};

// Amazing explanation:
// https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments! */

// 3Sum Closest          9/14/2022
/* 
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
//		 Input: nums = [-1,2,1,-4], target = 1
//		 Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:
//		 Input: nums = [0,0,0], target = 1
//		 Output: 0

// Constraints:
//    3 <= nums.length <= 1000
//    -1000 <= nums[i] <= 1000
//    -10^4 <= target <= 10^4

const topVotedThreeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      let localSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(localSum - target) < Math.abs(closest - target))
        closest = localSum;
      if (localSum > target) right--;
      else left++;
    }
  }
  return closest;
};
console.log(topVotedThreeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(topVotedThreeSumClosest([0, 0, 0], 1)); // 0

// Couldn't get it going so decided to look at top voted submission

// Based on yesterday and today's challenges, 3Sum problems must always be solved with a left and right pointer that are reset for every increment of i */

// Letter Combinations of a Phone Number          9/15/2022
/* 
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png"

// Example 1:
//		 Input: digits = "23"
//		 Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
//		 Input: digits = ""
//		 Output: []

// Example 3:
//		 Input: digits = "2"
//		 Output: ["a","b","c"]

// Constraints:
//    0 <= digits.length <= 4
//    digits[i] is a digit in the range ['2', '9'].

const topVotedLetterCombinations = (digits) => {
  if (digits == null || digits.length === 0) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];
  const go = (i, s) => {
    if (i === digits.length) {
      res.push(s);
      return;
    }
    for (const c of map[digits[i]]) {
      go(i + 1, s + c);
    }
  };

  go(0, "");
  return res;
};
console.log(topVotedLetterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(topVotedLetterCombinations("")); // []
console.log(topVotedLetterCombinations("2")); // ["a","b","c"]

// Knew I wanted this approach but could not figure it out */

// 4Sum          9/16/2022
/* 
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:	0 <= a, b, c, d< n	a, b, c, and d are distinct.	nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
//		 Input: nums = [1,0,-1,0,-2,2], target = 0
//		 Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
//		 Input: nums = [2,2,2,2,2], target = 8
//		 Output: [[2,2,2,2]]

// Constraints:
//    1 <= nums.length <= 200
//    -10^9 <= nums[i] <= 10^9
//    -10^9 <= target <= 10^9

const fourSum = (nums, target) => {
  const ans = [];
  if (nums.length < 4) return ans;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (nums[j] > target) break;
      if (j > 0 && nums[j] === nums[j - 2]) continue;

      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[k], nums[l]]);
          while (nums[k] === nums[k + 1]) k++;
          while (nums[l] === nums[l - 1]) l--;
          k++;
          l--;
        } else if (sum < target) k++;
        else l--;
      }
    }
  }
  return ans;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2, 2, 2, 2, 2], 8)); // [[2,2,2,2]]

// Inspired by the 3Sum solution
// Doesn't work for all test cases

const topVotedFourSum = (nums, target) => {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let low = j + 1;
      let high = nums.length - 1;

      while (low < high) {
        const sum = nums[i] + nums[j] + nums[low] + nums[high];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[low], nums[high]]);
          while (nums[low] === nums[low + 1]) low++;
          while (nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (sum < target) {
          low++;
        } else {
          high--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};

// So close
// Seems I was missing the last two while loops and had to remove some if statements */

// Generate Parentheses          9/17/2022
/* 
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
//		 Input: n = 3
//		 Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
//		 Input: n = 1
//		 Output: ["()"]

// Constraints:
//    1 <= n <= 8

const topVotedGenerateParenthesis = (n) => {
  const res = [];

  const go = (l, r, s) => {
    console.log(l, r, s);

    if (s.length === 2 * n) {
      res.push(s);
      return;
    }

    if (l < n) go(l + 1, r, s + "(");
    if (r < l) go(l, r + 1, s + ")");
  };

  go(0, 0, "");
  return res;
};
console.log(topVotedGenerateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(topVotedGenerateParenthesis(1)); // ["()"]

// Second time seeing the use of a 'go' function
// I added the 'console.log' to help visualize what's going on here

// To my understanding, we're starting with 'l' and getting one iteration out before incrementing 'r' and finding the next possible bracket combination
// Rinse and repeat */

// Fruit Into Baskets          9/18/2022
/* 
// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the i^th tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:	You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.	Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.	Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:
//		 Input: fruits = [1,2,1]
//		 Output: 3
// Explanation: We can pick from all 3 trees.

// Example 2:
//		 Input: fruits = [0,1,2,2]
//		 Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].

// Example 3:
//		 Input: fruits = [1,2,3,2,2]
//		 Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].

// Constraints:
//    1 <= fruits.length <= 10^5
//    0 <= fruits[i] < fruits.length

const totalFruit = (fruits) => {
  let max = 0;
  for (let i = 0; i < fruits.length; i++) {
    let [cur, seen] = [0, []];
    for (let j = i; j < fruits.length; j++) {
      if (!seen.includes(fruits[j])) seen.push(fruits[j]);
      if (seen.length > 2) break;
      cur++;
    }
    max = Math.max(max, cur);
  }
  return max;
};
console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
console.log(totalFruit([1, 2, 3, 2, 2])); // 4
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5

// Works, but exceeds max runtime

const topVotedTotalFruit = function (fruits) {
  let max = 0,
    l = 0,
    size = 0,
    map = {};
  fruits.forEach((fruit, i) => {
    map[fruit] ? map[fruit]++ : ((map[fruit] = 1), size++);
    while (size > 2) {
      const tail = fruits[l];
      if (--map[tail] === 0) delete map[tail], size--;
      l++;
    }
    max = Math.max(max, i - l + 1);
  });
  return max;
};

// "Actual Problem Statement: Return the length of the longest contiguous subarray with no more than two distinct characters"

// I don't get it

// First time seeing 'delete' for an object tho */

// Partition to K Equal Sum Subsets          9/19/2022
/* 
// Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

// Example 1:
//		 Input: nums = [4,3,2,3,5,2,1], k = 4
//		 Output: true
// Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

// Example 2:
//		 Input: nums = [1,2,3,4], k = 3
//		 Output: false

// Constraints:
//    1 <= k <= nums.length <= 16
//    1 <= nums[i] <= 10^4
//    The frequency of each element is in the range [1, 4].

const topVotedCanPartitionKSubsets = (nums, k) => {
  const total = nums.reduce((a, c) => a + c, 0);
  if (total % k != 0) return false;

  const subset = total / k;
  const memo = new Map();

  function partition(idx, sum, count) {
    if (count === k - 1) return true;

    const key = nums.join();
    if (memo.has(key)) return false;

    if (sum === subset) return partition(0, 0, count + 1);
    if (sum > subset) return false;

    for (let i = idx; i < nums.length; i++) {
      if (nums[i] === null) continue;
      const num = nums[i];
      nums[i] = null;
      if (partition(i + 1, sum + num, count)) return true;
      nums[i] = num;
    }
    memo.set(key, false);
    return false;
  }
  return partition(0, 0, 0);
};
console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)); // true
console.log(canPartitionKSubsets([1, 2, 3, 4], 3)); // false

// I need to learn backtracking

// "Backtracking is a strategy used to find and build a solution incrementally. We start with a possible move and we try to solve the problem with the selected move. If it does not work, we backtrack and then we select another move and so on until we have the problem solved."

// I think I'll reattempt some of my previous medium difficulty problems until I feel confident */

// Search in Rotated Sorted Array          9/20/2022
/* 
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
//		 Input: nums = [4,5,6,7,0,1,2], target = 0
//		 Output: 4

// Example 2:
//		 Input: nums = [4,5,6,7,0,1,2], target = 3
//		 Output: -1

// Example 3:
//		 Input: nums = [1], target = 0
//		 Output: -1

// Constraints:
//    1 <= nums.length <= 5000
//    -10^4 <= nums[i] <= 10^4
//    All values of nums are unique.
//    nums is an ascending array that is possibly rotated.
//    -10^4 <= target <= 10^4

const search = (nums, target) => nums.indexOf(target);

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1

// Definitely didn't respect the O(log n) runtime complexity here

const topVotedSearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // When dividing the roated array into two halves, one must be sorted.

    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;
      } else {
        // target is in the right
        left = mid + 1;
      }
    }

    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;
      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }

  return -1;
}; */

// Most Frequent Even Element          9/21/2022
/* 
// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

// Example 1:
//		 Input: nums = [0,1,2,2,4,4,1]
//		 Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.

// Example 2:
//		 Input: nums = [4,4,4,9,2,4]
//		 Output: 4
// Explanation: 4 is the even element appears the most.

// Example 3:
//		 Input: nums = [29,47,21,41,13,37,25,7]
//		 Output: -1
// Explanation: There is no even element.

// Constraints:
//    1 <= nums.length <= 2000
//    0 <= nums[i] <= 10^5

const mostFrequentEven = (nums) => {
  const even = nums.filter((x) => x % 2 === 0);
  return even.length > 0
    ? +[
        ...Object.entries(
          even.reduce((a, c) => {
            a[c] ? a[c]++ : (a[c] = 1);
            return a;
          }, {})
        ),
      ].sort((a, b) => b[1] - a[1])[0][0]
    : -1;
};
console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])); // 2
console.log(mostFrequentEven([4, 4, 4, 9, 2, 4])); // 4
console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])); // -1

// What a monstrosity

const topVotedMostFrequentEven = function (nums) {
  let evenNumMap = new Map();
  let max = 0;

  for (let num of nums) {
    if (!evenNumMap.has(num) && num % 2 === 0) {
      evenNumMap.set(num, 1);
    } else if (evenNumMap.has(num) && num % 2 === 0) {
      evenNumMap.set(num, evenNumMap.get(num) + 1);
    }

    if (evenNumMap.get(num) > max) max = evenNumMap.get(num);
  }

  let smallestMaxKey = Infinity;

  for (let [num, count] of evenNumMap) {
    if (count === max && num < smallestMaxKey) smallestMaxKey = num;
  }

  return smallestMaxKey === Infinity ? -1 : smallestMaxKey;
};

// Also very bulky */

// Count Days Spent Together          9/22/2022
/* 
// Alice and Bob are traveling to Rome for separate business meetings.

// You are given 4 strings arriveAlice, leaveAlice, arriveBob, and leaveBob. Alice will be in the city from the dates arriveAlice to leaveAlice (inclusive), while Bob will be in the city from the dates arriveBob to leaveBob (inclusive). Each will be a 5-character string in the format "MM-DD", corresponding to the month and day of the date.

// Return the total number of days that Alice and Bob are in Rome together.

// You can assume that all dates occur in the same calendar year, which is not a leap year. Note that the number of days per month can be represented as: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].

// Example 1:
//		 Input: arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
//		 Output: 3
// Explanation: Alice will be in Rome from August 15 to August 18. Bob will be in Rome from August 16 to August 19. They are both in Rome together on August 16th, 17th, and 18th, so the answer is 3.

// Example 2:
//		 Input: arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
//		 Output: 0
// Explanation: There is no day when Alice and Bob are in Rome together, so we return 0.

// Constraints:
//    All dates are provided in the format "MM-DD".
//    Alice and Bob's arrival dates are earlier than or equal to their leaving dates.
//    The given dates are valid dates of a non-leap year.

// prettier-ignore
const topVotedCountDaysTogether = (arriveAlice, leaveAlice, arriveBob, leaveBob) => {
  const arriveAliceDate = new Date("2001-" + arriveAlice);
  const leaveAliceDate = new Date("2001-" + leaveAlice);
  const arriveBobDate = new Date("2001-" + arriveBob);
  const leaveBobDate = new Date("2001-" + leaveBob);

  let arriveMax = new Date(Math.max(arriveAliceDate, arriveBobDate));
  let leaveMin = new Date(Math.min(leaveAliceDate, leaveBobDate));

  if (arriveMax > leaveMin) return 0;
  return Math.floor((leaveMin - arriveMax) / (1000 * 60 * 60 * 24)) + 1;
};
console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19")); // 3
console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31")); // 0

// No time today

// Tried shortly without using Date object and was proving to be overly complicated */

// Smallest Even Multiple          9/23/2022
/* 
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

// Example 1:
//		 Input: n = 5
//		 Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.

// Example 2:
//		 Input: n = 6
//		 Output: 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

// Constraints:
//    1 <= n <= 150

const smallestEvenMultiple = (n) => (n % 2 ? 2 * n : n);

console.log(smallestEvenMultiple(5)); // 10
console.log(smallestEvenMultiple(6)); // 6

// Same as top voted */

// Minimum Time Visiting All Points          9/24/2022
/* 
// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:	In 1 second, you can either:			move vertically by oneunit,		move horizontally by one unit, or		move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).			You have to visit the points in the same order as they appear in the array.	You are allowed to pass through points that appear later in the order, but these do not count as visits.

// Example 1:
//   https://assets.leetcode.com/uploads/2019/11/14/1626_example_1.PNG
//		 Input: points = [[1,1],[3,4],[-1,0]]
//		 Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
// Time from [1,1] to [3,4] = 3 seconds
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

// Example 2:
//		 Input: points = [[3,2],[-2,2]]
//		 Output: 5

// Constraints:
//    points.length == n
//    1 <= n<= 100
//    points[i].length == 2
//    -1000<= points[i][0], points[i][1]<= 1000

const minTimeToVisitAllPoints = (p) => {
  let count = 0;
  for (let i = 0; i < p.length - 1; i++)
    count += Math.max(
      Math.abs(p[i][0] - p[i + 1][0]),
      Math.abs(p[i][1] - p[i + 1][1])
    );
  return count;
};
// prettier-ignore
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])) // 7
// prettier-ignore
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]])) // 5

// same as top voted */

// Binary Prefix Divisible By 5          9/25/2022
/* 
// You are given a binary array nums (0-indexed).

// We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).	For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.

// Return an array of booleans answer where answer[i] is true if xi is divisible by 5.

// Example 1:
//		 Input: nums = [0,1,1]
//		 Output: [true,false,false]
// Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
// Only the first number is divisible by 5, so answer[0] is true.

// Example 2:
//		 Input: nums = [1,1,1]
//		 Output: [false,false,false]

// Constraints:
//    1 <= nums.length <= 10^5
//    nums[i] is either 0 or 1.

const prefixesDivBy5 = (nums, acc = "") =>
  nums.map((c) => parseInt(acc + c, 2) % 5 === 0);

console.log(prefixesDivBy5([0, 1, 1])); // [true,false,false]
console.log(prefixesDivBy5([1, 1, 1])); // [false,false,false]

// Doesn't work for all test cases

const prefixesDivBy5 = (A, acc = 0) => A.map((d) => !(acc = (acc * 2 + d) % 5));

// * 2 instead of parseInt is nice */

// Goat Latin          9/26/2022
/* 
// You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:	If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.			For example, the word "apple" becomes "applema".			If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".			For example, the word "goat" becomes "oatgma".			Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.			For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.

// Return the final sentence representing the conversion from sentence to Goat Latin.

// Example 1:
//		 Input: sentence = "I speak Goat Latin"
//		 Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

// Example 2:
//		 Input: sentence = "The quick brown fox jumped over the lazy dog"
//		 Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

// Constraints:
//    1 <= sentence.length <= 150
//    sentence consists of English letters and spaces.
//    sentence has no leading or trailing spaces.
//    All the words in sentence are separated by a single space.

const vowels = ["a", "e", "i", "o", "u"];
const toGoatLatin = (sentence) =>
  sentence.split(" ").reduce((a, c, i, arr) => {
    const ma = "maa" + "a".repeat(i);
    if (vowels.includes(c[0].toLowerCase())) c += ma;
    else {
      c = [...c];
      const first = c.shift();
      c = c.join("") + first + ma;
    }
    return `${i === 0 ? c : a + " " + c}`;
  }, "");

console.log(toGoatLatin("I speak Goat Latin")); // "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog")); // "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

// Bad runtime, but works

const topVotedToGoatLatin = function (S) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  return S.split(" ")
    .map((w, i) =>
      vowels.has(w[0])
        ? w + "ma" + "a".repeat(i + 1)
        : w.slice(1) + w[0] + "ma" + "a".repeat(i + 1)
    )
    .join(" ");
};

// Pretty much identical logic */

// Buddy Strings          9/27/2022
/* 
// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].	For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:
//		 Input: s = "ab", goal = "ba"
//		 Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

// Example 2:
//		 Input: s = "ab", goal = "ab"
//		 Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

// Example 3:
//		 Input: s = "aa", goal = "aa"
//		 Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

// Constraints:
//    1 <= s.length, goal.length <= 2 * 10^4
//    s and goal consist of lowercase letters.

const buddyStrings = (s, goal) => {
  const count = (w) =>
    [...w].reduce((a, c) => {
      a[c] ? a[c]++ : (a[c] = 1);
      return a;
    }, {});
  let acc = 0;
  const goals = count(goal);
  for (let c of Object.entries(count(s))) {
    if (!goals[c[0]]) return false;
    if (goals[c[0]] === c[1]) continue;
    goals[c] < c[1] ? acc-- : acc++;
  }
  return s === goal
    ? Object.values(goals).filter((x) => x >= 2).length >= 1
    : acc === 0;
};
console.log(buddyStrings("ab", "ba")); // true
console.log(buddyStrings("ab", "ab")); // false
console.log(buddyStrings("aa", "aa")); // true

// I don't know

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

// Makes so much sense
// I was stuck on a train of thought and couldn't see an alternative */

// Binary Gap          9/28/2022
/* 
// Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

// Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.

// Example 1:
//		 Input: n = 22
//		 Output: 2
// Explanation: 22 in binary is "10110".
// The first adjacent pair of 1's is "10110" with a distance of 2.
// The second adjacent pair of 1's is "10110" with a distance of 1.
// The answer is the largest of these two distances, which is 2.
// Note that "10110" is not a valid pair since there is a 1 separating the two 1's underlined.

// Example 2:
//		 Input: n = 8
//		 Output: 0
// Explanation: 8 in binary is "1000".
// There are not any adjacent pairs of 1's in the binary representation of 8, so we return 0.

// Example 3:
//		 Input: n = 5
//		 Output: 2
// Explanation: 5 in binary is "101".

// Constraints:
//    1 <= n <= 10^9

const binaryGap = (n, cur = 1) => {
  const b = n.toString(2);
  const arr = [...b.substring(0, b.lastIndexOf("1") + 1)];
  if (arr.length < 2) return 0;
  return arr.reduce((a, c) => {
    cur = c == 1 ? 1 : cur + 1;
    return Math.max(a, cur);
  }, 0);
};
console.log(binaryGap(22)); // 2
console.log(binaryGap(8)); // 0
console.log(binaryGap(5)); // 2

// Decent

const topVotedBinaryGap = (N) =>
  Math.max(
    0,
    ...N.toString(2)
      .split("1")
      .slice(1, -1)
      .map((gap) => gap.length + 1)
  );

// Love a good one-liner */

// Sort the People          9/29/2022
/* 
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the i^th person.

// Return names sorted in descending order by the people's heights.

// Example 1:
//		 Input: names = ["Mary","John","Emma"], heights = [180,165,170]
//		 Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

// Example 2:
//		 Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
//		 Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

// Constraints:
//    n == names.length == heights.length
//    1 <= n <= 10^3
//    1 <= names[i].length <= 20
//    1 <= heights[i] <= 10^5
//    names[i] consists of lower and upper case English letters.
//    All the values of heights are distinct.

const sortPeople = (names, heights, i = 0) =>
  names.sort((a, b) => {
    i++;
    return i < heights.length
      ? heights[i - 1] - heights[i]
      : heights[i - 2] - heights[i - 1];
  });

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); // ["Mary","Emma","John"]
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); // ["Bob","Alice","Bob"]

// Doesn't work for all test cases

const topVotedSortPeople = function (names, heights) {
  return names
    .map((e, i) => e + heights[i])
    .sort((a, b) => b.match(/\d+/) - a.match(/\d+/))
    .join(" ")
    .replace(/[0-9]/g, "")
    .split(" ");
};

// Thought about joining names to height, sorting, then wiping heights, but felt too heavy
// Great example of that though

const revisedSortPeople = (names, heights) =>
  names
    .map((c, i) => [c, heights[i]])
    .sort((a, b) => b[1] - a[1])
    .map((c) => c[0]); */

// Set Mismatch          9/30/2022
/* 
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:
//		 Input: nums = [1,2,2,4]
//		 Output: [2,3]

// Example 2:
//		 Input: nums = [1,1]
//		 Output: [1,2]

// Constraints:
//    2 <= nums.length <= 10^4
//    1 <= nums[i] <= 10^4

const findErrorNums = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return [nums[i], i + 1];
  }
};
console.log(findErrorNums([1, 2, 2, 4])); // [2,3]
console.log(findErrorNums([1, 1])); // [1,2]
console.log(findErrorNums([3, 2, 2])); // [2,1]

// Doesn't take into consideration decreasing array

const topVotedFindErrorNums = (nums) => {
  let N = nums.length,
    ans = [,];
  for (let i = 0; i < N; i++) nums[(nums[i] - 1) % 10000] += 10000;
  for (let i = 0; i < N; i++)
    if (nums[i] > 20000) ans[0] = i + 1;
    else if (nums[i] < 10001) ans[1] = i + 1;
  return ans;
}; */

// Find First and Last Position of Element in Sorted Array          10/1/2022
/* 
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You mustwrite an algorithm with O(log n) runtime complexity.

// Example 1:
//		 Input: nums = [5,7,7,8,8,10], target = 8
//		 Output: [3,4]

// Example 2:
//		 Input: nums = [5,7,7,8,8,10], target = 6
//		 Output: [-1,-1]

// Example 3:
//		 Input: nums = [], target = 0
//		 Output: [-1,-1]

// Constraints:
//    0 <= nums.length <= 10^5
//    -10^9<= nums[i]<= 10^9
//    nums is a non-decreasing array.
//    -10^9<= target<= 10^9

const searchRange = (nums, target) => [
  nums.indexOf(target),
  nums.lastIndexOf(target),
];

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
console.log(searchRange([], 0)); // [-1,-1]

// Not respecting O(log n) runtime complexity

const topVotedsearchRange = function (N, T) {
  const find = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  };
  let Tleft = find(T, N);
  if (N[Tleft] !== T) return [-1, -1];
  return [Tleft, find(T + 1, N, Tleft) - 1];
}; */

// Remove Letter To Equalize Frequency          10/2/2022
/* 
// You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

// Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

// Note:	The frequency of a letter x is the number of times it occurs in the string.	You must remove exactly one letter and cannot chose to do nothing.

// Example 1:
//		 Input: word = "abcc"
//		 Output: true
// Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.

// Example 2:
//		 Input: word = "aazz"
//		 Output: false
// Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.

// Constraints:
//    2 <= word.length <= 100
//    word consists of lowercase English letters only.

const equalFrequency = (word) => {
  for (let i = 0; i < word.length; i++) {
    const cur = word.slice(0, i) + word.slice(i + 1);
    const count = Object.values(
      [...cur].reduce((a, c) => {
        a[c] ? a[c]++ : (a[c] = 1);
        return a;
      }, {})
    );
    if (count.length === 1) return true;
    for (let j = 1; j < count.length; j++) {
      if (count[j] !== count[j - 1]) break;
      if (j === count.length - 1) return true;
    }
  }
  return false;
};
console.log(equalFrequency("abcc")); // true
console.log(equalFrequency("aazz")); // false
console.log(equalFrequency("bac")); // true
console.log(equalFrequency("abbcc")); // true
console.log(equalFrequency("zz")); // true

// Bit of a cluster but 100% runtime and memory
// Felt bulky, but all top voted submissions are as well */

// Number of Common Factors          10/3/2022
/* 
// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

// Example 1:
//		 Input: a = 12, b = 6
//		 Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

// Example 2:
//		 Input: a = 25, b = 30
//		 Output: 2
// Explanation: The common factors of 25 and 30 are 1, 5.

// Constraints:
//    1 <= a, b <= 1000

const commonFactors = (a, b) => {
  let count = 1;
  for (let i = 2; i < Math.min(a, b) + 1; i++)
    if (a % i === 0 && b % i === 0) count++;
  return count;
};
console.log(commonFactors(12, 6)); // 4
console.log(commonFactors(25, 30)); // 2

// Pretty basic
// Surely there's a math solution to this

const topVotedCommonFactors = (a, b) =>
  new Array(Math.min(a, b) + 1)
    .fill(0)
    .reduce((total, _, i) => total + (a % i == 0 && b % i == 0), 0); */

// Missing Ranges          10/4/2022
/* 
// You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

// Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

// Each range [a,b] in the list should be output as:	"a->b" if a != b	"a" if a == b

// Example 1:
//		 Input: nums = [0,1,3,50,75], lower = 0, upper = 99
//		 Output: ["2","4->49","51->74","76->99"]
// Explanation: The ranges are:
// [2,2] --> "2"
// [4,49] --> "4->49"
// [51,74] --> "51->74"
// [76,99] --> "76->99"

// Example 2:
//		 Input: nums = [-1], lower = -1, upper = -1
//		 Output: []
// Explanation: There are no missing ranges since there are no missing numbers.

// Constraints:
//    -10^9 <= lower <= upper <= 10^9
//    0 <= nums.length <= 100
//    lower <= nums[i] <= upper
//    All the values of nums are unique.

const findMissingRanges = (nums, lower, upper) => {
  let ans = [];
  nums.unshift(lower), nums.push(upper);
  for (let i = 1; i < nums.length; i++) {
    const dif = nums[i] - nums[i - 1] - 1;
    if (dif > 0) {
      dif === 1
        ? ans.push(`${nums[i - 1] + dif}`)
        : ans.push(
            `${nums[i - 1] + 1}->${nums[i] - (i == nums.length - 1 ? 0 : 1)}`
          );
    }
  }
  return ans;
};
console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99)); // ["2","4->49","51->74","76->99"]
console.log(findMissingRanges([-1], -1, -1)); // []

// Doesn't work for all test cases

function topVotedMindMissingRanges(nums, lower, upper) {
  const res = [];
  nums = [lower - 1, ...nums, upper + 1];

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];

    if (diff === 2) {
      res.push(`${nums[i - 1] + 1}`);
    } else if (diff > 2) {
      res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }

  return res;
}

// Faster than 99%
// Similar logic */

// Shortest Word Distance          10/5/2022
/* 
// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

// Example 1:
//		 Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
//		 Output: 3

// Example 2:
//		 Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
//		 Output: 1

// Constraints:
//    2 <= wordsDict.length <= 3 * 10^4
//    1 <= wordsDict[i].length <= 10
//    wordsDict[i] consists of lowercase English letters.
//    word1 and word2 are in wordsDict.
//    word1 != word2

const shortestDistance = (wordsDict, word1, word2) => {
  let ans = Number.MAX_SAFE_INTEGER;
  wordDict = wordsDict.slice(
    Math.min(wordsDict.indexOf(word1), wordsDict.indexOf(word2)),
    Math.max(wordsDict.lastIndexOf(word1), wordsDict.lastIndexOf(word2)) + 1
  );
  for (let i = 0; i < wordDict.length; i++) {
    let x = "";
    if (wordDict[i] === word1) x = word2;
    else if (wordDict[i] === word2) x = word1;
    else continue;
    const index = wordDict.slice(i).indexOf(x);
    if (index === -1) continue;
    ans = Math.min(ans, index);
  }
  return ans;
};
// prettier-ignore
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")); // 3
// prettier-ignore
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding")); // 1

// Ok runtime
// Bit bulky, but I think it makes sense

var topVotedShortestDistance = function (words, word1, word2) {
  let map = {};

  for (let w = 0; w < words.length; w++) {
    let word = words[w];

    if (!map[word]) {
      map[word] = [w];
    } else {
      map[word].push(w);
    }
  }

  return distance(map[word1], map[word2]);
};

function distance(arr1, arr2) {
  let i = 0,
    j = 0,
    distance = Number.MAX_SAFE_INTEGER;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      distance = Math.min(distance, arr2[j] - arr1[i]);
      i++;
    } else {
      distance = Math.min(distance, arr1[i] - arr2[j]);
      j++;
    }

    if (distance === 1) break;
  }

  return distance;
}

// All others were like mine, but this was a nice take on the problem */

// Strobogrammatic Number          10/6/2022
/* 
// Given a string num which represents an integer, return true if num is a strobogrammatic number.

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Example 1:
//		 Input: num = "69"
//		 Output: true

// Example 2:
//		 Input: num = "88"
//		 Output: true

// Example 3:
//		 Input: num = "962"
//		 Output: false

// Constraints:
//    1 <= num.length <= 50
//    num consists of only digits.
//    num does not contain any leading zeros except for zero itself.

const flippable = new Set(["0", "1", "8"]);
const isStrobogrammatic = (num) =>
  num ===
  [...num]
    .reverse()
    .reduce(
      (a, c, _, arr) =>
        (a +=
          c == "6" ? "9" : c == "9" ? "6" : flippable.has(c) ? c : (arr = [])),
      ""
    );

console.log(isStrobogrammatic("69")); // true
console.log(isStrobogrammatic("88")); // true
console.log(isStrobogrammatic("962")); // false
console.log(isStrobogrammatic("2")); // false
console.log(isStrobogrammatic("6")); // false

// Gets the job done

const topVotedIsStrobogrammatic = function (num) {
  myMap = new Map();
  myMap.set("6", "9");
  myMap.set("9", "6");
  myMap.set("0", "0");
  myMap.set("1", "1");
  myMap.set("8", "8");
  var l = 0,
    r = num.length - 1;
  while (l <= r) {
    if (!myMap.has(num.charAt(l))) return false;
    if (myMap.get(num.charAt(l)) != num.charAt(r)) return false;
    l++;
    r--;
  }
  return true;
};

// left and right approach is best here */

// Meeting Rooms          10/7/2022
/* 
// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

// Example 1:
//		 Input: intervals = [[0,30],[5,10],[15,20]]
//		 Output: false

// Example 2:
//		 Input: intervals = [[7,10],[2,4]]
//		 Output: true

// Constraints:
//    0 <= intervals.length <= 10^4
//    intervals[i].length == 2
//    0 <= starti <endi <= 10^6

const canAttendMeetings = (int) => {
  for (let i = 0; i < int.length; i++) {
    for (let j = i + 1; j < int.length; j++) {
      if (
        (int[j][0] <= int[i][0] && int[j][1] >= int[i][0]) ||
        (int[j][0] <= int[i][1] && int[j][1] >= int[i][1]) ||
        (int[j][0] >= int[i][0] && int[j][1] <= int[i][1]) ||
        (int[j][0] <= int[i][0] && int[j][1] >= int[i][1])
      )
        return false;
    }
  }
  return true;
};
// prettier-ignore
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])) // false
// prettier-ignore
console.log(canAttendMeetings([[7,10],[2,4]])) // true
// prettier-ignore
console.log(canAttendMeetings([[5,8],[6,8]])) // false

// Idk, had a big day of school today, can't think straight

const topVotedCanAttendMeetings = function (intervals) {
  if (!intervals || intervals.length === 1) return true;
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++)
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  return true;
};

// Of course */

// Palindrome Permutation          10/8/2022
/* 
// Given a string s, return true if a permutation of the string could form a palindrome.

// Example 1:
//		 Input: s = "code"
//		 Output: false

// Example 2:
//		 Input: s = "aab"
//		 Output: true

// Example 3:
//		 Input: s = "carerac"
//		 Output: true

// Constraints:
//    1 <= s.length <= 5000
//    s consists of only lowercase English letters.

const canPermutePalindrome = (s) =>
  Object.values(
    [...s].reduce((a, c) => {
      a[c] ? a[c]++ : (a[c] = 1);
      return a;
    }, {})
  ).filter((x) => x % 2).length <= 1;

console.log(canPermutePalindrome("code")); // false
console.log(canPermutePalindrome("aab")); // true
console.log(canPermutePalindrome("carerac")); // true
console.log(canPermutePalindrome("aa")); // true

// Ok one-liner

const topVotedCanPermutePalindrome = function (s) {
  var set = {};
  for (var i = 0; i < s.length; i++) {
    if (!(s.charAt(i) in set)) {
      set[s.charAt(i)] = true;
    } else {
      delete set[s.charAt(i)];
    }
  }
  return Object.keys(set).length === 0 || Object.keys(set).length === 1;
};

// similar in a way */

// Flip Game          10/9/2022
/* 
// You are playing a Flip Game with your friend.

// You are given a string currentState that contains only '+' and '-'. You and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move, and therefore the other person will be the winner.

// Return all possible states of the string currentState after one valid move. You may return the answer in any order. If there is no valid move, return an empty list [].

// Example 1:
//		 Input: currentState = "++++"
//		 Output: ["--++","+--+","++--"]

// Example 2:
//		 Input: currentState = "+"
//		 Output: []

// Constraints:
//    1 <= currentState.length <= 500
//    currentState[i] is either '+' or '-'.

const generatePossibleNextMoves = (c, ans = []) => {
  if (c.length < 2) return ans;
  for (let i = 1; i < c.length; i++)
    if (c[i - 1] === c[i] && c[i] === "+")
      ans.push(c.substring(0, i - 1) + "--" + c.substring(i + 1));
  return ans;
};
console.log(generatePossibleNextMoves("++++")); // ["--++","+--+","++--"]
console.log(generatePossibleNextMoves("+")); // []
console.log(generatePossibleNextMoves("--")); // []

// Accidentally made it work for -- and ++ at first
// 400 thumbs down vs 100 thumbs up on this one

// All top voteds were a lot bulkier */

// Valid Word Abbreviation          10/10/2022
/* 
// A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.

// For example, a string such as "substitution" could be abbreviated as (but not limited to):	"s10n" ("s ubstitutio n")	"sub4u4" ("sub stit u tion")	"12" ("substitution")	"su3i1u2on" ("su bst i t u ti on")	"substitution" (no substrings replaced)

// The following are not valid abbreviations:	"s55n" ("s ubsti tutio n", the replaced substrings are adjacent)	"s010n" (has leading zeros)	"s0ubstitution" (replaces an empty substring)

// Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.

// A substring is a contiguous non-empty sequence of characters within a string.

// Example 1:
//		 Input: word = "internationalization", abbr = "i12iz4n"
//		 Output: true
// Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").

// Example 2:
//		 Input: word = "apple", abbr = "a2e"
//		 Output: false
// Explanation: The word "apple" cannot be abbreviated as "a2e".

// Constraints:
//    1 <= word.length <= 20
//    word consists of only lowercase English letters.
//    1 <= abbr.length <= 10
//    abbr consists of lowercase English letters and digits.
//    All the integers in abbr will fit in a 32-bit integer.

const validWordAbbreviation = (word, abbr) => {
  [word, abbr] = [[...word], abbr.split(/(\d+)/g)];
  for (let i = 0; i < abbr.length; i++) {
    if (/[a-z]|[A-Z]/.test(abbr[i][0])) {
      for (let j = 0; j < abbr[i].length; j++) {
        if (word[0] === abbr[i][j]) word.shift();
        else return false;
      }
    } else if (word.length <= +abbr[i]) return false;
    else word.splice(0, +abbr[i]);
  }
  return true;
};
console.log(validWordAbbreviation("internationalization", "i12iz4n")); // true
console.log(validWordAbbreviation("apple", "a2e")); // false
console.log(validWordAbbreviation("a", "2")); // false
console.log(validWordAbbreviation("a", "01")); // false

// Doesn't work for all test cases

const topVotedValidWordAbbreviation = function (word, abbr) {
  let i = 0,
    j = 0,
    number = 0;
  while (i < abbr.length && j < word.length) {
    if (!isNaN(abbr[i])) {
      number = number * 10 + Number(abbr[i]);
      if (number === 0) return false;
      i++;
    } else if (number > 0) {
      j += number;
      number = 0;
    } else if (abbr[i] == word[j]) {
      i++;
      j++;
    } else return false;
  }
  return i === abbr.length && j + number === word.length;
}; */

// Valid Word Square          10/11/2022
/* 
// Given an array of strings words, return true if it forms a valid word square.

// A sequence of strings forms a valid word square if the k^th row and column read the same string, where 0 <= k < max(numRows, numColumns).

// Example 1:
//   https://assets.leetcode.com/uploads/2021/04/09/validsq1-grid.jpg
//		 Input: words = ["abcd","bnrt","crmy","dtye"]
//		 Output: true
// Explanation:
// The 1^st row and 1^st column both read "abcd".
// The 2^nd row and 2^nd column both read "bnrt".
// The 3^rd row and 3^rd column both read "crmy".
// The 4^th row and 4^th column both read "dtye".
// Therefore, it is a valid word square.

// Example 2:
//   https://assets.leetcode.com/uploads/2021/04/09/validsq2-grid.jpg
//		 Input: words = ["abcd","bnrt","crm","dt"]
//		 Output: true
// Explanation:
// The 1^st row and 1^st column both read "abcd".
// The 2^nd row and 2^nd column both read "bnrt".
// The 3^rd row and 3^rd column both read "crm".
// The 4^th row and 4^th column both read "dt".
// Therefore, it is a valid word square.

// Example 3:
//   https://assets.leetcode.com/uploads/2021/04/09/validsq3-grid.jpg
//		 Input: words = ["ball","area","read","lady"]
//		 Output: false
// Explanation:
// The 3^rd row reads "read" while the 3^rd column reads "lead".
// Therefore, it is NOT a valid word square.

// Constraints:
//    1 <= words.length <= 500
//    1 <= words[i].length <= 500
//    words[i] consists of only lowercase English letters.

const validWordSquare = (words) => {
  const length = words.reduce((a, c) => Math.max(a, c.length), 0);
  for (let i = 0; i < length; i++)
    for (let j = 0; j < words.length; j++) {
      try {
        if (words[j][i] !== words[i][j]) return false;
      } catch (err) {
        return false;
      }
    }
  return true;
};
console.log(validWordSquare(["abcd", "bnrt", "crmy", "dtye"])); // true
console.log(validWordSquare(["abcd", "bnrt", "crm", "dt"])); // true
console.log(validWordSquare(["ball", "area", "read", "lady"])); // false
console.log(validWordSquare(["abc", "b"])); // false

// Ok, not a fan of length or try/catch

const topVotedValidWordSquare = function (words) {
  const length = Math.max(...words.map((m) => m.length));
  let i = 0;
  while (i < length) {
    for (let j = 0; j < words.length; j++) {
      if ((words[i] && !words[j]) || (words[j] && !words[i])) return false;
      if (words[j][i] !== words[i][j]) return false;
    }
    i++;
  }
  return true;
};

// Similar logic */

// Sentence Similarity          10/12/2022
/* 
// We can represent a sentence as an array of words, for example, the sentence "I am happy with leetcode" can be represented as arr = ["I","am",happy","with","leetcode"].

// Given two sentences sentence1 and sentence2 each represented as a string array and given an array of string pairs similarPairs where similarPairs[i] = [xi, yi] indicates that the two words xi and yi are similar.

// Return true if sentence1 and sentence2 are similar, or false if they are not similar.

// Two sentences are similar if:	They have the same length (i.e., the same number of words)	sentence1[i] and sentence2[i] are similar.

// Notice that a word is always similar to itself, also notice that the similarity relation is not transitive. For example, if the words a and b are similar, and the words b and c are similar, a and c are not necessarily similar.

// <strong class="example">Example 1:
//		 Input: sentence1 = ["great","acting","skills"], sentence2 = ["fine","drama","talent"], similarPairs = [["great","fine"],["drama","acting"],["skills","talent"]]
//		 Output: true
// Explanation: The two sentences have the same length and each word i of sentence1 is also similar to the corresponding word in sentence2.

// <strong class="example">Example 2:
//		 Input: sentence1 = ["great"], sentence2 = ["great"], similarPairs = []
//		 Output: true
// Explanation: A word is similar to itself.

// <strong class="example">Example 3:
//		 Input: sentence1 = ["great"], sentence2 = ["doubleplus","good"], similarPairs = [["great","doubleplus"]]
//		 Output: false
// Explanation: As they don't have the same length, we return false.

// Constraints:
//    1 <= sentence1.length, sentence2.length <= 1000
//    1 <= sentence1[i].length, sentence2[i].length <= 20
//    sentence1[i] and sentence2[i] consist of English letters.
//    0 <= similarPairs.length <= 1000
//    similarPairs[i].length == 2
//    1 <= xi.length, yi.length <= 20
//    xi and yi consist of lower-case and upper-case English letters.
//    All the pairs (xi, yi) are distinct.

const areSentencesSimilar = (s1, s2, p) => {
  if (s1.length !== s2.length) return false;
  p = p.reduce((a, c) => {
    a[c[0]] = a[c[0]] ? [...a[c[0]], c[1]] : [c[1]];
    a[c[1]] = a[c[1]] ? [...a[c[1]], c[0]] : [c[0]];
    return a;
  }, {});
  for (let i = 0; i < s1.length; i++)
    try {
      if (
        s1[i] !== s2[i] &&
        !p[s1[i]].includes(s2[i]) &&
        !p[s2[i]].includes(s1[i])
      )
        return false;
    } catch (e) {
      return false;
    }
  return true;
};
console.log(
  areSentencesSimilar(
    ["great", "acting", "skills"],
    ["fine", "drama", "talent"],
    [
      ["great", "fine"],
      ["drama", "acting"],
      ["skills", "talent"],
    ]
  )
); // true
console.log(areSentencesSimilar(["great"], ["great"], [])); // true
console.log(
  areSentencesSimilar(
    ["great"],
    ["doubleplus", "good"],
    [["great", "doubleplus"]]
  )
); // false

// Probably could've avoided the try/catch
// OK runtime

const topVotedAreSentencesSimilar = function (s1, s2, p) {
  if (s1.length != s2.length) return false;

  const n = s1.length;
  const set = new Set();

  for (const [word1, word2] of p) {
    set.add(word1 + "#" + word2);
  }

  return s1.every((_, i) => isSimilar(s1[i], s2[i]));

  function isSimilar(word1, word2) {
    return (
      word1 == word2 ||
      set.has(word1 + "#" + word2) ||
      set.has(word2 + "#" + word1)
    );
  }
};

// So clean! */

// Find Anagram Mappings          10/13/2022
/* 
// You are given two integer arrays nums1 and nums2 where nums2 is an anagram of nums1. Both arrays may contain duplicates.

// Return an index mapping array mapping from nums1 to nums2 where mapping[i] = j means the i^th element in nums1 appears in nums2 at index j. If there are multiple answers, return any of them.

// An array a is an anagram of an array b means b is made by randomizing the order of the elements in a.

// Example 1:
//		 Input: nums1 = [12,28,46,32,50], nums2 = [50,12,32,46,28]
//		 Output: [1,4,3,2,0]
// Explanation: As mapping[0] = 1 because the 0^th element of nums1 appears at nums2[1], and mapping[1] = 4 because the 1^st element of nums1 appears at nums2[4], and so on.

// Example 2:
//		 Input: nums1 = [84,46], nums2 = [84,46]
//		 Output: [0,1]

// Constraints:
//    1 <= nums1.length <= 100
//    nums2.length == nums1.length
//    0 <= nums1[i], nums2[i] <= 10^5
//    nums2 is an anagram of nums1.

const anagramMappings = (nums1, nums2) => nums1.map((c) => nums2.indexOf(c));

console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28])); // [1,4,3,2,0]
console.log(anagramMappings([84, 46], [84, 46])); // [0,1]

const topVotedAnagramMappings = function (nums1, nums2) {
  const numToIdx = new Map(nums2.map((v, i) => [v, i]));
  return nums1.map((v) => numToIdx.get(v));
};

// I think the prompt was to create and use a map */

// Similar RGB Color          10/14/2022
/* 
// The red-green-blue color "#AABBCC" can be written as "#ABC" in shorthand.	For example, "#15c" is shorthand for the color "#1155cc".

// The similarity between the two colors "#ABCDEF" and "#UVWXYZ" is -(AB - UV)^2 - (CD - WX)^2 - (EF - YZ)^2.

// Given a string color that follows the format "#ABCDEF", return a string represents the color that is most similar to the given color and has a shorthand (i.e., it can be represented as some "#XYZ").

// Any answer which has the same highest similarity as the best answer will be accepted.

// Example 1:
//		 Input: color = "#09f166"
//		 Output: "#11ee66"
// Explanation:
// The similarity is -(0x09 - 0x11)^2 -(0xf1 - 0xee)^2 - (0x66 - 0x66)^2 = -64 -9 -0 = -73.
// This is the highest among any shorthand color.

// Example 2:
//		 Input: color = "#4e3fe1"
//		 Output: "#5544dd"

// Constraints:
//    color.length == 7
//    color[0] == '#'
//    color[i] is either digit or character in the range ['a', 'f'] for i > 0.

const topVotedSimilarRGB = function (color) {
  let result = "#";
  for (let i = 1; i < color.length; i += 2) {
    const a = parseInt(color[i] + color[i], 16);
    const b = a + 17;
    const c = a - 17;
    const base = parseInt(color[i] + color[i + 1], 16);
    const diff1 = Math.abs(a - base);
    const diff2 = Math.abs(b - base);
    const diff3 = Math.abs(c - base);
    let best = a;
    switch (Math.min(diff1, diff2, diff3)) {
      case diff2:
        best = b;
        break;
      case diff3:
        best = c;
        break;
    }
    result += best !== 0 ? best.toString(16) : "00";
  }
  return result;
};

console.log(topVotedSimilarRGB("#09f166")); // "#11ee66"
console.log(topVotedSimilarRGB("#4e3fe1")); // "#5544dd"

// no time today */

// Confusing Number          10/15/2022
/* 
// A confusing number is a number that when rotated 180 degrees becomes a different number with each digit valid.

// We can rotate digits of a number by 180 degrees to form new digits.	When 0, 1, 6, 8, and 9 are rotated 180 degrees, they become 0, 1, 9, 8, and 6 respectively.	When 2, 3, 4, 5, and 7 are rotated 180 degrees, they become invalid.

// Note that after rotating a number, we can ignore leading zeros.	For example, after rotating 8000, we have 0008 which is considered as just 8.

// Given an integer n, return true if it is a confusing number, or false otherwise.

// Example 1:
//   https://assets.leetcode.com/uploads/2019/03/23/1268_1.png"
//		 Input: n = 6
//		 Output: true
// Explanation: We get 9 after rotating 6, 9 is a valid number, and 9 != 6.

// Example 2:
//   https://assets.leetcode.com/uploads/2019/03/23/1268_2.png"
//		 Input: n = 89
//		 Output: true
// Explanation: We get 68 after rotating 89, 68 is a valid number and 68 != 89.

// Example 3:
//   https://assets.leetcode.com/uploads/2019/03/26/1268_3.png"
//		 Input: n = 11
//		 Output: false
// Explanation: We get 11 after rotating 11, 11 is a valid number but the value remains the same, thus 11 is not a confusing number

// Constraints:
//    0 <= n <= 10^9

const confusingNumber = (n) => {
  const [valid, invalid] = [{ 6: 9, 9: 6 }, [2, 3, 4, 5, 7]];
  if ([...n.toString(10)].some((x) => invalid.includes(+x))) return false;
  const flipped = [...n.toString(10)]
    .map((c) => (valid[c] ? valid[c] : c))
    .reverse()
    .join("");
  return n != flipped;
};
console.log(confusingNumber(6)); // true
console.log(confusingNumber(89)); // true
console.log(confusingNumber(11)); // false
console.log(confusingNumber(379)); // false

// Great memory, ok runtime

function confusingNumber(n) {
  let k = n;
  // prettier-ignore
  const map = new Map([[0,0], [1,1], [6,9], [8,8], [9,6]]);
  let rotated = 0;
  while (k) {
    const num = k % 10;
    if (!map.has(num)) return false;
    rotated = rotated * 10 + map.get(num);
    k = Math.floor(k / 10);
  }
  return rotated !== n;
}

// Clean */

// Fixed Point          10/16/2022
/* 
// Given an array of distinct integers arr, where arr is sorted in ascending order, return the smallest index i that satisfies arr[i] == i. If there is no such index, return -1.

// Example 1:
//		 Input: arr = [-10,-5,0,3,7]
//		 Output: 3
// Explanation: For the given array, arr[0] = -10, arr[1] = -5, arr[2] = 0, arr[3] = 3, thus the output is 3.

// Example 2:
//		 Input: arr = [0,2,5,8,17]
//		 Output: 0
// Explanation: arr[0] = 0, thus the output is 0.

// Example 3:
//		 Input: arr = [-10,-5,3,4,7,9]
//		 Output: -1
// Explanation: There is no such i that arr[i] == i, thus the output is -1.

// Constraints:
//    1 <= arr.length < 10^4
//    -10^9 <= arr[i] <= 10^9

const fixedPoint = (arr) => {
  for (let i = 0; i < arr.length; i++) if (i === arr[i]) return i;
  return -1;
};
console.log(fixedPoint([-10, -5, 0, 3, 7])); // 3
console.log(fixedPoint([0, 2, 5, 8, 17])); // 0
console.log(fixedPoint([-10, -5, 3, 4, 7, 9])); // -1 */

// Index Pairs of a String          10/17/2022
/* 
// Given a string text and an array of strings words, return an array of all index pairs [i, j] so that the substring text[i...j] is in words.

// Return the pairs [i, j] in sorted order (i.e., sort them by their first coordinate, and in case of ties sort them by their second coordinate).

// Example 1:
//		 Input: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]
//		 Output: [[3,7],[9,13],[10,17]]

// Example 2:
//		 Input: text = "ababa", words = ["aba","ab"]
//		 Output: [[0,1],[0,2],[2,3],[2,4]]
// Explanation: Notice that matches can overlap, see "aba" is found in [0,2] and [2,4].

// Constraints:
//    1 <= text.length <= 100
//    1 <= words.length <= 20
//    1 <= words[i].length <= 50
//    text and words[i] consist of lowercase English letters.
//    All the strings of words are unique.

const topVotedIndexPairs = function (text, words) {
  const res = [];
  for (let i = 0; i < text.length; i++) {
    words.forEach((word) => {
      if (word[0] === text[i] && word === text.slice(i, i + word.length)) {
        res.push([i, i + word.length - 1]);
      }
    });
  }
  return res.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
};

// prettier-ignore
console.log(topVotedIndexPairs("thestoryofleetcodeandme", ["story", "fleet", "leetcode"])); // [[3,7],[9,13],[10,17]]
console.log(topVotedIndexPairs("ababa", ["aba", "ab"])); // [[0,1],[0,2],[2,3],[2,4]]

// Tried all sorts but ended up overcomplicating it
// Very logical */

// Sum of Digits in the Minimum Number          10/18/2022
/* 
// Given an integer array nums, return 0 if the sum of the digits of the minimum integer in nums is odd, or 1 otherwise.

// Example 1:
//		 Input: nums = [34,23,1,24,75,33,54,8]
//		 Output: 0
// Explanation: The minimal element is 1, and the sum of those digits is 1 which is odd, so the answer is 0.

// Example 2:
//		 Input: nums = [99,77,33,66,55]
//		 Output: 1
// Explanation: The minimal element is 33, and the sum of those digits is 3 + 3 = 6 which is even, so the answer is 1.

// Constraints:
//    1 <= nums.length <= 100
//    1 <= nums[i] <= 100

const sumOfDigits = (nums) =>
  [...`${Math.min(...nums)}`].reduce((a, c) => +a + +c) % 2 ? 0 : 1;

console.log(sumOfDigits([34, 23, 1, 24, 75, 33, 54, 8])); // 0
console.log(sumOfDigits([99, 77, 33, 66, 55])); // 1

// Better than 90% runtime & 100% memory

const topVotedSumOfDigits = function (A) {
  const findSum = (num) => {
    let sum = 0;
    while (num > 0) {
      let remainder = num % 10;
      sum += remainder;
      num = Math.floor(num / 10);
    }
    return sum;
  };
  return findSum(Math.min(...A)) % 2 === 0 ? 1 : 0;
};

// Slower runtime than my solution */

// High Five          10/19/2022
/* 
// Given a list of the scores of different students, items, where items[i] = [IDi, scorei] represents one score from a student with IDi, calculate each student's top five average.

// Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej] represents the student with IDj and their top five average. Sort result by IDj in increasing order.

// A student's top five average is calculated by taking the sum of their top five scores and dividing it by 5 using integer division.

// Example 1:
//		 Input: items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
//		 Output: [[1,87],[2,88]]
// Explanation:
// The student with ID = 1 got scores 91, 92, 60, 65, 87, and 100. Their top five average is (100 + 92 + 91 + 87 + 65) / 5 = 87.
// The student with ID = 2 got scores 93, 97, 77, 100, and 76. Their top five average is (100 + 97 + 93 + 77 + 76) / 5 = 88.6, but with integer division their average converts to 88.

// Example 2:
//		 Input: items = [[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100]]
//		 Output: [[1,100],[7,100]]

// Constraints:
//    1 <= items.length <= 1000
//    items[i].length == 2
//    1 <= IDi <= 1000
//    0 <= scorei <= 100
//    For each IDi, there will be at least five scores.

const highFive = (items) =>
  Object.entries(
    items.reduce((a, c, i, arr) => {
      const [id, score] = c;
      a[id] ? a[id].push(score) : (a[id] = [score]);
      return a;
    }, {})
  )
    .map((c) => {
      c[1].sort((a, b) => b - a);
      if (c[1].length > 5) c[1].splice(5);
      return [+c[0], Math.floor(c[1].reduce((a, c) => a + c) / c[1].length)];
    })
    .sort((a, b) => a - b);

// prettier-ignore
console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]])) // [[1,87],[2,88]]
// prettier-ignore
console.log(highFive([[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100]])) // [[1,100],[7,100]]

// Terrible runtime, but great memory

const topVotedHighFive = function (items) {
  const scoreBoard = {};
  for (const [id, score] of items) {
    if (scoreBoard[id]) {
      scoreBoard[id].push(score);
    } else {
      scoreBoard[id] = [score];
    }
  }
  const getAverage = (res, student) => {
    const topFive = scoreBoard[student]
      .sort((a, b) => b - a)
      .reduce((total, curr, i) => {
        if (i < 5) total += curr;
        return total;
      });
    res.push([student, Math.floor(topFive / 5)]);
    return res;
  };
  return Object.keys(scoreBoard).reduce(getAverage, []);
};

// Thought I was bulky, but all answers seem pretty long */

// Two Sum Less Than K          10/20/2022
/* 
// Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.

// Example 1:
//		 Input: nums = [34,23,1,24,75,33,54,8], k = 60
//		 Output: 58
// Explanation: We can use 34 and 24 to sum 58 which is less than 60.

// Example 2:
//		 Input: nums = [10,20,30], k = 15
//		 Output: -1
// Explanation: In this case it is not possible to get a pair sum less that 15.

// Constraints:
//    1 <= nums.length <= 100
//    1 <= nums[i] <= 1000
//    1 <= k <= 2000

const twoSumLessThanK = (nums, k) =>
  nums
    .filter((x) => x < k)
    .reduce((a, c, i, arr) => {
      for (let j = i + 1; j < arr.length; j++) {
        const cur = c + arr[j];
        if (cur < k) a = Math.max(a, cur);
      }
      return a;
    }, -1);

console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60)); // 58
console.log(twoSumLessThanK([10, 20, 30], 15)); // -1

// Concise, which is nice
// Ok runtime

const topVotedTwoSumLessThanK = function (A, K) {
  let max = -1;
  for (i = 0; i < A.length - 1; i++) {
    for (j = i + 1; j < A.length; j++) {
      let sum = A[i] + A[j];
      if (sum > max && sum < K) max = sum;
    }
  }
  return max;
};

// Easily achieved with a nested for loop */

// Number of Days in a Month          10/21/2022
/* 
// Given a year year and a month month, return the number of days of that month.

// Example 1:
//		 Input: year = 1992, month = 7
//		 Output: 31

// Example 2:
//		 Input: year = 2000, month = 2
//		 Output: 29

// Example 3:
//		 Input: year = 1900, month = 2
//		 Output: 28

// Constraints:
//    1583 <= year <= 2100
//    1 <= month <= 12

const numberOfDays = (y, m) => {
  const d =
    m !== 12 ? new Date(`${m + 1} 1, ${y}`) : new Date(`jan 1, ${y + 1}`);
  d.setDate(d.getDate() - 1);
  return d.getDate();
};
console.log(numberOfDays(1992, 7)); // 31
console.log(numberOfDays(2000, 2)); // 29
console.log(numberOfDays(1900, 2)); // 28

// Great runtime

const topVotedNumberOfDays = function (Y, M) {
  let date1 = new Date(Y, M - 1);
  let date2 = new Date(Y, M);
  let diff = date2.getTime() - date1.getTime();
  return diff / (1000 * 60 * 60 * 24);
};

// This was my first approach */

// Remove Vowels from a String          10/22/2022
/* 
// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

// Example 1:
//		 Input: s = "leetcodeisacommunityforcoders"
//		 Output: "ltcdscmmntyfrcdrs"

// Example 2:
//		 Input: s = "aeiou"
//		 Output: ""

// Constraints:
//    1 <= s.length <= 1000
//    s consists of only lowercase English letters.

const removeVowels = (s) => s.split(/[a,e,i,o,u]/).join("");

console.log(removeVowels("leetcodeisacommunityforcoders")); // "ltcdscmmntyfrcdrs"
console.log(removeVowels("aeiou")); // ""

// Works

const topVotedRemoveVowels = (s) => s.replace(/a|e|o|i|u/gi, "");

// Even better */

// Largest Unique Number          10/23/2022
/* 
// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

// Example 1:
//		 Input: nums = [5,7,3,9,4,9,8,3,1]
//		 Output: 8
// Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.

// Example 2:
//		 Input: nums = [9,9,8,8]
//		 Output: -1
// Explanation: There is no number that occurs only once.

// Constraints:
//    1 <= nums.length <= 2000
//    0 <= nums[i] <= 1000

const largestUniqueNumber = (nums) => {
  const unique = nums.filter((x) => nums.indexOf(x) === nums.lastIndexOf(x));
  return unique.length >= 1 ? Math.max(...unique) : -1;
};

console.log(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1])); // 8
console.log(largestUniqueNumber([9, 9, 8, 8])); // -1

// Works

const topVotedLargestUniqueNumber = function (A) {
  const map = new Map();
  for (let n of A) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const res = [...map.keys()]
    .sort((a, b) => b - a)
    .filter((v, i) => map.get(v) === 1);
  if (!res.length) return -1;
  return res[0];
};

// A map is also a good approach */

// Armstrong Number          10/24/2022
/* 
// Given an integer n, return true if and only if it is an Armstrong number.

// The k-digit number n is an Armstrong number if and only if the k^th power of each digit sums to n.

// Example 1:
//		 Input: n = 153
//		 Output: true
// Explanation: 153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3.

// Example 2:
//		 Input: n = 123
//		 Output: false
// Explanation: 123 is a 3-digit number, and 123 != 1^3 + 2^3 + 3^3 = 36.

// Constraints:
//    1 <= n <= 10^8

const isArmstrong = (n) =>
  `${n}`
    .split("")
    .reduce((a, c, _, arr) => (a += Math.pow(c, arr.length)), 0) === n;

console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false

// One line, OK runtime

const topVotedIsArmstrong = function (n) {
  let x = 10,
    k = 1;
  while (n >= x) {
    x *= 10;
    k += 1;
  }
  x = n;
  let sum = 0;
  while (x > 0) {
    let rightMost = x % 10;
    sum += Math.pow(rightMost, k);
    x = Math.floor(x / 10);
  }
  return sum === n;
};

// Improved runtime */

// Check If a Number Is Majority Element in a Sorted Array          10/25/2022
/* 
// Given an integer array nums sorted in non-decreasing order and an integer target, return true if target is a majority element, or false otherwise.

// A majority element in an array nums is an element that appears more than nums.length / 2 times in the array.

// Example 1:
//		 Input: nums = [2,4,5,5,5,5,5,6,6], target = 5
//		 Output: true
// Explanation: The value 5 appears 5 times and the length of the array is 9.
// Thus, 5 is a majority element because 5 > 9/2 is true.

// Example 2:
//		 Input: nums = [10,100,101,101], target = 101
//		 Output: false
// Explanation: The value 101 appears 2 times and the length of the array is 4.
// Thus, 101 is not a majority element because 2 > 4/2 is false.

// Constraints:
//    1 <= nums.length <= 1000
//    1 <= nums[i], target <= 10^9
//    nums is sorted in non-decreasing order.

const isMajorityElement = (nums, target) =>
  nums.reduce((a, c) => (a += c === target ? 1 : 0), 0) > nums.length / 2;

console.log(isMajorityElement([2, 4, 5, 5, 5, 5, 5, 6, 6], 5)); // true
console.log(isMajorityElement([10, 100, 101, 101], 101)); // false

// One line

const topVotedIsMajorityElement = (nums, target) =>
  nums.filter((x) => x == target).length > nums.length / 2;

// Much better runtime */

// Single-Row Keyboard          10/26/2022
/* 
// There is a special keyboard with all keys in a single row.

// Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). Initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

// You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

// Example 1:
//		 Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
//		 Output: 4
// Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
// Total time = 2 + 1 + 1 = 4.

// Example 2:
//		 Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
//		 Output: 73

// Constraints:
//    keyboard.length == 26
//    keyboard contains each English lowercase letter exactly once in some order.
//    1 <= word.length <= 10^4
//    word[i] is an English lowercase letter.

const calculateTime = (keyboard, word, pos = 0) =>
  [...word].reduce((a, c) => {
    const cur = keyboard.indexOf(c);
    a += Math.abs(cur - pos);
    pos = cur;
    return a;
  }, 0);

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba")); // 4
console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode")); // 73

// Works

const topVotedCalculateTime = function (keyboard, word) {
  let count = 0,
    cur = 0;
  const keys = new Map(keyboard.split("").map((el, ind) => [el, ind]));
  for (const v of word) {
    const temp = keys.get(v);
    count += Math.abs(cur - temp);
    cur = temp;
  }
  return count;
};

// Turning the keyboard into a map saves runtime of .indexOf
// Ends up being much quicker */

// Diet Plan Performance          10/27/2022
/* 
// A dieter consumescalories[i] calories on the i-th day.

// Given an integer k, for every consecutive sequence of k days (calories[i], calories[i+1], ..., calories[i+k-1] for all 0 <= i <= n-k), they look at T, the total calories consumed during that sequence of k days (calories[i] + calories[i+1] + ... + calories[i+k-1]):	If T < lower, they performed poorly on their diet and lose 1 point;	If T > upper, they performed well on their diet and gain 1 point;	Otherwise, they performed normally and there is no change in points.

// Initially, the dieter has zero points. Return the total number of points the dieter has after dieting for calories.lengthdays.

// Note that the total points can be negative.

// Example 1:
//		 Input: calories = [1,2,3,4,5], k = 1, lower = 3, upper = 3
//		 Output: 0
// Explanation: Since k = 1, we consider each element of the array separately and compare it to lower and upper.
// calories[0] and calories[1] are less than lower so 2 points are lost.
// calories[3] and calories[4] are greater than upper so 2 points are gained.

// Example 2:
//		 Input: calories = [3,2], k = 2, lower = 0, upper = 1
//		 Output: 1
// Explanation: Since k = 2, we consider subarrays of length 2.
// calories[0] + calories[1] > upper so 1 point is gained.

// Example 3:
//		 Input: calories = [6,5,0,0], k = 2, lower = 1, upper = 5
//		 Output: 0
// Explanation:
// calories[0] + calories[1] > upper so 1 point is gained.
// lower <= calories[1] + calories[2] <= upper so no change in points.
// calories[2] + calories[3] < lower so 1 point is lost.

// Constraints:
//    1 <= k <= calories.length <= 10^5
//    0 <= calories[i] <= 20000
//    0 <= lower <= upper

const dietPlanPerformance = (cals, k, l, u) => {
  let points = 0;
  for (let i = 0; i < cals.length - k + 1; i++) {
    const cur = cals.slice(i, i + k).reduce((a, c) => (a += c));
    points += cur < l ? -1 : cur > u ? 1 : 0;
  }
  return points;
};
console.log(dietPlanPerformance([1, 2, 3, 4, 5], 1, 3, 3)); // 0
console.log(dietPlanPerformance([3, 2], 2, 0, 1)); // 1
console.log(dietPlanPerformance([6, 5, 0, 0], 2, 1, 5)); // 0
console.log(dietPlanPerformance([6, 13, 8, 7, 10, 1, 12, 11], 6, 5, 37)); // 3

// Exceeded runtime limit

const topVotedDietPlanPerformance = function (calories, k, lower, upper) {
  let left = 0,
    right = left + k,
    points = 0,
    countCal = 0;

  for (let i = 0; i < k; i++) countCal += calories[i];

  while (right <= calories.length) {
    if (countCal < lower) points--;
    else if (countCal > upper) points++;
    countCal = countCal - calories[left] + calories[right];
    left++;
    right = left + k;
  }
  return points;
};

// Sliding window, very clean */

// Count Substrings with Only One Distinct Letter          10/28/2022
/* 
// Given a string s, return the number of substrings that have only one distinct letter.

// Example 1:
//		 Input: s = "aaaba"
//		 Output: 8
// Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
// "aaa" occurs 1 time.
// "aa" occurs 2 times.
// "a" occurs 4 times.
// "b" occurs 1 time.
// So the answer is 1 + 2 + 4 + 1 = 8.

// Example 2:
//		 Input: s = "aaaaaaaaaa"
//		 Output: 55

// Constraints:
//    1 <= s.length <= 1000
//    s[i] consists of only lowercase English letters.

const topVotedCountLetters = function (s) {
  let count = 1;
  let result = 0;
  for (let [i, v] of Object.entries(s)) {
    v === s[i - 1] ? (count += 1) : (count = 1);
    result += count;
  }
  return result;
};
console.log(countLetters("aaaba")); // 8
console.log(countLetters("aaaaaaaaaa")); // 55

// No time today */

// How Many Apples Can You Put into the Basket          10/29/2022
/* 
// You have some apples and a basket that can carry up to 5000 units of weight.

// Given an integer array weight where weight[i] is the weight of the i^th apple, return the maximum number of apples you can put in the basket.

// Example 1:
//		 Input: weight = [100,200,150,1000]
//		 Output: 4
// Explanation: All 4 apples can be carried by the basket since their sum of weights is 1450.

// Example 2:
//		 Input: weight = [900,950,800,1000,700,800]
//		 Output: 5
// Explanation: The sum of weights of the 6 apples exceeds 5000 so we choose any 5 of them.

// Constraints:
//    1 <= weight.length <= 10^3
//    1 <= weight[i] <= 10^3

const maxNumberOfApples = (w) => {
  let u = 0;
  w.sort((a, b) => a - b);
  for (let i = 0; i < w.length; i++) {
    u += w[i];
    if (u > 5000) return i;
  }
  return w.length;
};
console.log(maxNumberOfApples([100, 200, 150, 1000])); // 4
console.log(maxNumberOfApples([900, 950, 800, 1000, 700, 800])); // 5

// Clean

const topVotedMaxNumberOfApples = function (arr) {
  const sorted = arr.slice(0).sort((a, b) => a - b);
  for (let i = 0, sum = sorted[0]; i < sorted.length; sum += sorted[++i]) {
    if (sum > 5000) return i;
  }
  return arr.length;
};

// I like the 'sum += sorted[++i]' in the for loop definition */

// Intersection of Three Sorted Arrays          10/30/2022
/* 
// Given three integer arrays arr1, arr2 and arr3sorted in strictly increasing order, return a sorted array of onlytheintegers that appeared in all three arrays.

// Example 1:
//		 Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
//		 Output: [1,5]
// Explanation: Only 1 and 5 appeared in the three arrays.

// Example 2:
//		 Input: arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1710,1870], arr3 = [521,682,1337,1395,1764]
//		 Output: []

// Constraints:
//    1 <= arr1.length, arr2.length, arr3.length <= 1000
//    1 <= arr1[i], arr2[i], arr3[i] <= 2000

const arraysIntersection = (a1, a2, a3) =>
  a1.reduce((a, c) => {
    if (a2.includes(c) && a3.includes(c)) a.push(c);
    return a;
  }, []);

console.log(
  arraysIntersection([1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8])
); // [1,5]
console.log(
  arraysIntersection(
    [197, 418, 523, 876, 1356],
    [501, 880, 1593, 1710, 1870],
    [521, 682, 1337, 1395, 1764]
  )
); // []

// one line

const topVotedArraysIntersection = function (arr1, arr2, arr3) {
  let result = [];
  const hashMap = {};

  for (let i = 0; i < arr1.length; i++) {
    hashMap[arr1[i]] = false;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (hashMap[arr2[i]] === false) {
      hashMap[arr2[i]] = true;
    }
  }

  for (let i = 0; i < arr3.length; i++) {
    if (hashMap[arr3[i]] === true) {
      result.push(arr3[i]);
    }
  }

  return result;
};

// Same runtime

// DAY 500
// I'm half way through my first semester of software engineering. Technically, I should graduate in 3.75 years from now, so by day 1,869.
// 500 doesn't seem like that many days now... */

// Missing Number In Arithmetic Progression          10/31/2022
/* 
// In some array arr, the values were in arithmetic progression: the values arr[i + 1] - arr[i] are all equal for every 0 <= i < arr.length - 1.

// A value from arr was removed that was not the first or last value in the array.

// Given arr, return the removed value.

// Example 1:
//		 Input: arr = [5,7,11,13]
//		 Output: 9
// Explanation: The previous array was [5,7,9,11,13].

// Example 2:
//		 Input: arr = [15,13,12]
//		 Output: 14
// Explanation: The previous array was [15,14,13,12].

// Constraints:
//    3 <= arr.length <= 1000
//    0 <= arr[i] <= 10^5
//    The given array is guaranteed to be a valid array.

const missingNumber = (arr) => {
  if (new Set(arr).size === 1) return arr[0];
  const dif = (arr[arr.length - 1] - arr[0]) / arr.length;
  for (let i = 1; i < arr.length; i++)
    if (arr[i] - arr[i - 1] !== dif) return arr[i - 1] + dif;
};
console.log(missingNumber([5, 7, 11, 13])); // 9
console.log(missingNumber([15, 13, 12])); // 14
console.log(missingNumber([0, 0, 0])); // 0

// Works
// Same as top voted */

// Array Transformation          11/1/2022
/* 
// Given an initial array arr, every day you produce a new array using the array of the previous day.

// On the i-th day, you do the following operations on the array of dayi-1 to produce the array of day i:
// If an element is smaller than both its left neighbor and its right neighbor, then this element is incremented.
// If an element is bigger than both its left neighbor and its right neighbor, then this element is decremented.
// The firstand last elements never change.

// After some days, the array does not change. Return that final array.

// Example 1:
//		 Input: arr = [6,2,3,4]
//		 Output: [6,3,3,4]
// Explanation:
// On the first day, the array is changed from [6,2,3,4] to [6,3,3,4].
// No more operations can be done to this array.

// Example 2:
//		 Input: arr = [1,6,3,4,3,5]
//		 Output: [1,4,4,4,4,5]
// Explanation:
// On the first day, the array is changed from [1,6,3,4,3,5] to [1,5,4,3,4,5].
// On the second day, the array is changed from [1,5,4,3,4,5] to [1,4,4,4,4,5].
// No more operations can be done to this array.

// Constraints:
//    3 <= arr.length <= 100
//    1 <= arr[i] <= 100

const transformArray = (arr, final = false) => {
  while (!final) {
    final = true;
    let ans = [arr[0]];
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
        (ans[i] = arr[i] + 1), (final = false);
      else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1])
        (ans[i] = arr[i] - 1), (final = false);
      else ans[i] = arr[i];
    }
    ans.push(arr[arr.length - 1]);
    arr = ans;
  }
  return arr;
};
console.log(transformArray([6, 2, 3, 4])); // [6,3,3,4]
console.log(transformArray([1, 6, 3, 4, 3, 5])); // [1,4,4,4,4,5]
console.log(transformArray([2, 1, 2, 1, 1, 2, 2, 1])); // [2,2,1,1,1,2,2,1]

// Great memory, not so great runtime

const topVotedTransformArray = function (arr) {
  let set = true;
  while (set) {
    let dif = 0;
    const ans = Array(arr.length - 1).fill(0);
    for (i = 0; i < arr.length; i++) {
      if (i == 0 || i == arr.length - 1) {
        ans[i] = arr[i];
      } else if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
        ans[i] = arr[i] + 1;
        dif++;
      } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        ans[i] = arr[i] - 1;
        dif++;
      } else {
        ans[i] = arr[i];
      }
    }
    arr = ans;
    if (!dif) set = false;
  }
  return arr;
}; */

// Hexspeak          11/2/2022
/* 
// A decimal number can be converted to its Hexspeak representation by first converting it to an uppercase hexadecimal string, then replacing all occurrences of the digit '0' with the letter 'O', and the digit '1' with the letter 'I'. Such a representation is valid if and only if it consists only of the letters in the set {'A', 'B', 'C', 'D', 'E', 'F', 'I', 'O'}.

// Given a string num representing a decimal integer n, return the Hexspeak representation of n if it is valid, otherwise return "ERROR".

// Example 1:
//		 Input: num = "257"
//		 Output: "IOI"
// Explanation: 257 is 101 in hexadecimal.

// Example 2:
//		 Input: num = "3"
//		 Output: "ERROR"

// Constraints:
//    1 <= num.length <= 12
//    num does not contain leading zeros.
//    num represents an integer in the range [1, 10^12].

const toHexspeak = (num, ans = "") => {
  const hex = [...Number(num).toString(16).toUpperCase()];
  for (let i = 0; i < hex.length; i++) {
    switch (hex[i]) {
      case "1":
        ans += "I";
        break;
      case "0":
        ans += "O";
        break;
      default:
        if (+hex[i] <= 9) return "ERROR";
        ans += hex[i];
        break;
    }
  }
  return ans;
};

console.log(toHexspeak("257")); // "IOI"
console.log(toHexspeak("3")); // "ERROR"

// Faster than 100% runtimes

const topVotedToHexspeak = function (num) {
  const map = {
    0: "O",
    1: "I",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };
  let res = "";

  while (num > 0) {
    const rem = num % 16;

    if (!map[rem]) return "ERROR";

    res = map[rem] + res;
    num = Math.floor(num / 16);
  }

  return res;
}; */

// Counting Elements          11/3/2022
/* 
// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

// Example 1:
//		 Input: arr = [1,2,3]
//		 Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

// Example 2:
//		 Input: arr = [1,1,3,3,5,5,7,7]
//		 Output: 0
// Explanation: No numbers are counted, cause there is no 2, 4, 6, or 8 in arr.

// Constraints:
//    1 <= arr.length <= 1000
//    0 <= arr[i] <= 1000

const countElements = (arr) =>
  arr.reduce((a, c) => (arr.includes(c + 1) ? ++a : a), 0);

console.log(countElements([1, 2, 3])); // 2
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7])); // 0

// Works

const topVotedCountElements = (arr) => {
  let uniqueNums = new Set(arr);
  let count = 0;
  arr.forEach((num) => {
    if (uniqueNums.has(num + 1)) count++;
  });
  return count;
}; */

// Perform String Shifts          11/4/2022
/* 
// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [directioni, amounti]:	directioni can be 0 (for left shift) or 1 (for right shift).	amounti is the amount by which string s is to be shifted.	A left shift by 1 means remove the first character of s and append it to the end.	Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.

// Return the final string after all operations.

// Example 1:
//		 Input: s = "abc", shift = [[0,1],[1,2]]
//		 Output: "cab"
// Explanation:
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"

// Example 2:
//		 Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
//		 Output: "efgabcd"
// Explanation:
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"

// Constraints:
//    1 <= s.length <= 100
//    s only contains lower case English letters.
//    1 <= shift.length <= 100
//    shift[i].length == 2
//    directioni is either 0 or 1.
//    0 <= amounti <= 100

const stringShift = (s, shift) =>
  shift.reduce((a, c) => {
    let [dir, count] = c;
    if (count >= s.length) count = count % s.length;
    return dir
      ? a.substring(a.length - count) + a.substring(0, a.length - count)
      : a.substring(count) + a.substring(0, count);
  }, s);

// prettier-ignore
console.log(stringShift("abc", [[0, 1],[1, 2]])); // "cab"
// prettier-ignore
console.log(stringShift("abcdefg", [[1, 1],[1, 1],[0, 2],[1, 3]])); // "efgabcd"
console.log(stringShift("abc", [[0, 4]])); // "bca"
// prettier-ignore
console.log(stringShift("mecsk",[[1,15],[0,10],[0,13],[1,24],[1,31]])); // "skmec"

// Some test cases were causing trouble, but 'count % s.length' fixed it

const topVotedStringShift = (s, shift) => {
  let arr = s.split("");
  for (let [d, a] of shift) {
    if (d === 0) {
      while (a > 0) {
        let res = arr.shift();
        arr.push(res);
        a--;
      }
    } else {
      while (a > 0) {
        let res = arr.pop();
        arr.unshift(res);
        a--;
      }
    }
  }
  return arr.join("");
}; */

// Largest Subarray Length K          11/5/2022
/* 
// An array A is larger than some array B if for the first index i where A[i] != B[i], A[i] > B[i].

// For example, consider 0-indexing:	[1,3,2,4] > [1,2,2,4], since at index 1, 3 > 2.	[1,4,4,4] < [2,1,1,1], since at index 0, 1 < 2.

// A subarray is a contiguous subsequence of the array.

// Given an integer array nums of distinct integers, return the largest subarray of nums of length k.

// Example 1:
//		 Input: nums = [1,4,5,2,3], k = 3
//		 Output: [5,2,3]
// Explanation: The subarrays of size 3 are: [1,4,5], [4,5,2], and [5,2,3].
// Of these, [5,2,3] is the largest.

// Example 2:
//		 Input: nums = [1,4,5,2,3], k = 4
//		 Output: [4,5,2,3]
// Explanation: The subarrays of size 4 are: [1,4,5,2], and [4,5,2,3].
// Of these, [4,5,2,3] is the largest.

// Example 3:
//		 Input: nums = [1,4,5,2,3], k = 1
//		 Output: [5]

// Constraints:
//    1 <= k <= nums.length <= 10^5
//    1 <= nums[i] <= 10^9
//    All the integers of nums are unique.

const largestSubarray = (nums, k) => {
  let ans = nums.slice(0, k);
  for (let i = 1; i <= nums.length - k; i++) {
    const cur = nums.slice(i, i + k);
    for (let j = 0; j < cur.length; j++) {
      if (ans[j] != cur[j]) {
        ans = ans[j] < cur[j] ? cur : ans;
        break;
      }
    }
  }
  return ans;
};
console.log(largestSubarray([1, 4, 5, 2, 3], 3)); // [5,2,3]
console.log(largestSubarray([1, 4, 5, 2, 3], 4)); // [4,5,2,3]
console.log(largestSubarray([1, 4, 5, 2, 3], 1)); // [5]

// Time limit exceeded

const topVotedLargestSubarray = function (nums, k) {
  if (nums === null || nums.length === 0 || k <= 0 || k > nums.length) {
    return [];
  }
  let max = -Infinity;
  let idx = -1;
  let numOfPossibleSubarrs = nums.length - k + 1;
  for (let i = 0; i < numOfPossibleSubarrs; i++) {
    if (nums[i] > max) {
      max = Math.max(max, nums[i]);
      idx = i;
    }
  }
  return nums.slice(idx, idx + k);
}; */

// Faulty Sensor          11/6/2022
/* 
// An experiment is being conducted in a lab. To ensure accuracy, there are two sensors collecting data simultaneously. You are given two arrays sensor1 and sensor2, where sensor1[i] and sensor2[i] are the i^th data points collected by the two sensors.

// However, this type of sensor has a chance of being defective, which causes exactly one data point to be dropped. After the data is dropped, all the data points to the right of the dropped data are shifted one place to the left, and the last data point is replaced with some random value. It is guaranteed that this random value will not be equal to the dropped value.	For example, if the correct data is [1,2,3,4,5] and 3 is dropped, the sensor could return [1,2,4,5,7] (the last position can be any value, not just 7).

// We know that there is a defect in at most one of the sensors. Return the sensor number (1 or 2) with the defect. If there is no defect in either sensor or if it is impossible to determine the defective sensor, return -1.

// Example 1:
//		 Input: sensor1 = [2,3,4,5], sensor2 = [2,1,3,4]
//		 Output: 1
// Explanation: Sensor 2 has the correct values.
// The second data point from sensor 2 is dropped, and the last value of sensor 1 is replaced by a 5.

// Example 2:
//		 Input: sensor1 = [2,2,2,2,2], sensor2 = [2,2,2,2,5]
//		 Output: -1
// Explanation: It is impossible to determine which sensor has a defect.
// Dropping the last value for either sensor could produce the output for the other sensor.

// Example 3:
//		 Input: sensor1 = [2,3,2,2,3,2], sensor2 = [2,3,2,3,2,7]
//		 Output: 2
// Explanation: Sensor 1 has the correct values.
// The fourth data point from sensor 1 is dropped, and the last value of sensor 1 is replaced by a 7.

// Constraints:
//    sensor1.length == sensor2.length
//    1 <= sensor1.length <= 100
//    1 <= sensor1[i], sensor2[i] <= 100

const topVotedBadSensor = function (sensor1, sensor2) {
  const n = sensor1.length;
  let i = 0;
  while (i < n && sensor1[i] == sensor2[i]) i++;
  let match1 = true;
  let match2 = true;
  for (let start = i + 1; start < n; start++) {
    if (sensor1[start] != sensor2[start - 1]) match1 = false;
    if (sensor2[start] != sensor1[start - 1]) match2 = false;
  }
  if (match1 === match2) return -1;
  return match1 ? 2 : 1;
};
console.log(badSensor([2, 3, 4, 5], [2, 1, 3, 4])); // 1
console.log(badSensor([2, 2, 2, 2, 2], [2, 2, 2, 2, 5])); // -1
console.log(badSensor([2, 3, 2, 2, 3, 2], [2, 3, 2, 3, 2, 7])); // 2

// Unclear description
// Skipping this one */

// Check if String Is Decomposable Into Value-Equal Substrings          11/7/2022
/* 
// A value-equal string is a string where all characters are the same.	For example, "1111" and "33" are value-equal strings.	In contrast, "123" is not a value-equal string.

// Given a digit string s, decompose the string into some number of consecutive value-equal substrings where exactly one substring has a length of 2 and the remaining substrings have a length of 3.

// Return true if you can decompose s according to the above rules. Otherwise, return false.

// A substring is a contiguous sequence of characters in a string.

// Example 1:
//		 Input: s = "000111000"
//		 Output: false
// Explanation: s cannot be decomposed according to the rules because ["000", "111", "000"] does not have a substring of length 2.

// Example 2:
//		 Input: s = "00011111222"
//		 Output: true
// Explanation: s can be decomposed into ["000", "111", "11", "222"].

// Example 3:
//		 Input: s = "011100022233"
//		 Output: false
// Explanation: s cannot be decomposed according to the rules because of the first '0'.

// Constraints:
//    1 <= s.length <= 1000
//    s consists of only digits '0' through '9'.

const isDecomposable = (s) => {
  s = s.match(/(.)\1* /g).filter((x) => x.length % 3 !== 0);
  return s.length === 1 ? s.pop().length % 3 == 2 : false;
};
console.log(isDecomposable("000111000")); // false
console.log(isDecomposable("00011111222")); // true
console.log(isDecomposable("011100022233")); // false
console.log(isDecomposable("66666666666677722")); // true
console.log(isDecomposable("22222222222222222222222")); // true */

// Check if an Array Is Consecutive          11/8/2022
/* 
// Given an integer array nums, return true if nums is consecutive, otherwise return false.

// An array is consecutive if it contains every number in the range [x, x + n - 1] (inclusive), where x is the minimum number in the array and n is the length of the array.

// Example 1:
//		 Input: nums = [1,3,4,2]
//		 Output: true
// Explanation:
// The minimum value is 1 and the length of nums is 4.
// All of the values in the range [x, x + n - 1] = [1, 1 + 4 - 1] = [1, 4] = (1, 2, 3, 4) occur in nums.
// Therefore, nums is consecutive.

// Example 2:
//		 Input: nums = [1,3]
//		 Output: false
// Explanation:
// The minimum value is 1 and the length of nums is 2.
// The value 2 in the range [x, x + n - 1] = [1, 1 + 2 - 1], = [1, 2] = (1, 2) does not occur in nums.
// Therefore, nums is not consecutive.

// Example 3:
//		 Input: nums = [3,5,4]
//		 Output: true
// Explanation:
// The minimum value is 3 and the length of nums is 3.
// All of the values in the range [x, x + n - 1] = [3, 3 + 3 - 1] = [3, 5] = (3, 4, 5) occur in nums.
// Therefore, nums is consecutive.

// Constraints:
//    1 <= nums.length <= 10^5
//    0 <= nums[i] <= 10^5

const isConsecutive = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = nums[0]; i <= nums[0] + nums.length - 1; i++)
    if (!nums.includes(i)) return false;
  return true;
};
console.log(isConsecutive([1, 3, 4, 2])); // true
console.log(isConsecutive([1, 3])); // false
console.log(isConsecutive([3, 5, 4])); // true

// Runtime exceeded

const topVotedIsConsecutive = (nums) => {
  if (nums.length === 1) return true;
  let numSet = new Set(nums);
  if (numSet.size !== nums.length) return false;
  let min = Math.min(...nums);
  for (let i = min + 1; i <= min + nums.length - 1; i++)
    if (!numSet.has(i)) return false;
  return true;
}; */

// Determine if Two Events Have Conflict          11/9/2022
/* 
// You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:	event1 = [startTime1, endTime1] and	event2 = [startTime2, endTime2].

// Event times are valid 24 hours format in the form of HH:MM.

// A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

// Return true if there is a conflict between two events. Otherwise, return false.

// Example 1:
//		 Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
//		 Output: true
// Explanation: The two events intersect at time 2:00.

// Example 2:
//		 Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
//		 Output: true
// Explanation: The two events intersect starting from 01:20 to 02:00.

// Example 3:
//		 Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
//		 Output: false
// Explanation: The two events do not intersect.

// Constraints:
//    evnet1.length == event2.length == 2.
//    event1[i].length == event2[i].length == 5
//    startTime1 <= endTime1
//    startTime2 <= endTime2
//    All the event times follow the HH:MM format.

const haveConflict = (event1, event2) => {
  const createDate = (d) =>
    new Date("2022", "1", "1", d.substring(0, 2), d.substring(3, 5));
  const e1 = [createDate(event1[0]), createDate(event1[1])];
  const e2 = [createDate(event2[0]), createDate(event2[1])];
  if ((e1[0] >= e2[0] && e1[0] <= e2[1]) || (e1[1] >= e2[0] && e1[1] <= e2[1]))
    return true;
  if ((e2[0] >= e1[0] && e2[0] <= e1[1]) || (e2[1] >= e1[0] && e2[1] <= e1[1]))
    return true;
  return false;
};
console.log(haveConflict(["01:15", "02:00"], ["02:00", "03:00"])); // true
console.log(haveConflict(["01:00", "02:00"], ["01:20", "03:00"])); // true
console.log(haveConflict(["10:00", "11:00"], ["14:00", "15:00"])); // false

// Bulky, but faster than most runtimes

const topVotedHaveConflict = function (event1, event2) {
  return (
    (event1[0] <= event2[0] && event2[0] <= event1[1]) ||
    (event1[0] <= event2[1] && event2[1] <= event1[1]) ||
    (event2[0] <= event1[0] && event1[0] <= event2[1]) ||
    (event2[0] <= event1[1] && event1[1] <= event2[1])
  );
};

// Much simpler */

// The Employee That Worked on the Longest Task          11/10/2022
/* 
// There are n employees, each with a unique id from 0 to n - 1.

// You are given a 2D integer array logs where logs[i] = [idi, leaveTimei] where:	idi is the id of the employee that worked on the i^th task, and	leaveTimei is the time at which the employee finished the i^th task. All the values leaveTimei are unique.

// Note that the i^th task starts the moment right after the (i - 1)^th task ends, and the 0^th task starts at time 0.

// Return the id of the employee that worked the task with the longest time. If there is a tie between two or more employees, return the smallest id among them.

// Example 1:
//		 Input: n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]
//		 Output: 1
// Explanation:
// Task 0 started at 0 and ended at 3 with 3 units of times.
// Task 1 started at 3 and ended at 5 with 2 units of times.
// Task 2 started at 5 and ended at 9 with 4 units of times.
// Task 3 started at 9 and ended at 15 with 6 units of times.
// The task with the longest time is task 3 and the employee with id 1 is the one that worked on it, so we return 1.

// Example 2:
//		 Input: n = 26, logs = [[1,1],[3,7],[2,12],[7,17]]
//		 Output: 3
// Explanation:
// Task 0 started at 0 and ended at 1 with 1 unit of times.
// Task 1 started at 1 and ended at 7 with 6 units of times.
// Task 2 started at 7 and ended at 12 with 5 units of times.
// Task 3 started at 12 and ended at 17 with 5 units of times.
// The tasks with the longest time is task 1. The employees that worked on it is 3, so we return 3.

// Example 3:
//		 Input: n = 2, logs = [[0,10],[1,20]]
//		 Output: 0
// Explanation:
// Task 0 started at 0 and ended at 10 with 10 units of times.
// Task 1 started at 10 and ended at 20 with 10 units of times.
// The tasks with the longest time are tasks 0 and 1. The employees that worked on them are 0 and 1, so we return the smallest id 0.

// Constraints:
//    2 <= n <= 500
//    1 <= logs.length <= 500
//    logs[i].length == 2
//    0 <= idi <= n - 1
//    1 <= leaveTimei <= 500
//    idi != idi+1
//    leaveTimei are sorted in a strictly increasing order.

const hardestWorker = (n, logs) => {
  let [id, max] = logs[0];
  for (let i = 1; i < logs.length; i++) {
    const curTime = logs[i][1] - logs[i - 1][1];
    if (curTime > max) (max = curTime), (id = logs[i][0]);
    if (curTime === max) id = Math.min(id, logs[i][0]);
  }
  return id;
};
// prettier-ignore
console.log(hardestWorker(10,[[0,3],[2,5],[0,9],[1,15]])) // 1
// prettier-ignore
console.log(hardestWorker(26,[[1,1],[3,7],[2,12],[7,17]])) // 3
// prettier-ignore
console.log(hardestWorker(2,[[0,10],[1,20]])) // 0
// prettier-ignore
console.log(hardestWorker(70, [[36,3],[1,5],[12,8],[25,9],[53,11],[29,12],[52,14]])) // 12

const topVotedHardestWorker = function (n, logs) {
  let max_val = logs[0][1],
    id = logs[0][0];
  for (let i = 1; i < logs.length; i++) {
    let time_req = logs[i][1] - logs[i - 1][1];
    if (time_req >= max_val) {
      if (time_req == max_val) {
        id = Math.min(id, logs[i][0]);
      } else {
        max_val = time_req;
        id = logs[i][0];
      }
    }
  }
  return id;
}; */

// Number of Valid Clock Times          11/11/2022
/* 
// You are given a string of length 5 called time, representing the current time on a digital clock in the format "hh:mm". The earliest possible time is "00:00" and the latest possible time is "23:59".

// In the string time, the digits represented by the ?symbol are unknown, and must be replaced with a digit from 0 to 9.

// Return an integer answer, the number of valid clock times that can be created by replacing every ?with a digit from 0 to 9.

// Example 1:
//		 Input: time = "?5:00"
//		 Output: 2
// Explanation: We can replace the ? with either a 0 or 1, producing "05:00" or "15:00". Note that we cannot replace it with a 2, since the time "25:00" is invalid. In total, we have two choices.

// Example 2:
//		 Input: time = "0?:0?"
//		 Output: 100
// Explanation: Each ? can be replaced by any digit from 0 to 9, so we have 100 total choices.

// Example 3:
//		 Input: time = "??:??"
//		 Output: 1440
// Explanation: There are 24 possible choices for the hours, and 60 possible choices for the minutes. In total, we have 24 * 60 = 1440 choices.

// Constraints:
//    time is a valid string of length 5 in the format "hh:mm".
//    "00" <= hh <= "23"
//    "00" <= mm <= "59"
//    Some of the digits might be replaced with '?' and need to be replaced with digits from 0 to 9.

const topVotedCountTime = (t) => {
  let [h, m] = t.split(":");
  let ans = [];
  if (h == "??") ans.push(24);
  else {
    if (h[0] == "?") h[1] > 3 ? ans.push(2) : ans.push(3);
    if (h[1] == "?") h[0] == 2 ? ans.push(4) : ans.push(10);
  }
  if (m[0] == "?") ans.push(6);
  if (m[1] == "?") ans.push(10);
  return ans.reduce((a, b) => a * b, 1);
};
console.log(countTime("?5:00")); // 2
console.log(countTime("0?:0?")); // 100
console.log(countTime("??:??")); // 1440

// Couldn't figure out hrs^mins
// Ended up looking at top voted */

// Odd String Difference          11/12/2022
/* 
// You are given an array of equal-length strings words. Assume that the length of each string is n.

// Each string words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2. Note that the difference between two letters is the difference between their positions in the alphabet i.e.the position of 'a' is 0, 'b' is 1, and 'z' is 25.	For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].

// All the strings in words have the same difference integer array, except one. You should find that string.

// Return the string in words that has different difference integer array.

// Example 1:
//		 Input: words = ["adc","wzy","abc"]
//		 Output: "abc"
// Explanation:
// - The difference integer array of "adc" is [3 - 0, 2 - 3] = [3, -1].
// - The difference integer array of "wzy" is [25 - 22, 24 - 25]= [3, -1].
// - The difference integer array of "abc" is [1 - 0, 2 - 1] = [1, 1].
// The odd array out is [1, 1], so we return the corresponding string, "abc".

// Example 2:
//		 Input: words = ["aaa","bob","ccc","ddd"]
//		 Output: "bob"
// Explanation: All the integer arrays are [0, 0] except for "bob", which corresponds to [13, -13].

// Constraints:
//    3 <= words.length <= 100
//    n == words[i].length
//    2 <= n <= 20
//    words[i] consists of lowercase English letters.

const oddString = (words) => {
  const dif = words.map((c, i) => {
    let cur = [];
    for (let i = 1; i < c.length; i++) {
      cur.push(c.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return cur;
  });
  console.log(dif);
};
console.log(oddString(["adc", "wzy", "abc"])); // "abc"
console.log(oddString(["aaa", "bob", "ccc", "ddd"])); // "bob"

// Got this far but have to leave
// Going to a wedding!

const topVotedOddString = function (words) {
  const map = {};
  const ans = {};

  for (const word of words) {
    let key = "";
    for (let i = 1; i < word.length; i++) {
      key += `_${word[i].charCodeAt() - word[i - 1].charCodeAt()}`;
    }
    map[key] = ++map[key] || 1;
    ans[key] = word;
  }

  const key = Object.keys(map).find((e) => map[e] === 1);

  return ans[key];
};

// Good call using a map */

// Average Value of Even Numbers That Are Divisible by Three          11/13/2022
/* 
// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

// Example 1:
//		 Input: nums = [1,3,6,10,12,15]
//		 Output: 9
// Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.

// Example 2:
//		 Input: nums = [1,2,4,7,10]
//		 Output: 0
// Explanation: There is no single number that satisfies the requirement, so return 0.

// Constraints:
//    1 <= nums.length <= 1000
//    1 <= nums[i] <= 1000

const averageValue = (nums) =>
  nums.reduce((a, c) => (a += c % 3 === 0 && c % 2 === 0 ? c : 0), 0) /
    nums.filter((x) => x % 3 === 0 && x % 2 === 0).length || 0;

console.log(averageValue([1, 3, 6, 10, 12, 15])); // 9
console.log(averageValue([1, 2, 4, 7, 10])); // 0

const topVotedAverageValue = function (nums) {
  let sum = 0;
  let count = 0;
  for (let n of nums) {
    if (n % 6 === 0) {
      sum += n;
      count++;
    }
  }
  return sum === 0 ? sum : Math.floor(sum / count);
}; */

// Apply Operations to an Array          11/14/2022
/* 
// You are given a 0-indexed array nums of size n consisting of non-negative integers.

// You need to apply n - 1 operations to this array where, in the i^th operation (0-indexed), you will apply the following on the i^th element of nums:	If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.

// After performing all the operations, shift all the 0's to the end of the array.	For example, the array [1,0,2,0,0,1] after shifting all its 0's to the end, is [1,2,1,0,0,0].

// Return the resulting array.

// Note that the operations are applied sequentially, not all at once.

// Example 1:
//		 Input: nums = [1,2,2,1,1,0]
//		 Output: [1,4,2,0,0,0]
// Explanation: We do the following operations:
// - i = 0: nums[0] and nums[1] are not equal, so we skip this operation.
// - i = 1: nums[1] and nums[2] are equal, we multiply nums[1] by 2 and change nums[2] to 0. The array becomes [1,4,0,1,1,0].
// - i = 2: nums[2] and nums[3] are not equal, so we skip this operation.
// - i = 3: nums[3] and nums[4] are equal, we multiply nums[3] by 2 and change nums[4] to 0. The array becomes [1,4,0,2,0,0].
// - i = 4: nums[4] and nums[5] are equal, we multiply nums[4] by 2 and change nums[5] to 0. The array becomes [1,4,0,2,0,0].
// After that, we shift the 0's to the end, which gives the array [1,4,2,0,0,0].

// Example 2:
//		 Input: nums = [0,1]
//		 Output: [1,0]
// Explanation: No operation can be applied, we just shift the 0 to the end.

// Constraints:
//    2 <= nums.length <= 2000
//    0 <= nums[i] <= 1000

const applyOperations = (nums) => {
  for (let i = 0; i < nums.length - 1; i++)
    if (nums[i] === nums[i + 1]) (nums[i] *= 2), (nums[i + 1] = 0);
  const l = nums.length;
  nums = nums.filter((x) => x !== 0);
  return [...nums, ...Array(l - nums.length).fill(0)];
};
console.log(applyOperations([1, 2, 2, 1, 1, 0])); // [1,4,2,0,0,0]
console.log(applyOperations([0, 1])); // [1,0]

// Wish I had a more elegant way of moving all zeros to end of array

const topVotedApplyOperations = function (nums) {
  for (let i = 0; i < nums.length; i++)
    if (nums[i] == nums[i + 1]) [nums[i], nums[i + 1]] = [nums[i] * 2, 0];
  return nums.sort((a, b) => !a - !b);
};

// '!a - !b' is what I was looking for */

// Number of Distinct Averages          11/15/2022
/* 
// You are given a 0-indexed integer array nums of even length.

// As long as nums is not empty, you must repetitively:	Find the minimum number in nums and remove it.	Find the maximum number in nums and remove it.	Calculate the average of the two removed numbers.

// The average of two numbers a and b is (a + b) / 2.	For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.

// Return the number of distinct averages calculated using the above process.

// Note that when there is a tie for a minimum or maximum number, any can be removed.

// Example 1:
//		 Input: nums = [4,1,4,0,3,5]
//		 Output: 2
// Explanation:
// 1. Remove 0 and 5, and the average is (0 + 5) / 2 = 2.5. Now, nums = [4,1,4,3].
// 2. Remove 1 and 4. The average is (1 + 4) / 2 = 2.5, and nums = [4,3].
// 3. Remove 3 and 4, and the average is (3 + 4) / 2 = 3.5.
// Since there are 2 distinct numbers among 2.5, 2.5, and 3.5, we return 2.

// Example 2:
//		 Input: nums = [1,100]
//		 Output: 1
// Explanation:
// There is only one average to be calculated after removing 1 and 100, so we return 1.

// Constraints:
//    2 <= nums.length <= 100
//    nums.length is even.
//    0 <= nums[i] <= 100

const distinctAverages = (nums) => {
  let avgs = new Set();
  nums.sort((a, b) => a - b);
  while (nums.length > 1) {
    const cur = [nums.shift(), nums.pop()];
    avgs.add((cur[0] + cur[1]) / 2);
  }
  return avgs.size;
};
console.log(distinctAverages([4, 1, 4, 0, 3, 5])); // 2
console.log(distinctAverages([1, 100])); // 1

// Ok runtime
// Same as top voted */

// Count Numbers with Unique Digits          11/16/2022
/* 
// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10^n.

// Example 1:
//		 Input: n = 2
//		 Output: 91
// Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99

// Example 2:
//		 Input: n = 0
//		 Output: 1

// Constraints:
//    0 <= n <= 8

const topVotedCountNumbersWithUniqueDigits = (n) => {
  if (n == 0) return 1;
  if (n == 1) return 10;
  let k = 9;
  for (let i = 0; i < n - 1; i++) {
    k *= 9 - i;
  }
  return k + countNumbersWithUniqueDigits(n - 1);
};

console.log(countNumbersWithUniqueDigits(3)); // 739
console.log(countNumbersWithUniqueDigits(2)); // 91
console.log(countNumbersWithUniqueDigits(0)); // 1

// Math solution */

// Convert the Temperature          11/17/2022
/* 
// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10^-5 of the actual answer will be accepted.

// Note that:	Kelvin = Celsius + 273.15	Fahrenheit = Celsius * 1.80 + 32.00

// Example 1:
//		 Input: celsius = 36.50
//		 Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.

// Example 2:
//		 Input: celsius = 122.11
//		 Output: [395.26000,251.79800]
// Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.

// Constraints:
//    0 <= celsius <= 1000

const convertTemperature = (celsius) => [celsius + 273.15, celsius * 1.8 + 32];

console.log(convertTemperature(36.5)); // [309.65000,97.70000]
console.log(convertTemperature(122.11)); // [395.26000,251.79800]

// Same as top voted */

// Same Tree          11/18/2022
/* 
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
//   https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg
//		 Input: p = [1,2,3], q = [1,2,3]
//		 Output: true

// Example 2:
//   https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg
//		 Input: p = [1,2], q = [1,null,2]
//		 Output: false

// Example 3:
//   https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg
//		 Input: p = [1,2,1], q = [1,1,2]
//		 Output: false

// Constraints:
//    The number of nodes in both trees is in the range [0, 100].
//    -10^4 <= Node.val <= 10^4

const isSameTree = (p, q) => {
  if (p.length !== q.length) return false;
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) return false;
  }
  return true;
};
console.log(isSameTree([1, 2, 3], [1, 2, 3])); // true
console.log(isSameTree([1, 2], [1, null, 2])); // false
console.log(isSameTree([1, 2, 1], [1, 1, 2])); // false

// Doesn't work in LeetCode

function topVotedIsSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Seems I'd attempted this question a year ago and commented that I should learn binary trees lol

// I will learn to do these questions and prototype questions over winter break (Dec 19th), After my last final exam */

// Sort Colors          11/19/2022
/* 
// Given an array nums with n objects colored red, white, or blue, sort them https://en.wikipedia.org/wiki/In-place_algorithm so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Constraints:	n == nums.length	1 <= n <= 300	nums[i] is either 0, 1, or 2.

// Example 1:
//		 Input: nums = [2,0,2,1,1,0]
//		 Output: [0,0,1,1,2,2]

// Example 2:
//		 Input: nums = [2,0,1]
//		 Output: [0,1,2]

// Constraints:
//    n == nums.length
//    1 <= n <= 300
//    nums[i] is either 0, 1, or 2.

const sortColors = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      sortColors(nums);
    }
  }
  return nums;
};
console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); // [0,1,2]

// Bad runtime

const topVotedSortColors = function (arr) {
  let one = 0,
    zero = 0,
    two = 0;

  for (let elem of arr) {
    if (elem == 0) zero++;
    else if (elem == 1) one++;
    else two++;
  }

  arr.length = 0;

  for (let i = 0; i < zero; i++) arr.push(0);
  for (let i = 0; i < one; i++) arr.push(1);
  for (let i = 0; i < two; i++) arr.push(2);
};

// Smart to count them then recreate the array

const revisedSortColors = (nums) => {
  const count = nums.reduce((a, c) => {
    a[c] ? a[c]++ : (a[c] = 1);
    return a;
  }, {});
  return Object.entries(count).reduce(
    (a, c) => [...a, ...Array(c[1]).fill(+c[0])],
    []
  );
}; */

// Find Peak Element          11/20/2022
/* 
// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:
//		 Input: nums = [1,2,3,1]
//		 Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:
//		 Input: nums = [1,2,1,3,5,6,4]
//		 Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

// Constraints:
//    1 <= nums.length <= 1000
//    -2^31 <= nums[i] <= 2^31 - 1
//    nums[i] != nums[i + 1] for all valid i.

const findPeakElement = (nums) => {
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
  }
  return nums[0] > nums[1] ? 0 : nums.length - 1;
};
console.log(findPeakElement([1, 2, 3, 1])); // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 5
console.log(findPeakElement([1])); // 0

// Faster than 90%

const topVotedFindPeakElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
}; */

// Maximum Product Subarray          11/21/2022
/* 
// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:
//		 Input: nums = [2,3,-2,4]
//		 Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
//		 Input: nums = [-2,0,-1]
//		 Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Constraints:
//    1 <= nums.length <= 2 * 10^4
//    -10 <= nums[i] <= 10
//    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

const maxProduct = (nums) => {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (cur > max) max = cur;
    for (let j = i + 1; j < nums.length; j++) {
      cur *= nums[j];
      if (cur > max) max = cur;
    }
  }
  return max;
};
console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([-2])); // -2

// Exceeds runtime limit

var topVotedMaxProduct = function (nums) {
  let max = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const options = [nums[i], nums[i] * prevMax, nums[i] * prevMin];
    prevMax = Math.max(...options);
    prevMin = Math.min(...options);

    max = Math.max(max, prevMax);
  }

  return max;
};

// https://leetcode.com/problems/maximum-product-subarray/discuss/416395/JavaScript-Solution-w-Explanation

// Clean */

// Group Shifted Strings          11/22/2022
/* 
// We can shift a string by shifting each of its letters to its successive letter.	For example, "abc" can be shifted to be "bcd".

// We can keep shifting the string to form a sequence.	For example, we can keep shifting "abc" to form the sequence: "abc" -> "bcd" -> ... -> "xyz".

// Given an array of strings strings, group all strings[i] that belong to the same shifting sequence. You may return the answer in any order.

// Example 1:
//		 Input: strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
//		 Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]

// Example 2:
//		 Input: strings = ["a"]
//		 Output: [["a"]]

// Constraints:
//    1 <= strings.length <= 200
//    1 <= strings[i].length <= 50
//    strings[i] consists of lowercase English letters.

const groupStrings = (strings) => {
  const count = strings.reduce((a, c, i, arr) => {
    a[c.length] ? a[c.length].push(c) : (a[c.length] = [c]);
    return a;
  }, {});
  return Object.entries(count)
    .reverse()
    .reduce((a, c) => [...a, [...c[1]]], []);
};
console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"])); // [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]
console.log(groupStrings(["a"])); // [["a"]]

// Doesn't work for all test cases

const topVotedGroupStrings = (strs) => {
  const res = {};
  strs.forEach((s) => {
    const key = new Array(s.length).fill(0);
    for (let i = 1; i < s.length; i++) {
      key[i] = s.charCodeAt(i - 1) - (s.charCodeAt(i) + 26);
      if (key[i] > 25 || key[i] < -25) key[i] %= 26;
    }
    res[key] ? res[key].push(s) : (res[key] = [s]);
  });
  return Object.values(res);
};

// Close, but not really */

// Path Sum II          11/23/2022
/* 
// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

// Example 1:
//   https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg
//		 Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
//		 Output: [[5,4,11,2],[5,8,4,5]]
// Explanation: There are two paths whose sum equals targetSum:
// 5 + 4 + 11 + 2 = 22
// 5 + 8 + 4 + 5 = 22

// Example 2:
//   https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg
//		 Input: root = [1,2,3], targetSum = 5
//		 Output: []

// Example 3:
//		 Input: root = [1,2], targetSum = 0
//		 Output: []

// Constraints:
//    The number of nodes in the tree is in the range [0, 5000].
//    -1000 <= Node.val <= 1000
//    -1000 <= targetSum <= 1000

const topVotedPathSum = function (root, sum, res = [], path = []) {
  if (root) {
    path.push(root.val);
    if (!root.left && !root.right && sum - root.val === 0) res.push([...path]);
    topVotedPathSum(root.left, sum - root.val, res, path);
    topVotedPathSum(root.right, sum - root.val, res, path);
    path.pop();
  }
  return res;
};

// No time today */

// API Call I         11/24/2022
/* 
// I'm feeling rusty so I'll refresh on API calls today.

// Using https://github.com/public-apis/public-apis, I'll setup a simple API call. This first iteration will retrieving an image or some text. Later iterations will have added complexity.

const fetchCat = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  const cat = data.shift().url;
  console.log(cat);
};
fetchCat();

// Went with https://docs.thecatapi.com/ */

// Number of Unequal Triplets in Array          11/25/2022
/* 
// You are given a 0-indexed array of positive integers nums. Find the number of triplets (i, j, k) that meet the following conditions:	0 <= i < j < k < nums.length	nums[i], nums[j], and nums[k] are pairwise distinct. In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].

// Return the number of triplets that meet the conditions.

// Example 1:
//		 Input: nums = [4,4,2,4,3]
//		 Output: 3
// Explanation: The following triplets meet the conditions:
// - (0, 2, 4) because 4 != 2 != 3
// - (1, 2, 4) because 4 != 2 != 3
// - (2, 3, 4) because 2 != 4 != 3
// Since there are 3 triplets, we return 3.
// Note that (2, 0, 4) is not a valid triplet because 2 > 0.

// Example 2:
//		 Input: nums = [1,1,1,1,1]
//		 Output: 0
// Explanation: No triplets meet the conditions so we return 0.

// Constraints:
//    3 <= nums.length <= 100
//    1 <= nums[i] <= 1000

const unequalTriplets = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      for (let k = j + 1; k < nums.length; k++)
        if (nums[i] != nums[j] && nums[j] != nums[k] && nums[i] != nums[k])
          count++;
  return count;
};
console.log(unequalTriplets([4, 4, 2, 4, 3])); // 3
console.log(unequalTriplets([1, 1, 1, 1, 1])); // 0

// Surely something more optimal

const topVotedUnequalTriplets = function (nums) {
  let count = 0,
    prev = 0,
    nxt = nums.length;
  let frequencies = nums.reduce((count, currentValue) => {
    return (
      count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
      count
    );
  }, {});

  for (freq of Object.values(frequencies)) {
    nxt -= freq;
    count += prev * freq * nxt;
    prev += freq;
  }
  return count;
};

// Damn, that's nice
// Only slightly faster than mine */

// Integer Break          11/26/2022
/* 
// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

// Return the maximum product you can get.

// Example 1:
//		 Input: n = 2
//		 Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.

// Example 2:
//		 Input: n = 10
//		 Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

// Constraints:
//    2 <= n <= 58

const topVotedIntegerBreak = (n) => {
  let memo = new Map();

  function dp(n) {
    if (n == 1 || n == 2) return 1;
    if (memo.has(n)) return memo.get(n);

    let q = 0;
    for (let i = 1; i <= n / 2; i++) {
      q = Math.max(q, i * Math.max(n - i, dp(n - i)));
    }
    memo.set(n, q);
    return q;
  }
  return dp(n);
};
console.log(topVotedIntegerBreak(2)); // 1
console.log(topVotedIntegerBreak(10)); // 36 */

// Top K Frequent Words          11/27/2022
/*
// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:
//		 Input: words = ["i","love","leetcode","i","love","coding"], k = 2
//		 Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:
//		 Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
//		 Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// Constraints:
//    1 <= words.length <= 500
//    1 <= words[i].length <= 10
//    words[i] consists of lowercase English letters.
//    k is in the range [1, The number of unique words[i]]

const topKFrequent = (words, k) => {
  let count = words.reduce((a, c) => {
    a[c] ? a[c]++ : (a[c] = 1);
    return a;
  }, {});
  count = Object.entries(count).sort((a, b) => b[1] - a[1]);
  count = count.reduce((a, c) => {
    const [word, count] = c;
    a[count] ? a[count].push(word) : (a[count] = [word]);
    return a;
  }, {});
  return Object.entries(count)
    .sort((a, b) => b[0] - a[0])
    .reduce((a, c) => [...a, ...c[1].sort((a, b) => a.localeCompare(b))], [])
    .slice(0, k);
};
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)); // ["i","love"]
// prettier-ignore
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"],4)) // ["the","is","sunny","day"]
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3)); // ["i", "love", "coding"];

// Clunky, but works

const topVotedTopKFrequent = (words, k) => {
  let hash = {};
  for (let word of words) hash[word] = hash[word] + 1 || 1;
  let result = Object.keys(hash).sort((a, b) => {
    let countCompare = hash[b] - hash[a];
    if (countCompare == 0) return a.localeCompare(b);
    else return countCompare;
  });
  return result.slice(0, k);
};

// Much cleaner */

// Find the Pivot Integer          11/28/2022
/* 
// Given a positive integer n, find the pivot integer x such that:	The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.

// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

// Example 1:
//		 Input: n = 8
//		 Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

// Example 2:
//		 Input: n = 1
//		 Output: 1
// Explanation: 1 is the pivot integer since: 1 = 1.

// Example 3:
//		 Input: n = 4
//		 Output: -1
// Explanation: It can be proved that no such integer exist.

// Constraints:
//    1 <= n <= 1000

const pivotInteger = (n) => {
  let r = 0;
  for (let i = 1; i <= n; i++) r += i;
  let l = 0;
  for (let i = 1, j = n; i <= n; i++, j--) {
    (l += i), (r -= i - 1);
    if (l === r) return i;
  }
  return -1;
};
console.log(pivotInteger(8)); // 6
console.log(pivotInteger(1)); // 1
console.log(pivotInteger(4)); // -1

// Sliding window

const sumOfRange = (l, r) => ((l + r) * (r - l + 1)) / 2;
const topVotedPivotInteger = (n) => {
  for (let x = 1; x <= n; x++) {
    if (sumOfRange(1, x) == sumOfRange(x, n)) return x;
  }
  return -1;
};

// bit slower */

// Single Number III          11/29/2022
/*
// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write analgorithm that runs in linear runtime complexity and usesonly constant extra space.

// Example 1:
//		 Input: nums = [1,2,1,3,2,5]
//		 Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

// Example 2:
//		 Input: nums = [-1,0]
//		 Output: [-1,0]

// Example 3:
//		 Input: nums = [0,1]
//		 Output: [1,0]

// Constraints:
//    2 <= nums.length <= 3 * 10^4
//    -2^31 <= nums[i] <= 2^31 - 1
//    Each integer in nums will appear twice, only two integers will appear once.

const singleNumber = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) ans.push(nums[i]);
    if (ans.length === 2) return ans;
  }
};
console.log(singleNumber([1, 2, 1, 3, 2, 5])); // [3,5]
console.log(singleNumber([-1, 0])); // [-1,0]
console.log(singleNumber([0, 1])); // [1,0]

// Terrible runtime, great memory

const topVotedSingleNumber = (nums) => {
  var xor = nums.reduce((acc, cur) => acc ^ cur, 0);
  var uniqBitPos = xor.toString(2).length - 1;
  var xor2 = nums
    .filter((num) => ((num >> uniqBitPos) & 1) == 0)
    .reduce((acc, cur) => acc ^ cur, 0);
  return [xor2, xor2 ^ xor];
};

// Much better */

// Battleships in a Board          11/30/2022
/*
// Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

// Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

// Example 1:
//   https://assets.leetcode.com/uploads/2021/04/10/battelship-grid.jpg
//		 Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
//		 Output: 2

// Example 2:
//		 Input: board = [["."]]
//		 Output: 0

// Constraints:
//    m == board.length
//    n == board[i].length
//    1 <= m, n <= 200
//    board[i][j] is either '.' or 'X'.

const topVotedCountBattleships = (board) => {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] === "X" &&
        board[i][j - 1] !== "X" &&
        (!board[i - 1] || board[i - 1][j] !== "X")
      )
        count++;
    }
  }
  return count;
};
console.log(
  countBattleships([
    ["X", ".", ".", "X"],
    [".", ".", ".", "X"],
    [(".", ".", ".", "X")],
  ])
); // 2
console.log(countBattleships([["."]])); // 0 */

// Advent of code - Day 1: Calorie Counting         12/1/2022
/* 
// The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.

// In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

// Example 1:
//		 Input: nums = [[1000,2000,3000],[4000],[5000,6000],[7000,8000,9000],[1000]]
//		 Output: 24000

// Explanation:
//    The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
//    The second Elf is carrying one food item with 4000 Calories.
//    The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
//    The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
//    The fifth Elf is carrying one food item with 10000 Calories.

const calorieCounting = (calories) =>
  calories.reduce(
    (max, elf) =>
      Math.max(
        max,
        elf.reduce((a, cal) => (a += cal), 0)
      ),
    0
  );

console.log(
  calorieCounting([
    [1000, 2000, 3000],
    [4000],
    [5000, 6000],
    [7000, 8000, 9000],
    [1000],
  ]) // 24000
);

// the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

// In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

// Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?

// Example 1:
//		 Input: nums = [[1000,2000,3000],[4000],[5000,6000],[7000,8000,9000],[1000]]
//		 Output: 45000

const topThree = (calories) =>
  calories
    .reduce((a, elf) => {
      const cur = elf.reduce((a, cal) => (a += cal), 0);
      if (cur > a[0]) {
        a[0] = cur;
        a.sort((a, b) => a - b);
      }
      return a;
    }, new Array(3).fill(0))
    .reduce((a, c) => a + c);

console.log(
  topThree([
    [1000, 2000, 3000],
    [4000],
    [5000, 6000],
    [7000, 8000, 9000],
    [10000],
  ]) // 45000
);

// Something new for December :)

// Found an advent calendar of coding challenges! https://adventofcode.com/
// Fun so far, will try to do them all until Christmas 🎄

// Challenges become available everyday at midnight */

// Advent of code - Day 2: Rock Paper Scissors         12/2/2022
/* 
// Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

// Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

// The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

// The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

// Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

// For example, suppose you were given the following strategy guide:

// A Y
// B X
// C Z
// This strategy guide predicts and recommends the following:

// In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
// In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
// The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
// In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

// What would your total score be if everything goes exactly according to your strategy guide?

const res = {
  AX: 1 + 3,
  AY: 2 + 6,
  AZ: 3 + 0,
  BX: 1 + 0,
  BY: 2 + 3,
  BZ: 3 + 6,
  CX: 1 + 6,
  CY: 2 + 0,
  CZ: 3 + 3,
};
const rps = (guide) => guide.reduce((a, c) => (a += res[c]), 0);

console.log(rps(["AY", "BX", "CZ"])); // 15

// The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

// The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

// In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
// In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
// In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
// Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

// Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?

const rez = {
  AX: 3 + 0,
  AY: 1 + 3,
  AZ: 2 + 6,
  BX: 1 + 0,
  BY: 2 + 3,
  BZ: 3 + 6,
  CX: 2 + 0,
  CY: 3 + 3,
  CZ: 1 + 6,
};
const rps2 = (guide) => guide.reduce((a, c) => (a += rez[c]), 0);

console.log(rps2(["AY", "BX", "CZ"])); // 12

// There are 2 problems available every day
// Finish the first to unlock the second

// Wish I could see how others are answering these! */

// Advent of code - Day 3: Rucksack Reorganization          12/3/2022
/* 
// One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

// Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

// The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

// The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

// For example, suppose you have the following list of contents from six rucksacks:

// vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw

// The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
// The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
// The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
// The fourth rucksack's compartments only share item type v.
// The fifth rucksack's compartments only share item type t.
// The sixth rucksack's compartments only share item type s.
// To help prioritize item rearrangement, every item type can be converted to a priority:

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
// In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

// Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

const rucksack = (supplies) =>
  supplies.reduce((a, c) => {
    let sharedItem = null;
    const [p1, p2] = [c.substring(0, c.length / 2), c.substring(c.length / 2)];
    for (let i = 0; i < p1.length; i++)
      if (p1.includes(p2[i])) {
        sharedItem = p2[i];
        break;
      }
    sharedItem = sharedItem.charCodeAt(0) - 96;
    if (sharedItem < 0) sharedItem += 58;
    return (a += sharedItem);
  }, 0);

console.log(
  rucksack([
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ])
); // 157

// As you finish identifying the misplaced items, the Elves come to you with another issue.

// For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

// The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

// Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

// Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

// vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// And the second group's rucksacks are the next three lines:

// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw
// In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

// Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

// Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?

const badges = (supplies) => {
  let badgeList = [];
  for (let i = 0; i < supplies.length - 2; i += 3) {
    const r = [supplies[i], supplies[i + 1], supplies[i + 2]];
    r.sort((a, b) => a.length - b.length);
    for (let j = 0; j < r[0].length; j++)
      if (r[1].includes(r[0][j]) && r[2].includes(r[0][j])) {
        badgeList.push(r[0][j]);
        break;
      }
  }
  return badgeList.reduce((a, badge) => {
    badge = badge.charCodeAt(0) - 96;
    if (badge < 0) badge += 58;
    return (a += badge);
  }, 0);
};

console.log(
  badges([
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ])
); // 70

// I feel like this one had a bit more depth than the last two, which is nice
// Solving problems is painting an ASCII picture on the website! */

// Advent of code - Day 4: Camp Cleanup         12/4/2022
/* 
// Space needs to be cleared before the last supplies can be unloaded from the ships, and so several Elves have been assigned the job of cleaning up sections of the camp. Every section has a unique ID number, and each Elf is assigned a range of section IDs.

// However, as some of the Elves compare their section assignments with each other, they've noticed that many of the assignments overlap. To try to quickly find overlaps and reduce duplicated effort, the Elves pair up and make a big list of the section assignments for each pair (your puzzle input).

// For example, consider the following list of section assignment pairs:

// 2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8
// For the first few pairs, this list means:

// Within the first pair of Elves, the first Elf was assigned sections 2-4 (sections 2, 3, and 4), while the second Elf was assigned sections 6-8 (sections 6, 7, 8).
// The Elves in the second pair were each assigned two sections.
// The Elves in the third pair were each assigned three sections: one got sections 5, 6, and 7, while the other also got 7, plus 8 and 9.
// This example list uses single-digit section IDs to make it easier to draw; your actual list might contain larger numbers. Visually, these pairs of section assignments look like this:

// .234.....  2-4
// .....678.  6-8

// .23......  2-3
// ...45....  4-5

// ....567..  5-7
// ......789  7-9

// .2345678.  2-8
// ..34567..  3-7

// .....6...  6-6
// ...456...  4-6

// .23456...  2-6
// ...45678.  4-8
// Some of the pairs have noticed that one of their assignments fully contains the other. For example, 2-8 fully contains 3-7, and 6-6 is fully contained by 4-6. In pairs where one assignment fully contains the other, one Elf in the pair would be exclusively cleaning sections their partner will already be cleaning, so these seem like the most in need of reconsideration. In this example, there are 2 such pairs.

// In how many assignment pairs does one range fully contain the other?

const cleanup = (list) =>
  list.reduce((count, c) => {
    const [a, b] = [c[0].split("-"), c[1].split("-")];
    if (
      (+a[0] >= +b[0] && +a[1] <= +b[1]) ||
      (+b[0] >= +a[0] && +b[1] <= +a[1])
    )
      count++;
    return count;
  }, 0);

console.log(
  cleanup([
    ["2-4", "6-8"],
    ["2-3", "4-5"],
    ["5-7", "7-9"],
    ["2-8", "3-7"],
    ["6-6", "4-6"],
    ["2-6", "4-8"],
  ])
); // 2

// It seems like there is still quite a bit of duplicate work planned. Instead, the Elves would like to know the number of pairs that overlap at all.

// In the above example, the first two pairs (2-4,6-8 and 2-3,4-5) don't overlap, while the remaining four pairs (5-7,7-9, 2-8,3-7, 6-6,4-6, and 2-6,4-8) do overlap:

// 5-7,7-9 overlaps in a single section, 7.
// 2-8,3-7 overlaps all of the sections 3 through 7.
// 6-6,4-6 overlaps in a single section, 6.
// 2-6,4-8 overlaps in sections 4, 5, and 6.
// So, in this example, the number of overlapping assignment pairs is 4.

// In how many assignment pairs do the ranges overlap?

const overlap = (list) =>
  list.reduce((count, c) => {
    let [a, b] = [
      c[0].split("-").map((c) => +c),
      c[1].split("-").map((c) => +c),
    ];
    if (
      (a[0] >= b[0] && a[0] <= b[1]) ||
      (a[1] >= b[0] && a[1] <= b[1]) ||
      (b[0] >= a[0] && b[0] <= a[1]) ||
      (b[1] >= a[0] && b[1] <= a[1])
    )
      count++;
    return count;
  }, 0);

console.log(
  overlap([
    ["2-4", "6-8"],
    ["2-3", "4-5"],
    ["5-7", "7-9"],
    ["2-8", "3-7"],
    ["6-6", "4-6"],
    ["2-6", "4-8"],
  ])
); // 4 */

// Advent of code - Day 5: Supply Stacks          12/5/2022
/* 
// The expedition can depart as soon as the final supplies have been unloaded from the ships. Supplies are stored in stacks of marked crates, but because the needed supplies are buried under many other crates, the crates need to be rearranged.

// The ship has a giant cargo crane capable of moving crates between stacks. To ensure none of the crates get crushed or fall over, the crane operator will rearrange them in a series of carefully-planned steps. After the crates are rearranged, the desired crates will be at the top of each stack.

// The Elves don't want to interrupt the crane operator during this delicate procedure, but they forgot to ask her which crate will end up where, and they want to be ready to unload them as soon as possible so they can embark.

// They do, however, have a drawing of the starting stacks of crates and the rearrangement procedure (your puzzle input). For example:

//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2
// In this example, there are three stacks of crates. Stack 1 contains two crates: crate Z is on the bottom, and crate N is on top. Stack 2 contains three crates; from bottom to top, they are crates M, C, and D. Finally, stack 3 contains a single crate, P.

// Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:

// [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3
// In the second step, three crates are moved from stack 1 to stack 3. Crates are moved one at a time, so the first crate to be moved (D) ends up below the second and third crates:

//         [Z]
//         [N]
//     [C] [D]
//     [M] [P]
//  1   2   3
// Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved one at a time, crate C ends up below crate M:

//         [Z]
//         [N]
// [M]     [D]
// [C]     [P]
//  1   2   3
// Finally, one crate is moved from stack 1 to stack 2:

//         [Z]
//         [N]
//         [D]
// [C] [M] [P]
//  1   2   3
// The Elves just need to know which crate will end up on top of each stack; in this example, the top crates are C in stack 1, M in stack 2, and Z in stack 3, so you should combine these together and give the Elves the message CMZ.

// After the rearrangement procedure completes, what crate ends up on top of each stack?

const stacks = (stack, moves) =>
  moves
    .reduce((stack, c) => {
      const [count, from, to] = [c[0], c[1] - 1, c[2] - 1];
      for (let i = 0; i < count; i++) stack[to].unshift(stack[from].shift());
      return stack;
    }, stack)
    .reduce((a, c) => (a += c.shift()), "");

console.log(
  stacks(
    [["N", "Z"], ["D", "C", "M"], ["P"]],
    [
      [1, 2, 1],
      [3, 1, 3],
      [2, 2, 1],
      [1, 1, 2],
    ]
  )
); // CMZ

// As you watch the crane operator expertly rearrange the crates, you notice the process isn't following your prediction.

// Some mud was covering the writing on the side of the crane, and you quickly wipe it away. The crane isn't a CrateMover 9000 - it's a CrateMover 9001.

// The CrateMover 9001 is notable for many new and exciting features: air conditioning, leather seats, an extra cup holder, and the ability to pick up and move multiple crates at once.

// Again considering the example above, the crates begin in the same configuration:

//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3
// Moving a single crate from stack 2 to stack 1 behaves the same as before:

// [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3
// However, the action of moving three crates from stack 1 to stack 3 means that those three moved crates stay in the same order, resulting in this new configuration:

//         [D]
//         [N]
//     [C] [Z]
//     [M] [P]
//  1   2   3
// Next, as both crates are moved from stack 2 to stack 1, they retain their order as well:

//         [D]
//         [N]
// [C]     [Z]
// [M]     [P]
//  1   2   3
// Finally, a single crate is still moved from stack 1 to stack 2, but now it's crate C that gets moved:

//         [D]
//         [N]
//         [Z]
// [M] [C] [P]
//  1   2   3
// In this example, the CrateMover 9001 has put the crates in a totally different order: MCD.

// Before the rearrangement process finishes, update your simulation so that the Elves know where they should stand to be ready to unload the final supplies. After the rearrangement procedure completes, what crate ends up on top of each stack?

const stacks2 = (stack, moves) =>
  moves
    .reduce((stack, c) => {
      const [count, from, to] = [c[0], c[1] - 1, c[2] - 1];
      stack[to].unshift(...stack[from].splice(0, count));
      return stack;
    }, stack)
    .reduce((a, c) => (a += c.shift()), "");

console.log(
  stacks2(
    [["N", "Z"], ["D", "C", "M"], ["P"]],
    [
      [1, 2, 1],
      [3, 1, 3],
      [2, 2, 1],
      [1, 1, 2],
    ]
  )
); // MCD */

// Advent of code - Day 6: Tuning Trouble          12/6/2022
/* 
// The preparations are finally complete; you and the Elves leave camp on foot and begin to make your way toward the star fruit grove.

// As you move through the dense undergrowth, one of the Elves gives you a handheld device. He says that it has many fancy features, but the most important one to set up right now is the communication system.

// However, because he's heard you have significant experience dealing with signal-based systems, he convinced the other Elves that it would be okay to give you their one malfunctioning device - surely you'll have no problem fixing it.

// As if inspired by comedic timing, the device emits a few colorful sparks.

// To be able to communicate with the Elves, the device needs to lock on to their signal. The signal is a series of seemingly-random characters that the device receives one at a time.

// To fix the communication system, you need to add a subroutine to the device that detects a start-of-packet marker in the datastream. In the protocol being used by the Elves, the start of a packet is indicated by a sequence of four characters that are all different.

// The device will send your subroutine a datastream buffer (your puzzle input); your subroutine needs to identify the first position where the four most recently received characters were all different. Specifically, it needs to report the number of characters from the beginning of the buffer to the end of the first such four-character marker.

// For example, suppose you receive the following datastream buffer:

// mjqjpqmgbljsphdztnvjfqwrcgsmlb
// After the first three characters (mjq) have been received, there haven't been enough characters received yet to find the marker. The first time a marker could occur is after the fourth character is received, making the most recent four characters mjqj. Because j is repeated, this isn't a marker.

// The first time a marker appears is after the seventh character arrives. Once it does, the last four characters received are jpqm, which are all different. In this case, your subroutine should report the value 7, because the first start-of-packet marker is complete after 7 characters have been processed.

// Here are a few more examples:

// bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 5
// nppdvjthqldpwncqszvftbrmjlhg: first marker after character 6
// nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 10
// zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 11
// How many characters need to be processed before the first start-of-packet marker is detected?

const marker = (packet) => {
  for (let i = 0; i < packet.length - 4; i++)
    if (new Set(packet.slice(i, i + 4).split("")).size === 4) return i + 4;
};
console.log(marker("mjqjpqmgbljsphdztnvjfqwrcgsmlb")); // 7
console.log(marker("bvwbjplbgvbhsrlpgdmjqwftvncz")); // 5
console.log(marker("nppdvjthqldpwncqszvftbrmjlhg")); // 6
console.log(marker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")); // 10
console.log(marker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")); // 11

// Your device's communication system is correctly detecting packets, but still isn't working. It looks like it also needs to look for messages.

// A start-of-message marker is just like a start-of-packet marker, except it consists of 14 distinct characters rather than 4.

// Here are the first positions of start-of-message markers for all of the above examples:

// mjqjpqmgbljsphdztnvjfqwrcgsmlb: first marker after character 19
// bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 23
// nppdvjthqldpwncqszvftbrmjlhg: first marker after character 23
// nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 29
// zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 26
// How many characters need to be processed before the first start-of-message marker is detected?

const message = (packet) => {
  for (let i = 0; i < packet.length - 14; i++)
    if (new Set(packet.slice(i, i + 14).split("")).size === 14) return i + 14;
};
console.log(message("mjqjpqmgbljsphdztnvjfqwrcgsmlb")); // 19
console.log(message("bvwbjplbgvbhsrlpgdmjqwftvncz")); // 23
console.log(message("nppdvjthqldpwncqszvftbrmjlhg")); // 23
console.log(message("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")); // 29
console.log(message("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")); // 26

// Was easy to scale between part 1 and 2 with this solution */

// Advent of code - Day 7: No Space Left On Device          12/7/2022
/* 
// You can hear birds chirping and raindrops hitting leaves as the expedition proceeds. Occasionally, you can even hear much louder sounds in the distance; how big do the animals get out here, anyway?

// The device the Elves gave you has problems with more than just its communication system. You try to run a system update:

// $ system-update --please --pretty-please-with-sugar-on-top
// Error: No space left on device
// Perhaps you can delete some files to make space for the update?

// You browse around the filesystem to assess the situation and save the resulting terminal output (your puzzle input). For example:

// $ cd /
// $ ls
// dir a
// 14848514 b.txt
// 8504156 c.dat
// dir d
// $ cd a
// $ ls
// dir e
// 29116 f
// 2557 g
// 62596 h.lst
// $ cd e
// $ ls
// 584 i
// $ cd ..
// $ cd ..
// $ cd d
// $ ls
// 4060174 j
// 8033020 d.log
// 5626152 d.ext
// 7214296 k
// The filesystem consists of a tree of files (plain data) and directories (which can contain other directories or files). The outermost directory is called /. You can navigate around the filesystem, moving into or out of directories and listing the contents of the directory you're currently in.

// Within the terminal output, lines that begin with $ are commands you executed, very much like some modern computers:

// cd means change directory. This changes which directory is the current directory, but the specific result depends on the argument:
// cd x moves in one level: it looks in the current directory for the directory named x and makes it the current directory.
// cd .. moves out one level: it finds the directory that contains the current directory, then makes that directory the current directory.
// cd / switches the current directory to the outermost directory, /.
// ls means list. It prints out all of the files and directories immediately contained by the current directory:
// 123 abc means that the current directory contains a file named abc with size 123.
// dir xyz means that the current directory contains a directory named xyz.
// Given the commands and output in the example above, you can determine that the filesystem looks visually like this:

// - / (dir)
//   - a (dir)
//     - e (dir)
//       - i (file, size=584)
//     - f (file, size=29116)
//     - g (file, size=2557)
//     - h.lst (file, size=62596)
//   - b.txt (file, size=14848514)
//   - c.dat (file, size=8504156)
//   - d (dir)
//     - j (file, size=4060174)
//     - d.log (file, size=8033020)
//     - d.ext (file, size=5626152)
//     - k (file, size=7214296)
// Here, there are four directories: / (the outermost directory), a and d (which are in /), and e (which is in a). These directories also contain files of various sizes.

// Since the disk is full, your first step should probably be to find directories that are good candidates for deletion. To do this, you need to determine the total size of each directory. The total size of a directory is the sum of the sizes of the files it contains, directly or indirectly. (Directories themselves do not count as having any intrinsic size.)

// The total sizes of the directories above can be found as follows:

// The total size of directory e is 584 because it contains a single file i of size 584 and no other directories.
// The directory a has total size 94853 because it contains files f (size 29116), g (size 2557), and h.lst (size 62596), plus file i indirectly (a contains e which contains i).
// Directory d has total size 24933642.
// As the outermost directory, / contains every file. Its total size is 48381165, the sum of the size of every file.
// To begin, find all of the directories with a total size of at most 100000, then calculate the sum of their total sizes. In the example above, these directories are a and e; the sum of their total sizes is 95437 (94853 + 584). (As in this example, this process can count files more than once!)

// Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?

const space = (commands) => {
  commands = commands.filter((x) => !x.includes("$ ls") && !x.includes("dir "));
  let curPath = [];

  let tree = commands.reduce((a, c) => {
    if (!c.includes("$ cd ")) {
      const curSize = +c.split(" ").shift();
      let path = "";
      curPath.forEach((c, i) => {
        path += c;
        a[path] ? (a[path] += curSize) : (a[path] = curSize);
      });
    } else {
      if (c === "$ cd /") curPath = ["/"];
      else if (c === "$ cd ..") curPath.pop();
      else curPath.push(c.split(" ").pop());
    }
    return a;
  }, {});
  return Object.values(tree)
    .filter((x) => x <= 100000)
    .reduce((a, c) => (a += c));
};
const example = [
  "$ cd /",
  "$ ls",
  "dir a",
  "14848514 b.txt",
  "8504156 c.dat",
  "dir d",
  "$ cd a",
  "$ ls",
  "dir e",
  "29116 f",
  "2557 g",
  "62596 h.lst",
  "$ cd e",
  "$ ls",
  "584 i",
  "$ cd ..",
  "$ cd ..",
  "$ cd d",
  "$ ls",
  "4060174 j",
  "8033020 d.log",
  "5626152 d.ext",
  "7214296 k",
];
console.log(space(example)); // 95437

// Now, you're ready to choose a directory to delete.

// The total disk space available to the filesystem is 70000000. To run the update, you need unused space of at least 30000000. You need to find a directory you can delete that will free up enough space to run the update.

// In the example above, the total size of the outermost directory (and thus the total amount of used space) is 48381165; this means that the size of the unused space must currently be 21618835, which isn't quite the 30000000 required by the update. Therefore, the update still requires a directory with total size of at least 8381165 to be deleted before it can run.

// To achieve this, you have the following options:

// Delete directory e, which would increase unused space by 584.
// Delete directory a, which would increase unused space by 94853.
// Delete directory d, which would increase unused space by 24933642.
// Delete directory /, which would increase unused space by 48381165.
// Directories e and a are both too small; deleting them would not free up enough space. However, directories d and / are both big enough! Between these, choose the smallest: d, increasing unused space by 24933642.

// Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?

const update = (commands) => {
  commands = commands.filter((x) => !x.includes("$ ls") && !x.includes("dir "));
  let curPath = [];

  let tree = commands.reduce((a, c) => {
    if (!c.includes("$ cd ")) {
      const curSize = +c.split(" ").shift();
      let path = "";
      curPath.forEach((c, i) => {
        path += `${c}/`;
        a[path] ? (a[path] += curSize) : (a[path] = curSize);
      });
    } else {
      if (c === "$ cd /") curPath = ["/"];
      else if (c === "$ cd ..") curPath.pop();
      else curPath.push(c.split(" ").pop());
    }
    return a;
  }, {});

  let size = 30000000 - (70000000 - tree["//"]);

  return Object.values(tree)
    .filter((x) => x >= size)
    .sort((a, b) => a - b)
    .shift();
};

console.log(update(example)); // 24933642

// That took a while
// Couldn't find the error caused by duplicate folder names in different depths of the folder tree
// Resolved it with 'path += `${c}/`' */

// Advent of code - Day 8: Treetop Tree House         12/8/2022
/* 
// The expedition comes across a peculiar patch of tall trees all planted carefully in a grid. The Elves explain that a previous expedition planted these trees as a reforestation effort. Now, they're curious if this would be a good location for a tree house.

// First, determine whether there is enough tree cover here to keep a tree house hidden. To do this, you need to count the number of trees that are visible from outside the grid when looking directly along a row or column.

// The Elves have already launched a quadcopter to generate a map with the height of each tree (your puzzle input). For example:

// 30373
// 25512
// 65332
// 33549
// 35390

// Each tree is represented as a single digit whose value is its height, where 0 is the shortest and 9 is the tallest.

// A tree is visible if all of the other trees between it and an edge of the grid are shorter than it. Only consider trees in the same row or column; that is, only look up, down, left, or right from any given tree.

// All of the trees around the edge of the grid are visible - since they are already on the edge, there are no trees to block the view. In this example, that only leaves the interior nine trees to consider:

// The top-left 5 is visible from the left and top. (It isn't visible from the right or bottom since other trees of height 5 are in the way.)
// The top-middle 5 is visible from the top and right.
// The top-right 1 is not visible from any direction; for it to be visible, there would need to only be trees of height 0 between it and an edge.
// The left-middle 5 is visible, but only from the right.
// The center 3 is not visible from any direction; for it to be visible, there would need to be only trees of at most height 2 between it and an edge.
// The right-middle 3 is visible from the right.
// In the bottom row, the middle 5 is visible, but the 3 and 4 are not.
// With 16 trees visible on the edge and another 5 visible in the interior, a total of 21 trees are visible in this arrangement.

// Consider your map; how many trees are visible from outside the grid?

const heights = (grid) => {
  let count = 2 * (grid[0].length + grid.length - 2);

  const isTaller = (tree, adj) => {
    let isTaller = true;
    for (let i = 0; i < adj.length; i++)
      if (adj[i] >= tree) {
        isTaller = false;
        break;
      }
    return isTaller;
  };

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      const tree = +grid[i][j];

      let l = isTaller(tree, grid[i].slice(0, j));
      let r = isTaller(tree, grid[i].slice(j + 1));

      let t = "",
        b = "";
      for (let k = 0; k < i; k++) t += grid[k][j];
      for (let k = i + 1; k < grid.length; k++) b += grid[k][j];

      t = isTaller(tree, t);
      b = isTaller(tree, b);

      count += l || r || t || b;
    }
  }
  return count;
};

console.log(heights(["30373", "25512", "65332", "33549", "35390"])); // 21

// --- Part Two ---

// Content with the amount of tree cover available, the Elves just need to know the best spot to build their tree house: they would like to be able to see a lot of trees.

// To measure the viewing distance from a given tree, look up, down, left, and right from that tree; stop if you reach an edge or at the first tree that is the same height or taller than the tree under consideration. (If a tree is right on the edge, at least one of its viewing distances will be zero.)

// The Elves don't care about distant trees taller than those found by the rules above; the proposed tree house has large eaves to keep it dry, so they wouldn't be able to see higher than the tree house anyway.

// In the example above, consider the middle 5 in the second row:

// 30373
// 25512
// 65332
// 33549
// 35390
// Looking up, its view is not blocked; it can see 1 tree (of height 3).
// Looking left, its view is blocked immediately; it can see only 1 tree (of height 5, right next to it).
// Looking right, its view is not blocked; it can see 2 trees.
// Looking down, its view is blocked eventually; it can see 2 trees (one of height 3, then the tree of height 5 that blocks its view).
// A tree's scenic score is found by multiplying together its viewing distance in each of the four directions. For this tree, this is 4 (found by multiplying 1 * 1 * 2 * 2).

// However, you can do even better: consider the tree of height 5 in the middle of the fourth row:

// 30373
// 25512
// 65332
// 33549
// 35390
// Looking up, its view is blocked at 2 trees (by another tree with a height of 5).
// Looking left, its view is not blocked; it can see 2 trees.
// Looking down, its view is also not blocked; it can see 1 tree.
// Looking right, its view is blocked at 2 trees (by a massive tree of height 9).
// This tree's scenic score is 8 (2 * 2 * 1 * 2); this is the ideal spot for the tree house.

// Consider each tree on your map. What is the highest scenic score possible for any tree?

const scenic = (grid) => {
  let scores = [];

  const countScore = (tree, adj) => {
    let count = 0;
    for (let i = 0; i < adj.length; i++) {
      count++;
      if (tree <= adj[i]) break;
    }
    if (count === 0) count++;
    return count;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const tree = +grid[i][j];

      let l = countScore(tree, grid[i].slice(0, j).split("").reverse());
      let r = countScore(tree, grid[i].slice(j + 1));

      let t = "",
        b = "";
      for (let k = 0; k < i; k++) t += grid[k][j];
      for (let k = i + 1; k < grid.length; k++) b += grid[k][j];
      t = countScore(tree, [...t].reverse().join(""));
      b = countScore(tree, b);

      scores.push(l * r * t * b);
    }
  }
  return Math.max(...scores);
};

console.log(scenic(["30373", "25512", "65332", "33549", "35390"])); // 16

// Definitely some runtime optimization to be had, but works
// If I had to redo it, I would append to the top and bottom accumulators instead of rebuilding them on every iteration */

// Advent of code - Day 9: Rope Bridge          12/9/2022
/* 
// This rope bridge creaks as you walk along it. You aren't sure how old it is, or whether it can even support your weight.

// It seems to support the Elves just fine, though. The bridge spans a gorge which was carved out by the massive river far below you.

// You step carefully; as you do, the ropes stretch and twist. You decide to distract yourself by modeling rope physics; maybe you can even figure out where not to step.

// Consider a rope with a knot at each end; these knots mark the head and the tail of the rope. If the head moves far enough away from the tail, the tail is pulled toward the head.

// Due to nebulous reasoning involving Planck lengths, you should be able to model the positions of the knots on a two-dimensional grid. Then, by following a hypothetical series of motions (your puzzle input) for the head, you can determine how the tail will move.

// Due to the aforementioned Planck lengths, the rope must be quite short; in fact, the head (H) and tail (T) must always be touching (diagonally adjacent and even overlapping both count as touching):

// ....
// .TH.
// ....

// ....
// .H..
// ..T.
// ....

// ...
// .H. (H covers T)
// ...
// If the head is ever two steps directly up, down, left, or right from the tail, the tail must also move one step in that direction so it remains close enough:

// .....    .....    .....
// .TH.. -> .T.H. -> ..TH.
// .....    .....    .....

// ...    ...    ...
// .T.    .T.    ...
// .H. -> ... -> .T.
// ...    .H.    .H.
// ...    ...    ...
// Otherwise, if the head and tail aren't touching and aren't in the same row or column, the tail always moves one step diagonally to keep up:

// .....    .....    .....
// .....    ..H..    ..H..
// ..H.. -> ..... -> ..T..
// .T...    .T...    .....
// .....    .....    .....

// .....    .....    .....
// .....    .....    .....
// ..H.. -> ...H. -> ..TH.
// .T...    .T...    .....
// .....    .....    .....
// You just need to work out where the tail goes as the head follows a series of motions. Assume the head and the tail both start at the same position, overlapping.

// For example:

// R 4
// U 4
// L 3
// D 1
// R 4
// D 1
// L 5
// R 2

// After simulating the rope, you can count up all of the positions the tail visited at least once. In this diagram, s again marks the starting position (which the tail also visited) and # marks other positions the tail visited:

// ..##..
// ...##.
// .####.
// ....#.
// s###..
// So, there are 13 positions the tail visited at least once.

// Simulate your complete hypothetical series of motions. How many positions does the tail of the rope visit at least once?

const rope = (moves) => {
  const isAdj = (T, H) => {
    let [Tx, Ty] = T;
    let [Hx, Hy] = H;
    return Math.abs(Tx - Hx) <= 1 && Math.abs(Ty - Hy) <= 1;
  };

  let T = [0, 0];
  let H = [0, 0];

  let map = { "00": "#" };
  moves.reduce((_, move) => {
    let [d, num] = move.split(" ");

    for (; num > 0; num--) {
      if (d === "U") H[1]++;
      if (d === "D") H[1]--;
      if (d === "R") H[0]++;
      if (d === "L") H[0]--;

      if (isAdj(T, H) && num > 1) {
        T = H;
        map[`${T.join("")}`] = "#";
        console.log(T);
      }
    }
    return map;
  }, {});

  console.log(map);
  return Object.values(map).length;
};

console.log(rope(["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"])); // 13

// Got stuck and could not resolve
// See a Javascript solution below

const moveTail = ([head, ...tail]) => {
  if (!tail.length) return [head];
  const [next, ...rest] = tail;
  const delta = head[0].map((c, i) => c - next[0][i]);
  return delta.some((d) => Math.abs(d) > 1)
    ? [
        head,
        ...moveTail([
          [next[0].map((c, i) => c + Math.sign(delta[i])), ...next],
          ...rest,
        ]),
      ]
    : [head, ...tail];
};

const part1 = (input, knots = 2) =>
  input
    .map((line) => line.split(" "))
    .reduce(
      (result, [d, steps]) => [
        ...result,
        ...Array(Number(steps)).fill(
          {
            U: [0, -1],
            D: [0, 1],
            L: [-1, 0],
            R: [1, 0],
          }[d]
        ),
      ],
      []
    )
    .reduce(
      ([head, ...tail], dir) =>
        moveTail([[dir.map((c, i) => head[0][i] + c), ...head], ...tail]),
      Array.from({ length: knots }, () => [[0, 0]])
    )
    .at(-1)
    .map((trail) => trail.join(","))
    .filter((v, i, a) => a.indexOf(v) === i).length;

const part2 = (input) => part1(input, 10);

// I kept encountering bugs with adjacence detection */

// Advent of code - Day 10: Cathode-Ray Tube          12/10/2022
/* 
// You avoid the ropes, plunge into the river, and swim to shore.

// The Elves yell something about meeting back up with them upriver, but the river is too loud to tell exactly what they're saying. They finish crossing the bridge and disappear from view.

// Situations like this must be why the Elves prioritized getting the communication system on your handheld device working. You pull it out of your pack, but the amount of water slowly draining from a big crack in its screen tells you it probably won't be of much immediate use.

// Unless, that is, you can design a replacement for the device's video system! It seems to be some kind of cathode-ray tube screen and simple CPU that are both driven by a precise clock circuit. The clock circuit ticks at a constant rate; each tick is called a cycle.

// Start by figuring out the signal being sent by the CPU. The CPU has a single register, X, which starts with the value 1. It supports only two instructions:

// addx V takes two cycles to complete. After two cycles, the X register is increased by the value V. (V can be negative.)
// noop takes one cycle to complete. It has no other effect.
// The CPU uses these instructions in a program (your puzzle input) to, somehow, tell the screen what to draw.

// Consider the following small program:

// noop
// addx 3
// addx -5

// Execution of this program proceeds as follows:

// At the start of the first cycle, the noop instruction begins execution. During the first cycle, X is 1. After the first cycle, the noop instruction finishes execution, doing nothing.
// At the start of the second cycle, the addx 3 instruction begins execution. During the second cycle, X is still 1.
// During the third cycle, X is still 1. After the third cycle, the addx 3 instruction finishes execution, setting X to 4.
// At the start of the fourth cycle, the addx -5 instruction begins execution. During the fourth cycle, X is still 4.
// During the fifth cycle, X is still 4. After the fifth cycle, the addx -5 instruction finishes execution, setting X to -1.
// Maybe you can learn something by looking at the value of the X register throughout execution. For now, consider the signal strength (the cycle number multiplied by the value of the X register) during the 20th cycle and every 40 cycles after that (that is, during the 20th, 60th, 100th, 140th, 180th, and 220th cycles).

// Find the signal strength during the 20th, 60th, 100th, 140th, 180th, and 220th cycles. What is the sum of these six signal strengths?

const samples = [20, 60, 100, 140, 180, 220];

const part1 = (instructions, cycle = 0, x = 1) =>
  instructions.reduce((sum, cur) => {
    cycle++;
    if (samples.includes(cycle)) sum += cycle * x;
    if (cur.includes("addx ")) {
      cycle++;
      if (samples.includes(cycle)) sum += cycle * x;
      x += +cur.substring(5);
    }
    return sum;
  }, 0);

const part2 = (instructions, x = 0) => {
  instructions = instructions.reduce((acc, cur) => {
    if (cur === "noop") acc.push("tick");
    else {
      acc.push("tick");
      acc.push(cur.substring(5));
    }
    return acc;
  }, []);

  let crt = new Array(6).fill(new Array(40).fill("."));

  for (let row = 0; row < crt.length; row++) {
    for (let col = 0; col < crt[row].length; col++) {
      let cur = instructions.shift();
      console.log(cur, x);
      if (cur === "tick") {
        if ([x, x + 1, x + 2].includes(col)) crt[row][col] = "#";
      } else {
        x += +cur;
      }
    }
  }

  return crt;
};

// Part 1 was solved quickly
// Couldn't get part 2 working

// See other user's submission below

const topVotedPart2 = () => {
  function checkLine() {
    sprite = [X - 1, X, X + 1];
    if (sprite.includes(cycle)) {
      line.push("#");
    } else {
      line.push(" ");
    }
    cycle++;
    if (cycle % 40 === 0) {
      console.log(line);
      line = [];
      X += 40;
    }
  }
  let cycle = 0;
  let X = 1;
  let sprite = [];
  let line = [];
  let instructions = ["noop", "addx 6", "noop", "addx 30", "addx -26"].map(
    (x) => x.split(" ")
  ); // insert key here

  for (let i = 0; i < instructions.length; i++) {
    let action = instructions[i][0];
    let value = parseInt(instructions[i][1]);
    if (action === "noop") {
      checkLine();
    }
    if (action === "addx") {
      checkLine();
      checkLine();
      X += value;
    }
  }
}; */

// Advent of code - Day 11: Monkey in the Middle          12/11/2022
/* 
const part1 = (monkeys) => {
  for (let i = 0; i < 20; i++) {
    Object.entries(monkeys).forEach((monkey) => {
      const [id] = monkey[0];
      let { start: inv, opp, test } = monkey[1];
      while (inv.length > 0) {
        const cur = Math.floor(opp(inv.shift()) / 3);
        monkeys[id].count++;
        monkeys[test(cur)]?.start.push(cur);
      }
    });
  }
  return Object.values(monkeys)
    .sort((a, b) => b.count - a.count)
    .slice(0, 2)
    .reduce((a, c) => a.count * c.count);
};

const part2 = (monkeys) => {
  for (let i = 0; i < 10000; i++) {
    Object.entries(monkeys).forEach((monkey) => {
      const [id] = monkey[0];
      let { start: inv, opp, test } = monkey[1];
      while (inv.length > 0) {
        const cur = Math.floor(opp(inv.shift()));
        monkeys[id].count++;
        monkeys[test(cur)]?.start.push(cur);
      }
    });
  }
  return Object.values(monkeys)
    .sort((a, b) => b.count - a.count)
    .slice(0, 2)
    .reduce((a, c) => a.count * c.count);
};

const example = {
  0: {
    start: [79, 98],
    opp: (x) => x * 19,
    test: (x) => (x % 23 === 0 ? 2 : 3),
    count: 0,
  },
  1: {
    start: [54, 65, 75, 74],
    opp: (x) => x + 6,
    test: (x) => (x % 19 === 0 ? 2 : 0),
    count: 0,
  },
  2: {
    start: [79, 60, 97],
    opp: (x) => x * x,
    test: (x) => (x % 13 === 0 ? 1 : 3),
    count: 0,
  },
  3: {
    start: [74],
    opp: (x) => x + 3,
    test: (x) => (x % 17 === 0 ? 0 : 1),
    count: 0,
  },
};
console.log(part1(example)); // 10605
console.log(part2(example)); // 2713310158

const puzzleInput = {
  0: {
    start: [59, 74, 65, 86],
    opp: (x) => x * 19,
    test: (x) => (x % 7 === 0 ? 6 : 2),
    count: 0,
  },
  1: {
    start: [62, 84, 72, 91, 68, 78, 51],
    opp: (x) => x + 1,
    test: (x) => (x % 2 === 0 ? 2 : 0),
    count: 0,
  },
  2: {
    start: [78, 84, 96],
    opp: (x) => x + 8,
    test: (x) => (x % 19 === 0 ? 6 : 5),
    count: 0,
  },
  3: {
    start: [97, 86],
    opp: (x) => x * x,
    test: (x) => (x % 3 === 0 ? 1 : 0),
    count: 0,
  },
  4: {
    start: [50],
    opp: (x) => x + 6,
    test: (x) => (x % 13 === 0 ? 3 : 1),
    count: 0,
  },
  5: {
    start: [73, 65, 69, 65, 51],
    opp: (x) => x * 17,
    test: (x) => (x % 11 === 0 ? 4 : 7),
    count: 0,
  },
  6: {
    start: [69, 82, 97, 93, 82, 84, 58, 63],
    opp: (x) => x + 5,
    test: (x) => (x % 5 === 0 ? 5 : 7),
    count: 0,
  },
  7: {
    start: [81, 78, 82, 76, 79, 80],
    opp: (x) => x + 3,
    test: (x) => (x % 17 === 0 ? 3 : 4),
    count: 0,
  },
};

console.log(part1(puzzleInput)); // 61005
console.log(part2(puzzleInput)); //

// Part 2 requires some BigInt() shenanigans to accomodate for the ridiculous stress levels
// Only doing part 1 for today

// May revisit in the future

// The solution was actually modular arithmetic, not BigInt lol */

// Advent of code - Day 12: Hill Climbing Algorithm         12/12/2022
/* 
// https://adventofcode.com/2022/day/12

// No time today, here's a javascript solution:

const { input } = require("./parse");

let heightMap = input.heightMap;

let endPos = input.endPos;
let startPos = input.startPos;

let visited = heightMap.map((line) => line.map(() => false));
let shortestPaths = heightMap.map((line) => line.map(() => Infinity));
shortestPaths[endPos.y][endPos.x] = 0;

let queue = [endPos];

while (queue.length > 0) {
  let pos = queue.shift();
  visited[pos.y][pos.x] = true;

  let neighbours = [
    { x: pos.x, y: pos.y - 1 },
    { x: pos.x, y: pos.y + 1 },
    { x: pos.x - 1, y: pos.y },
    { x: pos.x + 1, y: pos.y },
  ];

  neighbours = neighbours.filter((neighbour) => {
    return heightMap[neighbour.y]?.[neighbour.x] !== undefined;
  });

  neighbours.forEach((neighbour) => {
    let currHeight = heightMap[pos.y][pos.x];
    let nextHeight = heightMap[neighbour.y][neighbour.x];
    if (currHeight >= nextHeight - 1) {
      let shortestDist = shortestPaths[neighbour.y][neighbour.x] + 1;
      let currShortestDist = shortestPaths[pos.y][pos.x];
      shortestPaths[pos.y][pos.x] = Math.min(currShortestDist, shortestDist);
    }

    if (!visited[neighbour.y][neighbour.x] && currHeight <= nextHeight + 1) {
      queue.push(neighbour);
      visited[neighbour.y][neighbour.x] = true;
    }
  });
}

console.log(shortestPaths[startPos.y][startPos.x]);

// Looking at the subreddit, it seems Dijkstra's algorithm or Breadth First Search are the two main approaches

// Will have to attempt them at some point in the future */

// Advent of code - Day 13: Distress Signal         12/13/2022
/* 
// https://adventofcode.com/2022/day/13

// Tried for a while, but couldn't get it working
// Ended up with a wall of if/elses

// See a javascript solution found on the subreddit below

let input = "";

await fetch("/in.txt")
  .then((res) => res.text())
  .then(
    (data) =>
      (input = data
        .split("\n\n")
        .map((x) => x.split("\n"))
        .map((x) => [eval(x[0]), eval(x[1])]))
  );

let indiciesSum = 0;

for (let i = 0; i < input.length; i++) {
  if (checkPackets(input[i][0], input[i][1])) {
    indiciesSum += i + 1;
    console.log(i + 1);
  }
}

console.log(indiciesSum); // answer

function checkPackets(leftPacket, rightPacket) {
  console.log(
    `compare ${JSON.stringify(leftPacket)} vs ${JSON.stringify(rightPacket)}`
  );

  let i = 0;
  for (; i < leftPacket.length; i++) {
    let left = leftPacket[i];
    let right = rightPacket[i];

    if (right === undefined) {
      return false;
    }

    if (typeof left === "number" && typeof right === "number") {
      console.log(`compare ${left} vs ${right}`);

      if (left < right) {
        return true;
      } else if (left > right) {
        return false;
      } else {
        continue;
      }
    } else if (typeof left === "object" && typeof right === "object") {
      let statusOfNestedArray = checkPackets(left, right);
      if (statusOfNestedArray == null) {
        continue;
      } else {
        return statusOfNestedArray;
      }
    } else {
      console.log("mixed types");
      if (typeof left === "number") {
        let statusOfNestedArray = checkPackets([left], right);
        if (statusOfNestedArray == null) {
          continue;
        } else {
          return statusOfNestedArray;
        }
      } else {
        let statusOfNestedArray = checkPackets(left, [right]);
        if (statusOfNestedArray == null) {
          continue;
        } else {
          return statusOfNestedArray;
        }
      }
    }
  }

  if (rightPacket.length > i) {
    console.log(
      "  - Left side ran out of items, so inputs are in the right order"
    );
    return true;
  } else {
    return null;
  }
}

// Might have to reconsider the coding advent
// The first days were easy, but now they're taking a bit too long and I'm out of my depths

// May spend a couple days studying some of the previously missed days */

// Circular Sentence          12/14/2022
/* 
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
// Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

// A sentence is circular if:

// The last character of a word is equal to the first character of the next word.
// The last character of the last word is equal to the first character of the first word.
// For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

// Given a string sentence, return true if it is circular. Otherwise, return false.

// Example 1:
// Input: sentence = "leetcode exercises sound delightful"
// Output: true
// Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
// - leetcode's last character is equal to exercises's first character.
// - exercises's last character is equal to sound's first character.
// - sound's last character is equal to delightful's first character.
// - delightful's last character is equal to leetcode's first character.
// The sentence is circular.

// Example 2:
// Input: sentence = "eetcode"
// Output: true
// Explanation: The words in sentence are ["eetcode"].
// - eetcode's last character is equal to eetcode's first character.
// The sentence is circular.

// Example 3:
// Input: sentence = "Leetcode is cool"
// Output: false
// Explanation: The words in sentence are ["Leetcode", "is", "cool"].
// - Leetcode's last character is not equal to is's first character.
// The sentence is not circular.

// Constraints:
// 1 <= sentence.length <= 500
// sentence consist of only lowercase and uppercase English letters and spaces.
// The words in sentence are separated by a single space.
// There are no leading or trailing spaces.

const isCircularSentence = (s) => {
  s = s.split(" ");
  if (s.length === 1) {
    s = [...s[0]];
    const [f, l] = [s.shift(), s.pop()];
    return f === l;
  }
  for (let i = 0; i < s.length - 1; i++)
    if (s[i].substring(s[i].length - 1) !== s[i + 1].substring(0, 1))
      return false;
  if ([...s.pop()].pop() !== [...s.shift()].shift()) return false;
  return true;
};

console.log(isCircularSentence("leetcode exercises sound delightful")); // true
console.log(isCircularSentence("eetcode")); // true
console.log(isCircularSentence("Leetcode is cool")); // false

// Doesn't work for all test cases
// No time today, I have a final in a few hours!

const topVotedIsCircularSentence = function (sentence) {
  const words = sentence.split(" ");
  const lastWord = words[words.length - 1];
  let lastChar = lastWord[lastWord.length - 1];

  for (const word of words) {
    if (word[0] !== lastChar) {
      return false;
    }
    lastChar = word[word.length - 1];
  }

  return true;
};

// So much cleaner */

// Maximum Value of a String in an Array          12/15/2022
/* 
// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

// Example 1:
// Input: strs = ["alic3","bob","3","4","00000"]
// Output: 5
// Explanation:
// - "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
// - "bob" consists only of letters, so its value is also its length, i.e. 3.
// - "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
// - "4" also consists only of digits, so its value is 4.
// - "00000" consists only of digits, so its value is 0.
// Hence, the maximum value is 5, of "alic3".

// Example 2:
// Input: strs = ["1","01","001","0001"]
// Output: 1
// Explanation:
// Each string in the array has value 1. Hence, we return 1.

// Constraints:
// 1 <= strs.length <= 100
// 1 <= strs[i].length <= 9
// strs[i] consists of only lowercase English letters and digits.

const maximumValue = (strs) =>
  strs.reduce((a, c) => Math.max(isNaN(+c) ? c.length : +c, a), 0);

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"])); // 5
console.log(maximumValue(["1", "01", "001", "0001"])); // 1

// Clean

const topVotedMaximumValue = function (strs) {
  let result = 0;
  const regex = /^\d+$/;
  for (let i = 0; i < strs.length; ++i) {
    result = Math.max(result, regex.test(strs[i]) ? +strs[i] : strs[i].length);
  }
  return result;
};

// Thought about using Regex, but didn't want to overcomplicate things */

// Minimum Cuts to Divide a Circle          12/16/2022
/* 
// A valid cut in a circle can be:

// A cut that is represented by a straight line that touches two points on the edge of the circle and passes through its center, or
// A cut that is represented by a straight line that touches one point on the edge of the circle and its center.
// Some valid and invalid cuts are shown in the figures below.
// https://assets.leetcode.com/uploads/2022/10/29/alldrawio.png

// Given the integer n, return the minimum number of cuts needed to divide a circle into n equal slices.

// Example 1:
// https://assets.leetcode.com/uploads/2022/10/24/11drawio.png
//    Input: n = 4
//    Output: 2
// Explanation:
// The above figure shows how cutting the circle twice through the middle divides it into 4 equal slices.

// Example 2:
// https://assets.leetcode.com/uploads/2022/10/24/22drawio.png
//    Input: n = 3
//    Output: 3
// Explanation:
// At least 3 cuts are needed to divide the circle into 3 equal slices.
// It can be shown that less than 3 cuts cannot result in 3 slices of equal size and shape.
// Also note that the first cut will not divide the circle into distinct parts.

// Constraints:
//  1 <= n <= 100

const numberOfCuts = (n) => (n === 1 ? 0 : n % 2 ? n : n / 2);

console.log(numberOfCuts(4)); // 2
console.log(numberOfCuts(3)); // 3

// Faster than 90% of submissions
// Same as top voted */

// Delete Greatest Value in Each Row          12/17/2022
/* 
// You are given an m x n matrix grid consisting of positive integers.

// Perform the following operation until grid becomes empty:

// Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
// Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.

// Return the answer after performing the operations described above.

// Example 1:
// https://assets.leetcode.com/uploads/2022/10/19/q1ex1.jpg
//    Input: grid = [[1,2,4],[3,3,1]]
//    Output: 8
// Explanation: The diagram above shows the removed values in each step.
// - In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
// - In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
// - In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
// The final answer = 4 + 3 + 1 = 8.

// Example 2:
// https://assets.leetcode.com/uploads/2022/10/19/q1ex2.jpg
//    Input: grid = [[10]]
//    Output: 10
// Explanation: The diagram above shows the removed values in each step.
// - In the first operation, we remove 10 from the first row. We add 10 to the answer.
// The final answer = 10.

// Constraints:
//    m == grid.length
//    n == grid[i].length
//    1 <= m, n <= 50
//    1 <= grid[i][j] <= 100

const deleteGreatestValue = (grid) => {
  grid.sort((a, b) => b.length - a.length).map((c) => c.sort((a, b) => a - b));
  let ans = 0;
  while (grid[0].length >= 1) {
    let acc = [];
    grid = grid.map((c) => {
      acc.push(c.pop());
      return c;
    });
    ans += Math.max(...acc);
  }
  return ans;
};

// prettier-ignore
console.log(deleteGreatestValue([[1,2,4],[3,3,1]])); // 8
console.log(deleteGreatestValue([[10]])); // 10

// I like this

const topVotedDeleteGreatestValue = function (grid) {
  let sum = 0,
    idx = 0;
  for (let i = 0; i < grid.length; i++) grid[i].sort((a, b) => b - a);

  while (idx < grid[0].length) {
    let max = -Infinity;
    for (let i = 0; i < grid.length; i++) {
      max = Math.max(grid[i][idx], max);
    }

    idx++;
    sum += max;
  }

  return sum;
};

// Similar, different way of identifying max */

// Count Pairs Of Similar Strings         12/18/2022
/* 
// You are given a 0-indexed string array words.

// Two strings are similar if they consist of the same characters.

// For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
// However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
// Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

// Example 1:
//    Input: words = ["aba","aabb","abcd","bac","aabc"]
//    Output: 2
// Explanation: There are 2 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'.
// - i = 3 and j = 4 : both words[3] and words[4] only consist of characters 'a', 'b', and 'c'.

// Example 2:
//    Input: words = ["aabb","ab","ba"]
//    Output: 3
// Explanation: There are 3 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'.
// - i = 0 and j = 2 : both words[0] and words[2] only consist of characters 'a' and 'b'.
// - i = 1 and j = 2 : both words[1] and words[2] only consist of characters 'a' and 'b'.

// Example 3:
//    Input: words = ["nba","cba","dba"]
//    Output: 0
// Explanation: Since there does not exist any pair that satisfies the conditions, we return 0.

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length <= 100
//    words[i] consist of only lowercase English letters.

const similarPairs = (words) =>
  words
    .map((c) => [...new Set(c)].sort().join(""))
    .reduce((a, c, i, arr) => {
      for (let j = i + 1; j < arr.length; j++) if (c === arr[j]) a++;
      return a;
    }, 0);

console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"])); // 2
console.log(similarPairs(["aabb", "ab", "ba"])); // 3
console.log(similarPairs(["nba", "cba", "dba"])); // 0

// 100% Runtime/Memory
// Other posted solutions are pretty long and bulky */

// Reverse Words in a String         12/19/2022
/* 
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:
//    Input: s = "the sky is blue"
//    Output: "blue is sky the"

// Example 2:
//    Input: s = "  hello world  "
//    Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
//    Input: s = "a good   example"
//    Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Constraints:
//    1 <= s.length <= 104
//    s contains English letters (upper-case and lower-case), digits, and spaces ' '.
//    There is at least one word in s.

// Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

const reverseWords = (s) => s.trim().split(/\s+/).reverse().join(" ");

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"

// Same as top voted */

// Top K Frequent Elements          12/20/2022
/* 
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
//    Input: nums = [1,1,1,2,2,3], k = 2
//    Output: [1,2]

// Example 2:
//    Input: nums = [1], k = 1
//    Output: [1]

// Constraints:
//    1 <= nums.length <= 105
//    -104 <= nums[i] <= 104
//    k is in the range [1, the number of unique elements in the array].
//    It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

const topKFrequent = (nums, k) => {
  const count = nums.reduce((a, c) => {
    a[c] ? a[c]++ : (a[c] = 1);
    return a;
  }, {});
  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((c) => +c[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]

// 100% Runtime
// Not sure I'm respecting the O(n log n) complexity */

// Compare Version Numbers          12/21/2022
/* 
// Given two version numbers, version1 and version2, compare them.

// Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

// To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

// Return the following:

// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.

// Example 1:
//    Input: version1 = "1.01", version2 = "1.001"
//    Output: 0
// Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

// Example 2:
//    Input: version1 = "1.0", version2 = "1.0.0"
//    Output: 0
// Explanation: version1 does not specify revision 2, which means it is treated as "0".

// Example 3:
//    Input: version1 = "0.1", version2 = "1.1"
//    Output: -1
// Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.

// Constraints:
//    1 <= version1.length, version2.length <= 500
//    version1 and version2 only contain digits and '.'.
//    version1 and version2 are valid version numbers.
//    All the given revisions in version1 and version2 can be stored in a 32-bit integer.

const compareVersion = (ve1, ve2) => {
  const clean = (s) => s.split(".").map((c) => +c);
  let [v1, v2] = [clean(ve1), clean(ve2)];
  for (let i = 0; i < v1.length; i++) {
    if (v1[i] > v2[i]) return 1;
    if (v2[i] > v1[i]) return -1;
  }
  if (v2.length > v1.length && +v2.slice(v1.length).join("") > 0) return -1;
  else if (v1.length > v2.length && +v1.slice(v2.length).join("") > 0) return 1;
  return 0;
};

console.log(compareVersion("1.01", "1.001")); // 0
console.log(compareVersion("1.0", "1.0.0")); // 0
console.log(compareVersion("1.0.1", "1.0")); // 1
console.log(compareVersion("0.1", "1.1")); // -1

// Better than 90% runtimes

const topVotedCompareVersion = function (version1, version2) {
  let v1Array = version1.split(".");
  let v2Array = version2.split(".");
  let len1 = v1Array.length;
  let len2 = v2Array.length;
  var i = Math.min(len1, len2);

  while (i > 0) {
    var v1Elem = parseInt(v1Array.shift());
    var v2Elem = parseInt(v2Array.shift());
    if (v1Elem > v2Elem) {
      return 1;
    } else if (v1Elem < v2Elem) {
      return -1;
    }
    i--;
  }

  if (len1 > len2) {
    if (parseInt(v1Array.join("")) > 0) {
      return 1;
    }
  } else if (len1 < len2) {
    if (parseInt(v2Array.join("")) > 0) {
      return -1;
    }
  }

  return 0;
};

// Same as mine, but bit bulkier */

// Valid Sudoku         12/22/2022
/* 
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:
//    Input: board =
//    [["5","3",".",".","7",".",".",".","."]
//    ,["6",".",".","1","9","5",".",".","."]
//    ,[".","9","8",".",".",".",".","6","."]
//    ,["8",".",".",".","6",".",".",".","3"]
//    ,["4",".",".","8",".","3",".",".","1"]
//    ,["7",".",".",".","2",".",".",".","6"]
//    ,[".","6",".",".",".",".","2","8","."]
//    ,[".",".",".","4","1","9",".",".","5"]
//    ,[".",".",".",".","8",".",".","7","9"]]
//    Output: true

// Example 2:
//    Input: board =
//    [["8","3",".",".","7",".",".",".","."]
//    ,["6",".",".","1","9","5",".",".","."]
//    ,[".","9","8",".",".",".",".","6","."]
//    ,["8",".",".",".","6",".",".",".","3"]
//    ,["4",".",".","8",".","3",".",".","1"]
//    ,["7",".",".",".","2",".",".",".","6"]
//    ,[".","6",".",".",".",".","2","8","."]
//    ,[".",".",".","4","1","9",".",".","5"]
//    ,[".",".",".",".","8",".",".","7","9"]]
//    Output: false
//    Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:
//    board.length == 9
//    board[i].length == 9
//    board[i][j] is a digit 1-9 or '.'.

const isValidSudoku = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cur = board[i][j];
      if (cur === ".") continue;

      const row = [...board[i].slice(0, j), ...board[i].slice(j + 1)];
      if (row.includes(cur)) return false;

      let col = [];
      for (let k = 0; k < board.length; k++) {
        if (k === i) continue;
        col.push(board[k][j]);
      }
      if (col.includes(cur)) return false;
    }
  }

  let squares = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") continue;
      const cur = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;
      squares[cur]
        ? squares[cur].push(board[i][j])
        : (squares[cur] = [board[i][j]]);
    }
  }
  squares = Object.values(squares);
  for (let i = 0; i < squares.length; i++)
    if (squares[i].length !== new Set(squares[i]).size) return false;

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // true
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // false
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["2", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // false

// Better than 90% of runtimes
// Thought of doing squares at same time, but couldn't get it going

const topVotedIsValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (_row != ".") {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != ".") {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      if (_box != ".") {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true;
};

// Saves a lot of effort by going incrementally, not checking later values */

// Rotate Array         12/23/2022
/* 
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
//     Input: nums = [1,2,3,4,5,6,7], k = 3
//     Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
//     Input: nums = [-1,-100,3,99], k = 2
//     Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:
//     1 <= nums.length <= 105
//     -231 <= nums[i] <= 231 - 1
//     0 <= k <= 105

// Follow up:
//     Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
//     Could you do it in-place with O(1) extra space?

const rotate = (nums, k) => {
  for (let i = 0; i < k; i++) nums.unshift(nums.pop());
};
const rotate1 = (nums, k) =>
  nums.unshift(...nums.splice(nums.length - (k % nums.length)));

console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate1([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
console.log(rotate1([1, 2], 5)); // [3,99,-1,-100]

// 2nd solution is nice

var topVotedRotate = function (nums, k) {
  k %= nums.length;
  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }; // suppose  ----->--->
  reverse(0, nums.length - 1); // reverse   <--<------
  reverse(0, k - 1); // reverse first part ---><----
  reverse(k, nums.length - 1); // reverse second part --->----->
};

// Thought about the temp approach
// Better runtime than mine */

// Remove Duplicate Letters         12/24/2022
/* 
// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Example 1:
//    Input: s = "bcabc"
//    Output: "abc"

// Example 2:
//    Input: s = "cbacdcbc"
//    Output: "acdb"

// Constraints:
//    1 <= s.length <= 104
//    s consists of lowercase English letters.

const topVotedRemoveDuplicateLetters = (s) => {
  const stack = [];
  const seen = {};
  const occurrence = {};
  for (let j = 0; j < s.length; j++) occurrence[s[j]] = j;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (seen[char]) continue;
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > char &&
      occurrence[stack[stack.length - 1]] > i
    ) {
      const temp = stack.pop();
      seen[temp] = false;
    }
    seen[char] = true;
    stack.push(char);
  }
  return stack.join("");
};

console.log(removeDuplicateLetters("bcabc")); // "abc"
console.log(removeDuplicateLetters("cbacdcbc")); // "acdb"

// Totally underestimated this one
// See top voted solution above */

// Repeated String Match          12/25/2022
/* 
// Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.

// Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc".

// Example 1:
//    Input: a = "abcd", b = "cdabcdab"
//    Output: 3
// Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.

// Example 2:
//    Input: a = "a", b = "aa"
//    Output: 2

// Constraints:
//    1 <= a.length, b.length <= 104
//    a and b consist of lowercase English letters.

const repeatedStringMatch = (a, b, ans = 1) => {
  if (a.includes(b)) return ans;
  const x = a;
  while (ans <= b.length) {
    a += x;
    ans++;
    if (a.includes(b)) return ans;
  }
  return -1;
};

console.log(repeatedStringMatch("abcd", "cdabcdab")); // 3
console.log(repeatedStringMatch("a", "aa")); // 2
console.log(repeatedStringMatch("abc", "cabcabca")); // 4
console.log(repeatedStringMatch("aaaaaaaaaaaaaaaaaaaaaab", "ba")); // 2

// Runtime limit exceeded

const topVotedRepeatedStringMatch = (A, B) => {
  const count = Math.ceil(B.length / A.length);
  const str = A.repeat(count);
  return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1;
};

// Very nice
// Merry Christmas 🎄 */

// Number of Pairs of Strings With Concatenation Equal to Target          12/26/2022
/* 
// Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

// Example 1:
//    Input: nums = ["777","7","77","77"], target = "7777"
//    Output: 4
// Explanation: Valid pairs are:
// - (0, 1): "777" + "7"
// - (1, 0): "7" + "777"
// - (2, 3): "77" + "77"
// - (3, 2): "77" + "77"

// Example 2:
//    Input: nums = ["123","4","12","34"], target = "1234"
//    Output: 2
// Explanation: Valid pairs are:
// - (0, 1): "123" + "4"
// - (2, 3): "12" + "34"

// Example 3:
//    Input: nums = ["1","1","1"], target = "11"
//    Output: 6
// Explanation: Valid pairs are:
// - (0, 1): "1" + "1"
// - (1, 0): "1" + "1"
// - (0, 2): "1" + "1"
// - (2, 0): "1" + "1"
// - (1, 2): "1" + "1"
// - (2, 1): "1" + "1"

// Constraints:
//    2 <= nums.length <= 100
//    1 <= nums[i].length <= 100
//    2 <= target.length <= 100
//    nums[i] and target consist of digits.
//    nums[i] and target do not have leading zeros.

const numOfPairs = (nums, target) =>
  nums.reduce((a, c, i, arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (j === i) continue;
      if (c + arr[j] === target) a++;
    }
    return a;
  }, 0);

console.log(numOfPairs(["777", "7", "77", "77"], "7777")); // 4
console.log(numOfPairs(["123", "4", "12", "34"], "1234")); // 2
console.log(numOfPairs(["1", "1", "1"], "11")); // 6

// Simple & good runtime

const topVotedNumOfPairs = function (nums, target) {
  var count = 0;
  var x = 0;
  while (x < nums.length) {
    for (let y = 0; y < nums.length; y++) {
      if (nums[x] + nums[y] == target) {
        count += 1;
        if (x == y) {
          count -= 1;
        }
      }
    }
    x++;
  }
  return count;
}; */

// Letter Case Permutation          12/27/2022
/* 
// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

// Example 1:
//    Input: s = "a1b2"
//    Output: ["a1b2","a1B2","A1b2","A1B2"]

// Example 2:
//    Input: s = "3z4"
//    Output: ["3z4","3Z4"]

// Constraints:
//    1 <= s.length <= 12
//    s consists of lowercase English letters, uppercase English letters, and digits.

const topVotedLetterCasePermutation = (s) => {
  let n = s.length;
  let ans = [];
  let arr = [];

  const backtrack = (i) => {
    if (i == n) {
      ans.push(arr.join(""));
      return;
    }
    if (/[a-zA-Z]/.test(s[i])) {
      arr[i] = s[i].toLowerCase();
      backtrack(i + 1);
      arr[i] = s[i].toUpperCase();
      backtrack(i + 1);
    } else {
      arr[i] = s[i];
      backtrack(i + 1);
    }
  };
  backtrack(0);
  return ans;
};

console.log(letterCasePermutation("a1b2")); // ["a1b2","a1B2","A1b2","A1B2"]
console.log(letterCasePermutation("3z4")); // ["3z4","3Z4"]

// I've never successfully backtracked, but studying the top voted here made a lot of sense
// Will try and find a backtracking problem tomorrow */

// Subsets II         12/28/2022
/* 
// Given an integer array nums that may contain duplicates, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
//    Input: nums = [1,2,2]
//    Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
//    Input: nums = [0]
//    Output: [[],[0]]

// Constraints:
//    1 <= nums.length <= 10
//    -10 <= nums[i] <= 10

const subsetsWithDup = (nums) => {
  let ans = [];
  const backtrack = (arr, cur) => {
    ans.push([...cur]);
    for (let i = 0; i < arr.length; i++) {
      if (i == 0 || arr[i] != arr[i - 1]) {
        cur.push(arr[i]);
        backtrack(arr.slice(i + 1), cur);
        cur.pop();
      }
    }
  };
  nums.sort((a, b) => a - b);
  backtrack(nums, []);
  return ans;
};

console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])); // [[],[0]]

// This one clicked even less
// I'll have to do my research on backtracking */

// Boats to Save People         12/29/2022
/* 
// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.

// Example 1:
//    Input: people = [1,2], limit = 3
//    Output: 1
// Explanation: 1 boat (1, 2)

// Example 2:
//    Input: people = [3,2,2,1], limit = 3
//    Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)

// Example 3:
//    Input: people = [3,5,3,4], limit = 5
//    Output: 4
// Explanation: 4 boats (3), (3), (4), (5)

// Constraints:
//    1 <= people.length <= 5 * 104
//    1 <= people[i] <= limit <= 3 * 104

const numRescueBoats = (p, lim) => {
  let count = 0;
  p.sort((a, b) => a - b);
  while (p.length > 0) {
    let cur = p.pop();
    if (cur !== lim) {
      let max = { i: null, w: 0 };
      for (let i = 0; i < p.length; i++) {
        if (cur + max.w === lim) break;
        if (cur + p[i] <= lim && p[i] > max.w) max = { i, w: p[i] };
      }
      if (max.i !== null) p.splice(max.i, 1);
    }
    count++;
  }
  return count;
};
console.log(numRescueBoats([1, 2], 3)); // 1
console.log(numRescueBoats([3, 2, 2, 1], 3)); // 3
console.log(numRescueBoats([3, 5, 3, 4], 5)); // 4

// Terrible runtime

var topVotedNumRescueBoats = function (people, limit) {
  people = people.sort((a, b) => b - a);
  let i = 0,
    j = people.length - 1;
  let count = 0;
  while (i <= j) {
    if (people[i] + people[j] <= limit) j--;
    i++;
    count++;
  }
  return count;
};

// Two pointers drastically improves runtime here */

// H-Index          12/30/2022
/* 
// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return compute the researcher's h-index.

// According to the definition of h-index on Wikipedia: A scientist has an index h if h of their n papers have at least h citations each, and the other n − h papers have no more than h citations each.

// If there are several possible values for h, the maximum one is taken as the h-index.

// Example 1:
//    Input: citations = [3,0,6,1,5]
//    Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

// Example 2:
//    Input: citations = [1,3,1]
//    Output: 1

// Constraints:
//    n == citations.length
//    1 <= n <= 5000
//    0 <= citations[i] <= 1000

const hIndex = (cite) => {
  for (let h = cite.length; h > 0; h--)
    if (h <= cite.filter((x) => x >= h).length) return h;
  return cite.pop();
};

console.log(hIndex([3, 0, 6, 1, 5])); // 3
console.log(hIndex([1, 3, 1])); // 1
console.log(hIndex([0])); // 0

// Pretty concise

const topVotedHIndex = (citations) => {
  citations.sort((a, b) => b - a);
  for (i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) return i;
  }
  return i;
};

// Having it sorted beforehand allows you to save a lot of .filters() */

// Find the Duplicate Number          12/31/2022

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:
//    Input: nums = [1,3,4,2,2]
//    Output: 2

// Example 2:
//    Input: nums = [3,1,3,4,2]
//    Output: 3

// Constraints:
//    1 <= n <= 105
//    nums.length == n + 1
//    1 <= nums[i] <= n
//    All the integers in nums appear only once except for precisely one integer which appears two or more times.

// Follow up:
//    How can we prove that at least one duplicate number must exist in nums?
//    Can you solve the problem in linear runtime complexity?

const findDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++)
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return nums[i];
};
const findDuplicate2 = (nums) => {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    if (!seen[nums[i]]) seen[nums[i]] = true;
    else return nums[i];
  }
};

console.log(findDuplicate2([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate2([3, 1, 3, 4, 2])); // 3

// The first solution exceeds Leetcode's runtime limit
// Second one works, OK runtime

var topVotedFindDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

// Seems this is known as Floyd's Cycle Finding Algorithm (Tortoise and Hare)
// Much faster than my solution

// Happy new years! More coding challenges in 2023! 🎉
