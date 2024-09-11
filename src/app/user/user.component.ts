import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';



// const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() id!: string;
  @Input() avatar!: string;
  @Input() name!: string;
  @Output() select =new EventEmitter<string>();

  // selctedUser=DUMMY_USERS[randomIndex];

  get imagePath(){
     return 'assets/users/' + this.avatar;
   }
  onSelectUser(){
      this.select.emit(this.id);
    // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selctedUser=DUMMY_USERS[randomIndex];
  }

  constructor() { }

  ngOnInit(): void {
  }


}
