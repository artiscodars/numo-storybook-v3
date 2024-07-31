The `p-dropdown` component from PrimeNG provides a dropdown menu that allows users to select a value from a list of options. It is highly customizable, supporting various features such as grouping, editable input, and more.

## Parameters

- `label`: The placeholder text displayed in the dropdown when no option is selected.
- `options`: An array of objects representing the dropdown options. Each object should have a `name` (for display) and `code` (for value).
- `formControlName`: The name of the form control bound to the dropdown for use with Angular Reactive Forms.
- `checkmark`: Whether to show a checkmark next to selected options (true or false).
- `showClear`: Whether to show a clear button that resets the selected value (true or false).
- `editable`: Whether the dropdown is editable, allowing users to input text that is not in the dropdown options (true or false).
- `group`: Whether to group options into categories (true or false).
- `groupedCities`: An array of objects representing grouped options. Each object should have a `label` (group name), `value` (group identifier), and `items` (array of options for the group).

## HTML Part

The `p-dropdown` component can be customized using various parameters. Below are examples of how to use these parameters in the HTML template:

```html
<p-dropdown
    [options]="cities"
    [(ngModel)]="selectedCity"
    optionLabel="name"
    placeholder="{{label}}" />
```
