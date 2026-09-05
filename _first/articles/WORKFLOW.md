---
title: Workflow First
status: draft
description: Make the path from intent to a validated, deployable change explicit enough that humans, agents, and automation can cooperate without reconstructing it every time.
---

# Workflow First

## Principle

Make the path from intent to a validated, deployable change explicit enough that humans, agents, and automation can cooperate without reconstructing the process every time.

## The Case

I care less about which methodology name is on the wall and more about whether work can move from idea to a shipped, validated change without starting from zero.

Who decides what? Where does state live? When does a human approve? When does an agent hand off to CI, or CI back to an agent? Communication is not meetings. It is the transfer of useful context between actors. Durable when it affects future work. Ephemeral when it is coordination. If the workflow is only in people's heads, agents cannot help and humans cannot scale.

Implicit workflows do not survive contact with more than one person, or with an agent. Prior context lived in chat, so the next session repeats the analysis. Reviews happen without the plan. CI fails and nobody owns the next action. Production feedback never lands in an issue.

Kanban and Scrum can be tools inside a workflow. They are not the workflow. Ryan Singer's Shape Up is a useful contrast: work is shaped before it is bet on, and betting is a real decision, not a backlog that pretends everything is equally intended. The transferable idea is not six-week cycles. It is that unshaped work should not enter the building phase just because someone started typing.

The work loop lives here, and only here:

idea → plan → implement → review → pipeline signals → approval → release → learning

What matters is that each step has an actor, an input, an output, and a place for state. A consequential architectural choice goes in an ADR or a project doc — Documentation keeps it. Automated validation is a CI result — this station's automated stretch produces it. Work state lives in an issue, a task, or a pull request. Temporary coordination stays in a comment or chat.

A change is not done when it compiles on my machine. It is done when it passes the same checks everyone else relies on, and when it can reach the environment it needs to reach. For agents, CI is ground truth: implement, run checks, read failures, fix or escalate, run again. Martin Fowler's continuous integration is the first ancestor. Humble and Farley's deployment pipeline is the rest of the path. The commit stage is BUILD: compile, unit test, and produce the artifact once. Later stages promote that same artifact. They do not rebuild a different binary per environment. Twelve-factor says the same split as build / release / run. Dev/prod parity and admin as a one-off in the same codebase and config belong here too.

The path I want is boring on purpose:

change → format → lint → typecheck → test → build → preview → deploy → verify

Not every project needs every step on day one. Missing a typecheck on a TypeScript monorepo is not proportional. Adding canary orchestration to a weekend prototype is not proportional either.

The agentic delta is a delegation protocol. Generation is cheap only if the path is explicit. Give success criteria and a loop. Human approval is a boundary, not a vibe: product scope, security-sensitive changes, destructive operations wait. Everything else can move if the files are in order.

Those gates are factory control. The other stations point at them. They do not reprint them. If the path is "the agent just does it," you do not have a workflow. You have a hope that the next session will be careful.

## Product Leverage

A product that cannot change on purpose is a product stuck in its last heroic effort.

Workflow First is how you keep the ability to change direction. Small, reviewable changes with a visible state beat a month of private work that lands as a surprise. Learning from production only happens if the signal can become work, and work can become a release.

Time to market is mostly waiting: waiting for context, waiting for review, waiting for someone who "knows how we do this." An explicit path removes that wait without adding status theater. Small batches make experiments cheap. If a release is a ceremony, you will not experiment.

A plan in a file is cheaper than a recap in chat. A PR that points at the issue is cheaper than a branch with no owner. Those are product-speed moves wearing process clothes.

It also reduces product coupling to particular people. If only one person knows how a release happens, the product's roadmap is that person's calendar. Issues, PRs, and plans are how the product continues when that person is not in the room — including when the next actor is an agent.

A support ticket that never becomes an issue, a production error that never becomes a fix, an agent that implements without a plan: those are product failures with process costumes.

