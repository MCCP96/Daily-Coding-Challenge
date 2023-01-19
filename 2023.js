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
};
