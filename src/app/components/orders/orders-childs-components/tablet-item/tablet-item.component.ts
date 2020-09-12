import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/services';

@Component({
  selector: 'app-tablet-item',
  templateUrl: './tablet-item.component.html',
  styleUrls: ['./tablet-item.component.scss']
})
export class TabletItemComponent implements OnInit {
  @Input() OrderItemTabletData

  constructor(private ordersService: OrdersService) { }
  totalPrice: number = 0
  _OrderItemTabletData
  pracentToatal(p) {
    return (this.totalPrice / 100) * p
  }
  ngOnInit(): void {
    this._OrderItemTabletData = this.OrderItemTabletData.orderItemTableData
    for (let i = 0; i < this._OrderItemTabletData.length; i++) {
      this.totalPrice += this._OrderItemTabletData[i].totalPrice
    }


  }

}
