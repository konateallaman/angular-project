import { Component, OnInit, Input } from '@angular/core';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  @Input() userId !: string ;
  @Input() name?: string | null;
  isAddingTask=false;
  

 
  constructor(private tasksService:TasksService) {

  }
  // Get tasks for the selected user
  get selectedUserTasks() {
    console.log('Filtering tasks for userId:', this.userId);  // For debugging
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }

  onCloseAddTask(){
    this.isAddingTask=false;
  }
  onAddTask(taskData:NewTaskData){
    
    this.isAddingTask=false;
  }

  

  ngOnInit(): void {}
}
