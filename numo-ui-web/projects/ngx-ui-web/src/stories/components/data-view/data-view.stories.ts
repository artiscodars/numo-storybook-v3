import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./data-view.description.md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataViewModule } from "primeng/dataview";
import { dataView } from "./data-view";
import { ButtonModule } from "primeng/button";
import { BadgeModule } from "primeng/badge";

const meta: Meta = {
    title: "Components/Data View (progress)",
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                DataViewModule,
                ButtonModule,
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
        products: dataView,
        value: 2,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `
        <div class="card">
    <p-dataView #dv [value]="products">
        <ng-template pTemplate="list" let-products>
            <div class="grid grid-nogutter gap-2">
                <div class="col-12" *ngFor="let item of products; let first = first" class="col-12 bg-white border-round-md">
                    <div class="flex flex-column sm:flex-row  justify-content-between md:align-items-center  px-4  py-3 gap-3" >

                    <div class="flex align-items-center">

                    <h3 class="mr-2 text-primary">{{ item.name }}</h3>

                    <p-badge value="{{ item.category }}" severity="secondary" class="text-sm"></p-badge>
                    </div>


                        <div class="flex flex-row-reverse md:flex-row gap-2">
                                    <p-button link="true" >

                                    <ng-template pTemplate="icon">
                                        <span
                                            class="iconify text-lg mr-2 text-primary"
                                            data-icon="material-symbols:edit"
                                        ></span>
                                    </ng-template>

                                    </p-button>
                                    <p-button link="true" >

                                    <ng-template pTemplate="icon">
                                        <span
                                            class="iconify text-lg mr-2 text-primary"
                                            data-icon="material-symbols:delete"
                                        ></span>
                                    </ng-template>

                                    </p-button>
                                </div>


                    </div>
                </div>
            </div>
        </ng-template>
    </p-dataView>
</div>
`,
    }),
};
