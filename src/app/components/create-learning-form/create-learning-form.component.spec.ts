import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

import { CreateLearningFormComponent } from './create-learning-form.component';

const mockDataService = {
  createLearning: () => false,
};

describe('CreateLearningFormComponent', () => {
  let component: CreateLearningFormComponent;
  let fixture: ComponentFixture<CreateLearningFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLearningFormComponent ],
      providers: [
        FormBuilder,
        { provide: DataService, useValue: mockDataService },
      ]
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
