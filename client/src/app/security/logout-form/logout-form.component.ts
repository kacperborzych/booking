import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SecurityService} from "../security.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-form',
  templateUrl: './logout-form.component.html',
  styleUrls: ['./logout-form.component.css']
})
export class LogoutFormComponent implements OnInit {

  @Output('logout')
  onLogout = new EventEmitter();

  constructor(private securityService: SecurityService, private router: Router) {
  }

  logoutFormMethod() {
    this.securityService.logout()
    this.navigateHome()
  }

  ngOnInit() {
  }

  navigateHome() {
    this.router.navigate(['/login'])
  }

}
