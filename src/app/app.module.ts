import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderpageComponent } from './components/orderpage/orderpage.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ItemsServicesComponent } from './services/items-services/items-services.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    CartComponent,
    OrderpageComponent,
    ProductDetailPageComponent,
    ItemsServicesComponent,
    LoginPageComponent,
    SignupPageComponent
  ],    
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
