import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any[] = [] ;

  

  constructor(private cartService: CartService,
    private orderService: OrderService) {
    this.cartItems = cartService.getCartItems();
  }

  ngOnInit(): void {
    // Subscribe to changes in the cart service's state
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });}

  updateItem(item: any): void {
    this.cartService.updateItem(item);
  }

  removeItem(itemId: number): void {
    this.cartService.removeItem(itemId);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  calculateTotalCost(): number {
    let totalCost = 0;

    for (const item of this.cartItems) {
      totalCost += item.price; // Assuming the price is in the 'price' property of each item
    }

    return totalCost;
  }

  checkout(): void {
    const orderDetails = {
      username:"bijay",
      orderStatus: "PROCESSING",
      totalPrice: this.calculateTotalCost()
    };

    // Call the OrderService to create the order
    this.orderService.createOrder(orderDetails).subscribe(
      (response) => {
        // Handle successful order creation (e.g., show a success message)
        console.log('Order created successfully:', response);

        // Clear the cart after successful checkout
        this.cartService.clearCart();
        this.cartItems = [];
      })
    }

}
