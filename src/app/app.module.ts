import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';	

import { AppComponent } from './app.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { DeshboardComponent } from './deshboard/deshboard.component';

const appRoutes: Routes = [
  { path: 'login', component: LogInFormComponent },
  { path: 'deshboard', component: DeshboardComponent },
  { path: '**', component: LogInFormComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LogInFormComponent,
    DeshboardComponent
  ],
  imports: [
   RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
