# Calendar Component

The `p-calendar` component from PrimeNG is a highly versatile calendar input that allows users to select dates or date ranges. It supports various configurations such as date formatting, selection modes, and more.

## Parameters

- `date`: The currently selected date or dates, depending on the selection mode.
- `formControlName`: The name of the form control used for Angular Reactive Forms.
- `dateFormat`: The format in which the date is displayed. For example, `'dd.mm.yy'`, `'mm/yy'`, `'yy'`.
- `showIcon`: Whether to show an icon button for opening the calendar (true or false).
- `showOnFocus`: Whether to show the calendar popup when the input is focused (true or false).
- `iconDisplay`: The method to display the calendar icon, such as `'input'` or `'button'`.
- `timeOnly`: Whether to display only the time selection (true or false).
- `minDate`: The minimum selectable date.
- `maxDate`: The maximum selectable date.
- `readonlyInput`: Whether the input field is readonly (true or false).
- `selectionMode`: The selection mode of the calendar, such as `'single'`, `'multiple'`, or `'range'`.
- `showButtonBar`: Whether to show a button bar for confirming or clearing the selection (true or false).
- `view`: The view mode of the calendar, such as `'month'` or `'year'`.
- `touchUI`: Whether to enable the touch UI mode for mobile devices (true or false).
- `inline`: Whether to display the calendar inline instead of as a popup (true or false).
- `showWeek`: Whether to show week numbers in the calendar (true or false).
- `variant`: The style variant of the calendar, such as `'filled'`.
- `class`: Custom CSS classes to apply to the calendar component.
- `disabled`: Whether the calendar is disabled (true or false).

## HTML Part

The `p-calendar` component can be customized using various parameters. Below are examples of how to use these parameters in the HTML template:

**Basic Usage:**

```html
<p-calendar [(ngModel)]="date" />
