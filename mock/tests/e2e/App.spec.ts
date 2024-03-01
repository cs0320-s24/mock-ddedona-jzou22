import { expect, test } from "@playwright/test";
import { chromium } from "playwright";

/**
  The general shapes of tests in Playwright Test are:
    1. Navigate to a URL
    2. Interact with the page
    3. Assert something about the page against your expectations
  Look for this pattern in the tests below!
 */

// Test initial display of the website
test("on page load, i see a login button and text", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  // Looks for login button
  await expect(page.getByLabel("Login")).toBeVisible();
  // Should be a text field with a place holder
  await expect(page.getByPlaceholder("Enter username")).toBeVisible();
});

// Test correct login
test("login attempt", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  const textField = await page.waitForSelector('input[type="text"]');
  const loginButton = await page.waitForSelector('button[aria-label="Login"]');

  // Interact with these components
  await textField.type("@brown.edu");
  await loginButton.click();

  // Should display signout and command input
  await expect(page.getByLabel("Sign Out")).toBeVisible();
  await expect(page.getByLabel("repl-history")).toBeVisible();
  await expect(page.getByLabel("Command input")).toBeVisible();
});

// Test incorrect login
test("incorrect login attempt", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  const textField = await page.waitForSelector('input[type="text"]');
  const loginButton = await page.waitForSelector('button[aria-label="Login"]');

  // Interact with these components
  await textField.type("wrong email"); // Correct email format
  await loginButton.click();

  // Should not display signout and command input after incorrect login attempt
  await expect(page.getByLabel("Sign Out")).not.toBeVisible();
});

//test mode
test("mode verbose command in REPLInput updates history and mode", async ({
  page,
}) => {
  // Navigate to the page containing the REPLInput component
  await page.goto("http://localhost:8000/");

  // Log in and submit the command "mode verbose"
  await page.fill('input[type="text"]', "@brown.edu");
  await page.click('button[aria-label="Login"]');
  await page.fill('input[type="text"]', "mode verbose");
  await page.click('button:has-text("Submit")');

  // Wait for the history to update with the command and its output
  await page.waitForSelector('div:has-text("Command: mode verbose")');
  await page.waitForSelector(
    'div:has-text("Output: Switched to verbose mode")'
  );

  // Verify that the current mode is displayed as "verbose"
  const currentMode = await page.textContent(
    'legend:has-text("Current Mode: verbose")'
  );
  expect(currentMode).toBeTruthy();
});

// test mode
test("mode brief command in REPLInput updates history and mode", async ({
  page,
}) => {
  // Navigate to the page containing the REPLInput component
  await page.goto("http://localhost:8000/");

  // Log in and submit the command "mode brief"
  await page.fill('input[type="text"]', "@brown.edu");
  await page.click('button[aria-label="Login"]');
  await page.fill('input[type="text"]', "mode brief");
  await page.click('button:has-text("Submit")');

  // Wait for the history to update with the command and its output
  await page.waitForSelector('div:has-text("Switched to brief mode")');

  // Verify that the current mode is displayed as "brief"
  const currentMode = await page.textContent(
    'legend:has-text("Current Mode: brief")'
  );
  expect(currentMode).toBeTruthy();
});

// tests loading
test("load_file successfully loads data and displays confirmation message", async ({
  page,
}) => {
  // Navigate to the page containing the REPL component
  await page.goto("http://localhost:8000/");

  // Perform the login action
  await page.fill('input[type="text"]', "@brown.edu");
  await page.click('button[aria-label="Login"]');

  // Interact with the components to execute the load_file command
  const commandInput = await page.waitForSelector('input[type="text"]');
  await commandInput.type("load_file exampleCSV1.csv");
  await page.click('button:has-text("Submit")');

  // Wait for the confirmation message to appear
  await page.waitForSelector('div:has-text("File Loaded Successfully")');

  // Execute the view command
  await commandInput.type("view");
  await page.click('button:has-text("Submit")');

  // Wait for the table to appear in the search history
  await page.waitForSelector(".output-table");

  // Verify that the table appears correctly in the search history
  const tableRows = await page.$$(".output-table tbody tr");
  expect(tableRows.length).toBeGreaterThan(0);
});

test("load_file successfully loads data and search command returns correct results", async ({
  page,
}) => {
  // Navigate to the page containing the REPL component
  await page.goto("http://localhost:8000/");

  // Perform the login action
  await page.fill('input[type="text"]', "@brown.edu");
  await page.click('button[aria-label="Login"]');

  // Interact with the components to execute the load_file command
  const commandInput = await page.waitForSelector('input[type="text"]');
  await commandInput.type("load_file exampleCSV1.csv");
  await page.click('button:has-text("Submit")');

  // Wait for the confirmation message to appear
  await page.waitForSelector('div:has-text("File Loaded Successfully")');

  // Execute the search command
  await commandInput.type("search 1The");
  await page.click('button:has-text("Submit")');

  // Wait for the search results to appear
  await page.waitForSelector(".output-table");

  // Verify that the search results are correct
  const tableRows = await page.$$(".output-table tbody tr");
  expect(tableRows.length).toBeGreaterThan(0);

  // Check if the search results match the mocked results
  const firstRowCells = await tableRows[0].$$(".output-cell");
  const cellTexts = await Promise.all(
    firstRowCells.map((cell) => cell.textContent())
  );
  expect(cellTexts).toEqual(["The", "song", "remains", "the", "same."]);
});

test("user can sign out after logging in", async ({ page }) => {
  // Navigate to the page containing the application
  await page.goto("http://localhost:8000/");

  // Perform the login action
  await page.fill('input[type="text"]', "@brown.edu");
  await page.click('button[aria-label="Login"]');

  // Wait for the sign-out button to appear after successful login
  await page.waitForSelector('button[aria-label="Sign Out"]');

  // Click the sign-out button
  await page.click('button[aria-label="Sign Out"]');

  // Wait for the login form to appear after signing out
  await page.waitForSelector('input[type="text"]');
});
