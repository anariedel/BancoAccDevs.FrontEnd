import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecoveryPassComponent } from '../recovery-pass/recovery-pass.component';
import { LoginComponent } from './login.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},{
  path: 'recoverypass',
  component: RecoveryPassComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
