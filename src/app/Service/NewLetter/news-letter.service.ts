import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError, from } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NewsLetterService {

    constructor(public _http: HttpClient) { }

    postUserDataforNewsLetter(userEmailObj:any) {
       return this._http.post<any>(environment.apiPath + 'newsletter', userEmailObj)
    }
    
}