The work loop is the conveyor. Stations dump work onto it. The automated stretch is format, test, build, and deploy. Documentation is what remains after a handoff. If you keep a third loop in your head, you will reconstruct the process every time — which is the failure this station exists to prevent.

## Engineering Leverage

Explicit handoffs are an interface between actors, the same way an API is an interface between systems.

Inputs and outputs at each step make parallel work possible. Review has a plan to read. CI has a branch to check. The next agent has files instead of a recap.

State in issues and PRs is observable. Chat is not. That is testability for the process itself: you can see what is in flight, what is blocked, and what is waiting on a human.

Approval boundaries are clearer failure modes. A destructive change that requires a human is a named gate, not a hope that someone was watching.

A pipeline is a contract about what "integrated" means. The same gates for every meaningful change. Local commands that match CI, so humans and agents are not debugging two realities. Failures that are readable, so the next action is obvious. Build once, deploy many. If staging and production compile different trees, you are not promoting an artifact.

This station does not define what good means. That is Quality First. Quality names the bar. Workflow runs it. A green build that never ran the checks you care about is automation of the wrong thing.

This is not more tools. It is fewer implicit ones. One place for work state. One path for validation. One rule for what gets written down.

## In an Agentic System

Agents cannot follow a process that lives in one person's head.

They need to know where work state lives, what "done" means, when to stop and ask, and where to put findings that will matter later. Inspect, propose, implement in reviewable chunks, validate through existing CI, escalate consequential decisions.

Human gates are factory control: product scope, security, destructive ops. Without that, an agent either asks about everything or about nothing.

It also routes system signals back into work. CI failure → fix or escalate. Production signal → issue → change → pipeline → verify. An agent can participate in that loop only if the loop exists.

Agents generate code faster than humans can babysit it. The automated stretch is how you refuse to take their word for it. Give an agent a sandbox that is not the project's checks and it will optimize for the sandbox. Readable failure output is agent context. A 4,000-line log with no failed test name is not.

Agent-to-agent handoff is the same rule as human-to-human: enough context in durable form that the next actor does not need the transcript.

## What "First" Does Not Mean

Workflow First is not more meetings or status theater. It is not a required issue tracker, a required PR template, or Kubernetes for a brochure site.

It is not Quality First. Quality names the bar. Workflow executes the checks.

It is not Operations First. Workflow gets a change into production. Operations is what you do after it is there. A green pipeline is not verified recovery.

It is not Documentation First. Workflow decides when context is created and handed off. Documentation keeps it. Chat is not the system of record — that sentence is owned there.

It is not a marketing pipeline. Stages and gates are a shared shape. The artifact here is software. GTM fields stay in Product.

The smallest useful version: work state in an issue or PR, a short plan for non-trivial work, the project's real lint, type, test, and build commands on every meaningful change, the commit stage producing the artifact later stages deploy, a named human gate for destructive or product-consequential changes.

## Spec

Apply this: [principles/WORKFLOW.md](../principles/WORKFLOW.md). Return to the [factory map](../ABOUT.md).

## Further Reading

- [Ryan Singer, *Shape Up*](https://basecamp.com/shapeup/) — shaping before building; betting as a real decision. Use as contrast, not as a required method.
- [Jez Humble and Dave Farley, *Continuous Delivery*](https://continuousdelivery.com/) — always releasable; the deployment pipeline; commit-stage build once, deploy many.
- [Martin Fowler, "Continuous Integration"](https://martinfowler.com/articles/continuousIntegration.html) — integrate often; automated build as the first gate.
- [The Twelve-Factor App, Build, release, run](https://12factor.net/build-release-run) — strict separation; the artifact is promoted, not rebuilt.
- [On Continuous Delivery](https://gaboesquivel.com/blog/2015-07-continuous-delivery) — the same loop before agents were the ones reading the log.
- [Engineering in the AI Era](https://gaboesquivel.com/blog/2026-02-engineering-ai-era) — constraints and review while generation gets cheaper; the loop has to be explicit.
