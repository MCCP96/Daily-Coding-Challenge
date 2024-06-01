const linkedList = (arr) => {
  let head = { val: null, next: null };
  let node = head;
  for (const x of arr) {
    node.next = { val: x, next: null };
    node = node.next;
  }
  return head.next;
};

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
/* 
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
// Much better! */

// Sum of Left Leaves					1/8/2024
/* 
// Given the root of a binary tree, return the sum of all left leaves.

// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

// Example 1:
// 		Input: root = [3,9,20,null,null,15,7]
// 		Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

// Example 2:
// 		Input: root = [1]
// 		Output: 0

// Constraints:
//		The number of nodes in the tree is in the range [1, 1000].
//		-1000 <= Node.val <= 1000

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const sumOfLeftLeaves = (root) => {
  let sum = 0;

  const explore = (node, depth = 0) => {
    if (node == null) return;
    if (node.left == null && node.right == null && depth > 0) sum += node.val;

    explore(node.left, depth + 1);
    if (node.right && node.right.left) explore(node.right, depth + 1);
  };
  explore(root);

  return sum;
};

const topVotedSumOfLeftLeaves = (x, isLeft) => {
  if (!x) return 0;
  if (!x.left && !x.right && isLeft) return x.val;

  return (
    topVotedSumOfLeftLeaves(x.left, true) +
    topVotedSumOfLeftLeaves(x.right, false)
  );
};

// Much easier to go with a boolean

const revisedSumOfLeftLeaves = (node, isLeft) => {
  if (node == null) return 0;
  if (node.left == null && node.right == null && isLeft) return node.val;

  return (
    revisedSumOfLeftLeaves(node.left, true) +
    revisedSumOfLeftLeaves(node.right, false)
  );
}; */

// Minimum Distance Between BST Nodes					1/9/2024
/* 
// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

// Example 1:
// 		Input: root = [4,2,6,1,3]
// 		Output: 1

// Example 2:
// 		Input: root = [1,0,48,null,null,12,49]
// 		Output: 1

// Constraints:
//		The number of nodes in the tree is in the range [2, 100].
//		0 <= Node.val <= 105
//		Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const minDiffInBST = (root) => {
  let seen = [];

  const explore = (node) => {
    if (!node) return;
    seen.push(node.val);
    explore(node.left);
    explore(node.right);
  };
  explore(root);

  let diff = Infinity;
  seen = seen.sort((a, b) => a - b);
  for (let i = 1; i < seen.length; i++) {
    diff = Math.min(diff, Math.abs(seen[i] - seen[i - 1]));
    if (diff == 1) break;
  }
  return diff;
};

var topVotedMinDiffInBST = function (root) {
  let min = Number.MAX_VALUE;
  let prev = Number.MAX_VALUE;

  const getMin = function (node) {
    if (node == null) return;

    getMin(node.right);
    if (min > prev - node.val) min = prev - node.val;
    prev = node.val;
    getMin(node.left);
  };

  getMin(root);
  return min;
};

// BST allows you to check as you go
// Saving the sorting and comparing loop */

// Transpose Matrix					1/10/2024
/* 
// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Example 1:
// 		Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 		Output: [[1,4,7],[2,5,8],[3,6,9]]

// Example 2:
// 		Input: matrix = [[1,2,3],[4,5,6]]
// 		Output: [[1,4],[2,5],[3,6]]

// Constraints:
//		m == matrix.length
//		n == matrix[i].length
//		1 <= m, n <= 1000
//		1 <= m * n <= 105
//		-109 <= matrix[i][j] <= 109

const transpose = (matrix) => {
  let res = [];

  for (let row = 0; row < matrix[0].length; row++) {
    let cur = [];

    for (let col = 0; col < matrix.length; col++) {
      cur.push(matrix[col][row]);
    }

    res.push(cur);
  }

  return res;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [[1,4,7],[2,5,8],[3,6,9]]
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [[1,4],[2,5],[3,6]]

// Same as top voted */

// Range Sum of BST					1/11/2024
/* 
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

// Example 1:
// 		Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// 		Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// Example 2:
// 		Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// 		Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

// Constraints:
//		The number of nodes in the tree is in the range [1, 2 * 104].
//		1 <= Node.val <= 105
//		1 <= low <= high <= 105
//		All Node.val are unique.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const rangeSumBST = (node, l, h) => {
  if (!node) return 0;
  if (node.val < l) return rangeSumBST(node.right, l, h);
  if (node.val > h) return rangeSumBST(node.left, l, h);

  return (
    node.val + rangeSumBST(node.left, l, h) + rangeSumBST(node.right, l, h)
  );
};

var topVotedRangeSumBST = function (root, low, high) {
  if (!root) return 0;

  const currentVal = root.val >= low && root.val <= high ? root.val : 0;

  const leftSum = rangeSumBST(root.left, low, high);
  const rightSum = rangeSumBST(root.right, low, high);

  return currentVal + leftSum + rightSum;
};

// same same */

// Simplify Path					5/5/2024
/* 
// Given an absolute path for a Unix-style file system, which begins with a slash '/', transform this path into its simplified canonical path.

// In Unix-style file system context, a single period '.' signifies the current directory, a double period ".." denotes moving up one directory level, and multiple slashes such as "//" are interpreted as a single slash. In this problem, treat sequences of periods not covered by the previous rules (like "...") as valid names for files or directories.

// The simplified canonical path should adhere to the following rules:
// It must start with a single slash '/'.
// Directories within the path should be separated by only one slash '/'.
// It should not end with a slash '/', unless it's the root directory.
// It should exclude any single or double periods used to denote current or parent directories.

// Return the new path.

// Example 1:
// 		Input: path = "/home/"
// 		Output: "/home"
// Explanation:
// 		The trailing slash should be removed.

// Example 2:
// 		Input: path = "/home//foo/"
// 		Output: "/home/foo"
// Explanation:
// 		Multiple consecutive slashes are replaced by a single one.

// Example 3:
// 		Input: path = "/home/user/Documents/../Pictures"
// 		Output: "/home/user/Pictures"
// Explanation:
// 		A double period ".." refers to the directory up a level.

// Example 4:
// 		Input: path = "/../"
// 		Output: "/"
// Explanation:
// 		Going one level up from the root directory is not possible.

// Example 5:
// 		Input: path = "/.../a/../b/c/../d/./"
// 		Output: "/.../b/d"
// Explanation:
// 		"..." is a valid name for a directory in this problem.

// Constraints:
//		1 <= path.length <= 3000
//		path consists of English letters, digits, period '.', slash '/' or '_'.
//		path is a valid absolute Unix path.

const simplifyPath = (path) => {
  path = path.replaceAll(/\/+/g, "/"); // replace repeated '/' with single '/'
  if (path.slice(-1) == "/") path = path.substring(0, path.length - 1); // remove trailing '/'

  let stack = [];
  for (let dir of path.split("/")) {
    if (dir == "..") stack?.pop();
    else if (dir != ".") stack.push(dir); // ignore current dir calls
  }

  path = stack.join("/");
  if (path[0] != "/") path = "/" + path;
  return path;
};

console.log(simplifyPath("/home/")); //  "/home"
console.log(simplifyPath("/home//foo/")); //  "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures")); //  "/home/user/Pictures"
console.log(simplifyPath("/../")); //  "/"
console.log(simplifyPath("/.../a/../b/c/../d/./")); //  "/.../b/d"
console.log(simplifyPath("/a//b////c/d//././/..")); //  "/a/b/c"

// Good runtime

var topVotedSimplifyPath = function (path) {
  const stack = [];
  const directories = path.split("/");
  for (const dir of directories) {
    if (dir === "." || !dir) {
      continue;
    } else if (dir === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(dir);
    }
  }
  return "/" + stack.join("/");
}; */

