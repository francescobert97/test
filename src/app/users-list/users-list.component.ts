import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
@Input() users!:IUser[];
  constructor() { }

  ngOnInit(): void {
  }

}
