import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Buscar', { exact: true }).click();
  await page.getByLabel('Buscar', { exact: true }).fill('facebook');
  await page.getByRole('link', { name: 'Facebook - Inicia sesión o' }).click();
  await page.goto('https://www.google.com/search?q=facebook&sca_esv=6917f8fced87079d&source=hp&ei=n5jfZeHYHNzU1sQP-eeaiAE&iflsig=ANes7DEAAAAAZd-mrzKX8qiwKuMe2NiKd4ze3WsO1sP5&ved=0ahUKEwihpN308M6EAxVcqpUCHfmzBhEQ4dUDCA0&uact=5&oq=facebook&gs_lp=Egdnd3Mtd2l6IghmYWNlYm9vazIUEC4YgAQYsQMYgwEYyQMYxwEY0QMyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIOEAAYgAQYigUYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBiKBRiSAzILEAAYgAQYsQMYgwFI1RdQ8g5YkhZwAXgAkAEAmAFRoAHrBKoBATi4AQPIAQD4AQGYAgmgAo8FqAIKwgIQEAAYAxiPARjlAhjqAhiMA8ICEBAuGAMYjwEY5QIY6gIYjAPCAhEQLhiABBixAxiDARjHARjRA8ICCBAAGIAEGLEDwgIOEC4YgAQYsQMYxwEY0QPCAgUQABiABMICDhAuGIAEGIoFGLEDGIMBwgILEC4YgAQYsQMYgwGYAwaSBwE5&sclient=gws-wiz');
  await page.getByRole('combobox', { name: 'Buscar' }).click({
    clickCount: 3
  });
  await page.goto('https://savat.ar/');
});