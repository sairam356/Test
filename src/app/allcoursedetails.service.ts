import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Contact{
  id:number;
  name: string;
  phone: string;
  dob: string;
  company: string;
  constructor(id,name,phone,dob,company){
  this.id=id;
      this.name = name;
      this.phone = phone;
      this.dob = dob;
      this.company = company;
  }
}

export class AllcoursedetailsService {
  constructor() { }
  getallcoursedetails(){
    return [{
      'java': [
      {
        'MainHeadingCourse':'Java, J2EE & SOA Certification Training',
        'CourseDescription' :'Java Certification Training is curated by the professionals as per the industrial requirements & demands. Java Online Training encompasses comprehensive knowledge on basic and advanced concepts of core Java & Java EE along with popular frameworks like Hibernate, Spring, and SOA. In this course, you will gain expertise in the concepts like Java Array, Java OOPs, Java Function, Java Loops, Java Collections, Java Thread, Java Servlet, Java Design Patterns, and Web Services using industry use-cases.',
        'VideoUrl':'https://www.youtube-nocookie.com/embed/3u1fu6f8Hto',
        'onlineClassHeader':'Instructor-led Java, J2EE & SOA live online classes',
        'classInfo':[
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Sat & Sun',
            'days':'(7 Weeks)',
            'type':'Weekend Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Sold Out'
          },
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Sat & Sun',
            'days':'(7 Weeks)',
            'type':'Weekend Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Sold Out'
          },
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Mon - Fri',
            'days':'(7 Weeks)',
            'type':'Daily Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Filling Fast'
          },
        ],
        'CourseCiruculumName':'Java, J2EE & SOA Course Curriculum',
        'CourseCurriculum':[{
          'headerName':'Introduction of Java',
          'LearningObjectives':'In this module, you will learn about Java architecture, advantages of Java, develop the code with various data types, conditions, and loops.',
          'listofContent':[{
            'content1':'Introduction to Java',
            'content2':'Bytecode, Class Files',
            'content3':'Compilation Process',
            'content4':'Data types, and Operations',
            'content5':'Loops – for, if conditions, while and do while',
          }],
        },
          {
            'headerName':'Data Handling and Functions',
            'LearningObjectives':'In this module, you will learn how to code with arrays, functions, and strings.',
            'listofContent':[{
              'content1':'Arrays - Single Dimensional and Multidimensional arrays',
              'content2':'Functions, Functions with Arugments & overloading',
              'content3':'The concept of Static Polymorphism',
              'content4':'String Handling - String',
              'content5':'String Buffer'
            }],
          },
          {
            'headerName':'JDBC',
            'LearningObjectives':'In this module, you will learn SQL, Architecture of JDBC, Different drivers of JDBC and to write code in JDBC to communicate with Database.',
            'listofContent':[{
              'content1':'Introduction to SQL: Connect, Insert, Update, Delete, Select',
              'content2':'Introduction to JDBC and Architecture of JDBC',
              'content3':'Types of Drivers: Type 1/2/3/4 drivers',
              'content4':'Insert/Update/Delete/Select Operations using JDBC',
              'content5':'Batch Processing Transaction & Management: Commit and Rollback'
            }],
          }],
        }],
      
