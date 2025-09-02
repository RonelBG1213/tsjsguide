import { Page, Locator, expect } from '@playwright/test';
import { formSelectors } from '../selectors/formSelector';


export class FormPage {
  readonly page: Page;
  readonly textInput: Locator;
  readonly dropdown: Locator;
  readonly checkbox: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.textInput = page.locator(formSelectors.textInput);
    this.dropdown = page.locator(formSelectors.dropdown);
    // this.dropdown.highlight; // Uncomment this line to enable Playwright's debug mode for this locator
    this.checkbox = page.locator(formSelectors.checkbox);
    this.submitButton = page.locator(formSelectors.submitButton);
    this.successMessage = page.locator(formSelectors.successMessage);
  }

  goto = async () => {
    await this.page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  }

  fillForm = async (name: string, dropdownValue: string) => {
    await this.textInput.fill(name);
    await this.dropdown.selectOption(dropdownValue);
    await this.checkbox.check();
    await this.page.screenshot({ path: 'form-filled.png', fullPage: true });
  }


  submitForm = async () => {
    await this.submitButton.click();
  }

  verifySubmissionSuccess = async () => {
    await expect(this.successMessage).toHaveText('Received!');
  }

  searchRedditInNewTab = async () => {
    const newPage = await this.page.context().newPage();
    await newPage.goto('https://www.reddit.com/');
  }

  playwrightWebsiteInNewTab = async () => {
    const newPagePlaywright = await this.page.context().newPage();
    await newPagePlaywright.goto('https://playwright.dev/');
    await this.page.bringToFront();
  }

  newlyOpenTab = async () => {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.click('selector-that-opens-new-tab'), 
    ]);
    // interact with the new tab
    await newPage.bringToFront();
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe('https://www.example.com/');
  }
}
