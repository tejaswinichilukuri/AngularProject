import { Component, OnInit } from '@angular/core';

import {timeout} from 'rxjs/operators';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer 2'];
  constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server created and server name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }

}
