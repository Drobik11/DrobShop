import { IGetProductAndCount } from './../../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  selectedCount: number;
  counts: number[] = [];
  value: number;

  // З батьківського  елементу продукти
  @Input('product') product: IGetProductAndCount;
  // В батьківськую компоненту
  @Output() sendSelectedCount = new EventEmitter<number>(); // !

  constructor(public productService: ProductsService, public http: HttpClient) { }

  ngOnInit(): void {
    // Вивід кількості  товарів в селек.
    this.selectedCount = this.product.count;
    for (let i = 1; i <= this.product.products.countInStock; i++) {
      this.counts.push(i);
    }

  }

  
  send(value: number) {
    this.product.count = +this.selectedCount;
    this.sendSelectedCount.emit(this.product.count);
  }

}
