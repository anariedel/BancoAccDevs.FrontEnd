import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from 'src/app/interfaces/dashboard.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  getDash(dataInicial: string, dataFinal: string, login: string): Observable<Dashboard> {
    return this.http.get<Dashboard>
    (`${this.API_URL}/dashboard?fim=${dataFinal}&inicio=${dataInicial}&login=${login}`);
  }
}
