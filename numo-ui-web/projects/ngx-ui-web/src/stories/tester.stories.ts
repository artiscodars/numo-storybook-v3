import { Meta, StoryObj } from "@storybook/angular";
import { NumoTesterComponent } from "../public-api";

const meta: Meta<NumoTesterComponent> = {
    title: "Numo library storybook tester",
    component: NumoTesterComponent,
};

export default meta;

type Story = StoryObj<NumoTesterComponent>;
export const Primary: Story = {
    args: {
        lilText: "Whatnot",
    },
};
