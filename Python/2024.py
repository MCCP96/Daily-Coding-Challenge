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


# Cool, does max when non-leaf end is encountered, else min
