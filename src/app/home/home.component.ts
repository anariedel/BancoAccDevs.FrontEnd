import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
  @ViewChild('cpfInput') cpfInput: ElementRef;
  @ViewChild('usuarioInput') usuarioInput: ElementRef;
  @ViewChild('nomeCompletoInput') nomeCompletoInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

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

      if(form.controls.CPF.invalid){
        this.cpfInput.nativeElement.focus();
        return;
      }

      if(form.controls.nomeUsuario.invalid){
        this.usuarioInput.nativeElement.focus();
        return;
      }

      if(form.controls.nomeCompleto.invalid){
        this.nomeCompletoInput.nativeElement.focus();
        return;
      }

      if(form.controls.password1.invalid){
        this.passwordInput.nativeElement.focus();
        return;
      }

      return;
    }

    console.log('CPF', this.CPF);
    console.log('usuario', this.usuario);
    console.log('nome do usuario', this.nomeCompleto);
    console.log('Senha', this.password);
  }

  exibeErro(nomeControle: string, form: NgForm){
   if(!form.controls[nomeControle]){
    return false;
   }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
  

}
