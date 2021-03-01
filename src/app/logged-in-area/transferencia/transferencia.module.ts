import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranferenciaRoutingModule } from './transferencia--routing.module';
import { TransferenciaComponent } from './transferencia.component';


@NgModule({
  declarations: [TransferenciaComponent],
  imports: [
    CommonModule,
    TranferenciaRoutingModule,
  ]
})
export class TransacoesModule { }
