import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SteamLoginBtnComponent } from './components/buttons/steam-login-btn/steam-login-btn.component';
import { StoreModule } from '@ngrx/store';
import { loginMetaReducers, loginReducer } from './stores/login/login.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SteamLoginBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({loginReducer:loginReducer}, {metaReducers:loginMetaReducers}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
