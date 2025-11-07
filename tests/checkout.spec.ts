import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test.describe("Checkout Process", () => {
  test("should add product to cart and complete checkout", async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await home.navigate();
    await home.searchProduct("computer");

    await product.addProductToCart();
    await product.verifyAddedToCart();
    await product.goToCart();

    await cart.verifyCartNotEmpty();
    await cart.verifyTotalPriceIsDisplayed();
    await cart.updateQuantity(1);

    await cart.proceedToCheckout();

    await checkout.completeCheckoutFlow();
    await checkout.verifyOrderSuccess();
  });
});
