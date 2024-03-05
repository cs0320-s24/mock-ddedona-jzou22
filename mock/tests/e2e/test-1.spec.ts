import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByLabel("Login").click();
  // try with no username
  await page.getByPlaceholder("Enter username").click();
  await page
    .getByPlaceholder("Enter username")
    // try with valid username
    .fill("daniela_dedona@brown.edu");
  await page.getByLabel("Login").click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // switch to verbose mode
    .fill("mode verbose");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // load 1st file
    .fill("load_file exampleCSV1.csv");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  // switch to brief mode
  await page.getByPlaceholder("Enter command here, e.g. -").fill("mode brief");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  // view
  await page.getByPlaceholder("Enter command here, e.g. -").fill("view");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // switch to verbose mode
    .fill("mode verbose");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  // view
  await page.getByPlaceholder("Enter command here, e.g. -").fill("view");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  // search with no commands -> "Invalid number of arguments. Please either <column name/index> <search value> or just <search value>."
  await page.getByPlaceholder("Enter command here, e.g. -").fill("search");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // valid search
    .fill("search 1 The");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // valid search
    .fill("search 1 song");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // valid search
    .fill("search 5 coding");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // load second file
    .fill("load_file exampleCSV2.csv");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  // view
  await page.getByPlaceholder("Enter command here, e.g. -").fill("view");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  // switch to brief mode
  await page.getByPlaceholder("Enter command here, e.g. -").fill("mode brief");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // valid search
    .fill("search Age 30");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // swithc to verbose mode
    .fill("mode verbose");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // valid seatch
    .fill("search Country Canada");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // load 3rd file
    .fill("load_file exampleCSV3.csv");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // valid search
    .fill("search Product Orange");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // valid search
    .fill("search Quantity 10");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // load file with no headers
    .fill("load_file noHeader.csv");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  // switch to brief mode
  await page.getByPlaceholder("Enter command here, e.g. -").fill("mode brief");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // valid search
    .fill("search 1 col_1_row_1");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // search -> "No matching rows found.""
    .fill("search 1 searchValueThatDoesntExist");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // switch to verbose mode
    .fill("mode verbose");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page
    .getByPlaceholder("Enter command here, e.g. -")
    // load file with 20 columns
    .fill("load_file wideCSV.csv");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  // valid search
  await page.getByPlaceholder("Enter command here, e.g. -").fill("search 1 1");
  await page.getByRole("button", { name: "Submit" }).click();
  // sign out
  await page.getByLabel("Sign Out").click();
  await page.getByPlaceholder("Enter username").click();
  await page
    .getByPlaceholder("Enter username")
    // sign back in
    .fill("daniela_dedona@brown.edu");
  await page.getByLabel("Login").click();
  await page.getByPlaceholder("Enter command here, e.g. -").click();
  await page.getByPlaceholder("Enter command here, e.g. -").fill("view");
  // view based on old data
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByLabel("Sign Out").click();
});
