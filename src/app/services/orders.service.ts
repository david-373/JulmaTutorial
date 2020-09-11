import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public OrdersData = [
    { orderId: 1, dateTime: new Date(), customerID: 1, countryRegion: 'Libya-region 1', Payment: 'Paid', Satus: 'Completed' },
    { orderId: 1, dateTime: new Date(), customerID: 1, countryRegion: 'Libya-region 2', Payment: 'Post paid', Satus: 'Pendig' },
    { orderId: 1, dateTime: new Date(), customerID: 1, countryRegion: 'Libya-region 3', Payment: 'Unpaid', Satus: 'Rejected' },
    { orderId: 1, dateTime: new Date(), customerID: 1, countryRegion: 'Libya-region 4', Payment: 'Post paid', Satus: 'On Hold' },
    { orderId: 1, dateTime: new Date(), customerID: 1, countryRegion: 'Libya-region 5', Payment: 'Paid', Satus: 'Completed' },

  ];
  public getOrderData() {
    return this.OrdersData
  }
}
