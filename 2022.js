// Subtract the Product and Sum of Digits of an Integer         1/1/2022

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

// Same idea, cleaner code
