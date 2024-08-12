# ConfirmDialog Component

The `ConfirmDialog` component provides a modal dialog for confirmation purposes. It integrates with the Confirmation API to offer a customizable dialog UI for user interactions.

## Properties

### `header`
- **Type**: `string`
- **Default**: `null`
- **Description**: Title text of the dialog.

### `icon`
- **Type**: `string`
- **Default**: `null`
- **Description**: Icon to display next to the message.

### `message`
- **Type**: `string`
- **Default**: `null`
- **Description**: Message of the confirmation dialog.

### `style`
- **Type**: `Object`
- **Default**: `null`
- **Description**: Inline style of the element.

### `styleClass`
- **Type**: `string`
- **Default**: `null`
- **Description**: CSS class applied to the element.

### `maskStyleClass`
- **Type**: `string`
- **Default**: `null`
- **Description**: CSS class(es) for styling the mask element.

### `acceptIcon`
- **Type**: `string`
- **Default**: `null`
- **Description**: Icon for the accept button.

### `acceptLabel`
- **Type**: `string`
- **Default**: `null`
- **Description**: Label for the accept button.

### `closeAriaLabel`
- **Type**: `string`
- **Default**: `null`
- **Description**: Accessibility label for the close button.

### `acceptAriaLabel`
- **Type**: `string`
- **Default**: `null`
- **Description**: Accessibility label for the accept button.

### `acceptVisible`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Visibility of the accept button.

### `rejectIcon`
- **Type**: `string`
- **Default**: `null`
- **Description**: Icon for the reject button.

### `rejectLabel`
- **Type**: `string`
- **Default**: `null`
- **Description**: Label for the reject button.

### `rejectAriaLabel`
- **Type**: `string`
- **Default**: `null`
- **Description**: Accessibility label for the reject button.

### `rejectVisible`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Visibility of the reject button.

### `acceptButtonStyleClass`
- **Type**: `string`
- **Default**: `null`
- **Description**: CSS class for the accept button.

### `rejectButtonStyleClass`
- **Type**: `string`
- **Default**: `null`
- **Description**: CSS class for the reject button.

### `closeOnEscape`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Specifies if pressing the escape key should hide the dialog.

### `dismissableMask`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Specifies if clicking the modal background should hide the dialog.

### `blockScroll`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Determines whether scrolling behavior should be blocked within the component.

### `rtl`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: When enabled, displays the dialog in RTL (right-to-left) direction.

### `closable`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Adds a close icon to the header to hide the dialog.

### `appendTo`
- **Type**: `any`
- **Default**: `null`
- **Description**: Target element to attach the dialog. Valid values are `"body"` or a local ng-template variable of another element (e.g., `[appendTo]="mydiv"` for a div element with `#mydiv` as the variable name).

### `key`
- **Type**: `string`
- **Default**: `null`
- **Description**: Optional key to match the key of the confirm object. Necessary to use when the component tree has multiple confirm dialogs.

### `autoZIndex`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether to automatically manage layering of the dialog.

### `baseZIndex`
- **Type**: `number`
- **Default**: `0`
- **Description**: Base zIndex value used in layering.

### `transitionOptions`
- **Type**: `string`
- **Default**: `"150ms cubic-bezier(0, 0, 0.2, 1)"`
- **Description**: Transition options for the dialog animation.

### `focusTrap`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: When enabled, focuses only on elements inside the confirm dialog.

### `defaultFocus`
- **Type**: `"none" | "close" | "accept" | "reject"`
- **Default**: `"accept"`
- **Description**: Element to receive focus when the dialog becomes visible.

### `breakpoints`
- **Type**: `any`
- **Default**: `null`
- **Description**: Object literal defining widths per screen size.

### `visible`
- **Type**: `any`
- **Default**: `null`
- **Description**: Current visible state of the dialog as a boolean.

### `position`
- **Type**: `string`
- **Default**: `null`
- **Description**: Allows getting the position of the component.

## Usage

The `ConfirmDialog` component is designed for displaying confirmation prompts with customizable options for buttons, styles, and behavior. Use the provided properties to tailor the dialog to fit different use cases and user interactions.

```html
<p-confirmDialog 
    header="Confirm Action" 
    icon="pi pi-info-circle" 
    message="Are you sure you want to proceed?" 
    styleClass="custom-dialog" 
    acceptIcon="pi pi-check" 
    acceptLabel="Yes" 
    acceptAriaLabel="Accept" 
    rejectIcon="pi pi-times" 
    rejectLabel="No" 
    rejectAriaLabel="Reject" 
    closeOnEscape 
    dismissableMask 
    blockScroll 
    rtl 
    closable 
    appendTo="body" 
    key="confirmDialog1" 
    autoZIndex 
    baseZIndex="1000" 
    transitionOptions="300ms ease-in-out" 
    focusTrap 
    defaultFocus="accept" 
    [breakpoints]="{ '960px': '80vw', '640px': '90vw' }" 
    [visible]="true" 
    position="top-right" 
/>
```