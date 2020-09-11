import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public UserTableData: any = [
    { num: '1', userName: 'Marrwan assi', jobRole: 'Admin', Email: 'username@gmail.com', mobile: 6002454 },
    { num: '2', userName: 'Dawoad Khamis', jobRole: 'Supervisor', Email: 'username@gmail.com', mobile: 6902884 },
    { num: '3', userName: 'Mickel Jackson', jobRole: 'Admin', Email: 'username@gmail.com', mobile: 7000052 },

  ]
  public getUserTableData() {
    return this.UserTableData
  }

  public RegionData = [

  ]
  public getRegionTableData() {
    return this.RegionData
  }

  public constructorForRegion(one: string, two: number) {

    return { country: one, rate: two }

  }
  public AddRegion(country, rate) {
    this.RegionData.push(this.constructorForRegion(country, rate))
  }
  public RegionRemove(region) {
    this.RegionData = this.RegionData.filter((Data) => {
      return Data !== region
    })
  }
  public postPaidWhiteListData = [
    { num: 1, customerName: 'Marwan Assi', days: 7, orderNo: 2136, orderLimit: 2000 },
    { num: 2, customerName: 'Elvis Presley', days: 21, orderNo: 2600, orderLimit: 8000 },
    { num: 3, customerName: 'Tom Harris ', days: 3, orderNo: 4440, orderLimit: 5500 },

  ]
  public getPostPaidWhiteListData() {
    return this.postPaidWhiteListData
  }
  public postPaidBlackListData = [
    { num: 1, customerName: 'Marwan Assi', days: 8, orderNo: 2536, orderLimit: 2100 },
    { num: 2, customerName: 'Usein Bold', days: 32, orderNo: 9800, orderLimit: 8600 },
    { num: 3, customerName: 'Jhone Lenon ', days: 13, orderNo: 4550, orderLimit: 5920 },
  ]
  public getPostPaidBlackListData() {
    return this.postPaidBlackListData
  }
  constructor() { }
}
