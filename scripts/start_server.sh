#!/bin/bash
set -e
cd /home/ec2-user/my-webapp
echo "Starting Node.js app..."
# Stop existing process on the port if any (optional)
fuser -k 8080/tcp || true
nohup npm run dev > app.log 2>&1 &
echo "App started."
