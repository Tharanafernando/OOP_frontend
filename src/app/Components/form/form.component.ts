import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  form!:FormGroup;


  confirm = () => {
    console.log(this.form.value)
  };

  constructor(private fb:FormBuilder) {
  }

  ngOnInit() {
    this.fb.group({
      MaximumTicketCapacity:[' ',Validators.required],
      TotalNumberOfTickets:[' ',Validators.required],
      TicketReleaseRate:[' ',Validators.required],
      CustomerReleaseRate:[' ',Validators.required]
    })
  }
}
