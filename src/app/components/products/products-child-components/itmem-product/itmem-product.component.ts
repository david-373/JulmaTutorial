import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itmem-product',
  templateUrl: './itmem-product.component.html',
  styleUrls: ['./itmem-product.component.scss']
})
export class ItmemProductComponent implements OnInit {
  @Input() singelProsuctData

  image;
  img0;
  img1;
  img2;
  img3;
  changeImg(i) {
    if (i == 1) {
      this.img0 = this.img1
    } else if (i == 2) {
      this.img0 = this.img2
    } else if (i == 3) {
      this.img0 = this.img3
    }
  }
  constructor() { }
  ngOnInit(): void {

    this.image = this.singelProsuctData.images
    this.img0 = this.image.image0
    this.img1 = this.image.image1
    this.img2 = this.image.image2
    this.img3 = this.image.image3
  }

}
