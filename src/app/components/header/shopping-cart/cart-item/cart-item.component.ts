
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../../../../services/shopping-cart';
import { cartItem } from '../../../../models/cartItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart-item',
  imports: [FontAwesomeModule, CommonModule, FormsModule ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  quantity: number = 1;
  @Input() cartItem: any;
  @Input() iconClass: string = 'text-erp-black';
  @Input() badgeClass: string = 'blue-badge';
  @Output() UpdateQuantity = new EventEmitter<number>();
  @Output() removeAction = new EventEmitter<cartItem>();

  //Icons
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  constructor(private ShoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}
  showItem(cartItem:any) {
    console.log(cartItem);
  }

  sendItemQuantity(value: number) {
    this.UpdateQuantity.emit(value);
  }

  sendItemToRemove(value: cartItem) {
    this.removeAction.emit(value);
  }

}
