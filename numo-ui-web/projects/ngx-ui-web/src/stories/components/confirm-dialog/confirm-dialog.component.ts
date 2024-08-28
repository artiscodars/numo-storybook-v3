import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ToastModule } from "primeng/toast";

@Component({
    selector: "p-confirm-dialog-wrapper",
    imports: [
        CommonModule,
        ToastModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        ConfirmDialogModule,
    ],
    template: `
        <p-toast />
        <p-confirmDialog [styleClass]="'ui-confirmdialog-footer'" />
        <p-button (onClick)="confirm1($event)" label="Save" [outlined]="true" />
        <p-button
            (onClick)="confirm2($event)"
            label="Delete"
            severity="danger"
            [outlined]="true"
        />
    `,
    styles: [
        `
            :host::ng-deep.p-dialog-footer{
                display: flex!important;
                justify-content: start!important;
                flex-direction: row-reverse!important;
            }
        `,
    ],
    standalone: true,
})
export class ConfirmDialogComponent {
    constructor(
        private messageService: MessageService,
        private confirmService: ConfirmationService,
    ) {}

    confirm1(event: any) {
        this.confirmService.confirm({
            target: event.target as EventTarget,
            message: "Are you sure that you want to proceed?",
            header: "Confirmation",
            icon: "",
            acceptIcon: "none",
            rejectIcon: "none",
            rejectButtonStyleClass: "p-button-text",
            accept: () => {
                this.messageService.add({
                    severity: "info",
                    summary: "Confirmed",
                    detail: "You have accepted",
                });
            },
            reject: () => {
                this.messageService.add({
                    severity: "error",
                    summary: "Rejected",
                    detail: "You have rejected",
                    life: 3000,
                });
            },
        });
    }
    confirm2(event: any) {
        this.confirmService.confirm({
            target: event.target as EventTarget,
            message: "Do you want to delete this record?",
            header: "Delete Confirmation",
            icon: "",
            acceptButtonStyleClass: "p-button-danger p-button-text",
            rejectButtonStyleClass: "p-button-text p-button-text",
            acceptIcon: "none",
            rejectIcon: "none",

            accept: () => {
                this.messageService.add({
                    severity: "info",
                    summary: "Confirmed",
                    detail: "Record deleted",
                });
            },
            reject: () => {
                this.messageService.add({
                    severity: "error",
                    summary: "Rejected",
                    detail: "You have rejected",
                });
            },
        });
    }
}
