import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { IUser } from '../models/user';


@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss']
})
export class UsersCardComponent implements OnInit {
@Input() users!:IUser[];
@Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
deleteUser (user:string) {
  this.delete.emit(user)
}

}
