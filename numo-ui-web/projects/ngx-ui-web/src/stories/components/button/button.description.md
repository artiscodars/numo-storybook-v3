 

This is a **button** component used for triggering actions when clicked.

## Usage settings

You can use this component by passing the following props:

- `label`: The text to display on the button.
- `class`: Additional CSS classes to apply custom styles to the button.
- `link`: Whether the button behaves as a link (`true` or `false`).
- `icon`: To set icons from the icon library (e.g., `pi pi-check`).
- `iconPos`: Position of the icon relative to the label (`left` or `right`). 
- `loading`: To show a loading indicator (`true` or `false`).
- `rounded`: To apply rounded corners (`true` or `false`).
- `text`: To style the button as a text button with no background (`true` or `false`).
- `raised`: To apply a raised effect to the button (`true` or `false`).
- `outlined`: To style the button with an outline (`true` or `false`).
- `badge`: Number to display in a badge on the button (useful for notifications or counts).
- `badgeClass`: CSS class to apply custom styles to the badge.
- `disabled`: The state of the button (`true` or `false`).


## Example

```html
<p-button 
  [label]="label" 
  [class]="class"
  [link]="link"
  icon="pi pi-{{icon}}"
  [iconPos]="iconPos"
  [ngStyle]="{'margin-left': marginLeft}"
  [loading]="loading"
  [rounded]="rounded"
  [text]="text"
  [raised]="raised"
  [outlined]="outlined"
  [badge]="badge"
  [badgeClass]="badgeClass"
/>
```