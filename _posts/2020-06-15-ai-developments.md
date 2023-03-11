---
layout: post
title: AI Developments
categories: technology software ai
abstract: Tracking recent developments in and my thoughts about AI.
author: Henry Blanchette
table_of_contents: true
---

This article will be updated periodically to account for new developments.

_last updated: 2023-03-11_

# AI Technologies Timeline

| Announcement Date | Name                                  | Developer               | Category                                                                 | Links                                                                                                                                         |
| ----------------- | ------------------------------------- | ----------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 2016-01           | [AlphaGo](#AlphaGo)                   | [Deepmind](#Deepmind)   | [Game Player](#Game-Player)                                              | https://www.nature.com/articles/nature16961                                                                                                   |
| 2017-08           | [AlphaGo Zero](#AlphaGo-Zero)         | [OpenAI](#OpenAI)       | [Game Player](#Game-Player)                                              | https://github.com/openai/gym                                                                                                                 |
| 2018-12           | [AI Dungeon](#AI-Dungeon)             | [Latitude](#Latitude)   | [Game Application](#Game-Application)                                    | https://play.aidungeon.io/main/home                                                                                                           |
| 2019-02           | [GPT-2](#GPT-2)                       | [Deepmind](#Deepmind)   | [Text](#Text)                                                            | https://www.deepmind.com/blog/alphago-zero-starting-from-scratch                                                                              |
| 2019-08           | [AlphaStar](#AlphaStar)               | [Deepmind](#Deepmind)   | [Game Player](#Game-Player)                                              | https://www.semanticscholar.org/paper/Language-Models-are-Unsupervised-Multitask-Learners-Radford-Wu/9405cc0d6169988371b2755e573cc28650d14dfe |
| 2019-11           | [MuZero](#MuZero)                     | [OpenAI](#OpenAI)       | [Game Player](#Game-Player)                                              | https://www.nature.com/articles/s41586-019-1724-z                                                                                             |
| 2020-05           | [GPT-3](#GPT-3)                       | [OpenAI](#OpenAI)       | [Text Completion](#Text-Completion)                                      | https://arxiv.org/abs/1911.08265                                                                                                              |
| 2021-02           | [DALL-E](#DALL-E)                     | [OpenAI](#OpenAI)       | [Image Generation](#Image-Generation)                                    | https://arxiv.org/abs/2005.14165                                                                                                              |
| 2021-05           | [LaMDA](#LaMDA)                       | [Deepmind](#Deepmind)   | [Text Completion](#Text-Completion)                                      | https://blog.google/technology/ai/lamda                                                                                                       |
| 2022-04           | [DALL-E 2](#DALL-E-2)                 | [OpenAI](#OpenAI)       | [Image Generation](#Image-Generation)                                    | https://arxiv.org/abs/2102.12092                                                                                                              |
| 2022-08           | [Stable Diffusion](#Stable-Diffusion) | [OpenAI](#OpenAI)       | [Image Generation](#Image-Generation)                                    | https://github.com/CompVis/stable-diffusion                                                                                                   |
| 2022-09           | [Whisper](#Whisper)                   | [Microsoft](#Microsoft) | [Speach Recognition](#Speach-Recognition)                                | https://github.com/openai/whisper                                                                                                             |
| 2022-11           | [ChatGPT](#ChatGPT)                   | [OpenAI](#OpenAI)       | [Text Completion](#Text-Completion)                                      | https://openai.com/blog/chatgpt/, https://openai.com/blog/chatgpt                                                                             |
| 2023-02           | [The New Bing](#The-New-Bing)         | [Deepmind](#Deepmind)   | [Text Completion](#Text-Completion), [Internet Search](#Internet-Search) | https://www.bing.com/new                                                                                                                      |
| 2023-02           | [Bard](#Bard)                         | [Deepmind](#Deepmind)   | [Text Completion](#Text-Completion)                                      | https://blog.google/technology/ai/bard-google-ai-search-updates                                                                               |

# Companies

| Name                  | Founding Year | Founders                                                                                                                                                                                       | Owner      | Company Type   | AI Technologies |
| --------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- | --------------- |
| [CompVis](#CompVis)   | 2003          | [Björn Ommer](#Björn-Ommer), [M J Buhmann](#M-J-Buhmann)                                                                                                                                       | LMU Munich | research group |                 |
| [Deepmind](#Deepmind) | 2010          | [Demis Hassabis](#Demis-Hassabis), [Shane Legg](#Shane-Legg), [Mustafa Suleyman](#Mustafa-Suleyman)                                                                                            | Alphabet   | for-profit     |                 |
| [OpenAI](#OpenAI)     | 2015          | [Elon Musk](#Elon-Musk), [Sam Altman](#Sam-Altman), [Ilya Sutskever](#Ilya-Sutskever), [Greg Brockman](#Greg-Brockman), [Wojciech Zaremba](#Wojciech-Zaremba), [John Schulman](#John-Schulman) | OpenAI Inc | capped profit  |                 |
| [Latitude](#Latitude) | 2019          | [Nick Walton](#Nick-Walton)                                                                                                                                                                    |            | for-profit     |                 |

## AI Technologies

### AlphaGo

- First algorithm to beat best human Go players

### AlphaGo Zero

- Learns Go from scratch by playing against itself; doesn't need built-in rules
  and strategies

### AI Dungeon

- Uses text generation AI to power text-adventure game
- Initially very bad, but has gotten much better over time
- #[Latitude](#Latitude) is clearly a pioneer

### GPT-2

- Starts to show some promise, but has critical common failures in almost all
  tasks
- Taking advantage of new breakthrough in new AI training technology: transformers (GPT = generative pre-trained transformer)
- Can have conversational back-and-forth using just completion style
- Public API

### AlphaStar

- Learns from scratch to achieve superhuman performance in
  [StarCraft](https://starcraft2.com/en-us/)

### MuZero

- Higher-level learning from scratch
- Its complicated to explain; read the paper

### GPT-3

- Huge improvement over GPT-3; it now seems feasible to use in real-world
  applications where you need to generate relatively unimportant or uncreative
  text based on specific information
- Starts to get some news coverage about the idea that AI could be very relevant to or even replace portions of certain classes of white-collar jobs that were previously widely considered very safe, such as lawyers, doctors, software engineers
- Lots of social media attention of using GPT-3 to generate creative short text snippets, such as short stories, TV show scripts, poems, essays, etc.
- Most generations are very unimpressive, but clearly show promise with such a huge advancement over GPT-2
- Can have conversational back-and-forth using just completion style, and conversations can be reasonably longer (~2000 words) before becoming incoherent
- Most generations are kind of "insane" in that they don't really make sense at a fundamental level, but people often draw more abstract meaning by reading into it
- Public API

### DALL-E

- First mainstream instance of good AI image generation
- There are many features that DALL-E has trouble drawing, but it definitely gets a lot of high level features correct
- Lots of brainstorming about what this low-quality high-quantity low-latency type of art generation could be used for, but no large use cases yet

### LaMDA

- Deepmind's version of GPT
- Can have conversions
- Not publicly available

### DALL-E 2

- Huge improvement over DALL-E
- Can create actually impressive images with attention to detail given some prompt engineering expertise
- Both high-level features and low-level details can be generated
- Immediate huge potential for commercial and creative use
- Social media flooded with impressive generations
- Closed beta that allows limited free generations
- Public API

### Stable Diffusion

- Open-source alternative to DALL-E 2
- Can run on a midrange laptop (though, slowly i.e. takes ~2 minutes to generate an image)
- Doesn't have the censorship on what's allowed to be included in prompts that DALL-E 2 has

### Whisper

- Impressive and reliable text-to-speech that supports many different languages

### ChatGPT

- Groundbreaking technology in both its AI technology and its UI
- [In the open beta, accumulates more than 1 million users in first 5 days after launch](https://nerdynav.com/chatgpt-statistics/)
- Many users purport that ChatGPT is very useful in many different aspects of laptop jobs such as emailing, researching, programming, and many more
- Becomes incredibly popular topic on social media and in the news
- Almost everyone with some large social media following tries it out and gives their take publicly
- Many people are generally impressed with the fluency of ChatGPT's dialogue, and many of those are impressed with the quality of the actual informational content of the answers
- Many people are also very skeptical of this technology, especially pointing out that it often "hallucinates" false and often ridiculous information, which is a very well known problem among AI researchers

### The New Bing

- Microsoft buys a huge stake in OpenAI, as a pseudo-acquisition to compete with Google's AI efforts
- OpenAI was already closely tied with Microsoft -- they already ran pretty much all of their computation on Azure servers
- Microsoft launches a beta for "The New Bing" which is a total redesign of Bing to be a chat bot (powered by an advanced version of ChatGPT) that can interface with internet search as well (the bot can design a query to send to Bing, and then scrape the results of that query to generate its response to you, annotated with the source links it found)
- The beta is pretty small, but The New Bing gets a lot of attention especially by journalists who spend a lot of time with chat bot
- ["Sydney" is discovered to be the secret codename user for The New Bing in development](https://twitter.com/kliu128/status/1623472922374574080)
- Since Sydney can access the internet, it "knows" about itself in that it can lookup and respond to online information talking about Sydney itself

### Bard

- Soon after The New Bing was launched, Google appears to scramble to launch a competing technology, Bard
- The launch seems rushed, and the chat bot says some false information in the demo (though I think that shouldn't have been surprising to anyone -- ChatGPT and Sydney do the same all the time), and [Google stock suffers in part because of it](https://www.indmoney.com/articles/us-stocks/why-are-google-shares-falling-share-price-drop-a-good-buying-opportunity)

## AI Companies

### CompVis

### Deepmind

### OpenAI

### Latitude

