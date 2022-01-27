import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { NgxSmartModalStackService } from 'ngx-smart-modal/src/services/ngx-smart-modal-stack.service';
import { ListComponent } from './list.component';

const mockNgxSmartModalService = {
  getModal: () => {},
  setModalData: () => {},
};

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [
        {provide: NgxSmartModalService, useValue: mockNgxSmartModalService},
      ],
      imports: [NgxSmartModalModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the avatar in user', () => {
    const item = {avatar: "www.avatar.com"}
    const result = component.getAvatar(item);
    expect(result).toBeDefined();
    expect(result).toEqual("www.avatar.com");
  });

  it('should get default avatar if it is not set', () => {
    const item = {avatar: ''}
    const result = component.getAvatar(item);
    expect(result).toBeDefined();
    expect(result).toEqual("../assets/empty.png");
  });
});
