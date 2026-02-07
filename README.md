# Azure DevOps + Terraform Serverless Web Application
## Project Overview
This project demonstrates a full end-to-end DevOps workflow for deploying a serverless HTML web application using Azure Functions, Terraform, and Azure DevOps CI/CD pipelines with a self-hosted agent.

The infrastructure is provisioned using Infrastructure as Code (IaC), Terraform state is stored in Azure Storage backend, and application deployment is fully automated without using the Azure Portal.

## Objectives
- Automate Azure infrastructure provisioning using Terraform
- Store Terraform state securely in Azure Storage
- Build CI/CD pipeline in Azure DevOps
- Use self-hosted build agent
- Deploy HTML web app via Azure Function App
- Follow DevOps and security best practices

## CI/CD Pipeline Workflow
Stage 1: Terraform Infrastructure Deployment
- Install Terraform on self-hosted agent
- Initialize Terraform with Azure Storage backend
- Apply Terraform using environment variables
- Provision Azure resources automatically

Stage 2: Application Deployment
- Install OS dependencies (zip) on agent
- Package Function App code
- Deploy ZIP package to Azure Function App

## Application Access

``
https://<function-app-name>.azurewebsites.net/api/<function-name>
``

## REAL DEVOPS ISSUES DEBUGGED
1. Terraform State Locking
   - error
     ``
     state blob is already locked
     ``
   - fix
     - Force unlock
     - Ensure sequential pipeline execution
     - Learned Terraform state concurrency concepts
2. Azure Resource Dependency Conflict
   - error:
     ``
     App Service Plan cannot be deleted because Function App exists
     ``
   - fix:
     - Understood Terraform dependency graph
     - Correct destroy order
3. Self-Hosted Agent Missing Tools
   - error:
     ``
     Unable to locate executable file: terraform, azure CLI, ZIP
     ``
   - fix:
     - Installed OS packages manually
     - Automated dependency installation in pipeline
