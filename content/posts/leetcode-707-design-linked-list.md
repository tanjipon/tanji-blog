---
title: "Solving \"Leetcode 707. Design Linked List\""
date: 2025-04-18T23:04:02+08:00
lastmod: 2025-04-18T23:04:02+08:00
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

This LeetCode solution implements **"Design Linked List" (Problem 707)** using a doubly linked list approach in Java. The implementation features dummy head and tail nodes to simplify edge cases, with each node containing value, previous, and next pointers. The class supports five operations: get value at index, add node at head, add node at tail, add node at specific index, and delete node at index. Operations that modify the list's ends (addAtHead, addAtTail) achieve \\(O(1)\\) time complexity by directly accessing the dummy nodes. Operations requiring node traversal (get, addAtIndex, deleteAtIndex) have \\(O(N)\\) time complexity as they might need to scan through the entire list. The space complexity is \\(O(N)\\) where N is the number of elements stored. This comprehensive solution handles all edge cases efficiently while maintaining the linked list's integrity through proper pointer management.

## Problem
[Design Linked List](https://leetcode.com/problems/design-linked-list/)

## Solution
```java
class ListNode {
    int val;
    ListNode prev;
    ListNode next;

    public ListNode(int val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyLinkedList {
    ListNode head;
    ListNode tail;
    int size;

    public MyLinkedList() {
        this.head = new ListNode(0); // dummy head
        this.tail = new ListNode(0); // dummy tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
    
    public int get(int index) {
        if (index >= this.size){
            return -1;
        }

        ListNode curr = this.head.next;
        while(index > 0){
            curr = curr.next;
            index--;
        }
        return curr.val;
    }
    
    public void addAtHead(int val) {
        ListNode newNode = new ListNode(val);
        ListNode prev = this.head;
        ListNode next = this.head.next;

        newNode.prev = prev;
        newNode.next = next;

        next.prev = newNode;
        prev.next = newNode;

        size++;
    }
    
    public void addAtTail(int val) {
        ListNode newNode = new ListNode(val);
        ListNode prev = this.tail.prev;
        ListNode next = this.tail;

        newNode.next = next;
        newNode.prev = prev;

        prev.next = newNode;
        next.prev = newNode;

        size++;
    }
    
    public void addAtIndex(int index, int val) {
        if (index > this.size){
            return;
        }   

        if (index == this.size){
            this.addAtTail(val);
            return;
        }
        
        ListNode curr = this.head.next;
        while(index > 0){
            curr = curr.next;
            index--;
        }
        ListNode newNode = new ListNode(val);
        ListNode prev = curr.prev;
        ListNode next = curr;

        newNode.next = next;
        newNode.prev = prev;

        prev.next = newNode;
        next.prev = newNode;

        size++;   
    }
    
    public void deleteAtIndex(int index) {
        if (index >= this.size){
            return;
        }

        ListNode curr = this.head.next;
        while (index > 0){
            curr = curr.next;
            index--;
        }
        ListNode prev = curr.prev;
        ListNode next = curr.next;

        prev.next = next;
        next.prev = prev;

        size--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
```
* **Time Complexity:**
  * \\(O(1)\\) for initiliztion
  * \\(O(1)\\) for `addAtHead(int val)` and `addAtTail(int val)`
  * \\(O(N)\\) for `get(int index)`, `addAtIndex(int index, int val)` and `deleteAtIndex(int index)`
* **Space Complexity:** \\(O(N)\\)
