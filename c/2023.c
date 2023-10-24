#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <stdint.h>
#include <math.h>
#include <string.h>
#include <ctype.h>

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
/*
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

// Binary search is the way to go */

// Length of Last Word					9/23/2023
/*
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal

// substring

// consisting of non-space characters only.

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

int lengthOfLastWord(char *s)
{
  int last = 0;
  int cur = 0;

  for (int i = 0; i < strlen(s); i++)
  {
    if (s[i] == ' ')
      cur = 0;
    else
    {
      cur++;
      last = cur;
    }
  }

  return last;
}

int main(void)
{
  int ex1 = lengthOfLastWord("Hello World");                                      // 5
  int ex2 = lengthOfLastWord("   fly me   to   the moon  ");                      // 4
  int ex3 = lengthOfLastWord("luffy is still joyboy");                            // 6
  int ex4 = lengthOfLastWord("qWnqNICa   ADGZNrBw  DdxMEuhNuvTJaETF   KhKKfVFX"); // 8
}

int topVotedLengthOfLastWord(char *s)
{
  int len = 0;
  int i = strlen(s) - 1;

  while (s[i] == ' ' && i >= 0)
    i--;
  while (i >= 0 && s[i--] != ' ')
    len++;

  return len;
}

// Big day of climbing in Calabogie! */

// Add Binary					9/24/2023
/*
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// 		Input: a = "11", b = "1"
// 		Output: "100"

// Example 2:
// 		Input: a = "1010", b = "1011"
// 		Output: "10101"

// Constraints:
//		1 <= a.length, b.length <= 104
//		a and b consist only of '0' or '1' characters.
//		Each string does not contain leading zeros except for the zero itself.

char *addBinary(char *a, char *b)
{
  int alen = strlen(a);
  int blen = strlen(b);
  int maxlen = fmax(alen, blen) + 1;

  char res[maxlen];
  int carry = 0;

  while (alen > 0 || blen > 0)
  {
    int cura = a[--alen] == '1' ? 1 : 0;
    int curb = b[--blen] == '1' ? 1 : 0;

    int op = cura + curb + carry;
    switch (op)
    {
    case 3:
      res[--maxlen] = '1';
      break;
    case 2:
      carry = 1;
      res[--maxlen] = '0';
      break;
    case 1:
      carry = 0;
      res[--maxlen] = '1';
      break;
    case 0:
      res[--maxlen] = '0';
      break;
    }
  }

  return res;
}

int main(void)
{
  char *ex1 = addBinary("11", "1");      // "100"
  char *ex2 = addBinary("1010", "1011"); // "10101"
}

// res is returning 0x0
// My logic works (I think) but I'm not assigning correctly to res

char *topVotedAddBinary(char *a, char *b)
{
  int sizeA = strlen(a);
  int sizeB = strlen(b);
  int sizeOutput = (sizeA > sizeB ? sizeA : sizeB) + 1;
  char *output = (char *)malloc(sizeOutput + 1);
  int sum = 0;

  output[sizeOutput] = '\0';

  while (sizeA > 0 || sizeB > 0 || sum > 0)
  {

    if (sizeA > 0)
    {
      sum += a[--sizeA] - '0';
    }
    if (sizeB > 0)
    {
      sum += b[--sizeB] - '0';
    }
    output[--sizeOutput] = sum % 2 + '0';
    sum /= 2;
  }
  return output + sizeOutput;
}

// char *output = (char *)malloc(sizeOutput + 1);
// I've got to work on memory allocation and dynamically filling arrays */

// Merge Sorted Array					9/25/2023
/*
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
// 		Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 		Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// 		The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// 		Input: nums1 = [1], m = 1, nums2 = [], n = 0
// 		Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// 		The result of the merge is [1].

// Example 3:
// 		Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// 		Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// 		The result of the merge is [1].
// 		Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Constraints:
//		nums1.length == m + n
//		nums2.length == n
//		0 <= m, n <= 200
//		1 <= m + n <= 200
//		-109 <= nums1[i], nums2[j] <= 109
//		Follow up: Can you come up with an algorithm that runs in O(m + n) time?

void merge(int *nums1, int nums1Size, int m, int *nums2, int nums2Size, int n)
{
  for (int i = 0; i < n; i++)
  {
    nums1[m + i] = nums2[i];
  }

  bool sorted = false;
  while (!sorted)
  {
    sorted = true;

    for (int i = 0; i < m + n - 1; i++)
    {
      if (nums1[i] > nums1[i + 1])
      {
        sorted = false;
        int temp = nums1[i + 1];
        nums1[i + 1] = nums1[i];
        nums1[i] = temp;
        break;
      }
    }
  }
}

int main(void)
{
  int ex1nums1[6] = {1, 2, 3, 0, 0, 0};
  int ex1nums2[3] = {2, 5, 6};
  merge(ex1nums1, 6, 3, ex1nums2, 3, 3); // [1,2,2,3,5,6]

  int ex2nums1[1] = {1};
  int ex2nums2[0] = {};
  merge(ex2nums1, 1, 1, ex2nums2, 0, 0); // [1]

  int ex3nums1[1] = {0};
  int ex3nums2[1] = {1};
  merge(ex3nums1, 0, 0, ex3nums2, 1, 1); // [1]
}

// Ça marche

void topVotedMerge(int *nums1, int nums1Size, int m, int *nums2, int nums2Size, int n)
{
  int i, i1, i2;

  i1 = m - 1;
  i2 = n - 1;
  i = nums1Size - 1;

  while (i1 >= 0 && i2 >= 0)
  {
    if (nums1[i1] > nums2[i2])
    {
      nums1[i--] = nums1[i1--];
    }
    else
    {
      nums1[i--] = nums2[i2--];
    }
  }

  while (i2 >= 0)
  {
    nums1[i--] = nums2[i2--];
  }
} */

// Best Time to Buy and Sell Stock					9/26/2023
/*
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// 		Input: prices = [7,1,5,3,6,4]
// 		Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// 		Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// 		Input: prices = [7,6,4,3,1]
// 		Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
//		1 <= prices.length <= 105
//		0 <= prices[i] <= 104

int maxProfit(int *prices, int pricesSize)
{
  int max = 0;
  for (int i = 0; i < pricesSize - 1; i++)
  {
    for (int j = i + 1; j < pricesSize; j++)
    {
      int dif = prices[j] - prices[i];
      if (dif > max)
        max = dif;
    }
  }
  return max;
}

int main(void)
{
  int prices1[] = {7, 1, 5, 3, 6, 4};
  int ex1 = maxProfit(prices1, 6); // 5
  int prices2[] = {7, 6, 4, 3, 1};
  int ex2 = maxProfit(prices2, 5); // 0
}

// Too slow

int topVotedMaxProfit(int *prices, int pricesSize)
{
  int min = prices[0], profit = 0;

  for (int i = 0; i < pricesSize; i++)
  {
    if (prices[i] > min)
      (profit = profit > prices[i] - min ? profit : prices[i] - min);
    else
      min = prices[i];
  }
  return profit;
}

int RevisedMaxProfit(int *prices, int pricesSize)
{
  int min = prices[0];
  int max = 0;

  for (int i = 1; i < pricesSize; i++)
  {
    if (prices[i] > min)
    {
      int dif = prices[i] - min;
      if (dif > max)
        max = dif;
    }
    else
      min = prices[i];
  }

  return max;
} */

