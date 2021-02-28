import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {

  CPF: number;
  usuario: string;
  nomeCompleto: Text;
  password: string;


  constructor() { }

  ngOnInit(){
  }

  onSubmit(form){
    if(!form.valid){

      form.controls.CPF.markAsTouched();
      form.controls.nomeUsuario.markAsTouched();
      form.controls.nomeCompleto.markAsTouched();
      form.controls.password1.markAsTouched();

      return
    }

    console.log('CPF', this.CPF);
    console.log('usuario', this.usuario);
    console.log('nome do usuario', this.nomeCompleto);
    console.log('Senha', this.password);
  }

  exibeErro(nomeControle: string, form: FormGroup){
   if(!form.controls[nomeControle]){
    return false;
   }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
  

}
