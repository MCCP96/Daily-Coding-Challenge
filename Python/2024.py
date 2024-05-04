import collections
import math

# Two Sum					1/12/2024
""" 
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

# Example 1:
# 		Input: nums = [2,7,11,15], target = 9
# 		Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

# Example 2:
# 		Input: nums = [3,2,4], target = 6
# 		Output: [1,2]

# Example 3:
# 		Input: nums = [3,3], target = 6
# 		Output: [0,1]

# Constraints:
# 		2 <= nums.length <= 104
# 		-109 <= nums[i] <= 109
# 		-109 <= target <= 109
# 		Only one valid answer exists.

# Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


class Solution(object):
    def twoSum(self, nums, t):
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == t:
                    return [i, j]

    print(twoSum(0, [2, 7, 11, 15], 9))  # [0,1]
    print(twoSum(0, [3, 2, 4], 6))  # [1,2]
    print(twoSum(0, [3, 3], 6))  # [0,1]


# Took some googling, but we got there

# Seems we will be doing both Java and Python this semester
# Given Java is a lot like C, I'm going to study Python here as I'm least comfortable with it """

# Palindrome Number					1/13/2024
""" 
# Given an integer x, return true if x is a palindrome, and false otherwise.

# Example 1:
# 		Input: x = 121
# 		Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.

# Example 2:
# 		Input: x = -121
# 		Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

# Example 3:
# 		Input: x = 10
# 		Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

# Constraints:
# 		-231 <= x <= 231 - 1

# Follow up: Could you solve it without converting the integer to a string?


class Solution(object):
    def isPalindrome(self, x):
        if x < 0 or x != 0 and x % 10 == 0:
            return False

        half = 0
        while x > half:
            half = half * 10 + x % 10
            x /= 10

        return x == half or x == half / 10

    print(isPalindrome(None, 121))  # true
    print(isPalindrome(None, -121))  # false
    print(isPalindrome(None, 10))  # false


# Just did this one in C
# 'or x == half/10' covers numbers of odd length

# Same as top voted """

# Roman to Integer					1/14/2024
""" 
# Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

# Symbol       Value
# I             1
# V             5
# X             10
# L             50
# C             100
# D             500
# M             1000

# For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

# Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

# I can be placed before V (5) and X (10) to make 4 and 9.
# X can be placed before L (50) and C (100) to make 40 and 90.
# C can be placed before D (500) and M (1000) to make 400 and 900.

# Given a roman numeral, convert it to an integer.

# Example 1:
# 		Input: s = "III"
# 		Output: 3
# Explanation: III = 3.

# Example 2:
# 		Input: s = "LVIII"
# 		Output: 58
# Explanation: L = 50, V= 5, III = 3.

# Example 3:
# 		Input: s = "MCMXCIV"
# 		Output: 1994
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

# Constraints:
# 		1 <= s.length <= 15
# 		s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
# 		It is guaranteed that s is a valid roman numeral in the range [1, 3999].


class Solution(object):
    def romanToInt(self, s):
        roman = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        prev = ""
        res = 0

        for c in s:
            res += roman[c]
            if (c == "V" or c == "X") and prev == "I":
                res -= 2
            elif (c == "L" or c == "C") and prev == "X":
                res -= 20
            elif (c == "D" or c == "M") and prev == "C":
                res -= 200
            prev = c

        return res

    print(romanToInt(None, "III"))  #  3
    print(romanToInt(None, "LVIII"))  #  58
    print(romanToInt(None, "MCMXCIV"))  #  1994


# Nice


class Solution:
    def romanToInt(self, s: str) -> int:
        translations = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        number = 0
        s = s.replace("IV", "IIII").replace("IX", "VIIII")
        s = s.replace("XL", "XXXX").replace("XC", "LXXXX")
        s = s.replace("CD", "CCCC").replace("CM", "DCCCC")
        for char in s:
            number += translations[char]
        return number


# "The Romans would most likely be angered by how it butchers their numeric system. Sorry guys."

# Haha great solution """

# Longest Common Prefix					1/15/2024
""" 
# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:
# 		Input: strs = ["flower","flow","flight"]
# 		Output: "fl"

# Example 2:
# 		Input: strs = ["dog","racecar","car"]
# 		Output: ""
# Explanation: There is no common prefix among the input strings.

# Constraints:
# 		1 <= strs.length <= 200
# 		0 <= strs[i].length <= 200
# 		strs[i] consists of only lowercase English letters.


class Solution(object):
    def longestCommonPrefix(self, strs):
        pref = strs[0]

        for i in range(1, len(strs)):
            cur = pref
            pref = ""

            for j in range(len(strs[i])):
                if (j < len(cur)) and (cur[j] == strs[i][j]):
                    pref += strs[i][j]
                else:
                    break

            if len(pref) == 0:
                break

        return pref

    print(longestCommonPrefix(None, ["flower", "flow", "flight"]))  # "fl"
    print(longestCommonPrefix(None, ["dog", "racecar", "car"]))  # ""
    print(longestCommonPrefix(None, ["", "b"]))  # ""


# Definitely still pretty stiff with python
# I'm sure knowing a few more string methods would speed this up


class Solution:
    def topVotedLongestCommonPrefix(self, strs: List[str]) -> str:
        pre = strs[0]

        for i in strs:
            while not i.startswith(pre):
                pre = pre[:-1]

        return pre


# '.startswith' is a good start """

# Valid Parentheses					1/16/2024
""" 
# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:
#   Open brackets must be closed by the same type of brackets.
#   Open brackets must be closed in the correct order.
#   Every close bracket has a corresponding open bracket of the same type.

# Example 1:
# 		Input: s = "()"
# 		Output: true

# Example 2:
# 		Input: s = "()[]{}"
# 		Output: true

# Example 3:
# 		Input: s = "(]"
# 		Output: false

# Constraints:
# 		1 <= s.length <= 104
# 		s consists of parentheses only '()[]{}'.


class Solution(object):
    def isValid(self, s):
        stack = []

        for c in s:
            if c in ["(", "{", "["]:
                stack.append(c)
            else:
                if len(stack) == 0:
                    return False

                prev = stack.pop()

                if (
                    (prev != "(" and c == ")")
                    or (prev != "{" and c == "}")
                    or (prev != "[" and c == "]")
                ):
                    return False

        return len(stack) == 0

    print(isValid(None, "()"))  #  true
    print(isValid(None, "()[]{}"))  #  true
    print(isValid(None, "(]"))  #  false


# Beats 95% of runtimes


class Solution(object):
    def topVotedIsValid(self, s):
        stack = []  # create an empty stack to store opening brackets
        for c in s:  # loop through each character in the string
            if c in "([{":  # if the character is an opening bracket
                stack.append(c)  # push it onto the stack
            else:  # if the character is a closing bracket
                if (
                    not stack
                    or (c == ")" and stack[-1] != "(")
                    or (c == "}" and stack[-1] != "{")
                    or (c == "]" and stack[-1] != "[")
                ):
                    return False
                stack.pop()
        return not stack


# 'not stack' is a great way of checking len(stack) == 0 """

# Merge Two Sorted Lists					1/17/2024
""" 
# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.

# Example 1:
# 		Input: list1 = [1,2,4], list2 = [1,3,4]
# 		Output: [1,1,2,3,4,4]

# Example 2:
# 		Input: list1 = [], list2 = []
# 		Output: []

# Example 3:
# 		Input: list1 = [], list2 = [0]
# 		Output: [0]

# Constraints:
# 		The number of nodes in both lists is in the range [0, 50].
# 		-100 <= Node.val <= 100
# 		Both list1 and list2 are sorted in non-decreasing order.


class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def mergeTwoLists(self, l1, l2):
        merged = ListNode(0)
        head = merged

        while l1 or l2:
            if l1 and not l2:
                merged.next = l1
                break
            elif l2 and not l1:
                merged.next = l2
                break
            elif l1.val <= l2.val:
                merged.next = l1
                l1 = l1.next
            else:
                merged.next = l2
                l2 = l2.next

            merged = merged.next

        return head.next


# Got it working


# iteratively
def topVotedMergeTwoLists1(self, l1, l2):
    dummy = cur = ListNode(0)
    while l1 and l2:
        if l1.val < l2.val:
            cur.next = l1
            l1 = l1.next
        else:
            cur.next = l2
            l2 = l2.next
        cur = cur.next
    cur.next = l1 or l2
    return dummy.next


# recursively
def topVotedMergeTwoLists2(self, l1, l2):
    if not l1 or not l2:
        return l1 or l2
    if l1.val < l2.val:
        l1.next = self.mergeTwoLists(l1.next, l2)
        return l1
    else:
        l2.next = self.mergeTwoLists(l1, l2.next)
        return l2


# in-place, iteratively
def topVotedMergeTwoLists(self, l1, l2):
    if None in (l1, l2):
        return l1 or l2
    dummy = cur = ListNode(0)
    dummy.next = l1
    while l1 and l2:
        if l1.val < l2.val:
            l1 = l1.next
        else:
            nxt = cur.next
            cur.next = l2
            tmp = l2.next
            l2.next = nxt
            l2 = tmp
        cur = cur.next
    cur.next = l1 or l2
    return dummy.next


# 'dummy = cur = ListNode(0)' and 'cur.next = l1 or l2' are nice """

# Remove Duplicates from Sorted Array					1/18/2024
""" 
# Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

# Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

# Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.

# Return k.

# Custom Judge:

# The judge will test your solution with the following code:
#   int[] nums = [...]; // Input array
#   int[] expectedNums = [...]; // The expected answer with correct length

#   int k = removeDuplicates(nums); // Calls your implementation

#   assert k == expectedNums.length;
#   for (int i = 0; i < k; i++) {
#       assert nums[i] == expectedNums[i];
#   }

# If all assertions pass, then your solution will be accepted.

# Example 1:
# 		Input: nums = [1,1,2]
# 		Output: 2, nums = [1,2,_]
# Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
# 		It does not matter what you leave beyond the returned k (hence they are underscores).

# Example 2:
# 		Input: nums = [0,0,1,1,1,2,2,3,3,4]
# 		Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
# Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
# 		It does not matter what you leave beyond the returned k (hence they are underscores).

# Constraints:
# 		1 <= nums.length <= 3 * 104
# 		-100 <= nums[i] <= 100
# 		nums is sorted in non-decreasing order.


class Solution(object):
    def removeDuplicates(self, nums):
        k = len(nums)
        seen = []
        for i in range(len(nums)):
            if nums[i] in seen:
                nums[i] = 101
                k -= 1
            else:
                seen.append(nums[i])
        nums.sort()
        return k

    print(removeDuplicates(None, [1, 1, 2]))  #  2, nums = [1,2,_]
    print(
        removeDuplicates(None, [0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
    )  #  5, nums = [0,1,2,3,4,_,_,_,_,_]


# 101 because '-100 <= nums[i] <= 100'


def removeDuplicates(self, nums: List[int]) -> int:
    nums[:] = sorted(set(nums))
    return len(nums)


# 'sort in place using [:]'! """

# Remove Element					1/19/2024
""" 
# Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

# Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

# Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.

# Return k.

# Custom Judge:

# The judge will test your solution with the following code:
#   int[] nums = [...]; // Input array
#   int val = ...; // Value to remove

#   int[] expectedNums = [...]; // The expected answer with correct length.
#   // It is sorted with no values equaling val.

#   int k = removeElement(nums, val); // Calls your implementation
#   assert k == expectedNums.length;
#   sort(nums, 0, k); // Sort the first k elements of nums

#   for (int i = 0; i < actualLength; i++) {
#       assert nums[i] == expectedNums[i];
#   }

# If all assertions pass, then your solution will be accepted.

# Example 1:
# 		Input: nums = [3,2,2,3], val = 3
# 		Output: 2, nums = [2,2,_,_]
# Explanation: Your function should return k = 2, with the first two elements of nums being 2.
# 		It does not matter what you leave beyond the returned k (hence they are underscores).

# Example 2:
# 		Input: nums = [0,1,2,2,3,0,4,2], val = 2
# 		Output: 5, nums = [0,1,4,0,3,_,_,_]
# Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
# 		Note that the five elements can be returned in any order.
# 		It does not matter what you leave beyond the returned k (hence they are underscores).

# Constraints:
# 		0 <= nums.length <= 100
# 		0 <= nums[i] <= 50
# 		0 <= val <= 100


class Solution(object):
    def removeElement(self, nums, val):
        def fn(n):
            return n != val

        nums[:] = filter(fn, nums)
        return len(nums)

    print(removeElement(None, [3, 2, 2, 3], 3))  #  2, nums = [2,2,_,_]
    print(
        removeElement(None, [0, 1, 2, 2, 3, 0, 4, 2], 2)
    )  #  5, nums = [0,1,4,0,3,_,_,_]


# Used yesterday's nums[:] for in-place operations


def topVotedRemoveElement(self, nums, val):
    i = 0
    for x in nums:
        if x != val:
            nums[i] = x
            i += 1
    return i """

# Find the Index of the First Occurrence in a String					1/20/2024
""" 
# Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

# Example 1:
# 		Input: haystack = "sadbutsad", needle = "sad"
# 		Output: 0
# Explanation: "sad" occurs at index 0 and 6.
# 		The first occurrence is at index 0, so we return 0.

# Example 2:
# 		Input: haystack = "leetcode", needle = "leeto"
# 		Output: -1
# Explanation: "leeto" did not occur in "leetcode", so we return -1.

# Constraints:
# 		1 <= haystack.length, needle.length <= 104
# 		haystack and needle consist of only lowercase English characters.


class Solution(object):
    def strStr(self, haystack, needle):
        try:
            return haystack.index(needle)
        except:
            return -1

    print(strStr(None, "sadbutsad", "sad"))  #  0
    print(strStr(None, "leetcode", "leeto"))  #  -1


# I'm suprised .index returns a ValueError when substring is not found instead of -1 like in JavaScript


def topVotedStrStr(self, haystack, needle):
    return haystack.find(needle)


# ah, .find does tho """

# Search Insert Position					1/21/2024
""" 
# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

# You must write an algorithm with O(log n) runtime complexity.

# Example 1:
# 		Input: nums = [1,3,5,6], target = 5
# 		Output: 2

# Example 2:
# 		Input: nums = [1,3,5,6], target = 2
# 		Output: 1

# Example 3:
# 		Input: nums = [1,3,5,6], target = 7
# 		Output: 4

# Constraints:
# 		1 <= nums.length <= 104
# 		-104 <= nums[i] <= 104
# 		nums contains distinct values sorted in ascending order.
# 		-104 <= target <= 104


class Solution(object):
    def searchInsert(self, nums, t):
        if nums[0] > t:
            return 0

        l = 0
        r = len(nums) - 1

        while l <= r:
            m = int((l + r) / 2)
            if nums[m] < t:
                l = m + 1
            elif nums[m] > t:
                r = m - 1
            else:
                return m

        if nums[m] > t:
            return m
        else:
            return m + 1

    print(searchInsert(None, [1, 3, 5, 6], 5))  #  2
    print(searchInsert(None, [1, 3, 5, 6], 2))  #  1
    print(searchInsert(None, [1, 3, 5, 6], 7))  #  4
    print(searchInsert(None, [1, 3, 5, 6], 0))  #  0
    print(searchInsert(None, [1, 3], 2))  #  1


# Binary search


def topVotedSearchInsert(self, nums, target):  # works even if there are duplicates.
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) / 2
        if nums[mid] < target:
            l = mid + 1
        else:
            if nums[mid] == target and nums[mid - 1] != target:
                return mid
            else:
                r = mid - 1
    return l


# Return l was my problem
# Should do that instead of the first & final if statements


class Solution(object):
    def revisedSearchInsert(self, nums, t):
        l = 0
        r = len(nums) - 1

        while l <= r:
            m = int((l + r) / 2)
            if nums[m] < t:
                l = m + 1
            elif nums[m] > t:
                r = m - 1
            else:
                return m

        return l


# Gotten rusty with my binary search """

# Length of Last Word					1/22/2024
""" 
# Given a string s consisting of words and spaces, return the length of the last word in the string.

# A word is a maximal

# substring

# consisting of non-space characters only.

# Example 1:
# 		Input: s = "Hello World"
# 		Output: 5
# Explanation: The last word is "World" with length 5.

# Example 2:
# 		Input: s = "   fly me   to   the moon  "
# 		Output: 4
# Explanation: The last word is "moon" with length 4.

# Example 3:
# 		Input: s = "luffy is still joyboy"
# 		Output: 6
# Explanation: The last word is "joyboy" with length 6.

# Constraints:
# 		1 <= s.length <= 104
# 		s consists of only English letters and spaces ' '.
# 		There will be at least one word in s.


class Solution(object):
    def lengthOfLastWord(self, s):
        return len(s.rstrip().split(" ").pop())

    print(lengthOfLastWord(None, "Hello World"))  #  5
    print(lengthOfLastWord(None, "   fly me   to   the moon  "))  #  4
    print(lengthOfLastWord(None, "luffy is still joyboy"))  #  6


# Nice, but took me no more than 1 minute to write


class Solution(object):
    def revisedLengthOfLastWord(self, s):
        res = 0
        prev = " "
        for c in s:
            if prev == " " and c != " ":
                res = 1
            elif c != " ":
                res += 1
            prev = c
        return res

    print(revisedLengthOfLastWord(None, "Hello World"))  #  5
    print(revisedLengthOfLastWord(None, "   fly me   to   the moon  "))  #  4
    print(revisedLengthOfLastWord(None, "luffy is still joyboy"))  #  6


# Something to practice my Python with, slightly faster runtime


class Solution(object):
    def topVotedLengthOfLastWord(self, s):
        wordlist = s.split()
        if wordlist:
            return len(wordlist[-1])
        return 0


# [-1] instead of .pop


class Solution(object):
    def lengthOfLastWord(self, s):
        return len(s.rstrip().split(" ")[-1]) """

# Plus One					1/23/2024
""" 
# You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

# Increment the large integer by one and return the resulting array of digits.

# Example 1:
# 		Input: digits = [1,2,3]
# 		Output: [1,2,4]
# Explanation: The array represents the integer 123.
# 		Incrementing by one gives 123 + 1 = 124.
# 		Thus, the result should be [1,2,4].

# Example 2:
# 		Input: digits = [4,3,2,1]
# 		Output: [4,3,2,2]
# Explanation: The array represents the integer 4321.
# 		Incrementing by one gives 4321 + 1 = 4322.
# 		Thus, the result should be [4,3,2,2].

# Example 3:
# 		Input: digits = [9]
# 		Output: [1,0]
# Explanation: The array represents the integer 9.
# 		Incrementing by one gives 9 + 1 = 10.
# 		Thus, the result should be [1,0].

# Constraints:
# 		1 <= digits.length <= 100
# 		0 <= digits[i] <= 9
# 		digits does not contain any leading 0's.


class Solution(object):
    def plusOne(self, digits):
        i = len(digits) - 1
        c = 1

        while i >= 0 and c == 1:
            digits[i] += c
            if digits[i] < 10:
                c = 0
            else:
                digits[i] = 0
            i -= 1

        if c:
            digits.insert(0, c)

        return digits

    print(plusOne(None, [1, 2, 3]))  #  [1,2,4]
    print(plusOne(None, [4, 3, 2, 1]))  #  [4,3,2,2]
    print(plusOne(None, [9]))  #  [1,0]


# Beats 95% runtimes


def topVotedPlusOne(digits):
    num = 0
    for i in range(len(digits)):
        num += digits[i] * pow(10, (len(digits) - 1 - i))
    return [int(i) for i in str(num + 1)]


# Converts from int to string """

# Add Binary					1/24/2024
""" 
# Given two binary strings a and b, return their sum as a binary string.

# Example 1:
# 		Input: a = "11", b = "1"
# 		Output: "100"

# Example 2:
# 		Input: a = "1010", b = "1011"
# 		Output: "10101"

# Constraints:
# 		1 <= a.length, b.length <= 104
# 		a and b consist only of '0' or '1' characters.
# 		Each string does not contain leading zeros except for the zero itself.


class Solution(object):
    def addBinary(self, a, b):
        sum = bin(int(a, 2) + int(b, 2))
        return sum[2:]  # remove '0b' prefix

    print(addBinary(None, "11", "1"))  #  "100"
    print(addBinary(None, "1010", "1011"))  #  "10101"


# Was going to do it the long way with carry but good to learn about int and bin methods


class Solution:
    def addBinary(self, a: str, b: str) -> str:
        res = ""
        i, j, carry = len(a) - 1, len(b) - 1, 0
        while i >= 0 or j >= 0:
            sum = carry
            if i >= 0:
                sum += ord(a[i]) - ord(
                    "0"
                )  # ord is use to get value of ASCII character
            if j >= 0:
                sum += ord(b[j]) - ord("0")
            i, j = i - 1, j - 1
            carry = 1 if sum > 1 else 0
            res += str(sum % 2)

        if carry != 0:
            res += str(carry)
        return res[::-1] """

# Sqrt(x)					1/25/2024
""" 
# Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

# You must not use any built-in exponent function or operator.

# For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

# Example 1:
# 		Input: x = 4
# 		Output: 2
# Explanation: The square root of 4 is 2, so we return 2.

# Example 2:
# 		Input: x = 8
# 		Output: 2
# Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

# Constraints:
# 		0 <= x <= 231 - 1


class Solution(object):
    def mySqrt(self, x):
        if x == 0 or x == 1:
            return x

        l = 0
        r = x

        while l < r:
            m = (r + l) / 2
            if m * m <= x:
                l = m + 1
            else:
                r = m - 1

        return int(l - 1)

    print(mySqrt(None, 2))  #  1
    print(mySqrt(None, 4))  #  2
    print(mySqrt(None, 8))  #  2


class Solution(object):
    def topVotedMySqrt(self, x):
        l, r = 0, x
        while l <= r:
            mid = l + (r - l) // 2
            if mid * mid <= x < (mid + 1) * (mid + 1):
                return mid
            elif x < mid * mid:
                r = mid - 1
            else:
                l = mid + 1


# setting l to null makes it work for 0 and 1 exceptions
# // is integer division """

