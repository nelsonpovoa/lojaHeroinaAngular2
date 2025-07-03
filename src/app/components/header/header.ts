import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Toggler } from './toggler/toggler';
import { Notifications } from './notifications/notifications';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [Toggler, Notifications, ShoppingCart, CommonModule ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  selectedLanguage = 'en';
  langs: string[] = [];
  @Output() showSidebar = new EventEmitter<boolean>();
  @Input() _showSidebar!: boolean;
  isSidebarOpen = false;


  ngOnInit(): void {

  }

  changeLanguage(lang: string) {
    //this.appComponent.changeLang(lang);
    console.log(lang);
  }

  toggleShowSidebar(e: boolean) {
    this.isSidebarOpen = e;
    console.log(e);
    this.showSidebar.emit(this.isSidebarOpen);
  }
}
