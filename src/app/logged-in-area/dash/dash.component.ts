import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Conta } from 'src/app/interfaces/conta.interface';
import { Dashboard } from 'src/app/interfaces/dashboard.interface';
import { Lancamento } from 'src/app/interfaces/lancamento.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

import { DashService } from './dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  contaBanco: Conta;
  contaCredito: Conta;
  lancamentos: Array<Lancamento>;
  
  constructor(
    private dashService: DashService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadDashData();
  }



  loadDashData() {
    const dataInicial = '2020-01-01';
    const dataFinal = '2021-01-31';

    this.dashService.getDash(dataInicial, dataFinal, this.authService.getUsuario().login)
      .subscribe(
        response => this.onSuccessGetDash(response),
        error => this.onErrorGetDash(error),
      )
  }

  onSuccessGetDash(response: Dashboard) {
    //mock para testes

    response.contaBanco.lancamentos.push({   conta: 1,
      data: '08-09-2020', //formato date
      descricao: 'Gama Academy',
      id: 2,
      planoConta: null,
      tipo: 'D',
      valor: 20});

      response.contaCredito.lancamentos.push({   conta: 2,
        data: '09-09-2020', //formato date
        descricao: 'Lojas Americanas',
        id: 2,
        planoConta: null,
        tipo: 'C',
        valor: 20});
    this.contaBanco = response.contaBanco;
    this.contaCredito = response.contaCredito;
    this.lancamentos = [...response.contaCredito.lancamentos, ...response.contaBanco.lancamentos];
  }

  onErrorGetDash(error: any) {
    this.toastr.error('Erro ao obter informações','Erro');
  }
}
