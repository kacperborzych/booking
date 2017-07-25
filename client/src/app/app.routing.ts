import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './security/login-form/login-form.component'
import { SecurityGuard } from './security/security.guard';
import { UsersListComponent } from "./users/users-list/users-list.component";

const routesConfig = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'users',  component: UsersListComponent, canActivate: [SecurityGuard]
  }
]

export const routerModule = RouterModule.forRoot(routesConfig)
