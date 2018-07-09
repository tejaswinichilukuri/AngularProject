import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-server',
    templateUrl : './server.component.html',
    styles : [`
      .online {
       color: white;
      } 
    `]
  }
)
export class ServerComponent {
    ServerId: number = 10;
    ServerStatus: string = 'offline';

    constructor() {
      this.ServerStatus = Math.random() > 0.5 ? 'online' : 'offline' ;
    }

    getColor() {
      return this.ServerStatus === 'online' ? 'green' : 'red';
    }
}
