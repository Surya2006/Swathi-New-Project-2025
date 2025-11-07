import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://demowebshop.tricentis.com/login');
  }
//click on registerlink
  async clickRegisterLink() {
    await this.page.getByRole('link', { name: 'Register' }).click();
  }
}
