import { CommonModule } from "@angular/common";
import {
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { Menu, UserMenuItems } from "../menu/menu.model";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { LeftMenuComponent } from "../left-menu/left-menu.component";

@Component({
    selector: "numo-header",
    standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        InputTextModule,
        MenuModule,
        OverlayPanelModule,
        LeftMenuComponent,
    ],
    templateUrl: "./header.template.html",
    styles: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HeaderComponent {
    isMenuVisible = false;
    @Input() isStoryBook = false;
    @ViewChild("menu") menu: any;
    @ViewChild("storyMenu") storyMenu: any;
    @Output() menuClicked = new EventEmitter(false);
    items = [ ...Menu ];
    userMenuItems = UserMenuItems;
    BreakPoint = 1024;

    toggleMenu(event: Event) {
        this.isMenuVisible = !this.isMenuVisible;
        if (this.isStoryBook) {
            this.storyMenu.toggle(event);
            return;
        }
        if (window.innerWidth < this.BreakPoint) {
            this.menu.toggle(event);
            this.isMenuVisible = false;
        }
        this.menuClicked.emit(this.isMenuVisible);
    }

    closeMenu() {
        this.isMenuVisible = false;
    }
}
