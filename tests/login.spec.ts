import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login tests", () => {

  test("should display error for invalid credentials", async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    await home.navigate();
    await home.clickLogin();

    await login.login("fakeuser@test.com", "wrongpassword");
    await login.assertLoginError();
  });

});