// Edit Distance					5/6/2024
/* 
// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:
// Insert a character
// Delete a character
// Replace a character

// Example 1:
// 		Input: word1 = "horse", word2 = "ros"
// 		Output: 3
// Explanation:
// 		horse -> rorse (replace 'h' with 'r')
// 		rorse -> rose (remove 'r')
// 		rose -> ros (remove 'e')

// Example 2:
// 		Input: word1 = "intention", word2 = "execution"
// 		Output: 5
// Explanation:
// 		intention -> inention (remove 't')
// 		inention -> enention (replace 'i' with 'e')
// 		enention -> exention (replace 'n' with 'x')
// 		exention -> exection (replace 'n' with 'c')
// 		exection -> execution (insert 'u')

// Constraints:
//		0 <= word1.length, word2.length <= 500
//		word1 and word2 consist of lowercase English letters.

const minDistance = (word1, word2) => {
  let levenshtein = Array(word1.length + 1)
    .fill(null)
    .map(() => Array(word2.length + 1).fill(0));

  // init first row and col
  for (let i = 0; i < levenshtein.length; i++) levenshtein[i][0] = i;
  for (let i = 0; i < levenshtein[0].length; i++) levenshtein[0][i] = i;

  // other cells are decided based on min of left, diagonal, and top cells
  // diagonal checks if words have matching chars, saving an operation
  for (let i = 1; i < levenshtein.length; i++) {
    for (let j = 1; j < levenshtein[0].length; j++) {
      const l = levenshtein[i][j - 1] + 1; // left
      const d = levenshtein[i - 1][j - 1] + (word1[i - 1] != word2[j - 1]); // diagonal
      const u = levenshtein[i - 1][j] + 1; // top
      levenshtein[i][j] = Math.min(l, d, u);
    }
  }

  return levenshtein.pop().pop(); // final cell of grid is cummulative dif between words
};

console.log(minDistance("horse", "ros")); //  3
console.log(minDistance("intention", "execution")); //  5

// Great video explanation:
// https://www.youtube.com/watch?v=ZkgBinDx9Kg&t=1289s&ab_channel=KnowledgeCenter
// https://en.wikipedia.org/wiki/Levenshtein_distance

var topVotedMinDistance = function (word1, word2) {
  let dp = Array(word1.length + 1)
    .fill(null)
    .map(() => Array(word2.length + 1).fill(0));

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = i;
  }

  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // left
        dp[i][j - 1] + 1, // right
        dp[i - 1][j - 1] + (word1[i - 1] != word2[j - 1] ? 1 : 0) // diagonal
      );
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};

// The Idea:
// Use lavenshtein distance algorithm and dynamic programming implementation
// Build a matrix from word1 and word2, each cell represents the minimum difference between the words up the current character
// Each cell is trying to become the locally minimum difference, so we have 3 options, 1 + left cell, 1 + top cell, 1 + diagonal (two characters aren't the same) or 0 + diagonal (two characters are the same) */

// Remove Nth Node From End of List					5/7/2024
/* 
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// 		Input: head = [1,2,3,4,5], n = 2
// 		Output: [1,2,3,5]

// Example 2:
// 		Input: head = [1], n = 1
// 		Output: []

// Example 3:
// 		Input: head = [1,2], n = 1
// 		Output: [1]

// Constraints:
//		The number of nodes in the list is sz.
//		1 <= sz <= 30
//		0 <= Node.val <= 100
//		1 <= n <= sz

// Follow up: Could you do this in one pass?

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = (head, n) => {
  let len = 0;
  let node = head;
  while (node) {
    node = node.next;
    len++;
  }
  if (len == 1) return null; // remove first and only el
  if (len == n) return head.next; // remove first el

  let i = 0;
  node = head;
  while (++i < len - n) {
    node = node.next;
  }
  node.next = node?.next?.next || null;

  return head;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2)); //  [1,2,3,5]
console.log(removeNthFromEnd([1], 1)); //  []
console.log(removeNthFromEnd([1, 2], 1)); //  [1]

// Not sure how to one pass this

var removeNthFromEnd = function (head, n) {
  let fast = head,
    slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) (fast = fast.next), (slow = slow.next);
  slow.next = slow.next.next;
  return head;
};

// https://i.imgur.com/BSiLKj0.png */

// Jump Game II					5/8/2024
/* 
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// 0 <= j <= nums[i] and
// i + j < n

// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:
// 		Input: nums = [2,3,1,1,4]
// 		Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// 		Input: nums = [2,3,0,1,4]
// 		Output: 2

// Constraints:
//		1 <= nums.length <= 10^4
//		0 <= nums[i] <= 1000
//		It's guaranteed that you can reach nums[n - 1].

const jump = (nums) => {
  let [idx, jumps] = [0, 0];
  while (idx != nums.length - 1) {
    if (idx + nums[idx] >= nums.length - 1) return jumps + 1; // nums[n-1] is within reach
    const next = nums.slice(idx + 1, idx + nums[idx] + 1); // next jump choices

    let [maxReach, nextIdx] = [0, 0];
    for (let i = 0; i < next.length; i++) {
      const reach = next[i] + i - next.length + 1; // actual reach of chosen jump
      if (reach <= 0) continue; // jump offers no progress

      if (reach > maxReach) {
        maxReach = reach; // better jump found
        nextIdx = i;
      }
    }

    idx += nextIdx + 1;
    jumps++;
  }

  return jumps;
};

console.log(jump([2, 3, 1, 1, 4])); //  2
console.log(jump([2, 3, 0, 1, 4])); //  2

// Bit bulky, but logic is there
// Would be best to use indexes instead of nums.slice to define 'next'

var topVotedJump = function (N) {
  let len = N.length - 1,
    curr = -1,
    next = 0,
    ans = 0;
  for (let i = 0; next < len; i++) {
    if (i > curr) ans++, (curr = next);
    next = Math.max(next, N[i] + i);
  }
  return ans;
}; */

