import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PageEvent } from "@angular/material/paginator";


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
  filteredData: Array<User> | undefined;
  searchTerm!: string;

  lowValue: number = 0;
  highValue: number = 20;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private userService: UserService) {
  }


  // used to build a slice of papers relevant at any given time
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((r: User[]) =>  this.users = r); 
  }

  search(value: string): void {
    this.filteredData = this.users?.filter((val) => val.name.toLowerCase().includes(value));
  }

  delete(data: User) {
    this.userService.deleteUser(data);
  }

}
