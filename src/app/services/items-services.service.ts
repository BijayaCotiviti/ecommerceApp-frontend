import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemsServicesService {
  private baseUrl = 'http://localhost:8080/api'; // Replace with your actual backend API URL

  constructor(private httpClient: HttpClient) {
    
   }

  // Function to retrieve all products
  getAllProducts(): Observable<any[]> {
    const url = `${this.baseUrl}/items`; // Replace 'products' with your actual endpoint
    return this.httpClient.get<any[]>(url);
  }
}
