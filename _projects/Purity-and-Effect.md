---
layout: project
title: Purity and Effect
href: https://github.com/Riib11/Reed-Thesis
abstract: (My undergraduate thesis for Reed College) Implementing imperative effects in purely declarative programming languages using monads, algebraic effects and handlers, and freer monads.
permalink: /projects/purity-and-effect/
status: stable
---

{% include panel_github.html href="https://github.com/Riib11/Thesis-Purity-and-Effect" %}

{% include panel_doc.html href="https://github.com/Riib11/Thesis-Purity-and-Effect/raw/master/writing/drafts/BlanchetteHenry_FinalThesis.pdf" %}

There exists a dilemma of two programming language design philosophies: _imperative_ languages and _declarative_ languages.
Imperative languages are well-adapted for real-world programming, one reason being their ability to interact with _implicit contexts_, which is formalized by the concept of _performing effects_.
Though effects can be very useful, they are often _dangerous_ --- effects yield complexly-interdependent behaviors that are hard to analyze and predict.
Declarative languages are less well-adapted for this imperative style of programming, but can be much more _safe_ --- behavior is locally contained and easily analyzable and predictable.

This thesis approaches the challenge of designing a declarative programming language that provides effects with all the same capabilities of imperative language's effects while still maintaining safety.
The design process follows a progression of five languages:
1. _Func_ is a foundational declarative language,
2. _Impe_ extends _Func_ with imperative effects,
3. _Mona_ extends _Func_ with monadic effects,
4. _Alge_ extends _Func_ with algebraic effects with handlers, and finally
5. _Frer_ extends _Mona_ with a freer-monadic effects (a monadic implementation of algebraic effects with handlers).
The effect framework of _Frer_ meets the goals of the design challenge, and a subsequent discussion analyzes its significance.

<!-- TODO: include some of these links perhaps:

Henry is currently writing a thesis on [side-effectful](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) [functional](https://en.wikipedia.org/wiki/Functional_programming) [programming](https://en.wikipedia.org/wiki/Programming_language) [language](https://en.wikipedia.org/wiki/Language) [design](https://en.wikipedia.org/wiki/Programming_language#Design_and_implementation), in the context of [type theory](https://en.wikipedia.org/wiki/Type_theory) and [formal verification](https://en.wikipedia.org/wiki/Curry–Howard_correspondence).

 -->
