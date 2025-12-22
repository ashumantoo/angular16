import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {
  activeUsers: string[] = ["Raman", "Vinay", "Chandan", "Pramod", "Harshvardhan"];
  inactiveUsers: string[] = [];

  constructor(private counterService: CounterService) { }

  setActive(idx: number) {
    this.activeUsers.push(this.inactiveUsers[idx]);
    this.inactiveUsers.splice(idx, 1);
    this.counterService.incrementInActiveToActive();
  }

  setInActive(idx: number) {
    this.inactiveUsers.push(this.activeUsers[idx]);
    this.activeUsers.splice(idx, 1);
    this.counterService.incrementActiveToInactive();
  }
}