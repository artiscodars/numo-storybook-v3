The RadioButton component from PrimeNG is a basic form element that allows users to select one option from a set of predefined options. It's commonly used in forms and surveys where only one choice is allowed from a group of options.

## Parameters

- **`name`**: Specifies the name of the radio button group. All radio buttons with the same `name` are grouped together.
- **`value`**: The value associated with the radio button. This value is used to determine which option is selected.
- **`[(ngModel)]`**: Binds the selected value to a variable in your component. This helps in two-way data binding.
- **`[formControlName]`**: Used with Angular Reactive Forms to bind the radio button to a form control.
- **`disabled`**: When set to `true`, the radio button is disabled and cannot be interacted with.
- **`classes`**: Additional CSS classes for styling the radio button.
- **`variant`**: Determines the appearance of the radio button, such as 'filled' or default styles.

## HTML Examples

### Group

A group of radio buttons allowing the selection of a single option from multiple choices.

```html 
      <p-radioButton 
          name="pizza" 
          value="Cheese" 
          [(ngModel)]="ingredient" 
          inputId="ingredient1" />
          <label for="ingredient1" class="ml-2">
          {{label}}
      </label> 
  
  ```
