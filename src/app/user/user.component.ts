import { Component, OnInit ,Input} from '@angular/core';


// const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() avatar!: string;
  @Input() name!: string;
  // selctedUser=DUMMY_USERS[randomIndex];

  get imagePath(){
     return 'assets/users/' + this.avatar;
   }
  onSelectUser(){
    // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selctedUser=DUMMY_USERS[randomIndex];
  }

  constructor() { }

  ngOnInit(): void {
  }


}
