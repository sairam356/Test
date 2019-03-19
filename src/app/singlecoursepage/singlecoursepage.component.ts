// let configuration = require('../../config');
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {AllcoursedetailsService} from '../allcoursedetails.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-singlecoursepage',
  templateUrl: './singlecoursepage.component.html',
  styleUrls: ['./singlecoursepage.component.css']
})
export class SinglecoursepageComponent implements OnInit {
  videoURL;
  course_name;
  public listOfCourseDetails: any;
  public coursedetails: any;
  public timings: any;
  public CourseCurriculumdetail:any;
  constructor(private route: ActivatedRoute, public ser:AllcoursedetailsService,public sanitizer: DomSanitizer) { }
  ngOnInit() {
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
    });
  }

}

