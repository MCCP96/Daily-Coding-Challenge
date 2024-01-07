// Image Smoother					1/1/2024
/* 
// An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).

// Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it.

// Example 1:
// 		Input: img = [[1,1,1],[1,0,1],[1,1,1]]
// 		Output: [[0,0,0],[0,0,0],[0,0,0]]
// Explanation:
// 		For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// 		For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// 		For the point (1,1): floor(8/9) = floor(0.88888889) = 0

// Example 2:
// 		Input: img = [[100,200,100],[200,50,200],[100,200,100]]
// 		Output: [[137,141,137],[141,138,141],[137,141,137]]
// Explanation:
// 		For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
// 		For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
// 		For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138

// Constraints:
//		m == img.length
//		n == img[i].length
//		1 <= m, n <= 200
//		0 <= img[i][j] <= 255

const imageSmoother = (s) => {
  let res = new Array(s.length).fill(0).map((_) => new Array(s[0].length));

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      let sum = 0,
        cells = 0;

      // row above exists
      if (s[i - 1]) {
        // l
        if (s[i - 1][j - 1] != null) {
          sum += s[i - 1][j - 1];
          cells++;
        }
        // m
        sum += s[i - 1][j];
        cells++;
        // r
        if (s[i - 1][j + 1] != null) {
          sum += s[i - 1][j + 1];
          cells++;
        }
      }

      // cur row
      // l
      if (s[i][j - 1] != null) {
        sum += s[i][j - 1];
        cells++;
      }
      // m
      sum += s[i][j];
      cells++;
      // r
      if (s[i][j + 1] != null) {
        sum += s[i][j + 1];
        cells++;
      }

      // row below exists
      if (s[i + 1]) {
        // l
        if (s[i + 1][j - 1] != null) {
          sum += s[i + 1][j - 1];
          cells++;
        }
        // m
        sum += s[i + 1][j];
        cells++;
        // r
        if (s[i + 1][j + 1] != null) {
          sum += s[i + 1][j + 1];
          cells++;
        }
      }

      res[i][j] = ~~(sum / cells);
    }
  }

  return res;
};

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
); // [[0,0,0],[0,0,0],[0,0,0]]
console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
); // [[137,141,137],[141,138,141],[137,141,137]]

// Slow

var topVotedImageSmoother = function (img) {
  const rows = img.length;
  const cols = img[0].length;

  // Define a helper function to calculate the average value for a pixel
  function averageValue(r, c) {
    let total = 0;
    let count = 0;

    // Define the boundaries for the neighboring pixels
    const top = Math.max(0, r - 1);
    const bottom = Math.min(rows, r + 2);
    const left = Math.max(0, c - 1);
    const right = Math.min(cols, c + 2);

    // Iterate over the neighboring pixels and calculate the sum and count
    for (let row = top; row < bottom; row++) {
      for (let col = left; col < right; col++) {
        total += img[row][col];
        count += 1;
      }
    }

    // Calculate and return the average value for the pixel
    return Math.floor(total / count);
  }

  // Apply the average function to each pixel in the image matrix
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => averageValue(r, c))
  );
};

// Very clean
// Boundary definition is what's saving a lot of runtime here

// Also love the use of Array.from, never seen it quite like this before! */

// Second Minimum Node In a Binary Tree					1/2/2024
/* 
// Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

// If no such second minimum value exists, output -1 instead.

// Example 1:
// 		Input: root = [2,2,5,null,null,5,7]
// 		Output: 5
// Explanation: The smallest value is 2, the second smallest value is 5.

// Example 2:
// 		Input: root = [2,2,2]
// 		Output: -1
// Explanation: The smallest value is 2, but there isn't any second smallest value.

// Constraints:
//		The number of nodes in the tree is in the range [1, 25].
//		1 <= Node.val <= 231 - 1
//		root.val == min(root.left.val, root.right.val) for each internal node of the tree.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const findSecondMinimumValue = (root) => {
  let seen = new Set();
  let min = [Number.MAX_SAFE_INTEGER];

  const explore = (node) => {
    if (node) {
      if (!seen.has(node.val)) {
        if (node.val < min[0]) min.unshift(node.val);
        else if (node.val < min[1]) min[1] = node.val;
        seen.add(node.val);
      }
      explore(node.left);
      explore(node.right);
    }
  };
  explore(root);

  return seen.size > 1 ? min[1] : -1;
};

// ça marche

var topVotedFindSecondMinimumValue = function (root) {
  if (!root) return -1;
  const min1 = root.val;
  let min2 = Infinity;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (min1 < node.val && node.val < min2) min2 = node.val;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return min2 === Infinity ? -1 : min2;
};

// same same */

// Binary Number with Alternating Bits					1/3/2024
/* 
// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

// Example 1:
// 		Input: n = 5
// 		Output: true
// Explanation: The binary representation of 5 is: 101

// Example 2:
// 		Input: n = 7
// 		Output: false
// Explanation: The binary representation of 7 is: 111.

// Example 3:
// 		Input: n = 11
// 		Output: false
// Explanation: The binary representation of 11 is: 1011.

// Constraints:
//		1 <= n <= 231 - 1

const hasAlternatingBits = (n) => {
  while (n > 0) {
    let endBit = n % 2;
    n = n >> 1;
    if (endBit == n % 2) return false;
  }
  return true;
};

console.log(hasAlternatingBits(5)); // true
console.log(hasAlternatingBits(7)); // false
console.log(hasAlternatingBits(11)); // false

// good old bitwise operators

var topVotedHasAlternatingBits = function (n) {
  while (n > 0) {
    let lastBit = n % 2;
    n = parseInt(n / 2);
    if (lastBit === n % 2) {
      return false;
    }
  }
  return true;
}; */

