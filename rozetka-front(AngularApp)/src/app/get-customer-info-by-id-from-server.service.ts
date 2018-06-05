import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from './../../node_modules/rxjs';
import { ICustomer } from './customer/customer.component';

@Injectable()
export class GetCustomerInfoByIdFromServerService {

  constructor(private _http: Http,
    private httpClient: HttpClient) { }
  GetCustomerInfoById(id){
    return this._http.get("http://localhost:55687/api/GetCustomerInfoById/" + id);
}
}
