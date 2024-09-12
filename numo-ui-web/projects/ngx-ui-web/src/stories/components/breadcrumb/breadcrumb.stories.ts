import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./breadcrumb.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { RouterTestingModule } from "@angular/router/testing";
import { IconComponent } from "../icon/icon.component";

const meta: Meta = {
    title: "Components/Breadcrumb (done)",
    decorators: [
        moduleMetadata({
            imports: [
                BreadcrumbModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                IconComponent,
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
        items: [
            {
                label: "Electronics",
                url: "#",
                styleClass: "text-blue-500 underline",
            },
            { label: "Computer" },
            { label: "Accessories" },
            { label: "Keyboard" },
            { label: "Wireless" },
        ],
        home: { icon: "pi pi-home", routerLink: "/" },
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-breadcrumb class="max-w-full" [model]="items" [home]="home" />`,
    }),
};
