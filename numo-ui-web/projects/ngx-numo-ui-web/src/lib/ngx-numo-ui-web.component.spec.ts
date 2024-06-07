import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxNumoUiWebComponent } from "./ngx-numo-ui-web.component";

describe("NgxNumoUiWebComponent", () => {
    let component: NgxNumoUiWebComponent;
    let fixture: ComponentFixture<NgxNumoUiWebComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgxNumoUiWebComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NgxNumoUiWebComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
