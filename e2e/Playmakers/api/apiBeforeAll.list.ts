import { test, expect } from "@playwright/test";
import url from "../config/strapiUrl";
import { chromium } from "playwright";
import home from "./home.spec.ts";

test.beforeAll("strapiStatus", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const response = await page.request.get(url);
  await expect(response).toBeOK();
  await page.goto(url);
  await expect(page.getByText("The server is running")).toBeVisible();
});

test.describe(home);
test.describe("Strapi GET queries", () => {
  // test("homes", async ({ request }) => {
  //   const response = await request.get(url + "/api/homes");
  //   await expect(response).toBeOK();
  // });

  test("posts", async ({ request }) => {
    const response = await request.get(url + "/api/article-posts");
    // const bodyJson = await response.json();
    // console.log(bodyJson);
    await expect(response).toBeOK();
  });

  test("pages", async ({ request }) => {
    const response = await request.get(url + "/api/pages");
    await expect(response).toBeOK();
  });

  test("blogs", async ({ request }) => {
    const response = await request.get(url + "/api/blogs");
    await expect(response).toBeOK();
  });

  test("brands", async ({ request }) => {
    const response = await request.get(url + "/api/brands");
    await expect(response).toBeOK();
  });

  test("events", async ({ request }) => {
    const response = await request.get(url + "/api/events");
    await expect(response).toBeOK();
  });

  test("layouts", async ({ request }) => {
    const response = await request.get(url + "/api/layouts");
    await expect(response).toBeOK();
  });

  test("race-results", async ({ request }) => {
    const response = await request.get(url + "/api/race-results");
    await expect(response).toBeOK();
  });

  test("resources", async ({ request }) => {
    const response = await request.get(url + "/api/resources");
    await expect(response).toBeOK();
  });

  test("users", async ({ request }) => {
    const response = await request.get(url + "/api/users");
    await expect(response).not.toBeOK();
  });

  test("shop", async ({ request }) => {
    const response = await request.get(url + "/api/shop");
    await expect(response).toBeOK();
  });
});
