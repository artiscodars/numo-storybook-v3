import { TestBed } from "@angular/core/testing";
import { TesterService as TesterService } from "./tester.service";

describe("TesterService", () => {
    let service: TesterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TesterService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should say something", () => {
        expect(service.tellMeSomething()).toEqual("Something");
    });
});
