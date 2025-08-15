#!/bin/bash
set -e
echo "Validating service on http://localhost:80 ..."
for i in {1..10}; do
  if curl -fsS http://localhost:80 >/dev/null; then
    echo "Validation successful."
    exit 0
  fi
  echo "Attempt $i failed; retrying in 2s..."
  sleep 2
done
echo "Validation failed."
exit 1
