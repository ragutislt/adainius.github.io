---
dev-to-link: why-do-software-projects-fail-despite-having-excellent-code-104h
title: 'Why do software projects fail despite having excellent code?'
---
# Why do software projects fail despite having excellent code?

It's concerning how many developers obsess over code quality while missing the fundamental question: are we building what users actually need?

Most of us have seen projects where teams spent weeks perfecting their architecture, choosing the latest frameworks, and arguing over the smallest of details on a pull request - only to deliver features that users never use. 🚫 This happens because we often jump straight into implementation without properly understanding the business requirements.

Here's a typical scenario:
Developer: "I've implemented a complex caching system to improve performance by X%"
User: "But I need the system to handle multiple currencies, not faster loading times"

The solution?

1. Start with workshops with BOTH your business and devs. 🤝
1. Use techniques like Event Storming or Domain Storytelling to make sure everyone is on the same page. 📝
1. Implement a system with 0 latency feedback loops - anyone should be able to send a screenshot to the business and ask their take. 🔄

Typically, teams spend a tiny minority of the whole project time on the things above, whereas it should take a good chunk of total project time.

Technical excellence matters, but it should come after ensuring we're building the right solution.

Final food for thought: A perfectly coded wrong solution is still wrong. 🤷‍♂️
