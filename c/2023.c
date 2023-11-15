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
/*
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

// Bitwise */

// Is Subsequence					10/25/2023
/*
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// 		Input: s = "abc", t = "ahbgdc"
// 		Output: true

// Example 2:
// 		Input: s = "axc", t = "ahbgdc"
// 		Output: false

// Constraints:
//		0 <= s.length <= 100
//		0 <= t.length <= 104
//		s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

bool isSubsequence(char *s, char *t)
{
  while (*t && *s)
  {
    if (*s == *t)
      s++;
    t++;
  }
  return *s == 0;
}

int main(void)
{
  bool ex1 = isSubsequence("abc", "ahbgdc"); // true
  bool ex2 = isSubsequence("axc", "ahbgdc"); // false
}

// 100% runtime

bool topVotedIsSubsequence(char *s, char *t)
{
  int i = strlen(s), j = strlen(t);
  i--, j--;

  while (i >= 0 && j >= 0)
  {
    if (s[i] == t[j])
      i--, j--;
    else
      j--;
  }

  if (i >= 0)
    return false;
  return true;
} */

// Convert a Number to Hexadecimal					10/26/2023
/*
// Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

// Note: You are not allowed to use any built-in library method to directly solve this problem.

// Example 1:
// 		Input: num = 26
// 		Output: "1a"

// Example 2:
// 		Input: num = -1
// 		Output: "ffffffff"

// Constraints:
//		-2^31 <= num <= 2^31 - 1

char *topVotedToHex(int num)
{
  char *hex = (char *)malloc(sizeof(char) * 10);
  char nib;
  int i = 0;
  unsigned int x = num;
  hex[9] = '\0';
  while (1)
  {
    nib = (x & 0xF);
    hex[8 - i] = (nib > 9) ? ('a' + nib - 10) : ('0' + nib);
    x >>= 4;
    if (!x)
      break;
    i++;
  }
  return &hex[8 - i];
}

int main(void)
{
  topVotedToHex(26); // "1a"
  topVotedToHex(-1); // "ffffffff"
}

//  couldn't get it working

// "The expression set >>= 1; means set = set >> 1; that is right shift bits of set by 1"
// "Additionally, because you are shifting all bits to right (towards lower significant number) so one right shift is = divide number by two."

// Basically dividing by 16 with "x >>= 4"

// I believe "nib = (x & 0xF);" is remainder of x/16 */

// Longest Palindrome					10/27/2023
/*
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:
// 		Input: s = "abccccdd"
// 		Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// 		Input: s = "a"
// 		Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// Constraints:
//		1 <= s.length <= 2000
//		s consists of lowercase and/or uppercase English letters only.

int longestPalindrome(char *s)
{
  int res = 0;
  int count['z' - 'A' + 1] = {0};

  int sSize = strlen(s);
  for (int i = 0; i < sSize; i++)
  {
    count[s[i] - 'A'] = count[s[i] - 'A'] == 0 ? 1 : 0;

    if (count[s[i] - 'A'] == 0)
      res += 2;
  }

  for (int i = 0; i < 'z' - 'A'; i++)
  {
    if (count[i] == 1)
    {
      res++;
      break;
    }
  }

  return res;
}

int main(void)
{
  int ex1 = longestPalindrome("abccccdd"); // 7
  int ex2 = longestPalindrome("a");        // 1
}

int topVotedLongestPalindrome(char *s)
{
  int count[58]; // ASCII A-z
  memset(count, 0x0, 58 * sizeof(int));
  int len = strlen(s);

  for (int i = 0; i < len; ++i)
    count[s[i] - 'A']++;

  int result = 0;
  for (int i = 0; i < 58; ++i)
    result += count[i] / 2 * 2;

  if (result < len)
    result++;

  return result;
}

//  "if (result < len)" is much better than my second loop

int revisedLongestPalindrome(char *s)
{
  int res = 0;
  int count['z' - 'A' + 1] = {0};

  int sSize = strlen(s);
  for (int i = 0; i < sSize; i++)
  {
    count[s[i] - 'A']++;

    if (count[s[i] - 'A'] == 2)
    {
      res += 2;
      count[s[i] - 'A'] = 0;
    }
  }

  if (res < sSize)
    res++;

  return res;
} */

