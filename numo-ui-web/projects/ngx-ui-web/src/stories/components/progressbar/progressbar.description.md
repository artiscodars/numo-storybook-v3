# ProgressBar Component

The `ProgressBar` component from PrimeNG provides a visual indication of progress, commonly used to display the completion status of ongoing tasks. The component is highly customizable and supports different modes.

## Basic Example

The following example demonstrates a basic `ProgressBar` configuration with a value of 50% in "determinate" mode. The component can also display the progress value within the bar based on the `content` parameter.

## Parameters

-   **`value`**: Determines the percentage of progress. It represents the completion level of the task.
-   **`mode`**: Defines the mode of the progress bar.
-   **`content`**: ontrols whether the progress percentage is displayed inside the progress bar.

```html
<p-progressBar [value]="value" [mode]="mode">
    <ng-template *ngIf="content==true" pTemplate="content" let-value>
        <span>{{value}}/100</span>
    </ng-template>
</p-progressBar>
```
