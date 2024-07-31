import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "numo-dashboard",
    standalone: true,
    imports: [ RouterOutlet ],
    templateUrl: "./dashboard.template.html",
    styles: [
        `
            .card {
                background: #f4f4f4;
                border-radius: 5px;
                box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
            }
        `,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class DashboardComponent {
    title = "angular-latest";
}
