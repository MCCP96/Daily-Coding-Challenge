function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const linkedList = (arr, cyclePos = -1) => {
  let head = new ListNode();
  let node = head;
  for (const x of arr) {
    node.next = new ListNode(x);
    node = node.next;
  }
  if (cyclePos != -1) {
    const tail = node;
    let i = 0;
    node = head.next;
    while (i++ < cyclePos) node = node.next;
    tail.next = node;
  }
  return head.next;
};

const printLinkedList = (head) => {
  let els = [];
  while (head) {
    els.push(head.val);
    head = head.next;
  }
  return els;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const binaryTree = (arr, i = 0) => {
  const len = arr.length;
  let root = null;
  if (i < len) {
    root = new TreeNode(arr[i]);
    root.left = arr[2 * i + 1] == null ? null : binaryTree(arr, 2 * i + 1);
    root.right = arr[2 * i + 2] == null ? null : binaryTree(arr, 2 * i + 2);
  }
  return root;
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
/* 
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

// https://leetcode.com/problems/interleaving-string/solutions/3956393/99-78-2-approaches-dp-recursion/ */

// Validate Binary Search Tree					6/2/2024
/* 
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:
// - The left subtree of a node contains only nodes with keys less than the node's key.
// - The right subtree of a node contains only nodes with keys greater than the node's key.
// - Both the left and right subtrees must also be binary search trees.

// Example 1:
// 		Input: root = [2,1,3]
// 		Output: true

// Example 2:
// 		Input: root = [5,1,4,null,null,3,6]
// 		Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
//		The number of nodes in the tree is in the range [1, 10^4].
//		-2^31 <= Node.val <= 2^31 - 1

const badIsValidBST = (root) => {
  const explore = (parent, node, dir) => {
    if (node == null) return true;
    if (dir == "l" && node.val >= parent.val) return false;
    if (dir == "r" && node.val <= parent.val) return false;
    return explore(node, node.left, "l") && explore(node, node.right, "r");
  };
  return explore(root, root.left, "l") && explore(root, root.right, "r");
};

// only checking immediate parent

const isValidBST = (root) => {
  const explore = (node, min, max) => {
    if (node == null) return true;
    if (min != null && node.val <= min) return false;
    if (max != null && node.val >= max) return false;
    return (
      explore(node.left, min, node.val) && explore(node.right, node.val, max)
    );
  };
  return (
    explore(root.left, null, root.val) && explore(root.right, root.val, null)
  );
};

console.log(isValidBST([2, 1, 3])); //  true
console.log(isValidBST([5, 1, 4, null, null, 3, 6])); //  false

// better

var topVotedIsValidBST = function (root, min = null, max = null) {
  if (!root) return true;
  if (min && root.val <= min.val) return false;
  if (max && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

// same same */

// Binary Tree Level Order Traversal					6/3/2024
/* 
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// 		Input: root = [3,9,20,null,null,15,7]
// 		Output: [[3],[9,20],[15,7]]

// Example 2:
// 		Input: root = [1]
// 		Output: [[1]]

// Example 3:
// 		Input: root = []
// 		Output: []

// Constraints:
//		The number of nodes in the tree is in the range [0, 2000].
//		-1000 <= Node.val <= 1000

const levelOrder = (root) => {
  let res = {};

  const traverse = (node, depth = 0) => {
    if (node == null) return;

    if (res[depth]) res[depth].push(node.val);
    else res[depth] = [node.val];

    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  };
  traverse(root);

  return Object.values(res);
};

console.log(
  levelOrder({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  })
); //  [[3],[9,20],[15,7]]

var topVotedLevelOrder = function (root) {
  let q = [root],
    ans = [];
  while (q[0]) {
    let qlen = q.length,
      row = [];
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift();
      row.push(curr.val);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    ans.push(row);
  }
  return ans;
};

// This uses iterative binary tree traversal */

// Binary Tree Zigzag Level Order Traversal					6/4/2024
/* 
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:
// 		Input: root = [3,9,20,null,null,15,7]
// 		Output: [[3],[20,9],[15,7]]

// Example 2:
// 		Input: root = [1]
// 		Output: [[1]]

// Example 3:
// 		Input: root = []
// 		Output: []

// Constraints:
//		The number of nodes in the tree is in the range [0, 2000].
//		-100 <= Node.val <= 100

const zigzagLevelOrder = (root) => {
  let res = {};

  const traverse = (node, depth = 0) => {
    if (node == null) return;

    if (res[depth]) {
      if (depth % 2 == 0) res[depth].push(node.val);
      else res[depth].unshift(node.val);
    } else res[depth] = [node.val];

    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  };
  traverse(root);

  return Object.values(res);
};

console.log(
  zigzagLevelOrder({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  })
); //  [[3],[20,9],[15,7]]

// Good runtime

const topVotedZigzagLevelOrder = (root) => {
  let res = [];

  const go = (node, lvl) => {
    if (node == null) return;
    if (res[lvl] == null) res[lvl] = [];

    if (lvl % 2 === 0) {
      res[lvl].push(node.val);
    } else {
      res[lvl].unshift(node.val);
    }

    go(node.left, lvl + 1);
    go(node.right, lvl + 1);
  };

  go(root, 0);
  return res;
};

// Same */

// Sum Root to Leaf Numbers					6/5/2024
/* 
// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.
// - For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.

// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

// Example 1:
// 		Input: root = [1,2,3]
// 		Output: 25
// Explanation:
// 		The root-to-leaf path 1->2 represents the number 12.
// 		The root-to-leaf path 1->3 represents the number 13.
// 		Therefore, sum = 12 + 13 = 25.

// Example 2:
// 		Input: root = [4,9,0,5,1]
// 		Output: 1026
// Explanation:
// 		The root-to-leaf path 4->9->5 represents the number 495.
// 		The root-to-leaf path 4->9->1 represents the number 491.
// 		The root-to-leaf path 4->0 represents the number 40.
// 		Therefore, sum = 495 + 491 + 40 = 1026.

// Constraints:
//		The number of nodes in the tree is in the range [1, 1000].
//		0 <= Node.val <= 9
//		The depth of the tree will not exceed 10.

const sumNumbers = (root) => {
  let res = 0;

  const dfs = (node, acc = "") => {
    if (node.left == null && node.right == null) {
      res += +(acc + node.val);
      return;
    }
    acc += node.val;
    if (node.left) dfs(node.left, acc);
    if (node.right) dfs(node.right, acc);
  };
  dfs(root);

  return res;
};

console.log(
  sumNumbers({
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  })
); //  25

var topVotedSumNumbers = function (root) {
  let ans = 0;

  const dfs = (node, path) => {
    if (!node) return;
    if (!node.left && !node.right) {
      ans += path * 10 + node.val;
      return;
    }
    dfs(node.left, path * 10 + node.val);
    dfs(node.right, path * 10 + node.val);
  };

  dfs(root, 0);
  return ans;
};

// path*10 to avoid converting from string to int */

// Longest Consecutive Sequence					6/6/2024
/* 
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// 		Input: nums = [100,4,200,1,3,2]
// 		Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// 		Input: nums = [0,3,7,2,5,8,4,6,0,1]
// 		Output: 9

// Constraints:
//		0 <= nums.length <= 10^5
//		-10^9 <= nums[i] <= 10^9

const longestConsecutive = (nums) => {
  const seen = new Set(nums);

  let res = 0;
  for (let n of nums) {
    let cur = 0;
    while (seen.has(n++)) cur++;
    if (cur > res) res = cur;
  }
  return res;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //  4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); //  9

// Not O(n)

var topVotedLongestConsecutive = function (arr) {
  if (arr.length <= 0) return 0;

  let map = new Map();
  for (let elem of arr) {
    map.set(elem, 1);
  }

  for (let i in arr) {
    if (map.has(arr[i] - 1)) {
      map.set(arr[i], 0);
    }
  }

  let maxLen = 1;
  for (let elem of arr) {
    if (map.get(elem) == 1) {
      let seqCount = 1;
      while (map.has(elem + seqCount)) {
        seqCount += 1;
      }

      maxLen = Math.max(maxLen, seqCount);
    }
  }

  return maxLen;
}; */

// Gas Station					6/7/2024
/* 
// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

// Example 1:
// 		Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// 		Output: 3
// Explanation:
// 		Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// 		Travel to station 4. Your tank = 4 - 1 + 5 = 8
// 		Travel to station 0. Your tank = 8 - 2 + 1 = 7
// 		Travel to station 1. Your tank = 7 - 3 + 2 = 6
// 		Travel to station 2. Your tank = 6 - 4 + 3 = 5
// 		Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// 		Therefore, return 3 as the starting index.

// Example 2:
// 		Input: gas = [2,3,4], cost = [3,4,3]
// 		Output: -1
// Explanation:
// 		You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
// 		Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// 		Travel to station 0. Your tank = 4 - 3 + 2 = 3
// 		Travel to station 1. Your tank = 3 - 3 + 3 = 3
// 		You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
// 		Therefore, you can't travel around the circuit once no matter where you start.

// Constraints:
//		n == gas.length == cost.length
//		1 <= n <= 105
//		0 <= gas[i], cost[i] <= 104

const revisedCanCompleteCircuit = (gas, cost) => {
  let absDif = 0; // final gas difference
  let cur = 0; // current gas in tank
  let res = 0; // valid starting index

  gas.forEach((amt, i) => {
    const dif = amt - cost[i]; // fuel required for current station
    absDif += dif; // total gas needed
    cur += dif; // current tank

    if (cur < 0) {
      // insufficient gas
      res = i + 1; // update res
      cur = 0; // reset current tank
    }
  });

  if (absDif < 0) return -1; // not enough total gas
  return res;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); //  3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); //  -1
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])); //  4
console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6])); //  3
console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2])); //  0
console.log(canCompleteCircuit([2, 0, 1, 2, 3, 4, 0], [0, 1, 0, 0, 0, 0, 11])); //  0

// Had another embarrassingly bad/bloated solution
// Rewrote after reading top voted

var topVotedCanCompleteCircuit = function (gas, cost) {
  let totalTank = 0;
  let currentTank = 0;
  let startingStation = 0;

  for (let i = 0; i < gas.length; i++) {
    const netCost = gas[i] - cost[i];
    totalTank += netCost;
    currentTank += netCost;
    if (currentTank < 0) {
      startingStation = i + 1;
      currentTank = 0;
    }
  }

  return totalTank < 0 ? -1 : startingStation;
}; */

// Sort List					6/8/2024
/* 
// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// 		Input: head = [4,2,1,3]
// 		Output: [1,2,3,4]

// Example 2:
// 		Input: head = [-1,5,3,4,0]
// 		Output: [-1,0,3,4,5]

// Example 3:
// 		Input: head = []
// 		Output: []

// Constraints:
//		The number of nodes in the list is in the range [0, 5 * 104].
//		-105 <= Node.val <= 105

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

const sortList = (head) => {
  let vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }
  vals.sort((a, b) => a - b);

  let newHead = new ListNode();
  let node = newHead;
  for (const x of vals) {
    node.next = new ListNode(x);
    node = node.next;
  }

  return newHead.next;
};

console.log(sortList(linkedList([4, 2, 1, 3]))); //  [1,2,3,4]
console.log(sortList(linkedList([-1, 5, 3, 4, 0]))); //  [-1,0,3,4,5]
console.log(sortList(linkedList([]))); //  []

// O(n log n) runtime, but not O(1) memory

var topVotedSortList = function (head) {
  if (head === null || head.next === null) return head;

  const getLength = function (head) {
    let length = 0;
    let curr = head;
    while (curr) {
      length++;
      curr = curr.next;
    }
    return length;
  };

  const split = function (head, step) {
    if (head === null) return null;

    for (let i = 1; i < step && head.next; i++) {
      head = head.next;
    }

    const right = head.next;
    head.next = null;
    return right;
  };

  const merge = function (left, right, tail) {
    let curr = tail;
    while (left && right) {
      if (left.val < right.val) {
        curr.next = left;
        left = left.next;
      } else {
        curr.next = right;
        right = right.next;
      }
      curr = curr.next;
    }

    curr.next = left ? left : right;
    while (curr.next) curr = curr.next;

    return curr;
  };

  const length = getLength(head);
  const dummy = new ListNode(0);
  dummy.next = head;

  let step = 1;
  while (step < length) {
    let curr = dummy.next;
    let tail = dummy;

    while (curr) {
      const left = curr;
      const right = split(left, step);
      curr = split(right, step);

      tail = merge(left, right, tail);
    }

    step *= 2;
  }

  return dummy.next;
};

// Merge sort */

// Path Sum II					6/9/2024
/* 
// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

// Example 1:
// 		Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 		Output: [[5,4,11,2],[5,8,4,5]]
// Explanation: There are two paths whose sum equals targetSum:
// 		5 + 4 + 11 + 2 = 22
// 		5 + 8 + 4 + 5 = 22

// Example 2:
// 		Input: root = [1,2,3], targetSum = 5
// 		Output: []

// Example 3:
// 		Input: root = [1,2], targetSum = 0
// 		Output: []

// Constraints:
//		The number of nodes in the tree is in the range [0, 5000].
//		-1000 <= Node.val <= 1000
//		-1000 <= targetSum <= 1000

const pathSum = (root, t) => {
  if (root == null) return [];

  let paths = [];
  const dfs = (node, path = [], acc = 0) => {
    if (acc + node.val == t && node.left == null && node.right == null) {
      paths.push([...path, node.val]);
    } else {
      if (node.left) dfs(node.left, [...path, node.val], acc + node.val);
      if (node.right) dfs(node.right, [...path, node.val], acc + node.val);
    }
  };
  dfs(root);

  return paths;
};

console.log(
  pathSum(binaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)
); //  [[5,4,11,2],[5,8,4,5]]
console.log(pathSum(binaryTree([1, 2, 3]), 5)); //  []
console.log(pathSum(binaryTree([1, 2]), 0)); //  []
console.log(pathSum(binaryTree([-2, null, -3]), -5)); //  []

var topVotedPathSum = function (root, sum, res = [], path = []) {
  if (root) {
    path.push(root.val);
    if (!root.left && !root.right && sum - root.val === 0) res.push([...path]);
    topVotedPathSum(root.left, sum - root.val, res, path);
    topVotedPathSum(root.right, sum - root.val, res, path);
    path.pop();
  }
  return res;
}; */

// Flatten Binary Tree to Linked List					6/10/2024
/* 
// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.

// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

// Example 1:
// 		Input: root = [1,2,5,3,4,null,6]
// 		Output: [1,null,2,null,3,null,4,null,5,null,6]

// Example 2:
// 		Input: root = []
// 		Output: []

// Example 3:
// 		Input: root = [0]
// 		Output: [0]

// Constraints:
//		The number of nodes in the tree is in the range [0, 2000].
//		-100 <= Node.val <= 100

// Follow up: Can you flatten the tree in-place (with O(1) extra space)?

var topVotedFlatten = function (root) {
  let head = null;
  const revPreOrder = (node) => {
    if (node.right) revPreOrder(node.right);
    if (node.left) revPreOrder(node.left);
    node.left = null;
    node.right = head;
    head = node;
  };
  if (root) revPreOrder(root);
};

console.log(topVotedFlatten(binaryTree([1, 2, 5, 3, 4, null, 6]))); //  [1,null,2,null,3,null,4,null,5,null,6]
console.log(topVotedFlatten(binaryTree([]))); //  []
console.log(topVotedFlatten(binaryTree([0]))); //  [0] */

// Word Break					6/11/2024
/* 
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// 		Input: s = "leetcode", wordDict = ["leet","code"]
// 		Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// 		Input: s = "applepenapple", wordDict = ["apple","pen"]
// 		Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// 		Note that you are allowed to reuse a dictionary word.

// Example 3:
// 		Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// 		Output: false

// Constraints:
//		1 <= s.length <= 300
//		1 <= wordDict.length <= 1000
//		1 <= wordDict[i].length <= 20
//		s and wordDict[i] consist of only lowercase English letters.
//		All the strings of wordDict are unique.

const wordBreak = (s, dict) => {
  if (/^(_)\1*$/.test(s)) return true; // s == 1 or more '_'
  if (dict.length == 0) return false;
  const word = dict[0];
  return (
    wordBreak(s.replaceAll(word, "_"), dict.slice(1)) || // '_' to avoid reshuffling of segments
    wordBreak(s, dict.slice(1))
  );
};

console.log(wordBreak("leetcode", ["leet", "code"])); //  true
console.log(wordBreak("applepenapple", ["apple", "pen"])); //  true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); //  false
console.log(wordBreak("cars", ["car", "ca", "rs"])); //  true
console.log(wordBreak("cbca", ["bc", "ca"])); //  false
console.log(wordBreak("a", ["b"])); //  false

// Doesn't pass all test cases

var topVotedWordBreak = function (s, wordDict) {
  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  let max_len = Math.max(...wordDict.map((word) => word.length));

  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j >= Math.max(i - max_len - 1, 0); j--) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}; */

// Insertion Sort List					6/12/2024
/* 
// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

// The steps of the insertion sort algorithm:

// Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.

// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.

// It repeats until no input elements remain.

// The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

// Example 1:
// 		Input: head = [4,2,1,3]
// 		Output: [1,2,3,4]

// Example 2:
// 		Input: head = [-1,5,3,4,0]
// 		Output: [-1,0,3,4,5]

// Constraints:
//		The number of nodes in the list is in the range [1, 5000].
//		-5000 <= Node.val <= 5000

const insertionSortList = (head) => {
  if (!head) return null; // empty linked list
  if (!head.next) return head; // head.length == 1

  let newHead = head;
  let node = head.next;
  newHead.next = null;

  const sort = (cur) => {
    if (cur.val <= newHead.val) {
      // 1st el edge case
      cur.next = newHead;
      newHead = cur;
    } else {
      let node = newHead;
      while (node.next) {
        if (cur.val < node.next.val) {
          // insert case
          cur.next = node.next;
          node.next = cur;
          return;
        }
        node = node.next;
      }
      // last el edge case
      node.next = cur;
      cur.next = null;
    }
  };

  while (node) {
    let next = node.next;
    sort(node);
    node = next;
  }
  return newHead;
};

console.log(printLinkedList(insertionSortList(linkedList([4, 2, 1, 3])))); //  [1,2,3,4]
console.log(printLinkedList(insertionSortList(linkedList([-1, 5, 3, 4, 0])))); //  [-1,0,3,4,5]

function topVotedInsertionSortList(head) {
  if (!head) return null;
  if (!head.next) return head;

  let output = head;
  let curr = head.next;

  head.next = null;

  while (curr) {
    const next = curr.next;
    const insertion = curr;

    output = insert(output, insertion);
    curr = next;
  }

  return output;
}

function insert(head, other) {
  let curr = head;
  const val = other.val;

  if (val <= head.val) {
    other.next = head;
    return other;
  }

  while (curr) {
    if ((val > curr.val && curr.next && val <= curr.next.val) || !curr.next) {
      other.next = curr.next;
      curr.next = other;

      return head;
    }

    curr = curr.next;
  }

  return head;
} */

// Reorder List					6/13/2024
/* 
// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln

// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:
// 		Input: head = [1,2,3,4]
// 		Output: [1,4,2,3]

// Example 2:
// 		Input: head = [1,2,3,4,5]
// 		Output: [1,5,2,4,3]

// Constraints:
//		The number of nodes in the list is in the range [1, 5 * 104].
//		1 <= Node.val <= 1000

const reorderList = (head) => {
  if (!head || !head.next) return head;

  let refs = [];
  let node = head;
  let n = 0;

  while (node) {
    refs.push(node);
    node = node.next;
    n++;
  }
  let m = Math.ceil(n / 2);
  refs.splice(0, m); // only keep second half

  node = head;
  for (let i = 0; i < m; i++) {
    let cur = refs.pop(); // tail
    cur.next = node.next; // insert
    node.next = cur;

    node = node.next.next;
    if (refs.length == 0) {
      // when end is reached, tail.next = null
      node.next = null;
      break;
    }
  }

  return head;
};

console.log(printLinkedList(reorderList(linkedList([1, 2, 3, 4])))); //  [1,4,2,3]
console.log(printLinkedList(reorderList(linkedList([1, 2, 3, 4, 5])))); //  [1,5,2,4,3]

// O(n) amortized

var topVotedReorderList = function (head) {
  if (!head || !head.next) return;

  // Find the middle of the linked list
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  let curr = slow.next;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  slow.next = null;

  // Merge the two halves
  let p1 = head;
  let p2 = prev;
  while (p1 && p2) {
    let nextP1 = p1.next;
    let nextP2 = p2.next;
    p1.next = p2;
    p2.next = nextP1;
    p1 = nextP1;
    p2 = nextP2;
  }
};

// clean */

// Linked List Cycle II					6/14/2024
/* 
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

// Example 1:
// 		Input: head = [3,2,0,-4], pos = 1
// 		Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
// 		Input: head = [1,2], pos = 0
// 		Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:
// 		Input: head = [1], pos = -1
// 		Output: no cycle
// Explanation: There is no cycle in the linked list.

// Constraints:
//		The number of the nodes in the list is in the range [0, 10^4].
//		-105 <= Node.val <= 105
//		pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      // cycle occurs
      // couldn't get this part working
      // ended up comparing with top voted
      slow = head;
      while (slow != fast) {
        // see explanation below for why this works
        slow = slow.next;
        fast = fast.next;
      }
      return slow; // node where cycle begins
    }
  }
  return null; // tail.next = null
};

console.log(detectCycle(linkedList([3, 2, 0, -4], 1))); //  tail connects to node index 1
console.log(detectCycle(linkedList([1, 2], 0))); //  tail connects to node index 0
console.log(detectCycle(linkedList([1], -1))); //  no cycle

// Explanation:
// https://leetcode.com/problems/linked-list-cycle-ii/solutions/495311/javascript-two-pointers-w-extended-notes/ */

// Maximum Gap					6/15/2024
/* 
// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

// Example 1:
// 		Input: nums = [3,6,9,1]
// 		Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

// Example 2:
// 		Input: nums = [10]
// 		Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

// Constraints:
//		1 <= nums.length <= 105
//		0 <= nums[i] <= 109

var topVotedMaximumGap = function (nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);

  let bucketSize = Math.max(1, Math.floor((max - min) / nums.length - 1));
  let buckets = {};

  for (let i = 0; i < nums.length; i++) {
    let bucketId = Math.floor((nums[i] - min) / bucketSize);
    buckets[bucketId] = {
      min: Math.min(
        nums[i],
        buckets[bucketId] ? buckets[bucketId].min : Infinity
      ),
      max: Math.max(
        nums[i],
        buckets[bucketId] ? buckets[bucketId].max : -Infinity
      ),
    };
  }

  let prevBucketMax = min,
    maxGap = 0;

  Object.values(buckets).forEach((b) => {
    maxGap = Math.max(maxGap, b.min - prevBucketMax);
    prevBucketMax = b.max;
  });

  return maxGap;
};

console.log(topVotedMaximumGap([3, 6, 9, 1])); //  3
console.log(topVotedMaximumGap([10])); //  0

// using pigeonhole principle and bucket size */

// Matrix Similarity After Cyclic Shifts					6/16/2024
/* 
// You are given an m x n integer matrix mat and an integer k. The matrix rows are 0-indexed.

// The following proccess happens k times:

// Even-indexed rows (0, 2, 4, ...) are cyclically shifted to the left.

// Odd-indexed rows (1, 3, 5, ...) are cyclically shifted to the right.

// Return true if the final modified matrix after k steps is identical to the original matrix, and false otherwise.

// Example 1:
// 		Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 4
// 		Output: false
// Explanation:
// 		In each step left shift is applied to rows 0 and 2 (even indices), and right shift to row 1 (odd index).

// Example 2:
// 		Input: mat = [[1,2,1,2],[5,5,5,5],[6,3,6,3]], k = 2
// 		Output: true
// Explanation:

// Example 3:
// 		Input: mat = [[2,2],[2,2]], k = 3
// 		Output: true
// Explanation:
// 		As all the values are equal in the matrix, even after performing cyclic shifts the matrix will remain the same.

// Constraints:
//		1 <= mat.length <= 25
//		1 <= mat[i].length <= 25
//		1 <= mat[i][j] <= 25
//		1 <= k <= 50

const areSimilar = (mat, k) => {
  let n = mat[0].length;
  if (k % n == 0) return true; // back to starting pos, no change

  for (const row of mat) {
    let i = 0; // 1st el of original row
    let j = k % n; // 1st el of shifted row

    while (j < n) {
      if (row[i++] != row[j++]) return false;
    }
    j = 0; // shifted row wraps around
    while (i < n) {
      if (row[i++] != row[j++]) return false;
    }
  }
  return true;
};

console.log(
  areSimilar(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    4
  )
); //  false
console.log(
  areSimilar(
    [
      [1, 2, 1, 2],
      [5, 5, 5, 5],
      [6, 3, 6, 3],
    ],
    2
  )
); //  true
console.log(
  areSimilar(
    [
      [2, 2],
      [2, 2],
    ],
    3
  )
); //  true

// part of LeetCode content feedback
// same as top voteds */

// Determine the Winner of a Bowling Game					6/17/2024
/* 
// You are given two 0-indexed integer arrays player1 and player2, representing the number of pins that player 1 and player 2 hit in a bowling game, respectively.

// The bowling game consists of n turns, and the number of pins in each turn is exactly 10.

// Assume a player hits xi pins in the ith turn. The value of the ith turn for the player is:
// 2xi if the player hits 10 pins in either (i - 1)th or (i - 2)th turn.
// Otherwise, it is xi.

// The score of the player is the sum of the values of their n turns.

// Return
// 1 if the score of player 1 is more than the score of player 2,
// 2 if the score of player 2 is more than the score of player 1, and
// 0 in case of a draw.

// Example 1:
// 		Input: player1 = [5,10,3,2], player2 = [6,5,7,3]
// 		Output: 1
// Explanation:
// 		The score of player 1 is 5 + 10 + 2*3 + 2*2 = 25.
// 		The score of player 2 is 6 + 5 + 7 + 3 = 21.

// Example 2:
// 		Input: player1 = [3,5,7,6], player2 = [8,10,10,2]
// 		Output: 2
// Explanation:
// 		The score of player 1 is 3 + 5 + 7 + 6 = 21.
// 		The score of player 2 is 8 + 10 + 2*10 + 2*2 = 42.

// Example 3:
// 		Input: player1 = [2,3], player2 = [4,1]
// 		Output: 0
// Explanation:
// 		The score of player1 is 2 + 3 = 5.
// 		The score of player2 is 4 + 1 = 5.

// Example 4:
// 		Input: player1 = [1,1,1,10,10,10,10], player2 = [10,10,10,10,1,1,1]
// 		Output: 2
// Explanation:
// 		The score of player1 is 1 + 1 + 1 + 10 + 2*10 + 2*10 + 2*10 = 73.
// 		The score of player2 is 10 + 2*10 + 2*10 + 2*10 + 2*1 + 2*1 + 1 = 75.

// Constraints:
//		n == player1.length == player2.length
//		1 <= n <= 1000
//		0 <= player1[i], player2[i] <= 10

const isWinner = (p1, p2) => {
  const calcScore = (p) =>
    p.reduce(
      (acc, score, i, arr) =>
        acc + (arr[i - 1] == 10 || arr[i - 2] == 10 ? 2 * score : score),
      0
    );

  const s1 = calcScore(p1);
  const s2 = calcScore(p2);

  return s1 > s2 ? 1 : s1 < s2 ? 2 : 0;
};

console.log(isWinner([5, 10, 3, 2], [6, 5, 7, 3])); //  1
console.log(isWinner([3, 5, 7, 6], [8, 10, 10, 2])); //  2
console.log(isWinner([2, 3], [4, 1])); //  0
console.log(isWinner([1, 1, 1, 10, 10, 10, 10], [10, 10, 10, 10, 1, 1, 1])); //  2

// tried to make it concise, but turned out a bit slow

var topVotedIsWinner = function (player1, player2) {
  let p1Total = 0;
  let p2Total = 0;

  for (let i = 0; i < player1.length; i++) {
    if (player1[i - 1] === 10 || player1[i - 2] === 10) {
      p1Total += 2 * player1[i];
    } else {
      p1Total += player1[i];
    }

    if (player2[i - 1] === 10 || player2[i - 2] === 10) {
      p2Total += 2 * player2[i];
    } else {
      p2Total += player2[i];
    }
  }

  if (p1Total === p2Total) return 0;
  return p1Total < p2Total ? 2 : 1;
};

// ah, could totally be done in 1 loop

const revisedIsWinner = (p1, p2) => {
  let s1 = 0,
    s2 = 0;
  for (let i = 0; i < p1.length; i++) {
    s1 += p1[i - 1] == 10 || p1[i - 2] == 10 ? 2 * p1[i] : p1[i];
    s2 += p2[i - 1] == 10 || p2[i - 2] == 10 ? 2 * p2[i] : p2[i];
  }
  return s1 > s2 ? 1 : s1 < s2 ? 2 : 0;
}; */

// Max Pair Sum in an Array					6/18/2024
/* 
// You are given an integer array nums. You have to find the maximum sum of a pair of numbers from nums such that the largest digit in both numbers is equal.

// For example, 2373 is made up of three distinct digits: 2, 3, and 7, where 7 is the largest among them.

// Return the maximum sum or -1 if no such pair exists.

// Example 1:
// 		Input: nums = [112,131,411]
// 		Output: -1
// Explanation:
// 		Each numbers largest digit in order is [2,3,4].

// Example 2:
// 		Input: nums = [2536,1613,3366,162]
// 		Output: 5902
// Explanation:
// 		All the numbers have 6 as their largest digit, so the answer is 2536 + 3366 = 5902.

// Example 3:
// 		Input: nums = [51,71,17,24,42]
// 		Output: 88
// Explanation:
// 		Each number's largest digit in order is [5,7,7,4,4].
// 		So we have only two possible pairs, 71 + 17 = 88 and 24 + 42 = 66.

// Constraints:
//		2 <= nums.length <= 100
//		1 <= nums[i] <= 104

const maxSum = (nums) => {
  // keep 2 largest nums for each digit
  let digits = new Array(10).fill(null).map((_) => new Array(2));

  for (const n of nums) {
    const digit = getLargestDigit(n); // largest digit of n

    if (n >= digits[digit][1] || digits[digit][1] == null) {
      // new max found for this digit
      digits[digit][0] = digits[digit][1];
      digits[digit][1] = n;
    } else if (n > digits[digit][0] || digits[digit][0] == null) {
      // new 2nd max found for this digit
      digits[digit][0] = n;
    }
  }

  let res = -1;
  for (const [a, b] of digits) {
    if (a == null || b == null) continue; // no pairs for this digit
    res = Math.max(res, a + b);
  }
  return res;
};

const getLargestDigit = (n) => {
  let max = 0;
  while (n > 0) {
    const d = n % 10;
    max = Math.max(max, d);
    n = (n - d) / 10;
  }
  return max;
};

console.log(maxSum([112, 131, 411])); //  -1
console.log(maxSum([2536, 1613, 3366, 162])); //  5902
console.log(maxSum([51, 71, 17, 24, 42])); //  88

function topVotedMaxSum(nums) {
  const maxes = new Array(10).fill(-Infinity);
  let max = -1;
  for (const num of nums) {
    const maxDigit = getMaxDigit(num);
    max = Math.max(max, num + maxes[maxDigit]);
    maxes[maxDigit] = Math.max(num, maxes[maxDigit]);
  }
  return max;
}

function getMaxDigit(n) {
  let max = 0;
  while (n > 0) {
    const mod = n % 10;
    max = Math.max(max, mod);
    n = (n - mod) / 10;
  }
  return max;
} */

// Maximum Nesting Depth of the Parentheses					6/19/2024
/* 
// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

// Example 1:
// 		Input: s = "(1+(2*3)+((8)/4))+1"
// 		Output: 3
// Explanation:
// 		Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:
// 		Input: s = "(1)+((2))+(((3)))"
// 		Output: 3
// Explanation:
// 		Digit 3 is inside of 3 nested parentheses in the string.

// Example 3:
// 		Input: s = "()(())((()()))"
// 		Output: 3

// Constraints:
//		1 <= s.length <= 100
//		s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
//		It is guaranteed that parentheses expression s is a VPS.

const maxDepth = (s) => {
  let res = 0;
  let depth = 0;
  for (const c of s) {
    c == "(" ? depth++ : c == ")" ? depth-- : null;
    if (depth > res) res = depth;
  }
  return res;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); //  3
console.log(maxDepth("(1)+((2))+(((3)))")); //  3
console.log(maxDepth("()(())((()()))")); //  3

// an easy one today
// done in the context of Leetcode's content improvement feedback

var topVotedMaxDepth = function (s) {
  let count = 0;
  let maxNum = 0;
  for (let c of s) {
    if (c === "(") {
      count++;
      if (maxNum < count) maxNum = count;
    } else if (c === ")") {
      count--;
    }
  }
  return maxNum;
};

// nesting updating res only when count is incremented saves unnecessary checks */

// Minimum Array Length After Pair Removals					6/20/2024
/* 
// Given an integer array num sorted in non-decreasing order.

// You can perform the following operation any number of times:
// - Choose two indices, i and j, where nums[i] < nums[j].
// - Then, remove the elements at indices i and j from nums. The remaining elements retain their original order, and the array is re-indexed.

// Return the minimum length of nums after applying the operation zero or more times.

// Example 1:
// 		Input: nums = [1,2,3,4]
// 		Output: 0
// Explanation:

// Example 2:
// 		Input: nums = [1,1,2,2,3,3]
// 		Output: 0
// Explanation:

// Example 3:
// 		Input: nums = [1000000000,1000000000]
// 		Output: 2
// Explanation:
// 		Since both numbers are equal, they cannot be removed.

// Example 4:
// 		Input: nums = [2,3,4,4,4]
// 		Output: 1
// Explanation:

// Constraints:
//		1 <= nums.length <= 10^5
//		1 <= nums[i] <= 10^9
//		nums is sorted in non-decreasing order.

const minLengthAfterRemovals = (nums) => {
  let count = nums.reduce((a, c) => {
    a[c] ? a[c]++ : (a[c] = 1);
    return a;
  }, {});

  let arr = Object.values(count).sort((a, b) => b - a);
  while (arr.length > 1) {
    while (arr[0]) {
      for (let i = 1; i < arr.length; i++) {
        arr[0]--;
        arr[i]--;
        if (arr[0] == 0) break;
      }
      arr = arr.filter((x) => x != 0);
      if (arr.length == 1) break;
    }
  }
  return arr[0] || 0;
};

console.log(minLengthAfterRemovals([1, 2, 3, 4])); //  0
console.log(minLengthAfterRemovals([1, 1, 2, 2, 3, 3])); //  0
console.log(minLengthAfterRemovals([1000000000, 1000000000])); //  2
console.log(minLengthAfterRemovals([2, 3, 4, 4, 4])); //  1

// not great runtime complexity
// doesn't work for all test cases

var topVotedMinLengthAfterRemovals = function (a) {
  let n = a.length;

  let count = 0;
  let half = Math.trunc(n / 2);
  for (let i = 0, j = half; i < half && j < n; ) {
    let L = a[i]; // left = start to mid
    let R = a[j]; // right = mid to end

    if (L < R) {
      i++;
      j++;
      count += 2; // two elements matched - to be removed
    } else {
      j++;
    }
  }
  return n - count; // remaining elements
};

// much better */

// Beautiful Towers I					6/21/2024
/* 
// You are given an array heights of n integers representing the number of bricks in n consecutive towers. Your task is to remove some bricks to form a mountain-shaped tower arrangement. In this arrangement, the tower heights are non-decreasing, reaching a maximum peak value with one or multiple consecutive towers and then non-increasing.

// Return the maximum possible sum of heights of a mountain-shaped tower arrangement.

// Example 1:
// 		Input: heights = [5,3,4,1,1]
// 		Output: 13
// Explanation:
// 		We remove some bricks to make heights = [5,3,3,1,1], the peak is at index 0.

// Example 2:
// 		Input: heights = [6,5,3,9,2,7]
// 		Output: 22
// Explanation:
// 		We remove some bricks to make heights = [3,3,3,9,2,2], the peak is at index 3.

// Example 3:
// 		Input: heights = [3,2,5,5,2,3]
// 		Output: 18
// Explanation:
// 		We remove some bricks to make heights = [2,2,5,5,2,2], the peak is at index 2 or 3.

// Constraints:
//		1 <= n == heights <= 10^3
//		1 <= heights[i] <= 10^9

const maximumSumOfHeights = (heights) => {
  let n = heights.length;
  // maximum sum of heights is achieved by removing the least bricks possible
  // less bricks removed means we're trying to make the least changes to the original array
  // less changes means we need to find a peak where left and right best respects the mountain shape

  let totBricks = 0;
  let minBricksRemoved = Infinity;
  for (let i = 0; i < n; i++) {
    // for an given index, find changes required for mountain shape to be met
    totBricks += heights[i];

    let bricksRemoved = 0;
    // left
    let prev = heights[i];
    for (let l = i - 1; l >= 0; l--) {
      if (heights[l] > prev) {
        bricksRemoved += heights[l] - prev; // remove bricks to match prev
      } else {
        prev = heights[l]; // new ceiling
      }
    }
    // right
    prev = heights[i];
    for (let r = i + 1; r < n; r++) {
      if (heights[r] > prev) {
        bricksRemoved += heights[r] - prev; // remove bricks to match prev
      } else {
        prev = heights[r]; // new ceiling
      }
    }

    minBricksRemoved = Math.min(minBricksRemoved, bricksRemoved);
  }

  return totBricks - minBricksRemoved;
};

console.log(maximumSumOfHeights([5, 3, 4, 1, 1])); //  13
console.log(maximumSumOfHeights([6, 5, 3, 9, 2, 7])); //  22
console.log(maximumSumOfHeights([3, 2, 5, 5, 2, 3])); //  18

// Great Runtime

var topVotedMaximumSumOfHeights = function (maxHeights) {
  let n = maxHeights.length,
    maxSum = 0;
  for (let i = 0; i < n; i++) {
    let peak = maxHeights[i],
      currHeight = peak,
      sum = peak;
    for (let j = i - 1; j >= 0; j--) {
      currHeight = Math.min(currHeight, maxHeights[j]);
      sum += currHeight;
    }
    currHeight = peak;
    for (let j = i + 1; j < n; j++) {
      currHeight = Math.min(currHeight, maxHeights[j]);
      sum += currHeight;
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

// same same */

// Clear Digits					6/22/2024
/* 
// You are given a string s.

// Your task is to remove all digits by doing this operation repeatedly:
// Delete the first digit and the closest non-digit character to its left.

// Return the resulting string after removing all digits.

// Example 1:
// 		Input: s = "abc"
// 		Output: "abc"
// Explanation:
// 		There is no digit in the string.

// Example 2:
// 		Input: s = "cb34"
// 		Output: ""
// Explanation:
// 		First, we apply the operation on s[2], and s becomes "c4".
// 		Then we apply the operation on s[1], and s becomes "".

// Constraints:
//		1 <= s.length <= 100
//		s consists only of lowercase English letters and digits.
//		The input is generated such that it is possible to delete all digits.

const clearDigits = (s) => {
  let res = new Array(s.length);
  let pos = 0;
  for (const c of s) {
    if (c >= 0 && c <= 9) {
      pos--;
    } else {
      res[pos] = c;
      pos++;
    }
  }
  return res.slice(0, pos).join("");
};

console.log(clearDigits("abc")); //  "abc"
console.log(clearDigits("cb34")); //  ""
console.log(clearDigits("d9")); //  ""

const topVotedClearDigits = (s) => {
  let res = s;

  while (/\d/g.test(res)) {
    res = res.replace(/.\d/, "");
  }

  return res;
};

// was at paroi elephant, poisson blanc today
// great climbing! */

// Find Common Elements Between Two Arrays					6/23/2024
/* 
// You are given two integer arrays nums1 and nums2 of sizes n and m, respectively. Calculate the following values:

// answer1 : the number of indices i such that nums1[i] exists in nums2.
// answer2 : the number of indices i such that nums2[i] exists in nums1.

// Return [answer1, answer2].

// Example 1:
// 		Input: nums1 = [2,3,2], nums2 = [1,2]
// 		Output: [2,1]
// Explanation:

// Example 2:
// 		Input: nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
// 		Output: [3,4]
// Explanation:
// 		The elements at indices 1, 2, and 3 in nums1 exist in nums2 as well. So answer1 is 3.
// 		The elements at indices 0, 1, 3, and 4 in nums2 exist in nums1. So answer2 is 4.

// Example 3:
// 		Input: nums1 = [3,4,2,3], nums2 = [1,5]
// 		Output: [0,0]
// Explanation:
// 		No numbers are common between nums1 and nums2, so answer is [0,0].

// Constraints:
//		n == nums1.length
//		m == nums2.length
//		1 <= n, m <= 100
//		1 <= nums1[i], nums2[i] <= 100

const findIntersectionValues = (nums1, nums2) => {
  const [set1, set2] = [new Set(nums1), new Set(nums2)];
  let res = [0, 0];
  for (let i = 0; i < nums1.length || i < nums2.length; i++) {
    if (nums1[i] && set2.has(nums1[i])) res[0]++;
    if (nums2[i] && set1.has(nums2[i])) res[1]++;
  }
  return res;
};

console.log(findIntersectionValues([2, 3, 2], [1, 2])); //  [2,1]
console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])); //  [3,4]
console.log(findIntersectionValues([3, 4, 2, 3], [1, 5])); //  [0,0]

function findIntersectionValues(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let count1 = 0,
    count2 = 0;

  // Find the number of elements in nums1 that are present in nums2
  for (let num of nums1) {
    if (set2.has(num)) {
      count1++;
    }
  }

  // Find the number of elements in nums2 that are present in nums1
  for (let num of nums2) {
    if (set1.has(num)) {
      count2++;
    }
  }

  return [count1, count2];
}

// same same */

// Number of Even and Odd Bits					6/24/2024
/* 
// You are given a positive integer n.

// Let even denote the number of even indices in the binary representation of n with value 1.
// Let odd denote the number of odd indices in the binary representation of n with value 1.
// Note that bits are indexed from right to left in the binary representation of a number.

// Return the array [even, odd].

// Example 1:
// 		Input: n = 50
// 		Output: [1,2]
// Explanation:
// 		The binary representation of 50 is 110010.
// 		It contains 1 on indices 1, 4, and 5.

// Example 2:
// 		Input: n = 2
// 		Output: [0,1]
// Explanation:
// 		The binary representation of 2 is 10.
// 		It contains 1 only on index 1.

// Constraints:
//		1 <= n <= 1000

const evenOddBit = (n) => {
  let even = true; // start at idx 0
  let res = [0, 0];

  while (n > 0) {
    if (n % 2) even ? res[0]++ : res[1]++; // '1' found
    n >>= 1;
    even = !even; // toggle between even and odd
  }

  return res;
};

console.log(evenOddBit(50)); //  [1,2]
console.log(evenOddBit(2)); //  [0,1]

// 100% Runtime

var topVotedEvenOddBit = function (n) {
  let binaryN = n.toString(2).split("").reverse();
  let odd = 0;
  let even = 0;
  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] == 1) {
      if (i % 2 == 0) even++;
      else odd++;
    }
  }
  return [even, odd];
};

// toString() really impacts runtime */

// Find the Maximum Divisibility Score					6/25/2024
/* 
// You are given two integer arrays nums and divisors.

// The divisibility score of divisors[i] is the number of indices j such that nums[j] is divisible by divisors[i].

// Return the integer divisors[i] with the maximum divisibility score. If multiple integers have the maximum score, return the smallest one.

// Example 1:
// 		Input: nums = [2,9,15,50], divisors = [5,3,7,2]
// 		Output: 2
// Explanation:
// 		The divisibility score of divisors[0] is 2 since nums[2] and nums[3] are divisible by 5.
// 		The divisibility score of divisors[1] is 2 since nums[1] and nums[2] are divisible by 3.
// 		The divisibility score of divisors[2] is 0 since none of the numbers in nums is divisible by 7.
// 		The divisibility score of divisors[3] is 2 since nums[0] and nums[3] are divisible by 2.
// 		As divisors[0], divisors[1], and divisors[3] have the same divisibility score, we return the smaller one which is divisors[3].

// Example 2:
// 		Input: nums = [4,7,9,3,9], divisors = [5,2,3]
// 		Output: 3
// Explanation:
// 		The divisibility score of divisors[0] is 0 since none of numbers in nums is divisible by 5.
// 		The divisibility score of divisors[1] is 1 since only nums[0] is divisible by 2.
// 		The divisibility score of divisors[2] is 3 since nums[2], nums[3] and nums[4] are divisible by 3.

// Example 3:
// 		Input: nums = [20,14,21,10], divisors = [10,16,20]
// 		Output: 10
// Explanation:
// 		The divisibility score of divisors[0] is 2 since nums[0] and nums[3] are divisible by 10.
// 		The divisibility score of divisors[1] is 0 since none of the numbers in nums is divisible by 16.
// 		The divisibility score of divisors[2] is 1 since nums[0] is divisible by 20.

// Constraints:
//		1 <= nums.length, divisors.length <= 1000
//		1 <= nums[i], divisors[i] <= 10^9

const maxDivScore = (nums, divisors) => {
  let res = [Infinity, 0]; // [divisor, maxDivisibilityScore]
  for (const div of divisors) {
    let divScore = 0;
    for (const n of nums) {
      if (n % div == 0) divScore++; // divisor found
    }
    if (divScore > res[1]) res = [div, divScore]; // new most divisible
    else if (divScore == res[1] && div < res[0]) res[0] = div; // smaller most divisible
  }
  return res[0];
};

console.log(maxDivScore([2, 9, 15, 50], [5, 3, 7, 2])); //  2
console.log(maxDivScore([4, 7, 9, 3, 9], [5, 2, 3])); //  3
console.log(maxDivScore([20, 14, 21, 10], [10, 16, 20])); //  10

// I wonder if there's an O(n) approach

const topVotedMaxDivScore = (a, b) => {
  let f = [];
  b.map((d, i) => {
    let cnt = 0;
    for (const x of a) {
      if (x % d == 0) cnt++;
    }
    f.push([cnt, d]);
  });
  f.sort((x, y) => y[0] - x[0] || x[1] - y[1]);
  return f[0][1];
};

// Not great readability */

// Minimize String Length					6/26/2024
/* 
// Given a string s, you have two types of operation:

// Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the left of i (if exists).

// Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the right of i (if exists).

// Your task is to minimize the length of s by performing the above operations zero or more times.

// Return an integer denoting the length of the minimized string.

// Example 1:
// 		Input: s = "aaabc"
// 		Output: 3
// Explanation:
// 		Operation 2: we choose i = 1 so c is 'a', then we remove s[2] as it is closest 'a' character to the right of s[1].
// 		s becomes "aabc" after this.
// 		Operation 1: we choose i = 1 so c is 'a', then we remove s[0] as it is closest 'a' character to the left of s[1].
// 		s becomes "abc" after this.

// Example 2:
// 		Input: s = "cbbd"
// 		Output: 3
// Explanation:
// 		Operation 1: we choose i = 2 so c is 'b', then we remove s[1] as it is closest 'b' character to the left of s[1].
// 		s becomes "cbd" after this.

// Example 3:
// 		Input: s = "baadccab"
// 		Output: 4
// Explanation:
// 		Operation 1: we choose i = 6 so c is 'a', then we remove s[2] as it is closest 'a' character to the left of s[6].
// 		s becomes "badccab" after this.
// 		Operation 2: we choose i = 0 so c is 'b', then we remove s[6] as it is closest 'b' character to the right of s[0].
// 		s becomes "badcca" fter this.
// 		Operation 2: we choose i = 3 so c is 'c', then we remove s[4] as it is closest 'c' character to the right of s[3].
// 		s becomes "badca" after this.
// 		Operation 1: we choose i = 4 so c is 'a', then we remove s[1] as it is closest 'a' character to the left of s[4].
// 		s becomes "bdca" after this.

// Constraints:
//		1 <= s.length <= 100
//		s contains only lowercase English letters

const minimizedStringLength = (s) => new Set(s).size;

console.log(minimizedStringLength("aaabc")); //  3
console.log(minimizedStringLength("cbbd")); //  3
console.log(minimizedStringLength("baadccab")); //  4

// same as top voted */

// Minimum Number of Coins for Fruits					6/27/2024
/* 
// You are given an integer array prices where prices[i] denotes the number of coins needed to purchase the ith fruit.

// The fruit market has the following reward for each fruit:
// - If you purchase the ith fruit at prices[i] coins, you can get any number of the next (i + 1) fruits for free.

// Note that even if you can take fruit j for free, you can still purchase it for prices[j] coins to receive its reward.

// Return the minimum number of coins needed to acquire all the fruits.

// Example 1:
// 		Input: prices = [3,1,2]
// 		Output: 4
// Explanation:
// 		Purchase the 1st fruit with prices[0] = 3 coins, you are allowed to take the 2nd fruit for free.
// 		Purchase the 2nd fruit with prices[1] = 1 coin, you are allowed to take the 3rd fruit for free.
// 		Take the 3rd fruit for free.
// 		Note that even though you could take the 2nd fruit for free as a reward of buying 1st fruit, you purchase it to receive its reward, which is more optimal.

// Example 2:
// 		Input: prices = [1,10,1,1]
// 		Output: 2
// Explanation:
// 		Purchase the 1st fruit with prices[0] = 1 coin, you are allowed to take the 2nd fruit for free.
// 		Take the 2nd fruit for free.
// 		Purchase the 3rd fruit for prices[2] = 1 coin, you are allowed to take the 4th fruit for free.
// 		Take the 4th fruit for free.

// Example 3:
// 		Input: prices = [26,18,6,12,49,7,45,45]
// 		Output: 39
// Explanation:
// 		Purchase the 1st fruit with prices[0] = 26 coin, you are allowed to take the 2nd fruit for free.
// 		Take the 2nd fruit for free.
// 		Purchase the 3rd fruit for prices[2] = 6 coin, you are allowed to take the 4th, 5th and 6th (the next three) fruits for free.
// 		Take the 4th fruit for free.
// 		Take the 5th fruit for free.
// 		Purchase the 6th fruit with prices[5] = 7 coin, you are allowed to take the 8th and 9th fruit for free.
// 		Take the 7th fruit for free.
// 		Take the 8th fruit for free.
// 		Note that even though you could take the 6th fruit for free as a reward of buying 3rd fruit, you purchase it to receive its reward, which is more optimal.

// Constraints:
//		1 <= prices.length <= 1000
//		1 <= prices[i] <= 105

const minimumCoins = (prices) => {
  let n = prices.length;
  let minCoins = Number.MAX_SAFE_INTEGER;

  const dfs = (coins, curIdx, maxFreeIdx) => {
    if (coins >= minCoins) return; // dead end
    if (maxFreeIdx >= n) {
      // end within reach of free
      minCoins = coins; // new min
      return;
    }
    for (let i = maxFreeIdx; i > curIdx; i--) {
      dfs(coins + prices[i], i, i * 2 + 2); // work backwards
    }
  };

  dfs(prices[0], 0, 2);
  return minCoins;
};
console.log(revisedMinimumCoins([3, 1, 2])); //  4
console.log(revisedMinimumCoins([1, 10, 1, 1])); //  2
console.log(revisedMinimumCoins([26, 18, 6, 12, 49, 7, 45, 45])); //  39

// Exceeds runtime, passes 574/578 testcases

function topVotedMinimumCoins(A) {
  let N = A.length;
  let dp = new Array(N + 5).fill(1e9);

  dp[0] = 0; // Zero coins needed to make zero sum

  // Loop through each element of the array A
  for (let i = 1; i <= N; i++) {
    let sdp = dp[i - 1] + A[i - 1]; // Sum of current dp value and current coin value

    // Loop through possible positions to update dp array
    for (let j = 0; j <= i; j++) {
      // Update dp array with the minimum value between current dp and calculated sdp
      dp[Math.min(N, i + j)] = Math.min(dp[Math.min(N, i + j)], sdp);
    }
  }

  return dp[N]; // Return the minimum coins needed for N elements
} */

// Minimum Cost of a Path With Special Roads					6/28/2024
/* 
// You are given an array start where start = [startX, startY] represents your initial position (startX, startY) in a 2D space. You are also given the array target where target = [targetX, targetY] represents your target position (targetX, targetY).

// The cost of going from a position (x1, y1) to any other position in the space (x2, y2) is |x2 - x1| + |y2 - y1|.

// There are also some special roads. You are given a 2D array specialRoads where specialRoads[i] = [x1i, y1i, x2i, y2i, costi] indicates that the ith special road goes in one direction from (x1i, y1i) to (x2i, y2i) with a cost equal to costi. You can use each special road any number of times.

// Return the minimum cost required to go from (startX, startY) to (targetX, targetY).

// Example 1:
// 		Input: start = [1,1], target = [4,5], specialRoads = [[1,2,3,3,2],[3,4,4,5,1]]
// 		Output: 5
// Explanation:
// 		(1,1) to (1,2) with a cost of |1 - 1| + |2 - 1| = 1.
// 		(1,2) to (3,3). Use specialRoads[0] with the cost 2.
// 		(3,3) to (3,4) with a cost of |3 - 3| + |4 - 3| = 1.
// 		(3,4) to (4,5). Use specialRoads[1] with the cost 1.
// 		So the total cost is 1 + 2 + 1 + 1 = 5.

// Example 2:
// 		Input: start = [3,2], target = [5,7], specialRoads = [[5,7,3,2,1],[3,2,3,4,4],[3,3,5,5,5],[3,4,5,6,6]]
// 		Output: 7
// Explanation:
// 		It is optimal not to use any special edges and go directly from the starting to the ending position with a cost |5 - 3| + |7 - 2| = 7.
// 		Note that the specialRoads[0] is directed from (5,7) to (3,2).

// Example 3:
// 		Input: start = [1,1], target = [10,4], specialRoads = [[4,2,1,1,3],[1,2,7,4,4],[10,3,6,1,2],[6,1,1,2,3]]
// 		Output: 8
// Explanation:
// 		(1,1) to (1,2) with a cost of |1 - 1| + |2 - 1| = 1.
// 		(1,2) to (7,4). Use specialRoads[1] with the cost 4.
// 		(7,4) to (10,4) with a cost of |10 - 7| + |4 - 4| = 3.

// Constraints:
//		start.length == target.length == 2
//		1 <= startX <= targetX <= 105
//		1 <= startY <= targetY <= 105
//		1 <= specialRoads.length <= 200
//		specialRoads[i].length == 5
//		startX <= x1i, x2i <= targetX
//		startY <= y1i, y2i <= targetY
//		1 <= costi <= 105

const dist = (x1, y1, x2, y2) => Math.abs(x2 - x1) + Math.abs(y2 - y1);

const minimumCost = ([sx, sy], [tx, ty], specialRoads) => {
  let minCost = dist(sx, sy, tx, ty);

  const dfs = (cur, x, y) => {
    if (cur >= minCost) return;

    const toTarget = dist(x, y, tx, ty);
    minCost = Math.min(cur + toTarget, minCost);

    for (const [x1, y1, x2, y2, d] of specialRoads) {
      const toRoadEnd = dist(x, y, x1, y1) + d;
      dfs(toRoadEnd + cur, x2, y2);
    }
  };
  dfs(0, sx, sy);

  return minCost;
};

console.log(
  minimumCost(
    [1, 1],
    [4, 5],
    [
      [1, 2, 3, 3, 2],
      [3, 4, 4, 5, 1],
    ]
  )
); //  5
console.log(
  minimumCost(
    [3, 2],
    [5, 7],
    [
      [5, 7, 3, 2, 1],
      [3, 2, 3, 4, 4],
      [3, 3, 5, 5, 5],
      [3, 4, 5, 6, 6],
    ]
  )
); //  7
console.log(
  minimumCost(
    [1, 1],
    [10, 4],
    [
      [4, 2, 1, 1, 3],
      [1, 2, 7, 4, 4],
      [10, 3, 6, 1, 2],
      [6, 1, 1, 2, 3],
    ]
  )
); //  8

// exceeds time limit
// passes 1039/1045 testcases

const getDist = (x1, y1, x2, y2) => Math.abs(x2 - x1) + Math.abs(y2 - y1);

var topVotedMinimumCost = function (start, target, specialRoads) {
  let cost = Infinity;
  const map = new Map();

  const dfs = (curDist, x, y) => {
    if (curDist > cost) return;

    // without using any specialRoad
    const toTargetDist = getDist(x, y, target[0], target[1]);
    cost = Math.min(toTargetDist + curDist, cost);

    // recording the distance to get to [x, y]
    if (map.get(`${x}, ${y}`) && map.get(`${x}, ${y}`) <= curDist) return;
    else map.set(`${x}, ${y}`, curDist);

    // using specialRoads
    for (let j = 0; j < specialRoads.length; j++) {
      const [x1, y1, x2, y2, d] = specialRoads[j];
      const toSpecialEndDist = getDist(x, y, x1, y1) + d;
      dfs(toSpecialEndDist + curDist, x2, y2);
    }
  };

  dfs(0, start[0], start[1]);

  return cost;
};

// map saves runtime
// avoid double checking points

const revisedMinimumCost = ([sx, sy], [tx, ty], specialRoads) => {
  let minCost = dist(sx, sy, tx, ty);
  const map = new Map();

  const dfs = (cur, x, y) => {
    if (cur >= minCost) return;

    const toTarget = dist(x, y, tx, ty);
    minCost = Math.min(cur + toTarget, minCost);

    if (map?.get(`${x},${y}`) <= cur) return;
    else map.set(`${x},${y}`, cur);

    for (const [x1, y1, x2, y2, d] of specialRoads) {
      const toRoadEnd = dist(x, y, x1, y1) + d;
      dfs(toRoadEnd + cur, x2, y2);
    }
  };
  dfs(0, sx, sy);

  return minCost;
}; */

// Binary Search Tree Iterator					6/29/2024
/* 
// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.

// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.

// int next() Moves the pointer to the right, then returns the number at the pointer.

// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

// Example 1:
// 		Input
// 		["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// 		[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// 		Output
// 		[null, 3, 7, true, 9, true, 15, true, 20, false]
// 		Explanation
// 		BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// 		bSTIterator.next();    // return 3
// 		bSTIterator.next();    // return 7
// 		bSTIterator.hasNext(); // return True
// 		bSTIterator.next();    // return 9
// 		bSTIterator.hasNext(); // return True
// 		bSTIterator.next();    // return 15
// 		bSTIterator.hasNext(); // return True
// 		bSTIterator.next();    // return 20
// 		bSTIterator.hasNext(); // return False

// Constraints:
//		The number of nodes in the tree is in the range [1, 105].
//		0 <= Node.val <= 106
//		At most 105 calls will be made to hasNext, and next.
//		Follow up:
//		Could you implement next() and hasNext() to run in average O(1) time and use O(h) memory, where h is the height of the tree?

function TopVotedBSTIterator(root) {
  var stack = [];
  return { hasNext, next };

  function hasNext() {
    return root || stack.length;
  }

  function next() {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    var result = root.val;
    root = root.right;
    return result;
  }
}

const root = binaryTree([7, 3, 15, null, null, 9, 20]);
const bSTIterator = new TopVotedBSTIterator(root);
console.log(bSTIterator.next()); // return 3
console.log(bSTIterator.next()); // return 7
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 9
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 15
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 20
console.log(bSTIterator.hasNext()); // return False */

// Largest Number					6/30/2024
/* 
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:
// 		Input: nums = [10,2]
// 		Output: "210"

// Example 2:
// 		Input: nums = [3,30,34,5,9]
// 		Output: "9534330"

// Constraints:
//		1 <= nums.length <= 100
//		0 <= nums[i] <= 10^9

const largestNumber = (nums) => {
  let res = "0";

  const dfs = (cur, rem) => {
    if (rem.length == 0) {
      if (cur > res) res = cur;
      return;
    }
    for (let i = 0; i < rem.length; i++) {
      dfs(cur + rem[i], [...rem.slice(0, i), ...rem.slice(i + 1)]);
    }
  };
  dfs("", nums);

  return `${res}`;
};

console.log(largestNumber([10, 2])); //  "210"
console.log(largestNumber([3, 30, 34, 5, 9])); //  "9534330"

// too slow

function topVotedLargestNumber(num) {
  return (
    num
      .sort(function (a, b) {
        return b + "" + a - (a + "" + b);
      })
      .join("")
      .replace(/^0, "") || "0"
  );
}

// "The sorter is quite simple:
// compare by a concatenated b with b concatenated a, for example if a is 3 and b is 4, then we compare 34 with 43."

const revisedLargestNumber = (nums) =>
  nums
    .sort((a, b) => `${b}${a}` - `${a}${b}`)
    .join("")
    .replace(/^0, "") || "0"; */

// House Robber					7/1/2024
/* 
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// 		Input: nums = [1,2,3,1]
// 		Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// 		Total amount you can rob = 1 + 3 = 4.

// Example 2:
// 		Input: nums = [2,7,9,3,1]
// 		Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// 		Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:
//		1 <= nums.length <= 100
//		0 <= nums[i] <= 400

const rob = (nums) => {
  let n = nums.length;
  let res = 0;

  let map = new Array(n).fill(0);
  const dfs = (money, i, hasRobbedNeighbor) => {
    if (map[i] > money && hasRobbedNeighbor) return; // dead end

    if (i >= n) {
      res = Math.max(money, res); // end of street
      return;
    }
    map[i] = Math.max(map[i], money);

    if (!hasRobbedNeighbor) dfs(money + nums[i], i + 1, true); // rob
    dfs(money, i + 1, false); // skip
  };
  dfs(0, 0, false);

  return res;
};

console.log(rob([1, 2, 3, 1])); //  4
console.log(rob([2, 7, 9, 3, 1])); //  12

// dfs + map

const topVotedRob = (nums) => {
  if (nums.length == 0) return 0;
  let prev1 = 0;
  let prev2 = 0;
  for (let num of nums) {
    let tmp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = tmp;
  }
  return prev1;
};

// Great explanation:
// https://leetcode.com/problems/house-robber/solutions/156523/from-good-to-great-how-to-approach-most-of-dp-problems/

// This particular problem and most of others can be approached using the following sequence:

// Find recursive relation
// Recursive (top-down)
// Recursive + memo (top-down)
// Iterative + memo (bottom-up)
// Iterative + N variables (bottom-up) */

// Bitwise AND of Numbers Range					7/2/2024
/* 
// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

// Example 1:
// 		Input: left = 5, right = 7
// 		Output: 4

// Example 2:
// 		Input: left = 0, right = 0
// 		Output: 0

// Example 3:
// 		Input: left = 1, right = 2147483647
// 		Output: 0

// Constraints:
//		0 <= left <= right <= 231 - 1

const rangeBitwiseAnd = (l, r) => {
  let res = l;
  while (l < r) {
    res &= l;
    l++;
  }
  return res;
};

console.log(rangeBitwiseAnd(5, 7)); //  4
console.log(rangeBitwiseAnd(0, 0)); //  0
console.log(rangeBitwiseAnd(1, 2147483647)); //  0

// naive approach, way too slow
// some bitwise logic I'm missing here

var topVotedRangeBitwiseAnd = function (left, right) {
  let cnt = 0;
  while (left !== right) {
    left >>= 1;
    right >>= 1;
    cnt++;
  }
  return left << cnt;
};

// "we will remove last digit from binary representation of both left and right number until we reach a point where both have same element at the same position.
// And will also keep track of how many times we removed elements by keeping a count of it.

// lets apply it practically:

// first loop:
//  101 >> 1 = 10
//  111 >> 1 = 11
//  cnt = 1

// Second loop:
//  10 >> 1 = 1
//  11 >> 1 = 1
//  cnt = 2

// Third loop:
//  1 == 1

// So now since they are equal we will add those many 0's at the end of the current element we have by using left shift operator.

// 1 << cnt  = 1 << 2  => 100(4)
// Result = 4"

const revisedRangeBitwiseAnd = (l, r) => {
  let count = 0;
  while (l != r) {
    l >>= 1;
    r >>= 1;
    count++;
  }
  return l << count;
};

// so simple once understood */

// Implement Trie (Prefix Tree)					7/3/2024
/* 
// https://leetcode.com/problems/implement-trie-prefix-tree/description/

// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:
//  - Trie() Initializes the trie object.
//  - void insert(String word) Inserts the string word into the trie.
//  - boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
//  - boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

// Example 1:
// 		Input
// 		["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// 		[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// 		Output
// 		[null, null, true, false, true, null, true]
// 		Explanation
// 		Trie trie = new Trie();
// 		trie.insert("apple");
// 		trie.search("apple");   // return True
// 		trie.search("app");     // return False
// 		trie.startsWith("app"); // return True
// 		trie.insert("app");
// 		trie.search("app");     // return True

// Constraints:
//		1 <= word.length, prefix.length <= 2000
//		word and prefix consist only of lowercase English letters.
//		At most 3 * 104 calls in total will be made to insert, search, and startsWith.

class Trie {
  constructor() {
    this.keys = new Set();
  }
  insert(key) {
    this.keys.add(key);
  }
  search(key) {
    return this.keys.has(key);
  }
  startsWith(prefix) {
    for (const str of this.keys) {
      if (str.indexOf(prefix) === 0) return true;
    }
    return false;
  }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True

class TopVotedTrie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}

// Ah, I did not build the 'tree' structure */

// Minimum Size Subarray Sum					7/4/2024
/* 
// https://leetcode.com/problems/minimum-size-subarray-sum/description/

// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:
// 		Input: target = 7, nums = [2,3,1,2,4,3]
// 		Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// 		Input: target = 4, nums = [1,4,4]
// 		Output: 1

// Example 3:
// 		Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// 		Output: 0

// Constraints:
//		1 <= target <= 109
//		1 <= nums.length <= 105
//		1 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

const minSubArrayLen = (t, nums) => {
  // sliding window
  const n = nums.length;
  let minSize = Infinity;
  let sum = nums[0];

  for (let l = 0, r = 0; l <= r && r < n; ) {
    if (sum >= t) {
      minSize = Math.min(minSize, r - l + 1);
      sum -= nums[l++];
    } else {
      sum += nums[++r];
    }
  }

  return minSize < Infinity ? minSize : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); //  2
console.log(minSubArrayLen(4, [1, 4, 4])); //  1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); //  0

const topVotedMinSubArrayLen = (target, nums) => {
  // initialize the start and end of the window from starting point
  let start = 0;
  let end = 0;
  // consider the minValue to be infinity,
  // just to define the variable
  let minValue = Infinity;
  // sum of subarray initialized to initial array value
  let subarraySum = nums[0];

  // slide the window upto array length
  // start of the window always be less than or may be equal to end
  while (start <= end && end < nums.length) {
    // if sum satisfies the condition
    if (subarraySum >= target) {
      // extract the minimum subarray length
      // end-start+1 => end >= start (always greater or equal)
      // when end === start, then end - start === 0
      // but window stays atleast on one element (+1) of array
      minValue = Math.min(minValue, end - start + 1);
      // move the start of window by one element
      // and remove last start element from sub array sum
      subarraySum -= nums[start];
      start++;
    } else {
      // if sum didn't satisfies the condition, drag the window end
      // till the sum >= target
      end++;
      subarraySum += nums[end];
    }
  }
  // return 0, as no subarray satisfies the given condition
  return minValue === Infinity ? 0 : minValue;
};

// same same */

// Course Schedule II					7/5/2024
/* 
// https://leetcode.com/problems/course-schedule-ii/description/

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:
// 		Input: numCourses = 2, prerequisites = [[1,0]]
// 		Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

// Example 2:
// 		Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// 		Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// 		So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// Example 3:
// 		Input: numCourses = 1, prerequisites = []
// 		Output: [0]

// Constraints:
//		1 <= numCourses <= 2000
//		0 <= prerequisites.length <= numCourses * (numCourses - 1)
//		prerequisites[i].length == 2
//		0 <= ai, bi < numCourses
//		ai != bi
//		All the pairs [ai, bi] are distinct.

const findOrder = (num, prereqs) => {
  let reqs = new Array(num).fill(null).map((_) => []);
  for (const [course, req] of prereqs) {
    reqs[course].push(req);
  }

  let completedCourses = new Array(num).fill(null);
  let courseCount = 0;
  while (courseCount < num) {
    let isStuck = true;
    for (let i = 0; i < num; i++) {
      if (reqs[i].length == 0) {
        completedCourses[courseCount++] = i;
        reqs[i].push("Completed Course"); // avoid re-completing
        isStuck = false;
        break;
      }
    }
    if (isStuck) return []; // cannot complete

    for (let i = 0; i < num; i++) {
      reqs[i] = reqs[i].filter((x) => x != completedCourses[courseCount - 1]); // remove completed course
    }
  }
  return completedCourses;
};

console.log(findOrder(2, [[1, 0]])); //  [0,1]
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
); //  [0,2,1,3]
console.log(findOrder(1, [])); //  [0]

// passes, but filter on every iteration kills runtime

const topVotedFindOrder = (numCourses, prerequisites) => {
  const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    inDegrees[v]++;
  }

  const q = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const degree = inDegrees[i];
    if (degree === 0) q.push(i);
  }

  const res = [];
  while (q.length) {
    const u0 = q.shift();
    numCourses--;
    res.push(u0);
    for (const [v, u] of prerequisites) {
      if (u === u0) {
        inDegrees[v]--;
        if (inDegrees[v] === 0) q.push(v);
      }
    }
  }
  return numCourses === 0 ? res : [];
}; */

// Account Balance After Rounded Purchase					7/6/2024
/* 
// https://leetcode.com/problems/account-balance-after-rounded-purchase/description/

// Initially, you have a bank account balance of 100 dollars.

// You are given an integer purchaseAmount representing the amount you will spend on a purchase in dollars, in other words, its price.

// When making the purchase, first the purchaseAmount is rounded to the nearest multiple of 10. Let us call this value roundedAmount. Then, roundedAmount dollars are removed from your bank account.

// Return an integer denoting your final bank account balance after this purchase.

// Notes:
// - 0 is considered to be a multiple of 10 in this problem.
// - When rounding, 5 is rounded upward (5 is rounded to 10, 15 is rounded to 20, 25 to 30, and so on).

// Example 1:
// 		Input: purchaseAmount = 9
// 		Output: 90
// Explanation:
// 		The nearest multiple of 10 to 9 is 10. So your account balance becomes 100 - 10 = 90.

// Example 2:
// 		Input: purchaseAmount = 15
// 		Output: 80
// Explanation:
// 		The nearest multiple of 10 to 15 is 20. So your account balance becomes 100 - 20 = 80.

// Example 3:
// 		Input: purchaseAmount = 10
// 		Output: 90
// Explanation:
// 		10 is a multiple of 10 itself. So your account balance becomes 100 - 10 = 90.

// Constraints:
//		0 <= purchaseAmount <= 100

const accountBalanceAfterPurchase = (amt) => 100 - Math.round(amt / 10) * 10;

console.log(accountBalanceAfterPurchase(9)); //  90
console.log(accountBalanceAfterPurchase(15)); //  80
console.log(accountBalanceAfterPurchase(10)); //  90

// done in the context of LeetCode Content Improvement Feedback
// seems like I also did this one on Aug 10th 2023 */

// Check if it is Possible to Split Array					7/7/2024
/* 
// https://leetcode.com/problems/check-if-it-is-possible-to-split-array/description/

// You are given an array nums of length n and an integer m. You need to determine if it is possible to split the array into n arrays of size 1 by performing a series of steps.

// An array is called good if:
// - The length of the array is one, or
// - The sum of the elements of the array is greater than or equal to m.

// In each step, you can select an existing array (which may be the result of previous steps) with a length of at least two and split it into two arrays, if both resulting arrays are good.

// Return true if you can split the given array into n arrays, otherwise return false.

// Example 1:
// 		Input: nums = [2, 2, 1], m = 4
// 		Output: true
// Explanation:
// 		Split [2, 2, 1] to [2, 2] and [1]. The array [1] has a length of one, and the array [2, 2] has the sum of its elements equal to 4 >= m, so both are good arrays.
// 		Split [2, 2] to [2] and [2]. both arrays have the length of one, so both are good arrays.

// Example 2:
// 		Input: nums = [2, 1, 3], m = 5
// 		Output: false
// Explanation:
// 		The first move has to be either of the following:
// 		Split [2, 1, 3] to [2, 1] and [3]. The array [2, 1] has neither length of one nor sum of elements greater than or equal to m.
// 		Split [2, 1, 3] to [2] and [1, 3]. The array [1, 3] has neither length of one nor sum of elements greater than or equal to m.
// 		So as both moves are invalid (they do not divide the array into two good arrays), we are unable to split nums into n arrays of size 1.

// Example 3:
// 		Input: nums = [2, 3, 3, 2, 3], m = 6
// 		Output: true
// Explanation:
// 		Split [2, 3, 3, 2, 3] to [2] and [3, 3, 2, 3].
// 		Split [3, 3, 2, 3] to [3, 3, 2] and [3].
// 		Split [3, 3, 2] to [3, 3] and [2].
// 		Split [3, 3] to [3] and [3].

// Constraints:
//		1 <= n == nums.length <= 100
//		1 <= nums[i] <= 100
//		1 <= m <= 200

const canSplitArray = (nums, m) => {
  if (nums.length <= 2) return true; // first split is free

  const dfs = (arr, sum) => {
    if (arr.length == 1) return true; // end
    if (sum < m) return false; // invalid

    let leftSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (dfs(arr.slice(0, i), leftSum) && dfs(arr.slice(i), sum - leftSum)) {
        return true; // valid split found
      }
      leftSum += arr[i];
    }
    return false; // no valid split found
  };

  return dfs(
    nums,
    nums.reduce((a, c) => a + c, 0)
  );
};

console.log(canSplitArray([2, 2, 1], 4)); //  true
console.log(canSplitArray([2, 1, 3], 5)); //  false
console.log(canSplitArray([2, 3, 3, 2, 3], 6)); //  true
console.log(canSplitArray([1, 1], 3)); //  true

// works but exceeds runtime

var topVotedCanSplitArray = function (nums, m) {
  if (nums.length <= 2) return true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + nums[i + 1] >= m) {
      return true;
    }
  }
  return false;
};

// so much better */

// Find the Child Who Has the Ball After K Seconds					7/8/2024
/* 
// https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/description/

// You are given two positive integers n and k. There are n children numbered from 0 to n - 1 standing in a queue in order from left to right.

// Initially, child 0 holds a ball and the direction of passing the ball is towards the right direction. After each second, the child holding the ball passes it to the child next to them. Once the ball reaches either end of the line, i.e. child 0 or child n - 1, the direction of passing is reversed.

// Return the number of the child who receives the ball after k seconds.

// Example 1:
// 		Input: n = 3, k = 5
// 		Output: 1

// Example 2:
// 		Input: n = 5, k = 6
// 		Output: 2

// Example 3:
// 		Input: n = 4, k = 2
// 		Output: 2

// Constraints:
//		2 <= n <= 50
//		1 <= k <= 50

const numberOfChild = (n, k) => {
  let i = 0,
    rev = false;
  while (k-- > 0) {
    if (i == 0) rev = false;
    if (i == n - 1) rev = true;
    rev ? i-- : i++;
  }
  return i;
};

console.log(numberOfChild(3, 5)); //  1
console.log(numberOfChild(5, 6)); //  2
console.log(numberOfChild(4, 2)); //  2

// no time today
// climbing in the gunks! */

// Divide Array Into Arrays With Max Difference					7/9/2024
/* 
// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/

// You are given an integer array nums of size n where n is a multiple of 3 and a positive integer k.

// Divide the array nums into n / 3 arrays of size 3 satisfying the following condition:
// - The difference between any two elements in one array is less than or equal to k.

// Return a 2D array containing the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return any of them.

// Example 1:
// 		Input: nums = [1,3,4,8,7,9,3,5,1], k = 2
// 		Output: [[1,1,3],[3,4,5],[7,8,9]]
// Explanation:
// 		The difference between any two elements in each array is less than or equal to 2.

// Example 2:
// 		Input: nums = [2,4,2,2,5,2], k = 2
// 		Output: []
// Explanation:
// 		Different ways to divide nums into 2 arrays of size 3 are:
// 		[[2,2,2],[2,4,5]] (and its permutations)
// 		[[2,2,4],[2,2,5]] (and its permutations)
// 		Because there are four 2s there will be an array with the elements 2 and 5 no matter how we divide it. since 5 - 2 = 3 > k, the condition is not satisfied and so there is no valid division.

// Example 3:
// 		Input: nums = [4,2,9,8,2,12,7,12,10,5,8,5,5,7,9,2,5,11], k = 14
// 		Output: [[2,2,12],[4,8,5],[5,9,7],[7,8,5],[5,9,10],[11,12,2]]
// Explanation:
// 		The difference between any two elements in each array is less than or equal to 14.

// Constraints:
//		n == nums.length
//		1 <= n <= 105
//		n is a multiple of 3
//		1 <= nums[i] <= 105
//		1 <= k <= 105

const divideArray = (nums, k) => {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let res = new Array(n / 3).fill(null).map((_) => []);
  let i = 0;

  for (let j = 0; j < n; j += 3) {
    if (nums[j + 2] - nums[j] > k) return []; // breaks condition
    res[i++] = [nums[j], nums[j + 1], nums[j + 2]];
  }

  return res;
};

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2)); //  [[1,1,3],[3,4,5],[7,8,9]]
console.log(divideArray([2, 4, 2, 2, 5, 2], 2)); //  []
console.log(
  divideArray([4, 2, 9, 8, 2, 12, 7, 12, 10, 5, 8, 5, 5, 7, 9, 2, 5, 11], 14)
); //  [[2,2,12],[4,8,5],[5,9,7],[7,8,5],[5,9,10],[11,12,2]]

const topVotedDivideArray = (nums, k) => {
  const size = nums.length;
  if (size % 3 !== 0) return [];

  nums.sort((a, b) => a - b);

  const result = [];
  let groupIndex = 0;
  for (let i = 0; i < size; i += 3) {
    if (i + 2 < size && nums[i + 2] - nums[i] <= k) {
      result.push([nums[i], nums[i + 1], nums[i + 2]]);
      groupIndex++;
    } else {
      return [];
    }
  }
  return result;
};

// same same */

// Find the Number of Ways to Place People I					7/10/2024
/* 
// https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/description/

// You are given a 2D array points of size n x 2 representing integer coordinates of some points on a 2D plane, where points[i] = [xi, yi].

// Count the number of pairs of points (A, B), where

// A is on the upper left side of B, and

// there are no other points in the rectangle (or line) they make (including the border).

// Return the count.

// Example 1:
// 		Input: points = [[1,1],[2,2],[3,3]]
// 		Output: 0
// Explanation:
// 		There is no way to choose A and B so A is on the upper left side of B.

// Example 2:
// 		Input: points = [[6,2],[4,4],[2,6]]
// 		Output: 2
// Explanation:
// 		The left one is the pair (points[1], points[0]), where points[1] is on the upper left side of points[0] and the rectangle is empty.
// 		The middle one is the pair (points[2], points[1]), same as the left one it is a valid pair.
// 		The right one is the pair (points[2], points[0]), where points[2] is on the upper left side of points[0], but points[1] is inside the rectangle so it's not a valid pair.

// Example 3:
// 		Input: points = [[3,1],[1,3],[1,1]]
// 		Output: 2
// Explanation:
// 		The left one is the pair (points[2], points[0]), where points[2] is on the upper left side of points[0] and there are no other points on the line they form. Note that it is a valid state when the two points form a line.
// 		The middle one is the pair (points[1], points[2]), it is a valid pair same as the left one.
// 		The right one is the pair (points[1], points[0]), it is not a valid pair as points[2] is on the border of the rectangle.

// Constraints:
//		2 <= n <= 50
//		points[i].length == 2
//		0 <= points[i][0], points[i][1] <= 50
//		All points[i] are distinct.

const noPointsInside = (points, x1, y1, x2, y2) => {
  for (const [x, y] of points) {
    if ((x == x1 && y == y1) || (x == x2 && y == y2)) continue;
    if (x >= x1 && x <= x2 && y >= y2 && y <= y1) return false;
  }
  return true;
};

const numberOfPairs = (points) => {
  const n = points.length;
  let res = 0;
  let memo = new Map();

  for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];

    for (let j = 0; j < n; j++) {
      if (i == j) continue;

      const [x2, y2] = points[j];
      res += x1 <= x2 && y1 >= y2 && noPointsInside(points, x1, y1, x2, y2);
    }
  }

  return res;
};

console.log(
  numberOfPairs([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
); //  0
console.log(
  numberOfPairs([
    [6, 2],
    [4, 4],
    [2, 6],
  ])
); //  2
console.log(
  numberOfPairs([
    [3, 1],
    [1, 3],
    [1, 1],
  ])
); //  2

// not pretty, but it passes
// memoizing noPointsInside would help runtime

var topVotedNumberOfPairs = function (ps) {
  ps.sort(([x1, y1], [x2, y2]) => x1 - x2 || y2 - y1);
  let count = 0;

  for (let i = 0; i < ps.length; i++) {
    const [ax, ay] = ps[i];
    let highestYBetweenAandB = -Infinity;

    for (let j = i + 1; j < ps.length; j++) {
      const [bx, by] = ps[j];

      if (ay >= by) {
        if (highestYBetweenAandB < by) {
          count += 1;
          highestYBetweenAandB = by;
        }
      }
    }
  }
  return count;
};

// smart to sort */

// Count Pairs That Form a Complete Day I					7/11/2024
/* 
// https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/

// Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.

// A complete day is defined as a time duration that is an exact multiple of 24 hours.

// For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.

// Example 1:
// 		Input: hours = [12,12,30,24,24]
// 		Output: 2
// Explanation:
// 		The pairs of indices that form a complete day are (0, 1) and (3, 4).

// Example 2:
// 		Input: hours = [72,48,24,3]
// 		Output: 3
// Explanation:
// 		The pairs of indices that form a complete day are (0, 1), (0, 2), and (1, 2).

// Constraints:
//		1 <= hours.length <= 100
//		1 <= hours[i] <= 109

const countCompleteDayPairs = (hours) => {
  const n = hours.length;
  let res = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      res += (hours[i] + hours[j]) % 24 == 0;
    }
  }
  return res;
};

console.log(countCompleteDayPairs([12, 12, 30, 24, 24])); //  2
console.log(countCompleteDayPairs([72, 48, 24, 3])); //  3

// brute force

var topVotedCountCompleteDayPairs = function (hours) {
  let remainderCount = {};
  let count = 0;
  for (let hour of hours) {
    let remainder = hour % 24;
    if (remainder === 0) {
      count += remainderCount[0] || 0;
    } else {
      count += remainderCount[24 - remainder] || 0;
    }
    remainderCount[remainder] = (remainderCount[remainder] || 0) + 1;
  }
  return count;
}; */

// Find Minimum Operations to Make All Elements Divisible by Three					7/12/2024
/* 
// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/

// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

// Return the minimum number of operations to make all elements of nums divisible by 3.

// Example 1:
// 		Input: nums = [1,2,3,4]
// 		Output: 3
// Explanation:
// 		All array elements can be made divisible by 3 using 3 operations:
// 		Subtract 1 from 1.
// 		Add 1 to 2.
// 		Subtract 1 from 4.

// Example 2:
// 		Input: nums = [3,6,9]
// 		Output: 0

// Constraints:
//		1 <= nums.length <= 50
//		1 <= nums[i] <= 50

const minimumOperations = (nums) => {
  let ops = 0;
  for (const n of nums) {
    if (n % 3 != 0) ops++;
  }
  return ops;
};

console.log(minimumOperations([1, 2, 3, 4])); //  3
console.log(minimumOperations([3, 6, 9])); //  0

const oneLineMinimumOperations = (nums) =>
  nums.reduce((ops, n) => ops + (n % 3 != 0), 0); */

// Maximum Points Inside the Square					7/13/2024
/* 
// You are given a 2D array points and a string s where, points[i] represents the coordinates of point i, and s[i] represents the tag of point i.

// A valid square is a square centered at the origin (0, 0), has edges parallel to the axes, and does not contain two points with the same tag.

// Return the maximum number of points contained in a valid square.

// Note:

// A point is considered to be inside the square if it lies on or within the square's boundaries.

// The side length of the square can be zero.

// Example 1:
// 		Input: points = [[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]], s = "abdca"
// 		Output: 2
// Explanation:
// 		The square of side length 4 covers two points points[0] and points[1].

// Example 2:
// 		Input: points = [[1,1],[-2,-2],[-2,2]], s = "abb"
// 		Output: 1
// Explanation:
// 		The square of side length 2 covers one point, which is points[0].

// Example 3:
// 		Input: points = [[1,1],[-1,-1],[2,-2]], s = "ccd"
// 		Output: 0
// Explanation:
// 		It's impossible to make any valid squares centered at the origin such that it covers only one point among points[0] and points[1].

// Constraints:
//		1 <= s.length, points.length <= 105
//		points[i].length == 2
//		-109 <= points[i][0], points[i][1] <= 109
//		s.length == points.length
//		points consists of distinct coordinates.
//		s consists only of lowercase English letters.

var topVotedMaxPointsInsideSquare = function (points, s) {
  points = points.map(([x, y]) => Math.max(Math.abs(x), Math.abs(y)));
  const distances = {};
  [...s].forEach((char, i) =>
    distances[char]
      ? distances[char].push(points[i])
      : (distances[char] = [points[i]])
  );
  const maxDistToDouble =
    Math.min(
      ...Object.values(distances)
        .filter(({ length }) => length > 1)
        .map((arr) => arr.sort((x, y) => x - y)[1])
    ) - 1;
  return points.filter((dist) => dist <= maxDistToDouble).length;
};

console.log(
  topVotedMaxPointsInsideSquare(
    [
      [2, 2],
      [-1, -2],
      [-4, 4],
      [-3, 1],
      [3, -3],
    ],
    "abdca"
  )
); //  2
console.log(
  topVotedMaxPointsInsideSquare(
    [
      [1, 1],
      [-2, -2],
      [-2, 2],
    ],
    "abb"
  )
); //  1
console.log(
  topVotedMaxPointsInsideSquare(
    [
      [1, 1],
      [-1, -1],
      [2, -2],
    ],
    "ccd"
  )
); //  0 */

// Minimum Additions to Make Valid String					7/14/2024
/* 
// https://leetcode.com/problems/minimum-additions-to-make-valid-string/description/

// Given a string word to which you can insert letters "a", "b" or "c" anywhere and any number of times, return the minimum number of letters that must be inserted so that word becomes valid.

// A string is called valid if it can be formed by concatenating the string "abc" several times.

// Example 1:
// 		Input: word = "b"
// 		Output: 2
// Explanation: Insert the letter "a" right before "b", and the letter "c" right next to "b" to obtain the valid string "abc".

// Example 2:
// 		Input: word = "aaa"
// 		Output: 6
// Explanation: Insert letters "b" and "c" next to each "a" to obtain the valid string "abcabcabc".

// Example 3:
// 		Input: word = "abc"
// 		Output: 0
// Explanation: word is already valid. No modifications are needed.

// Constraints:
//		1 <= word.length <= 50
//		word consists of letters "a", "b" and "c" only.

const addMinimum = (word) => {
  const n = word.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (word[i] == "a")
      if (word[i + 1] == "b" && word[i + 2] == "c") i += 2; // 'abc'
      else if (word[i + 1] == "b" || word[i + 1] == "c") {
        count++; // 'ab' or 'ac'
        i++;
      } else count += 2;
    // 'a'
    else if (word[i] === "b") {
      count++; // '_b'
      if (word[i + 1] === "c") i++; // 'bc'
      else count++; // 'b'
    } else count += 2; // 'c'
  }
  return count;
};

console.log(addMinimum("b")); //  2
console.log(addMinimum("aaa")); //  6
console.log(addMinimum("abc")); //  0

var topVotedAddMinimum = function (word) {
  let result = 0;

  for (let i = 0; i < word.length; ++i) {
    if (word[i] === "a") {
      if (word[i + 1] === "b" && word[i + 2] === "c") i += 2; // we have abc
      else if (word[i + 1] === "b" || word[i + 1] === "c") {
        // ab or ac only
        ++i;
        ++result;
      } else {
        // just a
        result += 2;
      }
    } else if (word[i] === "b") {
      // we start from b
      ++result;
      if (word[i + 1] === "c") {
        // it is bc
        ++i;
      } else ++result; // just b
    } else {
      result += 2; // only c
    }
  }

  return result;
}; */

// Minimum Average of Smallest and Largest Elements					7/15/2024
/* 
// https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5356780/solution-by-dare2solve-detailed-solution/

// You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.

// You repeat the following procedure n / 2 times:
// - Remove the smallest element, minElement, and the largest element maxElement, from nums.
// - Add (minElement + maxElement) / 2 to averages.

// Return the minimum element in averages.

// Example 1:
// 		Input: nums = [7,8,3,4,15,13,4,1]
// 		Output: 5.5
// Explanation:
// 		step	nums	averages
// 		0	[7,8,3,4,15,13,4,1]	[]
// 		1	[7,8,3,4,13,4]	[8]
// 		2	[7,8,4,4]	[8,8]
// 		3	[7,4]	[8,8,6]
// 		4	[]	[8,8,6,5.5]
// 		The smallest element of averages, 5.5, is returned.

// Example 2:
// 		Input: nums = [1,9,8,3,10,5]
// 		Output: 5.5
// Explanation:
// 		step	nums	averages
// 		0	[1,9,8,3,10,5]	[]
// 		1	[9,8,3,5]	[5.5]
// 		2	[8,5]	[5.5,6]
// 		3	[]	[5.5,6,6.5]

// Example 3:
// 		Input: nums = [1,2,3,7,8,9]
// 		Output: 5.0
// Explanation:
// 		step	nums	averages
// 		0	[1,2,3,7,8,9]	[]
// 		1	[2,3,7,8]	[5]
// 		2	[3,7]	[5,5]
// 		3	[]	[5,5,5]

// Constraints:
//		2 <= n == nums.length <= 50
//		n is even.
//		1 <= nums[i] <= 50

const minimumAverage = (nums) => {
  let n = nums.length;
  let m = n / 2;
  let i = 0;
  nums.sort((a, b) => a - b);

  let min = Infinity;
  while (m-- > 0) min = Math.min((nums[i] + nums[n - i++ - 1]) / 2, min);
  return min;
};

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1])); //  5.5
console.log(minimumAverage([1, 9, 8, 3, 10, 5])); //  5.5
console.log(minimumAverage([1, 2, 3, 7, 8, 9])); //  5.0

var topVotedMinimumAverage = function (nums) {
  var res = 100;
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length >> 1; ++i) {
    res = Math.min(res, nums[i] + nums[nums.length - i - 1]);
  }
  return res / 2;
}; */

// Search a 2D Matrix II					7/16/2024
/* 
// https://leetcode.com/problems/search-a-2d-matrix-ii/description/

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// - Integers in each row are sorted in ascending from left to right.
// - Integers in each column are sorted in ascending from top to bottom.

// Example 1:
// 		Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// 		Output: true

// Example 2:
// 		Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// 		Output: false

// Constraints:
//		m == matrix.length
//		n == matrix[i].length
//		1 <= n, m <= 300
//		-109 <= matrix[i][j] <= 109
//		All the integers in each row are sorted in ascending order.
//		All the integers in each column are sorted in ascending order.
//		-109 <= target <= 109

const searchMatrix = (mat, t) => {
  let n = mat.length,
    m = mat[0].length;

  for (const arr of mat) {
    if (arr[0] > t || arr[m - 1] < t) continue; // not in row

    // possibly in row: binary search
    let l = 0,
      r = m - 1;
    while (l <= r) {
      const m = ~~(l + (r - l) / 2);
      if (t < arr[m]) r = m - 1;
      else if (t > arr[m]) l = m + 1;
      else if (t == arr[m]) return true; // target found
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
); //  true
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
); //  false

var topVotedSearchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  //start with top-right element
  var i = 0;
  var j = matrix[0].length - 1;

  //loop till row and column number are within bounds
  while (i <= matrix.length - 1 && j >= 0) {
    if (matrix[i][j] > target) {
      //current element is greater than target
      //means this row might have the target element
      //change column
      j--;
    } else if (matrix[i][j] === target) {
      //element found
      return true;
    } else if (matrix[i][j] < target) {
      //current element is lesser than target
      //means this column might have the target element
      //change rows
      i++;
    }
  }
  return false;
}; */

// Available Captures for Rook					7/17/2024
/* 
// https://leetcode.com/problems/available-captures-for-rook/description/

// You are given an 8 x 8 matrix representing a chessboard. There is exactly one white rook represented by 'R', some number of white bishops 'B', and some number of black pawns 'p'. Empty squares are represented by '.'.

// A rook can move any number of squares horizontally or vertically (up, down, left, right) until it reaches another piece or the edge of the board. A rook is attacking a pawn if it can move to the pawn's square in one move.

// Note: A rook cannot move through other pieces, such as bishops or pawns. This means a rook cannot attack a pawn if there is another piece blocking the path.

// Return the number of pawns the white rook is attacking.

// Example 1:
// 		Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// 		Output: 3
// Explanation:
// 		In this example, the rook is attacking all the pawns.

// Example 2:
// 		Input: board = [[".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// 		Output: 0
// Explanation:
// 		The bishops are blocking the rook from attacking any of the pawns.

// Example 3:
// 		Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
// 		Output: 3
// Explanation:
// 		The rook is attacking the pawns at positions b5, d6, and f5.

// Constraints:
//		board.length == 8
//		board[i].length == 8
//		board[i][j] is either 'R', '.', 'B', or 'p'
//		There is exactly one cell with board[i][j] == 'R'

const numRookCaptures = (board) => {
  let pos;
  for (let row = 0; row < 8 && !pos; row++)
    for (let col = 0; col < 8 && !pos; col++)
      if (board[row][col] === "R") pos = [row, col]; // pos of rook

  let res = 0;
  // check left
  let i = pos[1];
  while (--i >= 0) {
    if (board[pos[0]][i] == "B") break;
    else if (board[pos[0]][i] == "p") {
      res++;
      break;
    }
  }
  // check right
  i = pos[1];
  while (++i < 8) {
    if (board[pos[0]][i] == "B") break;
    else if (board[pos[0]][i] == "p") {
      res++;
      break;
    }
  }
  // check up
  i = pos[0];
  while (--i >= 0) {
    if (board[i][pos[1]] == "B") break;
    else if (board[i][pos[1]] == "p") {
      res++;
      break;
    }
  }
  // check down
  i = pos[0];
  while (++i < 8) {
    if (board[i][pos[1]] == "B") break;
    else if (board[i][pos[1]] == "p") {
      res++;
      break;
    }
  }

  return res;
};

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
); //  3
console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "B", "R", "B", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
); //  0
console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    ["p", "p", ".", "R", ".", "p", "B", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
); //  3

// bulky but fast
// same as top voted */

// Decode Ways					7/18/2024
/* 
// https://leetcode.com/problems/decode-ways/description/

// You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

// "1" -> 'A'
// "2" -> 'B'
// ...
// "25" -> 'Y'
// "26" -> 'Z'

// However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

// For example, "11106" can be decoded into:

// - "AAJF" with the grouping (1, 1, 10, 6)
// - "KJF" with the grouping (11, 10, 6)
// - The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).

// Note: there may be strings that are impossible to decode.

// Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.

// The test cases are generated so that the answer fits in a 32-bit integer.

// Example 1:
// 		Input: s = "12"
// 		Output: 2
// Explanation:
// 		"12" could be decoded as "AB" (1 2) or "L" (12).

// Example 2:
// 		Input: s = "226"
// 		Output: 3
// Explanation:
// 		"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Example 3:
// 		Input: s = "06"
// 		Output: 0
// Explanation:
// 		"06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

// Constraints:
//		1 <= s.length <= 100
//		s contains only digits and may contain leading zero(s).

const numDecodings = (s) => {
  if (s[0] == "0" || /00/.test(s)) return 0; // leading zero(s)
  const n = s.length;

  let count = 0;
  const dfs = (i) => {
    if (i >= n) {
      count++;
      return;
    }

    if (s[i + 1] != "0") dfs(i + 1); // avoid creating leading zeros
    if (s[i + 2] != "0" && i + 1 < n && s[i] + s[i + 1] <= 26) dfs(i + 2);
  };
  dfs(0);

  return count;
};

console.log(numDecodings("12")); //  2
console.log(numDecodings("226")); //  3
console.log(numDecodings("06")); //  0
console.log(numDecodings("111111111111111111111111111111111111111111111")); //  0

// breaks on last test case

var topVotedNumDecodings = function (s) {
  if (!s || s[0] === "0") {
    return 0;
  }

  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; ++i) {
    const oneDigit = parseInt(s[i - 1]);
    const twoDigits = parseInt(s.substring(i - 2, i));

    if (oneDigit !== 0) {
      dp[i] += dp[i - 1];
    }

    if (10 <= twoDigits && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}; */

// Product of Array Except Self					7/19/2024
/* 
// https://leetcode.com/problems/product-of-array-except-self/description/

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// 		Input: nums = [1,2,3,4]
// 		Output: [24,12,8,6]

// Example 2:
// 		Input: nums = [-1,1,0,-3,3]
// 		Output: [0,0,9,0,0]

// Constraints:
//		2 <= nums.length <= 105
//		-30 <= nums[i] <= 30
//		The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

const productExceptSelf = (nums) => {
  const sum = nums.reduce((a, c) => a * c, 1);
  if (
    sum == 0 &&
    nums.findIndex((x) => x == 0) != nums.findLastIndex((x) => x == 0)
  )
    return new Array(nums.length).fill(0); // 2 instances of 0

  let res = nums.map((c) => {
    if (sum != 0 && c != 0) return sum / c;
    else if (sum == 0 && c == 0)
      return nums.reduce((a, c) => a * (c != 0 ? c : 1), 1);
    else return 0;
  });

  return res;
};

console.log(productExceptSelf([1, 2, 3, 4])); //  [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); //  [0,0,9,0,0]
console.log(productExceptSelf([-1, 1, 0, -3, 0])); //  [0,0,9,0,0]

var topVotedProductExceptSelf = function (nums) {
  const n = nums.length;

  const prefix = new Array(n).fill(1);
  const suffix = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  const answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = prefix[i] * suffix[i];
  }

  return answer;
}; */

// Perfect Squares					7/20/2024
/* 
// https://leetcode.com/problems/perfect-squares/description/

// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

// Example 1:
// 		Input: n = 12
// 		Output: 3
// Explanation: 12 = 4 + 4 + 4.

// Example 2:
// 		Input: n = 13
// 		Output: 2
// Explanation: 13 = 4 + 9.

// Constraints:
//		1 <= n <= 10^4

const numSquares = (n) => {
  let min = Number.MAX_SAFE_INTEGER;
  let memo = new Map();

  const dfs = (num, count) => {
    if (memo.has(num) && memo.get(num) < count) return; // avoid lesser repeats
    else memo.set(num, count);

    if (num == 0) {
      min = Math.min(count, min); // base case
      return;
    }

    let i = ~~Math.sqrt(num); // largest perfect square
    while (i > 0) {
      dfs(num - i ** 2, count + 1);
      i--;
    }
  };
  dfs(n, 0);

  return min;
};

console.log(numSquares(12)); //  3
console.log(numSquares(13)); //  2
console.log(numSquares(16)); //  1

// too slow, even with memo

function topVotedNumSquares(n) {
  let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  let count = 1;
  while (count * count <= n) {
    let sq = count * count;
    for (let i = sq; i <= n; i++) {
      dp[i] = Math.min(dp[i - sq] + 1, dp[i]);
    }
    count++;
  }
  return dp[n];
} */

// Longest Increasing Subsequence					7/21/2024
/* 
// https://leetcode.com/problems/longest-increasing-subsequence/

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:
// 		Input: nums = [10,9,2,5,3,7,101,18]
// 		Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Example 2:
// 		Input: nums = [0,1,0,3,2,3]
// 		Output: 4

// Example 3:
// 		Input: nums = [7,7,7,7,7,7,7]
// 		Output: 1

// Constraints:
//		1 <= nums.length <= 2500
//		-104 <= nums[i] <= 104

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

const lengthOfLIS = (nums) => {
  const n = nums.length;

  let max = 0;
  let memo = new Map();
  const dfs = (i, count) => {
    if (memo.has(i) && memo.get(i) > count) return; // memo
    else memo.set(i, count);

    if (i == n) {
      max = Math.max(max, count); // end reached
      return;
    }

    let cur = nums[i];
    while (nums[i] <= cur) i++; // next increasing

    dfs(i, count + (i != n)); // avoid counting end reached
  };

  for (let i = 0; i < n; i++) dfs(i, 1);

  return max;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); //  4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); //  4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); //  1

// not quite

var topVotedLengthOfLIS = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const n = nums.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

// much better */

// Game of Life					7/22/2024
/* 
// https://leetcode.com/problems/game-of-life/

// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

// Example 1:
// 		Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// 		Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Example 2:
// 		Input: board = [[1,1],[1,0]]
// 		Output: [[1,1],[1,1]]

// Constraints:
//		m == board.length
//		n == board[i].length
//		1 <= m, n <= 25
//		board[i][j] is 0 or 1.

// Follow up:
//		Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
//		In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

const gameOfLife = (board) => {
  const m = board.length;
  const n = board[0].length;

  let res = new Array(m).fill(0).map((x) => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let liveNeighbors = 0;
      if (i > 0) {
        liveNeighbors +=
          (board[i - 1][j - 1] || 0) +
          board[i - 1][j] +
          (board[i - 1][j + 1] || 0);
      }
      liveNeighbors += (board[i][j - 1] || 0) + (board[i][j + 1] || 0);
      if (i < m - 1) {
        liveNeighbors +=
          (board[i + 1][j - 1] || 0) +
          board[i + 1][j] +
          (board[i + 1][j + 1] || 0);
      }

      // Live cell:
      // - fewer than two live neighbors dies as if caused by under-population.
      // - more than three live neighbors dies, as if by over-population.
      if (board[i][j] && (liveNeighbors < 2 || liveNeighbors > 3))
        res[i][j] = 0;
      // Dead cell
      // - exactly three live neighbors becomes a live cell, as if by reproduction.
      else if (board[i][j] == 0 && liveNeighbors == 3) res[i][j] = 1;
      // Else same
      else res[i][j] = board[i][j];
    }
  }
  return res;
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
); //  [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
console.log(
  gameOfLife([
    [1, 1],
    [1, 0],
  ])
); //  [[1,1],[1,1]]

var topVotedGameOfLife = function (board) {
  if (board.length === 0) {
    return board;
  }

  var checkNeighbors = function (row, col) {
    var score = -board[row][col];
    var r, c;
    for (r = row - 1; r <= row + 1; r++) {
      for (c = col - 1; c <= col + 1; c++) {
        if (
          typeof board[r] !== "undefined" &&
          typeof board[r][c] !== "undefined"
        ) {
          score += Math.abs(Math.floor(board[r][c]));
        }
      }
    }
    return score;
  };

  var r, c;
  for (r = 0; r < board.length; r++) {
    for (c = 0; c < board[0].length; c++) {
      var score = checkNeighbors(r, c);
      if (board[r][c] === 1) {
        if (score < 2 || score > 3) {
          board[r][c] = -0.5;
        }
      } else if (board[r][c] === 0) {
        if (score === 3) {
          board[r][c] = 0.5;
        }
      }
    }
  }

  for (r = 0; r < board.length; r++) {
    for (c = 0; c < board[0].length; c++) {
      board[r][c] = Math.ceil(board[r][c]);
    }
  }
}; */

// Bulls and Cows					7/23/2024
/* 
// https://leetcode.com/problems/bulls-and-cows/description/

// You are playing the Bulls and Cows game with your friend.

// You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:
// - The number of "bulls", which are digits in the guess that are in the correct position.
// - The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.

// Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

// The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

// Example 1:
// 		Input: secret = "1807", guess = "7810"
// 		Output: "1A3B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// 		"1807"
// 		|
// 		"7810"

// Example 2:
// 		Input: secret = "1123", guess = "0111"
// 		Output: "1A1B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// 		"1123"        "1123"
// 		|      or     |
// 		"0111"        "0111"
// 		Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.

// Constraints:
//		1 <= secret.length, guess.length <= 1000
//		secret.length == guess.length
//		secret and guess consist of digits only.

const getHint = (secret, guess) => {
  const n = secret.length;

  let bulls = 0;
  let remSecret = ""; // non-bull chars
  let count = new Array(10).fill(0); // potential cow chars
  for (let i = 0; i < n; i++) {
    if (secret[i] === guess[i]) bulls++;
    else {
      // future cow testing
      remSecret += secret[i];
      count[guess[i]]++;
    }
  }

  let cows = 0;
  for (const c of remSecret) {
    if (count[c] > 0) {
      cows++;
      count[c]--;
    }
  }

  return `${bulls}A${cows}B`;
};

console.log(getHint("1807", "7810")); //  "1A3B"
console.log(getHint("1123", "0111")); //  "1A1B"

function topVotedGetHint(secret, guess) {
  var map = {};
  var A = 0;
  var B = 0;
  for (var i = 0; i < 10; i++) map[i] = 0;
  for (i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) A++;
    else {
      map[secret[i]]++;
      B += map[secret[i]] <= 0 ? 1 : 0;
      map[guess[i]]--;
      B += map[guess[i]] >= 0 ? 1 : 0;
    }
  }
  return A + "A" + B + "B";
}

// same idea */

// Range Sum Query 2D - Immutable					7/24/2024
/* 
// https://leetcode.com/problems/range-sum-query-2d-immutable/description/

// Given a 2D matrix matrix, handle multiple queries of the following type:

// Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

// Implement the NumMatrix class:

// NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.

// int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

// You must design an algorithm where sumRegion works on O(1) time complexity.

// Example 1:
// 		Input
// 		["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
// 		[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
// 		Output
// 		[null, 8, 11, 12]
// 		Explanation
// 		NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
// 		numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
// 		numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
// 		numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)

// Constraints:
//		m == matrix.length
//		n == matrix[i].length
//		1 <= m, n <= 200
//		-104 <= matrix[i][j] <= 104
//		0 <= row1 <= row2 < m
//		0 <= col1 <= col2 < n
//		At most 104 calls will be made to sumRegion.

class NumMatrix {
  constructor(mat) {
    this.mat = mat;
  }

  sumRegion(row1, col1, row2, col2) {
    let sum = 0;
    while (row1 <= row2) {
      let col = col1;
      while (col <= col2) {
        sum += this.mat[row1][col++];
      }
      row1++;
    }
    return sum;
  }
}

const numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // return 8 (i.e sum of the red rectangle)
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // return 11 (i.e sum of the green rectangle)
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // return 12 (i.e sum of the blue rectangle)

// sumRegion is not O(1)

class NumMatrix {
  constructor(M) {
    let ylen = M.length + 1,
      xlen = M[0].length + 1;
    this.dp = Array.from({ length: ylen }, () => new Array(xlen).fill(0));
    for (let i = 1; i < ylen; i++)
      for (let j = 1; j < xlen; j++)
        this.dp[i][j] =
          M[i - 1][j - 1] +
          this.dp[i - 1][j] +
          this.dp[i][j - 1] -
          this.dp[i - 1][j - 1];
  }

  sumRegion(R1, C1, R2, C2) {
    return (
      this.dp[R2 + 1][C2 + 1] -
      this.dp[R2 + 1][C1] -
      this.dp[R1][C2 + 1] +
      this.dp[R1][C1]
    );
  }
} */

// Peeking Iterator					7/25/2024
/* 
// https://leetcode.com/problems/peeking-iterator/description/

// Design an iterator that supports the peek operation on an existing iterator in addition to the hasNext and the next operations.

// Implement the PeekingIterator class:
// - PeekingIterator(Iterator<int> nums) Initializes the object with the given integer iterator iterator.
// - int next() Returns the next element in the array and moves the pointer to the next element.
// - boolean hasNext() Returns true if there are still elements in the array.
// - int peek() Returns the next element in the array without moving the pointer.

// Note: Each language may have a different implementation of the constructor and Iterator, but they all support the int next() and boolean hasNext() functions.

// Example 1:
// 		Input
// 		["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
// 		[[[1, 2, 3]], [], [], [], [], []]
// 		Output
// 		[null, 1, 2, 2, 3, false]
// 		Explanation
// 		PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
// 		peekingIterator.next();    // return 1, the pointer moves to the next element [1,2,3].
// 		peekingIterator.peek();    // return 2, the pointer does not move [1,2,3].
// 		peekingIterator.next();    // return 2, the pointer moves to the next element [1,2,3]
// 		peekingIterator.next();    // return 3, the pointer moves to the next element [1,2,3]
// 		peekingIterator.hasNext(); // return False

// Constraints:
//		1 <= nums.length <= 1000
//		1 <= nums[i] <= 1000
//		All the calls to next and peek are valid.
//		At most 1000 calls will be made to next, hasNext, and peek.
//		Follow up: How would you extend your design to be generic and work with all types, not just integer?

class PeekingIterator {
  constructor(arr) {
    this.arr = arr;
    this.n = arr.length;
    this.i = 0;
  }

  peek = () => this.arr[this.i];
  next = () => this.arr[this.i++];
  hasNext = () => this.i !== this.n;
}

const peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
console.log(peekingIterator.next()); //  1
console.log(peekingIterator.peek()); //  2
console.log(peekingIterator.next()); //  2
console.log(peekingIterator.next()); //  3
console.log(peekingIterator.hasNext()); //  False

class TopVotedPeekingIterator {
  constructor(iterator) {
    this.itr = iterator;
    this.peeked = null;
  }

  peek() {
    if (!this.peeked) this.peeked = this.itr.next();
    return this.peeked;
  }

  next() {
    if (!this.peeked) return this.itr.next();
    const temp = this.peeked;
    this.peeked = null;
    return temp;
  }

  hasNext() {
    if (!this.peeked) return this.itr.hasNext();
    return true;
  }
}

// input is iterator, not array */

// Range Sum Query - Mutable					7/26/2024
/* 
// https://leetcode.com/problems/range-sum-query-mutable/description/

// Given an integer array nums, handle multiple queries of the following types:
// 1. Update the value of an element in nums.
// 2. Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.

// Implement the NumArray class:
// - NumArray(int[] nums) Initializes the object with the integer array nums.
// - void update(int index, int val) Updates the value of nums[index] to be val.
// - int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Example 1:
// 		Input
// 		["NumArray", "sumRange", "update", "sumRange"]
// 		[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
// 		Output
// 		[null, 9, null, 8]
// 		Explanation
// 		NumArray numArray = new NumArray([1, 3, 5]);
// 		numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
// 		numArray.update(1, 2);   // nums = [1, 2, 5]
// 		numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8

// Constraints:
//		1 <= nums.length <= 3 * 104
//		-100 <= nums[i] <= 100
//		0 <= index < nums.length
//		-100 <= val <= 100
//		0 <= left <= right < nums.length
//		At most 3 * 104 calls will be made to update and sumRange.

class NumArray {
  constructor(arr) {
    this.n = arr.length;
    this.arr = arr;
  }

  update = (i, val) => {
    if (i < 0 || i >= this.n) return;
    this.arr[i] = val;
  };
  sumRange = (l, r) => this.arr.slice(l, r + 1).reduce((a, c) => a + c, 0);
}

const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2)); // return 1 + 3 + 5 = 9
console.log(numArray.update(1, 2)); // nums = [1, 2, 5]
console.log(numArray.sumRange(0, 2)); // return 1 + 2 + 5 = 8

// exceeds runtime

var TopVotedNumArray = function (nums) {
  this.n = nums.length;
  this.segTree = new Array(this.n * 2);
  this.build(nums);
};

NumArray.prototype.build = function (nums) {
  let n = this.n;
  let j = 0;
  for (var i = n; i < n * 2; i++) {
    this.segTree[i] = nums[j];
    j++;
  }
  for (i = n - 1; i > 0; i--) {
    this.segTree[i] = this.segTree[i * 2] + this.segTree[i * 2 + 1];
  }
};

NumArray.prototype.update = function (index, val) {
  let n = this.n;
  index += n;
  this.segTree[index] = val;
  while (index > 1) {
    let left = index,
      right = index;
    if (index % 2 === 0) {
      right = index + 1;
    } else {
      left = index - 1;
    }
    index = Math.floor(index / 2);
    this.segTree[index] = this.segTree[left] + this.segTree[right];
  }
};

NumArray.prototype.sumRange = function (left, right) {
  let n = this.n;
  (left += n), (right += n);
  let sum = 0;
  while (left <= right) {
    if (left % 2 === 1) {
      sum += this.segTree[left];
      left++;
    }
    if (right % 2 === 0) {
      sum += this.segTree[right];
      right--;
    }
    left = Math.floor(left / 2);
    right = Math.floor(right / 2);
  }
  return sum;
}; */

// Super Ugly Number					7/27/2024
/* 
// https://leetcode.com/problems/super-ugly-number/description/

// A super ugly number is a positive integer whose prime factors are in the array primes.

// Given an integer n and an array of integers primes, return the nth super ugly number.

// The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

// Example 1:
// 		Input: n = 12, primes = [2,7,13,19]
// 		Output: 32
// Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19].

// Example 2:
// 		Input: n = 1, primes = [2,3,5]
// 		Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are in the array primes = [2,3,5].

// Constraints:
//		1 <= n <= 105
//		1 <= primes.length <= 100
//		2 <= primes[i] <= 1000
//		primes[i] is guaranteed to be a prime number.
//		All the values of primes are unique and sorted in ascending order.

const nthSuperUglyNumber = (n, primes) => {
  let count = 0;
  let prev = 1;
  let i = 1;
  while (count < n) {
    for (const p of primes) {
      if (i % p == 0) {
        count++;
        prev = i;
        break;
      }
    }
    i++;
  }
  return prev;
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19])); //  32
console.log(nthSuperUglyNumber(1, [2, 3, 5])); //  1

var topVotedNthSuperUglyNumber = function (n, primes) {
  const dp = new Array(n); // Array to store super ugly numbers
  let len = primes.length; // Number of primes given
  let index = new Array(len).fill(0); // Array to track indices for each prime
  dp[0] = 1; // First super ugly number is 1

  // Loop to generate super ugly numbers
  for (let i = 1; i < n; i++) {
    let min = Number.MAX_SAFE_INTEGER; // Initialize minimum value

    // Find the next super ugly number by multiplying each prime with its corresponding number in dp
    for (let j = 0; j < len; j++) {
      min = Math.min(min, primes[j] * dp[index[j]]);
    }

    dp[i] = min; // Store the found super ugly number in dp

    // Update indices for primes whose product equals the found super ugly number
    for (let j = 0; j < primes.length; j++) {
      if (min == primes[j] * dp[index[j]]) {
        index[j]++;
      }
    }
  }

  return dp[n - 1]; // Return the nth super ugly number
}; */

// Maximum Product of Word Lengths					7/28/2024
/* 
// https://leetcode.com/problems/maximum-product-of-word-lengths/description/

// Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

// Example 1:
// 		Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// 		Output: 16
// Explanation: The two words can be "abcw", "xtfn".

// Example 2:
// 		Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
// 		Output: 4
// Explanation: The two words can be "ab", "cd".

// Example 3:
// 		Input: words = ["a","aa","aaa","aaaa"]
// 		Output: 0
// Explanation: No such pair of words.

// Constraints:
//		2 <= words.length <= 1000
//		1 <= words[i].length <= 1000
//		words[i] consists only of lowercase English letters.

const maxProduct = (words) => {
  const n = words.length;

  words.sort((a, b) => b.length - a.length);
  words = words.map((word) => ({
    word: word,
    chars: new Set(word),
    len: word.length,
  }));

  let res = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const prod = words[i].len * words[j].len;
      if (prod <= res) break; // not worth checking
      if (![...words[i].chars].some((c) => words[j].chars.has(c))) res = prod;
    }
  }

  return res;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])); //  16
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"])); //  4
console.log(maxProduct(["a", "aa", "aaa", "aaaa"])); //  0

var topVotedMaxProduct = function (words) {
  words.sort((a, b) => b.length - a.length);
  let best = 0,
    bitsets = new Uint32Array(words.length);
  for (let i = 0; i < words.length; i++) {
    let word = words[i],
      wlen = word.length,
      bitset = 0;
    if (wlen * words[0].length < best) return best;
    for (let j = 0; j < wlen; j++) bitset |= 1 << (word.charCodeAt(j) - 97);
    for (let j = 0; j < i; j++)
      if ((bitsets[j] & bitset) === 0)
        best = Math.max(best, wlen * words[j].length);
    bitsets[i] = bitset;
  }
  return best;
}; */

// Bulb Switcher					7/29/2024
/* 
// https://leetcode.com/problems/bulb-switcher/

// There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

// On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

// Return the number of bulbs that are on after n rounds.

// Example 1:
// 		Input: n = 3
// 		Output: 1
// Explanation: At first, the three bulbs are [off, off, off].
// 		After the first round, the three bulbs are [on, on, on].
// 		After the second round, the three bulbs are [on, off, on].
// 		After the third round, the three bulbs are [on, off, off].
// 		So you should return 1 because there is only one bulb is on.

// Example 2:
// 		Input: n = 0
// 		Output: 0

// Example 3:
// 		Input: n = 1
// 		Output: 1

// Constraints:
//		0 <= n <= 109

const bulbSwitch = (n) => {
  if (n <= 1) return n;

  let bulbs = new Array(n).fill(true);
  let gap = 1;
  while (gap < n) {
    for (let i = gap; i < n; i += gap + 1) {
      bulbs[i] = !bulbs[i];
    }
    gap++;
  }

  return bulbs.reduce((a, c) => a + c, 0);
};

// Exceeds time limit on larger test cases

const topVotedBulbSwitch = (n) => ~~Math.sqrt(n);

console.log(topVotedBulbSwitch(3)); //  1
console.log(topVotedBulbSwitch(0)); //  0
console.log(topVotedBulbSwitch(1)); //  1
console.log(topVotedBulbSwitch(4)); //  2 */

// Coin Change					7/30/2024
/* 
// https://leetcode.com/problems/coin-change/description/

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// 		Input: coins = [1,2,5], amount = 11
// 		Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// 		Input: coins = [2], amount = 3
// 		Output: -1

// Example 3:
// 		Input: coins = [1], amount = 0
// 		Output: 0

// Constraints:
//		1 <= coins.length <= 12
//		1 <= coins[i] <= 231 - 1
//		0 <= amount <= 104

const coinChange1 = (coins, amt) => {
  if (amt == 0) return 0;
  coins.sort((a, b) => b - a);

  let res = 0;
  let i = 0;
  let n = coins.length;
  while (amt > 0 && i < n) {
    if (coins[i] <= amt) {
      amt -= coins[i];
      res++;
    } else {
      i++;
    }
  }

  return amt == 0 ? res : -1;
};

const coinChange = (coins, amt) => {
  let min = Number.MAX_SAFE_INTEGER;
  coins.sort((a, b) => b - a);
  let n = coins.length;
  let memo = new Map();

  const dfs = (cur, count, i) => {
    if (memo.has(cur) && memo.get(cur) < count) return;
    else memo.set(cur, count);

    if (cur == 0) {
      min = Math.min(min, count);
      return;
    }

    for (let j = i; j < n; j++) {
      if (cur - coins[j] >= 0) {
        dfs(cur - coins[j], count + 1, j);
      }
    }
  };
  dfs(amt, 0, 0);

  return min == Number.MAX_SAFE_INTEGER ? -1 : min;
};

console.log(coinChange([1, 2, 5], 11)); //  3
console.log(coinChange([2], 3)); //  -1
console.log(coinChange([1], 0)); //  0

var topVotedCoinChange = function (coins, amount) {
  let minCoins = new Array(amount + 1).fill(amount + 1);
  minCoins[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        minCoins[i] = Math.min(minCoins[i], 1 + minCoins[i - coins[j]]);
      }
    }
  }

  return minCoins[amount] !== amount + 1 ? minCoins[amount] : -1;
};

// This same dp structure appears a lot */

// Wiggle Sort II					7/31/2024
/* 
// https://leetcode.com/problems/wiggle-sort-ii/description/

// Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// You may assume the input array always has a valid answer.

// Example 1:
// 		Input: nums = [1,5,1,1,6,4]
// 		Output: [1,6,1,5,1,4]
// Explanation: [1,4,1,5,1,6] is also accepted.

// Example 2:
// 		Input: nums = [1,3,2,2,3,1]
// 		Output: [2,3,1,3,1,2]

// Constraints:
//		1 <= nums.length <= 5 * 10^4
//		0 <= nums[i] <= 5000
//		It is guaranteed that there will be an answer for the given input nums.

// Follow Up: Can you do it in O(n) time and/or in-place with O(1) extra space?

const wiggleSort = (nums) => {
  const n = nums.length;
  let res = new Array(n);
  const l = nums.sort((a, b) => a - b);
  const r = nums.splice(Math.ceil(n / 2));

  let i = 0;
  let m = l.length - 1;
  let k = r.length - 1;
  while (m >= 0 || k >= 0) {
    if (m >= k) {
      res[i++] = l[m--];
    } else {
      res[i++] = r[k--];
    }
  }
  return res;
};

console.log(wiggleSort([1, 5, 1, 1, 6, 4])); //  [1,6,1,5,1,4]
console.log(wiggleSort([1, 3, 2, 2, 3, 1])); //  [2,3,1,3,1,2]

// Not O(n) or O(1)

var topVotedWiggleSort = function (nums) {
  nums.sort((b, a) => b - a);
  let mid = Math.floor(nums.length / 2);
  mid += nums.length % 2 == 0 ? 0 : 1;
  let even = nums.slice(0, mid);
  let odd = nums.slice(mid);
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      nums[i] = even.pop();
    } else {
      nums[i] = odd.pop();
    }
  }
}; */

// Increasing Triplet Subsequence					8/1/2024
/* 
// https://leetcode.com/problems/increasing-triplet-subsequence/description/

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:
// 		Input: nums = [1,2,3,4,5]
// 		Output: true
// Explanation: Any triplet where i < j < k is valid.

// Example 2:
// 		Input: nums = [5,4,3,2,1]
// 		Output: false
// Explanation: No triplet exists.

// Example 3:
// 		Input: nums = [2,1,5,0,4,6]
// 		Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// Constraints:
//		1 <= nums.length <= 5 * 105
//		-231 <= nums[i] <= 231 - 1

// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

const increasingTriplet = (nums) => {
  const n = nums.length;
  let triplet = new Array(3).fill(Infinity);
  for (const n of nums) {
    if (n > triplet[0] && n > triplet[1]) return true;
    else if (n > triplet[0]) triplet[1] = n;
    else triplet[0] = n;
  }
  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); //  true
console.log(increasingTriplet([5, 4, 3, 2, 1])); //  false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); //  true

var topVotedIncreasingTriplet = function (nums) {
  let firstNumber = Infinity;
  let secondNumber = Infinity;

  for (let currentNumber of nums) {
    if (currentNumber > secondNumber && currentNumber > firstNumber) {
      return true;
    }
    if (currentNumber > firstNumber) {
      secondNumber = currentNumber;
    } else {
      firstNumber = currentNumber;
    }
  }
  return false;
};

// same same */

// Integer Break					8/2/2024
/* 
// https://leetcode.com/problems/integer-break/description/

// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

// Return the maximum product you can get.

// Example 1:
// 		Input: n = 2
// 		Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.

// Example 2:
// 		Input: n = 10
// 		Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

// Constraints:
//		2 <= n <= 58

var topVotedIntegerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;

  let count_of_3s = Math.floor(n / 3);
  let remainder = n % 3;

  if (remainder === 0) {
    return 3 ** count_of_3s;
  } else if (remainder === 1) {
    return 3 ** (count_of_3s - 1) * 4;
  } else {
    return 3 ** count_of_3s * 2;
  }
};
console.log(topVotedIntegerBreak(2)); //  1
console.log(topVotedIntegerBreak(10)); //  36

// Approach
// Why 3s? By testing various numbers, it becomes evident that the number 3 plays a significant role in maximizing the product. For example:
// 4 = 2 + 2 (product = 4)
// 5 = 2 + 3 (product = 6)
// 6 = 3 + 3 (product = 9)
// 7 = 3 + 2 + 2 (product = 12)
// 8 = 3 + 3 + 2 (product = 18)
// 9 = 3 + 3 + 3 (product = 27) */

// Find the Encrypted String					8/3/2024
/* 
// https://leetcode.com/problems/find-the-encrypted-string/description/

// You are given a string s and an integer k. Encrypt the string using the following algorithm:

// For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).

// Return the encrypted string.

// Example 1:
// 		Input: s = "dart", k = 3
// 		Output: "tdar"
// Explanation:
// 		For i = 0, the 3rd character after 'd' is 't'.
// 		For i = 1, the 3rd character after 'a' is 'd'.
// 		For i = 2, the 3rd character after 'r' is 'a'.
// 		For i = 3, the 3rd character after 't' is 'r'.

// Example 2:
// 		Input: s = "aaa", k = 1
// 		Output: "aaa"
// Explanation:
// 		As all the characters are the same, the encrypted string will also be the same.

// Constraints:
//		1 <= s.length <= 100
//		1 <= k <= 104
//		s consists only of lowercase English letters.

const getEncryptedString = (s, k) => {
  k = k % s.length;
  return s.substring(k) + s.substring(0, k);
};

console.log(getEncryptedString("dart", 3)); //  "tdar"
console.log(getEncryptedString("aaa", 1)); //  "aaa"

var topVotedGetEncryptedString = function (s, k) {
  const n = s.length;
  k = k % n;
  let result = new Array(n);
  for (let i = 0; i < n; ++i) {
    let idx = (i + k) % n;
    result[idx] = s[i];
  }
  return result.join("");
}; */

// Design Twitter					8/4/2024

// https://leetcode.com/problems/design-twitter/

// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

// Implement the Twitter class:
// - Twitter() Initializes your twitter object.
// - void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
// - List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
// - void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
// - void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

// Example 1:
// 		Input
// 		["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
// 		[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
// 		Output
// 		[null, null, [5], null, null, [6, 5], null, [5]]

// Constraints:
//		1 <= userId, followerId, followeeId <= 500
//		0 <= tweetId <= 104
//		All the tweets have unique IDs.
//		At most 3 * 104 calls will be made to postTweet, getNewsFeed, follow, and unfollow.

class Twitter {
  constructor() {
    this.tweetCount = 0;
    this.allTweets = [];
    this.db = {};
  }

  postTweet(userId, tweetId) {
    if (!this?.db[userId])
      this.db[userId] = { tweets: {}, following: new Set([userId]) };

    this.db[userId].tweets[this.tweetCount] = tweetId;
    this.allTweets.unshift({ userId, tweetId });
    this.tweetCount++;
  }

  getNewsFeed(userId) {
    let res = [];
    let count = 10;
    for (const tweet of this.allTweets) {
      if (this.db[userId].following.has(tweet.userId)) {
        res.push(tweet.tweetId);
        if (--count <= 0) break;
      }
    }
    return res;
  }

  follow(followerId, followeeId) {
    if (!this.db[followerId])
      this.db[followerId] = { tweets: {}, following: new Set([followerId]) };
    this.db[followerId].following.add(followeeId);
  }

  unfollow(followerId, followeeId) {
    this.db[followerId].following.delete(followeeId);
  }
}

const twitter = new Twitter();
console.log(twitter.postTweet(1, 5)); // User 1 posts a new tweet (id = 5).
console.log(twitter.getNewsFeed(1)); // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
console.log(twitter.follow(1, 2)); // User 1 follows user 2.
console.log(twitter.postTweet(2, 6)); // User 2 posts a new tweet (id = 6).
console.log(twitter.getNewsFeed(1)); // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
console.log(twitter.unfollow(1, 2)); // User 1 unfollows user 2.
console.log(twitter.getNewsFeed(1)); // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.

// it goes

var Twitter = function () {
  this.users = new Map();
  this.tweets = [];
};

Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.users.has(userId)) this.users.set(userId, new Set());
  this.tweets.push({ userId, tweetId });
};

Twitter.prototype.getNewsFeed = function (userId) {
  const user = this.users.get(userId);
  const recentTweets = [];
  for (
    let i = this.tweets.length - 1;
    i >= 0 && recentTweets.length < 10;
    i--
  ) {
    if (user.has(this.tweets[i].userId) || this.tweets[i].userId === userId) {
      recentTweets.push(this.tweets[i].tweetId);
    }
  }
  return recentTweets;
};

Twitter.prototype.follow = function (followerId, followeeId) {
  const user = this.users.get(followerId) || new Set();
  user.add(followeeId);
  this.users.set(followerId, user);
};

Twitter.prototype.unfollow = function (followerId, followeeId) {
  this.users.get(followerId)?.delete(followeeId);
};
