import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging-shop.luckylittlelearners.com/');
  await expect(page.getByText('Here are our picks for you...')).toBeTruthy();
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page.url()).toBe("https://staging-shop.luckylittlelearners.com/");
  await page.getByRole('link', { name: 'Blog 3' }).click();
  await expect(page.url()).toBe("https://luckylittlelearners.com/about-lucky-little-learners/");
  await expect(page.getByText('Hey there! I\'m Angie, owner')).toBeTruthy();
  await page.goto('https://luckylittlelearners.com/about-lucky-little-learners/');
  await page.getByRole('link', { name: 'Shop', exact: true }).click();
  await expect(page.url()).toBe('https://luckylittlelearners.com/about-lucky-little-learners/');
  await page.getByPlaceholder('Search products').fill('Math');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'I WANT UNLIMITED ACCESS 5' }).click();
  const page1 = await page1Promise;
  await expect(page1.url()).toBe('https://luckylittlelearners.lpages.co/all-access-ssb/');
});