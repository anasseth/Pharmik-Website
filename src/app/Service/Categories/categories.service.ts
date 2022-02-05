import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError, from } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    allCategoriesData: any;

    constructor(public _http: HttpClient) { }
    loadAllCategories() {
        return this._http.get<any>(environment.apiPath + 'category').subscribe(
            data => {
                console.log("Categories Data :", data)
                this.allCategoriesData = data
            }
        )
    }

    getAllCategories() {
        if (this.allCategoriesData == undefined || this.allCategoriesData == null) {
            this.loadAllCategories();
        }
        else {
            return this.allCategoriesData
        }
    }

}