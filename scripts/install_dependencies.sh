#!/bin/bash
set -e
cd /home/ec2-user/my-webapp
echo "Checking if this is a built app..."
if [ -d "app" ] && [ ! -f "package.json" ]; then
  echo "Built app detected, skipping npm install"
  exit 0
fi
# Ensure Node.js exists (Amazon Linux 2)
if ! command -v node >/dev/null 2>&1; then
  echo "Installing Node.js 18..."
  curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
  sudo yum install -y nodejs
fi
echo "Installing npm dependencies..."
npm install
