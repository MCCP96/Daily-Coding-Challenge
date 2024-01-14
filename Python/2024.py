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

# Haha great solution