// Permutations II					5/9/2024
/* 
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:
// 		Input: nums = [1,1,2]
// 		Output:
// 		[[1,1,2],
// 		[1,2,1],
// 		[2,1,1]]

// Example 2:
// 		Input: nums = [1,2,3]
// 		Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Constraints:
//		1 <= nums.length <= 8
//		-10 <= nums[i] <= 10

var permuteUnique = (nums) => {
  let perms = [];
  let seen = new Set();

  const dp = (cur, rem) => {
    if (rem.length == 0) {
      if (!seen.has(cur)) {
        perms.push(cur);
        seen.add(cur);
      }
      return;
    }

    for (let i = 0; i < rem.length; i++) {
      dp([...cur, rem[i]], [rem.slice(0, i), rem.slice(i + 1)]);
    }
  };
  dp([], nums);

  return perms;
};

console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Maximum call stack size exceeded
// Need to trim repeated permutations before they reach base case

var topVotedPermuteUnique = function (nums) {
  let res = [];
  dfs(nums.sort(), res, new Set());
  return res;
};

const dfs = (nums, res, visited) => {
  if (nums.length === visited.size) {
    let arr = [];
    for (let idx of visited) arr.push(nums[idx]);
    res.push(arr);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] && !visited.has(i - 1)) continue;
    if (visited.has(i)) continue;
    visited.add(i);
    dfs(nums, res, visited);
    visited.delete(i);
  }
}; */

// Pow(x, n)					5/10/2024
/* 
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:
// 		Input: x = 2.00000, n = 10
// 		Output: 1024.00000

// Example 2:
// 		Input: x = 2.10000, n = 3
// 		Output: 9.26100

// Example 3:
// 		Input: x = 2.00000, n = -2
// 		Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:
//		-100.0 < x < 100.0
//		-2^31 <= n <= 2^31-1
//		n is an integer.
//		Either x is not zero or n > 0.
//		-104 <= xn <= 104

var myPow = (x, n) => {
  if (n == 0 || x == 1) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = x;
  while (n-- > 1) {
    res *= x;
  }
  return res;
};

console.log(myPow(2.0, 10)); //  1024.00000
console.log(myPow(2.1, 3)); //  9.26100
console.log(myPow(2.0, -2)); //  0.25000

var topVotedMyPow = function (x, n) {
  if (n === 0) return 1;

  let pow = Math.abs(n);

  let result =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;

  return n < 0 ? 1 / result : result;
};

// Exponentially faster

const revisedMyPow = (x, n) => {
  if (n == 0 || x == 1) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return n % 2 == 0
    ? revisedMyPow(x * x, n / 2)
    : revisedMyPow(x * x, (n - 1) / 2) * x;
};

// Too bad 'if(n<0)' is checked on every iteration when you only need it once
// Still 95% runtime */

// Spiral Matrix					5/11/2024
/* 
// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// 		Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 		Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// 		Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 		Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:
//		m == matrix.length
//		n == matrix[i].length
//		1 <= m, n <= 10
//		-100 <= matrix[i][j] <= 100

const spiralOrder = (mat) => {
  let [m, n] = [mat.length, mat[0].length];
  let res = [];

  while (mat.length > 0) {
    res.push(...mat.shift());
    if (mat.length > 1)
      for (let i = 0; i < mat.length - 1; i++) res.push(mat[i].pop());
    if (mat.length > 0) res.push(...[...mat?.pop()].reverse());
    if (mat.length > 1)
      for (let i = mat.length - 1; i >= 0; i--) res.push(mat[i].shift());
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //  [1,2,3,6,9,8,7,4,5]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); //  [1,2,3,4,8,12,11,10,9,5,6,7]

// Scuffed

var topVotedSpiralOrder = function (matrix) {
  const res = [];
  while (matrix.length) {
    const first = matrix.shift();
    res.push(...first);
    for (const m of matrix) {
      let val = m.pop();
      if (val) res.push(val);
      m.reverse();
    }
    matrix.reverse();
  }
  return res;
}; */

// Jump Game					5/12/2024
/* 
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:
// 		Input: nums = [2,3,1,1,4]
// 		Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// 		Input: nums = [3,2,1,0,4]
// 		Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:
//		1 <= nums.length <= 10^4
//		0 <= nums[i] <= 10^5

const canJump = (nums) => {
  if (nums.length == 1) return true; // always at last index
  if (nums[0] == 0) return false; // impossible start

  // Find position of all zeroes (ignoring last element)
  let zeroIdxs = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums.length - i) break; // end within reach
    if (nums[i] == 0) zeroIdxs.push(i);
  }
  if (zeroIdxs.length == 0) return true;

  // Check numbers preceeding zeroes, ensuring we don't get stuck
  for (let i = zeroIdxs.length - 1; i >= 0; i--) {
    let valid = false;
    for (let j = zeroIdxs[i] - 1; j >= 0; j--) {
      if (j + nums[j] > zeroIdxs[i]) {
        valid = true;
        break;
      }
    }
    if (!valid) return false;
  }

  // All zeros are jumpable
  return true;
};

console.log(canJump([2, 3, 1, 1, 4])); //  true
console.log(canJump([3, 2, 1, 0, 4])); //  false
console.log(canJump([0])); //  true
console.log(canJump([2, 0, 0])); //  true (something something, last 0 is different)

// Bit busy, but gets there

var topVotedCanJump = function (nums) {
  // Base condition...
  if (nums.length <= 1) return true;
  // To keep the maximum index that can be reached...
  let maximum = nums[0];
  // Traverse all the elements through loop...
  for (let i = 0; i < nums.length; i++) {
    // if there is no way to jump to next...
    // so we should return false...
    if (maximum <= i && nums[i] == 0) return false;
    // update the maximum jump...
    if (i + nums[i] > maximum) {
      maximum = i + nums[i];
    }
    // maximum is enough to reach the end...
    if (maximum >= nums.length - 1) return true;
  }
  return false;
}; */

// Merge Intervals					5/13/2024
/* 
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// 		Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// 		Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// 		Input: intervals = [[1,4],[4,5]]
// 		Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:
//		1 <= intervals.length <= 104
//		intervals[i].length == 2
//		0 <= starti <= endi <= 104

const merge = (intervals) => {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let res = [[intervals[0][0], intervals[0][0]]]; // starting point

  let lastIdx = 0;
  for (const [s, e] of intervals) {
    if (s <= res[lastIdx][1]) {
      if (e > res[lastIdx][1]) {
        res[lastIdx][1] = e;
      }
    } else {
      res.push([s, e]);
      lastIdx++;
    }
  }
  return res;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); //  [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); //  [[1,5]]

function topVotedMerge(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) =>
    a.start !== b.start ? a.start - b.start : a.end - b.end
  );
  var prev = intervals[0];
  var res = [prev];
  for (var curr of intervals) {
    if (curr.start <= prev.end) {
      prev.end = Math.max(prev.end, curr.end);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
} */

