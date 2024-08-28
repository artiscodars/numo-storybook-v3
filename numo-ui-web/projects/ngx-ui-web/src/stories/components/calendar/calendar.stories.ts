import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import description from "./calendar.description.md"; // Import the markdown file
import { CalendarModule } from "primeng/calendar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FloatLabelModule } from "primeng/floatlabel";
import { min } from "rxjs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
    title: "Components/Calendar",
    decorators: [
        moduleMetadata({
            imports: [
                CalendarModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                FloatLabelModule,
            ],
        }),
    ],
    tags: ["autodocs"],
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
    args: {
        date: new Date(),
        selectionMode: "single",
        showIcon: false,
        showOnFocus: true,
        iconDisplay: "overlay",
        timeOnly: false,
        minDate: new Date(),
        maxDate: new Date(),
        readonlyInput: false,
        showButtonBar: false,
        view: "date",
        dateFormat: "dd/mm/yy",
        touchUI: false,
        inline: false,
        showWeek: false,
        variant: "filled",
        class: "",
        disabled: false,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar
              formControlName="date"
              [selectionMode]="selectionMode"
              [showIcon]="showIcon"
              [showOnFocus]="showOnFocus"
              [iconDisplay]="iconDisplay"
              [timeOnly]="timeOnly"
              [minDate]="minDate"
              [maxDate]="maxDate"
              [readonlyInput]="readonlyInput"
              [showButtonBar]="showButtonBar"
              [view]="view"
              [dateFormat]="dateFormat"
              [touchUI]="touchUI"
              [inline]="inline"
              [showWeek]="showWeek"
              [variant]="variant"
              [class]="class"
              [disabled]="disabled"
        /> `,
    }),
};
export const Icon: Story = {
    args: {
        date: new Date(),
        format: "dd.mm.yy",
        showIcon: true,
        showOnFocus: false,
        iconDisplay: "input",
        timeOnly: false,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar [(ngModel)]="date1" [showIcon]="showIcon" [showOnFocus]="showOnFocus" [timeOnly]="timeOnly"  inputId="buttondisplay" />
`,
    }),
};
export const Multiple: Story = {
    args: {
        dates: [],
        selectionMode: "multiple",
        readonlyInput: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar
    [(ngModel)]="dates"
    [selectionMode]="selectionMode"
    [readonlyInput]="readonlyInput" />
`,
    }),
};
export const Range: Story = {
    args: {
        rangeDates: [],
        selectionMode: "range",
        readonlyInput: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar
    [(ngModel)]="rangeDates"
    [selectionMode]="selectionMode"
    [readonlyInput]="readonlyInput" />
`,
    }),
};
export const YearPicker: Story = {
    args: {
        date: new Date(),
        selectionMode: "range",
        showButtonBar: true,
        view: "year",
        dateFormat: "yy",
        readonlyInput: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar
    [(ngModel)]="date"
    [view]="view"
    [dateFormat]="dateFormat"
    [readonlyInput]="readonlyInput" />
`,
    }),
};

export const Invaild: Story = {
    args: {
        date: "",
        variant: "filled",
        class: "ng-invalid ng-dirty",
        disabled: false,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar
    [(ngModel)]="date"
    [class]="class"
    [disabled]="disabled" />
`,
    }),
};
