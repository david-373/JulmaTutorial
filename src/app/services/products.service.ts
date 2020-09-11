import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products = [
    { img: '../../../assets/images/cr2000200_YE_shopping trolley on yellow background.jpg', name: 'UTRO-200-1ST-15 C-BESIN', price: 69.9, reiting: 266, stock: 26 },
    { img: '../../../assets/images/cr2000200_YE_shopping trolley on yellow background.jpg', name: 'UTRO-200-1ST-15 C-BESIN', price: 9.9, reiting: 166, stock: 20 },
    { img: '../../../assets/images/cr2000200_YE_shopping trolley on yellow background.jpg', name: 'UTRO-200-1ST-15 C-BESIN', price: 80.9, reiting: 366, stock: 30 },
    { img: '../../../assets/images/cr2000200_YE_shopping trolley on yellow background.jpg', name: 'UTRO-200-1ST-15 C-BESIN', price: 70.8, reiting: 566, stock: 21 },
    { img: '../../../assets/images/cr2000200_YE_shopping trolley on yellow background.jpg', name: 'UTRO-200-1ST-15 C-BESIN', price: 69.1, reiting: 66, stock: 20 },
    { img: '../../../assets/images/cr2000200_YE_shopping trolley on yellow background.jpg', name: 'UTRO-200-1ST-15 C-BESIN', price: 6.0, reiting: 126, stock: 25 },
    { img: '../../../assets/images/cr2000200_YE_shopping trolley on yellow background.jpg', name: 'UTRO-200-1ST-15 C-BESIN', price: 70.9, reiting: 216, stock: 10 },
    { img: '../../../assets/images/cr2000200_YE_shopping trolley on yellow background.jpg', name: 'UTRO-200-1ST-15 C-BESIN', price: 100.9, reiting: 156, stock: 8 },


  ];
  public getProductData() {
    return this.products
  }

  constructor() { }
}
