import { IGetProductAndCount } from './../../../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-product-by-id-information',
  templateUrl: './product-by-id-information.component.html',
  styleUrls: ['./product-by-id-information.component.scss']
})
export class ProductByIdInformationComponent implements OnInit {

  id: string;
  product: any;
  selectedCount: number = 1;
  counts: number[] = [];

  constructor(public productService: ProductsService, private activateRoute: ActivatedRoute, public http: HttpClient, public loaderservice: LoaderService) {
  }

  ngOnInit(): void {
    
    this.id = this.activateRoute.snapshot.params['id'];
    this.http.get(`https://nodejs-final-mysql.herokuapp.com/products/${this.id}`).subscribe(res => {
      this.product = res;
      console.log(this.product)
      for (let i = 1; i <= this.product.countInStock; i++) {

        this.counts.push(i);
      }
      
      this.product = Object.assign({}, {
        products: this.product,
        count: this.selectedCount
      })
      // console.log(this.product);
    });

  }

  // Передача товаров в корзину
  buyProduct(product: IGetProductAndCount): void {
    // console.log(product);
    this.productService.buyProductAndCount(product);
    // Активируем функцию
    this.takeSelectedCount(this.selectedCount);
  }

  
  takeSelectedCount(value: number) {
  
    this.product.count = +value;
  }

}
