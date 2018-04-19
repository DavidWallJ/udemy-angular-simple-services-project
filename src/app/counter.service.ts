export class CounterService {
  activeCount = 0;
  inactiveCount = 0;

  activeToInactive() {
    this.inactiveCount++;
    console.log('Number of inactive: ', this.inactiveCount);
  }

  inactiveToActive() {
    this.activeCount++;
    console.log('Number of active: ', this.activeCount);
  }
}
