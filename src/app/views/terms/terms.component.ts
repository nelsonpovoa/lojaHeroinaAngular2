import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-terms',
  imports: [TranslatePipe],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss'
})
export class TermsComponent {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // Any additional initialization after view is loaded
  }
}
