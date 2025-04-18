---
title: "Solving \"Leetcode 27. Remove Element\""
date: 2025-04-14T13:19:12+08:00
lastmod: 2025-04-14T13:19:12+08:00
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

This LeetCode solution tackles **"Remove Element" (Problem 27)** using the two-pointer technique in Java. The approach employs a single pass through the array with two pointers: one (\\(i\\)) that iterates through every element, and another (\\(k\\)) that tracks the position for non-matching elements. When an element doesn't match the target value, it's copied to the position indicated by \\(k\\), which then increments. The algorithm achieves an optimal \\(O(N)\\) time complexity while maintaining \\(O(1)\\) space complexity since it modifies the array in-place without requiring additional memory. This elegant solution efficiently removes all instances of the specified value and returns the new length of the modified array.

## Problem
[Remove Element](https://leetcode.com/problems/remove-element/)

## Solution
### Two Pointers
```java
class Solution {
    public int removeElement(int[] nums, int val) {
        int k = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}
```
* **Time Complexity:** \\(O(N)\\)
* **Space Complexity:** \\(O(1)\\)
