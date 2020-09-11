import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-active-offers-detalis',
  templateUrl: './active-offers-detalis.component.html',
  styleUrls: ['./active-offers-detalis.component.scss']
})
export class ActiveOffersDetalisComponent implements OnInit {
  @Input() offerData;
  constructor() { }

  ngOnInit(): void {
    
  }

}
