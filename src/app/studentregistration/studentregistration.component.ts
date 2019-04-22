import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  	registerForm: FormGroup;
    submitted = false;
    TimingsPreferable = [{'id':1, 'name':'Training'}, {'id':2, 'name': 'Project Support'}];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Name: ['', Validators.required],
            Technology: ['', Validators.required],
            PhoneNumber: [,Validators.required],
            Location:['',Validators.required],
            email: ['', [Validators.required, Validators.email]],
            Option:'',
            ClassStart: '',
            PreferableTime:'',
            Queries:''
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        console.log(this.registerForm.value)
    }

}
