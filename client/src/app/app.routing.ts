import {Route, RouterModule} from '@angular/router';
import {LoginFormComponent} from './security/login-form/login-form.component'
import {SecurityGuard} from './security/security.guard';
import {UsersListComponent} from './users/users-list/users-list.component';
import {ListHotelComponent} from "./hotel/list-hotel/list-hotel.component";

const routesConfig: [Route] = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: '**', redirectTo: 'hotel-list'
  },
  {
    path: '', canActivate: [SecurityGuard], children: [
    {
      path: 'hotel-list', component: ListHotelComponent
    }
  ]
  }
]

export const routerModule = RouterModule.forRoot(routesConfig)