// Valid Palindrome					9/27/2023
/*
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// 		Input: s = "A man, a plan, a canal: Panama"
// 		Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// 		Input: s = "race a car"
// 		Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// 		Input: s = " "
// 		Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// 		Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
//		1 <= s.length <= 2 * 105
//		s consists only of printable ASCII characters.

char toLower(char c)
{
  return c + 32;
}

bool isPalindrome(char *s)
{
  int len = strlen(s);
  for (int i = 0, j = len - 1; i < j; i++, j--)
  {
    char l = s[i];
    while (!(l >= 65 && l <= 90) && !(l >= 97 && l <= 122))
    {
      l = s[++i];
      if (i >= j)
        return true;
    }
    if (l >= 65 && l <= 90)
      l = toLower(l);

    char r = s[j];
    while (!(r >= 65 && r <= 90) && !(r >= 97 && r <= 122))
    {
      r = s[--j];
      if (j <= i)
        return true;
    }
    if (r >= 65 && r <= 90)
      r = toLower(r);

    if (l != r)
      return false;
  }
  return true;
}

int main(void)
{
  bool ex1 = isPalindrome("A man, a plan, a canal: Panama"); // true
  bool ex2 = isPalindrome("race a car");                     // false
  bool ex3 = isPalindrome(" ");                              // true
  bool ex4 = isPalindrome(".,");                             // true
}

// There's definitely a better way of doing this

bool topVotedIsPalindrome(char *s)
{
  char *first = s;
  char *last = s + strlen(s) - 1;

  while (first <= last)
  {
    if (isalnum(*first) && isalnum(*last))
    {
      if (tolower(*first++) != tolower(*last--))
        return false;
    }
    else
    {
      if (!isalnum(*first))
        ++first;
      if (!isalnum(*last))
        --last;
    }
  }

  return true;
}

// <ctype.h> provides tolower and isalnum, two very useful methods in this case.

// 'The isalnum() method returns True if all characters in the string are alphanumeric (either alphabets or numbers). If not, it returns False.'

// I also enjoy incrementing/decrementing the pointers instead of i/j to navigate the string.

int navigateString(void)
{
  char *s = "abcdefghijklmnopqrstuvwxyz";

  char *c = s;
  while (c < s + strlen(s))
  {
    printf("%c", *c);
    c++;
  }

  return EXIT_SUCCESS;
} */

// Single Number					9/28/2023
/*
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// 		Input: nums = [2,2,1]
// 		Output: 1

// Example 2:
// 		Input: nums = [4,1,2,1,2]
// 		Output: 4

// Example 3:
// 		Input: nums = [1]
// 		Output: 1

// Constraints:
//		1 <= nums.length <= 3 * 104
//		-3 * 104 <= nums[i] <= 3 * 104
//		Each element in the array appears twice except for one element which appears only once.

int singleNumber(int *nums, int numsSize)
{
  for (int i = 0; i < numsSize - 1; i++)
  {
    if (nums[i] == '_')
      continue;

    bool found = true;
    for (int j = i + 1; j < numsSize; j++)
    {
      if (nums[i] == nums[j])
      {
        found = false;
        nums[j] = '_';
        break;
      }
    }

    if (found)
      return nums[i];
  }

  return nums[numsSize - 1];
}

int main(void)
{
  int nums1[] = {2, 2, 1};
  int ex1 = singleNumber(nums1, 3); // 1

  int nums2[] = {4, 1, 2, 1, 2};
  int ex2 = singleNumber(nums2, 5); // 4

  int nums3[] = {1};
  int ex3 = singleNumber(nums3, 1); // 1
}

int topVotedSingleNumber(int *nums, int numsSize)
{
  int val = 0;
  while (numsSize--)
    val ^= nums[numsSize];
  return val;
}

// Glad to see bitwise XOR alive and well in C
// XORing a number by itself returns 0, and since they all occur exactly twice, this works */

// Majority Element					9/29/2023
/*
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// 		Input: nums = [3,2,3]
// 		Output: 3

// Example 2:
// 		Input: nums = [2,2,1,1,1,2,2]
// 		Output: 2

// Constraints:
//		n == nums.length
//		1 <= n <= 5 * 104
//		-109 <= nums[i] <= 109

int majorityElement(int *nums, int numsSize)
{
  for (int i = 0; i < numsSize; i++)
  {
    if (nums[i] == '_')
      continue;

    int cur = nums[i];
    int count = 0;
    for (int j = i; j < numsSize; j++)
    {
      if (nums[j] == cur)
      {
        count++;
        nums[j] = '_';
      }
    }

    if (count > numsSize / 2)
      return cur;
  }

  return -1;
}

int main(void)
{
  int nums1[] = {3, 2, 3};
  int ex1 = majorityElement(nums1, 3); // 3
  int nums2[] = {2, 2, 1, 1, 1, 2, 2};
  int ex2 = majorityElement(nums2, 7); // 2
}

// Same solution as yesterday
// I've got to learn how to make objects to count without nested for loops

int topVotedMajorityElement(int *nums, int numsSize)
{
  int candidate = nums[0];
  int count = 1;
  for (int i = 1; i < numsSize; i++)
  {
    if (nums[i] == candidate)
    {
      count++;
    }
    else
    {
      count--;
      if (count == 0)
      {
        candidate = nums[i];
        count = 1;
      }
    }
  }
  return candidate;
}

// "Boyer-Moore: The Efficient Majority Element Finder"
// cool */

// Excel Sheet Column Number					9/30/2023
/*
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:
// 		Input: columnTitle = "A"
// 		Output: 1

// Example 2:
// 		Input: columnTitle = "AB"
// 		Output: 28

// Example 3:
// 		Input: columnTitle = "ZY"
// 		Output: 701

// Constraints:
//		1 <= columnTitle.length <= 7
//		columnTitle consists only of uppercase English letters.
//		columnTitle is in the range ["A", "FXSHRXW"].

int titleToNumber(char *columnTitle)
{
  int res = 0;
  int power = 0;
  for (int i = strlen(columnTitle) - 1; i >= 0; i--)
  {
    int c = (columnTitle[i] - 64);
    res += c * (pow(26, power));
    power++;
  }
  return res;
}

int main(void)
{
  int ex1 = titleToNumber("A");  // 1
  int ex2 = titleToNumber("AB"); // 28
  int ex3 = titleToNumber("ZY"); // 701
}

// 100% Runtime
// Very little C solutions, all C++ */

