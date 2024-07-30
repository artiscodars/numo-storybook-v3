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
      imports: [CalendarModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, FloatLabelModule],
    }),
  ],
  tags: ["autodocs"],
  argTypes: {
  },
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
    selectionMode: 'single',
    showIcon: false,
    showOnFocus: true,
    iconDisplay: 'overlay',
    timeOnly: false,
    minDate: new Date(),
    maxDate: new Date(),  
    readonlyInput: false,
    showButtonBar: false,
    view: "date",
    dateFormat: 'dd/mm/yy',
    touchUI: false,
    inline: false,
    showWeek: false,
    variant: "filled",
    class: '',
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
    /> `,
  }),
};
export const ReactiveForms: Story = {
  args: {
    date: new Date()
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-calendar formControlName="date"  /> `,
  }),
};
export const Format: Story = {
  args: {
    date: new Date(),
    format: 'dd.mm.yy'
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-calendar [(ngModel)]="date" [dateFormat]="format" /> `,
  }),
};
export const Icon: Story = {
  args: {
    date: new Date(),
    format: 'dd.mm.yy',
    showIcon: true,
    showOnFocus: false,
    iconDisplay: 'input',
    timeOnly: false
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-calendar [(ngModel)]="date1" [showIcon]="showIcon" [showOnFocus]="showOnFocus" [timeOnly]="timeOnly"  inputId="buttondisplay" />
`,
  }),
};
export const MinMax: Story = {
  args: {
    date: new Date(),
    format: 'dd.mm.yy',
    showIcon: true,
    showOnFocus: false,
    iconDisplay: 'input',
    timeOnly: false,
    minDate: new Date("07/02/2024"),
    maxDate: new Date(),
    readonlyInput: true
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-calendar 
    [(ngModel)]="date" 
    [minDate]="minDate" 
    [maxDate]="maxDate" 
    [readonlyInput]="readonlyInput" />
`,
  }),
};
export const Multiple: Story = {
  args: {
    dates: [],
    selectionMode: 'multiple',
    readonlyInput: true
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
    selectionMode: 'range',
    readonlyInput: true
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
export const Bottonbar: Story = {
  args: {
    rangeDates: [],
    selectionMode: 'range',
    showButtonBar: true
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-calendar 
    [(ngModel)]="date" 
    [showButtonBar]="showButtonBar"/>
`,
  }),
};
export const MonthPicker: Story = {
  args: {
    date: new Date(),
    selectionMode: 'range',
    showButtonBar: true,
    view: "month",
    dateFormat: 'mm/yy',
    readonlyInput: true

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
export const YearPicker: Story = {
  args: {
    date: new Date(),
    selectionMode: 'range',
    showButtonBar: true,
    view: "year",
    dateFormat: 'yy',
    readonlyInput: true

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
export const DateTemplate: Story = {
  args: {
    date: new Date(),
    selectionMode: 'range',
    showButtonBar: true,
    view: "year",
    dateFormat: 'yy',

  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-calendar [(ngModel)]="date">
    <ng-template pTemplate="date" let-date>
        <span [ngStyle]="{textDecoration: (date.day < 21 && date.day > 10) ? 'line-through' : 'inherit'}">
            {{date.day}}
        </span>
    </ng-template>
    </p-calendar>
`,
  }),
};
export const TouchUI: Story = {
  args: {
    date: new Date(),
    selectionMode: 'range',
    touchUI: true,
    view: "year",
    dateFormat: 'yy',
    readonlyInput: true

  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-calendar 
    [(ngModel)]="date" 
    [touchUI]="touchUI" 
    [readonlyInput]="readonlyInput" />
`,
  }),
};
export const Inline: Story = {
  args: {
    date: new Date(),
    selectionMode: 'range',
    touchUI: true,
    view: "year",
    dateFormat: 'yy',
    inline: true,
    showWeek: true

  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-calendar 
    class="max-w-full" 
    [(ngModel)]="date" 
    [inline]="inline" 
    [showWeek]="showWeek" />
`,
  }),
};
export const FloatLabel: Story = {
  args: {
    date: "",
    selectionMode: 'range',
    touchUI: true,
    view: "year",
    dateFormat: 'yy',
    inline: true,
    showWeek: true

  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-floatLabel>
    <p-calendar 
        [(ngModel)]="date" 
        inputId="birth_date" />
    <label for="birth_date">Birth Date</label>
</p-floatLabel>
`,
  }),
};
export const Filled: Story = {
  args: {
    date: "",
    variant: "filled"

  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-calendar 
    [(ngModel)]="date" 
    [variant]="variant" />
`,
  }),
};
export const Invaild: Story = {
  args: {
    date: "",
    variant: "filled",
    class: 'ng-invalid ng-dirty',
    disabled: false
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

