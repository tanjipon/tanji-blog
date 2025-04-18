---
title: "Solving \"Leetcode 26. Remove Duplicates From Sorted Array\""
date: 2025-04-14T12:10:02+08:00
lastmod: 2025-04-14T12:10:02+08:00
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

This LeetCode solution addresses **"Remove Duplicates From Sorted Array" (Problem 26)** using the two-pointer approach in Java. The algorithm maintains two pointers: \\(k\\) tracks the position of the last unique element found, while \\(i\\) scans through the array. Since the array is sorted, whenever `nums[i]` differs from `nums[k]`, a new unique element is discovered. This element is then placed at position \\(k+1\\), and \\(k\\) advances. The code achieves \\(O(N)\\) time complexity with just one pass through the array, while maintaining \\(O(1)\\) space complexity by modifying the array in-place. The solution returns \\(k+1\\), representing the length of the array with duplicates removed, as the array now contains all unique elements in the first \\(k+1\\) positions.

## Problem
[Remove Duplicates From Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Solution
### Two Pointers
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[k]) {
                k++;
                nums[k] = nums[i];
            }
        }
        return k + 1;
    }
}
```
* **Time Complexity:** \\(O(N)\\)
* **Space Complexity:** \\(O(1)\\)