// Contains Duplicate					10/1/2023
/*
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// 		Input: nums = [1,2,3,1]
// 		Output: true

// Example 2:
// 		Input: nums = [1,2,3,4]
// 		Output: false

// Example 3:
// 		Input: nums = [1,1,1,3,3,4,3,2,4,2]
// 		Output: true

// Constraints:
//		1 <= nums.length <= 105
//		-109 <= nums[i] <= 109

bool containsDuplicate(int *nums, int numsSize)
{
  for (int i = 0; i < numsSize - 1; i++)
  {
    for (int j = i + 1; j < numsSize; j++)
    {
      if (nums[i] == nums[j])
        return true;
    }
  }
  return false;
}

int main(void)
{
  int nums1[] = {1, 2, 3, 1};
  int ex1 = containsDuplicate(nums1, 4); // true
  int nums2[] = {1, 2, 3, 4};
  int ex2 = containsDuplicate(nums2, 4); // false
  int nums3[] = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};
  int ex3 = containsDuplicate(nums3, 10); // true
}

// Time limit exceeded

int cmp(const void *a, const void *b)
{
  return (*(int *)a - *(int *)b);
}

bool topVotedContainsDuplicate(int *nums, int numsSize)
{
  qsort(nums, numsSize, sizeof(int), cmp);

  for (int i = 1; i < numsSize; i++)
    if (nums[i] == nums[i - 1])
      return true;

  return false;
}

// "The C library function void qsort(void *base, size_t nitems, size_t size, int (*compar)(const void *, const void*)) sorts an array."

// base − This is the pointer to the first element of the array to be sorted.
// nitems − This is the number of elements in the array pointed by base.
// size − This is the size in bytes of each element in the array.
// compar − This is the function that compares two elements. */

// Contains Duplicate II					10/2/2023
/*
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// 		Input: nums = [1,2,3,1], k = 3
// 		Output: true

// Example 2:
// 		Input: nums = [1,0,1,1], k = 1
// 		Output: true

// Example 3:
// 		Input: nums = [1,2,3,1,2,3], k = 2
// 		Output: false

// Constraints:
//		1 <= nums.length <= 105
//		-109 <= nums[i] <= 109
//		0 <= k <= 105

bool containsNearbyDuplicate(int *nums, int numsSize, int k)
{
  for (int i = 0; i < numsSize - 1; i++)
  {
    for (int j = i + 1; j < numsSize; j++)
    {
      if (abs(i - j) > k)
        break;
      if (nums[i] == nums[j])
      {
        return true;
      }
    }
  }
  return false;
}

int main(void)
{
  int nums1[] = {1, 2, 3, 1};
  bool ex1 = containsNearbyDuplicate(nums1, 4, 3); // true
  int nums2[] = {1, 0, 1, 1};
  bool ex2 = containsNearbyDuplicate(nums2, 4, 1); // true
  int nums3[] = {1, 2, 3, 1, 2, 3};
  bool ex3 = containsNearbyDuplicate(nums3, 6, 2); // false
}

// Time limit exceeded
// Sliding window seems to be the way

// All C++, very few C solutions */

// Height Checker					10/3/2023
/*
// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:
// 		Input: heights = [1,1,4,2,1,3]
// 		Output: 3
// Explanation:
// 		heights:  [1,1,4,2,1,3]
// 		expected: [1,1,1,2,3,4]
// 		Indices 2, 4, and 5 do not match.

// Example 2:
// 		Input: heights = [5,1,2,3,4]
// 		Output: 5
// Explanation:
// 		heights:  [5,1,2,3,4]
// 		expected: [1,2,3,4,5]
// 		All indices do not match.

// Example 3:
// 		Input: heights = [1,2,3,4,5]
// 		Output: 0
// Explanation:
// 		heights:  [1,2,3,4,5]
// 		expected: [1,2,3,4,5]
// 		All indices match.

// Constraints:
//		1 <= heights.length <= 100
//		1 <= heights[i] <= 100

int heightChecker(int *heights, int heightsSize)
{
  int original[heightsSize];
  for (int i = 0; i < heightsSize; i++)
  {
    original[i] = heights[i];
  }

  bool sorted = false;
  while (!sorted)
  {
    sorted = true;
    for (int i = 0; i < heightsSize - 1; i++)
    {
      for (int j = i + 1; j < heightsSize; j++)
      {
        if (heights[i] > heights[j])
        {
          sorted = false;
          int temp = heights[i];
          heights[i] = heights[j];
          heights[j] = temp;
          break;
        }
      }
    }
  }

  int count = 0;
  for (int i = 0; i < heightsSize; i++)
  {
    if (original[i] != heights[i])
      count++;
  }
  return count;
}

int main(void)
{
  int heights1[] = {1, 1, 4, 2, 1, 3};
  int ex1 = heightChecker(heights1, 6); // 3
  int heights2[] = {5, 1, 2, 3, 4};
  int ex2 = heightChecker(heights2, 6); // 5
  int heights3[] = {1, 2, 3, 4, 5};
  int ex3 = heightChecker(heights3, 6); // 0
}

// Works, but slow

int topVotedHeightChecker(int *heights, int heightsSize)
{
  int result = 0;

  int max_height = 102;
  int *counter = (int *)calloc(max_height, sizeof(int));

  // int expected[heightsSize];

  for (int i = 0; i < heightsSize; i++)
    counter[heights[i]]++;

  int pos = 1;
  for (int i = 0; i < heightsSize; i++)
  {
    while (counter[pos] == 0)
      pos++;

    if (heights[i] != pos)
      result++;

    counter[pos]--;
  }
  return result;
}

// "The calloc function allocates storage space for an array of number elements, each of length size bytes. Each element is initialized to 0."" */

// Implement Stack using Queues					10/4/2023
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

typedef struct
{
  int stack[100];
  int idx;
} MyStack;

MyStack *myStackCreate()
{
  return MyStack;
}

void myStackPush(MyStack *obj, int x)
{
  MyStack.stack[++MyStack.idx] = x;
}

int myStackPop(MyStack *obj)
{
  MyStack.idx--;
  return MyStack.stack[MyStack.idx + 1];
}

int myStackTop(MyStack *obj)
{
  return MyStack.stack[MyStack.idx];
}

bool myStackEmpty(MyStack *obj)
{
  return MyStack.idx == 0;
}

void myStackFree(MyStack *obj)
{
}

