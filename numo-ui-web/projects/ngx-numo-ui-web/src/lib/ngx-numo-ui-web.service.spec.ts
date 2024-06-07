import { TestBed } from "@angular/core/testing";

import { NgxNumoUiWebService } from "./ngx-numo-ui-web.service";

describe("NgxNumoUiWebService", () => {
    let service: NgxNumoUiWebService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NgxNumoUiWebService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