# Climbing Stairs					1/26/2024
""" 
# You are climbing a staircase. It takes n steps to reach the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# Example 1:
# 		Input: n = 2
# 		Output: 2
# Explanation: There are two ways to climb to the top.
# 		1. 1 step + 1 step
# 		2. 2 steps

# Example 2:
# 		Input: n = 3
# 		Output: 3
# Explanation: There are three ways to climb to the top.
# 		1. 1 step + 1 step + 1 step
# 		2. 1 step + 2 steps
# 		3. 2 steps + 1 step

# Constraints:
# 		1 <= n <= 45


class Solution(object):
    def climbStairs(self, n):
        def step(n):
            if n == 1 or n == 2:
                return n
            return step(n - 1) + step(n - 2)

        return step(n)

    print(climbStairs(None, 2))  #  2
    print(climbStairs(None, 3))  #  3
    print(climbStairs(None, 4))  #  5


# I'm seeing this type of counting in Discrete Structures II right now
# Surely a mathematical approach is possible


class Solution:
    def climbStairs(self, n):
        p2, p1 = 0, 1
        for i in range(n):
            p2, p1 = p1, (p1 + p2)
        return p1 """

# Remove Duplicates from Sorted List					1/27/2024
""" 
# Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

# Example 1:
# 		Input: head = [1,1,2]
# 		Output: [1,2]

# Example 2:
# 		Input: head = [1,1,2,3,3]
# 		Output: [1,2,3]

# Constraints:
# 		The number of nodes in the list is in the range [0, 300].
# 		-100 <= Node.val <= 100
# 		The list is guaranteed to be sorted in ascending order.


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def deleteDuplicates(self, head):
        if head == None:
            return head

        seen = [head.val]

        def explore(prev, node):
            if node == None:
                return
            elif node.val not in seen:
                seen.append(node.val)
                prev = node
            else:
                prev.next = node.next

            explore(prev, node.next)

        explore(head, head.next)
        return head


# Bit bulky


def deleteDuplicates(self, head):
    cur = head
    while cur:
        while cur.next and cur.next.val == cur.val:
            cur.next = cur.next.next  # skip duplicated node
        cur = cur.next  # not duplicate of current node, move to next node
    return head """

# Merge Sorted Array					1/28/2024
""" 
# You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

# Merge nums1 and nums2 into a single array sorted in non-decreasing order.

# The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

# Example 1:
# 		Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
# 		Output: [1,2,2,3,5,6]
# Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
# 		The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

# Example 2:
# 		Input: nums1 = [1], m = 1, nums2 = [], n = 0
# 		Output: [1]
# Explanation: The arrays we are merging are [1] and [].
# 		The result of the merge is [1].

# Example 3:
# 		Input: nums1 = [0], m = 0, nums2 = [1], n = 1
# 		Output: [1]
# Explanation: The arrays we are merging are [] and [1].
# 		The result of the merge is [1].
# 		Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

# Constraints:
# 		nums1.length == m + n
# 		nums2.length == n
# 		0 <= m, n <= 200
# 		1 <= m + n <= 200
# 		-109 <= nums1[i], nums2[j] <= 109

# Follow up: Can you come up with an algorithm that runs in O(m + n) time?


class Solution(object):
    def merge(self, nums1, m, nums2, n):
        if n == 0:
            return

        for i in range(m + n):
            if n <= 0:
                break
            if nums2[0 - n] <= nums1[i]:
                nums1[i + 1 :] = nums1[i:-1]
                nums1[i] = nums2[0 - n]
                n -= 1

        if n > 0:
            nums1[0 - n :] = nums2[0 - n :]

    merge(None, [1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)  #  [1,2,2,3,5,6]
    merge(None, [1], 1, [], 0)  #  [1]
    merge(None, [0], 0, [1], 1)  #  [1]
    merge(None, [2, 0], 2, [1], 1)  #  [1,2]


# Beats 97% of runtimes


class Solution(object):
    def merge(self, nums1, m, nums2, n):
        for j in range(n):
            nums1[m + j] = nums2[j]
        nums1.sort() """

# Same Tree					1/29/2024
""" 
# Given the roots of two binary trees p and q, write a function to check if they are the same or not.

# Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

# Example 1:
# 		Input: p = [1,2,3], q = [1,2,3]
# 		Output: true

# Example 2:
# 		Input: p = [1,2], q = [1,null,2]
# 		Output: false

# Example 3:
# 		Input: p = [1,2,1], q = [1,1,2]
# 		Output: false

# Constraints:
# 		The number of nodes in both trees is in the range [0, 100].
# 		-104 <= Node.val <= 104


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def isSameTree(self, p, q):
        def explore(l, r):
            if l == None and r == None:
                return True
            if (
                (l != None and r == None)
                or (l == None and r != None)
                or (l.val != r.val)
            ):
                return False
            return explore(l.left, r.left) and explore(l.right, r.right)

        return explore(p, q)

    print(isSameTree(None, [1, 2, 3], [1, 2, 3]))  #  true
    print(isSameTree(None, [1, 2], [1, null, 2]))  #  false
    print(isSameTree(None, [1, 2, 1], [1, 1, 2]))  #  false


def topVotedIsSameTree(self, p, q):
    if p and q:
        return (
            p.val == q.val
            and self.topVotedIsSameTree(p.left, q.left)
            and self.topVotedIsSameTree(p.right, q.right)
        )
    return p is q """

# Symmetric Tree					1/30/2024
""" 
# Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

# Example 1:
# 		Input: root = [1,2,2,3,4,4,3]
# 		Output: true

# Example 2:
# 		Input: root = [1,2,2,null,3,null,3]
# 		Output: false

# Constraints:
# 		The number of nodes in the tree is in the range [1, 1000].
# 		-100 <= Node.val <= 100
# 		Follow up: Could you solve it both recursively and iteratively?


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def isSymmetric(self, root):
        def explore(l, r):
            if not l and not r:  # both end
                return True
            if not l or not r:  # one of the two ends
                return False
            return (
                l.val == r.val and explore(l.left, r.right) and explore(l.right, r.left)
            )

        return explore(root.left, root.right)

    print(isSymmetric(None, [1, 2, 2, 3, 4, 4, 3]))  #  true
    print(isSymmetric(None, [1, 2, 2, None, 3, None, 3]))  #  false


class Solution(object):
    def isMirror(self, left, right):
        if not left and not right:
            return True
        if not left or not right:
            return False
        return (
            left.val == right.val
            and self.isMirror(left.left, right.right)
            and self.isMirror(left.right, right.left)
        )

    def topVotedIsSymmetric(self, root):
        if not root:
            return True
        return self.isMirror(root.left, root.right)


# same same """

# Maximum Depth of Binary Tree					1/31/2024
""" 
# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Example 1:
# 		Input: root = [3,9,20,null,null,15,7]
# 		Output: 3

# Example 2:
# 		Input: root = [1,null,2]
# 		Output: 2

# Constraints:
# 		The number of nodes in the tree is in the range [0, 104].
# 		-100 <= Node.val <= 100


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def maxDepth(self, node, depth=0):
        if node == None:
            return depth
        return max(
            self.maxDepth(node.left, depth + 1),
            self.maxDepth(node.right, depth + 1),
        )


class Solution:
    def topVotedMaxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1


# Omits depth variable """

# Climbing Stairs					2/1/2024
""" 
# You are climbing a staircase. It takes n steps to reach the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# Example 1:
# 		Input: n = 2
# 		Output: 2
# Explanation: There are two ways to climb to the top.
# 		1. 1 step + 1 step
# 		2. 2 steps

# Example 2:
# 		Input: n = 3
# 		Output: 3
# Explanation: There are three ways to climb to the top.
# 		1. 1 step + 1 step + 1 step
# 		2. 1 step + 2 steps
# 		3. 2 steps + 1 step

# Constraints:
# 		1 <= n <= 45


class Solution:
    def climbStairs(self, n):
        return int(
            ((((1 + 5**0.5) / 2) ** (n + 1)) - (((1 - 5**0.5) / 2) ** (n + 1)))
            / (5**0.5)
        )

    print(climbStairs(None, 2))  #  2
    print(climbStairs(None, 3))  #  3


# Thought I'd revisit this problem since we covered it in Discrete Structures II

# The equation seen above is the solution to fib(n)


class Solution:
    def topVotedClimbStairs(self, n: int) -> int:
        # with math
        phi = 1.618033988749894
        phimenus = -0.618033988749894

        return round((phi ** (n + 1) - phimenus ** (1 + n)) / 5**0.5)


# Much clearer
# Phi is the golden ratio """

# Balanced Binary Tree					2/2/2024
""" 
# Given a binary tree, determine if it is height-balanced.

# Example 1:
# 		Input: root = [3,9,20,null,null,15,7]
# 		Output: true

# Example 2:
# 		Input: root = [1,2,2,3,3,null,null,4,4]
# 		Output: false

# Example 3:
# 		Input: root = []
# 		Output: true

# Constraints:
# 		The number of nodes in the tree is in the range [0, 5000].
# 		-104 <= Node.val <= 104


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def isBalanced(self, node):
        if not node:
            return 1

        l = self.isBalanced(node.left)
        r = self.isBalanced(node.right)

        if abs(l - r) > 1 or l == -1 or r == -1:
            return 0

        return 1 + max(l, r)


# Doesn't pass all test cases


class Solution(object):
    def topVotedIsBalanced(self, root):
        def check(root):
            if root is None:
                return 0
            left = check(root.left)
            right = check(root.right)
            if left == -1 or right == -1 or abs(left - right) > 1:
                return -1
            return 1 + max(left, right)

        return check(root) != -1 """

# Minimum Depth of Binary Tree					2/3/2024
""" 
# Given a binary tree, find its minimum depth.

# The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

# Note: A leaf is a node with no children.

# Example 1:
# 		Input: root = [3,9,20,null,null,15,7]
# 		Output: 2

# Example 2:
# 		Input: root = [2,null,3,null,4,null,5,null,6]
# 		Output: 5

# Constraints:
# 		The number of nodes in the tree is in the range [0, 105].
# 		-1000 <= Node.val <= 1000


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def minDepth(self, node, depth=0):
        if not node:  # not a leaf
            if depth == 0:
                return 0
            return 999999

        if not node.left and not node.right:  # is a leaf
            return 1

        return min(
            self.minDepth(node.left, depth + 1) + 1,
            self.minDepth(node.right, depth + 1) + 1,
        )


# Would've rather solving it without depth, but empty binary tree wasn't passing


def topVotedMinDepth(self, root):
    if not root:
        return 0
    if None in [root.left, root.right]:
        return max(self.minDepth(root.left), self.minDepth(root.right)) + 1
    else:
        return min(self.minDepth(root.left), self.minDepth(root.right)) + 1


# Cool, does max when non-leaf end is encountered, else min """

# Path Sum					2/4/2024
""" 
# Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

# A leaf is a node with no children.

# Example 1:
# 		Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
# 		Output: true
# Explanation: The root-to-leaf path with the target sum is shown.

# Example 2:
# 		Input: root = [1,2,3], targetSum = 5
# 		Output: false
# Explanation: There two root-to-leaf paths in the tree:
# 		(1 --> 2): The sum is 3.
# 		(1 --> 3): The sum is 4.
# 		There is no root-to-leaf path with sum = 5.

# Example 3:
# 		Input: root = [], targetSum = 0
# 		Output: false
# Explanation: Since the tree is empty, there are no root-to-leaf paths.

# Constraints:
# 		The number of nodes in the tree is in the range [0, 5000].
# 		-1000 <= Node.val <= 1000
# 		-1000 <= targetSum <= 1000


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def hasPathSum(self, root, t):
        def explore(node, rem):
            if not node:
                return False

            rem -= node.val
            if rem == 0 and not node.left and not node.right:
                return True

            return explore(node.left, rem) or explore(node.right, rem)

        return explore(root, t)


# Good runtime


class Solution:
    def topVotedHasPathSum(self, root, sum):
        if not root:
            return False

        if not root.left and not root.right and root.val == sum:
            return True

        sum -= root.val

        return self.hasPathSum(root.left, sum) or self.hasPathSum(root.right, sum)


# same same """

# Pascal's Triangle					2/5/2024
""" 
# Given an integer numRows, return the first numRows of Pascal's triangle.

# In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

# Example 1:
# 		Input: numRows = 5
# 		Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

# Example 2:
# 		Input: numRows = 1
# 		Output: [[1]]

# Constraints:
# 		1 <= numRows <= 30


class Solution(object):
    def generate(self, numRows):
        res = [[1]]

        for i in range(2, numRows + 1):
            row = []
            for j in range(i):
                if j == 0 or j == (i - 1):
                    row.append(1)
                else:
                    row.append(res[i - 2][j - 1] + res[i - 2][j])
            res.append(row)

        return res

    print(generate(None, 5))  #  [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
    print(generate(None, 1))  #  [[1]]


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        if numRows == 1:
            return [[1]]

        prevRows = self.generate(numRows - 1)
        newRow = [1] * numRows

        for i in range(1, numRows - 1):
            newRow[i] = prevRows[-1][i - 1] + prevRows[-1][i]

        prevRows.append(newRow)
        return prevRows """

# Pascal's Triangle II					2/6/2024
""" 
# Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

# In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

# Example 1:
# 		Input: rowIndex = 3
# 		Output: [1,3,3,1]

# Example 2:
# 		Input: rowIndex = 0
# 		Output: [1]

# Example 3:
# 		Input: rowIndex = 1
# 		Output: [1,1]

# Constraints:
# 		0 <= rowIndex <= 33
# 		Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?


class Solution(object):
    def getRow(self, row):
        def fact(n):
            nFact = 1
            while n > 0:
                nFact *= n
                n -= 1
            return nFact

        res = []
        xFact = fact(row)

        for i in range(row + 1):
            res.append(int(xFact / ((fact(i) * fact(row - i)))))

        return res

    print(getRow(None, 3))  #  [1,3,3,1]
    print(getRow(None, 0))  #  [1]
    print(getRow(None, 1))  #  [1,1]


# Discrete Structures II taught us the equation X!/(Y!(X-Y)!) for pascal's triangle
# 90% Runtime


class Solution(object):
    def getRow(self, r):
        ans = [1] * (r + 1)
        up = r
        down = 1
        for i in range(1, r):
            ans[i] = ans[i - 1] * up / down
            up = up - 1
            down = down + 1
        return ans


# Shorter code, slower runtime """

# Best Time to Buy and Sell Stock					2/7/2024
""" 
# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

# Example 1:
# 		Input: prices = [7,1,5,3,6,4]
# 		Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
# 		Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

# Example 2:
# 		Input: prices = [7,6,4,3,1]
# 		Output: 0
# Explanation: In this case, no transactions are done and the max profit = 0.

# Constraints:
# 		1 <= prices.length <= 105
# 		0 <= prices[i] <= 104


class Solution(object):
    def maxProfit(self, prices):
        res = 0
        for i in range(len(prices) - 1):
            res = max(res, max(prices[i + 1 :]) - prices[i])
        return res

    print(maxProfit(None, [7, 1, 5, 3, 6, 4]))  #  5
    print(maxProfit(None, [7, 6, 4, 3, 1]))  #  0


class Solution:
    def maxProfit(self, prices):
        left = 0  # Buy
        right = 1  # Sell
        max_profit = 0
        while right < len(prices):
            currentProfit = prices[right] - prices[left]  # our current Profit
            if prices[left] < prices[right]:
                max_profit = max(currentProfit, max_profit)
            else:
                left = right
            right += 1
        return max_profit """

# Valid Palindrome					2/8/2024
""" 
# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

# Example 1:
# 		Input: s = "A man, a plan, a canal: Panama"
# 		Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.

# Example 2:
# 		Input: s = "race a car"
# 		Output: false
# Explanation: "raceacar" is not a palindrome.

# Example 3:
# 		Input: s = " "
# 		Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# 		Since an empty string reads the same forward and backward, it is a palindrome.

# Constraints:
# 		1 <= s.length <= 2 * 105
# 		s consists only of printable ASCII characters.


class Solution(object):
    def isPalindrome(self, s):
        n = len(s)
        i = 0
        j = n - 1
        s = s.lower()

        while i < j:
            while not s[i].isalnum():
                i += 1
            while not s[j].isalnum():
                j -= 1
            if s[i] != s[j]:
                return False
            i += 1
            j -= 1

        return True

    print(isPalindrome(None, "A man, a plan, a canal: Panama"))  #  true
    print(isPalindrome(None, "race a car"))  #  false
    print(isPalindrome(None, " "))  #  true


class Solution(object):
    def topVotedIsPalindrome(self, s):
        l, r = 0, len(s) - 1
        while l < r:
            if not s[l].isalnum():
                l += 1
            elif not s[r].isalnum():
                r -= 1
            else:
                if s[l].lower() != s[r].lower():
                    return False
                else:
                    l += 1
                    r -= 1
        return True


# Same but avoids additional while loops """

# Single Number					2/9/2024
""" 
# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# You must implement a solution with a linear runtime complexity and use only constant extra space.

# Example 1:
# 		Input: nums = [2,2,1]
# 		Output: 1

# Example 2:
# 		Input: nums = [4,1,2,1,2]
# 		Output: 4

# Example 3:
# 		Input: nums = [1]
# 		Output: 1

# Constraints:
# 		1 <= nums.length <= 3 * 104
# 		-3 * 104 <= nums[i] <= 3 * 104
# 		Each element in the array appears twice except for one element which appears only once.


class Solution(object):
    def singleNumber(self, nums):
        res = 0
        for n in nums:
            res ^= n
        return res

    print(singleNumber(None, [2, 2, 1]))  #  1
    print(singleNumber(None, [4, 1, 2, 1, 2]))  #  4
    print(singleNumber(None, [1]))  #  1


# Bitwise XOR is built for this problem


class Solution(object):
    def topVotedSingleNumber(self, nums):
        return sum(list(set(nums))) * 2 - sum(nums)


# 'The sum() function returns a number, the sum of all items in an iterable' """

# Linked List Cycle					2/10/2024
""" 
# Given head, the head of a linked list, determine if the linked list has a cycle in it.

# There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

# Return true if there is a cycle in the linked list. Otherwise, return false.

# Example 1:
# 		Input: head = [3,2,0,-4], pos = 1
# 		Output: true
# Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

# Example 2:
# 		Input: head = [1,2], pos = 0
# 		Output: true
# Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

# Example 3:
# 		Input: head = [1], pos = -1
# 		Output: false
# Explanation: There is no cycle in the linked list.

# Constraints:
# 		The number of the nodes in the list is in the range [0, 104].
# 		-105 <= Node.val <= 105
# 		pos is -1 or a valid index in the linked-list.

# Follow up: Can you solve it using O(1) (i.e. constant) memory?


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution(object):
    def hasCycle(self, head):
        seen = []

        def explore(node):
            if node == None:
                return False
            if id(node) in seen:
                return True
            seen.append(id(node))
            return explore(node.next)

        return explore(head)


# 'id() function gives the address of the particular object.'


def hasCycle(self, head):
    try:
        slow = head
        fast = head.next
        while slow is not fast:
            slow = slow.next
            fast = fast.next.next
        return True
    except:
        return False


# right, I remember the tortoise and the hare """

# Excel Sheet Column Title					2/11/2024
""" 
# Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

# For example:
# A -> 1
# B -> 2
# C -> 3
# ...
# Z -> 26
# AA -> 27
# AB -> 28
# ...

# Example 1:
# 		Input: columnNumber = 1
# 		Output: "A"

# Example 2:
# 		Input: columnNumber = 28
# 		Output: "AB"

# Example 3:
# 		Input: columnNumber = 701
# 		Output: "ZY"

# Constraints:
# 		1 <= columnNumber <= 231 - 1


class Solution(object):
    def convertToTitle(self, col):
        ALPH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        res = ""
        while col > 0:
            res = ALPH[(col - 1) % 26] + res
            col = (col - 1) // 26
        return res

    print(convertToTitle(None, 1))  #  "A"
    print(convertToTitle(None, 28))  #  "AB"
    print(convertToTitle(None, 701))  #  "ZY"


# Ça marche


class Solution:
    def topVotedConvertToTitle(self, num):
        capitals = [chr(x) for x in range(ord("A"), ord("Z") + 1)]
        result = []
        while num > 0:
            result.append(capitals[(num - 1) % 26])
            num = (num - 1) // 26
        result.reverse()
        return "".join(result) """

# Majority Element					2/12/2024
""" 
# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

# Example 1:
# 		Input: nums = [3,2,3]
# 		Output: 3

# Example 2:
# 		Input: nums = [2,2,1,1,1,2,2]
# 		Output: 2

# Constraints:
# 		n == nums.length
# 		1 <= n <= 5 * 104
# 		-109 <= nums[i] <= 109

# Follow-up: Could you solve the problem in linear time and in O(1) space?


class Solution(object):
    def majorityElement(self, nums):
        res = [-1, 0]
        count = {}
        for n in nums:
            try:
                count[n] += 1
            except:
                count[n] = 1

            if count[n] > res[1]:
                res = [n, count[n]]

        return res[0]

    print(majorityElement(None, [3, 2, 3]))  #  3
    print(majorityElement(None, [2, 2, 1, 1, 1, 2, 2]))  #  2


class Solution(object):
    def topVotedMajorityElement1(self, nums):
        nums.sort()
        return nums[len(nums) // 2] """

# Excel Sheet Column Number					2/13/2024
""" 
# Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

# For example:
# A -> 1
# B -> 2
# C -> 3
# ...
# Z -> 26
# AA -> 27
# AB -> 28
# ...

# Example 1:
# 		Input: columnTitle = "A"
# 		Output: 1

# Example 2:
# 		Input: columnTitle = "AB"
# 		Output: 28

# Example 3:
# 		Input: columnTitle = "ZY"
# 		Output: 701

# Constraints:
# 		1 <= columnTitle.length <= 7
# 		columnTitle consists only of uppercase English letters.
# 		columnTitle is in the range ["A", "FXSHRXW"].


class Solution(object):
    def titleToNumber(self, col):
        ALPH = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        n = len(col) - 1
        res = 0
        for c in col:
            res += ALPH.index(c) * pow(26, n)
            n -= 1
        return res

    print(titleToNumber(None, "A"))  #  1
    print(titleToNumber(None, "AB"))  #  28
    print(titleToNumber(None, "ZY"))  #  701


def titleToNumber(self, s):
    res = 0
    for c in s:
        res = res * 26 + ord(c) - ord("A") + 1
    return res


# 'The ord() function returns the number representing the unicode code of a specified character.' """

