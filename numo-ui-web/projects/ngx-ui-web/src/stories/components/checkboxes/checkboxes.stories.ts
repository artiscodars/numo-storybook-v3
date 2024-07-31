import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { CheckboxModule } from "primeng/checkbox";
import description from "./checkboxes.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const meta: Meta = {
    title: "Components/Checkboxes",
    decorators: [
        moduleMetadata({
            imports: [ CheckboxModule, FormsModule, ReactiveFormsModule ],
        }),
    ],
    tags: [ "autodocs" ],
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
        label: "New York",
        binary: true,
        formControlName: "city",
        value: "New York",
        classes: "",
        disabled: false,
        variant: "filled",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: ` <p-checkbox
  [(ngModel)]="checked"
  [binary]="binary"
  [formControlName]="formControlName"
  [value]="value"
  [class]="classes"
  [variant]="variant"
  [disabled]="disabled"
  inputId="binary"
  [label]="label"
/>`,
    }),
};
export const ReactiveForms: Story = {
    args: {
        label: "New York",
        formControlName: "city",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-checkbox
    [formControlName]="formControlName"
     value="New York" [label]="label" />`,
    }),
};
export const Invalid: Story = {
    args: {
        label: "New York",
        formControlName: "city",
        binary: true,
        classes: "ng-invalid ng-dirty",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-checkbox
       [(ngModel)]="checked"
     value="New York"  [binary]="binary"  [class]="classes"  />  `,
    }),
};
export const Dynamic: Story = {
    args: {
        label: "New York",
        formControlName: "city",
        categories: [
            { name: "New York", value: "NY" },
            { name: "Los Angeles", value: "LA" },
            { name: "Chicago", value: "CH" },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div *ngFor="let category of categories" class="field-checkbox">
    <p-checkbox
        [(ngModel)]="selectedCategories"
        [label]="category.name"
        name="group"
        [value]="category" />
</div>`,
    }),
};

export const Filled: Story = {
    args: {
        label: "New York",
        formControlName: "city",
        binary: true,
        classes: "ng-invalid ng-dirty",
        variant: "filled",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-checkbox [(ngModel)]="checked" [binary]="true" [variant]="variant" /> `,
    }),
};
export const Disabled: Story = {
    args: {
        label: "New York",
        formControlName: "city",
        binary: true,
        classes: "ng-invalid ng-dirty",
        variant: "filled",
        disabled: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-checkbox [(ngModel)]="checked" [binary]="true" [variant]="variant"  [disabled]="disabled"/> `,
    }),
};
