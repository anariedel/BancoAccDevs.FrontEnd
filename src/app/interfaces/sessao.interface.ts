import { Conta } from './conta.interface';
import { Usuario } from './usuario.interface';

export interface Sessao {
    conta: Conta,
    contaCredito: Conta,
    dataFim: string,  //formato date
    dataInicio: string,  //formato date
    token: string,
    usuario: Usuario
}