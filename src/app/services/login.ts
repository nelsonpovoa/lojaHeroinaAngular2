import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { I_logedUser } from '../models/i-loged-user';
import { I_loginAPIres } from '../models/i-loginAPIres';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'localhost:8080';
  endpoint = '/api/login';
  APIresName = 'erpToken';
  APIres!: I_loginAPIres;

  constructor(private http: HttpClient) {}

  // POST
  loginUser(body: I_logedUser): Observable<I_loginAPIres> {
    return this.http.post<I_loginAPIres>(this.url + this.endpoint, body, {
      responseType: 'json',
    });
    // .pipe(map((res: I_loginAPIres): string => res.token));
  }

  // API REST response - persisted in localStorage
  saveSession(APIres: I_loginAPIres): void {
    // save in Browser
    sessionStorage.setItem(this.APIresName, <string>JSON.stringify(APIres));

    // save in App
    this.APIres = <I_loginAPIres>(
      // JSON.parse(sessionStorage.getItem(this.APIresName))
      APIres
    );
  }

  clearSession(): void {
    // remove in Browser
    sessionStorage.removeItem(this.APIresName);

    // remove in App
    this.APIres = {} as I_loginAPIres;
  }

  // getters
  get getAPIres(): I_loginAPIres | undefined {
    return this.APIres || {} as I_loginAPIres;
  }

  get getToken(): string | undefined {
    if (this.APIres && this.APIres.token) return this.APIres.token;
    return undefined; // or return null, depending on your desired behavior
  }

  get getBearer(): string | undefined {
    if (this.APIres && this.APIres.bearer) return this.APIres.bearer;
    return undefined;
  }

  get getBearerToken(): string | undefined{
    this.APIres.bearer = 'Bearer'; // La variable Bearer venia vacía (undefined), se asigna valor 'Bearer'
    if (this.APIres && this.APIres.token && this.APIres.bearer){
      console.log('this.APIres: ',this.APIres);

      return `${this.APIres.bearer} ${this.APIres.token}`;
    }

    console.log('undefined');
    return undefined;
  }

  get getUserName(): string | undefined {
    if (this.APIres && this.APIres.username) return this.APIres.username;
    return undefined;
  }

  get getUserRole(): string | undefined {
    if (this.APIres && this.APIres.authorities[0].authority)
      return this.APIres.authorities[0].authority;

    return undefined;
  }


}
