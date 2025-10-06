import { type Locator, type Page, expect } from '@playwright/test';
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly pageURL = '/login';

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.usernameInput = page.getByTestId('username-field');
        this.passwordInput = page.getByTestId('password-field');
        this.loginButton = page.getByTestId('login-button');
        this.errorMessage = page.getByTestId('error-message');
    }

    async gotoPageUrl() {
        await this.page.goto(this.pageURL);
    }

    async waitForReady() {
        await expect(this.loader).not.toBeVisible();
        await this.usernameInput.waitFor({ state: 'visible' });
        await this.passwordInput.waitFor({ state: 'visible' });
        await this.loginButton.waitFor({ state: 'visible' });
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}