import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../security.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  username: string
  password: string
  loginError: boolean
  pendingRequest = false

  constructor(private securityService: SecurityService) {
  }

  login() {
    this.pendingRequest = true
    this.securityService.login(this.username, this.password)
      .subscribe(() => this.loginError = false, () => {
        this.loginError = true
        this.pendingRequest = false
      })
  }

}
