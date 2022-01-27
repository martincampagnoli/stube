import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { DisplayLearningsComponent } from './display-learnings.component';

const mockDataService = {
  getLearnings: () => of([ {name: "testLearning", id: "2"}]),
};

describe('DisplayLearningsComponent', () => {
  let component: DisplayLearningsComponent;
  let fixture: ComponentFixture<DisplayLearningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLearningsComponent ],
      providers: [
        { provide: DataService, useValue: mockDataService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLearningsComponent);
    component = fixture.componentInstance;
    component.user = {id: "1", name: "test user", email: "test@test.com", learnings: ['2']};
    component.filteredData = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load filteredData if the learning is assigned to the user', () => {
    spyOn(mockDataService, 'getLearnings').and.callThrough();
    expect(component.filteredData).toBeDefined();
    expect(component.filteredData?.length).not.toBe(0);
  });

});
