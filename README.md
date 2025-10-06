# AQA YouTrack: Playwright E2E Test Automation Framework

This repository contains an end-to-end (**E2E**) test automation framework designed to test the user interface of the **YouTrack Cloud application**, with the live target instance available at **[karter.youtrack.cloud](https://karter.youtrack.cloud)**

The primary goal of this project is to serve as a learning exercise, demonstrating and implementing modern best practices in web automation using **TypeScript** and **Playwright**.

Tests Results: [GitHub Pages](https://kartrr.github.io/aqa-youtrack/)

## 🛠️ Tech Stack

* **Framework:** [Playwright](https://playwright.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Reporting:** [Allure Reporter](https://allurereport.org/)
* **CI/CD:** [GitHub Actions](https://github.com/features/actions)
* **Package Manager:** [NPM](https://www.npmjs.com/)

## 🏛️ Architectural Features

This framework is built upon the **Page Object Model (POM)** design pattern, which provides a clean separation between test logic and page-specific code.

Key features include:
* **Page Object Model:** Each page and major component (like the sidebar) is represented as a class.
* **Base Page:** A base class for common page logic (e.g., handling the sidebar, waiting for loaders), promoting code reuse.
* **Pre-authenticated Setup:** Uses Playwright's `auth.setup.ts` to log in once, save it and use the authenticated state as `storageState`, speeding up test execution.
* **Data-Driven:** Securely manages test data and credentials using `.env` file for local development and **GitHub Secrets** for CI/CD runs.
* **CI/CD Integration:** Includes a ready-to-use GitHub Actions workflow for automated test execution on every push.
* **Detailed Reporting:** Integrated with Allure for rich, interactive test reports.

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (version 18.x or higher)
* NPM (comes with Node.js)
