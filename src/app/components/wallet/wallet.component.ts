import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services'
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  deales = this.walletService.getWalletDeales()
  selectStatus;
  onSelectStatus() {
    this.selectStatus = !this.selectStatus
  }
  debitValue;
  creditValue;

  totalDebitsWhitCredits
  totalDebitsCounter() {
    for (let i = 0; i < this.deales.length; i++) {

      if (this.deales[i].Debit != '') {
        this.debitValue = +this.deales[i].Debit

      } else if (this.deales[i].Credit != '') {
        this.creditValue = +this.deales[i].Credit

      }

    } this.totalDebitsWhitCredits = this.debitValue + this.creditValue

  }

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {

    this.totalDebitsCounter()
  }
}




