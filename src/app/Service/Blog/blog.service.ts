import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError, from } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    AllBlogsData: any = [];

    constructor(public _http: HttpClient) {}

    getAllBlogs() {
        this._http.get<any>(environment.apiPath + 'blogs').subscribe(
            data => {
                console.log("Blog Data", data)
                this.AllBlogsData = data
            },
            err => {
                console.log(err)
            },
            () => {

            }
        )
    }

}