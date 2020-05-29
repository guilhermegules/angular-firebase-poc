import { Contact } from './../models/contact';
export interface ServiceDAO {
  insert(contact: Contact): void;
  update(contact: Contact, key: string): void;
  getAll<T>(): T;
  delete(key: string): void;
}
