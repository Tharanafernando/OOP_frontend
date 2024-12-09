import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe, KeyValuePipe, NgIf} from '@angular/common';
import {GreaterThanZero} from './GreaterThanZero';
import { ToastrService } from 'ngx-toastr';
import {EventService} from '../../event.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    NgIf,
    KeyValuePipe
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  form!:FormGroup;


  constructor(
    private fb:FormBuilder,
    private toastar:ToastrService,
    private eventService:EventService) {}

  confirm():void{
    console.log(this.form.value)
    if(this.form.valid){
      const formData = this.form.value
      this.eventService.createEventService(formData).subscribe({
        next:(response) => {
          console.log(response)
          this.toastar.success("Configuration created successfully")
        },
        error:(error) =>{
          console.log(error)
          this.toastar.error("Failed to confirm configuration")
        }
      })
    }else {
      this.toastar.error("Please fill the form correctly")
      console.log("Form is invalid",this.form)
    }

  }

  // MaximumTicketCapacity:['',[Validators.required,GreaterThanZero()]],



  ngOnInit() {
    this.form = this.fb.group({
      totalTickets:['',Validators.required],
      maxTickets:['',Validators.required],
      releaseRate:['',Validators.required],
      customerRate:['',Validators.required]
    });
  }


}
