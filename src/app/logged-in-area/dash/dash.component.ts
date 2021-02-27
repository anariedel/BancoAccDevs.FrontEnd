import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

import { DashService } from './dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  constructor(
    private dashService: DashService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadDashData();
  }


  loadDashData() {
    const dataInicial = '2020-01-01';
    const dataFinal = '2021-01-31';

    this.dashService.getDash(dataInicial, dataFinal, this.authService.getUsuario().login)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      )
  }
}
