The `ConfirmDialog` component provides a modal dialog for confirmation purposes. It integrates with the Confirmation API to offer a customizable dialog UI for user interactions.

## Usage

Usage texts goes here

## Style

To make the button left we need to use add this class in style

    `
       :host::ng-deep.p-dialog-footer{
            display: flex!important;
            justify-content: start!important;
            flex-direction: row-reverse!important;
        }
    `