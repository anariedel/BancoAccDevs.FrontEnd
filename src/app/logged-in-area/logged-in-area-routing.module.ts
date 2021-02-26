import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedInAreaComponent } from './logged-in-area.component';

const routes: Routes = [{
  path:'logged-in',
  component: LoggedInAreaComponent,
  children: [
    { 
      path: 'dash', 
      loadChildren: () => import('./dash/dash.module').then(m => m.DashModule),
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInAreaRoutingModule { }