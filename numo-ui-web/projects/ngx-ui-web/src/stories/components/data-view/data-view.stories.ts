import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import description from "./data-view.description.md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataViewModule } from "primeng/dataview";
import { dataView } from "./data-view";
import { ButtonModule } from "primeng/button";

const meta: Meta = {
    title: "Components/Data View",
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                DataViewModule,
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
            <div class="grid grid-nogutter">
                <div class="col-12" *ngFor="let item of products; let first = first" class="col-12">
                    <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" [ngClass]="{ 'border-top-1 surface-border': !first }">
                        
                        <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                            <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                <div>
                                    <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                    <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                                </div>
                                <div class="surface-100 p-1" style="border-radius: 30px">
                                    <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                        <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                                        <i class="pi pi-star-fill text-yellow-500"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-column md:align-items-end gap-5">
                                <span class="text-xl font-semibold text-900">{{ '$' + item.price }}</span>
                                <div class="flex flex-row-reverse md:flex-row gap-2">
                                    <p-button icon="pi pi-heart" [outlined]="true" />
                                    <p-button icon="pi pi-shopping-cart" class="flex-auto md:flex-initial white-space-nowrap" label="Buy Now" [disabled]="item.inventoryStatus === 'OUTOFSTOCK'" />
                                </div>
                            </div>
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