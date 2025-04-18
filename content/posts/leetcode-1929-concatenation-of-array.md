---
title: "Solving \"Leetcode 1929. Concatenation of Array\""
date: 2025-04-15T12:32:58+08:00
lastmod: 2025-04-15T12:32:58+08:00
draft: false
description: ""
slug: ""
authors: ["tanji"]
tags: ["leetcode"]
categories: ["algorithms and data structures", "leetcode"]
series: []
externalLink: ""
featuredImage: "/images/posts/leetcode.jpeg"
toc: false
---

This LeetCode problem solution demonstrates how to concatenate an array with itself using Java. The approach uses System.arraycopy() to efficiently create a new array that's twice the length of the original and fills both halves with the original array's elements. With O(N) time and space complexity, this solution is optimal for the task. An alternative manual loop approach is also mentioned, though the built-in method likely offers better performance since it's implemented natively. The code is concise and directly addresses the problem requirements without unnecessary complexity.

## Problem
[Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/)

## Solution
### Manual Loop
```java
class Solution {
    public int[] getConcatenation(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n * 2];
        for (int i = 0; i < nums.length; i++) {
            ans[i] = nums[i];
            ans[i + n] = nums[i];
        }
        return ans;
    }
}
```
* **Time Complexity:** \\(O(N)\\)
* **Space Complexity:** \\(O(N)\\)

### Built-in System.arraycopy
```java
class Solution {
    public int[] getConcatenation(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n * 2];
        System.arraycopy(nums, 0, ans, 0, n);
        System.arraycopy(nums, 0, ans, n, n);
        return ans;
    }
}
```
* **Time Complexity:** \\(O(N)\\)
* **Space Complexity:** \\(O(N)\\)

