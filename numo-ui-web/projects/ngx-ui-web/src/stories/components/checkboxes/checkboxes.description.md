# p-checkbox Component

The `p-checkbox` component is used to create checkboxes in your Angular application. It supports various configurations to handle different types of user interactions, such as binary selection, form control integration, and dynamic lists.

## Description

The `p-checkbox` component allows users to select or deselect options. It can be used in both simple and reactive forms and supports styling for invalid states, dynamic content, and disabled states.

## Parameters

- `label`: The text to display next to the checkbox.
- `binary`: Whether the checkbox is a binary checkbox. When set to `true`, the checkbox behaves as a toggle without intermediate states.
- `formControlName`: The name of the form control for integration with reactive forms.
- `value`: The value associated with the checkbox. This is used in form submissions and data binding.
- `classes`: Additional CSS classes to apply custom styles to the checkbox.
- `variant`: The visual style of the checkbox, such as `filled` or `outlined `.
- `disabled`: Whether the checkbox is disabled (`true` or `false`).

## HTML Example

### Basic Checkbox

```html
<p-checkbox 
  [(ngModel)]="checked" 
  [binary]="binary" 
  [formControlName]="formControlName"
  [value]="value" 
  [class]="classes"
  [variant]="variant"
  [disabled]="disabled"
  inputId="binary"
  [label]="label"
/>  
```