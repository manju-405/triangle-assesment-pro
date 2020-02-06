import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  userDetails = [
    {
      username: 'sample@sample.com',
      email: 'sample@sample.com',
      password: 'sample@123',
      display: '',
      firstname: '',
      lastname: '',
      nickname: '',
      website: '',
      bio: '',
      jabber: '',
      aolim: '',
      yahooim: '',
    },
    {
      username: 'sample1@sample.com',
      email: 'sample1@gmail.com',
      password: 'sample@123',
      display: '',
      firstname: '',
      lastname: '',
      nickname: '',
      website: '',
      bio: '',
      jabber: '',
      aolim: '',
      yahooim: '',
    },

  ]
  constructor() { }

  getAllUsersData = () => {
    return new Promise((resolve, reject) => {
      if (this.userDetails.length > 0) {
        resolve(this.userDetails);
      } else {
        reject("User Data Not Found");
      }
    });
  }
  postUsersData = (userdata) => {
    return new Promise((resolve, reject) => {
      this.userDetails.push(userdata);
      resolve(this.userDetails);
    });
  }

  findUser = (username, password) => {
    return new Promise((resolve, reject) => {
      const index = this.userDetails.findIndex(user => ((user.username === username || user.email === username) && user.password === password));
      if (index < 0) {
        reject("Invalid User");
      } else {
        resolve(this.userDetails[index]);
      }
    });
  }
}
