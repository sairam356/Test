import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Java=[
    {
      id:"1",
      courseName:"Java"
    }
  ];
  Angular=[
    {
      id:"2",
      courseName:"Angular"
    }
  ];
  Nodejs=[
    {
      id:"3",
      courseName:"Nodejs"
    }
  ];
  C=[
    {
      id:"4",
      courseName:"C"
    }
  ];
  Spark=[
    {
      id:"5",
      courseName:"Spark"
    }
  ];
  Hadoop=[
    {
      id:"6",
      courseName:"Hadoop"
    }
  ];
  DataStructure=[
    {
      id:"6",
      courseName:"DataStructure"
    }
  ];
  SearchForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SearchForm = this.formBuilder.group({
      Name: ''
  });
  }
  get f() { return this.SearchForm.controls; }

  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
    if (this.SearchForm.invalid) {
        return;
    }

    console.log(this.SearchForm.value)
  }

}
