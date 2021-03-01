import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { HeaderComponent } from './header/header.component';
import { ApiService } from './services/api.service';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