# Reverse Bits					2/14/2024
""" 
# Reverse bits of a given 32 bits unsigned integer.

# Example 1:
# 		Input: n = 00000010100101000001111010011100
# 		Output:    964176192 (00111001011110000010100101000000)
# Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

# Example 2:
# 		Input: n = 11111111111111111111111111111101
# 		Output:   3221225471 (10111111111111111111111111111111)
# Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

# Constraints:
# 		The input must be a binary string of length 32

# Follow up: If this function is called many times, how would you optimize it?


class Solution:
    def reverseBits(self, n):
        deg = len(n) - 1
        res = 0
        for c in n[::-1]:
            if c == "1":
                res += pow(2, deg)
            deg -= 1
        return res

    print(
        reverseBits(None, "00000010100101000001111010011100")
    )  #     964176192 (00111001011110000010100101000000)
    print(
        reverseBits(None, "11111111111111111111111111111101")
    )  #    3221225471 (10111111111111111111111111111111)


# Oops, did it for string input


class Solution:
    def topVotedReverseBits1(self, n):
        oribin = "{0:032b}".format(n)
        reversebin = oribin[::-1]
        return int(reversebin, 2)

    def topVotedReverseBits2(self, n):
        res = 0
        for _ in range(32):
            res = (res << 1) + (n & 1)
            n >>= 1
        return res """

# Number of 1 Bits					2/15/2024
""" 
# Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

# Example 1:
# 		Input: n = 00000000000000000000000000001011
# 		Output: 3
# Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

# Example 2:
# 		Input: n = 00000000000000000000000010000000
# 		Output: 1
# Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

# Example 3:
# 		Input: n = 11111111111111111111111111111101
# 		Output: 31
# Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

# Constraints:
# 		The input must be a binary string of length 32.
# 		Follow up: If this function is called many times, how would you optimize it?


class Solution(object):
    def hammingWeight(self, n):
        res = 0
        while n:
            res += n & 1
            n >>= 1
        return res

    print(hammingWeight(None, 1011))  #  3
    print(hammingWeight(None, 10000000))  #  1
    print(hammingWeight(None, 11111111111111111111111111111101))  #  31


# same as top voted """

# Happy Number					2/16/2024
""" 
# Write an algorithm to determine if a number n is happy.

# A happy number is a number defined by the following process:

# Starting with any positive integer, replace the number by the sum of the squares of its digits.

# Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

# Those numbers for which this process ends in 1 are happy.

# Return true if n is a happy number, and false if not.

# Example 1:
# 		Input: n = 19
# 		Output: true
# Explanation:
# 		1^2 + 9^2 = 82
# 		8^2 + 2^2 = 68
# 		6^2 + 8^2 = 100
# 		1^2 + 0^2 + 0^2 = 1

# Example 2:
# 		Input: n = 2
# 		Output: false

# Constraints:
# 		1 <= n <= 231 - 1


class Solution(object):
    def isHappy(self, n):
        seen = []
        while n != 1:
            cur = 0
            while n > 0:
                cur += pow(n % 10, 2)
                n //= 10

            if cur in seen:
                return False

            n = cur
            seen.append(n)

        return True

    print(isHappy(None, 19))  #  true
    print(isHappy(None, 2))  #  false
    print(isHappy(None, 3))  #  false
    print(isHappy(None, 7))  #  true


# Beats 95% of submissions runtimes


def topVotedIsHappy(self, n):
    mem = set()
    while n != 1:
        n = sum([int(i) ** 2 for i in str(n)])
        if n in mem:
            return False
        else:
            mem.add(n)
    else:
        return True


# 'n = sum([int(i) ** 2 for i in str(n)])'! """

# Remove Linked List Elements					2/17/2024
""" 
# Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

# Example 1:
# 		Input: head = [1,2,6,3,4,5,6], val = 6
# 		Output: [1,2,3,4,5]

# Example 2:
# 		Input: head = [], val = 1
# 		Output: []

# Example 3:
# 		Input: head = [7,7,7,7], val = 7
# 		Output: []

# Constraints:
# 		The number of nodes in the list is in the range [0, 104].
# 		1 <= Node.val <= 50
# 		0 <= val <= 50


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def removeElements(self, head, val):
        newHead = ListNode(None)
        newHead.next = head

        node = newHead
        while node.next:
            if node.next.val == val:
                node.next = node.next.next
            else:
                node = node.next

        return newHead.next


# Not a fan of newHead
# Same as top voted """

# Isomorphic Strings					2/18/2024
""" 
# Given two strings s and t, determine if they are isomorphic.

# Two strings s and t are isomorphic if the characters in s can be replaced to get t.

# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

# Example 1:
# 		Input: s = "egg", t = "add"
# 		Output: true

# Example 2:
# 		Input: s = "foo", t = "bar"
# 		Output: false

# Example 3:
# 		Input: s = "paper", t = "title"
# 		Output: true

# Constraints:
# 		1 <= s.length <= 5 * 104
# 		t.length == s.length
# 		s and t consist of any valid ascii character.


class Solution(object):
    def isIsomorphic(self, s, t):
        map1 = {}
        for i in range(len(t)):
            if t[i] in map1 and map1[t[i]] != s[i]:
                return False
            elif t[i] not in map1:
                map1[t[i]] = s[i]

        map2 = {}
        for i in range(len(s)):
            if s[i] in map2 and map2[s[i]] != t[i]:
                return False
            elif s[i] not in map2:
                map2[s[i]] = t[i]

        return True

    print(isIsomorphic(None, "egg", "add"))  #  true
    print(isIsomorphic(None, "foo", "bar"))  #  false
    print(isIsomorphic(None, "paper", "title"))  #  true
    print(isIsomorphic(None, "badc", "baba"))  #  false


# definitely a better way of doing this

# struggled with the if statement
# python returns an error when looking up an undefined key in object, while javascript outputs false
# had to check with 'in' first


class Solution(object):
    def topVotedIsIsomorphic(self, s, t):
        s2t, t2s = {}, {}
        for i in range(len(s)):
            if s[i] in s2t and s2t[s[i]] != t[i]:
                return False
            if t[i] in t2s and t2s[t[i]] != s[i]:
                return False
            s2t[s[i]] = t[i]
            t2s[t[i]] = s[i]
        return True """

# Reverse Linked List					2/19/2024
""" 
# Given the head of a singly linked list, reverse the list, and return the reversed list.

# Example 1:
# 		Input: head = [1,2,3,4,5]
# 		Output: [5,4,3,2,1]

# Example 2:
# 		Input: head = [1,2]
# 		Output: [2,1]

# Example 3:
# 		Input: head = []
# 		Output: []

# Constraints:
# 		The number of nodes in the list is the range [0, 5000].
# 		-5000 <= Node.val <= 5000
# 		Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def reverseList(self, head):
        prev = None
        while head:
            next = head.next
            head.next = prev
            prev = head
            head = next
        return prev


# peek forward and assign backwards


class Solution(object):
    def topVotedReverseList(self, head):
        prev = None
        curr = head
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        return prev


# same same """

# Contains Duplicate					2/20/2024
""" 
# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

# Example 1:
# 		Input: nums = [1,2,3,1]
# 		Output: true

# Example 2:
# 		Input: nums = [1,2,3,4]
# 		Output: false

# Example 3:
# 		Input: nums = [1,1,1,3,3,4,3,2,4,2]
# 		Output: true

# Constraints:
# 		1 <= nums.length <= 105
# 		-109 <= nums[i] <= 109


class Solution(object):
    def tooSlowContainsDuplicate(self, nums):
        seen = []
        for n in nums:
            if n in seen:
                return True
            seen.append(n)
        return False

    def containsDuplicate(self, nums):
        return len(set(nums)) != len(nums)

    print(containsDuplicate(None, [1, 2, 3, 1]))  #  true
    print(containsDuplicate(None, [1, 2, 3, 4]))  #  false
    print(containsDuplicate(None, [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))  #  true


class Solution(object):
    def containsDuplicate(self, nums):
        hset = set()
        for idx in nums:
            if idx in hset:
                return True
            else:
                hset.add(idx) """

# Contains Duplicate II					2/21/2024
""" 
# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

# Example 1:
# 		Input: nums = [1,2,3,1], k = 3
# 		Output: true

# Example 2:
# 		Input: nums = [1,0,1,1], k = 1
# 		Output: true

# Example 3:
# 		Input: nums = [1,2,3,1,2,3], k = 2
# 		Output: false

# Constraints:
# 		1 <= nums.length <= 105
# 		-109 <= nums[i] <= 109
# 		0 <= k <= 105


class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        for i in range(len(nums)):
            if nums[i] in nums[i + 1 : i + k + 1]:
                return True
        return False

    print(containsNearbyDuplicate(None, [1, 2, 3, 1], 3))  #  true
    print(containsNearbyDuplicate(None, [1, 0, 1, 1], 1))  #  true
    print(containsNearbyDuplicate(None, [1, 2, 3, 1, 2, 3], 2))  #  false
    print(containsNearbyDuplicate(None, [99, 99], 2))  #  true
    print(containsNearbyDuplicate(None, [2, 2], 3))  #  true


def containsNearbyDuplicate(self, nums, k):
    dic = {}
    for i, v in enumerate(nums):
        if v in dic and i - dic[v] <= k:
            return True
        dic[v] = i
    return False


# first time seeing enumerate
# similar to javascript's forEach """

# Count Complete Tree Nodes					2/22/2024
""" 
# Given the root of a complete binary tree, return the number of the nodes in the tree.

# According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

# Design an algorithm that runs in less than O(n) time complexity.

# Example 1:
# 		Input: root = [1,2,3,4,5,6]
# 		Output: 6

# Example 2:
# 		Input: root = []
# 		Output: 0

# Example 3:
# 		Input: root = [1]
# 		Output: 1

# Constraints:
# 		The number of nodes in the tree is in the range [0, 5 * 104].
# 		0 <= Node.val <= 5 * 104
# 		The tree is guaranteed to be complete.


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def countNodes(self, node):
        if node == None:
            return 0
        return self.countNodes(node.left) + self.countNodes(node.right) + 1


# not less than O(n)


class Solution:
    def countNodes(self, root):
        if not root:
            return 0
        leftDepth = self.getDepth(root.left)
        rightDepth = self.getDepth(root.right)
        if leftDepth == rightDepth:
            return pow(2, leftDepth) + self.countNodes(root.right)
        else:
            return pow(2, rightDepth) + self.countNodes(root.left)

    def getDepth(self, root):
        if not root:
            return 0
        return 1 + self.getDepth(root.left) """

# Implement Stack using Queues					2/23/2024
""" 
# Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

# Implement the MyStack class:
# void push(int x) Pushes element x to the top of the stack.
# int pop() Removes the element on the top of the stack and returns it.
# int top() Returns the element on the top of the stack.
# boolean empty() Returns true if the stack is empty, false otherwise.

# Notes:
# You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.

# Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

# Example 1:
# 		Input
# 		["MyStack", "push", "push", "top", "pop", "empty"]
# 		[[], [1], [2], [], [], []]
# 		Output
# 		[null, null, null, 2, 2, false]
# 		Explanation
# 		MyStack myStack = new MyStack();
# 		myStack.push(1);
# 		myStack.push(2);
# 		myStack.top(); // return 2
# 		myStack.pop(); // return 2
# 		myStack.empty(); // return False

# Constraints:
# 		1 <= x <= 9
# 		At most 100 calls will be made to push, pop, top, and empty.
# 		All the calls to pop and top are valid.

# Follow-up: Can you implement the stack using only one queue?

import collections


class MyStack(object):

    def __init__(self):
        self.queue = collections.deque()

    def push(self, x):
        self.queue.appendleft(x)

    def pop(self):
        return self.queue.popleft()

    def top(self):
        return self.queue[0]

    def empty(self):
        return len(self.queue) <= 0


class TopVotedStack:

    def __init__(self):
        self._queue = collections.deque()

    def push(self, x):
        q = self._queue
        q.append(x)
        for _ in range(len(q) - 1):
            q.append(q.popleft())

    def pop(self):
        return self._queue.popleft()

    def top(self):
        return self._queue[0]

    def empty(self):
        return not len(self._queue) """

# Invert Binary Tree					2/24/2024
""" 
# Given the root of a binary tree, invert the tree, and return its root.

# Example 1:
# 		Input: root = [4,2,7,1,3,6,9]
# 		Output: [4,7,2,9,6,3,1]

# Example 2:
# 		Input: root = [2,1,3]
# 		Output: [2,3,1]

# Example 3:
# 		Input: root = []
# 		Output: []

# Constraints:
# 		The number of nodes in the tree is in the range [0, 100].
# 		-100 <= Node.val <= 100


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def invertTree(self, root):
        def swap(node):
            if node == None:
                return

            node.left, node.right = node.right, node.left

            swap(node.left)
            swap(node.right)

        swap(root)
        return root

# glad to see 'temp' wasn't required to swap left and right nodes

class Solution(object):
    def topVotedInvertTree(self, root):
        if root:
            root.left, root.right = self.invertTree(root.right), self.invertTree(
                root.left
            )
            return root """

# Summary Ranges					2/25/2024
""" 
# You are given a sorted unique integer array nums.

# A range [a,b] is the set of all integers from a to b (inclusive).

# Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

# Each range [a,b] in the list should be output as:

# "a->b" if a != b

# "a" if a == b

# Example 1:
# 		Input: nums = [0,1,2,4,5,7]
# 		Output: ["0->2","4->5","7"]
# Explanation: The ranges are:
# 		[0,2] --> "0->2"
# 		[4,5] --> "4->5"
# 		[7,7] --> "7"

# Example 2:
# 		Input: nums = [0,2,3,4,6,8,9]
# 		Output: ["0","2->4","6","8->9"]
# Explanation: The ranges are:
# 		[0,0] --> "0"
# 		[2,4] --> "2->4"
# 		[6,6] --> "6"
# 		[8,9] --> "8->9"

# Constraints:
# 		0 <= nums.length <= 20
# 		-231 <= nums[i] <= 231 - 1
# 		All the values of nums are unique.
# 		nums is sorted in ascending order.


class Solution(object):
    def summaryRanges(self, nums):
        res = []

        if len(nums) == 0:
            return res

        prev = nums[0]

        for i, n in enumerate(nums):
            if nums[i - 1] < n - 1:
                if prev != nums[i - 1]:
                    res.append(str(prev) + "->" + str(nums[i - 1]))
                else:
                    res.append(str(prev))
                prev = nums[i]

        if prev != nums[-1]:
            res.append(str(prev) + "->" + str(nums[-1]))
        else:
            res.append(str(prev))

        return res

    print(summaryRanges(None, [0, 1, 2, 4, 5, 7]))  #  ["0->2","4->5","7"]
    print(summaryRanges(None, [0, 2, 3, 4, 6, 8, 9]))  #  ["0","2->4","6","8->9"]


# bulky, but logic is there


def topVotedSummaryRanges(self, nums):
    ranges = []
    for n in nums:
        if not ranges or n > ranges[-1][-1] + 1:
            ranges += ([],)
        ranges[-1][1:] = (n,)
    return ["->".join(map(str, r)) for r in ranges]


# comment by user:

# "About the commas :-)

# Three people asked about them in the comments, so I'll also explain it here as well. I have these two basic cases:

# ranges += [],
# r[1:] = n,
# Why the trailing commas? Because it turns the right hand side into a tuple and I get the same effects as these more common alternatives:

# ranges += [[]]
# or
# ranges.append([])

# r[1:] = [n]
# Without the comma, ...

# ranges += [] wouldn't add [] itself but only its elements, i.e., nothing.
# r[1:] = n wouldn't work, because my n is not an iterable.
# Why do it this way instead of the more common alternatives I showed above? Because it's shorter and faster (according to tests I did a while back)." """

# Power of Two					2/26/2024
""" 
# Given an integer n, return true if it is a power of two. Otherwise, return false.

# An integer n is a power of two, if there exists an integer x such that n == 2x.

# Example 1:
# 		Input: n = 1
# 		Output: true
# Explanation: 20 = 1

# Example 2:
# 		Input: n = 16
# 		Output: true
# Explanation: 24 = 16

# Example 3:
# 		Input: n = 3
# 		Output: false

# Constraints:
# 		-2^31 <= n <= 2^31 - 1

# Follow up: Could you solve it without loops/recursion?


class Solution(object):
    def oneLineIsPowerOfTwo(self, n):
        return round(math.log(n, 2), 8).is_integer()

    # breaks down at higher values

    def isPowerOfTwo(self, n):
        for i in range(31):
            if 2**i == n:
                return True
        return False

    print(isPowerOfTwo(None, 1))  #  true
    print(isPowerOfTwo(None, 16))  #  true
    print(isPowerOfTwo(None, 3))  #  false
    print(isPowerOfTwo(None, 536870912))  #  true
    print(isPowerOfTwo(None, 536870911))  #  false


class Solution:
    def topVotedIsPowerOfTwo(self, n: int) -> bool:
        for i in range(31):
            ans = 2**i
            if ans == n:
                return True
        return False """

# Palindrome Linked List					2/27/2024
""" 
# Given the head of a singly linked list, return true if it is a

# palindrome

# or false otherwise.

# Example 1:
# 		Input: head = [1,2,2,1]
# 		Output: true

# Example 2:
# 		Input: head = [1,2]
# 		Output: false

# Constraints:
# 		The number of nodes in the list is in the range [1, 105].
# 		0 <= Node.val <= 9

# Follow up: Could you do it in O(n) time and O(1) space?


# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def isPalindrome(self, head):
        vals = []
        while head:
            vals.append(head.val)
            head = head.next
        while len(vals) > 1:
            if vals.pop(0) != vals.pop(-1):
                return False
        return True


# We learnt that O(n) == O(2n), but I don't think that's what they wanted here


class Solution:
    def topVotedIsPalindrome(self, head: ListNode) -> bool:
        slow, fast, prev = head, head, None
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
        prev, slow, prev.next = slow, slow.next, None
        while slow:
            slow.next, prev, slow = prev, slow, slow.next
        fast, slow = head, prev
        while slow:
            if fast.val != slow.val:
                return False
            fast, slow = fast.next, slow.next
        return True


# Explanation:
# https://leetcode.com/problems/palindrome-linked-list/solutions/1137027/js-python-java-c-easy-floyd-s-reversal-solution-w-explanation/ """

# Valid Anagram					2/28/2024
""" 
# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Example 1:
# 		Input: s = "anagram", t = "nagaram"
# 		Output: true

# Example 2:
# 		Input: s = "rat", t = "car"
# 		Output: false

# Constraints:
# 		1 <= s.length, t.length <= 5 * 104
# 		s and t consist of lowercase English letters.
# 		Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


class Solution(object):
    def isAnagram(self, s, t):
        s, t = list(s), list(t)
        s.sort()
        t.sort()
        return s == t

    print(isAnagram(None, "anagram", "nagaram"))  #  true
    print(isAnagram(None, "rat", "car"))  #  false


class Solution(object):
    def topVotedIsAnagram(self, s, t):
        return sorted(s) == sorted(t)


# Python has a function for that """

# Binary Tree Paths					2/29/2024
""" 
# Given the root of a binary tree, return all root-to-leaf paths in any order.

# A leaf is a node with no children.

# Example 1:
# 		Input: root = [1,2,3,null,5]
# 		Output: ["1->2->5","1->3"]

# Example 2:
# 		Input: root = [1]
# 		Output: ["1"]

# Constraints:
# 		The number of nodes in the tree is in the range [1, 100].
# 		-100 <= Node.val <= 100


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def binaryTreePaths(self, root):
        if root == None:
            return []

        def explore(node, cur):
            if len(cur) == 0:
                cur = str(node.val)
            else:
                cur = cur + "->" + str(node.val)

            if node.left == None and node.right == None:
                paths.append(cur)
                return

            if node.left:
                explore(node.left, cur)
            if node.right:
                explore(node.right, cur)

        paths = []
        explore(root, "")
        return paths


# Beats 99% of runtimes


class Solution(object):
    # dfs + stack
    def topVotedBinaryTreePaths1(self, root):
        if not root:
            return []
        res, stack = [], [(root, "")]
        while stack:
            node, ls = stack.pop()
            if not node.left and not node.right:
                res.append(ls + str(node.val))
            if node.right:
                stack.append((node.right, ls + str(node.val) + "->"))
            if node.left:
                stack.append((node.left, ls + str(node.val) + "->"))
        return res """

# Add Digits					3/1/2024
""" 
# Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

# Example 1:
# 		Input: num = 38
# 		Output: 2
# Explanation: The process is
# 		38 --> 3 + 8 --> 11
# 		11 --> 1 + 1 --> 2
# 		Since 2 has only one digit, return it.

# Example 2:
# 		Input: num = 0
# 		Output: 0

# Constraints:
# 		0 <= num <= 231 - 1
# 		Follow up: Could you do it without any loop/recursion in O(1) runtime?


class Solution(object):
    def addDigits(self, num):
        while num >= 10:
            acc = 0
            while num > 0:
                acc += num % 10
                num //= 10
            num = acc
        return num

    print(addDigits(None, 38))  #  2
    print(addDigits(None, 0))  #  0


# 95% Runtime


class Solution:
    def topVotedAddDigits(self, num):
        if num == 0:
            return 0
        if num % 9 == 0:
            return 9
        else:
            return num % 9


# Any number where it's digits add to 9 is always divisible by 9. (18, 27, 36, 45, 54, 63, 72, 81, 90, etc.) Therefore the 'digital root' for any number divisible by 9 is always 9. You can see this even in larger numbers like 99 because 9 + 9 = 18, and then 1 + 8 = 9 still, so the root always becomes 9 for any numbers divisible by 9.

# Additionally, 0 always has a digital root of 0 obviously.

# The only other cases you need to worry about to find the digital root are when it isn't 0 or 9.

# So for any number that isn't 0 and isn't divisible by 9, the root will always n % 9 for a given number n. (AKA the difference between given number n and the nearest number that is divisible by 9, since numbers divisible by 9 always have a digital root of 9).
# For examples: 100 % 9 = 1 (one greater than 99, which is divisible by 9).
# 101 % 9 = 2
# 102 % 9 = 3 and so on. """

