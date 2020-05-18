---
layout: post
title: Optimal Taxation
subtitle: It's simple, really.
author: Henry Blanchette
categories: economics
---

Yuta's prompt:

```
    I have an exercise for you.
    An efficient tax is a tax that doesn't cause distortions or costs in the economy, other than the actual cost of the tax. So no bad incentives or administrative costs. Can you think of an efficient tax?

    Alternatively, can you think of a tax that doesn't cause distortions, but could have a small administrative cost.

    I don't know about the answer.
```

# The Income Tax Policy Game

## Income Tax Policy

Here I present a simple formalization of an income tax policy.

First, the following are given:
- `Money` is the set of money-values, measured in amount of money.
- `Revenue` is the set of tax revenues, measured in money.
- `Income` is the set of incomes, measured in money.
- `Profit` is the set of profits (tax-adjusted incomes), measured in money.
- `Person` is the set of person-descriptions (later on, the exact information included can be specified).
- `Rate` is the set of income tax rates, measured in percentage of income.
- `Effort` is the set of effort-values, measured in percentage of potential effort.
- `Utility` is the set of utility-values, measured in _utils_.

**Income Tax Policy**.
An income tax policy is a mapping from income-person pairs to tax rates.
So a tax policy corresponds to a function `Tax : Person ✕ Income → Rate`.

## Context

<!-- Relevant to judging income tax policies, the following are given: -->

**Worker Income**.
Each person will earn income as a function of the effort they expend working.
Define the function `Earned-Income : Person ✕ Effort → Income` to map each person to the income they earn from the effort the expend working.

**Worker Income**.
Each person will be taxed on their income, and the leftover money is their profit.
So, we can define the function `Earned-Profit : Person ✕ Effort → Profit` by `Earned-Profit(p, e) := (1 - Tax(Earned-Income(p, e))) * Earned-Income(p, e)`,
since `(1 - Tax(Earned-Income(p, e)))` is the percentage of their income a worker keeps after taxes.

**Worker Value**.
Each person derives utilitiy from both their profit and their leisure, the amount also dependent on the effort they expend working.
Define the function `Valued-Leisure : Person ✕ Effort → Utility` to map each person to the utility they derive from their leisure given expended effort working.
Define the function `Valued-Profit : Person ✕ Effort → Utility` to map each peson to the utility they derive from their profit gained by expending effort working.
Finally, define `Valued-Total : Person ✕ Effort → Utility` by `Valued-Total(p, e) := Valued-Leisure(p, e) + Valued-Profit(p, e)`.
So, to maximize utility, a person `p` will expend an amount of effort `e` that maximizes `Valued-Total(p, e)`.

**Tax Revenue**.
The government earns tax revenue based on people's incomes and tax rates.
Define the function `Tax-Revenue : Person ✕ Effort → Revenue` by
`Tax-Revenue(p, e) := Tax(Earned-Income(p, e)) * Earned-Income(p, e)`.

## Goals

The goals for a tax policy `Tax` are the following:

-
**Maximize tax revenue**.
The sum of all `Tax(p, Tax-Revenue(p, e)) * Tax-Revenue(p, e)` is maximized over choice of `Tax`.

**Maximize worker profits**.
Want to minimize the amount of profit people forgo because of taxes.
(Is this actually a goal?)

## Solution 1
