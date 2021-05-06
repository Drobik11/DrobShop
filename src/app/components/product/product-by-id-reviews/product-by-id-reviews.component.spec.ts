import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByIdReviewsComponent } from './product-by-id-reviews.component';

describe('ProductByIdReviewsComponent', () => {
  let component: ProductByIdReviewsComponent;
  let fixture: ComponentFixture<ProductByIdReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByIdReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByIdReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
