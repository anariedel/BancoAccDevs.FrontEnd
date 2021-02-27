import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';
import { SharedModule } from '../shared/shared.module';
import { DashComponent } from './dash/dash.component';
import { LoggedInAreaRoutingModule } from './logged-in-area-routing.module';
import { LoggedInAreaComponent } from './logged-in-area.component';


@NgModule({
  declarations: [
    LoggedInAreaComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    LoggedInAreaRoutingModule,
    SharedModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }]
})
export class LoggedInAreaModule { }
