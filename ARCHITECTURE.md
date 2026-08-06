# Architecture

## Approved Destination Architecture

The approved destination is one static React application built with Vite, TypeScript, Tailwind CSS, and React Router.

The application will use structured local TypeScript ecosystem data and reusable components to present the corporate home page, ecosystem directory, about page, contact page, internal ecosystem detail routes, and a custom 404 page.

## Locked Public Information Architecture

Approved compact route structure:

- /
- /ecosystem
- /about
- /contact
- /ecosystem/:slug
- custom 404

No separate /divisions route is authorized in Build Room 01.

Navigation treatment:

- Navigation label: Companies & Brands
- Route: /ecosystem
- Page title: Our Companies & Brands | Divinityx Enterprises LLC
- Page H1: Our Companies & Brands
- Supporting copy: "Divinityx Enterprises LLC is the legal parent and governance company behind a growing portfolio of registered operating divisions, brands, platforms, and programs. Every organization displayed here is identified by its actual relationship to the parent company."

Required section order on /ecosystem:

1. Parent Company
2. Registered Operating Divisions
3. Operating Brands and Platforms
4. Programs, Systems, and Media Properties
5. Developing and Mission-Driven Initiatives

Future homepage section requirement:

- Heading: How the Enterprise Fits Together
- Copy: "Divinityx Enterprises LLC provides the legal, operational, intellectual-property, and governance foundation supporting its operating divisions and brands. Each division serves a distinct market while remaining part of one coordinated enterprise."

The homepage must prominently route visitors to the Companies & Brands page.

## Locked Enterprise Portfolio Taxonomy

- Parent legal and operating company: Divinityx Enterprises LLC.
- Registered operating divisions (d/b/a): Divinityx Publishing Company, Artificial Intelligence Capital Ventures, and Carfixd Automotive.
- Operating brand: Business Funding and Profit Systems (BFPS).
- Programs and initiatives: Voice to Legacy™, Fundability Labs™, Divinityx Media, SignalBreak™, Divinityx Ministries, and Divinityx Manifestation.

No entry may be represented as a separate LLC, subsidiary, registered assumed name, financial institution, nonprofit, church, or licensed professional service without governing records supporting that classification.

## Build Room 02 Data Requirements (Recorded, Not Authorized)

Build Room 02 must implement a centralized portfolio registry with at minimum these fields:

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

Every public card must display full public name, actual classification, relationship to Divinityx Enterprises LLC, current operating status, approved description, and a valid destination or an honest Coming Soon state.

## Explicit Non-Goals

There is no backend, database, authentication, CMS, payments system, AI API integration, or analytics dependency in the approved destination architecture.

No deployment provider has been selected, and no production hosting configuration is approved in Build Room 01.

## Current State

The application has not been scaffolded. This document records the approved destination architecture and taxonomy lock only and does not imply that the stack has been installed or initialized.