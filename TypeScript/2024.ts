class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const linkedList = (arr: number[]) => {
  let head = new ListNode();
  let node = head;
  for (const x of arr) {
    node.next = new ListNode(x);
    node = node.next;
  }
  return head.next;
};

const printLinkedList = (head: ListNode | null) => {
  let els = [];
  while (head) {
    els.push(head.val);
    head = head.next;
  }
  console.log(els);
};

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const createBinaryTree = (arr: (number | null)[], i = 0) => {
  const len = arr.length;
  let root = null;
  if (i < len) {
    root = new TreeNode(arr[i]!);
    root.left =
      arr[2 * i + 1] == null ? null : createBinaryTree(arr, 2 * i + 1);
    root.right =
      arr[2 * i + 2] == null ? null : createBinaryTree(arr, 2 * i + 2);
  }
  return root;
};

const printBinaryTree = (root: TreeNode | null) => {
  let res = [];
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      res.push(node.val);
      queue.push(node.left, node.right);
    } else {
      res.push(null);
    }
  }
  console.log(res);
};

// Two Sum					9/6/2024
/* 
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

// seems the interface wasn't needed */

// Palindrome Number					9/7/2024
/* 
// https://leetcode.com/problems/palindrome-number/description/

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// 		Input: x = 121
// 		Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// 		Input: x = -121
// 		Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// 		Input: x = 10
// 		Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:
//		-2^31 <= x <= 2^31 - 1
//		Follow up: Could you solve it without converting the integer to a string?

function isPalindrome(x: number): boolean {
  if (x < 0) return false; // negatives cannot be palindromes

  let num = x;
  let flipped = 0;

  while (num > 0) {
    let tail = num % 10; // tailing digit
    num = ~~(num / 10);
    flipped = flipped * 10 + tail;
  }

  return flipped === x;
}

console.log(isPalindrome(121)); //  true
console.log(isPalindrome(-121)); //  false
console.log(isPalindrome(10)); //  false

// same as top voted */

// Longest Common Prefix					9/8/2024
/* 
// https://leetcode.com/problems/longest-common-prefix/

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// 		Input: strs = ["flower","flow","flight"]
// 		Output: "fl"

// Example 2:
// 		Input: strs = ["dog","racecar","car"]
// 		Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
//		1 <= strs.length <= 200
//		0 <= strs[i].length <= 200
//		strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs: string[]): string {
  const n = strs.length;

  let prefix = strs[0]; // best case scenario, full match
  for (let i = 1; i < n; i++) {
    let idx = 0;
    while (prefix[idx] && prefix[idx] == strs[i][idx]) {
      // doesn't exceed prefix length and are matching chars
      idx++;
    }
    prefix = prefix.substring(0, idx); // only keep matching
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); //  "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); //  ""

// I'll return to mediums since javascript/typescript are so similar

function topVotedLongestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }

    if (prefix === "") {
      return prefix;
    }
  }

  return prefix;
} */

// Partition String Into Minimum Beautiful Substrings					9/9/2024
/* 
// https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/description/

// Given a binary string s, partition the string into one or more substrings such that each substring is beautiful.

// A string is beautiful if:
// - It doesn't contain leading zeros.
// - It's the binary representation of a number that is a power of 5.

// Return the minimum number of substrings in such partition. If it is impossible to partition the string s into beautiful substrings, return -1.

// A substring is a contiguous sequence of characters in a string.

// Example 1:
// 		Input: s = "1011"
// 		Output: 2
// Explanation: We can paritition the given string into ["101", "1"].
// 		- The string "101" does not contain leading zeros and is the binary representation of integer 5^1 = 5.
// 		- The string "1" does not contain leading zeros and is the binary representation of integer 5^0 = 1.
// 		It can be shown that 2 is the minimum number of beautiful substrings that s can be partitioned into.

// Example 2:
// 		Input: s = "111"
// 		Output: 3
// Explanation: We can paritition the given string into ["1", "1", "1"].
// 		- The string "1" does not contain leading zeros and is the binary representation of integer 5^0 = 1.
// 		It can be shown that 3 is the minimum number of beautiful substrings that s can be partitioned into.

// Example 3:
// 		Input: s = "0"
// 		Output: -1
// Explanation: We can not partition the given string into beautiful substrings.

// Constraints:
//		1 <= s.length <= 15
//		s[i] is either '0' or '1'.

function topVotedMinimumBeautifulSubstrings(s: string): number {
  let bin = [
    "11110100001001",
    "110000110101",
    "1001110001",
    "1111101",
    "11001",
    "101",
    "1",
  ];
  let min = Infinity;

  function rec(str: string, binIndex: number, size = 0) {
    if (binIndex === 7) {
      if (str.replaceAll("_", "") === "") {
        min = Math.min(min, size);
      }
      return;
    }

    if (str.indexOf(bin[binIndex]) !== -1) {
      rec(str.replace(bin[binIndex], "_"), binIndex, size + 1);
    }

    rec(str, binIndex + 1, size);
  }

  rec(s, 0);
  return min === Infinity ? -1 : min;
}

// bin array is a great tool here */

// Count Zero Request Servers					9/10/2024
/* 
// https://leetcode.com/problems/count-zero-request-servers/description/

// You are given an integer n denoting the total number of servers and a 2D 0-indexed integer array logs, where logs[i] = [server_id, time] denotes that the server with id server_id received a request at time time.

// You are also given an integer x and a 0-indexed integer array queries.

// Return a 0-indexed integer array arr of length queries.length where arr[i] represents the number of servers that did not receive any requests during the time interval [queries[i] - x, queries[i]].

// Note that the time intervals are inclusive.

// Example 1:
// 		Input: n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]
// 		Output: [1,2]
// Explanation:
// 		For queries[0]: The servers with ids 1 and 2 get requests in the duration of [5, 10]. Hence, only server 3 gets zero requests.
// 		For queries[1]: Only the server with id 2 gets a request in duration of [6,11]. Hence, the servers with ids 1 and 3 are the only servers that do not receive any requests during that time period.

// Example 2:
// 		Input: n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2, queries = [3,4]
// 		Output: [0,1]
// Explanation:
// 		For queries[0]: All servers get at least one request in the duration of [1, 3].
// 		For queries[1]: Only server with id 3 gets no request in the duration [2,4].

// Constraints:
//		1 <= n <= 105
//		1 <= logs.length <= 105
//		1 <= queries.length <= 105
//		logs[i].length == 2
//		1 <= logs[i][0] <= n
//		1 <= logs[i][1] <= 106
//		1 <= x <= 105
//		x < queries[i] <= 106

function countServers(
  n: number,
  logs: number[][],
  x: number,
  queries: number[]
): number[] {
  // for every instance of time, track servers that have received a request
  const map = new Map();
  for (const [id, time] of logs) {
    if (!map.has(time)) map.set(time, new Set([id]));
    else if (!map.get(time).has(id)) map.set(time, map.get(time).add(id));
  }

  // for every query, check all servers active in that window
  return queries.map((time) => {
    let receivedRequests = new Set(); // unique servers active within window
    for (let t = time - x; t <= time; t++) {
      if (map.has(t))
        receivedRequests = new Set([...receivedRequests, ...map.get(t)]);
    }
    return n - receivedRequests.size;
  });
}

console.log(
  countServers(
    3,
    [
      [1, 3],
      [2, 6],
      [1, 5],
    ],
    5,
    [10, 11]
  )
); //  [1,2]
console.log(
  countServers(
    3,
    [
      [2, 4],
      [2, 1],
      [1, 2],
      [3, 1],
    ],
    2,
    [3, 4]
  )
); //  [0,1]

var topVotedCountServers = function (
  n: number,
  logs: number[][],
  x: number,
  queries: number[]
): number[] {
  logs.sort((a, b) => a[1] - b[1]); // sort logs ascending by time
  let mappedQueries = queries.map((endTime, index) => [endTime, index]); // add index to queries
  mappedQueries.sort((a, b) => a[0] - b[0]); // sort queries by end times

  const ans = new Array(mappedQueries.length).fill(0);
  const map = new Map();
  let uniqueServers = 0;
  let start = 0;
  let end = 0;

  for (const [endTime, index] of mappedQueries) {
    const startTime = endTime - x;

    while (end < logs.length && logs[end][1] <= endTime) {
      // check every logs for current query window, and map them
      const id = logs[end][0]; // current log server id
      map.set(id, (map.get(id) || 0) + 1); // increment occurrence of id
      if (map.get(id) === 1) uniqueServers++; // if > 1, increment ans
      end++;
    }

    while (start < logs.length && logs[start][1] < startTime) {
      const prev = logs[start][0]; // current log server id
      map.set(prev, map.get(prev) - 1); // decrement occurence of id
      if (map.get(prev) === 0) {
        // if < 1, remove from ans
        map.delete(prev);
        uniqueServers--;
      }
      start++;
    }

    // update ans
    ans[index] = n - uniqueServers;
  }

  return ans;
}; */

