import { Component, OnInit, Injectable } from '@angular/core';
import { GetAllFullNamesFromServerService } from './get-all-full-names-from-server.service';
import { Observable } from './../../node_modules/rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { ICustomer } from './customer/customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  

}
