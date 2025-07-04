import { Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { AboutpageComponent } from './views/aboutpage/aboutpage.component';
import { SignupComponent } from './views/signup/signup.component';
import { LicenceComponent } from './components/footer/licence/licence.component';
import { LoginComponent } from './views/login/login.component';
import { ContactComponent } from './views/contact/contact.component';
import { TermsComponent } from './views/terms/terms.component';
import { RecoverPasswordComponent } from './views/recover-password/recover-password.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'licence', component: LicenceComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
];
