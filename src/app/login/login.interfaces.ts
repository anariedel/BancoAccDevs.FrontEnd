import { Conta } from '../interfaces/conta.interface';
import { Usuario } from '../interfaces/usuario.interface';


export interface LoginResponse {
    usuario: Usuario,
    conta: Conta,
    contaCredito: Conta
    token: string,
}