// Sort Vowels in a String					9/11/2024
/* 
// https://leetcode.com/problems/sort-vowels-in-a-string/

// Given a 0-indexed string s, permute s to get a new string t such that:

// All consonants remain in their original places. More formally, if there is an index i with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].

// The vowels must be sorted in the nondecreasing order of their ASCII values. More formally, for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII value than t[j].

// Return the resulting string.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.

// Example 1:
// 		Input: s = "lEetcOde"
// 		Output: "lEOtcede"
// Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.

// Example 2:
// 		Input: s = "lYmpH"
// 		Output: "lYmpH"
// Explanation: There are no vowels in s (all characters in s are consonants), so we return "lYmpH".

// Constraints:
//		1 <= s.length <= 105
//		s consists only of letters of the English alphabet in uppercase and lowercase.

const charToIdx = new Map([
  ["A", 0],
  ["E", 1],
  ["I", 2],
  ["O", 3],
  ["U", 4],
  ["a", 5],
  ["e", 6],
  ["i", 7],
  ["o", 8],
  ["u", 9],
]);
const idxToChar = new Map([
  [0, "A"],
  [1, "E"],
  [2, "I"],
  [3, "O"],
  [4, "U"],
  [5, "a"],
  [6, "e"],
  [7, "i"],
  [8, "o"],
  [9, "u"],
]);

function sortVowels(s: string): string {
  const n = s.length;
  let vowels = new Array(10).fill(0);

  for (let c of s) {
    if (charToIdx.has(c)) {
      // vowel found
      const idx = charToIdx.get(c);
      if (idx != undefined) vowels[idx] += 1; // increment count
    }
  }

  let res = "";
  let availCharIdx = 0; // skip starting from beginning of vowel array everytime

  for (let i = 0; i < n; i++) {
    const c = s[i];

    if (charToIdx.has(c)) {
      // vowel found
      for (let idx = availCharIdx; idx < 10; idx++, availCharIdx++) {
        // find next available sorted vowel
        if (vowels[idx] > 0) {
          res += idxToChar.get(idx);
          vowels[idx]--; // decrement vowel count
          break;
        }
      }
    } else {
      // add consonant
      res += c;
    }
  }

  return res;
}

console.log(sortVowels("lEetcOde")); //  "lEOtcede"
console.log(sortVowels("lYmpH")); //  "lYmpH"

// 100% Runtime

function topVotedSortVowels(s: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const sArr = s.split("");
  const sortedVowel = sArr.filter((c) => vowels.has(c)).sort();

  let result = "";
  let vowelIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      result += sortedVowel[vowelIndex++];
    } else {
      result += s[i];
    }
  }

  return result;
} */

// Insert Greatest Common Divisors in Linked List					9/12/2024
/* 
// https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/

// Given the head of a linked list head, in which each node contains an integer value.

// Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

// Return the linked list after insertion.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:
// 		Input: head = [18,6,10,3]
// 		Output: [18,6,6,2,10,1,3]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
// 		- We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
// 		- We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
// 		- We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
// 		There are no more adjacent nodes, so we return the linked list.

// Example 2:
// 		Input: head = [7]
// 		Output: [7]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
// 		There are no pairs of adjacent nodes, so we return the initial linked list.

// Constraints:
//		The number of nodes in the list is in the range [1, 5000].
//		1 <= Node.val <= 1000

const insertGreatestCommonDivisors = (
  head: ListNode | null
): ListNode | null => {
  let node = head;
  while (node?.next) {
    let [a, b] = [node.val, node.next.val];
    if (b > a) [a, b] = [b, a]; // a = largest val

    let maxDiv: number;
    if (a % b == 0) {
      // largest is divisible by smallest
      maxDiv = b; // smallest is highest common div
    } else {
      // find largest common divisor
      for (let div = 1; div <= b; div++) {
        if (a % div == 0 && b % div == 0) {
          maxDiv = div; // new maxDiv found
          if (a % (b / div) == 0) {
            // early exit
            // largest divisor = num / smallest divisor != 1
            maxDiv = b / div;
            break;
          }
        }
      }
    }

    node.next = new ListNode(maxDiv, node.next);
    node = node.next.next;
  }
  return head;
};

printLinkedList(insertGreatestCommonDivisors(linkedList([18, 6, 10, 3]))); // [18,6,6,2,10,1,3]
printLinkedList(insertGreatestCommonDivisors(linkedList([7]))); // [7]

function topVotedInsertGreatestCommonDivisors(
  head: ListNode | null
): ListNode | null {
  let prev: ListNode | null = head;
  let current: ListNode | null = head.next;
  while (current) {
    let min: number = Math.min(prev.val, current.val);
    for (let i = min; i > 0; i--) {
      if (prev.val % i == 0 && current.val % i == 0) {
        min = i;
        break;
      }
    }

    let newNode: ListNode | null = new ListNode(min, current);
    prev.next = newNode;
    prev = current;
    current = current.next;
  }

  return head;
}

// I thought this would be too slow, but it passes
// It's only a bit slower, but more readable */

// Double a Number Represented as a Linked List					9/13/2024
/* 
// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/

// You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.

// Return the head of the linked list after doubling it.

// Example 1:
// 		Input: head = [1,8,9]
// 		Output: [3,7,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.

// Example 2:
// 		Input: head = [9,9,9]
// 		Output: [1,9,9,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998.

// Constraints:
//		The number of nodes in the list is in the range [1, 10^4]
//		0 <= Node.val <= 9
//		The input is generated such that the list represents a number that does not have leading zeros, except the number 0 itself.

const firstDoubleIt = (head: ListNode | null): ListNode | null => {
  // find num
  let num = 0;
  while (head) {
    num = num * 10 + head.val;
    head = head.next;
  }
  num *= 2; // double it

  // build it bottom up
  const newHead = new ListNode(0, null);
  while (num > 0) {
    newHead.next = new ListNode(num % 10, newHead.next);
    num = ~~(num / 10);
  }

  return newHead.next || new ListNode(0, null);
};

// ^ doesn't handle big ints

const doubleIt = (head: ListNode | null): ListNode | null => {
  // go to tail, while building num
  let num = [];
  let idx = 0; // track current digit index in num

  while (head) {
    num.push(head.val);
    idx++;
    head = head.next;
  }

  // build it bottom up
  let c = 0; // carry
  const newHead = new ListNode(0, null);

  while (idx > 0 || c) {
    let val = 0;
    if (idx > 0) val = num[--idx]; // get tailing digit, if available
    val = val * 2 + c; // double it, taking into account carry

    if (val >= 10) {
      // carry occurs
      c = 1;
      val = val % 10;
    } else {
      // no carry
      c = 0;
    }

    newHead.next = new ListNode(val, newHead.next); // add node
  }

  return newHead.next || new ListNode(0, null);
};

printLinkedList(doubleIt(linkedList([1, 8, 9]))); //  [3,7,8]
printLinkedList(doubleIt(linkedList([9, 9, 9]))); //  [1,9,9,8]

function topVotedDoubleIt(head: ListNode | null): ListNode | null {
  let carry = helper(head);
  if (carry) return new ListNode(1, head);
  return head;

  function helper(head: ListNode | null) {
    if (head === null) return 0;
    let carry = helper(head.next);
    let val = head.val * 2 + carry;
    head.val = val % 10;
    return val >= 10 ? 1 : 0;
  }
}

// recursion saves the num array */

// Length of Last Word					9/14/2024
/* 
// https://leetcode.com/problems/length-of-last-word/description/

//Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// 		Input: s = "Hello World"
// 		Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// 		Input: s = "   fly me   to   the moon  "
// 		Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// 		Input: s = "luffy is still joyboy"
// 		Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:
//		1 <= s.length <= 104
//		s consists of only English letters and spaces ' '.
//		There will be at least one word in s.

const lengthOfLastWord = (s: string): number => {
  const n = s.length;
  let res = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] == " " && res == 0) continue; // tailing spaces
    if (s[i] == " ") break;
    res++;
  }
  return res;
};

console.log(lengthOfLastWord("Hello World")); //  5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); //  4
console.log(lengthOfLastWord("luffy is still joyboy")); //  6 */

// Remove Element					9/15/2024
/* 
// https://leetcode.com/problems/remove-element/description/

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.

// Return k.

// Example 1:
// 		Input: nums = [3,2,2,3], val = 3
// 		Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// 		It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// 		Input: nums = [0,1,2,2,3,0,4,2], val = 2
// 		Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// 		Note that the five elements can be returned in any order.
// 		It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:
//		0 <= nums.length <= 100
//		0 <= nums[i] <= 50
//		0 <= val <= 100

function removeElement(nums: number[], val: number): number {
  let i = 0;
  for (const n of nums) {
    if (n != val) nums[i++] = n;
  }
  return i + 1;
}

console.log(removeElement([3, 2, 2, 3], 3)); //  2, nums = [2,2,_,_]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //  5, nums = [0,1,4,0,3,_,_,_] */