// Insert Interval					5/14/2024
/* 
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

// Example 1:
// 		Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// 		Output: [[1,5],[6,9]]

// Example 2:
// 		Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// 		Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Constraints:
//		0 <= intervals.length <= 104
//		intervals[i].length == 2
//		0 <= starti <= endi <= 105
//		intervals is sorted by starti in ascending order.
//		newInterval.length == 2
//		0 <= start <= end <= 105

const insert = (intervals, [newS, newE]) => {
  // insert new interval in sorted location
  let idx = intervals.findIndex(([s, e]) => newS < s);
  if (idx != -1) {
    intervals.splice(idx, 0, [newS, newE]);
  } else {
    intervals.push([newS, newE]); // is largest
  }

  // same as question #56 "merge interval"
  let res = [[intervals[0][0], intervals[0][0]]];
  let lastIdx = 0;
  for (const [s, e] of intervals) {
    if (s <= res[lastIdx][1]) {
      if (e > res[lastIdx][1]) {
        res[lastIdx][1] = e;
      }
    } else {
      res.push([s, e]);
      lastIdx++;
    }
  }
  return res;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
); //  [[1,5],[6,9]]
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
); //  [[1,2],[3,10],[12,16]]
console.log(insert([[1, 5]], [2, 3])); //  [[1,5]

var topVotedInsert = function (intervals, newInterval) {
  let merged = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1]),
    ];
    i++;
  }
  merged.push(newInterval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
};

// nice */

// Rotate List					5/15/2024
/* 
// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// 		Input: head = [1,2,3,4,5], k = 2
// 		Output: [4,5,1,2,3]

// Example 2:
// 		Input: head = [0,1,2], k = 4
// 		Output: [2,0,1]

// Constraints:
//		The number of nodes in the list is in the range [0, 500].
//		-100 <= Node.val <= 100
//		0 <= k <= 2 * 109

const rotateRight = (head, k) => {
  let len = 0;
  let node = head;
  while (node) {
    node = node.next;
    len++;
  }
  if (len <= 1) return head;
  k = k % len; // avoid unnecessary swaps (example 2)
  if (k == 0) return head;

  let i = 0;
  let prev = null;
  node = head;
  while (i++ < len - k) {
    prev = node;
    node = node.next; // navigate to new head
  }
  const newHead = node;
  prev.next = null; // new tail

  while (node.next != null) {
    node = node.next; // navigate to old tail
  }
  node.next = head; // attach old head to old tail

  return newHead;
};

// prettier-ignore
console.log(rotateRight({val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}}, 2)); //  [4,5,1,2,3]
// prettier-ignore
console.log(rotateRight({val: 0, next: {val: 1, next: {val: 2, next: null}}}, 4)); //  [2,0,1]

// Ça marche

const topVotedRotateRight = function (head, k) {
  if (!head) return head;
  let count = 0,
    ptr = head;

  //Step 1 of the algo, count list nodes
  while (ptr) {
    count++;
    ptr = ptr.next;
  }

  //Ste 2: Number of rotations are now restricted within limit
  k = k % count;
  let prev = head;
  ptr = head;

  //Step 3: Moving one pointer k positions ahead
  while (k--) {
    ptr = ptr.next;
  }

  //Step 4: The actual magic, explained above
  while (ptr.next) {
    prev = prev.next;
    ptr = ptr.next;
  }

  //Step 5: Simply modifying the head and last node
  ptr.next = head;
  head = prev.next;
  prev.next = null;
  return head;
}; */

// Binary Tree Preorder Traversal					5/16/2024
/* 
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// 		Input: root = [1,null,2,3]
// 		Output: [1,2,3]

// Example 2:
// 		Input: root = []
// 		Output: []

// Example 3:
// 		Input: root = [1]
// 		Output: [1]

// Constraints:
//		The number of nodes in the tree is in the range [0, 100].
//		-100 <= Node.val <= 100

const preorderTraversal = (root) => {
  let res = [];
  const explore = (node) => {
    if (!node) return;
    res.push(node.val);
    explore(node.left);
    explore(node.right);
  };
  explore(root);
  return res;
};

console.log(preorderTraversal([1, null, 2, 3])); //  [1,2,3]
console.log(preorderTraversal([])); //  []
console.log(preorderTraversal([1])); //  [1]

// Follow up: Recursive solution is trivial, could you do it iteratively?

const topVotedPreorderTraversal = (root) => {
  if (!root) return [];
  var result = [];
  var stack = [root];

  while (stack.length) {
    var node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

// Stack to do it iteratively */

// Binary Tree Postorder Traversal0					5/17/2024
/* 
//Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// 		Input: root = [1,null,2,3]
// 		Output: [3,2,1]

// Example 2:
// 		Input: root = []
// 		Output: []

// Example 3:
// 		Input: root = [1]
// 		Output: [1]

// Constraints:
//		The number of the nodes in the tree is in the range [0, 100].
//		-100 <= Node.val <= 100

const postorderTraversal = (root) => {
  let res = [];
  const explore = (node) => {
    if (!node) return;
    explore(node.left);
    explore(node.right);
    res.push(node.val);
  };
  explore(root);
  return res;
};

// Follow up: Recursive solution is trivial, could you do it iteratively?

var topVotedPostorderTraversal = function (root) {
  if (!root) return [];
  let stack = [],
    res = [];
  stack.push(root);
  while (stack.length) {
    let node = stack[stack.length - 1];
    if (node.left) {
      stack.push(node.left);
      node.left = null;
    } else if (node.right) {
      stack.push(node.right);
      node.right = null;
    } else res.push(stack.pop().val);
  }
  return res;
  // Time Complexity: O(n)
  // Space Complexity: O(n)
}; */

