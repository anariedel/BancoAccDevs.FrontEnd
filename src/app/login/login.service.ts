import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Login } from '../interfaces/login.interface';
import { AuthService } from '../shared/services/auth.service';
import { LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  login(login: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, login)
      .pipe(
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
          this.authService.setConta(response.conta);
          this.authService.setContaCredito(response.contaCredito);
        }) 
      )
  }
}
