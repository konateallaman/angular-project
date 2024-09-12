import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { type Task } from './task.model';




@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() complete=new EventEmitter<string>();
  onCompleteTask(){
    this.complete.emit(this.task.id);
  }

  constructor() {}

  ngOnInit(): void {}
}
