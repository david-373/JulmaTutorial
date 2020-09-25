import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffersService } from 'src/app/services';

@Component({
  selector: 'app-active-previous-offers',
  templateUrl: './active-previous-offers.component.html',
  styleUrls: ['./active-previous-offers.component.scss']
})
export class ActivePreviousOffersComponent implements OnInit {
  @Input() CloseDetalis
  detalisActiv = false
  public activeOffersData
  tableData = this.offersService.getPreviousOffersTableData();
  public DataForSingleOfferDetalis
  goToDetalis(data) {
    this.detalisActiv = !this.detalisActiv;
    this.DataForSingleOfferDetalis = data
  }
  offerDeleted() {
    this.detalisActiv = !this.detalisActiv;
    this.router.navigateByUrl('julma/reviews', { skipLocationChange: true }).then(() => {
      this.router.navigate(['julma/offers']);
    });
  }

  constructor(private offersService: OffersService, private router: Router) {

  }

  ngOnInit(): void {
    this.activeOffersData = this.offersService.getActiveOffers();
  }

}
