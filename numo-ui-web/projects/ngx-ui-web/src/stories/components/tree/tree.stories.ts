import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { TreeModule } from "primeng/tree";
import description from "./tree.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";
import { TreeDragDropService, TreeNode } from "primeng/api";
import { TreeComponent } from "./tree.component";

const meta: Meta = {
    title: "Components/Tree",
    component: TreeComponent,
    decorators: [
        moduleMetadata({
            imports: [
                TreeModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
                InputSwitchModule,
                TreeComponent,
            ],
            providers:[TreeDragDropService]
        }),
    ],
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const basic: Story = {
    args: {
        files: [
            {
                key: "0",
                label: "Documents",
                data: "Documents Folder",
                icon: "pi pi-fw pi-inbox",
                children: [
                    {
                        key: "0-0",
                        label: "Work",
                        data: "Work Folder",
                        icon: "pi pi-fw pi-cog",
                        children: [
                            {
                                key: "0-0-0",
                                label: "Expenses.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Expenses Document",
                            },
                            {
                                key: "0-0-1",
                                label: "Resume.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Resume Document",
                            },
                        ],
                    },
                    {
                        key: "0-1",
                        label: "Home",
                        data: "Home Folder",
                        icon: "pi pi-fw pi-home",
                        children: [
                            {
                                key: "0-1-0",
                                label: "Invoices.txt",
                                icon: "pi pi-fw pi-file",
                                data: "Invoices for this month",
                            },
                        ],
                    },
                ],
            },
            {
                key: "1",
                label: "Events",
                data: "Events Folder",
                icon: "pi pi-fw pi-calendar",
                children: [
                    {
                        key: "1-0",
                        label: "Meeting",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Meeting",
                    },
                    {
                        key: "1-1",
                        label: "Product Launch",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Product Launch",
                    },
                    {
                        key: "1-2",
                        label: "Report Review",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Report Review",
                    },
                ],
            },
            {
                key: "2",
                label: "Movies",
                data: "Movies Folder",
                icon: "pi pi-fw pi-star-fill",
                children: [
                    {
                        key: "2-0",
                        icon: "pi pi-fw pi-star-fill",
                        label: "Al Pacino",
                        data: "Pacino Movies",
                        children: [
                            {
                                key: "2-0-0",
                                label: "Scarface",
                                icon: "pi pi-fw pi-video",
                                data: "Scarface Movie",
                            },
                            {
                                key: "2-0-1",
                                label: "Serpico",
                                icon: "pi pi-fw pi-video",
                                data: "Serpico Movie",
                            },
                        ],
                    },
                    {
                        key: "2-1",
                        label: "Robert De Niro",
                        icon: "pi pi-fw pi-star-fill",
                        data: "De Niro Movies",
                        children: [
                            {
                                key: "2-1-0",
                                label: "Goodfellas",
                                icon: "pi pi-fw pi-video",
                                data: "Goodfellas Movie",
                            },
                            {
                                key: "2-1-1",
                                label: "Untouchables",
                                icon: "pi pi-fw pi-video",
                                data: "Untouchables Movie",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tree class="w-full md:w-30rem" [value]="files" />`,
    }),
};

export const controlled: Story = {
    args: {
        files: [
            {
                key: "0",
                label: "Documents",
                data: "Documents Folder",
                icon: "pi pi-fw pi-inbox",
                children: [
                    {
                        key: "0-0",
                        label: "Work",
                        data: "Work Folder",
                        icon: "pi pi-fw pi-cog",
                        children: [
                            {
                                key: "0-0-0",
                                label: "Expenses.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Expenses Document",
                            },
                            {
                                key: "0-0-1",
                                label: "Resume.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Resume Document",
                            },
                        ],
                    },
                    {
                        key: "0-1",
                        label: "Home",
                        data: "Home Folder",
                        icon: "pi pi-fw pi-home",
                        children: [
                            {
                                key: "0-1-0",
                                label: "Invoices.txt",
                                icon: "pi pi-fw pi-file",
                                data: "Invoices for this month",
                            },
                        ],
                    },
                ],
            },
            {
                key: "1",
                label: "Events",
                data: "Events Folder",
                icon: "pi pi-fw pi-calendar",
                children: [
                    {
                        key: "1-0",
                        label: "Meeting",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Meeting",
                    },
                    {
                        key: "1-1",
                        label: "Product Launch",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Product Launch",
                    },
                    {
                        key: "1-2",
                        label: "Report Review",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Report Review",
                    },
                ],
            },
            {
                key: "2",
                label: "Movies",
                data: "Movies Folder",
                icon: "pi pi-fw pi-star-fill",
                children: [
                    {
                        key: "2-0",
                        icon: "pi pi-fw pi-star-fill",
                        label: "Al Pacino",
                        data: "Pacino Movies",
                        children: [
                            {
                                key: "2-0-0",
                                label: "Scarface",
                                icon: "pi pi-fw pi-video",
                                data: "Scarface Movie",
                            },
                            {
                                key: "2-0-1",
                                label: "Serpico",
                                icon: "pi pi-fw pi-video",
                                data: "Serpico Movie",
                            },
                        ],
                    },
                    {
                        key: "2-1",
                        label: "Robert De Niro",
                        icon: "pi pi-fw pi-star-fill",
                        data: "De Niro Movies",
                        children: [
                            {
                                key: "2-1-0",
                                label: "Goodfellas",
                                icon: "pi pi-fw pi-video",
                                data: "Goodfellas Movie",
                            },
                            {
                                key: "2-1-1",
                                label: "Untouchables",
                                icon: "pi pi-fw pi-video",
                                data: "Untouchables Movie",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
            expandAll() {
                args["files"].forEach((node: any) => {
                    expandRecursive(node, true);
                });
            },
            collapseAll() {
                args["files"].forEach((node: any) => {
                    expandRecursive(node, false);
                });
            },
        },
        template: `<div class="mb-3">
    <p-button 
        icon="pi pi-plus" 
        label="Expand all" 
        (onClick)="expandAll()" 
        class="mr-2" />
    <p-button 
        icon="pi pi-minus" 
        label="Collapse all" 
        (onClick)="collapseAll()" />
</div>
<p-tree [value]="files" class="w-full md:w-30rem" />`,
    }),
};
export const selection: Story = {
    args: {
        files: [
            {
                key: "0",
                label: "Documents",
                data: "Documents Folder",
                icon: "pi pi-fw pi-inbox",
                children: [
                    {
                        key: "0-0",
                        label: "Work",
                        data: "Work Folder",
                        icon: "pi pi-fw pi-cog",
                        children: [
                            {
                                key: "0-0-0",
                                label: "Expenses.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Expenses Document",
                            },
                            {
                                key: "0-0-1",
                                label: "Resume.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Resume Document",
                            },
                        ],
                    },
                    {
                        key: "0-1",
                        label: "Home",
                        data: "Home Folder",
                        icon: "pi pi-fw pi-home",
                        children: [
                            {
                                key: "0-1-0",
                                label: "Invoices.txt",
                                icon: "pi pi-fw pi-file",
                                data: "Invoices for this month",
                            },
                        ],
                    },
                ],
            },
            {
                key: "1",
                label: "Events",
                data: "Events Folder",
                icon: "pi pi-fw pi-calendar",
                children: [
                    {
                        key: "1-0",
                        label: "Meeting",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Meeting",
                    },
                    {
                        key: "1-1",
                        label: "Product Launch",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Product Launch",
                    },
                    {
                        key: "1-2",
                        label: "Report Review",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Report Review",
                    },
                ],
            },
            {
                key: "2",
                label: "Movies",
                data: "Movies Folder",
                icon: "pi pi-fw pi-star-fill",
                children: [
                    {
                        key: "2-0",
                        icon: "pi pi-fw pi-star-fill",
                        label: "Al Pacino",
                        data: "Pacino Movies",
                        children: [
                            {
                                key: "2-0-0",
                                label: "Scarface",
                                icon: "pi pi-fw pi-video",
                                data: "Scarface Movie",
                            },
                            {
                                key: "2-0-1",
                                label: "Serpico",
                                icon: "pi pi-fw pi-video",
                                data: "Serpico Movie",
                            },
                        ],
                    },
                    {
                        key: "2-1",
                        label: "Robert De Niro",
                        icon: "pi pi-fw pi-star-fill",
                        data: "De Niro Movies",
                        children: [
                            {
                                key: "2-1-0",
                                label: "Goodfellas",
                                icon: "pi pi-fw pi-video",
                                data: "Goodfellas Movie",
                            },
                            {
                                key: "2-1-1",
                                label: "Untouchables",
                                icon: "pi pi-fw pi-video",
                                data: "Untouchables Movie",
                            },
                        ],
                    },
                ],
            },
        ],
        selectedFile: null,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tree 
    [value]="files" 
    class="w-full md:w-30rem" 
    selectionMode="single" 
    [(selection)]="selectedFile" />`,
    }),
};
export const multiple: Story = {
    args: {
        files: [
            {
                key: "0",
                label: "Documents",
                data: "Documents Folder",
                icon: "pi pi-fw pi-inbox",

                children: [
                    {
                        key: "0-0",
                        label: "Work",
                        data: "Work Folder",
                        icon: "pi pi-fw pi-cog",

                        children: [
                            {
                                key: "0-0-0",
                                label: "Expenses.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Expenses Document",
                            },
                            {
                                key: "0-0-1",
                                label: "Resume.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Resume Document",
                            },
                        ],
                    },
                    {
                        key: "0-1",
                        label: "Home",
                        data: "Home Folder",
                        icon: "pi pi-fw pi-home",

                        children: [
                            {
                                key: "0-1-0",
                                label: "Invoices.txt",
                                icon: "pi pi-fw pi-file",
                                data: "Invoices for this month",
                            },
                        ],
                    },
                ],

                style: "--p-focus-ring-color: var(--primary-color)",
            },
            {
                key: "1",
                label: "Events",
                data: "Events Folder",
                icon: "pi pi-fw pi-calendar",

                children: [
                    {
                        key: "1-0",
                        label: "Meeting",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Meeting",
                    },
                    {
                        key: "1-1",
                        label: "Product Launch",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Product Launch",
                    },
                    {
                        key: "1-2",
                        label: "Report Review",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Report Review",
                    },
                ],
            },
            {
                key: "2",
                label: "Movies",
                data: "Movies Folder",
                icon: "pi pi-fw pi-star-fill",

                children: [
                    {
                        key: "2-0",
                        icon: "pi pi-fw pi-star-fill",
                        label: "Al Pacino",
                        data: "Pacino Movies",

                        children: [
                            {
                                key: "2-0-0",
                                label: "Scarface",
                                icon: "pi pi-fw pi-video",
                                data: "Scarface Movie",
                            },
                            {
                                key: "2-0-1",
                                label: "Serpico",
                                icon: "pi pi-fw pi-video",
                                data: "Serpico Movie",
                            },
                        ],
                    },
                    {
                        key: "2-1",
                        label: "Robert De Niro",
                        icon: "pi pi-fw pi-star-fill",
                        data: "De Niro Movies",

                        children: [
                            {
                                key: "2-1-0",
                                label: "Goodfellas",
                                icon: "pi pi-fw pi-video",
                                data: "Goodfellas Movie",
                            },
                            {
                                key: "2-1-1",
                                label: "Untouchables",
                                icon: "pi pi-fw pi-video",
                                data: "Untouchables Movie",
                            },
                        ],
                    },
                ],
            },
        ],
        selectedFile: null,
        metaKeySelection: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="flex align-items-center mb-4 gap-2">
    <p-inputSwitch inputId="input-metakey" [(ngModel)]="metaKeySelection" />
    <label for="input-metakey">MetaKey</label>
</div>
<p-tree 
    [metaKeySelection]="metaKeySelection" 
    [value]="files" 
    class="w-full md:w-30rem" 
    selectionMode="multiple" 
    [(selection)]="selectedFiles" />`,
    }),
};
export const checkbox: Story = {
    args: {
        files: [
            {
                key: "0",
                label: "Documents",
                data: "Documents Folder",
                icon: "pi pi-fw pi-inbox",

                children: [
                    {
                        key: "0-0",
                        label: "Work",
                        data: "Work Folder",
                        icon: "pi pi-fw pi-cog",

                        children: [
                            {
                                key: "0-0-0",
                                label: "Expenses.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Expenses Document",
                            },
                            {
                                key: "0-0-1",
                                label: "Resume.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Resume Document",
                            },
                        ],
                    },
                    {
                        key: "0-1",
                        label: "Home",
                        data: "Home Folder",
                        icon: "pi pi-fw pi-home",

                        children: [
                            {
                                key: "0-1-0",
                                label: "Invoices.txt",
                                icon: "pi pi-fw pi-file",
                                data: "Invoices for this month",
                            },
                        ],
                    },
                ],

                style: "--p-focus-ring-color: var(--primary-color)",
            },
            {
                key: "1",
                label: "Events",
                data: "Events Folder",
                icon: "pi pi-fw pi-calendar",

                children: [
                    {
                        key: "1-0",
                        label: "Meeting",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Meeting",
                    },
                    {
                        key: "1-1",
                        label: "Product Launch",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Product Launch",
                    },
                    {
                        key: "1-2",
                        label: "Report Review",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Report Review",
                    },
                ],
            },
            {
                key: "2",
                label: "Movies",
                data: "Movies Folder",
                icon: "pi pi-fw pi-star-fill",

                children: [
                    {
                        key: "2-0",
                        icon: "pi pi-fw pi-star-fill",
                        label: "Al Pacino",
                        data: "Pacino Movies",

                        children: [
                            {
                                key: "2-0-0",
                                label: "Scarface",
                                icon: "pi pi-fw pi-video",
                                data: "Scarface Movie",
                            },
                            {
                                key: "2-0-1",
                                label: "Serpico",
                                icon: "pi pi-fw pi-video",
                                data: "Serpico Movie",
                            },
                        ],
                    },
                    {
                        key: "2-1",
                        label: "Robert De Niro",
                        icon: "pi pi-fw pi-star-fill",
                        data: "De Niro Movies",

                        children: [
                            {
                                key: "2-1-0",
                                label: "Goodfellas",
                                icon: "pi pi-fw pi-video",
                                data: "Goodfellas Movie",
                            },
                            {
                                key: "2-1-1",
                                label: "Untouchables",
                                icon: "pi pi-fw pi-video",
                                data: "Untouchables Movie",
                            },
                        ],
                    },
                ],
            },
        ],
        selectedFile: null,
        metaKeySelection: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tree 
    [value]="files" 
    selectionMode="checkbox" 
    class="w-full md:w-30rem" 
    [(selection)]="selectedFiles" />`,
    }),
};
export const events: Story = {
    args: {
        files: [
            {
                key: "0",
                label: "Documents",
                data: "Documents Folder",
                icon: "pi pi-fw pi-inbox",

                children: [
                    {
                        key: "0-0",
                        label: "Work",
                        data: "Work Folder",
                        icon: "pi pi-fw pi-cog",

                        children: [
                            {
                                key: "0-0-0",
                                label: "Expenses.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Expenses Document",
                            },
                            {
                                key: "0-0-1",
                                label: "Resume.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Resume Document",
                            },
                        ],
                    },
                    {
                        key: "0-1",
                        label: "Home",
                        data: "Home Folder",
                        icon: "pi pi-fw pi-home",

                        children: [
                            {
                                key: "0-1-0",
                                label: "Invoices.txt",
                                icon: "pi pi-fw pi-file",
                                data: "Invoices for this month",
                            },
                        ],
                    },
                ],

                style: "--p-focus-ring-color: var(--primary-color)",
            },
            {
                key: "1",
                label: "Events",
                data: "Events Folder",
                icon: "pi pi-fw pi-calendar",

                children: [
                    {
                        key: "1-0",
                        label: "Meeting",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Meeting",
                    },
                    {
                        key: "1-1",
                        label: "Product Launch",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Product Launch",
                    },
                    {
                        key: "1-2",
                        label: "Report Review",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Report Review",
                    },
                ],
            },
            {
                key: "2",
                label: "Movies",
                data: "Movies Folder",
                icon: "pi pi-fw pi-star-fill",

                children: [
                    {
                        key: "2-0",
                        icon: "pi pi-fw pi-star-fill",
                        label: "Al Pacino",
                        data: "Pacino Movies",

                        children: [
                            {
                                key: "2-0-0",
                                label: "Scarface",
                                icon: "pi pi-fw pi-video",
                                data: "Scarface Movie",
                            },
                            {
                                key: "2-0-1",
                                label: "Serpico",
                                icon: "pi pi-fw pi-video",
                                data: "Serpico Movie",
                            },
                        ],
                    },
                    {
                        key: "2-1",
                        label: "Robert De Niro",
                        icon: "pi pi-fw pi-star-fill",
                        data: "De Niro Movies",

                        children: [
                            {
                                key: "2-1-0",
                                label: "Goodfellas",
                                icon: "pi pi-fw pi-video",
                                data: "Goodfellas Movie",
                            },
                            {
                                key: "2-1-1",
                                label: "Untouchables",
                                icon: "pi pi-fw pi-video",
                                data: "Untouchables Movie",
                            },
                        ],
                    },
                ],
            },
        ],
        selectedFile: null,
        events: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tree-wrapper 
    [files]="files"  
    class="w-full md:w-30rem"
    [events]="events" 
    [selectedFile]="selectedFile" />`,
    }),
};
export const lazyLoading: Story = {
    args: {
        files: [
            {
                key: "0",
                label: "Documents",
                data: "Documents Folder",
                icon: "pi pi-fw pi-inbox",

                children: [
                    {
                        key: "0-0",
                        label: "Work",
                        data: "Work Folder",
                        icon: "pi pi-fw pi-cog",

                        children: [
                            {
                                key: "0-0-0",
                                label: "Expenses.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Expenses Document",
                            },
                            {
                                key: "0-0-1",
                                label: "Resume.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Resume Document",
                            },
                        ],
                    },
                    {
                        key: "0-1",
                        label: "Home",
                        data: "Home Folder",
                        icon: "pi pi-fw pi-home",

                        children: [
                            {
                                key: "0-1-0",
                                label: "Invoices.txt",
                                icon: "pi pi-fw pi-file",
                                data: "Invoices for this month",
                            },
                        ],
                    },
                ],

                style: "--p-focus-ring-color: var(--primary-color)",
            },
            {
                key: "1",
                label: "Events",
                data: "Events Folder",
                icon: "pi pi-fw pi-calendar",

                children: [
                    {
                        key: "1-0",
                        label: "Meeting",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Meeting",
                    },
                    {
                        key: "1-1",
                        label: "Product Launch",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Product Launch",
                    },
                    {
                        key: "1-2",
                        label: "Report Review",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Report Review",
                    },
                ],
            },
            {
                key: "2",
                label: "Movies",
                data: "Movies Folder",
                icon: "pi pi-fw pi-star-fill",

                children: [
                    {
                        key: "2-0",
                        icon: "pi pi-fw pi-star-fill",
                        label: "Al Pacino",
                        data: "Pacino Movies",

                        children: [
                            {
                                key: "2-0-0",
                                label: "Scarface",
                                icon: "pi pi-fw pi-video",
                                data: "Scarface Movie",
                            },
                            {
                                key: "2-0-1",
                                label: "Serpico",
                                icon: "pi pi-fw pi-video",
                                data: "Serpico Movie",
                            },
                        ],
                    },
                    {
                        key: "2-1",
                        label: "Robert De Niro",
                        icon: "pi pi-fw pi-star-fill",
                        data: "De Niro Movies",

                        children: [
                            {
                                key: "2-1-0",
                                label: "Goodfellas",
                                icon: "pi pi-fw pi-video",
                                data: "Goodfellas Movie",
                            },
                            {
                                key: "2-1-1",
                                label: "Untouchables",
                                icon: "pi pi-fw pi-video",
                                data: "Untouchables Movie",
                            },
                        ],
                    },
                ],
            },
        ],
        selectedFile: null,
        lazyLoading: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tree-wrapper 
    [files]="files"  
    [lazyLoading]="lazyLoading"
    class="w-full md:w-30rem" 
    [selectedFile]="selectedFile" />`,
    }),
};
export const virtualScroll: Story = {
    args: {
        files: [
            {
                key: "0",
                label: "Documents",
                data: "Documents Folder",
                icon: "pi pi-fw pi-inbox",

                children: [
                    {
                        key: "0-0",
                        label: "Work",
                        data: "Work Folder",
                        icon: "pi pi-fw pi-cog",

                        children: [
                            {
                                key: "0-0-0",
                                label: "Expenses.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Expenses Document",
                            },
                            {
                                key: "0-0-1",
                                label: "Resume.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Resume Document",
                            },
                        ],
                    },
                    {
                        key: "0-1",
                        label: "Home",
                        data: "Home Folder",
                        icon: "pi pi-fw pi-home",

                        children: [
                            {
                                key: "0-1-0",
                                label: "Invoices.txt",
                                icon: "pi pi-fw pi-file",
                                data: "Invoices for this month",
                            },
                        ],
                    },
                ],

                style: "--p-focus-ring-color: var(--primary-color)",
            },
            {
                key: "1",
                label: "Events",
                data: "Events Folder",
                icon: "pi pi-fw pi-calendar",

                children: [
                    {
                        key: "1-0",
                        label: "Meeting",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Meeting",
                    },
                    {
                        key: "1-1",
                        label: "Product Launch",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Product Launch",
                    },
                    {
                        key: "1-2",
                        label: "Report Review",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Report Review",
                    },
                ],
            },
            {
                key: "2",
                label: "Movies",
                data: "Movies Folder",
                icon: "pi pi-fw pi-star-fill",

                children: [
                    {
                        key: "2-0",
                        icon: "pi pi-fw pi-star-fill",
                        label: "Al Pacino",
                        data: "Pacino Movies",

                        children: [
                            {
                                key: "2-0-0",
                                label: "Scarface",
                                icon: "pi pi-fw pi-video",
                                data: "Scarface Movie",
                            },
                            {
                                key: "2-0-1",
                                label: "Serpico",
                                icon: "pi pi-fw pi-video",
                                data: "Serpico Movie",
                            },
                        ],
                    },
                    {
                        key: "2-1",
                        label: "Robert De Niro",
                        icon: "pi pi-fw pi-star-fill",
                        data: "De Niro Movies",

                        children: [
                            {
                                key: "2-1-0",
                                label: "Goodfellas",
                                icon: "pi pi-fw pi-video",
                                data: "Goodfellas Movie",
                            },
                            {
                                key: "2-1-1",
                                label: "Untouchables",
                                icon: "pi pi-fw pi-video",
                                data: "Untouchables Movie",
                            },
                        ],
                    },
                ],
            },
        ],
        selectedFile: null,
        virtualScroll: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tree-wrapper 
    [files]="files"  
    [virtualScroll]="virtualScroll"
    class="w-full md:w-30rem" 
    [selectedFile]="selectedFile" />`,
    }),
};
export const template: Story = {
    args: {
        nodes: [
            {
                key: "0",
                label: "Introduction",
                children: [
                    {
                        key: "0-0",
                        label: "What is Angular",
                        data: "https://angular.io",
                        type: "url",
                    },
                    {
                        key: "0-1",
                        label: "Getting Started",
                        data: "https://angular.io/guide/setup-local",
                        type: "url",
                    },
                    {
                        key: "0-2",
                        label: "Learn and Explore",
                        data: "https://angular.io/guide/architecture",
                        type: "url",
                    },
                    {
                        key: "0-3",
                        label: "Take a Look",
                        data: "https://angular.io/start",
                        type: "url",
                    },
                ],
            },
            {
                key: "1",
                label: "Components In-Depth",
                children: [
                    {
                        key: "1-0",
                        label: "Component Registration",
                        data: "https://angular.io/guide/component-interaction",
                        type: "url",
                    },
                    {
                        key: "1-1",
                        label: "User Input",
                        data: "https://angular.io/guide/user-input",
                        type: "url",
                    },
                    {
                        key: "1-2",
                        label: "Hooks",
                        data: "https://angular.io/guide/lifecycle-hooks",
                        type: "url",
                    },
                    {
                        key: "1-3",
                        label: "Attribute Directives",
                        data: "https://angular.io/guide/attribute-directives",
                        type: "url",
                    },
                ],
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="card flex justify-content-center">
    <p-tree [value]="nodes" class="w-full md:w-30rem">
        <ng-template let-node pTemplate="url">
            <a [href]="node.data" target="_blank" rel="noopener noreferrer" class="text-700 hover:text-primary">
               {{ node.label }}
            </a>
        </ng-template>
        <ng-template let-node pTemplate="default">
            <b>{{ node.label }}</b>
        </ng-template>
    </p-tree>
</div>`,
    }),
};
export const dragDrop: Story = {
    args: {
        files: [
            {
                key: "0",
                label: "Documents",
                data: "Documents Folder",
                icon: "pi pi-fw pi-inbox",

                children: [
                    {
                        key: "0-0",
                        label: "Work",
                        data: "Work Folder",
                        icon: "pi pi-fw pi-cog",

                        children: [
                            {
                                key: "0-0-0",
                                label: "Expenses.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Expenses Document",
                            },
                            {
                                key: "0-0-1",
                                label: "Resume.doc",
                                icon: "pi pi-fw pi-file",
                                data: "Resume Document",
                            },
                        ],
                    },
                    {
                        key: "0-1",
                        label: "Home",
                        data: "Home Folder",
                        icon: "pi pi-fw pi-home",

                        children: [
                            {
                                key: "0-1-0",
                                label: "Invoices.txt",
                                icon: "pi pi-fw pi-file",
                                data: "Invoices for this month",
                            },
                        ],
                    },
                ],

                style: "--p-focus-ring-color: var(--primary-color)",
            },
            {
                key: "1",
                label: "Events",
                data: "Events Folder",
                icon: "pi pi-fw pi-calendar",

                children: [
                    {
                        key: "1-0",
                        label: "Meeting",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Meeting",
                    },
                    {
                        key: "1-1",
                        label: "Product Launch",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Product Launch",
                    },
                    {
                        key: "1-2",
                        label: "Report Review",
                        icon: "pi pi-fw pi-calendar-plus",
                        data: "Report Review",
                    },
                ],
            },
            {
                key: "2",
                label: "Movies",
                data: "Movies Folder",
                icon: "pi pi-fw pi-star-fill",

                children: [
                    {
                        key: "2-0",
                        icon: "pi pi-fw pi-star-fill",
                        label: "Al Pacino",
                        data: "Pacino Movies",

                        children: [
                            {
                                key: "2-0-0",
                                label: "Scarface",
                                icon: "pi pi-fw pi-video",
                                data: "Scarface Movie",
                            },
                            {
                                key: "2-0-1",
                                label: "Serpico",
                                icon: "pi pi-fw pi-video",
                                data: "Serpico Movie",
                            },
                        ],
                    },
                    {
                        key: "2-1",
                        label: "Robert De Niro",
                        icon: "pi pi-fw pi-star-fill",
                        data: "De Niro Movies",

                        children: [
                            {
                                key: "2-1-0",
                                label: "Goodfellas",
                                icon: "pi pi-fw pi-video",
                                data: "Goodfellas Movie",
                            },
                            {
                                key: "2-1-1",
                                label: "Untouchables",
                                icon: "pi pi-fw pi-video",
                                data: "Untouchables Movie",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="card flex justify-content-center">
    <p-tree 
        class="w-full md:w-30rem" 
        [value]="files" 
        [draggableNodes]="true" 
        [droppableNodes]="true" 
        draggableScope="self" 
        droppableScope="self" />
</div>`,
    }),
};
const expandRecursive = (node: TreeNode, isExpand: boolean) => {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach((childNode) => {
            expandRecursive(childNode, isExpand);
        });
    }
};
