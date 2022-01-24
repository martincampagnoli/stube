import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLearningsComponent } from './display-learnings.component';

describe('DisplayLearningsComponent', () => {
  let component: DisplayLearningsComponent;
  let fixture: ComponentFixture<DisplayLearningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLearningsComponent ]
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
