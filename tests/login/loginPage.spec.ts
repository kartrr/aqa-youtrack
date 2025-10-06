import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { assertLoggedInAs } from '../utils/authCheck';
import { testData } from '../utils/testData'; 

test.describe('YouTrack Login Page', () => {
  let loginPage: LoginPage;
  
  const validusername = testData.username;
  const validemail = testData.email;
  const validpass = testData.password;

  const wrongpass = 'wrongpass';

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.gotoPageUrl();
    await loginPage.waitForReady();
  });

  test('Should successfully login by username', async ({ page }, testInfo) => {
    await test.step(`Login as ${validusername}`, async () => {
      await loginPage.login(validusername, validpass);
    });
    await test.step('Successful login assertion', async () => {
      await assertLoggedInAs(page, 'testuser');
    });
  });

  test('Should successfully login by email', async ({ page }, testInfo) => {
    await test.step(`Login as ${validemail}`, async () => {
      await loginPage.login(validemail, validpass);
    });

    await test.step('Successful login assertion', async () => {
      await assertLoggedInAs(page, 'testuser');
    });
  });

  test('Should fail login with invalid credentials', async ({ page }, testInfo) => {
    const timestamp = Date.now();
    const invalidUsername = `invaliduser_${timestamp}`;

    await test.step(`Login as ${invalidUsername}`, async () => {
      await loginPage.login(invalidUsername, wrongpass);
    });

    await test.step('Error message should be visible', async () => {
      await expect(loginPage.errorMessage).toBeVisible();
    });

    await test.step('Error message should have a text', async () => {
      await expect(loginPage.errorMessage).toHaveText('Incorrect username or password.');
    });
  });

});