// Determine the Minimum Sum of a k-avoiding Array					9/16/2024
/* 
// https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/description/

// You are given two integers, n and k.

// An array of distinct positive integers is called a k-avoiding array if there does not exist any pair of distinct elements that sum to k.

// Return the minimum possible sum of a k-avoiding array of length n.

// Example 1:
// 		Input: n = 5, k = 4
// 		Output: 18
// Explanation: Consider the k-avoiding array [1,2,4,5,6], which has a sum of 18.
// 		It can be proven that there is no k-avoiding array with a sum less than 18.

// Example 2:
// 		Input: n = 2, k = 6
// 		Output: 3
// Explanation: We can construct the array [1,2], which has a sum of 3.
// 		It can be proven that there is no k-avoiding array with a sum less than 3.

// Constraints:
//		1 <= n, k <= 50

function minimumSum(n: number, k: number): number {
  let avoid = new Set();
  let res = 0;
  let i = 0;
  let cur = 1;
  while (i < n) {
    if (avoid.has(cur)) {
      // previously added int makes current int illegal
      cur++;
    } else {
      // valid addition
      res += cur;
      avoid.add(k - cur);
      cur++;
      i++;
    }
  }
  return res;
}

console.log(minimumSum(5, 4)); //  18
console.log(minimumSum(2, 6)); //  3

function topVotedMinimumSum(n: number, k: number): number {
  let i: number = 1;
  let arr: number[] = [];
  while (n != 0) {
    let flag: boolean = false;
    arr.forEach((num) => {
      if (num + i == k) flag = true;
    });
    if (!flag) {
      arr.push(i);
      n--;
    }
    i++;
  }

  return arr.reduce((a, b) => a + b, 0);
}

// mine feels more readable */

// Smallest Number in Infinite Set					9/17/2024
/* 
// https://leetcode.com/problems/smallest-number-in-infinite-set/description/

// You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

// Implement the SmallestInfiniteSet class:
// - SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
// - int popSmallest() Removes and returns the smallest integer contained in the infinite set.
// - void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.

// Constraints:
//		1 <= num <= 1000
//		At most 1000 calls will be made in total to popSmallest and addBack.

class SmallestInfiniteSet {
  addedBack: number[] = new Array();
  idx: number = 1;

  constructor() {}

  popSmallest(): number {
    // return smallest num added back, or current num in original set
    return this.addedBack.shift() || this.idx++;
  }

  addBack(num: number): void {
    if (num < this.idx) {
      // not in our set, must be added back

      if (this.addedBack.length == 0) {
        // 1st num added back
        this.addedBack.push(num);
      } else {
        // other nums were added back, insert in sorted order
        for (let i = 0; i < this.addedBack.length; i++) {
          if (this.addedBack[i] == num) {
            // num already in set
            return;
          } else if (this.addedBack[i] > num) {
            // pos found, insert in sorted order
            this.addedBack.splice(i, 0, num);
            return;
          }
        }
        this.addedBack.push(num); // is largest num added back
      }
    }
  }
}

const s1 = new SmallestInfiniteSet();
s1.addBack(2); // 2 is already in the set, so no change is made.
s1.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
s1.popSmallest(); // return 2, and remove it from the set.
s1.popSmallest(); // return 3, and remove it from the set.
s1.addBack(1); // 1 is added back to the set.
s1.popSmallest(); // return 1, since 1 was added back to the set and is the smallest number, and remove it from the set.
s1.popSmallest(); // return 4, and remove it from the set.
s1.popSmallest(); // return 5, and remove it from the set.

class TopVotedSmallestInfiniteSet {
  currentSmall: number = 1;
  addedList: number[] = [];

  popSmallest(): number {
    if (this.addedList.length) {
      return this.addedList.shift();
    } else {
      this.currentSmall = this.currentSmall + 1;
      return this.currentSmall - 1;
    }
  }

  addBack(num: number): void {
    if (num < this.currentSmall) {
      if (!this.addedList.includes(num)) {
        this.addedList.push(num);
        this.addedList = this.addedList.sort((a, b) => a - b);
      }
    }
  }
}

// same same */

// Count Number of Nice Subarrays					9/18/2024
/* 
// https://leetcode.com/problems/count-number-of-nice-subarrays/

// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.

// Example 1:
// 		Input: nums = [1,1,2,1,1], k = 3
// 		Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

// Example 2:
// 		Input: nums = [2,4,6], k = 1
// 		Output: 0
// Explanation: There are no odd numbers in the array.

// Example 3:
// 		Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// 		Output: 16

// Constraints:
//		1 <= nums.length <= 50000
//		1 <= nums[i] <= 10^5
//		1 <= k <= nums.length

const numberOfSubarrays = (nums: number[], k: number): number => {
  const n = nums.length;

  // find odd indexes
  // include -1 and n for leading/tailing even nums
  let oddIdx = [-1];
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2) oddIdx.push(i);
  }
  oddIdx.push(n);

  let res = 0;
  for (let i = 1; i + k < oddIdx.length; i++) {
    // within window of k odd nums
    const l = oddIdx[i] - oddIdx[i - 1]; // even nums leading our first odd num
    // i + k ensures we have k odd nums
    const r = oddIdx[i + k] - oddIdx[i + k - 1]; // even nums tailing our last odd num
    res += l * r; // number of nice subarrays combinations within this window
  }
  return res;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3)); //  2
console.log(numberOfSubarrays([2, 4, 6], 1)); //  0
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); //  16

function TopVotedNumberOfSubarrays(nums: number[], k: number): number {
  let res = 0;
  let odds = 0;
  let q = [];
  let r = 0;
  let l = 0;
  while (r < nums.length) {
    odds += nums[r] % 2 ? 1 : 0;
    if (nums[r] % 2) q.push(r);

    if (odds > k) {
      let prev = q.shift();
      odds--;
      l = prev + 1;
    }
    if (odds === k) {
      if (q.length) res += q[0] - l + 1;
      else res += r - l + 1;
    }
    r++;
  }
  return res;
} */

// Minimum Adjacent Swaps to Reach the Kth Smallest Number					9/19/2024
/* 
// https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/

// You are given a string num, representing a large integer, and an integer k.

// We call some integer wonderful if it is a permutation of the digits in num and is greater in value than num. There can be many wonderful integers. However, we only care about the smallest-valued ones.

// For example, when num = "5489355142":
// The 1st smallest wonderful integer is "5489355214".
// The 2nd smallest wonderful integer is "5489355241".
// The 3rd smallest wonderful integer is "5489355412".
// The 4th smallest wonderful integer is "5489355421".

// Return the minimum number of adjacent digit swaps that needs to be applied to num to reach the kth smallest wonderful integer.

// The tests are generated in such a way that kth smallest wonderful integer exists.

// Example 1:
// 		Input: num = "5489355142", k = 4
// 		Output: 2
// Explanation: The 4th smallest wonderful number is "5489355421". To get this number:
// 		- Swap index 7 with index 8: "5489355142" -> "5489355412"
// 		- Swap index 8 with index 9: "5489355412" -> "5489355421"

// Example 2:
// 		Input: num = "11112", k = 4
// 		Output: 4
// Explanation: The 4th smallest wonderful number is "21111". To get this number:
// 		- Swap index 3 with index 4: "11112" -> "11121"
// 		- Swap index 2 with index 3: "11121" -> "11211"
// 		- Swap index 1 with index 2: "11211" -> "12111"
// 		- Swap index 0 with index 1: "12111" -> "21111"

// Example 3:
// 		Input: num = "00123", k = 1
// 		Output: 1
// Explanation: The 1st smallest wonderful number is "00132". To get this number:
// 		- Swap index 3 with index 4: "00123" -> "00132"

// Constraints:
//		2 <= num.length <= 1000
//		1 <= k <= 1000
//		num only consists of digits.

const getMinSwaps = (num: string, k: number): number => {
  const n = num.length;

  // find kth smallest num
  let kth = [...num];
  while (k-- > 0) kth = nextSmallest(kth);

  // find swaps to reach kth smallest num
  let swaps = 0;
  for (let i = 0; i < n; i++) {
    if (num[i] != kth[i]) {
      // find new pos of moved digit in kth
      for (let j = i + 1; j < n; j++) {
        if (num[j] == kth[i]) {
          // new pos found
          swaps += j - i; // swaps needed
          break;
        }
      }
    }
  }
  return swaps;
};

const nextSmallest = (nums: string[]): string[] => {
  let n = nums.length;
  let i = n - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  if (i >= 0) {
    let j = n - 1;
    while (j >= 0 && nums[j] <= nums[i]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  i++;
  let j = n - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  return nums;
};

console.log(getMinSwaps("5489355142", 4)); //  2
console.log(getMinSwaps("11112", 4)); //  4
console.log(getMinSwaps("00123", 1)); //  1

// Googled nextSmallest
// doesn't work for all test cases

function TopVotedGetMinSwaps(num: string, k: number): number {
  let nums: number[] = num.split("").map((a) => parseInt(a));
  let permutation: number[] = [...nums];

  for (let i = 0; i < k; i++) {
    permutation = findSmallestGreater(permutation);
  }

  return findMoves(nums, permutation);
}

function findSmallestGreater(permutation: number[]): number[] {
  let buffer: number[] = [permutation[permutation.length - 1]];
  let index: number = permutation.length - 2;
  let num: number;

  // find the place where the sub array should be updated
  for (; index >= 0; index--) {
    num = permutation[index];

    if (num < buffer[buffer.length - 1]) {
      break;
    }

    buffer.push(num);
  }

  // remove the updated part
  permutation = permutation.slice(0, index);

  // arrange the updated part
  for (let i = 0; i < buffer.length; i++) {
    if (buffer[i] > num) {
      permutation.push(buffer[i]);
      buffer[i] = num;
      break;
    }
  }

  // append to the original array
  permutation.push(...buffer);

  return permutation;
}

function findMoves(nums: number[], permutation: number[]): number {
  let times: number = 0;

  // pop the number to the desired place
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < permutation.length; j++) {
      if (nums[i] == permutation[j]) {
        if (i == j) {
          break;
        }

        times += j - i;
        permutation.splice(j, 1);
        permutation.splice(i, 0, nums[i]);
        break;
      }
    }
  }

  return times;
} */

