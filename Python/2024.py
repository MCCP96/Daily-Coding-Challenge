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


# 'dummy = cur = ListNode(0)' and 'cur.next = l1 or l2' are nice
