import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ServiceDAO } from './../interfaces/serviceDAO';
import { Contact } from './../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService implements ServiceDAO {
  constructor(private database: AngularFireDatabase) {}

  insert(contact: Contact) {
    this.database
      .list('contact')
      .push(contact)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(contact: Contact, key: string) {
    this.database
      .list('contact')
      .update(key, contact)
      .catch((error: any) => {
        console.log(error);
      });
  }

  getAll(): any {
    return this.database
      .list('contact')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((contact) => ({
            key: contact.payload.key,
            ...contact.payload.val() as {},
          }))
        )
      );
  }

  delete(key: string) {
    this.database.object(`contact/${key}`).remove();
  }
}
