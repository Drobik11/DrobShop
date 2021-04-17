import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetProductResponse, IProduct } from 'src/app/interfaces/product';
import { LoaderService } from 'src/app/services/loader.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})

export class ProductItemComponent implements OnInit {

  id: string;
  products: any[] = [];

  // Компоненти продукт
  @Input('product') product: IProduct;

  constructor(public productService: ProductsService, public http: HttpClient, public router: Router, public loaderservice: LoaderService) {

  }

  ngOnInit(): void {
  }

  // На опис товару
  goToProd(id: string): void {
    this.router.navigate([`products/${id}`]);
  }



}
