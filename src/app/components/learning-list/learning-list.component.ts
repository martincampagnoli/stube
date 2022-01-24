import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Type } from 'src/app/Enums/type';
import { DataService } from 'src/app/services/data.service';
import { User } from '../user-list/user-list.component';
export interface Learning {
  id: number,
  name: string, 
  archive: boolean,
}
@Component({
  selector: 'app-learning-list',
  templateUrl: './learning-list.component.html',
  styleUrls: ['./learning-list.component.scss']
})
export class LearningListComponent implements OnInit {
  learnings: Array<Learning> | undefined;
  users: Array<User> | undefined;

  selectedUser!: User;

  TypeEnum = Type;

  constructor(private dataService: DataService, public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit(): void {
    this.getLearnings();
    this.getUsers();
  }

  getLearnings(): void {
    this.dataService.getLearnings()
      .subscribe((r: Learning[]) =>  this.learnings = r); 
  }

  getUsers(): void {
    this.dataService.getUsers()
      .subscribe((r: User[]) =>  this.users = r); 
  }

  delete(data: Learning) {
    this.dataService.deleteLearning(data);
  }

  toggleActive(item: any){
    this.dataService.updateLearning(item);
  }

  assignToUser(learning: Learning, user: User): void {
    this.dataService.assignToUser(learning?.id, user);
  }

}
