---
title: "Solving \"Leetcode 155. Min Stack\""
date: 2025-04-17T22:20:05+08:00
lastmod: 2025-04-17T22:20:05+08:00
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

This LeetCode solution implements **"Min Stack" (Problem 155)** using a pairing approach in Java. Rather than using two separate stacks, it uses a single ArrayList to store pairs of values: the actual value and the current minimum. Each stack element is represented as an int array where the first element is the value and the second is the minimum value up to that point. When pushing new values, the code compares the new value with the current minimum to determine the new minimum. All operations (push, pop, top, and getMin) achieve \\(O(1)\\) time complexity as they involve simple list operations at the last position. The space complexity is \\(O(N)\\) since storage grows linearly with the number of elements pushed. This elegant design efficiently satisfies all the problem requirements without unnecessary overhead.

## Problem
[Min Stack](https://leetcode.com/problems/min-stack/)

## Solution
```java
class MinStack {
    private List<int[]> stack;
    public MinStack() {
        this.stack = new ArrayList<int[]>();
    }
    
    public void push(int val) {
            int[] top = this.stack.isEmpty()? new int[]{val, val} : this.stack.get(this.stack.size() - 1);
            int minVal = top[1];
            if (val < minVal){
                minVal = val;
            }
            this.stack.add(new int[]{val, minVal});
    }
    
    public void pop() {
        this.stack.remove(this.stack.size() - 1);
    }
    
    public int top() {
        return this.stack.get(this.stack.size() - 1)[0];
    }
    
    public int getMin() {
        return this.stack.get(this.stack.size() - 1)[1];
    }
}
```
* **Time Complexity:** \\(O(1)\\)
* **Space Complexity:** \\(O(N)\\)
