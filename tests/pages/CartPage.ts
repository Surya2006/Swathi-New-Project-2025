import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  readonly cartItems: Locator;
  readonly totalPrice: Locator;
  readonly quantityInput: Locator;
  readonly updateButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator(".cart-item-row");
    this.totalPrice = page.locator(".cart-total-right strong");
    this.quantityInput = page.locator("input.qty-input");
    this.updateButton = page.locator("input[name='updatecart']");
    this.checkoutButton = page.locator("#checkout");
  }

  async verifyCartNotEmpty() {
    await expect(this.cartItems).toHaveCountGreaterThan(0);
  }

  async verifyTotalPriceIsDisplayed() {
    await expect(this.totalPrice).toBeVisible();
    const total = await this.totalPrice.textContent();
    console.log("🛍 Total price:", total?.trim());
  }

  async updateQuantity(quantity: number) {
    await this.quantityInput.fill(quantity.toString());
    await this.updateButton.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
