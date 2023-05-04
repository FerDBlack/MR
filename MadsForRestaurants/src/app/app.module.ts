import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FooterComponent} from './shared/footer/footer.component';
import {NavComponent} from './shared/nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {ReservationsComponent} from './pages/reservations/reservations.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ReservationFormComponent} from './shared/form-reservation/reservation-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {GridReservationComponent} from './shared/grid-reservation/grid-reservation.component';
import {TablesMapComponent} from './shared/tables-map/tables-map.component';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { WorkerViewComponent } from './components/worker-view/worker-view.component';
import { LoginComponent } from './pages/login/login.component';
import {PipesModule} from "./pipes/pipes/pipes.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ReservationsComponent,
    ReservationFormComponent,
    GridReservationComponent,
    TablesMapComponent,
    ClientViewComponent,
    WorkerViewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    PipesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
