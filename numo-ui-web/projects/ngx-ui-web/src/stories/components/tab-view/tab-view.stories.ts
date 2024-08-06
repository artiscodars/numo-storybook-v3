import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./tab-view.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabViewModule } from "primeng/tabview";
import { ButtonModule } from "primeng/button";

const meta: Meta = {
    title: "Components/TabView",
    decorators: [
        moduleMetadata({
            imports: [
                TabViewModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
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
    args: {},
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tabView>
    <p-tabPanel header="Header I">
        <p>
            Lorem ipsum dolor sit amet...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-tabPanel>
</p-tabView>`,
    }),
};
export const dynamic: Story = {
    args: {
        tabs: [
            { title: "Tab 1", content: "Tab 1 Content" },
            { title: "Tab 2", content: "Tab 2 Content" },
            { title: "Tab 3", content: "Tab 3 Content" },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tabView>
<p-tabPanel *ngFor="let tab of tabs" [header]="tab.title">
    <p>
        {{ tab.content }}
    </p>
</p-tabPanel>
</p-tabView>`,
    }),
};
export const controlled: Story = {
    args: {
        tabs: [
            { title: "Tab 1", content: "Tab 1 Content" },
            { title: "Tab 2", content: "Tab 2 Content" },
            { title: "Tab 3", content: "Tab 3 Content" },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="flex mb-2 gap-2 justify-content-end">
    <p-button
        (onClick)="activeIndex = 0"
        rounded="true"
        styleClass="w-2rem h-2rem p-0"
        [outlined]="activeIndex !== 0"
        label="1" />
    <p-button
        (onClick)="activeIndex = 1"
        rounded="true"
        styleClass="w-2rem h-2rem p-0"
        [outlined]="activeIndex !== 1"
        label="2" />
    <p-button
        (onClick)="activeIndex = 2"
        rounded="true"
        styleClass="w-2rem h-2rem p-0"
        [outlined]="activeIndex !== 2"
        label="3" />
</div>
    <p-tabView [(activeIndex)]="activeIndex">
        <p-tabPanel header="Header I">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
        </p-tabPanel>
        <p-tabPanel header="Header II">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
            </p>
        </p-tabPanel>
        <p-tabPanel header="Header III">
            <p>
                At vero eos et accusamus et iusto odio dignissimos...
            </p>
        </p-tabPanel>
</p-tabView>`,
    }),
};
export const disabled: Story = {
    args: {
        tabs: [
            { title: "Tab 1", content: "Tab 1 Content" },
            { title: "Tab 2", content: "Tab 2 Content" },
            { title: "Tab 3", content: "Tab 3 Content" },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tabView>
    <p-tabPanel header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-tabPanel>
    <p-tabPanel [disabled]="true" header="Header IV" />
</p-tabView>`,
    }),
};
export const template: Story = {
    args: {
        tabs: [
            { title: "Tab 1", content: "Tab 1 Content" },
            { title: "Tab 2", content: "Tab 2 Content" },
            { title: "Tab 3", content: "Tab 3 Content" },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-tabView styleClass="tabview-custom">
    <p-tabPanel>
        <ng-template pTemplate="header">
            <div class="flex align-items-center gap-2">
                <p-avatar
                    image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                    shape="circle" />
                <span class="font-bold white-space-nowrap m-0">
                    Amy Elsner
                </span>
            </div>
        </ng-template>
        <p>
            Lorem ipsum dolor sit amet...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header II">
        <ng-template pTemplate="header">
            <div class="flex align-items-center gap-2">
                <p-avatar
                    image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"
                    shape="circle" />
                <span class="font-bold white-space-nowrap m-0">
                    Onyama Limba
                </span>
            </div>
        </ng-template>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-tabPanel>
    <p-tabPanel header="Header III">
        <ng-template pTemplate="header">
            <div class="flex align-items-center gap-2">
                <p-avatar
                    image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png"
                    shape="circle" />
                <span class="font-bold white-space-nowrap m-0">
                    Ioni Bowcher
                </span>
                <p-badge value="2" />
            </div>
        </ng-template>
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-tabPanel>
</p-tabView>
`,
    }),
};
