import { argsToTemplate, Meta, StoryObj } from "@storybook/angular";
import { IconComponent } from "./icon.component";
import description from "./icon.description.md";

export default {
    title: "Components/Icons/Iconify",
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

export const Default: Story = {
    args: {
        type: "iconify",
        icon: "cil:bank",
        class: "text-gray-800 text-2xl",
    },
};

export const SearchIcon: Story = {
    args: {
        type: "iconify",
        icon: "il:search",
        class: "text-gray-800 text-2xl",
    },
};

export const BellIcon: Story = {
    args: {
        type: "iconify",
        icon: "il:bell",
        class: "text-gray-800 text-2xl",
    },
};


