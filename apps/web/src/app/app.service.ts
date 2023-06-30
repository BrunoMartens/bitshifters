import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) {
        
    }

    public testApi() {
        this.http.get('/api').subscribe(
            r => console.log(r)
        );
    }
}