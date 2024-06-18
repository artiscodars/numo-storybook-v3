import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class TesterService {
    tellMeSomething(): string {
        return "Something";
    }
}
