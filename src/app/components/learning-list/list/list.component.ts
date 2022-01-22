import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatPaginator, { static : false} ) paginator!: MatPaginator;
  @Input() data: any;
  filteredData!: Array<any>;

  lowValue: number = 0;
  highValue: number = 20;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  searchTerm!: string;

  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit(): void {
    this.filteredData = this.data;
  }

  search(value: string): void {
    this.filteredData = this.data?.filter((val:any) => val.name.toLowerCase().includes(value));
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  openModal(name: string, data?: any): void {
    this.ngxSmartModalService.getModal(name).open();
    if (data) { 
      this.ngxSmartModalService.setModalData(data, name);
    }
  }

}
