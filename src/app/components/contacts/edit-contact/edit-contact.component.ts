import { ContactService } from './../../../shared/services/contact.service';
import { ContactDataService } from './../../../shared/services/contact-data.service';
import { Contact } from './../../../shared/models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  public contact: Contact;
  public key: string;

  constructor(
    private contactDataService: ContactDataService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contact = new Contact();
    this.contactDataService.currentContact.subscribe((data) => {
      if (data.contact && data.key) {
        this.contact = new Contact();
        this.contact.name = data.contact.name;
        this.contact.telephone = data.contact.telephone;
        this.key = data.key;
      }
    });
  }

  public onSubmit(): void {
    if (this.key) {
      this.contactService.update(this.contact, this.key);
    } else {
      this.contactService.insert(this.contact);
    }
    this.contact = new Contact();
  }
}
