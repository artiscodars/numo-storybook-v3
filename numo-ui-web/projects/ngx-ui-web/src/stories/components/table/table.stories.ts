import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import description from "./table.description.md"; // Import the markdown file
import { TableModule } from "primeng/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FloatLabelModule } from "primeng/floatlabel";
import { CommonModule } from "@angular/common";
import { RatingModule } from "primeng/rating";
import { TagModule } from "primeng/tag";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { SelectButtonModule } from "primeng/selectbutton";
import { IconComponent } from "../icon/icon.component";

import { InputTextModule } from "primeng/inputtext";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
    title: "Components/Table",
    decorators: [
        moduleMetadata({
            imports: [
                TableModule,
                CommonModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                FloatLabelModule,
                CommonModule,
                TagModule,
                RatingModule,
                ButtonModule,
                SelectButtonModule,
                IconComponent,
                InputTextModule,
                InputGroupModule,
                InputGroupAddonModule,
                BadgeModule,
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
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
    args: {
        products: [
            {
                id: "1000",
                code: "f230fh0g3",
                name: "Bamboo Watch",
                description: "Product Description",
                image: "bamboo-watch.jpg",
                price: 65,
                category: "Accessories",
                quantity: 24,
                inventoryStatus: "INSTOCK",
                rating: 5,
            },
            {
                id: "1001",
                code: "f230fh0g3",
                name: "Black Watch",
                description: "Product Description",
                image: "Black-watch.jpg",
                price: 65,
                category: "Accessories",
                quantity: 20,
                inventoryStatus: "INSTOCK",
                rating: 5,
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>`,
    }),
};

class TableDemo {
    getSeverity(status: string) {
        switch (status) {
            case "Standarta":
                return "secondary";
            case "Nestandarta":
                return "danger";
            default:
                return "info";
        }
    }
}

export const ForDataView: Story = {
    args: {
        products: [
            {
                id: "1000",
                code: "f230fh0g3",
                name: "Darba dienas",
                description:
                    "8:00 - 17:00 (8h 15min) | 18:00 - 23:00 (4h 45min)",

                inventoryStatus: "Standarta",
                days: [1, 2, 3, 4, 5],
            },
            {
                id: "1000",
                code: "f230fh0g3",
                name: "Citas foršas darba dienas",
                description:
                    "8:00 - 17:00 (8h 15min) | 18:00 - 23:00 (4h 45min)",

                inventoryStatus: "Nestandarta",
                days: [1, 4, 5],
                dates: ["12.12.2024", "12.12.2024"],
            },
            {
                id: "1001",
                code: "f230fh0g3",
                name: "Brīvdienas",
                description:
                    "8:00 - 17:00 (8h 15min) | 18:00 - 23:00 (4h 45min)",

                inventoryStatus: "Standarta",
                dates: ["12.12.2024", "12.12.2024"],
            },
        ],
    },
    render: (args) => ({
        props: {
            ...args,
            getSeverity: (status: any) => new TableDemo().getSeverity(status),
        },
        template: `<p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">

    <ng-template pTemplate="body" let-product>
        <tr>
            <td><a href="#" class="text-primary font-semibold mr-3">{{product.name}}</a> <p-badge [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" /></td>

            <td>
<div class="flex">
            <div class="p-buttonset pr-2 daycalendar">
            <button type="button" pButton label="M" size="small"></button>
            <button type="button" pButton label="T" size="small"></button>
            <button type="button" pButton label="W" size="small"></button>
            <button type="button" outlined="true"  pButton label="T" size="small"></button>
            <button type="button" pButton label="F" size="small"></button>
            <button type="button" pButton label="S" size="small"></button>
            <button type="button" pButton label="S" size="small"></button>
        </div>
         <div class="p-buttonset daycalendar">
            <button type="button" disabled pButton label="12.12.2023"  size="small"></button>
            <button type="button" pButton label="x"  size="small"></button>
            </div>
            </div>

            </td>
            <td>{{product.description}}</td>
            <td class="text-right">

            <p-button aria-label="Edit" text="true" styleClass="p-2 text-xl">
                <numo-icon icon="material-symbols:edit" type="iconify" class="text-primary"></numo-icon>
            </p-button>
            <p-button aria-label="Delete"  text="true" styleClass="p-2 text-xl">
                <numo-icon icon="material-symbols:delete" type="iconify" class="text-primary"></numo-icon>
            </p-button>

            </td>

        </tr>
    </ng-template>

</p-table>
`,
    }),
};
