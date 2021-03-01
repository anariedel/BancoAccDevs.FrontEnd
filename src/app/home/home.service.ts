import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  API_URL = environment.API_URL;

  // constructor(
  //   private api: ApiService
  // ) { }

  // criarUsuario(usuario: UsuarioDto): Observable<UsuarioDto> {
  //   return this.api.post(`${this.API_URL}/usuarios`, usuario);
  // }
}
