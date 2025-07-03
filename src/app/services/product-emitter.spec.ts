import { TestBed } from '@angular/core/testing';

import { ProductEmitter } from './product-emitter';

describe('ProductEmitter', () => {
  let service: ProductEmitter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEmitter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
