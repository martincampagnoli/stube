import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { DisplayLearningsComponent } from './display-learnings.component';

const mockDataService = {
  getLearnings: () => of(false),
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
