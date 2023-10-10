import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderpageComponent } from './components/orderpage/orderpage.component';



const routes: Routes = [
  {path:"", component:HomeComponent},
  {
    path:"products", component:ProductsComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "orders", component: OrderpageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
