import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';


@NgModule({
  declarations: [
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule,
  ], 
  exports: [
    CadastroComponent
  ], 
})
export class CadastroModule { }
