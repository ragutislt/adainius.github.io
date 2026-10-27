---
dev-to-link: supply-chain-vulnerabilities-in-software-40ji
title: "Supply-chain vulnerabilities in software"
---
# Supply-chain vulnerabilities in software

More and more often popular software packages are compromised, leading to stolen api keys, tokens, secrets, etc...
Such packages can be used by thousands of companies with different maturity levels in cyber-security.

Take one recent case of Trivy, a popular tool used to detect... wait for it... security vulnerabilities.
Last year it got infected with malicious code, even had several production-ready versions released to anyone using it's open-source version. (see the irony?)

Even worse - a CVE was not created for 3 days after it was discovered.
I'm sure many companies using it will never even know this breach has happened.
Another recent case was Axios, a popular data fetching library.

What can we do to mitigate the risk of these happening?

1. Do use vulnerability scanning tools. Even if Trivy was breached, it still scans all the other packages for CVEs and misconfigurations.
1. Pin package dependencies so you control when they are updated. This applies to your tooling (like Trivy) as we've seen they can be infected as well.
1. Have a procedure to follow in case your company was compromised. Ask questions like: who must be informed of the issue, what is the impact of the attack, did our system get compromised (network logs, docker image pull logs, etc...), how to improve our prevention and response?

## Resources

1. [Trivy attack](https://www.aquasec.com/blog/trivy-supply-chain-attack-what-you-need-to-know/)
1. [Axios attack](https://snyk.io/blog/axios-npm-package-compromised-supply-chain-attack-delivers-cross-platform/)
