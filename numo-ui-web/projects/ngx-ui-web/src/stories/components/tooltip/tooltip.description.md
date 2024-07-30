    
The Tooltip component from PrimeNG provides a way to display additional information when users hover over or focus on an element. This component is versatile and can be customized for various use cases and styling needs.

## Parameters

- **`pTooltip`**: The text or content to display within the tooltip.
- **`tooltipPosition`**: Determines the position of the tooltip relative to the target element. Possible values include "top", "bottom", "left", and "right".
- **`tooltipEvent`**: Specifies the event that triggers the tooltip. Common values are "hover" and "focus".
- **`autoHide`**: When set to `false`, the tooltip will not automatically hide when the user moves away from the target element.
- **`showDelay`**: The delay in milliseconds before the tooltip is shown after the triggering event.
- **`hideDelay`**: The delay in milliseconds before the tooltip is hidden after the mouse leaves the target element.
- **`tooltipOptions`**: An object that can specify multiple tooltip options such as `showDelay`, `autoHide`, `tooltipEvent`, and `tooltipPosition`.

## HTML Examples

### Position

This example demonstrates setting the position of the tooltip.

```html
<input 
  type="text" 
  pInputText 
  [pTooltip]="tooltipLabel" 
  [tooltipPosition]="tooltipPosition" 
  [placeholder]="tooltipPosition" />
```