# Ugly Number					3/2/2024
""" 
# An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

# Given an integer n, return true if n is an ugly number.

# Example 1:
# 		Input: n = 6
# 		Output: true
# Explanation: 6 = 2 × 3

# Example 2:
# 		Input: n = 1
# 		Output: true
# Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

# Example 3:
# 		Input: n = 14
# 		Output: false
# Explanation: 14 is not ugly since it includes the prime factor 7.

# Constraints:
# 		-231 <= n <= 231 - 1


class Solution(object):
    def isUgly(self, n):
        pows = [2, 3, 5]
        p = pows.pop(-1)
        while n >= 2:
            if n % p == 0:
                n /= p
            else:
                if len(pows) == 0:
                    break
                p = pows.pop(-1)
        return n == 1

    print(isUgly(None, 6))  #  true
    print(isUgly(None, 1))  #  true
    print(isUgly(None, 14))  #  false


# I remember you divide continually by those factors
# bit scuffed, but works


class Solution(object):
    def topVotedIsUgly(self, n):
        for p in 2, 3, 5:
            while n % p == 0 < n:
                n /= p
        return n == 1


# much better looping """

# Missing Number					3/3/2024
""" 
# Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

# Example 1:
# 		Input: nums = [3,0,1]
# 		Output: 2
# Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

# Example 2:
# 		Input: nums = [0,1]
# 		Output: 2
# Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

# Example 3:
# 		Input: nums = [9,6,4,2,3,5,7,0,1]
# 		Output: 8
# Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

# Constraints:
# 		n == nums.length
# 		1 <= n <= 104
# 		0 <= nums[i] <= n
# 		All the numbers of nums are unique.

# Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?


class Solution(object):
    def missingNumber(self, nums):
        nums = sorted(nums)
        if nums[0] != 0:
            return 0
        try:
            for i in nums:
                if nums[i + 1] - nums[i] > 1:
                    return nums[i] + 1
        except:
            return nums[-1] + 1

    print(missingNumber(None, [3, 0, 1]))  #  2
    print(missingNumber(None, [0, 1]))  #  2
    print(missingNumber(None, [9, 6, 4, 2, 3, 5, 7, 0, 1]))  #  8


# Not a fan of try/except


def topVotedMissingNumber(self, nums):
    n = len(nums)
    return n * (n + 1) / 2 - sum(nums) """

# First Bad Version					3/4/2024
""" 
# You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

# Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

# You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

# Example 1:
# 		Input: n = 5, bad = 4
# 		Output: 4
# Explanation:
# 		call isBadVersion(3) -> false
# 		call isBadVersion(5) -> true
# 		call isBadVersion(4) -> true
# 		Then 4 is the first bad version.

# Example 2:
# 		Input: n = 1, bad = 1
# 		Output: 1

# Constraints:
# 		1 <= bad <= n <= 231 - 1

# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):


class Solution(object):
    def firstBadVersion(self, n):
        l, r = 1, n - 1
        while l <= r:
            m = (l + r) // 2
            if isBadVersion(m):
                r = m - 1
            else:
                l = m + 1
        return l


# Binary search gets 95% runtime

import bisect


class Solution:
    def firstBadVersion(self, n):
        self.__getitem__ = isBadVersion
        return bisect.bisect_left(self, True, 1, n)


# "The module is called bisect because it uses a basic bisection algorithm to do its work. Unlike other bisection tools that search for a specific value, the functions in this module are designed to locate an insertion point." """

# Move Zeroes					3/5/2024
""" 
# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

# Example 1:
# 		Input: nums = [0,1,0,3,12]
# 		Output: [1,3,12,0,0]

# Example 2:
# 		Input: nums = [0]
# 		Output: [0]

# Constraints:
# 		1 <= nums.length <= 104
# 		-231 <= nums[i] <= 231 - 1
# 		Follow up: Could you minimize the total number of operations done?


class Solution(object):
    def moveZeroes(self, nums):
        pos, n = 0, len(nums)
        for j in range(n):
            if nums[j] != 0:
                nums[pos], nums[j] = nums[j], nums[pos]
                pos += 1
        # return nums

    print(moveZeroes(None, [0, 1, 0, 3, 12]))  #  [1,3,12,0,0]
    print(moveZeroes(None, [0]))  #  [0]


# track pos to be replaced


def moveZeroes(self, nums):
    zero = 0  # records the position of "0"
    for i in xrange(len(nums)):
        if nums[i] != 0:
            nums[i], nums[zero] = nums[zero], nums[i]
            zero += 1

# same same """

# Task Scheduler					3/6/2024
""" 
# You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.

# ​Return the minimum number of intervals required to complete all tasks.

# Example 1:
# 		Input: tasks = ["A","A","A","B","B","B"], n = 2
# 		Output: 8
# Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
# 		After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.

# Example 2:
# 		Input: tasks = ["A","C","A","B","D","B"], n = 1
# 		Output: 6
# Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
# 		With a cooling interval of 1, you can repeat a task after just one other task.

# Example 3:
# 		Input: tasks = ["A","A","A", "B","B","B"], n = 3
# 		Output: 10
# Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
# 		There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

# Constraints:
# 		1 <= tasks.length <= 104
# 		tasks[i] is an uppercase English letter.
# 		0 <= n <= 100


class Solution(object):
    def leastInterval(self, tasks, n):
        if n == 1:
            return len(tasks)

        freq = {}
        coolingTimer = {}
        for t in tasks:
            if t not in freq:
                freq[t] = 1
                coolingTimer[t] = 0
            else:
                freq[t] += 1

        tasks = list(sorted(freq))

        intervals = 0
        while len(tasks) > 0:
            taskChosen = False
            for t in tasks:
                if freq[t] == 0:  # all tasks complete
                    del freq[t]
                    tasks.remove(t)
                    continue

                coolingTimer[t] -= 1  # decrement cooling time

                if coolingTimer[t] <= 0 and not taskChosen:  # chose task
                    taskChosen = True
                    coolingTimer[t] = n
                    freq[t] -= 1

            intervals += 1

        return intervals


# Doesn't work, there's surely better logic to be had


class Solution:
    # LOGIC : TAKE THE MAXIMUM FREQUENCY ELEMENT AND MAKE THOSE MANY NUMBER OF SLOTS
    # Slot size = (n+1) if n= 2 => slotsize = 3 Example: {A:5, B:1} => ABxAxxAxxAxxAxx => indices of A = 0,2 and middle there should be n elements, so slot size should be n+1

    # EX:
    # [
    #     [A, B,      C],
    #     [A, B,      C],
    #     [A, B,      idle],
    #     [A, B,      idle],
    #     [A, idle,   idle],
    #     [A   -        - ],
    # ]
    def topVotedLeastInterval(self, tasks, n):
        freq = collections.Counter(tasks)
        max_freq = max(freq.values())
        freq = list(freq.values())
        max_freq_ele_count = 0  # total_elements_with_max_freq, last row elements
        i = 0
        while i < len(freq):
            if freq[i] == max_freq:
                max_freq_ele_count += 1
            i += 1

        ans = (max_freq - 1) * (n + 1) + max_freq_ele_count

        return max(ans, len(tasks))


# 'collections.Counter(tasks)' is very useful to build the freq dictionary

# (max_freq - 1): number of rows, minus last (no trailing idles)
# (n + 1): size of each row
# max_freq_ele_count: number of tasks in last row


class Solution(object):
    def revisedLeastInterval(self, tasks, n):
        freq = collections.Counter(tasks)
        max_freq = max(freq.values())
        num_max = 0

        for t in freq:
            num_max += freq[t] == max_freq

        res = (max_freq - 1) * (n + 1) + num_max
        return max(res, len(tasks))  # minimum is number of tasks

    print(revisedLeastInterval(None, ["A", "A", "A", "B", "B", "B"], 2))  #  8
    print(revisedLeastInterval(None, ["A", "C", "A", "B", "D", "B"], 1))  #  6
    print(revisedLeastInterval(None, ["A", "A", "A", "B", "B", "B"], 3))  #  10
    print(
        revisedLeastInterval(
            None, ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"], 4
        )
    )  #  10 """

# Bag of Tokens					3/7/2024
""" 
# You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] denotes the value of tokeni.

# Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):

# Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score.

# Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score.

# Return the maximum possible score you can achieve after playing any number of tokens.

# Example 1:
# 		Input: tokens = [100], power = 50
# 		Output: 0
# Explanation: Since your score is 0 initially, you cannot play the token face-down. You also cannot play it face-up since your power (50) is less than tokens[0] (100).

# Example 2:
# 		Input: tokens = [200,100], power = 150
# 		Output: 1
# Explanation: Play token1 (100) face-up, reducing your power to 50 and increasing your score to 1.
# 		There is no need to play token0, since you cannot play it face-up to add to your score. The maximum score achievable is 1.

# Example 3:
# 		Input: tokens = [100,200,300,400], power = 200
# 		Output: 2
# Explanation: Play the tokens in this order to get a score of 2:
# 		Play token0 (100) face-up, reducing power to 100 and increasing score to 1.
# 		Play token3 (400) face-down, increasing power to 500 and reducing score to 0.
# 		Play token1 (200) face-up, reducing power to 300 and increasing score to 1.
# 		Play token2 (300) face-up, reducing power to 0 and increasing score to 2.
# 		The maximum score achievable is 2.

# Constraints:
# 		0 <= tokens.length <= 1000
# 		0 <= tokens[i], power < 104


class Solution(object):
    def bagOfTokensScore(self, tokens, power):
        tokens = sorted(tokens)
        if len(tokens) == 0 or power < tokens[0]:
            return 0

        score = 0
        play = True
        while play:
            while len(tokens) > 0 and power >= tokens[0]:  # face-up low tokens
                power -= tokens.pop(0)
                score += 1

            if len(tokens) >= 3:  # worth continuing to play
                power += tokens.pop(-1)  # face-down highest token
                score -= 1

            else:  # max score achieved
                play = False

        return score

    print(bagOfTokensScore(None, [100], 50))  #  0
    print(bagOfTokensScore(None, [200, 100], 150))  #  1
    print(bagOfTokensScore(None, [100, 200, 300, 400], 200))  #  2


class Solution(object):
    def topVotedBagOfTokensScore(self, tokens, power):
        tokens.sort()
        n = len(tokens)
        score = 0
        max_score = 0
        left = 0
        right = n - 1

        while left <= right:
            if power >= tokens[left]:
                power -= tokens[left]
                score += 1
                left += 1
                max_score = max(max_score, score)
            elif score > 0:
                power += tokens[right]
                score -= 1
                right -= 1
            else:
                break

        return max_score


# similar logic, better list navigation """

# Word Pattern					3/8/2024
""" 
# Given a pattern and a string s, find if s follows the same pattern.

# Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

# Example 1:
# 		Input: pattern = "abba", s = "dog cat cat dog"
# 		Output: true

# Example 2:
# 		Input: pattern = "abba", s = "dog cat cat fish"
# 		Output: false

# Example 3:
# 		Input: pattern = "aaaa", s = "dog cat cat dog"
# 		Output: false

# Constraints:
# 		1 <= pattern.length <= 300
# 		pattern contains only lower-case English letters.
# 		1 <= s.length <= 3000
# 		s contains only lowercase English letters and spaces ' '.
# 		s does not contain any leading or trailing spaces.
# 		All the words in s are separated by a single space.


class Solution(object):
    def wordPattern(self, pattern, s):
        pair, seen = {}, set()
        s = s.split(" ")

        if len(pattern) != len(s):
            return False

        for i, c in enumerate(pattern):
            if c not in pair:
                if s[i] in seen:
                    return False
                pair[c] = s[i]
                seen.add(s[i])
            elif pair[c] != s[i]:
                return False

        return True

    print(wordPattern(None, "abba", "dog cat cat dog"))  #  true
    print(wordPattern(None, "abba", "dog cat cat fish"))  #  false
    print(wordPattern(None, "aaaa", "dog cat cat dog"))  #  false


class Solution(object):
    def wordPattern(self, pattern, str):
        s = pattern
        t = str.split()
        return map(s.find, s) == map(t.index, t)


# map constructor takes function and iterable and builds accordingly
# here we're building two maps, index as key and char/word as value """

# Nim Game					3/9/2024
""" 
# You are playing the following Nim Game with your friend:

# Initially, there is a heap of stones on the table.

# You and your friend will alternate taking turns, and you go first.

# On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.

# The one who removes the last stone is the winner.

# Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

# Example 1:
# 		Input: n = 4
# 		Output: false
# Explanation: These are the possible outcomes:
# 		1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
# 		2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
# 		3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
# 		In all outcomes, your friend wins.

# Example 2:
# 		Input: n = 1
# 		Output: true

# Example 3:
# 		Input: n = 2
# 		Output: true

# Constraints:
# 		1 <= n <= 231 - 1


class Solution(object):
    def canWinNim(self, n):
        return n % 4 > 0

    print(canWinNim(None, 4))  #  false
    print(canWinNim(None, 1))  #  true
    print(canWinNim(None, 2))  #  true


# same as top voted solution """

# Power of Three					3/10/2024
""" 
# Given an integer n, return true if it is a power of three. Otherwise, return false.

# An integer n is a power of three, if there exists an integer x such that n == 3x.

# Example 1:
# 		Input: n = 27
# 		Output: true
# Explanation: 27 = 33

# Example 2:
# 		Input: n = 0
# 		Output: false
# Explanation: There is no x where 3x = 0.

# Example 3:
# 		Input: n = -1
# 		Output: false
# Explanation: There is no x where 3x = (-1).

# Constraints:
# 		-231 <= n <= 231 - 1

# Follow up: Could you solve it without loops/recursion?


class Solution(object):
    def isPowerOfThree(self, n):
        if n == 1:
            return True

        p = 1
        while 3**p <= n:
            if 3**p != n:
                p += 1
            else:
                return True
        return False

    print(isPowerOfThree(None, 27))  #  true
    print(isPowerOfThree(None, 0))  #  false
    print(isPowerOfThree(None, -1))  #  false
    print(isPowerOfThree(None, 9))  #  false


class Solution:
    def noLoopIsPowerOfThree(self, n):
        return (n > 0) and 1162261467 % n == 0


# Explanation:
# "Because 3^19(1,162,261,467) is the largest power of three under 2^31 - 1
# So we just neet to check if n > 0 and whether 3^19 % n is 0" """

# Counting Bits					3/11/2024
""" 
# Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

# Example 1:
# 		Input: n = 2
# 		Output: [0,1,1]
# Explanation:
# 		0 --> 0
# 		1 --> 1
# 		2 --> 10

# Example 2:
# 		Input: n = 5
# 		Output: [0,1,1,2,1,2]
# Explanation:
# 		0 --> 0
# 		1 --> 1
# 		2 --> 10
# 		3 --> 11
# 		4 --> 100
# 		5 --> 101

# Constraints:
# 		0 <= n <= 10^5

# Follow up:
# It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(1) and possibly in a single pass?


class Solution(object):
    def countBits(self, n):
        res = [0]
        for i in range(1, n + 1):
            res.append(bin(i).count("1"))
        return res

    print(countBits(None, 2))  #  [0,1,1]
    print(countBits(None, 5))  #  [0,1,1,2,1,2]


class Solution(object):
    def topVotedCountBits(self, num):
        counter = [0]
        for i in range(1, num + 1):
            counter.append(counter[i >> 1] + i % 2)
        return counter


# "counter[i >> 1]" is what's needed to make the pattern work """

# Power of Four					3/12/2024
""" 
# Given an integer n, return true if it is a power of four. Otherwise, return false.

# An integer n is a power of four, if there exists an integer x such that n == 4x.

# Example 1:
# 		Input: n = 16
# 		Output: true

# Example 2:
# 		Input: n = 5
# 		Output: false

# Example 3:
# 		Input: n = 1
# 		Output: true

# Constraints:
# 		-231 <= n <= 231 - 1
# 		Follow up: Could you solve it without loops/recursion?


class Solution(object):
    def isPowerOfFour(self, n):
        return n > 0 and (4**15) % n == 0 and math.log(n, 4).is_integer()

    print(isPowerOfFour(None, 16))  #  true
    print(isPowerOfFour(None, 5))  #  false
    print(isPowerOfFour(None, 1))  #  true
    print(isPowerOfFour(None, 2))  #  false
    print(isPowerOfFour(None, 8))  #  false


# 90% Runtime
# Having both 4**15%n and log4 covers numbers too large and divisible by 2

# Similar to top voted solution """

# Minimum Number of Groups to Create a Valid Assignment					3/13/2024
""" 
# You are given a collection of numbered balls and instructed to sort them into boxes for a nearly balanced distribution. There are two rules you must follow:

# Balls with the same box must have the same value. But, if you have more than one ball with the same number, you can put them in different boxes.

# The biggest box can only have one more ball than the smallest box.

# ​Return the fewest number of boxes to sort these balls following these rules.

# Example 1:
# 		Input:  balls = [3,2,3,2,3]
# 		Output:  2
# Explanation:
# 		We can sort balls into boxes as follows:
# 		[3,3,3]
# 		[2,2]
# 		The size difference between the two boxes doesn't exceed one.

# Example 2:
# 		Input:  balls = [10,10,10,3,1,1]
# 		Output:  4
# Explanation:
# 		We can sort balls into boxes as follows:
# 		[10]
# 		[10,10]
# 		[3]
# 		[1,1]
# 		You can't use fewer than four boxes while still following the rules. For example, putting all three balls numbered 10 in one box would break the rule about the maximum size difference between boxes.

# Constraints:
# 		1 <= nums.length <= 10^5
# 		1 <= nums[i] <= 10^9


class Solution(object):
    def minGroupsForValidAssignment(self, balls):
        # count freq of each type of ball
        freq = list(map(balls.count, set(balls)))

        # loop until valid min found
        min_freq = min(freq)
        found = False
        while not found:
            found = True
            for f in freq:
                if f > min_freq + 1:  # overflow
                    if (  # incompatible remainder
                        0 < (f % min_freq) < min_freq
                        and 0 < (f % (min_freq + 1)) < min_freq
                    ):
                        min_freq -= 1
                        found = False

        # count boxes
        res = 0
        for f in freq:
            if f > min_freq + 1:  # overflow
                boxes = f // (min_freq + 1)
                rem = f % (min_freq + 1)

                if rem < min_freq:  # smaller boxes are compatible
                    res += f // min_freq
                else:
                    res += boxes
            else:
                res += 1
        return res

    print(minGroupsForValidAssignment(None, [3, 2, 3, 2, 3]))  #   2
    print(minGroupsForValidAssignment(None, [10, 10, 10, 3, 1, 1]))  #   4
    print(minGroupsForValidAssignment(None, [2, 3, 2, 2, 2]))  #   3
    print(
        minGroupsForValidAssignment(None, [1, 1, 3, 3, 1, 1, 2, 2, 3, 1, 3, 2])
    )  #   5
    print(
        minGroupsForValidAssignment(None, [2, 1, 1, 2, 2, 3, 1, 3, 1, 1, 1, 1, 2])
    )  #   6


# Doesn't work for last test case


class Solution(object):
    def topVotedSol(self, nums):
        counts = collections.Counter(nums)
        min_freq = min(counts.values())

        for i in range(min_freq, 0, -1):
            curr_groups = 0
            for f in counts.values():
                a = f // (i + 1)
                b = f % (i + 1)

                if b == 0:
                    curr_groups += a
                elif i - b <= a:
                    curr_groups += a + 1
                else:
                    curr_groups = float("inf")

            if curr_groups != float("inf"):
                return curr_groups

        return len(nums)


class Solution(object):
    def revisedSol(self, balls):
        # count number of each type of ball
        freq = collections.Counter(balls)
        min_freq = min(freq.values())

        # starting with best case scenario,
        # decrement min_freq until valid output is found
        for i in range(min_freq, 0, -1):
            res = 0
            valid = True
            for f in freq.values():
                boxes = f // (i + 1)
                rem = f % (i + 1)

                if rem == 0:  # perfect fit
                    res += boxes
                elif i - rem <= boxes:  # smaller size fits
                    res += boxes + 1
                else:  # invalid
                    valid = False
                    break

            if valid:  # least boxes found
                return res

        # worst case
        return len(balls)


# 'elif i - rem <= boxes:' seems to be the key here

# Day 1000 🔥

# 1000 days feels crazy, but diversifying into different languages has really been the key.
# I picked up C and Python since we we're seeing them in class, and its made a huge impact.

# I am currently half-way through my Software Engineering degree and looking for my first co-op placement.
# Studying has been easy now that its all coding relevant and grades are showing that :^)

# I look forward to graduating sometime around day 2000! """

# Reverse String					3/14/2024
""" 
# Write a function that reverses a string. The input string is given as an array of characters s.

# You must do this by modifying the input array in-place with O(1) extra memory.

# Example 1:
# 		Input: s = ["h","e","l","l","o"]
# 		Output: ["o","l","l","e","h"]

# Example 2:
# 		Input: s = ["H","a","n","n","a","h"]
# 		Output: ["h","a","n","n","a","H"]

# Constraints:
# 		1 <= s.length <= 105
# 		s[i] is a printable ascii character.


class Solution(object):
    def reverseString(self, s):
        i, j = 0, len(s) - 1
        while i < j:
            s[i], s[j] = s[j], s[i]
            i += 1
            j -= 1

    print(reverseString(None, ["h", "e", "l", "l", "o"]))  #  ["o","l","l","e","h"]
    print(
        reverseString(None, ["H", "a", "n", "n", "a", "h"])
    )  #  ["h","a","n","n","a","H"]


class Solution(object):
    def topVotedReverseString(self, s):
        s[:] = s[::-1]


# forgot about this python trick """

