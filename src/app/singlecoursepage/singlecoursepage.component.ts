// let configuration = require('../../config');
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {AllcoursedetailsService} from '../allcoursedetails.service';

@Component({
  selector: 'app-singlecoursepage',
  templateUrl: './singlecoursepage.component.html',
  styleUrls: ['./singlecoursepage.component.css']
})
export class SinglecoursepageComponent implements OnInit {
  public listOfCourseDetails: any;
  public coursedetails: any;
  public timings: any;
  public CourseCurriculum:any;
  constructor(private route: ActivatedRoute, public ser:AllcoursedetailsService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listOfCourseDetails = this.ser.getallcoursedetails();
      if(params.courseName == 'Java'){
        this.coursedetails = this.listOfCourseDetails[0].java[0];
        this.timings = this.coursedetails.classInfo;
        this.CourseCurriculum = this.coursedetails.CourseCurriculum;
        console.log('----course name',this.coursedetails);
      }
    });
  }

}

