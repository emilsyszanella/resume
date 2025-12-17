#!/bin/bash
echo "Syncing Portfolio to Resume Repository..."

# 1. Add the resume remote (if not already added)
# Using || true to ignore error if it already exists
git remote add resume https://github.com/emilsyszanella/resume.git || true

# 2. Fetch to ensure connection works (optional but good check)
echo "Checking connection..."
git fetch resume

# 3. Push current main branch to resume/main
# We use --force because we are overwriting resume with this portfolio
echo "Pushing code..."
git push resume main --force

echo "Done! Check https://emilsyszanella.github.io/resume/"
