import { type Page, type Locator } from '@playwright/test';
import { NewTicketContentComponent } from './NewTicketContentComponent';

export class CreateIssueModalComponent {
    readonly dialog: Locator;
    readonly overlay: Locator;
    readonly content: NewTicketContentComponent; 
    constructor(page: Page) {
        this.dialog = page.getByTestId('ring-island ring-dialog');
        this.overlay = page.getByTestId('ring-dialog-overlay');
        this.content = new NewTicketContentComponent(this.dialog);
    }
}