// Convert Sorted Array to Binary Search Tree					5/18/2024
/* 
// Given an integer array nums where the elements are sorted in ascending order, convert it to a

// height-balanced

// binary search tree.

// Example 1:
// 		Input: nums = [-10,-3,0,5,9]
// 		Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// 		Input: nums = [1,3]
// 		Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:
//		1 <= nums.length <= 104
//		-104 <= nums[i] <= 104
//		nums is sorted in a strictly increasing order.

var topVotedSortedArrayToBST = function (nums) {
  // Call the function recursively...
  return ConvToBST(nums, 0, nums.length - 1);
};
// Create a function which will convert any particular range of given nums array...
// & return its corresponding BST root node....
var ConvToBST = function (nums, beg, end) {
  // If beg > end, return NULL, as we receive a wrong range...
  if (beg > end) return null;
  // set the middle node...
  var mid = Math.ceil((beg + end) / 2);
  // Initialise root node with value same as nums[mid]...
  var root = new TreeNode(nums[mid]);
  // Assign left subtrees as the same function called on left subranges...
  root.left = ConvToBST(nums, beg, mid - 1);
  // Assign right subtrees as the same function called on right subranges...
  root.right = ConvToBST(nums, mid + 1, end);
  // Return the root node...
  return root;
};

// No time today, busy climbing in Red River Gorge Kentucky :) */

// Minimum Number Game					5/19/2024
/* 
// You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

// Every round, first Alice will remove the minimum element from nums, and then Bob does the same.

// Now, first Bob will append the removed element in the array arr, and then Alice does the same.

// The game continues until nums becomes empty.

// Return the resulting array arr.

// Example 1:
// 		Input: nums = [5,4,2,3]
// 		Output: [3,2,5,4]
// Explanation: In round one, first Alice removes 2 and then Bob removes 3. Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2].
// 		At the begining of round two, nums = [5,4]. Now, first Alice removes 4 and then Bob removes 5. Then both append in arr which becomes [3,2,5,4].

// Example 2:
// 		Input: nums = [2,5]
// 		Output: [5,2]
// Explanation: In round one, first Alice removes 2 and then Bob removes 5. Then in arr firstly Bob appends and then Alice appends. So arr = [5,2].

// Constraints:
//		2 <= nums.length <= 100
//		1 <= nums[i] <= 100
//		nums.length % 2 == 0

const numberGame = (nums) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);

  let [res, i] = [new Array(len), 0];
  while (i < nums.length) {
    res[i] = nums[i + 1];
    res[i + 1] = nums[i];
    i += 2;
  }
  return res;
};

console.log(numberGame([5, 4, 2, 3])); //  [3,2,5,4]
console.log(numberGame([2, 5])); //  [5,2]

var topVotedNumberGame = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    if (i + 1 < nums.length) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  }

  return nums;
};

// same same */

// Largest Triangle Area					5/20/2024
/* 
// Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

// Example 1:
// 		Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
// 		Output: 2.00000
// Explanation: The five points are shown in the above figure. The red triangle is the largest.

// Example 2:
// 		Input: points = [[1,0],[0,0],[0,1]]
// 		Output: 0.50000

// Constraints:
//		3 <= points.length <= 50
//		-50 <= xi, yi <= 50
//		All the given points are unique.

var topVotedLargestTriangleArea = function (points) {
  const n = points.length;
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (k = j + 1; k < n; k++) {
        const area = calcArea(points[i], points[j], points[k]);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};

function calcArea(coordA, coordB, coordC) {
  const [xCoordA, yCoordA] = coordA;
  const [xCoordB, yCoordB] = coordB;
  const [xCoordC, yCoordC] = coordC;

  const sideA = xCoordA * (yCoordB - yCoordC);
  const sideB = xCoordB * (yCoordC - yCoordA);
  const sideC = xCoordC * (yCoordA - yCoordB);

  return Math.abs((sideA + sideB + sideC) / 2);
}

console.log(
  topVotedLargestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ])
); //  2.00000
console.log(
  topVotedLargestTriangleArea([
    [1, 0],
    [0, 0],
    [0, 1],
  ])
); //  0.50000

// couldn't find a solution that wasnt brute force
// turns out that's a viable approach
// constraints should've been my hint */

// Unique Paths II					5/21/2024
/* 
// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
// 		Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// 		Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// 		There are two ways to reach the bottom-right corner:
// 		1. Right -> Right -> Down -> Down
// 		2. Down -> Down -> Right -> Right

// Example 2:
// 		Input: obstacleGrid = [[0,1],[0,0]]
// 		Output: 1

// Constraints:
//		m == obstacleGrid.length
//		n == obstacleGrid[i].length
//		1 <= m, n <= 100
//		obstacleGrid[i][j] is 0 or 1.

const uniquePathsWithObstacles = (grid) => {
  let [m, n] = [grid.length, grid[0].length];
  let paths = 0;

  if (grid[0][0] || grid[m - 1][n - 1]) {
    return paths; // start or end is obstacle
  }
  if (grid[0][1] && grid[1][0]) {
    return paths; // top-left blocked
  }
  if (grid[m - 1][n - 2] && grid[m - 2][n - 1]) {
    return paths; // bottom-right blocked
  }

  const dfs = (x, y) => {
    if (x == n - 1 && y == m - 1) {
      paths++; // end reached
      return;
    }
    if (grid[y][x + 1] == 0) {
      dfs(x + 1, y); // go right
    }
    if (grid[y + 1] && grid[y + 1][x] == 0) {
      dfs(x, y + 1); // go down
    }
  };
  dfs(0, 0);

  return paths;
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
); //  2
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
); //  1
console.log(uniquePathsWithObstacles([[1]])); //  0

// Exceeds runtime

var topVotedUniquePathsWithObstacles = function (obstacleGrid) {
  if (
    !obstacleGrid.length ||
    !obstacleGrid[0].length ||
    obstacleGrid[0][0] === 1
  ) {
    return 0;
  }

  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let previous = new Array(n).fill(0);
  let current = new Array(n).fill(0);
  previous[0] = 1;

  for (let i = 0; i < m; i++) {
    current[0] = obstacleGrid[i][0] === 1 ? 0 : previous[0];
    for (let j = 1; j < n; j++) {
      current[j] = obstacleGrid[i][j] === 1 ? 0 : current[j - 1] + previous[j];
    }
    previous = [...current];
  }

  return previous[n - 1];
};

// cumulative counting instead of every path being its own iteration */

// Set Matrix Zeroes					5/22/2024
/* 
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:
// 		Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// 		Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// 		Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// 		Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:
//		m == matrix.length
//		n == matrix[0].length
//		1 <= m, n <= 200
//		-231 <= matrix[i][j] <= 231 - 1

// Follow up:
//		A straightforward solution using O(mn) space is probably a bad idea.
//		A simple improvement uses O(m + n) space, but still not the best solution.
//		Could you devise a constant space solution?

const setZeroes = (mat) => {
  let [zeroRows, zeroCols] = [new Set(), new Set()];

  mat.forEach((row, i) => {
    row.forEach((_, j) => {
      if (mat[i][j] == 0) {
        // find target rows/cols
        zeroRows.add(i);
        zeroCols.add(j);
      }
    });
  });

  const m = mat[0].length;
  zeroRows.forEach((row) => (mat[row] = new Array(m).fill(0))); // replace rows
  zeroCols.forEach((col) => mat.forEach((row) => (row[col] = 0))); // replace cols

  return mat;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
); //  [[1,0,1],[0,0,0],[1,0,1]]
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
); //  [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// >90% runtime

var topVotedSetZeroes = function (matrix) {
  var track = [];

  // find zeros
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) track.push([i, j]);
    }
  }

  for (var i = 0; i < track.length; i++) {
    var [x, y] = track[i];

    // update row
    for (var j = 0; j < matrix[0].length; j++) {
      matrix[x][j] = 0;
    }

    // udpate column
    for (var j = 0; j < matrix.length; j++) {
      matrix[j][y] = 0;
    }
  }
};

// same same */

