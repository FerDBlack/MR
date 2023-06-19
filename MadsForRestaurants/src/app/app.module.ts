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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TablesMapComponent} from './shared/tables-map/tables-map.component';
import {PipesModule} from "./pipes/pipes.module";
import {HttpClientModule} from "@angular/common/http";
import {ReserverComponent} from './shared/reserver/reserver.component';
import {ProfileCardComponent} from './shared/profile-card/profile-card.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ReservationsComponent,
    ReservationFormComponent,
    TablesMapComponent,
    ReserverComponent,
    ProfileCardComponent,
    ContactComponent,
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
