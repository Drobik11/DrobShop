import { Router } from '@angular/router';
import { IGetProductResponse, IProduct } from 'src/app/interfaces/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-app-btn',
  templateUrl: './app-btn.component.html',
  styleUrls: ['./app-btn.component.scss']
})
export class AppBtnComponent implements OnInit {

  // З інпута значення
  @Input('searchProductBtn') searchProduct: string;
  products: IProduct;
  text: string;

  @Output() zeroing = new EventEmitter<string>();
  constructor(public productsService: ProductsService, public router: Router) { }

  ngOnInit(): void {

  }

  //пошук товара по вводу(інпуті)
  findProduct(text: string) {
    this.productsService.searchProductFunction(this.searchProduct, this.products);
    this.router.navigate([`search/${text}`]);
    this.zeroing.emit(this.searchProduct);

  }

}

