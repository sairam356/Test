import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllcoursedetailsService {
  constructor() { }
  getallcoursedetails(){
    return [{
      'java': [
        {
          'MainHeadingCourse':'Java, J2EE & SOA Certification Training',
          'CourseDescription' :'Java Certification Training is curated by the professionals as per the industrial requirements & demands. Java Online Training encompasses comprehensive knowledge on basic and advanced concepts of core Java & Java EE along with popular frameworks like Hibernate, Spring, and SOA. In this course, you will gain expertise in the concepts like Java Array, Java OOPs, Java Function, Java Loops, Java Collections, Java Thread, Java Servlet, Java Design Patterns, and Web Services using industry use-cases.',
          'VideoUrl':'https://www.youtube.com/watch?v=3u1fu6f8Hto',
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
            'collapseId':'collapseOne',
            'collapseHeaderId':'headingOne',
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
                'content4':'String Handling - String, String Buffer'
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
          }
        ],  

        }],
      'node': [
        {
          'HeadingName':'Node Course',
          'ImageUrl' :'',
          'VideoUrl':''      
        } 
      ]
    }];
  }
}
