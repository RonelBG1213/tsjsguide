import { test, expect } from '@playwright/test';

test('form interaction demo', async ({ page }) => {
  // Visit a real or dummy test page with form
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');

  // Fill text input
  await page.fill('#my-text-id', 'Playwright User');

  // Select dropdown option
  await page.locator('//select[@name="my-select"]').selectOption('2');
  // Click checkbox
  await page.click('#my-check-1');

  // Click submit button
  await page.click('//button[text()="Submit"]');

  // Wait for the result page to load
  await expect(page.locator('#message')).toHaveText('Received!');
});