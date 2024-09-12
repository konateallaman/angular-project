import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';




@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
 


  onCompleteTask(){
    return this.tasksService.removeTask(this.task.id);
    //..
    
  }
  constructor(private tasksService:TasksService) {

  }

  ngOnInit(): void {}
}
