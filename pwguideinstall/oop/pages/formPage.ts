import { Page, Locator , expect} from '@playwright/test';
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
    this.checkbox = page.locator(formSelectors.checkbox);
    this.submitButton = page.locator(formSelectors.submitButton);
    this.successMessage = page.locator(formSelectors.successMessage);
  }

  async goto() {
    await this.page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  }

  async fillForm(name: string, dropdownValue: string) {
    await this.textInput.fill(name);
    await this.dropdown.selectOption(dropdownValue);
    await this.checkbox.check();
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async verifySubmissionSuccess() {
    await expect(this.successMessage).toHaveText('Received!');
  }
}
