import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-notifications',
  imports: [FontAwesomeModule, TranslateModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss'
})
export class Notifications {
faBell = faBell;


  constructor() { }

  ngOnInit(): void {
  }
}
