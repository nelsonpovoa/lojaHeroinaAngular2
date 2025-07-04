
	import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './services/login';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { CommonModule, isPlatformBrowser, registerLocaleData } from '@angular/common';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import localePT from '@angular/common/locales/pt';


registerLocaleData(localePT);

////////////////////////////
//  Bootstrap JS imports  //
////////////////////////////

/* TODO:
  1. Before production, review B5 JS imports you actually used.
     Comment out those not used, to reduce final production bundle.

  2. plus, if you're completely sure, you're not using components
     which require "popper.js", you can comment them out
     and also uninstall popper from this project --> npm uninstall @popperjs/core
*/

// Bootstrap JS imports moved to ngOnInit() to avoid SSR issues


//////////////////////////////////////////////
//  Font Awesome Icons - Optimized Library  //
//////////////////////////////////////////////

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faUserPlus,
  faSignInAlt,
  faCopyright,
  faEyeSlash,
  faEye,
  faMapMarkerAlt,
  faBuilding,
  faBars,
  faUserCog,
  faUser,
  faUserTie,
  faShoppingBasket,
  faUsers,
  faListAlt,
  faIdCardAlt,
  faChartLine,
  faClock,
  faSearch,
  faEdit,
  faEnvelope,
  faPhone,
  faPercentage,
} from '@fortawesome/free-solid-svg-icons'; // solids
import {
  faPaperPlane,
  faTrashAlt,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { Navbar } from "./components/navbar/navbar"; // regular
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from "./components/footer/footer.component";
import { Header as HeaderComponent } from './components/header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, Navbar,
    CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'LojaHeroina';

  faCoffee = faCoffee;


mode = ''; // environment mode msg
  // title = 'ITProject-ERP-Frontend';
  langs: string[] = [];
  sidebar = true; // boolean for collapse sidebar
  showSidebar = false; // by default not showing the sidebar
  token = ''; // <-- log in OK
  role = ''; // <-- log in OK

  constructor(
    private loginService: LoginService,
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.mode = environment.mode;
    this.translateService.setDefaultLang('pt'); //fallback set of translations to use in case there are missing translations for the current language.
    this.translateService.use('pt'); //tells the service which is the current language to use for translations.
    this.translateService.addLangs(['pt', 'en', 'es', 'cat']); //tells the service which languages are available to use for translations.
    this.langs = this.translateService.getLangs();
  }

  ngOnInit() {
    // Only execute browser-specific code when running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Bootstrap JS is already loaded via angular.json scripts array
      // No need for individual imports since bootstrap.bundle.min.js includes all components

      //  FONT AWESOME ICONS add plugin  //
      library.add(
        faUserPlus,
        faSignInAlt,
        faCopyright,
        faEyeSlash,
        faEye,
        faMapMarkerAlt,
        faBuilding,
        faBars,
        faUserCog,
        faUser,
        faUserTie,
        faShoppingBasket,
        faUsers,
        faListAlt,
        faIdCardAlt,
        faChartLine,
        faClock,
        faPaperPlane,
        faTrashAlt,
        faAddressCard,
        faSearch,
        faEdit,
        faEnvelope,
        faPhone,
        faPercentage,
      );
      dom.watch(); // Replace any existing <i> tags with <svg> icon

      // INFO: 01/03/2021 - The line below is commented, because if it is executed, when refreshing (eg F5) the authenticated session is lost.
      //if (this.loginService.getAPIres === undefined) {
      //this.loginService.clearSession(); // clear previous sessionStorage
      //}

      // INFO: 03/03/2021 - If we don't have the token in App, check if we have the token in Browser,
      //                    and If we have it in Browser, we save it in App
      if (this.loginService.getToken === undefined) {

        /*if (sessionStorage.getItem(this.loginService.APIresName)) {
          this.loginService.saveSession(JSON.parse(sessionStorage.getItem(this.loginService.APIresName)));
        }*/

        const storedValue = sessionStorage.getItem(this.loginService.APIresName);
        this.loginService.saveSession(storedValue?.length ? JSON.parse(storedValue) : null);

      }
      // INFO: 03/03/2021 - Get the token
      this.token = this.loginService.getToken ?? '';
    }
  }

  ngDoCheck(): void {
    if (this.loginService.getToken == undefined) {
      this.token = ''; // <-- Not logged
      this.role = ''; // <-- Not logged
    } else {
      this.token = this.loginService.getToken; // <-- Logged
      this.role = this.loginService.getUserRole ?? ''; // <-- Logged
    }
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
  }

  toggleSidebar(e: boolean) {
    this.sidebar = e;
  }

  toggleShowSidebar(e: boolean) {
    this.showSidebar = e;
  }

}



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
