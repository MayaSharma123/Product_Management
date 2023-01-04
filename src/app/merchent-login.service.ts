import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Merchent } from './merchent';
@Injectable({
  providedIn: 'root'
})
export class MerchentLoginService {

  constructor(private _http : HttpClient) { }
  public loginUserFormRemote(merchant :Merchent):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",merchant)
  }
}
