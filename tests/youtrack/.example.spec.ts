import { test, expect } from "@playwright/test";
import { stepWithScreenshot } from "../utils/helpers";
import { IssuesPage } from "../../pages/IssuesPage";

test.describe('Issue page tests', () => {
    let issuesPage: IssuesPage;

    test.beforeEach(async ({ page }) => {
        issuesPage = new IssuesPage(page);
        await issuesPage.gotoPageUrl();
        await issuesPage.waitForReady();
    });

    test('Check if SideBar is visible', async ({ page }, testInfo) => {
        await stepWithScreenshot('Check if Navigation Bar is visible', issuesPage.sideBar.navBar, page, testInfo, async () => {
            await expect(issuesPage.sideBar.navBar).toBeVisible();
        });
    });

    test('Check if all SideBar Navigation buttons are visible', async ({ page }, testInfo) => {
        for (const button of issuesPage.sideBar.getAllNavButtons()) {
            await stepWithScreenshot(`${button.name} button is visible`, button.locator, page, testInfo, async () => {
                await expect(button.locator).toBeVisible();
            });
        }
    });

    test('Check if all SideBar Dropdown buttons are visible', async ({ page }, testInfo) => {
        for (const button of issuesPage.sideBar.getAllDropdownButtons()) {
            await stepWithScreenshot(`${button.name} button is visible`, button.locator, page, testInfo, async () => {
                await expect(button.locator).toBeVisible();
            });
        }
    });
});