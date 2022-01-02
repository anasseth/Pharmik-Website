import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError, from } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StoreEssentialInfoService {
    StoreEssentialData: any = {};

    constructor(public _http: HttpClient) { }
    LoadStoreInfo() {
        this._http.get<any>(environment.apiPath + 'store-info').subscribe(
            data => {
                console.log("Store Essential Info Data", data)
                this.StoreEssentialData = data
            },
            err => {
                console.log(err)
            },
            () => {

            }
        )
    }

    getStoreInfo() {
        if (this.StoreEssentialData == null || this.StoreEssentialData == undefined) {
            this.LoadStoreInfo();
        }
        else {
            return this.StoreEssentialData
        }
    }
}