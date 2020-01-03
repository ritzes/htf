import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  firstName;
  email;
  phone;
  comment

  constructor(){}
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
}
}