// Remove Duplicates from Sorted Array II					5/23/2024
/* 
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:
// The judge will test your solution with the following code:

//    int[] nums = [...]; // Input array
//    int[] expectedNums = [...]; // The expected answer with correct length

//    int k = removeDuplicates(nums); // Calls your implementation

//    assert k == expectedNums.length;
//    for (int i = 0; i < k; i++) {
//      assert nums[i] == expectedNums[i];
//    }

// If all assertions pass, then your solution will be accepted.

// Example 1:
// 		Input: nums = [1,1,1,2,2,3]
// 		Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// 		It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// 		Input: nums = [0,0,1,1,1,1,2,3,3]
// 		Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// 		It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:
//		1 <= nums.length <= 3 * 104
//		-104 <= nums[i] <= 104
//		nums is sorted in non-decreasing order.

const removeDuplicates = (nums) => {
  let len = nums.length;
  let k = Math.min(len, 2);

  for (let i = 2; i < len; i++, k++) {
    if (nums[i] == nums[i - 1] && nums[i - 1] == nums[i - 2]) {
      // >2 same elements found
      let idx = i;
      while (nums[idx] == nums[idx - 1]) idx++; // navigate to next element

      if (idx >= len) k--; // last element edge case
      len -= idx - i; // adjust end

      let pos = i;
      while (idx < nums.length) nums[pos++] = nums[idx++]; // shift elements forward
    }
  }

  return k;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); //  5, nums = [1,1,2,2,3,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); //  7, nums = [0,0,1,1,2,3,3,_,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 2, 2, 4])); //  7, nums = [0,0,1,1,2,2,4]
console.log(removeDuplicates([0, 1, 2, 2, 2, 2, 2, 3, 4, 4, 4])); //  7, nums = [0,1,2,2,3,4,4]

// started by shifting elements using .splice and .slice
// keeping it simple made it much easier to read

var topVotedRemoveDuplicates = function (nums) {
  // Special case
  if (nums.length <= 2) {
    return nums.length;
  }
  // Initialize an integer k that updates the kth index of the array
  // only when the current element does not match either of the two previous indexes
  let k = 2;
  // Traverse elements through loop
  for (let i = 2; i < nums.length; i++) {
    // If the index does not match the (k-1)th and (k-2)th elements, count that element
    if (nums[i] != nums[k - 2] || nums[i] != nums[k - 1]) {
      nums[k] = nums[i];
      k++;
      // If the index matches the (k-1)th and (k-2)th elements, we skip it
    }
  }
  return k; //Return k after placing the final result in the first k slots of nums
};

// keeping it even simpler! */

// Search in Rotated Sorted Array II					5/24/2024
/* 
// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

// Example 1:
// 		Input: nums = [2,5,6,0,0,1,2], target = 0
// 		Output: true

// Example 2:
// 		Input: nums = [2,5,6,0,0,1,2], target = 3
// 		Output: false

// Constraints:
//		1 <= nums.length <= 5000
//		-104 <= nums[i] <= 104
//		nums is guaranteed to be rotated at some pivot.
//		-104 <= target <= 104

// Follow up: This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?

const setSearch = (nums, t) => new Set(nums).has(t);

// technically, not the worst solution:
// https://stackoverflow.com/questions/55750234/how-does-set-actually-work-internal-when-checking-for-values

// nvm, converting array to set is O(n)
// might aswell iterate through looking for target

const search = (nums, t) => {
  // Need a binary search that accomodates pivot
  let [l, h] = [0, nums.length - 1];
  while (l <= h) {
    const m = ~~((l + h) / 2);
    if (nums[m] == t) return true; // target found

    if (nums[l] == nums[m]) {
      l++; // accomodate non-distinct values, continue
    } else if (nums[l] <= nums[m]) {
      // normal binary search
      if (nums[l] <= t && t <= nums[m]) h = m - 1;
      else l = m + 1;
    } else {
      // l > m (accomodate pivot)
      if (nums[m] <= t && t <= nums[h]) l = m + 1;
      else h = m - 1;
    }
  }
  return false; // target not found
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); //  true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); //  false

// same as top voted */

// Permutation Difference between Two Strings					5/25/2024
/* 
// You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

// The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

// Return the permutation difference between s and t.

// Example 1:
// 		Input: s = "abc", t = "bac"
// 		Output: 2
// Explanation:
// 		For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:
// 		The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
// 		The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
// 		The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
// 		That is, the permutation difference between s and t is equal to |0 - 1| + |2 - 2| + |1 - 0| = 2.

// Example 2:
// 		Input: s = "abcde", t = "edbac"
// 		Output: 12
// Explanation: The permutation difference between s and t is equal to |0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12.

// Constraints:
//		1 <= s.length <= 26
//		Each character occurs at most once in s.
//		t is a permutation of s.
//		s consists only of lowercase English letters.

const findPermutationDifference = (s, t) => {
  let [sDict, tDict] = [{}, {}];
  for (let i = 0; i < s.length; i++) {
    sDict[s[i]] = i;
    tDict[t[i]] = i;
  }
  let dif = 0;
  for (const c of s) {
    dif += Math.abs(sDict[c] - tDict[c]);
  }
  return dif;
};

console.log(findPermutationDifference("abc", "bac")); //  2
console.log(findPermutationDifference("abcde", "edbac")); //  12

// O(n) aint bad

var topVotedFindPermutationDifference = function (s, t) {
  let permutation_diff = 0;
  for (let i = 0; i < s.length; i++) {
    let j = t.indexOf(s[i]);
    permutation_diff += Math.abs(i - j);
  }
  return permutation_diff;
}; */

