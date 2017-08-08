import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule} from "@angular/forms";
import { LogoutFormComponent } from './logout-form/logout-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginFormComponent,
    LogoutFormComponent
  ],
  exports: [
    LoginFormComponent
  ]
})
export class SecurityModule {
}
