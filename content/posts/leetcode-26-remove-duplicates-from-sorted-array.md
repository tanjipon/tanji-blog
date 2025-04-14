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

This post shares a solution solving "Leetcode 26. Remove Duplicates From Sorted Array" by using "two pointer" method.

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