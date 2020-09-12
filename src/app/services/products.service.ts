import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products = [
    {
      images:
      {
        image0: '../../../assets/images/la500.jpg',
        image1: '../../../assets/images/la500.jpg',
        image2: '../../../assets/images/laser_medical_equipment_supplier_.jpg',
        image3: '../../../assets/images/28410.jpg'
      }, name: 'UTRO-200-1ST-15 C-BESIN', price: 69.9, reiting: 266, stock: 26, whom: [
        { whomName: 'Retailers', box: 30 },
        { whomName: 'Wholesalers', box: 20 },
        { whomName: 'Buyers', box: 50 },

      ],
    },
    {
      images:
      {
        image0: '../../../assets/images/la500.jpg',
        image1: '../../../assets/images/la500.jpg',
        image2: '../../../assets/images/laser_medical_equipment_supplier_.jpg',
        image3: '../../../assets/images/28410.jpg'
      }, name: 'UTRO-200-1ST-15 C-BESIN', price: 9.9, reiting: 166, stock: 20, whom: [
        { whomName: 'Retailers', box: 60 },
        { whomName: 'Wholesalers', box: 35 },
        { whomName: 'Buyers', box: 89 },
      ]
    },
    {
      images:
      {
        image0: '../../../assets/images/la500.jpg',
        image1: '../../../assets/images/la500.jpg',
        image2: '../../../assets/images/laser_medical_equipment_supplier_.jpg',
        image3: '../../../assets/images/28410.jpg'
      }, name: 'UTRO-200-1ST-15 C-BESIN', price: 80.9, reiting: 366, stock: 30, whom: [
        { whomName: 'Retailers', box: 70 },
        { whomName: 'Wholesalers', box: 37 },
        { whomName: 'Buyers', box: 80 },
      ]
    },
    {
      images:
      {
        image0: '../../../assets/images/la500.jpg',
        image1: '../../../assets/images/la500.jpg',
        image2: '../../../assets/images/laser_medical_equipment_supplier_.jpg',
        image3: '../../../assets/images/28410.jpg'
      }, name: 'UTRO-200-1ST-15 C-BESIN', price: 70.8, reiting: 566, stock: 21, whom: [
        { whomName: 'Retailers', box: 7 },
        { whomName: 'Wholesalers', box: 40 },
        { whomName: 'Buyers', box: 70 },
      ]
    },
    {
      images:
      {
        image0: '../../../assets/images/la500.jpg',
        image1: '../../../assets/images/la500.jpg',
        image2: '../../../assets/images/laser_medical_equipment_supplier_.jpg',
        image3: '../../../assets/images/28410.jpg'
      }, name: 'UTRO-200-1ST-15 C-BESIN', price: 69.1, reiting: 66, stock: 20, whom: [
        { whomName: 'Retailers', box: 76 },
        { whomName: 'Wholesalers', box: 65 },
        { whomName: 'Buyers', box: 45 },
      ]
    },
    {
      images:
      {
        image0: '../../../assets/images/la500.jpg',
        image1: '../../../assets/images/la500.jpg',
        image2: '../../../assets/images/laser_medical_equipment_supplier_.jpg',
        image3: '../../../assets/images/28410.jpg'
      }, name: 'UTRO-200-1ST-15 C-BESIN', price: 6.0, reiting: 126, stock: 25, whom: [
        { whomName: 'Retailers', box: 80 },
        { whomName: 'Wholesalers', box: 55 },
        { whomName: 'Buyers', box: 30 },
      ]
    },
    {
      images:
      {
        image0: '../../../assets/images/la500.jpg',
        image1: '../../../assets/images/la500.jpg',
        image2: '../../../assets/images/laser_medical_equipment_supplier_.jpg',
        image3: '../../../assets/images/28410.jpg'
      }, name: 'UTRO-200-1ST-15 C-BESIN', price: 70.9, reiting: 216, stock: 10, whom: [
        { whomName: 'Retailers', box: 25 },
        { whomName: 'Wholesalers', box: 70 },
        { whomName: 'Buyers', box: 100 },
      ]
    },
    {
      images:
      {
        image0: '../../../assets/images/la500.jpg',
        image1: '../../../assets/images/la500.jpg',
        image2: '../../../assets/images/laser_medical_equipment_supplier_.jpg',
        image3: '../../../assets/images/28410.jpg'
      }, name: 'UTRO-200-1ST-15 C-BESIN', price: 100.9, reiting: 156, stock: 8, whom: [
        { whomName: 'Retailers', box: 30 },
        { whomName: 'Wholesalers', box: 89 },
        { whomName: 'Buyers', box: 105 },
      ]
    },


  ];

  public getProductData() {
    return this.products
  }
  public getSingelProductByIndex(i) {
    return this.products[i]
  }

  constructor() { }
}
