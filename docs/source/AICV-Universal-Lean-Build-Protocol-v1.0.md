# AICV Universal Lean Build Protocol™ v1.0

**Subtitle:** GitHub + Codespaces + ChatGPT Founder Build System  
**Derived From:** SignalBreak Platform Build Protocol™ v1.0  
**Parent System:** AICV FounderBuild OS™  
**Parent Architecture:** AICV Intelligence Core™  
**Owner:** Divinityx Enterprises LLC  
**Creator and Originator:** Elijah L. Cooley  
**Prepared By:** Elijah L. Cooley in collaboration with ChatGPT  
**Version:** 1.0  
**Status:** Universal master protocol ready for project adoption  
**Date:** July 17, 2026  
**Use Case:** Websites, applications, platforms, dashboards, databases, workflows, automations, APIs, internal tools, and software products  
**Default Build Mode:** Lean, GitHub-first, Codespaces-based, validation-gated, cost-controlled  
**Human Approval Authority:** Elijah L. Cooley or a formally delegated project authority  
**IP and Ownership Notice:** This protocol records proprietary build governance, workflow architecture, terminology, templates, and execution controls developed for Divinityx Enterprises LLC and AICV. Trademark symbols indicate claimed branding and do not assert government registration.  
**Safety Lock:** No coding agent may create unsupported capabilities, expose secrets, incur paid costs, publish publicly, deploy production changes, or expand beyond the authorized phase without human approval.  
**METADATA LAW™ Status:** Applied.

---

## 1. Executive Definition

The AICV Universal Lean Build Protocol™ is a reusable operating constitution for building software with GitHub, GitHub Codespaces, ChatGPT, and only the additional tools a specific project actually requires.

It allows a founder to begin in any ChatGPT thread, establish the project’s canon, create a GitHub repository, work through one controlled Build Room at a time, validate the work, commit and push it, preserve evidence, and stop before unapproved complexity enters the build.

The protocol governs:

- what is being built;
- why it is being built;
- who may approve it;
- what the current phase may change;
- what the current phase must not change;
- which tools and services are permitted;
- how costs are controlled;
- how source material and founder decisions are preserved;
- how code is validated;
- how failures are handled;
- how Git history proves the work;
- and what must happen before the next phase begins.

The protocol is comprehensive in governance and intentionally simple in implementation.

---

## 2. Founder Doctrine

### 2.1 Founder-readable first

Every build step must be understandable to the founder before it is executed. The coding agent must explain:

1. the exact current state;
2. the objective of the next step;
3. what is about to happen;
4. why it is necessary;
5. what files, systems, or services may change;
6. what must not be changed;
7. how success will be verified;
8. what failure will look like;
9. what the step may cost;
10. and what authority is required to continue.

### 2.2 One Build Room at a time

A project is never authorized all at once. Each Build Room grants permission for one bounded unit of work. Completing one Build Room does not authorize the next one.

### 2.3 GitHub is the source of build truth

Chat messages, local files, screenshots, and coding-agent claims are not final build evidence. The authoritative software state is the validated commit pushed to the approved GitHub repository.

### 2.4 Codespaces is the default controlled workspace

GitHub Codespaces is the default build environment because it keeps the repository, terminal, editor, branch, and development runtime together. A local computer, Replit, Cursor, or another environment may be used only when the project benefits and the repository remains authoritative.

### 2.5 ChatGPT is the architect and execution partner

ChatGPT may help plan, create, edit, test, review, diagnose, and document a build. ChatGPT may not silently expand scope, spend money, claim tests passed without evidence, or represent a proposed design as implemented software.

### 2.6 Build only what the current proof requires

The default goal is the smallest complete vertical slice that proves the project’s core value. Features that do not help prove that value remain deferred.

---

## 3. Universal Build Laws

