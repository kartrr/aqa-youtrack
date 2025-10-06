import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class IssuesPage extends BasePage {
    readonly createIssueButton: Locator;
    readonly pageURL = '/issues';

    constructor(page: Page) {
        super(page);
        this.createIssueButton = page.getByTestId('createIssueButton');
    }

    async waitForReady() {
        await expect(this.loader).not.toBeVisible();
        await this.createIssueButton.waitFor({ state: 'visible' });
    }

    async gotoPageUrl() {
        await this.page.goto(this.pageURL);
    }
}