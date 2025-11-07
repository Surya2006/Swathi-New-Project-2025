import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";

test.describe("Add To Cart functionality", () => {

  test("should search and add a product to cart", async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);

    await home.navigate();
    await home.searchProduct("computer");

    await product.addProductToCart();
    await product.verifyAddedToCart();

    await product.goToCart();

    // Assert cart contains items
    await page.waitForSelector(".cart-item-row");
  });

});
