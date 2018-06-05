import { Component, OnInit, Injectable } from '@angular/core';
import { GetAllFullNamesFromServerService } from '../get-all-full-names-from-server.service';
import { Observable } from './../../../node_modules/rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:ICustomer[];

  constructor(private customersService: GetAllFullNamesFromServerService,
    private _http: Http,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.customersService.GetAllFullNames()
    .subscribe((Data) => {
      this.customers= Data.json();
  }
      , (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
              console.log("Client-side error occured at_____GetAllFullNamesFromServerService");
          } else {
              console.log("Server-side error occured at_____GetAllFullNamesFromServerService");
          }
      });
  }
  
}

export interface ICustomer{
  Id: number,
  FName: string,
  MName: string,
  LName: string,
  DateOfBirth: Date,
  Phone: string
}