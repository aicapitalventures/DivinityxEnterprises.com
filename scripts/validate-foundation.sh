#!/usr/bin/env bash

set -euo pipefail

fail() {
  printf 'FAIL: %s\n' "$1" >&2
  exit 1
}

pass() {
  printf 'PASS: %s\n' "$1"
}

require_file() {
  local path="$1"
  [[ -f "$path" ]] || fail "Missing required file: $path"
  [[ -s "$path" ]] || fail "Empty required file: $path"
}

check_absent() {
  local path="$1"
  [[ ! -e "$path" ]] || fail "Unauthorized path present: $path"
}

check_markdown_fences() {
  local file="$1"
  local line
  local count=0
  while IFS= read -r line; do
    if [[ "$line" == '```'* ]]; then
      count=$((count + 1))
    fi
  done < "$file"
  if (( count % 2 != 0 )); then
    fail "Unbalanced markdown code fences in $file"
  fi
}

root_dir=$(cd "$(dirname "$0")/.." && pwd)
source_dir="$root_dir/docs/source"

cd "$root_dir" || fail "Unable to enter repository root"

required_files=(
  "README.md"
  "CANON.md"
  "METADATA-LAW.md"
  "BUILD-PROTOCOL.md"
  "ARCHITECTURE.md"
  "SECURITY.md"
  "CONTRIBUTING.md"
  "LICENSE-PROPRIETARY.md"
  ".gitignore"
  ".env.example"
  "docs/adr/README.md"
  "docs/build-rooms/BR00-alignment-canon-lock.md"
  "docs/build-rooms/BR01-repository-foundation.md"
  "docs/evidence/BR01-evidence.md"
  "docs/continuity/CONTINUITY.md"
  "docs/manifests/SOURCE-MANIFEST.md"
  "docs/manifests/DECISION-REGISTER.md"
  "scripts/validate-foundation.sh"
)

for file in "${required_files[@]}"; do
  require_file "$root_dir/$file"
done

while IFS= read -r file; do
  [[ -n "$file" ]] || continue
  fail "Unauthorized environment file present: $file"
done < <(find "$root_dir" -type f \( -name '.env' -o -name '.env.local' -o -name '.env.development' -o -name '.env.production' -o -name '.env.test' \))

while IFS= read -r file; do
  [[ -n "$file" ]] || continue
  fail "Unauthorized temporary archive present: $file"
done < <(find "$root_dir" -type f \( -name '*.zip' -o -name '*.tar' -o -name '*.tar.gz' -o -name '*.tgz' \))

cd "$source_dir" || fail "Unable to enter docs/source"
sha256sum -c CANON-SOURCE-MANIFEST.txt >/tmp/divinityx-canon-check.log 2>&1 || {
  cat /tmp/divinityx-canon-check.log >&2
  fail "Governed source hash verification failed"
}

cd "$root_dir" || fail "Unable to return to repository root"

for source_file in \
  "$source_dir/DivinityxEnterprises-Website-Scope-Brief-v1.0.txt" \
  "$source_dir/DivinityxEnterprises-Phase-00-Alignment-and-Canon-Lock-v1.0.md" \
  "$source_dir/DivinityxEnterprises-Visual-Design-Canon-v1.0.md" \
  "$source_dir/AICV-Universal-Lean-Build-Protocol-v1.0.md" \
  "$source_dir/RAO-LOOP-v3.0.pdf" \
  "$source_dir/assets/Divinityx-Enterprises-Primary-Logo-Source-nine6.png" \
  "$source_dir/CANON-SOURCE-MANIFEST.txt"; do
  [[ -f "$source_file" ]] || fail "Missing governed source file: $source_file"
done

check_markdown_fences "$root_dir/README.md"
check_markdown_fences "$root_dir/CANON.md"
check_markdown_fences "$root_dir/METADATA-LAW.md"
check_markdown_fences "$root_dir/BUILD-PROTOCOL.md"
check_markdown_fences "$root_dir/ARCHITECTURE.md"
check_markdown_fences "$root_dir/SECURITY.md"
check_markdown_fences "$root_dir/CONTRIBUTING.md"
check_markdown_fences "$root_dir/LICENSE-PROPRIETARY.md"
check_markdown_fences "$root_dir/docs/adr/README.md"
check_markdown_fences "$root_dir/docs/build-rooms/BR00-alignment-canon-lock.md"
check_markdown_fences "$root_dir/docs/build-rooms/BR01-repository-foundation.md"
check_markdown_fences "$root_dir/docs/evidence/BR01-evidence.md"
check_markdown_fences "$root_dir/docs/continuity/CONTINUITY.md"
check_markdown_fences "$root_dir/docs/manifests/SOURCE-MANIFEST.md"
check_markdown_fences "$root_dir/docs/manifests/DECISION-REGISTER.md"

if ! git diff --cached --check -- . ':(exclude)docs/source/**'; then
  fail "Non-source staged whitespace check failed"
fi

pass "Required Build Room 01 files exist and are non-empty"
pass "Governed source hashes verified"
pass "No unauthorized environment files detected"
pass "Markdown fence balance checked"
pass "Non-source staged whitespace check passed"