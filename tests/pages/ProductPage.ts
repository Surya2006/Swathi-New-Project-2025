import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  readonly addToCartButton: Locator;
  readonly successBar: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    super(page);
    this.addToCartButton = page.locator("input[value='Add to cart']");
    this.successBar = page.locator(".bar-notification.success");
    this.shoppingCartLink = page.locator("a[href='/cart']");
  }

  async addProductToCart() {
    await this.addToCartButton.first().click();
  }

  async verifyAddedToCart() {
    await expect(this.successBar).toBeVisible();
    await expect(this.successBar).toContainText("The product has been added to your shopping cart");
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}
