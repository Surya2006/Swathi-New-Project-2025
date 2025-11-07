import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  readonly billingContinue: Locator;
  readonly shippingContinue: Locator;
  readonly shippingMethodContinue: Locator;
  readonly paymentMethodContinue: Locator;
  readonly paymentInfoContinue: Locator;
  readonly confirmOrderButton: Locator;
  readonly orderConfirmationText: Locator;

  constructor(page: Page) {
    super(page);
    this.billingContinue = page.locator("input[onclick*='Billing.save()']");
    this.shippingContinue = page.locator("input[onclick*='Shipping.save()']");
    this.shippingMethodContinue = page.locator("input[onclick*='ShippingMethod.save()']");
    this.paymentMethodContinue = page.locator("input[onclick*='PaymentMethod.save()']");
    this.paymentInfoContinue = page.locator("input[onclick*='PaymentInfo.save()']");
    this.confirmOrderButton = page.locator("input[onclick*='ConfirmOrder.save()']");
    this.orderConfirmationText = page.locator(".section.order-completed .title strong");
  }

  async completeCheckoutFlow() {
    await this.billingContinue.click();
    await this.shippingContinue.click();
    await this.shippingMethodContinue.click();
    await this.paymentMethodContinue.click();
    await this.paymentInfoContinue.click();
    await this.confirmOrderButton.click();
  }

  async verifyOrderSuccess() {
    await expect(this.orderConfirmationText).toBeVisible();
    await expect(this.orderConfirmationText).toHaveText("Your order has been successfully processed!");
  }
}