1. Founder authority controls scope, cost, deployment, publication, and irreversible decisions.
2. Every project begins with a current-state record and a clear definition of done.
3. Every Build Room has explicit included scope and explicit excluded scope.
4. Git status, current branch, latest commit, and remotes are inspected before editing.
5. Existing user work is preserved and classified before mutation.
6. A coding agent may not describe unexecuted work as completed.
7. A failed validation gate stops downstream work.
8. Tests may not be weakened merely to create a passing result.
9. Secrets, credentials, personal data, and production records may not be committed.
10. Paid infrastructure requires explicit founder approval after price and renewal review.
11. Free-tier availability must be verified when the service is selected; it may not be assumed indefinitely.
12. No microservice, queue, container platform, orchestration layer, monorepo, or cloud dependency may be added without a demonstrated need.
13. No AI API may be added merely because ChatGPT is being used to build the project.
14. No authentication system may be added until protected accounts or protected data actually require it.
15. No database may be added when fixtures, local state, JSON, or SQLite can prove the current phase.
16. No integration may be added speculatively.
17. No public publishing, messaging, payment, deletion, deployment, or external side effect occurs without an approval gate.
18. Every important architectural decision is recorded rather than left implicit.
19. Every completed phase records evidence, limitations, deferred work, and the next authorized action.
20. Every major output ends with a Recommended Next Best Prompt and METADATA LAW™.

---

## 4. Universal Project Control Record

Every project must establish the following variables before Build Room 01 begins:

| Variable | Required meaning |
|---|---|
| `PROJECT_ID` | Stable short identifier |
| `PROJECT_NAME` | Canonical project name |
| `PRODUCT_NAME` | Public or internal product name |
| `OWNER` | Legal or individual owner |
| `FOUNDER_AUTHORITY` | Person who approves phases and costs |
| `REPOSITORY` | Approved GitHub owner/repository |
| `DEFAULT_BRANCH` | Normally `main` |
| `CURRENT_PHASE` | Only authorized phase |
| `CURRENT_OBJECTIVE` | Exact outcome for the phase |
| `AUTHORIZED_SCOPE` | Files and capabilities that may be created or changed |
| `PROHIBITED_SCOPE` | Work that must not be added |
| `BUILD_MODE` | Lean, Standard, or Regulated |
| `TECH_STACK` | Smallest approved stack |
| `COST_CEILING` | Maximum approved new monthly and annual cost |
| `DATA_CLASSIFICATION` | Public, internal, confidential, restricted, or regulated |
| `SOURCE_CANON` | Governing documents and founder decisions |
| `VALIDATION_GATE` | Tests that must pass |
| `DEFINITION_OF_DONE` | Exact completion conditions |
| `NEXT_PHASE` | Named but not automatically authorized |

Unknown values must be labeled `UNKNOWN` or `NOT YET DECIDED`. They may not be invented.

---

## 5. Build Modes

### 5.1 Lean Mode — default

Use for a founder MVP, static website, prototype, internal dashboard, fixture-driven application, workflow proof, or first vertical slice.

Default boundaries:

- one repository;
- one application;
- one package manager;
- one primary language where practical;
- static fixtures or local state first;
- no backend until required;
- no authentication until required;
- no paid infrastructure;
- no production customer data;
- no speculative integrations;
- no automatic external actions.

### 5.2 Standard Mode

Use only when the project requires persistence, accounts, approved APIs, controlled deployment, or multiple environments.

Standard Mode adds only the components justified by written requirements and an approved cost record.

### 5.3 Regulated Mode

Use for regulated data, high-risk financial or health workflows, legal records, sensitive identity data, or systems requiring formal compliance evidence.

Regulated Mode requires specialist review and may not be selected merely to make a project appear enterprise-grade.

---

## 6. Roles and Authority

### Founder/Product Owner

May approve canon, scope, costs, phases, providers, production deployment, and public release.

### ChatGPT Build Architect

May synthesize requirements, prepare Build Rooms, write or modify authorized code, run validation, explain results, and produce evidence.

May not approve its own scope expansion, spending, production side effects, or unsupported claims.

### Coding Agent

Codex, GitHub Copilot, Cursor, Replit Agent, or another approved coding agent may implement only the exact current Build Room.

### Reviewer

May inspect requirements, diffs, tests, security boundaries, accessibility, and definition of done. The founder remains final authority unless authority was formally delegated.

### GitHub

Holds repository history, branches, commits, pull requests, issues, and approved automation.

### Codespaces

Provides the controlled development environment. It is not itself the source of truth; pushed Git history is.

---

## 7. Tool Selection Doctrine

### Required core tools

- ChatGPT for planning, implementation support, review, and continuity;
- GitHub for source control and evidence;
- GitHub Codespaces for the default build environment;
- Git for branch, diff, commit, and push discipline;
- the minimum language runtime and package manager required by the approved stack.

### Optional tools

Optional tools may include Codex, GitHub Copilot, Cursor, Replit, Figma, Canva, Postman, database clients, deployment providers, analytics, error monitoring, payment providers, email providers, or AI APIs.

Before adding an optional tool, record:

