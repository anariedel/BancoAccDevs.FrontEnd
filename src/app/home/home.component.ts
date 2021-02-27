import { Component, OnInit } from '@angular/core';

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
      alert('Formulário Iválido')
    }
    
    
    
    
    console.log('CPF', this.CPF);
    console.log('usuario', this.usuario);
    console.log('nome do usuario', this.nomeCompleto);
    console.log('Senah', this.password);

  }

}
