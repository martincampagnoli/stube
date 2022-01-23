import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLearningFormComponent } from './create-learning-form.component';

describe('CreateLearningFormComponent', () => {
  let component: CreateLearningFormComponent;
  let fixture: ComponentFixture<CreateLearningFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLearningFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLearningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