// Remove Duplicates from Sorted List II					5/26/2024
/* 
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:
// 		Input: head = [1,2,3,3,4,4,5]
// 		Output: [1,2,5]

// Example 2:
// 		Input: head = [1,1,1,2,3]
// 		Output: [2,3]

// Constraints:
//		The number of nodes in the list is in the range [0, 300].
//		-100 <= Node.val <= 100
//		The list is guaranteed to be sorted in ascending order.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const deleteDuplicates = (head) => {
  let newHead = new ListNode(null, head); // accomodates 1st node being duplicate
  let node = newHead;

  while (node.next && node.next.next) {
    // probe two ahead
    if (node.next.val == node.next.next.val) {
      let dup = node.next.val; // duplicate found
      while (node.next?.val == dup) {
        node.next = node.next.next; // navigate to next val
      }
    } else {
      node = node.next;
    }
  }

  return newHead.next;
};

// prettier-ignore
console.log(deleteDuplicates({val: 1, next: {val: 2, next: {val: 3, next: {val: 3, next: {val: 4, next: {val: 4, next: {val: 5, next: null}}}}}}})); //  [1,2,5]
// prettier-ignore
console.log(deleteDuplicates({val: 1, next: {val: 1, next: {val: 1, next: {val: 2, next: {val: 3, next: null}}}}})); //  [2,3]
console.log(deleteDuplicates({ val: 1, next: { val: 1, next: null } })); //  []

var topVotedDeleteDuplicates = function (head) {
  // Special case
  if (head == null || head.next == null) return head;
  // create a fake node that acts like a fake head of list pointing to the original head and it points to the original head
  var fake = new ListNode(0);
  fake.next = head;
  var curr = fake;
  // Loop till curr.next and curr.next.next not null
  while (curr.next != null && curr.next.next != null) {
    // curr.next means the next node of curr pointer and curr.next.next means the next of next of curr pointer
    // if the value of curr.next and curr.next.next is same
    // There is a duplicate value present in the list
    if (curr.next.val == curr.next.next.val) {
      let duplicate = curr.next.val;
      // If the next node of curr is not null and its value is eual to the duplicate value
      while (curr.next != null && curr.next.val == duplicate) {
        // Skip those element and keep updating curr
        curr.next = curr.next.next;
      }
    }
    // Otherwise, move curr forward
    else {
      curr = curr.next;
    }
  }
  return fake.next; // Return the linked list
};

// same same */

// Partition List					5/27/2024
/* 
// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example 1:
// 		Input: head = [1,4,3,2,5,2], x = 3
// 		Output: [1,2,2,4,3,5]

// Example 2:
// 		Input: head = [2,1], x = 2
// 		Output: [1,2]

// Constraints:
//		The number of nodes in the list is in the range [0, 200].
//		-100 <= Node.val <= 100
//		-200 <= x <= 200

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const partition = (head, x) => {
  let lowHead = new ListNode(),
    highHead = new ListNode();

  let node = head,
    l = lowHead,
    h = highHead;
  while (node) {
    if (node.val < x) {
      l.next = node;
      l = l.next;
    } else {
      h.next = node;
      h = h.next;
    }
    node = node.next;
  }
  l.next = highHead.next;
  h.next = null;

  return lowHead.next;
};

// prettier-ignore
console.log(partition({val: 1, next: {val: 4, next: {val: 3, next: {val: 2, next: {val: 5, next: {val: 2, next: null}}}}}}, 3)); //  [1,2,2,4,3,5]

// 100% Runtime

var topVotedPartition = function (head, x) {
  let before = new ListNode(0);
  let after = new ListNode(0);
  let before_curr = before;
  let after_curr = after;

  while (head !== null) {
    if (head.val < x) {
      before_curr.next = head;
      before_curr = before_curr.next;
    } else {
      after_curr.next = head;
      after_curr = after_curr.next;
    }
    head = head.next;
  }

  after_curr.next = null;
  before_curr.next = after.next;

  return before.next;
};

// same idea */

// Gray Code					5/28/2024
/* 
// An n-bit gray code sequence is a sequence of 2n integers where:
// - Every integer is in the inclusive range [0, 2n - 1],
// - The first integer is 0,
// - An integer appears no more than once in the sequence,
// - The binary representation of every pair of adjacent integers differs by exactly one bit, and
// - The binary representation of the first and last integers differs by exactly one bit.

// Given an integer n, return any valid n-bit gray code sequence.

// Example 1:
// 		Input: n = 2
// 		Output: [0,1,3,2]
// Explanation:
// 		The binary representation of [0,1,3,2] is [00,01,11,10].
// 		- 00 and 01 differ by one bit
// 		- 01 and 11 differ by one bit
// 		- 11 and 10 differ by one bit
// 		- 10 and 00 differ by one bit
// 		[0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
// 		- 00 and 10 differ by one bit
// 		- 10 and 11 differ by one bit
// 		- 11 and 01 differ by one bit
// 		- 01 and 00 differ by one bit

// Example 2:
// 		Input: n = 1
// 		Output: [0,1]

// Constraints:
//		1 <= n <= 16

var topVotedGrayCode = function (n) {
  // total 2^n codes for bit length n
  const codeCount = 1 << n;
  let result = [];

  // generate gray code from 0, and toggle 1 bit on each iteration
  // toggle mask: ( i >> 1 )
  for (let i = 0; i < codeCount; i++) {
    code = i ^ (i >> 1);
    result.push(code);
  }

  return result;
};

const grayCode = (n) => {
  let res = [];
  for (let i = 0; i < 2 ** n; i++) {
    code = i ^ (i >> 1);
    res.push(code);
  }
  return res;
};

console.log(grayCode(2)); //  [0,1,3,2]
console.log(grayCode(1)); //  [0,1]
 */

// Find Missing and Repeated Values					5/29/2024
/* 
// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

// Example 1:
// 		Input: grid = [[1,3],[2,2]]
// 		Output: [2,4]
// Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].

// Example 2:
// 		Input: grid = [[9,1,7],[8,9,2],[3,4,6]]
// 		Output: [9,5]
// Explanation: Number 9 is repeated and number 5 is missing so the answer is [9,5].

// Constraints:
//		2 <= n == grid.length == grid[i].length <= 50
//		1 <= grid[i][j] <= n * n
//		For all x that 1 <= x <= n * n there is exactly one x that is not equal to any of the grid members.
//		For all x that 1 <= x <= n * n there is exactly one x that is equal to exactly two of the grid members.
//		For all x that 1 <= x <= n * n except two of them there is exatly one pair of i, j that 0 <= i, j <= n - 1 and grid[i][j] == x.

const findMissingAndRepeatedValues = (grid) => {
  let res = new Array(2);
  const n = grid.length;
  let seen = new Array(n * n).fill(0);

  for (const row of grid) {
    for (const x of row) {
      if (seen[x - 1]) res[0] = x; // found duplicate
      else seen[x - 1] = 1;
    }
  }
  res[1] = seen.indexOf(0) + 1; // found missing
  return res;
};

console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
); //  [2,4]
console.log(
  findMissingAndRepeatedValues([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ])
); //  [9,5]

function topVotedFindMissingAndRepeatedValues(grid) {
  const n = grid.length;
  const count = Array(n * n + 1).fill(0); // To store the count of each number

  let repeated = 0;
  let missing = 0;

  // Count occurrences of each number in the grid
  for (const row of grid) {
    for (const num of row) {
      count[num]++;
      if (count[num] === 2) {
        // Identify the repeated value
        repeated = num;
      }
    }
  }

  // Find the missing value
  for (let i = 1; i <= n * n; ++i) {
    if (count[i] === 0) {
      // Identify the missing value
      missing = i;
      break;
    }
  }

  return [repeated, missing];
} */

