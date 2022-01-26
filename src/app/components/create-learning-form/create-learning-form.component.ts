import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'create-learning-form',
  templateUrl: './create-learning-form.component.html',
  styleUrls: ['./create-learning-form.component.scss']
})
export class CreateLearningFormComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter<any>();
  
  learningForm: any;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.learningForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  createLearning(): void {
    const newLearning = {...this.learningForm.value, active: true }
    this.dataService.createLearning(newLearning);
    this.closeModal();
  }
}