int main(void)
{
  MyStack *obj = myStackCreate();
  myStackPush(obj, x);
  int param_2 = myStackPop(obj);
  int param_3 = myStackTop(obj);
  bool param_4 = myStackEmpty(obj);
  myStackFree(obj);
}

// Out of my depths on this one
// Haven't seen classes yet

typedef struct
{
  int *arr;
  int top;
} MyTopVotedStack;

MyTopVotedStack *myTopVotedStackCreate()
{
  MyTopVotedStack *obj = (MyTopVotedStack *)malloc(sizeof(MyTopVotedStack));
  obj->arr = (int *)malloc(sizeof(int) * 100);
  obj->top = -1;
  return obj;
}

void myTopVotedStackPush(MyTopVotedStack *obj, int x)
{
  obj->arr[++obj->top] = x;
}

int myTopVotedStackPop(MyTopVotedStack *obj)
{
  return obj->arr[obj->top--];
}

int myTopVotedStackTop(MyTopVotedStack *obj)
{
  return obj->arr[obj->top];
}

bool myTopVotedStackEmpty(MyTopVotedStack *obj)
{
  return obj->top == -1;
}

void myTopVotedStackFree(MyTopVotedStack *obj)
{
  free(obj->arr);
  free(obj);
}

// "The -> (arrow) operator is used to access class, structure or union members using a pointer. A postfix expression, followed by an -> (arrow) operator, followed by a possibly qualified identifier or a pseudo-destructor name, designates a member of the object to which the pointer points."

// So not "."

typedef struct
{
  int *stack;
  int idx;
} MyRevisedStack;

MyRevisedStack *myRevisedStackCreate()
{
  MyRevisedStack *obj = (MyRevisedStack *)malloc(sizeof(MyRevisedStack));
  obj->stack = (int *)malloc(sizeof(int) * 100); // def array of size 100
  obj->idx = -1;                                 // -1 (not 0) so that it's  compatible with first push
  return obj;
}

void myRevisedStackPush(MyRevisedStack *obj, int x)
{
  obj->stack[++obj->idx] = x;
}

int myRevisedStackPop(MyRevisedStack *obj)
{
  return obj->stack[obj->idx--];
}

int myRevisedStackTop(MyRevisedStack *obj)
{
  return obj->stack[obj->idx];
}

bool myRevisedStackEmpty(MyRevisedStack *obj)
{
  return obj->idx == -1;
}

void myRevisedStackFree(MyRevisedStack *obj)
{
  free(obj->stack);
  free(obj);
}

// I had the logic, but not the syntax

// "The C library function void free(void *ptr) deallocates the memory previously allocated by a call to calloc, malloc, or realloc." */

// Summary Ranges					10/5/2023
/*
// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b

// "a" if a == b

// Example 1:
// 		Input: nums = [0,1,2,4,5,7]
// 		Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// 		[0,2] --> "0->2"
// 		[4,5] --> "4->5"
// 		[7,7] --> "7"

// Example 2:
// 		Input: nums = [0,2,3,4,6,8,9]
// 		Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// 		[0,0] --> "0"
// 		[2,4] --> "2->4"
// 		[6,6] --> "6"
// 		[8,9] --> "8->9"

// Constraints:
//		0 <= nums.length <= 20
//		-231 <= nums[i] <= 231 - 1
//		All the values of nums are unique.
//		nums is sorted in ascending order.

char **summaryRanges(int *nums, int numsSize, int *returnSize)
{
  char res[*returnSize];
  int residx = 0;

  int num = nums[0];
  for (int i = 1; i < numsSize; i++)
  {
    if (nums[i] != nums[i - 1] + 1)
    {
      if (num != nums[i])
      {
        res[residx] = {num, '-', '>', nums[i - 1]};
        num = nums[i];
        residx++;
      }
    }
  }

  return res;
}

int main(void)
{
  char **ex1 = summaryRanges((int[]){0, 1, 2, 4, 5, 7}, 6, (int[3]){0});    // ["0->2","4->5","7"]
  char **ex2 = summaryRanges((int[]){0, 2, 3, 4, 6, 8, 9}, 7, (int[4]){0}); // ["0","2->4","6","8->9"]
}

// Unfamiliar with how to define returnSize and res memory allocation
// Struggling to build strings

char **topVotedSummaryRanges(int *nums, int numsSize, int *returnSize)
{
  *returnSize = 0;
  char **ret = NULL;
  if (numsSize == 1)
  {
    int stlen = (log10(INT_MAX) + 3); // enough space for ints of max length, null terminator, and neg sign
    ret = (char **)malloc(sizeof(char *) * numsSize);

    ret[0] = (char *)malloc(sizeof(char) * stlen);
    sprintf(ret[0], "%d", nums[0]);

    (*returnSize)++;
  }
  else if (numsSize > 1)
  {
    int i, start, j;
    int stlen = ((log10(INT_MAX) + 2) * 2) + 3; // enough space for ints of max length, null terminator, arrow, and neg sign
    ret = (char **)malloc(sizeof(char *) * numsSize);

    for (i = 1, start = nums[0], j = 0; i < numsSize; i++)
    {
      if (nums[i] != (nums[i - 1] + 1))
      {
        ret[j] = (char *)malloc(sizeof(char) * stlen);
        (nums[i - 1] - start > 0) ? sprintf(ret[j++], "%d->%d", start, nums[i - 1]) : sprintf(ret[j++], "%d", nums[i - 1]);
        start = nums[i];
        (*returnSize)++;
      }
    }

    (*returnSize)++;
    ret[j] = (char *)malloc(sizeof(char) * stlen);
    (nums[i - 1] - start > 0) ? sprintf(ret[j++], "%d->%d", start, nums[i - 1]) : sprintf(ret[j++], "%d", nums[i - 1]);
  }

  return ret;
}

// Man, memory allocation is really something

// sprintf to build string:
// "The C library function int sprintf(char *str, const char *format, ...) sends formatted output to a string pointed to, by str." */

// Power of Two					10/6/2023
/*
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:
// 		Input: n = 1
// 		Output: true
// Explanation: 20 = 1

// Example 2:
// 		Input: n = 16
// 		Output: true
// Explanation: 24 = 16

// Example 3:
// 		Input: n = 3
// 		Output: false

// Constraints:
//		-231 <= n <= 231 - 1

// Follow up: Could you solve it without loops/recursion?

bool isPowerOfTwo(int n)
{
  return (int)(log(n) / log(2)) == (log(n) / log(2));
}

int main(void)
{
  bool ex1 = isPowerOfTwo(1);  // true
  bool ex2 = isPowerOfTwo(16); // true
  bool ex3 = isPowerOfTwo(3);  // false
}

// Don't know how else to check if int

bool topVotedIsPowerOfTwo(int n)
{
  if (n <= 0)
    return false;
  return !(n & (n - 1));
}

// "If a number is in power of 2 it will have only 1 set bit i.e., the most significant bit

// Example:
//    64: 1000000
//    16: 10000
// and when the number is subtracted by 1 results in all 1s.

// Example:
//    8 - 1: 0111
//    2 - 1: 01
// Now we can use the property if bitwise and operator, which gives 0 if the set bits are opposite and while returning we just return ! (not) of the result.

// Suppose 8 is in power of 2 so 8 & 8-1 will result 0, so return 1 (true)
// 1000 & 0111= 0000

// and consider a number not in power of 2, lets say 7
// 7 & 7-1 will result in 1
// 111 & 110 = 1, so just return !1 which is false" */

