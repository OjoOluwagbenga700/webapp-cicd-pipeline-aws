# EC2 Deployment with CodePipeline → CodeBuild → CodeDeploy

This project deploys a Node.js web app to an Amazon EC2 instance. CodeBuild performs a real build, packages a proper **CodeDeploy bundle**, and (optionally) uploads it to S3. CodeDeploy then deploys to EC2 and runs the app.

## How it works
- **CodeBuild**: installs deps, runs `npm run build`, packages a `bundle.zip` with `appspec.yml`, `scripts/`, and `app/` at the zip root (as CodeDeploy expects).
- **Artifacts**: `bundle.zip` is emitted for CodePipeline. If you set `S3_BUCKET` environment variable in CodeBuild, the build also uploads the bundle directly to S3 with a timestamped key.
- **CodeDeploy**: copies `app/` to `/home/ec2-user/my-webapp`, runs lifecycle hooks to install, start, and validate.

## Prerequisites
- EC2 instance (Amazon Linux 2) with **CodeDeploy agent** running and an IAM instance profile allowing S3 + CodeDeploy.
- Security Group open on **port 3000** (or modify the app/port).
- CodeBuild service role with S3 and CodeDeploy permissions (if using S3 upload path).
- CodeDeploy Application + Deployment Group targeting your EC2.

## CodeBuild Environment Variables (recommended)
- `AWS_DEFAULT_REGION` / region setting in project
- `S3_BUCKET` (optional): if set, build uploads `bundle.zip` to `s3://$S3_BUCKET/<prefix>/...`
- `S3_PREFIX` (optional): default `codedeploy`

## Local test1
```bash
cd app
npm install
npm start
# Visit http://localhost:3000
```

## EC2 User Data (optional helper)
```bash
#!/bin/bash
yum update -y
curl -sL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs ruby wget
cd /home/ec2-user
REGION=$(curl -s http://169.254.169.254/latest/meta-data/placement/region)
wget https://aws-codedeploy-${REGION}.s3.${REGION}.amazonaws.com/latest/install
chmod +x ./install
./install auto
systemctl enable codedeploy-agent
systemctl start codedeploy-agent
```

## Pipeline tips
- In **CodePipeline**, set the Build output artifact to consume `bundle.zip` for the Deploy action.
- In **CodeDeploy**, choose Deployment type **EC2/On-Premises** and ensure the appspec hooks paths match this repo.
# webapp-cicd-pipeline
# aws-webapp-cicd-tutorial
