import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  // Initialize an empty cart array to store cart items
  private cart: CartItem[] = [];

  constructor() {}

  // Method to add a product to the cart
  addToCart(product: Product): void {
    const existingItem = this.cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      // If the product already exists in the cart, increase its quantity
      existingItem.quantity++;
    } else {
      // If the product is not in the cart, add it as a new item
      const newItem: CartItem = {
        product,
        quantity: 1,
      };
      this.cart.push(newItem);
    }
  }

  // Method to remove a product from the cart
  removeFromCart(product: Product): void {
    const index = this.cart.findIndex((item) => item.product.id === product.id);

    if (index !== -1) {
      // If the product is found in the cart, remove it
      this.cart.splice(index, 1);
    }
  }

  // Method to get the cart items
  getCartItems(): CartItem[] {
    return this.cart;
  }

  // Method to calculate the total price of items in the cart
  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}

interface Product {
  id: number;
  name: string;
  price: number;
  // Add other product properties as needed
}

interface CartItem {
  product: Product;
  quantity: number;
}
