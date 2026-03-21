# WEBD-3012_Assignment-13_rnguyen

**Description**: Add code quality check to the existing code building process.

### 1. Setup new project folder

a. Copy folder '**WEBD-3012_Assignment-12_rnguyen**' from previous assignment and create new folder named '**WEBD-3012_Assignment-13_rnguyen**'

b. Inside VS Studio Code, click on icon '**><**' at bottom left to connect to WSL

c. File -> Open folder -> copy the following command to open assignment 13 folder.

```
/mnt/c/Users/roline/OneDrive/Documents/TERM 3/WEBD-3012 Business Systems Build and Testing/Coding Assignments/webd-3012-assignment-13-rnguyen
```

### 2. Push changes to git by following these steps

a. From the Terminal in Visual Studio Code, run the following commands:

```
git init
git add .
git commit -m "Initial Assignment 13"
```

b. Go to GitHub and create a new repository named '**webd-3012-assignment-13-rnguyen**'

c. In the Terminal, connect your local project to the GitHub repository

```
git remote add origin https://github.com/rnguyen-rrc/webd-3012-assignment-13-rnguyen.git
```

d. Rename the default branch to main (some systems still default to master, so we standardize to main)

```
git branch -M main
```

e. Push your changes to GitHub using command

```
git push -u origin main
```

### 3. 
```

c. **Create Dockerfile**

From project root, create a new file '**Dockerfile**' (no file extension) in the app root folder

Prepare the Dockerfile (refer to the Dockerfile included in the project for full command details).
In general, the Dockerfile performs the following tasks:

```
**Stage 1**
Uses Node.js 20 (Alpine) as the build environment.
Sets /app as the working directory inside the container.
Copies dependency files and installs packages using npm ci for a clean, reproducible install.
Copies the full project source code into the container.
Runs npm run build-storybook to generate a static production build in the storybook-static folder.

**Second stage (Production Server)**
Uses a lightweight Nginx (Alpine) image to serve static files.
Copies the built storybook-static files into /nguyen_roline_ui_garden inside the container.
Uses a custom nginx.conf to configure the server.
Exposes port 80 for access from the host machine.
Automatically starts the Nginx server when the container runs.
```

b. **Create Docker Image**

In VS Studio Code -> Terminal, from root folder, type the following command to create docker image:

```
docker build -t nguyen_roline_coding_assignment12 .
```

Type the following command to confirm the image has been created

```
docker images
```

c. **Create Docker Container**

Type the following command to create docker container

```
docker run -p 8083:80 --name nguyen_roline_coding_assignment12 nguyen_roline_coding_assignment12
```

Type the following command to verify docker container is running

```
docker ps
```

d. **Confirm the app runs successfully using Docker**

Go to browser, type the following URL to verify that the app can be run

```
http://localhost:8083/
```

In VS Studio Code -> Terminal, type the following command to verify that all site files are copied into /nguyen_roline_ui_garden

```
docker exec -it nguyen_roline_coding_assignment12 ls -la /nguyen_roline_ui_garden
```

Expectation: We should see index.html, iframe.html, folder "assets", etc.

e. **Commit and push changes to Git**

```
git add .
git commit -m "Add Dockerfile and necessary files to create Docker container"
git push
```

**Notes**: Commands to start/stop container manually if needed

```
docker start nguyen_roline_coding_assignment12
docker stop nguyen_roline_coding_assignment12
```