// Apply Discount Every n Orders					9/20/2024
/* 
// https://leetcode.com/problems/apply-discount-every-n-orders/description/

// There is a supermarket that is frequented by many customers. The products sold at the supermarket are represented as two parallel integer arrays products and prices, where the ith product has an ID of products[i] and a price of prices[i].

// When a customer is paying, their bill is represented as two parallel integer arrays product and amount, where the jth product they purchased has an ID of product[j], and amount[j] is how much of the product they bought. Their subtotal is calculated as the sum of each amount[j] * (price of the jth product).

// The supermarket decided to have a sale. Every nth customer paying for their groceries will be given a percentage discount. The discount amount is given by discount, where they will be given discount percent off their subtotal. More formally, if their subtotal is bill, then they would actually pay bill * ((100 - discount) / 100).

// Implement the Cashier class:

// Cashier(int n, int discount, int[] products, int[] prices) Initializes the object with n, the discount, and the products and their prices.

// double getBill(int[] product, int[] amount) Returns the final total of the bill with the discount applied (if any). Answers within 10-5 of the actual value will be accepted.

// Constraints:
//		1 <= n <= 104
//		0 <= discount <= 100
//		1 <= products.length <= 200
//		prices.length == products.length
//		1 <= products[i] <= 200
//		1 <= prices[i] <= 1000
//		The elements in products are unique.
//		1 <= product.length <= products.length
//		amount.length == product.length
//		product[j] exists in products.
//		1 <= amount[j] <= 1000
//		The elements of product are unique.
//		At most 1000 calls will be made to getBill.
//		Answers within 10^-5 of the actual value will be accepted.

class Cashier {
  n: number;
  discount: number;
  priceLookup = new Map();
  customerNum = 1;

  constructor(
    n: number,
    discount: number,
    products: number[],
    prices: number[]
  ) {
    this.n = n;
    this.discount = (100 - discount) / 100;
    for (let i = 0; i < products.length; i++) {
      this.priceLookup.set(products[i], prices[i]);
    }
  }

  getBill(product: number[], amount: number[]): number {
    let bill = product.reduce(
      (tot, prod, i) => tot + amount[i] * this.priceLookup.get(prod),
      0
    );

    if (this.customerNum == this.n) {
      // apply discount
      bill *= this.discount;
      this.customerNum = 1;
    } else {
      this.customerNum++;
    }

    return bill;
  }
}

const cashier = new Cashier(
  3,
  50,
  [1, 2, 3, 4, 5, 6, 7],
  [100, 200, 300, 400, 300, 200, 100]
);
console.log(cashier.getBill([1, 2], [1, 2])); // return 500.0. 1st customer, no discount.
// bill = 1 * 100 + 2 * 200 = 500.
console.log(cashier.getBill([3, 7], [10, 10])); // return 4000.0. 2nd customer, no discount.
// bill = 10 * 300 + 10 * 100 = 4000.
console.log(cashier.getBill([1, 2, 3, 4, 5, 6, 7], [1, 1, 1, 1, 1, 1, 1])); // return 800.0. 3rd customer, 50% discount.
// Original bill = 1600
// Actual bill = 1600 * ((100 - 50) / 100) = 800.
console.log(cashier.getBill([4], [10])); // return 4000.0. 4th customer, no discount.
console.log(cashier.getBill([7, 3], [10, 10])); // return 4000.0. 5th customer, no discount.
console.log(cashier.getBill([7, 5, 3, 1, 6, 4, 2], [10, 10, 10, 9, 9, 9, 7])); // return 7350.0. 6th customer, 50% discount.
// Original bill = 14700, but with
// Actual bill = 14700 * ((100 - 50) / 100) = 7350.
console.log(cashier.getBill([2, 3, 5], [5, 3, 2])); // return 2500.0.  7th customer, no discount.

class TopVotedCashier {
  // attributes
  private n: number;
  private discount: number;
  private count: number;
  private price: Map<number, number>;

  constructor(
    n: number,
    discount: number,
    products: number[],
    prices: number[]
  ) {
    // set attrs
    this.n = n;
    this.discount = discount;
    this.count = 0;
    this.price = new Map();

    // iterate thru products/prices, and set the price for each product in map
    for (let i = 0; i < prices.length; i++)
      this.price.set(products[i], prices[i]);
  }

  getBill(product: number[], amount: number[]): number {
    // first, get total cost of this order (pre-discount)
    let cost = 0;
    for (let i = 0; i < product.length; i++)
      cost += this.price.get(product[i])! * amount[i];

    // now, determine if this customer gets a discount (they are nth customer)
    return ++this.count % this.n === 0
      ? cost * (1 - this.discount / 100)
      : cost;
  }
}

// same same */

// Find Bottom Left Tree Value					9/21/2024
/* 
// https://leetcode.com/problems/find-bottom-left-tree-value/description/

// Given the root of a binary tree, return the leftmost value in the last row of the tree.

// Example 1:
// 		Input: root = [2,1,3]
// 		Output: 1

// Example 2:
// 		Input: root = [1,2,3,4,null,5,6,null,null,7]
// 		Output: 7

// Constraints:
//		The number of nodes in the tree is in the range [1, 104].
//		-231 <= Node.val <= 231 - 1

const findBottomLeftValue = (root: TreeNode | null): number => {
  let maxDepth = 0;
  let res = root!.val;

  const explore = (depth: number, node: TreeNode | null) => {
    if (node == null) return;
    if (depth > maxDepth) {
      // no need to check if leftmost because...
      maxDepth = depth;
      res = node.val;
    }
    explore(depth + 1, node.left); // we lead with left child
    explore(depth + 1, node.right);
  };
  explore(0, root);

  return res;
};

console.log(findBottomLeftValue(createBinaryTree([2, 1, 3]))); //  1
console.log(
  findBottomLeftValue(createBinaryTree([1, 2, 3, 4, null, 5, 6, null, null, 7]))
); //  7

// bug involving createBinaryTree's last el of array
// will fix on next binary tree question
// works on leetcode

// same as top voted */

// Minimum Flips to Make a OR b Equal to c					9/22/2024
/* 
// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/

// Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).

// Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

// Example 1:
// 		Input: a = 2, b = 6, c = 5
// 		Output: 3
// Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)

// Example 2:
// 		Input: a = 4, b = 2, c = 7
// 		Output: 1

// Example 3:
// 		Input: a = 1, b = 2, c = 3
// 		Output: 0

// Constraints:
//		1 <= a <= 10^9
//		1 <= b <= 10^9
//		1 <= c <= 10^9

const minFlips = (a: number, b: number, c: number): number => {
  let flips = 0;

  while (a > 0 || b > 0 || c > 0) {
    const ab = (a % 2) + (b % 2); // 1s in a and b (0,1,2)

    if (c % 2 == 0) {
      flips += ab; // flip all 1s
    } else {
      flips += ab < 1 ? 1 : 0; // a or b must be 1
    }

    a >>= 1;
    b >>= 1;
    c >>= 1;
  }

  return flips;
};

console.log(minFlips(2, 6, 5)); //  3
console.log(minFlips(4, 2, 7)); //  1
console.log(minFlips(1, 2, 3)); //  0
console.log(minFlips(7, 7, 7)); //  0

function topVotedMinFlips(a: number, b: number, c: number): number {
  const limit = Math.max(a, b, c);
  let check = 1;
  let result = 0;
  while (check <= limit) {
    if (check & c) {
      if (!(check & a) && !(check & b)) {
        result++;
      }
    } else {
      if (check & a) {
        result++;
      }
      if (check & b) {
        result++;
      }
    }
    check *= 2;
  }
  return result;
} */

