import { Component, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-toggler',
  imports: [FontAwesomeModule],
  templateUrl: './toggler.html',
  styleUrl: './toggler.scss'
})
export class Toggler {

faBars = faBars;
  toggle = false;

  @Output() showSidebar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  _toggleShowSidebar() {
    this.toggle = !this.toggle;
    this.showSidebar.emit(this.toggle);
  }
}
