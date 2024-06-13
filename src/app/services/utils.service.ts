import { Injectable } from "@angular/core";

@Injectable()
export class UtilsService {
    range(start: number, end: number) {
        return start>end ? [] : [...Array(end - start).keys()].map(i => i + start);
    }

    pluck(elements: any[], key: string) {
        return elements.map(element => element[key]);
    }
}