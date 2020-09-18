import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  public activeOffersData = [
    {
      img: '../../../assets/images/Baebies_Thumb_new.jpg',
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
        name: 'Buyers',
        afterPrice: 400,
        beforPrice: 300
      },

      retailers: {
        name: 'Retailers',
        afterPrice: 400,
        beforPrice: 200
      },
      wholesalers: {
        name: 'Wholesalers',
        afterPrice: 350,
        beforPrice: 150
      },
      Typeoffer: 'Collection offer',
      TypeProduct: 'Package',
      Type: 'Box',
      stock: 300
    },
    {
      img: '../../../assets/images/Baebies_Thumb_new.jpg',
      fullName: 'Name name',
      city: 'Brismane City',
      reviews: {
        star: 4,
        review: 15
      },
      date: new Date(),
      likes: 21,
      views: 112,
      order: 56,
      buyers: {
        name: 'Buyers',
        afterPrice: 400,
        beforPrice: 300
      },

      retailers: {
        name: 'Retailers',
        afterPrice: 400,
        beforPrice: 200
      },
      wholesalers: {
        name: 'Wholesalers',
        afterPrice: 350,
        beforPrice: 150
      },
      Typeoffer: 'Single offer',
      TypeProduct: 'Clinic',
      Type: 'Piece',
      stock: 550

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
  img = '../../../assets/images/Baebies_Thumb_new.jpg';
  city = 'Brismane City';
  date = new Date()
  addNewOffer(TypeOffer, TypeProduct, fullName, Type, stock, price) {

    this.activeOffersData.push(new constructorActiveOffersData(this.img, fullName, this.city, this.date, price, TypeOffer, TypeProduct, Type, stock))
    console.log(price);

  }
  constructor() { }
}
function constructorActiveOffersData(img, fullName, city, date, price, TypeOffer, TypeProduct, Type, stock) {
  this.img = img
  this.fullName = fullName
  this.city = city
  this.date = date
  this.buyers = new constructorPrice(price[0]?.by, price[0]?.price, price[0]?.priceItog)
  this.retailers = new constructorPrice(price[1]?.by, price[1]?.price, price[1]?.priceItog)
  this.wholesalers = new constructorPrice(price[2]?.by, price[2]?.price, price[2]?.priceItog)
  this.TypeOffer = TypeOffer
  this.TypeProduct = TypeProduct
  this.Type = Type
  this.stock = stock

}
function constructorPrice(name, afterPrice, beforPrice) {
  this.name = name
  this.afterPrice = afterPrice
  this.beforPrice = beforPrice
}