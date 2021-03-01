import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashComponent } from './dash/dash.component';
import { LoggedInAreaRoutingModule } from './logged-in-area-routing.module';
import { LoggedInAreaComponent } from './logged-in-area.component';
import { PlanosComponent } from './planos/planos.component';


@NgModule({
  declarations: [
    LoggedInAreaComponent,
    DashComponent,
    PlanosComponent
  ],
  imports: [
    CommonModule,
    LoggedInAreaRoutingModule,
    SharedModule
  ],
})
export class LoggedInAreaModule { }
