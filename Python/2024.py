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

# Similar to top voted solution
