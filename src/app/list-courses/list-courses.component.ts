import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  Java=[
    {
      id:"1",
      courseName:"Java",
      UiCourseName:"Java: OOPS Concepts, Jsp, Servlets",
      couserdescriptiom:"",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"10",
      stars:"4",
      imgUrl:"../../assets/Java.png"
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
      stars:"4",
      imgUrl:"../../assets/nodejs4.jpg"
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
      stars:"4",
      imgUrl:"../../assets/nodejs3.jpg"
    }
  ];
  React=[
    {
      id:"2",
      courseName:"Reactjs",
      UiCourseName:"React.js: The Complete Guide to Build RESTful APIs (2018)",
      couserdescriptiom:"Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"4",
      imgUrl:"../../assets/nodejs5.jpg"
    }
  ];
  AWS=[
    {
      id:"2",
      courseName:"AWS",
      UiCourseName:"AWS Training",
      couserdescriptiom:"AWS Training is curated by industry professionals as per the industry requirements and demands.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"4",
      imgUrl:"../../assets/AWS.png"
    }
  ];
  allcouseres=[
    {
      id:"1",
      courseName:"Java",
      UiCourseName:"Java: OOPS Concepts, Jsp, Servlets",
      couserdescriptiom:"",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"10",
      stars:"4",
      imgUrl:"../../assets/Java.png"
     },
     {
      id:"2",
      courseName:"Nodejs",
      UiCourseName:"Node.js: The Complete Guide to Build RESTful APIs (2018)",
      couserdescriptiom:"Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"8",
      stars:"4",
      imgUrl:"../../assets/nodejs3.jpg"
     },
     {
      id:"3",
      courseName:"Angular",
      UiCourseName:"Angular: Services,Routing,HttpClient",
      couserdescriptiom:"Use built-in Angular directives, Create Angular components, one-way data binding for read-only data.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"9",
      stars:"4",
      imgUrl:"../../assets/nodejs4.jpg"
     },
     {
      id:"4",
      courseName:"AWS",
      UiCourseName:"AWS: S3 services",
      couserdescriptiom:"How to control Cache for images, To make images public.",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"7",
      stars:"3",
      imgUrl:"../../assets/AWS.png"
     },
     {
      id:"5",
      courseName:"UI/UX",
      UiCourseName:"UI/UX: Html,Css, Javascript, Photoshop",
      couserdescriptiom:"Designing websites in Web and Mobile responsive",
      nofHourse:"10 HOURS",
      Level:"Intermediate",
      rating :"10",
      stars:"4",
      imgUrl:"../../assets/UX.jpg"
     }
  ]
  constructor() { }

  ngOnInit() {
  }

}
