# ConfirmDialog Component

The `ConfirmDialog` component is a key UI element designed to present confirmation dialogs to users. It is commonly used for confirming critical actions, such as deletions or important decisions, ensuring that users are aware of the consequences before proceeding.

## Overview

This component utilizes PrimeNG's `ConfirmDialogModule` to render confirmation dialogs within Angular applications. It integrates various PrimeNG modules and Angular's reactive forms to deliver a comprehensive user interface for confirmations.

## Installation and Setup

To use the `ConfirmDialog` component, include the following modules in your Angular module:

- **`ConfirmDialogModule`**: Provides functionality for confirmation dialogs. 
- **`ButtonModule`**: For buttons within the dialog.
- **`ToastModule`**: For toast notifications.
- **`FormsModule`** and **`ReactiveFormsModule`**: For form control and validation.
- **`BrowserAnimationsModule`**: Required for animations.

Additionally, ensure to provide the following services:

- **`ConfirmationService`**: Manages the dialog's confirmation logic.
- **`MessageService`**: Handles messaging and notifications.

## Storybook Configuration

In Storybook, the `ConfirmDialog` component is configured with the following metadata:

- **Title**: `"Components/ConfirmDialog"`
- **Component**: `ConfirmDialogComponent`
- **Decorators**: Uses `moduleMetadata` to include necessary imports and providers.
- **Tags**: `["autodocs"]` for automatic documentation generation.
- **Parameters**: Documentation is sourced from this `description.md` file.

### Basic Story

The `basic` story demonstrates the default rendering of the `ConfirmDialog` component. It shows the component with default arguments and displays the dialog wrapper.

```html
<p-confirm-dialog-wrapper />
```