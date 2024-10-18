import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { AppComponent } from "./timeplaning.component";
import { HeaderComponent } from "../../components/header/header.component";
// import { RouterTestingModule } from "@angular/router/testing";
import description from "./timeplaning.description.md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export default {
    title: "Layouts/Timeplaning",
    component: AppComponent,
    tags: ["autodocs"],
    decorators: [
        moduleMetadata({
            imports: [
                ,
                /* RouterTestingModule */ HeaderComponent,
                BrowserAnimationsModule,
            ],
        }),
    ],
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
} as Meta<AppComponent>;

type Story = StoryObj<AppComponent>;

export const Default: Story = {
    args: {},
};
class TableDemo {
    getSeverity(status: string) {
        switch (status) {
            case "Standarta":
                return "secondary";
            case "Nestandarta":
                return "danger";
            default:
                return "info";
        }
    }
}
