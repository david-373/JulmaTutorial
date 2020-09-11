import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services';
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


  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
  }

}
