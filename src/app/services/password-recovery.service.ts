import { Injectable } from '@angular/core';
import { LoginService } from './login';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {

  url: string = 'http://localhost:8086';
  endPoint: string = '/api/users/recoverpassword';
  token: string;

    constructor(private loginService: LoginService,
              private httpClient : HttpClient
    ) {
      this.token = this.loginService.getBearerToken!;
   }

  passwordRecovery(body:{}){
    const headers = new HttpHeaders({
    });
    return this.httpClient.put( `${this.url}${this.endPoint}`, body, {headers} );
  }
}
