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

This post shares a solution solving "Leetcode 27. Remove Element" by using "two pointer" method.

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
