import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NumoTesterComponent } from "./tester.component";

describe("NumoTesterComponent", () => {
    let component: NumoTesterComponent;
    let fixture: ComponentFixture<NumoTesterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NumoTesterComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NumoTesterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
