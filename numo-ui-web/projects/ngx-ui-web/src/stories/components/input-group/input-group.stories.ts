import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import description from "./input-group.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { ButtonModule } from "primeng/button"; // Import the ButtonModule from PrimeNG

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
    title: "Components/Form/Input Group (done)",
    decorators: [
        moduleMetadata({
            imports: [
                InputTextModule,
                FormsModule,
                ReactiveFormsModule,
                FloatLabelModule,
                InputGroupModule,
                InputGroupAddonModule,
                ButtonModule, // Include the ButtonModule
            ],
        }),
    ],
    tags: ["autodocs"],
    argTypes: {},
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

// 1. Button Group Story
export const ButtonGroup: Story = {
    render: () => ({
        template: `
        <div class="p-buttonset">
            <button type="button" pButton label="M" size="small"></button>
            <button type="button" pButton label="T" size="small"></button>
            <button type="button" pButton label="W" size="small"></button>
            <button type="button" pButton label="T" size="small"></button>
            <button type="button" pButton label="F" size="small"></button>
            <button type="button" pButton label="S" size="small"></button>
            <button type="button" pButton label="S" size="small"></button>
        </div>
        `,
    }),
};

// 2. Disabled Input and Close Button Story
export const DisabledButtonWithCloseButton: Story = {
    render: () => ({
        template: `


        <div class="p-buttonset">
            <button type="button" disabled pButton label="12.12.2023"></button>
            <button type="button" pButton label="x"></button>
            </div>
        `,
    }),
};
