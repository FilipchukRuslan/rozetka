import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerOrdersCostsfromServerService } from './customer-orders-costsfrom-server.service';
import { GetAllFullNamesFromServerService } from './get-all-full-names-from-server.service';
import { GetCustomerInfoByIdFromServerService } from './get-customer-info-by-id-from-server.service';
import { GetCustomerOrdersByIdFromServerService } from './get-customer-orders-by-id-from-server.service';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NotFoundComponent,
    ProfileComponent,
    
  ],
  imports: [
  BrowserModule, 
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: CustomerComponent},
      {path: 'profile/:id', component: ProfileComponent},
      {path: '**', component: NotFoundComponent}

    ])
  ],
  providers: [CustomerOrdersCostsfromServerService,
    GetAllFullNamesFromServerService,
    GetCustomerInfoByIdFromServerService,
    GetCustomerOrdersByIdFromServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
