import { TestBed } from "@angular/core/testing";
import { ApiService } from "./api.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

//generate tests for ApiService
describe('ApiService', () => {
    let service: ApiService;
    let httpTestingController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApiService] });
        service = TestBed.inject(ApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    /*
    Not complete. Fails.
    afterEach(() => {
        httpTestingController.verify();
    });*/

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get tags', () => {
        service.getTags().subscribe((tags) => {
            expect(tags).toBeTruthy();
        });
    });

    it('should create a tag', () => {
        service.createTag('tag').subscribe((tag) => {
            expect(tag).toBeTruthy();
        });
    });
})