// Combination Sum III					9/23/2024
/* 
// https://leetcode.com/problems/combination-sum-iii/description/

// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
// - Only numbers 1 through 9 are used.
// - Each number is used at most once.

// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Example 1:
// 		Input: k = 3, n = 7
// 		Output: [[1,2,4]]
// Explanation:
// 		1 + 2 + 4 = 7
// 		There are no other valid combinations.

// Example 2:
// 		Input: k = 3, n = 9
// 		Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 		1 + 2 + 6 = 9
// 		1 + 3 + 5 = 9
// 		2 + 3 + 4 = 9
// 		There are no other valid combinations.

// Example 3:
// 		Input: k = 4, n = 1
// 		Output: []
// Explanation: There are no valid combinations.
// 		Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.

// Constraints:
//		2 <= k <= 9
//		1 <= n <= 60

const combinationSum3 = (k: number, n: number): number[][] => {
  let min = 0;
  for (let i = 1; i <= k; i++) min += i;
  if (min > n) return [];

  let res: number[][] = [];
  const dfs = (i: number, sum: number, count: number, arr: number[]) => {
    if (sum > n || count > k) return;
    if (sum == n && count == k) {
      res.push(arr);
      return;
    }
    while (++i <= 9) {
      dfs(i, sum + i, count + 1, [...arr, i]);
    }
  };
  dfs(0, 0, 0, []);

  return res;
};

console.log(combinationSum3(3, 7)); //  [[1,2,4]]
console.log(combinationSum3(3, 9)); //  [[1,2,6],[1,3,5],[2,3,4]]
console.log(combinationSum3(4, 1)); //  []

function topVotedCombinationSum3(k: number, n: number): number[][] {
  const ans: number[][] = [];
  const t: number[] = [];
  const dfs = (i: number, s: number) => {
    if (s === 0) {
      if (t.length === k) {
        ans.push(t.slice());
      }
      return;
    }
    if (i > 9 || i > s || t.length >= k) {
      return;
    }
    for (let j = i; j <= 9; j++) {
      t.push(j);
      dfs(j + 1, s - j);
      t.pop();
    }
  };
  dfs(1, n);
  return ans;
} */

// Count Number of Teams					9/24/2024
/* 
// https://leetcode.com/problems/count-number-of-teams/description/

// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:
// - Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// - A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).

// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

// Example 1:
// 		Input: rating = [2,5,3,4,1]
// 		Output: 3
// Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).

// Example 2:
// 		Input: rating = [2,1,3]
// 		Output: 0
// Explanation: We can't form any team given the conditions.

// Example 3:
// 		Input: rating = [1,2,3,4]
// 		Output: 4

// Constraints:
//		n == rating.length
//		3 <= n <= 1000
//		1 <= rating[i] <= 105
//		All the integers in rating are unique.

function topVotedNumTeams(rating: number[]): number {
  const dp: [number, number][] = [...new Array(rating.length)].map((_) => [
    0, 0,
  ]);
  //dp[x][0] is the counts of increasing series
  //dp[x][1] is the counts of decreasing series

  let ct = 0;
  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      if (rating[j] > rating[i]) {
        // increaese the ct if j>i
        dp[j][0]++;
        //if there is already do, then i will be the middle index in a series
        ct += dp[i][0];
      }
      if (rating[i] > rating[j]) {
        dp[j][1]++;
        ct += dp[i][1];
      }
    }
  }

  return ct;
}

const numTeams = (rating: number[]): number => {
  const n = rating.length;

  let res = 0;
  let dp = new Array(n).fill(0).map((_) => [0, 0]);
  rating.forEach((val, i) => {
    for (let j = i + 1; j < n; j++) {
      // increasing
      if (rating[j] > val) {
        dp[j][0]++;
        res += dp[i][0];
      }
      // decreasing
      if (rating[j] < val) {
        dp[j][1]++;
        res += dp[i][1];
      }
    }
  });

  return res;
};

console.log(numTeams([2, 5, 3, 4, 1])); //  3
console.log(numTeams([2, 1, 3])); //  0
console.log(numTeams([1, 2, 3, 4])); //  4 */

// Queue Reconstruction by Height					9/25/2024
/* 
// https://leetcode.com/problems/queue-reconstruction-by-height/description/

// You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.

// Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).

// Example 1:
// 		Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// 		Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
// Explanation:
// 		Person 0 has height 5 with no other people taller or the same height in front.
// 		Person 1 has height 7 with no other people taller or the same height in front.
// 		Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
// 		Person 3 has height 6 with one person taller or the same height in front, which is person 1.
// 		Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
// 		Person 5 has height 7 with one person taller or the same height in front, which is person 1.
// 		Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.

// Example 2:
// 		Input: people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]
// 		Output: [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]

// Constraints:
//		1 <= people.length <= 2000
//		0 <= hi <= 106
//		0 <= ki < people.length
//		It is guaranteed that the queue can be reconstructed.

const reconstructQueue = (people: number[][]): number[][] => {
  const n = people.length;

  let inFrontsMap = new Map<number, number[]>();
  for (const [h, k] of people) {
    if (inFrontsMap.has(k)) {
      inFrontsMap.set(k, [...inFrontsMap.get(k)!, h]);
    } else {
      inFrontsMap.set(k, [h]);
    }
  }

  return [...inFrontsMap.entries()]
    .sort()
    .map(([k, hArr]) => hArr.sort().map((h) => [h, k]))
    .flat();
};

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
); //  [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
console.log(
  reconstructQueue([
    [6, 0],
    [5, 0],
    [4, 0],
    [3, 2],
    [2, 2],
    [1, 4],
  ])
); //  [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]

// missed constraint: "'exactly' ki other people in front"
// instead did 'at most' ki people

function topVotedReconstructQueue(people: number[][]): number[][] {
  people = people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  let result: number[][] = [];
  for (let person of people) {
    result.splice(person[1], 0, person);
  }

  return result;
} */

// Kth Smallest Element in a BST					9/26/2024
/* 
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// 		Input: root = [3,1,4,null,2], k = 1
// 		Output: 1

// Example 2:
// 		Input: root = [5,3,6,2,4,null,null,1], k = 3
// 		Output: 3

// Constraints:
//		The number of nodes in the tree is n.
//		1 <= k <= n <= 104
//		0 <= Node.val <= 104

const kthSmallest = (root: TreeNode | null, k: number): number => {
  let idx = 1;
  let min = Infinity;

  const explore = (node: TreeNode | null) => {
    if (!node || min !== Infinity) return;
    explore(node.left); // go to left most (smallest)
    if (idx === k) min = node.val;
    idx++; // moving back up BST
    explore(node.right); // navigate right subtree
  };
  explore(root);

  return min;
};

console.log(kthSmallest(createBinaryTree([3, 1, 4, null, 2]), 1)); //  1
console.log(kthSmallest(createBinaryTree([5, 3, 6, 2, 4, null, null, 1]), 3)); //  3

// same as top voted */

// Keys and Rooms					9/27/2024
/* 
// https://leetcode.com/problems/keys-and-rooms/description/

// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

// Example 1:
// 		Input: rooms = [[1],[2],[3],[]]
// 		Output: true
// Explanation:
// 		We visit room 0 and pick up key 1.
// 		We then visit room 1 and pick up key 2.
// 		We then visit room 2 and pick up key 3.
// 		We then visit room 3.
// 		Since we were able to visit every room, we return true.

// Example 2:
// 		Input: rooms = [[1,3],[3,0,1],[2],[0]]
// 		Output: false
// Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.

// Constraints:
//		n == rooms.length
//		2 <= n <= 1000
//		0 <= rooms[i].length <= 1000
//		1 <= sum(rooms[i].length) <= 3000
//		0 <= rooms[i][j] < n
//		All the values of rooms[i] are unique.

const canVisitAllRooms = (rooms: number[][]): boolean => {
  const n = rooms.length;
  let visited = new Set([0]); // room 0 is unlocked
  let unUsedKeys = new Set(rooms[0]); // keys in room 0

  while (unUsedKeys.size > 0 && visited.size !== n) {
    for (const key of unUsedKeys) {
      if (!visited.has(key)) {
        // first time visiting room
        visited.add(key); // label as visited
        rooms[key].map((k) => unUsedKeys.add(k)); // pick up all keys
        rooms[key] = []; // remove keys from room
      }
      unUsedKeys.delete(key); // remove key to this room
    }
  }

  return visited.size === n;
};

console.log(canVisitAllRooms([[1], [2], [3], []])); //  true
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])); //  false

function topVotedCanVisitAllRooms(rooms: number[][]): boolean {
  let stack: number[] = [0];
  let visited = new Set();

  while (stack.length) {
    let curr = stack.pop()!;
    if (visited.has(curr)) continue;

    stack.push(...rooms[curr]);

    visited.add(curr);
  }

  return visited.size === rooms.length;
} */

// Score of a String					9/28/2024
/* 
// https://leetcode.com/problems/score-of-a-string/description/

// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

// Example 1:
// 		Input: s = "hello"
// 		Output: 13
// Explanation:
// 		The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// Example 2:
// 		Input: s = "zaz"
// 		Output: 50
// Explanation:
// 		The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

// Constraints:
//		2 <= s.length <= 100
//		s consists only of lowercase English letters.

const scoreOfString = (s: string): number => {
  const n = s.length;
  let res = 0;
  let prev = s.charCodeAt(0);
  for (let i = 1; i < n; i++) {
    const cur = s.charCodeAt(i);
    res += Math.abs(prev - cur);
    prev = cur;
  }
  return res;
};

console.log(scoreOfString("hello")); //  13
console.log(scoreOfString("zaz")); //  50 */