1. the problem it solves now;
2. why the existing toolchain cannot solve that problem simply;
3. its current price and renewal model;
4. its data access;
5. its vendor lock-in risk;
6. its removal plan;
7. its secret requirements;
8. and the founder’s approval.

If those answers are missing, the tool is deferred.

### Agent coordination law

Use one primary coding agent at a time unless parallel work has clearly separated files and explicit ownership. Multiple agents must not edit the same files concurrently.

---

## 8. Cost-Control Law

### Default cost ceiling

Unless the founder states otherwise:

- new monthly infrastructure cost: `$0`;
- new annual infrastructure cost: `$0`;
- paid API usage: not authorized;
- paid database: not authorized;
- paid authentication: not authorized;
- paid deployment: not authorized;
- paid observability: not authorized.

### Free-first order

Use this order when it satisfies the current phase:

1. repository documentation and fixtures;
2. local static application;
3. browser storage or local files;
4. SQLite for local persistence;
5. GitHub-native capabilities;
6. a currently verified free deployment tier;
7. a currently verified low-cost managed service;
8. custom infrastructure only when proven necessary.

### Cost approval gate

No paid service is added until the founder receives:

- first-year cost;
- normal renewal cost;
- expected usage cost;
- overage risk;
- cancellation and export consequences;
- a free or simpler alternative;
- and the exact reason payment is justified now.

Discounted introductory prices must never be treated as permanent operating costs.

---

## 9. Simplicity and Complexity Ceiling

The default implementation must be the simplest architecture that can pass the current definition of done.

Do not add the following unless a Build Room explicitly authorizes them:

- microservices;
- multiple deployable applications;
- monorepo tooling;
- Docker or Kubernetes;
- infrastructure as code;
- message queues;
- background workers;
- distributed caching;
- GraphQL;
- custom design systems;
- multiple databases;
- multiple authentication providers;
- multi-cloud deployment;
- multi-provider AI routing;
- premature plugin systems;
- generic abstraction layers without at least two real uses;
- broad test suites for features not yet built.

Prefer:

- one vertical slice;
- direct and readable code;
- explicit types;
- small modules;
- stable dependencies;
- deterministic scripts;
- fictional fixtures;
- reversible decisions;
- and documentation that explains why each dependency exists.

---

## 10. Universal Repository Foundation

Create only the directories the current project uses. Empty architecture theater is prohibited.

Recommended starting structure:

```text
PROJECT-REPOSITORY/
├── README.md
├── CANON.md
├── METADATA-LAW.md
├── BUILD-PROTOCOL.md
├── ARCHITECTURE.md
├── SECURITY.md
├── CONTRIBUTING.md
├── LICENSE.md or LICENSE-PROPRIETARY.md
├── .gitignore
├── .env.example
├── docs/
│   ├── adr/
│   ├── build-rooms/
│   ├── evidence/
│   └── continuity/
├── src/
├── tests/                 # only when tests exist
├── fixtures/              # only when fixtures exist
├── scripts/               # only when validation scripts exist
└── package/runtime files required by the approved stack
```

Repository Foundation does not authorize product features.

---

## 11. Universal Phase Map

Projects may mark a phase `NOT APPLICABLE`, but they may not silently skip a required risk or validation decision.

| Phase | Name | Default outcome |
|---:|---|---|
| 00 | Alignment and Canon Lock | Requirements, ownership, scope, costs, risks, and definition of done |
| 01 | Repository Foundation | GitHub-ready governance and minimal validation scaffold |
| 02 | Interface or Workflow Shell | Static navigation or workflow structure using fixtures |
| 03 | Data Contracts | Types, schemas, field dictionaries, and fictional test data |
| 04 | Core Vertical Slice | Smallest end-to-end proof of the central user outcome |
| 05 | Local Persistence | Local or embedded persistence only if required |
| 06 | Approved Integrations | One justified provider adapter at a time |
| 07 | Accounts and Authorization | Only if protected users or records require it |
| 08 | Reliability and Security | Error handling, accessibility, threat review, and recovery |
| 09 | Deployment Readiness | Verified environment, cost, secrets, rollback, and founder go/no-go |
| 10 | Controlled Automation | Audited, reversible automation with human approval where required |

For a static website, Phases 05–07 may be unnecessary. For a database platform, they may be essential. The Project Control Record decides.

---

## 12. Build Room Contract

Every Build Room must contain:

