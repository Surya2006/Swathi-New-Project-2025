import { Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectGender(gender: 'Male' | 'Female') {
    await this.page.getByRole('radio', { name: gender }).check();
  }

  async enterFirstName(firstName: string) {
    await this.page.getByRole('textbox', { name: 'First name:' }).fill(firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.getByRole('textbox', { name: 'Last name:' }).fill(lastName);
  }

  async enterEmail(email: string) {
    await this.page.getByRole('textbox', { name: 'Email:' }).fill(email);
  }

  async enterPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Password:', exact: true }).fill(password);
  }

  async confirmPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Confirm password:' }).fill(password);
  }

  async clickRegisterButton() {
    await this.page.getByRole('button', { name: 'Register' }).click();
  }

  async clickContinueButton() {
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async logout() {
    await this.page.getByRole('link', { name: 'Log out' }).click();
  }

  async registerUser(user: {
    gender: 'Male' | 'Female';
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    await this.selectGender(user.gender);
    await this.enterFirstName(user.firstName);
    await this.enterLastName(user.lastName);
    await this.enterEmail(user.email);
    await this.enterPassword(user.password);
    await this.confirmPassword(user.password);
    await this.clickRegisterButton();
    await this.clickContinueButton();
  }
}
