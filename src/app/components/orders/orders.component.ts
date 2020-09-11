import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  Orders = this.ordersService.getOrderData()
  selectedDate = false;
  color = false;
  onSelect() {
    this.selectedDate = !this.selectedDate
    this.color = !this.color
  };
  colorType = false;
  selectedType = false;
  onSelectType() {
    this.selectedType = !this.selectedType
    this.colorType = !this.colorType
  };
  colorStatus = false;
  selectedStatus = false;
  onSelectStatus() {
    this.selectedStatus = !this.selectedStatus
    this.colorStatus = !this.colorStatus
  }


  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
  }

}
