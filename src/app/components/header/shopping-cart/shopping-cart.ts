
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { I_ShoppingCartItem } from '../../../models/shoppingCartItem';
import { ShoppingCartService } from '../../../services/shopping-cart';
import { Product } from './../../../models/Product';
import { ProductEmitterService } from '../../../services/product-emitter';
import { cartItem } from '../../../models/cartItem';
import { MyCart } from '../../../models/myCart';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartItemComponent } from "./cart-item/cart-item.component";

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule, FontAwesomeModule, CartItemComponent],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart {

    @Input() iconClass: string = 'text-erp-black';
  @Input() badgeClass: string = 'blue-badge';

  //Icons
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  // name of the serssion cart= 'erpCart';
  public cartItems: any = [];
  public cartTotal: number = 0;
  sesionCartName = 'erpCart';
  constructor(
    public ProductEmitterService: ProductEmitterService,
    private route: Router,
    public shoppingCartService: ShoppingCartService
  ) {
    // this.shoppingCartService.saveSessionStorage(this.cartItems);
  }

  ngOnInit(): void {
    this.ProductEmitterService.getDataProduct().subscribe(
      (product: Product) => {
        this.addProductToCart(product);
      }
    );

    this.loadCartItems();
    this.shoppingCartService.saveSessionStorage(this.cartItems);
    console.log(this.cartItems);
  }
  addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].quantity++;

        if (this.cartItems[i].quantity > this.cartItems[i].stock) {
          Swal.fire({
            title: 'Ups!',
            text: 'Sorry, this quantity is not available right now!',
          });

          this.cartItems[i].quantity = this.cartItems[i].stock;
        }

        productExists = true;

        break;
      }
    }

    if (!productExists) {
      let newcartItem: cartItem = new cartItem(
        product.id,
        product.name,
        product.quantity ?? 0,
        product.price,
        product.wholesale_price,
        product.wholesale_quantity,
        product.stock,
        product.total!
      );
      newcartItem.id = product.id;
      newcartItem.name = product.name;
      newcartItem.quantity = 1;
      newcartItem.price = product.price;
      newcartItem.wholesaleqty = product.wholesale_quantity;
      newcartItem.price = product.price;
      newcartItem.stock = product.stock;
      newcartItem.total = this.getItemTotal(
        newcartItem.price,
        newcartItem.quantity
      );

      if (newcartItem.stock == 0) {
        Swal.fire({
          title: 'Ups!',
          text: 'Sorry, ' + newcartItem.name + ' is out of stock right now.',
        });
      } else {
        this.cartItems.push(newcartItem);

        console.log(newcartItem);
      }
    }

    this.cartTotal = 0;

    this.cartItems.forEach((item:any) => {
      this.cartTotal += item.quantity * item.price;
    });
    console.log(this.cartTotal);
    this.shoppingCartService.saveSessionStorage(this.cartItems);
  }
  getItemTotal(qty: number, price: number) {
    return qty * price;
  }

  removeItem(itemToRemove: any) {
    this.cartItems = this.cartItems.filter((item: Product) => item.id !==itemToRemove.id);

    this.cartTotal = 0;

    this.cartItems.forEach((item:Product) => {
      this.cartTotal += (item.quantity ?? 0) * item.price;
    });
    this.shoppingCartService.saveSessionStorage(this.cartItems);
  }
  upDateQty(qty: any) {
    this.cartTotal = 0;

    for (let item of this.cartItems) {
      if (item.quantity != qty) {
        break;
      } else {
        item.quantity = qty;
      }

      if (item.quantity > item.stock) {
        Swal.fire({
          title: 'Ups!',
          text: 'Sorry, this quantity is not available right now!',
        });

        item.quantity = item.stock;
      }
    }

    this.cartItems.forEach((item:Product) => {
      this.cartTotal += (item.quantity ?? 0) * item.price;
    });
    let cartIcon = document.getElementById('cartBasket');


    if (cartIcon) {
      cartIcon.classList.add('newQuantity');
    }

    // em vez do if podia ser como abaixo com o ?:
    //cartIcon?.classList.add('newQuantity');

    this.shoppingCartService.saveSessionStorage(this.cartItems);
  }

  loadCartItems() {
    this.cartItems = this.cart;
    this.getCarTotal(this.cartItems);
  }

  get cart() {
    const cartString = this.shoppingCartService.getSessionCart(this.cartItems);
    return JSON.parse(cartString ?? '[]');
  }

  getCarTotal(cart: any) {
    cart.forEach((item:Product) => {
      this.cartTotal += (item.quantity ?? 0) * item.price;
    });
  }

  // Prevent DropDown from closing if the shopping cart is NOT empty
  dropdownClickControl(event: any) {
    if (this.cartItems.length > 0) {
      event.stopPropagation();
    }
  }

  checkoutRoute() {
    this.route.navigate(['checkout']);
  }

  clearSessionStorage() {
    sessionStorage.removeItem(this.sesionCartName);
  }

}
