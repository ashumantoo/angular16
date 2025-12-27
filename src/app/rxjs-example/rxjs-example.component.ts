import { Component } from '@angular/core';
import { MasterServiceService } from '../master-service.service';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.css']
})
export class RxjsExampleComponent {

  newRole = "";

  constructor(private masterService: MasterServiceService) {
    this.masterService.userRole.subscribe((newRole) => {
      this.newRole = newRole;
    })
  }

}
