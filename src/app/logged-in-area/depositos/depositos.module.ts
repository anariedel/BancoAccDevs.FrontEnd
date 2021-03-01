import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DepositosRoutingModule } from './depositos-routing.module';
import { DepositosComponent } from './depositos.component';



@NgModule({
  declarations: [DepositosComponent],
  imports: [
    CommonModule,
    DepositosRoutingModule
  ]
})
export class DepositosModule { }
