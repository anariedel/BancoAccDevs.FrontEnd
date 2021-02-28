import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashComponent } from './dash/dash.component';
import { LoggedInAreaRoutingModule } from './logged-in-area-routing.module';
import { LoggedInAreaComponent } from './logged-in-area.component';


@NgModule({
  declarations: [
    LoggedInAreaComponent,
    DashComponent,
  ],
  imports: [
    CommonModule,
    LoggedInAreaRoutingModule,
    SharedModule
  ]
})
export class LoggedInAreaModule { }
