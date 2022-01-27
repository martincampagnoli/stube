import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Type } from 'src/app/enums/Type';
import { Learning } from 'src/app/models/Learning';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Array<User> | undefined;
  learnings!: Array<Learning>;

  TypeEnum = Type;

  constructor(private dataService: DataService, public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.dataService.getUsers()
      .subscribe((r: User[]) =>  this.users = r); 
  }

  delete(data: User) {
    this.dataService.deleteUser(data);
  }
}