# Reverse Vowels of a String					3/15/2024
""" 
# Given a string s, reverse only all the vowels in the string and return it.

# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

# Example 1:
# 		Input: s = "hello"
# 		Output: "holle"

# Example 2:
# 		Input: s = "leetcode"
# 		Output: "leotcede"

# Constraints:
# 		1 <= s.length <= 3 * 105
# 		s consist of printable ASCII characters.


class Solution(object):
    def reverseVowels(self, s):
        vowels = "aeiouAEIOU"
        s = list(s)
        i, j = 0, len(s) - 1
        while i < j:
            if s[i] in vowels and s[j] in vowels:
                s[i], s[j] = s[j], s[i]
                i += 1
                j -= 1
            if s[i] not in vowels:
                i += 1
            if s[j] not in vowels:
                j -= 1
        return "".join(s)

    print(reverseVowels(None, "hello"))  #  "holle"
    print(reverseVowels(None, "leetcode"))  #  "leotcede"


# 92% Runtime
# Same as top voted """

# Find the K-or of an Array					3/16/2024
""" 
# You are given an integer array nums, and an integer k. Let's introduce K-or operation by extending the standard bitwise OR. In K-or, a bit position in the result is set to 1 if at least k numbers in nums have a 1 in that position.

# Return the K-or of nums.

# Example 1:
# 		Input: nums = [7,12,9,8,9,15], k = 4
# 		Output: 9
# Explanation:
# 		Represent numbers in binary:
# 		Number	Bit 3	Bit 2	Bit 1	Bit 0
# 		7	0	1	1	1
# 		12	1	1	0	0
# 		9	1	0	0	1
# 		8	1	0	0	0
# 		9	1	0	0	1
# 		15	1	1	1	1
# 		Result = 9	1	0	0	1
# 		Bit 0 is set in 7, 9, 9, and 15. Bit 3 is set in 12, 9, 8, 9, and 15.
# 		Only bits 0 and 3 qualify. The result is (1001)2 = 9.

# Example 2:
# 		Input: nums = [2,12,1,11,4,5], k = 6
# 		Output: 0
# Explanation: No bit appears as 1 in all six array numbers, as required for K-or with k = 6. Thus, the result is 0.

# Example 3:
# 		Input: nums = [10,8,5,9,11,6,8], k = 1
# 		Output: 15
# Explanation: Since k == 1, the 1-or of the array is equal to the bitwise OR of all its elements. Hence, the answer is 10 OR 8 OR 5 OR 9 OR 11 OR 6 OR 8 = 15.

# Constraints:
# 		1 <= nums.length <= 50
# 		0 <= nums[i] < 2^31
# 		1 <= k <= nums.length


class Solution(object):
    def findKOr(self, nums, k):
        res = 0
        cont = True
        p = 0

        while cont:
            cont = False
            count = 0
            for i, n in enumerate(nums):
                count += n % 2  # least significant bit is 1
                nums[i] = n >> 1  # shift bits

                if nums[i] > 0:  # not all bits have been counted (continue looping)
                    cont = True

            res += (2 * (count >= k)) ** p

            if p == 0:  # resolve 0^0 == 1
                res -= count < k

            p += 1  # increment power

        return res

    print(findKOr(None, [7, 12, 9, 8, 9, 15], 4))  #  9
    print(findKOr(None, [2, 12, 1, 11, 4, 5], 6))  #  0
    print(findKOr(None, [10, 8, 5, 9, 11, 6, 8], 1))  #  15


# 90% Runtime
# Wish I could remove some variables


class Solution:
    def topVotedFindKOr(self, nums, k):
        ans = 0

        for i in range(32):
            count = 0

            for num in nums:
                if 2**i & num == 2**i:
                    count += 1

            if count >= k:
                ans |= 2**i

        return ans """

# Intersection of Two Arrays					3/17/2024
""" 
# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

# Example 1:
# 		Input: nums1 = [1,2,2,1], nums2 = [2,2]
# 		Output: [2]

# Example 2:
# 		Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# 		Output: [9,4]
# Explanation: [4,9] is also accepted.

# Constraints:
# 		1 <= nums1.length, nums2.length <= 1000
# 		0 <= nums1[i], nums2[i] <= 1000


class Solution(object):
    def intersection(self, nums1, nums2):
        res = []
        for n in set(nums1):
            if n in nums2:
                res.append(n)
        return res

    print(intersection(None, [1, 2, 2, 1], [2, 2]))  #  [2]
    print(intersection(None, [4, 9, 5], [9, 4, 9, 8, 4]))  #  [9,4]


class Solution(object):
    def topVotedIntersection(self, nums1, nums2):
        return list(set(nums1) & set(nums2)) """

# Water and Jug Problem					3/18/2024
""" 
# You are given two jugs with capacities x liters and y liters. You have an infinite water supply. Return whether the total amount of water in both jugs may reach target using the following operations:

# Fill either jug completely with water.
# Completely empty either jug.
# Pour water from one jug into another until the receiving jug is full, or the transferring jug is empty.

# Example 1:
# 		Input:  x = 3, y = 5, target = 4
# 		Output:  true
# Explanation:
# 		Follow these steps to reach a total of 4 liters:
# 		Fill the 5-liter jug (0, 5).
# 		Pour from the 5-liter jug into the 3-liter jug, leaving 2 liters (3, 2).
# 		Empty the 3-liter jug (0, 2).
# 		Transfer the 2 liters from the 5-liter jug to the 3-liter jug (2, 0).
# 		Fill the 5-liter jug again (2, 5).
# 		Pour from the 5-liter jug into the 3-liter jug until the 3-liter jug is full. This leaves 4 liters in the 5-liter jug (3, 4).
# 		Empty the 3-liter jug. Now, you have exactly 4 liters in the 5-liter jug (0, 4).
# 		Reference: The Die Hard example.

# Example 2:
# 		Input:  x = 2, y = 6, target = 5
# 		Output:  false

# Example 3:
# 		Input:  x = 1, y = 2, target = 3
# 		Output:  true
# Explanation: Fill both jugs. The total amount of water in both jugs is equal to 3 now.

# Constraints:
# 		1 <= x, y, target <= 103


class Solution(object):
    def canMeasureWater(self, x, y, t):
        # easy cases
        if x + y < t:
            return False
        if x + y == t or x == 1 or y == 1 or x == t or y == t:
            return True

        seen = set()

        def state(a, b):
            # a: contents of jug 1
            # b: contents of jug 2
            if (a, b) in seen:  # avoid infinite loops
                return False
            seen.add((a, b))

            if a + b == t:
                return True

            # 6 possible alternatives to each state:
            return (
                state(x, b)  # fill jug 1
                or state(a, y)  # fill jug 2
                or state(0, b)  # empty jug 1
                or state(a, 0)  # empty jug 2
                or state(
                    0 if ((y - b) > a) else (a - (y - b)), min(y, a + b)
                )  # jug 1 empties into jug 2
                or state(
                    min(x, a + b), 0 if ((x - a) > b) else (b - (x - a))
                )  # jug 2 empties into jug 1
            )

        return state(0, 0)

    print(canMeasureWater(None, 3, 5, 4))  #   true
    print(canMeasureWater(None, 2, 6, 5))  #   false
    print(canMeasureWater(None, 1, 2, 3))  #   true
    print(canMeasureWater(None, 34, 5, 6))  #   true


# There is clearly a math solution


class Solution(object):
    def topVotedCanMeasureWater(self, x, y, z):
        a, b = x, y
        while y:
            r = x % y
            x = y
            y = r
        return bool(not z or (x and z <= a + b and not z % x)) """

# Intersection of Two Arrays II					3/19/2024
""" 
# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

# Example 1:
# 		Input: nums1 = [1,2,2,1], nums2 = [2,2]
# 		Output: [2,2]

# Example 2:
# 		Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# 		Output: [4,9]
# Explanation: [9,4] is also accepted.

# Constraints:
# 		1 <= nums1.length, nums2.length <= 1000
# 		0 <= nums1[i], nums2[i] <= 1000

# Follow up:
#   What if the given array is already sorted? How would you optimize your algorithm?
#   What if nums1's size is small compared to nums2's size? Which algorithm is better?
#   What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


class Solution(object):
    def intersect(self, nums1, nums2):
        count1, count2 = collections.Counter(nums1), collections.Counter(nums2)
        res = []
        for k in count1:
            if k in count2:
                res += [k] * min(count1[k], count2[k])
        return res

    print(intersect(None, [1, 2, 2, 1], [2, 2]))  #  [2,2]
    print(intersect(None, [4, 9, 5], [9, 4, 9, 8, 4]))  #  [4,9]


class Solution(object):
    def topVotedIntersect(self, nums1, nums2):

        nums1, nums2 = sorted(nums1), sorted(nums2)
        pt1 = pt2 = 0
        res = []

        while True:
            try:
                if nums1[pt1] > nums2[pt2]:
                    pt2 += 1
                elif nums1[pt1] < nums2[pt2]:
                    pt1 += 1
                else:
                    res.append(nums1[pt1])
                    pt1 += 1
                    pt2 += 1
            except IndexError:
                break

        return res """

# Valid Perfect Square					3/20/2024
""" 
# Given a positive integer num, return true if num is a perfect square or false otherwise.

# A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

# You must not use any built-in library function, such as sqrt.

# Example 1:
# 		Input: num = 16
# 		Output: true
# Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

# Example 2:
# 		Input: num = 14
# 		Output: false
# Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

# Constraints:
# 		1 <= num <= 2^31 - 1


class Solution(object):
    def isPerfectSquare(self, num):
        for i in range(46341):
            if i**2 == num:
                return True
            elif i**2 > num:
                return False

    print(isPerfectSquare(None, 16))  #  true
    print(isPerfectSquare(None, 14))  #  false


# 46341**2 = 2^31 - 1


class Solution(object):
    def isPerfectSquare(self, num):
        if num < 0:
            return False
        x, i = 0, 1
        while x < num:
            x += i
            i += 2
        return x == num


# 1*1 = 1
# 2*2 = 4     -> 3 + 1
# 3*3 = 9     -> 5 + 4
# 4*4 = 16    -> 7 + 9
# 5*5 = 25    -> 9 + 16
# 6*6 = 36    -> 11 + 25
# ... """

# Make Three Strings Equal					3/21/2024
""" 
# You are given three strings: s1, s2, and s3. In one operation you can choose one of these strings and delete its rightmost character. Note that you cannot completely empty a string.

# Return the minimum number of operations required to make the strings equal. If it is impossible to make them equal, return -1.

# Example 1:
# 		Input: s1 = "abc", s2 = "abb", s3 = "ab"
# 		Output: 2
# Explanation: Deleting the rightmost character from both s1 and s2 will result in three equal strings.

# Example 2:
# 		Input: s1 = "dac", s2 = "bac", s3 = "cac"
# 		Output: -1
# Explanation: Since the first letters of s1 and s2 differ, they cannot be made equal.

# Constraints:
# 		1 <= s1.length, s2.length, s3.length <= 100
# 		s1, s2 and s3 consist only of lowercase English letters.


class Solution(object):
    def findMinimumOperations(self, s1, s2, s3):
        if s1[0] != s2[0] or s1[0] != s3[0] or s2[0] != s3[0]:  # impossible
            return -1
        if s1 == s2 and s1 == s3 and s2 == s3:  # no operations required
            return 0

        minlen = min(len(s1), len(s2), len(s3))
        i = 0
        while i < minlen:  # find first char where they no longer equal
            if s1[i] != s2[i] or s1[i] != s3[i] or s2[i] != s3[i]:
                break
            i += 1

        return len(s1[i:]) + len(s2[i:]) + len(s3[i:])  # cut off remainders

    print(findMinimumOperations(None, "abc", "abb", "ab"))  #  2
    print(findMinimumOperations(None, "dac", "bac", "bac"))  #  -1
    print(findMinimumOperations(None, "k", "kfb", "krcnf"))  #  6

    # 100% runtime


class Solution:
    def topVotedFindMinimumOperations(self, s1, s2, s3):
        size, l1, l2, l3 = 0, len(s1), len(s2), len(s3)

        for a, b, c in zip(s1, s2, s3):
            if a == b == c:
                size += 1
            else:
                break

        return (l1 + l2 + l3) - 3 * size if size > 0 else -1 """

# Maximize Area of Square Hole in Grid					3/22/2024
""" 
# You are given the two integers, n and m and two integer arrays, hBars and vBars. The grid has n + 2 horizontal and m + 2 vertical bars, creating 1 x 1 unit cells. The bars are indexed starting from 1.

# You can remove some of the bars in hBars from horizontal bars and some of the bars in vBars from vertical bars. Note that other bars are fixed and cannot be removed.

# Return an integer denoting the maximum area of a square-shaped hole in the grid, after removing some bars (possibly none).

# Example 1:
# 		Input: n = 2, m = 1, hBars = [2,3], vBars = [2]
# 		Output: 4
# Explanation:
# 		The left image shows the initial grid formed by the bars. The horizontal bars are [1,2,3,4], and the vertical bars are [1,2,3].
# 		One way to get the maximum square-shaped hole is by removing horizontal bar 2 and vertical bar 2.

# Example 2:
# 		Input: n = 1, m = 1, hBars = [2], vBars = [2]
# 		Output: 4
# Explanation:
# 		To get the maximum square-shaped hole, we remove horizontal bar 2 and vertical bar 2.

# Example 3:
# 		Input: n = 2, m = 3, hBars = [2,3], vBars = [2,4]
# 		Output: 4
# Explanation:
# 		One way to get the maximum square-shaped hole is by removing horizontal bar 3, and vertical bar 4.

# Constraints:
# 		1 <= n <= 109
# 		1 <= m <= 109
# 		1 <= hBars.length <= 100
# 		2 <= hBars[i] <= n + 1
# 		1 <= vBars.length <= 100
# 		2 <= vBars[i] <= m + 1
# 		All values in hBars are distinct.
# 		All values in vBars are distinct.


class Solution(object):
    def maximizeSquareHoleArea(self, n, m, hBars, vBars):
        # To maximize the area, look for max consecutive hBars and max consecutive vBars
        hBars = sorted(hBars)
        vBars = sorted(vBars)

        curCount = 1
        hMax = 1
        for i in range(1, len(hBars)):
            if hBars[i] == hBars[i - 1] + 1:
                curCount += 1
            else:
                hMax = max(hMax, curCount)
                curCount = 1
        hMax = max(hMax, curCount)

        curCount = 1
        vMax = 1
        for i in range(1, len(vBars)):
            if vBars[i] == vBars[i - 1] + 1:
                curCount += 1
            else:
                vMax = max(vMax, curCount)
                curCount = 1
        vMax = max(vMax, curCount)

        # Must also be square, therefore use min of both
        return (min(hMax, vMax) + 1) ** 2

    print(maximizeSquareHoleArea(None, 2, 1, [2, 3], [2]))  #  4
    print(maximizeSquareHoleArea(None, 1, 1, [2], [2]))  #  4
    print(maximizeSquareHoleArea(None, 2, 3, [2, 3], [2, 4]))  #  4
    print(maximizeSquareHoleArea(None, 3, 2, [3, 2, 4], [3, 2]))  #  9
    print(maximizeSquareHoleArea(None, 2, 4, [2, 3], [4, 2, 3, 5]))  #  9


# 80% Runtime


class Solution:
    def maximizeSquareHoleArea(self, n, m, hBars, vBars):
        def findLongestConsecutiveElements(numsSet):
            res = 1
            for num in numsSet:
                count = 1
                current = num
                while current + 1 in numsSet:
                    current += 1
                    count += 1
                res = max(res, count)
            return res

        res = 1
        if len(hBars) == 0 or len(vBars) == 0:
            return 1
        hSet, vSet = set(hBars), set(vBars)
        maxHBars, maxVBars = findLongestConsecutiveElements(
            hSet
        ), findLongestConsecutiveElements(vSet)
        return (min(maxHBars, maxVBars) + 1) ** 2


# same same """

# Guess Number Higher or Lower					3/23/2024
""" 
# We are playing the Guess Game. The game is as follows:
# I pick a number from 1 to n. You have to guess which number I picked.
# Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

# You call a pre-defined API int guess(int num), which returns three possible results:
# -1: Your guess is higher than the number I picked (i.e. num > pick).
# 1: Your guess is lower than the number I picked (i.e. num < pick).
# 0: your guess is equal to the number I picked (i.e. num == pick).

# Return the number that I picked.

# Example 1:
# 		Input: n = 10, pick = 6
# 		Output: 6

# Example 2:
# 		Input: n = 1, pick = 1
# 		Output: 1

# Example 3:
# 		Input: n = 2, pick = 1
# 		Output: 1

# Constraints:
# 		1 <= n <= 231 - 1
# 		1 <= pick <= n


# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
def guess(num):
    if num < 6:
        return 1
    elif num > 6:
        return -1
    else:
        return 0


class Solution(object):
    def guessNumber(self, n):
        l, r = 1, n
        while l < r:
            m = (l + r) // 2
            g = guess(m)
            if g == -1:  # guess is higher
                r = m - 1
            elif g == 1:  # guess is lower
                l = m + 1
            else:  # found num
                return m
        return l

    print(guessNumber(None, 10))  #  6
    # print(guessNumber(None, 1, 1))  #  1
    # print(guessNumber(None, 2, 1))  #  1


# Binary Search


def topVotedGuessNumber(self, n):
    lowerBound, upperBound = 1, n
    # Binary division faster than (lowerBound + upperBound) //2
    myGuess = (lowerBound + upperBound) >> 1
    # walrus operator ':=' - assigns value of the function to the variable 'res'
    # and then compare res with 0
    while (res := guess(myGuess)) != 0:
        if res == 1:
            lowerBound = myGuess + 1
        else:
            upperBound = myGuess - 1
        myGuess = (lowerBound + upperBound) >> 1

    return myGuess
 """

# Ransom Note					3/24/2024
""" 
# Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

# Each letter in magazine can only be used once in ransomNote.

# Example 1:
# 		Input: ransomNote = "a", magazine = "b"
# 		Output: false

# Example 2:
# 		Input: ransomNote = "aa", magazine = "ab"
# 		Output: false

# Example 3:
# 		Input: ransomNote = "aa", magazine = "aab"
# 		Output: true

# Constraints:
# 		1 <= ransomNote.length, magazine.length <= 105
# 		ransomNote and magazine consist of lowercase English letters.


class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        count = [0] * 26
        for c in magazine:
            count[ord(c) - 97] += 1
        for c in ransomNote:
            if count[ord(c) - 97] <= 0:
                return False
            count[ord(c) - 97] -= 1
        return True

    print(canConstruct(None, "a", "b"))  #  false
    print(canConstruct(None, "aa", "ab"))  #  false
    print(canConstruct(None, "aa", "aab"))  #  true


class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        st1, st2 = collections.Counter(ransomNote), collections.Counter(magazine)
        if st1 & st2 == st1:
            return True
        return False


# Counter showing up again """

# First Unique Character in a String					3/25/2024
""" 
# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

# Example 1:
# 		Input: s = "leetcode"
# 		Output: 0

# Example 2:
# 		Input: s = "loveleetcode"
# 		Output: 2

# Example 3:
# 		Input: s = "aabb"
# 		Output: -1

# Constraints:
# 		1 <= s.length <= 105
# 		s consists of only lowercase English letters.


class Solution(object):
    def firstUniqChar(self, s):
        count = collections.Counter(s)
        for i, c in enumerate(s):
            if count[c] == 1:
                return i
        return -1

    print(firstUniqChar(None, "leetcode"))  #  0
    print(firstUniqChar(None, "loveleetcode"))  #  2
    print(firstUniqChar(None, "aabb"))  #  -1


class Solution(object):
    def firstUniqChar(self, s):
        hset = collections.Counter(s)
        for idx in range(len(s)):
            if hset[s[idx]] == 1:
                return idx
        return -1


# same same """

# Find the Difference					3/26/2024
""" 
# You are given two strings s and t.

# String t is generated by random shuffling string s and then add one more letter at a random position.

# Return the letter that was added to t.

# Example 1:
# 		Input: s = "abcd", t = "abcde"
# 		Output: "e"
# Explanation: 'e' is the letter that was added.

# Example 2:
# 		Input: s = "", t = "y"
# 		Output: "y"

# Constraints:
# 		0 <= s.length <= 1000
# 		t.length == s.length + 1
# 		s and t consist of lowercase English letters.


class Solution(object):
    def findTheDifference(self, s, t):
        return list((collections.Counter(t) - collections.Counter(s)).keys())[0]

    print(findTheDifference(None, "abcd", "abcde"))  #  "e"
    print(findTheDifference(None, "", "y"))  #  "y"


# Python is very intuitive for stuff like this


class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        c = 0
        for cs in s:
            c ^= ord(cs)  # ord is ASCII value
        for ct in t:
            c ^= ord(ct)
        return chr(c)  # chr = convert ASCII into character


# XORing everything, you're left with the outlier """

# Is Subsequence					3/27/2024
""" 
# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

# A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

# Example 1:
# 		Input: s = "abc", t = "ahbgdc"
# 		Output: true

# Example 2:
# 		Input: s = "axc", t = "ahbgdc"
# 		Output: false

# Constraints:
# 		0 <= s.length <= 100
# 		0 <= t.length <= 104
# 		s and t consist only of lowercase English letters.

# Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?


class Solution(object):
    def isSubsequence(self, s, t):
        t = list(t)
        i = 0
        for c in s:
            try:
                i = t.index(c)
                t = t[i + 1 :]
            except:
                return False
        return True

    print(isSubsequence(None, "abc", "ahbgdc"))  #  true
    print(isSubsequence(None, "axc", "ahbgdc"))  #  false
    print(isSubsequence(None, "aaaaaa", "bbaaaa"))  #  false
    print(isSubsequence(None, "acb", "ahbgdc"))  #  false


class Solution:
    def topVotedIsSubsequence(self, s: str, t: str) -> bool:
        if len(s) > len(t):
            return False
        if len(s) == 0:
            return True
        subsequence = 0
        for i in range(0, len(t)):
            if subsequence <= len(s) - 1:
                print(s[subsequence])
                if s[subsequence] == t[i]:
                    subsequence += 1
        return subsequence == len(s) """

