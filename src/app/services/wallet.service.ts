import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  public walletDeales = [
    { No: 111, DateTime: new Date(), ReferenceID: "00000", Description: 'Compision', Debit: "", Credit: '100' },
    { No: 111, DateTime: new Date(), ReferenceID: "00000", Description: 'Sales', Debit: "2000", Credit: '' },
    { No: 111, DateTime: new Date(), ReferenceID: "00000", Description: 'Sales', Debit: "", Credit: '' },
  ];
  public getWalletDeales() {
    return this.walletDeales
  }
}
