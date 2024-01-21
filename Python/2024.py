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


# Gotten rusty with my binary search
