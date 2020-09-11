import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-payment-methods',
  templateUrl: './settings-payment-methods.component.html',
  styleUrls: ['./settings-payment-methods.component.scss']
})
export class SettingsPaymentMethodsComponent implements OnInit {
  cardCheckedPyapal = false;
  cardCheckedVisa = false;
  cardCheckedMaster = false;
  checkCardPaypal() {
    this.cardCheckedPyapal = !this.cardCheckedPyapal

  }
  checkCardVisa() {
    this.cardCheckedVisa = !this.cardCheckedVisa
  }
  checkCardMaster() {
    this.cardCheckedMaster = !this.cardCheckedMaster
  }
  constructor() { }

  ngOnInit(): void {
  }

}
