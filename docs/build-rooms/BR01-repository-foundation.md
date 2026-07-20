# BR01 - Repository Foundation

## Authority

This build room is authorized by Elijah Lee Cooley under the founder-supplied canon and AICV Universal Lean Build Protocol™ v1.0.

## Baseline State

The branch is build/01-repository-foundation, HEAD is the authorized baseline commit, and the repository contains only the pre-existing README plus governed source under docs/source before the foundation docs are added.

## Objective

Create the repository foundation documents, root hygiene files, and validation tooling required for later approved application work.

## Included Scope

- Root governance documents
- Repository hygiene files
- Evidence record
- Build-room records
- Dependency-free validation script

## Excluded Scope

- docs/source modifications
- Application scaffolding
- Dependency installation
- Backend, database, auth, CMS, analytics, AI, payments, or deployment work

## Affected Files

README.md, CANON.md, METADATA-LAW.md, BUILD-PROTOCOL.md, ARCHITECTURE.md, SECURITY.md, CONTRIBUTING.md, LICENSE-PROPRIETARY.md, .gitignore, .env.example, docs/adr/README.md, docs/build-rooms/BR00-alignment-canon-lock.md, docs/build-rooms/BR01-repository-foundation.md, docs/evidence/BR01-evidence.md, docs/continuity/CONTINUITY.md, docs/manifests/SOURCE-MANIFEST.md, docs/manifests/DECISION-REGISTER.md, and scripts/validate-foundation.sh.

## Cost Ceiling

$0 new recurring cost.

## Validation Gate

Required validation includes source hash verification, file-presence checks, diff hygiene, environment-file checks, markdown fence checks, and git diff --check.

Approved validation law:

- Protected source canon under docs/source is byte-preserved and governed by exact SHA-256 verification.
- Whitespace normalization or repairs to protected canon are prohibited.
- Cached diff whitespace checks apply to every staged path outside docs/source/**.
- This exception exists only to prevent immutable source formatting from being rewritten.

## Failure Handling

If validation fails, repair only the in-scope Build Room 01 defect, rerun the full validation gate, and do not weaken any check.

## Definition of Done

The foundation files exist, are non-empty, the governed source hashes pass, and the repository still contains no unauthorized scaffold or dependency files.

## Stop Boundary

Stop after validation and founder-readable reporting. Do not begin Build Room 02.

## Next Phase Not Authorized

Build Room 02 is not authorized by this document.