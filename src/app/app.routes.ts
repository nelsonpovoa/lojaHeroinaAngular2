import { Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { AboutpageComponent } from './views/aboutpage/aboutpage.component';
import { SignupComponent } from './views/signup/signup.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'sign-up', component: SignupComponent },
];
