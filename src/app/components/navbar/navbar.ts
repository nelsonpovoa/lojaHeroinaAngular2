import { AppComponent } from './../../app.component';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ShoppingCart } from '../header/shopping-cart/shopping-cart';
import { Router, RouterModule } from '@angular/router';

import { ShoppingCartService } from '../../services/shopping-cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, ShoppingCart, CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
langs: string[] = [];

  constructor(public appComponent: AppComponent, private shoppingCartService : ShoppingCartService, public router:Router) {
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
  }

}
