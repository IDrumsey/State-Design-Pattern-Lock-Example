import { Component, OnInit } from '@angular/core';
import { Door } from '../../classes/door';

@Component({
  selector: 'app-multiple-doors',
  templateUrl: './multiple-doors.component.html',
  styleUrls: ['./multiple-doors.component.scss']
})
export class MultipleDoorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < this.numDoors; i++){
      this.doors.push(new Door(false))
    }
  }

  numDoors = 5
  doors: Door[] = []

  isDoorLocked(door: Door): boolean {
    return door.lock.isLocked()
  }

  onLockDoorBtnClick(door: Door): void {
    door.lockDoor()
  }

  onUnlockDoorBtnClick(door: Door): void {
    door.unlockDoor()
  }
}
