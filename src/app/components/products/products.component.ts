import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products = this.productsService.getProductData();
  productColor = false;
  onSelectProduct() {
    this.productColor = !this.productColor
  };
  nameColor = false;
  onSelectName() {
    this.nameColor = !this.nameColor
  }
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

}
