// Two Sum					9/6/2024

// https://leetcode.com/problems/two-sum/description/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// 		Input: nums = [2,7,11,15], target = 9
// 		Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// 		Input: nums = [3,2,4], target = 6
// 		Output: [1,2]

// Example 3:
// 		Input: nums = [3,3], target = 6
// 		Output: [0,1]

// Constraints:
//		2 <= nums.length <= 104
//		-109 <= nums[i] <= 109
//		-109 <= target <= 109
//		Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

let twoSum = function (nums: number[], t: number): number[] {
  const n = nums.length;
  interface map {
    [key: number]: number;
  }
  const seen: map = {};

  for (let i = 0; i < n; i++) {
    if (seen[t - nums[i]] >= 0) return [seen[t - nums[i]], i]; // solution found
    else seen[nums[i]] = i; // map num's idx
  }

  return [-1, -1]; // no solution found
};

console.log(twoSum([2, 7, 11, 15], 9)); //  [0,1]
console.log(twoSum([3, 2, 4], 6)); //  [1,2]
console.log(twoSum([3, 3], 6)); //  [0,1]

// first TypeScript problem today
// interface made it so seen key/value pairs are always number/number

function topVotedTwoSum(nums: number[], target: number): number[] {
  let tmp = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (tmp.has(target - nums[i])) {
      return [tmp.get(target - nums[i]), i];
    }
    tmp.set(nums[i], i);
  }
  return [-1, -1];
}

// seems the interface wasn't needed
