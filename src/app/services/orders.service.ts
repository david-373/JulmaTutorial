import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public OrdersData = [
    {
      orderId: 1, dateTime: new Date(), orderItemTableData: [
        { num: 1, itme: 'Name product', price: 10, quenity: 2, totalPrice: 100 },
        { num: 1, itme: 'Name product', price: 10, quenity: 2, totalPrice: 100 },
        { num: 1, itme: 'Name product', price: 10, quenity: 2, totalPrice: 100 },
        { num: 1, itme: 'Name product', price: 10, quenity: 2, totalPrice: 100 },
        { num: 1, itme: 'Name product', price: 10, quenity: 2, totalPrice: 100 },

      ], customerID: 1, countryRegion: 'Libya-region 1', Payment: 'Paid', Satus: 'Completed'
    },
    {
      orderId: 1, dateTime: new Date(), orderItemTableData: [
        { num: 2, itme: 'Name product', price: 20, quenity: 2, totalPrice: 10 },
        { num: 2, itme: 'Name product', price: 20, quenity: 2, totalPrice: 10 },
        { num: 2, itme: 'Name product', price: 20, quenity: 2, totalPrice: 10 },
        { num: 2, itme: 'Name product', price: 20, quenity: 2, totalPrice: 10 },
        { num: 2, itme: 'Name product', price: 20, quenity: 2, totalPrice: 10 }
      ],
      customerID: 1, countryRegion: 'Libya-region 2', Payment: 'Post paid', Satus: 'Pendig'
    },
    {
      orderId: 1, dateTime: new Date(), orderItemTableData: [
        { num: 3, itme: 'Name product', price: 25, quenity: 2, totalPrice: 103 },
        { num: 3, itme: 'Name product', price: 25, quenity: 2, totalPrice: 103 },
        { num: 3, itme: 'Name product', price: 25, quenity: 2, totalPrice: 103 },
        { num: 3, itme: 'Name product', price: 25, quenity: 2, totalPrice: 103 },
        { num: 3, itme: 'Name product', price: 25, quenity: 2, totalPrice: 103 },

      ], customerID: 1, countryRegion: 'Libya-region 3', Payment: 'Unpaid', Satus: 'Rejected'
    },
    {
      orderId: 1, dateTime: new Date(), orderItemTableData: [
        { num: 4, itme: 'Name product', price: 40, quenity: 2, totalPrice: 100 },
        { num: 4, itme: 'Name product', price: 40, quenity: 2, totalPrice: 100 },
        { num: 4, itme: 'Name product', price: 40, quenity: 2, totalPrice: 100 },
        { num: 4, itme: 'Name product', price: 40, quenity: 2, totalPrice: 100 },
        { num: 4, itme: 'Name product', price: 40, quenity: 2, totalPrice: 100 },

      ], customerID: 1, countryRegion: 'Libya-region 4', Payment: 'Post paid', Satus: 'On Hold'
    },
    {
      orderId: 1, dateTime: new Date(), orderItemTableData: [
        { num: 5, itme: 'Name product', price: 13, quenity: 2, totalPrice: 50 },
        { num: 5, itme: 'Name product', price: 13, quenity: 2, totalPrice: 50 },
        { num: 5, itme: 'Name product', price: 13, quenity: 2, totalPrice: 50 },
        { num: 5, itme: 'Name product', price: 13, quenity: 2, totalPrice: 50 },
        { num: 5, itme: 'Name product', price: 13, quenity: 2, totalPrice: 50 },
      ], customerID: 1, countryRegion: 'Libya-region 5', Payment: 'Paid', Satus: 'Completed'
    },

  ];
  public getOrderData() {
    return this.OrdersData
  }
  public getOrderItemTableData(i) {
    return this.OrdersData[i]
  }

}
