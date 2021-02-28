import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { Lancamento } from 'src/app/interfaces/lancamento.interface';

import { TransacoesService } from './transacoes.service';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {

  transacoes: Lancamento[];
  carregando: boolean;
  erroCarregamento: boolean;
  pagina = 1;
  //transacoesService: any;
  //transacoesService: TransacoesService;

  constructor(
   private transacoesService: TransacoesService
  ) { }

  ngOnInit(): void {
    this.carregarTransacoes();
  }

  carregarTransacoes() {
    this.carregando = true;
    this.erroCarregamento = false;
    console.log('ENTREI CARREGAR TRANSACOES')

    this.transacoesService.getTransacoes(this.pagina)
    .pipe(
      take(1),
      finalize (() =>
        this.carregando = false
      ))
      .subscribe(response => this.successo(response),
      error => this.erro(error));
  }
  erro(error: any) {
    this.erroCarregamento = true;
    //console.error(error);
  }
  successo(response: Lancamento[]) {
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