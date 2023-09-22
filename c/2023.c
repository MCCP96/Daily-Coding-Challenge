#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <string.h>

// Hello World					9/16/2023
/*
int main(void)
{
  printf("Hello, world!\n");
} */

// Two Sum					9/16/2023
/*
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

int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{
  for (int i = 0; i < numsSize; i++)
  {
    for (int j = i + 1; j < numsSize; j++)
    {
      if (nums[i] + nums[j] == target)
        return (int[2]){i, j};
    }
  }
}

int main(void)
{
  printf("%d", twoSum((int[4]){2, 7, 11, 15}, 4, 9, (int[2]){0, 1})); // [0,1]
  return EXIT_SUCCESS;
}

// I'm out of my depth in C

int *topVotedTwoSum(int *nums, int numsSize, int target, int *returnSize)
{
  *returnSize = 2;
  int *returnValues = malloc((*returnSize) * sizeof(int));

  for (int i = 0; i < numsSize - 1; i++)
  {
    for (int j = i + 1; j < numsSize; j++)
    {
      if (nums[i] + nums[j] == target)
      {
        returnValues[0] = i;
        returnValues[1] = j;
        break;
      }
    }
  }

  return returnValues;
}

// Started my second year of software engineering this September and we're learning C. Thought I might try out some easy questions and get some practice in.

// Definitely need to study.

// https://www.tutorialspoint.com/c_standard_library/c_function_malloc.htm
// "The C library function void *malloc(size_t size) allocates the requested memory and returns a pointer to it." */

// Palindrome Number					9/17/2023
/*
// Given an integer x, return true if x is a palindrome and false otherwise.

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
//		-231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

bool isPalindrome(int x)
{
  if (x < 0)
  {
    return false;
  }

  char str[(int)((ceil(log10(x)) + 1) * sizeof(char))]; // from stackoverflow
  sprintf(str, "%d", x);

  for (int i = 0, j = strlen(str) - 1; i < strlen(str) / 2; i++, j--)
  {
    if (str[i] != str[j])
    {
      return false;
    }
  }

  return true;
}

// Leetcode gives a runtime error
// Probably string conversion or sprintf

// Memory allocation is something I've really taken for granted in javascript

bool topVotedIsPalindrome(int x)
{
  if (x < 0 || x != 0 && x % 10 == 0)
    return false;

  int check = 0;
  while (x > check)
  {
    check = check * 10 + x % 10;
    x /= 10;
  }

  return (x == check || x == check / 10);
}

int main(void)
{
  topVotedIsPalindrome(121);  // true
  topVotedIsPalindrome(-121); // false
  topVotedIsPalindrome(10);   // false
  return EXIT_SUCCESS;
}

// Better to use the math approach
// While loop cuts it in half and "... || x == check / 10" accounts for odd amount of digits */

// Roman to Integer					9/18/2023
/*
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Example 1:
// 		Input: s = "III"
// 		Output: 3
// Explanation: III = 3.

// Example 2:
// 		Input: s = "LVIII"
// 		Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// 		Input: s = "MCMXCIV"
// 		Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
//		1 <= s.length <= 15
//		s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//		It is guaranteed that s is a valid roman numeral in the range [1, 3999].

int romanToInt(char *s)
{
  int res = 0;

  for (unsigned short i = 0; s[i]; i++)
  {
    switch (s[i])
    {
    case 'I':
      // I can be placed before V (5) and X (10) to make 4 and 9.
      if (s[i + 1] == 'V')
      {
        res += 4;
        i++;
      }
      else if (s[i + 1] == 'X')
      {
        res += 9;
        i++;
      }
      else
        res += 1;
      break;

    case 'V':
      res += 5;
      break;

    case 'X':
      // X can be placed before L (50) and C (100) to make 40 and 90.
      if (s[i + 1] == 'L')
      {
        res += 40;
        i++;
      }
      else if (s[i + 1] == 'C')
      {
        res += 90;
        i++;
      }
      else
        res += 10;
      break;

    case 'L':
      res += 50;
      break;

    case 'C':
      // C can be placed before D (500) and M (1000) to make 400 and 900.
      if (s[i + 1] == 'D')
      {
        res += 400;
        i++;
      }
      else if (s[i + 1] == 'M')
      {
        res += 900;
        i++;
      }
      else
        res += 100;
      break;

    case 'D':
      res += 500;
      break;

    case 'M':
      res += 1000;
      break;

    default:
      break;
    }
  }

  return res;
}

int main(void)
{
  romanToInt("III");     // 3
  romanToInt("LVIII");   // 58
  romanToInt("MCMXCIV"); // 1994
}

// Passes
// Having s[i] as the 2nd parameter of the for loop doesn't feel intuitive but works to find length of array

int topVotedRomanToInt(char *s)
{
  int t['X' + 1] = {
      ['I'] = 1,
      ['V'] = 5,
      ['X'] = 10,
      ['L'] = 50,
      ['C'] = 100,
      ['D'] = 500,
      ['M'] = 1000,
  };

  int res = 0;
  for (int i = 0; s[i]; i++)
  {
    if (t[s[i]] < t[s[i + 1]])
      res -= t[s[i]];
    else
      res += t[s[i]];
  }
  return res;
}

// Much more compact
// First time seeing objects in C */

