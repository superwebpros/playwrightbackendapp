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
  await page.goto(url);
  await expect(page.getByText("The server is running")).toBeVisible();
});

test.describe('Strapi',blogsQueries);
test.describe('Strapi',brandsQueries);
test.describe('Strapi',eventsQueries);
test.describe('Strapi',homeQueries);
test.describe('Strapi',layoutsQueries);
test.describe('Strapi',pagesQueries);
test.describe('Strapi',postsQueries);
test.describe('Strapi',raceResultsQueries);
test.describe('Strapi',resourcesQueries);
test.describe('Strapi',shopQueries);
test.describe('Strapi',usersQueries);
