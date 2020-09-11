import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class SettingsCurrencyComponent implements OnInit {
  public itog
  currencyOutcome(value1, valuta1, value2, valuta2) {
    if (valuta1 == "USD" && valuta2 == "USD") {
      this.itog = value1 * 1
    } else if (valuta1 == "CAD" && valuta2 == "CAD") {
      this.itog = value1 * 1

    } else if (valuta1 == "RUB" && valuta2 == "RUB") {
      this.itog = value1 * 1
    } else if (valuta1 == "USD" && valuta2 == "CAD") {
      valuta2 = 1.31
      this.itog = value1 * valuta2
    } else if (valuta1 == "USD" && valuta2 == "RUB") {
      valuta2 = 76.0713
      this.itog = value1 * valuta2
    } else if (valuta1 == "CAD" && valuta2 == "USD") {
      valuta2 = 0.76
      this.itog = value1 * valuta2
    } else if (valuta1 == "CAD" && valuta2 == "RUB") {
      valuta2 = 57.38
      this.itog = value1 * valuta2
    } else if (valuta1 == "RUB" && valuta2 == "USD") {
      valuta2 = 0.013
      this.itog = value1 * valuta2
    } else if (valuta1 == "RUB" && valuta2 == "CAD") {
      valuta2 = 0.017
      this.itog = value1 * valuta2
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
