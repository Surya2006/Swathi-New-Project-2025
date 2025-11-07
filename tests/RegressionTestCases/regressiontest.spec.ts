  import { test, expect } from '@playwright/test';

test('Successful signup redirects to login', async ({ page }) => {
  await page.goto('http://localhost:3000/signup.html');


  await page.fill('#signup-email', 'newuser@example.com');
  await page.fill('#signup-password', 'newpass123');
    await page.fill('#signup-confirm', 'newpass123');
  await page.click('button[type="submit"]');

  await expect(page.locator('#signup-message')).toHaveText(/signup successful/i);

  await page.waitForURL('**/login.html');
  
});

test('LPassword mismatch shows error message', async ({ page }) => {
  await page.goto('http://localhost:3000/signup.html');

  await page.fill('#signup-email', 'test@example.com');
  await page.fill('#signup-password', 'abc123');
  await page.fill('#signup-confirm', 'xyz123');
  await page.click('button[type="submit"]');

  await expect(page.locator('#signup-message')).toHaveText(/Passwords do not match/i);
});

