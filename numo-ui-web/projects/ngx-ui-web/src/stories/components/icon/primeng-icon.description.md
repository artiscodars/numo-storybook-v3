This component conditionally renders a PrimeNG icon within a span element based on the `type` property. If the `type` is 'primeng', it applies the `ngClass` directive to set the CSS class and adds a PrimeNG icon class.

## Usage settings

You can use this component by passing the following:

- `class`: Additional CSS classes to apply custom styles to the button.
- `icon`: To set icons from the icon library (e.g., `pi pi-check`).

### Template

```html
<span [ngClass]="class" class="pi pi-{{icon}}"></span>
```
