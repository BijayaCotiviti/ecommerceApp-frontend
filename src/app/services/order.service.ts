import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

 

  private baseUrl = 'http://localhost:8080/api'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  // Function to retrieve all orders
  getAllOrders(): Observable<any[]> {
    const url = `${this.baseUrl}/orders`; // Replace 'orders' with your actual endpoint
    return this.http.get<any[]>(url);
  }

  createOrder(orderDetails: any): Observable<any> {
    const url = `${this.baseUrl}/orders`; 
    return this.http.post(url, orderDetails);
  }
}

