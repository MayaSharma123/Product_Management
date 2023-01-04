import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
 

  constructor(private _http : HttpClient) { }
  getProductList(): Observable<Product[]>{
    return this._http.get<Product[]>("http://localhost:8080/viewProduct");
}
}