// Fizz Buzz					10/28/2023
/*
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:
// 		Input: n = 3
// 		Output: ["1","2","Fizz"]

// Example 2:
// 		Input: n = 5
// 		Output: ["1","2","Fizz","4","Buzz"]

// Example 3:
// 		Input: n = 15
// 		Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraints:
//		1 <= n <= 104

char **fizzBuzz(int n, int *returnSize)
{
  char **res;
  *res = (char *)malloc(8);

  while (n > 0)
  {
    if (n % 3 == 0 && n % 5 == 0)
      strcpy(res[n - 1], "FizzBuzz");
    else if (n % 3 == 0)
      strcpy(res[n - 1], "Fizz");
    else if (n % 5 == 0)
      strcpy(res[n - 1], "Buzz");
    else
    {
      char c = n + '0';
      strcpy(res[n - 1], &c);
    }
    n--;
  }

  return res;
}

// Doesn't work
// Need to learn proper returnSize and malloc

char **topVotedFizzBuzz(int n, int *returnSize)
{
  int i;
  *returnSize = n; // since n = number of elements to be returned
  char **answer;   // the string of strings where the right elements will be copied
  char str[5];     // every string contains at most 5 character (max number is 10000 => 5 characters)

  i = 1; // first number we want to return is 1
  answer = NULL;
  answer = malloc(sizeof(*answer) * n); // our string of strings will have the same number of element than the returning one (n)
  if (!answer)
    return (answer); // securizing our malloc => returning NULL if something went wrong
  while (i <= n)
  {
    if (i % 15 == 0)
      answer[i - 1] = strdup("FizzBuzz"); // NB we need to start duplicating from position 0 => (i - 1)
    else if (i % 3 == 0)
      answer[i - 1] = strdup("Fizz");
    else if (i % 5 == 0)
      answer[i - 1] = strdup("Buzz");
    else
    {
      sprintf(str, "%d", i); // converting integer i into char and storing it in str
      answer[i - 1] = strdup(str);
    }
    i++;
  }
  return (answer);
}

char **revisedFizzBuzz(int n, int *returnSize)
{
  int i;
  *returnSize = n;
  char **res;
  char str[5];

  i = 1;
  res = NULL;
  res = malloc(sizeof(*res) * n);

  while (i <= n)
  {
    if (i % 15 == 0)
      res[i - 1] = strdup("FizzBuzz");
    else if (i % 3 == 0)
      res[i - 1] = strdup("Fizz");
    else if (i % 5 == 0)
      res[i - 1] = strdup("Buzz");
    else
    {
      sprintf(str, "%d", i);
      res[i - 1] = strdup(str);
    }
    i++;
  }

  return res;
}

// strdup instead of strcpy, nice */

// Third Maximum Number					10/29/2023
/*
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:
// 		Input: nums = [3,2,1]
// 		Output: 1
// Explanation:
// 		The first distinct maximum is 3.
// 		The second distinct maximum is 2.
// 		The third distinct maximum is 1.

// Example 2:
// 		Input: nums = [1,2]
// 		Output: 2
// Explanation:
// 		The first distinct maximum is 2.
// 		The second distinct maximum is 1.
// 		The third distinct maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// 		Input: nums = [2,2,3,1]
// 		Output: 1
// Explanation:
// 		The first distinct maximum is 3.
// 		The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// 		The third distinct maximum is 1.

// Constraints:
//		1 <= nums.length <= 104
//		-231 <= nums[i] <= 231 - 1

// Follow up: Can you find an O(n) solution?

int dec(const void *a, const void *b)
{
  return (*(int *)b - *(int *)a);
}

int thirdMax(int *nums, int numsSize)
{
  qsort(nums, numsSize, sizeof(int), dec);

  int i = 0;
  while (*nums)
  {
    if (*nums != *(nums + 1))
      i++;
    if (i == 3)
      return *nums;
    nums++;
  }
  return *(nums - 1);
}

int main(void)
{
  int ex1 = thirdMax((int[]){3, 2, 1}, 3);    // 1
  int ex2 = thirdMax((int[]){1, 2}, 2);       // 2
  int ex3 = thirdMax((int[]){2, 2, 3, 1}, 4); // 1
}

// Runtime error in LeetCode

#include <limits.h>

int topVotedThirdMax(int *nums, int numsSize)
{
  int max_1 = nums[0];
  long max_2 = LONG_MIN;
  long max_3 = LONG_MIN;

  for (int i = 1; i < numsSize; i++)
  {
    if (nums[i] > max_1)
    {
      max_3 = max_2;
      max_2 = max_1;
      max_1 = nums[i];
    }
    else if (nums[i] > max_2 && nums[i] < max_1)
    {
      max_3 = max_2;
      max_2 = nums[i];
    }
    else if (nums[i] > max_3 && nums[i] < max_2)
    {
      max_3 = nums[i];
    }
  }
  return (max_3 == LONG_MIN) ? max_1 : max_3;
}

// Thought about this approach too
// Simpler is better */

// Number of Segments in a String					10/30/2023
/*
// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

// Example 1:
// 		Input: s = "Hello, my name is John"
// 		Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// Example 2:
// 		Input: s = "Hello"
// 		Output: 1

// Constraints:
//		0 <= s.length <= 300
//		s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
//		The only space character in s is ' '.

int countSegments(char *s)
{
  int count = 0;
  int sSize = strlen(s);

  int i = 0;
  if (s[0] == ' ')
    i++;

  for (; i < sSize; i++)
  {
    if (s[i] == ' ' && s[i - 1] != ' ')
      count++;
  }

  return count + (sSize > 0 && s[sSize - 1] != ' ' ? 1 : 0);
}

int main(void)
{
  int ex1 = countSegments("Hello, my name is John"); // 5
  int ex2 = countSegments("Hello");                  // 1
  int ex3 = countSegments("");                       // 0
  int ex4 = countSegments("           ");            // 0
}

// Bit scuffed, but 100% runtime

int topVotedCountSegments(char *s)
{
  int Segementcount = 0;

  if (s == NULL)
    return 0;

  char *token;
  token = strtok(s, " ");
  while (token != NULL)
  {
    token = strtok(NULL, " ");
    Segementcount++;
  }

  return Segementcount;
}

// "The C library function char *strtok(char *str, const char *delim) breaks string str into a series of tokens using the delimiter delim." */

