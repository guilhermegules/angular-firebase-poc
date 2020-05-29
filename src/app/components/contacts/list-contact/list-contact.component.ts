import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ContactDataService } from './../../../shared/services/contact-data.service';
import { ContactService } from './../../../shared/services/contact.service';
import { Contact } from './../../../shared/models/contact';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss'],
})
export class ListContactComponent implements OnInit {
  public contacts$: Observable<any>;

  constructor(
    private contactService: ContactService,
    private contactDataService: ContactDataService
  ) {}

  ngOnInit(): void {
    this.contacts$ = this.contactService.getAll();
  }

  public deleteContact(key: string): void {
    this.contactService.delete(key);
  }

  public editContact(contact: Contact, key: string): void {
    this.contactDataService.changeContact(contact, key);
  }
}
