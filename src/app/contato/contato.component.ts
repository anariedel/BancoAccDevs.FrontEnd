import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  
  cadastro: FormGroup;
  

  
  constructor(
    private formBuilder: FormBuilder,
   
  ) { }

  ngOnInit() {

    this.cadastro = this.formBuilder.group({
      CPF:['', [Validators.required, Validators.minLength(11)]],
      nomeUsuario:['', Validators.required],
      nomeCompleto:['', Validators.required],
      password1:['', [Validators.required, Validators.minLength(4)]],      
      confirmPassword:['', [Validators . required ]],
    });




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
    
    console.log(this.cadastro);
  }

  exibeErro(nomeControle: string) {
    if (!this.cadastro.get(nomeControle)) {
      return false;
    }

    return this.cadastro.get(nomeControle)?.invalid && this.cadastro.get(nomeControle)?.touched;
  }
  
  
 
    


}


  