import { DataService } from 'src/app/services/data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder } from '@angular/forms';

import { CreateUserFormComponent } from './create-user-form.component';

const mockDataService = {
  createUser: (value: any) => false,
};

describe('CreateUserFormComponent', () => {
  let component: CreateUserFormComponent;
  let fixture: ComponentFixture<CreateUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserFormComponent ],
      providers: [
        FormBuilder,
        AngularFireDatabase,
        { provide: DataService, useValue: mockDataService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create user with the value from the form', () => {
    component.userForm.value = { name: "test name", active: true };
    spyOn(mockDataService, 'createUser');
    component.createUser();
    expect(mockDataService.createUser).toHaveBeenCalled();
    expect(mockDataService.createUser).toHaveBeenCalledWith(component.userForm.value);
  });
  
  it('should close modal after submitting form', () => {
    component.userForm.value = { name: "test name", active: true };
    spyOn(component, 'closeModal');
    component.createUser();
    expect(component.closeModal).toHaveBeenCalled();
  });
});
