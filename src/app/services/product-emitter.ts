import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductEmitterService {

  subject = new Subject();

  constructor() {}

  SendDataProduct(product:any) {
    this.subject.next(product); //Triggering an event
  }

  getDataProduct() {
    return this.subject.asObservable();
  }
}
