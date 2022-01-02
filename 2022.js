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

// Element Appearing More Than 25% In Sorted Array          1/2/2021

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
// Great memory, not great runtime
