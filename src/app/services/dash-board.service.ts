import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  public deales = [
    { incoiceNo: 1235, countryRegion: 'Libya-Region 1', DateTime: new Date(), Quentity: 10, Total: 6.96, Status: 'Delivered' },
    { incoiceNo: 1236, countryRegion: 'Libya-Region 2', DateTime: new Date(), Quentity: 10, Total: 6.96, Status: 'Delivered' },
    { incoiceNo: 1234, countryRegion: 'Libya-Region 3', DateTime: new Date(), Quentity: 10, Total: 6.96, Status: 'Delivered' },
    { incoiceNo: 1234, countryRegion: 'Libya-Region 4', DateTime: new Date(), Quentity: 10, Total: 6.96, Status: 'Delivered' },
    { incoiceNo: 1232, countryRegion: 'Libya-Region 5', DateTime: new Date(), Quentity: 10, Total: 6.96, Status: 'Delivered' },
  ];
  public getDeales() {
    return this.deales
  };


  public salesDetalisProgressData = [1000, 90000, 50000, 40000, 150000, 80000, 10000, 9000, 100000, 3500, 6000, 190000, 105000, 95000, 105000];
  public getSalesDetalisData() {
    return this.salesDetalisProgressData
  }
}
