import { Component, OnInit, Inject } from '@angular/core';
import { OffersDialogData } from '../dialog.data';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OffersService } from 'src/app/services';

@Component({
  selector: 'app-add-new-offer',
  templateUrl: './add-new-offer.component.html',
  styleUrls: ['./add-new-offer.component.scss']
})
export class AddNewOfferComponent implements OnInit {
  Shop = false;
  Pharmacy = false;
  Clinic = false;
  Mall = false;

  selectTypeProduct(type) {

    this.ProductType = type
    if (type == 'Shop') {
      this.Shop = !this.Shop
      if (this.Shop == true) {
        this.Pharmacy = false;
        this.Clinic = false;
        this.Mall = false
      }
    }
    if (type == 'Pharmacy') {
      this.Pharmacy = !this.Pharmacy
      if (this.Pharmacy == true) {
        this.Shop = false;
        this.Clinic = false;
        this.Mall = false
      }
    }
    if (type == 'Clinic') {
      this.Clinic = !this.Clinic
      if (this.Clinic == true) {
        this.Shop = false;
        this.Pharmacy = false;
        this.Mall = false
      }
    }
    if (type == 'Mall') {
      this.Mall = !this.Mall
      if (this.Mall == true) {
        this.Shop = false;
        this.Pharmacy = false;
        this.Clinic = false;
      }
    }
  }
  Package = false;
  Box = false;
  Piece = false;
  selectType(type) {
    this.Type = type
    if (type == 'Package') {
      this.Package = !this.Package
      if (this.Package == true) {
        this.Box = false;
        this.Piece = false;
      }
    }
    if (type == 'Box') {
      this.Box = !this.Box
      if (this.Box == true) {
        this.Package = false;
        this.Piece = false;
      }
    }
    if (type == 'Piece') {
      this.Piece = !this.Piece
      if (this.Piece == true) {
        this.Package = false;
        this.Box = false;
      }
    }
  }
  Hourly = false;
  Daily = false;
  selectPeriod(type) {
    if (type == 'Hourly') {
      this.Hourly = !this.Hourly
      if (this.Hourly == true) {
        this.Daily = false
      }
    }
    if (type == 'Daily') {
      this.Daily = !this.Daily
      if (this.Daily == true) {
        this.Hourly = false
      }
    }
  }
  priceData = []
  by: string;
  price: number;
  priceItog: number
  addPrice(by, price, pracent) {
    console.log(by)
    if (this.priceData.length >= 3) {
      return
    }
    if (this.priceData[0]?.by == by || this.priceData[1]?.by == by || this.priceData[2]?.by == by) {
      return
    }
    this.priceItog = price - (pracent / 100 * price)
    this.priceData.push(new constructorForPrice(by, price, this.priceItog))
  }
  removePrice(pricedata) {
    this.priceData = this.priceData.filter((data) => {
      return data != pricedata
    })
  }
  close() {
    this.dialogRef.close()
  }
  ProductType: string
  Type: string
  addNewOffer(typeOffer, name, stock) {
    this.offersService.addNewOffer(typeOffer, this.ProductType, name, this.Type, stock, this.priceData)
  }
  constructor(
    public dialogRef: MatDialogRef<AddNewOfferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OffersDialogData,
    private offersService: OffersService
  ) { }

  ngOnInit(): void {
  }

}
function constructorForPrice(by, price, priceItog) {
  this.by = by;
  this.price = price;
  this.priceItog = priceItog
}