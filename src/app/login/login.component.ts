import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  estaCarregando = false;
  erroNoCarregamento = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {
    this.estaCarregando = true;

    this.loginService.login(this.loginForm.value)
      .pipe(
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccessLogin(),
        error => this.onErrorLogin()
      )
  }


  exibeErro(nomeControle: string) {
    if (!this.loginForm.get(nomeControle)) {
      return false;
    }

    return this.loginForm.get(nomeControle)?.invalid && this.loginForm.get(nomeControle)?.touched;
  }

  validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = this.loginForm.get(field);
      if(control instanceof FormControl) {
        control?.markAsTouched();
      } else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    });

  }

  onSubmit() {
    if(this.loginForm.invalid) {
      this.validateAllFormFields(this.loginForm);
    }

    console.log(this.loginForm.controls)

    // this.login();
  }

  onSuccessLogin() {
    this.router.navigate(['/logged-in/dash']);
    this.toastr.success('Login efetuado com sucesso', 'Sucesso!');
  }

  onErrorLogin() {
    this.erroNoCarregamento = true;
    this.toastr.error('Erro ao efetuar login','Erro');
  }

}
