import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { of } from 'rxjs';
import { Learning } from 'src/app/models/Learning';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';

import { LearningListComponent } from './learning-list.component';

const mockDataService = {
  getUsers: () => of(false),
  getLearnings: () => of(false),
  deleteLearning: (data: Learning) => false,
  updateLearning: (data: Learning) => false,
  assignToUser: (id: string, user: User) => false,
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

  it('should run method to get learnings on init', () => {
    spyOn(component, 'getLearnings');
    component.ngOnInit();
    expect(component.getLearnings).toHaveBeenCalled();
  });

  it('should actually get learnings', () => {
    spyOn(mockDataService, 'getLearnings').and.callThrough();
    component.ngOnInit();
    expect(component.learnings?.length).not.toBe(0);
  });

  it('should call service with user to delete it', () => {
    spyOn(mockDataService, 'deleteLearning');
    const learning = {id: "1", name: "test user", active: true};
    component.delete(learning);
    expect(mockDataService.deleteLearning).toHaveBeenCalled();
    expect(mockDataService.deleteLearning).toHaveBeenCalledWith(learning);
  });

  it('should call service with learning to toggle active', () => {
    spyOn(mockDataService, 'updateLearning');
    const learning = {id: "1", name: "test user", active: true};
    component.toggleActive(learning);
    expect(mockDataService.updateLearning).toHaveBeenCalled();
    expect(mockDataService.updateLearning).toHaveBeenCalledWith(learning);
  });

  it('should call service with learning id and user to assign the learning to the user', () => {
    spyOn(mockDataService, 'assignToUser');
    const learning = {id: "1", name: "test user", active: true};
    const user = {id: "1", name: "test user", email: "test@test.com", learnings: ['2']};
    component.assignToUser(learning, user);
    expect(mockDataService.assignToUser).toHaveBeenCalled();
    expect(mockDataService.assignToUser).toHaveBeenCalledWith(learning.id, user);
  });
});
