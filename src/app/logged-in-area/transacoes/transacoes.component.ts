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
      
      const dataInicial = '2021-02-28';
      const dataFinal = '2021-02-28';
      this.carregando = true;
      this.erroCarregamento = false;
    //console.log('ENTREI CARREGAR TRANSACOES')

    this.transacoesService.getTransacoes(dataInicial, dataFinal, this.pagina, this.authService.getUsuario().login)
    .pipe(
      take(1),
      finalize (() =>
      this.carregando = false
      ))
      .subscribe(response => {this.successo(response);
      console.log(response)},
      error => this.erro(error));
    }
  erro(error: any) {
    this.erroCarregamento = true;
    //console.error(error);
  }
  successo(response: Dashboard[]) {
    this.transacoes = response;
  }

  pagAnterior() {
    this.pagina = this.pagina - 1;
    this.carregarTransacoes();
  }

  proxPagina() {
    this.pagina = this.pagina + 1;
    this.carregarTransacoes();
  }
}
