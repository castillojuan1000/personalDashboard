# Project Setup Guide

This guide will walk you through setting up your lambda environment for the LightLeap Chatbot project. Follow these steps to configure your development environment properly.

## Prerequisites

Before you start, ensure you have the following installed on your machine:
- Python 3.x
- Node.js and npm
- Visual Studio Code (VSCode)
- VSCode Python extension

## Setup Instructions

### 1. Setting Up Python Virtual Environment

1. **Navigate to your project directory:**

Navigate to your lambda folder within the LightLeap Chatbot.
```
cd path/to/lightleap-chatbot/lambda
```

2. **Create a virtual environment named `lambda-venv`:**

Use the following command to create a virtual environment:
```
python -m venv lambda-venv
```

3. **Activate the virtual environment:**

Activate or source your newly created `lambda-venv` environment using the appropriate command for your operating system:

- **On Windows:**

  ```
  .\lambda-venv\Scripts\activate
  ```

- **On macOS/Linux:**

  ```
  source lambda-venv/bin/activate
  ```

### 2. Install Python Dependencies

Install the required Python dependencies for the project:
```
pip install -r requirements.txt
```


### 3. Install and Configure Serverless Framework

1. **Install Serverless globally:**

Install the Serverless framework globally on your machine with npm:

```
npm install -g serverless
```


2. **Install required Serverless plugins:**

Install the necessary plugins for the Serverless framework:

```
serverless plugin install -n serverless-python-requirements
serverless plugin install -n serverless-offline
serverless plugin install -n serverless-stage-manager
serverless plugin install -n serverless-plugin-custom-roles
serverless plugin install -n serverless-aws-resource-names
serverless plugin install -n serverless-websockets-plugin
```


### 4. Configure AWS CLI

1. **Install AWS CLI:**

Download and install the AWS CLI following the instructions from AWS:

[AWS CLI installation guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

2. **Configure AWS CLI with your access keys:**

Configure your AWS CLI with access keys by running:

```
aws configure
```

Follow the prompts to input your AWS Access Key ID, Secret Access Key, region, and output format.


### 5. Launch the Application

Launch the application in offline mode suitable for development:

- **On Windows:**
```
serverless offline -s prod
```

- **On macOS/Linux:**

```
sls offline -s prod
```
