import { UtilsService } from "./utils.service";

//add tests for the UtilsService
describe("UtilsService", () => {
    let utilsService: UtilsService;

    beforeEach(() => {
        utilsService = new UtilsService();
    });

    it("should create the UtilsService", () => {
        expect(utilsService).toBeTruthy();
    });

    it("should return an array of numbers within the specified range", () => {
        const result = utilsService.range(1, 5);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it("should return an empty array when start is greater than end", () => {
        const result = utilsService.range(5, 1);
        expect(result).toEqual([]);
    });

    it("should return an array of values extracted from the specified key", () => {
        const elements = [
            { id: 1, name: "John" },
            { id: 2, name: "Jane" },
            { id: 3, name: "Bob" }
        ];
        const result = utilsService.pluck(elements, "name");
        expect(result).toEqual(["John", "Jane", "Bob"]);
    });

    it("should return an empty array when elements array is empty", () => {
        const elements: any[] = [];
        const result = utilsService.pluck(elements, "name");
        expect(result).toEqual([]);
    });
});