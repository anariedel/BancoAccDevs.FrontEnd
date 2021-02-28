import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from 'src/app/interfaces/conta.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Usuario
  token: string;
  conta: Conta;
  contaCredito: Conta;

  constructor(
    private router: Router,
  ) { }

  setUsuario(usuario: Usuario) {
    this.user = usuario;
    localStorage.setItem('usuario', JSON.stringify(this.user));
  }

  getUsuario() {

    if(this.user) {
      return this.user;
    }

    const usuarioGuardado = localStorage.getItem('usuario');
    if(usuarioGuardado) {
      this.user = JSON.parse(usuarioGuardado);
      return this.user;
    }

    return null;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', JSON.stringify(token));
  }

  setConta(conta: Conta) {
    this.conta = conta;
    localStorage.setItem('conta', JSON.stringify(conta));
  }

  setContaCredito(contaCredito: Conta) {
    this.contaCredito = contaCredito;
    localStorage.setItem('contaCredito', JSON.stringify(contaCredito));
  }

  getToken(): string {
    const token: string = JSON.parse(localStorage.getItem('token'));
    if(token) {
      this.token = token;
      return this.token;
    }

    return null;
  }

  isLoggedIn(): boolean {
    return this.getUsuario() && this.getToken() ? true : false;
  }

  logout() {
    this.user = undefined;
    this.token = undefined;
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
