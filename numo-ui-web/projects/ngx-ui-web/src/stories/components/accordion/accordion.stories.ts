import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { AccordionModule } from "primeng/accordion";
import description from "./accordion.description.md"; // Import the markdown file
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { BadgeModule } from "primeng/badge";
import { AvatarModule } from "primeng/avatar";

const meta: Meta = {
    title: "Components/Accordion",
    decorators: [
        moduleMetadata({
            imports: [
                AccordionModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                ButtonModule,
                AvatarModule,
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
        multiple: false,
        disabled: false,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-accordion [activeIndex]="0">
    <p-accordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-accordionTab>
</p-accordion>`,
    }),
};

export const Dynamic: Story = {
    args: {
        tabs: [
            { title: "Title 1", content: "Content 1" },
            { title: "Title 2", content: "Content 2" },
            { title: "Title 3", content: "Content 3" },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-accordion [activeIndex]="0">
                <p-accordionTab [header]="tab.title" *ngFor="let tab of tabs">
                  <p class="m-0">
                    {{ tab.content }}
                  </p>
                </p-accordionTab>
              </p-accordion>`,
    }),
};
export const Multiple: Story = {
    args: {},
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-accordion [multiple]="true" [activeIndex]="[0]">
    <p-accordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-accordionTab>
</p-accordion>`,
    }),
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-accordion [activeIndex]="0">
    <p-accordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos...
        </p>
    </p-accordionTab>
    <p-accordionTab header="Header IV" [disabled]="disabled" />
</p-accordion> `,
    }),
};
export const Controlled: Story = {
    args: {
        disabled: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="flex mb-3 gap-2 justify-content-end" style="display:flex; margin-bottom:30px; justify-content:end;gap:20px">
    <p-button
        (click)="activeIndex = 0"
        rounded="true"
        label="1"
        styleClass="w-2rem h-2rem p-0"
        [outlined]="activeIndex !== 0" />
    <p-button
        (click)="activeIndex = 1"
        rounded="true"
        label="2"
        styleClass="w-2rem h-2rem p-0"
        [outlined]="activeIndex !== 1" />
    <p-button
        (click)="activeIndex = 2"
        rounded="true"
        label="3"
        styleClass="w-2rem h-2rem p-0"
        [outlined]="activeIndex !== 2" />
    </div>
    <p-accordion (activeIndexChange)="activeIndexChange($event)" [activeIndex]="activeIndex">
        <p-accordionTab header="Header I">
            <p class="m-0">
                Lorem ipsum dolor sit amet...
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header II">
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
            </p>
        </p-accordionTab>
        <p-accordionTab header="Header III">
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos...
            </p>
        </p-accordionTab>
    </p-accordion> `,
    }),
};
export const Template: Story = {
    args: {
        disabled: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<div class="card flex justify-content-center" style="display:flex;justify-content:space-between; ">
    <p-accordion class="w-full" style="width:100%" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
    <p-accordionTab>
        <ng-template pTemplate="header">
            <span class="flex align-items-center gap-2 w-full" style="justify-content:end;display:flex;align-items:center;gap:20px; ">
                <p-avatar
                    image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                    shape="circle" />
                <span class="font-bold white-space-nowrap">
                    Amy Elsner
                </span>
                <p-badge value="3" class="ml-auto mr-2" />
            </span>
        </ng-template>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-accordionTab>
    <p-accordionTab>
        <ng-template pTemplate="header">
            <span class="flex align-items-center gap-2 w-full" style="display:flex;align-items:center;gap:20px;width:100%">
                <p-avatar
                    image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png"
                    shape="circle" />
                <span class="font-bold white-space-nowrap">
                    Onyama Limba
                </span>
                <p-badge value="4" class="ml-auto mr-2" />
            </span>
        </ng-template>
        <p class="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
</p-accordionTab>
<p-accordionTab>
    <ng-template pTemplate="header">
        <span class="flex align-items-center gap-2 w-full" style="display:flex;align-items:center;gap:20px;width:100%">
            <p-avatar
                image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png"
                shape="circle" />
            <span class="font-bold white-space-nowrap">
                Ioni Bowcher
            </span>
            <p-badge value="2" class="ml-auto mr-2" />
        </span>
    </ng-template>
    <p class="m-0">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
    </p>
</p-accordionTab>
</p-accordion>
</div>`,
    }),
};
