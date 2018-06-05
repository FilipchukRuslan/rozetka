import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from './../../../node_modules/rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { GetCustomerInfoByIdFromServerService } from '../get-customer-info-by-id-from-server.service';
import { ICustomer } from '../customer/customer.component';
import { ActivatedRoute } from '@angular/router';
import { GetCustomerOrdersByIdFromServerService } from '../get-customer-orders-by-id-from-server.service';
import { CustomerOrdersCostsfromServerService } from '../customer-orders-costsfrom-server.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
customer:ICustomer;
orders: IOrder[];
summ: number;
  constructor(private infoService: GetCustomerInfoByIdFromServerService,
    private costsService: CustomerOrdersCostsfromServerService,
    private ordersService: GetCustomerOrdersByIdFromServerService,
    private _http: Http,
    private httpClient: HttpClient,
  private route: ActivatedRoute) { }

  ngOnInit() {
this.route.paramMap
.subscribe(params=>{
  let id = +params.get('id');

  this.infoService.GetCustomerInfoById(id)
  .subscribe((Data) => {
    this.customer= Data.json();
}
    , (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            console.log("Client-side error occured at_____GetAllFullNamesFromServerService");
        } else {
            console.log("Server-side error occured at_____GetAllFullNamesFromServerService");
        }
    });

    this.ordersService.GetCustomerOrdersById(id)
    .subscribe((Data) => {
      this.orders = Data.json();
  }
      , (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
              console.log("Client-side error occured at_____GetAllFullNamesFromServerService");
          } else {
              console.log("Server-side error occured at_____GetAllFullNamesFromServerService");
          }
      });

      this.costsService.CustomerOrdersCOSTS(id)
      .subscribe((Data) => {
        this.summ = Data.json();
    }
        , (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log("Client-side error occured at_____GetAllFullNamesFromServerService");
            } else {
                console.log("Server-side error occured at_____GetAllFullNamesFromServerService");
            }
        });

});
    
  }

}

export interface IOrder{
  Id: number,
  OrderNo: string,
  OrderDate: Date,
  OrderPrice: number,
  Customer_Id:number
}