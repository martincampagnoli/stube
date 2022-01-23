import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Type } from 'src/app/Enums/type';
import { DataService } from 'src/app/services/data.service';
export interface Learning {
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

  TypeEnum = Type;

  constructor(private dataService: DataService, public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit(): void {
    this.dataService.getLearnings()
      .subscribe((r: Learning[]) =>  this.learnings = r); 
  }
}
