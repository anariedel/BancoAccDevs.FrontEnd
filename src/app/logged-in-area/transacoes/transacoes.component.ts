import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';
import { Dashboard } from 'src/app/interfaces/dashboard.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

import { TransacoesService } from './transacoes.service';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {
  
  dataInicial = '2021-02-28';
  dataFinal = '2021-02-28';
  transacoes: Dashboard[];
  carregando: boolean;
  erroCarregamento: boolean;
  pagina = 1;
  
  constructor(
    private transacoesService: TransacoesService,
    private authService: AuthService,
    private toastr: ToastrService
    ) { }
    
    ngOnInit(): void {
      this.carregarTransacoes();
    }
    
    carregarTransacoes() {
      
      this.carregando = true;
      this.erroCarregamento = false;
    //console.log('ENTREI CARREGAR TRANSACOES')

    this.transacoesService.getTransacoes(this.dataInicial, this.dataFinal, this.authService.getSessao().usuario.login)
    .pipe(
      take(1),
      finalize (() =>
      this.carregando = false
      ))
      .subscribe(
        response => this.onSuccessCarregarTransacoes(response),
        error => this.onErrorCarregarTransacoes(error)
      );
    }


  onErrorCarregarTransacoes(error: any) {
    this.erroCarregamento = true;
    //console.error(error);
  }
  
  onSuccessCarregarTransacoes(response: Dashboard[]) {
    this.transacoes = response;
  }

  setDatas(dataInicial, dataFinal){
    this.dataInicial = dataInicial;
    this.dataFinal = dataFinal;
  }

/*   pagAnterior() {
    this.pagina = this.pagina - 1;
    this.carregarTransacoes();
  }

  proxPagina() {
    this.pagina = this.pagina + 1;
    this.carregarTransacoes();
  } */
}