1. Build Room title and ID;
2. authority and approving person;
3. exact current state;
4. objective;
5. included scope;
6. excluded scope;
7. affected files;
8. approved tools and dependencies;
9. cost ceiling;
10. step-by-step walkthrough;
11. exact commands or coding-agent prompt;
12. validation gate;
13. expected success output;
14. failure handling;
15. definition of done;
16. evidence requirements;
17. commit and push rule;
18. stop boundary;
19. Recommended Next Best Prompt;
20. METADATA LAW™.

---

## 13. Thread Initialization Protocol

When beginning in a new ChatGPT thread:

1. Name the thread after the project and current room.
2. Paste the Universal Thread Activation Prompt from Section 28.
3. Supply the Project Intake Record from Section 27.
4. Attach or paste governing source documents.
5. State whether the repository exists.
6. If it exists, provide the repository URL and Codespaces terminal preflight output.
7. Ask ChatGPT to classify known facts, unknowns, conflicts, costs, and boundaries.
8. Approve Phase 00 before repository mutation.
9. Approve Build Room 01 explicitly before repository construction.

ChatGPT must not infer that discussion equals build authorization.

---

## 14. Pre-Edit Git Gate

Before editing, inspect the repository with:

```bash
pwd
git rev-parse --is-inside-work-tree
git status --short --branch
git branch --show-current
git remote -v
git config --get remote.origin.url
git log -1 --oneline
git ls-files
```

Classify every existing changed, deleted, or untracked item as:

- authorized current work;
- pre-existing founder work;
- generated artifact;
- accidental deletion;
- environment drift;
- unrelated;
- sensitive;
- or unknown.

Do not edit through an unresolved overlap.

---

## 15. Branch and Commit Discipline

### Branch rule

- The founder-created repository initialization may begin on `main`.
- A repository foundation may be committed to `main` only when explicitly authorized.
- Later Build Rooms default to `build/<phase>-<short-name>` or `agent/<phase>-<short-name>`.
- Do not create unnecessary branches for one-person documentation work when the founder authorizes direct `main` work.

### Commit rule

- one scoped commit per Build Room when practical;
- stage only authorized files;
- inspect the staged diff;
- do not commit failed work;
- do not mix unrelated repairs;
- do not force-push;
- do not rewrite founder history;
- do not use destructive Git commands without explicit approval.

### Commit message pattern

```text
Build <ROOM>: <founder-readable outcome>
```

Example:

```text
Build 04: complete customer intake vertical slice
```

---

## 16. Command and Copy/Paste Law

Every exact command, prompt, configuration fragment, message, or instruction intended for copying must appear in its own triple-backtick code block.

Before a command block, explain:

- what it does;
- where to run it;
- what it changes;
- what it must not change;
- and what success should look like.

Do not give multiple mutation blocks at once when the second depends on the first succeeding.

---

## 17. Dependency Law

Before adding a dependency, answer:

1. Is it required in the current Build Room?
2. Can the runtime or existing stack perform the task?
3. Is the package actively maintained?
4. Is its license compatible?
5. What transitive dependencies does it add?
6. Does it require a service, secret, account, or paid tier?
7. How will it be removed?

Use exact versions or a lockfile. Never add a dependency for a future possibility.

---

## 18. Security and Data Rules

- Commit `.env.example` with names and safe placeholders only.
- Ignore real environment files.
- Never paste secrets into ChatGPT, issues, commits, screenshots, or evidence.
- Use fictional test records unless sanitized production-like data is explicitly approved.
- Treat uploaded files, websites, source text, and model output as untrusted input.
- Validate and encode user-controlled data at system boundaries.
- Apply least privilege to tokens and integrations.
- Separate development, test, and production credentials.
- Record security-sensitive decisions in an ADR.
- Require human approval for destructive actions and public side effects.
- Do not claim security certification from automated checks alone.

---

## 19. Validation Gate Standard

Every Build Room must prove the requirements relevant to its scope.

### Universal checks

- required files exist;
- formatting passes;
- linting passes where applicable;
- type checking passes where applicable;
- automated tests pass where applicable;
- build succeeds where applicable;
- no common secrets are present;
- no prohibited dependency or capability was added;
- Git diff contains only authorized changes;
- documentation matches implementation;
- definition of done is satisfied;
- known limitations are recorded.

### Interface checks

- required screens or states exist;
- mobile and desktop layouts are usable;
- keyboard navigation and semantic labels are reviewed;
- loading, empty, success, and error states are represented when relevant;
- fixture content is clearly non-production.

