import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Learning } from '../learning-list/learning-list.component';
import { User } from '../user-list/user-list.component';

@Component({
  selector: 'display-learnings',
  templateUrl: './display-learnings.component.html',
  styleUrls: ['./display-learnings.component.scss']
})
export class DisplayLearningsComponent implements OnInit {

  @Input() learnings!: Array<Learning>;
  @Input() user!: User;

  filteredData: Array<Learning> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getLearnings()
    .subscribe((r: Learning[]) =>  {
      this.learnings = r;
      this.filteredData = this.learnings.filter((e) => this.user.learnings?.includes(e.id));
      console.dir(this.user.learnings);
      console.dir(this.filteredData);
    }); 
  }
}
