import { type Page, type Locator } from '@playwright/test';
import { NewTicketContentComponent } from '../components/NewTicketContentComponent';

export class CreateNewIssuePage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly content: NewTicketContentComponent; 
    
    readonly url = '/newIssue';

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('h1');
        
        this.content = new NewTicketContentComponent(page); 
    }
    
    async goto() {
        await this.page.goto(this.url);
    }
}