import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() userId !:string;
  @Output() close=new EventEmitter<void>();
  
  enteredTitle='';
  enteredSummary='';
  enteredDate='';

  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId);
    this.close.emit();
  }

  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
  }

}
