import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { ButtonModule } from "primeng/button";
import description from "./button.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const meta: Meta = {
    title: "Components/Button",
    decorators: [
        moduleMetadata({
            imports: [ ButtonModule, FormsModule, ReactiveFormsModule ],
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

export const Primary: Story = {
    args: {
        label: "Primary",
        class: "p-button-primary",
        link: false,
        icon: "check",
        iconPos: "right",
        marginLeft: "10px",
        loading: false,
        rounded: false,
        text: false,
        raised: false,
        outlined: false,
        badge: 0,
        badgeClass: "p-badge-success",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-button
  [label]="label"
  [class]="class"
  [link]="link"
  icon="pi pi-{{icon}}"
  [iconPos]="iconPos"
  [ngStyle]="{'margin-left': marginLeft}"
  [loading]="loading"
  [rounded]="rounded"
  [text]="text"
  [raised]="raised"
  [outlined]="outlined"
  [badge]="badge"
  [badgeClass]="badgeClass"
/>`,
    }),
};
export const Directive: Story = {
    args: {
        label: "Directive",
        class: "p-button-success",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<button pButton pRipple [label]="label" [class]="class"> </button>`,
    }),
};
export const Link: Story = {
    args: {
        label: "Link",
        class: "p-button",
        link: "https://angular.dev/",
        marginLeft: "10px",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-button [label]="label" [link]="true" />
              <a [href]="link" target="_blank" rel="noopener noreferrer" class="font-bold" [class]="class">
                  External
              </a>
               <a routerLink="/" class="p-button font-bold" [ngStyle]="{'margin-left':marginLeft}"> Router</a>
                `,
    }),
};

export const Icons: Story = {
    args: {
        label: "Submit",
        class: "p-button",
        link: "https://angular.dev/",
        icon: "check",
        iconPos: "right",
        marginLeft: "10px",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-button icon="pi pi-{{icon}}" />
              <p-button [label]="label" icon="pi pi-{{icon}}" [ngStyle]="{'margin-left':marginLeft}"/>
              <p-button [label]="label" icon="pi pi-{{icon}}" [iconPos]="iconPos" [ngStyle]="{'margin-left':marginLeft}"/>
                `,
    }),
};

export const Loading: Story = {
    args: {
        label: "Search",
        class: "p-button",
        link: "https://angular.dev/",
        icon: "check",
        iconPos: "right",
        marginLeft: "10px",
        loading: false,
    },
    render: (args) => ({
        props: {
            ...args,
        },

        template: `<p-button [label]="label" icon="pi pi-{{icon}}"  [loading]="loading" /> `,
    }),
};
export const Rounded: Story = {
    args: {
        label: "Primary",
        rounded: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },

        template: `<p-button [label]="label" [rounded]="rounded" /> `,
    }),
};
export const Text: Story = {
    args: {
        label: "Primary",
        text: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },

        template: `<p-button [label]="label" [text]="text" /> `,
    }),
};
export const RaisedText: Story = {
    args: {
        label: "Primary",
        text: true,
        raised: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },

        template: `<p-button [label]="label" [text]="text" [raised]="raised" /> `,
    }),
};
export const Outlined: Story = {
    args: {
        label: "Primary",
        text: false,
        raised: false,
        outlined: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },

        template: `<p-button [label]="label" [text]="text" [raised]="raised"  [outlined]="outlined"  /> `,
    }),
};
export const Badges: Story = {
    args: {
        label: "Primary",
        text: false,
        raised: false,
        outlined: false,
        icon: "users",
        badge: 2,
        badgeClass: "p-badge-contrast",
    },
    render: (args) => ({
        props: {
            ...args,
        },

        template: `<p-button icon="pi pi-{{icon}}" [label]="label" [text]="text" [raised]="raised"  [badge]="badge"  [outlined]="outlined"   [badgeClass]="badgeClass"/> `,
    }),
};
export const ButtonGroup: Story = {
    args: {
        label: "Save",
        icon: "check",
    },
    render: (args) => ({
        props: {
            ...args,
        },

        template: `<p-buttonGroup>
    <p-button [label]="label" icon="pi pi-{{icon}}" />
    <p-button label="Delete" icon="pi pi-trash" />
    <p-button label="Cancel" icon="pi pi-times" />
</p-buttonGroup> `,
    }),
};

export const Sizes: Story = {
    args: {
        label: "Small",
        icon: "check",
        size: "small",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: ` <p-button  [label]="label" icon="pi pi-{{icon}}" [size]="size" /> `,
    }),
};

export const Disabled: Story = {
    args: {
        label: "Disabled Button",
        disabled: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: ` <p-button [label]="label" [disabled]="disabled" /> `,
    }),
};
