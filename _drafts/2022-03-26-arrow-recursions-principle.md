---
layout: post
title: Recursion principles for the `Arrow` type.
categories: academics
abstract:
author: Henry Blanchette
table_of_contents: false
---

# The `Arrow` type

The `Arrow` type is the type of (non-dependent) functions. The `Arrow` type is a
type family with two inputs: the "input" type and the "output" type of the
`Arrow`. For example, the type of the identity function

```
identity : ∀ (a : Type). a -> a
```

uses a single instance of the `Arrow` type, denoted as `->`, and has the same
type `a` as input and output. The `Arrow` type can equivalently be written in
usual pre-fixed notation like so:

```
identity : ∀ (a : Type). Arrow a a
```

# Recursion principles for the `Arrow` type

An recursion principle for a type is the canonical way to "eliminate" a type --
that is, it is the canonical way to consume a term of that type.

So, what is the canonical way to consume a term of an `Arrow` type? By
application, of course.

```
apply : ∀ (a : Type) (b : Type). (a -> b) -> a -> b
apply f a = f a
```

This recursion principle is actually trivial -- it turns out to just be a
particular instance of the `identity`. So, we could have written

```
apply : ∀ (a : Type) (b : Type). (a -> b) -> a -> b
apply = identity
```

This makes sense because the `Arrow` type is primitive to the lambda calculus.
It has a single constructor, `λ`, which must be primitive because it binds a
variable.

<!-- Suppose, rather than the usual `λ` we used a different primitive `υ` which works
as follows: `a υ x . b` encodes the application `(λ x . b) a`. Then we can write recover `apply` without using `λ` like so:

```
apply : ∀ (a : Type) (b : Type). (a -> b) -> a -> b
apply =
``` -->

<!-- Are there any other less-trivial recursion principles for the `Arrow` type?
Consider the following:

```
xxx : ∀ (a : Type) (b : Type) (c : Type). a -> (b -> c) -> c
xxx a k =
``` -->

```haskell
-- equivalent ways of defining a function
f :: forall a b. a -> b
f = undefined

g :: forall a b c. a -> (b -> c) -> c
g = undefined

f_using_g :: forall a b. a -> b
f_using_g a = g a (\b -> b)

g_using_f :: forall a b c. a -> (b -> c) -> c
g_using_f a k = k (f a)
```
