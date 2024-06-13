import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
    httpClient = inject(HttpClient);
    apiUrl = 'https://jsonplaceholder.typicode.com/users';


    getTags(): Observable<any> {
        return this.httpClient.get(this.apiUrl);
    }

    createTag(name: string): Observable<any> {      
        return this.httpClient.post(this.apiUrl, { name });
    }
}