// Arranging Coins					10/31/2023
/*
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// Example 1:
// 		Input: n = 5
// 		Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.

// Example 2:
// 		Input: n = 8
// 		Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.

// Constraints:
//		1 <= n <= 231 - 1

int arrangeCoins(int n)
{
  int rows = 0;
  for (int i = 1; i <= n; i++)
  {
    n -= i;
    rows++;
  }
  return rows;
}

int main(void)
{
  int ex1 = arrangeCoins(5); // 2
  int ex2 = arrangeCoins(8); // 3
}

int topVotedArrangeCoins(int n)
{
  return (int)floor(-0.5 + sqrt((double)2 * n + 0.25));
} */

// Find All Numbers Disappeared in an Array					11/1/2023
/*
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// 		Input: nums = [4,3,2,7,8,2,3,1]
// 		Output: [5,6]

// Example 2:
// 		Input: nums = [1,1]
// 		Output: [2]

// Constraints:
//		n == nums.length
//		1 <= n <= 105
//		1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

int inc(const void *a, const void *b)
{
  return (*(int *)a - *(int *)b);
}

int *findDisappearedNumbers(int *nums, int numsSize, int *returnSize)
{
  int *res = malloc(sizeof(int) * numsSize);

  qsort(nums, numsSize, sizeof(int), inc);
  int i = 1;
  while (i <= numsSize)
  {
    while (*nums < i)
      nums++;
    while (*nums > i)
    {
      *res = i;
      i++;
      res++;
    }
    i++;
    nums++;
  }

  *res = '\0';
  return res;
}

int main(void)
{
  findDisappearedNumbers((int[]){4, 3, 2, 7, 8, 2, 3, 1}, 8, 0); // [5,6]
  findDisappearedNumbers((int[]){1, 1}, 2, 0);                   // [2]
}

// Runtime error

int *topVotedFindDisappearedNumbers(int *const nums, const int numsSize, int *const resSize)
{
  int i, *res;

  for (i = 0; i < numsSize; ++i)
    nums[abs(nums[i]) - 1] = -abs(nums[abs(nums[i]) - 1]);

  res = malloc((*resSize = 0) * sizeof(int));

  for (i = 0; i < numsSize; ++i)
    if (nums[i] > 0)
    {
      res = realloc(res, ++*resSize * sizeof(int));
      res[*resSize - 1] = i + 1;
    }

  return res;
} */

// Assign Cookies					11/2/2023
/*
// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

// Example 1:
// 		Input: g = [1,2,3], s = [1,1]
// 		Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
// 		And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// 		You need to output 1.

// Example 2:
// 		Input: g = [1,2], s = [1,2,3]
// 		Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
// 		You have 3 cookies and their sizes are big enough to gratify all of the children,
// 		You need to output 2.

// Constraints:
//		1 <= g.length <= 3 * 10^4
//		0 <= s.length <= 3 * 10^4
//		1 <= g[i], s[j] <= 231 - 1

int inc(const void *a, const void *b)
{
  return (*(int *)a - *(int *)b);
}

int findContentChildren(int *kids, int kidsSize, int *cookies, int cookiesSize)
{
  qsort(cookies, cookiesSize, sizeof(int), inc);
  int contentChildren = 0;

  for (int i = 0; i < kidsSize; i++)
    for (int j = 0; j < cookiesSize; j++)
      if (cookies[j] != -1 && cookies[j] >= kids[i])
      {
        contentChildren++;
        cookies[j] = -1;
        break;
      }

  return contentChildren;
}

int main(void)
{
  int ex1 = findContentChildren((int[]){1, 2, 3}, 3, (int[]){1, 1}, 2); // 1
  int ex2 = findContentChildren((int[]){1, 2}, 2, (int[]){1, 2, 3}, 3); // 2
}

// Slow but works
// Managed to recall qsort without referencing anything :)

int cmp(const void *a, const void *b)
{
  return *(int *)a - *(int *)b;
}
int topVotedFindContentChildren(int *g, int gSize, int *s, int sSize)
{
  // Sort the children's and cookie's sizes in non-decreasing order
  qsort(g, gSize, sizeof(int), cmp);
  qsort(s, sSize, sizeof(int), cmp);

  // Initialize variables for the current child and cookie indices
  int i = 0, j = 0;

  // Iterate through the children and try to assign cookies to them
  while (i < gSize && j < sSize)
  {
    // If the current cookie is big enough to satisfy the current child, move to the next child and cookie
    if (s[j] >= g[i])
    {
      i++;
      j++;
    }
    // Otherwise, move to the next cookie
    else
    {
      j++;
    }
  }

  // Return the number of satisfied children
  return i;
}

int revisedFindContentChildren(int *g, int gSize, int *s, int sSize)
{
  qsort(g, gSize, sizeof(int), inc);
  qsort(s, sSize, sizeof(int), inc);

  int kidIdx = 0, cookieIdx = 0;
  while (kidIdx < gSize && cookieIdx < sSize)
  {
    if (s[cookieIdx] >= g[kidIdx])
      kidIdx++;
    cookieIdx++;
  }

  return kidIdx;
} */

