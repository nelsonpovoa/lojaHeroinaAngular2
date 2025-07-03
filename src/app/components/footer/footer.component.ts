//import { faCopyright } from './../../../../node_modules/@fortawesome/free-solid-svg-icons/index.d';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faCopyright  } from '@fortawesome/free-solid-svg-icons/index.d';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule, CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
currentDate:Date = new Date();

  iconCopyright = faCopyright;

  constructor() {
    //This code is for updating the hour of footer without refresh the page
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }


  ngOnInit(): void {
  }
}
