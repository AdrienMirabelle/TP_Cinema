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

# Get the hash of the latest commit on GitHub
latest_commit=$(git rev-parse origin/main)

# Check if the latest commit hash is different from the current commit hash
if [ "$current_commit" != "$latest_commit" ]; then
  echo "Pulling the latest changes from GitHub..."
  git pull origin main
  echo "Restarting the server..."
  pm2 restart all
else
  echo "No changes. Nothing to do."
fi