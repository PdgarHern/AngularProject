import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/modelos/contacto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})





export class ContactComponent implements OnInit {

  public contact: Contact;

  constructor() {
    this.contact = new Contact();
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.contact.name + ", " + this.contact.email + ", " + this.contact.text);
  }

}
