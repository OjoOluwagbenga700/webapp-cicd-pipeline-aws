#!/bin/bash
set -e
echo "Stopping Node.js app if running..."
pkill -f "node server.js" || pkill -f "node app.js" || pkill -f node || true
