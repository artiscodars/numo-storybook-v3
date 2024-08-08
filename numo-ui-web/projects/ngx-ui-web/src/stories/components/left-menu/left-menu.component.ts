import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PanelMenuModule } from "primeng/panelmenu";
import { IconComponent } from "../icon/icon.component";

@Component({
    selector: "numo-left-menu",
    standalone: true,
    imports: [FormsModule, CommonModule, PanelMenuModule, IconComponent],
    templateUrl: "./left-menu.component.html",
    styles: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeftMenuComponent {
    @Input() items: any = [];
    @Input() className = "";
}
