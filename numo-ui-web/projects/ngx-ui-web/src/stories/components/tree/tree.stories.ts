import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata, applicationConfig } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideAnimations } from "@angular/platform-browser/animations";
import { TreeModule } from "primeng/tree";
import { ButtonModule } from "primeng/button";
import { InputSwitchModule } from "primeng/inputswitch";
import { TreeDragDropService, TreeNode } from "primeng/api";
import description from "./tree.description.md";
import { TreeComponent } from "./tree.component";
import { commonFiles, templateNodes } from "./tree-data";

const expandRecursive = (node: TreeNode, isExpand: boolean) => {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach((childNode) => {
            expandRecursive(childNode, isExpand);
        });
    }
};

const meta: Meta = {
    title: "Components/Tree",
    component: TreeComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                TreeModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
                InputSwitchModule,
                TreeComponent, // Import the standalone component instead of declaring it
            ],
            providers: [TreeDragDropService],
        }),
        applicationConfig({
            providers: [provideAnimations()],
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
        files: JSON.parse(JSON.stringify(commonFiles)), // Deep clone to avoid circular references
    },
    render: (args) => ({
        props: { ...args },
        template: `<p-tree class="w-full md:w-30rem" [value]="files" />`,
    }),
};

export const controlled: Story = {
    args: {
        files: JSON.parse(JSON.stringify(commonFiles)), // Deep clone to avoid circular references
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
        template: `
            <div class="mb-3">
                <p-button icon="pi pi-plus" label="Expand all" (onClick)="expandAll()" class="mr-2" />
                <p-button icon="pi pi-minus" label="Collapse all" (onClick)="collapseAll()" />
            </div>
            <p-tree [value]="files" class="w-full md:w-30rem" />
        `,
    }),
};

export const selection: Story = {
    args: {
        files: JSON.parse(JSON.stringify(commonFiles)), // Deep clone to avoid circular references
        selectedFile: null,
    },
    render: (args) => ({
        props: { ...args },
        template: `<p-tree [value]="files" class="w-full md:w-30rem" selectionMode="single" [(selection)]="selectedFile" />`,
    }),
};

export const multiple: Story = {
    args: {
        files: JSON.parse(JSON.stringify(commonFiles)), // Deep clone to avoid circular references
        selectedFiles: null,
        metaKeySelection: true,
    },
    render: (args) => ({
        props: { ...args },
        template: `
            <div class="flex align-items-center mb-4 gap-2">
                <p-inputSwitch inputId="input-metakey" [(ngModel)]="metaKeySelection" />
                <label for="input-metakey">MetaKey</label>
            </div>
            <p-tree [metaKeySelection]="metaKeySelection" [value]="files" class="w-full md:w-30rem" selectionMode="multiple" [(selection)]="selectedFiles" />
        `,
    }),
};

export const checkbox: Story = {
    args: {
        files: JSON.parse(JSON.stringify(commonFiles)), // Deep clone to avoid circular references
        selectedFiles: null,
    },
    render: (args) => ({
        props: { ...args },
        template: `<p-tree [value]="files" selectionMode="checkbox" class="w-full md:w-30rem" [(selection)]="selectedFiles" />`,
    }),
};

export const dragDrop: Story = {
    args: {
        files: JSON.parse(JSON.stringify(commonFiles)), // Deep clone to avoid circular references
    },
    render: (args) => ({
        props: { ...args },
        template: `
            <div class="card flex justify-content-center">
                <p-tree class="w-full md:w-30rem" [value]="files" [draggableNodes]="true" [droppableNodes]="true" draggableScope="self" droppableScope="self" />
            </div>
        `,
    }),
};

export const template: Story = {
    args: {
        nodes: JSON.parse(JSON.stringify(templateNodes)), // Deep clone to avoid circular references
    },
    render: (args) => ({
        props: { ...args },
        template: `
            <div class="card flex justify-content-center">
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
            </div>
        `,
    }),
};
