import {Route, RouterModule} from '@angular/router';
import {LoginFormComponent} from './security/login-form/login-form.component'
import {SecurityGuard} from './security/security.guard';
import {UsersListComponent} from './users/users-list/users-list.component';
import {ListHotelComponent} from "./hotel/list-hotel/list-hotel.component";
import {SearchHotelComponent} from "./hotel/search-hotel/search-hotel.component";

const routesConfig: [Route] = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: '', canActivate: [SecurityGuard], children: [
    {
      path: 'hotel-list', component: ListHotelComponent
    },
    {
      path: 'search', component: SearchHotelComponent
    }

  ]
  }
]

export const routerModule = RouterModule.forRoot(routesConfig)
