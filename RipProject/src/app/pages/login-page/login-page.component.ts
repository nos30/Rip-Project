import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { User } from 'src/app/models/user.model'
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
  constructor(private store: Store) {}

  onLoginClick() {
    const userTest: User = {
      id: 'test',
      username: 'Jean Test',
    }
    this.store.dispatch(updateUser({ user: userTest }))
  }

  logoutClick() {
    this.store.dispatch(resetLogin())
  }

  sendSteamRequest():Promise<any> {
    const queryParams = {
      key:config.STEAM_API_KEY,
      steamId:'76561198043409869'
      
    }
    const baseUrl = 'https://steamcommunity.com/';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'key ' + config.STEAM_API_KEY,
      },
    }

    const client_id = '76561198043409869'

    const url = `${baseUrl}oauth/login?response_type=token&client_id=${client_id}
    ${new URLSearchParams(
      queryParams,
    ).toString()}`

    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    })
  }

  ngOnInit(): void {
    this.store.dispatch(initLogin());

    this.sendSteamRequest();

  }
}
