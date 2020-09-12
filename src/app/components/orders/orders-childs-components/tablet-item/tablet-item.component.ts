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
  _OrderItemTabletData
  ngOnInit(): void {
    console.log(this.OrderItemTabletData)
    this._OrderItemTabletData = this.OrderItemTabletData.orderItemTableData
    console.log(this._OrderItemTabletData)

  }

}
