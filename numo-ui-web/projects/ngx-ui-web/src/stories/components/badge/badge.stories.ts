import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./badge.description.md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BadgeModule } from "primeng/badge";

const meta: Meta = {
    title: "Components/Badge",
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                BadgeModule,
            ],
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
        size: "small",
        value: 2,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-badge [badgeSize]="size" [value]="value" />`,
    }),
};
