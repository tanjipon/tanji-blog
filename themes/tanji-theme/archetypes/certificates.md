---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: false
description: ""
issuer: "" # Organization that issued the certificate (e.g., "AWS", "Microsoft", "Cisco")
issueDate: {{ dateFormat "2006-01-02" .Date }} # Issue date in YYYY-MM-DD format
expiryDate: "" # Expiry date in YYYY-MM-DD format (if applicable)
credlyBadgeId: "" # ID from the Credly badge URL (if applicable)
certificateId: "" # Unique identifier/number of your certificate
featuredImage: "" # Path to certificate image
categories: ["Certifications"]
tags: [] # Technologies or skills related to the certification
skills:
  - "" # Key skills demonstrated by this certification
weight: 100 # For ordering certificates (lower number = higher position)
---

## About the Certification

A brief description of what this certification represents and why it's valuable.

## Skills Validated

- Skill 1
- Skill 2
- Skill 3

## Certification Process

Brief description of what was required to obtain this certification (exams, projects, etc.)

## Related Resources

- [Resource 1](https://example.com)
- [Resource 2](https://example.com)