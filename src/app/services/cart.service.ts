import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSource = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();
  constructor() { }

  // Add an item to the cart
  addItem(item: any): void {
    this.cartItemsSource.value.push(item);

  }

  // Update an item in the cart
  updateItem(item: any): void {
    const index = this.cartItemsSource.value.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.cartItemsSource.value[index] = item;
    }
  }

  // Remove an item from the cart
  removeItem(itemId: number): void {
    const index = this.cartItemsSource.value.findIndex(item => item.id === itemId);
    if (index !== -1) {
      this.cartItemsSource.value.splice(index, 1);
    }
  }

  // Get the cart's contents
  getCartItems(): any[] {
    return this.cartItemsSource.value;
  }

  // Clear the cart
  clearCart(): void {
    this.cartItemsSource.value;//clear the cart
  }
}
