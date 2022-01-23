import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

export interface User {
  avatar: string, 
  name: string, 
  email: string,
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Array<User> | undefined;

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
