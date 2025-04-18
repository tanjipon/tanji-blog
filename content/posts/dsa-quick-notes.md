---
title: "Algorithms and Data Structures Quick Notes"
date: 2025-04-14T13:33:13+08:00
lastmod: 2025-04-15T13:33:13+08:00
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

### Dynamic Arrays
Dynamic arrays grow as elements are added. In JavaScript and Python, these are the default arrays. They are automatically resized at runtime as the arrays grow.

| Operation | Big-O Time | Notes |
| --- | --- | --- |
| Reading | \\(O(1)\\) |  |
| Insertion | \\(O(1)\\) | \\(O(N)\\) if insertion in the middle since shifting will be required |
| Deletion | \\(O(1)\\) | \\(O(N)\\) if deletion in the middle since shifting will be required |

* Related problems and solutions:
    * [Concatenation of Array](https://blog.tanji.io/posts/leetcode-1929-concatenation-of-array)

### Stacks
A stack is a data structure that supports a subset of operations from a dynamic array. With a stack you may only add and delete elements from one end of the array (referred to as the top of the stack).

| Operation | Big-O Time | Notes |
| --- | --- | --- |
| Push | \\(O(1)\\) |  |
| Pop | \\(O(1)\\) | Check if the stack is empty first |
| Peek/Top | \\(O(1)\\) | Retrieves without removing |
