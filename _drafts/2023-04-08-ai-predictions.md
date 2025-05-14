---
layout: post
title: Pre-HLMI Predictions
categories: ai
abstract: My predictions for the near-term consequences of advanced sub human-level AI.
author: Henry Blanchette
table_of_contents: true
---

As I explained in [my recent post]({% post_url 2023-04-03-ai-danger %}), I think that the risk that an advanced AI system will soon be developed and immanently cause AI Doomsday is very low (~2%), even if I do think an AI Doomsday is fairly likely (~80%) in the (very) very long term future. Even so, there will be many interesting near-term consequences of less advanced AI systems, even if less dire than apocalypse.

In this post, I make some predictions for the near-term consequences of both the _current_ AI technology I've observed and to some extent used myself, and what I expect to be _immanently_ developed AI technologies.

## Tools for AIs

One of the main areas I expect to quickly develop is that of building tools specifically for AIs to "use". Just recently, Open AI rolled out a basic setup for [ChatGPT _plugins_](https://openai.com/blog/chatgpt-plugins), which provide ChatGPT with an interface for calling external APIs such as Zapier and Wolfram Alpha. I don't know exactly how Open AI implemented this, but it seems likely something like this:
- the user can enable a limited selection of plugins
- ChatGPT is told, as part of the _System_ message, which plugins are available, and what sorts of phrases to look for that indicate a plugin should be used
- a hand-built program analyzes ChatGPT's outputs to check for when it's trying to use a plugin, and if it is, builds the corresponding API requests and feeds the response information back into ChatGPT

This a very cool first step, and its fun to see ChatGPT chain together several plugins to complete workflow like planning a trip or processing some quantitative in a NLP style. But it is just that -- a small first step towards building general frameworks of and interfaces between AIs and non-AI tools.

Andrej Karpathy, one of the foundering members of Open AI (and currently a research scientist there, after taking a break from Open AI for several years to work at Tesla on Autopilot), says he expects the ["next frontier of prompt engineering" to be "AutoGPTs"](https://twitter.com/karpathy/status/1642598890573819905), which are systems of AIs that communicate with each other in a way analogous to the components of a modern computer. In this tweet, Karpathy is reponding to a demonstration of a system using GPT4 to write and debug Python scripts.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Next frontier of prompt engineering imo: &quot;AutoGPTs&quot; . 1 GPT call is just like 1 instruction on a computer. They can be strung together into programs. Use prompt to define I/O device and tool specs, define the cognitive loop, page data in and out of context window, .run(). <a href="https://t.co/EKy84pa5bB">https://t.co/EKy84pa5bB</a></p>&mdash; Andrej Karpathy (@karpathy) <a href="https://twitter.com/karpathy/status/1642598890573819905?ref_src=twsrc%5Etfw">April 2, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

_Aside_. I've had only limited success getting GPT4 to write code based on specified behavior. [For example](https://github.com/rybla/chatscript/tree/main/conversations/func-synth), here I gave it a list of examples of inputs and outputs of simple functions and asked it to implement a function that meets that specification, and then iteratively told it what input/output pairs it got wrong and asked it to rewrite the function to be more accurate (this is often called "program synthesis" in the programming languages academic literature). I was able to get it to write _very_ simple functions, like `2 * x^2`, but it wasn't able to much of anything more complicated than that. I think my approach has some significant flaws, since I've seen others get much better performance on similar tasks, so there's clearly some technique to this kind of thing.

I think the analogy to programs is exactly right -- these are exactly programs. But, in contrast to programming, the behavior of the AI systems are much less specifiable. This implies troubles for TODO

## The Post-Turing-Test Age

It's finally been done -- AI systems that can reliably pass the turing test at scale, roughly as it was originally conceived, are here.

Communications-related jobs that require only basic human qualifications, such as almost all telemarketers, call centers, customer service representatives, etc, are likely to disappear immanently. That's an obvious prediction, which I think people take for granted at this point.

Due to the relatively lagging development of robotics in comparison to purely digital technology, some of the most important human skills that the AI cannot easily replicate yet is physical labor.

It's been highlighted in spurious news stories about people "falling" for AI agents, such as the LamDA guy at Google. But I don't think anyone is prepared for the massive influx of convincing AI agents online. Of course, there will surely soon be rules on every corner of the internet on where you are allowed to let an AI run an account and where you cannot (whereas now the largest platforms have any sort of credibly-enforceable rules on this). But, those rules will mostly be useless since it will be extremely difficult to catch sufficiently-advanced bots.




