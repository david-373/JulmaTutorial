import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public users = [
    { img: '../../../assets/images/images (1).jpg', fullName: 'Salah Ahmed', by: 'Retailer', country: 'Libya-Region1', usage: 'Pharmacy' },
    { img: '../../../assets/images/foto-cbouvier.74c80c8a.jpg', fullName: 'Nour Ayyash', by: 'Retailer', country: 'Libya-Region2', usage: 'Mall' },
    { img: '../../../assets/images/1024-original.1e9af38097008ef9573f03b03ef6f363219532f9.jpg', fullName: 'Nabil Khatib', by: 'Wholeseler', country: 'Libya-Region3', usage: 'Clinc' },
    { img: '../../../assets/images/images.jpg', fullName: 'Mohhamad Ali', by: 'Retailer', country: 'Libya-Region4', usage: 'Shop' },
    { img: '../../../assets/images/nate_munger.png', fullName: 'Sabir Mousa', by: 'Retailer', country: 'Libya-Region5', usage: 'Pharmacy' },

  ];
  public getUsers() {
    return this.users
  }

}
