import {Route, RouterModule} from '@angular/router';
import {LoginFormComponent} from './security/login-form/login-form.component'
import {SecurityGuard} from './security/security.guard';
import {UsersListComponent} from './users/users-list/users-list.component';
import {ListHotelComponent} from "./hotel/list-hotel/list-hotel.component";
import {SearchHotelComponent} from "./hotel/search-hotel/search-hotel.component";
import {ReservationComponent} from "./hotel/reservation/reservation.component";
import {PanelHotelComponent} from "./hotel/panel-hotel/panel-hotel.component";

const routesConfig: [Route] = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: '', canActivate: [SecurityGuard], children: [
    {
      path: 'hotel-list', component: ListHotelComponent,
    },
    {
      path: 'hotel-list/:id', component: ReservationComponent,
    },
    {
      path: 'search', component: SearchHotelComponent
    },
    {
      path: 'reservation', component: ReservationComponent
    },
    {
      path: 'hotel-panel', component: PanelHotelComponent
    }

  ]
  }
]

export const routerModule = RouterModule.forRoot(routesConfig)
// {
//   path: 'categoryManager/:category', component: QuestionCategoryManagerComponent, canActivate: [SecurityGuard]
// },
