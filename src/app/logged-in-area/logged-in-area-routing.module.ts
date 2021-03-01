import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedInAreaComponent } from './logged-in-area.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'',
    component: LoggedInAreaComponent,
    children: [
      { 
        path: 'dash', 
        loadChildren: () => import('./dash/dash.module').then(m => m.DashModule),
      },{
        path: 'transacoes',
        loadChildren:() => import('./transacoes/transacoes.module').then(m => m.TransacoesModule),
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInAreaRoutingModule { }
