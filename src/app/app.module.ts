import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BtnInicioComponent } from './btn-inicio/btn-inicio.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { BtnContactoComponent } from './btn-contacto/btn-contacto.component';
import { BtnConfigComponent } from './btn-config/btn-config.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { SliderComponent } from './slider/slider.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './views/contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BtnInicioComponent,
    HeaderLogoComponent,
    BtnContactoComponent,
    BtnConfigComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    EmpleadosComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    
  }
}
