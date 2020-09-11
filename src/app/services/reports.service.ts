import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  public reportsProsuctsData = [7200, 800, 3600, 5900, 2300, 800, 600, 800, 2300, 3000, 2300, 6200, 7200, 3600];
  public getProductsData() {
    return this.reportsProsuctsData
  }
}
