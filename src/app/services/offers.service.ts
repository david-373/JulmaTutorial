import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  public activeOffersData = [
    {
      img: '../../../assets/images/images (1).jpg',
      fullName: 'Name name',
      city: 'Brismane City',
      reviews: {
        star: 4,
        review: 15
      },
      date: new Date(),
      likes: 212,
      views: 1012,
      order: 56,
      buyers: {
        afterPrice: 500,
        beforPrice: 300
      },
      Retailers: {
        afterPrice: 400,
        beforPrice: 200
      },
      Wholesalers: {
        afterPrice: 350,
        beforPrice: 150
      }

    },

  ]

  public getActiveOffers() {
    return this.activeOffersData
  };
  public previousOffersTableData = [
    { item: 'Name item Name', date: new Date(), offerType: 'Single offer', OfferStatus: 'Discount', Statics: { order: 56, views: 1012, likes: 212 } },
    { item: 'Name item Name', date: new Date(), offerType: 'Collection offer', OfferStatus: 'Bonus', Statics: { order: 6, views: 188, likes: 313 } },


  ];
  public getPreviousOffersTableData() {
    return this.previousOffersTableData
  }
  constructor() { }
}
