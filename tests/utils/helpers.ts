import { test, type Page, type Locator, type TestInfo } from '@playwright/test';

type StepCallback = () => Promise<void>;

export async function stepWithScreenshot(stepName: string, locator: Locator, page: Page, testInfo: TestInfo, callback: StepCallback) {
  await test.step(stepName, async () => {
    //execute all in callback
    await callback();

    // Make locator screenshot
    const screenshot = await locator.screenshot();

    // Attach screenshot
    testInfo.attach('screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  });
}