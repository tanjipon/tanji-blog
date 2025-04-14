---
title: "Algorithms and Data Structures Quick Notes"
date: 2025-04-14T13:33:13+08:00
lastmod: 2025-04-14T13:33:13+08:00
draft: false
description: ""
slug: ""
authors: ["tanji"]
tags: []
categories: ["algorithms and data structures"]
series: []
externalLink: ""
featuredImage: ""
toc: true
---

## Arrays
### Static Arrays
An array which is static means it has fixed size and cannot store additional elements when it’s full.

| Operation | Big-O Time | Notes |
| --- | --- | --- |
| Reading | \\(O(1)\\) |  |
| Insertion | \\(O(N)\\) | If inserting at the end of the array, \\(O(1)\\) |
| Deletion | \\(O(N)\\) | If deleting at the end of the array, \\(O(1)\\) |
* Related problems and solutions:
    * [Remove Duplicates from Sorted Array](https://blog.tanji.io/posts/leetcode-26-remove-duplicates-from-sorted-array/)
    * [Remove Element](https://blog.tanji.io/posts/leetcode-27-remove-element/)