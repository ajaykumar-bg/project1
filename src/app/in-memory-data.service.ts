import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users: User[] = [
      { id: 11, fname: 'Mr. Nice', lname: '', age: 20, email: 'a@b.com' },
      { id: 12, fname: 'Narco', lname: '', age: 20, email: 'a@b.com' },
      { id: 13, fname: 'Bombasto', lname: '', age: 20, email: 'a@b.com' },
      { id: 14, fname: 'Celeritas', lname: '', age: 20, email: 'a@b.com' },
      { id: 15, fname: 'Magneta', lname: '', age: 20, email: 'a@b.com' },
      { id: 16, fname: 'RubberMan', lname: '', age: 20, email: 'a@b.com' },
      { id: 17, fname: 'Dynama', lname: '', age: 20, email: 'a@b.com' },
      { id: 18, fname: 'Dr IQ', lname: '', age: 20, email: 'a@b.com' },
      { id: 19, fname: 'Magma', lname: '', age: 20, email: 'a@b.com' },
      { id: 20, fname: 'Tornado', lname: '', age: 20, email: 'a@b.com' }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a user always has an id.
  // If the users array is empty,
  // the method below returns the initial number (11).
  // if the users array is not empty, the method below returns the highest
  // user id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }

  constructor() { }
}
