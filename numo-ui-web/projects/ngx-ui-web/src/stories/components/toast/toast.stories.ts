import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { ToastModule } from "primeng/toast";
import description from "./toast.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { MessageService } from "primeng/api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastComponent } from "./toast.component";

const meta: Meta = {
    title: "Components/Toast (progress)",
    component: ToastComponent,
    decorators: [
        moduleMetadata({
            imports: [
                ToastModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
                InputTextModule,
                BrowserAnimationsModule,
            ],
            providers: [MessageService],
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

export const Basic: Story = {
    render: (args) => ({
        template: `<p-toast-wrapper></p-toast-wrapper>`,
    }),
};