// Longest Common Prefix					9/19/2023
/*
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

char *longestCommonPrefix(char **strs, int strsSize)
{
  for (int c = 0;; ++c)
  {
    if (strs[0][c] == '\0') // the longest common prefix is the first string
      return strs[0];

    for (int s = 1; s < strsSize; ++s)
    {
      if (strs[s][c] != strs[0][c]) // compare all strings character to the first one
      {
        strs[0][c] = '\0'; // replace the current character with '\0'
        return strs[0];
      }
    }
  }
}

// No time today
// 12 hrs of school!

// "The null character '\0' (also null terminator), abbreviated NUL, is a control character with the value zero. Its the same in C and objective C"

// "The character has much more significance in C and it serves as a reserved character used to signify the end of a string, often called a null-terminated string" */

// Valid Parentheses					9/20/2023
/*
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.

// Open brackets must be closed in the correct order.

// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// 		Input: s = "()"
// 		Output: true

// Example 2:
// 		Input: s = "()[]{}"
// 		Output: true

// Example 3:
// 		Input: s = "(]"
// 		Output: false

// Constraints:
//		1 <= s.length <= 104
//		s consists of parentheses only '()[]{}'.

bool isValid(char *s)
{
  int p1 = 0, p2 = 0, p3 = 0;
  char prevs[strlen(s)];
  int idx = 0;

  for (unsigned short i = 0; i < s[i]; i++)
  {
    switch (s[i])
    {
    case '(':
      prevs[idx] = '(';
      idx++;
      p1++;
      break;
    case '[':
      prevs[idx] = '[';
      idx++;
      p2++;
      break;
    case '{':
      prevs[idx] = '{';
      idx++;
      p3++;
      break;
    case '}':
      idx--;
      if (p3 == 0 || prevs[idx] != '{')
        return false;
      p3--;
      break;
    case ']':
      idx--;
      if (p2 == 0 || prevs[idx] != '[')
        return false;
      p2--;
      break;
    case ')':
      idx--;
      if (p1 == 0 || prevs[idx] != '(')
        return false;
      p1--;
      break;
    }
  }

  return p1 == 0 && p2 == 0 && p3 == 0;
}

// 94/95 test cases pass
// strlen is a good takeaway here

bool topVotedIsValid(char *s)
{
  char *q = s;

  for (char *p = s; *p; p++)
    switch (*p)
    {
    case '(':
      *q++ = ')';
      continue;

    case '{':
      *q++ = '}';
      continue;

    case '[':
      *q++ = ']';
      continue;

    default:
      if (q == s || *p != *--q)
        return false;
    }

  return q == s;
}

int main(void)
{
  bool ex1 = topVotedIsValid("()");     // true
  bool ex2 = topVotedIsValid("()[]{}"); // true
  bool ex3 = topVotedIsValid("(]");     // false
  bool ex4 = topVotedIsValid("]");      // false
}

// memory shenanigans */

// Find the Index of the First Occurrence in a String					9/21/2023
/*
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// 		Input: haystack = "sadbutsad", needle = "sad"
// 		Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// 		The first occurrence is at index 0, so we return 0.

// Example 2:
// 		Input: haystack = "leetcode", needle = "leeto"
// 		Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:
//		1 <= haystack.length, needle.length <= 104
//		haystack and needle consist of only lowercase English characters.

int strStr(char *haystack, char *needle)
{
  for (unsigned int i = 0; i < strlen(haystack); i++)
  {
    if (haystack[i] == needle[0])
    {
      bool valid = true;
      for (unsigned int j = 1; j < strlen(needle); j++)
      {
        if (haystack[i + j] != needle[j])
        {
          valid = false;
          break;
        }
      }
      if (valid)
        return i;
    }
  }
  return -1;
}

int main(void)
{
  strStr("sadbutsad", "sad");  // 0
  strStr("leetcode", "leeto"); // -1
  strStr("a", "a");            // 0
}

// 100% runtime!

int topVotedStrStr(char *haystack, char *needle)
{
  if (strlen(needle) > strlen(haystack))
    return -1;

  for (int i = 0; i < strlen(haystack); i++)
  {
    if (!strncmp(haystack + i, needle, strlen(needle)))
      return i;
  }

  return -1;
}

// strncmp: Compare characters of two strings

// Parameters:
// str1:  C string to be compared.
// str2:  C string to be compared.
// num:   Maximum number of characters to compare. size_t is an unsigned integral type. */

// Search Insert Position					9/22/2023

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// 		Input: nums = [1,3,5,6], target = 5
// 		Output: 2

// Example 2:
// 		Input: nums = [1,3,5,6], target = 2
// 		Output: 1

// Example 3:
// 		Input: nums = [1,3,5,6], target = 7
// 		Output: 4

// Constraints:
//		1 <= nums.length <= 104
//		-104 <= nums[i] <= 104
//		nums contains distinct values sorted in ascending order.
//		-104 <= target <= 104

int searchInsert(int *nums, int numsSize, int target)
{
  for (int i = 0; i < numsSize; i++)
  {
    if (nums[i] == target || nums[i] > target)
      return i;
  }
  return numsSize;
}

int main(void)
{
  int nums[4] = {1, 3, 5, 6};

  int ex1 = searchInsert(nums, 4, 5); // 2
  int ex2 = searchInsert(nums, 4, 2); // 1
  int ex3 = searchInsert(nums, 4, 7); // 4
}

// Not O(log n)

int topVotedSearchInsert(int *nums, int numsSize, int target)
{
  int left = 0, right = numsSize - 1, mid;

  while (left <= right)
  {
    mid = (right + left) / 2;

    if (nums[mid] < target)
      left = mid + 1;

    else if (nums[mid] > target)
      right = mid - 1;

    else
      return mid;
  }
  return left;
}

// Binary search is the way to go