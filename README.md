# Node.js Application using Docker

## Overview

This is a simple Node.js application packaged and executed using Docker.
The application does **not require Node.js to be installed locally** — Docker alone is sufficient to build and run it.

---

## Prerequisites

- Docker installed on your system

---

## How to Run the Application

### Step 1: Build the Docker Image

Run the following command from the project root directory:

```bash
docker build -t testnode .
```

- `-t testnode` assigns the name **testnode** to the Docker image
- `.` specifies the current directory as the build context

---

### Step 2: Run the Docker Container

Execute the application using:

```bash
docker run -p 3000:3000 --name nodeapp testnode
```

#### Command Breakdown

- `-p 3000:3000` → Binds container port 3000 to host port 3000
- `--name nodeapp` → Assigns the container name **nodeapp**
- `testnode` → Docker image name

---

## Access the Application

Once the container is running, open your browser and visit:

```
http://localhost:3000
```

---

## Technology Stack

- Node.js
- Docker

---

## Key Learning Outcomes

- Containerized a Node.js application using Docker
- Understood Docker image creation and container execution
- Learned port binding and container naming

---

## Notes

- Make sure port **3000** is not already in use on your system
- Stop the container using:

```bash
docker stop nodeapp
```

- Remove the container using:

```bash
docker rm nodeapp
```
