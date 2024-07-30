import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
// import { fn } from "@storybook/test";
import { DropdownModule } from 'primeng/dropdown';
import description from "./dropdown.description.md"; // Import the markdown file
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
  title: "Components/Dropdown",
  decorators: [
    moduleMetadata({
      imports: [DropdownModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
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

export const Basic: Story = {
  args: {
    label: "Select a City",
    cities: [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ],
    checkmark: false,
    showClear: false, 
    editable: false,
    group: false, 

  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-dropdown 
    [options]="cities"  
    [checkmark]="checkmark" 
    [showClear]="showClear" 
    [editable]="editable" 
    [group]="group" 
    optionLabel="name" 
    placeholder="{{label}}" />`,
  }),
};

export const ReactiveForms: Story = {
  args: {
    label: "Select a City",
    cities: [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ],
    formControlName: 'selectedCity'
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-dropdown 
    [options]="cities"  
    [formControlName]="formControlName" 
    optionLabel="name" 
    placeholder="{{label}}" />`,
  }),
};
export const Checkmark: Story = {
  args: {
    label: "Select a City",
    cities: [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ],
    formControlName: 'selectedCity',
    checkmark: true,
    showClear: true,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-dropdown 
    [options]="cities" 
    [(ngModel)]="selectedCity"
    [checkmark]="checkmark" 
    optionLabel="name" 
    [showClear]="showClear" 
    placeholder="Select a City" />`,
  }),
};
export const Editable: Story = {
  args: {
    label: "Select a City",
    cities: [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ],
    formControlName: 'selectedCity',
    checkmark: false,
    showClear: false,
    editable: true,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-dropdown 
    [options]="cities" 
    [(ngModel)]="selectedCity" 
    placeholder="Select a City" 
    [editable]="true" 
    optionLabel="name" />`,
  }),
};
export const Group: Story = {
  args: {
    label: "Select a City",
    groupedCities: [
      {
        label: 'Germany',
        value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' }
        ]
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' }
        ]
      },
      {
        label: 'Japan',
        value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' }
        ]
      }
    ],
    formControlName: 'selectedCity',
    checkmark: false,
    showClear: false,
    editable: true,
    group: true
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-dropdown 
        [options]="groupedCities" 
        [(ngModel)]="selectedCity" 
        placeholder="Select a City" 
        [group]="group">
        <ng-template let-group pTemplate="group">
            <div class="flex align-items-center">
                <img 
                    src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                    [class]="'mr-2 flag flag-' + group.value"
                    style="width: 20px" />
                    
                <span icon="flag flag-' + group.value">{{ group.label }}</span>
            </div>
        </ng-template>
    </p-dropdown>`,
  }),
};


