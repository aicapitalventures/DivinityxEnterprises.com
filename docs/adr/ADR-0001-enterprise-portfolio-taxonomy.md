# ADR-0001: Enterprise Portfolio Taxonomy and Public Information Architecture Lock

- ID: ADR-0001
- Date: 2026-08-06
- Status: Accepted

## Context

Founder PR review for Build Room 01 identified repository-governance corrections and required a formal lock on how Divinityx Enterprises LLC and all public-facing names must be presented in repository architecture and documentation.

Build Room 01 authorizes governance corrections only. It does not authorize application scaffolding, Build Room 02 implementation, deployment, merge, or changes to protected source canon.

## Decision

1. Parent legal and operating company lock:
Divinityx Enterprises LLC is the legal parent, operating company, and institutional governance layer.

2. Registered assumed names and operating divisions lock:
- Divinityx Publishing Company is presented as Divinityx Enterprises LLC d/b/a Divinityx Publishing Company.
- Artificial Intelligence Capital Ventures is presented as Divinityx Enterprises LLC d/b/a Artificial Intelligence Capital Ventures.
- Carfixd Automotive is presented as Divinityx Enterprises LLC d/b/a Carfixd Automotive.
- AICV may be used as shorthand, but not as a substitute for the registered assumed name in formal legal, seller, ownership, contractual, footer, or authority statements.
- These divisions are not separate LLCs or subsidiaries.

3. Operating brand lock:
Business Funding and Profit Systems (BFPS) is a business-infrastructure and profit-development operating brand of Divinityx Enterprises LLC.

BFPS must not be described as a separate legal company, registered assumed name, lender, financial institution, licensed investment adviser, credit-repair organization, or as guaranteeing funding or outcomes unless later approved records establish that status.

4. Program and initiative relationship lock:
- Voice to Legacy is a publishing-development program of Divinityx Enterprises LLC d/b/a Divinityx Publishing Company.
- Fundability Labs is a business-readiness and fundability-development platform in development.
- Divinityx Media is a media and communications initiative in development.
- SignalBreak is a public-interest intelligence and media property associated with Divinityx Media.
- Divinityx Ministries is a faith and mission initiative in development.
- Divinityx Manifestation remains a developing initiative requiring final classification.

No listed item may be represented as a separate legal entity or registered assumed name without governing documentation proving that status.

The Lux Aeterna Dawn Cooley Family Trust is excluded from the commercial portfolio directory unless founder-approved executed proof authorizes a different representation.

5. Public information architecture lock:
- Approved routes: /, /ecosystem, /about, /contact, /ecosystem/:slug, and custom 404.
- No separate /divisions route in Build Room 01.
- Navigation label: Companies & Brands.
- Route: /ecosystem.
- Page title: Our Companies & Brands | Divinityx Enterprises LLC.
- Page H1: Our Companies & Brands.
- Supporting copy:
"Divinityx Enterprises LLC is the legal parent and governance company behind a growing portfolio of registered operating divisions, brands, platforms, and programs. Every organization displayed here is identified by its actual relationship to the parent company."
- Section order:
  1. Parent Company
  2. Registered Operating Divisions
  3. Operating Brands and Platforms
  4. Programs, Systems, and Media Properties
  5. Developing and Mission-Driven Initiatives
- Homepage future section:
  - Heading: How the Enterprise Fits Together
  - Copy:
  "Divinityx Enterprises LLC provides the legal, operational, intellectual-property, and governance foundation supporting its operating divisions and brands. Each division serves a distinct market while remaining part of one coordinated enterprise."

6. Build Room 02 data requirement lock (recorded only):
A centralized portfolio registry must include at minimum:
- id
- slug
- fullName
- shortName
- classification
- legalOperator
- parentId
- registeredAssumedName
- operatingStatus
- description
- destinationType
- destinationUrl
- disclosure
- displayOrder

Public cards must display full public name, actual classification, relationship to Divinityx Enterprises LLC, current operating status, approved description, and a valid destination or honest Coming Soon state.

## Alternatives

- Delay taxonomy lock until Build Room 02.
- Keep taxonomy implicit across multiple files without a formal ADR.
- Introduce a broader multi-entity architecture now.

These alternatives were rejected because they increase legal ambiguity and implementation drift before governance is stabilized.

## Cost Effect

$0 new recurring cost. Documentation-only correction.

## Consequences

- Governance clarity improves for all future public naming.
- Build Room 02 implementation constraints are explicit before code work starts.
- No runtime changes are introduced in Build Room 01.

## Reversal Path

Create a superseding ADR with explicit founder approval and governing documentation support for any legal-classification change, then update the decision register and affected canonical governance documents.

## Founder Approval

Approved by founder decision for Build Room 01 PR review correction scope.