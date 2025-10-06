import { test as setup, expect } from '@playwright/test';
import { testData } from '../utils/testData';

  const username = testData.username;
  const password = testData.password;

setup('Setup auth state', async ({ page }) => {
  await page.goto('/login');
  await page.getByTestId('username-field').fill(username);
  await page.getByTestId('password-field').fill(password);
  await page.getByTestId('login-button').click();

  await page.goto('/issues');
  await expect(page.getByTestId('ring-loader')).not.toBeVisible();
  await expect(page.getByTestId('createIssueButton')).toBeVisible({ timeout: 5000 });

  await page.context().storageState({ path: 'playwright/.auth/storageState.json' });
});
