import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ItemsServicesService } from 'src/app/services/items-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private itemsService: ItemsServicesService,
    private cartService: CartService
    ) { }

  products: any[] = [];

  ngOnInit(): void {
    // Call the service method to fetch products during component initialization
    this.itemsService.getAllProducts().subscribe(
      (data) => {
        console.log(data);
        this.products = data; // Update the products array with the fetched data
      }
    );
  }

  

  addToCart(product: any): void {
    this.cartService.addItem(product);
    console.log(this.cartService.getCartItems());
  }

}