// Valid Anagram					10/7/2023
/*
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// 		Input: s = "anagram", t = "nagaram"
// 		Output: true

// Example 2:
// 		Input: s = "rat", t = "car"
// 		Output: false

// Constraints:
//		1 <= s.length, t.length <= 5 * 104
//		s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

bool isAnagram(char *s, char *t)
{
  for (int i = 0; i < strlen(s); i++)
  {
    bool isValid = false;
    for (int j = 0; j < strlen(t); j++)
    {
      if (s[i] == t[j])
      {
        isValid = true;
        t[j] = '_'; // doesn't work locally, works in leetcode
        break;
      }
    }
    if (!isValid)
      return false;
  }

  for (int i = 0; i < strlen(t); i++)
  {
    if (t[i] != '_')
      return false;
  }
  return true;
}

int main(void)
{
  bool ex1 = isAnagram("anagram", "nagaram"); // true
  bool ex2 = isAnagram("rat", "car");         // false
}

// Could also be done by sorting and comparing

bool topVotedIsAnagram(char *s, char *t)
{
  int chars[26] = {0, 0}, index;

  for (index = 0; s[index]; ++index)
    chars[s[index] - 'a']++;

  for (index = 0; t[index]; ++index)
    chars[t[index] - 'a']--;

  for (index = 0; index < 26; ++index)
    if (chars[index])
      return false;

  return true;
}

// Increments chars with s, decrements with t
// If not equal to 0, return false */

// Add Digits					10/8/2023
/*
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:
// 		Input: num = 38
// 		Output: 2
// Explanation: The process is
// 		38 --> 3 + 8 --> 11
// 		11 --> 1 + 1 --> 2
// 		Since 2 has only one digit, return it.

// Example 2:
// 		Input: num = 0
// 		Output: 0

// Constraints:
//		0 <= num <= 231 - 1

// Follow up: Could you do it without any loop/recursion in O(1) runtime?

int addDigits(int num)
{
  while (num >= 10)
  {
    int new = 0;
    while (num >= 10)
    {
      new += num % 10;
      num /= 10;
    }
    num += new;
  }
  return num;
}

int main(void)
{
  int ex1 = addDigits(38); // 2
  int ex2 = addDigits(0);  // 0
}

// 100% Runtime

int topVotedAddDigits(int num)
{
  if (num == 0)
    return 0;
  return num % 9 == 0 ? 9 : num % 9;
}

// O(1) Runtime

// Noticeable pattern:
// https://leetcode.com/problems/add-digits/solutions/1754049/easy-o-1-explanation-with-example/ */

// Ugly Number					10/9/2023
/*
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

// Example 1:
// 		Input: n = 6
// 		Output: true
// Explanation: 6 = 2 × 3

// Example 2:
// 		Input: n = 1
// 		Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

// Example 3:
// 		Input: n = 14
// 		Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

// Constraints:
//		-231 <= n <= 231 - 1

bool isUgly(int n)
{
  int prime = 7;
  int mult = 2;

  if (n % prime == 0)
    return false;

  while (prime <= abs(n / 2))
  {
    if (n % (6 * mult - 1) == 0 || n % (6 * mult + 1) == 0)
      return false;

    prime = 6 * mult + 1;
    mult++;
  }

  return true;
}

int main(void)
{
  bool ex1 = isUgly(6);           // true
  bool ex2 = isUgly(1);           // true
  bool ex3 = isUgly(14);          // false
  bool ex4 = isUgly(-2147483648); // false, breaks here
}

bool topVotedIsUgly(int n)
{

  while (n % 2 == 0 && (n = n / 2))
    ;
  while (n % 3 == 0 && (n = n / 3))
    ;
  while (n % 5 == 0 && (n = n / 5))
    ;

  return n == 1;
}

// "Using modulo operator, check whether the given number is divisible by 2 if yes, divide untill it becomes not divisible by 2.

// check whether the given number is divisible by 3 if yes, divide untill it becomes not divisible by 3.

// check whether the given number is divisible by 5 if yes, divide untill it becomes not divisible by 5." */

// Missing Number					10/10/2023
/*
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// 		Input: nums = [3,0,1]
// 		Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// 		Input: nums = [0,1]
// 		Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// 		Input: nums = [9,6,4,2,3,5,7,0,1]
// 		Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:
//		n == nums.length
//		1 <= n <= 104
//		0 <= nums[i] <= n
//		All the numbers of nums are unique.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

int inc(const void *a, const void *b)
{
  return (*(int *)a - *(int *)b);
}

int missingNumber(int *nums, int numsSize)
{
  qsort(nums, numsSize, sizeof(int), inc);

  for (int i = 0; i < numsSize; i++)
  {
    if (nums[i] != i)
      return i;
  }
  return numsSize;
}

int main(void)
{
  int ex1 = missingNumber((int[]){3, 0, 1}, 3);                   // 2
  int ex2 = missingNumber((int[]){0, 1}, 2);                      // 2
  int ex3 = missingNumber((int[]){9, 6, 4, 2, 3, 5, 7, 0, 1}, 9); // 8
}

// First time using qsort

int topVotedMissingNumber(int *nums, int numsSize)
{
  int index = 0, res = 0;
  for (; index < numsSize; res += -nums[index] + ++index)
    ;
  return res;
}

// That for loop tho */

// First Bad Version					10/11/2023
/*
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example 1:
// 		Input: n = 5, bad = 4
// 		Output: 4
// Explanation:
// 		call isBadVersion(3) -> false
// 		call isBadVersion(5) -> true
// 		call isBadVersion(4) -> true
// 		Then 4 is the first bad version.

// Example 2:
// 		Input: n = 1, bad = 1
// 		Output: 1

// Constraints:
//		1 <= bad <= n <= 231 - 1

// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

int firstBadVersion(int n)
{
  int v = n / 2;
  while (!isBadVersion(v))
    v += (n - v) / 2;
  while (isBadVersion(v))
    v--;
  return v + 1;
}

int main(void)
{
  int ex1 = firstBadVersion(5); // 4
  int ex2 = firstBadVersion(1); // 1
}

// A lazy binary search

int topVotedFirstBadVersion(int n)
{
  long int f = 1, mid;
  while (f < n)
  {
    mid = (f + n) / 2;
    if (isBadVersion(mid))
    {
      n = mid;
    }
    else
    {
      f = mid + 1;
    }
  }
  return f;
}

// An actual binary search

int revisedFirstBadVersion(int n)
{
  long int f = 0, m; // leetcode test case overflows int

  while (f < n)
  {
    m = (f + n) / 2;
    if (isBadVersion(m))
      n = m;
    else
      f = m + 1;
  }

  return f;
}

// Good refresher */

