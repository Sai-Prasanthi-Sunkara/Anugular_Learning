import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoGetter } from './product-info-getter';

describe('ProductInfoGetter', () => {
  let component: ProductInfoGetter;
  let fixture: ComponentFixture<ProductInfoGetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInfoGetter],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductInfoGetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
