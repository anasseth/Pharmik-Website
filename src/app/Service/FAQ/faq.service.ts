import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError, from } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { FAQ } from 'src/app/Models/FAQ/FAQ-Model';

@Injectable({
    providedIn: 'root'
})
export class FaqsService {
    allFAQsData!: FAQ[];

    constructor(public _http: HttpClient) { }
    LoadAllFAQs() {
        this._http.get<any>(environment.apiPath + 'faqs').subscribe(
            (data) => {
                this.allFAQsData = data
                console.log("All FAQ Data : ", data)
            },
            (err) => {
                console.log(err)
            }, () => {
            }
        )
    }

    getAllFAQs() {
        if (this.allFAQsData != undefined || this.allFAQsData != null) {
            return this.allFAQsData
        }
        else {
            this.LoadAllFAQs();
            return;
        }
    }
}