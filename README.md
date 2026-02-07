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

<img width="400" height="300" alt="image" src="https://github.com/user-attachments/assets/99fddcf7-e504-4e6e-a3d7-9a810871975b" />    <img width="400" height="300" alt="image" src="https://github.com/user-attachments/assets/746878f6-52b5-4f72-b96d-2016c5fe4ea3" />

## Application Access

``
https://demo-dev-func.azurewebsites.net/api/HttpTrigger1
``
- Output:

<img width="383" height="105" alt="image" src="https://github.com/user-attachments/assets/4f96f963-d576-4181-973b-12b24da10fc0" />


## Security Best Practices
- Terraform state stored in Azure Storage backend
- Azure DevOps Service Connection for authentication
- System-assigned Managed Identity for Function App
- No manual Azure Portal changes (true IaC)

## What This Project Demonstrates
- Infrastructure as Code (Terraform)
- CI/CD automation with Azure DevOps
- Self-hosted agent configuration
- Serverless application deployment
- Enterprise-level debugging and troubleshooting

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
     Unable to locate executable file: terraform, ZIP
     ``
   - fix:
     - Installed OS packages manually
     - Automated dependency installation in pipeline
4. Azure Function Not Visible
   - Cause: Incorrect folder structure in ZIP package
   - Fix: Correct Azure Function directory hierarchy
5. Function Endpoint Not Working
   - Cause: Wrong function name (HttpTrigger1)
   - Fix: Listed functions using Azure CLI and corrected URL