// Move Zeroes					10/12/2023
/*
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// 		Input: nums = [0,1,0,3,12]
// 		Output: [1,3,12,0,0]

// Example 2:
// 		Input: nums = [0]
// 		Output: [0]

// Constraints:
//		1 <= nums.length <= 104
//		-231 <= nums[i] <= 231 - 1
//		Follow up: Could you minimize the total number of operations done?

void moveZeroes(int *nums, int numsSize)
{
  bool sorted = false;
  while (!sorted)
  {
    sorted = true;
    for (int i = 0; i < numsSize - 1; i++)
    {
      if (nums[i] == 0 && nums[i + 1] != 0)
      {
        nums[i] = nums[i + 1];
        nums[i + 1] = 0;

        sorted = false;
        break;
      }
    }
  }
}

int main(void)
{
  moveZeroes((int[]){0, 1, 0, 3, 12}, 5); // [1,3,12,0,0]
  moveZeroes((int[]){0}, 1);              // [0]
}

// Too slow

void topVotedMoveZeroes(int *nums, int numsSize)
{
  int index = 0;
  for (int i = 0; i < numsSize; i++)
  {
    if (nums[i] != 0)
    {
      nums[index] = nums[i];
      index++;
    }
  }
  for (int i = index; i < numsSize; i++)
  {
    nums[i] = 0;
  }
}

// 1. Create a separate index starting at 0 and insert non-zero num in nums array. And increment index.
// 2. Insert 0 at the remaining spaces left
// 3. Time Complexity: O(n) | Space Complexity: O(1) */

// Word Pattern					10/13/2023
/*
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// 		Input: pattern = "abba", s = "dog cat cat dog"
// 		Output: true

// Example 2:
// 		Input: pattern = "abba", s = "dog cat cat fish"
// 		Output: false

// Example 3:
// 		Input: pattern = "aaaa", s = "dog cat cat dog"
// 		Output: false

// Constraints:
//		1 <= pattern.length <= 300
//		pattern contains only lower-case English letters.
//		1 <= s.length <= 3000
//		s contains only lowercase English letters and spaces ' '.
//		s does not contain any leading or trailing spaces.
//		All the words in s are separated by a single space.

bool wordPattern(char *pattern, char *s)
{
  char map[26][3000] = {""};

  int start = 0;
  for (int i = 0; i < strlen(pattern); i++)
  {
    // Find word
    int end = start;
    int j = 0;
    char word[3000];
    while (s[end] != ' ')
    {
      word[j] = s[end];
      j++;
      end++;
    }
    start = end + 1;

    // Does pattern exist?
    char p = pattern[i] - 'a';
    if (strlen(map[p]) == 0)
      strcpy(map[p], word);

    // Else compare them
    else if (strcmp(map[p], word) != 0) // 0 is true
      return false;
  }

  return true;
}

int main(void)
{
  bool ex1 = wordPattern("abba", "dog cat cat dog");  // true
  bool ex2 = wordPattern("abba", "dog cat cat fish"); // false
  bool ex3 = wordPattern("aaaa", "dog cat cat dog");  // false
}

// map[26][3000] feels illegal 💀
// I need to learn some better array building

bool topVotedWordPattern(char *pattern, char *s)
{
  char **result = (char **)malloc(26 * sizeof(char *));

  // word count matches pattern count
  int count = 0;
  for (int i = 0; i < strlen(s) - 1; i++)
    if (s[i] == ' ' && s[i + 1] != ' ')
      count++;
  if (count + 1 != strlen(pattern))
    return false;

  // init map
  for (int i = 0; i < 26; i++)
  {
    result[i] = malloc(3000); // 3000 is ok it seems
    result[i][0] = 0;
  }

  int index = 0;
  for (int i = 0; i < strlen(s); i++)
  {
    if (s[i] != ' ')
    {
      int start = i, idx = 0;
      char temp[3000] = {0};

      // find word
      while (s[start] != ' ' && start < strlen(s))
      {
        temp[idx++] = s[start++];
      }

      // if pattern already exists
      if (result[pattern[index] - 'a'][0] != 0)
      {
        if (strcmp(result[pattern[index] - 'a'], temp))
          return false;
      }
      // else compare
      else
        strcpy(result[pattern[index] - 'a'], temp);

      index++;
      i = start;
    }
  }

  // different patterns having same word
  for (int i = 0; i < 25; i++)
  {
    if (result[i][0] != 0)
      for (int j = i + 1; j < 26; j++)
        if (result[j][0] != 0 && strcmp(result[i], result[j]) == 0)
          return false;
  }
  return true;
}

// Easy Leetcode questions are something else in C */

// Nim Game					10/14/2023
/*
// You are playing the following Nim Game with your friend:

// Initially, there is a heap of stones on the table.

// You and your friend will alternate taking turns, and you go first.

// On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.

// The one who removes the last stone is the winner.

// Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

// Example 1:
// 		Input: n = 4
// 		Output: false
// Explanation: These are the possible outcomes:
// 		1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
// 		2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
// 		3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
// 		In all outcomes, your friend wins.

// Example 2:
// 		Input: n = 1
// 		Output: true

// Example 3:
// 		Input: n = 2
// 		Output: true

// Constraints:
//		1 <= n <= 231 - 1

bool canWinNim(int n)
{
  return n % 4 != 0;
}

int main(void)
{
  bool ex1 = canWinNim(4); // false
  bool ex2 = canWinNim(1); // true
  bool ex3 = canWinNim(2); // true
}

// Same as top voted */

// Power of Three					10/15/2023
/*
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:
// 		Input: n = 27
// 		Output: true
// Explanation: 27 = 3^3

// Example 2:
// 		Input: n = 0
// 		Output: false
// Explanation: There is no x where 3x = 0.

// Example 3:
// 		Input: n = -1
// 		Output: false
// Explanation: There is no x where 3x = (-1).

// Constraints:
//		-2^31 <= n <= 2^31 - 1

// Follow up: Could you solve it without loops/recursion?

bool isPowerOfThree(int n)
{
  return (log(n) / log(3)) == (int)(log(n) / log(3)); // power of 3 is int
}

int main(void)
{
  isPowerOfThree(27); // true
  isPowerOfThree(0);  // false
  isPowerOfThree(-1); // false
}

bool topVotedIsPowerOfThree(int n)
{
  return (n > 0) && (1162261467 % n == 0);
}

// "Because 3^19(1,162,261,467) is the largest power of three under 2^31 - 1
// So we just neet to check if n > 0 and whether 3^19 % n is 0" */

