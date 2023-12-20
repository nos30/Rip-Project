import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class SteamAuthService {
  private clientId = config.STEAM_CLIENT_ID;
  private redirectUri = 'https://pgaillot.github.io/RiProject/';

  constructor(private http: HttpClient) {}

  getAuthUrl(): string {
    return `https://steamcommunity.com/oauth/login?response_type=token&client_id=${this.clientId}&state=your_state&redirect_uri=${this.redirectUri}`;
  }

  handleAuthResponse(fragment: string): any {
    const params = new URLSearchParams(fragment);
    return {
      accessToken: params.get('access_token'),
      tokenType: params.get('token_type'),
      state: params.get('state'),
    };
  }
}
