## Build Status

[![CI](https://github.com/GaziMazdi/CSP451-Checkpoint2-GaziMazdi/actions/workflows/ci.yml/badge.svg)](https://github.com/GaziMazdi/CSP451-Checkpoint2-GaziMazdi/actions/workflows/ci.yml)

[![Deploy](https://github.com/GaziMazdi/CSP451-Checkpoint2-GaziMazdi/actions/workflows/deploy.yml/badge.svg)](https://github.com/GaziMazdi/CSP451-Checkpoint2-GaziMazdi/actions/workflows/deploy.yml)

[![Schedule](https://github.com/GaziMazdi/CSP451-Checkpoint2-GaziMazdi/actions/workflows/scheduled.yml/badge.svg)](https://github.com/GaziMazdi/CSP451-Checkpoint2-GaziMazdi/actions/workflows/scheduled.yml)

# Workflow Documentation

This file documents the workflows used in the **CSP451-Checkpoint2-GaziMazdi** repository.  
It explains their purpose, trigger conditions, dependencies, secrets, and troubleshooting steps.

---

## 1. CI Pipeline (`ci.yml`)

**Purpose:**  
- Run automated checks on every push or pull request.  
- Ensure code quality with linting, formatting, testing, and building.  

**Trigger Conditions:**  
- On push to `main` or `develop` branch.  
- On pull request targeting `main`.

**Jobs:**  
1. **Linting:** Runs ESLint and Prettier checks.  
2. **Testing:** Runs unit tests using Jest and generates coverage reports.  
3. **Build:** Compiles the project and prepares build artifacts.  

**Dependencies:**  
- Node.js, ESLint, Prettier, Jest.  

**Secrets:**  
- Not required.  

**Troubleshooting:**  
- If lint fails → Run `npm run lint` locally to see style errors.  
- If tests fail → Check failing test logs in `__tests__` folder.  
- If build fails → Ensure dependencies are installed with `npm install`.

---

## 2. Scheduled Workflow (`scheduled.yml`)

**Purpose:**  
- Perform automated daily checks to ensure code security and dependencies are up to date.  

**Trigger Conditions:**  
- Runs automatically every day (using `cron`).  

**Jobs:**  
1. **Dependency Audit:** Checks for outdated or vulnerable npm packages.  
2. **Security Audit:** Runs `npm audit` to identify vulnerabilities.  
3. **Issue Creation:** If vulnerabilities are found, automatically creates a GitHub issue.  

**Dependencies:**  
- Node.js environment.  

**Secrets:**  
- Requires `GITHUB_TOKEN` (provided automatically by GitHub).  

**Troubleshooting:**  
- If audit fails → Run `npm audit` locally.  
- If issue creation fails → Ensure repo issues are enabled.  

---

## 3. Deployment Workflow (`deploy.yml`)

**Purpose:**  
- Deploy the project to **GitHub Pages** whenever code is pushed to the main branch.  

**Trigger Conditions:**  
- On push to `main` branch.  

**Jobs:**  
1. **Build Project:** Prepares production-ready build.  
2. **Deploy:** Publishes the build to GitHub Pages using `peaceiris/actions-gh-pages`.  
3. **Badge Update:** Adds deployment status badge to README.  

**Dependencies:**  
- Build artifacts generated from CI pipeline.  

**Secrets:**  
- Requires `GITHUB_TOKEN` with write permissions.  

**Troubleshooting:**  
- If you see `Permission denied` → Make sure Pages deployment permissions are enabled in repo settings.  
- If site doesn’t update → Clear cache or confirm deployment branch (usually `gh-pages`).  

---

## 4. Custom Action (`hello-action`)

**Purpose:**  
- Demonstrates how to create a reusable composite action.  
- Example: Prints a hello message and runs simple scripts.  

**Trigger Conditions:**  
- Called from the main CI pipeline (`ci.yml`).  

**Jobs:**  
- Executes defined steps (logs hello message, runs simple checks).  

**Dependencies:**  
- Runs inside GitHub-hosted runner.  

**Secrets:**  
- None required.  

**Troubleshooting:**  
- If action fails → Check `action.yml` syntax.  
- Make sure it’s referenced as `./.github/actions/hello-action`.  

---

# ✅ Summary of Deliverables

- Repository contains **3+ workflow files** (`ci.yml`, `scheduled.yml`, `deploy.yml`).  
- Screenshots of **successful workflow runs** uploaded.  
- **Actions tab** shows ✅ green checkmarks.  
- **README.md** updated with status badges.  
- This `WORKFLOWS.md` file documents purpose, triggers, dependencies, secrets, and troubleshooting.  
