import { Component } from '@angular/core';
import { Door } from './core/classes/door';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){}

  door: Door = new Door(false)

  onLockDoorBtnClick(): void {
    this.door.lockDoor()
  }

  onUnlockDoorBtnClick(): void {
    this.door.unlockDoor()
  }
}
