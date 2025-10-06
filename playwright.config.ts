import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from '@playwright/test';

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
      },
    },
    {
      name: 'youtrack-tests',
      testMatch: /.*\/youtrack\/.*\.spec\.ts/,
      use: {
        storageState: 'playwright/.auth/storageState.json',
      },
      dependencies: ['setup'],
    },
  ],

  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  testIgnore: '**/.*',
});
