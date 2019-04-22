import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-threecardcarousel',
  templateUrl: './threecardcarousel.component.html',
  styleUrls: ['./threecardcarousel.component.css']
})
export class ThreecardcarouselComponent implements OnInit {
  Java=[
    {
      id:"1",
      courseName:"Java",
      UiCourseName:"Java: OOPS Concepts, Jsp, Servlets",
      couserdescriptiom:"",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"10",
      stars:"5",
      imgUrl:"../../assets/nodejs2.jpg"
    }
  ];
  Angular=[
    {
      id:"3",
      courseName:"Angular",
      UiCourseName:"Angular: Services,Routing,HttpClient",
      couserdescriptiom:"Use built-in Angular directives, Create Angular components, one-way data binding for read-only data.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"9",
      stars:"5",
      imgUrl:"../../assets/nodejs3.jpg"
    }
  ];
  Nodejs=[
    {
      id:"2",
      courseName:"Nodejs",
      UiCourseName:"Node.js: The Complete Guide to Build RESTful APIs (2018)",
      couserdescriptiom:"Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"5",
      imgUrl:"../../assets/nodejs1.jpg"
    }
  ];
  Reactjs=[
    {
      id:"2",
      courseName:"Reactjs",
      UiCourseName:"Node.js: The Complete Guide to Build RESTful APIs (2018)",
      couserdescriptiom:"Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"5",
      imgUrl:"../../assets/nodejs1.jpg"
    }
  ];
  constructor() { }

  ngOnInit() {
  	
  }

}