// Find the Maximum Achievable Number					9/29/2024
/* 
// https://leetcode.com/problems/find-the-maximum-achievable-number/

// Given two integers, num and t. A number is achievable if it can become equal to num after applying the following operation:
// - Increase or decrease the number by 1, and simultaneously increase or decrease num by 1.

// Return the maximum achievable number after applying the operation at most t times.

// Example 1:
// 		Input: num = 4, t = 1
// 		Output: 6
// Explanation:
// 		Apply the following operation once to make the maximum achievable number equal to num:
// 		Decrease the maximum achievable number by 1, and increase num by 1.

// Example 2:
// 		Input: num = 3, t = 2
// 		Output: 7
// Explanation:
// 		Apply the following operation twice to make the maximum achievable number equal to num:
// 		Decrease the maximum achievable number by 1, and increase num by 1.

// Constraints:
//		1 <= num, t <= 50

const theMaximumAchievableX = (num: number, t: number): number => num + 2 * t;

console.log(theMaximumAchievableX(4, 1)); //  6
console.log(theMaximumAchievableX(3, 2)); //  7 */

// Minimum Suffix Flips					9/30/2024
/* 
// https://leetcode.com/problems/minimum-suffix-flips/description/

// You are given a 0-indexed binary string target of length n. You have another binary string s of length n that is initially set to all zeros. You want to make s equal to target.

// In one operation, you can pick an index i where 0 <= i < n and flip all bits in the inclusive range [i, n - 1]. Flip means changing '0' to '1' and '1' to '0'.

// Return the minimum number of operations needed to make s equal to target.

// Example 1:
// 		Input: target = "10111"
// 		Output: 3
// Explanation: Initially, s = "00000".
// 		Choose index i = 2: "00000" -> "00111"
// 		Choose index i = 0: "00111" -> "11000"
// 		Choose index i = 1: "11000" -> "10111"
// 		We need at least 3 flip operations to form target.

// Example 2:
// 		Input: target = "101"
// 		Output: 3
// Explanation: Initially, s = "000".
// 		Choose index i = 0: "000" -> "111"
// 		Choose index i = 1: "111" -> "100"
// 		Choose index i = 2: "100" -> "101"
// 		We need at least 3 flip operations to form target.

// Example 3:
// 		Input: target = "00000"
// 		Output: 0
// Explanation: We do not need any operations since the initial s already equals target.

// Constraints:
//		n == target.length
//		1 <= n <= 105
//		target[i] is either '0' or '1'.

const minFlips = (t: string): number => {
  const n = t.length;
  let flips = +(t[0] == "1");
  for (let i = 1; i < n; i++) {
    flips += +(t[i] !== t[i - 1]);
  }
  return flips;
};

console.log(minFlips("10111")); //  3
console.log(minFlips("101")); //  3
console.log(minFlips("00000")); //  0 */

// Iterator for Combination					10/1/2024
/* 
// https://leetcode.com/problems/iterator-for-combination/description/

// Design the CombinationIterator class:

// CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.

// next() Returns the next combination of length combinationLength in lexicographical order.

// hasNext() Returns true if and only if there exists a next combination.

// Example 1:
// 		Input
// 		["CombinationIterator", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// 		[["abc", 2], [], [], [], [], [], []]
// 		Output
// 		[null, "ab", true, "ac", true, "bc", false]
// 		Explanation
// 		CombinationIterator itr = new CombinationIterator("abc", 2);
// 		itr.next();    // return "ab"
// 		itr.hasNext(); // return True
// 		itr.next();    // return "ac"
// 		itr.hasNext(); // return True
// 		itr.next();    // return "bc"
// 		itr.hasNext(); // return False

// Constraints:
//		1 <= combinationLength <= characters.length <= 15
//		All the characters of characters are unique.
//		At most 104 calls will be made to next and hasNext.
//		It is guaranteed that all calls of the function next are valid.

class CombinationIterator {
  res: string[];
  i: number;

  constructor(private chars: string, private comboLen: number) {
    this.res = [];
    this.i = 0;

    const dfs = (cur: string, rem: string) => {
      if (cur.length >= comboLen) {
        this.res.push(cur);
        return;
      }

      // pre-build all possible combos
      const n = rem.length;
      for (let i = 0; i < n; i++) {
        dfs(cur + rem[i], rem.slice(i + 1));
      }
    };
    dfs("", chars);
  }

  next(): string {
    return this.res[this.i++]; // retrieve from pre-builts
  }
  hasNext(): boolean {
    return !!this.res[this.i]; // !! converts to boolean
  }
}

const itr = new CombinationIterator("abc", 2);
console.log(itr.next()); // "ab"
console.log(itr.hasNext()); // True
console.log(itr.next()); // "ac"
console.log(itr.hasNext()); // True
console.log(itr.next()); // "bc"
console.log(itr.hasNext()); // False */

// Average Waiting Time					10/2/2024
/* 
// https://leetcode.com/problems/average-waiting-time/

// There is a restaurant with a single chef. You are given an array customers, where customers[i] = [arrivali, timei]:
// - arrivali is the arrival time of the ith customer. The arrival times are sorted in non-decreasing order.
// - timei is the time needed to prepare the order of the ith customer.

// When a customer arrives, he gives the chef his order, and the chef starts preparing it once he is idle. The customer waits till the chef finishes preparing his order. The chef does not prepare food for more than one customer at a time. The chef prepares food for customers in the order they were given in the input.

// Return the average waiting time of all customers. Solutions within 10-5 from the actual answer are considered accepted.

// Example 1:
// 		Input: customers = [[1,2],[2,5],[4,3]]
// 		Output: 5.00000
// Explanation:
// 		1) The first customer arrives at time 1, the chef takes his order and starts preparing it immediately at time 1, and finishes at time 3, so the waiting time of the first customer is 3 - 1 = 2.
// 		2) The second customer arrives at time 2, the chef takes his order and starts preparing it at time 3, and finishes at time 8, so the waiting time of the second customer is 8 - 2 = 6.
// 		3) The third customer arrives at time 4, the chef takes his order and starts preparing it at time 8, and finishes at time 11, so the waiting time of the third customer is 11 - 4 = 7.
// 		So the average waiting time = (2 + 6 + 7) / 3 = 5.

// Example 2:
// 		Input: customers = [[5,2],[5,4],[10,3],[20,1]]
// 		Output: 3.25000
// Explanation:
// 		1) The first customer arrives at time 5, the chef takes his order and starts preparing it immediately at time 5, and finishes at time 7, so the waiting time of the first customer is 7 - 5 = 2.
// 		2) The second customer arrives at time 5, the chef takes his order and starts preparing it at time 7, and finishes at time 11, so the waiting time of the second customer is 11 - 5 = 6.
// 		3) The third customer arrives at time 10, the chef takes his order and starts preparing it at time 11, and finishes at time 14, so the waiting time of the third customer is 14 - 10 = 4.
// 		4) The fourth customer arrives at time 20, the chef takes his order and starts preparing it immediately at time 20, and finishes at time 21, so the waiting time of the fourth customer is 21 - 20 = 1.
// 		So the average waiting time = (2 + 6 + 4 + 1) / 4 = 3.25.

// Constraints:
//		1 <= customers.length <= 105
//		1 <= arrivali, timei <= 104
//		arrivali <= arrivali+1

const averageWaitingTime = (customers: number[][]): number => {
  const n = customers.length;

  let waitTime = 0;
  let prevDone = 0;

  for (let [arriveTime, cookTime] of customers) {
    const overlap = prevDone - arriveTime;
    if (overlap > 0) {
      // adjust for overlapping
      cookTime = overlap + cookTime;
    }
    waitTime += cookTime;
    prevDone = arriveTime + cookTime;
  }

  return waitTime / n;
};

console.log(
  averageWaitingTime([
    [1, 2],
    [2, 5],
    [4, 3],
  ])
); //  5.00000
console.log(
  averageWaitingTime([
    [5, 2],
    [5, 4],
    [10, 3],
    [20, 1],
  ])
); //  3.25000

function topVotedAverageWaitingTime(customers: number[][]): number {
  let currTime = 0;
  let waitingTime = 0;
  for (let [arrival, time] of customers) {
    let cookTime = Math.max(currTime, arrival) + time;
    currTime = cookTime;
    waitingTime += cookTime - arrival;
  }
  return waitingTime / customers.length;
} */