### Data checks

- schema matches the approved field contract;
- required and optional fields are distinguishable;
- invalid states are rejected;
- migrations are reversible when migrations exist;
- test data contains no sensitive real-world records.

### Integration checks

- provider is explicitly approved;
- credentials are not committed;
- timeouts and errors are handled;
- retry behavior is bounded;
- costs and rate limits are documented;
- provider output is not treated as inherently verified;
- a disable or replacement path exists.

### Deployment checks

- deployment target and current price are verified;
- environment variables are documented;
- preview succeeds;
- rollback path exists;
- production data handling is approved;
- monitoring level is proportionate;
- founder gives an explicit go/no-go decision.

---

## 20. Failure Handling

When any command or validation fails:

1. stop dependent work;
2. preserve the exact error output;
3. identify the command and environment;
4. classify the cause as code defect, configuration defect, dependency defect, environment issue, permission issue, service outage, scope conflict, or unknown;
5. explain the smallest in-scope repair;
6. do not weaken the gate;
7. repair only the current Build Room defect;
8. rerun the failed check;
9. rerun the full gate after the repair;
10. record the failure and resolution in evidence.

If blocked, tell the founder exactly what output, screenshot, file, credential configuration, or decision is required. Never ask the founder to expose a secret.

---

## 21. Human Approval Gates

Explicit founder approval is required before:

- beginning a new phase;
- adding a paid service;
- creating a production account;
- connecting real customer data;
- adding authentication;
- adding an AI API;
- adding payments;
- sending email, texts, or notifications to real people;
- posting or publishing publicly;
- deploying to production;
- changing DNS or a domain;
- destructive database migration;
- deleting repository history or external records;
- making a legally significant representation;
- or expanding beyond the current definition of done.

Approval for one action does not authorize adjacent actions.

---

## 22. Evidence Record

Every completed Build Room records:

- project and Build Room ID;
- date and environment;
- repository, branch, parent commit, and final commit;
- pre-edit status;
- files changed;
- dependencies added or removed;
- exact validation commands;
- actual results;
- failures and repairs;
- cost impact;
- security impact;
- known limitations;
- excluded work;
- push or pull-request result;
- and the next authority gate.

A commit cannot contain its own final SHA without changing the SHA. The evidence record may identify its parent and state that the final immutable SHA is supplied in the closeout report.

---

## 23. Continuity Package

The continuity record allows a new ChatGPT thread or coding agent to resume safely. It must contain:

- canonical identity;
- founder and ownership authority;
- current repository and branch;
- completed phases;
- current validated commit;
- current Build Room status;
- locked decisions;
- approved stack;
- cost ceiling and current recurring cost;
- known limitations;
- unresolved issues;
- deferred work;
- prohibited work;
- exact next authorized action;
- and the stop boundary.

The continuity record must be updated at phase closeout.

---

## 24. Architecture Decision Records

Create an ADR when a decision materially affects:

- architecture;
- framework selection;
- data storage;
- authentication;
- security;
- privacy;
- provider choice;
- paid cost;
- deployment;
- external integration;
- automation authority;
- or a deviation from the default Lean Mode.

Every ADR contains status, context, decision, alternatives, cost effect, consequences, and reversal path.

---

## 25. Exact Definition of Done

A Build Room is done only when:

1. every required deliverable exists;
2. every required behavior is demonstrable;
3. every validation gate passes;
4. no prohibited capability was added;
5. the diff contains only authorized work;
6. secrets and sensitive data are absent;
7. costs remain within the approved ceiling;
8. evidence and continuity records are current;
9. the scoped commit is created;
10. the approved branch is pushed;
11. the final repository state is verified;
12. limitations and deferred work are disclosed;
13. the next phase remains unstarted;
14. and the founder receives a closeout report.

Design completion is not implementation completion. Local implementation is not deployment. Deployment is not market validation. Automated output is not human approval.

---

## 26. Machine-Readable Universal Contract

