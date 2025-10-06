import { type Page, type Locator } from '@playwright/test';

export class NewTicketContentComponent {
    readonly summaryField: Locator;
    readonly descriptionField: Locator;
    readonly submitButton: Locator;

    constructor(parent: Page | Locator) {
        this.summaryField = parent.getByTestId('summary');
        this.descriptionField = parent.getByTestId('editor description');
        this.submitButton = parent.getByTestId('submit-button');
    }

    async fillSummary(text: string) {
        await this.summaryField.fill(text);
    }
    
    async clickSubmitButton() {
        await this.submitButton.click();
    }
}