      'Nodejs': [
        {
          'MainHeadingCourse':'Node Js Training',
          'CourseDescription' :'Our Node.js Training helps you develop applications using Express and deploying them to Heroku. Learn how to use EJS/Jade/Handlebars, build applications backed by MongoDB, write realtime chat application using Socket IO, Gain knowledge of Grunt and Gulp, test with Mocha and Chai, knowing Hapi and Meteor.',
          'VideoUrl':'https://www.youtube.com/embed/nZRbnBBupBI',
          'onlineClassHeader':'Instructor-led Node.js live online classes',
          'classInfo':[
            {
              'Day':'09',
              'Month':'Feb',
              'sup':'th',
              'FromTo':'Sat & Sun',
              'days':'(7 Weeks)',
              'type':'Weekend Batch',
              'timing':'08:30 PM - 11:30 PM (IST)',
              'status':'Sold Out'
            },
            {
              'Day':'09',
              'Month':'Feb',
              'sup':'th',
              'FromTo':'Sat & Sun',
              'days':'(7 Weeks)',
              'type':'Weekend Batch',
              'timing':'08:30 PM - 11:30 PM (IST)',
              'status':'Sold Out'
            },
            {
              'Day':'09',
              'Month':'Feb',
              'sup':'th',
              'FromTo':'Mon - Fri',
              'days':'(7 Weeks)',
              'type':'Daily Batch',
              'timing':'08:30 PM - 11:30 PM (IST)',
              'status':'Filling Fast'
            },
          ],
          'CourseCiruculumName':'Node Js Course Curriculum',
          'CourseCurriculum':[
            {
              'headerName':'Get Started with Node js and ExpressJs',
              'LearningObjectives':'In this module you will learn what is Node.js and what makes Node.js so popular. You will also learn how to use Node Package Manager (NPM), ExpressJS Framework and we will create a ExpressJS application and deploy it to Heroku. We will also see how to use Nodemon. ',
              'listofContent':[{
                'content1':'What is NodeJS, Installing NodeJS',
                'content2':'Node Package Manager (NPM), ExpressJS Framework',
                'content3':'Building first Node App using Express',
                'content4':'Pushing code to GitHub',
                'content5':'Deploying application to Heroku, Using Nodemon',
              }],
            },
            {
              'headerName':'Building application with EJS Template',
              'LearningObjectives':'In this module you learn about templating engines specifically EJS, EJS partials and how to modularize code. You will also learn how to use Bootstrap framework. At the end of the module we will create an express app using EJS template and deploy it to Heroku',
              'listofContent':[{
                'content1':' JavaScript Templating Engines',
                'content2':'Creating project using EJS template, Twitter Bootstrap',
                'content3':'How to modularize code by separating routes',
                'content4':'How to use EJS partials',
                'content5':'Deploy code to Heroku'
              }],
            },
            {
              'headerName':'Building Application using Jade and Handlebars template',
              'LearningObjectives':' In this module, we will continue working with different templating engines, we will work with Jade and Handlebars template engines. You will learn how to build applications using Jade and Handlebars and how to deploy it to Heroku.',
              'listofContent':[{
                'content1':'Jade Templating Engine, Getting started with Jade',
                'content2':'Using Jade to create a web app, Deploying Jade application to Heroku',
                'content3':'Handlebars Templating Engine, Handlebars templates and partials',
                'content4':'Using Handlebars to create a web app',
                'content5':'Deploying Handlebars application to Heroku'
              }],
            },
            {
              'headerName':'Build Web Applications using ExpressJS & MongoDB',
              'LearningObjectives':' In this module you will be introduced to MongoDB and Mongoose. Understanding Mongoose Schema and Model and using body-parser and express-session modules. Hashing passwords with bcrypt, Performing Authentication using MongoDB, Implementing SignUp, Login, Logout features. We will build a story creation application.',
              'listofContent':[{
                'content1':'Introduction to MongoDB, Getting started with Mongoose',
                'content2':'Understanding Mongoose Schema and Model, Using body-parser and express-session modules',
                'content3':'Using chalk to differentiate log messages, Hashing passwords with bcrypt',
                'content4':'Performing Authentication using MongoDB',
                'content5':' Implementing SignUp, Login, Logout features'
              }],
            },
            {
              'headerName':'Build Web Applications using ExpressJS & MongoDB - Part 2',
              'LearningObjectives':' In this module we will continue our story creation app by adding Summernote editor, Saving user stories, Generating a slug for each story, Handling 404 and 500 errors, Using MongoLabs hosted MongoDB as our database, Deploying the applicatoion to Heroku, Buying Domain and setting custom domain for Heroku application.',
              'listofContent':[{
                'content1':' Summernote editor, Saving user stories',
                'content2':'Generating a slug for each story, Handling 404 and 500 errors',
                'content3':'Using MongoLabs hosted MongoDB as our database',
                'content4':'Deploying the applicatoion to Heroku',
                'content5':'Buying Domain and setting custom domain for Heroku application'
              }],
            },
            {
              'headerName':'Building Realtime Chat Application using Socket.IO',
              'LearningObjectives':' In this module you will be introduced to WebSocket and Socket IO, Getting started with Socket IO, Handling events at server and client side, Designing the chat UI, Handling private and public messages, Deploying the chat application to Heroku.',
              'listofContent':[{
                'content1':'Introduction to WebSocket and Socket IO',
                'content2':' Getting started with Socket IO',
                'content3':'Handling events at server and client side, Designing the chat UI',
                'content4':'Handling private and public messages',
                'content5':' Deploying the chat application to Heroku'
                
              }],
            },
            {
              'headerName':'Build Systems - Grunt and Gulp, Testing with Mocha and Chai',
              'LearningObjectives':'In this module you will learn what is a Build System and why we need a build system. Getting started with Grunt Creating grunt tasks for CSS, JS minification and watch. Getting started with Gulp, Writing gulp tasks for CSS, JS minification and watch. Writing test cases with Mocha and Chai.',
              'listofContent':[{
                'content1':' What is a Build System and why we need a build system.',
                'content2':'Getting started with Grunt Creating grunt tasks for CSS, JS minification and watch',
                'content3':' Getting started with Gulp, Writing gulp tasks for CSS',
                'content4':' JS minification and watch',
                'content5':'Writing test cases with Mocha and Chai'
                
              }],
            },
            {
              'headerName':'Getting started with Hapi and Meteor',
              'LearningObjectives':'In this module, you will get started with Hapi framework, writing a basic app with Hapi. Using Amazon Relational Database Service (RDS) to host MySQL database. Getting started with Meteor. How to choose a web framework from Express, Hapi and Meteor.',
              'listofContent':[{
                'content1':'Getting started with Hapi, writing a basic app with Hapi.',
                'content2':'Using Amazon Relational Database Service (RDS) to host MySQL database.Getting started with Meteor ',
                'content3':'How to choose a web framework from Express, Hapi and Meteor',
                'content4':'Overview of Syllabus',
                'content5':'Different Examples on this topic'
              }],
            }
          ],
        }],
      
