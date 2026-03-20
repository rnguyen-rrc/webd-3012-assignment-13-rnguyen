# WEBD-3012_Assignment-12_rnguyen

**Description**: Develop a reusable UI Component Library using React, styled-components, and Storybook. The library includes interactive components with configurable props, responsive design, unit testing using Vitest, and a Dockerized production build deployment.

### 1. Create Vite project

a. Create a folder name '**WEBD-3012_Assignment-12_rnguyen**'

b. Inside VS Studio Code, click on icon '**><**' at bottom left to connect to WSL

c. File -> Open folder -> copy the following command to open the folder

```
/mnt/c/Users/roline/OneDrive/Documents/TERM 3/WEBD-3012 Business Systems Build and Testing/Coding Assignments/webd-3012-assignment-12-rnguyen
```

d. Open Terminal window from project root, create Vite project using command

```
npm create vite@latest .

Select 'React' framework
Select 'Typescript' variant
Select 'No' when asked Use Vite 8 beta (Experimental)
Select 'Yes' when asked Install with npm and start now?
```

e. Install dependencies using command

```
npm install
```

f. Start the development server (if it does not start automatically)

```
npm run dev
```

Confirm that the application runs successfully in the browser. Press **Ctrl + C** in the terminal to stop the development server.

### 2. Push changes to git by following these steps

a. From the Terminal in Visual Studio Code, run the following commands:

```
git init
git add .
git commit -m "Initial Vite setup"
```

b. Go to GitHub and create a new repository named '**webd-3012-assignment-12-rnguyen**'

c. In the Terminal, connect your local project to the GitHub repository

```
git remote add origin https://github.com/rnguyen-rrc/webd-3012-assignment-12-rnguyen.git
```

d. Rename the default branch to main (some systems still default to master, so we standardize to main)

```
git branch -M main
```

e. Push your changes to GitHub using command

```
git push -u origin main
```

### 3. Install and configure Storybook

a. In project root, run command

```
npx storybook@latest init

When asked What configuration should we install? Choose **Recommended: component development, docs, and testing features**
When asked New to Storybook? Choose '**No: Skip onboarding & don't ask again**'
When asked What configuration should we isntall? Choose '**Recommended: Component development, docs, and testing features**'
When asked Do you want to install Playwright with Chrome now? Choose '**No**'
```

b. After installation completes, if Storybook doens't automatically start, run command

```
npm run storybook
```

c. Confirm Storybook run successfully by visiting

```
http://localhost:6006
```

### 4. Install Styled Components

a. From the Terminal in Visual Studio Code, type following commands

```
npm install styled-components
npm install -D @types/styled-components
```

### 5. Setting Up Unit Testing with Vitest

a. Install Testing Dependencies
If testing tools are not installed yet, run:

```
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

**These packages provide:**

- Vitest – Test runner
- @testing-library/react – React component testing utilities
- @testing-library/jest-dom – Custom DOM matchers
- jsdom – Simulated browser environment for tests

b. Add Test Configuration

Open:

```
vite.config.ts
```

Add the following test configuration:

```
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/setupTests.ts',
  css: true,
},
```

**This enables**:

- Global test functions (describe, test, expect)
- DOM simulation via jsdom
- Custom test setup file
- CSS support in tests

c. Create Global Test Setup File

Create:

```
src/setupTests.ts
```

Add:

```
import '@testing-library/jest-dom'
```

This enables extended matchers like:

```
toBeInTheDocument()
toHaveStyle()
```

### 6. Building Button UI components

a. Inside src/, create a new folder called **Button** using command

```
mkdir -p src/components/Button
```

b. Inside project root, create the following files manually or using following commands

```
touch src/components/Button/Button.tsx
touch src/components/Button/Button.types.tsx
touch src/components/Button/Button.stories.tsx
touch src/components/Button/Button.tests.tsx
touch src/components/Button/index.ts
```

c. Button Component File Structure Explanation

```
Define Button Types – src/components/Button/Button.types.ts
Defines the TypeScript interface for the Button component props, ensuring type safety and clear prop validation.
```

```
Build Button Component – src/components/Button/Button.tsx
Implements the Button UI using React and styled-components. Handles props such as label, background color, disabled state, and click events.
```

```
Clean Export – src/components/Button/index.ts
Re-exports the component and its types to simplify imports and maintain a clean component structure.
```

```
Add Storybook Story – src/components/Button/Button.stories.tsx
Documents the component in Storybook and enables interactive controls for modifying props such as label text, background color, and disabled state.
```

```
Add Unit Tests – src/components/Button/Button.tests.tsx
Contains automated tests using Vitest and Testing Library to verify the button renders correctly and the disabled state updates styles properly
```

d. Add Test Script to package.json

Open:

```
package.json
```

Under "Scripts", add:

```
"test": "vitest --project unit"
```

This allows you to run test using

```
npm run test
```

### 7. Run Storybook and Unit Tests for the Button Component

After adding all Button component files including test file, follow these steps to verify Button component works correctly.

a. Start Storybook

Run:

```
npm run storybook
```

Confirm that Storybook launches successfully.

Open:

```
http://localhost:6006/
```

**Verify that**:

- Button component appears in the left sidebar
- Stories render correctly
- Controls panel works
- Default and disabled states display properly

b. Start unit testing
Run:

```
npm run test
```

or to run test for a specific component, run:

```
npm run test -- src/components/Button/Button.tests.tsx
```

Confirm that:

- All tests complete successfully with no failures
- On the terminal window, expected return is

```
Test Files 1 passed (1)
Tests 2 passed (2)
```

### 8. Commit and push changes

Once the Button component is confirmed to be working correctly (including stories and tests), commit your changes to version control.

```
git add .
git commit -m "Add responsive Button component with stories and tests"
git push
```

### 9. Create the rest of required components

Repeat step 6, 7 and 8 for all the rest of components, including LABEL, TEXT, DROPDOWN, RADIO BUTTON, IMG, HERO IMAGE, CARD, TABLE
Commit and push changes to Git after finishing each component

### 10. Create Docker Container

a. \***\*In project root, make sure we can build Storybook\*\***

Run:

```
npm run build-storybook
```

This creates the storybook-static folder

b. From project root, create a new file

```
nginx.conf
```

Add the following code to the newly created file

```
server {
    listen 80;
    server_name _;
    root /nguyen_roline_ui_garden;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
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
