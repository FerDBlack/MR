import { NgModule } from '@angular/core';
import {HomeComponent} from "./pages/home/home.component";
import {ReservationsComponent} from "./pages/reservations/reservations.component";
import {RouterModule, Routes} from "@angular/router";
import {ReserverComponent} from "./shared/reserver/reserver.component";

const routes: Routes = [
  {
    path: '',
    component:  HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'reserva',
    component: ReservationsComponent,
  },
  {
    path: 'reserve-page/:clientId',
    component: ReserverComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class AppRoutingModule { }
