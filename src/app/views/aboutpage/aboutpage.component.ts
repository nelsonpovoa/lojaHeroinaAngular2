import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutpage',
  imports: [TranslatePipe],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.scss'
})
export class AboutpageComponent {
langs: string[] = [];

  constructor(public appComponent: AppComponent) {
    this.langs = appComponent.langs;
  }

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    this.appComponent.changeLang(lang);
  }
}
