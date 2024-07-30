import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import description from "./table.description.md"; // Import the markdown file
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FloatLabelModule } from "primeng/floatlabel";
import { CommonModule } from "@angular/common";
import { RatingModule } from "primeng/rating";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { SelectButtonModule } from "primeng/selectbutton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
  title: "Components/Table",
  decorators: [
    moduleMetadata({
      imports: [TableModule, CommonModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, FloatLabelModule, CommonModule, TagModule, RatingModule, ButtonModule, SelectButtonModule],
    }),
  ],
  tags: ["autodocs"],
  argTypes: {
  },
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
    products: [{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }, {
      id: '1001',
      code: 'f230fh0g3',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'Black-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 20,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }]

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
export const Dynamic: Story = {
  args: {
    products: [{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }, {
      id: '1001',
      code: 'f230fh0g3',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'Black-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 20,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }],
    cols: [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ]
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<div class="card">
    <p-table [columns]="cols" [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData let-columns="columns">
            <tr>
                <td *ngFor="let col of columns">
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
  }),
};

class TableDemo {

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}

export const Template: Story = {
  args: {
    products: [{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }, {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Some Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 3.5
    }, {
      id: '1001',
      code: 'f230fh0g3',
      name: 'T Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 65,
      category: 'Clothing',
      quantity: 20,
      inventoryStatus: 'INSTOCK',
      rating: 4
    }],
    cols: [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ]
  },
  render: (args) => ({
    props: {
      ...args,
      getSeverity: (status: any) => new TableDemo().getSeverity(status),
    },
    template: `<p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="caption">
        <div class="flex align-items-center justify-content-between">
            Products
            <p-button icon="pi pi-refresh" />
        </div>
    </ng-template>
    <ng-template pTemplate="header">
        <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
            <th>Reviews</th>
            <th>Status</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.name}}</td>
            <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="100" class="shadow-4" /></td>
            <td>{{product.price | currency:'USD'}}</td>
            <td>{{product.category}}</td>
            <td><p-rating [(ngModel)]="product.rating" [readonly]="true" [cancel]="false" /></td>
            <td><p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" /></td>
        </tr>
    </ng-template>
    <ng-template pTemplate="summary">
        <div class="flex align-items-center justify-content-between">
            In total there are {{products ? products.length : 0 }} products.
        </div>
    </ng-template>
</p-table>
`,
  }),
};
export const Size: Story = {
  args: {
    products: [{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }, {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Some Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 3.5
    }, {
      id: '1001',
      code: 'f230fh0g3',
      name: 'T Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 65,
      category: 'Clothing',
      quantity: 20,
      inventoryStatus: 'INSTOCK',
      rating: 4
    }],
    sizes: [
      { name: 'Small', class: 'p-datatable-sm' },
      { name: 'Normal', class: '' },
      { name: 'Large', class: 'p-datatable-lg' }
    ],
    selectedSize: { class: '' }
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<div class="card">
    <div class="flex justify-content-center mb-3">
        <p-selectButton 
            [options]="sizes" 
            [(ngModel)]="selectedSize" 
            [multiple]="false" 
            optionLabel="name" 
            optionValue="class" />
    </div>
    <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }" [styleClass]="selectedSize?.class">
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
    </p-table>
</div>


`,
  }),
};

