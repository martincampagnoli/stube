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
});
