import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ScanService {

    constructor(private http: HttpClient) { }

    getData(ean13) {
        let headers = this.createRequestHeader();
        return this.http.get('http://192.168.15.11:8080/api/material/' + ean13, { headers: headers });
    }

    private createRequestHeader() {
        
        let headers = new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json",
         });

        return headers;
    }
}