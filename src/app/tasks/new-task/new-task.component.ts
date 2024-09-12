import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Output() cancel=new EventEmitter<void>();
  enteredTitle='';
  
  onCancel(){
    this.cancel.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
