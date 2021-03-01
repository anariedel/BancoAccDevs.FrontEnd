import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CadastroService } from './cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  cadastro: FormGroup;
  estaCarregando = false;
  senhaValida = true;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.cadastro = this.formBuilder.group({
      cpf:['', [Validators.required, Validators.minLength(11)]],
      login:['', Validators.required],
      nomeCompleto:['', Validators.required],
      senha:['', [Validators.required, Validators.minLength(4)]],      
      confirmacaoSenha:['', [Validators.required]],
    });
  }

  novoCadastro() {
    this.estaCarregando = true;

    const cadastro = this.montarObjetoCadastro();

    // this.cadastroService.criarUsuario(cadastro)
    //   .pipe(
    //     finalize(() => this.estaCarregando = false)
    //   )
    //   .subscribe(
    //     response => this.onSuccessCadastro(),
    //     error => this.onErrorCadastro()
    //   )
  }

  onSuccessCadastro() {
    this.router.navigate(['login'])
  }
  onErrorCadastro() {
    this.toastr.error('Erro', 'Problema ao efetuar cadastro');
  }

  validateAllFormFields(){
    Object.keys(this.cadastro.controls).forEach(field =>{
      this.cadastro.get(field);
      const control = this.cadastro.get(field);
      control.markAsTouched();
    });    
  }

  onSubmit() {
    if(this.cadastro.invalid){
      this.validateAllFormFields();
      return;
    }  
    
    if(!this.validarSenha()){
      this.senhaValida = false;
      return;
    } else {
      this.senhaValida = true;
    }
    
    this.novoCadastro();

  }

  exibeErro(nomeControle: string) {
    if (!this.cadastro.get(nomeControle)) {
      return false;
    }

    return this.cadastro.get(nomeControle)?.invalid && this.cadastro.get(nomeControle)?.touched;
  }
   
  validarSenha(){
    if(this.cadastro.controls.senha.value === this.cadastro.controls.confirmacaoSenha.value){
      return true
    } 
    
    return false
  }

  montarObjetoCadastro() {
    const {confirmacaoSenha, ...cadastro} = this.cadastro.value;
    return cadastro;
  }
}


  