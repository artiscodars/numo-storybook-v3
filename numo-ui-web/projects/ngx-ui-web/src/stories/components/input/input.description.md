# Input Component

The Input component from PrimeNG is used for capturing user input in various formats. It supports different configurations such as text, email, and more, providing flexibility for form elements.

## Parameters

- **`type`**: Specifies the type of input (e.g., `"text"`, `"email"`, `"password"`). Determines the kind of data the input field accepts.
- **`value`**: Binds the current value of the input field. Can be any string or text displayed in the input.
- **`label`**: Provides a label for the input field, especially useful with floating labels.
- **`variant`**: Alters the visual style of the input field. Commonly used values include `"filled"` for a filled style.
- **`class`**: Applies custom CSS classes to the input field for additional styling or to indicate validation states (e.g., `ng-invalid`, `ng-dirty`).
- **`disabled`**: When set to `true`, disables the input field, making it non-interactive.
- **`formControlName`**: Used in Angular Reactive Forms to bind the input to a specific form control.

## HTML Examples

### Basic Input

A simple input field with type and value binding.

```html
<input 
  [type]="type" 
  pInputText 
  [(ngModel)]="value" />
```