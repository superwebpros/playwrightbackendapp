# @superwebpros/testsuite

#### Description
This is a library for automated testing designed to facilitate the writing and execution of tests using Playwright and Jest.

#### Scripts

- **dev**: Starts the development server using Turbo.
- **pm**: Enters the Playmakers application directory and runs the development server.
- **swp**: Enters the SuperWebPros application directory and runs the development server.
- **prepare**: Runs Husky configurations before any preparation operation.
- **test**: Runs tests using Playwright.
- **tsc**: Compiles the project using TypeScript.

#### Dependencies

- **@playwright/test**: Testing library for Playwright.
- **husky**: Tool for setting up Git hooks.
- **playwright**: Library for automating browsers.
- **turbo**: Tool for rapid development in Ruby on Rails.
- **typedoc**: Documentation generator for TypeScript.

#### Dev Dependencies

- **@types/node**: Type definitions for Node.js.
- **typescript**: TypeScript compiler.

#### Peer Dependencies

- **@playwright/test**: Required version of @playwright/test for testing.
- **dotenv**: Library for loading environment variables from a `.env` file.
- **playwright**: Required version of Playwright for testing.

---

### File spec.ts

This file defines a set of tests using the `test` and `expect` functions provided by `@playwright/test`. The tests are organized into different blocks for different aspects of the application, such as layout, navigation, and store functionality. Each test block is described in detail for better understanding and maintainability of the code. The tests are exported as a `createTest` function, which is then called to execute the tests.


## Automated Tests
`frontBeforeAll.list.ts`
This file defines a set of automated tests using Playwright. The tests cover various aspects of the application, such as layout, navigation, and shop functionality.

- **Before All**: Sends a request to the home page and verifies the response status.

The tests are organized into blocks using the `test.describe` function provided by Playwright. Each block corresponds to a specific area of functionality and contains multiple tests to verify different aspects of that functionality.

# Test Suites
When we need to make new tests, we can create a new test suite file and add it to the test suite list. This way, we can keep our tests organized and easy to manage.

### For consistensy
We use barrel files to export all test suites from a single file.
So when you need to add a new test suite, you can simply add it to the barrel file.
So choose the project you want to add the test suite to and add it to the barrel file.