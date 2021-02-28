import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lancamento } from 'src/app/interfaces/lancamento.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  API_URL = environment.API_URL;
  //usuario = ;

  constructor(
    private http: HttpClient
  ) { }

  getTransacoes(pagina: number){
    console.log('ENTREI GET TRANSACOES');
    return this.http.get<Lancamento[]>(this.API_URL + '/lancamentos/planos-conta', {
      params: {
        _page: String(pagina),
      }
    });
  }
}