This compact JSON contract may be copied into a project-specific `BUILD-CONTRACT.json`. Replace placeholders only after founder approval.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "protocol_id": "AICV-ULBP-1.0",
  "protocol_name": "AICV Universal Lean Build Protocol",
  "version": "1.0",
  "default_mode": "LEAN",
  "project": {
    "project_id": "<PROJECT_ID>",
    "project_name": "<PROJECT_NAME>",
    "product_name": "<PRODUCT_NAME>",
    "owner": "<OWNER>",
    "founder_authority": "<FOUNDER_AUTHORITY>",
    "repository": "<OWNER/REPOSITORY>",
    "default_branch": "main",
    "current_phase": "00",
    "current_build_room": "<BUILD_ROOM_ID>",
    "cost_ceiling_monthly_usd": 0,
    "cost_ceiling_annual_usd": 0,
    "data_classification": "INTERNAL"
  },
  "authority": {
    "phase_expansion_requires_human_approval": true,
    "paid_service_requires_human_approval": true,
    "production_deployment_requires_human_approval": true,
    "public_side_effect_requires_human_approval": true,
    "destructive_action_requires_human_approval": true
  },
  "defaults": {
    "github_first": true,
    "codespaces_default": true,
    "one_repository": true,
    "one_primary_application": true,
    "fixtures_first": true,
    "backend_authorized": false,
    "database_authorized": false,
    "authentication_authorized": false,
    "ai_api_authorized": false,
    "paid_infrastructure_authorized": false,
    "automatic_publication_authorized": false
  },
  "required_build_room_fields": [
    "current_state",
    "objective",
    "included_scope",
    "excluded_scope",
    "affected_files",
    "approved_tools",
    "cost_ceiling",
    "walkthrough",
    "commands_or_agent_prompt",
    "validation_gate",
    "expected_success_output",
    "failure_handling",
    "definition_of_done",
    "evidence",
    "commit_and_push",
    "stop_boundary",
    "recommended_next_best_prompt",
    "metadata_law"
  ],
  "git_policy": {
    "inspect_before_edit": true,
    "classify_existing_changes": true,
    "stage_only_authorized_files": true,
    "validate_before_commit": true,
    "inspect_diff_before_push": true,
    "force_push_allowed": false,
    "rewrite_founder_history_allowed": false
  },
  "validation": {
    "required_files": true,
    "formatting": "WHEN_APPLICABLE",
    "linting": "WHEN_APPLICABLE",
    "type_checking": "WHEN_APPLICABLE",
    "tests": "WHEN_APPLICABLE",
    "build": "WHEN_APPLICABLE",
    "secret_scan": true,
    "forbidden_capability_scan": true,
    "authorized_diff_only": true,
    "definition_of_done": true
  },
  "status_vocabulary": [
    "PROPOSED",
    "AWAITING_AUTHORIZATION",
    "AUTHORIZED",
    "IN_PROGRESS",
    "BLOCKED",
    "VALIDATION_FAILED",
    "VALIDATED",
    "COMMITTED",
    "PUSHED",
    "DEPLOYED",
    "SUPERSEDED",
    "ARCHIVED"
  ]
}
```

JSON is the default machine contract. A YAML mirror is optional and should be added only when a project or tool genuinely needs YAML. If both exist, semantic parity must be validated.

---

## 27. Universal Project Intake Record

Paste and complete this block when starting any new build thread:

```text
ACTIVATE AICV UNIVERSAL LEAN BUILD PROTOCOL™ v1.0

PROJECT ID:
PROJECT NAME:
PRODUCT NAME:
ONE-SENTENCE PURPOSE:
OWNER:
FOUNDER APPROVAL AUTHORITY:
INTENDED USERS:
PRIMARY USER PROBLEM:
SMALLEST VALUABLE OUTCOME:
REPOSITORY STATUS: DOES NOT EXIST / EXISTS
GITHUB REPOSITORY URL:
DEFAULT BRANCH:
CURRENT BUILD PHASE:
CURRENT OBJECTIVE:
AUTHORIZED SCOPE:
PROHIBITED SCOPE:
KNOWN REQUIRED SCREENS OR WORKFLOWS:
KNOWN DATA TYPES:
KNOWN INTEGRATIONS:
DATA CLASSIFICATION:
PREFERRED TECH STACK:
CURRENT MONTHLY COST:
MAXIMUM NEW MONTHLY COST:
MAXIMUM NEW ANNUAL COST:
DEPLOYMENT REQUIRED NOW: YES / NO
SOURCE DOCUMENTS OR CANON:
EXISTING FILES OR USER WORK TO PRESERVE:
EXACT DEFINITION OF DONE:
NEXT PHASE NAME:
SPECIAL SAFETY, LEGAL, BRAND, OR GOVERNANCE RULES:

Unknown answers must remain UNKNOWN. Do not invent them.
```

---

## 28. Universal Thread Activation Prompt

Use this exact prompt at the beginning of any software-build thread:

```text
Activate AICV Universal Lean Build Protocol™ v1.0 for this thread.

