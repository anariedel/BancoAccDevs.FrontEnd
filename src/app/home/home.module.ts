import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastroModule } from '../cadastro/cadastro.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,   
    FormsModule,
    ReactiveFormsModule,
    CadastroModule,
  ]
})
export class HomeModule { }
