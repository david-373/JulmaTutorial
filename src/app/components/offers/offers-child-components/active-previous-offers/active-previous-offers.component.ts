import { Component, OnInit, SkipSelf } from '@angular/core';
import { OffersService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-previous-offers',
  templateUrl: './active-previous-offers.component.html',
  styleUrls: ['./active-previous-offers.component.scss']
})
export class ActivePreviousOffersComponent implements OnInit {
  activeOffersData = this.offersService.getActiveOffers();
  tableData = this.offersService.getPreviousOffersTableData();
  detalisActiv = false;
  public DataForSingleOfferDetalis
  goToDetalis(data) {
    this.detalisActiv = true;
    this.DataForSingleOfferDetalis = data
  }
  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
  }

}
