import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trainerregistration',
  templateUrl: './trainerregistration.component.html',
  styleUrls: ['./trainerregistration.component.css']
})
export class TrainerregistrationComponent implements OnInit {

    TrainerregisterForm: FormGroup;
    submitted = false;
    TimingsPreferable = [{'id':1, 'name':'Only Evening'}, {'id':2, 'name': 'Only Morning Batch'}, {'id':3, 'name': 'Weekends Batch'},{'id':4, 'name': 'Morning and Evening Batch'}];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.TrainerregisterForm = this.formBuilder.group({
            Name: ['', Validators.required],
            Technology: ['', Validators.required],
            PhoneNumber: [,Validators.required],
            Location:['',Validators.required],
            email: ['', [Validators.required, Validators.email]],
            salary:'',
            Details: '',
            ProjectSupport: '',
            TrainMini: '',
            Trainsuppjob: '',
            PreferableTime:'',
            Queries:''
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.TrainerregisterForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.TrainerregisterForm.invalid) {
            return;
        }

        console.log(this.TrainerregisterForm.value)
    }

}