// Repeated Substring Pattern					11/3/2023
/*
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:
// 		Input: s = "abab"
// 		Output: true
// Explanation: It is the substring "ab" twice.

// Example 2:
// 		Input: s = "aba"
// 		Output: false

// Example 3:
// 		Input: s = "abcabcabcabc"
// 		Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

// Constraints:
//		1 <= s.length <= 104
//		s consists of lowercase English letters.

bool repeatedSubstringPattern(char *s)
{
  int sSize = strlen(s);
  if (sSize == 1)
    return false;

  char sub[sSize / 2 + 1];

  for (int i = 0; i <= sSize / 2; i++)
  {
    if (sSize % (i + 1) != 0) // incompatible substring length
      continue;

    sub[i] = s[i]; // add char to substring
    sub[i + 1] = '\0';

    char rep[sSize + 1]; // repeat substring until matches s length
    rep[0] = '\0';
    while (strlen(rep) <= sSize)
      strcat(rep, sub);

    if (strcmp(rep, s) == 0) // compare the two
      return true;
  }

  return false;
}

// int main(void)
// {
//   bool ex1 = repeatedSubstringPattern("abab");               // true
//   bool ex2 = repeatedSubstringPattern("aba");                // false
//   bool ex3 = repeatedSubstringPattern("abcabcabcabc");       // true
//   bool ex4 = repeatedSubstringPattern("ababba");             // false
//   bool ex5 = repeatedSubstringPattern("abaababaab"); // true
// }

// "abaababaab" expects true

#include <stdbool.h>
#include <string.h>

bool topVotedRepeatedSubstringPattern(char *s)
{
  int n = strlen(s);

  // Check divisors of n
  for (int i = 1; i <= n / 2; i++)
  {
    if (n % i == 0)
    {
      int numRepeats = n / i;

      // Create the potential substring
      char substring[i + 1];
      strncpy(substring, s, i);
      substring[i] = '\0';

      // Construct the repeated string
      char repeatedString[n + 1];
      repeatedString[0] = '\0';
      for (int j = 0; j < numRepeats; j++)
        strcat(repeatedString, substring);

      // Check if the constructed string matches the original string
      if (strcmp(repeatedString, s) == 0)
      {
        return true;
      }
    }
  }

  return false;
}

int main(void)
{
  bool ex5 = topVotedRepeatedSubstringPattern("abaababaab"); // true
}

// Similar, but passes
// Something to do with how repeatedString is built */

// Hamming Distance					11/4/2023
/*
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

// Example 1:
// 		Input: x = 1, y = 4
// 		Output: 2
// Explanation:
// 		1   (0 0 0 1)
// 		4   (0 1 0 0)
// 		       ↑   ↑
// 		The above arrows point to positions where the corresponding bits are different.

// Example 2:
// 		Input: x = 3, y = 1
// 		Output: 1

// Constraints:
//		0 <= x, y <= 231 - 1

int hammingDistance(int x, int y)
{
  int dif = 0;
  while (x > 0 || y > 0)
  {
    if ((x & 1) != (y & 1))
      dif++;
    x = x >> 1;
    y = y >> 1;
  }
  return dif;
}

int main(void)
{
  printf("%d\n", hammingDistance(1, 4)); // 2
  printf("%d\n", hammingDistance(3, 1)); // 1
}

// 100% Runtime
// first time really using bitwise

int topVotedHammingDistance(int x, int y)
{
  int d = 0, n = x ^ y;
  while (n)
  {
    n &= n - 1;
    d++;
  }
  return d;
}

// Brian Kernighan's algorithm */

