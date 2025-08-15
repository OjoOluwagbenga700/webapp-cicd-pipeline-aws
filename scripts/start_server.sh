#!/bin/bash
set -e
cd /home/ec2-user/my-webapp
echo "Starting web server..."
# Stop existing process on the port if any (optional)
fuser -k 8080/tcp || true
# Serve static files using Python's built-in server
nohup python3 -m http.server 8080 --directory app > app.log 2>&1 &
echo "Static file server started on port 8080."
