import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class CounterService {
  activeCount = 0;
  inactiveCount = 0;

  constructor(private userService: UserService) {}

  activeToInactive() {
    this.inactiveCount++;
    console.log('Number of inactive: ', this.inactiveCount);
  }

  inactiveToActive() {
    this.activeCount++;
    console.log('Number of active: ', this.activeCount);
  }
}