// Island Perimeter					11/5/2023
/*
// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example 1:
// 		Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// 		Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
// 		Input: grid = [[1]]
// 		Output: 4

// Example 3:
// 		Input: grid = [[1,0]]
// 		Output: 4

// Constraints:
//		row == grid.length
//		col == grid[i].length
//		1 <= row, col <= 100
//		grid[i][j] is 0 or 1.
//		There is exactly one island in grid.

int islandPerimeter(int **grid, int gridSize, int *gridColSize)
{
  int perim = 0;
  for (int r = 0; r < gridSize; r++)
    for (int c = 0; c < *gridColSize; c++)
      if (grid[r][c] == 1)
      {
        int count = 4;
        if (grid[r - 1] && grid[r - 1][c] == 1)
          count--;
        if (grid[r + 1] && grid[r + 1][c] == 1)
          count--;
        if (grid[r][c - 1] && grid[r][c - 1] == 1)
          count--;
        if (grid[r][c - 1] && grid[r][c + 1] == 1)
          count--;
        perim += count;
      }

  return perim;
}

int main(void)
{
  int ex1[4][4] = {{0, 1, 0, 0},
                   {1, 1, 1, 0},
                   {0, 1, 0, 0},
                   {1, 1, 0, 0}};
  int colSize = 4;

  printf("%d", islandPerimeter(ex1, 4, &colSize)); // 16
}

// Runtime error

int dfs(int **grid, int r, int c, int gridSize, int *gridColSize)
{
  if (r < 0 || c < 0 || r >= gridSize || c >= *gridColSize || grid[r][c] == 0)
    return 1;
  if (grid[r][c] == 2)
    return 0;

  grid[r][c] = 2;
  return dfs(grid, r + 1, c, gridSize, gridColSize) + dfs(grid, r - 1, c, gridSize, gridColSize) +
         dfs(grid, r, c + 1, gridSize, gridColSize) + dfs(grid, r, c - 1, gridSize, gridColSize);
}

int topVotedIslandPerimeter(int **grid, int gridSize, int *gridColSize)
{
  for (int r = 0; r < gridSize; r++)
  {
    for (int c = 0; c < *gridColSize; c++)
    {
      if (grid[r][c] == 1)
        return dfs(grid, r, c, gridSize, gridColSize);
    }
  }
  return 0;
} */

// Number Complement					11/6/2023
/*
// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.

// Given an integer num, return its complement.

// Example 1:
// 		Input: num = 5
// 		Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// Example 2:
// 		Input: num = 1
// 		Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

// Constraints:
//		1 <= num < 231

// Note: This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

int findComplement(int num)
{
  double max = pow(2, ceil(log2(num))) - 1;
  return max - num;
}

int main(void)
{
  printf("%d\n", findComplement(5)); // 2
  printf("%d\n", findComplement(1)); // 0
  printf("%d\n", findComplement(2)); // 1
}

// not working cause of leading 0s

int topVotedFindComplement(int num)
{
  int temp = num, c = 0;
  while (temp > 0)
  {
    c = (c << 1) | 1;
    temp >>= 1;
  }
  return num ^ c;
}

// Ex: 5 (101)
// after while: c = 111
// num ^ c (XOR) = 101 ^ 111 = 010 (2) */

// License Key Formatting					11/7/2023
/*
// You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

// We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

// Return the reformatted license key.

// Example 1:
// 		Input: s = "5F3Z-2e-9-w", k = 4
// 		Output: "5F3Z-2E9W"
// Explanation: The string s has been split into two parts, each part has 4 characters.
// 		Note that the two extra dashes are not needed and can be removed.

// Example 2:
// 		Input: s = "2-5g-3-J", k = 2
// 		Output: "2-5G-3J"
// Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.

// Constraints:
//		1 <= s.length <= 105
//		s consists of English letters, digits, and dashes '-'.
//		1 <= k <= 104

char *licenseKeyFormatting(char *s, int k)
{
  int charCount = 0;
  int sSize = strlen(s);
  for (int i = 0; i < sSize; i++)
    if (s[i] != '-')
      charCount++;
  if (charCount == 0)
    return NULL;

  int first = charCount % k;
  char *res = malloc(2 * sSize * sizeof(char));

  int i = 0;
  while (first-- > 0)
  {
    while (*s == '-')
      s++;

    res[i] = toupper(*s);
    i++;
    s++;

    if (first == 0 && charCount >= k)
    {
      res[i] = '-';
      i++;
    }
  }

  int curK = k;
  while (*s)
  {
    if (*s != '-')
    {
      res[i] = toupper(*s);
      curK--;
      i++;

      if (curK == 0)
      {
        res[i] = '-';
        curK = k;
        i++;
      }
    }
    s++;
  }

  res[i - 1] = '\0';
  return res;
}

int main(void)
{
  printf("%s\n", licenseKeyFormatting("5F3Z-2e-9-w", 4)); // "5F3Z-2E9W"
  printf("%s\n", licenseKeyFormatting("2-5g-3-J", 2));    // "2-5G-3J"
  printf("%s\n", licenseKeyFormatting("2-4A0r7-4k", 3));  // "24-A0R-74K"
}

// Could definitely shorten it

char convert(char c)
{
  if (c >= 'a' && c <= 'z')
    return c - 0x20;
  else
    return c;
}

char *topVotedLicenseKeyFormatting(char *s, int k)
{
  int len = strlen(s), size = len + len / k + 1, counter = 0;
  char *ans = (char *)calloc(size, sizeof(char));
  ans[--size] = '\0';
  for (int i = len - 1; i >= 0; i--)
  {
    if (s[i] == '-')
      continue;
    ans[--size] = convert(s[i]);
    counter++;
    if (counter == k && i != 0)
    {
      ans[--size] = '-';
      counter = 0;
    }
  }
  // no leading '-'
  if (ans[size] == '-')
    size++;
  return ans + size;
} */

