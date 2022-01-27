import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { of } from 'rxjs';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';

import { UserListComponent } from './user-list.component';

const mockDataService = {
  getUsers: () => of([{}]),
  deleteUser: (user: User) => false,
};

const mockNgxSmartModalService = {
};

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers: [
        { provide: DataService, useValue: mockDataService },
        { provide: NgxSmartModalService, useValue: mockNgxSmartModalService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    component.users = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run method to get users on init', () => {
    spyOn(component, 'getUsers');
    component.ngOnInit();
    expect(component.getUsers).toHaveBeenCalled();
  });

  it('should actually get users', () => {
    spyOn(mockDataService, 'getUsers').and.callThrough();
    component.ngOnInit();
    expect(component.users?.length).not.toBe(0);
  });

  it('should call service with user to delete it', () => {
    spyOn(mockDataService, 'deleteUser');
    const user = {id: "1", name: "test user", email: "test@test.com", learnings: ['2']};
    component.delete(user);
    expect(mockDataService.deleteUser).toHaveBeenCalled();
    expect(mockDataService.deleteUser).toHaveBeenCalledWith(user);
  });


});
