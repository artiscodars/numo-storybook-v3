The Accordion component from PrimeNG provides a way to display collapsible panels, which can be used to organize content in a compact and user-friendly manner. It supports various configurations and features to enhance user interaction and presentation.

## Parameters

- **`activeIndex`**: Controls the currently active accordion tab. Can be a single index for a single active tab or an array of indexes for multiple active tabs.
- **`tabs`**: An array of tab objects for dynamic generation of accordion tabs. Each tab object should include `title` and `content`.
- **`disabled`**: When set to `true`, it disables the accordion, making it non-interactive.
- **`multiple`**: Allows multiple accordion tabs to be expanded simultaneously when set to `true`.

## HTML Examples

### Basic Accordion

A straightforward accordion with predefined headers and content.

```html
<p-accordion [activeIndex]="0">
  <p-accordionTab header="Header I">
      <p>
          Lorem ipsum dolor sit amet...
      </p>
  </p-accordionTab>
  <p-accordionTab header="Header II">
      <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
      </p>
  </p-accordionTab>
  <p-accordionTab header="Header III">
      <p>
          At vero eos et accusamus et iusto odio dignissimos...
      </p>
  </p-accordionTab>
</p-accordion>
```
