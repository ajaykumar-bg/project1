import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users: User[] = [
      { id: 11, firstName: 'Ajay Kumar', lastName: 'BG', age: 28, email: 'ajay@pro.com' },
      { id: 12, firstName: 'Mufsir', lastName: 'AK', age: 28, email: 'mufsir@pro.com' },
      { id: 13, firstName: 'Manu', lastName: 'Sithara', age: 27, email: 'manu@pro.com' },
      { id: 14, firstName: 'Dhanil', lastName: 'R', age: 30, email: 'dhanil@pro.com' },
      { id: 15, firstName: 'Neethu', lastName: 'J', age: 26, email: 'neethu@pro.com' },
      { id: 16, firstName: 'Vaibhavi', lastName: 'Belur', age: 27, email: 'vaibhavi@pro.com' },
      { id: 17, firstName: 'Lovin', lastName: 'Chacko', age: 24, email: 'lovin@pro.com' },
      { id: 18, firstName: 'Aleena', lastName: 'Chacko', age: 26, email: 'aleena@pro.com' },
      { id: 19, firstName: 'Midhun', lastName: 'Mohan', age: 26, email: 'midhun@pro.com' },
      { id: 20, firstName: 'Sneha', lastName: 'Susan', age: 26, email: 'sneha@pro.com' }
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
