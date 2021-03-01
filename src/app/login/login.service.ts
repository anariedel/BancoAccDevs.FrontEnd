import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Login } from '../interfaces/login.interface';
import { Sessao } from '../interfaces/sessao.interface';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  login(login: Login): Observable<Sessao> {
    return this.http.post<Sessao>(`${this.API_URL}/login`, login)
      .pipe(
        tap(response => {
          this.authService.setSessao(response);
        }) 
      )
  }
}
