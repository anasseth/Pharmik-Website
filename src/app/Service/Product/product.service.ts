import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError, from } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product/Product-Model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    allProductData!: Product[];
    allProductDataCopy!: Product[];

    constructor(public _http: HttpClient) { }
    LoadAllProducts() {
        this._http.get<any>(environment.apiPath + 'products').subscribe(
            (data) => {
                this.allProductData = data
                this.allProductDataCopy = this.allProductData
                for (var i = 0; i < this.allProductData.length; i++) {
                    if (this.allProductData[i].quantity == undefined || this.allProductData[i].quantity == null) {
                        this.allProductData[i].quantity = 0
                    }
                }
                console.log("All Product Data : ", data)
            },
            (err) => {
                console.log(err)
            }, () => {
            }
        )
    }

    getAllProducts() {
        if (this.allProductData != undefined || this.allProductData != null) {
            return this.allProductData
        }
        else {
            this.LoadAllProducts();
            return;
        }
    }
}