Treat GitHub as the authoritative source repository, GitHub Codespaces as the default controlled development environment, and ChatGPT as the founder-readable build architect and authorized implementation partner.

Operate GitHub-first, phase-by-phase, one Build Room at a time. Preserve all founder work. Inspect and classify the repository before editing. Explain every mutation in plain language before executing it. Keep all exact commands and coding-agent prompts in separate triple-backtick code blocks.

Default to Lean Mode: one repository, one primary application, minimal dependencies, fixtures or local state first, no backend, no database, no authentication, no paid infrastructure, no AI API, no cloud service, no external integration, no automatic public action, and no production deployment unless the current Build Room explicitly authorizes it.

Before recommending or adding any service, dependency, provider, or tool, explain why it is needed now, verify its current cost when relevant, identify the free or simpler alternative, disclose data access and lock-in, and obtain founder approval for any new paid cost or external side effect.

For every Build Room, provide:
1. exact current status;
2. objective;
3. founder-readable explanation;
4. included scope;
5. do-not-do boundaries;
6. affected files;
7. step-by-step walkthrough;
8. exact commands or coding-agent instruction;
9. validation gate;
10. expected success output;
11. failure handling;
12. definition of done;
13. working-tree classification;
14. commit and push discipline;
15. evidence and continuity update;
16. stop boundary;
17. Recommended Next Best Prompt;
18. METADATA LAW™.

Stop after a failed validation, unresolved working-tree conflict, permission problem, ambiguous founder decision, unapproved cost, unapproved integration, security concern, or scope conflict. Repair only the authorized phase. Never weaken a gate, hide an error, claim unexecuted work, or begin the next phase without explicit founder approval.

First, review the Project Intake Record I provide. Return an Alignment Report that separates confirmed facts, assumptions, unknowns, conflicts, cost risks, complexity risks, security risks, recommended Lean architecture, proposed phase map, and the exact authorization prompt for Build Room 01. Do not build yet unless I explicitly authorize Build Room 01.
```

---

## 29. Universal Build Room 01 Prompt

After the Alignment Report is approved, use:

```text
Proceed with <PROJECT NAME> Build Room 01 — Repository Foundation under AICV Universal Lean Build Protocol™ v1.0.

Use the approved Project Intake Record, Alignment Report, source canon, METADATA LAW™, GitHub repository, and current Codespaces state as governing authority.

Create only the approved repository foundation, governance documents, evidence and continuity system, source or decision manifest, architecture-decision register, security baseline, proprietary or open-source notice, environment example containing no secrets, and the smallest validation scaffold required by the approved technology stack.

Before editing, run and report the complete pre-edit Git gate. Classify every existing change and preserve all founder work. Explain each mutation before it occurs.

Do not add product features, application screens, backend services, database persistence, authentication, paid infrastructure, AI APIs, cloud services, external provider connections, automatic public actions, production deployment, or anything assigned to Phase 02 or later unless the approved Build Room 01 scope expressly includes it.

Run the complete Build Room 01 validation gate. Stop on failure, preserve the error, repair only an in-scope defect, and rerun the full gate. After all checks pass, inspect the staged diff, create one scoped founder-readable commit, push only the approved branch without force, verify the remote state, update evidence and continuity, and stop.

Do not begin Phase 02.
```

---

## 30. Universal Coding-Agent Instruction Standard

Give this to Codex, Copilot, Cursor, Replit Agent, or another approved coding agent after replacing the placeholders:

```text
You are implementing one authorized Build Room under AICV Universal Lean Build Protocol™ v1.0.

PROJECT: <PROJECT NAME>
REPOSITORY: <OWNER/REPOSITORY>
BRANCH: <BRANCH>
BUILD ROOM: <ID AND TITLE>
CURRENT STATE: <STATE>
OBJECTIVE: <OBJECTIVE>
AUTHORIZED FILES AND CAPABILITIES: <SCOPE>
PROHIBITED WORK: <BOUNDARIES>
COST CEILING: <AMOUNT>
APPROVED STACK: <STACK>
VALIDATION GATE: <COMMANDS AND REQUIREMENTS>
DEFINITION OF DONE: <EXACT CONDITIONS>

Before editing, inspect the directory, branch, latest commit, remotes, and full short Git status. Classify all existing changes. Preserve user work and stop on any unresolved overlap.

