#!/bin/bash

# Check if Git is installed
if ! command -v git &>/dev/null; then
  echo "Git is not installed."
  echo "Installing Git..."
  apk add --no-cache git
fi

# Check if Docker is installed
if ! command -v docker &>/dev/null; then
  echo "Docker is not installed."
  echo "Installing Docker..."
  apk add --no-cache docker
fi

# Get the hash of the current commit
current_commit=$(git rev-parse HEAD)

# Get the hash of the latest commit on GitHub
latest_commit=$(git rev-parse origin/main)

# Check if the latest commit hash is different from the current commit hash
if [ "$current_commit" != "$latest_commit" ]; then
  echo "Pulling the latest changes from GitHub..."
  git pull origin main
  echo "Restating docker containers..."
  docker-compose up -d --build
  echo "Done."
else
  echo "No changes. Nothing to do."
fi