import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { User } from 'src/app/models/user.model'
import { SteamAuthService } from 'src/app/services/steam-auth.service'
import {
  initLogin,
  resetLogin,
  updateUser,
} from 'src/app/stores/login/login.actions'
import config from 'src/config'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private store: Store,
    private steamAuthService:SteamAuthService) {}

  onLoginClick() {
    const authUrl = this.steamAuthService.getAuthUrl();
    window.location.href = authUrl;
  }

  logoutClick() {
    this.store.dispatch(resetLogin())
  }

  

  ngOnInit(): void {
    this.store.dispatch(initLogin());
  }
}
