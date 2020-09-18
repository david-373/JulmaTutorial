import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services';
import { AddNewOfferComponent } from './dialog/add-new-offer/add-new-offer.component';
import { MatDialog } from '@angular/material/dialog'
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offerActiv = false;
  onSelectOffer() {
    this.offerActiv = !this.offerActiv
  };
  locationActiv = false;
  onSelectLocation() {
    this.locationActiv = !this.locationActiv
  };
  customerTypeActiv = false;
  onSelectType() {
    this.customerTypeActiv = !this.customerTypeActiv
  };
  addOffer() {
    const dialogRef = this.dialog.open(AddNewOfferComponent, {
      data: {

      }
    })
  }

  constructor(private offersService: OffersService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
