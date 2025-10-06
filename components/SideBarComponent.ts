/**
 * Represents the navigation sidebar component.
 * This class provides methods to interact with all sidebar buttons.
 */

import { type Page, type Locator } from "@playwright/test"

interface navButtons {
    name: string;
    locator: Locator;
    url: string;
}

interface dropdownButtons {
    name: string;
    locator: Locator;
}

export class SideBarComponent {
    readonly page: Page;
    readonly allNavButtons: navButtons[];
    readonly allDropdownButtons: dropdownButtons[];
    readonly navBar: Locator;
    readonly collapseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navBar = page.getByTestId('navigation-bar');
        this.collapseButton = page.getByTestId('ring-link collapse-sidebar-button-button');

        //upper nav - goto new page buttons ring-link dashboard-button
        this.allNavButtons = [
            { name: "App Logo", locator: page.getByTestId("ring-link application-logo"), url: '/dashboard' },
            { name: "Issues", locator: page.getByTestId("ring-link issues-button"), url: '/issues' },
            { name: "Dashboards", locator: page.getByTestId("ring-link dashboard-button"), url: '/dashboard' },
            { name: "Agile Boards", locator: page.getByTestId("ring-link agile-boards-button"), url: '/agiles' },
            { name: "Reports", locator: page.getByTestId("ring-link reports-button"), url: '/reports' },
            { name: "Projects", locator: page.getByTestId("ring-link projects-button"), url: '/projects' },
            { name: "Knowledge Base", locator: page.getByTestId("ring-link knowledge-base-button"), url: '/articles' },
            { name: "Timesheets", locator: page.getByTestId("ring-link timesheets-button"), url: '/timesheets' },
            { name: "Gantt Charts", locator: page.getByTestId("ring-link gantt-button"), url: '/gantt-charts' },
        ];

        //bottom nav - dropdown buttons
        this.allDropdownButtons = [
            { name: 'Create', locator: page.getByTestId('ring-dropdown create') },
            { name: 'Administration', locator: page.getByTestId('ring-dropdown administration') },
            { name: 'Help', locator: page.getByTestId('ring-dropdown help') },
            { name: 'Notifications', locator: page.getByTestId('ring-dropdown notification-center') },
            { name: 'UserProfile', locator: page.getByTestId('ring-dropdown ring-profile') },
        ]
    }

    async clickNavButton(buttonName: string) {
        const button = this.allNavButtons.find(b => b.name === buttonName);
        if (button) {
            await button.locator.click();
        } else {
            throw new Error(`Navigation Button with name "${buttonName}" not found`);
        }
    }

    async clickDropdownButton(buttonName: string) {
        const button = this.allDropdownButtons.find(b => b.name === buttonName);
        if (button) {
            await button.locator.click();
        } else {
            throw new Error(`Dropdown Button with name "${buttonName}" not found`);
        }
    }

    getAllNavButtons() {
        return this.allNavButtons;
    }

    getAllDropdownButtons() {
        return this.allDropdownButtons;
    }

}