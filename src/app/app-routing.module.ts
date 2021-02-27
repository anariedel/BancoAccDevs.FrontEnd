import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


   
  
const routes: Routes = [
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  }, {
     path: '', 
    loadChildren: () => import('./logged-in-area/logged-in-area.module').then(m => m.LoggedInAreaModule),
  }, { 
    path: 'recoverypass', 
  loadChildren: () => import('./recovery-pass/recovery-pass.module').then(m => m.RecoveryPassModule)
  }, {
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }, 
  { path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
