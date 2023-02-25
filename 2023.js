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
// Good runtime