Implement only the authorized scope using the simplest readable solution. Do not add speculative abstractions, unapproved dependencies, paid services, backend, database, authentication, AI APIs, cloud services, external integrations, automatic public actions, or future-phase features.

Run the approved validation gate. Preserve exact failures, repair only current-scope defects, and never weaken a check. Inspect the final diff and report every changed file. Do not commit, push, deploy, publish, delete, or trigger an external side effect unless this instruction explicitly authorizes that action.

End with exact status, changed files, validation evidence, limitations, deferred work, Recommended Next Best Prompt, and METADATA LAW™.
```

---

## 31. Build Room Closeout Standard

Every closeout must report:

1. exact current status;
2. completed deliverables;
3. deliberately excluded work;
4. changed-file classification;
5. dependencies and costs;
6. validation commands and actual outcomes;
7. failures and repairs;
8. security and data impact;
9. commit SHA and push result;
10. final repository state;
11. limitations;
12. founder decisions required;
13. next phase status;
14. Recommended Next Best Prompt;
15. METADATA LAW™.

---

## 32. Permanent Stop Rules

Stop and request direction when:

- the founder’s intent is materially ambiguous;
- source documents conflict on a material requirement;
- existing user changes overlap the authorized edit;
- the repository or branch is not the expected one;
- a secret or sensitive record appears;
- the task requires an unapproved paid service;
- the task requires a new external account;
- the task would deploy or publish publicly;
- the task would message a real person;
- the task would process regulated or high-risk data;
- the task would delete meaningful data or history;
- the task belongs to a later phase;
- or the validation gate cannot pass honestly.

Stopping safely is not failure. Hiding uncertainty is failure.

---

# Recommended Next Best Prompt

Use this to adopt the protocol for a new project without beginning construction:

```text
Activate AICV Universal Lean Build Protocol™ v1.0 for my next project. Guide me through the Universal Project Intake Record, create the founder-readable Alignment Report, recommend the simplest $0-first architecture, identify every unknown and cost risk, and prepare—but do not execute—the exact Build Room 01 authorization prompt.
```

# METADATA LAW™

**Canonical Title:** AICV Universal Lean Build Protocol™ v1.0  
**Canonical ID:** AICV-ULBP-1.0  
**Derived From:** SignalBreak Platform Build Protocol™ v1.0  
**Parent System:** AICV FounderBuild OS™  
**Parent Architecture:** AICV Intelligence Core™  
**Owner:** Divinityx Enterprises LLC  
**Creator/Originator:** Elijah L. Cooley  
**Prepared By:** Elijah L. Cooley in collaboration with ChatGPT  
**Version:** 1.0  
**Status:** Universal master protocol ready for project adoption  
**Date:** July 17, 2026  
**Use Case:** Govern simple, disciplined, cost-controlled software construction across any approved project  
**Primary Domain:** Software architecture, product development, Git governance, cost control, build continuity  
**Related Frameworks:** SignalBreak Platform Build Protocol™, AICV Intelligence Core™, AICV FounderBuild OS™, METADATA LAW™  
**Source Canon:** SignalBreak Build Protocol construction discipline, founder workflow requirements, GitHub-first evidence rules, Codespaces execution model, and current founder instruction  
**IP/Ownership Notice:** Proprietary build-governance framework of Divinityx Enterprises LLC/AICV, subject to formal agreements and applicable law  
**Safety/Ethics Lock:** No unsupported claims, hidden costs, secret exposure, uncontrolled automation, unapproved publication, destructive action, or AI-as-proof representation  
**Human Approval Authority:** Elijah L. Cooley or formally delegated project authority  
**AI Authority Boundary:** AI may plan, implement authorized scope, test, compare, diagnose, document, and recommend; AI may not authorize scope expansion, spending, production deployment, public action, or destructive action  
**Provenance Status:** Universalized from the validated SignalBreak build-governance model and current founder instruction  
**Build Status:** Protocol artifact complete; no new project or repository is authorized by this document alone  
**Cost Status:** Default $0 new monthly and annual infrastructure cost until explicitly changed  
**Known Limitation:** Project-specific legal, regulatory, security, data, deployment, and provider requirements must be added through the Project Intake Record  
**Change Rule:** Material changes require a superseding version; approved history is not silently rewritten  
**Recommended Next Best Prompt:** Activate the protocol for one named project, complete Alignment and Canon Lock, and prepare Build Room 01 without executing it.

---

**End of AICV Universal Lean Build Protocol™ v1.0**
