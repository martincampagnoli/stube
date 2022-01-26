import { DataService } from 'src/app/services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter<any>();
  
  userForm: any;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      avatar: [''],
    });
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  createUser(): void {
    this.dataService.createUser(this.userForm.value);
    this.closeModal();
  }
}
