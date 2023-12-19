import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-steam-login-btn',
  templateUrl: './steam-login-btn.component.html',
  styleUrls: ['./steam-login-btn.component.scss'],
})
export class SteamLoginBtnComponent {
  @Output() loginClick: EventEmitter<any>

  constructor() {
    this.loginClick = new EventEmitter<any>()
  }

  onLoginClick():void{
    this.loginClick.emit();
  }
}
