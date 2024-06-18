import { Component, Input } from "@angular/core";

@Component({
    selector: "numo-tester",
    standalone: true,
    template: `
        <div class="text-red-600 bg-black object-fill">
            Numo test component with Tailwind is working just fine, and it's
            {{ lilText }}!
        </div>
    `,
})
export class NumoTesterComponent {
    @Input() lilText: string = "";
}
