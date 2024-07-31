import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";

@Component({
    selector: "p-toast-wrapper",
    imports: [ ToastModule, FormsModule, ReactiveFormsModule, ButtonModule, BrowserAnimationsModule ],
    template: `
    <p-toast></p-toast>
    <p-button (onClick)="show()" label="Show"></p-button>
  `,
    providers: [ MessageService ]
})
export class ToastComponent {
    constructor(private messageService: MessageService) {
    }

    show() {
        this.messageService.add({ severity: "success", summary: "Success", detail: "Message Content" });
    }
}