// Max Consecutive Ones					11/8/2023
/*
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// 		Input: nums = [1,1,0,1,1,1]
// 		Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:
// 		Input: nums = [1,0,1,1,0,1]
// 		Output: 2

// Constraints:
//		1 <= nums.length <= 105
//		nums[i] is either 0 or 1.

int findMaxConsecutiveOnes(int *nums, int numsSize)
{
  int max = 0;
  int count = 0;

  while (numsSize-- > 0)
  {
    *(nums++) == 1 ? count++ : (count = 0);

    if (count > max)
      max = count;
  }

  return max;
}

int main(void)
{
  printf("%d\n", findMaxConsecutiveOnes((int[]){1, 1, 0, 1, 1, 1}, 6)); // 3
  printf("%d\n", findMaxConsecutiveOnes((int[]){1, 0, 1, 1, 0, 1}, 6)); // 2
}

int topVotedFindMaxConsecutiveOnes(int *nums, int numsSize)
{
  int max = 0;
  int count = 0;
  for (int i = 0; i < numsSize; i++)
  {
    if (nums[i] == 0)
      count = 0;
    else if (nums[i] == 1)
      count++;
    if (count > max)
      max = count;
  }
  return max;
}

// same same */

// Construct the Rectangle					11/9/2023
/*
// A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

// The area of the rectangular web page you designed must equal to the given target area.

// The width W should not be larger than the length L, which means L >= W.

// The difference between length L and width W should be as small as possible.

// Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.

// Example 1:
// 		Input: area = 4
// 		Output: [2,2]
// Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
// 		But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.

// Example 2:
// 		Input: area = 37
// 		Output: [37,1]

// Example 3:
// 		Input: area = 122122
// 		Output: [427,286]

// Constraints:
//		1 <= area <= 107

int *constructRectangle(int area, int *returnSize)
{
  int *res = malloc(2 * sizeof(int));

  for (int l = 1; l <= area / 2 + 1; l++)
  {
    for (int r = l; r * l <= area; r++)
    {
      if (l * r == area)
      {
        res[0] = l;
        res[1] = r;
      }
    }
  }

  return res;
}

int main(void)
{
  int retSize = 2 * sizeof(int);
  int *ex1 = constructRectangle(4, &retSize);      // [2,2]
  int *ex2 = constructRectangle(37, &retSize);     // [37,1]
  int *ex3 = constructRectangle(122122, &retSize); // [427,286]
}

// 'r * l <= area' overflows

int *topVotedConstructRectangle(int area, int *returnSize)
{
  int *arr = (int *)malloc(sizeof(int) * 2);
  int width = sqrt(area);
  while (area % width != 0)
    width--;
  arr[0] = area / width;
  arr[1] = width;
  *returnSize = 2;
  return arr;
}

// Much better than my brute force

int *revisedConstructRectangle(int area, int *retSize)
{
  *retSize = 2;
  int *res = malloc(2 * sizeof(int));

  int width = sqrt(area);
  while (area % width != 0)
    width--;

  res[0] = area / width;
  res[1] = width;

  return res;
} */

// Teemo Attacking					11/10/2023
/*
// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

// Return the total number of seconds that Ashe is poisoned.

// Example 1:
// 		Input: timeSeries = [1,4], duration = 2
// 		Output: 4
// Explanation: Teemo's attacks on Ashe go as follows:
// 		- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// 		- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
// 		Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.

// Example 2:
// 		Input: timeSeries = [1,2], duration = 2
// 		Output: 3
// Explanation: Teemo's attacks on Ashe go as follows:
// 		- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// 		- At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
// 		Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.

// Constraints:
//		1 <= timeSeries.length <= 104
//		0 <= timeSeries[i], duration <= 107
//		timeSeries is sorted in non-decreasing order.

int findPoisonedDuration(int *timeSeries, int timeSeriesSize, int duration)
{
  int time = duration;
  for (int i = 1; i < timeSeriesSize; i++)
  {
    int dif = timeSeries[i] - timeSeries[i - 1];
    if (dif < duration)
      time -= duration - dif;
    time += duration;
  }
  return time;
}

int main(void)
{
  printf("%d\n", findPoisonedDuration((int[]){1, 4}, 2, 2));          // 4
  printf("%d\n", findPoisonedDuration((int[]){1, 2}, 2, 2));          // 3
  printf("%d\n", findPoisonedDuration((int[]){1, 2, 3, 4, 5}, 5, 5)); // 9
}

int topVotedFindPoisonedDuration(int *timeSeries, int timeSeriesSize, int duration)
{
  int total = 0;
  for (int i = 0; i < timeSeriesSize - 1; i++)
  {
    if (timeSeries[i] + duration > timeSeries[i + 1])
      total += timeSeries[i + 1] - timeSeries[i];
    else
      total += duration;
  }
  return total + duration;
}

// same idea */

