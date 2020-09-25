import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OffersService } from 'src/app/services';

@Component({
  selector: 'app-active-offers-detalis',
  templateUrl: './active-offers-detalis.component.html',
  styleUrls: ['./active-offers-detalis.component.scss']
})
export class ActiveOffersDetalisComponent implements OnInit {
  @Input() offerData;
  @Output() oferDeleted = new EventEmitter()
  removeOffer() {
    this.offersService.deleteOffer(this.offerData.id)
    this.oferDeleted.emit()
  }
  constructor(private offersService: OffersService) { }

  ngOnInit(): void {

  }

}
