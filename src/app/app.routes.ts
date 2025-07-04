import { Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { AboutpageComponent } from './views/aboutpage/aboutpage.component';
import { SignupComponent } from './views/signup/signup.component';
import { LicenceComponent } from './components/footer/licence/licence.component';
import { LoginComponent } from './views/login/login.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'licence', component: LicenceComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
];