// Append Characters to String to Make Subsequence					10/3/2024
/* 
// https://leetcode.com/problems/append-characters-to-string-to-make-subsequence

// You are given two strings s and t consisting of only lowercase English letters.

// Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.

// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

// Example 1:
// 		Input: s = "coaching", t = "coding"
// 		Output: 4
// Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
// 		Now, t is a subsequence of s ("coachingding").
// 		It can be shown that appending any 3 characters to the end of s will never make t a subsequence.

// Example 2:
// 		Input: s = "abcde", t = "a"
// 		Output: 0
// Explanation: t is already a subsequence of s ("abcde").

// Example 3:
// 		Input: s = "z", t = "abcde"
// 		Output: 5
// Explanation: Append the characters "abcde" to the end of s so that s = "zabcde".
// 		Now, t is a subsequence of s ("zabcde").
// 		It can be shown that appending any 4 characters to the end of s will never make t a subsequence.

// Constraints:
//		1 <= s.length, t.length <= 105
//		s and t consist only of lowercase English letters.

const appendCharacters = (s: string, t: string): number => {
  let i = 0;
  for (const c of s) {
    if (c == t[i]) i++;
  }
  return t.length - i;
};

console.log(appendCharacters("coaching", "coding")); //  4
console.log(appendCharacters("abcde", "a")); //  0
console.log(appendCharacters("z", "abcde")); //  5

// this shouldn't be a medium

const oneLineAppendCharacters = (s: string, t: string): number =>
  t.length - [...s].reduce((i, c) => (i += +(c == t[i])), 0); */

// Lowest Common Ancestor of Deepest Leaves					10/4/2024
/* 
// https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/description/

// Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.

// Recall that:
// - The node of a binary tree is a leaf if and only if it has no children
// - The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
// - The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.

// Example 1:
// 		Input: root = [3,5,1,6,2,0,8,null,null,7,4]
// 		Output: [2,7,4]
// Explanation: We return the node with value 2, colored in yellow in the diagram.
// 		The nodes coloured in blue are the deepest leaf-nodes of the tree.
// 		Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but the depth of nodes 7 and 4 is 3.

// Example 2:
// 		Input: root = [1]
// 		Output: [1]
// Explanation: The root is the deepest node in the tree, and it's the lca of itself.

// Example 3:
// 		Input: root = [0,1,3,null,2]
// 		Output: [2]
// Explanation: The deepest leaf node in the tree is 2, the lca of one node is itself.

// Constraints:
//		The number of nodes in the tree will be in the range [1, 1000].
//		0 <= Node.val <= 1000
//		The values of the nodes in the tree are unique.

const lcaDeepestLeaves = (root: TreeNode | null): TreeNode | null => {
  let maxDepth = -1;
  let res = root;

  const explore = (
    node: TreeNode | null,
    parent: TreeNode | null,
    d: number
  ) => {
    if (node == null) {
      if (d > maxDepth) {
        maxDepth = d;
        res = parent;
      }
      return;
    }

    explore(node?.left || null, node, d + 1);
    explore(node?.right || null, node, d + 1);
  };
  explore(root?.left || null, root, 1);
  explore(root?.right || null, root, 1);

  return res;
};

printBinaryTree(
  lcaDeepestLeaves(createBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]))
); //  [2,7,4]
printBinaryTree(lcaDeepestLeaves(createBinaryTree([1]))); //  [1]
printBinaryTree(lcaDeepestLeaves(createBinaryTree([0, 1, 3, null, 2]))); //  [2]

// doesnt pass all testcases

function topVotedLcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  let res: TreeNode | null = null;
  let deepest: number = 0;

  // helper dfs method to find deepest leaves for each ancestor
  function dfs(root: TreeNode | null, depth: number): number {
    deepest = Math.max(deepest, depth); // set new deepest
    if (!root) return depth; // base case (just return current depth)

    // get deepest level in left and right subtrees
    const deepestLeft = dfs(root.left, depth + 1);
    const deepestRight = dfs(root.right, depth + 1);

    // check if deepest in both left and right ARE the deepest
    if (deepestLeft === deepest && deepest === deepestRight) {
      // this means this current node, has all deepest leaves, so set ancestor
      res = root;
    }

    return Math.max(deepestLeft, deepestRight); // return the deeper subtree
  }
  dfs(root, 0);

  return res;
} */

// Lexicographical Numbers					10/5/2024
/* 
// https://leetcode.com/problems/lexicographical-numbers

// Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.

// You must write an algorithm that runs in O(n) time and uses O(1) extra space.

// Example 1:
// 		Input: n = 13
// 		Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

// Example 2:
// 		Input: n = 2
// 		Output: [1,2]

// Constraints:
//		1 <= n <= 5 * 104

function topVotedLexicalOrder(n: number): number[] {
  const res: number[] = new Array(n);
  let cur = 1;

  for (let i = 0; i < n; i++) {
    res[i] = cur;

    if (cur * 10 <= n) cur *= 10;
    else {
      if (cur >= n) cur = Math.floor(cur / 10);
      cur += 1;
      while (cur % 10 === 0) cur /= 10;
    }
  }

  return res;
}

console.log(topVotedLexicalOrder(13)); //  [1,10,11,12,13,2,3,4,5,6,7,8,9]
console.log(topVotedLexicalOrder(2)); //  [1,2]

// I was trying recursion while *10 and /10 was much simpler/better */

// Divisible and Non-divisible Sums Difference					10/6/2024
/* 
// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference

// You are given positive integers n and m.

// Define two integers as follows:
// - num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// - num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.

// Return the integer num1 - num2.

// Example 1:
// 		Input: n = 10, m = 3
// 		Output: 19
// Explanation: In the given example:
// 		- Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
// 		- Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
// 		We return 37 - 18 = 19 as the answer.

// Example 2:
// 		Input: n = 5, m = 6
// 		Output: 15
// Explanation: In the given example:
// 		- Integers in the range [1, 5] that are not divisible by 6 are [1,2,3,4,5], num1 is the sum of those integers = 15.
// 		- Integers in the range [1, 5] that are divisible by 6 are [], num2 is the sum of those integers = 0.
// 		We return 15 - 0 = 15 as the answer.

// Example 3:
// 		Input: n = 5, m = 1
// 		Output: -15
// Explanation: In the given example:
// 		- Integers in the range [1, 5] that are not divisible by 1 are [], num1 is the sum of those integers = 0.
// 		- Integers in the range [1, 5] that are divisible by 1 are [1,2,3,4,5], num2 is the sum of those integers = 15.
// 		We return 0 - 15 = -15 as the answer.

// Constraints:
//		1 <= n, m <= 1000

const differenceOfSums = (n: number, m: number): number => {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m != 0) res += i; // is not divisible
    else res -= i; // is divisible
  }
  return res;
};

console.log(differenceOfSums(10, 3)); //  19
console.log(differenceOfSums(5, 6)); //  15
console.log(differenceOfSums(5, 1)); //  -15 */

// Groups of Special-Equivalent Strings					10/7/2024
/* 
// https://leetcode.com/problems/groups-of-special-equivalent-strings/

// You are given an array of strings of the same length words.

// In one move, you can swap any two even indexed characters or any two odd indexed characters of a string words[i].

// Two strings words[i] and words[j] are special-equivalent if after any number of moves, words[i] == words[j].
// - For example, words[i] = "zzxy" and words[j] = "xyzz" are special-equivalent because we may make the moves "zzxy" -> "xzzy" -> "xyzz".

// A group of special-equivalent strings from words is a non-empty subset of words such that:
// - Every pair of strings in the group are special equivalent, and
// - The group is the largest size possible (i.e., there is not a string words[i] not in the group such that words[i] is special-equivalent to every string in the group).

// Return the number of groups of special-equivalent strings from words.

// Example 1:
// 		Input: words = ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
// 		Output: 3
// Explanation:
// 		One group is ["abcd", "cdab", "cbad"], since they are all pairwise special equivalent, and none of the other strings is all pairwise special equivalent to these.
// 		The other two groups are ["xyzz", "zzxy"] and ["zzyx"].
// 		Note that in particular, "zzxy" is not special equivalent to "zzyx".

// Example 2:
// 		Input: words = ["abc","acb","bac","bca","cab","cba"]
// 		Output: 3

// Constraints:
//		1 <= words.length <= 1000
//		1 <= words[i].length <= 20
//		words[i] consist of lowercase English letters.
//		All the strings are of the same length

const numSpecialEquivGroups = (words: string[]): number =>
  words.reduce((dict, word) => {
    let even = []; // even indexed chars
    let odd = []; // odd indexed chars
    const n = word.length;

    for (let i = 0; i < n; i++) {
      if (i % 2 == 0) even.push(word[i]);
      else odd.push(word[i]);
    }

    even.sort();
    odd.sort();

    // since sorted, all special-equivalent strings will fall under same key
    dict.add(`${even}/${odd}`);
    return dict;
  }, new Set()).size; // size returns count of distinct groups of special-equivalent strings

console.log(
  numSpecialEquivGroups(["abcd", "cdab", "cbad", "xyzz", "zzxy", "zzyx"])
); //  3
console.log(numSpecialEquivGroups(["abc", "acb", "bac", "bca", "cab", "cba"])); //  3

// 100% Runtime */

