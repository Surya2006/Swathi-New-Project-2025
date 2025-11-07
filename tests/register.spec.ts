/*import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

test('User registration flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const registerPage = new RegisterPage(page);

  await loginPage.navigate();
  await loginPage.clickRegisterLink();

  await registerPage.registerUser({
    gender: 'Female',
    firstName: 'test2',
    lastName: 'sb2',
    email: 'testsb2@gmail.com',
    password: 'testsb12345'
  });

  await registerPage.logout();
});
*/
/*import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { userData } from './data/userData';

test('User registration flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const registerPage = new RegisterPage(page);

  await loginPage.navigate();
  await loginPage.clickRegisterLink();

  await registerPage.registerUser(userData);

  await registerPage.logout();
});

*/

import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { users } from './data/userData';


for (const user of users) {
  test(`User registration for ${user.firstName} ${user.lastName}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);

    await loginPage.navigate();
    await loginPage.clickRegisterLink();

    await registerPage.registerUser(user);

    await registerPage.logout();
  });
}