# Binary Watch					3/28/2024
""" 
# A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

# For example, the below binary watch reads "4:51".

# Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.

# The hour must not contain a leading zero.
# For example, "01:00" is not valid. It should be "1:00".

# The minute must consist of two digits and may contain a leading zero.
# For example, "10:2" is not valid. It should be "10:02".

# Example 1:
# 		Input: turnedOn = 1
# 		Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

# Example 2:
# 		Input: turnedOn = 9
# 		Output: []

# Constraints:
# 		0 <= turnedOn <= 10


class Solution(object):
    def readBinaryWatch(self, on):
        res = []
        for n in range(2**10):
            # All 10 bit binary nums that have correct amount of 1s
            if bin(n).count("1") == on:
                # Avoid illegal states
                if (
                    n & 0b1100000000 != 0b1100000000  # 8+4=12 hrs
                    and n & 0b0000111100 != 0b0000111100  # 32+16+8+4=60 mins
                ):
                    time = ""

                    # hours
                    h = (n & 0b1111000000) >> 6
                    time += str(h) + ":"

                    # mins
                    m = n & 0b111111
                    time += ("0" if m < 10 else "") + str(m)  # leading 0

                    res.append(time)
        return res

    print(
        readBinaryWatch(None, 1)
    )  #  ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
    print(readBinaryWatch(None, 9))  #  []


class Solution:
    def readBinaryWatch(self, turnedOn):
        output = []
        # Loop through all possible combinations of hours and minutes and count the number of set bits
        for h in range(12):
            for m in range(60):
                if (
                    bin(h).count("1") + bin(m).count("1") == turnedOn
                ):  # Check if the number of set bits in hours and minutes equals the target number
                    output.append(
                        f"{h}:{m:02d}"
                    )  # Add the valid combination of hours and minutes to the output list
        return output


# So much cleaner
# Nested for loop avoids invalid times """

# Sum of Left Leaves					3/29/2024
""" 
# Given the root of a binary tree, return the sum of all left leaves.

# A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

# Example 1:
# 		Input: root = [3,9,20,null,null,15,7]
# 		Output: 24
# Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

# Example 2:
# 		Input: root = [1]
# 		Output: 0

# Constraints:
# 		The number of nodes in the tree is in the range [1, 1000].
# 		-1000 <= Node.val <= 1000


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def sumOfLeftLeaves(self, root):
        def traverse(node, dir):
            if not node:
                return 0
            if not node.left and not node.right:
                return node.val if dir == "l" else 0
            return traverse(node.left, "l") + traverse(node.right, "r")

        return traverse(root.left, "l") + traverse(root.right, "r")


class Solution:
    def topVotedSumOfLeftLeaves(self, root: TreeNode) -> int:
        result = 0
        stack = [(root, False)]
        while stack:
            curr, is_left = stack.pop()
            if not curr:
                continue
            if not curr.left and not curr.right:
                if is_left:
                    result += curr.val
            else:
                stack.append((curr.left, True))
                stack.append((curr.right, False))
        return result """

# Convert a Number to Hexadecimal					3/30/2024
""" 
# Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

# All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

# Note: You are not allowed to use any built-in library method to directly solve this problem.

# Example 1:
# 		Input: num = 26
# 		Output: "1a"

# Example 2:
# 		Input: num = -1
# 		Output: "ffffffff"

# Constraints:
# 		-231 <= num <= 231 - 1


class Solution(object):
    def toHex(self, num):
        if num == 0:
            return "0"
        if num < 0:
            num = 2**32 + num

        res = ""
        hexDict = {10: "a", 11: "b", 12: "c", 13: "d", 14: "e", 15: "f"}
        while num > 0:
            n = num % 16
            if n >= 10:
                n = hexDict[n]
            res = str(n) + res
            num //= 16

        return res

    print(toHex(None, 26))  #  "1a"
    print(toHex(None, -1))  #  "ffffffff"


def toHex(self, num: int) -> str:
    if num == 0:
        return "0"
    map = "0123456789abcdef"
    result = ""
    # if negative (two's compliment)
    if num < 0:
        num += 2**32
    while num > 0:
        digit = num % 16
        num = (num - digit) // 16
        result += str(map[digit])
    return result[::-1]


# I prefer their 'map' over my dict """

# Longest Palindrome					3/31/2024
""" 
# Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

# Example 1:
# 		Input: s = "abccccdd"
# 		Output: 7
# Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

# Example 2:
# 		Input: s = "a"
# 		Output: 1
# Explanation: The longest palindrome that can be built is "a", whose length is 1.

# Constraints:
# 		1 <= s.length <= 2000
# 		s consists of lowercase and/or uppercase English letters only.


class Solution(object):
    def longestPalindrome(self, s):
        res = 0
        count = [0] * (ord("z") - ord("A"))
        for c in s:
            idx = ord(c) - 66  # ord('A') = 65
            if count[idx] == 1:
                res += 2
                count[idx] = 0
            else:
                count[idx] += 1

        if 1 in count:  # middle unique char
            res += 1

        return res

    print(longestPalindrome(None, "abccccdd"))  #  7
    print(longestPalindrome(None, "a"))  #  1


def topVotedLongestPalindrome_set(s):
    ss = set()
    for letter in s:
        if letter not in ss:
            ss.add(letter)
        else:
            ss.remove(letter)
    if len(ss) != 0:
        return len(s) - len(ss) + 1
    else:
        return len(s) """

# Fizz Buzz					4/1/2024
""" 
# Given an integer n, return a string array answer (1-indexed) where:
# answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
# answer[i] == "Fizz" if i is divisible by 3.
# answer[i] == "Buzz" if i is divisible by 5.
# answer[i] == i (as a string) if none of the above conditions are true.

# Example 1:
# 		Input: n = 3
# 		Output: ["1","2","Fizz"]

# Example 2:
# 		Input: n = 5
# 		Output: ["1","2","Fizz","4","Buzz"]

# Example 3:
# 		Input: n = 15
# 		Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

# Constraints:
# 		1 <= n <= 104


class Solution(object):
    def fizzBuzz(self, n):
        res = [None] * n
        for i in range(1, n + 1):
            c = ""
            if i % 3 == 0:
                c += "Fizz"
            if i % 5 == 0:
                c += "Buzz"
            if len(c) == 0:
                c = str(i)
            res[i - 1] = c
        return res

    print(fizzBuzz(None, 3))  #  ["1","2","Fizz"]
    print(fizzBuzz(None, 5))  #  ["1","2","Fizz","4","Buzz"]
    print(
        fizzBuzz(None, 15)
    )  #  ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


def topVotedFizzBuzz(self, n):
    f, b, fb = "Fizz", "Buzz", "FizzBuzz"
    arr = [str(x + 1) for x in range(n)]
    for i in range(2, n, 3):
        arr[i] = f
    for i in range(4, n, 5):
        arr[i] = b
    for i in range(14, n, 15):
        arr[i] = fb
    return arr """

# Third Maximum Number					4/2/2024
""" 
# Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

# Example 1:
# 		Input: nums = [3,2,1]
# 		Output: 1
# Explanation:
# 		The first distinct maximum is 3.
# 		The second distinct maximum is 2.
# 		The third distinct maximum is 1.

# Example 2:
# 		Input: nums = [1,2]
# 		Output: 2
# Explanation:
# 		The first distinct maximum is 2.
# 		The second distinct maximum is 1.
# 		The third distinct maximum does not exist, so the maximum (2) is returned instead.

# Example 3:
# 		Input: nums = [2,2,3,1]
# 		Output: 1
# Explanation:
# 		The first distinct maximum is 3.
# 		The second distinct maximum is 2 (both 2's are counted together since they have the same value).
# 		The third distinct maximum is 1.

# Constraints:
# 		1 <= nums.length <= 104
# 		-231 <= nums[i] <= 231 - 1

# Follow up: Can you find an O(n) solution?


class Solution(object):
    def thirdMax(self, nums):
        maxs = [-float("inf")] * 3
        nums = set(nums)

        for n in nums:
            if n > maxs[0]:
                maxs = [n] + maxs[:2]
            elif n > maxs[1]:
                maxs = maxs[:1] + [n] + maxs[1:2]
            elif n > maxs[2]:
                maxs = maxs[:2] + [n]

        return maxs[2] if len(nums) > 2 else maxs[0]

    print(thirdMax(None, [3, 2, 1]))  #  1
    print(thirdMax(None, [1, 2]))  #  2
    print(thirdMax(None, [2, 2, 3, 1]))  #  1
    print(thirdMax(None, [-4, -5, -3, -2, -1]))  #  -3


class Solution:
    def topVotedThirdMax(self, nums):
        n, T = list(set(nums)), [float("-inf")] * 3
        for i in n:
            if i > T[0]:
                T = [i, T[0], T[1]]
                continue
            if i > T[1]:
                T = [T[0], i, T[1]]
                continue
            if i > T[2]:
                T = [T[0], T[1], i]
        return T[2] if T[2] != float("-inf") else T[0]


# same idea """

# Add Strings					4/3/2024
""" 
# Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

# You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

# Example 1:
# 		Input: num1 = "11", num2 = "123"
# 		Output: "134"

# Example 2:
# 		Input: num1 = "456", num2 = "77"
# 		Output: "533"

# Example 3:
# 		Input: num1 = "0", num2 = "0"
# 		Output: "0"

# Constraints:
# 		1 <= num1.length, num2.length <= 104
# 		num1 and num2 consist of only digits.
# 		num1 and num2 don't have any leading zeros except for the zero itself.


class Solution(object):
    def addStrings(self, n1, n2):
        i, j = len(n1) - 1, len(n2) - 1
        c = 0
        res = ""

        while i >= 0 or j >= 0:
            if i >= 0:
                a = int(n1[i])
                i -= 1
            if j >= 0:
                b = int(n2[j])
                j -= 1

            sum = a + b + c
            a, b, c = 0, 0, 0
            if sum >= 10:
                c = 1
                sum %= 10

            res = str(sum) + res

        if c == 1:
            res = "1" + res

        return res

    print(addStrings(None, "11", "123"))  #  "134"
    print(addStrings(None, "456", "77"))  #  "533"
    print(addStrings(None, "0", "0"))  #  "0"
    print(addStrings(None, "1", "9"))  #  "10"


class Solution:
    def topVotedAddStrings(self, num1, num2):
        def str2int(num):
            result = 0
            for n in num:
                result = result * 10 + ord(n) - ord("0")
            return result

        return str(str2int(num1) + str2int(num2))


# Much leaner """

# Number of Segments in a String					4/4/2024
""" 
# Given a string s, return the number of segments in the string.

# A segment is defined to be a contiguous sequence of non-space characters.

# Example 1:
# 		Input: s = "Hello, my name is John"
# 		Output: 5
# Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

# Example 2:
# 		Input: s = "Hello"
# 		Output: 1

# Constraints:
# 		0 <= s.length <= 300
# 		s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
# 		The only space character in s is ' '.


class Solution(object):
    def countSegments(self, s):
        count = 0
        prev = " "
        for c in s:
            if prev == " " and c != " ":
                count += 1
            prev = c
        return count

    print(countSegments(None, "Hello, my name is John"))  #  5
    print(countSegments(None, "Hello"))  #  1


class Solution:
    def topVotedCountSegments(self, s: str) -> int:
        count = 0
        for i in range(len(s)):
            if s[i] != " " and (i == 0 or s[i - 1] == " "):
                count += 1
        return count """

# Arranging Coins					4/5/2024
""" 
# You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

# Given the integer n, return the number of complete rows of the staircase you will build.

# Example 1:
# 		Input: n = 5
# 		Output: 2
# Explanation: Because the 3rd row is incomplete, we return 2.

# Example 2:
# 		Input: n = 8
# 		Output: 3
# Explanation: Because the 4th row is incomplete, we return 3.

# Constraints:
# 		1 <= n <= 231 - 1


class Solution(object):
    def arrangeCoins(self, n):
        rows = 0
        for i in range(1, n + 1):
            n -= i
            if n >= 0:
                rows += 1
            else:
                break
        return rows

    print(arrangeCoins(None, 5))  #  2
    print(arrangeCoins(None, 8))  #  3


class Solution(object):
    def topVotedArrangeCoins(self, n):
        completeStairs = 0
        i = 1
        while n >= 0:
            n -= i
            if n >= 0:
                completeStairs += 1
            i += 1

        return completeStairs """

# Find All Numbers Disappeared in an Array					4/6/2024
""" 
# Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

# Example 1:
# 		Input: nums = [4,3,2,7,8,2,3,1]
# 		Output: [5,6]

# Example 2:
# 		Input: nums = [1,1]
# 		Output: [2]

# Constraints:
# 		n == nums.length
# 		1 <= n <= 105
# 		1 <= nums[i] <= n

# Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.


class Solution(object):
    def findDisappearedNumbers(self, nums):
        res = []
        for i in range(1, len(nums) + 1):
            if i not in nums:
                res.append(i)
        return res

    print(findDisappearedNumbers(None, [4, 3, 2, 7, 8, 2, 3, 1]))  #  [5,6]
    print(findDisappearedNumbers(None, [1, 1]))  #  [2]


class Solution:
    def findDisappearedNumbers(self, nums):
        return set(range(1, len(nums) + 1)) - set(nums) """

# Assign Cookies					4/7/2024
""" 
# Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

# Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

# Example 1:
# 		Input: g = [1,2,3], s = [1,1]
# 		Output: 1
# Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
# 		And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
# 		You need to output 1.

# Example 2:
# 		Input: g = [1,2], s = [1,2,3]
# 		Output: 2
# Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
# 		You have 3 cookies and their sizes are big enough to gratify all of the children,
# 		You need to output 2.

# Constraints:
# 		1 <= g.length <= 3 * 10^4
# 		0 <= s.length <= 3 * 10^4
# 		1 <= g[i], s[j] <= 2^31 - 1


class Solution(object):
    def findContentChildren(self, g, s):
        g, s = sorted(g), sorted(s)
        gSize, sSize = len(g), len(s)
        kidIdx, cookieIdx = 0, 0
        while kidIdx < gSize and cookieIdx < sSize:
            if s[cookieIdx] >= g[kidIdx]:
                kidIdx += 1
            cookieIdx += 1
        return kidIdx

    print(findContentChildren(None, [1, 2, 3], [1, 1]))  #  1
    print(findContentChildren(None, [1, 2], [1, 2, 3]))  #  2


# Same as my C solution


class Solution(object):
    def findContentChildren(self, g, s):
        cookiesNums = len(s)
        if cookiesNums == 0:
            return 0
        g.sort()
        s.sort()

        maxNum = 0
        cookieIndex = cookiesNums - 1
        childIndex = len(g) - 1
        while cookieIndex >= 0 and childIndex >= 0:
            if s[cookieIndex] >= g[childIndex]:
                maxNum += 1
                cookieIndex -= 1
                childIndex -= 1
            else:
                childIndex -= 1

        return maxNum """

# Repeated Substring Pattern					4/8/2024
""" 
# Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

# Example 1:
# 		Input: s = "abab"
# 		Output: true
# Explanation: It is the substring "ab" twice.

# Example 2:
# 		Input: s = "aba"
# 		Output: false

# Example 3:
# 		Input: s = "abcabcabcabc"
# 		Output: true
# Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

# Constraints:
# 		1 <= s.length <= 104
# 		s consists of lowercase English letters.


class Solution(object):
    def repeatedSubstringPattern(self, s):
        for i in range(len(s) // 2):
            sub = s[0 : i + 1]
            dif = set(s.split(sub))
            if len(dif) == 1 and dif.pop() == "":
                return True
        return False

    print(repeatedSubstringPattern(None, "abab"))  #  true
    print(repeatedSubstringPattern(None, "aba"))  #  false
    print(repeatedSubstringPattern(None, "abcabcabcabc"))  #  true


# Slow


class Solution:
    def topVotedRepeatedSubstringPattern(self, s: str) -> bool:
        s_fold = "".join((s[1:], s[:-1]))
        return s in s_fold """

# Hamming Distance					4/9/2024
""" 
# The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

# Given two integers x and y, return the Hamming distance between them.

# Example 1:
# 		Input: x = 1, y = 4
# 		Output: 2
# Explanation:
# 		1   (0 0 0 1)
# 		4   (0 1 0 0)
# 		       ↑   ↑
# 		The above arrows point to positions where the corresponding bits are different.

# Example 2:
# 		Input: x = 3, y = 1
# 		Output: 1

# Constraints:
# 		0 <= x, y <= 231 - 1


class Solution(object):
    def hammingDistance(self, x, y):
        return bin(x ^ y).count("1")

    print(hammingDistance(None, 1, 4))  #  2
    print(hammingDistance(None, 3, 1))  #  1


# Same as top voted """

# Sorting Three Groups					4/10/2024
""" 
# You are given an integer array nums. Each element in nums is 1, 2 or 3. In each operation, you can remove an element from nums. Return the minimum number of operations to make nums non-decreasing.

# Example 1:
# 		Input: nums = [2,1,3,2,1]
# 		Output: 3
# Explanation:
# 		One of the optimal solutions is to remove nums[0], nums[2] and nums[3].

# Example 2:
# 		Input: nums = [1,3,2,1,3,3]
# 		Output: 2
# Explanation:
# 		One of the optimal solutions is to remove nums[1] and nums[2].

# Example 3:
# 		Input: nums = [2,2,2,2,3,3]
# 		Output: 0
# Explanation:
# 		nums is already non-decreasing.

# Constraints:
# 		1 <= nums.length <= 100
# 		1 <= nums[i] <= 3
# 		Follow-up: Can you come up with an algorithm that runs in O(n) time complexity?


class Solution(object):
    def minimumOperations(self, nums):
        minOps = 101

        def dfs(arr, i=0, ops=0):
            if i > 0 and arr[i - 1] > arr[i]:
                return  # current test invalid (stop)

            if len(arr) - 1 == i:  # current test complete
                nonlocal minOps
                minOps = min(minOps, ops)
                return

            dfs(arr, i + 1, ops)  # no removal
            dfs(arr[:i] + arr[i + 1 :], i, ops + 1)  # removal

        dfs(nums)

        return minOps


# Works, but LeetCode doesn't like 'nonlocal'


class Solution(object):
    def topVotedMinimumOperations(self, A):
        a, b, c = 0, 0, 0
        for x in A:
            a += x != 1
            b = min(a, b + (x != 2))
            c = min(b, c + (x != 3))
        return c

    print(topVotedMinimumOperations(None, [2, 1, 3, 2, 1]))  #  3
    print(topVotedMinimumOperations(None, [1, 3, 2, 1, 3, 3]))  #  2
    print(topVotedMinimumOperations(None, [2, 2, 2, 2, 3, 3]))  #  0


# Explanation:
# a presents the operation to make sequence all 1s
# b presents the operation to make sequence incresing from 1 to 2
# c presents the operation to make sequence incresing from 1 to 3 """

# Maximum Number That Sum of the Prices Is Less Than or Equal to K					4/11/2024
""" 
# You are given an integer k and an integer x. The price of a number num is calculated by the count of

# set bits

# at positions x, 2x, 3x, etc., in its binary representation, starting from the least significant bit. The following table contains examples of how price is calculated.

# x	num	Binary Representation	Price
# 1	13	000001101	3
# 2	13	000001101	1
# 2	233	011101001	3
# 3	13	000001101	1
# 3	362	101101010	2

# The accumulated price of num is the total price of numbers from 1 to num. num is considered cheap if its accumulated price is less than or equal to k.

# Return the greatest cheap number.

# Example 1:
# 		Input: k = 9, x = 1
# 		Output: 6
# Explanation:
# 		As shown in the table below, 6 is the greatest cheap number.
# 		x	num	Binary Representation	Price	Accumulated Price
# 		1	1	001	1	1
# 		1	2	010	1	2
# 		1	3	011	2	4
# 		1	4	100	1	5
# 		1	5	101	2	7
# 		1	6	110	2	9
# 		1	7	111	3	12

# Example 2:
# 		Input: k = 7, x = 2
# 		Output: 9
# Explanation:
# 		As shown in the table below, 9 is the greatest cheap number.
# 		x	num	Binary Representation	Price	Accumulated Price
# 		2	1	0001	0	0
# 		2	2	0010	1	1
# 		2	3	0011	1	2
# 		2	4	0100	0	2
# 		2	5	0101	0	2
# 		2	6	0110	1	3
# 		2	7	0111	1	4
# 		2	8	1000	1	5
# 		2	9	1001	1	6
# 		2	10	1010	2	8

# Constraints:
# 		1 <= k <= 10^15
# 		1 <= x <= 8


class Solution(object):
    def findMaximumNumber(self, k, x):
        i, accPrice = 1, 0
        while accPrice <= k:
            n, price = i >> (x - 1), 0
            while n > 0:
                price += n % 2
                n >>= x
            accPrice += price
            i += 1
        return i - 1 if accPrice <= k else i - 2

    print(findMaximumNumber(None, 9, 1))  #  6
    print(findMaximumNumber(None, 7, 2))  #  9
    print(findMaximumNumber(None, 4096, 6))  #  4127


# Exceeds runtime on larger cases


def topVotedFindMaximumNumber(self, k: int, x: int) -> int:
    def check(v):
        A = list(map(int, bin(v)[2:]))
        n = len(A)
        res = p = 0
        for i, v in enumerate(A):
            if v == 1:
                l = n - i - 1
                res += (p << l) + ((l // x) << (l - 1) if l else 0)
            if (n - i) % x == 0:
                p += v
        return res + p

    l, r = 1, 10**15
    while l < r:
        mid = (l + r + 1) // 2
        if check(mid) <= k:
            l = mid
        else:
            r = mid - 1
    return l


# Ah, binary search """

