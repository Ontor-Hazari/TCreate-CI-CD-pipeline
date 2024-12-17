import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stage.portal.denowatts.com/signin');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('ontor@qaharbor.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
});