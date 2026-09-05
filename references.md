# References

A categorized reading list for the ten FIRST principles, in the [canonical station order](_first/ABOUT.md#the-ten). Each section preserves the references already cited in its essay and adds **25 further sources**: **250 new references** in total.

**Researched:** 2026-09-05. New sources favor original authors, research institutions, standards bodies, and first-party engineering publications. Articles and manifestos are supplemented by relevant research papers, public book chapters, and authoritative guides or specifications. The topic categories describe why a source is useful; inclusion is not an endorsement of every claim or a requirement to adopt its method.

**How to read:** “Existing references” preserves the repository's starting bibliography, with topic labels. The following five categories contain the 25 additions, numbered within each principle. Sources were checked through publisher pages or search-indexed content; access limitations are noted where encountered. This is a reading bibliography, not a completed publication review of the FIRST essays.

- [Product First](#product-first)
- [Journeys First](#journeys-first)
- [Architecture First](#architecture-first)
- [Data First](#data-first)
- [API First](#api-first)
- [Documentation First](#documentation-first)
- [Workflow First](#workflow-first)
- [Quality First](#quality-first)
- [Security First](#security-first)
- [Operations First](#operations-first)

**AI factory research expansion — 2026-09-05:** The original bibliography and its counts above are preserved. The dated expansion subsections add **57 further sources**, including **11 comparable projects**, emphasizing 2025–2026 product discovery, factory architecture, delivery, evaluation, and operations. Dated articles range through 2026-09-04; living repositories are labeled by inspection date. Case studies, method proposals, product announcements, and independent research are identified separately.

**Factory reading route:** Start with [AI product factories](#ai-product-factories-discovery-and-strategy--20252026-expansion), [harness architecture](#ai-factory-harnesses-and-execution-architecture--20252026-expansion), the O'Reilly article in [delivery loops](#ai-code-factories-and-delivery-loops--20252026-expansion), and [projects comparable to FIRST](#projects-comparable-to-first). The [pattern comparison](#factory-patterns-to-compare-across-the-sources) connects these readings to the principles.

## Product First

[Principle](_first/principles/PRODUCT.md) · [Essay](_first/articles/PRODUCT.md)

### Existing references

- **Product ownership:** [Lee Robinson, "Product Engineers"](https://leerob.com/product-engineers) — work backwards from the desired experience; visually complete is not done.
- **Product ownership:** [Andrew Zigler, "The Rise of Product Engineers in the AI-Driven Era"](https://linearb.io/blog/the-rise-of-product-engineers-in-the-ai-driven-era) — Robinson on code last, and why generation still needs an opinion. (Automated retrieval could not parse the publisher's Markdown response.)
- **Product ownership:** [The Skillset of a Product Engineer](https://gaboesquivel.com/blog/2025-03-the-product-engineer) — outcomes over implementation; analytics as part of the job.
- **Discovery:** [Marty Cagan, "Discovery vs. Delivery"](https://www.svpg.com/discovery-vs-delivery/) — do not let production-quality delivery substitute for knowing what is worth building.
- **Strategy and decision artifacts:** [Working Backwards, PR/FAQ](https://workingbackwards.com/concepts/working-backwards-pr-faq-process/) — a heavier form of the same habit for major bets. Optional. Not the default artifact.

### Discovery and problem framing

1. [Marty Cagan — The Four Big Risks](https://www.svpg.com/four-big-risks/) — Test value, usability, feasibility, and business viability before committing.
2. [Marty Cagan — Product Discovery](https://www.svpg.com/product-discovery/) — Treat discovery as the search for an effective solution.
3. [Marty Cagan — Discovery–Delivery](https://www.svpg.com/discovery-delivery/) — Keep discovery and delivery within one accountable product team.
4. [Teresa Torres — Opportunity Solution Trees](https://www.producttalk.org/opportunity-solution-trees/) — Connect desired outcomes to customer opportunities and solution tests.
5. [Intercom — Start with the Problem](https://www.intercom.com/blog/intercom-product-principles-start-with-the-problem/) — Make the customer problem explicit before designing a solution.

### Strategy and direction

6. [Marty Cagan — Product Vision vs. Mission](https://www.svpg.com/product-vision-vs-mission/) — Separate the future product direction from the organization's purpose.
7. [Marty Cagan — Product Strategy Overview](https://www.svpg.com/product-strategy-overview/) — Focus product effort on a small set of consequential problems.
8. [Marty Cagan — Product Leadership Is Hard](https://www.svpg.com/product-leadership-is-hard/) — Connect product vision, principles, strategy, and empowered teams.
9. [Marty Cagan — The Alternative to Roadmaps](https://www.svpg.com/the-alternative-to-roadmaps/) — Replace feature commitments with problems and intended results.
10. [Richard Rumelt — The Perils of Bad Strategy](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-perils-of-bad-strategy) — Distinguish a coherent strategy from goals and slogans.

### Customers and jobs

11. [Intercom — How We Accidentally Invented Job Stories](https://www.intercom.com/blog/accidentally-invented-job-stories/) — A first-party account of replacing assumptions with customer situations and motivations.
12. [Intercom — Designing Features Using Job Stories](https://www.intercom.com/blog/using-job-stories-design-features-ui-ux/) — Describe situation, motivation, and desired outcome before features.
13. [Intercom — Finding Jobs Your Product Is Used For](https://www.intercom.com/blog/videos/finding-jobs-your-product-is-used-for/) — Use switching interviews to uncover why customers adopt a product; transcript.
14. [Intercom — How to Market the Job-to-Be-Done](https://www.intercom.com/blog/videos/marketing-the-job-to-be-done/) — Carry customer jobs into positioning and go-to-market choices; transcript.
15. [Paul Graham — Do Things That Don't Scale](https://paulgraham.com/ds.html) — Learn directly from early users through deliberate manual work.

### Evidence and outcomes

16. [Google Research — Measuring the User Experience on a Large Scale](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/) — The HEART paper connects goals, signals, and user-centered metrics.
17. [Microsoft Research — Three Key Checklists and Remedies for Trustworthy Analysis of Online Controlled Experiments at Scale](https://www.microsoft.com/en-us/research/wp-content/uploads/2020/06/2019-FabijanDmitrievOlssonBoschVermeerLewis_Three-Key-Checklists_ICSE_SEIP.pdf) — A research paper on checks that make product experiments trustworthy.
18. [Rahul Vohra — How Superhuman Built an Engine to Find Product Market Fit](https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/) — A founder's account of turning customer feedback into focused product decisions.
19. [SVPG — Outcomes Are Hard](https://www.svpg.com/outcomes-are-hard/) — Frame outcomes around problems and meaningful measures of success.
20. [Teresa Torres — Continuous Discovery Habits](https://www.producttalk.org/continuous-discovery-habits/) — Build regular customer learning into product decisions.

### Product ownership and principles

21. [Manifesto for Agile Software Development](https://agilemanifesto.org/) — A primary manifesto for collaboration, working software, and responding to change.
22. [Principles behind the Agile Manifesto](https://agilemanifesto.org/principles.html) — Ground iterative product work in customer value and feedback.
23. [Marty Cagan — Product vs. Feature Teams](https://www.svpg.com/product-vs-feature-teams/) — Give teams problems and accountability for outcomes.
24. [Paul Graham — How to Get Startup Ideas](https://paulgraham.com/startupideas.html) — Find worthwhile ideas by noticing real unmet needs.
25. [Amazon — 2016 Letter to Shareholders](https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders) — An original statement on customer obsession, experimentation, and decision speed.

### AI product factories, discovery, and strategy — 2025–2026 expansion

These sources concern deciding what to build and validating it with customers. “AI product factory” here means a repeatable discovery-to-delivery process; it does not imply that generating applications establishes product-market fit.

- [AWS — Henry Schein One goes AI-native with AI Product Discovery and Strategy](https://aws.amazon.com/blogs/industries/henry-schein-one-goes-ai-native-with-ai-product-discovery-and-strategy/) — **2026-07-20 · Customer case study.** Connects customer evidence, use-case intake, prioritization, prototypes, strategy, and go-to-market planning. Especially relevant to FIRST's product-to-engineering handoff; reported outcomes are the participants' account.
- [Marty Cagan — Build to Learn vs. Build to Earn](https://www.svpg.com/build-to-learn-vs-build-to-earn/) — **2026-04-16 · Product essay.** Separates inexpensive AI-assisted learning prototypes from the responsibilities of delivering a dependable product.
- [Marty Cagan — Build To Learn FAQ](https://www.svpg.com/build-to-learn-faq/) — **2026-04-27 · Product essay.** Explains how discovery changes when building becomes cheaper, including the continuing need for evidence and product judgment.
- [Marty Cagan — The Era of the Product Creator](https://www.svpg.com/the-era-of-the-product-creator/) — **2025-05-27 · Product essay.** Examines broader individual product ownership as AI reduces implementation barriers.
- [Marty Cagan — Forward Deployed Engineers](https://www.svpg.com/forward-deployed-engineers/) — **2025-09-17 · Product essay.** Connects technical problem solving with direct customer context; useful for factory teams that risk becoming detached from users.
- [Teresa Torres — Exploring What's Just Now Possible: How AI-Powered Discovery and Expert Feedback Are Driving My 2026 Roadmap](https://www.producttalk.org/my-2026-roadmap/) — **2026-01-14 · Practitioner account.** Shows how new AI capabilities and expert feedback inform actual product choices.
- [Teresa Torres — Behind the Scenes: Building AI-Generated Opportunity Solution Trees](https://www.producttalk.org/behind-the-scenes-ai-osts/) — **2026-05-13 · Practitioner account.** A concrete product-discovery application to study alongside the customer evidence it organizes.
- [Teresa Torres — Stakeholder Management for Product Teams: Show Your Work, Don't Sell Your Conclusions](https://www.producttalk.org/stakeholder-management/) — **2026-03-04 · Product essay.** Makes discovery reasoning inspectable rather than reducing faster AI delivery to a stream of stakeholder requests.

For an inspectable implementation of discovery, strategy, and prototype handoffs, see **AWS AI-PLC** in [Projects comparable to FIRST](#projects-comparable-to-first).

## Journeys First

[Principle](_first/principles/JOURNEYS.md) · [Essay](_first/articles/JOURNEYS.md)

### Existing references

- **Journey mapping:** [Jeff Patton, *User Story Mapping*](https://jpattonassociates.com/story-mapping/) — the whole job as a narrative; walking skeleton before muscle. Method, not a requirement.
- **Customer jobs:** [Clayton Christensen et al., "Know Your Customers' 'Jobs to Be Done'"](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done) — Customer jobs as the unit of analysis. (May require subscription.)
- **Human–AI interaction:** [Evolution of AI UX](https://gaboesquivel.com/blog/2026-01-evolution-ai-ux) — voice, chat, and admin as paths through one product, not as separate apps.
- **Design specification:** [DESIGN.md Format](https://raw.githubusercontent.com/google-labs-code/design.md/refs/heads/main/docs/spec.md) ([google-labs-code/design.md](https://github.com/google-labs-code/design.md)) — YAML tokens plus markdown sections; `omitted`; unknown headings preserved. Currently `alpha`. The artifact format, not the principle.

### Journey mapping and service design

1. [Nielsen Norman Group — Journey Mapping 101](https://www.nngroup.com/articles/journey-mapping-101/) — Map an actor's experience across steps, thoughts, and emotions.
2. [Nielsen Norman Group — Service Blueprints: Definition](https://www.nngroup.com/articles/service-blueprints-definition/) — Connect user-facing steps to backstage processes and dependencies.
3. [Nielsen Norman Group — UX Mapping Methods Compared: A Cheat Sheet](https://www.nngroup.com/articles/ux-mapping-cheat-sheet/) — Choose between journey maps, experience maps, empathy maps, and blueprints.
4. [Nielsen Norman Group — Customer Journeys and Omnichannel User Experience](https://www.nngroup.com/articles/customer-journeys-omnichannel/) — Consider the complete journey across channels and touchpoints.
5. [GOV.UK — Solve a Whole Problem for Users](https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem) — Define completion around the user's problem, beyond a single interface.

### Research and task understanding

6. [GOV.UK — Understand Users and Their Needs](https://www.gov.uk/service-manual/service-standard/point-1-understand-user-needs) — Ground journey decisions in research with actual users.
7. [Nielsen Norman Group — Task Analysis: Support Users in Achieving Their Goals](https://www.nngroup.com/articles/task-analysis/) — Identify goals, subtasks, context, and dependencies.
8. [Nielsen Norman Group — When to Use Which User-Experience Research Methods](https://www.nngroup.com/articles/which-ux-research-methods/) — Match a research method to the uncertainty being investigated.
9. [Nielsen Norman Group — Usability Testing 101](https://www.nngroup.com/articles/usability-testing-101/) — Observe representative users attempting realistic tasks.
10. [Nielsen Norman Group — Why You Only Need to Test with 5 Users](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/) — A case for small iterative qualitative studies; not a universal sample-size rule.

### Interaction states and recovery

11. [Jakob Nielsen — 10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/) — A compact set of principles for feedback, control, consistency, and recovery.
12. [Nielsen Norman Group — Visibility of System Status](https://www.nngroup.com/articles/visibility-system-status/) — Keep users informed about state and progress.
13. [Nielsen Norman Group — User Control and Freedom](https://www.nngroup.com/articles/user-control-and-freedom/) — Provide exits, undo, and recovery from unwanted actions.
14. [Nielsen Norman Group — Error-Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/) — Write errors that explain the problem and support recovery.
15. [Nielsen Norman Group — Preventing User Errors: Avoiding Unconscious Slips](https://www.nngroup.com/articles/slips/) — Design interactions that prevent common accidental actions.

### Inclusive and accessible journeys

16. [W3C WAI — Accessibility Principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/) — Explain perceivable, operable, understandable, and robust experiences.
17. [W3C WAI — Involving Users in Web Projects for Better, Easier Accessibility](https://www.w3.org/WAI/planning/involving-users/) — Include disabled people throughout design and evaluation.
18. [W3C WAI — Designing for Web Accessibility](https://www.w3.org/WAI/tips/designing/) — Apply concrete accessibility considerations to interface design.
19. [GOV.UK — Make Sure Everyone Can Use the Service](https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service) — Account for access needs, assisted use, and exclusion.
20. [Microsoft — Inclusive Design](https://inclusive.microsoft.design/) — Principles and resources for recognizing exclusion and learning from diversity.

### Design principles and human–AI interaction

21. [GOV.UK — Government Design Principles](https://www.gov.uk/guidance/government-design-principles) — An explicit statement of needs-first, iterative, inclusive service design.
22. [Don Norman — Human-Centered Design Considered Harmful](https://jnd.org/human-centered-design-considered-harmful/) — A critique that emphasizes activities and coherent systems alongside individual needs.
23. [Microsoft Research — Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/) — Research-backed guidance for expectations, correction, and control in AI experiences.
24. [Google — People + AI Guidebook](https://pair.withgoogle.com/guidebook/) — Connect AI capabilities with user needs, feedback, and graceful failure.
25. [Nielsen Norman Group — Mental Models](https://www.nngroup.com/articles/mental-models/) — Design around users' expectations of how the system works.

### AI-assisted customer evidence and experience validation — 2026 expansion

- [Teresa Torres — From Customer Interviews to an Opportunity Solution Tree—In Minutes](https://www.producttalk.org/ai-opportunity-solution-trees/) — **2026-02-18 · Practitioner account.** Uses interview material to build an opportunity structure. Relevant to preserving the evidence behind a journey; generated synthesis still needs review against the interviews.
- [Teresa Torres — Vibe Coding Best Practices: Avoid the Doom Loop with Planning and Code Reviews](https://www.producttalk.org/vibe-coding-best-practices/) — **2026-04-01 · Practitioner guide.** Connects clear planning and review to usable prototypes instead of repeated, unstructured prompting.

## Architecture First

[Principle](_first/principles/ARCHITECTURE.md) · [Essay](_first/articles/ARCHITECTURE.md)

### Existing references

- **System mapping:** [The C4 model](https://c4model.com/) — hierarchical, notation-independent views of software systems, containers, components, and deployment.
- **System mapping:** [C4 system context diagram](https://c4model.com/diagrams/system-context) — the smallest recommended view of people, the system, and external dependencies.
- **Decision records:** [Martin Fowler, "Architecture Decision Record"](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html) — short records of context, decision, rationale, and consequences.
- **Architectural responsibility:** [Martin Fowler, "Who Needs an Architect?"](https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf) — architecture as the important, hard-to-change decisions a team needs to understand.
- **Application principles:** [From the Twelve to Sixteen-Factor App](https://cloud.google.com/transform/from-the-twelve-to-sixteen-factor-app) — portable factors (stateless processes, attached backing services) without requiring a particular cloud product.

### Foundations and architectural principles

1. [David Parnas — On the Criteria to Be Used in Decomposing Systems into Modules](https://doi.org/10.1145/361598.361623) — Foundational paper on information hiding and module boundaries. (Publisher page; automated full-text access restricted.)
2. [Melvin Conway — Conway's Law](https://www.melconway.com/Home/Conways_Law.html) — The author's account of the relationship between communication structures and system design, linking to his original paper.
3. [The Reactive Manifesto](https://www.reactivemanifesto.org/) — Principles for responsive, resilient, elastic, message-driven systems.
4. [The Twelve-Factor App](https://12factor.net/) — A manifesto of practices for portable, operable service applications.
5. [Martin Fowler — Is High Quality Software Worth the Cost?](https://martinfowler.com/articles/is-quality-worth-cost.html) — Explain how internal design quality affects future delivery cost.

### Boundaries and dependency direction

6. [Alistair Cockburn — Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/) — Separate application behavior from external adapters.
7. [Robert C. Martin — The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) — Keep business rules independent of frameworks and delivery mechanisms.
8. [Martin Fowler — Bounded Context](https://martinfowler.com/bliki/BoundedContext.html) — Make the scope of each domain model explicit.
9. [Martin Fowler — Microservice Trade-Offs](https://martinfowler.com/articles/microservice-trade-offs.html) — Weigh independent deployment against distributed-system costs.
10. [Martin Fowler — Monolith First](https://martinfowler.com/bliki/MonolithFirst.html) — Delay service decomposition until domain boundaries are understood.

### System structure and communication

11. [James Lewis and Martin Fowler — Microservices](https://martinfowler.com/articles/microservices.html) — Describe the architectural characteristics and organizational implications of services.
12. [Martin Fowler — What Do You Mean by “Event-Driven”?](https://martinfowler.com/articles/201701-event-driven.html) — Distinguish event notification, state transfer, sourcing, and CQRS.
13. [Martin Fowler — CQRS](https://martinfowler.com/bliki/CQRS.html) — Separate read and write models only where the complexity is justified.
14. [Martin Fowler — Strangler Fig Application](https://martinfowler.com/bliki/StranglerFigApplication.html) — Replace a legacy system incrementally through explicit boundaries.
15. [Martin Fowler — Circuit Breaker](https://martinfowler.com/bliki/CircuitBreaker.html) — Contain failures across remote dependencies.

### Evolution and reversible decisions

16. [Martin Fowler — Sacrificial Architecture](https://martinfowler.com/bliki/SacrificialArchitecture.html) — Design with an explicit understanding that some systems will be replaced.
17. [Pramod Sadalage and Martin Fowler — Evolutionary Database Design](https://martinfowler.com/articles/evodb.html) — Use evolutionary database design to support architectural change.
18. [Martin Fowler — Yagni](https://martinfowler.com/bliki/Yagni.html) — Avoid speculative complexity while preserving code that can evolve.
19. [Martin Fowler — Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html) — Explain why design investment can sustain development speed.
20. [Martin Fowler — Technical Debt Quadrant](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) — Distinguish deliberate tradeoffs from reckless or accidental debt.

### Distributed-system tradeoffs

21. [Amazon — Timeouts, Retries, and Backoff with Jitter](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/) — Design remote interactions without amplifying dependency failures. (Publisher page requires JavaScript.)
22. [Amazon — Making Retries Safe with Idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/) — Use explicit request identity to make retries safe.
23. [Amazon — Avoiding Fallback in Distributed Systems](https://aws.amazon.com/builders-library/avoiding-fallback-in-distributed-systems/) — Examine why rarely exercised fallback paths can increase risk. (Publisher page requires JavaScript.)
24. [Pat Helland — Life Beyond Distributed Transactions: An Apostate's Opinion](https://www.cidrdb.org/cidr2007/papers/cidr07p15.pdf) — A paper on scalable entities, messages, and consistency boundaries.
25. [Martin Kleppmann — Please Stop Calling Databases CP or AP](https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html) — A critique of using CAP labels as a substitute for concrete guarantees.

### AI factory harnesses and execution architecture — 2025–2026 expansion

A harness is the surrounding execution system: context, tools, state, constraints, and feedback. These accounts describe patterns FIRST can reference without committing the portable principles to a particular runtime.

- [OpenAI — Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/) — **2026-02-11 · Engineering case study.** Makes repository knowledge, architectural constraints, observability, and maintenance legible to agents. A strong companion to the O'Reilly factory article; its production results are a first-party report.
- [Anthropic — Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) — **2025-11-26 · Engineering article.** Uses initialization, explicit feature state, incremental work, and progress artifacts to bridge context windows.
- [Anthropic — Harness design for long-running application development](https://www.anthropic.com/engineering/harness-design-long-running-apps) — **2026-03-24 · Engineering article.** Separates planning, generation, and evaluation with structured handoffs; examines how an independent evaluator can challenge implementation quality.
- [Anthropic — Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents) — **2026-04-08 · Architecture article.** Separates persistent sessions, agent execution, and sandboxes so failure and recovery do not depend on one process surviving.
- [Cursor — Scaling long-running autonomous coding](https://cursor.com/blog/scaling-agents) — **2026-01-14 · Research engineering account.** Explores planner/worker coordination and the limits of shared locking. Useful evidence about decomposition; experimental runs do not establish general production reliability.
- [Factory — Why model routing must be in the harness](https://factory.ai/news/model-routing-belongs-in-the-harness) — **2026-08-24 · Engineering argument.** Places routing near task state, context assembly, caching, and outcome measurement rather than treating it as an isolated model choice.
- [Anthropic — Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler) — **2026-02-05 · Research engineering account.** A substantial bounded experiment in task decomposition, tests, and coordination. Read for architecture and failure modes, not as a mandate to parallelize every task.

## Data First

[Principle](_first/principles/DATA.md) · [Essay](_first/articles/DATA.md)

### Existing references

- **Domain modeling:** [Eric Evans, *Domain-Driven Design Reference*](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf) — putting a shared domain model and language to work.
- **Data-system foundations:** [Martin Kleppmann, *Designing Data-Intensive Applications*](https://martin.kleppmann.com/) — durable reasoning about data models, storage, replication, consistency, and evolution.
- **Data integrity:** [PostgreSQL, "Constraints"](https://www.postgresql.org/docs/current/ddl-constraints.html) — executable integrity through not-null, unique, primary-key, foreign-key, check, and exclusion constraints.
- **Data ownership:** [Zhamak Dehghani, "Data Mesh Principles and Logical Architecture"](https://martinfowler.com/articles/data-mesh-principles.html) — domain-oriented ownership and data as a product at organizational scale; useful when the scale justifies it, not a default architecture.

### Data principles and stewardship

1. [The Data-Centric Manifesto](https://datacentricmanifesto.org/) — A manifesto treating data as a durable asset independent of applications.
2. [Wilkinson et al. — The FAIR Guiding Principles for Scientific Data Management and Stewardship](https://www.nature.com/articles/sdata201618) — The original paper on findable, accessible, interoperable, reusable data.
3. [The Open Data Charter — Principles](https://opendatacharter.org/principles/) — A statement on open, timely, usable, and interoperable data.
4. [W3C — Data on the Web Best Practices](https://www.w3.org/TR/dwbp/) — Guidance on identifiers, metadata, provenance, quality, and versioning.
5. [The Turing Way — Research Data Management](https://book.the-turing-way.org/reproducible-research/rdm) — A community guide to planning data handling and stewardship.

### Domain modeling and semantics

6. [Martin Fowler — Ubiquitous Language](https://martinfowler.com/bliki/UbiquitousLanguage.html) — Use a shared vocabulary between domain experts and implementers.
7. [Martin Fowler — Domain Model](https://martinfowler.com/eaaCatalog/domainModel.html) — Represent domain behavior and rules explicitly.
8. [Martin Fowler — Anemic Domain Model](https://martinfowler.com/bliki/AnemicDomainModel.html) — A critique of models that separate all behavior from domain data.
9. [Martin Fowler — DDD Aggregate](https://martinfowler.com/bliki/DDD_Aggregate.html) — Define consistency boundaries and controlled access to related entities.
10. [Martin Fowler — Schemaless Data Structures](https://martinfowler.com/articles/schemaless/) — Explain why implicit schemas still need deliberate design.

### Ownership and data products

11. [Zhamak Dehghani — How to Move Beyond a Monolithic Data Lake to a Distributed Data Mesh](https://martinfowler.com/articles/data-monolith-to-mesh.html) — The original case for domain-oriented analytical data ownership.
12. [Martin Fowler — Data Lake](https://martinfowler.com/bliki/DataLake.html) — Describe raw-data storage and the need to retain useful context.
13. [Martin Fowler — Reporting Database](https://martinfowler.com/bliki/ReportingDatabase.html) — Separate analytical workloads from operational data access deliberately.
14. [DataOps Manifesto](https://dataopsmanifesto.org/en/) — A manifesto for collaborative, repeatable, quality-focused data delivery.
15. [LinkedIn Engineering — Open Sourcing Databus: LinkedIn's Low Latency Change Data Capture System](https://engineering.linkedin.com/data-replication/open-sourcing-databus-linkedins-low-latency-change-data-capture-system) — A first-party account of propagating committed changes to dependent data systems.

### Integrity and consistency

16. [Peter Bailis — ACIDRain: Concurrency-Related Attacks on Database-Backed Web Applications](https://www.bailis.org/papers/acidrain-sigmod2017.pdf) — Research showing why application invariants need concurrency-aware enforcement.
17. [Peter Bailis — Coordination Avoidance in Database Systems](https://www.bailis.org/papers/ca-vldb2015.pdf) — Analyze when invariants require coordination; research paper.
18. [Werner Vogels — Eventually Consistent, Revisited](https://www.allthingsdistributed.com/2008/12/eventually_consistent.html) — Explain consistency models from a distributed-systems perspective.
19. [Martin Kleppmann — How to Do Distributed Locking](https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html) — Examine the guarantees required to protect data with distributed locks.
20. [Martin Kleppmann — A Critique of the CAP Theorem](https://arxiv.org/abs/1509.05393) — A paper arguing for more precise reasoning about consistency and availability.

### Evolution, lineage, and reproducibility

21. [Martin Kleppmann — Schema Evolution in Avro, Protocol Buffers and Thrift](https://martin.kleppmann.com/2012/12/05/schema-evolution-in-avro-protocol-buffers-thrift.html) — Compare compatibility guarantees when stored and transmitted data evolves.
22. [Danilo Sato — Parallel Change](https://martinfowler.com/bliki/ParallelChange.html) — Use expand, migrate, and contract steps for compatible changes.
23. [Martin Fowler — Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) — Represent state changes as events with explicit replay tradeoffs.
24. [W3C — PROV Overview](https://www.w3.org/TR/prov-overview/) — Introduce a standard model for provenance and data derivation.
25. [The Turing Way — Version Control](https://book.the-turing-way.org/reproducible-research/vcs) — Explain versioned research artifacts and reproducible collaboration.

## API First

[Principle](_first/principles/API.md) · [Essay](_first/articles/API.md)

### Existing references

- **API philosophy:** [Guillermo Rauch, "On APIs"](https://www.linkedin.com/pulse/apis-guillermo-rauch-aeupf) — companies that begin as APIs, complexity hidden behind a small surface, and why agents make that surface more important.
- **API product history:** [OpenAI, "OpenAI API" (11 June 2020)](https://openai.com/index/openai-api/) — first commercial product as a general-purpose API; integrate into existing products or invent new ones; models change behind a simple interface.
- **Human and machine interfaces:** [Vercel, "Vercel Ship 2026 recap"](https://vercel.com/blog/vercel-ship-2026-recap) — Ivan Zhao on designing API first and UI last because agents consume semantics, not screens. Read it as a split between human and machine interfaces, not as an argument that UI is finished.
- **API-first strategy:** [Postman, "What is API-first?"](https://www.postman.com/api-first/) — API-first as product and organizational strategy, distinct from design-first / spec-first; private APIs as most of the work.
- **Consumer-oriented design:** [Google Cloud, "API design tips"](https://cloud.google.com/blog/products/api-management/google-cloud-api-design-tips) — APIs designed for consumption versus one-off integration.
- **Platform manifesto:** [Steve Yegge, platform rant (2011)](https://gist.github.com/chitchcock/1281611) — reconstruction of Amazon's ~2002 service-interface mandate; design as if the interface could be external.
- **Agent-tool specification:** [Model Context Protocol, Tools](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) — agent tools as named capabilities with schemas. The same principle, different transport.
- **HTTP contract design:** [Best Practices for Designing RESTful APIs](https://gaboesquivel.com/blog/2015-10-best-practices-for-designing-web-apis) — earlier notes on HTTP contracts; narrower than this principle, still useful when the boundary is REST. (Existing URL retained; automated retrieval unsuccessful, needs manual link review.)

### API philosophy and consumer experience

1. [Joshua Bloch — How to Design a Good API and Why It Matters](https://research.google/pubs/how-to-design-a-good-api-and-why-it-matters/) — Foundational API-design guidance from a library designer.
2. [Ian Robinson — Consumer-Driven Contracts](https://martinfowler.com/articles/consumerDrivenContracts.html) — Let concrete consumer expectations inform service contracts.
3. [Martin Fowler — Published Interface](https://martinfowler.com/bliki/PublishedInterface.html) — Distinguish an internal public interface from a contract other parties depend on.
4. [Martin Fowler — Humane Interface](https://martinfowler.com/bliki/HumaneInterface.html) — Explore interfaces designed around usability for their callers.
5. [Martin Fowler — Command Query Separation](https://martinfowler.com/bliki/CommandQuerySeparation.html) — Separate operations that return information from operations that change state.

### Web architecture and semantics

6. [Roy Fielding — Representational State Transfer](https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) — The original dissertation chapter defining REST constraints.
7. [Roy Fielding — REST APIs Must Be Hypertext-Driven](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven) — Clarify what REST implies beyond HTTP endpoint naming.
8. [W3C — Architecture of the World Wide Web, Volume One](https://www.w3.org/TR/webarch/) — Explain identifiers, representations, and interaction on the web.
9. [IETF — RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) — The normative basis for methods, status codes, and conditional requests.
10. [IETF — RFC 9457: Problem Details for HTTP APIs](https://www.rfc-editor.org/rfc/rfc9457.html) — A standard structure for machine-readable error responses.

### Contract shape and design rules

11. [Microsoft — REST API Guidelines](https://github.com/microsoft/api-guidelines) — First-party guidance for consistent, consumer-facing API contracts.
12. [Zalando — RESTful API and Event Guidelines](https://opensource.zalando.com/restful-api-guidelines/) — A published set of API-first rules for resources, errors, and evolution.
13. [Google — AIP-121: Resource-Oriented Design](https://google.aip.dev/121) — Model APIs around resources and a consistent set of operations.
14. [Google — AIP-122: Resource Names](https://google.aip.dev/122) — Design stable identifiers and resource hierarchies.
15. [Google — AIP-158: Pagination](https://google.aip.dev/158) — Make collection traversal explicit before responses grow.

### Compatibility and failure behavior

16. [Google — AIP-180: Backwards Compatibility](https://google.aip.dev/180) — Define changes that preserve existing clients' expectations.
17. [Google — AIP-193: Errors](https://google.aip.dev/193) — Make failure behavior consistent and actionable.
18. [Google — AIP-151: Long-Running Operations](https://google.aip.dev/151) — Give asynchronous work an observable operation contract.
19. [Stripe — Designing Robust and Predictable APIs with Idempotency](https://stripe.com/blog/idempotency) — Explain how idempotent operations handle uncertain network outcomes.
20. [Stripe — API Versioning](https://stripe.com/blog/api-versioning) — A first-party account of evolving an API while preserving customer integrations.

### Executable descriptions and protocols

21. [OpenAPI Initiative — OpenAPI Specification](https://spec.openapis.org/oas/latest.html) — The primary specification for machine-readable HTTP API descriptions.
22. [AsyncAPI Initiative — AsyncAPI Specification](https://www.asyncapi.com/docs/reference/specification/latest) — Describe message-driven interfaces in an explicit contract.
23. [JSON Schema — What Is JSON Schema?](https://json-schema.org/overview/what-is-jsonschema) — Introduce reusable data-shape constraints for interface validation.
24. [GraphQL Foundation — Design Principles](https://spec.graphql.org/October2021/#sec-Overview) — The specification's principles for typed, client-specified queries.
25. [Google — AIP-203: Field Behavior Documentation](https://google.aip.dev/203) — Make required, immutable, and output-only fields explicit in a machine-readable contract.

### Agent tools and efficient integration contracts — 2025 expansion

- [Anthropic — Code execution with MCP: Building more efficient agents](https://www.anthropic.com/engineering/code-execution-with-mcp) — **2025-11-04 · Engineering article.** Describes discovering tools on demand and processing intermediate data in an execution environment instead of repeatedly carrying everything through the model context.

## Documentation First

[Principle](_first/principles/DOCUMENTATION.md) · [Essay](_first/articles/DOCUMENTATION.md)

### Existing references

- **Documentation philosophy:** [Tom Preston-Werner, "Readme Driven Development"](https://tom.preston-werner.com/2010/08/23/readme-driven-development.html) — write the human intro before the implementation invents the story.
- **Decision records:** [Michael Nygard, "Documenting Architecture Decisions" (2011)](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions) — the original ADR: short, in the repo, context / decision / consequences.
- **Decision records:** [Martin Fowler, "Architecture Decision Record"](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html) — why Nygard's form stuck, and what not to inflate it into.
- **Decision records:** [Architecture Decision Records](https://gaboesquivel.com/blog/2024-07-adrs-in-software-teams) — using ADRs in actual teams.
- **Agent context:** [The `llms.txt` proposal](https://llmstxt.org/) — selective, path-scoped orientation for agents using website documentation; complementary to human navigation and sitemaps.

### Documentation philosophy and manifestos

1. [Write the Docs — Documentation Principles](https://www.writethedocs.org/guide/writing/docs-principles/) — Treat documentation as part of the product and its user experience.
2. [Eric Holscher — Announcing Write the Docs](https://www.ericholscher.com/blog/2013/jan/28/announcing-write-docs/) — An original call to build a community around writing useful documentation.
3. [Diátaxis — A Systematic Approach to Technical Documentation Authoring](https://diataxis.fr/) — Organize documentation around four distinct user needs.
4. [Google — Documentation as Part of Software Engineering](https://abseil.io/resources/swe-book/html/ch10.html) — A book chapter on ownership, audiences, reviews, and documentation quality.
5. [The Good Docs Project — About](https://www.thegooddocsproject.dev/about) — A community statement on improving open-source documentation through reusable practices.

### Information architecture and reader needs

6. [Diátaxis — Tutorials](https://diataxis.fr/tutorials/) — Design learning experiences that let beginners succeed.
7. [Diátaxis — How-to Guides](https://diataxis.fr/how-to-guides/) — Write task-oriented procedures for readers with a concrete goal.
8. [Diátaxis — Reference](https://diataxis.fr/reference/) — Provide precise, structured descriptions of how a system behaves.
9. [Diátaxis — Explanation](https://diataxis.fr/explanation/) — Preserve reasoning, context, and conceptual understanding.
10. [Diátaxis — The Compass](https://diataxis.fr/compass/) — Use reader needs to decide where a piece of documentation belongs.

### Clear technical writing

11. [Google — Technical Writing One: Audience](https://developers.google.com/tech-writing/one/audience) — Choose explanations based on what readers know and need.
12. [Google — Technical Writing One: Clear Sentences](https://developers.google.com/tech-writing/one/clear-sentences) — Use concrete subjects and verbs to make technical meaning clear.
13. [Google — Technical Writing One: Short Sentences](https://developers.google.com/tech-writing/one/short-sentences) — Reduce sentence complexity without losing necessary detail.
14. [Google — Technical Writing One: Documents](https://developers.google.com/tech-writing/one/documents) — State scope and organize material around readers' questions.
15. [Google — Developer Documentation Style Guide: Highlights](https://developers.google.com/style/highlights) — A concise first-party guide to clear, consistent technical prose.

### Documentation lifecycle and durable decisions

16. [Write the Docs — Docs as Code](https://www.writethedocs.org/guide/docs-as-code/) — Apply version control, review, and automation to documentation.
17. [Write the Docs — Documentation Guide: Getting Started](https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/) — Identify what documentation a project needs and start with useful essentials.
18. [Joel Parker Henderson — Architecture Decision Record](https://github.com/joelparkerhenderson/architecture-decision-record) — A maintained collection of ADR rationale, examples, and templates.
19. [ADR Community — Architectural Decision Records](https://adr.github.io/) — The ADR community's explanation of lightweight decision records.
20. [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) — Principles for curated, human-readable records of meaningful changes.

### Discoverability, examples, and agent context

21. [Google — Code Samples](https://developers.google.com/style/code-samples) — Make examples understandable, usable, and consistent.
22. [Google — Cross-References](https://developers.google.com/style/cross-references) — Use descriptive links to connect readers with authoritative context.
23. [Google — Headings and Titles](https://developers.google.com/style/headings) — Use informative headings that help readers navigate and scan.
24. [AGENTS.md — A Simple, Open Format for Guiding Coding Agents](https://agents.md/) — A primary proposal for discoverable repository instructions.
25. [Anthropic — Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — Explain how to select and maintain the context an agent needs.

### Specifications, reusable skills, and durable agent context — 2025–2026 expansion

- [Thoughtworks — Structured-Prompt-Driven Development (SPDD)](https://www.martinfowler.com/articles/structured-prompt-driven/) — **2026-04-28 · Method article.** Treats structured prompts as versioned engineering assets covering intent, domain, solution, tasks, norms, and safeguards; relevant to keeping instructions aligned with implementation.
- [Birgitta Böckeler — Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) — **2025-10-15 · Comparative analysis.** Examines different meanings and implementations of spec-driven development. A useful counterweight to assuming every Markdown workflow has the same contract.
- [GitHub — Spec-driven development: Using Markdown as a programming language when building with AI](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-using-markdown-as-a-programming-language-when-building-with-ai/) — **2025-09-30 · Engineering account.** Explores persistent specifications as a source for generated implementation and the resulting workflow tradeoffs.
- [Anthropic — Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) — **2025-10-16 · Design article.** Packages reusable instructions and resources with progressive disclosure. Relevant to FIRST's separation of stable principles from task-specific skills.
- [Teresa Torres — Context Engineering: 5 Familiar Strategies from Real Product Teams](https://www.producttalk.org/context-engineering/) — **2026-02-11 · Practitioner guide.** Applies context design to product work, connecting reusable information with the task an assistant is actually doing.
- [Teresa Torres — How to Share Your AI Context and Skills Across Devices](https://www.producttalk.org/how-to-share-your-ai-context-and-skills/) — **2026-04-15 · Practitioner guide.** Addresses maintaining reusable context and skills beyond one device or conversation.
- [Factory — Evaluating Context Compression for AI Agents](https://factory.ai/news/evaluating-compression) — **2025-12-16 · Evaluation article.** Examines whether compressed context preserves information needed to continue work; useful for evaluating memory quality beyond token savings.

## Workflow First

[Principle](_first/principles/WORKFLOW.md) · [Essay](_first/articles/WORKFLOW.md)

### Existing references

- **Shaping and commitment:** [Ryan Singer, *Shape Up*](https://basecamp.com/shapeup/) — shaping before building; betting as a real decision. Use as contrast, not as a required method.
- **Continuous delivery:** [Jez Humble and Dave Farley, *Continuous Delivery*](https://continuousdelivery.com/) — always releasable; the deployment pipeline; commit-stage build once, deploy many.
- **Continuous integration:** [Martin Fowler, "Continuous Integration"](https://martinfowler.com/articles/continuousIntegration.html) — integrate often; automated build as the first gate.
- **Release lifecycle:** [The Twelve-Factor App, Build, release, run](https://12factor.net/build-release-run) — strict separation; the artifact is promoted, not rebuilt.
- **Continuous delivery:** [On Continuous Delivery](https://gaboesquivel.com/blog/2015-07-continuous-delivery) — the same loop before agents were the ones reading the log. (Existing URL retained; automated retrieval unsuccessful, needs manual link review.)
- **Agent-assisted work:** [Engineering in the AI Era](https://gaboesquivel.com/blog/2026-02-engineering-ai-era) — constraints and review while generation gets cheaper; the loop has to be explicit.

### Delivery philosophy and manifestos

1. [Manifesto for Software Craftsmanship](https://manifesto.softwarecraftsmanship.org/) — A statement on professional responsibility, collaboration, and well-crafted software.
2. [Gene Kim — The Three Ways: The Principles Underpinning DevOps](https://itrevolution.com/articles/the-three-ways-principles-underpinning-devops/) — Connect delivery flow, feedback, and continual learning.
3. [Continuous Delivery — Principles](https://continuousdelivery.com/principles/) — Make reliable, repeatable delivery a whole-team responsibility.
4. [Martin Fowler — Continuous Delivery](https://martinfowler.com/bliki/ContinuousDelivery.html) — Distinguish keeping software releasable from automatically releasing every change.
5. [Martin Fowler — Continuous Integration Certification](https://martinfowler.com/bliki/ContinuousIntegrationCertification.html) — Check whether a team's integration habits actually constitute CI.

### Small changes and integration

6. [DORA — Trunk-Based Development](https://dora.dev/capabilities/trunk-based-development/) — Explain how frequent integration reduces batch size and merge risk.
7. [DORA — Working in Small Batches](https://dora.dev/capabilities/working-in-small-batches/) — Shorten feedback cycles by reducing the amount of work in flight.
8. [DORA — Version Control](https://dora.dev/capabilities/version-control/) — Keep production inputs and delivery configuration under version control.
9. [Martin Fowler — Branch by Abstraction](https://martinfowler.com/bliki/BranchByAbstraction.html) — Make large changes incrementally while the mainline remains usable.
10. [Pete Hodgson — Feature Toggles](https://martinfowler.com/articles/feature-toggles.html) — Separate code integration from feature exposure while managing toggle debt.

### Review and human handoffs

11. [Google — The Standard of Code Review](https://google.github.io/eng-practices/review/reviewer/standard.html) — Review changes for overall code health with an explicit decision standard.
12. [Google — Small CLs](https://google.github.io/eng-practices/review/developer/small-cls.html) — Keep changes focused so reviewers can reason about them.
13. [Google — What to Look for in a Code Review](https://google.github.io/eng-practices/review/reviewer/looking-for.html) — Give reviewers a shared checklist for design, behavior, and maintainability.
14. [Google — Writing Good CL Descriptions](https://google.github.io/eng-practices/review/developer/cl-descriptions.html) — Preserve the change's purpose and reasoning at the handoff.
15. [Google — Speed of Code Reviews](https://google.github.io/eng-practices/review/reviewer/speed.html) — Reduce waiting time without abandoning review quality.

### Builds, pipelines, and releases

16. [DORA — Deployment Automation](https://dora.dev/capabilities/deployment-automation/) — Make deployment repeatable and reduce manual production steps.
17. [DORA — Continuous Integration](https://dora.dev/capabilities/continuous-integration/) — Use frequent integration and fast automated feedback.
18. [DORA — Loosely Coupled Teams](https://dora.dev/capabilities/loosely-coupled-teams/) — Reduce coordination dependencies in delivery.
19. [Google SRE — Release Engineering](https://sre.google/sre-book/release-engineering/) — A first-party chapter on reproducible builds and controlled releases.
20. [Martin Fowler — Blue Green Deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html) — Switch traffic between environments to simplify release and rollback.

### Shaping, flow, and learning

21. [Basecamp — Shape Up: Principles of Shaping](https://basecamp.com/shapeup/1.1-chapter-02) — Define boundaries and leave room for implementation decisions.
22. [Basecamp — Shape Up: Set Boundaries](https://basecamp.com/shapeup/1.2-chapter-03) — Use an appetite to constrain the work before committing.
23. [Basecamp — Shape Up: Write the Pitch](https://basecamp.com/shapeup/1.5-chapter-06) — Produce a reviewable proposal with problem, appetite, and solution outline.
24. [Basecamp — Shape Up: The Betting Table](https://basecamp.com/shapeup/2.2-chapter-08) — Make commitment and prioritization an explicit decision.
25. [DORA — Visual Management](https://dora.dev/capabilities/visual-management/) — Make work, blockers, and feedback visible to the team.

### AI code factories and delivery loops — 2025–2026 expansion

- [Paul Iusztin / O'Reilly Radar — Inside a Software Factory](https://www.oreilly.com/radar/inside-a-software-factory/) — **2026-09-04 · Technical article · Start here.** Organizes delivery into triage, brainstorming, planning, implementation, review, CI, release, and monitoring, supported by shared context. Especially close to FIRST's explicit artifacts, stoppable stages, and human decision points. The Squid implementation appears in the comparison below.
- [StrongDM — Software Factories and the Agentic Moment](https://factory.strongdm.ai/) — **2026-02-06 · Factory manifesto and first-party case study.** Proposes specification-driven generation, external holdout scenarios, and simulated dependencies. Its position against human code review differs from FIRST's human decision gates; distinguish useful validation patterns from adopting that autonomy policy.
- [AWS — AI-Driven Development Life Cycle: Reimagining Software Engineering](https://aws.amazon.com/blogs/devops/ai-driven-development-life-cycle/) — **2025-07-31 · Method article.** Introduces inception, construction, and operations with AI proposing work and humans validating decisions.
- [AWS — Open-Sourcing Adaptive Workflows for AI-Driven Development Life Cycle (AI-DLC)](https://aws.amazon.com/blogs/devops/open-sourcing-adaptive-workflows-for-ai-driven-development-life-cycle-ai-dlc/) — **2025-11-29 · Method and implementation article.** Adapts workflow depth to task complexity through reusable rules. Compare its original description with the evolving repository below.
- [GitHub — Spec-driven development with AI: Get started with a new open source toolkit](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/) — **2025-09-02 · Method article.** Explains the progression from intent through specifications and plans to implementation using Spec Kit.
- [martinfowler.com — Humans and Agents in Software Engineering Loops](https://www.martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) — **2026-03-04 · Analysis.** Distinguishes human control of purpose and outcomes from nested agent execution loops.
- [Stripe — Minions: Stripe's one-shot, end-to-end coding agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) — **2026-02-09 · Engineering case study.** Describes internal agents producing changes from start to finish while humans review the code. Publisher metadata and first-party index summary were accessible; the article body was not exposed by the web reader.
- [Stripe — Minions: Stripe's one-shot, end-to-end coding agents—Part 2](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) — **2026-02-19 · Engineering case study.** Companion implementation account for the Minions system. Same retrieval limitation as Part 1; read the original before relying on detailed architectural claims.
- [Ramp — Why We Built Our Own Background Agent](https://engineering.ramp.com/post/why-we-built-our-background-agent) — **2026-01-12 · Engineering case study.** Describes Inspect and the value of company-specific tools and context, including visual evidence. Checked through indexed publisher content; direct article extraction was limited.
- [Stripe / Mike North — AI didn't write our SDK. It changed how we built it.](https://stripe.dev/blog/ai-didnt-write-our-sdk-it-changed-how-we-built-it) — **2026-08-28 · Engineering case study.** The publisher describes prototypes, agent-drafted specifications, and persistent guidance getting ideas into reviewable form sooner. Date and publisher summary verified; article body unavailable to the reader.
- [Kiro — New in Kiro Web: Build with Spec, GitLab, and more](https://kiro.dev/blog/kiro-web-specs-gitlab/) — **2026-06-11 · Product engineering announcement.** A recent implementation of requirements, design, and task review before browser-to-PR execution.
- [Kiro — Specs just got faster (and smarter)](https://kiro.dev/blog/faster-smarter-specs/) — **2026-05-12 · Product engineering announcement.** Illustrates adapting specification depth and task execution to the actual change.
- [Teresa Torres — My Team of Agents: How I Get Claude to Do Tasks While I'm Away from the Computer](https://www.producttalk.org/my-team-of-agents/) — **2026-05-20 · Practitioner account.** A product practitioner's example of delegating repeatable work beyond an interactive session.

### Projects comparable to FIRST

**Living projects inspected 2026-09-05.** Repository links are primary implementation references, not publication dates or independent proof of effectiveness. The comparisons are editorial interpretations of their documented workflows. FIRST's reference point is its ten portable principles, station artifacts, and separation of factory guidance from adopter instance facts.

| Project | Documented artifacts and workflow | Relationship to FIRST |
| --- | --- | --- |
| [AWS AI-PLC](https://github.com/aws-samples/sample-ai-plc) | Markdown discovery workflow; pain-point analysis, PR/FAQ, prioritization, strategy, prototype specifications, and decision audit. | Particularly close to the product-factory side: portable evidence and an engineering handoff. The AWS article calls the approach AI-PDS; its linked repository is now named AI-PLC and describes an experimental prototyping sample. |
| [AWS AI-DLC Workflows](https://github.com/awslabs/aidlc-workflows) | A harness-neutral core distributed to multiple assistants; adaptive stages, approval gates, persistent knowledge, audit, and resume state. | Strong comparison for portable methodology versus native assistant integration. It prescribes a more elaborate lifecycle and agent roster than FIRST's ten principles. |
| [BMad Method](https://github.com/bmad-code-org/BMAD-METHOD) | Guided planning, building, verification, and learning with product, UX, architecture, and testing perspectives. | Close in breadth and role-based perspectives; more prescriptive guided workflows than FIRST's portable station contracts. |
| [Squid](https://github.com/iusztinpaul/squid) | Feature specifications, planning, implementation, testing, review, and on-call roles with granular commands and human checkpoints. | The concrete companion to the supplied O'Reilly article. Useful for comparing how station artifacts become a delivery workflow in a specific coding assistant. |
| [GitHub Spec Kit](https://github.com/github/spec-kit) | Constitution, specification, implementation plan, and task breakdown with coding-agent integrations. | Strong feature-level spec-to-build comparison; FIRST additionally organizes broader product, operational, and evidence responsibilities. |
| [OpenSpec](https://github.com/Fission-AI/OpenSpec) | Change proposals, specifications and scenarios, design, tasks, and archived changes. | Useful for separating current system truth from proposed changes, particularly in existing products. Its primary unit is a change rather than a principle. |
| [Superpowers](https://github.com/obra/superpowers) | Composable skills for brainstorming, planning, implementation, testing, review, and verification. | A useful comparison for executable workflow skills. Its prescribed development practices are more specific than FIRST's principle layer. |
| [Compound Engineering](https://github.com/EveryInc/compound-engineering-plugin) | Brainstorm, plan, build, review, and capture learning for subsequent work. | Especially relevant to the loop between Workflow and Documentation: each completed change can improve future context. It is delivered as an assistant plugin. |
| [Agent OS](https://github.com/buildermethods/agent-os) | Discover and document repository standards, shape specifications, and inject relevant standards into agent work. | Close to durable context and project-specific conventions; narrower than an end-to-end product factory. |
| [gstack](https://github.com/garrytan/gstack) | Role-oriented skills for product, engineering, design, browser QA, security, and shipping. | Comparable role perspectives with concrete assistant commands; examine individual skills rather than treating productivity claims as validation. |
| [StrongDM Attractor](https://github.com/strongdm/attractor) | Natural-language specifications for a workflow engine, coding-agent loop, and unified model interface. | A reference for factory execution architecture. The repository provides specifications to implement, not a ready-to-run factory engine; its autonomy model differs from FIRST's. |

### Factory patterns to compare across the sources

This is a reading map, not a proposed change to FIRST's principles.

| Pattern | Sources in this expansion | FIRST connection |
| --- | --- | --- |
| Customer evidence becomes a portable build input | AWS AI-PLC, AI-PDS case study, Torres discovery articles | Product and Journeys |
| Intent, constraints, and tasks persist outside chat | Spec Kit, OpenSpec, SPDD, Agent OS | Documentation and Architecture |
| Explicit stages support human decisions and resumption | O'Reilly/Squid, AI-DLC, BMad | Workflow |
| Execution infrastructure supplies state, tools, and feedback | OpenAI harness engineering, Anthropic harness articles, Cursor research | Architecture and Operations |
| Validation challenges generated work independently | StrongDM scenarios, Anthropic evaluator design, METR review study | Quality |
| Production signals generate reviewable maintenance work | Ramp Sheets case study | Operations and Workflow |
| Completed work improves reusable guidance | Compound Engineering, AI-DLC knowledge and learning | Documentation |

## Quality First

[Principle](_first/principles/QUALITY.md) · [Essay](_first/articles/QUALITY.md)

### Existing references

- **Test strategy:** [Martin Fowler, "Test Pyramid"](https://martinfowler.com/bliki/TestPyramid.html) — a portfolio of checks, not a coverage cult.
- **AI evaluations:** [Hamel Husain, "Your AI Product Needs Evals"](https://hamel.dev/blog/posts/evals/) — unsuccessful LLM products usually lack an evaluation system, not a prompt.
- **Engineering criteria:** [Engineering in the AI Era](https://gaboesquivel.com/blog/2026-02-engineering-ai-era) — declarative criteria and loops when generation is cheap.

### Quality principles and release criteria

1. [The W. Edwards Deming Institute — 14 Points for Management](https://deming.org/explore/fourteen-points/) — A primary statement on building quality into systems and improving the process.
2. [Context-Driven Testing — The Seven Basic Principles](https://context-driven-testing.com/) — A manifesto that makes testing practice depend on context and judgment.
3. [Google — Software Engineering at Google: Testing Overview](https://abseil.io/resources/swe-book/html/ch11.html) — A book chapter on why and how engineering organizations test software.
4. [Martin Fowler — Test Coverage](https://martinfowler.com/bliki/TestCoverage.html) — Explain the limits of treating coverage as a measure of test quality.
5. [Google Testing Blog — Code Coverage Best Practices](https://testing.googleblog.com/2020/08/code-coverage-best-practices.html) — Use coverage to find gaps while preserving judgment about behavior.

### Test portfolios and boundaries

6. [Ham Vocke — The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) — A detailed article on balancing fast checks with integration confidence.
7. [Toby Clemson — Testing Strategies in a Microservice Architecture](https://martinfowler.com/articles/microservice-testing/) — Choose tests that exercise the right service boundaries.
8. [Google Testing Blog — Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html) — Explain the cost and diagnostic limits of excessive end-to-end testing.
9. [Martin Fowler — Contract Test](https://martinfowler.com/bliki/ContractTest.html) — Verify that a dependency still satisfies the expectations a consumer uses.
10. [Martin Fowler — Integration Test](https://martinfowler.com/bliki/IntegrationTest.html) — Clarify narrow and broad interpretations of integration testing.

### Test design and maintainability

11. [Martin Fowler — Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html) — Distinguish test doubles and state-based versus interaction-based testing.
12. [Martin Fowler — Test Double](https://martinfowler.com/bliki/TestDouble.html) — A vocabulary for fakes, stubs, spies, mocks, and dummies.
13. [Google — Software Engineering at Google: Unit Testing](https://abseil.io/resources/swe-book/html/ch12.html) — Design focused tests that remain clear as implementation evolves.
14. [Google — Software Engineering at Google: Test Doubles](https://abseil.io/resources/swe-book/html/ch13.html) — Balance realism, isolation, and maintenance when replacing dependencies.
15. [Martin Fowler — Eradicating Non-Determinism in Tests](https://martinfowler.com/articles/nonDeterminism.html) — Identify and remove sources of flaky test behavior.

### Properties, exploration, and failure modes

16. [Claessen and Hughes — QuickCheck: A Lightweight Tool for Random Testing of Haskell Programs](https://www.cs.tufts.edu/~nr/cs257/archive/john-hughes/quick.pdf) — The original paper on testing properties against generated inputs.
17. [Andreas Zeller — The Fuzzing Book](https://www.fuzzingbook.org/) — An open textbook explaining automated input generation and failure discovery.
18. [Principles of Chaos Engineering](https://principlesofchaos.org/) — A manifesto for controlled experiments on system behavior under failure.
19. [Google SRE — Testing for Reliability](https://sre.google/sre-book/testing-reliability/) — Connect testing strategies with reliability requirements.
20. [Google Testing Blog — Flaky Tests at Google and How We Mitigate Them](https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html) — A first-party account of detecting and controlling flaky tests.

### AI evaluations and measurable budgets

21. [Anthropic — Demystifying Evals for AI Agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) — Explain tasks, graders, trials, and evaluation design for agents.
22. [Anthropic — Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) — Tie agent complexity to observable task performance.
23. [Google Research — The ML Test Score: A Rubric for ML Production Readiness and Technical Debt Reduction](https://research.google/pubs/the-ml-test-score-a-rubric-for-ml-production-readiness-and-technical-debt-reduction/) — A research rubric for data, model, infrastructure, and monitoring tests.
24. [web.dev — Performance Budgets 101](https://web.dev/articles/performance-budgets-101) — Define explicit limits for performance regressions.
25. [web.dev — Web Vitals](https://web.dev/articles/vitals) — Define user-centered performance measures that can inform a release bar.

### Evaluating AI factories and their claims — 2025–2026 expansion

- [Teresa Torres — AI Evals: A Hands-On Guide for Product Teams](https://www.producttalk.org/ai-evals/) — **2026-09-02 · Practitioner guide.** Applies evaluation to AI products and AI-assisted product workflows; useful for checking the discovery factory as well as its output.
- [METR — Many SWE-bench-Passing PRs Would Not Be Merged into Main](https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/) — **2026-03-10 · Research note.** Compares automated grading with maintainer review. The agents had no review-feedback iteration, so the findings support richer acceptance criteria rather than a universal capability ceiling.
- [METR — Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) — **2025-07-10 · Randomized study.** A counterpoint to unmeasured factory productivity claims, scoped to experienced developers, their own repositories, and early-2025 tools.
- [METR — We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/) — **2026-02-24 · Research update.** Explains selection effects as adoption changes. Read with the earlier experiment instead of extrapolating its result to current tools.
- [Anthropic — Quantifying infrastructure noise in agentic coding evals](https://www.anthropic.com/engineering/infrastructure-noise) — **2026-02-05 · Evaluation study.** Shows how runtime resources and enforcement affect benchmark results; record environment and budget alongside model and harness versions.

## Security First

[Principle](_first/principles/SECURITY.md) · [Essay](_first/articles/SECURITY.md)

### Existing references

- **Secure development:** [Microsoft, Security Development Lifecycle](https://www.microsoft.com/en-us/securityengineering/sdl) — security requirements and threat modeling inside the development process, not after.
- **DevSecOps:** [OWASP, DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/) — shift-left as continuous security in the delivery loop.
- **Agent security:** [Prompt Injection](https://gaboesquivel.com/blog/2025-06-prompt-injection) — untrusted text steering tools. One surface. Not the whole principle.

### Security principles and secure design

1. [Saltzer and Schroeder — The Protection of Information in Computer Systems](https://web.mit.edu/Saltzer/www/publications/protection/) — Foundational paper on least privilege, fail-safe defaults, and complete mediation.
2. [The Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org/) — A primary statement of values and principles for threat modeling.
3. [CISA and Partner Agencies — Shifting the Balance of Cybersecurity Risk](https://www.cisa.gov/sites/default/files/2023-06/principles_approaches_for_security-by-design-default_508c.pdf) — Primary principles for security by design and by default; guidance paper. (Search-index verified; direct automated retrieval blocked.)
4. [NIST — Secure Software Development Framework, SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) — A primary framework for integrating security into software development.
5. [OWASP — Secure Product Design](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Product_Design_Cheat_Sheet.html) — Translate design principles into concrete application-security decisions.

### Threats and trust boundaries

6. [OWASP — Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) — Identify assets, threats, and mitigations before implementation.
7. [OWASP — Attack Surface Analysis Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html) — Map entry points and changes to exposed system behavior.
8. [Google Research — BeyondCorp: A New Approach to Enterprise Security](https://research.google/pubs/beyondcorp-a-new-approach-to-enterprise-security/) — The original paper on moving access decisions beyond network location.
9. [NIST — Zero Trust Architecture, SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final) — Define identity- and resource-centered trust decisions.
10. [Google — Building Secure and Reliable Systems: Design for Least Privilege](https://google.github.io/building-secure-and-reliable-systems/raw/ch05.html) — A book chapter on limiting authority and reducing the impact of compromise.

### Identity and authorization

11. [OWASP — Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) — Define secure authentication behavior and identity safeguards.
12. [OWASP — Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) — Apply deny-by-default and consistent permission checks.
13. [OWASP — Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) — Protect the lifecycle of authenticated sessions.
14. [OWASP — OAuth 2.0 Protocol Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/OAuth2_Cheat_Sheet.html) — Apply secure delegated-authorization patterns.
15. [IETF — RFC 9700: Best Current Practice for OAuth 2.0 Security](https://www.rfc-editor.org/rfc/rfc9700.html) — The primary security guidance for OAuth deployments.

### Secrets, data protection, and supply chain

16. [OWASP — Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) — Plan secret storage, access, rotation, and auditing.
17. [OWASP — Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html) — Choose data-protection controls and manage keys explicitly.
18. [OWASP — Software Supply Chain Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) — Identify risks in dependencies, build systems, and artifact distribution.
19. [OpenSSF — SLSA: About](https://slsa.dev/spec/v1.2/about) — Explain provenance and integrity guarantees for software artifacts.
20. [Sigstore — What Is Sigstore?](https://www.sigstore.dev/docs/what_is_sigstore) — The project's original explanation of software signing backed by transparency logs.

### Application and agent security

21. [OWASP — Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/) — A primary catalog of verifiable application-security requirements.
22. [OWASP — API Security Top 10](https://owasp.org/www-project-api-security/) — Prioritize common trust and authorization failures at API boundaries.
23. [OWASP — LLM Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) — Separate trusted instructions from untrusted content and constrain tools.
24. [Simon Willison — The Lethal Trifecta for AI Agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) — Explain the interaction of private data, untrusted inputs, and external communication.
25. [Anthropic — Mitigating the Risk of Prompt Injections in Browser Use](https://www.anthropic.com/research/prompt-injection-defenses) — A first-party account of defenses against untrusted instructions in browser agents.

### Constraining autonomous execution — 2026 expansion

- [Cursor — Implementing a secure sandbox for local agents](https://cursor.com/blog/agent-sandboxing) — **2026-02-18 · Engineering article.** Explains filesystem and process restrictions, platform tradeoffs, and how agents discover when they need escalation. Relevant to making a factory's allowed actions enforceable.

## Operations First

[Principle](_first/principles/OPERATIONS.md) · [Essay](_first/articles/OPERATIONS.md)

### Existing references

- **Observability manifesto:** [Charity Majors, "Observability: A Manifesto"](https://www.honeycomb.io/blog/observability-a-manifesto) — unknown-unknowns; monitoring is not the whole job.
- **Operational ownership:** [Werner Vogels, ACM Queue interview (2006)](https://www.allthingsdistributed.com/2006/05/the_amazon_technology_platform.html) — you build it, you run it.
- **Agent operations:** [AI Agents are Infrastructure](https://gaboesquivel.com/blog/2026-05-ai-agents) — production agents need identity, logs, retries, and a way to see what they did.

### Operational principles and ownership

1. [Google SRE — Introduction](https://sre.google/sre-book/introduction/) — Explain the engineering approach to running reliable services.
2. [Google SRE — Embracing Risk](https://sre.google/sre-book/embracing-risk/) — Make reliability tradeoffs and acceptable risk explicit.
3. [Google SRE — Eliminating Toil](https://sre.google/sre-book/eliminating-toil/) — Distinguish repetitive operational work from lasting engineering improvements.
4. [Richard Cook — How Complex Systems Fail](https://how.complexsystems.fail/) — Foundational observations on interacting failures and human adaptation.
5. [Brendan Gregg — The USE Method](https://www.brendangregg.com/usemethod.html) — A systematic method for investigating resource utilization, saturation, and errors.

### Service objectives and alerting

6. [Google SRE — Service Level Objectives](https://sre.google/sre-book/service-level-objectives/) — Define service health through indicators, objectives, and agreements.
7. [Google SRE Workbook — Implementing SLOs](https://sre.google/workbook/implementing-slos/) — Turn user expectations into practical reliability targets.
8. [Google SRE Workbook — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/) — Use error-budget burn to create actionable alerts.
9. [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) — Focus monitoring on latency, traffic, errors, and saturation.
10. [Google SRE Workbook — Monitoring](https://sre.google/workbook/monitoring/) — Design a monitoring system that supports diagnosis and response.

### Observability and diagnosis

11. [Google Research — Dapper, a Large-Scale Distributed Systems Tracing Infrastructure](https://research.google/pubs/dapper-a-large-scale-distributed-systems-tracing-infrastructure/) — The original paper describing Google's distributed tracing approach.
12. [OpenTelemetry — Observability Primer](https://opentelemetry.io/docs/concepts/observability-primer/) — Explain the relationship among instrumentation, signals, and understanding system behavior.
13. [OpenTelemetry — Signals](https://opentelemetry.io/docs/concepts/signals/) — Distinguish traces, metrics, logs, and baggage.
14. [Google SRE — Effective Troubleshooting](https://sre.google/sre-book/effective-troubleshooting/) — Use hypotheses and evidence to narrow operational failures.
15. [Brendan Gregg — Linux Performance Analysis in 60s](https://www.brendangregg.com/blog/2015-12-03/linux-perf-60s-video.html) — An article and video showing how initial observations direct a performance investigation.

### Incident response and learning

16. [Google SRE — Managing Incidents](https://sre.google/sre-book/managing-incidents/) — Establish command, communication, and operational roles during incidents.
17. [Google SRE — Postmortem Culture: Learning from Failure](https://sre.google/sre-book/postmortem-culture/) — Turn incidents into actionable learning without individual blame.
18. [Google SRE Workbook — Incident Response](https://sre.google/workbook/incident-response/) — Practice coordinated response and clear incident communication.
19. [John Allspaw — Blameless PostMortems and a Just Culture](https://www.etsy.com/codeascraft/blameless-postmortems/) — An original account of learning from the context in which decisions were made.
20. [PagerDuty — Incident Response: After an Incident](https://response.pagerduty.com/after/after_an_incident/) — Guide follow-up, communication, and learning after recovery.

### Resilience, capacity, and recovery

21. [Google SRE — Handling Overload](https://sre.google/sre-book/handling-overload/) — Use load shedding and throttling to keep overloaded services responsive.
22. [Google SRE — Data Integrity: What You Read Is What You Wrote](https://sre.google/sre-book/data-integrity/) — Treat backup, restoration, and corruption detection as operational responsibilities.
23. [Google SRE Workbook — Managing Load](https://sre.google/workbook/managing-load/) — Use capacity controls and graceful degradation during demand spikes.
24. [Google SRE Workbook — Canarying Releases](https://sre.google/workbook/canarying-releases/) — Validate changes using production signals before broad exposure.
25. [Amazon — Static Stability Using Availability Zones](https://aws.amazon.com/builders-library/static-stability-using-availability-zones/) — Maintain service capacity through failures without depending on recovery-time provisioning.

### AI-assisted maintenance and infrastructure delivery — 2026 expansion

- [Ramp — How we made Ramp Sheets self-maintaining](https://labs.ramp.com/research/ramp-sheets-self-maintaining/) — **2026-03-23 · Engineering case study.** Connects targeted production monitors to sandbox reproduction and proposed fixes. Humans review and merge changes; “self-maintaining” describes that bounded loop.
- [Stripe — Configuring Stripe using Terraform and AI agents](https://stripe.dev/blog/ai-agents-terraform-stripe-infrastructure) — **2026-01-27 · Engineering guide.** The publisher advocates generating reviewable infrastructure code for auditable changes. Publisher date and summary checked; article body was not exposed by the web reader.
