# Dialog Component

The `Dialog` component from PrimeNG is a versatile modal dialog box used for displaying content in a focused overlay. It can be customized to fit various needs, including modals with different visibility states, positions, and interactive elements. This component is ideal for creating user interactions and modal forms.

## Basic Example

The following example demonstrates a `Dialog` with basic configurations, including visibility control, position, and various interactive options.

```html
<p-button (onClick)="visible = true" label="Show" />
<p-dialog header="Edit Profile"
    [modal]="true"
    [(visible)]="visible"
    [style]="{ width: '25rem' }"
    [maximizable]="maximizable"
    [position]="position"
    [draggable]="draggable"
    [breakpoints]="breakpoints"
    [resizable]="resizable">
    <span class="p-text-secondary block mb-5">Update your information.</span>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
        <p-button label="Cancel" severity="secondary" (onClick)="visible = false" />
        <p-button label="Save" (onClick)="visible = false" />
    </div>
</p-dialog>
```
