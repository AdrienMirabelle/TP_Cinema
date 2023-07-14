#!/bin/bash

# Get the current commit hash
current_commit=$(git rev-parse HEAD)

# Get the latest commit hash
latest_commit=$(git rev-list --max-count=1 HEAD)

# If the latest commit is different from the current commit, pull the latest changes
if [[ $current_commit != $latest_commit ]]; then
  echo "Pulling latest changes..."
  git pull
fi

# Get the current time
current_time=$(date)

# Set the time limit
time_limit=$(date -d "1 hour ago")

# If the latest commit is older than the time limit, pull the latest changes
if [[ $current_time -gt $time_limit ]]; then
  echo "Pulling latest changes..."
  git pull
fi

# Start Docker Compose
docker-compose up -d