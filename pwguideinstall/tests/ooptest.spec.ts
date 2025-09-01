import { test } from '@playwright/test';
import { FormPage } from '../oop/pages/formPage';


let formPage: FormPage;
test('form interaction using OOP and selectors file', async ({ page }) => {
  formPage = new FormPage(page);

  await formPage.goto();
  await formPage.fillForm('Playwright User', '2');
  // await page.pause();
  await formPage.submitForm();
  await formPage.verifySubmissionSuccess();
  await formPage.searchRedditInNewTab();
  await formPage.playwrightWebsiteInNewTab();
});
