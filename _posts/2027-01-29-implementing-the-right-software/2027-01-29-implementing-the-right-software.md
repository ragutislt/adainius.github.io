---
dev-to-link: how-can-you-make-sure-you-are-implementing-the-right-software-30eb
title: 'How can you make sure you are implementing the right software?'
---
# How can you make sure you are implementing the right software?

I've found one of the best ways is to use Domain-Driven Design (DDD) - a software development approach that emphasizes close collaboration between business and developers through a common language that both can understand.

Here are the main benefits of DDD:

1. Shared Language: Using ubiquitous language eliminates translation between business and technical terms. Practically this means not using terminology in your business logic code that a business person would not be able to understand.
1. Business-Centric Models: DDD forces developers to model software around business concepts.
1. Clear Boundaries: Defining bounded contexts helps organize large systems into manageable pieces and identify parts that can become their own product or identify non-core domains that can be bought elsewhere instead of developing in-house.

However, DDD is not mainstream at all in the software community, in a large part I think due to deeply-engrained organizational practices that create silos between devs and business.

The real value of DDD isn't in its technical patterns but in how it structures communication.

When business stakeholders can read your business logic code and understand the behaviour, you're probably on the right track.

## Resources

Two great books to learn more:

1. Domain-Driven Design: Tackling Complexity in the Heart of Software by Eric Evans, the author of DDD. This is more of an all-rounder introduction.
1. Implementing Domain-Driven Design by Vaughn Vernon. This is more of a practical guide with many code samples and patterns.