// Counting Bits					10/16/2023
/*
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:
// 		Input: n = 2
// 		Output: [0,1,1]
// Explanation:
// 		0 --> 0
// 		1 --> 1
// 		2 --> 10

// Example 2:
// 		Input: n = 5
// 		Output: [0,1,1,2,1,2]
// Explanation:
// 		0 --> 0
// 		1 --> 1
// 		2 --> 10
// 		3 --> 11
// 		4 --> 100
// 		5 --> 101

// Constraints:
//		0 <= n <= 105

// Follow up:
//		It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
//		Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

int *topVotedCountBits(int n, int *returnSize)
{

  n++;
  int *tempArray = (int *)calloc(n, sizeof(int));

  *returnSize = n;

  int targetPower = 1, counter = 0;
  for (int i = 1; i < n; i++, counter++)
  {
    if (counter == targetPower)
    {
      counter = 0;
      targetPower *= 2;
    }
    tempArray[i] = tempArray[counter] + 1;
  }

  return tempArray;
}

// "When the length of the array is the power of two, we start from the beginning of the array and new elements are created by incrementing them by 1."

int *countBits(int n, int *returnSize)
{
  int *res = (int *)calloc(n + 1, sizeof(int));
  *returnSize = n + 1;

  int bit = 1, k = 0;
  for (int i = 1; i <= n; i++)
  {
    if (bit == k)
    {
      bit *= 2;
      k = 0;
    }
    res[i] = res[k] + 1;
    k++;
  }

  return res;
}

int main(void)
{
  int ex1Size = 3;
  countBits(2, &ex1Size); // [0,1,1]
  int ex2Size = 6;
  countBits(5, &ex2Size); // [0,1,1,2,1,2]
}

// Logic makes sense but I wouldn't have come up with it
// Also still getting used to calloc and returnSize */

// Power of Four					10/17/2023
/*
// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Example 1:
// 		Input: n = 16
// 		Output: true

// Example 2:
// 		Input: n = 5
// 		Output: false

// Example 3:
// 		Input: n = 1
// 		Output: true

// Constraints:
//		-231 <= n <= 231 - 1

// Follow up: Could you solve it without loops/recursion?

bool isPowerOfFour(int n)
{
  return (log(n) / log(4)) == (int)(log(n) / log(4));
}

int main(void)
{
  int ex1 = isPowerOfFour(16); // true
  int ex2 = isPowerOfFour(5);  // false
  int ex3 = isPowerOfFour(1);  // true
  int ex4 = isPowerOfFour(2);  // false
  int ex5 = isPowerOfFour(8);  // false
}

// Same as 2 days ago
// Top voted from 2 days ago didn't work

bool topVotedIsPowerOfFour(int n)
{
  if (n == 0)
    return false;

  float x = log(n) / log(4);

  if (ceil(x) == floor(x))
    return true;

  return false;
}

// Ceil == floor is good to check if int */

// Reverse String					10/18/2023
/*
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// 		Input: s = ["h","e","l","l","o"]
// 		Output: ["o","l","l","e","h"]

// Example 2:
// 		Input: s = ["H","a","n","n","a","h"]
// 		Output: ["h","a","n","n","a","H"]

// Constraints:
//		1 <= s.length <= 105
//		s[i] is a printable ascii character.

void reverseString(char *s, int sSize)
{
  for (int l = 0, r = sSize - 1; r > (sSize - 1) / 2; l++, r--)
  {
    char temp = s[l];
    s[l] = s[r];
    s[r] = temp;
  }
}

int main(void)
{
  reverseString((char[]){'h', 'e', 'l', 'l', 'o'}, 5);      // ["o","l","l","e","h"]
  reverseString((char[]){'H', 'a', 'n', 'n', 'a', 'h'}, 6); // ["h","a","n","n","a","H"]
}

char *topVotedReverseString(char *s)
{
  int l = 0;
  int r = strlen(s) - 1;
  char c;

  while (l < r)
  {
    c = s[l];
    s[l] = s[r];
    s[r] = c;
    l++;
    r--;
  }

  return s;
}

// Much easier than my for loop declaration

void revisedReverseString(char *s, int sSize)
{
  for (int l = 0, r = sSize - 1; r > l; l++, r--)
  {
    char temp = s[l];
    s[l] = s[r];
    s[r] = temp;
  }
} */

// Reverse Vowels of a String					10/19/2023
/*
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// 		Input: s = "hello"
// 		Output: "holle"

// Example 2:
// 		Input: s = "leetcode"
// 		Output: "leotcede"

// Constraints:
//		1 <= s.length <= 3 * 105
//		s consist of printable ASCII characters.

char *reverseVowels(char *s)
{
  char vowels[] = "aeiouAEIOU";

  int l = 0, r = strlen(s) - 1;
  while (l < r)
  {
    bool swapReady = true;
    if (strchr(vowels, s[l]) == NULL)
    {
      l++;
      swapReady = false;
    }
    if (strchr(vowels, s[r]) == NULL)
    {
      r--;
      swapReady = false;
    }

    if (!swapReady)
      continue;

    char temp = s[l];
    s[l] = s[r];
    s[r] = temp;

    l++;
    r--;
  }

  return s;
}

int main(void)
{
  char ex1[] = "hello";
  reverseVowels(ex1); // "holle"
  char ex2[] = "leetcode";
  reverseVowels(ex2); // "leotcede"
}

// strchr:
// Returns a pointer to the first occurrence of character in the C string str.
// If the character is not found, the function returns a null pointer

int isVowel(char c)
{
  c = tolower(c); // Convert character to lowercase for case-insensitive comparison

  return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
}
char *topVotedReverseVowels(char *s)
{
  int i = 0;
  int j = strlen(s) - 1; // Initialize j to the last index of the string

  while (i < j)
  {
    if (isVowel(s[i]) && isVowel(s[j]))
    {
      // Swap the vowels at positions i and j
      char temp = s[i];
      s[i] = s[j];
      s[j] = temp;

      i++; // Move to the next vowel
      j--; // Move to the previous vowel
    }
    else
    {
      if (!isVowel(s[i]))
      {
        i++; // Move to the next character if s[i] is not a vowel
      }
      if (!isVowel(s[j]))
      {
        j--; // Move to the previous character if s[j] is not a vowel
      }
    }
  }

  return s;
}

// same same */

