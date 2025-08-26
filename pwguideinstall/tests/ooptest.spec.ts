import { test } from '@playwright/test';
import { FormPage } from '../oop/pages/formPage';

test('form interaction using OOP and selectors file', async ({ page }) => {
  const formPage = new FormPage(page);

  await formPage.goto();
  await formPage.fillForm('Playwright User', '2');
  await formPage.submitForm();
  await formPage.verifySubmissionSuccess();
});