// Restore IP Addresses					5/30/2024
/* 
// A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

// Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

// Example 1:
// 		Input: s = "25525511135"
// 		Output: ["255.255.11.135","255.255.111.35"]

// Example 2:
// 		Input: s = "0000"
// 		Output: ["0.0.0.0"]

// Example 3:
// 		Input: s = "101023"
// 		Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

// Constraints:
//		1 <= s.length <= 20
//		s consists of digits only.

const restoreIpAddresses = (s) => {
  const len = s.length;
  if (len < 4 || len > 12) return []; // impossible

  let res = [];
  const dfs = (ip, rem) => {
    if (ip.length == 3) {
      if (+rem <= 255 && !(rem.length > 1 && rem[0] == "0"))
        res.push([...ip, rem].join(".")); // valid iteration found
    }

    for (let i = 1; i <= Math.min(rem.length - 1, 3); i++) {
      const seg = rem.slice(0, i);
      if (+seg <= 255 && !(seg.length > 1 && seg[0] == "0"))
        dfs([...ip, seg], rem.substring(i)); // valid segment added
    }
  };
  dfs([], s);

  return res;
};

console.log(restoreIpAddresses("25525511135")); //  ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses("0000")); //  ["0.0.0.0"]
console.log(restoreIpAddresses("101023")); //  ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

// took me a minute

var topVoedRestoreIpAddresses = function (s) {
  const result = [];

  function permute(arr, str) {
    if (arr.length === 3) {
      if (isValid(str)) result.push([...arr, str]);
      return;
    }

    for (let i = 1; i < 4; i++) {
      let subStr = str.slice(0, i);
      if (!isValid(subStr)) continue;
      permute([...arr, subStr], str.slice(i));
    }
  }

  function isValid(str) {
    if (+str > 255 || !str.length) return false;
    if (str.length >= 2 && str[0] === "0") return false;
    return true;
  }

  permute([], s);
  return result.map((x) => x.join("."));
};

// same but better

// Discontinuing 'Day ####' in commit messages from now on
// I don't want to focus on the number and 1000s seems like a good end point */

// Reverse Linked List II					5/31/2024
/* 
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// 		Input: head = [1,2,3,4,5], left = 2, right = 4
// 		Output: [1,4,3,2,5]

// Example 2:
// 		Input: head = [5], left = 1, right = 1
// 		Output: [5]

// Constraints:
//		The number of nodes in the list is n.
//		1 <= n <= 500
//		-500 <= Node.val <= 500
//		1 <= left <= right <= n

// Follow up: Could you do it in one pass?

const reverseBetween = (head, l, r) => {
  if (l == r) return head; // no changes necessary

  let node = head,
    i = 1;
  while (++i < l) node = node.next; // stop before 'left'
  let prev = node; // prev.next is where reversing begins

  let nodes = new Array(r - l + 1); // store nodes to be reversed
  while (i++ <= r) {
    node = node.next;
    nodes[r - i + 1] = node;
  }
  nodes[nodes.length - 1].next = node.next; // reversing ends ('right')

  node = prev;
  for (let n of nodes) {
    node.next = n; // rebuild linked list
    node = node.next;
  }

  return head;
};

console.log(reverseBetween(linkedList([1, 2, 3, 4, 5]), 2, 4)); //  [1,4,3,2,5]
console.log(reverseBetween(linkedList([5]), 1, 1)); //  [5]
// console.log(reverseBetween(linkedList([3, 5]), 1, 2)); //  [5]

var topVotedReverseBetween = function (head, left, right) {
  if (!head || left === right) return head;

  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  for (let i = 0; i < left - 1; ++i) {
    prev = prev.next;
  }

  let current = prev.next;

  for (let i = 0; i < right - left; ++i) {
    const nextNode = current.next;
    current.next = nextNode.next;
    nextNode.next = prev.next;
    prev.next = nextNode;
  }

  return dummy.next;
};

// two pointers makes things easier to navigate */

// Interleaving String					6/1/2024

// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:
// - s = s1 + s2 + ... + sn
// - t = t1 + t2 + ... + tm
// - |n - m| <= 1
// - The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

// Note: a + b is the concatenation of strings a and b.

// Example 1:
// 		Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// 		Output: true
// Explanation: One way to obtain s3 is:
// 		Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// 		Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// 		Since s3 can be obtained by interleaving s1 and s2, we return true.

// Example 2:
// 		Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// 		Output: false
// Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.

// Example 3:
// 		Input: s1 = "", s2 = "", s3 = ""
// 		Output: true

// Constraints:
//		0 <= s1.length, s2.length <= 100
//		0 <= s3.length <= 200
//		s1, s2, and s3 consist of lowercase English letters.

// Follow up: Could you solve it using only O(s2.length) additional memory space?

const isInterleave = (s1, s2, s3) => {
  if (s1.length + s2.length != s3.length) return false;
  if (s1.length == 0) return s2 == s3;
  if (s2.length == 0) return s1 == s3;

  const combos = (s, t, rem = "") => {
    if (s == "") return s2 == rem + t; // rem is equal to s2?

    let valid = false;
    const c = s[0];
    s = s.substring(1);

    for (let i = 0; i <= t.length; i++) {
      if (c == t[i])
        valid = combos(s, t.substring(i + 1), rem + t.substring(0, i));
      if (valid) break;
    }
    return valid;
  };
  return combos(s1, s3);
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); //  true
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")); //  false
console.log(isInterleave("", "", "")); //  true
console.log(isInterleave("ab", "bc", "bbac")); // false

// Doesn't pass all test cases

var topVotedIsInterleave = function (s1, s2, s3) {
  let m = s1.length,
    n = s2.length,
    l = s3.length;
  if (m + n !== l) return false;

  let dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let j = 1; j <= n; ++j) {
    dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= m; ++i) {
    dp[0] = dp[0] && s1[i - 1] === s3[i - 1];
    for (let j = 1; j <= n; ++j) {
      dp[j] =
        (dp[j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }

  return dp[n];
};

// https://leetcode.com/problems/interleaving-string/solutions/3956393/99-78-2-approaches-dp-recursion/