// Next Greater Element I					11/11/2023
/*
// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:
// 		Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// 		Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// 		- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// 		- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// 		- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:
// 		Input: nums1 = [2,4], nums2 = [1,2,3,4]
// 		Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// 		- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// 		- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// Constraints:
//		1 <= nums1.length <= nums2.length <= 1000
//		0 <= nums1[i], nums2[i] <= 104
//		All integers in nums1 and nums2 are unique.
//		All the integers of nums1 also appear in nums2.

// Follow up: Could you find an O(nums1.length + nums2.length) solution?

int *nextGreaterElement(int *nums1, int nums1Size, int *nums2, int nums2Size, int *returnSize)
{
  *returnSize = nums1Size;

  // Create array of next greatest element in nums2
  int next[nums2Size];
  for (int i = 0; i < nums2Size; i++)
  {
    next[i] = -1;
    for (int j = i + 1; j < nums2Size; j++)
    {
      if (nums2[j] > nums2[i])
      {
        next[i] = nums2[j];
        break;
      }
    }
  }

  // Find index of nums1 in nums2 then take element of that index from 'next'
  int *res = malloc(*returnSize * sizeof(int));
  for (int i = 0; i < nums1Size; i++)
  {
    for (int j = 0; j < nums2Size; j++)
    {
      if (nums1[i] == nums2[j])
      {
        res[i] = next[j];
        break;
      }
    }
  }

  return res;
}

int main(void)
{
  int ret = 0;
  int *ex1 = nextGreaterElement((int[]){4, 1, 2}, 3, (int[]){1, 3, 4, 2}, 4, &ret); // [-1,3,-1]
  int *ex2 = nextGreaterElement((int[]){2, 4}, 2, (int[]){1, 2, 3, 4}, 4, &ret);    // [3,-1]
}

// First time getting *returnSize and malloc
// Helpful that we covered them in class :^)

int *topVotedNextGreaterElement(int *nums1, int nums1Size, int *nums2, int nums2Size, int *returnSize)
{
  int *result = (int *)malloc(nums1Size * sizeof(int));
  *returnSize = nums1Size;

  int count = 0;
  int temp[10000] = {0};

  for (int i = 0; i < nums2Size; i++)
    temp[nums2[i]] = i;

  for (int i = 0; i < nums1Size; i++)
  {
    int j;
    for (j = temp[nums1[i]] + 1; j < nums2Size; j++)
      if (nums2[j] > nums1[i])
      {
        result[count++] = nums2[j];
        break;
      }
    if (j == nums2Size)
      result[count++] = -1;
  }

  return result;
} */

// Keyboard Row					11/12/2023
/*
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",

// the second row consists of the characters "asdfghjkl", and

// the third row consists of the characters "zxcvbnm".

// Example 1:
// 		Input: words = ["Hello","Alaska","Dad","Peace"]
// 		Output: ["Alaska","Dad"]

// Example 2:
// 		Input: words = ["omk"]
// 		Output: []

// Example 3:
// 		Input: words = ["adsdf","sfd"]
// 		Output: ["adsdf","sfd"]

// Constraints:
//		1 <= words.length <= 20
//		1 <= words[i].length <= 100
//		words[i] consists of English letters (both lowercase and uppercase).

char **findWords(char **words, int wordsSize, int *returnSize)
{
  char keyboard[3][10] = {"qwertyuiop", "asdfghjkl", "zxcvbnm"};

  char **res = (char **)malloc(wordsSize * sizeof(char *)); // taken from top voted
  int i = 0;
  while (wordsSize-- > 0)
  {
    int row = 0;
    if (strchr(keyboard[1], words[i][0]))
      row = 1;
    else if (strchr(keyboard[2], words[i][0]))
      row = 2;

    bool valid = true;
    while (*(words++)[i])
    {
      if (strchr(keyboard[row], *words[i]) == NULL)
      {
        valid = false;
        break;
      }
    }
    if (valid)
      strcpy(res++, words[i]);
  }

  return res;
}

int main(void)
{
  int ret = 0;
  char ex1[4][6] = {"Hello", "Alaska", "Dad", "Peace"};
  findWords(ex1, 4, &ret); // ["Alaska","Dad"]
}

// 'Incompatible values types', sending ex1[][] instead of char **
// Not sure how to send 2d array, and can't troubleshoot without it

bool checkWord(char *word)
{
  char count[26] = {2, 3, 3, 2, 1, 2, 2, 2, 1, 2, 2, 2, 3, 3, 1, 1, 1, 1, 2, 1, 1, 3, 1, 3, 1, 3};
  for (int i = 1; i < strlen(word); i++)
    if (count[tolower(word[i - 1]) - 'a'] != count[tolower(word[i]) - 'a'])
      return false;
  return true;
}
char **topVotedFindWords(char **words, int wordsSize, int *returnSize)
{
  char **result = (char **)malloc(wordsSize * sizeof(char *));
  int count = 0;
  for (int i = 0; i < wordsSize; i++)
    if (checkWord(words[i]))
    {
      result[count] = (char *)malloc((strlen(words[i]) + 1) * sizeof(char));
      strcpy(result[count++], words[i]);
    }
  *returnSize = count;
  return result;
} */

