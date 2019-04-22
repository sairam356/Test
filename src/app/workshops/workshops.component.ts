import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import {Contact} from'../allcoursedetails.service';
@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
  // registerForm: FormGroup;
  // appstatus='default';
  // display='none';
  // contacts: Array<Contact>;
  // constructor(private formBuilder: FormBuilder) { this.contacts = []; }
  // onCloseHandled(){
  //   this.display='none';
  // }
  // openModal(){
  //   this.display='block'; 
  // }
  ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     phone:'',
  //     dob:'',
  //     company:''
  //   });
  }
  // addContact(name,phone,dob,company){
  //   let contact = new Contact(name,phone,dob,company);
  //   this.contacts.push(contact);
  // }
  // removeContact(contact){
  //   for(var i=0;i<this.contacts.length;i++){
  //     if(this.contacts[i].name == contact.name){
  //       console.log(contact.name)
  //       this.contacts.splice(i,1);
  //     }
  //   }
  // }
}
