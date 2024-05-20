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
} from "./spec";

test.beforeAll("strapiStatus", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const response = await page.request.get(url);
  await expect(response).toBeOK();
  await page.goto(url, { waitUntil: "commit" });
  await expect(page.getByText("The server is running")).toBeVisible();
});

test.describe("strapi", () => {
  test.describe("blogs", blogsQueries);
  test.describe("brands", brandsQueries);
  test.describe("events", eventsQueries);
  test.describe("homes", homeQueries);
  test.describe("queries", layoutsQueries);
  test.describe("pages", pagesQueries);
  test.describe("posts", postsQueries);
  test.describe("race results", raceResultsQueries);
  test.describe("resources", resourcesQueries);
  test.describe("shop", shopQueries);
  test.describe("users", usersQueries);
});
