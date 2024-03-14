import { test, expect } from "@playwright/test";
import url from "../config/strapiUrl";
import { chromium } from "playwright";
import {
  blogsQueries,
  brandsQueries,
  eventsQueries,
  homeQueries,
  layoutsQueries,
  pagesQueries,
  postsQueries,
  raceResultsQueries,
  resourcesQueries,
  shopQueries,
  usersQueries,
} from "./Tests";

test.beforeAll("strapiStatus", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const response = await page.request.get(url);
  await expect(response).toBeOK();
  await page.goto(url);
  await expect(page.getByText("The server is running")).toBeVisible();
});

test.describe(blogsQueries);
test.describe(brandsQueries);
test.describe(eventsQueries);
test.describe(homeQueries);
test.describe(layoutsQueries);
test.describe(pagesQueries);
test.describe(postsQueries);
test.describe(raceResultsQueries);
test.describe(resourcesQueries);
test.describe(shopQueries);
test.describe(usersQueries);
