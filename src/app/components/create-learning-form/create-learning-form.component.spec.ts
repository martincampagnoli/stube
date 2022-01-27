import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

import { CreateLearningFormComponent } from './create-learning-form.component';

const mockDataService = {
  createLearning: (value: any) => false,
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

  it('should create learning with the value from the form', () => {
    component.learningForm.value = { name: "test name", active: true };
    spyOn(mockDataService, 'createLearning');
    component.createLearning();
    expect(mockDataService.createLearning).toHaveBeenCalled();
    expect(mockDataService.createLearning).toHaveBeenCalledWith(component.learningForm.value);
  });
  
  it('should close modal after submitting form', () => {
    component.learningForm.value = { name: "test name", active: true };
    spyOn(component, 'closeModal');
    component.createLearning();
    expect(component.closeModal).toHaveBeenCalled();
  });
});
