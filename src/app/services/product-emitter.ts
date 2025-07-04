import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductEmitterService {

  subject = new Subject<Product>();

  constructor() {}

  SendDataProduct(product:any) {
    this.subject.next(product); //Triggering an event
  }

  getDataProduct() : Observable<Product>{
    return this.subject.asObservable();
  }
}
