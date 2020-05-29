import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactDataService {
  private contactSource = new BehaviorSubject({ contact: null, key: '' });
  public currentContact = this.contactSource.asObservable();

  constructor() {}

  changeContact(contact: Contact, key: string) {
    this.contactSource.next({ contact, key });
  }
}
