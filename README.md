# @superwebpros/testsuite

#### Description

This is a library for automated testing designed to facilitate the writing and execution of tests using Playwright and Jest.

## Project Documentation: TestSuite

TestSuite is an npm library designed to be executed from VS Code, allowing the generation and running of tests using Playwright technology ([Playwright](https://playwright.dev)). This project has been autonomously developed to improve scalability and automate GitHub Actions every 24 hours, generating reports on all client projects it contains.

### Technologies Used

- **Mono-repo with TurboRepo:** The project is developed in a mono-repo architecture using TurboRepo ([TurboRepo](https://turbo.build/repo)). It is written in TypeScript and compiled to JavaScript in the `dist` folder, enhancing its compatibility for installation in other projects.

- **PNPM Library Manager:** TestSuite is compatible with the PNPM library manager for dependency management.

- **Husky:** Husky is used to run tests before pushing to the remote repository, ensuring code integrity.

- **Version Publishing with NPM:** New versions of the library must be published with `npm publish` after logging in with the `superwebpros` account.

- **Playwright Library:** TestSuite utilizes the Playwright library for test automation.

### Project Structure

- **"Apps" Folder:** Contains all client Playwright projects. These projects have been independently published to facilitate lightweight and rapid installation in similar projects.

- **Best Practices:** The project follows several best practices to improve its architecture and scalability:
  - Use of "Barrel Indexes" for importing from a single location.
  - Execution of a server test before testing all page functionalities.
  - Saving all tests in the `e2e` folder of each project.
  - Separation of configuration files to centralize settings used in all tests.

### Console Scripts

The following scripts are recommended to be used from the root of the project to facilitate development and test execution:

```json
"scripts": {
  "dev": "turbo dev",
  "pm": "cd apps/playmakers && npm run dev",
  "swp": "cd apps/superwebpros && npm run dev",
  "prepare": "husky",
  "test": "npx playwright test",
  "tsc": "tsc --build"
}
```

### Generating Tests

To generate tests, it is recommended to follow the mentioned best practices and create a project by saving it in a folder within apps, along with its corresponding package.json. You can use Microsoft's "Playwright Test for VSCode" extension to facilitate this process.

### Necessary Configurations

The `playwright.config.ts` configuration file must contain, in addition to the default defineConfig, the following:

```
defineConfig({
  // Other configurations...
  testDir: './e2e',
  testMatch: [/.*\.list\.ts/], // for running all tests in list files
});
```

These configurations are essential to ensure the proper functioning of TestSuite and its integration with Playwright.

Each project must be uploaded independently to npm in order to be installed specifically. The project name in the package.json must contain @superwebpros followed by /project-name. ex: @superwebpros/ts-playmakers, so that the project is uploaded to npm in private mode, otherwise you can upload it directly without the @scope and it will be a public package.