# Minimum Processing Time					4/12/2024
""" 
# You have a certain number of processors, each having 4 cores. The number of tasks to be executed is four times the number of processors. Each task must be assigned to a unique core, and each core can only be used once.

# You are given an array processorTime representing the time each processor becomes available and an array tasks representing how long each task takes to complete. Return the minimum time needed to complete all tasks.

# Example 1:
# 		Input: processorTime = [8,10], tasks = [2,2,3,1,8,7,4,5]
# 		Output: 16
# Explanation:
# 		Assign the tasks at indices 4, 5, 6, 7 to the first processor which becomes available at time = 8, and the tasks at indices 0, 1, 2, 3 to the second processor which becomes available at time = 10.
# 		The time taken by the first processor to finish the execution of all tasks is max(8 + 8, 8 + 7, 8 + 4, 8 + 5) = 16.
# 		The time taken by the second processor to finish the execution of all tasks is max(10 + 2, 10 + 2, 10 + 3, 10 + 1) = 13.

# Example 2:
# 		Input: processorTime = [10,20], tasks = [2,3,1,2,5,8,4,3]
# 		Output: 23
# Explanation:
# 		Assign the tasks at indices 1, 4, 5, 6 to the first processor and the others to the second processor.
# 		The time taken by the first processor to finish the execution of all tasks is max(10 + 3, 10 + 5, 10 + 8, 10 + 4) = 18.
# 		The time taken by the second processor to finish the execution of all tasks is max(20 + 2, 20 + 1, 20 + 2, 20 + 3) = 23.

# Constraints:
# 		1 <= n == processorTime.length <= 25000
# 		1 <= tasks.length <= 105
# 		0 <= processorTime[i] <= 109
# 		1 <= tasks[i] <= 109
# 		tasks.length == 4 * n


class Solution(object):
    def minProcessingTime(self, pTime, tasks):
        # Divide tasks into groups to be paired with processors
        # Higher the processor time, smaller the task
        pTime, tasks = sorted(pTime, reverse=True), sorted(tasks)
        tasksPerProcessor = len(tasks) // len(pTime)
        i = 1
        maxTime = 0
        for p in pTime:
            maxTime = max(
                maxTime, p + tasks[((i * tasksPerProcessor) - 1)]
            )  # largest of group
            i += 1  # next group
        return maxTime

    print(minProcessingTime(None, [8, 10], [2, 2, 3, 1, 8, 7, 4, 5]))  #  16
    print(minProcessingTime(None, [10, 20], [2, 3, 1, 2, 5, 8, 4, 3]))  #  23
    print(minProcessingTime(None, [291], [125, 169, 269, 32]))  #  560


class Solution:
    def TopVotedMinProcessingTime(self, t, v):
        n = len(v)
        t.sort()
        v.sort()
        j = n - 1
        m = len(t)
        ans = 0
        for i in range(m):
            c = 0
            while c < 4:
                ans = max(ans, t[i] + v[j])
                c += 1
                j -= 1
        return ans """

# Last Visited Integers					4/13/2024
""" 
# Given an integer array nums where nums[i] is either a positive integer or -1. We need to find for each -1 the respective positive integer, which we call the last visited integer.

# To achieve this goal, let's define two empty arrays: seen and ans.

# Start iterating from the beginning of the array nums.
# If a positive integer is encountered, prepend it to the front of seen.
# If -1 is encountered, let k be the number of consecutive -1s seen so far (including the current -1),
# If k is less than or equal to the length of seen, append the k-th element of seen to ans.
# If k is strictly greater than the length of seen, append -1 to ans.

# Return the array ans.

# Example 1:
# 		Input: nums = [1,2,-1,-1,-1]
# 		Output: [2,1,-1]
# Explanation:
# 		Start with seen = [] and ans = [].
# 		Process nums[0]: The first element in nums is 1. We prepend it to the front of seen. Now, seen == [1].
# 		Process nums[1]: The next element is 2. We prepend it to the front of seen. Now, seen == [2, 1].
# 		Process nums[2]: The next element is -1. This is the first occurrence of -1, so k == 1. We look for the first element in seen. We append 2 to ans. Now, ans == [2].
# 		Process nums[3]: Another -1. This is the second consecutive -1, so k == 2. The second element in seen is 1, so we append 1 to ans. Now, ans == [2, 1].
# 		Process nums[4]: Another -1, the third in a row, making k = 3. However, seen only has two elements ([2, 1]). Since k is greater than the number of elements in seen, we append -1 to ans. Finally, ans == [2, 1, -1].

# Example 2:
# 		Input: nums = [1,-1,2,-1,-1]
# 		Output: [1,2,1]
# Explanation:
# 		Start with seen = [] and ans = [].
# 		Process nums[0]: The first element in nums is 1. We prepend it to the front of seen. Now, seen == [1].
# 		Process nums[1]: The next element is -1. This is the first occurrence of -1, so k == 1. We look for the first element in seen, which is 1. Append 1 to ans. Now, ans == [1].
# 		Process nums[2]: The next element is 2. Prepend this to the front of seen. Now, seen == [2, 1].
# 		Process nums[3]: The next element is -1. This -1 is not consecutive to the first -1 since 2 was in between. Thus, k resets to 1. The first element in seen is 2, so append 2 to ans. Now, ans == [1, 2].
# 		Process nums[4]: Another -1. This is consecutive to the previous -1, so k == 2. The second element in seen is 1, append 1 to ans. Finally, ans == [1, 2, 1].

# Constraints:
# 		1 <= nums.length <= 100
# 		nums[i] == -1 or 1 <= nums[i] <= 100


class Solution(object):
    def lastVisitedIntegers(self, nums):
        seen = [-1] * 100
        ans = []
        k = i = 0
        for n in nums:
            if n != -1:  # prepend to seen
                i -= 1  # working seen back to front
                seen[i] = n
                k = 0  # reset consecutive -1s count
            else:  # append to ans
                ans.append(seen[i + k])
                k += 1
        return ans

    print(lastVisitedIntegers(None, [1, 2, -1, -1, -1]))  #  [2,1,-1]
    print(lastVisitedIntegers(None, [1, -1, 2, -1, -1]))  #  [1,2,1]


class Solution:
    def topVotedLastVisitedIntegers(self, words):
        k, li, ans = 0, [], []
        for i in words:
            if i == "prev":
                k += 1
                if k > len(li):
                    ans.append(-1)
                else:
                    ans.append(li[-k])
            else:
                k = 0
                li.append(int(i))
        return ans """

# Longest Unequal Adjacent Groups Subsequence I					4/14/2024
""" 
# You are given a string array words and a binary array groups both of length n, where words[i] is associated with groups[i].

# Your task is to select the longest alternating subsequence from words. A subsequence of words is alternating if for any two consecutive strings in the sequence, their corresponding elements in the binary array groups differ. Essentially, you are to choose strings such that adjacent elements have non-matching corresponding bits in the groups array.

# Formally, you need to find the longest subsequence of an array of indices [0, 1, ..., n - 1] denoted as [i0, i1, ..., ik-1], such that groups[ij] != groups[ij+1] for each 0 <= j < k - 1 and then find the words corresponding to these indices.

# Return the selected subsequence. If there are multiple answers, return any of them.

# Note: The elements in words are distinct.

# Example 1:
# 		Input: words = ["e","a","b"], groups = [0,0,1]
# 		Output: ["e","b"]
# Explanation: A subsequence that can be selected is ["e","b"] because groups[0] != groups[2]. Another subsequence that can be selected is ["a","b"] because groups[1] != groups[2]. It can be demonstrated that the length of the longest subsequence of indices that satisfies the condition is 2.

# Example 2:
# 		Input: words = ["a","b","c","d"], groups = [1,0,1,1]
# 		Output: ["a","b","c"]
# Explanation: A subsequence that can be selected is ["a","b","c"] because groups[0] != groups[1] and groups[1] != groups[2]. Another subsequence that can be selected is ["a","b","d"] because groups[0] != groups[1] and groups[1] != groups[3]. It can be shown that the length of the longest subsequence of indices that satisfies the condition is 3.

# Constraints:
# 		1 <= n == words.length == groups.length <= 100
# 		1 <= words[i].length <= 10
# 		groups[i] is either 0 or 1.
# 		words consists of distinct strings.
# 		words[i] consists of lowercase English letters.


class Solution(object):
    def getLongestSubsequence(self, w, g):
        ans = [w[0]]
        prev = g[0]
        for i in range(1, len(g)):
            if g[i] != prev:
                prev = g[i]
                ans.append(w[i])
        return ans

    print(getLongestSubsequence(None, ["e", "a", "b"], [0, 0, 1]))  #  ["e","b"]
    print(
        getLongestSubsequence(None, ["a", "b", "c", "d"], [1, 0, 1, 1])
    )  #  ["a","b","c"]


# Same as top voted """

# Study: Selection and Insertion Sort                  4/15/2024
""" 
# I have an Algorithms & Data Structures final the 20th so I'm going to study some sorting algorithms instead of doing LeetCode challenges.

# I'll be looking into:
# - SelectionSort
# - InsertionSort
# - QuickSort
# - HeapSort
# - MergeSort
# - BucketSort
# - Radix Sorting
#   - MSD
#   - LSD

# Today will be Selection and Insertion Sort

unsorted = [
    4873,
    1874,
    8917,
    1626,
    4982,
    9132,
    9573,
    1876,
    6973,
    1897,
    9587,
    3492,
    9877,
    2212,
    6152,
    7121,
]

# Selection Sort:

# "The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted portion until the entire list is sorted."


def selectionSort(arr):
    print("UNSORTED: " + str(arr) + "\n")

    for i in range(len(arr) - 1):
        print("Before:\t" + str(arr[:i]) + " < Sorted/Unsorted > " + str(arr[i + 1 :]))

        minIdx = i  # index of current iteration's smallest value
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[minIdx]:
                minIdx = j  # smaller value found further in unsorted portion

        print(("\t" * 4) + "Smallest value: " + str(arr[minIdx]))

        arr[i], arr[minIdx] = arr[minIdx], arr[i]  # swap smallest into sorted portion

        print(
            "After:\t"
            + str(arr[: i + 1])
            + " < Sorted/Unsorted > "
            + str(arr[i + 2 :])
            + "\n"
        )

    return "SORTED: " + str(arr)


# print(selectionSort(unsorted))

# O(n^2) in-place sorting
# Slow

# Insertion Sort:

# "Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain."


def insertionSort(arr):
    print("UNSORTED: " + str(arr) + "\n")

    for i in range(0, len(arr)):
        print(
            "Before:\t"
            + str(arr[:i])
            + " < Sorted "
            + str(arr[i : i + 1])
            + " Unsorted > "
            + str(arr[i + 1 :])
        )

        for j in range(i):
            if arr[j] >= arr[i]:
                # Insert leading value of unsorted array portion into correct index of sorted portion
                arr = arr[:j] + arr[i : i + 1] + arr[j:i] + arr[i + 1 :]
                break

        print(
            "After:\t"
            + str(arr[: i + 1])
            + " < Sorted/Unsorted > "
            + str(arr[i + 2 :])
            + "\n"
        )

    return "SORTED: " + str(arr)


print(insertionSort(unsorted))

# O(n^2) in-place sorting
# Slow """

# Study: Merge and Quick Sort                   4/16/2024
""" 
# I'll be looking into:
# - SelectionSort ✓
# - InsertionSort ✓
# - QuickSort
# - HeapSort
# - MergeSort
# - BucketSort
# - Radix Sorting
#   - MSD
#   - LSD

# Today will focus on recursive sorts: MergeSort and QuickSort

unsorted = [
    4873,
    1874,
    8917,
    1626,
    4982,
    9132,
    9573,
    1876,
    6973,
    1897,
    9587,
    3492,
    9877,
    2212,
    6152,
    7121,
]

# Merge Sort:

# "Conceptually, a merge sort works as follows:
# - Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
# - Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list."


def mergeSort(arr):
    if len(arr) <= 1:
        return arr
    else:
        mid = len(arr) // 2
        print("Split: " + "\t" * 6 + str(arr[:mid]), str(arr[mid:]))
        l = mergeSort(arr[:mid])
        r = mergeSort(arr[mid:])

    print("Merged & Sorted: \t" + str(sorted(l + r)))
    return sorted(l + r)


# print(mergeSort(unsorted))

# O(n log n), sequential data access
# Fast


# Quick Sort:

# "Quick-sort is a sorting algorithm based on the divide-and-conquer paradigm:
#  - Divide: pick an element x (called pivot) and partition S into:
#   - L elements less than x
#   - E elements equal x
#   - G elements greater than x
# - Recur: sort L and G
# - Conquer: join L, E and G"


def quickSort(arr):
    print("\nCurrent arr: \t" + str(arr))

    if len(arr) <= 1:
        return arr
    else:
        pivotIdx = len(arr) // 2
        l, e, g = [], [], []
        for n in arr:
            if n < arr[pivotIdx]:  # less than pivot
                l.append(n)
            elif n > arr[pivotIdx]:  # greater than pivot
                g.append(n)
            else:  # equal to pivot
                e.append(n)

        print(
            "Pivot: \t\t\t\t"
            + str(e)
            + "\nLess than: \t\t"
            + str(l)
            + "\nGreater than: \t"
            + str(g)
        )

        return quickSort(l) + e + quickSort(g)


print(quickSort(unsorted))

# O(n log n), but O(n^2) worst case
# in-place (not in this case), randomized
# Fastest """

# Study: Heap Sort                   4/17/2024
""" 
# I'll be looking into:
# - SelectionSort ✓
# - InsertionSort ✓
# - QuickSort ✓
# - HeapSort
# - MergeSort ✓
# - BucketSort
# - Radix Sorting
#   - MSD
#   - LSD

# Today is HeapSort

unsorted = [
    4873,
    1874,
    8917,
    1626,
    4982,
    9132,
    9573,
    1876,
    6973,
    1897,
    9587,
    3492,
    9877,
    2212,
    6152,
    7121,
]

# Heap Sort:

# "In computer science, heapsort is a comparison-based sorting algorithm which can be thought of as "an implementation of selection sort using the right data structure."[3] Like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure to efficiently find the largest element in each step."

import heapq


def heapSort(arr):
    heap = []

    for elem in arr:  # push to min heap, n calls
        heapq.heappush(heap, elem)  # O(log n)

    for i in range(len(arr)):  # pop back into arr, n calls
        arr[i] = heapq.heappop(heap)  # O(log n)

    return arr


# Easy with backing heap data structure
# Can also be done in-place:


def left(i):
    # index of left child
    return 2 * i + 1


def right(i):
    # index of right child
    return 2 * (i + 1)


def parent(i):
    # index of parent
    return (i - 1) // 2


def bubble_up(a, i):
    # new element, bubble up the tree until the heap has been reformed
    # Repeatedly swap the element at index i with its parent, until the
    # element is is no longer smaller than its parent.

    p = parent(i)
    while i > 0 and a[i] < a[p]:
        a[i], a[p] = a[p], a[i]
        i = p
        p = parent(i)


def trickle_down(a, i, n):
    # element stored at index i, trickle down the tree until the heap has been reformed
    # Repeatedly swap the element at index i with its smallest child,
    # until the element is no longer larger than its children.

    while i >= 0:
        j = -1
        r = right(i)
        if r < n and a[r] < a[i]:
            l = left(i)
            if a[l] < a[r]:
                j = l
            else:
                j = r
        else:
            l = left(i)
            if l < n and a[l] < a[i]:
                j = l

        if j >= 0:
            a[j], a[i] = a[i], a[j]
        i = j


def reverse(a, n):
    # Reverse the first n elements of sequence a in place.
    for i in range(n // 2):
        a[i], a[n - 1 - i] = a[n - 1 - i], a[i]


def heapSortInPlane(arr):
    for i in range(1, len(arr)):
        bubble_up(arr, i)

    i = len(arr)
    while i > 1:
        i -= 1
        arr[i], arr[0] = arr[0], arr[i]
        trickle_down(arr, 0, i)

    reverse(arr, len(arr))
    return arr


print(heapSortInPlane(unsorted))

# O(n log n), in-place
# fast """

# Study: Bucket Sort                   4/18/2024
""" 
# I'll be looking into:
# - SelectionSort ✓
# - InsertionSort ✓
# - QuickSort ✓
# - HeapSort ✓
# - MergeSort ✓
# - BucketSort
# - Radix Sorting
#   - MSD
#   - LSD

# Today is Bucket Sort

unsorted = [12, 9, 24, 4, 19, 21, 14, 6, 2, 16]

# BucketSort:
# - Create a list of "buckets" that are initially empty
#       [0 to 5], [5 to 10], [10 to 15], [15 to 20], [20 to 25]
# -	Go through the original list, placing each item in its appropriate bucket
#       [4,2], [9,6], [12,14], [19,16], [24,21]
# -	Each non-empty bucket should be sorted
#       [2,4], [6,9], [12,14], [16,19], [21,24]
# -	Gather: Return all elements to the original array after visiting the buckets in order
#       [2,4,6,9,12,14,16,19,21,24]

# "Imagine putting 200 student papers in alphabetical order according to the first letter of the last name. An insertion sort (or selection sort, or bubbleSort) would have us try to deal with the whole pile at once. Merge-sort would require spreading out all 200 papers and then comparing and piling them back up again in order.Bucket-Sort has us place them into 26 piles by first letter and then stacking those piles together."

# Also works for tuples/objects:
unsortedTuples = [(7, "d"), (1, "c"), (3, "a"), (7, "g"), (3, "b"), (7, "e")]

# BucketSort:
# - Create a list of "buckets" that are initially empty
#       key range [0,9], therefore: [[],[],[],[],[],[],[],[],[],[]]
# -	Go through the original list, placing each item in its appropriate bucket
#       [[],[(1, "c")],[],[(3, "a"), (3, "b")],[],[],[],[(7, "d"), (7, "g"), (7, "e")],[],[]]
# -	Gather: Return all elements to the original array after visiting the buckets in order
#       [(1, "c"), (3, "a"), (3, "b"), (7, "d"), (7, "g"), (7, "e")]

# Stable Sort Property:
# The relative order of any two items with the same key is preserved after the execution of the algorithm


def bucketSort(arr):
    print(arr)
    buckets = [None] * 10

    for key, val in arr:
        if buckets[key] == None:
            buckets[key] = []
        buckets[key].append((key, val))
    print(buckets)

    i = 0
    for el in buckets:
        if el != None:
            for pair in el:
                arr[i] = pair
                i += 1
    return arr


print(bucketSort(unsortedTuples))

# Notice (7, "g") comes before (7, "e") even though "e" < "g"
# This is due to stable sort property """

# Study: Radix Sort                   4/19/2024
""" 
# I'll be looking into:
# - SelectionSort ✓
# - InsertionSort ✓
# - QuickSort ✓
# - HeapSort ✓
# - MergeSort ✓
# - BucketSort ✓
# - Radix Sorting
#   - MSD
#   - LSD

# Today is Least/Most Significant Digit Radix Sort

# LSD:
# Keys are integers in the range [0, 999]
#   [746, 515, 246, 214, 324]
# Covert keys to tuples
#   746 = (7, 4, 6), 515 = (5, 1, 5), 246 = (2, 4, 6), 214 = (2, 1, 4) , 324 = (3, 2, 4)
# Sort according to right-most dimension first
#   1st pass:   (2,1,4) (3,2,4) (5,1,5) (7,4,6) (2,4,6)
#   2nd pass:   (2,1,4) (5,1,5) (3,2,4) (7,4,6) (2,4,6)
#   3rd pass:   (2,1,4) (2,4,6) (3,2,4) (5,1,5) (7,4,6)


def radixLSD(arr):
    d = 3  # max digits count

    for i, el in enumerate(arr):  # to tuples
        arr[i] = tuple([*str(el)])

    while d > 0:
        d -= 1
        arr.sort(key=lambda a: a[d])  # sort by digits, right to left
        print(arr)


radixLSD([746, 515, 246, 214, 324])


# MSD:
# Keys are 3 char strings
#   ['add', 'cab', 'fad', 'fee', 'bad', 'bee', 'fed', 'bed', 'ace']
# Covert keys to tuples
#   ["add" = (0,3,3), "cab" = (2,0,1), ...]
# Sort according to left-most dimension first
#   1st pass:   ['add', 'ace', 'bad', 'bee', 'bed', 'cab', 'fad', 'fee', 'fed']
#   2nd pass:   ['ace', 'add', 'bad', 'bee', 'bed', 'cab', 'fad', 'fee', 'fed']
#   3rd pass:   ['ace', 'add', 'bad', 'bed', 'bee', 'cab', 'fad', 'fed', 'fee']
# *Key idea: Sort each subproblem separately.
#   1st pass:   [['add', 'ace'], ['bad', 'bee', 'bed'], ['cab'], ['fad', 'fee', 'fed']]
#   2nd pass:   [['ace'], ['add'], ['bad'], ['bee', 'bed'], ['cab'], ['fad'], ['fee', 'fed']]
#   3rd pass:   [['ace'], ['add'], ['bad'], ['bed'], ['bee'], ['cab'], ['fad'], ['fed'], ['fee']]


def radixMSD(arr):
    l = 3  # string len

    # no need to convert to tuple, python can compare chars

    # WITHOUT SEPERATING SUBPROBLEMS
    badArr = arr.copy()
    for i in range(l):
        badArr.sort(key=lambda a: a[i])  # sort by chars, left to right
        print(badArr)  # notice faulty order. Instead, group by MSD and sort that group

    # WITH SEPERATE SUBPROBLEMS (basically keeping track of MSD)
    for i in range(1, l + 1):
        arr.sort(key=lambda a: a[0:i])
        print(arr)


radixMSD(["add", "cab", "fad", "fee", "bad", "bee", "fed", "bed", "ace"]) """

# Diameter of Binary Tree					4/20/2024
""" 
# Given the root of a binary tree, return the length of the diameter of the tree.

# The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

# The length of a path between two nodes is represented by the number of edges between them.

# Example 1:
# 		Input: root = [1,2,3,4,5]
# 		Output: 3
# Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

# Example 2:
# 		Input: root = [1,2]
# 		Output: 1

# Constraints:
# 		The number of nodes in the tree is in the range [1, 104].
# 		-100 <= Node.val <= 100


class Solution(object):
    def diameterOfBinaryTree(self, root):
        # longest path is depth of deepest left node + depth of deepest right node

        def maxDepth(node, depth=0):
            if node == None:
                return 0
            return max(maxDepth(node.left, depth), maxDepth(node.right, depth)) + 1

        return maxDepth(root.left) + maxDepth(root.right)


class Solution(object):
    def topVotedDiameterOfBinaryTree(self, root):
        # Implement depth
        def depth(node):
            return 1 + max(depth(node.left), depth(node.right)) if node else 0

        return depth(root.left) + depth(root.right)  # calculate diameter


# Algorithms & Data Structures final went well this morning
# Sorting algorithm studied here were most of it :) """