// Valid Perfect Square					10/20/2023
/*
// Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.

// Example 1:
// 		Input: num = 16
// 		Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

// Example 2:
// 		Input: num = 14
// 		Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

// Constraints:
//		1 <= num <= 2^31 - 1

bool isPerfectSquare(int num)
{
  // return sqrt(num) == (int)sqrt(num); // not allowed
  if (num == 1)
    return true;

  for (int i = 1; i <= num / 2; i++)
  {
    if (i * i == num)
      return true;
  }
  return false;
}

int main(void)
{
  bool ex1 = isPerfectSquare(16); // true
  bool ex2 = isPerfectSquare(14); // false
  bool ex3 = isPerfectSquare(1);  // false
}

// Slow

bool topVotedIsPerfectSquare(int num)
{
  long r = num;
  while (r * r > num)
  {
    r = (r + num / r) / 2;
  }
  return r * r == num;
}

// much faster */

// Guess Number Higher or Lower					10/21/2023
/*
// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).

// Return the number that I picked.

// Example 1:
// 		Input: n = 10, pick = 6
// 		Output: 6

// Example 2:
// 		Input: n = 1, pick = 1
// 		Output: 1

// Example 3:
// 		Input: n = 2, pick = 1
// 		Output: 1

// Constraints:
//		1 <= n <= 231 - 1
//		1 <= pick <= n

int guess(int n)
{
  if (n == 6)
    return 0;
  else if (n > 6)
    return -1;
  return 1;
}

int guessNumber(int h)
{
  int l = 1;
  unsigned int pick = h / 2;

  bool guessing = true;
  while (guessing)
  {
    int res = guess(pick);

    if (res == 0)
      break;
    else if (res == -1)
      h = pick - 1;
    else // res == 1
      l = pick + 1;

    pick = l + (h - l) / 2;
  }
  return pick;
}

int main(void)
{
  int ex1 = guessNumber(10);
}

// Poor runtime

int topVotedGuessNumber(int n)
{
  int left = 1;
  int right = n;

  while (left <= right)
  {
    int mid = left + (right - left) / 2;
    int result = guess(mid);

    if (result == 0)
      return mid;
    else if (result == -1)
      right = mid - 1;
    else
      left = mid + 1;
  }
  return -1;
}

// Same same */

// Ransom Note					10/22/2023
/*
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// 		Input: ransomNote = "a", magazine = "b"
// 		Output: false

// Example 2:
// 		Input: ransomNote = "aa", magazine = "ab"
// 		Output: false

// Example 3:
// 		Input: ransomNote = "aa", magazine = "aab"
// 		Output: true

// Constraints:
//		1 <= ransomNote.length, magazine.length <= 105
//		ransomNote and magazine consist of lowercase English letters.

bool canConstruct(char *ransomNote, char *magazine)
{
  int count[26] = {0};
  for (int i = 0; i < strlen(magazine); i++)
    count[magazine[i] - 'a']++;

  for (int i = 0; i < strlen(ransomNote); i++)
  {
    count[ransomNote[i] - 'a']--;
    if (count[ransomNote[i] - 'a'] < 0)
      return false;
  }
  return true;
}

int main(void)
{
  bool ex1 = canConstruct("a", "b");    // false
  bool ex2 = canConstruct("aa", "ab");  // false
  bool ex3 = canConstruct("aa", "aab"); // true
}

bool topVotedCanConstruct(char *ransomNote, char *magazine)
{
  // create a map to store the frequency of char in ransomNote
  int map[26] = {0};

  // check what is in ransomNote and magazine
  while (*ransomNote)
  {
    map[*ransomNote - 'a']++;
    ransomNote++;
  }
  while (*magazine)
  {
    map[*magazine - 'a']--;
    magazine++;
  }

  // check if frequency of any char in ransomNote is greater than in magazine
  for (int i = 0; i < 26; i++)
    if (map[i] > 0)
      return false;
  return true;
}

// This is much faster than mine although very similar */

// First Unique Character in a String					10/23/2023
/*
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// 		Input: s = "leetcode"
// 		Output: 0

// Example 2:
// 		Input: s = "loveleetcode"
// 		Output: 2

// Example 3:
// 		Input: s = "aabb"
// 		Output: -1

// Constraints:
//		1 <= s.length <= 105
//		s consists of only lowercase English letters.

int firstUniqChar(char *s)
{
  int map[26] = {0};

  for (int i = 0; i < strlen(s); i++)
    map[s[i] - 'a']++;

  for (int i = 0; i < strlen(s); i++)
    if (map[s[i] - 'a'] == 1)
      return i;

  return -1;
}

int main(void)
{
  int ex1 = firstUniqChar("leetcode");     // 0
  int ex2 = firstUniqChar("loveleetcode"); // 2
  int ex3 = firstUniqChar("aabb");         // -1
}

int topVotedFirstUniqChar(char *s)
{
  int i = 0, map[26], sSize = strlen(s);

  for (i; i < 26; i++)
    map[i] = 0;

  for (i = 0; i < sSize; i++)
    map[s[i] - 'a']++;

  for (i = 0; i < sSize; i++)
    if (map[s[i] - 'a'] == 1)
      return i;

  return -1;
}

// How is this so much faster?

int revisedFirstUniqChar(char *s)
{
  int map[26] = {0}, sSize = strlen(s);
  for (int i = 0; i < sSize; i++)
    map[s[i] - 'a']++;

  for (int i = 0; i < sSize; i++)
    if (map[s[i] - 'a'] == 1)
      return i;

  return -1;
}

// Just implementing sSize saves a lot of runtime */

// Find the Difference					10/24/2023

// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

// Example 1:
// 		Input: s = "abcd", t = "abcde"
// 		Output: "e"
// Explanation: 'e' is the letter that was added.

// Example 2:
// 		Input: s = "", t = "y"
// 		Output: "y"

// Constraints:
//		0 <= s.length <= 1000
//		t.length == s.length + 1
//		s and t consist of lowercase English letters.

char findTheDifference(char *s, char *t)
{
  int map[26] = {0}, sSize = strlen(s);

  for (int i = 0; i < sSize; i++)
  {
    map[s[i] - 'a']++;
    map[t[i] - 'a']--;
  }
  for (int i = 0; i < 26; i++)
    if (map[i] == -1)
      return i + 'a';

  return t[strlen(t) - 1];
}

int main(void)
{
  char ex1 = findTheDifference("abcd", "abcde"); // "e"
  char ex2 = findTheDifference("", "y");         // "y"
}

char topVotedFindTheDifference(char *s, char *t)
{
  int res = 0;

  while (*s)
    res ^= *s++;
  while (*t)
    res ^= *t++;

  return res;
}

// Bitwise