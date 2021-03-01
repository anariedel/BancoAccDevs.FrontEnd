import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

@Injectable()
export class ApiService {
  baseUrl: string = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  get(url: string, query?: HttpParams): Observable<any> {    
    const headers = this.createAuthorizationHeader();
    return this.http.get(url, {
      headers: headers,
      params: query
    });
  }

  post(url: string, data: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.post(url, data, {
      headers: headers
    });
  }

  put(url: string, data?: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.put(url, data, {
      headers: headers,
    });
  }

  delete(url: string, query?: HttpParams, data?: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete(url, {
      headers: headers,
      params: query
    });
  }

  createAuthorizationHeader() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', this.authService.getAuthorizationHeaderValue()); 
    headers = headers.append('Content-Type', 'application/json');

    return headers;
  }
}
