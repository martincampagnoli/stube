import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { UserListComponent } from './user-list.component';

const mockDataService = {
  getUsers: () => of(false),
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
