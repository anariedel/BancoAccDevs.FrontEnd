import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DepositoRoutingModule } from './deposito-routing.module';
import { DepositoComponent } from './deposito.component';



@NgModule({
  declarations: [DepositoComponent],
  imports: [
    CommonModule,
    DepositoModule,
    DepositoRoutingModule,

  ]
})
export class DepositoModule { }
