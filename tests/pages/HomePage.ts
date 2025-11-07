import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

//import { BasePage } from "./BasePage";


export class HomePage extends BasePage {
  readonly loginLink: Locator;
  readonly registerLink: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.loginLink = page.locator("a[href='/login']");
    this.registerLink = page.locator("a[href='/register']");
    this.searchBox = page.locator("#small-searchterms");
    this.searchButton = page.locator("input[type='submit'][value='Search']");
  }

  async navigate() {
    await this.goto("https://demowebshop.tricentis.com/");
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async searchProduct(productName: string) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }
}
