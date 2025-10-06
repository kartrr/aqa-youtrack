import { expect, Page } from '@playwright/test';

export async function assertLoggedInAs(page: Page, username: string) {
  const profile = page.getByTestId('ring-dropdown ring-profile');
  const loader = page.getByTestId('ring-loader');

  await expect(loader).not.toBeVisible();
  await expect(profile).toBeVisible();
  await expect(profile).toHaveAttribute('title', username);
}