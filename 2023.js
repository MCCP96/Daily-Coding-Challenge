// H-Index II         1/1/2023
/* 
// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper and citations is sorted in an ascending order, return compute the researcher's h-index.

// According to the definition of h-index on Wikipedia: A scientist has an index h if h of their n papers have at least h citations each, and the other n − h papers have no more than h citations each.

// If there are several possible values for h, the maximum one is taken as the h-index.

// You must write an algorithm that runs in logarithmic time.

// Example 1:
//    Input: citations = [0,1,3,5,6]
//    Output: 3
// Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

// Example 2:
//    Input: citations = [1,2,100]
//    Output: 2

// Constraints:
//    n == citations.length
//    1 <= n <= 105
//    0 <= citations[i] <= 1000
//    citations is sorted in ascending order.

const hIndex = (citations, i = 0) => {
  citations.sort((a, b) => b - a);
  for (; i < citations.length; i++) {
    if (citations[i] < i + 1) return i;
  }
  return i;
};
console.log(hIndex([0, 1, 3, 5, 6])); // 3
console.log(hIndex([1, 2, 100])); // 2

// Same as the H-Index I solved two days ago
// Probably not running in logarithmic time

var topVotedHIndex = function (citations) {
  let start = 0,
    end = citations.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (citations.length - mid - 1 < citations[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return citations.length - start;
};

// Nice! */

// Maximum Enemy Forts That Can Be Captured         1/2/2023
/* 
// You are given a 0-indexed integer array forts of length n representing the positions of several forts. forts[i] can be -1, 0, or 1 where:

// -1 represents there is no fort at the ith position.
// 0 indicates there is an enemy fort at the ith position.
// 1 indicates the fort at the ith the position is under your command.
// Now you have decided to move your army from one of your forts at position i to an empty position j such that:

// 0 <= i, j <= n - 1
// The army travels over enemy forts only. Formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0.
// While moving the army, all the enemy forts that come in the way are captured.

// Return the maximum number of enemy forts that can be captured. In case it is impossible to move your army, or you do not have any fort under your command, return 0.

// Example 1:,
//    Input: forts = [1,0,0,-1,0,0,0,0,1]
//    Output: 4
// Explanation:
// - Moving the army from position 0 to position 3 captures 2 enemy forts, at 1 and 2.
// - Moving the army from position 8 to position 3 captures 4 enemy forts.
// Since 4 is the maximum number of enemy forts that can be captured, we return 4.

// Example 2:
//    Input: forts = [0,0,1,-1]
//    Output: 0
// Explanation: Since no enemy fort can be captured, 0 is returned.

// Constraints:
//    1 <= forts.length <= 1000
//    -1 <= forts[i] <= 1

const captureForts = (forts, count = 0) =>
  forts.slice(Math.min(forts.indexOf(1), forts.indexOf(-1))).reduce((a, c) => {
    if (c == 1 || c == -1) {
      a = Math.max(a, count);
      count = 0;
    } else count++;
    return a;
  }, 0);

console.log(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1])); // 4
console.log(captureForts([0, 0, 1, -1])); // 0
console.log(captureForts([-1, 0, -1, 0, 1, 1, 1, -1, -1, -1])); // 1

// OK, doesn't work for all test cases

var topVotedCaptureForts = function (forts) {
  forts = forts.map((e) => e - -1).join("");
  const front = forts.match(/2(1+)0/g) || [];
  const back = forts.match(/0(1+)2/g) || [];
  const res = [...front, ...back].map((e) => e.length - 2);
  return res.length ? Math.max(...res) : 0;
};

// Though about Regex, but didn't want to mess with the expressions */

// Walking Robot Simulation         1/3/2023
/* 
// A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot can receive a sequence of these three possible types of commands:

// -2: Turn left 90 degrees.
// -1: Turn right 90 degrees.
// 1 <= k <= 9: Move forward k units, one unit at a time.
// Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi). If the robot runs into an obstacle, then it will instead stay in its current location and move on to the next command.

// Return the maximum Euclidean distance that the robot ever gets from the origin squared (i.e. if the distance is 5, return 25).

// Note:
//    North means +Y direction.
//    East means +X direction.
//    South means -Y direction.
//    West means -X direction.

// Example 1:
//    Input: commands = [4,-1,3], obstacles = []
//    Output: 25
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 3 units to (3, 4).
// The furthest point the robot ever gets from the origin is (3, 4), which squared is 32 + 42 = 25 units away.

// Example 2:
//    Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
//    Output: 65
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 1 unit and get blocked by the obstacle at (2, 4), robot is at (1, 4).
// 4. Turn left.
// 5. Move north 4 units to (1, 8).
// The furthest point the robot ever gets from the origin is (1, 8), which squared is 12 + 82 = 65 units away.

// Example 3:
//    Input: commands = [6,-1,-1,6], obstacles = []
//    Output: 36
// Explanation: The robot starts at (0, 0):
// 1. Move north 6 units to (0, 6).
// 2. Turn right.
// 3. Turn right.
// 4. Move south 6 units to (0, 0).
// The furthest point the robot ever gets from the origin is (0, 6), which squared is 62 = 36 units away.

// Constraints:
//    1 <= commands.length <= 104
//    commands[i] is either -2, -1, or an integer in the range [1, 9].
//    0 <= obstacles.length <= 104
//    -3 * 104 <= xi, yi <= 3 * 104
//    The answer is guaranteed to be less than 231.

const robotSim = (cmd, obst) => {
  obst = obst.map((c) => ({ x: c[0], y: c[1] }));
  const opp = { x: "y", y: "x" };
  const turnRight = { "+y": "+x", "+x": "-y", "-y": "-x", "-x": "+y" };
  const turnLeft = { "+y": "-x", "-x": "-y", "-y": "+x", "+x": "+y" };
  let dir = "+y";

  let furthest = 0;
  const end = cmd.reduce(
    (a, c) => {
      if (c > 0) {
        for (let i = 0; i < obst.length; i++) {
          if (obst[i][opp[dir[1]]] == a[opp[dir[1]]]) {
            c = Math.abs(c - obst[i][dir[1]] - 1);
            break;
          }
        }
        a[dir[1]] += +`${dir[0]}${c}`;
        furthest = Math.max(furthest, a.x ** 2 + a.y ** 2);
      } else if (c == -1) dir = turnRight[dir];
      else if (c == -2) dir = turnLeft[dir];
      return a;
    },
    { x: 0, y: 0 }
  );

  return furthest;
};
console.log(robotSim([4, -1, 3], [])); // 25
console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]])); // 65
console.log(robotSim([6, -1, -1, 6], [])); // 36

// Gave it my best shot, doesn't work for all test cases
// My obstacle detection is pretty janky

const topVotedRobotSim = (commands, obstacles) => {
  let obstacle = {};
  let x = 0;
  let y = 0;
  let max = 0;

  // 0 = north
  // 1 = east
  // 2 = south
  // 3 = west

  let direction = 0;
  for (let i = 0; i < obstacles.length; i++) {
    obstacle[obstacles[i]] = true;
  }
  console.log(obstacle);

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] == -1) {
      direction = (direction + 1) % 4; // updated
    } else if (commands[i] == -2) {
      direction = (direction - 1 + 4) % 4;
    } else {
      while (commands[i]--) {
        let previousX = x;
        let previousY = y;

        if (direction === 0) y++;
        if (direction === 1) x++;
        if (direction === 2) y--;
        if (direction === 3) x--;
        if (obstacle[x + "," + y]) {
          [x, y] = [previousX, previousY];
          break;
        }
      }
    }
    max = Math.max(max, x ** 2 + y ** 2);
  }
  return max;
};

// Could've definitely made it easier on myself by doing the if(direction === x) statements instead of my dictionnary approach
// Such simple yet effective obstacle detection too */

// Words Within Two Edits of Dictionary         1/4/2023
/* 
// You are given two string arrays, queries and dictionary. All words in each array comprise of lowercase English letters and have the same length.

// In one edit you can take a word from queries, and change any letter in it to any other letter. Find all words from queries that, after a maximum of two edits, equal some word from dictionary.

// Return a list of all words from queries, that match with some word from dictionary after a maximum of two edits. Return the words in the same order they appear in queries.

// Example 1:
//    Input: queries = ["word","note","ants","wood"], dictionary = ["wood","joke","moat"]
//    Output: ["word","note","wood"]
// Explanation:
// - Changing the 'r' in "word" to 'o' allows it to equal the dictionary word "wood".
// - Changing the 'n' to 'j' and the 't' to 'k' in "note" changes it to "joke".
// - It would take more than 2 edits for "ants" to equal a dictionary word.
// - "wood" can remain unchanged (0 edits) and match the corresponding dictionary word.
// Thus, we return ["word","note","wood"].

// Example 2:
//    Input: queries = ["yes"], dictionary = ["not"]
//    Output: []
// Explanation:
// Applying any two edits to "yes" cannot make it equal to "not". Thus, we return an empty array.

// Constraints:
//    1 <= queries.length, dictionary.length <= 100
//    n == queries[i].length == dictionary[j].length
//    1 <= n <= 100
//    All queries[i] and dictionary[j] are composed of lowercase English letters.

const twoEditWords = (q, d) =>
  q.reduce((a, c) => {
    for (let i = 0; i < d.length; i++) {
      let dif = 0;
      for (let j = 0; j < d[i].length; j++) {
        if (c[j] !== d[i][j]) dif++;
        if (dif > 2) break;
      }
      if (dif <= 2) {
        a.push(c);
        break;
      }
    }
    return a;
  }, []);

console.log(
  twoEditWords(["word", "note", "ants", "wood"], ["wood", "joke", "moat"])
); // ["word","note","wood"]
console.log(twoEditWords(["yes"], ["not"])); // []

// Decent runtime

var topVotedTwoEditWords = function (queries, dictionary) {
  const res = [],
    n = queries[0].length;

  for (const q of queries) {
    if (helper(q)) res.push(q);
  }
  return res;

  function helper(q_word) {
    for (const w of dictionary) {
      if (diffLessThanTwo(q_word, w)) return true;
    }
    return false;
  }

  function diffLessThanTwo(w1, w2) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (cnt > 2) return false;
      if (w1[i] !== w2[i]) cnt++;
    }
    return cnt <= 2;
  }
};

// Similar logic */

// Minimum Penalty for a Shop         1/5/2023
/* 
// You are given the customer visit log of a shop represented by a 0-indexed string customers consisting only of characters 'N' and 'Y':

// if the ith character is 'Y', it means that customers come at the ith hour
// whereas 'N' indicates that no customers come at the ith hour.
// If the shop closes at the jth hour (0 <= j <= n), the penalty is calculated as follows:

// For every hour when the shop is open and no customers come, the penalty increases by 1.
// For every hour when the shop is closed and customers come, the penalty increases by 1.
// Return the earliest hour at which the shop must be closed to incur a minimum penalty.

// Note that if a shop closes at the jth hour, it means the shop is closed at the hour j.

// Example 1:
//    Input: customers = "YYNY"
//    Output: 2
// Explanation:
// - Closing the shop at the 0th hour incurs in 1+1+0+1 = 3 penalty.
// - Closing the shop at the 1st hour incurs in 0+1+0+1 = 2 penalty.
// - Closing the shop at the 2nd hour incurs in 0+0+0+1 = 1 penalty.
// - Closing the shop at the 3rd hour incurs in 0+0+1+1 = 2 penalty.
// - Closing the shop at the 4th hour incurs in 0+0+1+0 = 1 penalty.
// Closing the shop at 2nd or 4th hour gives a minimum penalty. Since 2 is earlier, the optimal closing time is 2.

// Example 2:
//    Input: customers = "NNNNN"
//    Output: 0
// Explanation: It is best to close the shop at the 0th hour as no customers arrive.

// Example 3:
//    Input: customers = "YYYY"
//    Output: 4
// Explanation: It is best to close the shop at the 4th hour as customers arrive at each hour.

// Constraints:
//    1 <= customers.length <= 105
//    customers consists only of characters 'Y' and 'N'.

const bestClosingTime = (cust) => {
  const penaltyOpen = (i) => cust.substring(0, i).replaceAll("Y", "").length;
  const penaltyClosed = (i) => cust.substring(i).replaceAll("N", "").length;
  let min = { time: 0, penalty: Number.MAX_SAFE_INTEGER };

  for (let i = 0; i <= cust.length; i++) {
    const totPenaltyL = penaltyOpen(i) + penaltyClosed(i);
    if (totPenaltyL < min.penalty) min = { time: i, penalty: totPenaltyL };
    if (min.penalty === 0) break;
  }

  return min.time;
};

console.log(bestClosingTime("YYNY")); // 2
console.log(bestClosingTime("NNNNN")); // 0
console.log(bestClosingTime("YYYY")); // 4

// Works but exceeds runtime limit on larger test cases
// Running the string methods on each iteration is weighing me down

var topVotedBestClosingTime = function (customers) {
  let max = 0;
  let balance = 0;
  let answer = 0;
  for (var i = 0; i < customers.length; i++) {
    if (customers[i] === "Y") {
      balance++;
    } else balance--;
    if (balance > max) {
      max = balance;
      answer = i + 1;
    }
  }
  return answer;
}; */

// Hand of Straights          1/6/2023
/* 
// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

// Example 1:
//    Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
//    Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

// Example 2:
//    Input: hand = [1,2,3,4,5], groupSize = 4
//    Output: false
// Explanation: Alice's hand can not be rearranged into groups of 4.

// Constraints:
//    1 <= hand.length <= 104
//    0 <= hand[i] <= 109
//    1 <= groupSize <= hand.length

const isNStraightHand = (hand, size) => {
  if (hand.length % size !== 0) return false;
  hand.sort((a, b) => a - b);
  while (hand.length > 0) {
    let cur = hand.shift();
    for (let i = 0; i < size - 1; i++) {
      const index = hand.findIndex((x) => x == cur + 1);
      if (index == -1) return false;
      cur = hand.splice(index, 1)[0];
    }
  }
  return true;
};

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)); // true
console.log(isNStraightHand([1, 2, 3, 4, 5], 4)); // false
console.log(isNStraightHand([8, 10, 12], 3)); // false

var topVotedIsNStraightHand = function (hand, W) {
  if (hand.length % W) return false;
  const map = hand.reduce(
    (map, curr) => map.set(curr, map.get(curr) + 1 || 1),
    new Map()
  );
  const checkValid = (key) => {
    let count = map.get(key);
    while (count) {
      for (let i = key; i < key + W; i++) {
        if (!map.has(i)) return false;
        else if (map.get(i) === 1) map.delete(i);
        else map.set(i, map.get(i) - 1);
      }
      count--;
    }
    return true;
  };
  return [...map.keys()].sort((a, b) => a - b).every((k) => checkValid(k));
}; */

// Rabbits in Forest          1/7/2023
/* 
// There is a forest with an unknown number of rabbits. We asked n rabbits "How many rabbits have the same color as you?" and collected the answers in an integer array answers where answers[i] is the answer of the ith rabbit.

// Given the array answers, return the minimum number of rabbits that could be in the forest.

// Example 1:
//    Input: answers = [1,1,2]
//    Output: 5
// Explanation:
// The two rabbits that answered "1" could both be the same color, say red.
// The rabbit that answered "2" can't be red or the answers would be inconsistent.
// Say the rabbit that answered "2" was blue.
// Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
// The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

// Example 2:
//    Input: answers = [10,10,10]
//    Output: 11

// Constraints:
//    1 <= answers.length <= 1000
//    0 <= answers[i] < 1000

const numRabbits = (ans) => {
  let tot = ans.length;
  let count = ans.reduce((a, c) => {
    a[c] ? a[c]++ : (a[c] = 1);
    return a;
  }, {});
  return Object.entries(count)
    .filter((x) => x[0] != 0)
    .reduce((a, c) => {
      let dif = Math.abs(+c[0] - c[1]);
      return a + dif + (c[0] < c[1] ? -1 : 1);
    }, tot);
};

console.log(numRabbits([1, 1, 2])); // 5
console.log(numRabbits([10, 10, 10])); // 11
console.log(numRabbits([0, 0, 1, 1, 1])); // 6
console.log(numRabbits([1, 0, 1, 0, 0])); // 5

var topVotedNumRabbits = function (answers) {
  const map = new Map();
  let tot = 0;

  for (const answer of answers) {
    if (answer === 0) {
      tot++;
      continue;
    }

    if (!map.has(answer)) {
      map.set(answer, answer);
      tot += answer + 1;
    } else {
      map.set(answer, map.get(answer) - 1);

      if (map.get(answer) === 0) map.delete(answer);
    }
  }
  return tot;
}; */

// Shortest Distance to Target String in a Circular Array         1/8/2023
/* 
// You are given a 0-indexed circular string array words and a string target. A circular array means that the array's end connects to the array's beginning.

// Formally, the next element of words[i] is words[(i + 1) % n] and the previous element of words[i] is words[(i - 1 + n) % n], where n is the length of words.
// Starting from startIndex, you can move to either the next word or the previous word with 1 step at a time.

// Return the shortest distance needed to reach the string target. If the string target does not exist in words, return -1.

// Example 1:
//    Input: words = ["hello","i","am","leetcode","hello"], target = "hello", startIndex = 1
//    Output: 1
// Explanation: We start from index 1 and can reach "hello" by
// - moving 3 units to the right to reach index 4.
// - moving 2 units to the left to reach index 4.
// - moving 4 units to the right to reach index 0.
// - moving 1 unit to the left to reach index 0.
// The shortest distance to reach "hello" is 1.

// Example 2:
//    Input: words = ["a","b","leetcode"], target = "leetcode", startIndex = 0
//    Output: 1
// Explanation: We start from index 0 and can reach "leetcode" by
// - moving 2 units to the right to reach index 3.
// - moving 1 unit to the left to reach index 3.
// The shortest distance to reach "leetcode" is 1.

// Example 3:
//    Input: words = ["i","eat","leetcode"], target = "ate", startIndex = 0
//    Output: -1
// Explanation: Since "ate" does not exist in words, we return -1.

// Constraints:
//    1 <= words.length <= 100
//    1 <= words[i].length <= 100
//    words[i] and target consist of only lowercase English letters.
//    0 <= startIndex < words.length

const closetTarget = (w, t, s) => {
  w.push(...w.splice(0, s));
  return Math.min(w.indexOf(t), w.length - w.lastIndexOf(t));
};

console.log(
  closetTarget(["hello", "i", "am", "leetcode", "hello"], "hello", 1)
); // 1
console.log(closetTarget(["a", "b", "leetcode"], "leetcode", 0)); // 1
console.log(closetTarget(["i", "eat", "leetcode"], "ate", 0)); // -1

// Short, but not great runtime

var topVotedClosetTarget = function (words, target, startIndex) {
  let left = startIndex;
  let right = startIndex;
  let step = 0;
  let n = words.length;

  while (step <= n) {
    if (words[left] === target || words[right] === target) {
      return step;
    } else {
      right = (right + 1) % n;
      left = (left - 1 + n) % n;
    }
    step++;
  }
  return -1;
}; */

// Adding Two Negabinary Numbers          1/9/2023
/* 
// Given two numbers arr1 and arr2 in base -2, return the result of adding them together.

// Each number is given in array format:  as an array of 0s and 1s, from most significant bit to least significant bit.  For example, arr = [1,1,0,1] represents the number (-2)^3 + (-2)^2 + (-2)^0 = -3.  A number arr in array, format is also guaranteed to have no leading zeros: either arr == [0] or arr[0] == 1.

// Return the result of adding arr1 and arr2 in the same format: as an array of 0s and 1s with no leading zeros.

// Example 1:
//    Input: arr1 = [1,1,1,1,1], arr2 = [1,0,1]
//    Output: [1,0,0,0,0]
// Explanation: arr1 represents 11, arr2 represents 5, the output represents 16.

// Example 2:
//    Input: arr1 = [0], arr2 = [0]
//    Output: [0]

// Example 3:
//    Input: arr1 = [0], arr2 = [1]
//    Output: [1]

// Constraints:
//    1 <= arr1.length, arr2.length <= 1000
//    arr1[i] and arr2[i] are 0 or 1
//    arr1 and arr2 have no leading zeros

const addNegabinary = (a1, a2) => {
  const count = (a) =>
    a.reverse().reduce((a, c, i) => (c == 0 ? a : (a += (0 - 2) ** i)), 0);
  return (count(a1) + count(a2)).toString(2).split("");
};

console.log(addNegabinary([1, 1, 1, 1, 1], [1, 0, 1])); // [1,0,0,0,0]
console.log(addNegabinary([0], [0])); // [0]
console.log(addNegabinary([0], [1])); // [1]
console.log(addNegabinary([0], [1, 0])); // [1,0]

// Doesn't work for all test cases

function addNegabinary(a, b) {
  (a = a.reverse()), (b = b.reverse());

  let c = dp(Math.max(a.length, b.length));

  while (c.length > 1 && c[0] == 0) {
    c.shift();
  }

  return c;

  function dp(max, r = []) {
    for (let i = 0; i <= max; i++) {
      r[i] = (a[i] || 0) + (b[i] || 0) + (r[i] || 0);

      if (r[i] == -1) {
        r[i] = 1;
        r[i + 1] = 1;
        continue;
      }

      if (r[i] == 2) {
        r[i] = 0;
        r[i + 1] = -1;
        continue;
      }

      if (r[i] == 3) {
        r[i] = 1;
        r[i + 1] = -1;
        continue;
      }
    }
    return r.reverse();
  }
} */

// Count the Digits That Divide a Number          1/10/2023
/* 
// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

// Example 1:
//    Input: num = 7
//    Output: 1
// Explanation: 7 divides itself, hence the answer is 1.

// Example 2:
//    Input: num = 121
//    Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.

// Example 3:
//    Input: num = 1248
//    Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.

// Constraints:
//    1 <= num <= 109
//    num does not contain 0 as one of its digits.

const countDigits = (num) =>
  [...`${num}`].reduce((a, c) => (num % +c ? a : ++a), 0);

console.log(countDigits(7)); // 1
console.log(countDigits(121)); // 2
console.log(countDigits(1248)); // 4

// Better than 100% runtimes
// Same as top voted */

// Find Minimum in Rotated Sorted Array         1/11/2023
/* 
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:
//    Input: nums = [3,4,5,1,2]
//    Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Example 2:
//    Input: nums = [4,5,6,7,0,1,2]
//    Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

// Example 3:
//    Input: nums = [11,13,15,17]
//    Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

// Constraints:
//    n == nums.length
//    1 <= n <= 5000
//    -5000 <= nums[i] <= 5000
//    All the integers of nums are unique.
//    nums is sorted and rotated between 1 and n times.

const easyFindMin = (nums) => Math.min(...nums);

const findMin = (nums) => {
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    nums[mid] > nums[r] ? (l = mid + 1) : (r = mid);
  }
  return nums[l];
};

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11

// Same as top voted
// ~~ can be used instead of Math.floor for better runtime */

// Repeated DNA Sequences         1/12/2023
/* 
// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

// Example 1:
//    Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
//    Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:
//    Input: s = "AAAAAAAAAAAAA"
//    Output: ["AAAAAAAAAA"]

// Constraints:
//    1 <= s.length <= 10^5
//    s[i] is either 'A', 'C', 'G', or 'T'.

const findRepeatedDnaSequences = (s) => {
  let ans = new Set();
  if (s.length <= 10) return [];
  for (let i = 0; i < s.length - 10; i++) {
    let [cur, rest] = [s.substring(i, i + 10), s.substring(i + 1)];
    if (rest.includes(cur)) ans.add(cur);
  }
  return [...ans];
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); // ["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA")); // ["AAAAAAAAAA"]

// Terrible runtime

var topVotedFindRepeatedDnaSequences = function (s) {
  let curr = s.slice(0, 10);
  const seen = new Set([curr]);
  const res = new Set();

  for (let i = 10; i < s.length; i++) {
    curr = curr.slice(1) + s[i];
    if (seen.has(curr)) res.add(curr);
    seen.add(curr);
  }
  return [...res];
};

// Saves checking on every iteration by only adding a string if it's been seen before */

// Course Schedule          1/13/2023
/* 
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
//    Input: numCourses = 2, prerequisites = [[1,0]]
//    Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
//    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
//    Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Constraints:
//    1 <= numCourses <= 2000
//    0 <= prerequisites.length <= 5000
//    prerequisites[i].length == 2
//    0 <= ai, bi < numCourses
//    All the pairs prerequisites[i] are unique.

let visiting;
let visited;
let graph;

const topVotedCanFinish = (numCourses, prerequisites) => {
  graph = new Map();
  visiting = new Set();
  visited = new Set();

  for (let [v, e] of prerequisites) {
    if (graph.has(v)) {
      let edges = graph.get(v);
      edges.push(e);
      graph.set(v, edges);
    } else {
      graph.set(v, [e]);
    }
  }

  for (const [v, e] of graph) {
    if (DFS(v)) {
      return false; //if cyclic it will not finish so it is false
    }
  }

  return true;
};

var DFS = function (v) {
  visiting.add(v);
  let edges = graph.get(v); // get all the edges to explore

  if (edges) {
    //console.log(edges)
    for (let e of edges) {
      if (visited.has(e)) {
        //skip if it is explored already
        continue;
      }

      if (visiting.has(e)) {
        //found e is being explored
        return true;
      }

      if (DFS(e)) {
        // DFS deeper if this e is cyclic
        return true;
      }
    }
  }

  visiting.delete(v); // remove from visiting set when all decedant v are visited
  visited.add(v);
  return false;
};

console.log(topVotedCanFinish(2, [[1, 0]]));
console.log(topVotedCanFinish(2,  [[1,0],[0,1]])); // prettier-ignore

// Tried for a while but couldn't get it working */

// Moving Stones Until Consecutive          1/14/2023
/* 
// There are three stones in different positions on the X-axis. You are given three integers a, b, and c, the positions of the stones.

// In one move, you pick up a stone at an endpoint (i.e., either the lowest or highest position stone), and move it to an unoccupied position between those endpoints. Formally, let's say the stones are currently at positions x, y, and z with x < y < z. You pick up the stone at either position x or position z, and move that stone to an integer position k, with x < k < z and k != y.

// The game ends when you cannot make any more moves (i.e., the stones are in three consecutive positions).

// Return an integer array answer of length 2 where:

// answer[0] is the minimum number of moves you can play, and
// answer[1] is the maximum number of moves you can play.

// Example 1:
//    Input: a = 1, b = 2, c = 5
//    Output: [1,2]
// Explanation: Move the stone from 5 to 3, or move the stone from 5 to 4 to 3.

// Example 2:
//    Input: a = 4, b = 3, c = 2
//    Output: [0,0]
// Explanation: We cannot make any moves.

// Example 3:
//    Input: a = 3, b = 5, c = 1
//    Output: [1,2]
// Explanation: Move the stone from 1 to 4; or move the stone from 1 to 2 to 4.

// Constraints:
//    1 <= a, b, c <= 100
//    a, b, and c have different values.

const numMovesStones = (a, b, c) => {
  let ans = [0, 0];
  let cur = [a, b, c].sort((a, b) => a - b);
  while (cur[0] != cur[1] - 1 || cur[1] != cur[2] - 1) {
    const dif = {
      l: cur[1] - cur[0] - 1,
      r: cur[2] - cur[1] - 1,
    };
    if (dif.l > dif.r) {
      ans[0]++;
      if (cur[2] - cur[1] == 1) {
        ans[1] += dif.l;
        cur = [cur[1] - 1, cur[1], cur[2]];
      } else {
        ans[1] += dif.l + 1;
        cur = [cur[1], cur[1] + 1, cur[2]];
      }
    } else {
      ans[0]++;
      if (cur[1] - cur[0] == 1) {
        ans[1] += dif.r;
        cur = [cur[0], cur[1], cur[1] + 1];
      } else {
        ans[1] += dif.r + 1;
        cur = [cur[0], cur[1] - 1, cur[1]];
      }
    }
  }
  return ans;
};

console.log(numMovesStones(1, 2, 5)); // [1,2]
console.log(numMovesStones(4, 3, 2)); // [0,0]
console.log(numMovesStones(3, 5, 1)); // [1,2]

// Better than 100% Runtimes & Memory

const topVotedNumMovesStones = (a, b, c) => {
  const [x, y, z] = [Math.abs(a - b), Math.abs(b - c), Math.abs(c - a)];
  const [min, max] = [Math.min(x, y, z), Math.max(x, y, z)];
  return 2 === max ? [0, 0] : [min < 3 ? 1 : 2, max - 2];
};

// So much cleaner */

// Lexicographically Smallest Equivalent String         1/15/2023
/* 
// You are given two strings of the same length s1 and s2 and a string baseStr.

// We say s1[i] and s2[i] are equivalent characters.

// For example, if s1 = "abc" and s2 = "cde", then we have 'a' == 'c', 'b' == 'd', and 'c' == 'e'.
// Equivalent characters follow the usual rules of any equivalence relation:

// Reflexivity: 'a' == 'a'.
// Symmetry: 'a' == 'b' implies 'b' == 'a'.
// Transitivity: 'a' == 'b' and 'b' == 'c' implies 'a' == 'c'.
// For example, given the equivalency information from s1 = "abc" and s2 = "cde", "acd" and "aab" are equivalent strings of baseStr = "eed", and "aab" is the lexicographically smallest equivalent string of baseStr.

// Return the lexicographically smallest equivalent string of baseStr by using the equivalency information from s1 and s2.

// Example 1:
//    Input: s1 = "parker", s2 = "morris", baseStr = "parser"
//    Output: "makkek"
// Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [m,p], [a,o], [k,r,s], [e,i].
// The characters in each group are equivalent and sorted in lexicographical order.
// So the answer is "makkek".

// Example 2:
//    Input: s1 = "hello", s2 = "world", baseStr = "hold"
//    Output: "hdld"
// Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [h,w], [d,e,o], [l,r].
// So only the second letter 'o' in baseStr is changed to 'd', the answer is "hdld".

// Example 3:
//    Input: s1 = "leetcode", s2 = "programs", baseStr = "sourcecode"
//    Output: "aauaaaaada"
// Explanation: We group the equivalent characters in s1 and s2 as [a,o,e,r,s,c], [l,p], [g,t] and [d,m], thus all letters in baseStr except 'u' and 'd' are transformed to 'a', the answer is "aauaaaaada".

// Constraints:
//    1 <= s1.length, s2.length, baseStr <= 1000
//    s1.length == s2.length
//    s1, s2, and baseStr consist of lowercase English letters.

const smallestEquivalentString = (s1, s2, base) => {
  let equi = {};
  for (let i = 0; i < s1.length; i++) {
    const [l1, l2] = [s1[i], s2[i]];
    equi[l1] ? equi[l1].push(l2) : (equi[l1] = [l1, l2]);
    equi[l2] ? equi[l2].push(l1) : (equi[l2] = [l2, l1]);
  }
  Object.entries(equi).forEach((c) => {
    const [l, e] = c;
    const len = e.length;
    for (let i = 1; i < len; i++) {
      equi[l].push(...equi[e[i]]);
      equi[l] = [...new Set(equi[l])].sort();
    }
  });
  // Object.entries(equi).forEach((c) => {
  //   const [l, e] = c;
  //   const len = e.length;
  //   for (let i = 1; i < len; i++) {
  //     equi[l].push(...equi[e[i]]);
  //     equi[l] = [...new Set(equi[l])].sort();
  //   }
  // });
  let ans = "";
  for (let i = 0; i < base.length; i++) {
    ans += equi[base[i]] ? equi[base[i]][0] : base[i];
  }
  return ans;
};

console.log(smallestEquivalentString("parker", "morris", "parser")); // "makkek"
console.log(smallestEquivalentString("hello", "world", "hold")); // "hdld"
console.log(smallestEquivalentString("leetcode", "programs", "sourcecode")); // "aauaaaaada"
console.log(
  smallestEquivalentString(
    "cgokcgerolkgksgbhgmaaealacnsshofjinidiigbjerdnkolc",
    "rjjlkbmnprkslilqmbnlasardrossiogrcboomrbcmgmglsrsj",
    "bxbwjlbdazfejdsaacsjgrlxqhiddwaeguxhqoupicyzfeupcn"
  )
); // "axawaaaaazaaaaaaaaaaaaaxaaaaawaaauxaaauaaayzaauaaa"

// Got it working, but needs to run middle portion twice, as seen in test case 4

var topVotedSmallestEquivalentString = function (s1, s2, baseStr) {
  let arr = new Array(26);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(i + 97);
  }
  for (let i = 0; i < s1.length; i++) {
    let f = arr[s1[i].charCodeAt(0) - 97];
    let s = arr[s2[i].charCodeAt(0) - 97];
    if (f == s) continue;
    let replaceTo = "";
    let replaceFrom = "";
    if (f > s) {
      replaceTo = s;
      replaceFrom = f;
    } else {
      replaceTo = f;
      replaceFrom = s;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == replaceFrom) arr[i] = replaceTo;
    }
  }
  let res = "";
  for (let i = 0; i < baseStr.length; i++) {
    res += arr[baseStr.charCodeAt(i) - 97];
  }
  return res;
};

// Makes an alphabet then continuously replaces letters with the smallest one

const revisedSolution = (s1, s2, base) => {
  let arr = new Array(26);
  for (let i = 0; i < arr.length; i++) arr[i] = String.fromCharCode(i + 97);

  const update = (small, large) =>
    (arr = arr.map((c) => (c == large ? small : c)));
  for (let i = 0; i < s1.length; i++) {
    let l1 = arr[s1[i].charCodeAt(0) - 97];
    let l2 = arr[s2[i].charCodeAt(0) - 97];
    if (l1 == l2) continue;
    l1 > l2 ? update(l2, l1) : update(l1, l2);
  }

  return [...base].reduce((a, _, i) => (a += arr[base.charCodeAt(i) - 97]), "");
};

console.log(revisedSolution("parker", "morris", "parser")); // "makkek" */

// Sender With Largest Word Count         1/16/2023
/* 
// You have a chat log of n messages. You are given two string arrays messages and senders where messages[i] is a message sent by senders[i].

// A message is list of words that are separated by a single space with no leading or trailing spaces. The word count of a sender is the total number of words sent by the sender. Note that a sender may send more than one message.

// Return the sender with the largest word count. If there is more than one sender with the largest word count, return the one with the lexicographically largest name.

// Note:
// Uppercase letters come before lowercase letters in lexicographical order.
// "Alice" and "alice" are distinct.

// Example 1:
//    Input: messages = ["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], senders = ["Alice","userTwo","userThree","Alice"]
//    Output: "Alice"
// Explanation: Alice sends a total of 2 + 3 = 5 words.
// userTwo sends a total of 2 words.
// userThree sends a total of 3 words.
// Since Alice has the largest word count, we return "Alice".

// Example 2:
//    Input: messages = ["How is leetcode for everyone","Leetcode is useful for practice"], senders = ["Bob","Charlie"]
//    Output: "Charlie"
// Explanation: Bob sends a total of 5 words.
// Charlie sends a total of 5 words.
// Since there is a tie for the largest word count, we return the sender with the lexicographically larger name, Charlie.

// Constraints:
//    n == messages.length == senders.length
//    1 <= n <= 104
//    1 <= messages[i].length <= 100
//    1 <= senders[i].length <= 10
//    messages[i] consists of uppercase and lowercase English letters and ' '.
//    All the words in messages[i] are separated by a single space.
//    messages[i] does not have leading or trailing spaces.
//    senders[i] consists of uppercase and lowercase English letters only.

const largestWordCount = (msgs, senders) => {
  let count = new Map();
  let res = ["", -Infinity];

  for (let i = 0; i < msgs.length; i++) {
    count.set(
      senders[i],
      count.has(senders[i])
        ? count.get(senders[i]) + msgs[i].split(" ").length
        : msgs[i].split(" ").length
    );

    if (
      count.get(senders[i]) > res[1] ||
      (count.get(senders[i]) == res[1] && senders[i] > res[0])
    )
      res = [senders[i], count.get(senders[i])];
  }

  return res[0];
};

console.log(
  largestWordCount(
    [
      "Hello userTwooo",
      "Hi userThree",
      "Wonderful day Alice",
      "Nice day userThree",
    ],
    ["Alice", "userTwo", "userThree", "Alice"]
  )
); // "Alice"
console.log(
  largestWordCount(
    ["How is leetcode for everyone", "Leetcode is useful for practice"],
    ["Bob", "Charlie"]
  )
); // "Charlie"

// Better runtime than 95%
// Same as top voted */

// Successful Pairs of Spells and Potions         1/17/2023
/* 
// You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

// You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

// Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

// Example 1:
//    Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
//    Output: [4,0,3]
// Explanation:
// - 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
// - 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
// - 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
// Thus, [4,0,3] is returned.

// Example 2:
//    Input: spells = [3,1,2], potions = [8,5,8], success = 16
//    Output: [2,0,2]
// Explanation:
// - 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
// - 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful.
// - 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful.
// Thus, [2,0,2] is returned.

// Constraints:
//    n == spells.length
//    m == potions.length
//    1 <= n, m <= 105
//    1 <= spells[i], potions[i] <= 105
//    1 <= success <= 1010

const successfulPairs = (spells, pots, success) =>
  spells.reduce((a, spell) => {
    a.push(pots.map((pot) => spell * pot).filter((x) => x >= success).length);
    return a;
  }, []);

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)); // [4,0,3]
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16)); // [2,0,2]

// Exceeds runtime limit on large testcases

var topVotedSuccessfulPairs = function (spells, potions, success) {
  let res = [];
  potions.sort((a, b) => a - b);
  for (let i = 0; i < spells.length; i++) {
    let h = potions.length - 1,
      l = 0,
      mid;
    while (l <= h) {
      mid = ~~(l + (h - l) / 2);
      if (spells[i] * potions[mid] >= success) h = mid - 1;
      else l = mid + 1;
    }
    res[i] = potions.length - 1 - h;
  }
  return res;
};

// Binary search would be the way to go here */

// Apply Discount to Prices         1/18/2023
/* 
// A sentence is a string of single-space separated words where each word can contain digits, lowercase letters, and the dollar sign '$'. A word represents a price if it is a sequence of digits preceded by a dollar sign.

// For example, "$100", "$23", and "$6" represent prices while "100", "$", and "$1e5" do not.
// You are given a string sentence representing a sentence and an integer discount. For each word representing a price, apply a discount of discount% on the price and update the word in the sentence. All updated prices should be represented with exactly two decimal places.

// Return a string representing the modified sentence.

// Note that all prices will contain at most 10 digits.

// Example 1:
//    Input: sentence = "there are $1 $2 and 5$ candies in the shop", discount = 50
//    Output: "there are $0.50 $1.00 and 5$ candies in the shop"
// Explanation:
// The words which represent prices are "$1" and "$2".
// - A 50% discount on "$1" yields "$0.50", so "$1" is replaced by "$0.50".
// - A 50% discount on "$2" yields "$1". Since we need to have exactly 2 decimal places after a price, we replace "$2" with "$1.00".

// Example 2:
//    Input: sentence = "1 2 $3 4 $5 $6 7 8$ $9 $10$", discount = 100
//    Output: "1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10$"
// Explanation:
// Applying a 100% discount on any price will result in 0.
// The words representing prices are "$3", "$5", "$6", and "$9".
// Each of them is replaced by "$0.00".

// Constraints:
//    1 <= sentence.length <= 105
//    sentence consists of lowercase English letters, digits, ' ', and '$'.
//    sentence does not have leading or trailing spaces.
//    All words in sentence are separated by a single space.
//    All prices will be positive numbers without leading zeros.
//    All prices will have at most 10 digits.
//    0 <= discount <= 100

const discountPrices = (str, d) =>
  str.split(" ").reduce((a, c, i, arr) => {
    if (/^\$\d+$/.test(c))
      c = "$" + ((+c.substring(1) * (100 - d)) / 100).toFixed(2);
    return (a += c + (i == arr.length - 1 ? "" : " "));
  }, "");

console.log(discountPrices("there are $1 $2 and 5$ candies in the shop", 50)); // "there are $0.50 $1.00 and 5$ candies in the shop"
console.log(discountPrices("1 2 $3 4 $5 $6 7 8$ $9 $10$", 100)); // "1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10$"
console.log(
  discountPrices("$2$3 $10 $100 $1 200 $33 33$ $$ $99 $99999 $9999999999", 0)
); // "$2$3 $10.00 $100.00 $1.00 200 $33.00 33$ $$ $99.00 $99999.00 $9999999999.00"

// Better Runtime than 100%

function topVotedDiscountPrices(sentence, discount) {
  const reg = /(?<=(\s|^))\$(\d+)(?=(\s|$))/g;
  return sentence.replace(reg, (match) => {
    const price = parseFloat(match.slice(1));
    const afterDiscount = (price * (100 - discount)) / 100;
    return `${afterDiscount.toFixed(2)}`;
  });
}

// Plenty of people complaining about this question
// Seems the only valid approach was Regex */

// Replace Elements in an Array         1/19/2023
/* 
//  You are given a 0-indexed array nums that consists of n distinct positive integers. Apply m operations to this array, where in the ith operation you replace the number operations[i][0] with operations[i][1].

// It is guaranteed that in the ith operation:

// operations[i][0] exists in nums.
// operations[i][1] does not exist in nums.
// Return the array obtained after applying all the operations.

// Example 1:
//    Input: nums = [1,2,4,6], operations = [[1,3],[4,7],[6,1]]
//    Output: [3,2,7,1]
// Explanation: We perform the following operations on nums:
// - Replace the number 1 with 3. nums becomes [3,2,4,6].
// - Replace the number 4 with 7. nums becomes [3,2,7,6].
// - Replace the number 6 with 1. nums becomes [3,2,7,1].
// We return the final array [3,2,7,1].

// Example 2:
//    Input: nums = [1,2], operations = [[1,3],[2,1],[3,2]]
//    Output: [2,1]
// Explanation: We perform the following operations to nums:
// - Replace the number 1 with 3. nums becomes [3,2].
// - Replace the number 2 with 1. nums becomes [3,1].
// - Replace the number 3 with 2. nums becomes [2,1].
// We return the array [2,1].

// Constraints:
//    n == nums.length
//    m == operations.length
//    1 <= n, m <= 105
//    All the values of nums are distinct.
//    operations[i].length == 2
//    1 <= nums[i], operations[i][0], operations[i][1] <= 106
//    operations[i][0] will exist in nums when applying the ith operation.
//    operations[i][1] will not exist in nums when applying the ith operation.

const arrayChange = (nums, ops) =>
  ops.reduce(
    (nums, op) => nums.map((num) => (num == op[0] ? op[1] : num)),
    nums
  );

// prettier-ignore
console.log(arrayChange([1,2,4,6],[[1,3],[4,7],[6,1]])); // [3,2,7,1]
// prettier-ignore
console.log(arrayChange([1,2], [[1,3],[2,1],[3,2]])); // [2,1]

// Exceeds runtime limit
// Probably have to map a path between the first and last operations and update the array only once at the end

var topVotedArrayChange = function (nums, operations) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    map.set(num, i);
  }

  for (let op of operations) {
    let key = op[0];
    let value = op[1];

    // if key exists
    if (map.has(key)) {
      const idx = map.get(key);
      map.set(value, idx);
      map.delete(key);
    }
  }

  for (let [key, idx] of map) {
    nums[idx] = key;
  }

  return nums;
}; */

// Longest Binary Subsequence Less Than or Equal to K         1/20/2023
/* 
// You are given a binary string s and a positive integer k.

// Return the length of the longest subsequence of s that makes up a binary number less than or equal to k.

// Note:

// The subsequence can contain leading zeroes.
// The empty string is considered to be equal to 0.
// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

// Example 1:
//    Input: s = "1001010", k = 5
//    Output: 5
// Explanation: The longest subsequence of s that makes up a binary number less than or equal to 5 is "00010", as this number is equal to 2 in decimal.
// Note that "00100" and "00101" are also possible, which are equal to 4 and 5 in decimal, respectively.
// The length of this subsequence is 5, so 5 is returned.

// Example 2:
//    Input: s = "00101001", k = 1
//    Output: 6
// Explanation: "000001" is the longest subsequence of s that makes up a binary number less than or equal to 1, as this number is equal to 1 in decimal.
// The length of this subsequence is 6, so 6 is returned.

// Constraints:
//    1 <= s.length <= 1000
//    s[i] is either '0' or '1'.
//    1 <= k <= 109

var topVotedLongestSubsequence = function (s, k) {
  let count = 0;
  let j = s.length - 1; // starting from the last digit
  let i = 0; // binary number position
  let acc = 0;

  while (j >= 0) {
    let positionNumber = Number(s[j]) * Math.pow(2, i);
    j--;
    i++;
    if (acc + positionNumber > k) continue;

    acc += positionNumber;
    count++;
  }

  return count;
};

console.log(topVotedLongestSubsequence("1001010", 5)); // 5
console.log(topVotedLongestSubsequence("00101001", 1)); // 6 */

// Categorize Box According to Criteria         1/21/2023
/* 
// Given four integers length, width, height, and mass, representing the dimensions and mass of a box, respectively, return a string representing the category of the box.

// The box is "Bulky" if:
//    Any of the dimensions of the box is greater or equal to 10^4.
//    Or, the volume of the box is greater or equal to 10^9.
//  If the mass of the box is greater or equal to 100, it is "Heavy".
//  If the box is both "Bulky" and "Heavy", then its category is "Both".
//  If the box is neither "Bulky" nor "Heavy", then its category is "Neither".
//  If the box is "Bulky" but not "Heavy", then its category is "Bulky".
//  If the box is "Heavy" but not "Bulky", then its category is "Heavy".
// Note that the volume of the box is the product of its length, width and height.

// Example 1:
//    Input: length = 1000, width = 35, height = 700, mass = 300
//    Output: "Heavy"
// Explanation:
// None of the dimensions of the box is greater or equal to 104.
// Its volume = 24500000 <= 109. So it cannot be categorized as "Bulky".
// However mass >= 100, so the box is "Heavy".
// Since the box is not "Bulky" but "Heavy", we return "Heavy".

// Example 2:
//    Input: length = 200, width = 50, height = 800, mass = 50
//    Output: "Neither"
// Explanation:
// None of the dimensions of the box is greater or equal to 104.
// Its volume = 8 * 106 <= 109. So it cannot be categorized as "Bulky".
// Its mass is also less than 100, so it cannot be categorized as "Heavy" either.
// Since its neither of the two above categories, we return "Neither".

// Constraints:
//    1 <= length, width, height <= 10^5
//    1 <= mass <= 10^3

const categorizeBox = (l, w, h, m) => {
  let res = {
    truetrue: "Both",
    falsefalse: "Neither",
    truefalse: "Bulky",
    falsetrue: "Heavy",
  };

  const vol = l * w * h;
  const isBulky =
    l >= 10 ** 4 || w >= 10 ** 4 || h >= 10 ** 4 || vol >= 10 ** 9;
  const isHeavy = m >= 100;

  return res[`${isBulky}${isHeavy}`];
};

console.log(categorizeBox(1000, 35, 700, 300)); // "Heavy"
console.log(categorizeBox(200, 50, 800, 50)); // "Neither"

// Same as top voted */

// Maximum Sum of an Hourglass          1/22/2023
/* 
// You are given an m x n integer matrix grid.

// We define an hourglass as a part of the matrix with the following form:
// https://assets.leetcode.com/uploads/2022/08/21/img.jpg

// Return the maximum sum of the elements of an hourglass.

// Note that an hourglass cannot be rotated and must be entirely contained within the matrix.

// Example 1:
//    Input: grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]
//    Output: 30
// Explanation: The cells shown above represent the hourglass with the maximum sum: 6 + 2 + 1 + 2 + 9 + 2 + 8 = 30.

// Example 2:
//    Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
//    Output: 35
// Explanation: There is only one hourglass in the matrix, with the sum: 1 + 2 + 3 + 5 + 7 + 8 + 9 = 35.

// Constraints:
//    m == grid.length
//    n == grid[i].length
//    3 <= m, n <= 150
//    0 <= grid[i][j] <= 106

const maxSum = (g) => {
  let res = -Infinity;
  for (let i = 1; i < g.length - 1; i++) {
    for (let j = 1; j < g[i].length - 1; j++) {
      const cur =
        g[i - 1][j - 1] +
        g[i - 1][j] +
        g[i - 1][j + 1] +
        g[i][j] +
        g[i + 1][j - 1] +
        g[i + 1][j] +
        g[i + 1][j + 1];
      if (cur > res) res = cur;
    }
  }
  return res;
};

console.log(
  maxSum([
    [6, 2, 1, 3],
    [4, 2, 1, 5],
    [9, 2, 8, 7],
    [4, 1, 2, 9],
  ])
); // 30
console.log(
  maxSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 35

// Great runtime
// This should probably be an easy question

// Same as top voted */

// Find Three Consecutive Integers That Sum to a Given Number         1/23/2023
/* 
// Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.

// Example 1:
//    Input: num = 33
//    Output: [10,11,12]
// Explanation: 33 can be expressed as 10 + 11 + 12 = 33.
// 10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].

// Example 2:
//    Input: num = 4
//    Output: []
// Explanation: There is no way to express 4 as the sum of 3 consecutive integers.

// Constraints:
//    0 <= num <= 1015

const sumOfThree = (num) => {
  const div = Math.floor(num / 3);
  const res = [div - 1, div, div + 1];
  return res[0] + res[1] + res[2] === num ? res : [];
};

console.log(sumOfThree(33)); // [10,11,12]
console.log(sumOfThree(4)); // []
console.log(sumOfThree(6675975537)); // [2225325178,2225325179,2225325180]

// Works, but bad runtime

var topVotedSumOfThree = (num) =>
  num % 3 === 0 ? [num / 3 - 1, num / 3, num / 3 + 1] : [];

// You only need to check for numbers divisible by 3 */

// Maximum of Absolute Value Expression         1/24/2023
/* 
// Given two arrays of integers with equal lengths, return the maximum value of:

// |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

// where the maximum is taken over all 0 <= i, j < arr1.length.

// Example 1:
//    Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
//    Output: 13

// Example 2:
//    Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
//    Output: 20

// Constraints:
//    2 <= arr1.length == arr2.length <= 40000
//    -10^6 <= arr1[i], arr2[i] <= 10^6

const topVotedMaxAbsValExpr = function (arr1, arr2) {
  const l1 = [],
    l2 = [],
    l3 = [],
    l4 = [],
    res = [];

  for (let i = 0; i < arr1.length; i++) {
    l1.push(arr1[i] + arr2[i] + i);
    l2.push(arr1[i] - arr2[i] + i);
    l3.push(-arr1[i] + arr2[i] + i);
    l4.push(-arr1[i] - arr2[i] + i);
  }

  res.push(Math.max(...l1) - Math.min(...l1));
  res.push(Math.max(...l2) - Math.min(...l2));
  res.push(Math.max(...l3) - Math.min(...l3));
  res.push(Math.max(...l4) - Math.min(...l4));

  return Math.max(...res);
};

console.log(topVotedMaxAbsValExpr([1, 2, 3, 4], [-1, 4, 5, 6])); // 13
console.log(topVotedMaxAbsValExpr([1, -2, -5, 0, 10], [0, -2, -1, -7, -4])); // 20

// Couldn't get it working, but this makes total sense */

// Count Number of Bad Pairs          1/25/2023
/* 
// You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair if i < j and j - i != nums[j] - nums[i].

// Return the total number of bad pairs in nums.

// Example 1:
//    Input: nums = [4,1,3,3]
//    Output: 5
// Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
// The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
// The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
// The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
// The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
// There are a total of 5 bad pairs, so we return 5.

// Example 2:
//    Input: nums = [1,2,3,4,5]
//    Output: 0
// Explanation: There are no bad pairs.

// Constraints:
//    1 <= nums.length <= 105
//    1 <= nums[i] <= 109

const countBadPairs = (nums) =>
  nums.reduce((a, c, i, arr) => {
    for (let j = i + 1; j < arr.length; j++) {
      if (j - i !== nums[j] - c) a++;
    }
    return a;
  }, 0);

console.log(countBadPairs([4, 1, 3, 3])); // 5
console.log(countBadPairs([1, 2, 3, 4, 5])); // 0

// Exceeds runtime limit

var topVotedCountBadPairs = function (nums) {
  let totalPairs = 0;
  let goodPairs = 0;
  let differencesFreqsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = nums[i] - i;

    totalPairs += i;
    if (diff in differencesFreqsMap) {
      goodPairs += differencesFreqsMap[diff];
      differencesFreqsMap[diff]++;
      continue;
    }

    differencesFreqsMap[diff] = 1;
  }

  return totalPairs - goodPairs;
};

// First time seeing 'in' used in Javascript, very useful to check an object
// I guess 'if (differencesFreqsMap[nums[i] - i])' would evaluate to the same thing */

// Rotating the Box         1/26/2023
/* 
// You are given an m x n matrix of characters box representing a side-view of a box. Each cell of the box is one of the following:

// A stone '#'
// A stationary obstacle '*'
// Empty '.'
// The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity does not affect the obstacles' positions, and the inertia from the box's rotation does not affect the stones' horizontal positions.

// It is guaranteed that each stone in box rests on an obstacle, another stone, or the bottom of the box.

// Return an n x m matrix representing the box after the rotation described above.

// Example 1:
//    Input: box = [["#",".","#"]]
//    Output: [["."],
//            ["#"],
//            ["#"]]

// Example 2:
//    Input: box = [["#",".","*","."],
//                 ["#","#","*","."]]
//    Output: [["#","."],
//            ["#","#"],
//            ["*","*"],
//            [".","."]]

// Example 3: https://assets.leetcode.com/uploads/2021/04/08/rotatingtheboxleetcode3withstone.png
//    Input: box = [["#","#","*",".","*","."],
//                 ["#","#","#","*",".","."],
//                 ["#","#","#",".","#","."]]
//    Output: [[".","#","#"],
//            [".","#","#"],
//            ["#","#","*"],
//            ["#","*","."],
//            ["#",".","*"],
//            ["#",".","."]]

// Constraints:
//    m == box.length
//    n == box[i].length
//    1 <= m, n <= 500
//    box[i][j] is either '#', '*', or '.'

const rotateTheBox = (box) => {
  let res = [];
  for (let i = box.length - 1; i >= 0; i--) {
    let row = box[i];
    let col = [];
    while (row.length > 0) {
      let index = row.findIndex((x) => x == "*");
      let cur = row
        .splice(0, index !== -1 ? index : 501)
        .sort((a, b) => a.localeCompare(b));
      if (index !== -1) cur.push(row.shift());
      col.push(...cur);
    }
    res.push(col);
  }
  return res[0].map((_, col) => res.map((row) => row[col]));
};

console.log(rotateTheBox([["#", ".", "#"]])); // [["."],["#"],["#"]]
console.log(
  rotateTheBox([
    ["#", ".", "*", "."],
    ["#", "#", "*", "."],
  ])
); // [["#","."],["#","#"],["*","*"],[".","."]]
console.log(
  rotateTheBox([
    ["#", "#", "*", ".", "*", "."],
    ["#", "#", "#", "*", ".", "."],
    ["#", "#", "#", ".", "#", "."],
  ])
); // [[".", "#", "#"],[".", "#", "#"],["#", "#", "*"],["#", "*", "."],["#", ".", "*"],["#", ".", "."]];

// Bad runtime, but I like this solution
// Last line returns the transpose of the matrix once gravity has been accounted for

var topVotedRotateTheBox = function (box) {
  for (let r = 0; r < box.length; r++) {
    let idx = null;
    for (let c = 0; c < box[r].length; c++) {
      const curr = box[r][c];
      if (curr === "*") {
        idx = null;
        continue;
      }
      if (curr === "#" && idx === null) {
        idx = c;
        continue;
      }
      if (curr === "." && box[r][idx] === "#" && idx <= c) {
        box[r][idx] = ".";
        box[r][c] = "#";
        idx++;
      }
    }
  }
  return transpose(box);
};

function transpose(arr) {
  const B = [];
  for (let c = 0; c < arr[0].length; c++) {
    if (!B[c]) B[c] = [];
    for (let r = 0; r < arr.length; r++) {
      B[c][r] = arr[r][c];
    }
    B[c].reverse();
  }
  return B;
}

// Javascript two pointers, moving zeros and transpose */

// Find All Good Indices          1/27/2023
/* 
// You are given a 0-indexed integer array nums of size n and a positive integer k.

// We call an index i in the range k <= i < n - k good if the following conditions are satisfied:

// The k elements that are just before the index i are in non-increasing order.
// The k elements that are just after the index i are in non-decreasing order.
// Return an array of all good indices sorted in increasing order.

// Example 1:
//    Input: nums = [2,1,1,1,3,4,1], k = 2
//    Output: [2,3]
// Explanation: There are two good indices in the array:
// - Index 2. The subarray [2,1] is in non-increasing order, and the subarray [1,3] is in non-decreasing order.
// - Index 3. The subarray [1,1] is in non-increasing order, and the subarray [3,4] is in non-decreasing order.
// Note that the index 4 is not good because [4,1] is not non-decreasing.

// Example 2:
//    Input: nums = [2,1,1,2], k = 2
//    Output: []
// Explanation: There are no good indices in this array.

// Constraints:
//    n == nums.length
//    3 <= n <= 105
//    1 <= nums[i] <= 106
//    1 <= k <= n / 2

const goodIndices = (nums, k) => {
  let res = [];
  for (let i = k; i < nums.length - k; i++) {
    const [l, r] = [nums.slice(i - k, i), nums.slice(i + 1, i + k + 1)];
    if (
      l.join() === l.sort((a, b) => b - a).join() &&
      r.join() === r.sort((a, b) => a - b).join()
    )
      res.push(i);
  }
  return res;
};

console.log(goodIndices([2, 1, 1, 1, 3, 4, 1], 2)); // [2,3]
console.log(goodIndices([2, 1, 1, 2], 2)); // []

var topVotedGoodIndices = function (nums, k) {
  const res = [];
  const n = nums.length;

  for (let i = k; i < n - k; i++) {
    let left = i - k + 1;
    let right = i + k - 1;
    let add = true;

    while (left < right) {
      if (nums[left] > nums[left - 1] || nums[right] > nums[right + 1]) {
        add = false;
        break;
      }

      left++;
      right--;
    }

    if (add) res.push(i);
  }

  return res;
}; */

// Maximum Consecutive Floors Without Special Floors          1/28/2023
/* 
// Alice manages a company and has rented some floors of a building as office space. Alice has decided some of these floors should be special floors, used for relaxation only.

// You are given two integers bottom and top, which denote that Alice has rented all the floors from bottom to top (inclusive). You are also given the integer array special, where special[i] denotes a special floor that Alice has designated for relaxation.

// Return the maximum number of consecutive floors without a special floor.

// Example 1:
//    Input: bottom = 2, top = 9, special = [4,6]
//    Output: 3
// Explanation: The following are the ranges (inclusive) of consecutive floors without a special floor:
// - (2, 3) with a total amount of 2 floors.
// - (5, 5) with a total amount of 1 floor.
// - (7, 9) with a total amount of 3 floors.
// Therefore, we return the maximum number which is 3 floors.

// Example 2:
//    Input: bottom = 6, top = 8, special = [7,6,8]
//    Output: 0
// Explanation: Every floor rented is a special floor, so we return 0.

// Constraints:
//    1 <= special.length <= 10^5
//    1 <= bottom <= special[i] <= top <= 10^9
//    All the values of special are unique.

const easyMaxConsecutive = (b, t, s) => {
  s.sort((a, b) => a - b);
  let max = 0;
  let count = 0;
  for (let i = b; i <= t; i++) {
    if (i !== s[0]) count++;
    else {
      max = Math.max(count, max);
      count = 0;
      s.shift();
    }
  }
  return Math.max(count, max);
};

// Exceeds runtime

const maxConsecutive = (b, t, s) => {
  s.sort((a, b) => b - a);
  let max = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const count = s[i] - s[i + 1] - 1;
    max = Math.max(max, count);
  }
  return Math.max(max, s[s.length - 1] - b, t - s[0]);
};

console.log(maxConsecutive(2, 9, [4, 6])); // 3
console.log(maxConsecutive(6, 8, [7, 6, 8])); // 0

// Beats 95%
// Same as top voted */

// Equal Row and Column Pairs         1/29/2023
/* 
// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// Example 1:
//    Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
//    Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

// Example 2:
//    Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
//    Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

// Constraints:
//    n == grid.length == grid[i].length
//    1 <= n <= 200
//    1 <= grid[i][j] <= 105

const equalPairs = (grid) => {
  const rows = grid.map((c) => c.join());
  const cols = grid[0].map((_, col) => grid.map((row) => row[col]).join());
  return rows.reduce(
    (res, row) =>
      res + cols.reduce((count, col) => count + (row === col ? 1 : 0), 0),
    0
  );
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
); // 1
console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
); // 3
console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 4],
    [2, 4, 2, 2],
    [2, 5, 2, 2],
  ])
); // 3
console.log(
  equalPairs([
    [11, 1],
    [1, 11],
  ])
); // 2

// Same use of Matrix Transpose as 3 days ago in 'Rotating the Box'
// Same as top voted */

// Shifting Letters II          1/30/2023
/* 
// You are given a string s of lowercase English letters and a 2D integer array shifts where shifts[i] = [starti, endi, directioni]. For every i, shift the characters in s from the index starti to the index endi (inclusive) forward if directioni = 1, or shift the characters backward if directioni = 0.

// Shifting a character forward means replacing it with the next letter in the alphabet (wrapping around so that 'z' becomes 'a'). Similarly, shifting a character backward means replacing it with the previous letter in the alphabet (wrapping around so that 'a' becomes 'z').

// Return the final string after all such shifts to s are applied.

// Example 1:
//    Input: s = "abc", shifts = [[0,1,0],[1,2,1],[0,2,1]]
//    Output: "ace"
// Explanation: Firstly, shift the characters from index 0 to index 1 backward. Now s = "zac".
// Secondly, shift the characters from index 1 to index 2 forward. Now s = "zbd".
// Finally, shift the characters from index 0 to index 2 forward. Now s = "ace".

// Example 2:
//    Input: s = "dztz", shifts = [[0,0,0],[1,1,1]]
//    Output: "catz"
// Explanation: Firstly, shift the characters from index 0 to index 0 backward. Now s = "cztz".
// Finally, shift the characters from index 1 to index 1 forward. Now s = "catz".

// Constraints:
//    1 <= s.length, shifts.length <= 5 * 104
//    shifts[i].length == 3
//    0 <= starti <= endi < s.length
//    0 <= directioni <= 1
//    s consists of lowercase English letters.

const shiftingLetters = (s, shifts) => {
  s = [...s];
  for (const [a, b, dir] of shifts) {
    const shift = s.splice(a, b - a + 1).map((c) => {
      let num = c.charCodeAt(0) - 97 + (dir ? 1 : -1);
      if (num > 25) num = 0;
      else if (num < 0) num = 25;
      return String.fromCharCode(num + 97);
    });
    s.splice(a, 0, ...shift);
  }
  return s.join("");
};

// prettier-ignore
console.log(shiftingLetters("abc",[[0,1,0],[1,2,1],[0,2,1]])); // "ace"
// prettier-ignore
console.log(shiftingLetters("dztz", [[0,0,0],[1,1,1]])); // "catz"

var topVotedShiftingLetters = function (s, shifts) {
  const cb = Array(s.length).fill(0);
  shifts.forEach(([s, e, d]) => {
    for (let i = s; i <= e; i++) {
      cb[i] += d === 0 ? -1 : 1;
    }
  });
  const arr = s.split("");
  cb.forEach((e, i) => {
    let newCharCode = arr[i].charCodeAt() + e;
    while (newCharCode < 97) {
      newCharCode += 26;
    }
    while (newCharCode > 122) {
      newCharCode -= 26;
    }
    arr[i] = String.fromCharCode(newCharCode);
  });
  return arr.join("");
}; */

// Maximum White Tiles Covered by a Carpet          1/31/2023
/* 
// You are given a 2D integer array tiles where tiles[i] = [li, ri] represents that every tile j in the range li <= j <= ri is colored white.

// You are also given an integer carpetLen, the length of a single carpet that can be placed anywhere.

// Return the maximum number of white tiles that can be covered by the carpet.

// Example 1:
//    Input: tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10
//    Output: 9
// Explanation: Place the carpet starting on tile 10.
// It covers 9 white tiles, so we return 9.
// Note that there may be other places where the carpet covers 9 white tiles.
// It can be shown that the carpet cannot cover more than 9 white tiles.

// Example 2:
//    Input: tiles = [[10,11],[1,1]], carpetLen = 2
//    Output: 2
// Explanation: Place the carpet starting on tile 10.
// It covers 2 white tiles, so we return 2.

// Constraints:
//    1 <= tiles.length <= 5 * 104
//    tiles[i].length == 2
//    1 <= li <= ri <= 109
//    1 <= carpetLen <= 109
//    The tiles are non-overlapping.

const maximumWhiteTiles = (tiles, len) => {
  tiles.sort((a, b) => a[1] - b[1]);
  let floor = new Array(tiles[tiles.length - 1][1]).fill(false);
  for (const [s, e] of tiles)
    floor.splice(s - 1, e - s + 1, ..."x".repeat(e - s + 1));
  let max = floor.slice(0, len).reduce((a, c) => (a += c ? 1 : 0), 0);
  for (let i = 1; i < floor.length - len; i++) {
    const cur = max - (floor[i - 1] ? 1 : 0) + (floor[i + len - 1] ? 1 : 0);
    max = Math.max(max, cur);
  }
  return max;
};

// prettier-ignore
console.log(maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)); // 9
// prettier-ignore
console.log(maximumWhiteTiles([[10,11],[1,1]], 2)); // 2

// Pretty scuffed, but no time today

var topVotedMaximumWhiteTiles = function (tiles, carpetLen) {
  tiles.sort((a, b) => a[0] - b[0]);

  let right = 1;
  let cover = tiles[0][1] - tiles[0][0] + 1;
  let maxCovered = cover;
  if (maxCovered >= carpetLen) return carpetLen;

  for (const tile of tiles) {
    let start = tile[0];
    let end = start + carpetLen - 1;

    while (right < tiles.length && tiles[right][1] <= end) {
      cover += tiles[right][1] - tiles[right][0] + 1;
      right++;
    }
    if (right === tiles.length || end < tiles[right][0]) {
      maxCovered = Math.max(maxCovered, cover);
    } else {
      let partial = end - tiles[right][0] + 1;
      maxCovered = Math.max(maxCovered, cover + partial);
    }

    cover -= tile[1] - tile[0] + 1;
  }

  return maxCovered;
}; */

// Max Sum of a Pair With Equal Sum of Digits         2/1/2023
/* 
// You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

// Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

// Example 1:
//    Input: nums = [18,43,36,13,7]
//    Output: 54
// Explanation: The pairs (i, j) that satisfy the conditions are:
// - (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
// - (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
// So the maximum sum that we can obtain is 54.

// Example 2:
//    Input: nums = [10,12,19,14]
//    Output: -1
// Explanation: There are no two numbers that satisfy the conditions, so we return -1.

// Constraints:
//    1 <= nums.length <= 105
//    1 <= nums[i] <= 109

const maximumSum = (nums) => {
  nums.sort((a, b) => b - a);
  let map = {};
  let dups = [];

  nums.map((c) => {
    const digits = [...`${c}`].reduce((a, c) => (a += +c), 0);
    map[digits] ? map[digits].push(c) : (map[digits] = [c]);
    if (map[digits].length == 2) dups.push(digits);
  });
  if (dups.length == 0) return -1;

  let max = 0;
  for (const key of dups) {
    const cur = map[key];
    max = Math.max(max, cur[0] + cur[1]);
  }
  return max;
};

console.log(maximumSum([18, 43, 36, 13, 7])); // 54
console.log(maximumSum([10, 12, 19, 14])); // -1

const topVotedMaximumSum = (A) => {
  let m = new Map(),
    res = -1;
  for (const x of A) {
    // accumulate same digit sum in a hashmap
    let sum = sumOfDigit(x);
    if (!m.has(sum)) m.set(sum, []);
    m.get(sum).push(x);
  }
  for (const [sum, a] of m) {
    // two sum max of each same digit sum
    a.sort((x, y) => y - x);
    if (a.length >= 2) res = Math.max(res, a[0] + a[1]);
  }
  return res;
};

const sumOfDigit = (x) => {
  let s = x + "",
    res = 0;
  for (const c of s) res += c - "0";
  return res;
}; */

// Strictly Palindromic Number          2/2/2023
/* 
// An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

// Given an integer n, return true if n is strictly palindromic and false otherwise.

// A string is palindromic if it reads the same forward and backward.

// Example 1:
//    Input: n = 9
//    Output: false
// Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
// In base 3: 9 = 100 (base 3), which is not palindromic.
// Therefore, 9 is not strictly palindromic so we return false.
// Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

// Example 2:
//    Input: n = 4
//    Output: false
// Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
// Therefore, we return false.

// Constraints:
//    4 <= n <= 105

const isStrictlyPalindromic = (n) => false;

console.log(isStrictlyPalindromic(9)); // false
console.log(isStrictlyPalindromic(4)); // false
console.log(isStrictlyPalindromic(20)); // false

// Really enjoying the discussion surrounding this one lol */

// Move Pieces to Obtain a String         2/3/2023
/* 
// You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where:

// The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, and a piece 'R' can move to the right only if there is a blank space directly to its right.
// The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.
// Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.

// Example 1:
//    Input: start = "_L__R__R_", target = "L______RR"
//    Output: true
// Explanation: We can obtain the string target from start by doing the following moves:
// - Move the first piece one step to the left, start becomes equal to "L___R__R_".
// - Move the last piece one step to the right, start becomes equal to "L___R___R".
// - Move the second piece three steps to the right, start becomes equal to "L______RR".
// Since it is possible to get the string target from start, we return true.

// Example 2:
//    Input: start = "R_L_", target = "__LR"
//    Output: false
// Explanation: The 'R' piece in the string start can move one step to the right to obtain "_RL_".
// After that, no pieces can move anymore, so it is impossible to obtain the string target from start.

// Example 3:
//    Input: start = "_R", target = "R_"
//    Output: false
// Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.

// Constraints:
//    n == start.length == target.length
//    1 <= n <= 105
//    start and target consist of the characters 'L', 'R', and '_'.

const canChange = (s, t) =>
  !(
    s.lastIndexOf("L") < t.lastIndexOf("L") ||
    s.indexOf("L") < t.indexOf("L") ||
    s.lastIndexOf("R") > t.lastIndexOf("R") ||
    s.indexOf("R") > t.indexOf("R") ||
    s.replaceAll("_", "") !== t.replaceAll("_", "")
  );

console.log(canChange("_L__R__R_", "L______RR")); // true
console.log(canChange("R_L_", "__LR")); // false
console.log(canChange("_R", "R_")); // false
console.log(canChange("L_L", "_LL")); // false

// 100% runtime
// If it's stupid and it works, it's not stupid :)

var topVotedCanChange = function (start, target) {
  let lCount = 0; //count of l's in target, to be consumed later in start
  let rCount = 0; //count of r's in start, to be consumed later in target

  for (let i = 0; i < start.length; i++) {
    if (start[i] === "R") rCount++; //add r to count
    if (start[i] === "L") lCount--; //remove l from count

    if (target[i] === "L" && rCount > 0) return false; //if L in start is blocked by R
    if (start[i] === "L" && rCount > 0) return false; //if there is an unsetteled R in start

    if (target[i] === "L") lCount++; //add l to count
    if (target[i] === "R") rCount--; //remove r from count

    if (lCount < 0 || rCount < 0) return false; //check if the requirements are less than available
  }
  return !lCount && !rCount; //count should return to zero as all L and R are consumed
};

// All top voted solutions are two pointer */

// Length of the Longest Alphabetical Continuous Substring          2/4/2023
/* 
// An alphabetical continuous string is a string consisting of consecutive letters in the alphabet. In other words, it is any substring of the string "abcdefghijklmnopqrstuvwxyz".

// For example, "abc" is an alphabetical continuous string, while "acb" and "za" are not.
// Given a string s consisting of lowercase letters only, return the length of the longest alphabetical continuous substring.

// Example 1:
//    Input: s = "abacaba"
//    Output: 2
// Explanation: There are 4 distinct continuous substrings: "a", "b", "c" and "ab".
// "ab" is the longest continuous substring.

// Example 2:
//    Input: s = "abcde"
//    Output: 5
// Explanation: "abcde" is the longest continuous substring.

// Constraints:
//    1 <= s.length <= 105
//    s consists of only English lowercase letters.

const longestContinuousSubstring = (s) => {
  let res = 1;
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== String.fromCharCode(s[i - 1].charCodeAt(0) + 1)) {
      res = Math.max(count, res);
      count = 1;
    } else count++;
  }
  return Math.max(count, res);
};

console.log(longestContinuousSubstring("abacaba")); // 2
console.log(longestContinuousSubstring("abcde")); // 5
console.log(longestContinuousSubstring("awy")); // 1

// Same as top voted */

// Using a Robot to Print the Lexicographically Smallest String         2/5/2023
/* 
// You are given a string s and a robot that currently holds an empty string t. Apply one of the following operations until s and t are both empty:

// Remove the first character of a string s and give it to the robot. The robot will append this character to the string t.
// Remove the last character of a string t and give it to the robot. The robot will write this character on paper.
// Return the lexicographically smallest string that can be written on the paper.

// Example 1:
//    Input: s = "zza"
//    Output: "azz"
// Explanation: Let p denote the written string.
// Initially p="", s="zza", t="".
// Perform first operation three times p="", s="", t="zza".
// Perform second operation three times p="azz", s="", t="".

// Example 2:
//    Input: s = "bac"
//    Output: "abc"
// Explanation: Let p denote the written string.
// Perform first operation twice p="", s="c", t="ba".
// Perform second operation twice p="ab", s="c", t="".
// Perform first operation p="ab", s="", t="c".
// Perform second operation p="abc", s="", t="".

// Example 3:
//    Input: s = "bdda"
//    Output: "addb"
// Explanation: Let p denote the written string.
// Initially p="", s="bdda", t="".
// Perform first operation four times p="", s="", t="bdda".
// Perform second operation four times p="addb", s="", t="".

// Constraints:
//    1 <= s.length <= 105
//    s consists of only English lowercase letters.

const robotWithString = (s) => {
  let sorted = [...s].sort();
  s = [...s];

  let res = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == sorted[0]) {
      res.push(s[i], ...s.slice(i - count, i).reverse());
      sorted.shift();
      count = 0;
    } else count++;

    if (i == s.length - 1 && count > 0) {
      res.push(...s.slice(i - count, i - 1).reverse());
    }
  }
  return res.join("");
};

console.log(robotWithString("zza")); // 'azz'
console.log(robotWithString("bac")); // 'abc'
console.log(robotWithString("bdda")); // 'addb'
console.log(robotWithString("bydizfve")); // 'bdevfziy'

// Close but not quite

var topVotedRobotWithString = function (s) {
  console.log(s);
  // compute minimum toward the right
  let minimums = new Array(s.length);
  let minimum = "{";
  let minIndex = -1;
  for (let i = s.length - 1; i >= 0; i--) {
    // if the minimum element is equal, we pick
    // the one with lower index
    if (s[i] <= minimum) {
      minimum = s[i];
      minIndex = i;
    }
    minimums[i] = minIndex;
  }
  let result = [];
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // compare s[minimums[i]] with top of stack
    while (stack.length && s[minimums[i]] >= stack.at(-1)) {
      result.push(stack.pop());
    }
    stack.push(s[i]);
  }

  // the remaining characters in the stack are also popped
  // and added to the answer
  while (stack.length) {
    result.push(stack.pop());
  }

  // return the string made after joining all the characters
  return result.join("");
}; */

// Intervals Between Identical Elements         2/6/2023
/* 
// You are given a 0-indexed array of n integers arr.

// The interval between two elements in arr is defined as the absolute difference between their indices. More formally, the interval between arr[i] and arr[j] is |i - j|.

// Return an array intervals of length n where intervals[i] is the sum of intervals between arr[i] and each element in arr with the same value as arr[i].

// Note: |x| is the absolute value of x.

// Example 1:
//    Input: arr = [2,1,3,1,2,3,3]
//    Output: [4,2,7,2,4,4,5]
// Explanation:
// - Index 0: Another 2 is found at index 4. |0 - 4| = 4
// - Index 1: Another 1 is found at index 3. |1 - 3| = 2
// - Index 2: Two more 3s are found at indices 5 and 6. |2 - 5| + |2 - 6| = 7
// - Index 3: Another 1 is found at index 1. |3 - 1| = 2
// - Index 4: Another 2 is found at index 0. |4 - 0| = 4
// - Index 5: Two more 3s are found at indices 2 and 6. |5 - 2| + |5 - 6| = 4
// - Index 6: Two more 3s are found at indices 2 and 5. |6 - 2| + |6 - 5| = 5

// Example 2:
//    Input: arr = [10,5,10,10]
//    Output: [5,0,3,4]
// Explanation:
// - Index 0: Two more 10s are found at indices 2 and 3. |0 - 2| + |0 - 3| = 5
// - Index 1: There is only one 5 in the array, so its sum of intervals to identical elements is 0.
// - Index 2: Two more 10s are found at indices 0 and 3. |2 - 0| + |2 - 3| = 3
// - Index 3: Two more 10s are found at indices 0 and 2. |3 - 0| + |3 - 2| = 4

// Constraints:
//    n == arr.length
//    1 <= n <= 105
//    1 <= arr[i] <= 105

const getDistances = (arr) => {
  const map = arr.reduce((a, c, i) => {
    a[c] ? a[c].push(i) : (a[c] = [i]);
    return a;
  }, {});

  let seen = {};
  return arr.map((c) => {
    const indexes = map[c];
    if (indexes.length == 1) return 0;
    if (indexes.length == 2) return indexes[1] - indexes[0];

    let count = seen[c] ?? 0;
    let res = 0;
    for (let i = 0; i < count; i++) res += indexes[count] - indexes[i];
    for (let i = count + 1; i < indexes.length; i++)
      res += indexes[i] - indexes[count];
    seen[c] = count + 1;
    return res;
  });
};

console.log(getDistances([2, 1, 3, 1, 2, 3, 3])); // [4,2,7,2,4,4,5]
console.log(getDistances([10, 5, 10, 10])); // [5,0,3,4]

var topVotedGetDistances = function (arr) {
  const map = new Map();
  const result = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const val = map.get(num) || {
      count: 0,
      sum: 0,
    };
    result[i] += val.count * i - val.sum;
    val.sum += i;
    val.count++;
    map.set(num, val);
  }
  map.clear();

  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    const val = map.get(num) || {
      count: 0,
      sum: 0,
    };
    result[i] += val.sum - val.count * i;
    val.sum += i;
    val.count++;
    map.set(num, val);
  }

  return result;
}; */

// Minimum Lines to Represent a Line Chart          2/7/2023
/* 
// You are given a 2D integer array stockPrices where stockPrices[i] = [dayi, pricei] indicates the price of the stock on day dayi is pricei. A line chart is created from the array by plotting the points on an XY plane with the X-axis representing the day and the Y-axis representing the price and connecting adjacent points. One such example is shown below:

// Return the minimum number of lines needed to represent the line chart.

// Example 1:
//    Input: stockPrices = [[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]]
//    Output: 3
// Explanation:
// The diagram above represents the input, with the X-axis representing the day and Y-axis representing the price.
// The following 3 lines can be drawn to represent the line chart:
// - Line 1 (in red) from (1,7) to (4,4) passing through (1,7), (2,6), (3,5), and (4,4).
// - Line 2 (in blue) from (4,4) to (5,4).
// - Line 3 (in green) from (5,4) to (8,1) passing through (5,4), (6,3), (7,2), and (8,1).
// It can be shown that it is not possible to represent the line chart using less than 3 lines.

// Example 2:
//    Input: stockPrices = [[3,4],[1,2],[7,8],[2,3]]
//    Output: 1
// Explanation:
// As shown in the diagram above, the line chart can be represented with a single line.

// Constraints:
//    1 <= stockPrices.length <= 105
//    stockPrices[i].length == 2
//    1 <= dayi, pricei <= 109
//    All dayi are distinct.

const minimumLines = (stockPrices) => {
  if (stockPrices.length == 1) return 0;
  stockPrices.sort((a, b) => a[0] - b[0]);
  let prevslope;
  let count = 0;
  for (let i = 0; i < stockPrices.length - 1; i++) {
    const [x1, y1] = stockPrices[i];
    const [x2, y2] = stockPrices[i + 1];
    const slope = (y2 - y1) / (x2 - x1);
    if (slope !== prevslope) {
      prevslope = slope;
      count++;
    }
  }
  return count;
};

// prettier-ignore
console.log(minimumLines([[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]])); // 3
// prettier-ignore
console.log(minimumLines([[3,4],[1,2],[7,8],[2,3]])); // 1
// prettier-ignore
console.log(minimumLines([[1,1],[500000000,499999999],[1000000000,999999998]])); // 2

// Doesn't pass for larger test cases

const topVotedMinimumLines = function (stockPrices) {
  if (stockPrices.length === 1) return 0;
  stockPrices.sort(function (a, b) {
    return a[0] - b[0];
  });
  let count = 1;
  for (let i = 2; i < stockPrices.length; i++) {
    let x1 = BigInt(stockPrices[i - 2][0]);
    let x2 = BigInt(stockPrices[i - 1][0]);
    let x3 = BigInt(stockPrices[i][0]);
    let y1 = BigInt(stockPrices[i - 2][1]);
    let y2 = BigInt(stockPrices[i - 1][1]);
    let y3 = BigInt(stockPrices[i][1]);
    if ((y2 - y1) * (x3 - x2) !== (y3 - y2) * (x2 - x1)) {
      //as  (y3-y2)/(x3-x2) = (y2-y1)/(x2-x1) for same slope
      count++;
    }
  }
  return count;
};

// Tested it and the comparison needs to be BigInts and a multiplication for this to work
// As seen in the top voted's if statement

const revisedMinimumLines = function (stockPrices) {
  if (stockPrices.length == 1) return 0;
  const stocks = stockPrices
    .sort((a, b) => a[0] - b[0])
    .map((day) => day.map((c) => BigInt(c)));
  let count = 1;
  for (let i = 0; i < stocks.length - 2; i++) {
    const [x1, y1] = stocks[i];
    const [x2, y2] = stocks[i + 1];
    const [x3, y3] = stocks[i + 2];
    if ((y2 - y1) * (x3 - x2) !== (y3 - y2) * (x2 - x1)) count++;
  }
  return count;
}; */

// Steps to Make Array Non-decreasing         2/8/2023
/* 
// You are given a 0-indexed integer array nums. In one step, remove all elements nums[i] where nums[i - 1] > nums[i] for all 0 < i < nums.length.

// Return the number of steps performed until nums becomes a non-decreasing array.

// Example 1:
//    Input: nums = [5,3,4,4,7,3,6,11,8,5,11]
//    Output: 3
// Explanation: The following are the steps performed:
// - Step 1: [5,3,4,4,7,3,6,11,8,5,11] becomes [5,4,4,7,6,11,11]
// - Step 2: [5,4,4,7,6,11,11] becomes [5,4,7,11,11]
// - Step 3: [5,4,7,11,11] becomes [5,7,11,11]
// [5,7,11,11] is a non-decreasing array. Therefore, we return 3.

// Example 2:
//    Input: nums = [4,5,7,7,13]
//    Output: 0
// Explanation: nums is already a non-decreasing array. Therefore, we return 0.

// Constraints:
//    1 <= nums.length <= 105
//    1 <= nums[i] <= 109

const totalSteps = (nums, count = 0) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      if (!index) var index = {};
      index[i] = true;
    }
  }
  if (!index) return count;
  return totalSteps(
    nums.filter((_, i) => !index[i]),
    ++count
  );
};

console.log(totalSteps([5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11])); // 3
console.log(totalSteps([4, 5, 7, 7, 13])); // 0

// Pretty clean, but doesn't pass larger test cases

var topVotedTotalSteps = function (nums) {
  let stack = [],
    dp = new Array(nums.length).fill(0),
    max = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      dp[i] = Math.max(++dp[i], dp[stack.pop()]);
      max = Math.max(dp[i], max);
    }
    stack.push(i);
  }
  return max;
};

// Stack & DP solution */

// Removing Stars From a String         2/9/2023
/* 
// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:

// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.

// Example 1:
//    Input: s = "leet**cod*e"
//    Output: "lecoe"
// Explanation: Performing the removals from left to right:
// - The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
// - The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
// - The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
// There are no more stars, so we return "lecoe".

// Example 2:
//    Input: s = "erase*****"
//    Output: ""
// Explanation: The entire string is removed, so we return an empty string.

// Constraints:
//    1 <= s.length <= 105
//    s consists of lowercase English letters and stars *.
//    The operation above can be performed on s.

const easyRemoveStars = (s) => {
  for (let i = 1; i < s.length; i++)
    if (s[i] == "*")
      return removeStars(s.substring(0, i - 1) + s.substring(i + 1));
  return s;
};

const oneLineRemoveStars = (s) =>
  [...s].reduce(
    (a, c) => (c == "*" ? a.substring(0, a.length - 1) : (a += c)),
    ""
  );

const removeStars = (s) =>
  [...s]
    .reduce((a, c) => {
      c == "*" ? a.pop() : a.push(c);
      return a;
    }, [])
    .join("");

console.log(removeStars("leet**cod*e")); // 'lecoe'
console.log(removeStars("erase*****")); // ''

// One line solution had poor runtime
// Settled on last removeStars function

// Very similar to top voted */

// Longest Ideal Subsequence          2/10/2023
/* 
// You are given a string s consisting of lowercase letters and an integer k. We call a string t ideal if the following conditions are satisfied:

// t is a subsequence of the string s.
// The absolute difference in the alphabet order of every two adjacent letters in t is less than or equal to k.
// Return the length of the longest ideal string.

// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

// Note that the alphabet order is not cyclic. For example, the absolute difference in the alphabet order of 'a' and 'z' is 25, not 1.

// Example 1:
//    Input: s = "acfgbd", k = 2
//    Output: 4
// Explanation: The longest ideal string is "acbd". The length of this string is 4, so 4 is returned.
// Note that "acfgbd" is not ideal because 'c' and 'f' have a difference of 3 in alphabet order.

// Example 2:
//    Input: s = "abcd", k = 3
//    Output: 4
// Explanation: The longest ideal string is "abcd". The length of this string is 4, so 4 is returned.

// Constraints:
//    1 <= s.length <= 105
//    0 <= k <= 25
//    s consists of lowercase English letters.

var topVotedLongestIdealString = function (s, k) {
  let n = s.length;
  let dp = Array(26).fill(0);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const cur = s.charCodeAt(i) - 97;
    dp[cur] += 1;
    for (let j = Math.max(0, cur - k); j <= Math.min(cur + k, 25); j++) {
      if (j !== cur) {
        dp[cur] = Math.max(dp[cur], dp[j] + 1);
      }
    }
    ans = Math.max(dp[cur], ans);
  }
  return ans;
};

console.log(longestIdealString("acfgbd", 2)); // 4
console.log(longestIdealString("abcd", 3)); // 4

// I need to learn dp */

// Reduction Operations to Make the Array Elements Equal          2/11/2023
/* 
// Given an integer array nums, your goal is to make all elements in nums equal. To complete one operation, follow these steps:

// Find the largest value in nums. Let its index be i (0-indexed) and its value be largest. If there are multiple elements with the largest value, pick the smallest i.
// Find the next largest value in nums strictly smaller than largest. Let its value be nextLargest.
// Reduce nums[i] to nextLargest.
// Return the number of operations to make all elements in nums equal.

// Example 1:
//    Input: nums = [5,1,3]
//    Output: 3
// Explanation: It takes 3 operations to make all elements in nums equal:
// 1. largest = 5 at index 0. nextLargest = 3. Reduce nums[0] to 3. nums = [3,1,3].
// 2. largest = 3 at index 0. nextLargest = 1. Reduce nums[0] to 1. nums = [1,1,3].
// 3. largest = 3 at index 2. nextLargest = 1. Reduce nums[2] to 1. nums = [1,1,1].

// Example 2:
//    Input: nums = [1,1,1]
//    Output: 0
// Explanation: All elements in nums are already equal.

// Example 3:
//    Input: nums = [1,1,2,2,3]
//    Output: 4
// Explanation: It takes 4 operations to make all elements in nums equal:
// 1. largest = 3 at index 4. nextLargest = 2. Reduce nums[4] to 2. nums = [1,1,2,2,2].
// 2. largest = 2 at index 2. nextLargest = 1. Reduce nums[2] to 1. nums = [1,1,1,2,2].
// 3. largest = 2 at index 3. nextLargest = 1. Reduce nums[3] to 1. nums = [1,1,1,1,2].
// 4. largest = 2 at index 4. nextLargest = 1. Reduce nums[4] to 1. nums = [1,1,1,1,1].

// Constraints:
//    1 <= nums.length <= 5 * 104
//    1 <= nums[i] <= 5 * 104

const reductionOperations = (nums) => {
  nums.sort((a, b) => a - b);
  let dist = [...new Set(nums)];
  return nums.reduce((a, c) => (a += dist.indexOf(c)), 0);
};

console.log(reductionOperations([5, 1, 3])); // 3
console.log(reductionOperations([1, 1, 1])); // 0
console.log(reductionOperations([1, 1, 2, 2, 3])); // 4

var topVotedReductionOperations = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = nums.length - 1; i > 0; i--)
    if (nums[i] !== nums[i - 1]) count += nums.length - i;
  return count;
}; */

// Remove All Occurrences of a Substring          2/12/2023
/* 
// Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.

// A substring is a contiguous sequence of characters in a string.

// Example 1:
//    Input: s = "daabcbaabcbc", part = "abc"
//    Output: "dab"
// Explanation: The following operations are done:
// - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
// - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
// - s = "dababc", remove "abc" starting at index 3, so s = "dab".
// Now s has no occurrences of "abc".

// Example 2:
//    Input: s = "axxxxyyyyb", part = "xy"
//    Output: "ab"
// Explanation: The following operations are done:
// - s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
// - s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
// - s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
// - s = "axyb", remove "xy" starting at index 1 so s = "ab".
// Now s has no occurrences of "xy".

// Constraints:
//    1 <= s.length <= 1000
//    1 <= part.length <= 1000
//    s​​​​​​ and part consists of lowercase English letters.

const removeOccurrences = (s, part) =>
  s.includes(part) ? removeOccurrences(s.replace(part, ""), part) : s;

console.log(removeOccurrences("daabcbaabcbc", "abc")); // "dab"
console.log(removeOccurrences("axxxxyyyyb", "xy")); // "ab"

// OK runtime
// Same as most top voted */

// Maximum Value after Insertion          2/13/2023
/* 
// You are given a very large integer n, represented as a string,​​​​​​ and an integer digit x. The digits in n and the digit x are in the inclusive range [1, 9], and n may represent a negative number.

// You want to maximize n's numerical value by inserting x anywhere in the decimal representation of n​​​​​​. You cannot insert x to the left of the negative sign.

// For example, if n = 73 and x = 6, it would be best to insert it between 7 and 3, making n = 763.
// If n = -55 and x = 2, it would be best to insert it before the first 5, making n = -255.
// Return a string representing the maximum value of n​​​​​​ after the insertion.

// Example 1:
//    Input: n = "99", x = 9
//    Output: "999"
// Explanation: The result is the same regardless of where you insert 9.

// Example 2:
//    Input: n = "-13", x = 2
//    Output: "-123"
// Explanation: You can make n one of {-213, -123, -132}, and the largest of those three is -123.

// Constraints:
//    1 <= n.length <= 105
//    1 <= x <= 9
//    The digits in n​​​ are in the range [1, 9].
//    n is a valid representation of an integer.
//    In the case of a negative n,​​​​​​ it will begin with '-'.

const maxValue = (n, x) => {
  const isPositive = n[0] !== "-";
  for (let i = 0; i < n.length; i++) {
    if ((isPositive && n[i] < x) || (!isPositive && n[i] > x))
      return n.substring(0, i) + x + n.substring(i);
  }
  return n + x;
};

console.log(maxValue("99", 9)); // "999"
console.log(maxValue("-13", 2)); // "-123"
console.log(maxValue("-132", 3)); // "-1323"

// Beats 90% of submissions

const topVotedMaxValue = (s, x) => {
  let neg = false;
  if (s[0] == "-") {
    neg = true;
    s = s.slice(1); // if neg, remove '-'
  }
  let xs = x + "";
  let n = s.length;
  if (neg) {
    // neg, make min
    for (let i = 0; i < n; i++) {
      if (xs < s[i]) {
        return "-" + s.slice(0, i) + xs + s.slice(i);
      }
    }
    return "-" + s + xs;
  } else {
    // pos, make max
    for (let i = 0; i < n; i++) {
      if (xs > s[i]) {
        return s.slice(0, i) + xs + s.slice(i);
      }
    }
    return s + xs; // not found, add to the end
  }
}; */

// Maximum Count of Positive Integer and Negative Integer         2/14/2023
/* 
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:
//    Input: nums = [-2,-1,-1,1,2,3]
//    Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

// Example 2:
//    Input: nums = [-3,-2,-1,0,0,1,2]
//    Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

// Example 3:
//    Input: nums = [5,20,66,1314]
//    Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

// Constraints:
//    1 <= nums.length <= 2000
//    -2000 <= nums[i] <= 2000
//    nums is sorted in a non-decreasing order.

// Follow up: Can you solve the problem in O(log(n)) time complexity?

const maximumCount = (nums) => {
  nums = nums.filter((x) => x !== 0);
  let posIndex = nums.findIndex((x) => x > 0);
  if (posIndex == -1) return nums.length;
  return Math.max(posIndex, nums.length - posIndex);
};

console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
console.log(maximumCount([5, 20, 66, 1314])); // 4

// Good runtime

var topVotedMaximumCount = function (nums) {
  return Math.max(upper_bound(nums), lower_bound(nums));
};

// binary search for the index of largest(in value) negative number
function upper_bound(nums) {
  if (nums[0] >= 0) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.ceil((left + right) / 2);
    if (nums[mid] < 0) left = mid;
    else right = mid - 1;
  }
  return left + 1;
}

// binary search for the index of smallest positive number
function lower_bound(nums) {
  if (nums[nums.length - 1] <= 0) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > 0) right = mid;
    else left = mid + 1;
  }
  return nums.length - left;
}

// All top voted are binary search */

// Increment Submatrices by One         2/15/2023
/* 
// You are given a positive integer n, indicating that we initially have an n x n 0-indexed integer matrix mat filled with zeroes.

// You are also given a 2D integer array query. For each query[i] = [row1i, col1i, row2i, col2i], you should do the following operation:

// Add 1 to every element in the submatrix with the top left corner (row1i, col1i) and the bottom right corner (row2i, col2i). That is, add 1 to mat[x][y] for for all row1i <= x <= row2i and col1i <= y <= col2i.
// Return the matrix mat after performing every query.

// Example 1:
//    Input: n = 3, queries = [[1,1,2,2],[0,0,1,1]]
//    Output: [[1,1,0],[1,2,1],[0,1,1]]
// Explanation: The diagram above shows the initial matrix, the matrix after the first query, and the matrix after the second query.
// - In the first query, we add 1 to every element in the submatrix with the top left corner (1, 1) and bottom right corner (2, 2).
// - In the second query, we add 1 to every element in the submatrix with the top left corner (0, 0) and bottom right corner (1, 1).

// Example 2:
//    Input: n = 2, queries = [[0,0,1,1]]
//    Output: [[1,1],[1,1]]
// Explanation: The diagram above shows the initial matrix and the matrix after the first query.
// - In the first query we add 1 to every element in the matrix.

// Constraints:
//    1 <= n <= 500
//    1 <= queries.length <= 104
//    0 <= row1i <= row2i < n
//    0 <= col1i <= col2i < n

const rangeAddQueries = (n, queries) => {
  let grid = new Array(n).fill().map((x) => new Array(n).fill(0));
  for (let [row1, col1, row2, col2] of queries)
    for (let row = row1; row <= row2; row++)
      for (let col = col1; col <= col2; col++) grid[row][col]++;
  return grid;
};

// prettier-ignore
console.log(rangeAddQueries(3, [[1,1,2,2],[0,0,1,1]])); // [[1,1,0],[1,2,1],[0,1,1]]
// prettier-ignore
console.log(rangeAddQueries(2, [[0,0,1,1]])); // [[1,1],[1,1]]

// O(n^3) complexity, but works
// TIL: https://stackoverflow.com/questions/64669938/updating-an-element-in-javascript-2d-array-updates-entire-column

// Same as top voted
// Anything faster is very bulky */

// Maximum Sum of Distinct Subarrays With Length K          2/16/2023
/* 
// You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
//    Input: nums = [1,5,4,2,9,9,9], k = 3
//    Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

// Example 2:
//    Input: nums = [4,4,4], k = 3
//    Output: 0
// Explanation: The subarrays of nums with length 3 are:
// - [4,4,4] which does not meet the requirements because the element 4 is repeated.
// We return 0 because no subarrays meet the conditions.

// Constraints:
//    1 <= k <= nums.length <= 105
//    1 <= nums[i] <= 105

const maximumSubarraySum = (n, k) => {
  if (new Set(n).size < k) return 0;

  let [max, cur, count] = [0, 0, {}];
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    cur += r;
    count[r] ? count[r]++ : (count[r] = 1);

    if (i < k - 1) continue;
    if (Object.keys(count).length == k) max = Math.max(max, cur);

    const l = n[i - k + 1];
    cur -= l;
    count[l] == 1 ? delete count[l] : count[l]--;
  }
  return max;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)); // 15
console.log(maximumSubarraySum([4, 4, 4], 3)); // 0
console.log(maximumSubarraySum([9, 9, 9, 1, 2, 3], 3)); // 12

function topVotedMaximumSubarraySum(nums, k) {
  const eleFreq = new Map(); // Used to store the frequency of an element within the window k
  let currSum = 0,
    maxSum = 0; // local and global sum
  let i = 0;
  // Loop over the elements untill you have your first window
  // record the currSum and keep adding the num[i] to your map
  while (i < k) {
    currSum += nums[i];
    eleFreq.set(nums[i], (eleFreq.get(nums[i]) || 0) + 1);
    i++;
  }
  // Check if the all the elements in your window is unique
  if (eleFreq.size === k) {
    maxSum = Math.max(maxSum, currSum);
  }
  while (i < nums.length) {
    // Since we already have k elements in the window, remove the first element in the window. Subtract the sum and frequency of first element to reflect the removal
    currSum -= nums[i - k];
    eleFreq.set(nums[i - k], (eleFreq.get(nums[i - k]) || 0) - 1);
    // If freq is zero, then just remove it from the map so that we have a count of unique elements in the window
    if (eleFreq.get(nums[i - k]) === 0) eleFreq.delete(nums[i - k]);
    currSum += nums[i];
    eleFreq.set(nums[i], (eleFreq.get(nums[i]) || 0) + 1);
    // Everytime you add nums[i] in your map, check if there are k unique elements, if yes then calcualte maxSum again
    if (eleFreq.size === k) {
      maxSum = Math.max(maxSum, currSum);
    }
    i++;
  }
  return maxSum;
}

// Same logic, but faster

const revisedMaximumSubarraySum = (n, k) => {
  if (new Set(n).size < k) return 0;

  let [max, cur, freq] = [0, 0, new Map()];
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    cur += r;
    freq.set(r, (freq.get(r) || 0) + 1);

    if (i < k - 1) continue;
    if (freq.size == k) max = Math.max(max, cur);

    const l = n[i - k + 1];
    cur -= l;
    freq.set(l, (freq.get(l) || 0) - 1);
    if (freq.get(l) === 0) freq.delete(l);
  }
  return max;
};
console.log(revisedMaximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)); // 15
console.log(revisedMaximumSubarraySum([4, 4, 4], 3)); // 0
console.log(revisedMaximumSubarraySum([9, 9, 9, 1, 2, 3], 3)); // 12

// ♥ -Hannah */

// Difference Between Ones and Zeros in Row and Column          2/17/2023
/* 
// You are given a 0-indexed m x n binary matrix grid.

// A 0-indexed m x n difference matrix diff is created with the following procedure:

// Let the number of ones in the ith row be onesRowi.
// Let the number of ones in the jth column be onesColj.
// Let the number of zeros in the ith row be zerosRowi.
// Let the number of zeros in the jth column be zerosColj.
// diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
// Return the difference matrix diff.

// Example 1:
//    Input: grid = [[0,1,1],[1,0,1],[0,0,1]]
//    Output: [[0,0,4],[0,0,4],[-2,-2,2]]
// Explanation:
// - diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 2 + 1 - 1 - 2 = 0
// - diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 2 + 1 - 1 - 2 = 0
// - diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 2 + 3 - 1 - 0 = 4
// - diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 2 + 1 - 1 - 2 = 0
// - diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 2 + 1 - 1 - 2 = 0
// - diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 2 + 3 - 1 - 0 = 4
// - diff[2][0] = onesRow2 + onesCol0 - zerosRow2 - zerosCol0 = 1 + 1 - 2 - 2 = -2
// - diff[2][1] = onesRow2 + onesCol1 - zerosRow2 - zerosCol1 = 1 + 1 - 2 - 2 = -2
// - diff[2][2] = onesRow2 + onesCol2 - zerosRow2 - zerosCol2 = 1 + 3 - 2 - 0 = 2

// Example 2:
//    Input: grid = [[1,1,1],[1,1,1]]
//    Output: [[5,5,5],[5,5,5]]
// Explanation:
// - diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 3 + 2 - 0 - 0 = 5
// - diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 3 + 2 - 0 - 0 = 5
// - diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 3 + 2 - 0 - 0 = 5
// - diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 3 + 2 - 0 - 0 = 5
// - diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 3 + 2 - 0 - 0 = 5
// - diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 3 + 2 - 0 - 0 = 5

// Constraints:
//    m == grid.length
//    n == grid[i].length
//    1 <= m, n <= 105
//    1 <= m * n <= 105
//    grid[i][j] is either 0 or 1.

const onesMinusZeros = (grid) => {
  let [row1, col1] = [
    new Array(grid.length).fill(0),
    new Array(grid[0].length).fill(0),
  ];
  let [row0, col0] = [
    new Array(grid.length).fill(0),
    new Array(grid[0].length).fill(0),
  ];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        row1[i]++;
        col1[j]++;
      } else {
        row0[i]++;
        col0[j]++;
      }
    }
  }
  return grid.map((row, i) =>
    row.map((_, j) => row1[i] + col1[j] - row0[i] - col0[j])
  );
};

// prettier-ignore
console.log(onesMinusZeros([[0,1,1],[1,0,1],[0,0,1]])); // [[0,0,4],[0,0,4],[-2,-2,2]]
// prettier-ignore
console.log(onesMinusZeros([[1,1,1],[1,1,1]])); // [[5,5,5],[5,5,5]]

// Same logic as top voted solutions */

// Count Vowel Strings in Ranges          2/18/2023
/* 
// You are given a 0-indexed array of strings words and a 2D array of integers queries.

// Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.

// Return an array ans of size queries.length, where ans[i] is the answer to the ith query.

// Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
//    Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
//    Output: [2,3,0]
// Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
// The answer to the query [0,2] is 2 (strings "aba" and "ece").
// to query [1,4] is 3 (strings "ece", "aa", "e").
// to query [1,1] is 0.
// We return [2,3,0].

// Example 2:
//    Input: words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]
//    Output: [3,2,1]
// Explanation: Every string satisfies the conditions, so we return [3,2,1].

// Constraints:
//    1 <= words.length <= 105
//    1 <= words[i].length <= 40
//    words[i] consists only of lowercase English letters.
//    sum(words[i].length) <= 3 * 105
//    1 <= queries.length <= 105
//    0 <= li <= ri < words.length

const vowelStrings = (w, q) => {
  const isVowel = (c) =>
    c == "a" || c == "e" || c == "i" || c == "o" || c == "u";
  const isVowelString = w.map((c) => isVowel(c[0]) && isVowel(c[c.length - 1]));

  return q.map(([l, r]) => {
    let count = 0;
    for (let i = l; i <= r; i++) if (isVowelString[i]) count++;
    return count;
  });
};

// prettier-ignore
console.log(vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]])); // [2,3,0]
// prettier-ignore
console.log(vowelStrings(["a","e","i"], [[0,2],[0,1],[2,2]])); // [3,2,1]

// Passes, although slow

var topVotedVowelStrings = function (words, queries) {
  let pref = new Array(words.length + 1).fill(0);
  let i = 0;
  for (let x of words) {
    pref[i + 1] = pref[i] + (isVowel(x[0]) && isVowel(x[x.length - 1]));
    i++;
  }
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    ans.push(pref[queries[i][1] + 1] - pref[queries[i][0]]);
  }
  return ans;
};

function isVowel(x) {
  if (
    x == "a" ||
    x == "e" ||
    x == "i" ||
    x == "o" ||
    x == "u" ||
    x == "A" ||
    x == "E" ||
    x == "I" ||
    x == "O" ||
    x == "U"
  )
    return true;
  else return false;
}

// Much faster

const revisedVowelStrings = (w, q) => {
  const isVowel = (c) =>
    c == "a" || c == "e" || c == "i" || c == "o" || c == "u";

  let count = new Array(w.length + 1).fill(0);
  w.forEach(
    (str, i) =>
      (count[i + 1] =
        count[i] + (isVowel(str[0]) && isVowel(str[str.length - 1])))
  );

  return q.map(([l, r]) => count[r + 1] - count[l]);
};

// This approach avoids the nested loop at the end, making it much faster
// First time seeing the addition of a boolean used in this way */

// Total Cost to Hire K Workers         2/19/2023
/* 
// You are given a 0-indexed integer array costs where costs[i] is the cost of hiring the ith worker.

// You are also given two integers k and candidates. We want to hire exactly k workers according to the following rules:

// You will run k sessions and hire exactly one worker in each session.
// In each hiring session, choose the worker with the lowest cost from either the first candidates workers or the last candidates workers. Break the tie by the smallest index.
// For example, if costs = [3,2,7,7,1,2] and candidates = 2, then in the first hiring session, we will choose the 4th worker because they have the lowest cost [3,2,7,7,1,2].
// In the second hiring session, we will choose 1st worker because they have the same lowest cost as 4th worker but they have the smallest index [3,2,7,7,2]. Please note that the indexing may be changed in the process.
// If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.
// A worker can only be chosen once.
// Return the total cost to hire exactly k workers.

// Example 1:
//    Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
//    Output: 11
// Explanation: We hire 3 workers in total. The total cost is initially 0.
// - In the first hiring round we choose the worker from [17,12,10,2,7,2,11,20,8]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.
// - In the second hiring round we choose the worker from [17,12,10,7,2,11,20,8]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.
// - In the third hiring round we choose the worker from [17,12,10,7,11,20,8]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11. Notice that the worker with index 3 was common in the first and last four workers.
// The total hiring cost is 11.

// Example 2:
//    Input: costs = [1,2,4,1], k = 3, candidates = 3
//    Output: 4
// Explanation: We hire 3 workers in total. The total cost is initially 0.
// - In the first hiring round we choose the worker from [1,2,4,1]. The lowest cost is 1, and we break the tie by the smallest index, which is 0. The total cost = 0 + 1 = 1. Notice that workers with index 1 and 2 are common in the first and last 3 workers.
// - In the second hiring round we choose the worker from [2,4,1]. The lowest cost is 1 (index 2). The total cost = 1 + 1 = 2.
// - In the third hiring round there are less than three candidates. We choose the worker from the remaining workers [2,4]. The lowest cost is 2 (index 0). The total cost = 2 + 2 = 4.
// The total hiring cost is 4.

// Constraints:
//    1 <= costs.length <= 105
//    1 <= costs[i] <= 105
//    1 <= k, candidates <= costs.length

const totalCost = (costs, k, candidates) => {
  let res = 0;
  for (let i = 0; i < k; i++) {
    if (costs.length <= 2 * candidates) {
      res += +costs.splice(costs.indexOf(Math.min(...costs)), 1);
    } else {
      let min = { index: Infinity, val: Infinity };

      for (let j = 0; j < candidates; j++) {
        const [l, r] = [costs[j], costs[costs.length - 1 - j]];

        if (
          (l > min.val && r > min.val) ||
          (l == min.val && j > min.index) ||
          (r == min.val && costs.length - 1 - j > min.index)
        )
          continue;

        min =
          l <= r
            ? { index: j, val: l }
            : { index: costs.length - 1 - j, val: r };
      }
      res += +costs.splice(min.index, 1);
    }
  }
  return res;
};

console.log(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)); // 11
console.log(totalCost([1, 2, 4, 1], 3, 3)); // 4

// Exceeds runtime limitations

const topVotedTotalCost = (a, k, m) => {
  let pq = new MinPriorityQueue({
    compare: (x, y) => {
      if (x[0] != y[0]) return x[0] - y[0];
      return x[1] - y[1];
    },
  });

  let n = a.length,
    l = 0,
    r = n - 1,
    res = 0;

  for (let i = 0; i < m; i++) {
    if (l <= r) {
      pq.enqueue([a[l], l]);
      l++;
    }
  }

  for (let i = 0; i < m; i++) {
    if (l <= r) {
      pq.enqueue([a[r], r]);
      r--;
    }
  }

  for (let i = 0; i < k; i++) {
    let cur = pq.dequeue();
    res += cur[0];
    if (cur[1] < l && l <= r) {
      pq.enqueue([a[l], l]);
      l++;
    } else if (cur[1] > r && l <= r) {
      pq.enqueue([a[r], r]);
      r--;
    }
  }
  return res;
};

// Today I learnt that the LeetCode javascript environment includes a couple packages:

//    lodash
//    datastructures-js/priority-queue
//    datastructures-js/queue

// https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages- */

// Divide Players Into Teams of Equal Skill         2/20/2023
/* 
// You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.

// The chemistry of a team is equal to the product of the skills of the players on that team.

// Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.

// Example 1:
//    Input: skill = [3,2,5,1,3,4]
//    Output: 22
// Explanation:
// Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
// The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.

// Example 2:
//    Input: skill = [3,4]
//    Output: 12
// Explanation:
// The two players form a team with a total skill of 7.
// The chemistry of the team is 3 * 4 = 12.

// Example 3:
//    Input: skill = [1,1,2,3]
//    Output: -1
// Explanation:
// There is no way to divide the players into teams such that the total skill of each team is equal.

// Constraints:
//    2 <= skill.length <= 105
//    skill.length is even.
//    1 <= skill[i] <= 1000

const dividePlayers = (players) => {
  players.sort((a, b) => a - b);

  const ini = [players.shift(), players.pop()];
  const skill = ini[0] + ini[1];
  let chem = ini[0] * ini[1];

  while (players.length > 0) {
    const cur = [players.shift(), players.pop()];
    const curSkill = cur[0] + cur[1];
    if (curSkill !== skill) return -1;
    chem += cur[0] * cur[1];
  }

  return chem;
};

console.log(dividePlayers([3, 2, 5, 1, 3, 4])); // 22
console.log(dividePlayers([3, 4])); // 12
console.log(dividePlayers([1, 1, 2, 3])); // -1

// Slow runtime

var topVotedDividePlayers = function (skill) {
  skill.sort((a, b) => a - b);
  let j = skill.length - 1;
  let maxVal = skill[0] + skill[skill.length - 1];
  let finalVal = 0;
  for (let i = 0; i <= j / 2; i++) {
    if (maxVal == skill[i] + skill[j - i]) finalVal += skill[i] * skill[j - i];
    else return -1;
  }
  return finalVal;
};

// j/2 definitely improved speed */

// Sort the Students by Their Kth Score         2/21/2023
/* 
// There is a class with m students and n exams. You are given a 0-indexed m x n integer matrix score, where each row represents one student and score[i][j] denotes the score the ith student got in the jth exam. The matrix score contains distinct integers only.

// You are also given an integer k. Sort the students (i.e., the rows of the matrix) by their scores in the kth (0-indexed) exam from the highest to the lowest.

// Return the matrix after sorting it.

// Example 1:
//    Input: score = [[10,6,9,1],[7,5,11,2],[4,8,3,15]], k = 2
//    Output: [[7,5,11,2],[10,6,9,1],[4,8,3,15]]
// Explanation: In the above diagram, S denotes the student, while E denotes the exam.
// - The student with index 1 scored 11 in exam 2, which is the highest score, so they got first place.
// - The student with index 0 scored 9 in exam 2, which is the second highest score, so they got second place.
// - The student with index 2 scored 3 in exam 2, which is the lowest score, so they got third place.

// Example 2:
//    Input: score = [[3,4],[5,6]], k = 0
//    Output: [[5,6],[3,4]]
// Explanation: In the above diagram, S denotes the student, while E denotes the exam.
// - The student with index 1 scored 5 in exam 0, which is the highest score, so they got first place.
// - The student with index 0 scored 3 in exam 0, which is the lowest score, so they got second place.

// Constraints:
//    m == score.length
//    n == score[i].length
//    1 <= m, n <= 250
//    1 <= score[i][j] <= 105
//    score consists of distinct integers.
//    0 <= k < n

const sortTheStudents = (score, k) => score.sort((a, b) => b[k] - a[k]);

// prettier-ignore
console.log(sortTheStudents([[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2)); // [[7,5,11,2],[10,6,9,1],[4,8,3,15]]
// prettier-ignore
console.log(sortTheStudents([[3,4],[5,6]], 0)); // [[5,6],[3,4]]

// Same as top voted */

// Count the Number of Fair Pairs         2/22/2023
/* 
// Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.

// A pair (i, j) is fair if:

// 0 <= i < j < n, and
// lower <= nums[i] + nums[j] <= upper

// Example 1:
//    Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
//    Output: 6
// Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).

// Example 2:
//    Input: nums = [1,7,9,2,5], lower = 11, upper = 11
//    Output: 1
// Explanation: There is a single fair pair: (2,3).

// Constraints:
//    1 <= nums.length <= 105
//    nums.length == n
//    -109 <= nums[i] <= 109
//    -109 <= lower <= upper <= 109

const countFairPairs = (n, l, u) =>
  n.reduce((a, c, i) => {
    for (let j = i + 1; j < n.length; j++)
      if (l <= c + n[j] && c + n[j] <= u) a++;
    return a;
  }, 0);

console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)); // 6
console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11)); // 1

// Exceeds runtime

const topVotedCountFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);
  const countless = (val) => {
    let res = 0;
    for (let i = 0, j = nums.length - 1; i < j; ++i) {
      while (i < j && nums[i] + nums[j] > val) --j;
      res += j - i;
    }
    return res;
  };
  return countless(upper) - countless(lower - 1);
}; */

// Count Number of Distinct Integers After Reverse Operations         2/23/2023
/* 
// You are given an array nums consisting of positive integers.

// You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.

// Return the number of distinct integers in the final array.

// Example 1:
//    Input: nums = [1,13,10,12,31]
//    Output: 6
// Explanation: After including the reverse of each number, the resulting array is [1,13,10,12,31,1,31,1,21,13].
// The reversed integers that were added to the end of the array are underlined. Note that for the integer 10, after reversing it, it becomes 01 which is just 1.
// The number of distinct integers in this array is 6 (The numbers 1, 10, 12, 13, 21, and 31).

// Example 2:
//    Input: nums = [2,2,2]
//    Output: 1
// Explanation: After including the reverse of each number, the resulting array is [2,2,2,2,2,2].
// The number of distinct integers in this array is 1 (The number 2).

// Constraints:
//    1 <= nums.length <= 105
//    1 <= nums[i] <= 106

const countDistinctIntegers = (nums) => {
  const rev = [...new Set(nums.filter((x) => x >= 10))].map(
    (c) => +[...`${c}`].reverse().join("")
  );
  return new Set([...rev, ...nums]).size;
};

console.log(countDistinctIntegers([1, 13, 10, 12, 31])); // 6
console.log(countDistinctIntegers([2, 2, 2])); // 1

const getReverseOfNum = (num) => {
  let str = num + "";
  return Number(str.split("").reverse().join(""));
};

const topVotedCountDistinctIntegers = (n) => {
  let arr = [...n];
  for (let i = 0; i < n.length; i++) {
    arr.push(getReverseOfNum(n[i]));
  }
  return new Set(arr).size;
};

// Same logic as top voted, but theirs is much faster

const revisedCountDistinctIntegers = (nums) => {
  nums.push(...nums.map((c) => +[...String(c)].reverse().join("")));
  return new Set(nums).size;
};

// I was trying to help by filtering my initial solution, but it ultimately made it slower */

// Minimize Maximum of Array					2/24/2023
/* 
// You are given a 0-indexed array nums comprising of n non-negative integers.

// In one operation, you must:
//    Choose an integer i such that 1 <= i < n and nums[i] > 0.
//    Decrease nums[i] by 1.
//    Increase nums[i - 1] by 1.

// Return the minimum possible value of the maximum integer of nums after performing any number of operations.

// Example 1:
//    Input: nums = [3,7,1,6]
//    Output: 5
// Explanation:
// 		One set of optimal operations is as follows:
// 		1. Choose i = 1, and nums becomes [4,6,1,6].
// 		2. Choose i = 3, and nums becomes [4,6,2,5].
// 		3. Choose i = 1, and nums becomes [5,5,2,5].
// 		The maximum integer of nums is 5. It can be shown that the maximum number cannot be less than 5.
// 		Therefore, we return 5.

// Example 2:
//    Input: nums = [10,1]
//    Output: 10
// Explanation:
// 		It is optimal to leave nums as is, and since 10 is the maximum value, we return 10.

// Constraints:
//		n == nums.length
//		2 <= n <= 105
//		0 <= nums[i] <= 109

const minimizeArrayValue = (nums) => {
  const indexOfMax = () => nums.indexOf(Math.max(...nums));
  while (indexOfMax() !== 0) {
    let i = indexOfMax();
    nums[i]--;
    nums[i - 1]++;
  }
  return Math.max(...nums);
};

console.log(minimizeArrayValue([3, 7, 1, 6])); // 5
console.log(minimizeArrayValue([10, 1])); // 10

// Too slow

var topVotedMinimizeArrayValue = function (nums) {
  let sum = 0,
    res = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    res = Math.max(res, Math.floor((sum + i) / (i + 1)));
  }
  return res;
}; */

// Most Popular Video Creator					2/25/2023
/* 
// You are given two string arrays creators and ids, and an integer array views, all of length n. The ith video on a platform was created by creator[i], has an id of ids[i], and has views[i] views.

// The popularity of a creator is the sum of the number of views on all of the creator's videos. Find the creator with the highest popularity and the id of their most viewed video.

// If multiple creators have the highest popularity, find all of them.

// If multiple videos have the highest view count for a creator, find the lexicographically smallest id.

// Return a 2D array of strings answer where answer[i] = [creatori, idi] means that creatori has the highest popularity and idi is the id of their most popular video. The answer can be returned in any order.

// Example 1:
// 		Input: creators = ["alice","bob","alice","chris"], ids = ["one","two","three","four"], views = [5,10,5,4]
// 		Output: [["alice","one"],["bob","two"]]
// Explanation:
// 		The popularity of alice is 5 + 5 = 10.
// 		The popularity of bob is 10.
// 		The popularity of chris is 4.
// 		alice and bob are the most popular creators.
// 		For bob, the video with the highest view count is "two".
// 		For alice, the videos with the highest view count are "one" and "three". Since "one" is lexicographically smaller than "three", it is included in the answer.

// Example 2:
// 		Input: creators = ["alice","alice","alice"], ids = ["a","b","c"], views = [1,2,2]
// 		Output: [["alice","b"]]
// Explanation:
// 		The videos with id "b" and "c" have the highest view count.
// 		Since "b" is lexicographically smaller than "c", it is included in the answer.

// Constraints:
//		n == creators.length == ids.length == views.length
//		1 <= n <= 105
//		1 <= creators[i].length, ids[i].length <= 5
//		creators[i] and ids[i] consist only of lowercase English letters.
//		0 <= views[i] <= 105

const mostPopularCreator = (creators, ids, views) => {
  let mostPop = 0;

  let map = creators.reduce((map, creator, i) => {
    let [curId, curViews] = [ids[i], views[i]];

    if (map.has(creator)) {
      let user = map.get(creator);
      user.pop += curViews;
      mostPop = Math.max(user.pop, mostPop);

      if (curViews > user.bestVid[1]) user.bestVid = [curId, curViews];
      else if (curViews == user.bestVid[1] && curId < user.bestVid[0])
        user.bestVid[0] = curId;
    } else {
      map.set(creator, { pop: curViews, bestVid: [curId, curViews] });
      mostPop = Math.max(curViews, mostPop);
    }

    return map;
  }, new Map());

  return [...map.entries()].reduce((res, creator) => {
    if (creator[1].pop == mostPop)
      res.push([creator[0], creator[1].bestVid[0]]);
    return res;
  }, []);
};

// prettier-ignore
console.log(mostPopularCreator(["alice","bob","alice","chris"], ["one","two","three","four"], [5,10,5,4])) // [["alice","one"],["bob","two"]]
// prettier-ignore
console.log(mostPopularCreator(["alice", "alice", "alice"], ["a", "b", "c"], [1, 2, 2])); // [["alice","b"]]
console.log(mostPopularCreator(["a", "b"], ["a", "a"], [1, 0])); // [["a","a"]]

// Top voteds were equally as bulky Maps
// Good runtime */

// Minimum Addition to Make Integer Beautiful					2/26/2023
/* 
// You are given two positive integers n and target.

// An integer is considered beautiful if the sum of its digits is less than or equal to target.

// Return the minimum non-negative integer x such that n + x is beautiful. The input will be generated such that it is always possible to make n beautiful.

// Example 1:
// 		Input: n = 16, target = 6
// 		Output: 4
// Explanation: Initially n is 16 and its digit sum is 1 + 6 = 7. After adding 4, n becomes 20 and digit sum becomes 2 + 0 = 2. It can be shown that we can not make n beautiful with adding non-negative integer less than 4.

// Example 2:
// 		Input: n = 467, target = 6
// 		Output: 33
// Explanation: Initially n is 467 and its digit sum is 4 + 6 + 7 = 17. After adding 33, n becomes 500 and digit sum becomes 5 + 0 + 0 = 5. It can be shown that we can not make n beautiful with adding non-negative integer less than 33.

// Example 3:
// 		Input: n = 1, target = 1
// 		Output: 0
// Explanation: Initially n is 1 and its digit sum is 1, which is already smaller than or equal to target.

// Constraints:
//		1 <= n <= 1012
//		1 <= target <= 150
//		The input will be generated such that it is always possible to make n beautiful.

const makeIntegerBeautiful = (n, t) => {
  let cur = String(n);
  let acc = 0;
  let index;

  for (let i = 0; i < cur.length; i++) {
    acc += Number(cur[i]);
    if (acc > t) {
      index = i;
      break;
    }
  }

  let dif = Math.pow(10, cur.length - index) - cur.substring(index);
  if (isNaN(dif)) return 0;

  let res = [...String(n + dif)].reduce((a, c) => (a += Number(c)), 0);
  if (res <= t) return dif;

  res = Number(`${9 - cur[index - 1]}${dif}`);
  return res;
};

console.log(makeIntegerBeautiful(16, 6)); // 4
console.log(makeIntegerBeautiful(467, 6)); // 33
console.log(makeIntegerBeautiful(1, 1)); // 0
console.log(makeIntegerBeautiful(19, 1)); // 81
console.log(makeIntegerBeautiful(209659314313, 22)); // 40685687

// Doesn't work for all test cases
// Pretty scuffed

var topVotedMakeIntegerBeautiful = function (n, target) {
  if (digitSum(n) <= target) return 0;
  // Padding to N, where N > n, and N is nearest multiple of 10, 100, 1000, 10000, ... and so on
  let padding = 10 - (n % 10);
  return (
    padding + 10 * topVotedMakeIntegerBeautiful((n + padding) / 10, target)
  );
};
var digitSum = function (x) {
  let summation = 0;
  while (x > 0) {
    summation += x % 10;
    x = Math.floor(x / 10); // Take care to force round down to integer to avoid underflow
  }
  return summation;
};

// I definitely overcomplicated things */

// Difference Between Element Sum and Digit Sum of an Array					2/27/2023
/* 
// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.

// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.

// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

// Example 1:
// 		Input: nums = [1,15,6,3]
// 		Output: 9
// Explanation:
// 		The element sum of nums is 1 + 15 + 6 + 3 = 25.
// 		The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// 		The absolute difference between the element sum and digit sum is |25 - 16| = 9.

// Example 2:
// 		Input: nums = [1,2,3,4]
// 		Output: 0
// Explanation:
// 		The element sum of nums is 1 + 2 + 3 + 4 = 10.
// 		The digit sum of nums is 1 + 2 + 3 + 4 = 10.
// 		The absolute difference between the element sum and digit sum is |10 - 10| = 0.

// Constraints:
//		1 <= nums.length <= 2000
//		1 <= nums[i] <= 2000

const differenceOfSum = (nums) => {
  let [el, dig] = [0, 0];
  nums.forEach((n) => {
    el += n;
    dig += [...String(n)].reduce((a, c) => (a += +c), 0);
  });
  return el - dig;
};

console.log(differenceOfSum([1, 15, 6, 3])); // 9
console.log(differenceOfSum([1, 2, 3, 4])); // 0

// 100% Runtime */

// Make Number of Distinct Characters Equal					2/28/2023
/* 
// You are given two 0-indexed strings word1 and word2.

// A move consists of choosing two indices i and j such that 0 <= i < word1.length and 0 <= j < word2.length and swapping word1[i] with word2[j].

// Return true if it is possible to get the number of distinct characters in word1 and word2 to be equal with exactly one move. Return false otherwise.

// Example 1:
// 		Input: word1 = "ac", word2 = "b"
// 		Output: false
// Explanation: Any pair of swaps would yield two distinct characters in the first string, and one in the second string.

// Example 2:
// 		Input: word1 = "abcc", word2 = "aab"
// 		Output: true
// Explanation: We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = "abac" and word2 = "cab", which both have 3 distinct characters.

// Example 3:
// 		Input: word1 = "abcde", word2 = "fghij"
// 		Output: true
// Explanation: Both resulting strings will have 5 distinct characters, regardless of which indices we swap.

// Constraints:
//		1 <= word1.length, word2.length <= 105
//		word1 and word2 consist of only lowercase English letters.

const isItPossible = (w1, w2) => {
  const map = (str) =>
    [...str].reduce((map, c) => map.set(c, map.get(c) + 1 || 1), new Map());

  const [m1, m2] = [map(w1), map(w2)];
  if (Math.abs(m1.size - m2.size) > 2) return false;

  for (let [c1, n1] of m1) {
    for (let [c2, n2] of m2) {
      if (c1 === c2) {
        if (m1.size === m2.size) return true;
      } else {
        let s1 = m1.size;
        if (n1 === 1) s1--;
        if (!m1.has(c2)) s1++;

        let s2 = m2.size;
        if (n2 === 1) s2--;
        if (!m2.has(c1)) s2++;

        if (s1 === s2) return true;
      }
    }
  }

  return false;
};

console.log(isItPossible("ac", "b")); // false
console.log(isItPossible("abcc", "aab")); // true
console.log(isItPossible("abcde", "fghij")); // true
console.log(isItPossible("aa", "ab")); // false

// Stolen from top voted
// Managed to get the Map down, but struggled with the nested for loop logic */

// Two Best Non-Overlapping Events					3/1/2023
/* 
// You are given a 0-indexed 2D integer array of events where events[i] = [startTimei, endTimei, valuei]. The ith event starts at startTimei and ends at endTimei, and if you attend this event, you will receive a value of valuei. You can choose at most two non-overlapping events to attend such that the sum of their values is maximized.

// Return this maximum sum.

// Note that the start time and end time is inclusive: that is, you cannot attend two events where one of them starts and the other ends at the same time. More specifically, if you attend an event with end time t, the next event must start at or after t + 1.

// Example 1:
// 		Input: events = [[1,3,2],[4,5,2],[2,4,3]]
// 		Output: 4
// Explanation: Choose the green events, 0 and 1 for a sum of 2 + 2 = 4.

// Example 2:
// 		Example 1 Diagram
// 		Input: events = [[1,3,2],[4,5,2],[1,5,5]]
// 		Output: 5
// Explanation: Choose event 2 for a sum of 5.

// Example 3:
// 		Input: events = [[1,5,3],[1,5,1],[6,6,5]]
// 		Output: 8
// Explanation: Choose events 0 and 2 for a sum of 3 + 5 = 8.

// Constraints:
//		2 <= events.length <= 105
//		events[i].length == 3
//		1 <= startTimei <= endTimei <= 109
//		1 <= valuei <= 106

const maxTwoEvents = (e) => {
  e.sort((a, b) => b[2] - a[2]);
  let max = e[0][2];
  let seen = {};

  for (let i = 0; i < e.length - 1; i++) {
    if (seen[e[i]]) continue;
    else seen[e[i]] = true;

    for (let j = i + 1; j < e.length; j++) {
      let [s1, e1, val1] = e[i];
      let [s2, e2, val2] = e[j];

      if (val1 + val2 <= max) break;
      if (s1 > e2 || e1 < s2) max = Math.max(max, val1 + val2);
    }
  }
  return max;
};

// prettier-ignore
console.log(maxTwoEvents([[1,3,2],[4,5,2],[2,4,3]])) // 4
// prettier-ignore
console.log(maxTwoEvents([[1,3,2],[4,5,2],[1,5,5]])) // 5
// prettier-ignore
console.log(maxTwoEvents([[1,5,3],[1,5,1],[6,6,5]])) // 8

const topVotedMaxTwoEvents = (a) => {
  let d = [],
    res = 0,
    maxPreSum = 0;
  for (const [start, end, sum] of a) {
    d.push([start, sum, 1]);
    d.push([end, sum, -1]);
  }
  d.sort((x, y) => {
    if (x[0] != y[0]) return x[0] - y[0];
    return y[2] - x[2];
  });
  for (const [, sum, flag] of d) {
    if (flag == -1) {
      maxPreSum = Math.max(maxPreSum, sum);
    } else {
      res = Math.max(res, maxPreSum + sum);
    }
  }
  return res;
};

// Really nice */

// Plates Between Candles					3/2/2023
/* 
// There is a long table with a line of plates and candles arranged on top of it. You are given a 0-indexed string s consisting of characters '*' and '|' only, where a '*' represents a plate and a '|' represents a candle.

// You are also given a 0-indexed 2D integer array queries where queries[i] = [lefti, righti] denotes the substring s[lefti...righti] (inclusive). For each query, you need to find the number of plates between candles that are in the substring. A plate is considered between candles if there is at least one candle to its left and at least one candle to its right in the substring.

// For example, s = "||**||**|*", and a query [3, 8] denotes the substring "*||**|". The number of plates between candles in this substring is 2, as each of the two plates has at least one candle in the substring to its left and right.

// Return an integer array answer where answer[i] is the answer to the ith query.

// Example 1:
// 		ex-1
// 		Input: s = "**|**|***|", queries = [[2,5],[5,9]]
// 		Output: [2,3]
// Explanation:
// 		- queries[0] has two plates between candles.
// 		- queries[1] has three plates between candles.

// Example 2:
// 		ex-2
// 		Input: s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
// 		Output: [9,0,0,0,0]
// Explanation:
// 		- queries[0] has nine plates between candles.
// 		- The other queries have zero plates between candles.

// Constraints:
//		3 <= s.length <= 105
//		s consists of '*' and '|' characters.
//		1 <= queries.length <= 105
//		queries[i].length == 2
//		0 <= lefti <= righti < s.length

const platesBetweenCandles = (s, q) =>
  q.reduce((res, [a, b]) => {
    let c = s.substring(a, b + 1);
    res.push(
      c.substring(c.indexOf("|") + 1, c.lastIndexOf("|")).replaceAll("|", "")
        .length
    );
    return res;
  }, []);

// prettier-ignore
console.log(platesBetweenCandles("**|**|***|", [[2,5],[5,9]])); // [2,3]
// prettier-ignore
console.log(platesBetweenCandles("***|**|*****|**||**|*", [[1,17],[4,5],[14,17],[5,11],[15,16]])); // [9,0,0,0,0]

// Exceeds runtime limit
// Messed with regex for a while, but couldn't get it working

const topVotedPlatesBetweenCandles = function (s, queries) {
  let platPreFixSum = [...Array(s.length + 1)];
  let leftViewCandle = [...Array(s.length + 1)];
  let rightViewCandle = [...Array(s.length + 1)];

  platPreFixSum[0] = 0;
  leftViewCandle[0] = -1;
  rightViewCandle[s.length] = -1;

  for (let i = 1; i <= s.length; i++) {
    platPreFixSum[i] =
      s[i - 1] == "*" ? platPreFixSum[i - 1] + 1 : platPreFixSum[i - 1];
    leftViewCandle[i] = s[i - 1] == "|" ? i - 1 : leftViewCandle[i - 1];
    rightViewCandle[s.length - i] =
      s[s.length - i] == "|" ? s.length - i : rightViewCandle[s.length - i + 1];
  }

  let result = [];

  queries.forEach(([left, right]) => {
    if (
      rightViewCandle[left] >= 0 &&
      leftViewCandle[right + 1] >= 0 &&
      rightViewCandle[left] < leftViewCandle[right + 1]
    ) {
      result.push(
        platPreFixSum[leftViewCandle[right + 1]] -
          platPreFixSum[rightViewCandle[left]]
      );
    } else {
      result.push(0);
    }
  });

  return result;
}; */

// Vowels of All Substrings					3/3/2023
/* 
// Given a string word, return the sum of the number of vowels ('a', 'e', 'i', 'o', and 'u') in every substring of word.

// A substring is a contiguous (non-empty) sequence of characters within a string.

// Note: Due to the large constraints, the answer may not fit in a signed 32-bit integer. Please be careful during the calculations.

// Example 1:
// 		Input: word = "aba"
// 		Output: 6
// Explanation:
// 		All possible substrings are: "a", "ab", "aba", "b", "ba", and "a".
// 		- "b" has 0 vowels in it
// 		- "a", "ab", "ba", and "a" have 1 vowel each
// 		- "aba" has 2 vowels in it
// 		Hence, the total sum of vowels = 0 + 1 + 1 + 1 + 1 + 2 = 6.

// Example 2:
// 		Input: word = "abc"
// 		Output: 3
// Explanation:
// 		All possible substrings are: "a", "ab", "abc", "b", "bc", and "c".
// 		- "a", "ab", and "abc" have 1 vowel each
// 		- "b", "bc", and "c" have 0 vowels each
// 		Hence, the total sum of vowels = 1 + 1 + 1 + 0 + 0 + 0 = 3.

// Example 3:
// 		Input: word = "ltcd"
// 		Output: 0
// Explanation: There are no vowels in any substring of "ltcd".

// Constraints:
//		1 <= word.length <= 105
//		word consists of lowercase English letters.

const countVowels = (w) => {
  if (!/[a,e,i,o,u]/.test(w)) return 0;
  let count = 0;

  for (let i = 0; i < w.length; i++) {
    let cur = w.substring(i);
    let vowel = cur.search(/[a,e,i,o,u]/);

    if (vowel === -1) break;

    count += cur
      .split(/(?=[a,e,i,o,u])/)
      .reduce((vowel, c, i) => (vowel += c.length * (i + 1)), 0);

    i = w.length - cur.length + vowel + 1;
  }
  return count;
};

console.log(countVowels("aba")); // 6
console.log(countVowels("abc")); // 3
console.log(countVowels("ltcd")); // 0

// Can't seem to get it working and fast enough

var topVotedCountVowels = function (word) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let total = 0;
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.has(word[i])) {
      count += i + 1;
    }
    total += count;
  }
  return total;
};

// I'm mad, this is so much more obvious

const revisedCountVowels = (w) => {
  if (!/[a,e,i,o,u]/.test(w)) return 0;
  let [res, acc] = [0, 0];

  for (let i = 0; i < w.length; i++) {
    if (/[a,e,i,o,u]/.test(w[i])) acc += i + 1;
    res += acc;
  }
  return res;
}; */

// Most Beautiful Item for Each Query					3/4/2023
/* 
// You are given a 2D integer array items where items[i] = [pricei, beautyi] denotes the price and beauty of an item respectively.

// You are also given a 0-indexed integer array queries. For each queries[j], you want to determine the maximum beauty of an item whose price is less than or equal to queries[j]. If no such item exists, then the answer to this query is 0.

// Return an array answer of the same length as queries where answer[j] is the answer to the jth query.

// Example 1:
// 		Input: items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6]
// 		Output: [2,4,5,5,6,6]
// Explanation:
// 		- For queries[0]=1, [1,2] is the only item which has price <= 1. Hence, the answer for this query is 2.
// 		- For queries[1]=2, the items which can be considered are [1,2] and [2,4].
// 		The maximum beauty among them is 4.
// 		- For queries[2]=3 and queries[3]=4, the items which can be considered are [1,2], [3,2], [2,4], and [3,5].
// 		The maximum beauty among them is 5.
// 		- For queries[4]=5 and queries[5]=6, all items can be considered.
// 		Hence, the answer for them is the maximum beauty of all items, i.e., 6.

// Example 2:
// 		Input: items = [[1,2],[1,2],[1,3],[1,4]], queries = [1]
// 		Output: [4]
// Explanation:
// 		The price of every item is equal to 1, so we choose the item with the maximum beauty 4.
// 		Note that multiple items can have the same price and/or beauty.

// Example 3:
// 		Input: items = [[10,1000]], queries = [5]
// 		Output: [0]
// Explanation:
// 		No item has a price less than or equal to 5, so no item can be chosen.
// 		Hence, the answer to the query is 0.

// Constraints:
//		1 <= items.length, queries.length <= 105
//		items[i].length == 2
//		1 <= pricei, beautyi, queries[j] <= 109

const maximumBeauty = (items, q) => {
  items.sort((a, b) => a[0] - b[0]);

  let max = 0;
  const beauty = items.reduce((map, [p, b]) => {
    if (b > max) max = b;
    return map.set(p, max);
  }, new Map());

  let keys = [...beauty.keys()];
  return q.reduce((a, c) => {
    if (!beauty.has(c)) {
      // c = keys.findLast((x) => x < c);
      c = keys.filter((x) => x < c).pop();
    }
    a.push(beauty.get(c) || 0);
    return a;
  }, []);
};

// prettier-ignore
console.log(maximumBeauty([[1,2],[3,2],[2,4],[5,6],[3,5]], [1,2,3,4,5,6])) // [2,4,5,5,6,6]
// prettier-ignore
console.log(maximumBeauty([[1,2],[1,2],[1,3],[1,4]], [1])) // [4]
console.log(maximumBeauty([[10, 1000]], [5])); // [0]

// Leetcode doesn't know '.findLast()'
// Exceeds runtime

var topVotedMaximumBeauty = function (items, queries) {
  items.sort((a, b) => a[0] - b[0]);
  const n = items.length;

  let mx = items[0][1];

  for (let i = 0; i < n; i++) {
    mx = Math.max(mx, items[i][1]);
    items[i][1] = mx;
  }

  const ans = [];

  for (const q of queries) {
    let l = 0,
      r = n - 1,
      a = 0;
    while (l <= r) {
      let mid = Math.floor(l + (r - l) / 2);
      if (items[mid][0] <= q) {
        a = items[mid][1];
        l = mid + 1;
      } else r = mid - 1;
    }
    ans.push(a);
  }

  return ans;
};

// Binary search is the way to go */

// Decode the Slanted Ciphertext					3/5/2023
/* 
// A string originalText is encoded using a slanted transposition cipher to a string encodedText with the help of a matrix having a fixed number of rows rows.

// originalText is placed first in a top-left to bottom-right manner.

// The blue cells are filled first, followed by the red cells, then the yellow cells, and so on, until we reach the end of originalText. The arrow indicates the order in which the cells are filled. All empty cells are filled with ' '. The number of columns is chosen such that the rightmost column will not be empty after filling in originalText.

// encodedText is then formed by appending all characters of the matrix in a row-wise fashion.

// The characters in the blue cells are appended first to encodedText, then the red cells, and so on, and finally the yellow cells. The arrow indicates the order in which the cells are accessed.

// For example, if originalText = "cipher" and rows = 3, then we encode it in the following manner:

// https://assets.leetcode.com/uploads/2021/10/25/desc2.png

// The blue arrows depict how originalText is placed in the matrix, and the red arrows denote the order in which encodedText is formed. In the above example, encodedText = "ch ie pr".

// Given the encoded string encodedText and number of rows rows, return the original string originalText.

// Note: originalText does not have any trailing spaces ' '. The test cases are generated such that there is only one possible originalText.

// Example 1:
// 		Input: encodedText = "ch   ie   pr", rows = 3
// 		Output: "cipher"
// Explanation: This is the same example described in the problem description.

// Example 2:
// 		Input: encodedText = "iveo    eed   l te   olc", rows = 4
// 		Output: "i love leetcode"
// Explanation: The figure above denotes the matrix that was used to encode originalText.
// 		The blue arrows show how we can find originalText from encodedText.

// Example 3:
// 		Input: encodedText = "coding", rows = 1
// 		Output: "coding"
// Explanation: Since there is only 1 row, both originalText and encodedText are the same.

// Constraints:
//		0 <= encodedText.length <= 106
//		encodedText consists of lowercase English letters and ' ' only.
//		encodedText is a valid encoding of some originalText that does not have trailing spaces.
//		1 <= rows <= 1000
//		The testcases are generated such that there is only one possible originalText.

const decodeCiphertext = (text, rows) => {
  if (rows == 1 || text.length < rows) return text;

  const reg = new RegExp(`.{1,${text.length / rows}}`, "g");
  rows = text.match(reg);

  let res = "";
  for (let i = 0; i < rows[0].length; i++) {
    for (let j = 0, k = i; j < rows.length; j++, k++) {
      if (k > rows[0].length - 1) return res.replace(/\s+$/, "");
      res += rows[j][k];
    }
  }

  return res.replace(/\s+$/, "");
};

console.log(decodeCiphertext("ch   ie   pr", 3)); // "cipher"
console.log(decodeCiphertext("iveo    eed   l te   olc", 4)); // "i love leetcode"
console.log(decodeCiphertext("coding", 1)); // "coding"
console.log(decodeCiphertext(" b  ac", 2)); // " abc"
console.log(decodeCiphertext("", 5)); // ""

// 100% Runtime

var topVotedDecodeCiphertext = function (encodedText, rows) {
  const n = encodedText.length;
  const cols = n / rows;
  let res = "";

  for (let i = 0; i < cols; ++i) {
    let str = "";

    let row = 0;
    let col = i % cols;

    while (row < rows && col < cols) {
      const idx = row * cols + col;

      str += encodedText.charAt(idx);

      row += 1;
      col += 1;
    }

    res += str;
  }

  return res.trimEnd();
};

// Just learning about .trimEnd() */

// Watering Plants					3/6/2023
/* 
// You want to water n plants in your garden with a watering can. The plants are arranged in a row and are labeled from 0 to n - 1 from left to right where the ith plant is located at x = i. There is a river at x = -1 that you can refill your watering can at.

// Each plant needs a specific amount of water. You will water the plants in the following way:

// Water the plants in order from left to right.

// After watering the current plant, if you do not have enough water to completely water the next plant, return to the river to fully refill the watering can.

// You cannot refill the watering can early.

// You are initially at the river (i.e., x = -1). It takes one step to move one unit on the x-axis.

// Given a 0-indexed integer array plants of n integers, where plants[i] is the amount of water the ith plant needs, and an integer capacity representing the watering can capacity, return the number of steps needed to water all the plants.

// Example 1:
// 		Input: plants = [2,2,3,3], capacity = 5
// 		Output: 14
// Explanation: Start at the river with a full watering can:
// 		- Walk to plant 0 (1 step) and water it. Watering can has 3 units of water.
// 		- Walk to plant 1 (1 step) and water it. Watering can has 1 unit of water.
// 		- Since you cannot completely water plant 2, walk back to the river to refill (2 steps).
// 		- Walk to plant 2 (3 steps) and water it. Watering can has 2 units of water.
// 		- Since you cannot completely water plant 3, walk back to the river to refill (3 steps).
// 		- Walk to plant 3 (4 steps) and water it.
// 		Steps needed = 1 + 1 + 2 + 3 + 3 + 4 = 14.

// Example 2:
// 		Input: plants = [1,1,1,4,2,3], capacity = 4
// 		Output: 30
// Explanation: Start at the river with a full watering can:
// 		- Water plants 0, 1, and 2 (3 steps). Return to river (3 steps).
// 		- Water plant 3 (4 steps). Return to river (4 steps).
// 		- Water plant 4 (5 steps). Return to river (5 steps).
// 		- Water plant 5 (6 steps).
// 		Steps needed = 3 + 3 + 4 + 4 + 5 + 5 + 6 = 30.

// Example 3:
// 		Input: plants = [7,7,7,7,7,7,7], capacity = 8
// 		Output: 49
// Explanation: You have to refill before watering each plant.
// 		Steps needed = 1 + 1 + 2 + 2 + 3 + 3 + 4 + 4 + 5 + 5 + 6 + 6 + 7 = 49.

// Constraints:
//		n == plants.length
//		1 <= n <= 1000
//		1 <= plants[i] <= 106
//		max(plants[i]) <= capacity <= 109

const wateringPlants = (plants, cap) => {
  const full = cap;
  let steps = 0;

  for (let i = 0; i < plants.length; i++) {
    if (plants[i] > cap) {
      steps += i * 2 + 1;
      cap = full - plants[i];
    } else {
      steps++;
      cap -= plants[i];
    }
  }

  return steps;
};

console.log(wateringPlants([2, 2, 3, 3], 5)); // 14
console.log(wateringPlants([1, 1, 1, 4, 2, 3], 4)); // 30
console.log(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8)); // 49

// Same as top voted */

// Minimum Number of Food Buckets to Feed the Hamsters					3/7/2023
/* 
// You are given a 0-indexed string hamsters where hamsters[i] is either:

// 'H' indicating that there is a hamster at index i, or

// '.' indicating that index i is empty.

// You will add some number of food buckets at the empty indices in order to feed the hamsters. A hamster can be fed if there is at least one food bucket to its left or to its right. More formally, a hamster at index i can be fed if you place a food bucket at index i - 1 and/or at index i + 1.

// Return the minimum number of food buckets you should place at empty indices to feed all the hamsters or -1 if it is impossible to feed all of them.

// Example 1:
// 		Input: hamsters = "H..H"
// 		Output: 2
// Explanation: We place two food buckets at indices 1 and 2.
// 		It can be shown that if we place only one food bucket, one of the hamsters will not be fed.

// Example 2:
// 		Input: hamsters = ".H.H."
// 		Output: 1
// Explanation: We place one food bucket at index 2.

// Example 3:
// 		Input: hamsters = ".HHH."
// 		Output: -1
// Explanation: If we place a food bucket at every empty index as shown, the hamster at index 2 will not be able to eat.

// Constraints:
//		1 <= hamsters.length <= 10^5
//		hamsters[i] is either'H' or '.'.

const minimumBuckets = (hamsters) => {
  if (/HHH|^HH|HH$/.test(hamsters) || hamsters.indexOf(".") == -1) return -1;
  if (hamsters.indexOf("H") == -1) return 0;

  let arr = [...hamsters];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "H") {
      if (arr[i - 1] == "B") continue;
      else if (arr[i + 1] == "H") {
        arr[i - 1] = "B";
        count++;
      } else {
        arr[i + 1] = "B";
        count++;
      }
    }
  }

  return count;
};

console.log(minimumBuckets("H..H")); // 2
console.log(minimumBuckets(".H.H.")); // 1
console.log(minimumBuckets(".HHH.")); // -1
console.log(minimumBuckets(".HH.H.H.H..")); // 3

// 100% Runtime
// Same as top voted, although guard clauses made mine quicker */

// K Radius Subarray Averages					3/8/2023
/* 
// You are given a 0-indexed array nums of n integers, and an integer k.

// The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

// Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.

// The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.

// For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.

// Example 1:
// 		Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
// 		Output: [-1,-1,-1,5,4,4,-1,-1,-1]
// Explanation:
// 		- avg[0], avg[1], and avg[2] are -1 because there are less than k elements before each index.
// 		- The sum of the subarray centered at index 3 with radius 3 is: 7 + 4 + 3 + 9 + 1 + 8 + 5 = 37.
// 		Using integer division, avg[3] = 37 / 7 = 5.
// 		- For the subarray centered at index 4, avg[4] = (4 + 3 + 9 + 1 + 8 + 5 + 2) / 7 = 4.
// 		- For the subarray centered at index 5, avg[5] = (3 + 9 + 1 + 8 + 5 + 2 + 6) / 7 = 4.
// 		- avg[6], avg[7], and avg[8] are -1 because there are less than k elements after each index.

// Example 2:
// 		Input: nums = [100000], k = 0
// 		Output: [100000]
// Explanation:
// 		- The sum of the subarray centered at index 0 with radius 0 is: 100000.
// 		avg[0] = 100000 / 1 = 100000.

// Example 3:
// 		Input: nums = [8], k = 100000
// 		Output: [-1]
// Explanation:
// 		- avg[0] is -1 because there are less than k elements before and after index 0.

// Constraints:
//		n == nums.length
//		1 <= n <= 105
//		0 <= nums[i], k <= 105

const getAverages = (n, k) => {
  let res = new Array(n.length).fill(-1);
  let acc = 0;

  for (let i = 0; i < res.length; i++) {
    acc += n[i];
    if (i < 2 * k) continue;

    res[i - k] = ~~(acc / (2 * k + 1));
    acc -= n[i - 2 * k];
  }

  return res;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3)); // [-1,-1,-1,5,4,4,-1,-1,-1]
console.log(getAverages([100000], 0)); // [100000]
console.log(getAverages([8], 100000)); // [-1]

// Ça marche
// Same as top voted */

// Removing Minimum and Maximum From Array					3/9/2023
/* 
// You are given a 0-indexed array of distinct integers nums.

// There is an element in nums that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.

// A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.

// Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.

// Example 1:
// 		Input: nums = [2,10,7,5,4,1,8,6]
// 		Output: 5
// Explanation:
// 		The minimum element in the array is nums[5], which is 1.
// 		The maximum element in the array is nums[1], which is 10.
// 		We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
// 		This results in 2 + 3 = 5 deletions, which is the minimum number possible.

// Example 2:
// 		Input: nums = [0,-4,19,1,8,-2,-3,5]
// 		Output: 3
// Explanation:
// 		The minimum element in the array is nums[1], which is -4.
// 		The maximum element in the array is nums[2], which is 19.
// 		We can remove both the minimum and maximum by removing 3 elements from the front.
// 		This results in only 3 deletions, which is the minimum number possible.

// Example 3:
// 		Input: nums = [101]
// 		Output: 1
// Explanation:
// 		There is only one element in the array, which makes it both the minimum and maximum element.
// 		We can remove it with 1 deletion.

// Constraints:
//		1 <= nums.length <= 105
//		-105 <= nums[i] <= 105
//		The integers in nums are distinct.

const minimumDeletions = (nums) => {
  if (nums.length <= 2) return nums.length;

  let [minIndex, maxIndex] = [
    nums.indexOf(Math.min(...nums)),
    nums.indexOf(Math.max(...nums)),
  ];
  if (maxIndex < minIndex) [minIndex, maxIndex] = [maxIndex, minIndex];

  let min = maxIndex + 1;
  min = Math.min(min, nums.length - minIndex);
  min = Math.min(min, nums.length - maxIndex + minIndex + 1);

  return min;
};

console.log(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6])); // 5
console.log(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5])); // 3
console.log(minimumDeletions([101])); // 1

// Same as top voted
// They favored looping through the array to find min and max
// Probably better runtime */

// Find Good Days to Rob the Bank					3/10/2023
/* 
// You and a gang of thieves are planning on robbing a bank. You are given a 0-indexed integer array security, where security[i] is the number of guards on duty on the ith day. The days are numbered starting from 0. You are also given an integer time.

// The ith day is a good day to rob the bank if:

// There are at least time days before and after the ith day,

// The number of guards at the bank for the time days before i are non-increasing, and

// The number of guards at the bank for the time days after i are non-decreasing.

// More formally, this means day i is a good day to rob the bank if and only if security[i - time] >= security[i - time + 1] >= ... >= security[i] <= ... <= security[i + time - 1] <= security[i + time].

// Return a list of all days (0-indexed) that are good days to rob the bank. The order that the days are returned in does not matter.

// Example 1:
// 		Input: security = [5,3,3,3,5,6,2], time = 2
// 		Output: [2,3]
// Explanation:
// 		On day 2, we have security[0] >= security[1] >= security[2] <= security[3] <= security[4].
// 		On day 3, we have security[1] >= security[2] >= security[3] <= security[4] <= security[5].
// 		No other days satisfy this condition, so days 2 and 3 are the only good days to rob the bank.

// Example 2:
// 		Input: security = [1,1,1,1,1], time = 0
// 		Output: [0,1,2,3,4]
// Explanation:
// 		Since time equals 0, every day is a good day to rob the bank, so return every day.

// Example 3:
// 		Input: security = [1,2,3,4,5,6], time = 2
// 		Output: []
// Explanation:
// 		No day has 2 days before it that have a non-increasing number of guards.
// 		Thus, no day is a good day to rob the bank, so return an empty list.

// Constraints:
//		1 <= security.length <= 105
//		0 <= security[i], time <= 105

const goodDaysToRobBank = (sec, t) => {
  if (t == 0) return sec.map((_, i) => i);

  let res = [];
  for (let i = t; i < sec.length - t; i++) {
    if (sec[i - 1] < sec[i] || sec[i] > sec[i + 1]) continue;

    let invalid = false;
    for (let j = i - t, k = i + t - 1; j < i - 1; j++, k--) {
      if (sec[j] < sec[j + 1] || sec[k] > sec[k + 1]) invalid = true;
      if (invalid) break;
    }

    if (!invalid) res.push(i);
  }
  return res;
};

console.log(goodDaysToRobBank([5, 3, 3, 3, 5, 6, 2], 2)); // [2,3]
console.log(goodDaysToRobBank([1, 1, 1, 1, 1], 0)); // [0,1,2,3,4]
console.log(goodDaysToRobBank([1, 2, 3, 4, 5, 6], 2)); // []
console.log(goodDaysToRobBank([1, 2, 3, 4], 1)); // []

var topVotedGoodDaysToRobBank = function (security, time) {
  let decrease = [0];
  let increase = Array(security.length).fill(0);

  // Prefix
  for (let i = 1; i < security.length; i++) {
    if (security[i] <= security[i - 1]) decrease[i] = decrease[i - 1] + 1;
    else decrease[i] = 0;
  }

  // Suffix
  for (let j = security.length - 2; j >= 0; j--) {
    if (security[j] <= security[j + 1]) increase[j] = increase[j + 1] + 1;
    else increase[j] = 0;
  }

  let output = [];
  for (let k = 0; k < security.length; k++) {
    let left = decrease[k];
    let right = increase[k];
    if (left >= time && right >= time) output.push(k);
  }

  return output;
};

// Much better runtime */

// Sum of Subarray Ranges					3/11/2023
/* 
// You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.

// Return the sum of all subarray ranges of nums.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// 		Input: nums = [1,2,3]
// 		Output: 4
// Explanation: The 6 subarrays of nums are the following:
// 		[1], range = largest - smallest = 1 - 1 = 0
// 		[2], range = 2 - 2 = 0
// 		[3], range = 3 - 3 = 0
// 		[1,2], range = 2 - 1 = 1
// 		[2,3], range = 3 - 2 = 1
// 		[1,2,3], range = 3 - 1 = 2
// 		So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.

// Example 2:
// 		Input: nums = [1,3,3]
// 		Output: 4
// Explanation: The 6 subarrays of nums are the following:
// 		[1], range = largest - smallest = 1 - 1 = 0
// 		[3], range = 3 - 3 = 0
// 		[3], range = 3 - 3 = 0
// 		[1,3], range = 3 - 1 = 2
// 		[3,3], range = 3 - 3 = 0
// 		[1,3,3], range = 3 - 1 = 2
// 		So the sum of all ranges is 0 + 0 + 0 + 2 + 0 + 2 = 4.

// Example 3:
// 		Input: nums = [4,-2,-3,4,1]
// 		Output: 59
// Explanation: The sum of all subarray ranges of nums is 59.

// Constraints:
//		1 <= nums.length <= 1000
//		-109 <= nums[i] <= 109

// Follow-up: Could you find a solution with O(n) time complexity?

const subArrayRanges = (nums) => {
  let res = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let [min, max] = [nums[i], nums[i]];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) min = nums[j];
      if (nums[j] > max) max = nums[j];
      res += max - min;
    }
  }
  return res;
};

console.log(subArrayRanges([1, 2, 3])); // 4
console.log(subArrayRanges([1, 3, 3])); // 4
console.log(subArrayRanges([4, -2, -3, 4, 1])); // 59

// Same as top voted */

// Find All Possible Recipes from Given Supplies					3/12/2023
/* 
// You have information about n different recipes. You are given a string array recipes and a 2D string array ingredients. The ith recipe has the name recipes[i], and you can create it if you have all the needed ingredients from ingredients[i]. Ingredients to a recipe may need to be created from other recipes, i.e., ingredients[i] may contain a string that is in recipes.

// You are also given a string array supplies containing all the ingredients that you initially have, and you have an infinite supply of all of them.

// Return a list of all the recipes that you can create. You may return the answer in any order.

// Note that two recipes may contain each other in their ingredients.

// Example 1:
// 		Input: recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
// 		Output: ["bread"]
// Explanation:
// 		We can create "bread" since we have the ingredients "yeast" and "flour".

// Example 2:
// 		Input: recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
// 		Output: ["bread","sandwich"]
// Explanation:
// 		We can create "bread" since we have the ingredients "yeast" and "flour".
// 		We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".

// Example 3:
// 		Input: recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]
// 		Output: ["bread","sandwich","burger"]
// Explanation:
// 		We can create "bread" since we have the ingredients "yeast" and "flour".
// 		We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
// 		We can create "burger" since we have the ingredient "meat" and can create the ingredients "bread" and "sandwich".

// Constraints:
//		n == recipes.length == ingredients.length
//		1 <= n <= 100
//		1 <= ingredients[i].length, supplies.length <= 100
//		1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10
//		recipes[i], ingredients[i][j], and supplies[k] consist only of lowercase English letters.
//		All the values of recipes and supplies combined are unique.
//		Each ingredients[i] does not contain any duplicate values.

const topVotedFindAllRecipes = function (recipes, ingredients, supplies) {
  const suppliesSet = new Set(supplies),
    res = [],
    recipesMap = new Map(),
    cantMake = new Set();
  // Reverse map all recipes
  for (let i = 0; i < recipes.length; i++) recipesMap.set(recipes[i], i);

  // Check if we can make the given food name
  const canMake = (name, visited = new Set()) => {
    if (suppliesSet.has(name)) return true;
    if (!recipesMap.has(name) || cantMake.has(name) || visited.has(name))
      return false;

    // We can't make it using our current supplies, find its recipe
    const idx = recipesMap.get(name);
    visited.add(name); // Prevent loops
    for (let i = 0; i < ingredients[idx].length; i++) {
      const ingredient = ingredients[idx][i];
      if (!canMake(ingredient, visited)) {
        cantMake.add(name);
        return false;
      }
    }

    // Add the food to our list of supplies
    suppliesSet.add(name);
    return true;
  };
  for (let i = 0; i < recipes.length; i++)
    if (canMake(recipes[i])) res.push(recipes[i]);
  return res;
};

console.log(
  topVotedFindAllRecipes(
    ["bread"],
    [["yeast", "flour"]],
    ["yeast", "flour", "corn"]
  )
); // ["bread"]
console.log(
  topVotedFindAllRecipes(
    ["bread", "sandwich"],
    [
      ["yeast", "flour"],
      ["bread", "meat"],
    ],
    ["yeast", "flour", "meat"]
  )
); // ["bread","sandwich"]
console.log(
  topVotedFindAllRecipes(
    ["bread", "sandwich", "burger"],
    [
      ["yeast", "flour"],
      ["bread", "meat"],
      ["sandwich", "meat", "bread"],
    ],
    ["yeast", "flour", "meat"]
  )
); // ["bread","sandwich","burger"]

// Fell down a different train of thought and couldn't get it working
// Very nice code, felt very easy to read and understand */

// Number of Laser Beams in a Bank					3/13/2023
/* 
// Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.

// There is one laser beam between any two security devices if both conditions are met:

// The two devices are located on two different rows: r1 and r2, where r1 < r2.

// For each row i where r1 < i < r2, there are no security devices in the ith row.

// Laser beams are independent, i.e., one beam does not interfere nor join with another.

// Return the total number of laser beams in the bank.

// Example 1:
// 		Input: bank = ["011001","000000","010100","001000"]
// 		Output: 8
// Explanation: Between each of the following device pairs, there is one beam. In total, there are 8 beams:
// 		* bank[0][1] -- bank[2][1]
// 		* bank[0][1] -- bank[2][3]
// 		* bank[0][2] -- bank[2][1]
// 		* bank[0][2] -- bank[2][3]
// 		* bank[0][5] -- bank[2][1]
// 		* bank[0][5] -- bank[2][3]
// 		* bank[2][1] -- bank[3][2]
// 		* bank[2][3] -- bank[3][2]
// 		Note that there is no beam between any device on the 0th row with any on the 3rd row.
// 		This is because the 2nd row contains security devices, which breaks the second condition.
// https://assets.leetcode.com/uploads/2021/12/24/laser1.jpg

// Example 2:
// 		Input: bank = ["000","111","000"]
// 		Output: 0
// Explanation: There does not exist two devices located on two different rows.

// Constraints:
//		m == bank.length
//		n == bank[i].length
//		1 <= m, n <= 500
//		bank[i][j] is either '0' or '1'.

const numberOfBeams = (bank) => {
  bank = bank.filter((row) => /1/.test(row));
  if (bank.length <= 1) return 0;

  let res = 0;
  let prev = bank[0].match(/1/g).length;
  for (let i = 1; i < bank.length; i++) {
    let cur = bank[i].match(/1/g).length;
    res += prev * cur;
    prev = cur;
  }

  return res;
};

console.log(numberOfBeams(["011001", "000000", "010100", "001000"])); // 8
console.log(numberOfBeams(["000", "111", "000"])); // 0

const topVotedNumberOfBeams = (bank) =>
  bank
    .map((str) => str.split("0").join("").length)
    .filter((val) => val !== 0)
    .reduce((acc, cur, ind, arr) => acc + cur * (arr[ind + 1] || 0), 0);

// Same logic in one line */

// Destroying Asteroids					3/14/2023
/* 
// You are given an integer mass, which represents the original mass of a planet. You are further given an integer array asteroids, where asteroids[i] is the mass of the ith asteroid.

// You can arrange for the planet to collide with the asteroids in any arbitrary order. If the mass of the planet is greater than or equal to the mass of the asteroid, the asteroid is destroyed and the planet gains the mass of the asteroid. Otherwise, the planet is destroyed.

// Return true if all asteroids can be destroyed. Otherwise, return false.

// Example 1:
// 		Input: mass = 10, asteroids = [3,9,19,5,21]
// 		Output: true
// Explanation: One way to order the asteroids is [9,19,5,3,21]:
// 		- The planet collides with the asteroid with a mass of 9. New planet mass: 10 + 9 = 19
// 		- The planet collides with the asteroid with a mass of 19. New planet mass: 19 + 19 = 38
// 		- The planet collides with the asteroid with a mass of 5. New planet mass: 38 + 5 = 43
// 		- The planet collides with the asteroid with a mass of 3. New planet mass: 43 + 3 = 46
// 		- The planet collides with the asteroid with a mass of 21. New planet mass: 46 + 21 = 67
// 		All asteroids are destroyed.

// Example 2:
// 		Input: mass = 5, asteroids = [4,9,23,4]
// 		Output: false
// Explanation:
// 		The planet cannot ever gain enough mass to destroy the asteroid with a mass of 23.
// 		After the planet destroys the other asteroids, it will have a mass of 5 + 4 + 9 + 4 = 22.
// 		This is less than 23, so a collision would not destroy the last asteroid.

// Constraints:
//		1 <= mass <= 105
//		1 <= asteroids.length <= 105
//		1 <= asteroids[i] <= 105

const asteroidsDestroyed = (m, asteroids) => {
  asteroids.sort((a, b) => a - b);
  for (let i = 0; i < asteroids.length; i++) {
    if (m < asteroids[i]) return false;
    m += asteroids[i];
  }
  return true;
};

console.log(asteroidsDestroyed(10, [3, 9, 19, 5, 21])); // true
console.log(asteroidsDestroyed(5, [4, 9, 23, 4])); // false

// Same logic as top voteds */

// Longest Palindrome by Concatenating Two Letter Words					3/15/2023
/* 
// You are given an array of strings words. Each element of words consists of two lowercase English letters.

// Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.

// Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.

// A palindrome is a string that reads the same forward and backward.

// Example 1:
// 		Input: words = ["lc","cl","gg"]
// 		Output: 6
// Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
// 		Note that "clgglc" is another longest palindrome that can be created.

// Example 2:
// 		Input: words = ["ab","ty","yt","lc","cl","ab"]
// 		Output: 8
// Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
// 		Note that "lcyttycl" is another longest palindrome that can be created.

// Example 3:
// 		Input: words = ["cc","ll","xx"]
// 		Output: 2
// Explanation: One longest palindrome is "cc", of length 2.
// 		Note that "ll" is another longest palindrome that can be created, and so is "xx".

// Constraints:
//		1 <= words.length <= 105
//		words[i].length == 2
//		words[i] consists of lowercase English letters.

const longestPalindrome = (words) => {
  let count = 0;

  const map = words.reduce((map, word) => {
    const rev = word[1] + word[0];

    if (map.has(rev)) {
      map.get(rev) == 1 ? map.delete(rev) : map.set(rev, map.get(rev) - 1);
      count += 4;
    } else map.set(word, map.get(word) + 1 || 1);

    return map;
  }, new Map());

  const hasCenter =
    [...map.keys()].filter((word) => word[0] === word[1]).length > 0;
  return count + (hasCenter && 2);
};

console.log(longestPalindrome(["lc", "cl", "gg"])); // 6
console.log(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"])); // 8
console.log(longestPalindrome(["cc", "ll", "xx"])); // 2

// Similar to top voted solutions

const revisedLongestPalindrome = (words) => {
  let count = 0;
  let centers = 0;

  words.reduce((map, word) => {
    const rev = word[1] + word[0];

    if (map.has(rev)) {
      if (map.get(rev) == 1) {
        map.delete(rev);
        if (word === rev) centers--;
      } else map.set(rev, map.get(rev) - 1);
      count += 4;
    } else {
      map.set(word, map.get(word) + 1 || 1);
      if (word[0] === word[1]) centers++;
    }

    return map;
  }, new Map());

  return count + (centers > 0 && 2);
};

// Somehow slower than previous version */

// Minimum Swaps to Group All 1's Together II					3/16/2023
/* 
// A swap is defined as taking two distinct positions in an array and swapping the values in them.

// A circular array is defined as an array where we consider the first element and the last element to be adjacent.

// Given a binary circular array nums, return the minimum number of swaps required to group all 1's present in the array together at any location.

// Example 1:
// 		Input: nums = [0,1,0,1,1,0,0]
// 		Output: 1
// Explanation: Here are a few of the ways to group all the 1's together:
// 		[0,0,1,1,1,0,0] using 1 swap.
// 		[0,1,1,1,0,0,0] using 1 swap.
// 		[1,1,0,0,0,0,1] using 2 swaps (using the circular property of the array).
// 		There is no way to group all 1's together with 0 swaps.
// 		Thus, the minimum number of swaps required is 1.

// Example 2:
// 		Input: nums = [0,1,1,1,0,0,1,1,0]
// 		Output: 2
// Explanation: Here are a few of the ways to group all the 1's together:
// 		[1,1,1,0,0,0,0,1,1] using 2 swaps (using the circular property of the array).
// 		[1,1,1,1,1,0,0,0,0] using 2 swaps.
// 		There is no way to group all 1's together with 0 or 1 swaps.
// 		Thus, the minimum number of swaps required is 2.

// Example 3:
// 		Input: nums = [1,1,0,0,1]
// 		Output: 0
// Explanation: All the 1's are already grouped together due to the circular property of the array.
// 		Thus, the minimum number of swaps required is 0.

// Constraints:
//		1 <= nums.length <= 105
//		nums[i] is either 0 or 1.

const topVotedMinSwaps = (nums) => {
  let ones = nums.reduce((a, bit) => a + bit, 0);
  const doubledNums = nums.concat(nums);

  let min = Number.MAX_SAFE_INTEGER;
  let [left, withinWindow] = [0, 0];

  for (let i = 0; i < doubledNums.length; ++i) {
    if (doubledNums[i] === 1) withinWindow += 1;
    if (i >= ones) {
      if (doubledNums[left] === 1) withinWindow -= 1;
      left++;
    }
    if (i + 1 >= ones) min = Math.min(min, ones - withinWindow);
  }

  return min;
};

console.log(topVotedMinSwaps([0, 1, 0, 1, 1, 0, 0])); // 1
console.log(topVotedMinSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0])); // 2
console.log(topVotedMinSwaps([1, 1, 0, 0, 1])); // 0
console.log(
  topVotedMinSwaps([
    1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1,
    0, 0, 1, 1, 0, 0, 1, 0, 0,
  ])
); // 7

// Couldn't get it working
// Sliding window makes sense */

// Count Words Obtained After Adding a Letter					3/17/2023
/* 
// You are given two 0-indexed arrays of strings startWords and targetWords. Each string consists of lowercase English letters only.

// For each string in targetWords, check if it is possible to choose a string from startWords and perform a conversion operation on it to be equal to that from targetWords.

// The conversion operation is described in the following two steps:

// Append any lowercase letter that is not present in the string to its end.

// For example, if the string is "abc", the letters 'd', 'e', or 'y' can be added to it, but not 'a'. If 'd' is added, the resulting string will be "abcd".

// Rearrange the letters of the new string in any arbitrary order.

// For example, "abcd" can be rearranged to "acbd", "bacd", "cbda", and so on. Note that it can also be rearranged to "abcd" itself.

// Return the number of strings in targetWords that can be obtained by performing the operations on any string of startWords.

// Note that you will only be verifying if the string in targetWords can be obtained from a string in startWords by performing the operations. The strings in startWords do not actually change during this process.

// Example 1:
// 		Input: startWords = ["ant","act","tack"], targetWords = ["tack","act","acti"]
// 		Output: 2
// Explanation:
// 		- In order to form targetWords[0] = "tack", we use startWords[1] = "act", append 'k' to it, and rearrange "actk" to "tack".
// 		- There is no string in startWords that can be used to obtain targetWords[1] = "act".
// 		Note that "act" does exist in startWords, but we must append one letter to the string before rearranging it.
// 		- In order to form targetWords[2] = "acti", we use startWords[1] = "act", append 'i' to it, and rearrange "acti" to "acti" itself.

// Example 2:
// 		Input: startWords = ["ab","a"], targetWords = ["abc","abcd"]
// 		Output: 1
// Explanation:
// 		- In order to form targetWords[0] = "abc", we use startWords[0] = "ab", add 'c' to it, and rearrange it to "abc".
// 		- There is no string in startWords that can be used to obtain targetWords[1] = "abcd".

// Constraints:
//		1 <= startWords.length, targetWords.length <= 5 * 10^4
//		1 <= startWords[i].length, targetWords[j].length <= 26
//		Each string of startWords and targetWords consists of lowercase English letters only.
//		No letter occurs more than once in any string of startWords or targetWords.

const wordCount = (sWords, tWords) => {
  const sMap = sWords.reduce(
    (map, c) => map.set([...c].sort().join(), true),
    new Map()
  );

  return tWords.reduce((count, word) => {
    for (let i = 0; i < word.length; i++) {
      if (
        sMap.has(
          [...(word.substring(0, i) + word.substring(i + 1))].sort().join()
        )
      ) {
        count++;
        break;
      }
    }
    return count;
  }, 0);
};

console.log(wordCount(["ant", "act", "tack"], ["tack", "act", "acti"])); // 2
console.log(wordCount(["ab", "a"], ["abc", "abcd"])); // 1

// Thought it would exceed runtime limit, but works OK

var topVotedWordCount = function (startWords, targetWords) {
  const startMap = {};
  for (let word of startWords) {
    startMap[word.split("").sort().join("")] = true;
  }

  let ans = 0;
  for (let word of targetWords) {
    for (let i = 0; i < word.length; i++) {
      let temp = (word.substring(0, i) + word.substring(i + 1, word.length))
        .split("")
        .sort()
        .join("");
      if (startMap[temp]) {
        ans++;
        break;
      }
    }
  }

  return ans;
};

// Same idea */

// Solving Questions With Brainpower					3/18/2023
/* 
// You are given a 0-indexed 2D integer array questions where questions[i] = [pointsi, brainpoweri].

// The array describes the questions of an exam, where you have to process the questions in order (i.e., starting from question 0) and make a decision whether to solve or skip each question. Solving question i will earn you pointsi points but you will be unable to solve each of the next brainpoweri questions. If you skip question i, you get to make the decision on the next question.

// For example, given questions = [[3, 2], [4, 3], [4, 4], [2, 5]]:

// If question 0 is solved, you will earn 3 points but you will be unable to solve questions 1 and 2.

// If instead, question 0 is skipped and question 1 is solved, you will earn 4 points but you will be unable to solve questions 2 and 3.

// Return the maximum points you can earn for the exam.

// Example 1:
// 		Input: questions = [[3,2],[4,3],[4,4],[2,5]]
// 		Output: 5
// Explanation: The maximum points can be earned by solving questions 0 and 3.
// 		- Solve question 0: Earn 3 points, will be unable to solve the next 2 questions
// 		- Unable to solve questions 1 and 2
// 		- Solve question 3: Earn 2 points
// 		Total points earned: 3 + 2 = 5. There is no other way to earn 5 or more points.

// Example 2:
// 		Input: questions = [[1,1],[2,2],[3,3],[4,4],[5,5]]
// 		Output: 7
// Explanation: The maximum points can be earned by solving questions 1 and 4.
// 		- Skip question 0
// 		- Solve question 1: Earn 2 points, will be unable to solve the next 2 questions
// 		- Unable to solve questions 2 and 3
// 		- Solve question 4: Earn 5 points
// 		Total points earned: 2 + 5 = 7. There is no other way to earn 7 or more points.

// Constraints:
//		1 <= questions.length <= 105
//		questions[i].length == 2
//		1 <= pointsi, brainpoweri <= 105

const mostPoints = (q) => {
  let max = 0;

  const dp = (i, skip = 0, p = 0) => {
    if (i == q.length) {
      max = Math.max(max, p);
      return;
    }

    if (skip > 0) dp(i + 1, skip - 1, p); // forced skip
    else {
      dp(i + 1, 0, p); // skip
      dp(i + 1, q[i][1], p + q[i][0]); // solve
    }
  };
  dp(0);

  return max;
};

// prettier-ignore
console.log(mostPoints([[3,2],[4,3],[4,4],[2,5]])) // 5
// prettier-ignore
console.log(mostPoints([[1,1],[2,2],[3,3],[4,4],[5,5]])) // 7
// prettier-ignore
console.log(mostPoints([[21,5],[92,3],[74,2],[39,4],[58,2],[5,5],[49,4],[65,3]])) // 157

// First time getting dp to work
// Exceeds runtime limit

var topVotedMostPoints = function (questions) {
  const n = questions.length;
  const dp = new Array(n).fill(0);
  let max = 0;

  for (let i = n - 1; i >= 0; i--) {
    const [point, brainpower] = questions[i];
    dp[i] = Math.max(max, point + (dp[i + brainpower + 1] || 0));
    max = Math.max(max, dp[i]);
  }

  return max;
}; */

// Minimum Moves to Reach Target Score					3/19/2023
/* 
// You are playing a game with integers. You start with the integer 1 and you want to reach the integer target.

// In one move, you can either:

// Increment the current integer by one (i.e., x = x + 1).

// Double the current integer (i.e., x = 2 * x).

// You can use the increment operation any number of times, however, you can only use the double operation at most maxDoubles times.

// Given the two integers target and maxDoubles, return the minimum number of moves needed to reach target starting with 1.

// Example 1:
// 		Input: target = 5, maxDoubles = 0
// 		Output: 4
// Explanation: Keep incrementing by 1 until you reach target.

// Example 2:
// 		Input: target = 19, maxDoubles = 2
// 		Output: 7
// Explanation: Initially, x = 1
// 		Increment 3 times so x = 4
// 		Double once so x = 8
// 		Increment once so x = 9
// 		Double again so x = 18
// 		Increment once so x = 19

// Example 3:
// 		Input: target = 10, maxDoubles = 4
// 		Output: 4
// Explanation: Initially, x = 1
// 		Increment once so x = 2
// 		Double once so x = 4
// 		Increment once so x = 5
// 		Double again so x = 10

// Constraints:
//		1 <= target <= 109
//		0 <= maxDoubles <= 100

const minMoves = (t, dubs) => {
  let min = Infinity;

  const db = (c, dubsUsed = 0, moves = 0) => {
    if (c == t) {
      min = Math.min(min, moves);
      return;
    }
    if (c > t) return;

    db(c + 1, dubsUsed, moves + 1);

    if (dubsUsed < dubs) {
      db(c * 2, dubsUsed + 1, moves + 1);
    }
  };
  db(1);

  return min;
};

console.log(minMoves(5, 0)); // 4
console.log(minMoves(19, 2)); // 7
console.log(minMoves(10, 4)); // 4

// Max call stack exceeded

const revisedMinMoves = (t, dubs) => {
  let moves = 0;
  while (t > 1) {
    if (t % 2 == 1) t--;
    else {
      if (dubs > 0) {
        t /= 2;
        dubs--;
      } else return moves + t - 1;
    }
    moves += 1;
  }
  return moves;
};

// Cleaned up top voted
// Beats 100% */

// Rearrange Array Elements by Sign					3/20/2023
/* 
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should rearrange the elements of nums such that the modified array follows the given conditions:

// Every consecutive pair of integers have opposite signs.

// For all integers with the same sign, the order in which they were present in nums is preserved.

// The rearranged array begins with a positive integer.

// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:
// 		Input: nums = [3,1,-2,-5,2,-4]
// 		Output: [3,-2,1,-5,2,-4]
// Explanation:
// 		The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// 		The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// 		Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.

// Example 2:
// 		Input: nums = [-1,1]
// 		Output: [1,-1]
// Explanation:
// 		1 is the only positive integer and -1 the only negative integer in nums.
// 		So nums is rearranged to [1,-1].

// Constraints:
//		2 <= nums.length <= 2 * 105
//		nums.length is even
//		1 <= |nums[i]| <= 105
//		nums consists of equal number of positive and negative integers.

const rearrangeArray = (nums) => {
  let [pos, neg] = [[], []];
  nums.forEach((num) => (num > 0 ? pos.push(num) : neg.push(num)));

  return pos.reduce((res, c, i) => {
    res.push(c, neg[i]);
    return res;
  }, []);
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // [3,-2,1,-5,2,-4]
console.log(rearrangeArray([-1, 1])); // [1,-1]

// Nothing fancy

function topVotedRearrangeArray(nums) {
  const result = [];
  const index = { pos: 0, neg: 1 };

  for (const num of nums) {
    const sign = num >= 0 ? "pos" : "neg";

    result[index[sign]] = num;
    console.log(result);
    index[sign] += 2;
  }
  return result;
}

// This is more what I was looking for */

// Find All Lonely Numbers in the Array					3/21/2023
/* 
// You are given an integer array nums. A number x is lonely when it appears only once, and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.

// Return all lonely numbers in nums. You may return the answer in any order.

// Example 1:
// 		Input: nums = [10,6,5,8]
// 		Output: [10,8]
// Explanation:
// 		- 10 is a lonely number since it appears exactly once and 9 and 11 does not appear in nums.
// 		- 8 is a lonely number since it appears exactly once and 7 and 9 does not appear in nums.
// 		- 5 is not a lonely number since 6 appears in nums and vice versa.
// 		Hence, the lonely numbers in nums are [10, 8].
// 		Note that [8, 10] may also be returned.

// Example 2:
// 		Input: nums = [1,3,5,3]
// 		Output: [1,5]
// Explanation:
// 		- 1 is a lonely number since it appears exactly once and 0 and 2 does not appear in nums.
// 		- 5 is a lonely number since it appears exactly once and 4 and 6 does not appear in nums.
// 		- 3 is not a lonely number since it appears twice.
// 		Hence, the lonely numbers in nums are [1, 5].
// 		Note that [5, 1] may also be returned.

// Constraints:
//		1 <= nums.length <= 105
//		0 <= nums[i] <= 106

const findLonely = (nums) => {
  const count = nums.reduce(
    (map, c) => map.set(c, map.get(c) + 1 || 1),
    new Map()
  );

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (
      count.get(nums[i]) < 2 &&
      !count.has(nums[i] - 1) &&
      !count.has(nums[i] + 1)
    )
      res.push(nums[i]);
  }

  return res;
};

console.log(findLonely([10, 6, 5, 8])); // [10,8]
console.log(findLonely([1, 3, 5, 3])); // [1,5]

// Same as top voted */

// All Divisions With the Highest Score of a Binary Array					3/22/2023
/* 
// You are given a 0-indexed binary array nums of length n. nums can be divided at index i (where 0 <= i <= n) into two arrays (possibly empty) numsleft and numsright:

// numsleft has all the elements of nums between index 0 and i - 1 (inclusive), while numsright has all the elements of nums between index i and n - 1 (inclusive).

// If i == 0, numsleft is empty, while numsright has all the elements of nums.

// If i == n, numsleft has all the elements of nums, while numsright is empty.

// The division score of an index i is the sum of the number of 0's in numsleft and the number of 1's in numsright.

// Return all distinct indices that have the highest possible division score. You may return the answer in any order.

// Example 1:
// 		Input: nums = [0,0,1,0]
// 		Output: [2,4]
// Explanation: Division at index
// 		- 0: numsleft is []. numsright is [0,0,1,0]. The score is 0 + 1 = 1.
// 		- 1: numsleft is [0]. numsright is [0,1,0]. The score is 1 + 1 = 2.
// 		- 2: numsleft is [0,0]. numsright is [1,0]. The score is 2 + 1 = 3.
// 		- 3: numsleft is [0,0,1]. numsright is [0]. The score is 2 + 0 = 2.
// 		- 4: numsleft is [0,0,1,0]. numsright is []. The score is 3 + 0 = 3.
// 		Indices 2 and 4 both have the highest possible division score 3.
// 		Note the answer [4,2] would also be accepted.

// Example 2:
// 		Input: nums = [0,0,0]
// 		Output: [3]
// Explanation: Division at index
// 		- 0: numsleft is []. numsright is [0,0,0]. The score is 0 + 0 = 0.
// 		- 1: numsleft is [0]. numsright is [0,0]. The score is 1 + 0 = 1.
// 		- 2: numsleft is [0,0]. numsright is [0]. The score is 2 + 0 = 2.
// 		- 3: numsleft is [0,0,0]. numsright is []. The score is 3 + 0 = 3.
// 		Only index 3 has the highest possible division score 3.

// Example 3:
// 		Input: nums = [1,1]
// 		Output: [0]
// Explanation: Division at index
// 		- 0: numsleft is []. numsright is [1,1]. The score is 0 + 2 = 2.
// 		- 1: numsleft is [1]. numsright is [1]. The score is 0 + 1 = 1.
// 		- 2: numsleft is [1,1]. numsright is []. The score is 0 + 0 = 0.
// 		Only index 0 has the highest possible division score 2.

// Constraints:
//		n == nums.length
//		1 <= n <= 105
//		nums[i] is either 0 or 1.

const maxScoreIndices = (nums) => {
  let [l, r] = [0, nums.reduce((a, c) => (a += c), 0)];
  let max = l + r;
  let map = { [max]: [0] };

  for (let i = 0; i < nums.length; i++) {
    nums[i] ? r-- : l++;

    if (l + r == max) {
      map[max].push(i + 1);
    }
    if (l + r > max) {
      max = l + r;
      map[max] = [i + 1];
    }
  }

  return map[max];
};

console.log(maxScoreIndices([0, 0, 1, 0])); // [2,4]
console.log(maxScoreIndices([0, 0, 0])); // [3]
console.log(maxScoreIndices([1, 1])); // [0]

// Same runtime as top voted

const topVotedMaxScoreIndices = function (nums) {
  let oneCount = 0,
    zeroCount = 0,
    score = 0,
    maxScore = -Infinity;
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) oneCount++;
  }
  for (let i = 0; i <= nums.length; i++) {
    const prev = nums[i - 1];
    if (prev === 1) oneCount--;
    if (prev === 0) zeroCount++;
    score = oneCount + zeroCount;
    if (!map[score]) {
      map[score] = [i];
    } else {
      map[score].push(i);
    }
    maxScore = Math.max(score, maxScore);
  }
  return map[maxScore];
}; */

// Partition Array According to Given Pivot					3/23/2023
/* 
// You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

// Every element less than pivot appears before every element greater than pivot.

// Every element equal to pivot appears in between the elements less than and greater than pivot.

// The relative order of the elements less than pivot and the elements greater than pivot is maintained.

// More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. For elements less than pivot, if i < j and nums[i] < pivot and nums[j] < pivot, then pi < pj. Similarly for elements greater than pivot, if i < j and nums[i] > pivot and nums[j] > pivot, then pi < pj.

// Return nums after the rearrangement.

// Example 1:
// 		Input: nums = [9,12,5,10,14,3,10], pivot = 10
// 		Output: [9,5,3,10,10,12,14]
// Explanation:
// 		The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
// 		The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
// 		The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.

// Example 2:
// 		Input: nums = [-3,4,3,2], pivot = 2
// 		Output: [-3,2,4,3]
// Explanation:
// 		The element -3 is less than the pivot so it is on the left side of the array.
// 		The elements 4 and 3 are greater than the pivot so they are on the right side of the array.
// 		The relative ordering of the elements less than and greater than pivot is also maintained. [-3] and [4, 3] are the respective orderings.

// Constraints:
//		1 <= nums.length <= 105
//		-106 <= nums[i] <= 106
//		pivot equals to an element of nums.

const pivotArray = (nums, p) => {
  let [l, m, r] = [[], [], []];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < p) l.push(nums[i]);
    else if (nums[i] > p) r.push(nums[i]);
    else m.push(nums[i]);
  }

  return [l, m, r].flat();
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)); // [9,5,3,10,10,12,14]
console.log(pivotArray([-3, 4, 3, 2], 2)); // [-3,2,4,3]

// Easy code
// Slow runtime

const topVotedPivotArray = (nums, pivot) => {
  let N = nums.length;
  let output = [];

  let i = 0;
  let j = N - 1;

  let L = 0;
  let R = N - 1;

  while (i < nums.length) {
    if (nums[i] < pivot) output[L++] = nums[i];
    if (nums[j] > pivot) output[R--] = nums[j];

    i++;
    j--;
  }

  while (L <= R) {
    output[L++] = pivot;
  }

  return output;
};

const revisedPivotArray = (nums, p) => {
  let res = [];
  let [l, r] = [0, nums.length - 1];

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (nums[i] < p) res[l++] = nums[i];
    if (nums[j] > p) res[r--] = nums[j];
  }
  while (l <= r) res[l++] = p;

  return res;
};

// Equally poor runtime, but
// I like how the ++ and --s were built into their respective statements */

// Smallest Value of the Rearranged Number					3/24/2023
/* 
// You are given an integer num. Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros.

// Return the rearranged number with minimal value.

// Note that the sign of the number does not change after rearranging the digits.

// Example 1:
// 		Input: num = 310
// 		Output: 103
// Explanation: The possible arrangements for the digits of 310 are 013, 031, 103, 130, 301, 310.
// 		The arrangement with the smallest value that does not contain any leading zeros is 103.

// Example 2:
// 		Input: num = -7605
// 		Output: -7650
// Explanation: Some possible arrangements for the digits of -7605 are -7650, -6705, -5076, -0567.
// 		The arrangement with the smallest value that does not contain any leading zeros is -7650.

// Constraints:
//		-10^15 <= num <= 10^15

const smallestNumber = (num) => {
  if (num > 0) {
    let nums = [...String(num)].sort();
    let zeroes = nums.splice(0, nums.lastIndexOf("0") + 1);
    nums.splice(1, 0, ...zeroes);
    return Number(nums.join(""));
  } else {
    let nums = [...String(num)].sort((a, b) => b - a);
    return Number(nums.join(""));
  }
};

console.log(smallestNumber(310)); // 103
console.log(smallestNumber(-7605)); // -7650
console.log(smallestNumber(0)); // 0

// Similar logic to top voteds */

// Removing Minimum Number of Magic Beans					3/25/2023
/* 
// You are given an array of positive integers beans, where each integer represents the number of magic beans found in a particular magic bag.

// Remove any number of beans (possibly none) from each bag such that the number of beans in each remaining non-empty bag (still containing at least one bean) is equal. Once a bean has been removed from a bag, you are not allowed to return it to any of the bags.

// Return the minimum number of magic beans that you have to remove.

// Example 1:
// 		Input: beans = [4,1,6,5]
// 		Output: 4
// Explanation:
// 		- We remove 1 bean from the bag with only 1 bean.
// 		This results in the remaining bags: [4,0,6,5]
// 		- Then we remove 2 beans from the bag with 6 beans.
// 		This results in the remaining bags: [4,0,4,5]
// 		- Then we remove 1 bean from the bag with 5 beans.
// 		This results in the remaining bags: [4,0,4,4]
// 		We removed a total of 1 + 2 + 1 = 4 beans to make the remaining non-empty bags have an equal number of beans.
// 		There are no other solutions that remove 4 beans or fewer.

// Example 2:
// 		Input: beans = [2,10,3,2]
// 		Output: 7
// Explanation:
// 		- We remove 2 beans from one of the bags with 2 beans.
// 		This results in the remaining bags: [0,10,3,2]
// 		- Then we remove 2 beans from the other bag with 2 beans.
// 		This results in the remaining bags: [0,10,3,0]
// 		- Then we remove 3 beans from the bag with 3 beans.
// 		This results in the remaining bags: [0,10,0,0]
// 		We removed a total of 2 + 2 + 3 = 7 beans to make the remaining non-empty bags have an equal number of beans.
// 		There are no other solutions that removes 7 beans or fewer.

// Constraints:
//		1 <= beans.length <= 10^5
//		1 <= beans[i] <= 10^5

const minimumRemoval = (beans) => {
  let min = Infinity;

  for (let i = 0; i < beans.length; i++) {
    let removed = 0;
    for (const bean of beans) {
      if (bean > beans[i]) removed += bean - beans[i];
      if (bean < beans[i]) removed += bean;
      if (removed >= min) break;
    }
    if (removed < min) min = removed;
  }

  return min;
};

console.log(minimumRemoval([4, 1, 6, 5])); // 4
console.log(minimumRemoval([2, 10, 3, 2])); // 7

// Exceeds runtime limit

var topVotedMinimumRemoval = function (beans) {
  const N = beans.length;
  const sum = beans.reduce((acc, c) => c + acc, 0);

  beans.sort((a, b) => a - b);

  let ans = Infinity;
  for (let i = 0; i < beans.length; i++) {
    ans = Math.min(ans, sum - (N - i) * beans[i]);
  }

  return ans;
};

// Beats 100% Runtimes */

// Maximum Split of Positive Even Integers					3/26/2023
/* 
// You are given an integer finalSum. Split it into a sum of a maximum number of unique positive even integers.

// For example, given finalSum = 12, the following splits are valid (unique positive even integers summing up to finalSum): (12), (2 + 10), (2 + 4 + 6), and (4 + 8). Among them, (2 + 4 + 6) contains the maximum number of integers. Note that finalSum cannot be split into (2 + 2 + 4 + 4) as all the numbers should be unique.

// Return a list of integers that represent a valid split containing a maximum number of integers. If no valid split exists for finalSum, return an empty list. You may return the integers in any order.

// Example 1:
// 		Input: finalSum = 12
// 		Output: [2,4,6]
// Explanation: The following are valid splits: (12), (2 + 10), (2 + 4 + 6), and (4 + 8).
// 		(2 + 4 + 6) has the maximum number of integers, which is 3. Thus, we return [2,4,6].
// 		Note that [2,6,4], [6,2,4], etc. are also accepted.

// Example 2:
// 		Input: finalSum = 7
// 		Output: []
// Explanation: There are no valid splits for the given finalSum.
// 		Thus, we return an empty array.

// Example 3:
// 		Input: finalSum = 28
// 		Output: [6,8,2,12]
// Explanation: The following are valid splits: (2 + 26), (6 + 8 + 2 + 12), and (4 + 24).
// 		(6 + 8 + 2 + 12) has the maximum number of integers, which is 4. Thus, we return [6,8,2,12].
// 		Note that [10,2,4,12], [6,2,4,16], etc. are also accepted.

// Constraints:
//		1 <= finalSum <= 10^10

const maximumEvenSplit = (finalSum) => {
  if (finalSum % 2) return [];

  let res = new Set();
  let [acc, inc] = [0, 2];

  while (acc < finalSum) {
    acc += inc;
    res.add(inc);
    inc += 2;
  }
  if (acc > finalSum) res.delete(acc - finalSum);

  return [...res];
};

console.log(maximumEvenSplit(12)); // [2,4,6]
console.log(maximumEvenSplit(7)); // []
console.log(maximumEvenSplit(28)); // [6,8,2,12]

// Same as top voted */

// Construct String With Repeat Limit					3/27/2023
/* 
// You are given a string s and an integer repeatLimit. Construct a new string repeatLimitedString using the characters of s such that no letter appears more than repeatLimit times in a row. You do not have to use all characters from s.

// Return the lexicographically largest repeatLimitedString possible.

// A string a is lexicographically larger than a string b if in the first position where a and b differ, string a has a letter that appears later in the alphabet than the corresponding letter in b. If the first min(a.length, b.length) characters do not differ, then the longer string is the lexicographically larger one.

// Example 1:
// 		Input: s = "cczazcc", repeatLimit = 3
// 		Output: "zzcccac"
// Explanation: We use all of the characters from s to construct the repeatLimitedString "zzcccac".
// 		The letter 'a' appears at most 1 time in a row.
// 		The letter 'c' appears at most 3 times in a row.
// 		The letter 'z' appears at most 2 times in a row.
// 		Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
// 		The string is the lexicographically largest repeatLimitedString possible so we return "zzcccac".
// 		Note that the string "zzcccca" is lexicographically larger but the letter 'c' appears more than 3 times in a row, so it is not a valid repeatLimitedString.

// Example 2:
// 		Input: s = "aababab", repeatLimit = 2
// 		Output: "bbabaa"
// Explanation: We use only some of the characters from s to construct the repeatLimitedString "bbabaa".
// 		The letter 'a' appears at most 2 times in a row.
// 		The letter 'b' appears at most 2 times in a row.
// 		Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
// 		The string is the lexicographically largest repeatLimitedString possible so we return "bbabaa".
// 		Note that the string "bbabaaa" is lexicographically larger but the letter 'a' appears more than 2 times in a row, so it is not a valid repeatLimitedString.

// Constraints:
//		1 <= repeatLimit <= s.length <= 10^5
//		s consists of lowercase English letters.

const repeatLimitedString = (s, repeatLimit) => {
  let chars = [...s].sort((a, b) => b.localeCompare(a));

  let countRepeats = 0;
  return chars.reduce((a, c, i, arr) => {
    if (c == a[a.length - 1]) {
      if (countRepeats === repeatLimit) {
        let indexNextChar = arr.lastIndexOf(c) + 1;
        if (indexNextChar === arr.length) return a;
        a += arr.splice(indexNextChar, 1);
        countRepeats = 1;
      } else {
        countRepeats++;
      }
    } else countRepeats = 1;
    a += c;

    return a;
  }, "");
};

console.log(repeatLimitedString("cczazcc", 3)); // "zzcccac"
console.log(repeatLimitedString("aababab", 2)); // "bbabaa"

// What a confusing mess
// Exceeds runtime limit

var topVotedRepeatLimitedString = function (s, repeatLimit) {
  const freq = {},
    //https://github.com/datastructures-js/priority-queue
    queue = new MaxPriorityQueue(),
    result = [];
  for (let c of s) freq[c] = freq[c] ? freq[c] + 1 : 1;
  for (let [k, v] of Object.entries(freq))
    queue.enqueue({ l: k, c: v }, k.charCodeAt(0) - 97);

  while (!queue.isEmpty()) {
    const { element: top, priority: prior } = queue.dequeue();
    for (let i = 0; i < repeatLimit && top.c > 0; i++, top.c--)
      result.push(top.l);

    if (top.c > 0) {
      if (!queue.isEmpty()) {
        const f = queue.front().element;
        result.push(f.l);
        f.c--;
        if (f.c === 0) queue.dequeue();
        queue.enqueue(top, prior);
      }
    }
  }
  return result.join("");
};

// 2nd time seeing MaxPriorityQueue
// It seems very useful in these types of questions */

// Minimum Number of Steps to Make Two Strings Anagram II					3/28/2023
/* 
// You are given two strings s and t. In one step, you can append any character to either s or t.

// Return the minimum number of steps to make s and t anagrams of each other.

// An anagram of a string is a string that contains the same characters with a different (or the same) ordering.

// Example 1:
// 		Input: s = "leetcode", t = "coats"
// 		Output: 7
// Explanation:
// 		- In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
// 		- In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
// 		"leetcodeas" and "coatsleede" are now anagrams of each other.
// 		We used a total of 2 + 5 = 7 steps.
// 		It can be shown that there is no way to make them anagrams of each other with less than 7 steps.

// Example 2:
// 		Input: s = "night", t = "thing"
// 		Output: 0
// Explanation: The given strings are already anagrams of each other. Thus, we do not need any further steps.

// Constraints:
//		1 <= s.length, t.length <= 2 * 10^5
//		s and t consist of lowercase English letters.

const minSteps = (s, t) => {
  const charMap = (str) =>
    [...str].reduce((a, c) => a.set(c, a.get(c) + 1 || 1), new Map());

  s = charMap(s);
  t = charMap(t);

  let missingChars = 0;

  for (const [char, sCount] of [...s.entries()]) {
    let tCount = t.get(char);
    if (!tCount) missingChars += sCount;
    else if (sCount > tCount) missingChars += sCount - tCount;
  }
  for (const [char, tCount] of [...t.entries()]) {
    let sCount = s.get(char);
    if (!sCount) missingChars += tCount;
    else if (tCount > sCount) missingChars += tCount - sCount;
  }

  return missingChars;
};

console.log(minSteps("leetcode", "coats")); // 7
console.log(minSteps("night", "thing")); // 0

// Decent runtime

var topVotedMinSteps = function (s, t) {
  let sFreq = Array(26).fill(0),
    tFreq = Array(26).fill(0);
  for (let char of s) sFreq[char.charCodeAt() - 97]++;
  for (let char of t) tFreq[char.charCodeAt() - 97]++;
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    ans += Math.abs(sFreq[i] - tFreq[i]);
  }
  return ans;
};

// Same idea, but much cleaner and faster */

// Minimum Time to Complete Trips					3/29/2023
/* 
// You are given an array time where time[i] denotes the time taken by the ith bus to complete one trip.

// Each bus can make multiple trips successively; that is, the next trip can start immediately after completing the current trip. Also, each bus operates independently; that is, the trips of one bus do not influence the trips of any other bus.

// You are also given an integer totalTrips, which denotes the number of trips all buses should make in total. Return the minimum time required for all buses to complete at least totalTrips trips.

// Example 1:
// 		Input: time = [1,2,3], totalTrips = 5
// 		Output: 3
// Explanation:
// 		- At time t = 1, the number of trips completed by each bus are [1,0,0].
// 		The total number of trips completed is 1 + 0 + 0 = 1.
// 		- At time t = 2, the number of trips completed by each bus are [2,1,0].
// 		The total number of trips completed is 2 + 1 + 0 = 3.
// 		- At time t = 3, the number of trips completed by each bus are [3,1,1].
// 		The total number of trips completed is 3 + 1 + 1 = 5.
// 		So the minimum time needed for all buses to complete at least 5 trips is 3.

// Example 2:
// 		Input: time = [2], totalTrips = 1
// 		Output: 2
// Explanation:
// 		There is only one bus, and it will complete its first trip at t = 2.
// 		So the minimum time needed to complete 1 trip is 2.

// Constraints:
//		1 <= time.length <= 105
//		1 <= time[i], totalTrips <= 107

var topVotedMinimumTime = function (time, totalTrips) {
  let maxTime = Math.min.apply(null, time) * totalTrips;
  let minTime = 1;

  while (minTime < maxTime) {
    const midTime = Math.floor((minTime + maxTime) / 2);
    let trips = 0;
    for (const tripTime of time) {
      trips += Math.floor(midTime / tripTime);
    }

    trips < totalTrips ? (minTime = midTime + 1) : (maxTime = midTime);
  }

  return minTime;
};

console.log(topVotedMinimumTime([1, 2, 3], 5)); // 3
console.log(topVotedMinimumTime([2], 1)); // 2

// Couldn't grasp the prompt on this one
// 'Math.min.apply(null, time)' works the same as 'Math.min(...time)' but provides faster runtime */

// Sort the Jumbled Numbers					3/30/2023
/* 
// You are given a 0-indexed integer array mapping which represents the mapping rule of a shuffled decimal system. mapping[i] = j means digit i should be mapped to digit j in this system.

// The mapped value of an integer is the new integer obtained by replacing each occurrence of digit i in the integer with mapping[i] for all 0 <= i <= 9.

// You are also given another integer array nums. Return the array nums sorted in non-decreasing order based on the mapped values of its elements.

// Notes:

// Elements with the same mapped values should appear in the same relative order as in the input.

// The elements of nums should only be sorted based on their mapped values and not be replaced by them.

// Example 1:
// 		Input: mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]
// 		Output: [338,38,991]
// Explanation:
// 		Map the number 991 as follows:
// 		1. mapping[9] = 6, so all occurrences of the digit 9 will become 6.
// 		2. mapping[1] = 9, so all occurrences of the digit 1 will become 9.
// 		Therefore, the mapped value of 991 is 669.
// 		338 maps to 007, or 7 after removing the leading zeros.
// 		38 maps to 07, which is also 7 after removing leading zeros.
// 		Since 338 and 38 share the same mapped value, they should remain in the same relative order, so 338 comes before 38.
// 		Thus, the sorted array is [338,38,991].

// Example 2:
// 		Input: mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123]
// 		Output: [123,456,789]
// Explanation: 789 maps to 789, 456 maps to 456, and 123 maps to 123. Thus, the sorted array is [123,456,789].

// Constraints:
//		mapping.length == 10
//		0 <= mapping[i] <= 9
//		All the values of mapping[i] are unique.
//		1 <= nums.length <= 3 * 104
//		0 <= nums[i] < 109

const sortJumbled = (map, nums) => {
  const mappedValue = (val) =>
    [...String(val)].reduce((a, c) => a + map[c], "");
  return nums.sort((a, b) => mappedValue(a) - mappedValue(b));
};

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38])); // [338,38,991]
console.log(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123])); // [123,456,789]

// Slow but works

const getRealValue = (mapping, value) => {
  if (value === 0) return mapping[0];
  let realValue = 0;
  let carry = 1;
  while (value > 0) {
    const digit = value % 10;
    realValue += mapping[digit] * carry;
    carry *= 10;
    value = (value / 10) >> 0;
  }
  return realValue;
};
const topVotedSortJumbled = (mapping, nums) => {
  const cache = {};
  for (const num of nums) {
    cache[num] = getRealValue(mapping, num);
  }
  return nums.sort((a, b) => cache[a] - cache[b]);
};

// Same idea, faster code
// Avoids converting to string/array to find mapped value */

// Append K Integers With Minimal Sum					3/31/2023
/* 
// You are given an integer array nums and an integer k. Append k unique positive integers that do not appear in nums to nums such that the resulting total sum is minimum.

// Return the sum of the k integers appended to nums.

// Example 1:
// 		Input: nums = [1,4,25,10,25], k = 2
// 		Output: 5
// Explanation: The two unique positive integers that do not appear in nums which we append are 2 and 3.
// 		The resulting sum of nums is 1 + 4 + 25 + 10 + 25 + 2 + 3 = 70, which is the minimum.
// 		The sum of the two integers appended is 2 + 3 = 5, so we return 5.

// Example 2:
// 		Input: nums = [5,6], k = 6
// 		Output: 25
// Explanation: The six unique positive integers that do not appear in nums which we append are 1, 2, 3, 4, 7, and 8.
// 		The resulting sum of nums is 5 + 6 + 1 + 2 + 3 + 4 + 7 + 8 = 36, which is the minimum.
// 		The sum of the six integers appended is 1 + 2 + 3 + 4 + 7 + 8 = 25, so we return 25.

// Constraints:
//		1 <= nums.length <= 105
//		1 <= nums[i] <= 109
//		1 <= k <= 108

const minimalKSum = (nums, k) => {
  nums = [...new Set(nums)].sort((a, b) => a - b);

  let i = 1,
    j = 0,
    res = 0;

  while (k > 0) {
    if (nums[j] === i) j++;
    else {
      res += i;
      k--;
    }
    i++;
  }

  return res;
};

console.log(minimalKSum([1, 4, 25, 10, 25], 2)); // 5
console.log(minimalKSum([5, 6], 6)); // 25
console.log(minimalKSum([904], 98022370)); // 4804192657241102

// Exceeds runtime limit
// Appears to have been a bugged problem in the past for Javascript, but has since been resolved

var topVotedMinimalKSum = function (nums, k) {
  let total = (k * (k + 1)) / 2;

  nums = Array.from(new Set(nums));
  nums.sort((a, b) => a - b);
  for (let num of nums) {
    if (num <= k) {
      k++;
      console.log(total - 1);
      total = total - num + k;
      console.log(total + 1);
    } else break;
    l;
  }
  return total;
};

// Trickier than initially expected

const revisedMinimalKSum = (nums, k) => {
  let tot = (k * (k + 1)) / 2;
  nums = [...new Set(nums)].sort((a, b) => a - b);

  for (let num of nums) {
    if (num <= k) {
      k++;
      tot = tot - num + k;
    }
  }

  return tot;
}; */

// Count Artifacts That Can Be Extracted					4/1/2023
/* 
// There is an n x n 0-indexed grid with some artifacts buried in it. You are given the integer n and a 0-indexed 2D integer array artifacts describing the positions of the rectangular artifacts where artifacts[i] = [r1i, c1i, r2i, c2i] denotes that the ith artifact is buried in the subgrid where:

// (r1i, c1i) is the coordinate of the top-left cell of the ith artifact and

// (r2i, c2i) is the coordinate of the bottom-right cell of the ith artifact.

// You will excavate some cells of the grid and remove all the mud from them. If the cell has a part of an artifact buried underneath, it will be uncovered. If all the parts of an artifact are uncovered, you can extract it.

// Given a 0-indexed 2D integer array dig where dig[i] = [ri, ci] indicates that you will excavate the cell (ri, ci), return the number of artifacts that you can extract.

// The test cases are generated such that:

// No two artifacts overlap.

// Each artifact only covers at most 4 cells.

// The entries of dig are unique.

// Example 1:
// 		Input: n = 2, artifacts = [[0,0,0,0],[0,1,1,1]], dig = [[0,0],[0,1]]
// 		Output: 1
// Explanation:
// 		The different colors represent different artifacts. Excavated cells are labeled with a 'D' in the grid.
// 		There is 1 artifact that can be extracted, namely the red artifact.
// 		The blue artifact has one part in cell (1,1) which remains uncovered, so we cannot extract it.
// 		Thus, we return 1.

// Example 2:
// 		Input: n = 2, artifacts = [[0,0,0,0],[0,1,1,1]], dig = [[0,0],[0,1],[1,1]]
// 		Output: 2
// Explanation: Both the red and blue artifacts have all parts uncovered (labeled with a 'D') and can be extracted, so we return 2.

// Constraints:
//		1 <= n <= 1000
//		1 <= artifacts.length, dig.length <= min(n2, 105)
//		artifacts[i].length == 4
//		dig[i].length == 2
//		0 <= r1i, c1i, r2i, c2i, ri, ci <= n - 1
//		r1i <= r2i
//		c1i <= c2i
//		No two artifacts will overlap.
//		The number of cells covered by an artifact is at most 4.
//		The entries of dig are unique.

const digArtifacts = (n, artifacts, dig) => {
  let grid = new Array(n).fill().map(() => new Array(n).fill(false));
  dig.map(([r, c]) => (grid[r][c] = true));

  return artifacts.reduce((extracted, [r1, c1, r2, c2]) => {
    while (r1 <= r2) {
      for (let i = c1; i <= c2; i++) if (!grid[r1][i]) return extracted;
      r1++;
    }
    return extracted + 1;
  }, 0);
};

// prettier-ignore
console.log(digArtifacts(2, [[0,0,0,0],[0,1,1,1]], [[0,0],[0,1]])) // 1
// prettier-ignore
console.log(digArtifacts(2, [[0,0,0,0],[0,1,1,1]], [[0,0],[0,1],[1,1]])) // 2

// Really happy with this code
// Same logic as other submissions but more concise */

// Maximize the Topmost Element After K Moves					4/2/2023
/* 
// You are given a 0-indexed integer array nums representing the contents of a pile, where nums[0] is the topmost element of the pile.

// In one move, you can perform either of the following:

// If the pile is not empty, remove the topmost element of the pile.

// If there are one or more removed elements, add any one of them back onto the pile. This element becomes the new topmost element.

// You are also given an integer k, which denotes the total number of moves to be made.

// Return the maximum value of the topmost element of the pile possible after exactly k moves. In case it is not possible to obtain a non-empty pile after k moves, return -1.

// Example 1:
// 		Input: nums = [5,2,2,4,0,6], k = 4
// 		Output: 5
// Explanation:
// 		One of the ways we can end with 5 at the top of the pile after 4 moves is as follows:
// 		- Step 1: Remove the topmost element = 5. The pile becomes [2,2,4,0,6].
// 		- Step 2: Remove the topmost element = 2. The pile becomes [2,4,0,6].
// 		- Step 3: Remove the topmost element = 2. The pile becomes [4,0,6].
// 		- Step 4: Add 5 back onto the pile. The pile becomes [5,4,0,6].
// 		Note that this is not the only way to end with 5 at the top of the pile. It can be shown that 5 is the largest answer possible after 4 moves.

// Example 2:
// 		Input: nums = [2], k = 1
// 		Output: -1
// Explanation:
// 		In the first move, our only option is to pop the topmost element of the pile.
// 		Since it is not possible to obtain a non-empty pile after one move, we return -1.

// Constraints:
//		1 <= nums.length <= 105
//		0 <= nums[i], k <= 109

const maximumTop = (nums, k) => {
  if (nums.length == 1 && k % 2) return -1;
  if (k == 1) return nums[1];
  if (k == 2) return Math.max(nums[0], nums[2]);
  if (k < nums.length) {
    const cur = nums.slice(0, k);
    if (cur.indexOf(Math.max.apply(null, cur)) == k - 1)
      return Math.max(cur[cur.length - 2], nums[k]);
    else return Math.max(...cur, nums[k]);
  }
  return Math.max.apply(null, nums);
};

console.log(maximumTop([5, 2, 2, 4, 0, 6], 4)); // 5
console.log(maximumTop([2], 1)); // -1

// Made sense a couple iterations ago but got worse and worse
// Doesn't pass all test cases

const topVotedMaximumTop = function (nums, k) {
  if (nums.length === 1 && k == 0) return nums;
  if (nums.length === 1 && k % 2 !== 0) return -1;
  let max = Math.max(...nums.slice(0, Math.abs(k - 1)));
  return max > nums[k] || nums[k] === undefined ? max : nums[k];
};

// This is what I was shooting for
// Makes much more sense */

// Maximize Number of Subsequences in a String					4/3/2023
/* 
// You are given a 0-indexed string text and another 0-indexed string pattern of length 2, both of which consist of only lowercase English letters.

// You can add either pattern[0] or pattern[1] anywhere in text exactly once. Note that the character can be added even at the beginning or at the end of text.

// Return the maximum number of times pattern can occur as a subsequence of the modified text.

// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

// Example 1:
// 		Input: text = "abdcdbc", pattern = "ac"
// 		Output: 4
// Explanation:
// 		If we add pattern[0] = 'a' in between text[1] and text[2], we get "abadcdbc". Now, the number of times "ac" occurs as a subsequence is 4.
// 		Some other strings which have 4 subsequences "ac" after adding a character to text are "aabdcdbc" and "abdacdbc".
// 		However, strings such as "abdcadbc", "abdccdbc", and "abdcdbcc", although obtainable, have only 3 subsequences "ac" and are thus suboptimal.
// 		It can be shown that it is not possible to get more than 4 subsequences "ac" by adding only one character.

// Example 2:
// 		Input: text = "aabb", pattern = "ab"
// 		Output: 6
// Explanation:
// 		Some of the strings which can be obtained from text and have 6 subsequences "ab" are "aaabb", "aaabb", and "aabbb".

// Constraints:
//		1 <= text.length <= 10^5
//		pattern.length == 2
//		text and pattern consist only of lowercase English letters.

const maximumSubsequenceCount = (text, pattern) => {
  const regex = new RegExp(`${pattern[0]}|${pattern[1]}`, "g");
  let arr = text.match(regex);
  if (!arr) return 0;

  let max = 0;

  const testSubseq = (cur) => {
    let curMax = 0;
    for (let i = 0; i <= cur.lastIndexOf(pattern[0]); i++) {
      for (let j = i + 1; j < cur.length; j++) {
        if (cur[i] == pattern[0] && cur[j] == pattern[1]) curMax++;
      }
    }
    if (curMax > max) max = curMax;
  };

  testSubseq([pattern[0], ...arr]);
  testSubseq([...arr, pattern[1]]);

  return max;
};

console.log(maximumSubsequenceCount("abdcdbc", "ac")); // 4
console.log(maximumSubsequenceCount("aabb", "ab")); // 6

// Brute force approach

const topVotedMaximumSubsequenceCount = function (text, pattern) {
  let fc = 0;
  let sc = 0;

  let res = 0;

  for (let el of text) {
    if (el === pattern[0]) fc++;
    else if (el === pattern[1]) {
      sc++;
      res += fc;
    }
  }

  if (pattern[0] === pattern[1]) return (fc * (fc + 1)) / 2;

  return res + Math.max(fc, sc);
};

// '(x * (x + 1)) / 2' counts cummulative occurrences of x
// Saw it a couple problems ago and allows to break early from repetitive counting */

// Minimum Operations to Halve Array Sum					4/4/2023
/* 
// You are given an array nums of positive integers. In one operation, you can choose any number from nums and reduce it to exactly half the number. (Note that you may choose this reduced number in future operations.)

// Return the minimum number of operations to reduce the sum of nums by at least half.

// Example 1:
// 		Input: nums = [5,19,8,1]
// 		Output: 3
// Explanation: The initial sum of nums is equal to 5 + 19 + 8 + 1 = 33.
// 		The following is one of the ways to reduce the sum by at least half:
// 		Pick the number 19 and reduce it to 9.5.
// 		Pick the number 9.5 and reduce it to 4.75.
// 		Pick the number 8 and reduce it to 4.
// 		The final array is [5, 4.75, 4, 1] with a total sum of 5 + 4.75 + 4 + 1 = 14.75.
// 		The sum of nums has been reduced by 33 - 14.75 = 18.25, which is at least half of the initial sum, 18.25 >= 33/2 = 16.5.
// 		Overall, 3 operations were used so we return 3.
// 		It can be shown that we cannot reduce the sum by at least half in less than 3 operations.

// Example 2:
// 		Input: nums = [3,8,20]
// 		Output: 3
// Explanation: The initial sum of nums is equal to 3 + 8 + 20 = 31.
// 		The following is one of the ways to reduce the sum by at least half:
// 		Pick the number 20 and reduce it to 10.
// 		Pick the number 10 and reduce it to 5.
// 		Pick the number 3 and reduce it to 1.5.
// 		The final array is [1.5, 8, 5] with a total sum of 1.5 + 8 + 5 = 14.5.
// 		The sum of nums has been reduced by 31 - 14.5 = 16.5, which is at least half of the initial sum, 16.5 >= 31/2 = 15.5.
// 		Overall, 3 operations were used so we return 3.
// 		It can be shown that we cannot reduce the sum by at least half in less than 3 operations.

// Constraints:
//		1 <= nums.length <= 105
//		1 <= nums[i] <= 107

const halveArray = (nums) => {
  let operations = 0;
  let tot = nums.reduce((a, c) => a + c, 0);
  let half = tot / 2;

  while (tot > half) {
    nums.sort((a, b) => b - a);
    const div = nums[0] / 2;
    tot -= div;
    nums[0] = div;
    operations++;
  }

  return operations;
};

console.log(halveArray([5, 19, 8, 1])); // 3
console.log(halveArray([3, 8, 20])); // 3

// Sorting on every iteration is heavy

var topVotedHalveArray = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  const pq = new MaxPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
  }

  let n = sum / 2,
    c = 0;

  while (sum > n) {
    let x = pq.dequeue();
    x = x.element / 2;
    sum -= x;
    pq.enqueue(x);
    c++;
  }

  return c;
};

// Similar logic to my solution
// MaxPriorityQueue() keeps the largest value accessible with .dequeue()
// Saves from sorting on every iteration */

// Maximum Points in an Archery Competition					4/5/2023
/* 
// Alice and Bob are opponents in an archery competition. The competition has set the following rules:

// Alice first shoots numArrows arrows and then Bob shoots numArrows arrows.

// The points are then calculated as follows:

// The target has integer scoring sections ranging from 0 to 11 inclusive.

// For each section of the target with score k (in between 0 to 11), say Alice and Bob have shot ak and bk arrows on that section respectively. If ak >= bk, then Alice takes k points. If ak < bk, then Bob takes k points.

// However, if ak == bk == 0, then nobody takes k points.

// For example, if Alice and Bob both shot 2 arrows on the section with score 11, then Alice takes 11 points. On the other hand, if Alice shot 0 arrows on the section with score 11 and Bob shot 2 arrows on that same section, then Bob takes 11 points.

// You are given the integer numArrows and an integer array aliceArrows of size 12, which represents the number of arrows Alice shot on each scoring section from 0 to 11. Now, Bob wants to maximize the total number of points he can obtain.

// Return the array bobArrows which represents the number of arrows Bob shot on each scoring section from 0 to 11. The sum of the values in bobArrows should equal numArrows.

// If there are multiple ways for Bob to earn the maximum total points, return any one of them.

// Example 1:
// 		Input: numArrows = 9, aliceArrows = [1,1,0,1,0,0,2,1,0,1,2,0]
// 		Output: [0,0,0,0,1,1,0,0,1,2,3,1]
// Explanation: The table above shows how the competition is scored.
// 		Bob earns a total point of 4 + 5 + 8 + 9 + 10 + 11 = 47.
// 		It can be shown that Bob cannot obtain a score higher than 47 points.

// Example 2:
// 		Input: numArrows = 3, aliceArrows = [0,0,1,0,0,0,0,0,0,0,0,2]
// 		Output: [0,0,0,0,0,0,0,0,1,1,1,0]
// Explanation: The table above shows how the competition is scored.
// 		Bob earns a total point of 8 + 9 + 10 = 27.
// 		It can be shown that Bob cannot obtain a score higher than 27 points.

// Constraints:
//		1 <= numArrows <= 105
//		aliceArrows.length == bobArrows.length == 12
//		0 <= aliceArrows[i], bobArrows[i] <= numArrows
//		sum(aliceArrows[i]) == numArrows

const maximumBobPoints = (numArrows, aliceArrows) => {
  let res = new Array(12).fill(0);
  let max = 0;

  const backtrack = (i, arrows, tot, bobArrows) => {
    if (arrows == 0 || i == 0) {
      if (tot > max) {
        bobArrows[0] = arrows; // leftover arrows
        max = tot;
        res = bobArrows;
      }
      return;
    }

    // skip
    backtrack(i - 1, arrows, tot, [...bobArrows]);

    // take
    let arrowsToBeatAlice = aliceArrows[i] + 1;
    if (arrowsToBeatAlice <= arrows) {
      bobArrows[i] = arrowsToBeatAlice;
      backtrack(i - 1, arrows - arrowsToBeatAlice, tot + i, bobArrows);
    }
  };

  backtrack(11, numArrows, 0, new Array(12).fill(0));

  return res;
};

console.log(maximumBobPoints(9, [1, 1, 0, 1, 0, 0, 2, 1, 0, 1, 2, 0])); // [0,0,0,0,1,1,0,0,1,2,3,1]
console.log(maximumBobPoints(3, [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2])); // [0,0,0,0,0,0,0,0,1,1,1,0]
console.log(maximumBobPoints(89, [3, 2, 28, 1, 7, 1, 16, 7, 3, 13, 3, 5])); // [21,3,0,2,8,2,17,8,4,14,4,6]

// Same as top voted

// Really getting comfortable with backtracking
// took me a while to find a bug, fixed by returning [...bobArrows] in skip */

// Minimum Deletions to Make Array Beautiful					4/6/2023
/* 
// You are given a 0-indexed integer array nums. The array nums is beautiful if:

// nums.length is even.

// nums[i] != nums[i + 1] for all i % 2 == 0.

// Note that an empty array is considered beautiful.

// You can delete any number of elements from nums. When you delete an element, all the elements to the right of the deleted element will be shifted one unit to the left to fill the gap created and all the elements to the left of the deleted element will remain unchanged.

// Return the minimum number of elements to delete from nums to make it beautiful.

// Example 1:
// 		Input: nums = [1,1,2,3,5]
// 		Output: 1
// Explanation: You can delete either nums[0] or nums[1] to make nums = [1,2,3,5] which is beautiful. It can be proven you need at least 1 deletion to make nums beautiful.

// Example 2:
// 		Input: nums = [1,1,2,2,3,3]
// 		Output: 2
// Explanation: You can delete nums[0] and nums[5] to make nums = [1,2,2,3] which is beautiful. It can be proven you need at least 2 deletions to make nums beautiful.

// Constraints:
//		1 <= nums.length <= 10^5
//		0 <= nums[i] <= 10^5

const minDeletion = (nums) => {
  let deletions = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (i % 2 == 0 && nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      deletions++;
      i--;
    }
  }
  if (nums.length % 2 == 1) deletions++;

  return deletions;
};

console.log(minDeletion([1, 1, 2, 3, 5])); // 1
console.log(minDeletion([1, 1, 2, 2, 3, 3])); // 2
console.log(minDeletion([2, 8, 1, 0, 4, 4, 7, 0, 4, 5, 1, 2, 4, 1])); // 2

const topVotedMinDeletion = function (nums) {
  var count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0 && nums[i] === nums[i + 1]) {
      // We can use either splice or shift, but I prefer to use shift because of better performance.
      // nums.splice( i, 1 );
      nums.shift();
      i--;
      count++;
    }
  }

  return nums.length % 2 !== 0 ? count + 1 : count;
};

// Hah, the only difference between our solutions is .splice vs .shift
// Mine exceeds runtime limit while his passes

// A comment from the user addressing this difference:
// "Good Question, shift will remove first element of array as opposed to splice which will remove specific array index i. However, the goal of the challenge is to return minimum deletion operation to make array beautiful. So, if we use shift, and remove first element of array for condition ( i % 2 === 0 && nums[i] === nums[i + 1] ), first element of array will always get changed only without any array elements manipulation. Also, shift operation is much faster than splice. On the other hand, if we use splice and lets say we remove an element in the middle of array, it will first remove that index, and shift right elements to left by one which is computationally expensive for big arrays. Hope that helps." */

// Find Palindrome With Fixed Length					4/7/2023
/* 
// Given an integer array queries and a positive integer intLength, return an array answer where answer[i] is either the queries[i]th smallest positive palindrome of length intLength or -1 if no such palindrome exists.

// A palindrome is a number that reads the same backwards and forwards. Palindromes cannot have leading zeros.

// Example 1:
// 		Input: queries = [1,2,3,4,5,90], intLength = 3
// 		Output: [101,111,121,131,141,999]
// Explanation:
// 		The first few palindromes of length 3 are:
// 		101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202, ...
// 		The 90th palindrome of length 3 is 999.

// Example 2:
// 		Input: queries = [2,4,6], intLength = 4
// 		Output: [1111,1331,1551]
// Explanation:
// 		The first six palindromes of length 4 are:
// 		1001, 1111, 1221, 1331, 1441, and 1551.

// Constraints:
//		1 <= queries.length <= 5 * 104
//		1 <= queries[i] <= 109
//		1 <= intLength <= 15

var revisedKthPalindrome = function (q, len) {
  let half = 10 ** (Math.ceil(len / 2) - 1);
  // either half len +1 (odd length palindrome) or 1 less (for even length palindrome)

  let ans = [];
  for (let nth of q) {
    let palindrome = String(half + (nth - 1));

    if (len % 2) {
      palindrome += [...palindrome.substring(0, palindrome.length - 1)]
        .reverse()
        .join("");
    } else {
      palindrome += [...palindrome].reverse().join("");
    }

    palindrome.length > len ? ans.push(-1) : ans.push(+palindrome);
  }

  return ans;
};

console.log(revisedKthPalindrome([1, 2, 3, 4, 5, 90], 3)); // [101,111,121,131,141,999]
console.log(revisedKthPalindrome([2, 4, 6], 4)); // [1111,1331,1551]

// Copied top voted's logic for 'half'
// Changed the rest to how I would've gone about it */

// Find Triangular Sum of an Array					4/8/2023
/* 
// You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

// The triangular sum of nums is the value of the only element present in nums after the following process terminates:

// Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.

// For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.

// Replace the array nums with newNums.

// Repeat the entire process starting from step 1.

// Return the triangular sum of nums.

// Example 1:
// 		Input: nums = [1,2,3,4,5]
// 		Output: 8
// Explanation:
//    https://assets.leetcode.com/uploads/2022/02/22/ex1drawio.png
// 		The above diagram depicts the process from which we obtain the triangular sum of the array.

// Example 2:
// 		Input: nums = [5]
// 		Output: 5
// Explanation:
// 		Since there is only one element in nums, the triangular sum is the value of that element itself.

// Constraints:
//		1 <= nums.length <= 1000
//		0 <= nums[i] <= 9

const triangularSum = (nums) => {
  if (nums.length == 1) return nums[0];

  let newNums = [];
  for (let i = 0; i < nums.length - 1; i++) {
    newNums[i] = (nums[i] + nums[i + 1]) % 10;
  }

  return triangularSum(newNums);
};

console.log(triangularSum([1, 2, 3, 4, 5])); // 8
console.log(triangularSum([5])); // 5

// Same as most other javascript solutions
// A while loop would've been better

var topVotedTriangularSum = function (nums) {
  let j = nums.length;

  while (j > 1) {
    for (let i = 0; i < j - 1; i++) {
      nums[i] = (nums[i] + (nums[i + 1] || 0)) % 10;
    }
    j--;
  }

  return nums[0];
};

// Much better runtime */

// Number of Ways to Select Buildings					4/9/2023
/* 
// You are given a 0-indexed binary string s which represents the types of buildings along a street where:

// s[i] = '0' denotes that the ith building is an office and

// s[i] = '1' denotes that the ith building is a restaurant.

// As a city official, you would like to select 3 buildings for random inspection. However, to ensure variety, no two consecutive buildings out of the selected buildings can be of the same type.

// For example, given s = "001101", we cannot select the 1st, 3rd, and 5th buildings as that would form "011" which is not allowed due to having two consecutive buildings of the same type.

// Return the number of valid ways to select 3 buildings.

// Example 1:
// 		Input: s = "001101"
// 		Output: 6
// Explanation:
// 		The following sets of indices selected are valid:
// 		- [0,2,4] from "001101" forms "010"
// 		- [0,3,4] from "001101" forms "010"
// 		- [1,2,4] from "001101" forms "010"
// 		- [1,3,4] from "001101" forms "010"
// 		- [2,4,5] from "001101" forms "101"
// 		- [3,4,5] from "001101" forms "101"
// 		No other selection is valid. Thus, there are 6 total ways.

// Example 2:
// 		Input: s = "11100"
// 		Output: 0
// Explanation: It can be shown that there are no valid selections.

// Constraints:
//		3 <= s.length <= 105
//		s[i] is either '0' or '1'.

const numberOfWays = (s) => {
  let arr = s.match(/[0]+|[1]+/g).map((n) => n.length);
  if (arr.length < 3) return 0;

  let res = 0;
  for (let i = 0; i < arr.length - 2; i++)
    for (let j = i + 1; j < arr.length - 1; j += 2)
      for (let k = j + 1; k < arr.length; k += 2)
        res += arr[i] * arr[j] * arr[k];

  return res;
};

console.log(numberOfWays("001101")); // 6
console.log(numberOfWays("11100")); // 0
console.log(numberOfWays("0001100100")); // 38

// Exceeds runtime limit

const topVotedNumberOfWays = (s) => op(s, "101") + op(s, "010");

const op = (s, t) => {
  let one = 0,
    two = 0,
    three = 0;
  for (const c of s) {
    if (c == t[2]) three += two;
    if (c == t[1]) two += one;
    if (c == t[0]) one++;
  }
  return three;
};

// Wow, would've never landed on this
// Very nice */

// Minimum Common Value					4/10/2023
/* 
// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Example 1:
// 		Input: nums1 = [1,2,3], nums2 = [2,4]
// 		Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.

// Example 2:
// 		Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// 		Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

// Constraints:
//		1 <= nums1.length, nums2.length <= 105
//		1 <= nums1[i], nums2[j] <= 109
//		Both nums1 and nums2 are sorted in non-decreasing order.

const getCommon = (n1, n2) => {
  const set = new Set(n1);
  for (const n of n2) if (set.has(n)) return n;
  return -1;
};

console.log(getCommon([1, 2, 3], [2, 4])); // 2
console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5])); // 2

// Was too slow at first
// Worked once array was cast as Set */

// Find Players With Zero or One Losses					4/11/2023
/* 
// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.

// answer[1] is a list of all players that have lost exactly one match.

// The values in the two lists should be returned in increasing order.

// Note:

// You should only consider the players that have played at least one match.

// The testcases will be generated such that no two matches will have the same outcome.

// Example 1:
// 		Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// 		Output: [[1,2,10],[4,5,7,8]]
// Explanation:
// 		Players 1, 2, and 10 have not lost any matches.
// 		Players 4, 5, 7, and 8 each have lost one match.
// 		Players 3, 6, and 9 each have lost two matches.
// 		Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

// Example 2:
// 		Input: matches = [[2,3],[1,3],[5,4],[6,4]]
// 		Output: [[1,2,5,6],[]]
// Explanation:
// 		Players 1, 2, 5, and 6 have not lost any matches.
// 		Players 3 and 4 each have lost two matches.
// 		Thus, answer[0] = [1,2,5,6] and answer[1] = [].

// Constraints:
//		1 <= matches.length <= 10^5
//		matches[i].length == 2
//		1 <= winneri, loseri <= 10^5
//		winneri != loseri
//		All matches[i] are unique.

const findWinners = (matches) => {
  const winners = new Set();
  const lossMap = matches.reduce((map, [winner, loser]) => {
    winners.add(winner);
    return map.set(loser, map.get(loser) + 1 || 1);
  }, new Map());

  const noLoss = [...winners]
    .filter((player) => !lossMap.has(player))
    .sort((a, b) => a - b);

  const oneLoss = [...lossMap]
    .reduce((a, [player, losses]) => {
      if (losses == 1) a.push(player);
      return a;
    }, [])
    .sort((a, b) => a - b);

  return [noLoss, oneLoss];
};

// prettier-ignore
console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])) // [[1,2,10],[4,5,7,8]]
// prettier-ignore
console.log(findWinners([[2,3],[1,3],[5,4],[6,4]])) // [[1,2,5,6],[]]

// Very readable I find

var topVotedFindWinners = function (matches) {
  let p = new Set(); // all players
  let ml = new Map(); // players who also lost

  for (let [w, l] of matches) {
    p.add(w);
    p.add(l);
    ml.set(l, (ml.get(l) || 0) + 1);
  }

  let ans = [[], []]; // [winners, players with 1 loss]
  for (let x of p) {
    if (ml.has(x) === false) ans[0].push(x);
    if (ml.get(x) === 1) ans[1].push(x);
  }
  return ans.map((arr) => arr.sort((a, b) => a - b));
};

// Same logic
// Cleaner code */

// Array Prototype Last					4/12/2023
/* 
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// Example 1:
// 		Input: nums = [1,2,3]
// 		Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

// Example 2:
// 		Input: nums = []
// 		Output: -1
// Explanation: Because there are no elements, return -1.

// Constraints:
//		0 <= arr.length <= 1000
//		0 <= arr[i] <= 1000

Array.prototype.last = function () {
  return this[this.length - 1] ?? -1;
};

console.log([1, 2, 3].last()); // 3
console.log([].last()); // -1
console.log([0, 0, 0].last()); // 0

// 100% Runtime

Array.prototype.topVotedLast = function () {
  return this.at(-1) ?? -1;
};

// First time seeing .at

// Leetcode dropped a new category today for Javascript Front-end questions only
// Very cool, will be doing more of these definitely */

// Counter					4/13/2023
/* 
// Write a function that accepts an integer n and returns a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:
// 		Input:
// 		n = 10
// 		["call","call","call"]
// 		Output: [10,11,12]
// Explanation:
// 		counter() = 10 // The first time counter() is called, it returns n.
// 		counter() = 11 // Returns 1 more than the previous time.
// 		counter() = 12 // Returns 1 more than the previous time.

// Example 2:
// 		Input:
// 		n = -2
// 		["call","call","call","call","call"]
// 		Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

// Constraints:
//		-1000 <= n <= 1000
//		At most 1000 calls to counter() will be made

var createCounter = (n) => () => n++;

const call1 = createCounter(10);
console.log(call1(), call1(), call1());

const call2 = createCounter(-2);
console.log(call2(), call2(), call2(), call2(), call2());

// Same as top voted */

// Sleep					4/14/2023
/* 
// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

// Example 1:
// 		Input: millis = 100
// 		Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// 		let t = Date.now();
// 		sleep(100).then(() => {
// 		console.log(Date.now() - t); // 100
// 		});

// Example 2:
// 		Input: millis = 200
// 		Output: 200
// Explanation: It should return a promise that resolves after 200ms.

// Constraints:
//		1 <= millis <= 1000

const sleep = async (millis) =>
  new Promise((res) => setTimeout(() => res(true), millis));

console.log(await sleep(100)); // 100
console.log(await sleep(200)); // 200

// Ça marche

async function topVotedSleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

// This works since the promise can return any value

const revisedSleep = async (millis) =>
  new Promise((res) => setTimeout(res, millis));

// Day 666 🤡 */

// Array Reduce Transformation					4/15/2023
/* 
// Given an integer array nums, a reducer function fn, and an intial value init, return a reduced array.

// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, arr[2]), ... until every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.

// Example 1:
// 		Input:
// 		nums = [1,2,3,4]
// 		fn = function sum(accum, curr) { return accum + curr; }
// 		init = 0
// 		Output: 10
// Explanation:
// 		initially, the value is init=0.
// 		(0) + nums[0] = 1
// 		(1) + nums[1] = 3
// 		(3) + nums[2] = 6
// 		(6) + nums[3] = 10
// 		The final answer is 10.

// Example 2:
// 		Input:
// 		nums = [1,2,3,4]
// 		fn = function sum(accum, curr) { return accum + curr * curr; }
// 		init = 100
// 		Output: 130
// Explanation:
// 		initially, the value is init=100.
// 		(100) + nums[0]^2 = 101
// 		(101) + nums[1]^2 = 105
// 		(105) + nums[2]^2 = 114
// 		(114) + nums[3]^2 = 130
// 		The final answer is 130.

// Example 3:
// 		Input:
// 		nums = []
// 		fn = function sum(accum, curr) { return 0; }
// 		init = 25
// 		Output: 25
// Explanation: For empty arrays, the answer is always init.

// Constraints:
//		0 <= nums.length <= 1000
//		0 <= nums[i] <= 1000
//		0 <= init <= 1000

const reduce = (nums, fn, init) => {
  for (const n of nums) {
    init = fn(init, n);
  }
  return init;
};

const fn1 = (a, c) => a + c;
console.log(reduce([1, 2, 3, 4], fn1, 0)); // 10

const fn2 = (a, c) => a + c * c;
console.log(reduce([1, 2, 3, 4], fn2, 100)); // 130

const fn3 = (a, c) => 0;
console.log(reduce([], fn3, 25)); // 25

// Faster than 100% runtimes
// Same as top voted */

// Function Composition					4/16/2023
/* 
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Example 1:
// 		Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// 		Output: 65
// Explanation:
// 		Evaluating from right to left ...
// 		Starting with x = 4.
// 		2 * (4) = 8
// 		(8) * (8) = 64
// 		(64) + 1 = 65

// Example 2:
// 		Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// 		Output: 1000
// Explanation:
// 		Evaluating from right to left ...
// 		10 * (1) = 10
// 		10 * (10) = 100
// 		10 * (100) = 1000

// Example 3:
// 		Input: functions = [], x = 42
// 		Output: 42
// Explanation:
// 		The composition of zero functions is the identity function

// Constraints:
//		-1000 <= x <= 1000
//		0 <= functions.length <= 1000
//		all functions accept and return a single integer

const compose = (fns) => (x) => {
  let res = x;
  for (let i = fns.length - 1; i >= 0; i--) {
    res = fns[i](res);
  }
  return res;
};

console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])(4)); // 65
console.log(compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x])(1)); // 1000
console.log(compose([])(42)); // 42

// Took me a while, couldn't seem to get the syntax right

var topVotedCompose = function (functions) {
  return (x) => functions.reduceRight((acc, f) => f(acc), x);
};

// First time seeing .reduceRight

const revisedCompose = (fns) => (x) => fns.reduceRight((a, fn) => fn(a), x); */

// Filter Elements from Array					4/17/2023
/* 
// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

// Please solve it without the built-in Array.filter method.

// Example 1:
// 		Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// 		Output: [20,30]
// Explanation:
// 		const newArray = filter(arr, fn); // [20, 30]
// 		The function filters out values that are not greater than 10

// Example 2:
// 		Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// 		Output: [1]
// Explanation:
// 		fn can also accept the index of each element
// 		In this case, the function removes elements not at index 0

// Example 3:
// 		Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// 		Output: [-2,0,1,2]
// Explanation:
// 		Falsey values such as 0 should be filtered out

// Constraints:
//		0 <= arr.length <= 1000
//		-109 <= arr[i] <= 109

const filter = (arr, fn) =>
  arr.reduce((a, c, i) => {
    if (fn(c, i)) a.push(c);
    return a;
  }, []);

console.log(filter([0, 10, 20, 30], (n) => n > 10)); // [20,30]
console.log(filter([1, 2, 3], (n, i) => i === 0)); // [1]
console.log(filter([-2, -1, 0, 1, 2], (n) => n + 1)); // [-2,0,1,2]

// Same as top voted */

// Apply Transform Over Each Element in Array					4/18/2023
/* 
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:
// 		Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// 		Output: [2,3,4]
// Explanation:
// 		const newArray = map(arr, plusone); // [2,3,4]
// 		The function increases each value in the array by one.

// Example 2:
// 		Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// 		Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:
// 		Input: arr = [10,20,30], fn = function constant() { return 42; }
// 		Output: [42,42,42]
// Explanation: The function always returns 42.

// Constraints:
//		0 <= arr.length <= 1000
//		-109 <= arr[i] <= 109
//		fn returns a number

const map = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

console.log(map([1, 2, 3], (n) => n + 1)); // [2,3,4]
console.log(map([1, 2, 3], (n, i) => n + i)); // [1,3,5]
console.log(map([10, 20, 30], () => 42)); // [42,42,42]

// 100% Runtime
// Very similar to yesterday's question */

// Promise Time Limit					4/19/2023
/* 
// Given an asyncronous function fn and a time t in milliseconds, return a new time limited version of the input function.

// A time limited function is a function that is identical to the original unless it takes longer than t milliseconds to fullfill. In that case, it will reject with "Time Limit Exceeded".  Note that it should reject with a string, not an Error.

// Example 1:
// 		Input:
// 		fn = async (n) => {
// 		await new Promise(res => setTimeout(res, 100));
// 		return n * n;
// 		}
// 		inputs = [5]
// 		t = 50
// 		Output: {"rejected":"Time Limit Exceeded","time":50}
// Explanation:
// 		The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.

// Example 2:
// 		Input:
// 		fn = async (n) => {
// 		await new Promise(res => setTimeout(res, 100));
// 		return n * n;
// 		}
// 		inputs = [5]
// 		t = 150
// 		Output: {"resolved":25,"time":100}
// Explanation:
// 		The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.

// Example 3:
// 		Input:
// 		fn = async (a, b) => {
// 		await new Promise(res => setTimeout(res, 120));
// 		return a + b;
// 		}
// 		inputs = [5,10]
// 		t = 150
// 		Output: {"resolved":15,"time":120}
// Explanation:
// 		The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.

// Example 4:
// 		Input:
// 		fn = async () => {
// 		throw "Error";
// 		}
// 		inputs = []
// 		t = 1000
// 		Output: {"rejected":"Error","time":0}
// Explanation:
// 		The function immediately throws an error.

// Constraints:
//		0 <= inputs.length <= 10
//		0 <= t <= 1000
//		fn returns a promise

const topVotedTimeLimit = (fn, t) => {
  return async (...args) => {
    const timeout = new Promise((_, rej) => {
      setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([fn(...args), timeout]);
  };
};

const fn1 = topVotedTimeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 50);
// console.log(await fn1(5)); // {"rejected":"Time Limit Exceeded","time":50}

const fn2 = topVotedTimeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 150);
console.log(await fn2(5)); // {"resolved":25,"time":100}

const fn3 = topVotedTimeLimit(async (a, b) => {
  await new Promise((res) => setTimeout(res, 120));
  return a + b;
}, 150);
console.log(await fn3(5, 10)); // {"resolved":15,"time":120}

const fn4 = topVotedTimeLimit(async () => {
  throw "Error";
}, 1000);
console.log(await fn4()); // {"rejected":"Error","time":0}

// I'm very out of practice with Promises
// Seems like a perfect situation for .race here */

// Check if Object Instance of Class					4/20/2023
/* 
// Write a function that checks if a given object is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function.

// Example 1:
// 		Input: func = () => checkIfInstanceOf(new Date(), Date)
// 		Output: true
// Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

// Example 2:
// 		Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
// 		Output: true
// Explanation:
// 		class Animal {};
// 		class Dog extends Animal {};
// 		checkIfInstance(new Dog(), Animal); // true
// 		Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

// Example 3:
// 		Input: func = () => checkIfInstanceOf(Date, Date)
// 		Output: false
// Explanation: A date constructor cannot logically be an instance of itself.

// Example 4:
// 		Input: func = () => checkIfInstanceOf(5, Number)
// 		Output: true

// Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".

const checkIfInstanceOf = (obj, classFn) => {
  while (obj != null) {
    if (obj.constructor == classFn) return true;
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};

console.log(checkIfInstanceOf(new Date(), Date)); // true
class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal)); // true
console.log(checkIfInstanceOf(Date, Date)); // false
console.log(checkIfInstanceOf(5, Number)); // true

// Knew I had to find the top-most prototype, but couldn't figure out which method to use
// Ended up looking at top voted to find Object.getPrototypeOf

const topVotedCheckIfInstanceOf = (obj, classFn) => {
  if (obj == null || typeof obj == null || typeof classFn !== "function")
    return false;
  return Object(obj) instanceof classFn;
};

// instanceof wasn't working for me
// Turns out I had to cast it as an Object first */

// Generate Fibonacci Sequence					4/21/2023
/* 
// Write a generator function that returns a generator object which yields the fibonacci sequence.

// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

// Example 1:
// 		Input: callCount = 5
// 		Output: [0,1,1,2,3]
// Explanation:
// 		const gen = fibGenerator();
// 		gen.next().value; // 0
// 		gen.next().value; // 1
// 		gen.next().value; // 1
// 		gen.next().value; // 2
// 		gen.next().value; // 3

// Example 2:
// 		Input: callCount = 0
// 		Output: []
// Explanation: gen.next() is never called so nothing is outputted

// Constraints:
//		0 <= callCount <= 50

const fibGenerator = function* () {
  let i = 0;
  let a = 0;
  let b = 1;

  if (i == 0) {
    i++;
    yield a;
  }
  if (i == 1) {
    i++;
    yield b;
  }

  while (true) {
    [a, b] = [b, a + b];
    i++;
    yield b;
  }
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// First time ever encountering a generator function
// Read the MDN doc and ended up with what's above

var topVotedFibGenerator = function* () {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

// Much simpler, seems while(true) replaces the need for i

const revisedFibGenerator = function* () {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function* */

// Cache With Time Limit					4/22/2023
/* 
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

// Example 1:
// 		Input:
// 		["TimeLimitedCache", "set", "get", "count", "get"]
// 		[[], [1, 42, 100], [1], [], [1]]
// 		[0, 0, 50, 50, 150]
// 		Output: [null, false, 42, 1, -1]
// Explanation:
// 		At t=0, the cache is constructed.
// 		At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
// 		At t=50, key=1 is requested and the value of 42 is returned.
// 		At t=50, count() is called and there is one active key in the cache.
// 		At t=100, key=1 expires.
// 		At t=150, get(1) is called but -1 is returned because the cache is empty.

// Example 2:
// 		Input:
// 		["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
// 		[[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
// 		[0, 0, 40, 50, 120, 200, 250]
// 		Output: [null, false, true, 50, 50, -1]
// Explanation:
// 		At t=0, the cache is constructed.
// 		At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
// 		At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
// 		At t=50, get(1) is called which returned 50.
// 		At t=120, get(1) is called which returned 50.
// 		At t=140, key=1 expires.
// 		At t=200, get(1) is called but the cache is empty so -1 is returned.
// 		At t=250, count() returns 0 because the cache is empty.

// Constraints:
//		0 <= key <= 109
//		0 <= value <= 109
//		0 <= duration <= 1000
//		total method calls will not exceed 100

class TimeLimitedCache {
  constructor() {
    this.obj = {};
  }

  set(key, value, duration) {
    this.obj[key] = value;
    setTimeout(() => delete this.obj[key], duration);
  }

  get(key) {
    return this.obj[key] ?? -1;
  }

  count() {
    return Object.keys(this.obj).length;
  }
}

let obj = new TimeLimitedCache();
console.log(obj.set(1, 42, 50));
console.log(obj.set(1, 50, 100));
console.log(obj.get(1));
await new Promise((res) => setTimeout(res, 120));
console.log(obj.get(1));

// Doesn't work for keys being overwritten before expiring
// Timeout remains and clears the new one

const topVotedTimeLimitedCache = function () {
  this.cache = new Map(); // Using Map so we don't need a size variable
};

topVotedTimeLimitedCache.prototype.set = function (key, value, duration) {
  let found = this.cache.has(key);
  if (found) clearTimeout(this.cache.get(key).ref); // Cancel previous timeout
  this.cache.set(key, {
    value, // Equivalent to `value: value`
    ref: setTimeout(() => this.cache.delete(key), duration),
  });
  return found;
};

topVotedTimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

topVotedTimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

// clearTimeout is what I was looking for
// Also ref

class revisedTimeLimitedCache {
  constructor() {
    this.obj = new Map();
  }

  set(key, value, duration) {
    let exists = this.obj.has(key);
    if (exists) clearTimeout(this.obj.get(key).timer);

    this.obj.set(key, {
      value,
      timer: setTimeout(() => this.obj.delete(key), duration),
    });

    return exists;
  }

  get(key) {
    return this.obj.get(key)?.value || -1;
  }

  count() {
    return this.obj.size;
  }
} */

// Memoize					4/23/2023
/* 
// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will returned a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.

// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.

// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

// Example 1:
// 		Input
// 		"sum"
// 		["call","call","getCallCount","call","getCallCount"]
// 		[[2,2],[2,2],[],[1,2],[]]
// 		Output
// 		[4,4,1,3,2]
// 		Explanation
// 		const sum = (a, b) => a + b;
// 		const memoizedSum = memoize(sum);
// 		memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.
// 		memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.
// 		// Total call count: 1
// 		memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.
// 		// Total call count: 2

// Example 2:
// 		Input
// 		"factorial"
// 		["call","call","call","getCallCount","call","getCallCount"]
// 		[[2],[3],[2],[],[3],[]]
// 		Output
// 		[2,6,2,2,6,2]
// 		Explanation
// 		const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// 		const memoFactorial = memoize(factorial);
// 		memoFactorial(2); // Returns 2.
// 		memoFactorial(3); // Returns 6.
// 		memoFactorial(2); // Returns 2. However factorial was not called because 2 was seen before.
// 		// Total call count: 2
// 		memoFactorial(3); // Returns 6. However factorial was not called because 3 was seen before.
// 		// Total call count: 2

// Example 3:
// 		Input
// 		"fib"
// 		["call","getCallCount"]
// 		[[5],[]]
// 		Output
// 		[8,1]
// 		Explanation
// 		fib(5) = 8
// 		// Total call count: 1

// Constraints:
//		0 <= a, b <= 105
//		1 <= n <= 10l
//		at most 105 function calls
//		at most 105 attempts to access callCount
//		input function is sum, fib, or factorial

const loadshMemoize = (fn) => _.memoize(fn);

// doesn't match up with last few test cases

const memoize = (fn) => {
  let cache = new Map();
  return (...args) => {
    let key = args.join();
    if (cache.has(key)) return cache.get(key);
    else cache.set(key, fn(...args));
    return cache.get(key);
  };
};

let callCount = 0;
const memoizedFn = memoize((a, b) => {
  callCount++;
  return a + b;
});
console.log(memoizedFn(2, 2));
console.log(memoizedFn(2, 2));
console.log(callCount);

// Read MDN doc and ended up with this

function topVotedMemoize(fn) {
  var cache = [];

  return function (...args) {
    var key = args.join("-").toString();

    if (cache[`${key}`] != undefined) {
      return cache[`${key}`];
    }

    return (cache[`${key}`] = Number(fn(...args)));
  };
}

// Same logic */

// Snail Traversal					4/24/2023
/* 
// Write code that enhances all arrays such that you can call the snail(rowsCount, colsCount) method that transforms the 1D array into a 2D array organised in the pattern known as snail traversal order. Invalid input values should output an empty array. If rowsCount * colsCount !== nums.length, the input is considered invalid.

// Snail traversal order starts at the top left cell with the first value of the current array. It then moves through the entire first column from top to bottom, followed by moving to the next column on the right and traversing it from bottom to top. This pattern continues, alternating the direction of traversal with each column, until the entire current array is covered. For example, when given the input array [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] with rowsCount = 5 and colsCount = 4, the desired output matrix is shown below. Note that iterating the matrix following the arrows corresponds to the order of numbers in the original array.

// https://assets.leetcode.com/uploads/2023/04/10/screen-shot-2023-04-10-at-100006-pm.png

// Example 1:
// 		Input:
// 		nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// 		rowsCount = 5
// 		colsCount = 4
// 		Output:
// 		[
// 		[19,17,16,15],
// 		[10,1,14,4],
// 		[3,2,12,20],
// 		[7,5,18,11],
// 		[9,8,6,13]
// 		]

// Example 2:
// 		Input:
// 		nums = [1,2,3,4]
// 		rowsCount = 1
// 		colsCount = 4
// 		Output: [[1, 2, 3, 4]]

// Example 3:
// 		Input:
// 		nums = [1,3]
// 		rowsCount = 2
// 		colsCount = 2
// 		Output: []
// Explanation: 2 multiplied by 2 is 4, and the original array [1,3] has a length of 2; therefore, the input is invalid.

// Constraints:
//		0 <= nums.length <= 250
//		1 <= nums[i] <= 1000
//		1 <= rowsCount <= 250
//		1 <= colsCount <= 250

Array.prototype.snail = function (rows, cols) {
  if (rows * cols !== this.length) return [];

  let res = new Array(rows).fill().map(() => []);
  let invert = false;

  for (let i = 0; i < this.length; i++) {
    if (!invert) {
      res[i % rows].push(this[i]);
    } else {
      res[rows - (i % rows) - 1].push(this[i]);
    }

    if (i % rows == rows - 1) {
      invert = !invert;
    }
  }

  return res;
};

// prettier-ignore
console.log([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15].snail(5, 4));
console.log([1, 2, 3, 4].snail(1, 4));
console.log([1, 3].snail(2, 2));

// Great runtime, pretty readable

Array.prototype.topVotedSnail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];

  return this.reduce((res, item, index) => {
    let col = index % rowsCount;
    let row = Math.floor(index / rowsCount);

    if (row % 2 !== 0) {
      col = rowsCount - col - 1;
    }

    res[col] = [...(res[col] || []), item];
    return res;
  }, []);
};

// Clean */

// Flatten Deeply Nested Array					4/25/2023
/* 
// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

// Example 1:
// 		Input
// 		arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// 		n = 0
// 		Output
// 		[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// 		Explanation
// 		Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.

// Example 2:
// 		Input
// 		arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// 		n = 1
// 		Output
// 		[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
// 		Explanation
// 		The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.

// Example 3:
// 		Input
// 		arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// 		n = 2
// 		Output
// 		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// 		Explanation
// 		The maximum depth of any subarray is 1. Thus, all of them are flattened.

// Constraints:
//		0 <= count of numbers in arr <= 105
//		0 <= count of subarrays in arr <= 105
//		maxDepth <= 1000
//		-1000 <= each number <= 1000
//		0 <= n <= 1000

const flat = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr = arr.reduce((a, c) => {
      if (typeof c == "number") a.push(c);
      else a.push(...c);
      return a;
    }, []);
  }
  return arr;
};

// prettier-ignore
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0))
// prettier-ignore
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))
// prettier-ignore
console.log(flat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2))

// Very slow runtime, but works

var topVotedFlat = function (arr, n) {
  if (n == 0) return arr;

  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (n > 0 && Array.isArray(arr[i])) {
      answer.push(...flat(arr[i], n - 1));
    } else {
      answer.push(arr[i]);
    }
  }

  return answer;
};

// Much better */

// Debounce					4/26/2023
/* 
// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also recieve the passed parameters.

// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

// Debounce Schematic

// The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

// Please solve it without using lodash's _.debounce() function.

// Example 1:
// 		Input:
// 		t = 50
// 		calls = [
// 		{"t": 50, inputs: [1]},
// 		{"t": 75, inputs: [2]}
// 		]
// 		Output: [{"t": 125, inputs: [2]}]
// Explanation:
// 		let start = Date.now();
// 		function log(...inputs) {
// 		console.log([Date.now() - start, inputs ])
// 		}
// 		const dlog = debounce(log, 50);
// 		setTimeout(() => dlog(1), 50);
// 		setTimeout(() => dlog(2), 75);
// 		The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
// 		The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).

// Example 2:
// 		Input:
// 		t = 20
// 		calls = [
// 		{"t": 50, inputs: [1]},
// 		{"t": 100, inputs: [2]}
// 		]
// 		Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
// Explanation:
// 		The 1st call is delayed until 70ms. The inputs were (1).
// 		The 2nd call is delayed until 120ms. The inputs were (2).

// Example 3:
// 		Input:
// 		t = 150
// 		calls = [
// 		{"t": 50, inputs: [1, 2]},
// 		{"t": 300, inputs: [3, 4]},
// 		{"t": 300, inputs: [5, 6]}
// 		]
// 		Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]
// Explanation:
// 		The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).
// 		The 2nd call is cancelled by the 3rd call
// 		The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).

// Constraints:
//		0 <= t <= 1000
//		1 <= calls.length <= 10
//		0 <= calls[i].t <= 1000
//		0 <= calls[i].inputs.length <= 10

const debounce = function (fn, t) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(args), t);
  };
};

const fn1 = (a) => console.log(a);
const dlog = debounce(fn1, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);

// Same as top voted
// They wrote a nice description of why debouncing is useful:

// "Why to use Debouncing?
// Have you ever encountered a situation where a function gets called multiple times within a short amount of time, leading to performance issues or unexpected behavior? This is a common problem in JavaScript, especially when working with events like scrolling, resizing, or typing. Fortunately, there's a simple technique called "debouncing" that can help you control the frequency of function calls and avoid these issues."

// "What is Debouncing?
// Debouncing is a method that limits the rate at which a function gets called. It works by delaying the execution of a function until a certain amount of time has passed without any additional function calls. If another function call happens within this time frame, the timer resets and the function execution is delayed again. Debouncing is useful in situations where you want to prevent a function from being called too frequently, such as:
// Handling user input events like keypresses, mouse movements, or button clicks
// Handling expensive computations or network requests that don't need to be performed on every function call" */

// JSON Deep Equal					4/27/2023
/* 
// Given two objects o1 and o2, check if they are deeply equal.

// For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.

// You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.

// Please solve it without using lodash's _.isEqual() function.

// Example 1:
// 		Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
// 		Output: true
// Explanation: The keys and values match exactly.

// Example 2:
// 		Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
// 		Output: true
// Explanation: Although the keys are in a different order, they still match exactly.

// Example 3:
// 		Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
// 		Output: false
// Explanation: The array of numbers is different from the array of strings.

// Example 4:
// 		Input: o1 = true, o2 = false
// 		Output: false
// Explanation: true !== false

// Constraints:
//		1 <= JSON.stringify(o1).length <= 105
//		1 <= JSON.stringify(o2).length <= 105
//		maxNestingDepth <= 1000

const areDeeplyEqual = (o1, o2) => {
  const keys1 = Object.keys(o1).sort((a, b) => a.localeCompare(b));
  const keys2 = Object.keys(o2).sort((a, b) => a.localeCompare(b));

  if (keys1.length !== keys2.length) return false;
  if (typeof o1 == "boolean") return o1 === o2;

  return keys1.every((key) => {
    const [o1Type, o2Type] = [typeof o1[key], typeof o2[key]];
    if (o1Type != o2Type) return false;

    if (o1Type == "array") {
      return o1[key].sort().join() == o2[key].sort().join();
    }
    if (o1Type == "object") {
      if (o1[key] == null && o2[key] == null) return true;
      return areDeeplyEqual(o1[key], o2[key]);
    }
    if (o1[key] !== o2[key]) return false;
    return true;
  });
};

console.log(areDeeplyEqual({ x: 1, y: 2 }, { x: 1, y: 2 })); // true
console.log(areDeeplyEqual({ y: 2, x: 1 }, { x: 1, y: 2 })); // true
// prettier-ignore
console.log(areDeeplyEqual({"x":null,"L":[1,2,3]}, {"x":null,"L":["1","2","3"]})) // false
console.log(areDeeplyEqual(true, false)); // false

// Doesn't pass all test cases

var topVotedAreDeeplyEqual = function (o1, o2) {
  // All equal values and same objects are eliminated
  if (o1 === o2) return true;

  // If any of o1 or o2 is not an object, they are different values
  if (typeof o1 != "object" || typeof o2 != "object") return false;

  // Both of them should be objects or arrays
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;

  // Both should have same keys, in case of indexes this will return indexes
  if (Object.keys(o1).length != Object.keys(o2).length) return false;

  // Check if all values against keys of o1 and o2 are deeply equal.
  // If number of keys are same, then at a different key in objects would mean at least
  // 1 value against the key of o2 will be undefined
  for (const key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }

  // All checks passed
  return true;
};

// I was going in the right direction, although this one works
// I'm learning that in a real world scenario I would use lodash's _.isEqual() function */

// Row With Maximum Ones					4/28/2023
/* 
// Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.

// In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.

// Return an array containing the index of the row, and the number of ones in it.

// Example 1:
// 		Input: mat = [[0,1],[1,0]]
// 		Output: [0,1]
// Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1].

// Example 2:
// 		Input: mat = [[0,0,0],[0,1,1]]
// 		Output: [1,2]
// Explanation: The row indexed 1 has the maximum count of ones (2). So we return its index, 1, and the count. So, the answer is [1,2].

// Example 3:
// 		Input: mat = [[0,0],[1,1],[0,0]]
// 		Output: [1,2]
// Explanation: The row indexed 1 has the maximum count of ones (2). So the answer is [1,2].

// Constraints:
//		m == mat.length
//		n == mat[i].length
//		1 <= m, n <= 100
//		mat[i][j] is either 0 or 1.

const rowAndMaximumOnes = (mat) =>
  mat.reduce(
    (max, row, i) => {
      const count = row.filter((x) => x != 0).length;
      if (count > max[1]) max = [i, count];
      return max;
    },
    [0, 0]
  );

// prettier-ignore
console.log(rowAndMaximumOnes([[0,1],[1,0]])) // [0,1]
// prettier-ignore
console.log(rowAndMaximumOnes([[0,0,0],[0,1,1]])) // [1,2]
// prettier-ignore
console.log(rowAndMaximumOnes([[0,0],[1,1],[0,0]])) // [1,2]

// Similar to top voteds */

// Group By					4/29/2023
/* 
// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.

// Example 1:
// 		Input:
// 		array = [
// 		{"id":"1"},
// 		{"id":"1"},
// 		{"id":"2"}
// 		],
// 		fn = function (item) {
// 		return item.id;
// 		}
// 		Output:
// 		{
// 		"1": [{"id": "1"}, {"id": "1"}],
// 		"2": [{"id": "2"}]
// 		}
// Explanation:
// 		Output is from array.groupBy(fn).
// 		The selector function gets the "id" out of each item in the array.
// 		There are two objects with an "id" of 1. Both of those objects are put in the first array.
// 		There is one object with an "id" of 2. That object is put in the second array.

// Example 2:
// 		Input:
// 		array = [
// 		[1, 2, 3],
// 		[1, 3, 5],
// 		[1, 5, 9]
// 		]
// 		fn = function (list) {
// 		return String(list[0]);
// 		}
// 		Output:
// 		{
// 		"1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// 		}
// Explanation:
// 		The array can be of any type. In this case, the selector function defines the key as being the first element in the array.
// 		All the arrays have 1 as their first element so they are grouped together.
// 		{
// 		"1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// 		}

// Example 3:
// 		Input:
// 		array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 		fn = function (n) {
// 		return String(n > 5);
// 		}
// 		Output:
// 		{
// 		"true": [6, 7, 8, 9, 10],
// 		"false": [1, 2, 3, 4, 5]
// 		}
// Explanation:
// 		The selector function splits the array by whether each number is greater than 5.

// Constraints:
//		0 <= array.length <= 105
//		fn returns a string

Array.prototype.mapGroupBy = function (fn) {
  return this.reduce((map, c) => {
    const id = fn(c);
    map.has(id) ? map.set(id, [...map.get(id), c]) : map.set(id, [c]);
    return map;
  }, new Map());
};

Array.prototype.groupBy = function (fn) {
  return this.reduce((map, c) => {
    const id = fn(c);
    map[id] ? map[id].push(c) : (map[id] = [c]);
    return map;
  }, {});
};

// prettier-ignore
console.log([{ id: "1" }, { id: "1" }, { id: "2" }].groupBy((item) => String(item.id)));
// prettier-ignore
console.log([[1, 2, 3], [1, 3, 5], [1, 5, 9]].groupBy((list) => String(list[0])));

// Did it using Map, but it wanted an object

Array.prototype.topVotedGroupBy = function (fn) {
  const ans = {};
  for (let e of this) {
    const key = fn(e);
    ans[key] ||= [];
    ans[key].push(e);
  }
  return ans;
}; */

// Curry					4/30/2023
/* 
// Given a function fn, return a curried version of that function.

// A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.

// In practical terms, if you called the original function like sum(1,2,3), you would call the curried version like csum(1)(2)(3), csum(1)(2,3), csum(1,2)(3), or csum(1,2,3). All these methods of calling the curried function should return the same value as the original.

// Example 1:
// 		Input:
// 		fn = function sum(a, b, c) { return a + b + c; }
// 		inputs = [[1],[2],[3]]
// 		Output: 6
// Explanation:
// 		The code being executed is:
// 		const curriedSum = curry(fn);
// 		curriedSum(1)(2)(3) === 6;
// 		curriedSum(1)(2)(3) should return the same value as sum(1, 2, 3).

// Example 2:
// 		Input:
// 		fn = function sum(a, b, c) { return a + b + c; }
// 		inputs = [[1,2],[3]]
// 		Output: 6
// Explanation:
// 		curriedSum(1, 2)(3) should return the same value as sum(1, 2, 3).

// Example 3:
// 		Input:
// 		fn = function sum(a, b, c) { return a + b + c; }
// 		inputs = [[],[],[1,2,3]]
// 		Output: 6
// Explanation:
// 		You should be able to pass the parameters in any way, including all at once or none at all.
// 		curriedSum()()(1, 2, 3) should return the same value as sum(1, 2, 3).

// Example 4:
// 		Input:
// 		fn = function life() { return 42; }
// 		inputs = [[]]
// 		Output: 42
// Explanation:
// 		currying a function that accepts zero parameters should effectively do nothing.
// 		curriedLife() === 42

// Constraints:
//		1 <= inputs.length <= 1000
//		0 <= inputs[i][j] <= 105
//		0 <= fn.length <= 1000
//		inputs.flat().length == fn.length
//		function parameters explicitly defined

const lodashCurry = (fn) => _.curry(fn);

const curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};

// Googled this solution
// Same as top voted

var oneLineCurry = (c = (f, ...a) =>
  f.length === 0
    ? f
    : f.length > a.length
    ? (...b) => c(f, ...a, ...b)
    : f(...a)); */

// Convert Object to JSON String					5/1/2023
/* 
// Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().

// Please solve it without using the built-in JSON.stringify method.

// Example 1:
// 		Input: object = {"y":1,"x":2}
// 		Output: {"y":1,"x":2}
// Explanation:
// 		Return the JSON representation.
// 		Note that the order of keys should be the same as the order returned by Object.keys().

// Example 2:
// 		Input: object = {"a":"str","b":-12,"c":true,"d":null}
// 		Output: {"a":"str","b":-12,"c":true,"d":null}
// Explanation:
// 		The primitives of JSON are strings, numbers, booleans, and null.

// Example 3:
// 		Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
// 		Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
// Explanation:
// 		Objects and arrays can include other objects and arrays.

// Example 4:
// 		Input: object = true
// 		Output: true
// Explanation:
// 		Primitive types are valid inputs.

// Constraints:
//		object includes strings, integers, booleans, arrays, objects, and null
//		1 <= JSON.stringify(object).length <= 105
//		maxNestingLevel <= 1000
//		all strings will only contain alphanumeric characters

var topVotedJsonStringify = function (object) {
  if (object === null) {
    return "null";
  }
  if (typeof object === "string") {
    // return the string value surrounded by double quotes.
    return '"' + object + '"';
  }
  if (typeof object === "number" || typeof object === "boolean") {
    // return its string representation.
    return String(object);
  }
  if (Array.isArray(object)) {
    // Recursively convert each item to a JSON string and join them with commas.
    const items = object.map((item) => topVotedJsonStringify(item)).join(",");
    return "[" + items + "]";
  }
  // Recursively convert each value to a JSON string and pair it with the corresponding key.
  if (typeof object === "object") {
    const keys = Object.keys(object);
    const items = keys.map(
      (key) => '"' + key + '":' + topVotedJsonStringify(object[key])
    );
    return "{" + items.join(",") + "}";
  }
};

console.log(topVotedJsonStringify({ y: 1, x: 2 })); // {"y":1,"x":2}
console.log(topVotedJsonStringify({ a: "str", b: -12, c: true, d: null })); // {"a":"str","b":-12,"c":true,"d":null}
console.log(topVotedJsonStringify({ key: { a: 1, b: [{}, null, "Hello"] } })); // {"key":{"a":1,"b":[{},null,"Hello"]}}
console.log(topVotedJsonStringify(true)); // true

// Felt similar to areDeeplyEqual from last week
// Not so much a fan of this one, JSON.stringify would be the way to go! */

// Promise Pool					5/2/2023
/* 
// Given an array of asyncronous functions functions and a pool limit n, return an asyncronous function promisePool. It should return a promise that resolves when all the input functions resolve.

// Pool limit is defined as the maximum number promises that can be pending at once. promisePool should begin execution of as many functions as possible and continue executing new functions when old promises resolve. promisePool should execute functions[i] then functions[i + 1] then functions[i + 2], etc. When the last promise resolves, promisePool should also resolve.

// For example, if n = 1, promisePool will execute one function at a time in series. However, if n = 2, it first executes two functions. When either of the two functions resolve, a 3rd function should be executed (if available), and so on until there are no functions left to execute.

// You can assume all functions never reject. It is acceptable for promisePool to return a promise that resolves any value.

// Example 1:
// 		Input:
// 		functions = [
// 		() => new Promise(res => setTimeout(res, 300)),
// 		() => new Promise(res => setTimeout(res, 400)),
// 		() => new Promise(res => setTimeout(res, 200))
// 		]
// 		n = 2
// 		Output: [[300,400,500],500]
// Explanation:
// 		Three functions are passed in. They sleep for 300ms, 400ms, and 200ms respectively.
// 		At t=0, the first 2 functions are executed. The pool size limit of 2 is reached.
// 		At t=300, the 1st function resolves, and the 3rd function is executed. Pool size is 2.
// 		At t=400, the 2nd function resolves. There is nothing left to execute. Pool size is 1.
// 		At t=500, the 3rd function resolves. Pool size is zero so the returned promise also resolves.

// Example 2:
// 		Input:
// 		functions = [
// 		() => new Promise(res => setTimeout(res, 300)),
// 		() => new Promise(res => setTimeout(res, 400)),
// 		() => new Promise(res => setTimeout(res, 200))
// 		]
// 		n = 5
// 		Output: [[300,400,200],400]
// Explanation:
// 		At t=0, all 3 functions are executed. The pool limit of 5 is never met.
// 		At t=200, the 3rd function resolves. Pool size is 2.
// 		At t=300, the 1st function resolved. Pool size is 1.
// 		At t=400, the 2nd function resolves. Pool size is 0, so the returned promise also resolves.

// Example 3:
// 		Input:
// 		functions = [
// 		() => new Promise(res => setTimeout(res, 300)),
// 		() => new Promise(res => setTimeout(res, 400)),
// 		() => new Promise(res => setTimeout(res, 200))
// 		]
// 		n = 1
// 		Output: [[300,700,900],900]
// Explanation:
// 		At t=0, the 1st function is executed. Pool size is 1.
// 		At t=300, the 1st function resolves and the 2nd function is executed. Pool size is 1.
// 		At t=700, the 2nd function resolves and the 3rd function is executed. Pool size is 1.
// 		At t=900, the 3rd function resolves. Pool size is 0 so the returned promise resolves.

// Constraints:
//		0 <= functions.length <= 10
//		1 <= n <= 10

const promisePool = async (fns, n) => {
  let active = 0;
  return Promise.allSettled(fns).then((res) =>
    res.forEach((res) => {
      // something
    })
  );
};

// Couldn't get it working
// Too new with Promises

var topVotedPromisePool = async function (functions, n) {
  let next = () => functions[n++]?.().then(next);
  return Promise.all(functions.slice(0, n).map((f) => f().then(next)));
};

// prettier-ignore
console.log(topVotedPromisePool([
  () => new Promise((res) => setTimeout(res, 300)),
  () => new Promise((res) => setTimeout(res, 400)),
  () => new Promise((res) => setTimeout(res, 200)),
], 2));
// prettier-ignore
console.log(topVotedPromisePool([
  () => new Promise((res) => setTimeout(res, 300)),
  () => new Promise((res) => setTimeout(res, 400)),
  () => new Promise((res) => setTimeout(res, 200)),
], 5));
// prettier-ignore
console.log(topVotedPromisePool([
  () => new Promise((res) => setTimeout(res, 300)),
  () => new Promise((res) => setTimeout(res, 400)),
  () => new Promise((res) => setTimeout(res, 200)),
], 1));

// Start promises from 0 to n, start the next once one fulfills
// Seems so easy in retrospect

// Didn't know you had to call a Promise like you would a function, using () */

// Alternating Digit Sum					5/3/2023
/* 
// You are given a positive integer n. Each digit of n has a sign according to the following rules:

// The most significant digit is assigned a positive sign.

// Each other digit has an opposite sign to its adjacent digits.

// Return the sum of all digits with their corresponding sign.

// Example 1:
// 		Input: n = 521
// 		Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.

// Example 2:
// 		Input: n = 111
// 		Output: 1
// Explanation: (+1) + (-1) + (+1) = 1.

// Example 3:
// 		Input: n = 886996
// 		Output: 0
// Explanation: (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.

// Constraints:
//		1 <= n <= 109

const alternateDigitSum = (n) =>
  [...String(n)].reduce((a, c, i) => (a += i % 2 ? 0 - +c : +c), 0);

console.log(alternateDigitSum(521)); // 4
console.log(alternateDigitSum(111)); // 1
console.log(alternateDigitSum(886996)); // 0

var topVotedAlternateDigitSum = function (n) {
  const str = n.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) sum += +str[i];
    else sum -= +str[i];
  }
  return sum;
}; */

// Counter II					5/4/2023
/* 
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.

// decrement() reduces the current value by 1 and then returns it.

// reset() sets the current value to init and then returns it.

// Example 1:
// 		Input: init = 5, calls = ["increment","reset","decrement"]
// 		Output: [6,5,4]
// Explanation:
// 		const counter = createCounter(5);
// 		counter.increment(); // 6
// 		counter.reset(); // 5
// 		counter.decrement(); // 4

// Example 2:
// 		Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// 		Output: [1,2,1,0,0]
// Explanation:
// 		const counter = createCounter(0);
// 		counter.increment(); // 1
// 		counter.increment(); // 2
// 		counter.decrement(); // 1
// 		counter.reset(); // 0
// 		counter.reset(); // 0

// Constraints:
//		-1000 <= init <= 1000
//		total calls not to exceed 1000

const createCounter = (init) => {
  let val = init;
  return {
    increment: () => ++val,
    decrement: () => --val,
    reset: () => (val = init),
  };
};

let ex1 = createCounter(5);
console.log(ex1);
console.log(ex1.increment());
console.log(ex1.decrement());
console.log(ex1.reset());
console.log(ex1.increment());

// Same as top voteds */

// Allow One Function Call					5/5/2023
/* 
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.

// Every subsequent time it is called, it should return undefined.

// Example 1:
// 		Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// 		Output: [{"calls":1,"value":6}]
// Explanation:
// 		const onceFn = once(fn);
// 		onceFn(1, 2, 3); // 6
// 		onceFn(2, 3, 6); // undefined, fn was not called

// Example 2:
// 		Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// 		Output: [{"calls":1,"value":140}]
// Explanation:
// 		const onceFn = once(fn);
// 		onceFn(5, 7, 4); // 140
// 		onceFn(2, 3, 6); // undefined, fn was not called
// 		onceFn(4, 6, 8); // undefined, fn was not called

// Constraints:
//		1 <= calls.length <= 10
//		1 <= calls[i].length <= 100
//		2 <= JSON.stringify(calls).length <= 1000

const once = (fn) => {
  let hasRun = false;
  return (...args) => {
    if (!hasRun) {
      hasRun = true;
      return fn(...args);
    }
  };
};

const ex1 = once((a, b, c) => a + b + c);
console.log(ex1(1, 2, 3)); // 6
console.log(ex1(2, 3, 6)); // undefined

// Same as top voteds */

// Create Hello World Function					5/6/2023
/* 
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:
// 		Input: args = []
// 		Output: "Hello World"
// Explanation:
// 		const f = createHelloWorld();
// 		f(); // "Hello World"
// 		The function returned by createHelloWorld should always return "Hello World".

// Example 2:
// 		Input: args = [{},null,42]
// 		Output: "Hello World"
// Explanation:
// 		const f = createHelloWorld();
// 		f({}, null, 42); // "Hello World"
// 		Any arguments could be passed to the function but it should still always return "Hello World".

// Constraints:
//		0 <= args.length <= 10

const createHelloWorld = () => () => "Hello World"; */

// Nested Array Generator					5/7/2023
/* 
// Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.

// A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.

// inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.

// Example 1:
// 		Input: arr = [[[6]],[1,3],[]]
// 		Output: [6,1,3]
// Explanation:
// 		const generator = inorderTraversal(arr);
// 		generator.next().value; // 6
// 		generator.next().value; // 1
// 		generator.next().value; // 3
// 		generator.next().done; // true

// Example 2:
// 		Input: arr = []
// 		Output: []
// Explanation: There are no integers so the generator doesn't yield anything.

// Constraints:
//		0 <= arr.flat().length <= 105
//		0 <= arr.flat()[i] <= 105
//		maxNestingDepth <= 105

// Can you solve this without creating a new flattened version of the array?

const inorderTraversal = function* (arr) {
  let i = 0;
  while (i < arr.length) {
    let cur = arr[i++];
    if (typeof cur == "object") {
      yield inorderTraversal(cur);
    }
    yield cur;
  }
};

const ex1 = inorderTraversal([[[6]], [1, 3], []]);
console.log(ex1.next().value);
console.log(ex1.next().value);
console.log(ex1.next().value);

// inorderTraversal {<suspended>}
// I'm missing something to recursively call generator functions

var topVotedInorderTraversal = function* (arr) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      yield* inorderTraversal(element);
    } else {
      yield element;
    }
  }
};

// yield* is what I was looking for */

// Design an ATM Machine					5/8/2023
/* 
// There is an ATM machine that stores banknotes of 5 denominations: 20, 50, 100, 200, and 500 dollars. Initially the ATM is empty. The user can use the machine to deposit or withdraw any amount of money.

// When withdrawing, the machine prioritizes using banknotes of larger values.

// For example, if you want to withdraw $300 and there are 2 $50 banknotes, 1 $100 banknote, and 1 $200 banknote, then the machine will use the $100 and $200 banknotes.

// However, if you try to withdraw $600 and there are 3 $200 banknotes and 1 $500 banknote, then the withdraw request will be rejected because the machine will first try to use the $500 banknote and then be unable to use banknotes to complete the remaining $100. Note that the machine is not allowed to use the $200 banknotes instead of the $500 banknote.

// Implement the ATM class:

// ATM() Initializes the ATM object.

// void deposit(int[] banknotesCount) Deposits new banknotes in the order $20, $50, $100, $200, and $500.

// int[] withdraw(int amount) Returns an array of length 5 of the number of banknotes that will be handed to the user in the order $20, $50, $100, $200, and $500, and update the number of banknotes in the ATM after withdrawing. Returns [-1] if it is not possible (do not withdraw any banknotes in this case).

// Example 1:
// 		Input
// 		["ATM", "deposit", "withdraw", "deposit", "withdraw", "withdraw"]
// 		[[], [[0,0,1,2,1]], [600], [[0,1,0,1,1]], [600], [550]]

// 		Output
// 		[null, null, [0,0,1,0,1], null, [-1], [0,1,0,0,1]]

// 		Explanation
// 		ATM atm = new ATM();
// 		atm.deposit([0,0,1,2,1]);
//        Deposits 1 $100 banknote, 2 $200 banknotes, and 1 $500 banknote.
// 		atm.withdraw(600);
//        Returns [0,0,1,0,1]. The machine uses 1 $100 banknote and 1 $500 banknote.
//        The banknotes left over in the machine are [0,0,0,2,0].
// 		atm.deposit([0,1,0,1,1]);
//        Deposits 1 $50, $200, and $500 banknote.
//        The banknotes in the machine are now [0,1,0,3,1].
// 		atm.withdraw(600);
//        Returns [-1]. The machine will try to use a $500 banknote and then be unable to complete the remaining $100, so the withdraw request will be rejected. Since the request is rejected, the number of banknotes in the machine is not modified.
// 		atm.withdraw(550);
//        Returns [0,1,0,0,1]. The machine uses 1 $50 banknote and 1 $500 banknote.

// Constraints:
//		banknotesCount.length == 5
//		0 <= banknotesCount[i] <= 109
//		1 <= amount <= 109
//		At most 5000 calls in total will be made to withdraw and deposit.
//		At least one call will be made to each function withdraw and deposit.

class ATM {
  constructor() {
    this.tot = 0;
    this.banknotes = [0, 0, 0, 0, 0];
    this.map = { 0: 20, 1: 50, 2: 100, 3: 200, 4: 500 };
  }

  deposit(deposited) {
    this.tot = 0;
    this.banknotes = this.banknotes.map((c, i) => {
      c += deposited[i];
      this.tot += c * this.map[i];
      return c;
    });
  }

  withdraw(amt) {
    if (this.tot < amt) return [-1];

    let curBanknotes = [...this.banknotes];
    let usedBanknotes = [0, 0, 0, 0, 0];
    let i = 4;
    while (amt > 0) {
      if (curBanknotes[i] > 0 && this.map[i] <= amt) {
        amt -= this.map[i];
        curBanknotes[i]--;
        usedBanknotes[i]++;
      } else i--;
      if (i < 0) break;
    }
    if (amt == 0) {
      this.banknotes = curBanknotes;
      return usedBanknotes;
    } else return [-1];
  }
}

// Works but exceeds runtime limit

var TopVotedATM = function () {
  this.bankNotes = new Array(5).fill(0);
  this.banksNotesValue = [20, 50, 100, 200, 500];
};

TopVotedATM.prototype.deposit = function (banknotesCount) {
  for (let i = 0; i < 5; i++) {
    this.bankNotes[i] += banknotesCount[i];
  }
  return this.bankNotes;
};

TopVotedATM.prototype.withdraw = function (amount) {
  let remain = amount;
  let usedBankNotes = new Array(5).fill(0);
  let temp = [...this.bankNotes];
  for (let i = 4; i >= 0; i--) {
    if (temp[i] > 0 && remain >= this.banksNotesValue[i]) {
      const bankNote = Math.floor(remain / this.banksNotesValue[i]);
      const maxCanUse = Math.min(temp[i], bankNote);
      usedBankNotes[i] = maxCanUse;
      temp[i] -= maxCanUse;

      remain -= maxCanUse * this.banksNotesValue[i];
    }
  }

  if (remain > 0) {
    return [-1];
  } else {
    this.bankNotes = temp;
    return usedBankNotes;
  }
};

// Optimized by implementing maxCanUse
// Iterates once per banknote value instead of several times

class RevisedATM {
  constructor() {
    this.banknotes = [0, 0, 0, 0, 0];
    this.value = { 0: 20, 1: 50, 2: 100, 3: 200, 4: 500 };
  }

  deposit(deposited) {
    this.banknotes = this.banknotes.map((c, i) => (c += deposited[i]));
  }

  withdraw(amt) {
    let curBanknotes = [...this.banknotes];
    let usedBanknotes = [0, 0, 0, 0, 0];

    for (let i = 4; i >= 0; i--) {
      if (curBanknotes[i] > 0 && this.value[i] <= amt) {
        const max = Math.floor(amt / this.value[i]);
        const maxUse = Math.min(curBanknotes[i], max);
        curBanknotes[i] -= maxUse;
        usedBanknotes[i] = maxUse;
        amt -= maxUse * this.value[i];
      }
    }

    if (amt == 0) {
      this.banknotes = curBanknotes;
      return usedBanknotes;
    } else return [-1];
  }
}

const ex1 = new RevisedATM();
console.log(ex1.deposit([0, 0, 1, 2, 1]));
console.log(ex1.withdraw(600));
console.log(ex1.deposit([0, 1, 0, 1, 1]));
console.log(ex1.withdraw(600));
console.log(ex1.withdraw(550));

// Passes all test cases now */

// Number of Ways to Buy Pens and Pencils					5/9/2023
/* 
// You are given an integer total indicating the amount of money you have. You are also given two integers cost1 and cost2 indicating the price of a pen and pencil respectively. You can spend part or all of your money to buy multiple quantities (or none) of each kind of writing utensil.

// Return the number of distinct ways you can buy some number of pens and pencils.

// Example 1:
// 		Input: total = 20, cost1 = 10, cost2 = 5
// 		Output: 9
// Explanation: The price of a pen is 10 and the price of a pencil is 5.
// 		- If you buy 0 pens, you can buy 0, 1, 2, 3, or 4 pencils.
// 		- If you buy 1 pen, you can buy 0, 1, or 2 pencils.
// 		- If you buy 2 pens, you cannot buy any pencils.
// 		The total number of ways to buy pens and pencils is 5 + 3 + 1 = 9.

// Example 2:
// 		Input: total = 5, cost1 = 10, cost2 = 10
// 		Output: 1
// Explanation: The price of both pens and pencils are 10, which cost more than total, so you cannot buy any writing utensils. Therefore, there is only 1 way: buy 0 pens and 0 pencils.

// Constraints:
//		1 <= total, cost1, cost2 <= 106

const backtrackWaysToBuyPensPencils = (tot, c1, c2) => {
  let count = 1;
  if (c1 > tot && c2 > tot) return count;

  const backtrack = (acc, c1, c2) => {
    if (acc >= tot) return ++count;
    backtrack(acc + c1, c1, c2);
    backtrack(acc + c2, c1, c2);
  };
  backtrack(0, c1, c2);

  return count;
};

// Too slow

const waysToBuyPensPencils = (tot, c1, c2) => ~~((tot / c1) * (tot / c2) + 1);

console.log(waysToBuyPensPencils(20, 10, 5)); // 9
console.log(waysToBuyPensPencils(5, 10, 10)); // 1
console.log(waysToBuyPensPencils(100, 1, 1)); // 5151

// Doesn't work
// There must be a better formula

var topVotedWaysToBuyPensPencils = function (total, cost1, cost2) {
  var count = 0;
  for (var i = 0; i <= total / cost1; ++i) {
    count += Math.trunc((total - i * cost1) / cost2 + 1);
  }
  return count;
}; */

// Implement Stack using Queues					5/10/2023
/* 
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.

// int pop() Removes the element on the top of the stack and returns it.

// int top() Returns the element on the top of the stack.

// boolean empty() Returns true if the stack is empty, false otherwise.

// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.

// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

// Example 1:
// 		Input
// 		["MyStack", "push", "push", "top", "pop", "empty"]
// 		[[], [1], [2], [], [], []]
// 		Output
// 		[null, null, null, 2, 2, false]
// 		Explanation
// 		MyStack myStack = new MyStack();
// 		myStack.push(1);
// 		myStack.push(2);
// 		myStack.top(); // return 2
// 		myStack.pop(); // return 2
// 		myStack.empty(); // return False

// Constraints:
//		1 <= x <= 9
//		At most 100 calls will be made to push, pop, top, and empty.
//		All the calls to pop and top are valid.
//		Follow-up: Can you implement the stack using only one queue?

class MyStack {
  constructor() {
    this.stack = [];
  }
  push = (x) => this.stack.unshift(x);
  pop = () => this.stack.shift();
  top = () => this.stack[0];
  empty = () => this.stack.length === 0;
}

// Works

var MyStack = function () {
  this.inQueue = [];
  this.outQueue = [];
};
MyStack.prototype.push = function (x) {
  this.inQueue.push(x);
};
MyStack.prototype.pop = function () {
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }

  const lastItem = this.inQueue.shift();

  [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];

  return lastItem;
};
MyStack.prototype.top = function () {
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }
  const lastItem = this.inQueue[0];

  this.outQueue.push(this.inQueue.shift());
  [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];

  return lastItem;
};
MyStack.prototype.empty = function () {
  return this.inQueue.length === 0;
};

// Not sure if I missed the objective of this problem by doing it my way */

// Partitioning Into Minimum Number Of Deci-Binary Numbers					5/11/2023
/* 
// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

// Example 1:
// 		Input: n = "32"
// 		Output: 3
// Explanation: 10 + 11 + 11 = 32

// Example 2:
// 		Input: n = "82734"
// 		Output: 8

// Example 3:
// 		Input: n = "27346209830709182346"
// 		Output: 9

// Constraints:
//		1 <= n.length <= 105
//		n consists of only digits.
//		n does not contain any leading zeros and represents a positive integer.

const minPartitions = (n) => Math.max(...n);

console.log(minPartitions("32")); // 3
console.log(minPartitions("82734")); // 8
console.log(minPartitions("27346209830709182346")); // 9

// Same as top voted
// Pretty easy for a medium question */

// Execution of All Suffix Instructions Staying in a Grid					5/12/2023
/* 
// There is an n x n grid, with the top-left cell at (0, 0) and the bottom-right cell at (n - 1, n - 1). You are given the integer n and an integer array startPos where startPos = [startrow, startcol] indicates that a robot is initially at cell (startrow, startcol).

// You are also given a 0-indexed string s of length m where s[i] is the ith instruction for the robot: 'L' (move left), 'R' (move right), 'U' (move up), and 'D' (move down).

// The robot can begin executing from any ith instruction in s. It executes the instructions one by one towards the end of s but it stops if either of these conditions is met:

// The next instruction will move the robot off the grid.

// There are no more instructions left to execute.

// Return an array answer of length m where answer[i] is the number of instructions the robot can execute if the robot begins executing from the ith instruction in s.

// Example 1:
// 		Input: n = 3, startPos = [0,1], s = "RRDDLU"
// 		Output: [1,5,4,3,1,0]
// Explanation: Starting from startPos and beginning execution from the ith instruction:
// 		- 0th: "RRDDLU". Only one instruction "R" can be executed before it moves off the grid.
// 		- 1st:  "RDDLU". All five instructions can be executed while it stays in the grid and ends at (1, 1).
// 		- 2nd:   "DDLU". All four instructions can be executed while it stays in the grid and ends at (1, 0).
// 		- 3rd:    "DLU". All three instructions can be executed while it stays in the grid and ends at (0, 0).
// 		- 4th:     "LU". Only one instruction "L" can be executed before it moves off the grid.
// 		- 5th:      "U". If moving up, it would move off the grid.

// Example 2:
// 		Input: n = 2, startPos = [1,1], s = "LURD"
// 		Output: [4,1,0,0]
// Explanation:
// 		- 0th: "LURD".
// 		- 1st:  "URD".
// 		- 2nd:   "RD".
// 		- 3rd:    "D".

// Example 3:
// 		Input: n = 1, startPos = [0,0], s = "LRUD"
// 		Output: [0,0,0,0]
// Explanation: No matter which instruction the robot begins execution from, it would move off the grid.

// Constraints:
//		m == s.length
//		1 <= n, m <= 500
//		startPos.length == 2
//		0 <= startrow, startcol < n
//		s consists of 'L', 'R', 'U', and 'D'.

const executeInstructions = (n, ini, s) =>
  new Array(s.length).fill(0).map((steps, i) => {
    let pos = [...ini];
    for (let j = i; j < s.length; j++) {
      const move = s[j];
      if (move === "U") pos[0]--;
      if (move === "R") pos[1]++;
      if (move === "D") pos[0]++;
      if (move === "L") pos[1]--;
      if (pos[0] > n - 1 || pos[0] < 0 || pos[1] > n - 1 || pos[1] < 0) break;
      steps++;
    }
    return steps;
  });

console.log(executeInstructions(3, [0, 1], "RRDDLU")); // [1,5,4,3,1,0]
console.log(executeInstructions(2, [1, 1], "LURD")); // [4,1,0,0]
console.log(executeInstructions(1, [0, 0], "LRUD")); // [0,0,0,0]

// Same logic as top voted solutions */

// Minimum Rounds to Complete All Tasks					5/13/2023
/* 
// You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.

// Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

// Example 1:
// 		Input: tasks = [2,2,3,3,2,4,4,4,4,4]
// 		Output: 4
// Explanation: To complete all the tasks, a possible plan is:
// 		- In the first round, you complete 3 tasks of difficulty level 2.
// 		- In the second round, you complete 2 tasks of difficulty level 3.
// 		- In the third round, you complete 3 tasks of difficulty level 4.
// 		- In the fourth round, you complete 2 tasks of difficulty level 4.
// 		It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.

// Example 2:
// 		Input: tasks = [2,3,3]
// 		Output: -1
// Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.

// Constraints:
//		1 <= tasks.length <= 105
//		1 <= tasks[i] <= 109

const minimumRounds = (tasks) => {
  const map = tasks.reduce(
    (count, task) => count.set(task, (count.get(task) || 0) + 1),
    new Map()
  );
  let res = 0;
  for (const [task, count] of map) {
    if (count < 2) return -1;
    let curRounds = ~~(count / 3); // 3 task rounds
    if (count - curRounds * 3 > 0) curRounds++; // needs a 2 task round
    res += curRounds;
  }
  return res;
};

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4])); // 4
console.log(minimumRounds([2, 3, 3])); // -1

// Great runtime

const revisedMinimumRounds = (tasks) => {
  const map = tasks.reduce(
    (count, task) => count.set(task, (count.get(task) || 0) + 1),
    new Map()
  );

  let res = 0;
  for (const [task, count] of map) {
    if (count < 2) return -1;
    res += Math.ceil(count / 3);
  }
  return res;
};

// Looking at top voted, realized I could just round up instead of down then adding */

// Find The Original Array of Prefix Xor					5/14/2023
/* 
// You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].

// Note that ^ denotes the bitwise-xor operation.

// It can be proven that the answer is unique.

// Example 1:
// 		Input: pref = [5,2,0,3,1]
// 		Output: [5,7,2,3,2]
// Explanation: From the array [5,7,2,3,2] we have the following:
// 		- pref[0] = 5.
// 		- pref[1] = 5 ^ 7 = 2.
// 		- pref[2] = 5 ^ 7 ^ 2 = 0.
// 		- pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
// 		- pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.

// Example 2:
// 		Input: pref = [13]
// 		Output: [13]
// Explanation: We have pref[0] = arr[0] = 13.

// Constraints:
//		1 <= pref.length <= 105
//		0 <= pref[i] <= 106

const findArray = (pref) => {
  let res = [pref[0]];
  let acc = res[0];
  for (let i = 1; i < pref.length; i++) {
    res[i] = acc ^ pref[i];
    acc ^= res[i];
  }
  return res;
};

console.log(findArray([5, 2, 0, 3, 1])); // [5,7,2,3,2]
console.log(findArray([13])); // [13]

// Same logic as top voted

var topVotedFindArray = function (pref) {
  let xor = pref[0];
  for (let i = 1; i < pref.length; i++) {
    pref[i] ^= xor;
    xor ^= pref[i];
  }
  return pref;
}; */

// Chunk Array					5/15/2023
/* 
// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

// Example 1:
// 		Input: arr = [1,2,3,4,5], size = 1
// 		Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

// Example 2:
// 		Input: arr = [1,9,6,3,2], size = 3
// 		Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

// Example 3:
// 		Input: arr = [8,5,3,2,6], size = 6
// 		Output: [[8,5,3,2,6]]
// Explanation: Size is greater than arr.length thus all elements are in the first subarray.

// Example 4:
// 		Input: arr = [], size = 1
// 		Output: []
// Explanation: There are no elements to be chunked so an empty array is returned.

// Constraints:
//		arr is a valid JSON array
//		2 <= JSON.stringify(arr).length <= 105
//		1 <= size <= arr.length + 1

const chunk = (arr, s) => {
  let res = [];
  for (let i = 0; i < arr.length; i += s) {
    res.push(arr.slice(i, i + s));
  }
  return res;
};

console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1],[2],[3],[4],[5]]
console.log(chunk([1, 9, 6, 3, 2], 3)); // [[1,9,6],[3,2]]
console.log(chunk([8, 5, 3, 2, 6], 6)); // [[8,5,3,2,6]]
console.log(chunk([], 1)); // [] */

// Count Sorted Vowel Strings					5/16/2023
/* 
// Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

// A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

// Example 1:
// 		Input: n = 1
// 		Output: 5
// Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].

// Example 2:
// 		Input: n = 2
// 		Output: 15
// Explanation: The 15 sorted strings that consist of vowels only are
// 		["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
// 		Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.

// Example 3:
// 		Input: n = 33
// 		Output: 66045

// Constraints:
//		1 <= n <= 50

var topVotedCountVowelStrings = function (n) {
  let a = 1,
    e = 1,
    i = 1,
    o = 1,
    u = 1;
  while (n-- > 1) {
    a = a + e + i + o + u;
    e = e + i + o + u;
    i = i + o + u;
    o = o + u;
    u = u;
  }
  return a + e + i + o + u;
};

// Tried a very different approach at first
// This is much easier

const revisedCountVowelStrings = (n) => {
  let c = [1, 1, 1, 1, 1];
  while (n > 1) {
    c[0] = c[0] + c[1] + c[2] + c[3] + c[4];
    c[1] = c[1] + c[2] + c[3] + c[4];
    c[2] = c[2] + c[3] + c[4];
    c[3] = c[3] + c[4];
    c[4] = c[4];
    n--;
  }
  return c.reduce((sum, c) => sum + c);
};

console.log(revisedCountVowelStrings(1)); // 5
console.log(revisedCountVowelStrings(2)); // 15
console.log(revisedCountVowelStrings(33)); // 66045 */

// Array of Objects to Matrix					5/17/2023
/* 
// Write a function that converts an array of objects arr into a matrix m.

// arr is an array of objects or arrays. Each item in the array can be deeply nested with child arrays and child objects. It can also contain numbers, strings, booleans, and null values.

// The first row m should be the column names. If there is no nesting, the column names are the unique keys within the objects. If there is nesting, the column names are the respective paths in the object separated by ".".

// Each of the remaining rows corresponds to an object in arr. Each value in the matrix corresponds to a value in an object. If a given object doesn't contain a value for a given column, the cell should contain an empty string "".

// The colums in the matrix should be in lexographically ascending order.

// Example 1:
// 		Input:
// 		arr = [
// 		{"b": 1, "a": 2},
// 		{"b": 3, "a": 4}
// 		]
// 		Output:
// 		[
// 		["a", "b"],
// 		[2, 1],
// 		[4, 3]
// 		]
// Explanation:
// 		There are two unique column names in the two objects: "a" and "b".
// 		"a" corresponds with [2, 4].
// 		"b" coresponds with [1, 3].

// Example 2:
// 		Input:
// 		arr = [
// 		{"a": 1, "b": 2},
// 		{"c": 3, "d": 4},
// 		{}
// 		]
// 		Output:
// 		[
// 		["a", "b", "c", "d"],
// 		[1, 2, "", ""],
// 		["", "", 3, 4],
// 		["", "", "", ""]
// 		]
// Explanation:
// 		There are 4 unique column names: "a", "b", "c", "d".
// 		The first object has values associated with "a" and "b".
// 		The second object has values associated with "c" and "d".
// 		The third object has no keys, so it is just a row of empty strings.

// Example 3:
// 		Input:
// 		arr = [
// 		{"a": {"b": 1, "c": 2}},
// 		{"a": {"b": 3, "d": 4}}
// 		]
// 		Output:
// 		[
// 		["a.b", "a.c", "a.d"],
// 		[1, 2, ""],
// 		[3, "", 4]
// 		]
// Explanation:
// 		In this example, the objects are nested. The keys represent the full path to each value separated by periods.
// 		There are three paths: "a.b", "a.c", "a.d".

// Example 4:
// 		Input:
// 		arr = [
// 		[{"a": null}],
// 		[{"b": true}],
// 		[{"c": "x"}]
// 		]
// 		Output:
// 		[
// 		["0.a", "0.b", "0.c"],
// 		[null, "", ""],
// 		["", true, ""],
// 		["", "", "x"]
// 		]
// Explanation:
// 		Arrays are also considered objects with their keys being their indices.
// 		Each array has one element so the keys are "0.a", "0.b", and "0.c".

// Example 5:
// 		Input:
// 		arr = [
// 		{},
// 		{},
// 		{},
// 		]
// 		Output:
// 		[
// 		[],
// 		[],
// 		[],
// 		[]
// 		]
// Explanation:
// 		There are no keys so every row is an empty array.

// Constraints:
//		1 <= arr.length <= 1000
//		unique keys <= 1000

const jsonToMatrix = (arr) => {
  const path = (a, cur = []) => {
    let map = {};
    try {
      for (const [key, val] of Object.entries(a)) {
        if (typeof val !== "object") {
          map[[...cur, key].join(".")] = val; // end of path
        } else {
          return path(val, [...cur, key]); // dive deeper
        }
      }
    } catch (e) {
      map[[...cur, Object.keys(a)].join(".")] = null;
    }
    return map;
  };
  let paths = arr.map((c) => path(c));

  const keys = [
    ...new Set(paths.reduce((all, path) => [...all, ...Object.keys(path)], [])),
  ].sort();

  return paths.reduce(
    (a, c) => [...a, keys.map((key) => (key in c ? c[key] : ""))],
    [keys]
  );
};

// prettier-ignore
console.log(jsonToMatrix([{ b: 1, a: 2 },	{ b: 3, a: 4 }]));
console.log(jsonToMatrix([{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }]));
console.log(jsonToMatrix([[{ a: null }], [{ b: true }], [{ c: "x" }]]));

// Not a fan of try{}catch nor how I found my keys

const flatten = (a, prefix = []) =>
  Object.entries(a).reduce(
    (r, [k, v]) =>
      typeof v !== "object" || v === null
        ? { ...r, [[...prefix, k].join(".")]: v }
        : { ...r, ...flatten(v, [...prefix, k]) },
    {}
  );

const topVotedJsonToMatrix = (a) => {
  a = a.map((i) => flatten(i));
  const keys = Object.keys(a.reduce((r, i) => ({ ...r, ...i }), {})).sort();
  return a.reduce(
    (r, i) => [...r, keys.map((key) => (key in i ? i[key] : ""))],
    [keys]
  );
};

// Same idea, much more concise */

// Throttle					5/18/2023
/* 
// Given a function fn and a time in milliseconds t, return a throttled version of that function.

// A throttled function is first called without delay and then, for a time interval of t milliseconds, can't be executed but should store the latest function arguments provided to call fn with them after the end of the delay.

// For instance, t = 50ms, and the function was called at 30ms, 40ms, and 60ms. The first function call would block calling functions for the following t milliseconds. The second function call would save arguments, and the third call arguments should overwrite currently stored arguments from the second call because the second and third calls are called before 80ms. Once the delay has passed, the throttled function should be called with the latest arguments provided during the delay period, and it should also create another delay period of 80ms + t.

// Throttle DiagramThe above diagram shows how throttle will transform events. Each rectangle represents 100ms and the throttle time is 400ms. Each color represents a different set of inputs.

// Example 1:
// 		Input: t = 100, calls = [{"t":20,"inputs":[1]}]
// 		Output: [{"t":20,"inputs":[1]}]
// Explanation: The 1st call is always called without delay

// Example 2:
// 		Input: t = 50, calls = [{"t":50,"inputs":[1]},{"t":75,"inputs":[2]}]
// 		Output: [{"t":50,"inputs":[1]},{"t":100,"inputs":[2]}]
// Explanation:
// 		The 1st is called a function with arguments (1) without delay.
// 		The 2nd is called at 75ms, within the delay period because 50ms + 50ms = 100ms, so the next call can be reached at 100ms. Therefore, we save arguments from the 2nd call to use them at the callback of the 1st call.

// Constraints:
//		0 <= t <= 1000
//		1 <= calls.length <= 10
//		0 <= calls[i].t <= 1000
//		0 <= calls[i].inputs[i], calls[i].inputs.length <= 10

const throttle = (fn, t) => {
  let input;
  let throttleComplete = true;

  const run = () => {
    if (input && throttleComplete) {
      fn(...input);
      input = null;
      throttleComplete = false;

      setTimeout(() => {
        throttleComplete = true;
        run();
      }, t);
    }
  };

  return function (...args) {
    input = args;
    run();
  };
};

const ex1 = throttle(() => console.log("e1"), 100);
console.log(ex1([1]));

const ex2 = throttle(() => console.log("e2"), 50);
console.log(ex2([1]));
await setTimeout(() => console.log("25ms"), 25);
console.log(ex2([2]));

// Wasn't fully working, had to exclude run() from returned function to be able to call it after timeout
// Got that from top voted

// Day 700!
// See day 730 for my 2 year recap :^) */

// Array Wrapper					5/19/2023
/* 
// Create a class ArrayWrapper that accepts an array of integers in it's constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.

// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

// Example 1:
// 		Input: nums = [[1,2],[3,4]], operation = "Add"
// 		Output: 10
// Explanation:
// 		const obj1 = new ArrayWrapper([1,2]);
// 		const obj2 = new ArrayWrapper([3,4]);
// 		obj1 + obj2; // 10

// Example 2:
// 		Input: nums = [[23,98,42,70]], operation = "String"
// 		Output: "[23,98,42,70]"
// Explanation:
// 		const obj = new ArrayWrapper([23,98,42,70]);
// 		String(obj); // "[23,98,42,70]"

// Example 3:
// 		Input: nums = [[],[]], operation = "Add"
// 		Output: 0
// Explanation:
// 		const obj1 = new ArrayWrapper([]);
// 		const obj2 = new ArrayWrapper([]);
// 		obj1 + obj2; // 0

// Constraints:
//		0 <= nums.length <= 1000
//		0 <= nums[i] <= 1000
//		Note: nums is the array passed to the constructor

class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }

  valueOf() {
    return this.arr.reduce((tot, n) => (tot += n), 0);
  }
  toString() {
    return `[${this.arr.join(",")}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"

// New batch of Javascript questions
// Same as top voted */

// Call Function with Custom Context					5/20/2023
/* 
// Enhance all functions to have the callPolyfill method. The method accepts an object obj as it's first parameter and any number of additional arguments. The obj becomes the this context for the function. The additional arguments are passed to the function (that the callPolyfill method belongs on).

// For example if you had the function:

// function tax(price, taxRate) {
// const totalCost = price * (1 + taxRate);
// console.log(`The cost of ${this.item} is ${totalCost}`);
// }

// Calling this function like tax(10, 0.1) will log "The cost of undefined is 11". This is because the this context was not defined.

// However, calling the function like tax.callPolyfill({item: "salad"}, 10, 0.1) will log "The cost of salad is 11". The this context was appropriately set, and the function logged an appropriate output.

// Please solve this without using the built-in Function.call method.

// Example 1:
// 		Input:
// 		fn = function add(b) {
// 		return this.a + b;
// 		}
// 		args = [{"a": 5}, 7]
// 		Output: 12
// Explanation:
// 		fn.callPolyfill({"a": 5}, 7); // 12
// 		callPolyfill sets the "this" context to {"a": 5}. 7 is passed as an argument.

// Example 2:
// 		Input:
// 		fn = function tax(price, taxRate) {
// 		return `The cost of the ${this.item} is ${price * taxRate}`;
// 		}
// 		args = [{"item": "burger"}, 10, 1,1]
// 		Output: "The cost of the burger is 11"
// Explanation: callPolyfill sets the "this" context to {"item": "burger"}. 10 and 1.1 are passed as additional arguments.

// Constraints:
//		typeof args[0] == 'object' and args[0] != null
//		1 <= args.length <= 100
//		2 <= JSON.stringify(args[0]).length <= 105

Function.prototype.callPolyfill = function (ctx, ...args) {
  return this.bind(ctx)(...args);
};

const ex = function () {
  this.count++;
  return this.count;
};
console.log(ex.callPolyfill({ count: 1 })); // 2

// Nice

Function.prototype.callPolyfill = function (context, ...args) {
  const functionId = Symbol();
  context[functionId] = this;
  return context[functionId](...args);
};

// Same, but not using .bind */

// Event Emitter					5/21/2023
/* 
// Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

// Your EventEmitter class should have the following two methods:

// subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.

// An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.

// The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.

// emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

// Example 1:
// 		Input: actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"], values = [[], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 5; }"], ["firstEvent"]]
// 		Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
// Explanation:
// 		const emitter = new EventEmitter();
// 		emitter.emit("firstEvent"); // [], no callback are subscribed yet
// 		emitter.subscribe("firstEvent", function cb1() { return 5; });
// 		emitter.subscribe("firstEvent", function cb2() { return 6; });
// 		emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2

// Constraints:
//		1 <= actions.length <= 10
//		values.length === actions.length
//		All test cases are valid, e.g. you don't need to handle scenarios when unsubscribing from a non-existing subscription.
//		There are only 4 different actions: EventEmitter, emit, subscribe, and unsubscribe.
//		The EventEmitter action doesn't take any arguments.
//		The emit action takes between either 1 or 2 arguments. The first argument is the name of the event we want to emit, and the 2nd argument is passed to the callback functions.
//		The subscribe action takes 2 arguments, where the first one is the event name and the second is the callback function.
//		The unsubscribe action takes one argument, which is the 0-indexed order of the subscription made before.

class MapEventEmitter {
  constructor() {
    this.fns = new Map();
  }

  subscribe(e, cb) {
    this.fns.set(e, this.fns.get(e)?.push(cb) || [cb]);

    return {
      unsubscribe: () => {
        this.fns.delete(e);
      },
    };
  }

  emit(e, args = []) {
    if (!this.fns.has(e)) return [];
    return this.fns.get(e).map((fn) => fn(...args));
  }
}

// Doesn't like Map, encountered bug with this.fns.get(e).map()

class EventEmitter {
  constructor() {
    this.fns = {};
  }

  subscribe(e, cb) {
    this.fns[e] ? this.fns[e].push(cb) : (this.fns[e] = [cb]);

    return {
      unsubscribe: () => {
        this.fns[e].pop();
      },
    };
  }

  emit(e, args = []) {
    return this.fns[e]?.map((fn) => fn(...args)) || [];
  }
}

const emitter = new EventEmitter();
const onClickCallback = () => 99;
const sub = emitter.subscribe("onClick", onClickCallback);
console.log(emitter.emit("onClick")); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit("onClick")); // []

// More readable than top voteds */

// Lexicographically Smallest Palindrome					5/22/2023
/* 
// You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it. In one operation, you can replace a character in s with another lowercase English letter.

// Your task is to make s a palindrome with the minimum number of operations possible. If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.

// A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.

// Return the resulting palindrome string.

// Example 1:
// 		Input: s = "egcfe"
// 		Output: "efcfe"
// Explanation: The minimum number of operations to make "egcfe" a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is "efcfe", by changing 'g'.

// Example 2:
// 		Input: s = "abcd"
// 		Output: "abba"
// Explanation: The minimum number of operations to make "abcd" a palindrome is 2, and the lexicographically smallest palindrome string we can get by modifying two characters is "abba".

// Example 3:
// 		Input: s = "seven"
// 		Output: "neven"
// Explanation: The minimum number of operations to make "seven" a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is "neven".

// Constraints:
//		1 <= s.length <= 1000
//		s consists of only lowercase English letters.

const makeSmallestPalindrome = (s) => {
  let res = "";
  for (let i = 0; i < ~~(s.length / 2); i++) {
    const [l, r] = [s[i], s[s.length - i - 1]];
    res += l <= r ? l : r;
  }
  let m = "";
  if (s.length % 2) m = s[Math.ceil(s.length / 2) - 1];
  return res + m + [...res].reverse().join("");
};

console.log(makeSmallestPalindrome("egcfe")); // "efcfe"
console.log(makeSmallestPalindrome("abcd")); // "abba"
console.log(makeSmallestPalindrome("seven")); // "neven"

// not great readability, but works

const topVotedMakeSmallestPalindrome = function (s) {
  const n = s.length;
  s = s.split("");
  const halfN = Math.trunc(n / 2);
  for (let i = 0; i < halfN; i++) {
    if (s[i] !== s[n - 1 - i]) {
      if (s[i] < s[n - 1 - i]) {
        s[n - 1 - i] = s[i];
      } else {
        s[i] = s[n - 1 - i];
      }
    }
  }
  return s.join("");
}; */

// Find the Prefix Common Array of Two Arrays					5/23/2023
/* 
// You are given two 0-indexed integer permutations A and B of length n.

// A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

// Return the prefix common array of A and B.

// A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

// Example 1:
// 		Input: A = [1,3,2,4], B = [3,1,2,4]
// 		Output: [0,2,3,4]
// Explanation: At i = 0: no number is common, so C[0] = 0.
// 		At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
// 		At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
// 		At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.

// Example 2:
// 		Input: A = [2,3,1], B = [3,1,2]
// 		Output: [0,1,3]
// Explanation: At i = 0: no number is common, so C[0] = 0.
// 		At i = 1: only 3 is common in A and B, so C[1] = 1.
// 		At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.

// Constraints:
//		1 <= A.length == B.length == n <= 50
//		1 <= A[i], B[i] <= n
//		It is guaranteed that A and B are both a permutation of n integers.

const findThePrefixCommonArray = (A, B) => {
  let map = new Map();
  let commons = 0;

  const check = (n) => {
    if (map.has(n)) {
      if (map.get(n) == 1) commons++;
      map.set(n, map.get(n) + 1);
    } else map.set(n, 1);
  };

  return new Array(A.length).fill(0).map((_, i) => {
    check(B[i]);
    check(A[i]);
    return commons;
  });
};

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4])); // [0,2,3,4]
console.log(findThePrefixCommonArray([2, 3, 1], [3, 1, 2])); // [0,1,3] */

// Permutations					5/24/2023
/* 
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:
// 		Input: nums = [1,2,3]
// 		Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// 		Input: nums = [0,1]
// 		Output: [[0,1],[1,0]]

// Example 3:
// 		Input: nums = [1]
// 		Output: [[1]]

// Constraints:
//		1 <= nums.length <= 6
//		-10 <= nums[i] <= 10
//		All the integers of nums are unique.

const permute = (nums) => {
  let res = [];

  const backtrack = (acc, arr) => {
    if (arr.length == 0) {
      res.push(acc);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let cur = [...acc];
        let rem = [...arr];
        cur.push(...rem.splice(i, 1));

        backtrack(cur, rem);
      }
    }
  };
  backtrack([], nums);

  return res;
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]

// Beats 90% of Runtimes

var topVotedPermute = function (nums) {
  const output = [];
  const dfs = (curr, rest) => {
    if (rest.length === 0) {
      output.push(curr);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  };
  dfs([], nums);

  return output;
}; */

// Unique Paths					5/25/2023
/* 
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
// 		Input: m = 3, n = 7
// 		Output: 28

// Example 2:
// 		Input: m = 3, n = 2
// 		Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 		1. Right -> Down -> Down
// 		2. Down -> Down -> Right
// 		3. Down -> Right -> Down

// Constraints:
//		1 <= m, n <= 100

const uniquePaths = (m, n) => {
  let count = 0;

  const backtrack = (x, y) => {
    if (x == m - 1 && y == n - 1) return count++;
    if (x < m) backtrack(x + 1, y);
    if (y < n) backtrack(x, y + 1);
  };
  backtrack(0, 0);

  return count;
};

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3

// Exceeds runtime limit on bigger test cases

var topVotedUniquePaths = function (m, n) {
  let perRow = Array(n).fill(1);
  let pathCount = Array.from(Array(m).fill(perRow));

  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      // path count = number of path reach to one step left + number of path reach to one step up
      pathCount[y][x] = pathCount[y][x - 1] + pathCount[y - 1][x];
    }
  }

  return pathCount[m - 1][n - 1];
};

// Much better
// Also a mathematical solution

var mathUniquePaths = function (m, n) {
  let pathCount =
    factorial(m - 1 + n - 1) / (factorial(m - 1) * factorial(n - 1));

  return pathCount;
};

var factorial = function (k) {
  if (k == 0 || k == 1) {
    return 1;
  } else {
    return k * factorial(k - 1);
  }
}; */

// Differences Between Two Objects					5/26/2023
/* 
// Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object representing their differences.

// The function should compare the properties of the two objects and identify any changes. The returned object should only contains keys where the value is different from obj1 to obj2. For each changed key, the value should be represented as an array [obj1 value, obj2 value]. Keys that exist in one object but not in the other should not be included in the returned object. When comparing two arrays, the indices of the arrays are considered to be their keys. The end result should be a deeply nested object where each leaf value is a difference array.

// You may assume that both objects are the output of JSON.parse.

// Example 1:
// 		Input:
// 		obj1 = {}
// 		obj2 = {
// 		"a": 1,
// 		"b": 2
// 		}
// 		Output: {}
// Explanation: There were no modifications made to obj1. New keys "a" and "b" appear in obj2, but keys that are added or removed should be ignored.

// Example 5:
// 		Input:
// 		obj1 = {
// 		"a": [1, 2, {}],
// 		"b": false
// 		}
// 		obj2 = {
// 		"b": false,
// 		"a": [1, 2, {}]
// 		}
// 		Output:
// 		{}
// Explanation: Apart from a different ordering of keys, the two objects are identical so an empty object is returned.

// Constraints:
//		2 <= JSON.stringify(obj1).length <= 104
//		2 <= JSON.stringify(obj2).length <= 104

const topVotedObjDiff = (sourceObj, targetObj) => {
  // Special case: Objects are the same
  if (sourceObj === targetObj) return {};

  // Special cases: Null values or different types
  if (sourceObj === null || targetObj === null) return [sourceObj, targetObj];
  if (typeof sourceObj !== "object" || typeof targetObj !== "object")
    return [sourceObj, targetObj];
  if (Array.isArray(sourceObj) !== Array.isArray(targetObj))
    return [sourceObj, targetObj];

  const diffObj = {}; // Object to store the differences

  // Iterate over the keys in sourceObj
  Object.keys(sourceObj).forEach((key) => {
    if (key in targetObj) {
      const subDiff = topVotedObjDiff(sourceObj[key], targetObj[key]); // Recursive call for nested objects

      // If there are differences, add them to the diffObj
      if (Object.keys(subDiff).length > 0) {
        diffObj[key] = subDiff;
      }
    }
  });

  return diffObj; // Return the object containing the differences
};

console.log(topVotedObjDiff({}, { a: 1, b: 2 })); // {}
// prettier-ignore
console.log(topVotedObjDiff({a: [1,2,{}], b: false }, {b: false , a: [1,2,{}] })); // {} */

// Combination Sum					5/27/2023
/* 
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:
// 		Input: candidates = [2,3,6,7], target = 7
// 		Output: [[2,2,3],[7]]
// Explanation:
// 		2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 		7 is a candidate, and 7 = 7.
// 		These are the only two combinations.

// Example 2:
// 		Input: candidates = [2,3,5], target = 8
// 		Output: [[2,2,2,2],[2,3,3],[3,5]]

// Example 3:
// 		Input: candidates = [2], target = 1
// 		Output: []

// Constraints:
//		1 <= candidates.length <= 30
//		2 <= candidates[i] <= 40
//		All elements of candidates are distinct.
//		1 <= target <= 40

const combinationSum = (arr, t) => {
  arr.sort((a, b) => a - b);
  let seen = new Set();
  let combos = [];

  const dp = (cur, sum) => {
    if (sum == t) {
      const idx = cur.sort((a, b) => a - b).join("");
      if (seen.has(idx)) return;
      else {
        seen.add(idx);
        combos.push(cur);
        return;
      }
    }

    for (const n of arr) {
      if (sum + n > t) break;
      const i = [...cur, n];
      dp(i, sum + n);
    }
  };
  dp([], 0);

  return combos;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // []

// This works due to this problems constraints
// if candidates.length were to be any larger I would most likely exceed runtime

function topVotedCombinationSum(candidates, target) {
  var buffer = [];
  var result = [];
  search(0, target);
  return result;

  function search(startIdx, target) {
    if (target === 0) return result.push(buffer.slice());
    if (target < 0) return;
    if (startIdx === candidates.length) return;
    buffer.push(candidates[startIdx]);
    search(startIdx, target - candidates[startIdx]);
    buffer.pop();
    search(startIdx + 1, target);
  }
} */

// Return Length of Arguments Passed					5/28/2023
/* 
// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:
// 		Input: argsArr = [5]
// 		Output: 1
// Explanation:
// 		argumentsLength(5); // 1
// 		One value was passed to the function so it should return 1.

// Example 2:
// 		Input: argsArr = [{}, null, "3"]
// 		Output: 3
// Explanation:
// 		argumentsLength({}, null, "3"); // 3
// 		Three values were passed to the function so it should return 3.

// Constraints:
//		argsArr is a valid JSON array
//		0 <= argsArr.length <= 100

const argumentsLength = (...args) => args[0].length;

console.log(argumentsLength([5])); // 1
console.log(argumentsLength([{}, null, "3"])); // 3

// args[0].length here, args.length in leetcode
// Doing another, that was a bit too easy

// To Be Or Not To Be					5/28/2023

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".

// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1:
// 		Input: func = () => expect(5).toBe(5)
// 		Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:
// 		Input: func = () => expect(5).toBe(null)
// 		Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:
// 		Input: func = () => expect(5).notToBe(null)
// 		Output: {"value": true}

// Explanation: 5 !== null so this expression returns true.

const expect = (n) => ({
  toBe: (x) => {
    if (n === x) return true;
    else throw new Error("Not Equal");
  },
  notToBe: (x) => {
    if (n !== x) return true;
    else throw new Error("Equal");
  },
});

// Same as top voted */

// Compact Object					5/29/2023
/* 
// Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// Example 1:
// 		Input: obj = [null, 0, false, 1]
// 		Output: [1]
// Explanation: All falsy values have been removed from the array.

// Example 2:
// 		Input: obj = {"a": null, "b": [false, 1]}
// 		Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

// Example 3:
// 		Input: obj = [null, 0, 5, [0], [false, 16]]
// 		Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

// Constraints:
//		obj is a valid JSON object
//		2 <= JSON.stringify(obj).length <= 106

const compactObject = (obj) => {
  let res;
  if (Array.isArray(obj)) {
    res = [];
    for (const x of obj) {
      if (typeof x == "object" && x) res.push(compactObject(x));
      else if (x) res.push(x);
    }
  } else if (typeof obj == "object") {
    res = {};
    for (const [key, val] of Object.entries(obj)) {
      if (typeof val == "object" && val) res[key] = compactObject(val);
      else if (val) res[key] = val;
    }
  }
  return res;
};

console.log(compactObject([null, 0, false, 1])); // [1]
console.log(compactObject({ a: null, b: [false, 1] })); // {"b": [1]}
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // [5, [], [16]]

// 90% Runtime

var topVotedCompactObject = function (obj) {
  // These three if statements deal with when obj is not an iterable object
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;

  // This for loop deals with when obj is an iterable object
  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]);
    if (Boolean(value)) compacted[key] = value;
  }

  return compacted;
}; */

// Rotate Image					5/30/2023
/* 
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:
// 		Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 		Output: [[7,4,1],[8,5,2],[9,6,3]]

// Example 2:
// 		Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// 		Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Constraints:
//		n == matrix.length == matrix[i].length
//		1 <= n <= 20
//		-1000 <= matrix[i][j] <= 1000

const rotate = (matrix) =>
  matrix.map((_, i, arr) => {
    let res = [];
    for (let row = arr.length - 1; row >= 0; row--) {
      res.push(arr[row][i]);
    }
    return res;
  });

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// not in-place

var topVotedRotate = function (M) {
  let n = M.length,
    depth = ~~(n / 2);
  for (let i = 0; i < depth; i++) {
    let len = n - 2 * i - 1,
      opp = n - 1 - i;
    for (let j = 0; j < len; j++) {
      let temp = M[i][i + j];
      M[i][i + j] = M[opp - j][i];
      M[opp - j][i] = M[opp][opp - j];
      M[opp][opp - j] = M[i + j][opp];
      M[i + j][opp] = temp;
    }
  }
};

// Great image depicting the swaps
// https://imgur.com/LbkYex3 */

// Group Anagrams					5/31/2023
/* 
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// 		Input: strs = ["eat","tea","tan","ate","nat","bat"]
// 		Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// 		Input: strs = [""]
// 		Output: [[""]]

// Example 3:
// 		Input: strs = ["a"]
// 		Output: [["a"]]

// Constraints:
//		1 <= strs.length <= 104
//		0 <= strs[i].length <= 100
//		strs[i] consists of lowercase English letters.

const groupAnagrams = (strs) => [
  ...strs
    .reduce((map, str) => {
      const idx = [...str].sort().join();
      return map.set(idx, map.has(idx) ? [...map.get(idx), str] : [str]);
    }, new Map())
    .values(),
];

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]

// Good runtime
// Done from YOW airport, headed to Dominican Republic :) */

// Separate the Digits in an Array					6/1/2023
/* 
// Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

// To separate the digits of an integer is to get all the digits it has in the same order.

// For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].

// Example 1:
// 		Input: nums = [13,25,83,77]
// 		Output: [1,3,2,5,8,3,7,7]
// Explanation:
// 		- The separation of 13 is [1,3].
// 		- The separation of 25 is [2,5].
// 		- The separation of 83 is [8,3].
// 		- The separation of 77 is [7,7].
// 		answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.

// Example 2:
// 		Input: nums = [7,1,3,9]
// 		Output: [7,1,3,9]
// Explanation: The separation of each integer in nums is itself.
// 		answer = [7,1,3,9].

// Constraints:
//		1 <= nums.length <= 1000
//		1 <= nums[i] <= 105

const separateDigits = (nums) =>
  nums.reduce((res, n) => {
    if (n < 10) res.push(n);
    else for (let x of [...String(n)]) res.push(+x);
    return res;
  }, []);

console.log(separateDigits([13, 25, 83, 77])); // [1,3,2,5,8,3,7,7]
console.log(separateDigits([7, 1, 3, 9])); // [7,1,3,9]

// Pretty OK

const topVotedSeparateDigits = (nums) => Array.from(nums.join(""), Number);

// Nice! */

// Two Sum II - Input Array Is Sorted					6/2/2023
/* 
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:
// 		Input: numbers = [2,7,11,15], target = 9
// 		Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// 		Input: numbers = [2,3,4], target = 6
// 		Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// 		Input: numbers = [-1,0], target = -1
// 		Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Constraints:
//		2 <= numbers.length <= 3 * 104
//		-1000 <= numbers[i] <= 1000
//		numbers is sorted in non-decreasing order.
//		-1000 <= target <= 1000
//		The tests are generated such that there is exactly one solution.

const twoSum = (nums, t) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == t) return [i + 1, j + 1];
      if (nums[i] + nums[j] > t) break;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([2, 3, 4], 6)); // [1,3]
console.log(twoSum([-1, 0], -1)); // [1,2]
console.log(twoSum([0, 0, 3, 4], 0)); // [1,2]

// Exceeds runtime

const topVotedTwoSum = (numbers, target) => {
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (numbers[p1] + numbers[p2] !== target) {
    if (numbers[p1] + numbers[p2] > target) {
      p2--;
    } else {
      p1++;
    }
  }

  return [p1 + 1, p2 + 1];
};

const revisedTwoSum = (nums, t) => {
  let [l, r] = [0, nums.length - 1];
  while (nums[l] + nums[r] !== t) {
    nums[l] + nums[r] > t ? r-- : l++;
  }
  return [l + 1, r + 1];
}; */

// Single Number II					6/3/2023
/* 
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// 		Input: nums = [2,2,3,2]
// 		Output: 3

// Example 2:
// 		Input: nums = [0,1,0,1,0,1,99]
// 		Output: 99

// Constraints:
//		1 <= nums.length <= 3 * 104
//		-231 <= nums[i] <= 231 - 1
//		Each element in nums appears exactly three times except for one element which appears once.

const singleNumber = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};

console.log(singleNumber([2, 2, 3, 2])); // 3
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])); // 99

// Beats 90%, but not linear runtime complexity

var topVotedSingleNumber = function (nums) {
  let ones = 0;
  let twos = 0;

  for (let num of nums) {
    ones = (ones ^ num) & ~twos;
    twos = (twos ^ num) & ~ones;
  }

  return ones;
};

// https://leetcode.com/problems/single-number-ii/solutions/3527570/mastering-bitwise-operations-a-guide-to-boost-your-interview-preparation/ */

// Execute Cancellable Function With Delay					6/4/2023
/* 
// Given a function fn, an array or arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of t, fn should be called with args passed as parameters unless cancelFn was called first. In that case, fn should never be called.

// Example 1:
// 		Input: fn = (x) => x * 5, args = [2], t = 20, cancelTime = 50
// 		Output: [{"time": 20, "returned": 10}]
// Explanation:
// 		const cancel = cancellable(fn, [2], 20); // fn(2) called at t=20ms
// 		setTimeout(cancel, 50);
// 		the cancelTime (50ms) is after the delay time (20ms), so fn(2) should be called at t=20ms. The value returned from fn is 10.

// Example 2:
// 		Input: fn = (x) => x**2, args = [2], t = 100, cancelTime = 50
// 		Output: []
// Explanation: fn(2) was never called because cancelTime (50ms) is before the delay time (100ms).

// Example 3:
// 		Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelTime = 100
// 		Output: [{"time": 30, "returned": 8}]
// Explanation: fn(2, 4) was called at t=30ms because cancelTime > t.

// Constraints:
//		fn is a function
//		args is a valid JSON array
//		1 <= args.length <= 10
//		20 <= t <= 1000
//		10 <= cancelT <= 1000

const cancellable = (fn, args, t) => {
  const timer = setTimeout(() => fn(...args), t);
  return () => clearTimeout(timer);
};

const ex1 = cancellable((x) => x * 5, [2], 20);
const ex2 = cancellable((x) => x ** 2, [2], 100);
const ex3 = cancellable((x1, x2) => x1 * x2, [2, 4], 30); */

// Count and Say					6/5/2023
/* 
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"

// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.

// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// For example, the saying and conversion for digit string "3322251":

// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:
// 		Input: n = 1
// 		Output: "1"
// Explanation: This is the base case.

// Example 2:
// 		Input: n = 4
// 		Output: "1211"
// Explanation:
// 		countAndSay(1) = "1"
// 		countAndSay(2) = say "1" = one 1 = "11"
// 		countAndSay(3) = say "11" = two 1's = "21"
// 		countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

// Constraints:
//		1 <= n <= 30

const countAndSay = (n) => {
  if (n == 1) return "1";
  let prev = countAndSay(n - 1);
  let arr = [];
  let cur = prev[0];
  let count = 1;
  for (let i = 1; i < prev.length; i++) {
    if (cur !== prev[i]) {
      arr.push(cur.repeat(count));
      count = 1;
      cur = prev[i];
    } else count++;
  }
  arr.push(cur.repeat(count));
  return arr.reduce((a, c) => a + c.length + c[0], "");
};

console.log(countAndSay(1)); // "1"
console.log(countAndSay(4)); // "1211"

// Nasty
// Got stuck on Regex for wayyy too long before giving up and opting for a for loop

var topVotedCountAndSay = function (n) {
  var str = "1";
  for (var i = 1; i < n; i++) {
    var strArray = str.split("");
    str = "";
    var count = 1;
    for (var j = 0; j < strArray.length; j++) {
      if (strArray[j] !== strArray[j + 1]) {
        str += count + strArray[j];
        count = 1;
      } else {
        count++;
      }
    }
  }
  return str;
}; */

// Minimum Path Sum					6/6/2023
/* 
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:
// 		Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// 		Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Example 2:
// 		Input: grid = [[1,2,3],[4,5,6]]
// 		Output: 12

// Constraints:
//		m == grid.length
//		n == grid[i].length
//		1 <= m, n <= 200
//		0 <= grid[i][j] <= 200

const minPathSum = (grid) => {
  const [m, n] = [grid.length, grid[0].length];
  let res = Number.MAX_SAFE_INTEGER;

  const backtrack = (x, y, sum) => {
    sum += grid[y][x];

    if (x == n - 1 && y == m - 1) {
      if (sum < res) res = sum;
      return;
    }

    if (x < n - 1) backtrack(x + 1, y, sum);
    if (y < m - 1) backtrack(x, y + 1, sum);
  };
  backtrack(0, 0, 0);

  return res;
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
); // 7
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // 12

// Exceeds runtime, but was good backtracking practice

var topVotedMinPathSum = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  // Calculate the distance travelled within the first column
  // This is because each square depends on the one above
  // And the one to the left. However there is nothing left
  // of the first column so we can calculate it by adding
  // the current square to the square above it
  for (let i = 1; i < n; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  // The same goes for the first row. There is nothing above the
  // first row. So we just calculate the distance by what is to the left
  // of it
  for (let j = 1; j < m; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  // Start one row and one column in because we've precomputed
  // those above
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      // The distance to the grid at i,j is equal to itself plus the minimum
      // of the two grid spaces (one above, one to the left)
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  // Return the distance bottom right corner
  return grid[n - 1][m - 1];
}; */

// Subsets					6/7/2023
/* 
// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// 		Input: nums = [1,2,3]
// 		Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// 		Input: nums = [0]
// 		Output: [[],[0]]

// Constraints:
//		1 <= nums.length <= 10
//		-10 <= nums[i] <= 10
//		All the numbers of nums are unique.

const subsets = (nums) => {
  let res = [];

  const backtrack = (i, cur) => {
    if (i == nums.length) {
      res.push(cur);
      return;
    }
    backtrack(i + 1, [...cur]);
    backtrack(i + 1, [...cur, nums[i]]);
  };
  backtrack(0, []);

  return res;
};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // [[],[0]]

// Nice

function topVotedSubsets(nums) {
  const powerset = [];
  generatePowerset([], 0);

  function generatePowerset(path, index) {
    powerset.push(path);
    for (let i = index; i < nums.length; i++) {
      generatePowerset([...path, nums[i]], i + 1);
    }
  }

  return powerset;
}

// Similar idea */

// Add Two Promises					6/8/2023
/* 
// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// Example 1:
// 		Input:
// 		promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// 		promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// 		Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

// Example 2:
// 		Input:
// 		promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
// 		promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// 		Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

// Constraints:
//		promise1 and promise2 are promises that resolve with a number

const addTwoPromises = async (p1, p2) =>
  Promise.all([p1, p2]).then(([a, b]) => a + b);

console.log(
  await addTwoPromises(
    new Promise((resolve) => setTimeout(() => resolve(2), 20)),
    new Promise((resolve) => setTimeout(() => resolve(5), 60))
  )
);

// All solutions use Promise.all */

// Sort By					6/9/2023
/* 
// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

// Example 1:
// 		Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// 		Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

// Example 2:
// 		Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// 		Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.

// Example 3:
// 		Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// 		Output: [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1.

// Constraints:
//		arr is a valid JSON array
//		fn is a function that returns a number
//		1 <= arr.length <= 5 * 105

const bubbleSortBy = (arr, fn) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (fn(arr[i]) > fn(arr[i + 1])) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
        break;
      }
    }
  }

  return arr;
};

const sortBy = (arr, fn) => arr.sort((a, b) => fn(a) - fn(b));

console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // [1, 2, 3, 4, 5]
console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x)); // [{"x": -1}, {"x": 0}, {"x": 1}]
// prettier-ignore
console.log(sortBy([[3, 4],[5, 2],[10, 1]], (x) => x[1])); // [[10, 1], [5, 2], [3, 4]]

// same as top voted */

// Interval Cancellation					6/10/2023
/* 
// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn. The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called.

// Example 1:
// 		Input: fn = (x) => x * 2, args = [4], t = 20, cancelT = 110
// 		Output:
// 		[
// 		{"time": 0, "returned": 8},
// 		{"time": 20, "returned": 8},
// 		{"time": 40, "returned": 8},
// 		{"time": 60, "returned": 8},
// 		{"time": 80, "returned": 8},
// 		{"time": 100, "returned": 8}
// 		]
// Explanation: Every 20ms, fn(4) is called. Until t=110ms, then it is cancelled.
// 		const cancel = cancellable(x => x * 2, [4], 20);
// 		setTimeout(cancel, 110);
// 		1st fn call is at 0ms. fn(4) returns 8.
// 		2nd fn call is at 20ms. fn(4) returns 8.
// 		3rd fn call is at 40ms. fn(4) returns 8.
// 		4th fn call is at 60ms. fn(4) returns 8.
// 		5th fn call is at 80ms. fn(4) returns 8.
// 		6th fn call is at 100ms. fn(4) returns 8.

// Example 2:
// 		Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 25, cancelT = 140
// 		Output:
// 		[
// 		{"time": 0, "returned": 10},
// 		{"time": 25, "returned": 10},
// 		{"time": 50, "returned": 10},
// 		{"time": 75, "returned": 10},
// 		{"time": 100, "returned": 10},
// 		{"time": 125, "returned": 10}
// 		]
// Explanation: Every 25ms, fn(2, 5) is called. Until t=140ms, then it is cancelled.
// 		1st fn call is at 0ms
// 		2nd fn call is at 25ms
// 		3rd fn call is at 50ms
// 		4th fn call is at 75ms
// 		5th fn call is at 100ms
// 		6th fn call is at 125ms
// 		Cancelled at 140ms

// Example 3:
// 		Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50, cancelT = 180
// 		Output:
// 		[
// 		{"time": 0, "returned": 9},
// 		{"time": 50, "returned": 9},
// 		{"time": 100, "returned": 9},
// 		{"time": 150, "returned": 9}
// 		]
// Explanation: Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled.
// 		1st fn call is at 0ms
// 		2nd fn call is at 50ms
// 		3rd fn call is at 100ms
// 		4th fn call is at 150ms
// 		Cancelled at 180ms

// Constraints:
//		fn is a function
//		args is a valid JSON array
//		1 <= args.length <= 10
//		20 <= t <= 1000
//		10 <= cancelT <= 1000

const cancellable = (fn, args, t) => {
  fn(...args);
  let timer = setInterval(() => fn(...args), t);
  return () => clearInterval(timer);
};

console.log(cancellable((x) => x * 2, [4], 20, 110));
console.log(cancellable((x1, x2) => x1 * x2, [2, 5], 25, 140));
console.log(cancellable((x1, x2, x3) => x1 + x2 + x3, [5, 1, 3], 50, 180));

// Short compared to others

var topVotedCancellable = function (fn, args, t) {
  fn(...args);

  let id = setTimeout(function run() {
    fn(...args);
    id = setTimeout(run, t);
  }, t);

  const cancelFn = () => clearTimeout(id);

  return cancelFn;
};

// Thought about nested timeouts but looked up intervals instead */

// Trapping Rain Water					6/11/2023
/* 
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
//    https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png
// 		Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 		Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// 		Input: height = [4,2,0,3,2,5]
// 		Output: 9

// Constraints:
//		n == height.length
//		1 <= n <= 2 * 10^4
//		0 <= height[i] <= 10^5

const trap = (heights) => {
  // Find peaks
  let peaks = [];
  for (let i = 0; i <= heights.length; i++) {
    if (i === 0 && heights[i] > heights[i + 1]) peaks.push(i);
    if (i === heights.length - 1 && heights[i - 1] < heights[i]) peaks.push(i);
    if (heights[i - 1] <= heights[i] && heights[i] >= heights[i + 1])
      peaks.push(i);
  }

  // Remove smaller peaks boxed between higher peaks
  for (let i = 1; i < peaks.length - 1; i++) {
    if (
      heights[peaks[i - 1]] > heights[peaks[i]] &&
      heights[peaks[i]] < heights[peaks[i + 1]]
    ) {
      peaks.splice(i, 1);
      i--;
    }
  }

  // Count trapped rain
  let rain = 0;
  for (let i = 0; i < peaks.length - 1; i++) {
    let lowestSide = Math.min(heights[peaks[i]], heights[peaks[i + 1]]);

    let trapped = heights
      .slice(peaks[i] + 1, peaks[i + 1])
      .filter((x) => x < lowestSide);

    rain += trapped.reduce((count, h) => count + lowestSide - h, 0);
  }
  return rain;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
console.log(trap([5, 4, 1, 2])); // 1
console.log(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6])); // 23

// Doesn't work for all test cases

function topVotedTrap(heights) {
  if (heights == null || heights.length === 0) return 0;

  let res = 0;
  let l = heights.length;
  let lMax = {};
  let rMax = {};

  lMax[0] = heights[0];
  for (let i = 1; i < l; i++) {
    lMax[i] = Math.max(heights[i], lMax[i - 1]);
  }

  rMax[l - 1] = heights[l - 1];
  for (let i = l - 2; i >= 0; i--) {
    rMax[i] = Math.max(heights[i], rMax[i + 1]);
  }

  for (let i = 0; i < heights.length; i++) {
    res += Math.min(lMax[i], rMax[i]) - heights[i];
  }

  return res;
}

// Much better logic than mine

const revisedTrap = (heights) => {
  let l = { 0: heights[0] };
  for (let i = 1; i < heights.length; i++) {
    l[i] = Math.max(l[i - 1], heights[i]);
  }

  let r = {};
  r[heights.length - 1] = heights[heights.length - 1];
  for (let i = heights.length - 2; i >= 0; i--) {
    r[i] = Math.max(r[i + 1], heights[i]);
  }

  return heights.reduce((water, h, i) => water + Math.min(l[i], r[i]) - h, 0);
}; */

// Execute Asynchronous Functions in Parallel					6/12/2023
/* 
// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise.

// promise resolves:

// When all the promises returned from functions were resolved successfully. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions.

// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.

// Please solve it without using the built-in Promise.all function.

// Example 1:
// 		Input: functions = [
// 		() => new Promise(resolve => setTimeout(() => resolve(5), 200))
// 		]
// 		Output: {"t": 200, "resolved": [5]}
// Explanation:
// 		promiseAll(functions).then(console.log); // [5]
// 		The single function was resolved at 200ms with a value of 5.

// Example 2:
// 		Input: functions = [
// 		() => new Promise(resolve => setTimeout(() => resolve(1), 200)),
// 		() => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// 		]
// 		Output: {"t": 100, "rejected": "Error"}
// Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.

// Example 3:
// 		Input: functions = [
// 		() => new Promise(resolve => setTimeout(() => resolve(4), 50)),
// 		() => new Promise(resolve => setTimeout(() => resolve(10), 150)),
// 		() => new Promise(resolve => setTimeout(() => resolve(16), 100))
// 		]
// 		Output: {"t": 150, "resolved": [4, 10, 16]}
// Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.

// Constraints:
//		functions is an array of functions that returns promises
//		1 <= functions.length <= 10

const promiseAll = async (fns) => {
  return new Promise((res, rej) => {
    let ans = [];
    Promise.allSettled(
      fns.map((fn, i) =>
        fn()
          .then((x) => (ans[i] = x))
          .catch((err) => rej(err))
      )
    ).then(() => res(ans));
  });
};

// let ex2 = promiseAll([
//   () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
//   () => new Promise((_, reject) => setTimeout(() => reject("Error"), 100)),
// ]);
// console.log(await ex2);

// let ex3 = promiseAll([
//   () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
//   () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
//   () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
// ]);
// console.log(await ex3);

// Used Promise.all yesterday by accident when question clearly specified not to
// Redid today */

// Calculator with Method Chaining					6/13/2023
/* 
// Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

// Your Calculator class should have the following methods:

// add - This method adds the given number value to the result and returns the updated Calculator.

// subtract - This method subtracts the given number value from the result and returns the updated Calculator.

// multiply - This method multiplies the result  by the given number value and returns the updated Calculator.

// divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.

// power - This method raises the result to the power of the given number value and returns the updated Calculator.

// getResult - This method returns the result.

// Solutions within 10-5 of the actual result are considered correct.

// Example 1:
// 		Input: actions = ["Calculator", "add", "subtract", "getResult"], values = [10, 5, 7]
// 		Output: 8
// Explanation:
// 		new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8

// Example 2:
// 		Input: actions = ["Calculator", "multiply", "power", "getResult"], values = [2, 5, 2]
// 		Output: 100
// Explanation:
// 		new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100

// Example 3:
// 		Input: actions = ["Calculator", "divide", "getResult"], values = [20, 0]
// 		Output: "Division by zero is not allowed"
// Explanation:
// 		new Calculator(20).divide(0).getResult() // 20 / 0
// 		The error should be thrown because we cannot divide by zero.

// Constraints:
//		2 <= actions.length <= 2 * 104
//		1 <= values.length <= 2 * 104 - 1
//		actions[i] is one of "Calculator", "add", "subtract", "multiply", "divide", "power", and "getResult"
//		Last action is always "getResult"
//		values is a JSON array of numbers

class Calculator {
  constructor(init) {
    this.res = init;
  }
  add(num) {
    this.res += num;
    return this;
  }
  subtract(num) {
    this.res -= num;
    return this;
  }
  multiply(num) {
    this.res *= num;
    return this;
  }
  divide(num) {
    if (num === 0) throw new Error("Division by zero is not allowed");
    this.res /= num;
    return this;
  }
  power(num) {
    this.res = this.res ** num;
    return this;
  }
  getResult() {
    return this.res;
  }
}

console.log(new Calculator(10).add(5).subtract(7).getResult()); // 10 + 5 - 7 = 8
console.log(new Calculator(2).multiply(5).power(2).getResult()); // (2 * 5) ^ 2 = 100
console.log(new Calculator(20).divide(0).getResult()); // 20 / 0

// Similar to top voted */

// Is Object Empty					6/14/2023
/* 
// Given an object or an array, return if it is empty.
//    An empty object contains no key-value pairs.
//    An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:
// 		Input: obj = {"x": 5, "y": 42}
// 		Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.

// Example 2:
// 		Input: obj = {}
// 		Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.

// Example 3:
// 		Input: obj = [null, false, 0]
// 		Output: false
// Explanation: The array has 3 elements so it is not empty.

// Constraints:
//		2 <= JSON.stringify(obj).length <= 105

// Can you solve it in O(1) time?

const isEmpty = (obj) => {
  if (Array.isArray(obj) && obj.length > 0) return false;
  else if (Object.keys(obj).length > 0) return false;
  else return true;
};

console.log(isEmpty({ x: 5, y: 42 })); // false
console.log(isEmpty({})); // true
console.log(isEmpty([null, false, 0])); // false

// Works, not sure if O(1)

var topVotedIsEmpty = function (obj) {
  for (const _ in obj) return false;
  return true;
};

// Nice */

// Join Two Arrays by ID					6/15/2023
/* 
// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.

// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

// Example 1:
// 		Input:
// 		arr1 = [
// 		{"id": 1, "x": 1},
// 		{"id": 2, "x": 9}
// 		],
// 		arr2 = [
// 		{"id": 3, "x": 5}
// 		]
// 		Output:
// 		[
// 		{"id": 1, "x": 1},
// 		{"id": 2, "x": 9},
// 		{"id": 3, "x": 5}
// 		]
// Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

// Example 2:
// 		Input:
// 		arr1 = [
// 		{"id": 1, "x": 2, "y": 3},
// 		{"id": 2, "x": 3, "y": 6}
// 		],
// 		arr2 = [
// 		{"id": 2, "x": 10, "y": 20},
// 		{"id": 3, "x": 0, "y": 0}
// 		]
// 		Output:
// 		[
// 		{"id": 1, "x": 2, "y": 3},
// 		{"id": 2, "x": 10, "y": 20},
// 		{"id": 3, "x": 0, "y": 0}
// 		]
// Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.

// Example 3:
// 		Input:
// 		arr1 = [
// 		{"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// 		]
// 		arr2 = [
// 		{"id": 1, "b": {"c": 84}, "v": [1, 3]}
// 		]
// 		Output: [
// 		{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// 		]
// Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.

// Constraints:
//		arr1 and arr2 are valid JSON arrays
//		Each object in arr1 and arr2 has a unique integer id key
//		2 <= JSON.stringify(arr1).length <= 10^6
//		2 <= JSON.stringify(arr2).length <= 10^6

const join = (arr1, arr2) => {
  let res = arr1.reduce((map, el) => map.set(el.id, { ...el }), new Map());
  arr2.map((el) => {
    if (res.has(el.id)) {
      let prevState = res.get(el.id);
      for (const [key, val] of Object.entries(el)) {
        prevState[key] = val;
      }
      res.set(el.id, prevState);
    } else {
      res.set(el.id, { ...el });
    }
  });
  return Array(...[...res.values()].sort((a, b) => a.id - b.id));
};

console.log(
  join(
    [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ],
    [{ id: 3, x: 5 }]
  )
); // [{"id": 1, "x": 1}, {"id": 2, "x": 9}, {"id": 3, "x": 5}]
console.log(
  join(
    [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ],
    [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]
  )
); // [{"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 10, "y": 20}, {"id": 3, "x": 0, "y": 0}]
console.log(
  join(
    [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
    [{ id: 1, b: { c: 84 }, v: [1, 3] }]
  )
); // [{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}]

// Although objects are correct, array requires sorting
// hence ugliness of last line

var topVotedJoin = function (arr1, arr2) {
  const map = new Map();
  for (const obj of arr1) map.set(obj.id, obj);
  for (const obj of arr2) {
    if (!map.has(obj.id)) map.set(obj.id, obj);
    else {
      const prevObj = map.get(obj.id);
      for (const key of Object.keys(obj)) prevObj[key] = obj[key];
    }
  }
  const res = new Array();
  for (let key of map.keys()) res.push(map.get(key));
  return res.sort((a, b) => a.id - b.id);
};

// Same as top voted, although theirs is much faster */

// Subrectangle Queries					6/16/2023
/* 
// Implement the class SubrectangleQueries which receives a rows x cols rectangle as a matrix of integers in the constructor and supports two methods:

// 1. updateSubrectangle(int row1, int col1, int row2, int col2, int newValue)

// Updates all values with newValue in the subrectangle whose upper left coordinate is (row1,col1) and bottom right coordinate is (row2,col2).

// 2. getValue(int row, int col)

// Returns the current value of the coordinate (row,col) from the rectangle.

// Example 1:
// 		Input
// 		["SubrectangleQueries","getValue","updateSubrectangle","getValue","getValue","updateSubrectangle","getValue","getValue"]
// 		[[[[1,2,1],[4,3,4],[3,2,1],[1,1,1]]],[0,2],[0,0,3,2,5],[0,2],[3,1],[3,0,3,2,10],[3,1],[0,2]]
// 		Output
// 		[null,1,null,5,5,null,10,5]
// 		Explanation
// 		SubrectangleQueries subrectangleQueries = new SubrectangleQueries([[1,2,1],[4,3,4],[3,2,1],[1,1,1]]);
// 		// The initial rectangle (4x3) looks like:
// 		// 1 2 1
// 		// 4 3 4
// 		// 3 2 1
// 		// 1 1 1
// 		subrectangleQueries.getValue(0, 2); // return 1
// 		subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5);
// 		// After this update the rectangle looks like:
// 		// 5 5 5
// 		// 5 5 5
// 		// 5 5 5
// 		// 5 5 5
// 		subrectangleQueries.getValue(0, 2); // return 5
// 		subrectangleQueries.getValue(3, 1); // return 5
// 		subrectangleQueries.updateSubrectangle(3, 0, 3, 2, 10);
// 		// After this update the rectangle looks like:
// 		// 5   5   5
// 		// 5   5   5
// 		// 5   5   5
// 		// 10  10  10
// 		subrectangleQueries.getValue(3, 1); // return 10
// 		subrectangleQueries.getValue(0, 2); // return 5

// Example 2:
// 		Input
// 		["SubrectangleQueries","getValue","updateSubrectangle","getValue","getValue","updateSubrectangle","getValue"]
// 		[[[[1,1,1],[2,2,2],[3,3,3]]],[0,0],[0,0,2,2,100],[0,0],[2,2],[1,1,2,2,20],[2,2]]
// 		Output
// 		[null,1,null,100,100,null,20]
// 		Explanation
// 		SubrectangleQueries subrectangleQueries = new SubrectangleQueries([[1,1,1],[2,2,2],[3,3,3]]);
// 		subrectangleQueries.getValue(0, 0); // return 1
// 		subrectangleQueries.updateSubrectangle(0, 0, 2, 2, 100);
// 		subrectangleQueries.getValue(0, 0); // return 100
// 		subrectangleQueries.getValue(2, 2); // return 100
// 		subrectangleQueries.updateSubrectangle(1, 1, 2, 2, 20);
// 		subrectangleQueries.getValue(2, 2); // return 20

// Constraints:
//		There will be at most 500 operations considering both methods: updateSubrectangle and getValue.
//		1 <= rows, cols <= 100
//		rows == rectangle.length
//		cols == rectangle[i].length
//		0 <= row1 <= row2 < rows
//		0 <= col1 <= col2 < cols
//		1 <= newValue, rectangle[i][j] <= 10^9
//		0 <= row < rows
//		0 <= col < cols

class SubrectangleQueries {
  constructor(init) {
    this.grid = init;
  }
  updateSubrectangle(r1, c1, r2, c2, val) {
    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        this.grid[r][c] = val;
      }
    }
  }
  getValue(r, c) {
    return this.grid[r][c];
  }
}

const ex1 = new SubrectangleQueries([
  [1, 2, 1],
  [4, 3, 4],
  [3, 2, 1],
  [1, 1, 1],
]);
console.log(ex1.getValue(0, 2));
ex1.updateSubrectangle(0, 0, 3, 2, 5);
console.log(ex1.getValue(3, 1));

// Same as top voteds */

// Unique Paths III					6/17/2023
/* 
// You are given an m x n integer array grid where grid[i][j] could be:

// 1 representing the starting square. There is exactly one starting square.
// 2 representing the ending square. There is exactly one ending square.
// 0 representing empty squares we can walk over.
// -1 representing obstacles that we cannot walk over.

// Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

// Example 1:
// 		Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
// 		Output: 2
// Explanation: We have the following two paths:
// 		1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
// 		2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

// Example 2:
// 		Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
// 		Output: 4
// Explanation: We have the following four paths:
// 		1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
// 		2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
// 		3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
// 		4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

// Example 3:
// 		Input: grid = [[0,1],[2,0]]
// 		Output: 0
// Explanation: There is no path that walks over every empty square exactly once.
// 		Note that the starting and ending square can be anywhere in the grid.

// Constraints:
//		m == grid.length
//		n == grid[i].length
//		1 <= m, n <= 20
//		1 <= m * n <= 20
//		-1 <= grid[i][j] <= 2
//		There is exactly one starting cell and one ending cell.

const uniquePathsIII = (grid) => {
  let res = 0;

  let zeros = grid.reduce(
    (acc, row) => acc + row.filter((x) => x === 0).length,
    0
  );

  let startx, starty;
  for (let y = 0; y < grid.length; y++) {
    startx = grid[y].indexOf(1);
    if (startx !== -1) {
      starty = y;
      break;
    }
  }

  const backtrack = (curGrid, x, y, squaresVisited) => {
    if (squaresVisited === zeros) {
      if (curGrid[y + 1] && curGrid[y + 1][x] === 2) res++;
      if (curGrid[y][x + 1] === 2) res++;
      if (curGrid[y - 1] && curGrid[y - 1][x] === 2) res++;
      if (curGrid[y][x - 1] === 2) res++;
      return;
    }

    if (curGrid[y + 1] && curGrid[y + 1][x] === 0) {
      let nextGrid = JSON.parse(JSON.stringify(curGrid));
      nextGrid[y + 1][x] = "X";
      backtrack(nextGrid, x, y + 1, squaresVisited + 1);
    }
    if (curGrid[y][x + 1] === 0) {
      let nextGrid = JSON.parse(JSON.stringify(curGrid));
      nextGrid[y][x + 1] = "X";
      backtrack(nextGrid, x + 1, y, squaresVisited + 1);
    }
    if (curGrid[y - 1] && curGrid[y - 1][x] === 0) {
      let nextGrid = JSON.parse(JSON.stringify(curGrid));
      nextGrid[y - 1][x] = "X";
      backtrack(nextGrid, x, y - 1, squaresVisited + 1);
    }
    if (curGrid[y][x - 1] === 0) {
      let nextGrid = JSON.parse(JSON.stringify(curGrid));
      nextGrid[y][x - 1] = "X";
      backtrack(nextGrid, x - 1, y, squaresVisited + 1);
    }
  };
  backtrack(grid, startx, starty, 0);

  return res;
};

console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ])
); // 2
console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2],
  ])
); // 4
console.log(
  uniquePathsIII([
    [0, 1],
    [2, 0],
  ])
); // 0

// Not bad for a hard question
// Definitely bulky, but gets the job done

var topVotedUniquePathsIII = function (obstacleGrid) {
  let rows = obstacleGrid.length;
  let columns = obstacleGrid[0].length;

  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let nonObstacles = 0;
  let startX, startY;

  for (let g = 0; g < rows; g++) {
    for (let k = 0; k < columns; k++) {
      if (obstacleGrid[g][k] == 1) {
        startX = g;
        startY = k;
      } else if (obstacleGrid[g][k] == 0) {
        nonObstacles++;
      }
    }
  }

  const compute = (x, y, count) => {
    if (x >= rows || y >= columns || x < 0 || y < 0) return 0;
    if (obstacleGrid[x][y] == -1 || obstacleGrid[x][y] == "V") return 0;
    if (obstacleGrid[x][y] == 2 && count == nonObstacles + 1) {
      return 1;
    }
    let res = 0;
    let oldValue = obstacleGrid[x][y];
    obstacleGrid[x][y] = "V";
    for (let [dx, dy] of directions) {
      let curRes = compute(x + dx, y + dy, count + 1);
      res = curRes + res;
    }
    obstacleGrid[x][y] = oldValue;
    return res;
  };
  return compute(startX, startY, 0);
};

// Similar idea, much more compact

// DAY 730 - 2 years of coding challenges!

// This daily habit started off as a little off the cuff thing to practice coding and has since grown into so much more. 2 years ago I was just being introduced to Javascript and struggling on easy questions. Now, I still struggle with LeetCode questions but at least they've gotten harder.

// In two years, with the help of Udemy, I've gained so much knowledge in web-design and can tackle websites I only dreamt of understanding before. It's been truly challenging and interesting to learn the technologies used by industry leaders, such as Javascript, HTML, CSS, NodeJS, React, and, just recently, NextJS. I've done several projects up to date, but I'm sure none will compare to what I will build over these next 2 years.

// Also I graduated my first year of Software Engineering with straight A's, receiving the J. Lorne Gray scholarship and getting onto the Deans' honour list!

// Let's keep it going 💯 */

// Max Increase to Keep City Skyline					6/18/2023
/* 
// There is a city composed of n x n blocks, where each block contains a single building shaped like a vertical square prism. You are given a 0-indexed n x n integer matrix grid where grid[r][c] represents the height of the building located in the block at row r and column c.

// A city's skyline is the outer contour formed by all the building when viewing the side of the city from a distance. The skyline from each cardinal direction north, east, south, and west may be different.

// We are allowed to increase the height of any number of buildings by any amount (the amount can be different per building). The height of a 0-height building can also be increased. However, increasing the height of a building should not affect the city's skyline from any cardinal direction.

// Return the maximum total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction.

// Example 1:
// 		Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
// 		Output: 35
// Explanation: The building heights are shown in the center of the above image.
// 		The skylines when viewed from each cardinal direction are drawn in red.
// 		The grid after increasing the height of buildings without affecting skylines is:
// 		gridNew = [ [8, 4, 8, 7],
// 		[7, 4, 7, 7],
// 		[9, 4, 8, 7],
// 		[3, 3, 3, 3] ]

// Example 2:
// 		Input: grid = [[0,0,0],[0,0,0],[0,0,0]]
// 		Output: 0
// Explanation: Increasing the height of any building will result in the skyline changing.

// Constraints:
//		n == grid.length
//		n == grid[r].length
//		2 <= n <= 50
//		0 <= grid[r][c] <= 100

const maxIncreaseKeepingSkyline = (grid) => {
  let dir = {
    N: new Array(grid[0].length).fill(0),
    E: new Array(grid.length).fill(0),
  };
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      dir.N[col] = Math.max(dir.N[col], grid[row][col]);
    }
    dir.E[row] = Math.max(...grid[row]);
  }

  let res = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      res += Math.min(dir.N[col], dir.E[row]) - grid[row][col];
    }
  }
  return res;
};

console.log(
  maxIncreaseKeepingSkyline([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0],
  ])
); // 35
console.log(
  maxIncreaseKeepingSkyline([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
); // 0
console.log(
  maxIncreaseKeepingSkyline([
    [13, 47, 91, 34, 20, 33, 39, 22, 80, 62],
    [73, 97, 88, 51, 38, 36, 52, 75, 25, 99],
    [95, 43, 32, 26, 82, 74, 60, 69, 59, 55],
    [20, 41, 77, 95, 79, 46, 70, 50, 17, 51],
    [51, 0, 93, 27, 46, 41, 58, 49, 8, 5],
    [92, 58, 38, 56, 73, 93, 34, 47, 23, 62],
    [97, 66, 57, 72, 26, 46, 4, 90, 82, 74],
    [7, 44, 67, 96, 0, 82, 75, 22, 53, 100],
    [95, 48, 46, 68, 41, 53, 69, 42, 13, 87],
    [79, 48, 96, 39, 21, 35, 3, 12, 22, 42],
  ])
); // 3673

// Great runtime

var topVotedMaxIncreaseKeepingSkyline = function (grid) {
  let result = 0,
    n = grid.length;
  let rMax = new Array(grid.length).fill(0);
  let cMax = new Array(grid.length).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rMax[i] = Math.max(rMax[i], grid[i][j]);
      cMax[j] = Math.max(cMax[j], grid[i][j]);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += Math.min(rMax[i], cMax[j]) - grid[i][j];
    }
  }

  return result;
};

// Same idea cleaner code */

// Minimum Operations to Make Array Equal					6/19/2023
/* 
// You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e., 0 <= i < n).

// In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e., perform arr[x] -=1 and arr[y] += 1). The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations.

// Given an integer n, the length of the array, return the minimum number of operations needed to make all the elements of arr equal.

// Example 1:
// 		Input: n = 3
// 		Output: 2
// Explanation: arr = [1, 3, 5]
// 		First operation choose x = 2 and y = 0, this leads arr to be [2, 3, 4]
// 		In the second operation choose x = 2 and y = 0 again, thus arr = [3, 3, 3].

// Example 2:
// 		Input: n = 6
// 		Output: 9

// Constraints:
//		1 <= n <= 104

const minOperations = (n) => (n % 2 ? ~~((n / 2) ** 2 + 1) - 1 : (n / 2) ** 2);

console.log(minOperations(3)); // 2
console.log(minOperations(6)); // 9
console.log(minOperations(31)); // 240

// Found the equation

var topVotedMinOperations = (n) => (n * n) / 4;

// Much cleaner
// My runtime is somehow better? */

// Find the Winner of the Circular Game					6/20/2023
/* 
// There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.

// The rules of the game are as follows:

// Start at the 1st friend.

// Count the next k friends in the clockwise direction including the friend you started at. The counting wraps around the circle and may count some friends more than once.

// The last friend you counted leaves the circle and loses the game.

// If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.

// Else, the last friend in the circle wins the game.

// Given the number of friends, n, and an integer k, return the winner of the game.

// Example 1:
// 		Input: n = 5, k = 2
// 		Output: 3
// Explanation: Here are the steps of the game:
// 		1) Start at friend 1.
// 		2) Count 2 friends clockwise, which are friends 1 and 2.
// 		3) Friend 2 leaves the circle. Next start is friend 3.
// 		4) Count 2 friends clockwise, which are friends 3 and 4.
// 		5) Friend 4 leaves the circle. Next start is friend 5.
// 		6) Count 2 friends clockwise, which are friends 5 and 1.
// 		7) Friend 1 leaves the circle. Next start is friend 3.
// 		8) Count 2 friends clockwise, which are friends 3 and 5.
// 		9) Friend 5 leaves the circle. Only friend 3 is left, so they are the winner.

// Example 2:
// 		Input: n = 6, k = 5
// 		Output: 1
// Explanation: The friends leave in this order: 5, 4, 6, 2, 3. The winner is friend 1.

// Constraints:
//		1 <= k <= n <= 500

// Follow up:
//		Could you solve this problem in linear time with constant space?

const findTheWinner = (n, k) => {
  let players = new Array(n).fill().map((_, i) => i + 1);
  let pos = 0;

  while (players.length > 1) {
    pos += k - 1;
    if (pos >= n) pos %= n;

    players.splice(pos, 1);
    n--;
  }

  return players[0];
};

console.log(findTheWinner(5, 2)); // 3
console.log(findTheWinner(6, 5)); // 1
console.log(findTheWinner(5, 3)); // 4

// Beats 95% Runtimes

const topVotedFindTheWinner = (n, k) => {
  let a = [];
  for (let i = 0; i < n; i++) a.push(i + 1);
  let remove = 0;
  while (a.length > 1) {
    remove = (remove + k - 1) % a.length;
    a.splice(remove, 1);
  }
  return a;
};

// Same idea */

// Maximum Number of Coins You Can Get					6/21/2023
/* 
// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

// In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// Of your choice, Alice will pick the pile with the maximum number of coins.
// You will pick the next pile with the maximum number of coins.
// Your friend Bob will pick the last pile.
// Repeat until there are no more piles of coins.

// Given an array of integers piles where piles[i] is the number of coins in the ith pile.
// Return the maximum number of coins that you can have.

// Example 1:
// 		Input: piles = [2,4,1,2,7,8]
// 		Output: 9
// Explanation: Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with 7 coins and Bob the last one.
// 		Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with 2 coins and Bob the last one.
// 		The maximum number of coins which you can have are: 7 + 2 = 9.
// 		On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you only get 2 + 4 = 6 coins which is not optimal.

// Example 2:
// 		Input: piles = [2,4,5]
// 		Output: 4

// Example 3:
// 		Input: piles = [9,8,7,6,5,1,2,3,4]
// 		Output: 18

// Constraints:
//		3 <= piles.length <= 10^5
//		piles.length % 3 == 0
//		1 <= piles[i] <= 104

const maxCoins = (piles) => {
  piles.sort((a, b) => b - a);

  let count = 0;
  const bobsPiles = piles.length / 3;
  for (let i = 0; i < piles.length - bobsPiles; i++) {
    if (i % 2 === 1) count += piles[i];
  }
  return count;
};

console.log(maxCoins([2, 4, 1, 2, 7, 8])); // 9
console.log(maxCoins([2, 4, 5])); // 4
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])); // 18

var topVotedMaxCoins = function (piles) {
  const start = piles.length / 3;
  piles.sort((a, b) => a - b);
  let res = 0;
  for (let i = start; i < piles.length; i += 2) res += piles[i];
  return res;
};

// of course, i+=2

const revisedMaxCoins = (params) => {
  piles.sort((a, b) => b - a);

  let count = 0;
  const bobs = piles.length / 3;
  for (let i = 1; i < piles.length - bobs; i += 2) {
    count += piles[i];
  }
  return count;
}; */

// Reveal Cards In Increasing Order					6/22/2023

// You are given an integer array deck. There is a deck of cards where every card has a unique integer. The integer on the ith card is deck[i].

// You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck.

// You will do the following steps repeatedly until all cards are revealed:

// Take the top card of the deck, reveal it, and take it out of the deck.

// If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.

// If there are still unrevealed cards, go back to step 1. Otherwise, stop.

// Return an ordering of the deck that would reveal the cards in increasing order.

// Note that the first entry in the answer is considered to be the top of the deck.

// Example 1:
// 		Input: deck = [17,13,11,2,3,5,7]
// 		Output: [2,13,3,11,5,17,7]
// Explanation:
// 		We get the deck in the order [17,13,11,2,3,5,7] (this order does not matter), and reorder it.
// 		After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
// 		We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
// 		We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
// 		We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
// 		We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
// 		We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
// 		We reveal 13, and move 17 to the bottom.  The deck is now [17].
// 		We reveal 17.
// 		Since all the cards revealed are in increasing order, the answer is correct.

// Example 2:
// 		Input: deck = [1,1000]
// 		Output: [1,1000]

// Constraints:
//		1 <= deck.length <= 1000
//		1 <= deck[i] <= 106
//		All the values of deck are unique.

const deckRevealedIncreasing = (deck) => {
  deck.sort((a, b) => a - b);
  const len = deck.length;

  let m;
  if (len % 2) m = deck.splice(~~(len / 2), 1)[0];
  let l = deck.splice(0, len / 2);
  let r = deck;
  if (r.length > 2) r.unshift(r.pop());
  if (len % 2) r.reverse();

  let res = new Array(len);
  for (let i = 0; i < l.length; i++) {
    res[i * 2] = l[i];
    res[i * 2 + 1] = r[i];
  }
  if (m) res[len - 1] = m;

  return res;
};

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])); // [2,13,3,11,5,17,7]
console.log(deckRevealedIncreasing([1, 1000])); // [1,1000]
console.log(deckRevealedIncreasing([1, 2, 3, 4, 5])); // [1,5,2,4,3]
console.log(deckRevealedIncreasing([1, 2, 3, 4])); // [1,3,2,4]

// Stuck in a rabbit hole here
// Definitely not the way

const topVotedDeckRevealedIncreasing = (deck) => {
  deck.sort((a, b) => a - b);
  const ans = [];
  while (deck.length) {
    ans.unshift(deck.pop());
    ans.unshift(ans.pop());
  }
  ans.push(ans.shift());
  return ans;
};

// Very clean
