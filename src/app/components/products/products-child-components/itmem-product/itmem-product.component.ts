import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itmem-product',
  templateUrl: './itmem-product.component.html',
  styleUrls: ['./itmem-product.component.scss']
})
export class ItmemProductComponent implements OnInit {
  @Input() singelProsuctData
  imZad = [
    { name: 'Retailers', num: 30 },
    { name: 'Wholesalers', num: 20 },
    { name: 'Buyers', num: 50 },

  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.singelProsuctData)
  }

}