      'Angular': [
      {
        'MainHeadingCourse':'Angular Training',
        'CourseDescription' :'Angular training at onlinecourse makes you an expert in concepts such as SPA (Single Page Application), DOM manipulations, DOM events, Dependency Injection (DI), REST API communication, Async supporting libraries, and external libraries such as JQuery and Bootstrap.',
        'VideoUrl':'https://www.youtube.com/embed/r-xlmXE7bJU',
        'onlineClassHeader':'Instructor-led Angular live online classes',
        'classInfo':[
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Sat & Sun',
            'days':'(7 Weeks)',
            'type':'Weekend Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Sold Out'
          },
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Sat & Sun',
            'days':'(7 Weeks)',
            'type':'Weekend Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Sold Out'
          },
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Mon - Fri',
            'days':'(7 Weeks)',
            'type':'Daily Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Filling Fast'
          },
        ],
        'CourseCiruculumName':'Angular Course Curriculum',
        'CourseCurriculum':[
        {
          'headerName':'Introduction to JavaScript MVC Framework & Angular',
          'LearningObjectives':'Upon completing this lesson, you should be able Compare JavaScript Design Patterns - MVC, Explain Client side SPA, Libraries, and Frameworks, Demonstrate Typescript, Setup Angular Project',
          'listofContent':[{
            'content1':' JavaScript MVC, SPA Intro',
            'content2':'NodeJS Intro (NPM), Typescript Introduction (Introduction)',
            'content3':'When to use types / When not), Angular Hello World Demo',
            'content4':'Directives',
            'content5':'Basic Examples',
          }],
        },
        {
          'headerName':'Components and DOM Interactions',
          'LearningObjectives':'Upon completing this lesson, you should be able to: Express how Angular works, Describe Components and Creation, Work with Multiple components, Work with DOM manipulation API',
          'listofContent':[{
            'content1':'Creating components and using Metadata',
            'content2':'Multiple Components and Passing data',
            'content3':'Introduction to DOM Manipulation using Angular APIs',
            'content4':'Overview',
            'content5':'Examples on this Topic'
          }],
        },
        {
          'headerName':'Components and Dependency Injection',
          'LearningObjectives':'Upon completing this lesson, you should be able to: Describe Dependency Injection, Describe creation and working with Injectable dependencies, Express Change detection and Emulation strategies, Work with Application lifecycle hooks',
          'listofContent':[{
            'content1':'Component creation strategies',
            'content2':'Angular lifecycle hooks',
            'content3':'Introduction to Dependency Injection',
            'content4':'Sharing data between components',
            'content5':'Overview'
          }],
        },
        {
          'headerName':'Routes, Inbuilt Directives and Pipes',
          'LearningObjectives':'Describe the working of SPA routes and using inbuilt Directives/Pipes,  Upon completing this lesson, you should be able to: Analyze Application cleanliness and Angular Modules, Work with SPA Routes, Work with inbuilt, Directives and Forms, Work with inbuilt Pipes.',
          'listofContent':[{
            'content1':'Angular Modules',
            'content2':'Routes (Simple and Nested)',
            'content3':'Inbuilt Directive',
            'content4':'Inbuilt Pipes',
            'content5':'Overview'
          }],
        },
        {
          'headerName':'Custom Directives and Pipes',
          'LearningObjectives':'Creation of custom reusable functionalities, Upon completing this lesson, you should be able to: Work with custom directives, Work with custom pipes, Work with HTTP features, Describe how Promises and Observables work.',
          'listofContent':[{
            'content1':' Custom Directives',
            'content2':'Custom Pipes',
            'content3':'Inbuilt Features - HTTP Request',
            'content4':'Some Examples on this Topic',
            'content5':'Overview'
          }],
        },
        {
          'headerName':'Third-party Library Integration, Other APIs',
          'LearningObjectives':'Working with External Libraries and using Angular APIs, Upon completing this lesson, you should be able to: Work with External / Third party Libraries like JQuery / Socket.IO, Discuss and Work with other APIs, Analyze options available for upgrading from 1.x, Discuss the concept of Internationalization and Localization',
          'listofContent':[{
            'content1':'Introduction to Third party library integration',
            'content2':' Introduction to SystemJS/CommonJS',
            'content3':'Integrating JQuery / Socket.io',
            'content4':'Introduction to i18n and l10n',
            'content5':'Touch Angular 1.x to 2.x (or Higher usage) - Do’s and Don’ts, Other APIs'
            
          }],
        },
        {
          'headerName':'Unit Testing and Angular-CLI',
          'LearningObjectives':'Explain Unit testing in Angular and Working with Angular-CLI,  Upon completing this lesson, you should be able to: Describe Unit testing and TDD concepts, Work with Jasmine Framework, Work with Angular-CLI, Work with Angular-CLI for Test environment setup, Work with other Angular application development Tools',
          'listofContent':[{
            'content1':'Unit Testing, related Tools',
            'content2':' Introduction to Jasmine Framework',
            'content3':'Introduction to Angular CLI',
            'content4':'Unit Test Environment and set up using Angular CLI',
            'content5':'Other Tool and TDD'
          }],
        },
        {
          'headerName':'Project / Use Cases',
          'LearningObjectives':'Learn how to create an Angular Application, Upon completing this lesson, you should be able to: Develop Angular Applications and work with Data.',
          'listofContent':[{
            'content1':'Use-Case 1 – Simple Employee Management',
            'content2':'Use-Case 2 – Top Movies',
            'content3':'Use-Case 3 – Grocery list Management',
            'content4':'Project – Shopping Cart Application',
            'content5':'Unit Test'
          }],
        }
      ],
    }],
      
      'UI/UX': [{
        'MainHeadingCourse':'UI/UX Certification Training',
        'CourseDescription' :'Java Certification Training is curated by the professionals as per the industrial requirements & demands. Java Online Training encompasses comprehensive knowledge on basic and advanced concepts of core Java & Java EE along with popular frameworks like Hibernate, Spring, and SOA. In this course, you will gain expertise in the concepts like Java Array, Java OOPs, Java Function, Java Loops, Java Collections, Java Thread, Java Servlet, Java Design Patterns, and Web Services using industry use-cases.',
        'VideoUrl':'https://www.youtube-nocookie.com/embed/3u1fu6f8Hto',
        'onlineClassHeader':'Instructor-led Java, J2EE & SOA live online classes',
        'classInfo':[
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Sat & Sun',
            'days':'(7 Weeks)',
            'type':'Weekend Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Sold Out'
          },
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Sat & Sun',
            'days':'(7 Weeks)',
            'type':'Weekend Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Sold Out'
          },
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Mon - Fri',
            'days':'(7 Weeks)',
            'type':'Daily Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Filling Fast'
          }
        ],
        'CourseCiruculumName':'Java, J2EE & SOA Course Curriculum',
        'CourseCurriculum':[{
          'headerName':'Introduction of Java',
          'LearningObjectives':'In this module, you will learn about Java architecture, advantages of Java, develop the code with various data types, conditions, and loops.',
          'listofContent':[{
            'content1':'Introduction to Java',
            'content2':'Bytecode, Class Files',
            'content3':'Compilation Process',
            'content4':'Data types, and Operations',
            'content5':'Loops – for, if conditions, while and do while',
          }],
        },
        {
          'headerName':'Data Handling and Functions',
          'LearningObjectives':'In this module, you will learn how to code with arrays, functions, and strings.',
          'listofContent':[{
            'content1':'Arrays - Single Dimensional and Multidimensional arrays',
            'content2':'Functions, Functions with Arugments & overloading',
            'content3':'The concept of Static Polymorphism',
            'content4':'String Handling - String',
            'content5':'String Buffer'
          }],
        },
        {
          'headerName':'JDBC',
          'LearningObjectives':'In this module, you will learn SQL, Architecture of JDBC, Different drivers of JDBC and to write code in JDBC to communicate with Database.',
          'listofContent':[{
            'content1':'Introduction to SQL: Connect, Insert, Update, Delete, Select',
            'content2':'Introduction to JDBC and Architecture of JDBC',
            'content3':'Types of Drivers: Type 1/2/3/4 drivers',
            'content4':'Insert/Update/Delete/Select Operations using JDBC',
            'content5':'Batch Processing Transaction & Management: Commit and Rollback'
          }],
        }],
      }],

      'Reactjs': [{
        'MainHeadingCourse':'ReactJS with Redux Training',
        'CourseDescription' :'ReactJS ​with Redux ​course at OnlineCourses is designed to skill you into a successful Client-Side Application Developer. You"ll master the concepts of ReactJS including its Architecture and components. The course also focuses on ​Testing Redux, React Router, React Redux, JSX, Data Flow & Usage with React​, ​​Async Actions & Flow and React Middleware​ thereby making you completely ready to build ReactJS applications effectively.',
        'VideoUrl':'https://www.youtube.com/embed/pp2Jl7xkoeA',
        'onlineClassHeader':'Instructor-led ReactJS with Redux live online classes',
        'classInfo':[
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Sat & Sun',
            'days':'(7 Weeks)',
            'type':'Weekend Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Sold Out'
          },
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Sat & Sun',
            'days':'(7 Weeks)',
            'type':'Weekend Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Sold Out'
          },
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Mon - Fri',
            'days':'(7 Weeks)',
            'type':'Daily Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Filling Fast'
          },
        ],
        'CourseCiruculumName':'ReactJs Course Curriculum',
        'CourseCurriculum':[
        {
          'headerName':'Introduction to ReactJS',
          'LearningObjectives':'Introduce JavaScript MVC focused on View and ReactJS, Understand JavaScript MVC',
          'listofContent':[{
            'content1':'Javascript MVC, View Technology',
            'content2':'Introduction to ReactJS',
            'content3':'React and SPA',
            'content4':'Basic Setup',
            'content5':'First Example – Hello World',
          }],
        },
        {
          'headerName':'React Basics',
          'LearningObjectives':'Understand basic features of React.',
          'listofContent':[{
            'content1':'React Concepts',
            'content2':'JSX, Render Elements ',
            'content3':'Components and Props',
            'content4':'State and Lifecycle',
            'content5':'Handling Events'
          }],
        },
        {
          'headerName':'React Key Features',
          'LearningObjectives':'Understand other key features of React',
          'listofContent':[{
            'content1':'Conditional Rendering',
            'content2':'Lists and Keys and Forms',
            'content3':'Lifting State Up',
            'content4':'Composition vs Inheritance',
            'content5':'Thinking In React'
          }],
        },
        {
          'headerName':'Redux Introduction',
          'LearningObjectives':'Introduction to Redux',
          'listofContent':[{
            'content1':'Introduction and Motivation',
            'content2':'Core Concepts',
            'content3':'Three Principles, Legacy of Redux',
            'content4':'Redux Setup',
            'content5':'First example'
          }],
        },
        {
          'headerName':'Redux Basics',
          'LearningObjectives':'Understand the Action, Reducers and Store',
          'listofContent':[{
            'content1':'Action, Action Creators',
            'content2':'State Shape, Handling Actions',
            'content3':'Handling more actions',
            'content4':'Splitting Reducers, Store',
            'content5':'Dispatch Actions'
          }],
        },
        {
          'headerName':'Data Flow and Usage with React',
          'LearningObjectives':'Understand Data Flow and Usage with React',
          'listofContent':[{
            'content1':'Data Flow, Install React Redux',
            'content2':'Presentational and Container Components',
            'content3':'Design Component Hierarchy',
            'content4':'Implementing Components',
            'content5':'Passing the Store'
            
          }],
        },
        {
          'headerName':'Async Actions and Async Flow in Redux',
          'LearningObjectives':'Understand Async Actions and Async Flow',
          'listofContent':[{
            'content1':'Actions, Synchronous Action Creators',
            'content2':'Design State Shape, Handle Actions',
            'content3':'Async Action Creators',
            'content4':'Async Flow',
            'content5':'Overview with different Examples'
          }],
        },
        {
          'headerName':'Middleware and React Router',
          'LearningObjectives':'Understand Middleware and React Router',
          'listofContent':[{
            'content1':'Middleware, Middleware Applicability',
            'content2':'React Router Overview, React Router Configuration',
            'content3':'React Router with Redux',
            'content4':'Navigate with React Router',
            'content5':'Overview with Examples'
          }],
        }],
      }],

      'DS': [{
      'MainHeadingCourse':'DS Certification Training',
      'CourseDescription' :'Java Certification Training is curated by the professionals as per the industrial requirements & demands. Java Online Training encompasses comprehensive knowledge on basic and advanced concepts of core Java & Java EE along with popular frameworks like Hibernate, Spring, and SOA. In this course, you will gain expertise in the concepts like Java Array, Java OOPs, Java Function, Java Loops, Java Collections, Java Thread, Java Servlet, Java Design Patterns, and Web Services using industry use-cases.',
      'VideoUrl':'https://www.youtube-nocookie.com/embed/3u1fu6f8Hto',
      'onlineClassHeader':'Instructor-led Java, J2EE & SOA live online classes',
      'classInfo':[
        {
          'Day':'09',
          'Month':'Feb',
          'sup':'th',
          'FromTo':'Sat & Sun',
          'days':'(7 Weeks)',
          'type':'Weekend Batch',
          'timing':'08:30 PM - 11:30 PM (IST)',
          'status':'Sold Out'
        },
        {
          'Day':'09',
          'Month':'Feb',
          'sup':'th',
          'FromTo':'Sat & Sun',
          'days':'(7 Weeks)',
          'type':'Weekend Batch',
          'timing':'08:30 PM - 11:30 PM (IST)',
          'status':'Sold Out'
        },
        {
          'Day':'09',
          'Month':'Feb',
          'sup':'th',
          'FromTo':'Mon - Fri',
          'days':'(7 Weeks)',
          'type':'Daily Batch',
          'timing':'08:30 PM - 11:30 PM (IST)',
          'status':'Filling Fast'
        },
      ],
      'CourseCiruculumName':'Java, J2EE & SOA Course Curriculum',
      'CourseCurriculum':[{
        'headerName':'Introduction of Java',
        'LearningObjectives':'In this module, you will learn about Java architecture, advantages of Java, develop the code with various data types, conditions, and loops.',
        'listofContent':[{
          'content1':'Introduction to Java',
          'content2':'Bytecode, Class Files',
          'content3':'Compilation Process',
          'content4':'Data types, and Operations',
          'content5':'Loops – for, if conditions, while and do while',
        }],
      },
      {
        'headerName':'Data Handling and Functions',
        'LearningObjectives':'In this module, you will learn how to code with arrays, functions, and strings.',
        'listofContent':[{
          'content1':'Arrays - Single Dimensional and Multidimensional arrays',
          'content2':'Functions, Functions with Arugments & overloading',
          'content3':'The concept of Static Polymorphism',
          'content4':'String Handling - String',
          'content5':'String Buffer'
        }],
      },
      {
        'headerName':'JDBC',
        'LearningObjectives':'In this module, you will learn SQL, Architecture of JDBC, Different drivers of JDBC and to write code in JDBC to communicate with Database.',
        'listofContent':[{
          'content1':'Introduction to SQL: Connect, Insert, Update, Delete, Select',
          'content2':'Introduction to JDBC and Architecture of JDBC',
          'content3':'Types of Drivers: Type 1/2/3/4 drivers',
          'content4':'Insert/Update/Delete/Select Operations using JDBC',
          'content5':'Batch Processing Transaction & Management: Commit and Rollback'
        }],
      }],
    }],
      
      'AWS': [{
        'MainHeadingCourse':'AWS Training',
        'CourseDescription' :'AWS Training is curated by industry professionals as per the industry requirements and demands. It will help you prepare for the AWS Certified Solutions Architect (CSA) - Associate Exam. With OnlineCourse instructor-led sessions, you will be able to effectively deploy secure and robust applications on AWS. The course will help you identify the appropriate AWS service based on data, compute or security requirements.',
        'VideoUrl':'https://www.youtube.com/embed/IT1X42D1KeA',
        'onlineClassHeader':'Instructor-led AWS live online classes',
        'classInfo':[
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Sat & Sun',
            'days':'(7 Weeks)',
            'type':'Weekend Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Sold Out'
          },
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Sat & Sun',
            'days':'(7 Weeks)',
            'type':'Weekend Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Sold Out'
          },
          {
            'Day':'09',
            'Month':'Feb',
            'sup':'th',
            'FromTo':'Mon - Fri',
            'days':'(7 Weeks)',
            'type':'Daily Batch',
            'timing':'08:30 PM - 11:30 PM (IST)',
            'status':'Filling Fast'
          },
        ],
        'CourseCiruculumName':'AWS Course Curriculum',
        'CourseCurriculum':[
        {
          'headerName':'Introduction To AWS',
          'LearningObjectives':'In this module, you will learn about the different services provided by AWS. You will be provided with an overview of important resources required for architecting an application.',
          'listofContent':[{
            'content1':'Cloud Computing(Sign-up for AWS free-tier account)',
            'content2':'Cloud deployment and service models(Create a S3 bucket through Console)',
            'content3':'AWS Global Infrastructure and its benefits',
            'content4':'AWS Services(Create a S3 bucket through AWS CLI)',
            'content5':'Ways to access AWS Services(Launch an EC2 instance)',
          }],
        },
        {
          'headerName':'Security Management In AWS',
          'LearningObjectives':'In this module, you will learn about security management in AWS using Identity Access Management (IAM) and Key Management Service.',
          'listofContent':[{
            'content1':'User management through Identity Access Management (IAM), Various access policies across AWS Services',
            'content2':'API keys service access, Best practices for IAM',
            'content3':'Key Management Service, Access billing and create alerts on billing',
            'content4':'Create new users who can login to AWS console, role for an application to access S3',
            'content5':'Create policies for new user to have either admin or limited privileges,Credential rotation for IAM users, API keys for accessing AWS Services, Budget'
          }],
        },
        {
          'headerName':'Object Storage Options',
          'LearningObjectives':'In this module, you will learn about the different Object Storage Services offered by AWS, identify when to use a specific service, how to store/transfer data using these services and optimize the storage cost.',
          'listofContent':[{
            'content1':'S3 bucket - Creation, Version Control, Security, Replication, Transfer Acceleration, Storage classes in S3',
            'content2':'Life cycle policy in S3, Cost optimization for S3, Snowball',
            'content3':'Cost optimization for S3, CloudFront – Create and configure with S3',
            'content4':'Storage Gateway and its types, Hosting a Static Website on Amazon S3',
            'content5':'Versioning in AWS S3, Replicating data across regions, S3 Transfer acceleration,Upload a file to AWS S3 through a Website.'
          }],
        },
        {
          'headerName':'Amazon EC2',
          'LearningObjectives':'EC2 (Elastic Compute Cloud) is the backbone of AWS. In this module, you will learn about the concepts associated with an EC2 instance and their usage. This module covers different Amazon AMIs, a demo on launching an AWS EC2 instance, ways to connect with an instance and how to host a website on AWS EC2 instance.',
          'listofContent':[{
            'content1':'Start, stop and terminate an EC2 Instance, Security Group, AMI',
            'content2':'VPC, ENI, Public and Private IP,Storage services, EBS and its types',
            'content3':'EFS, Cost optimization',
            'content4':'Host your website inside EC2, Create an AMI, Create an Elastic IP',
            'content5':'Attaching an EBS volume externally, Mount EFS volumes'
          }],
        },
        {
          'headerName':'Load Balancing, Auto-Scaling And Route 53',
          'LearningObjectives':'In this module, you will learn the concepts of Load Balancing, Auto-Scaling and Route 53 to manage traffic.',
          'listofContent':[{
            'content1':'Elastic Load Balancer and its types, Comparison of Classic, Network and Application Load Balancer',
            'content2':'Auto-Scaling, Components of Auto-Scaling',
            'content3':'Lifecycle of Auto-Scaling, Auto-Scaling policy',
            'content4':'Working of Route 53,Various Routing Policies',
            'content5':'Examples on this topic'
          }],
        },
        {
          'headerName':'Database Services And Analytics',
          'LearningObjectives':' In this module, you will learn about the different database services offered by AWS to handle structured and unstructured data. This module also gives you knowledge on how to analyze your data. ',
          'listofContent':[{
            'content1':'Amazon RDS and its benefits, Aurora, DynamoDB',
            'content2':'ElastiCache,Amazon RedShift, AWS Kinesis',
            'content3':'Storing an application data in MySQL DB using Relational Database Service (RDS)',
            'content4':'Creating Tables, loading sample data and running queries, Redis Cache',
            'content5':'Visualize the web traffic using Kinesis Data Stream'
            
          }],
        },
        {
          'headerName':'Networking And Monitoring Services',
          'LearningObjectives':'This module introduces you to the Amazon Virtual Private Cloud. You will learn to implement networking using public and private subnets with VPC. Also, this module demonstrates how to monitor your services.',
          'listofContent':[{
            'content1':'VPC – Benefits and Components, CIDR Notations, VPC peering, AWS CloudWatch,CloudTrail,  Trusted Advisor',
            'content2':'Network Access Control List v/s Security Groups, NAT – Network Address Translation',
            'content3':'Create a Non-default VPC and attach it to an EC2 instance, Accessing Internet Inside Private Subnet Using NAT Gateway',
            'content4':'Enable CloudTrail and Store Logs in S3, Explore the Trusted Advisor',
            'content5':'Connect two instances in different VPC’s using VPC peering, Monitoring an EC2 instance using CloudWatch'
          }],
        },
        {
          'headerName':'Applications Services And AWS Lambda',
          'LearningObjectives':'In this module, you will learn about the different Application services offered by AWS, that are used for sending e-mails, notifications, and processing message queues. This module also deals with the latest trend of Serverless architecture using AWS Lambda. ',
          'listofContent':[{
            'content1':'AWS Simple Email Service (SES), Simple Notification Service (SNS)',
            'content2':'AWS Simple Queue Service (SQS), Simple Work Flow (SWF)',
            'content3':'AWS Lambda, Send an email through AWS SES',
            'content4':'Send a notification through SNS, Send an e-mail through Lambda when an object is added to S3',
            'content5':'Send a notification through Lambda when a message is sent to SQS'
          }],
        },
        {
          'headerName':'Configuration Management and Automation',
          'LearningObjectives':'This module helps you gain knowledge on various AWS services and tools used for configuration management and Automation.',
          'listofContent':[{
            'content1':'AWS CloudFormation, AWS Elastic Beanstalk',
            'content2':'AWS OpsWorks - OpsWorks for Chef Automate, OpsWorks for Stack, OpsWorks for Puppet Enterprises',
            'content3':'Differentiate between CloudFormation, OpsWorks, and Beanstalk',
            'content4':'Installation of LAMP server in EC2 through CloudFormation, AWS OpsWorks Stack',
            'content5':'Deploy a Web Application with DynamoDB using Beanstalk'
          }],
        }],
      }],
    }];
  }
}
