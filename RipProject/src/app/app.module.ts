import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SteamLoginBtnComponent } from './components/buttons/steam-login-btn/steam-login-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SteamLoginBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
