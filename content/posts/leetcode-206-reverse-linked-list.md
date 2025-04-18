---
title: "Solving \"Leetcode 206. Reverse Linked List\""
date: 2025-04-18T00:12:12+08:00
lastmod: 2025-04-18T00:12:12+08:00
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

This LeetCode solution addresses **"Reverse Linked List" (Problem 206)** using an iterative approach in Java. The algorithm traverses the original linked list once, systematically reversing the direction of each node's pointer. It maintains two key pointers: "newHead" tracks the growing reversed list, while "head" moves through the original list. For each node, the algorithm saves a reference to the next node, redirects the current node to point to the reversed portion, updates the reversed list's head, and advances to the next original node. With \\(O(N)\\) time complexity where N is the list length, and \\(O(1)\\) space complexity since it only uses a fixed number of pointers regardless of input size, this solution efficiently reverses the linked list in-place without requiring additional data structures.

## Problem
[Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Solution
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode newHead = null;
        while (head != null){
            ListNode next = head.next;
            head.next = newHead;
            newHead = head;
            head = next;
        }
        return newHead;
    }
}
```
* **Time Complexity:** \\(O(N)\\)
* **Space Complexity:** \\(O(1)\\)
