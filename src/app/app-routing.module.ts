import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'sidebar', 
    component: SidebarComponent
  }, 
  { path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }, 
  { path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
