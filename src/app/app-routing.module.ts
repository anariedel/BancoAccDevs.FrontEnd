import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedInGuard } from './shared/guards/is-logged-in.guard';

 
const routes: Routes = [
  {
    path: '', 
   loadChildren: () => import('./logged-in-area/logged-in-area.module').then(m => m.LoggedInAreaModule),
   canActivate: [IsLoggedInGuard]
 }, { path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
 }, { 
    path: 'recoverypass', 
    loadChildren: () => import('./recovery-pass/recovery-pass.module').then(m => m.RecoveryPassModule)
 }, {
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }, 
  { path: '', redirectTo: 'logged-in-area', pathMatch: 'full'},
  { path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