// Count Binary Substrings					1/4/2024
/* 
// Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

// Example 1:
// 		Input: s = "00110011"
// 		Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
// 		Notice that some of these substrings repeat and are counted the number of times they occur.
// 		Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

// Example 2:
// 		Input: s = "10101"
// 		Output: 4
// Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.

// Constraints:
//		1 <= s.length <= 105
//		s[i] is either '0' or '1'.

const countBinarySubstrings = (s) => {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let count = [0, 0];

    for (let j = i; j < s.length; j++) {
      if (s[j] == s[i]) count[s[i]]++;
      else {
        if ([s.slice(j, j + count[s[i]])].every((c) => c != s[i])) res++;
        break;
      }
    }
  }

  return res;
};

console.log(countBinarySubstrings("00110011")); // 6
console.log(countBinarySubstrings("10101")); // 4

const topVotedCountBinarySubstrings = (s) => {
  let count = 1,
    sum = 0,
    prevCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) count += 1;
    else {
      if (prevCount) sum += prevCount <= count ? prevCount : count;
      prevCount = count;
      count = 1;
    }
  }
  return sum;
}; */

// Binary Search					1/5/2024
/* 
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// 		Input: nums = [-1,0,3,5,9,12], target = 9
// 		Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// 		Input: nums = [-1,0,3,5,9,12], target = 2
// 		Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:
//		1 <= nums.length <= 104
//		-104 < nums[i], target < 104
//		All the integers in nums are unique.
//		nums is sorted in ascending order.

const search = (nums, t) => {
  let l = 0,
    r = nums.length - 1;
  let m = ~~(r / 2);

  // arr length < 3
  if (nums[m] == t) return m;
  if (nums[l] == t) return l;
  if (nums[r] == t) return r;

  // arr length >= 3
  while (l != m && r != m) {
    if (nums[m] == t) return m;

    if (nums[m] < t) l = m;
    else if (nums[m] > t) r = m;

    m = ~~((l + r) / 2);
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1

// Not a fan of arr length < 3 section
// I've forgotten the correct while loop definition

var topVotedSearch = function (nums, target) {
  let lo = 0,
    hi = nums.length - 1;

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo + 1) / 2);
    if (target < nums[mid]) hi = mid - 1;
    else lo = mid;
  }

  return nums[lo] == target ? lo : -1;
};

const revisedSearch = (nums, t) => {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    let m = l + ~~((r - l + 1) / 2);
    if (t < nums[m]) r = m - 1;
    else l = m;
  }

  return nums[l] == t ? l : -1;
};

console.log(revisedSearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(revisedSearch([-1, 0, 3, 5, 9, 12], 2)); // -1 */

// Design HashSet					1/6/2024
/* 
// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:
// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

// Example 1:
// 		Input
// 		["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// 		[[], [1], [2], [1], [3], [2], [2], [2], [2]]
// 		Output
// 		[null, null, null, true, false, null, true, null, false]
// 		Explanation
// 		MyHashSet myHashSet = new MyHashSet();
// 		myHashSet.add(1);      // set = [1]
// 		myHashSet.add(2);      // set = [1, 2]
// 		myHashSet.contains(1); // return True
// 		myHashSet.contains(3); // return False, (not found)
// 		myHashSet.add(2);      // set = [1, 2]
// 		myHashSet.contains(2); // return True
// 		myHashSet.remove(2);   // set = [1]
// 		myHashSet.contains(2); // return False, (already removed)

// Constraints:
//		0 <= key <= 106
//		At most 104 calls will be made to add, remove, and contains.

var MyHashSet = function () {
  this.arr = [];
};

MyHashSet.prototype.add = function (key) {
  if (!this.contains(key)) this.arr.push(key);
};

MyHashSet.prototype.remove = function (key) {
  if (this.contains(key)) this.arr.splice(this.arr.indexOf(key), 1);
};

MyHashSet.prototype.contains = function (key) {
  return this.arr.indexOf(key) != -1;
};

// Top voteds are doing it using objects, which I didn't think was allowed
// Easy either way */

// Design HashMap					1/7/2024

// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:
// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

// Example 1:
// 		Input
// 		["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
// 		[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
// 		Output
// 		[null, null, null, 1, -1, null, 1, null, -1]
// 		Explanation
// 		MyHashMap myHashMap = new MyHashMap();
// 		myHashMap.put(1, 1); // The map is now [[1,1]]
// 		myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
// 		myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
// 		myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
// 		myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
// 		myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
// 		myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
// 		myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]

// Constraints:
//		0 <= key, value <= 106
//		At most 104 calls will be made to put, get, and remove.

var MyHashMap = function () {
  this.arr = [];
};

MyHashMap.prototype.put = function (key, value) {
  let exists = false;

  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i][0] == key) {
      this.arr[i][1] = value;
      exists = true;
    }
  }

  if (!exists) this.arr.push([key, value]);
};

MyHashMap.prototype.get = function (key) {
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i][0] == key) return this.arr[i][1];
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i][0] == key) this.arr.splice(i, 1);
  }
};

// Slow

class TopVotedMyHashMap {
  constructor() {
    this.data = new Array(1000001);
  }
  put(key, val) {
    this.data[key] = val;
  }
  get(key) {
    let val = this.data[key];
    return val !== undefined ? val : -1;
  }
  remove(key) {
    delete this.data[key];
  }
}

// Avoid looping by using a large array
// Much better!
