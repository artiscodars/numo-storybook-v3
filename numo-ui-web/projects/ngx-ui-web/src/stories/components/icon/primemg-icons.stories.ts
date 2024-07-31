import { argsToTemplate, Meta, StoryObj } from "@storybook/angular";
import { IconComponent } from "./icon.component";
import description from "./primeng-icon.description.md";

export default {
    title: "Components/Icons/Primeng",
    component: IconComponent,
    excludeStories: /.*Data$/,
    tags: [ "autodocs" ],
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<numo-icon ${argsToTemplate(args)}></numo-icon>`,
    }),
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
} as Meta<IconComponent>;

type Story = StoryObj<IconComponent>;
export const CheckIcon: Story = {
    args: {
        type: "primeng",
        class: "text-gray-800 text-2xl",
        icon: "check "
    },

    render: (args) => ({
        props: {
            ...args,
        },
        template: `<span [ngClass]="class" class="pi pi-{{icon}}"></span>`,
    }),
};
export const SearchIcon: Story = {
    args: {
        type: "primeng",
        class: "text-gray-800 text-2xl",
        icon: "search "
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<span [ngClass]="class" class="pi pi-{{icon}}"></span>`,
    }),
};
