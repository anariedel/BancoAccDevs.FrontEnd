<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { HTTP_INTERCEPTORS } from '@angular/common/http';
>>>>>>> 58f1f9a73fa032286ce8ac2eb49ccfa496eb906b
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
=======
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
>>>>>>> 58f1f9a73fa032286ce8ac2eb49ccfa496eb906b
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaErroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
<<<<<<< HEAD
    HttpClientModule,
=======
>>>>>>> 58f1f9a73fa032286ce8ac2eb49ccfa496eb906b
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
