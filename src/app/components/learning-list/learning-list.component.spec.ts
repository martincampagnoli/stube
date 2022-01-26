import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { LearningListComponent } from './learning-list.component';

const mockDataService = {
  getUsers: () => of(false),
  getLearnings: () => of(false),
};

const mockNgxSmartModalService = {
};

describe('LearningListComponent', () => {
  let component: LearningListComponent;
  let fixture: ComponentFixture<LearningListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningListComponent ],
      providers: [
        { provide: DataService, useValue: mockDataService },
        { provide: NgxSmartModalService, useValue: mockNgxSmartModalService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
