---
layout: post
title: No Explanation
---

## Bar Code

In his 1991 paper _[Real Patterns](https://ruccs.rutgers.edu/images/personal-zenon-pylyshyn/class-info/FP2012/FP2012_readings/Dennett_RealPatterns.pdf)_, Dennet outlines a concrete challenge to the concept of _pattern_. He defines a pattern of pixels called Bar Code where in each row, there is a repeating occurence of 50 black pixels and then 50 white pixels. Simple enough. Here is a instance of Bar Code:

![](/assets/barcode/barcode_noise=0.0.png)

Of course, this is a _perfect_ instance of Bar Code. That is, this instance has no _noise_ that is not accounted for by the definition of Bar Code. Consider the following image:

![](/assets/barcode/barcode_noise=0.1.png)

This image is an instance of Bar Code with 10% random noise. The random noise is generated in the following way: each pixel in a perfect instance of Bar Code has a 10% chance of being flipped to the opposite color. Though the noise distorts the predictions that Bar Code yields about each pixel, Bar Code still seems like it can be a meaningful description.

The following array shows instances of Bar Code ranging in the amount of random noise.

![](/assets/barcode/barcode-array.png)

A phenomenon becomes clear: as the noise increases, Bar Code becomes a less and less useful way to recognize the image. At 50% noise in fact, it is mathematically equivelant to describe the image as "50% noise" as it is to describe it as "Bar Code with 50% noise" (in terms of predicting pixel values). At close to 50% noise, perhaps there is a better pattern than Bar Code at more accurately describing the pixels.

Dennet uses this demonstration to show how the concept of patterns relies on something beyond a priori definitions --- a pattern does not exclusively relate to its perfect instances. Ultimately, Dennet argues that patterns can be instantiated to varying degrees based on their _usefulness_ relative to the ovserver. For example, patterns can present trade-offs in accuracy (how often the pattern makes correct predictions) versus precision (how exact the pattern's predictions are) that must be weighed relative to the purpose for using the pattern.

My argument will be along similar lines, analogizing to the trade-offs made in scientific patterns to build explanations at varying levels of abstraction.

## Levels of Abstraction

Fields of scientific study can be organized into a abstraction-tree, where the leaves of the tree are the most precise and the deeper branches are abstractions of their children. Imagine the following as one path in this tree, in order of increasing abstraction: physics, chemistry, biology, psychology, sociology, political science. I will use the step between physics and chemistry as a canonical example. Chemistry is an abstraction of physics --- chemistry entirely depends on and is predicted by physics, but does not consider all of the details that physics considers.



## When There is No Explanation
