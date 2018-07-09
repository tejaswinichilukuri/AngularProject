import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskShow = false ;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.taskShow = !this.taskShow;
    this.clicks.push( this.clicks.length + 1 );
  }

}
