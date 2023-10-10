import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {
  orders: any[] = []; // Initialize an empty array to store the orders

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    // Call the service method to fetch orders during component initialization
    this.orderService.getAllOrders().subscribe(
      (data) => {
        console.log(data);
        this.orders = data; // Update the orders array with the fetched data
      },
    );
  }

  formatDate(date: number): string {
    const orderDate = new Date(date);
    return orderDate.toLocaleString(); // You can format the date as needed
  }
}
