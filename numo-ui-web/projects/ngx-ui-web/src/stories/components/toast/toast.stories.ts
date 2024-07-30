import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { ToastModule } from 'primeng/toast';

import description from "./toast.description.md"; // Import the markdown file 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { MessageService } from "primeng/api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastComponent } from "./toast.component";

const meta: Meta = {
  title: "Components/Toast",
  component: ToastComponent,
  decorators: [
    moduleMetadata({
      imports: [ToastModule, FormsModule, ReactiveFormsModule, ButtonModule, InputTextModule, BrowserAnimationsModule],
      providers: [MessageService],
    }),
  ],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export default meta;
type Story = StoryObj;




export const Basic: Story = {
  render: (args) => ({  
    template: `<p-toast-wrapper></p-toast-wrapper>`,
  }),
};



// export const Event: Story = {
//   args: {
//     tooltipPosition: "Right",
//     tooltipPaceholder: "focus to display tooltip",
//     tooltipLabel: "Enter your username",
//     event: "focus"
//   },
//   render: (args) => ({
//     props: {
//       ...args,
//     },
//     template: `<input
//     type="text"
//     pInputText
//     [pTooltip]="tooltipLabel"
//     [tooltipEvent]="event"
//     [placeholder]="tooltipPaceholder" />
//  `,
//   }),
// };
// export const AutoHide: Story = {
//   args: {
//     tooltipPaceholder: "focus to display tooltip",
//     tooltipLabel: "Enter your username",
//     autoHide: false
//   },
//   render: (args) => ({
//     props: {
//       ...args,
//     },
//     template: `<input
//     type="text"
//     pInputText
//     [pTooltip]="tooltipLabel"
//     [autoHide]="autoHide"
//     [placeholder]="tooltipPaceholder" />`,
//   }),
// };
// export const Delay: Story = {
//   args: {
//     label: "Save",
//     tooltipLabel: "Confirm to proceed",
//     showDelay: 1000,
//     hideDelay: 300
//   },
//   render: (args) => ({
//     props: {
//       ...args,
//     },
//     template: `<p-button
//     [pTooltip]="tooltipLabel"
//     [showDelay]="showDelay"
//     [hideDelay]="hideDelay"
//     [label]="label" /> `,
//   }),
// };
// export const Custom: Story = {
//   args: {
//     tooltipPosition: "bottom",
//     severity: 'secondary',
//     label: 'Button'
//   },
//   render: (args) => ({
//     props: {
//       ...args,
//     },
//     template: ` <p-button
//     [pTooltip]="tooltipContent"
//     [severity]="severity"
//      [tooltipPosition]="tooltipPosition"
//     [label]="label"  />
// <ng-template #tooltipContent>
//     <div class="flex align-items-center">
//         <span> <b>PrimeNG</b> rocks! </span>
//     </div>
// </ng-template>`,
//   }),
// };

// export const TooltipOption: Story = {
//   args: {
//     tooltipOptions: {
//       showDelay: 150,
//       autoHide: false,
//       tooltipEvent: 'hover',
//       tooltipPosition: 'left'
//     }
//   },
//   render: (args) => ({
//     props: {
//       ...args,
//     },
//     template: `<input
//     type="text"
//     pInputText
//     pTooltip="Enter your username"
//     [tooltipOptions]="tooltipOptions"
//     placeholder="hover to display tooltip" /> `,
//   }),
// };
