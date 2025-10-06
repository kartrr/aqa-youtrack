import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from '@playwright/test';

const allureDetail = process.env.ALLURE_DETAIL !== 'false';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://karter.youtrack.cloud',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    //video: 'retain-on-failure',
    testIdAttribute: 'data-test',
    trace: 'off',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*auth\.setup\.ts/,
    },
    {
      name: 'login-tests',
      testMatch: /.*\/login\/.*\.spec\.ts/,
      use: {
        storageState: undefined,
        browserName: 'chromium', 
      },
    },
    {
      name: 'youtrack-tests',
      testMatch: /.*\/youtrack\/.*\.spec\.ts/,
      use: {
        storageState: 'playwright/.auth/storageState.json',
        browserName: 'chromium',
      },
      dependencies: ['setup'],
    },
  ],

  reporter: [
    ['list'],
    ['allure-playwright', {
      detail: allureDetail
    }]
  ],
  testIgnore: '**/.*',
});
