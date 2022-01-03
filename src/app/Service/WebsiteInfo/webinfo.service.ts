import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError, from } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WebsiteInfoService {
    WebsiteInfo!: any;

    constructor(public _http: HttpClient) { }
    LoadWebsiteInfo() {
        this._http.get<any>(environment.apiPath + 'webinfo').subscribe(
            (data) => {
                this.WebsiteInfo = data[0]
                console.log("Website Info : ", data)
            },
            (err) => {
                console.log(err)
            }, () => {
            }
        )
    }

    getWebsiteInfo() {
        if (this.WebsiteInfo != undefined || this.WebsiteInfo != null) {
            return this.WebsiteInfo
        }
        else {
            this.LoadWebsiteInfo();
            return;
        }
    }
}