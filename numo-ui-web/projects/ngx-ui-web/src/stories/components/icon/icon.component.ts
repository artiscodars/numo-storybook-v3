import { Component, Input } from "@angular/core";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "numo-icon",
  templateUrl: "./icon.template.html",
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IconComponent {
  @Input() icon!: string;
  @Input() type: 'iconify' | 'primeng' = 'primeng'
  @Input() class: string = "text-gray-800";
}
