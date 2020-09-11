import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-julma',
  templateUrl: './julma.component.html',
  styleUrls: ['./julma.component.scss']
})
export class JulmaComponent implements OnInit {

  showusd = false;
  showlng = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  showingusd() {
    this.showusd = !this.showusd
  }
  showinglng() {
    this.showlng = !this.showlng
  }


}
