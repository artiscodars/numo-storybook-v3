The `TableComponent` is a flexible and feature-rich Angular component that leverages PrimeNG's `p-table` to display tabular data. It supports various customization options, including dynamic column definitions and different table styles, making it suitable for a wide range of use cases such as displaying product lists, user data, and more.

## Usage

To use the `TableComponent`, include it in your template with the desired configuration. The component allows you to define columns dynamically and display data in a structured format.

### Parameters

- **products**: An array of objects representing the data to be displayed in the table. Each object should contain fields corresponding to the columns.
- **cols**: An array of objects defining the columns of the table. Each object should have `field` and `header` properties.
- **tableStyle**: An object to define custom styles for the table.
- **sizes**: An array of objects to define different size options for the table.
- **selectedSize**: An object to set the currently selected size for the table.

### HTML Part

The HTML template of the `TableComponent` consists of:

#### Basic Table

A simple table displaying the code, name, category, and quantity of products.

```html
<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
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
