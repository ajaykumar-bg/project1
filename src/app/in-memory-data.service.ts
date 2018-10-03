import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users: User[] = [
      { id: 11, fname: 'Ajay Kumar', lname: 'BG', age: 28, email: 'ajay@pro.com' },
      { id: 12, fname: 'Mufsir', lname: 'AK', age: 28, email: 'mufsir@pro.com' },
      { id: 13, fname: 'Manu', lname: 'Sithara', age: 27, email: 'manu@pro.com' },
      { id: 14, fname: 'Dhanil', lname: 'R', age: 30, email: 'dhanil@pro.com' },
      { id: 15, fname: 'Neethu', lname: 'J', age: 26, email: 'neethu@pro.com' },
      { id: 16, fname: 'Vaibhavi', lname: 'Belur', age: 27, email: 'vaibhavi@pro.com' },
      { id: 17, fname: 'Lovin', lname: 'Chacko', age: 24, email: 'lovin@pro.com' },
      { id: 18, fname: 'Aleena', lname: 'Chacko', age: 26, email: 'aleena@pro.com' },
      { id: 19, fname: 'Midhun', lname: 'Mohan', age: 26, email: 'midhun@pro.com' },
      { id: 20, fname: 'Sneha', lname: 'Susan', age: 26, email: 'sneha@pro.com' }
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
