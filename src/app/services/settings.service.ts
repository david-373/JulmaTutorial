import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public UserTableData: any = [
    {
      num: '1', userName: 'Marrwan assi', jobRole: 'Admin', Email: 'username@gmail.com', mobile: 6002454, location: '', avilable: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus'
      ], days: 8, OrderNo: 1314, orderLimit: 5005
    },
    {
      num: '2', userName: 'Dawoad Khamis', jobRole: 'Supervisor', Email: 'username@gmail.com', mobile: 6902884, location: '', avilable: [

        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus'
      ], days: 8, OrderNo: 1314, orderLimit: 5005
    },
    {
      num: '3', userName: 'Mickel Jackson', jobRole: 'Admin', Email: 'username@gmail.com', mobile: 7000052, location: '', avilable: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, delectus'
      ], days: 8, OrderNo: 1314, orderLimit: 5005
    },
  ];
  addUser(data) {
    this.UserTableData.push(new pushNewUserConstructor(this.UserTableData.length + 1, data[0], data[1], data[2], data[3], data[4], data[5].value, data[6].value, data[7].value, data[8].value, data[9].value, data[10].value)
    )
  }
  editUserData(i, name, job, email, mobile, location, ch1, ch2, ch3, ch4, ch5, ch6) {
    if (name != '' && name != undefined) {
      this.UserTableData[i].userName = name
    }
    if (job != '' && job != undefined) {
      this.UserTableData[i].jobRole = job
    }
    if (email != '' && email != undefined) {
      this.UserTableData[i].Email = email
    }
    if (mobile != '' && mobile != undefined) {
      this.UserTableData[i].mobile = +mobile
    }
    if (location != '' && location != undefined) {
      this.UserTableData[i].location = location
    }
    if (ch1 != undefined) {
      this.UserTableData[i].avilable[0] = ch1
    }
    if (ch2 != undefined) {
      this.UserTableData[i].avilable[1] = ch2
    }
    if (ch3 != undefined) {
      this.UserTableData[i].avilable[2] = ch3
    }
    if (ch4 != undefined) {
      this.UserTableData[i].avilable[3] = ch4
    }
    if (ch5 != undefined) {
      this.UserTableData[i].avilable[4] = ch5
    }
    if (ch6 != undefined) {
      this.UserTableData[i].avilable[5] = ch6
    }
  }
  removeUser(data) {
    return this.UserTableData = this.UserTableData.filter((Data) => {
      return Data != data
    })
  }
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
  newPostPaidListData
  public pushNewCustomer(userName) {
    this.newPostPaidListData = this.UserTableData.filter((data) => {
      return data.userName == userName
    });
    console.log(this.newPostPaidListData)
    this.postPaidBlackListData.push(new constructorForNewPostPaidListData(
      this.postPaidBlackListData.length + 1,
      this.newPostPaidListData[0].userName,
      this.newPostPaidListData[0].days,
      this.newPostPaidListData[0].OrderNo,
      this.newPostPaidListData[0].orderLimit)
    )
    this.postPaidWhiteListData.push(new constructorForNewPostPaidListData(
      this.postPaidBlackListData.length + 1,
      this.newPostPaidListData[0].userName,
      this.newPostPaidListData[0].days,
      this.newPostPaidListData[0].OrderNo,
      this.newPostPaidListData[0].orderLimit)
    )
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
function pushNewUserConstructor(num, userName, jobRole, Email, mobile, location, c1, c2, c3, c4, c5, c6) {
  this.num = num;
  this.userName = userName;
  this.jobRole = jobRole;
  this.Email = Email;
  this.mobile = mobile;
  this.location = location;
  this.avilable = [
    c1, c2, c3, c4, c5, c6
  ]

}
function constructorForNewPostPaidListData(num, customerName, days, orderNo, orederLimit) {
  this.num = num,
    this.customerName = customerName,
    this.days = days,
    this.orderNo = orderNo,
    this.orderLimit = orederLimit
}