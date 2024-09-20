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

// same same
