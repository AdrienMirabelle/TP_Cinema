#!/bin/bash

# Check if Git is installed
if ! command -v git &>/dev/null; then
  echo "Git is not installed."
  echo "Installing Git..."
  apk add --no-cache git
fi

# Get the latest commit hash from GitHub
git fetch origin

# Get the hash of the current commit
current_commit=$(git rev-parse HEAD)

# Compare the two hashes
if [[ $current_commit != origin/test_update ]]; then
  echo "There are changes on GitHub."
  echo "Pulling changes..."
  git pull
fi