// Queens That Can Attack the King					10/8/2024
/* 
// https://leetcode.com/problems/queens-that-can-attack-the-king/

// On a 0-indexed 8 x 8 chessboard, there can be multiple black queens and one white king.

// You are given a 2D integer array queens where queens[i] = [xQueeni, yQueeni] represents the position of the ith black queen on the chessboard. You are also given an integer array king of length 2 where king = [xKing, yKing] represents the position of the white king.

// Return the coordinates of the black queens that can directly attack the king. You may return the answer in any order.

// Example 1:
// 		Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
// 		Output: [[0,1],[1,0],[3,3]]
// Explanation: The diagram above shows the three queens that can directly attack the king and the three queens that cannot attack the king (i.e., marked with red dashes).

// Example 2:
// 		Input: queens = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], king = [3,3]
// 		Output: [[2,2],[3,4],[4,4]]
// Explanation: The diagram above shows the three queens that can directly attack the king and the three queens that cannot attack the king (i.e., marked with red dashes).

// Constraints:
//		1 <= queens.length < 64
//		queens[i].length == king.length == 2
//		0 <= xQueeni, yQueeni, xKing, yKing < 8
//		All the given positions are unique.

const queensAttacktheKing = (
  queens: number[][],
  king: number[]
): number[][] => {
  // O(1) lookup
  const queensSet = queens.reduce(
    (dict, q) => dict.add(`${q[0]},${q[1]}`),
    new Set()
  );

  // from king, work outwards, stopping if queen is encountered
  const [xKing, yKing] = king;
  let res: number[][] = [];

  // straigths
  // up
  for (let y = yKing - 1; y >= 0; y--) {
    if (queensSet.has(`${xKing},${y}`)) {
      res.push([xKing, y]);
      break;
    }
  }
  // right
  for (let x = xKing + 1; x < 8; x++) {
    if (queensSet.has(`${x},${yKing}`)) {
      res.push([x, yKing]);
      break;
    }
  }
  // down
  for (let y = yKing + 1; y < 8; y++) {
    if (queensSet.has(`${xKing},${y}`)) {
      res.push([xKing, y]);
      break;
    }
  }
  // left
  for (let x = xKing - 1; x >= 0; x--) {
    if (queensSet.has(`${x},${yKing}`)) {
      res.push([x, yKing]);
      break;
    }
  }

  // diagonals
  // up + right
  for (let y = yKing - 1, x = xKing + 1; y >= 0 && x < 8; y--, x++) {
    if (queensSet.has(`${x},${y}`)) {
      res.push([x, y]);
      break;
    }
  }
  // down + right
  for (let y = yKing + 1, x = xKing + 1; y < 8 && x < 8; y++, x++) {
    if (queensSet.has(`${x},${y}`)) {
      res.push([x, y]);
      break;
    }
  }
  // down + left
  for (let y = yKing + 1, x = xKing - 1; y < 8 && x >= 0; y++, x--) {
    if (queensSet.has(`${x},${y}`)) {
      res.push([x, y]);
      break;
    }
  }
  // up + left
  for (let y = yKing - 1, x = xKing - 1; y >= 0 && x >= 0; y--, x--) {
    if (queensSet.has(`${x},${y}`)) {
      res.push([x, y]);
      break;
    }
  }

  return res;
};

console.log(
  queensAttacktheKing(
    [
      [0, 1],
      [1, 0],
      [4, 0],
      [0, 4],
      [3, 3],
      [2, 4],
    ],
    [0, 0]
  )
); //  [[0,1],[1,0],[3,3]]
console.log(
  queensAttacktheKing(
    [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 4],
      [3, 5],
      [4, 4],
      [4, 5],
    ],
    [3, 3]
  )
); //  [[2,2],[3,4],[4,4]]

// Looks terrible, but is O(n)
// Could definitely clean it up with a function

function topVotedQueensAttacktheKing(
  queens: number[][],
  king: number[]
): number[][] {
  const result: number[][] = [];

  const findTheQueens = (direction: number[]) => {
    let [x, y] = king;

    while (x >= 0 && x < 8 && y >= 0 && y < 8) {
      x += direction[0];
      y += direction[1];
      if (queens.some((quinn) => quinn[0] === x && quinn[1] === y)) {
        result.push([x, y]);
        break;
      }
    }
  };

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i !== 0 || j !== 0) {
        findTheQueens([i, j]); //from king move 8 directions to find the queens
      }
    }
  }
  return result;
} */

// Construct Smallest Number From DI String					10/9/2024
/* 
// https://leetcode.com/problems/construct-smallest-number-from-di-string/

// You are given a 0-indexed string pattern of length n consisting of the characters 'I' meaning increasing and 'D' meaning decreasing.

// A 0-indexed string num of length n + 1 is created using the following conditions:
// - num consists of the digits '1' to '9', where each digit is used at most once.
// - If pattern[i] == 'I', then num[i] < num[i + 1].
// - If pattern[i] == 'D', then num[i] > num[i + 1].

// Return the lexicographically smallest possible string num that meets the conditions.

// Example 1:
// 		Input: pattern = "IIIDIDDD"
// 		Output: "123549876"
// Explanation:
// 		At indices 0, 1, 2, and 4 we must have that num[i] < num[i+1].
// 		At indices 3, 5, 6, and 7 we must have that num[i] > num[i+1].
// 		Some possible values of num are "245639871", "135749862", and "123849765".
// 		It can be proven that "123549876" is the smallest possible num that meets the conditions.
// 		Note that "123414321" is not possible because the digit '1' is used more than once.

// Example 2:
// 		Input: pattern = "DDD"
// 		Output: "4321"
// Explanation:
// 		Some possible values of num are "9876", "7321", and "8742".
// 		It can be proven that "4321" is the smallest possible num that meets the conditions.

// Constraints:
//		1 <= pattern.length <= 8
//		pattern consists of only the letters 'I' and 'D'.

const smallestNumber = (pattern: string): string => {
  const n = pattern.length;
  let found: boolean = false;
  let res: string = "";

  const dfs = (cur: string, idx: number, rem: string) => {
    // test if string is valid (idx leads cur by 1)
    if (pattern[idx] == "I") {
      if (cur[idx] > cur[idx + 1]) return; // increase not respected
    } else {
      if (cur[idx] < cur[idx + 1]) return; // decrease not respected
    }

    if (idx == n - 1) {
      // end reached, sol found
      found = true;
      res = cur;
    }

    // favor smallest possible num to achieve lexicographically smallest string
    for (let i = 0; i < rem.length && !found; i++) {
      dfs(cur + rem[i], idx + 1, rem.substring(0, i) + rem.substring(i + 1));
    }
  };

  // start with 2 digits
  const digits = "123456789";
  for (let i = 0; i < 9 && !found; i++) {
    for (let j = 0; j < 9 && !found; j++) {
      if (i != j) {
        let rem = digits.replace(digits[i], "").replace(digits[j], "");
        dfs(`${digits[i]}${digits[j]}`, 0, rem);
      }
    }
  }

  return res;
};

console.log(smallestNumber("IIIDIDDD")); //  "123549876"
console.log(smallestNumber("DDD")); //  "4321"

function topVotedSmallestNumber(pattern: string): string {
  let idx = -1;
  const { length } = pattern;
  const nums = Array(length + 1)
    .fill(0)
    .map((_, i) => i + 1);

  const swap = (start: number, end: number, nums: number[]) => {
    for (let i = 0; i < (start - end) / 2; i++) {
      [nums[start - i], nums[end + i]] = [nums[end + i], nums[start - i]];
    }

    idx = -1;
  };

  for (let i = length; i >= 0; i--) {
    if (pattern[i] === "D" && idx === -1) idx = i;
    if (pattern[i] === "I" && idx > -1) swap(idx + 1, i + 1, nums);
    if (i === 0 && pattern[i] === "D" && idx > -1) swap(idx + 1, i, nums);
  }

  return nums.join("");
} */

// The k-th Lexicographical String of All Happy Strings of Length n					10/10/2024

// https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/description/

// A happy string is a string that:
// - consists only of letters of the set ['a', 'b', 'c'].
// - s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).

// For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

// Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

// Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

// Example 1:
// 		Input: n = 1, k = 3
// 		Output: "c"
// Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".

// Example 2:
// 		Input: n = 1, k = 4
// 		Output: ""
// Explanation: There are only 3 happy strings of length 1.

// Example 3:
// 		Input: n = 3, k = 9
// 		Output: "cab"
// Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"

// Constraints:
//		1 <= n <= 10
//		1 <= k <= 100

const getHappyString = (n: number, k: number): string => {
  let found = false;
  let res = "";

  const dfs = (cur: string, n: number) => {
    if (found) return;

    if (n == 0) {
      if (k == 0) {
        res = cur;
        found = true;
      } else k--;
    }

    if (n > 0 && !found) {
      for (const c of ["a", "b", "c"]) {
        if (c != cur[cur.length - 1]) dfs(cur + c, n - 1);
      }
    }
  };
  k--;
  for (const c of ["a", "b", "c"]) dfs(c, n - 1);

  return found ? res : "";
};

console.log(getHappyString(1, 3)); //  "c"
console.log(getHappyString(1, 4)); //  ""
console.log(getHappyString(3, 9)); //  "cab"

// same as top voted
