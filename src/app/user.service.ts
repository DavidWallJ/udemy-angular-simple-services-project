import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  activeUsers = ['Immanuel', 'Jezebel'];
  inactiveUsers = ['Milcah', 'Zilpah'];

  constructor(private counterService: CounterService) {}

  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.inactiveToActive();
  }

  setInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.activeToInactive();
  }
}
