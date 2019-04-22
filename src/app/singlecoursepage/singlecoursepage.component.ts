// let configuration = require('../../config');
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {AllcoursedetailsService} from '../allcoursedetails.service';
import {DomSanitizer} from "@angular/platform-browser";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-singlecoursepage',
  templateUrl: './singlecoursepage.component.html',
  styleUrls: ['./singlecoursepage.component.css']
})
export class SinglecoursepageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  videoURL;
  course_name;
  public listOfCourseDetails: any;
  public coursedetails: any;
  public timings: any;
  public CourseCurriculumdetail:any;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, public ser:AllcoursedetailsService,public sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      PhoneNumber: [,Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.route.params.subscribe(params => {
      this.listOfCourseDetails = this.ser.getallcoursedetails();
      this.course_name = params.courseName;
      if(params.courseName == 'Java'){
        this.coursedetails = this.listOfCourseDetails[0].java[0];
        this.timings = this.coursedetails.classInfo;
        this.CourseCurriculumdetail = this.coursedetails.CourseCurriculum;
        this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.coursedetails.VideoUrl);
        // console.log('----course name',this.coursedetails);
      }
      if(params.courseName == 'Angular'){
        this.coursedetails = this.listOfCourseDetails[0].Angular[0];
        this.timings = this.coursedetails.classInfo;
        this.CourseCurriculumdetail = this.coursedetails.CourseCurriculum;
        this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.coursedetails.VideoUrl);
        // console.log('----course name',this.coursedetails);
      }
      if(params.courseName == 'Reactjs'){
        this.coursedetails = this.listOfCourseDetails[0].Reactjs[0];
        this.timings = this.coursedetails.classInfo;
        this.CourseCurriculumdetail = this.coursedetails.CourseCurriculum;
        this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.coursedetails.VideoUrl);
        // console.log('----course name',this.coursedetails);
      }
      if(params.courseName == 'Nodejs'){
        this.coursedetails = this.listOfCourseDetails[0].Nodejs[0];
        this.timings = this.coursedetails.classInfo;
        this.CourseCurriculumdetail = this.coursedetails.CourseCurriculum;
        this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.coursedetails.VideoUrl);
        // console.log('----course name',this.coursedetails);
      }
      if(params.courseName == 'AWS'){
        this.coursedetails = this.listOfCourseDetails[0].AWS[0];
        this.timings = this.coursedetails.classInfo;
        this.CourseCurriculumdetail = this.coursedetails.CourseCurriculum;
        this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.coursedetails.VideoUrl);
        // console.log('----course name',this.coursedetails);
      }
    });
  }

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

