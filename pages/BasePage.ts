/**
 * Base page for reimport to other pages.
 */

import { type Page, type Locator } from '@playwright/test';
import { SideBarComponent } from '../components/SideBarComponent';

export class BasePage {
    readonly page: Page;
    readonly sideBar: SideBarComponent;
    readonly loader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sideBar = new SideBarComponent(page);
        this.loader = page.getByTestId('ring-loader');
    }
}