// Base 7					11/13/2023
/*
// Given an integer num, return a string of its base 7 representation.

// Example 1:
// 		Input: num = 100
// 		Output: "202"

// Example 2:
// 		Input: num = -7
// 		Output: "-10"

// Constraints:
//		-107 <= num <= 107

char *convertToBase7(int num)
{
  if (num == 0)
    return "0";

  char *res = (char *)malloc(12 * sizeof(char));
  int i = 0;

  int neg = num < 0;
  if (neg)
  {
    num = abs(num);
    res[i++] = '-';
  }

  while (num > 0)
  {
    res[i++] = (char)(num % 7);
    num /= 7;
  }

  return res;
}

int main(void)
{
  printf("%s", convertToBase7(100)); // "202"
  printf("%s", convertToBase7(-7));  // "-10"
}

char *topVotedConvertToBase7(int num)
{
  if (num == 0)
    return "0";

  char *result = (char *)malloc(12 * sizeof(char));
  int count = 0;

  bool checkNeg = num < 0 ? true : false;

  if (num < 0)
    num = abs(num);

  while (num > 0)
  {
    result[count++] = num % 7 + '0';
    num /= 7;
  }

  if (checkNeg)
    result[count++] = '-';

  for (int i = 0; i < count / 2; i++)
  {
    int temp = result[i];
    result[i] = result[count - i - 1];
    result[count - i - 1] = temp;
  }

  result[count] = 0;
  return result;
} */

// Relative Ranks					11/14/2023
/*
// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".

// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").

// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Example 1:
// 		Input: score = [5,4,3,2,1]
// 		Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// Example 2:
// 		Input: score = [10,3,8,9,4]
// 		Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

// Constraints:
//		n == score.length
//		1 <= n <= 104
//		0 <= score[i] <= 106
//		All the values in score are unique.

char **findRelativeRanks(int *score, int scoreSize, int *returnSize)
{
  // Rank every element in score array
  int rank[scoreSize];
  for (int i = 0; i < scoreSize; i++)
  {
    int el_rank = 1;

    for (int j = 0; j < scoreSize; j++)
      if (score[j] > score[i])
        el_rank++;

    rank[i] = el_rank;
  }

  // malloc
  *returnSize = scoreSize;
  char **res = (char **)malloc((*returnSize) * sizeof(char *)); // taken from top voted
  for (int i = 0; i < (*returnSize); i++)
    res[i] = (char *)malloc(13 * sizeof(char));

  // Filled res based on rank
  for (int i = 0; i < scoreSize; i++)
  {
    if (rank[i] > 3)
      sprintf(res[i], "%d", rank[i]);
    else if (rank[i] == 3)
      res[i] = "Bronze Medal";
    else if (rank[i] == 2)
      res[i] = "Silver Medal";
    else if (rank[i] == 1)
      res[i] = "Gold Medal";
  }

  return res;
}

int main(void)
{
  int ret = 5;
  findRelativeRanks((int[]){5, 4, 3, 2, 1}, 5, &ret);  // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
  findRelativeRanks((int[]){10, 3, 8, 9, 4}, 5, &ret); // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
}

// Slow but works

struct pair
{
  int idx;
  int score;
};

int cmp(const void *a, const void *b)
{
  struct pair pa = *(const struct pair *)a;
  struct pair pb = *(const struct pair *)b;
  return pb.score - pa.score;
}

char **topVotedFindRelativeRanks(int *score, int scoreSize, int *returnSize)
{
  struct pair *arr = (struct pair *)calloc(scoreSize, sizeof(struct pair));
  for (int i = 0; i < scoreSize; i++)
  {
    arr[i].idx = i;
    arr[i].score = score[i];
  }
  qsort(arr, scoreSize, sizeof(struct pair), cmp);
  *returnSize = scoreSize;
  char **res = (char **)malloc((*returnSize) * sizeof(char *));
  for (int i = 0; i < (*returnSize); i++)
  {
    res[i] = (char *)malloc(13 * sizeof(char));
  }
  for (int i = 0; i < scoreSize; i++)
  {
    if (i == 0)
    {
      res[arr[0].idx] = "Gold Medal";
    }
    else if (i == 1)
    {
      res[arr[1].idx] = "Silver Medal";
    }
    else if (i == 2)
    {
      res[arr[2].idx] = "Bronze Medal";
    }
    else
    {
      sprintf(res[arr[i].idx], "%d", i + 1);
    }
  }
  free(arr);
  return res;
}

// Pair and sorting saves from having nested for loop */

// Perfect Number					11/15/2023

// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

// Example 1:
// 		Input: num = 28
// 		Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 		1, 2, 4, 7, and 14 are all divisors of 28.

// Example 2:
// 		Input: num = 7
// 		Output: false

// Constraints:
//		1 <= num <= 108

bool checkPerfectNumber(int num)
{
  int count = 0;
  for (int i = 1; i <= num / 2; i++)
    if (num % i == 0)
      count += i;
  return count == num;
}

int main(void)
{
  printf("%d", checkPerfectNumber(28)); // true
  printf("%d", checkPerfectNumber(7));  // false
  printf("%d", checkPerfectNumber(2));  // false
  printf("%d", checkPerfectNumber(1));  // false
}

// Same as top voted
