import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dashboard } from 'src/app/interfaces/dashboard.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getTransacoes(dataFinal, dataInicial, pagina: number, login: string){
    console.log('ENTREI GET TRANSACOES');
    return this.http.get<Dashboard[]>
    (`${this.API_URL}/dashboard?fim=${dataFinal}&inicio=${dataInicial}&login=${login}`, {
      params: {
        _page: String(pagina),
      }
    });
  }
}