# Island Perimeter					4/21/2024
""" 
# You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

# Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

# The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

# Example 1:
# 		Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
# 		Output: 16
# Explanation: The perimeter is the 16 yellow stripes in the image above.

# Example 2:
# 		Input: grid = [[1]]
# 		Output: 4

# Example 3:
# 		Input: grid = [[1,0]]
# 		Output: 4

# Constraints:
# 		row == grid.length
# 		col == grid[i].length
# 		1 <= row, col <= 100
# 		grid[i][j] is 0 or 1.
# 		There is exactly one island in grid.


class Solution(object):
    def islandPerimeter(self, grid):
        perimeter = 0
        for row in range(len(grid)):
            for col in range(len(grid[row])):
                if grid[row][col] == 1:  # current cell is land
                    cur = 4  # max perimeter for current cell
                    cur -= row - 1 >= 0 and grid[row - 1][col]  # check above
                    cur -= (
                        col + 1 < len(grid[row]) and grid[row][col + 1]
                    )  # check right
                    cur -= row + 1 < len(grid) and grid[row + 1][col]  # check below
                    cur -= col - 1 >= 0 and grid[row][col - 1]  # check left
                    perimeter += cur
        return perimeter

    print(
        islandPerimeter(None, [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])
    )  #  16
    print(islandPerimeter(None, [[1]]))  #  4
    print(islandPerimeter(None, [[1, 0]]))  #  4

# straight forward
    
def topVotedIslandPerimeter(self, grid):
    R,C = len(grid), len(grid[0])
    perimeter = 0
    # Traverse the grid
    for i in range(R):
        for j in range(C):
            # If it is a land block increment perimeter by 4
            if grid[i][j] == 1:
                perimeter += 4
            # Check whether top neighbour is a land and decrement it by 2
            # as it intersects
            if i>0 and grid[i-1][j] == 1:
                perimeter -= 2
            # Check left neighbour is a land and decrement it by 2
            # as it intersects
            if j>0 and grid[i][j-1] == 1:
                perimeter -= 2
    return perimeter """

# Number Complement					4/22/2024
""" 
# The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

# For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.

# Given an integer num, return its complement.

# Example 1:
# 		Input: num = 5
# 		Output: 2
# Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

# Example 2:
# 		Input: num = 1
# 		Output: 0
# Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

# Constraints:
# 		1 <= num < 2^31


class Solution(object):
    def findComplement(self, num):
        val = 0
        p = 0
        while num > 0:
            val += 2**p if num % 2 == 0 else 0
            num >>= 1
            p += 1
        return val

    print(findComplement(None, 5))  #  2
    print(findComplement(None, 1))  #  0


# Probably some one-liner for this, but good to practice bit manipulation


def topVotedFindComplement(self, num):
    return num ^ (2 ** num.bit_length() - 1)


# Et voilà """

# License Key Formatting					4/23/2024
""" 
# You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

# We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

# Return the reformatted license key.

# Example 1:
# 		Input: s = "5F3Z-2e-9-w", k = 4
# 		Output: "5F3Z-2E9W"
# Explanation: The string s has been split into two parts, each part has 4 characters.
# 		Note that the two extra dashes are not needed and can be removed.

# Example 2:
# 		Input: s = "2-5g-3-J", k = 2
# 		Output: "2-5G-3J"
# Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.

# Constraints:
# 		1 <= s.length <= 105
# 		s consists of English letters, digits, and dashes '-'.
# 		1 <= k <= 104


class Solution(object):
    def licenseKeyFormatting(self, s, k):
        res = ""
        i = len(s)
        j = k
        while i > 0:
            i -= 1
            if s[i] != "-":  # else skip
                if j == 0:
                    res = "-" + res
                    j = k
                res = s[i] + res
                j -= 1
        return res.upper()

    print(licenseKeyFormatting(None, "5F3Z-2e-9-w", 4))  #  "5F3Z-2E9W"
    print(licenseKeyFormatting(None, "2-5g-3-J", 2))  #  "2-5G-3J"


class Solution:
    def topVotedLicenseKeyFormatting(self, S: str, K: int) -> str:

        # Eliminate all dashes
        S = S.replace("-", "")

        head = len(S) % K

        grouping = []

        # Special handle for first group
        if head:
            grouping.append(S[:head])

        # General case:
        for index in range(head, len(S), K):
            grouping.append(S[index : index + K])

        # Link each group togetger and separated by dash '-'
        return "-".join(grouping).upper() """

# Max Consecutive Ones					4/24/2024
""" 
# Given a binary array nums, return the maximum number of consecutive 1's in the array.

# Example 1:
# 		Input: nums = [1,1,0,1,1,1]
# 		Output: 3
# Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

# Example 2:
# 		Input: nums = [1,0,1,1,0,1]
# 		Output: 2

# Constraints:
# 		1 <= nums.length <= 105
# 		nums[i] is either 0 or 1.


class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        res = 0
        cur = 0
        for n in nums:
            cur += n
            res = max(res, cur)
            if n == 0:
                cur = 0
        return res

    print(findMaxConsecutiveOnes(None, [1, 1, 0, 1, 1, 1]))  #  3
    print(findMaxConsecutiveOnes(None, [1, 0, 1, 1, 0, 1]))  #  2


class Solution:
    def topVotedFindMaxConsecutiveOnes(self, nums):
        l, zeros = 0, 0
        for r, n in enumerate(nums):
            zeros += n == 0
            if zeros > 0:
                zeros -= nums[l] == 0
                l += 1
        return r - l + 1 """

# Construct the Rectangle					4/25/2024
""" 
# A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

# The area of the rectangular web page you designed must equal to the given target area.

# The width W should not be larger than the length L, which means L >= W.

# The difference between length L and width W should be as small as possible.

# Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.

# Example 1:
# 		Input: area = 4
# 		Output: [2,2]
# Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
# 		But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.

# Example 2:
# 		Input: area = 37
# 		Output: [37,1]

# Example 3:
# 		Input: area = 122122
# 		Output: [427,286]

# Constraints:
# 		1 <= area <= 107


class Solution(object):
    def topVotedConstructRectangle(self, area):
        for l in range(int(area**0.5), 0, -1):
            if area % l == 0:
                return [area // l, l]


class Solution(object):
    def anotherTopVotedConstructRectangle(self, area):
        mid = int(math.sqrt(area))
        while area % mid != 0:
            mid -= 1
        return [int(area / mid), mid] """

# Next Greater Element I					4/25/2024
""" 
# The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

# You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

# For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

# Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

# Example 1:
# 		Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
# 		Output: [-1,3,-1]
# Explanation: The next greater element for each value of nums1 is as follows:
# 		- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
# 		- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
# 		- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

# Example 2:
# 		Input: nums1 = [2,4], nums2 = [1,2,3,4]
# 		Output: [3,-1]
# Explanation: The next greater element for each value of nums1 is as follows:
# 		- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
# 		- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

# Constraints:
# 		1 <= nums1.length <= nums2.length <= 1000
# 		0 <= nums1[i], nums2[i] <= 104
# 		All integers in nums1 and nums2 are unique.
# 		All the integers of nums1 also appear in nums2.

# Follow up: Could you find an O(nums1.length + nums2.length) solution?


class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        nextGreater = {}
        for i in range(len(nums2)):
            for j in range(i + 1, len(nums2)):
                if nums2[j] > nums2[i]:
                    nextGreater[nums2[i]] = nums2[j]
                    break

        res = [-1] * len(nums1)
        for i, n in enumerate(nums1):
            if n in nextGreater:
                res[i] = nextGreater[n]
            else:
                res[i] = -1
        return res

    print(nextGreaterElement(None, [4, 1, 2], [1, 3, 4, 2]))  #  [-1,3,-1]
    print(nextGreaterElement(None, [2, 4], [1, 2, 3, 4]))  #  [3,-1]


# Not quite

# Top voted explanation:
# We traverse nums2 and start storing elements on the top of stack.
# If current number is greater than the top of the stack, then we found a pair. Keep popping from stack till the top of stack is smaller than current number.
# After matching pairs are found, push current number on top of stack.
# Eventually when there are no more elements in nums2 to traverse, but there are elements in stack, we can justify that next bigger element wasn't found for them. Hence we'll put -1 for the remaining elements in stack.


def topVotedNextGreaterElement(self, nums1, nums2):
    if not nums2:
        return None

    mapping = {}
    result = []
    stack = []
    stack.append(nums2[0])

    for i in range(1, len(nums2)):
        while (
            stack and nums2[i] > stack[-1]
        ):  # if stack is not empty, then compare it's last element with nums2[i]
            mapping[stack[-1]] = nums2[
                i
            ]  # if the new element is greater than stack's top element, then add this to dictionary
            stack.pop()  # since we found a pair for the top element, remove it.
        stack.append(
            nums2[i]
        )  # add the element nums2[i] to the stack because we need to find a number greater than this

    for (
        element
    ) in (
        stack
    ):  # if there are elements in the stack for which we didn't find a greater number, map them to -1
        mapping[element] = -1

    for i in range(len(nums1)):
        result.append(mapping[nums1[i]])
    return result """

# Keyboard Row					4/27/2024
""" 
# Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

# In the American keyboard:
# the first row consists of the characters "qwertyuiop",
# the second row consists of the characters "asdfghjkl", and
# the third row consists of the characters "zxcvbnm".

# Example 1:
# 		Input: words = ["Hello","Alaska","Dad","Peace"]
# 		Output: ["Alaska","Dad"]

# Example 2:
# 		Input: words = ["omk"]
# 		Output: []

# Example 3:
# 		Input: words = ["adsdf","sfd"]
# 		Output: ["adsdf","sfd"]

# Constraints:
# 		1 <= words.length <= 20
# 		1 <= words[i].length <= 100
# 		words[i] consists of English letters (both lowercase and uppercase).


class Solution(object):
    def findWords(self, words):
        def rowNum(c):
            if c in "qwertyuiopQWERTYUIOP":
                return 1
            elif c in "asdfghjklASDFGHJKL":
                return 2
            else:
                return 3

        res = []
        for word in words:
            row = rowNum(word[0])
            valid = True
            for i in range(1, len(word)):
                if rowNum(word[i]) != row:
                    valid = False
                    break
            if valid:
                res.append(word)

        return res

    print(findWords(None, ["Hello", "Alaska", "Dad", "Peace"]))  #  ["Alaska","Dad"]
    print(findWords(None, ["omk"]))  #  []
    print(findWords(None, ["adsdf", "sfd"]))  #  ["adsdf","sfd"]


# 100% Runtime


class Solution:
    def findWords(self, words):
        #
        set1 = {"q", "w", "e", "r", "t", "y", "u", "i", "o", "p"}
        set2 = {"a", "s", "d", "f", "g", "h", "j", "k", "l"}
        set3 = {"z", "x", "c", "v", "b", "n", "m"}

        res = []
        for i in words:
            wordset = set(i.lower())
            if (
                (wordset & set1 == wordset)
                or (wordset & set2 == wordset)
                or (wordset & set3 == wordset)
            ):
                res.append(i)
        return res """

# Base 7					4/28/2024
""" 
# Given an integer num, return a string of its base 7 representation.

# Example 1:
# 		Input: num = 100
# 		Output: "202"

# Example 2:
# 		Input: num = -7
# 		Output: "-10"

# Constraints:
# 		-10^7 <= num <= 10^7


class Solution(object):
    def convertToBase7(self, num):
        if num == 0:
            return "0"

        negative = False
        if num < 0:
            negative = True
            num = -num  # convert to positive

        res = ""
        while num > 0:
            res = str(num % 7) + res
            num //= 7

        return res if not negative else "-" + res

    print(convertToBase7(None, 100))  #  "202"
    print(convertToBase7(None, -7))  #  "-10"


# same as top voted """

# Divide Two Integers					4/29/2024
""" 
# Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

# The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

# Return the quotient after dividing dividend by divisor.

# Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

# Example 1:
# 		Input: dividend = 10, divisor = 3
# 		Output: 3
# Explanation: 10/3 = 3.33333.. which is truncated to 3.

# Example 2:
# 		Input: dividend = 7, divisor = -3
# 		Output: -2
# Explanation: 7/-3 = -2.33333.. which is truncated to -2.

# Constraints:
# 		-2^31 <= dividend, divisor <= 2^31 - 1
# 		divisor != 0


class Solution(object):
    def divide(self, dividend, divisor):
        negative = False
        if dividend < 0 and divisor > 0:  # negative dividend
            negative = True
            dividend = -dividend
        elif dividend > 0 and divisor < 0:  # negative divisor
            negative = True
            divisor = -divisor
        elif dividend < 0 and divisor < 0:  # both negative
            dividend = -dividend
            divisor = -divisor

        if divisor == 1:
            return dividend if not negative else -dividend

        count = 0
        while dividend >= divisor:
            dividend -= divisor
            count += 1

        return count if not negative else -count

    print(divide(None, 10, 3))  #  3
    print(divide(None, 7, -3))  #  -2


# Breaks on edge cases


class Solution:
    def divide(self, dividend, divisor):
        is_negative = (dividend > 0 and divisor < 0) or (dividend < 0 and divisor > 0)
        dividend, divisor = abs(dividend), abs(divisor)

        quotient = 0
        while dividend >= divisor:
            curr_divisor, num_divisors = divisor, 1
            while dividend >= curr_divisor:
                dividend -= curr_divisor
                quotient += num_divisors

                curr_divisor = curr_divisor << 1
                num_divisors = num_divisors << 1

        quotient = -quotient if is_negative else quotient
        return min(max(-(2**31), quotient), 2**31 - 1)  # description's 'note' paragraph


# Commented explanation:
# "To not over-complicate, here is a simple explanation. A naive method here is to repeatedly subtract divisor from dividend, until there is none enough left. Then the count of subtractions will be the answer. Yet this takes linear time and is thus slow. A better method is to subtract divisor in a more efficient way. We can subtract divisor, 2divisor, 4divisor, 8divisor... as is implemented above. Now the subtracting process only takes log-time."

# Better is_negative, better logic
# People are calling the bitshifts cheating, but it beats the linear approach """

# Combination Sum II					4/30/2024
""" 
# Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

# Each number in candidates may only be used once in the combination.

# Note: The solution set must not contain duplicate combinations.

# Example 1:
# 		Input: candidates = [10,1,2,7,6,1,5], target = 8
# 		Output:
# 		[
# 		[1,1,6],
# 		[1,2,5],
# 		[1,7],
# 		[2,6]
# 		]

# Example 2:
# 		Input: candidates = [2,5,2,1,2], target = 5
# 		Output:
# 		[
# 		[1,2,2],
# 		[5]
# 		]

# Constraints:
# 		1 <= candidates.length <= 100
# 		1 <= candidates[i] <= 50
# 		1 <= target <= 30


class Solution(object):
    def combinationSum2(self, candidates, t):
        candidates = [n for n in candidates if n <= t]
        count = len(candidates)
        seen = set()
        res = []

        def dp(cur, acc, idx):
            if acc == t:
                id = str(sorted(cur))
                if id not in seen:
                    seen.add(id)
                    res.append(cur)
                return
            if acc > t or idx == count:
                return
            dp(cur, acc, idx + 1)  # skip candidate
            dp(cur + [candidates[idx]], acc + candidates[idx], idx + 1)  # use candidate

        dp([], 0, 0)
        return res

    print(combinationSum2(None, [10, 1, 2, 7, 6, 1, 5], 8))
    print(combinationSum2(None, [2, 5, 2, 1, 2], 5))


class Solution(object):
    def topVotedCombinationSum2(self, candidates, target):
        # Sorting is really helpful, se we can avoid over counting easily
        candidates.sort()
        result = []
        self.combine_sum_2(candidates, 0, [], result, target)
        return result

    def combine_sum_2(self, nums, start, path, result, target):
        # Base case: if the sum of the path satisfies the target, we will consider
        # it as a solution, and stop there
        if not target:
            result.append(path)
            return

        for i in xrange(start, len(nums)):
            # Very important here! We don't use `i > 0` because we always want
            # to count the first element in this recursive step even if it is the same
            # as one before. To avoid overcounting, we just ignore the duplicates
            # after the first element.
            if i > start and nums[i] == nums[i - 1]:
                continue

            # If the current element is bigger than the assigned target, there is
            # no need to keep searching, since all the numbers are positive
            if nums[i] > target:
                break

            # We change the start to `i + 1` because one element only could
            # be used once
            self.combine_sum_2(nums, i + 1, path + [nums[i]], result, target - nums[i]) """

# Multiply Strings					5/1/2024
""" 
# Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

# Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

# Example 1:
# 		Input: num1 = "2", num2 = "3"
# 		Output: "6"

# Example 2:
# 		Input: num1 = "123", num2 = "456"
# 		Output: "56088"

# Constraints:
# 		1 <= num1.length, num2.length <= 200
# 		num1 and num2 consist of digits only.
# 		Both num1 and num2 do not contain any leading zero, except the number 0 itself.


class Solution(object):
    def topVotedMultiply(self, num1, num2):
        res = [0] * (len(num1) + len(num2))
        for i in range(len(num1) - 1, -1, -1):
            carry = 0
            for j in range(len(num2) - 1, -1, -1):
                tmp = (ord(num1[i]) - ord("0")) * (ord(num2[j]) - ord("0")) + carry
                carry = (res[i + j + 1] + tmp) // 10
                res[i + j + 1] = (res[i + j + 1] + tmp) % 10
            res[i] += carry
        res = "".join(map(str, res))
        return "0" if not res.lstrip("0") else res.lstrip("0")


class Solution:
    def stringToNum(self, string):
        digit = {
            "0": 0,
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
        }
        num = digit[string[-1]]
        for idx, s in enumerate(reversed(string[: len(string) - 1])):
            num += digit[s] * (10 ** (idx + 1))
        return num

    def numToString(self, num):
        digit = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
        }
        string = ""
        if num == 0:
            string = digit[0]
        while num:
            string = digit[(num % 10)] + string
            num = num // 10
        return string

    def anotherTopVotedMultiply(self, num1, num2):
        num1 = self.stringToNum(num1)
        num2 = self.stringToNum(num2)
        return self.numToString(num1 * num2) """

# Additive Number					5/2/2024
""" 
# An additive number is a string whose digits can form an additive sequence.

# A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

# Given a string containing only digits, return true if it is an additive number or false otherwise.

# Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

# Example 1:
# 		Input: "112358"
# 		Output: true
# Explanation:
# 		The digits can form an additive sequence: 1, 1, 2, 3, 5, 8.
# 		1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

# Example 2:
# 		Input: "199100199"
# 		Output: true
# Explanation:
# 		The additive sequence is: 1, 99, 100, 199.
# 		1 + 99 = 100, 99 + 100 = 199

# Constraints:
# 		1 <= num.length <= 35
# 		num consists only of digits.

# Follow up: How would you handle overflow for very large input integers?


class Solution:
    def topVotedIsAdditiveNumber(self, num: str) -> bool:
        n = len(num)

        # check if the sequence is valid starting from the first two numbers
        for i in range(1, n):
            for j in range(i + 1, n):
                # if the first two numbers have leading zeros, move on to the next iteration
                if num[0] == "0" and i > 1:
                    break
                if num[i] == "0" and j > i + 1:
                    break

                # initialize the first two numbers and check if the sequence is valid
                num1 = int(num[:i])
                num2 = int(num[i:j])
                k = j
                while k < n:
                    # calculate the next number in the sequence and check if it matches the remaining string
                    num3 = num1 + num2
                    if num[k:].startswith(str(num3)):
                        k += len(str(num3))
                        num1 = num2
                        num2 = num3
                    else:
                        break
                if k == n:
                    return True

        # if no valid sequence is found, return False
        return False

    print(topVotedIsAdditiveNumber(None, "112358"))  #  true
    print(topVotedIsAdditiveNumber(None, "199100199"))  #  true """

# Binary Prefix Divisible By 5					5/3/2024
""" 
# You are given a binary array nums (0-indexed).

# We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).

# For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.

# Return an array of booleans answer where answer[i] is true if xi is divisible by 5.

# Example 1:
# 		Input: nums = [0,1,1]
# 		Output: [true,false,false]
# Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
# 		Only the first number is divisible by 5, so answer[0] is true.

# Example 2:
# 		Input: nums = [1,1,1]
# 		Output: [false,false,false]

# Constraints:
# 		1 <= nums.length <= 105
# 		nums[i] is either 0 or 1.


class Solution(object):
    def prefixesDivBy5(self, nums):
        res = [False] * len(nums)
        num = 0
        for i, x in enumerate(nums):
            num <<= 1
            num += x
            res[i] = num % 5 == 0
        return res

    print(prefixesDivBy5(None, [0, 1, 1]))  #  [true,false,false]
    print(prefixesDivBy5(None, [1, 1, 1]))  #  [false,false,false]


class Solution:
    def topVotedPrefixesDivBy5(self, nums):
        res = []
        num = 0
        for n in nums:
            num = (num * 2 + n) % 5
            res.append(num == 0)
        return res """

# Univalued Binary Tree					5/4/2024

# A binary tree is uni-valued if every node in the tree has the same value.

# Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

# Example 1:
# 		Input: root = [1,1,1,1,1,null,1]
# 		Output: true

# Example 2:
# 		Input: root = [2,2,2,5,2]
# 		Output: false

# Constraints:
# 		The number of nodes in the tree is in the range [1, 100].
# 		0 <= Node.val < 100


# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def isUnivalTree(self, root):
        def explore(node, val):
            if node == None:
                return True
            if node.val != val:
                return False
            return explore(node.left, val) and explore(node.right, val)

        return explore(root, root.val)

    print(isUnivalTree(None, [1, 1, 1, 1, 1, null, 1]))  #  true
    print(isUnivalTree(None, [2, 2, 2, 5, 2]))  #  false


class Solution:
    def isUnivalTree(self, tree):
        if not tree:
            return True

        if tree.right:
            if tree.val != tree.right.val:
                return False

        if tree.left:
            if tree.val != tree.left.val:
                return False

        return self.isUnivalTree(tree.right) and self.isUnivalTree(tree.left)


# Same same
