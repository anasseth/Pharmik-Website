import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError, from } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    constructor(public _http: HttpClient) { }

    postCommentOnBlog(id:any,commentsObj:any) {
       return this._http.post<any>(environment.apiPath + 'blogs/'+id, commentsObj)
    }
    
}