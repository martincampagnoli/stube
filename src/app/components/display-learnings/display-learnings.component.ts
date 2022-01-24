import { Component, Input, OnInit } from '@angular/core';
import { Learning } from 'src/app/models/Learning';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';

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
    }); 
  }
}
